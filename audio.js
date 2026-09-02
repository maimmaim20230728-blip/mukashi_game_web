'use strict';
/* 音まわり: 生成BGM(場面連動・和/欧/露セット) + 効果音(カットイン/技ごと)
   ・すべてWeb Audioでその場生成(音源ファイル無し=軽量・完全オフライン)
   ・日本の話には日本の音: 琴(爪弾き)・笛・太鼓・鼓・鈴を合成し、
     陽旋法/陰旋法のパターンで鳴らす。西洋和音のパッドは使わない。
     ※将来、話ごとに音セットを足す(こぶた=洋風など)。TRACKSを差し替えられる構造。
   ・作法は seido_guide/js/audio.js 準拠:
     🔴起動しただけでは鳴らさない(最初のタップから)
     🔴resume()は非同期。thenで開始判定をやり直す
     🔴画面を離れている間は suspend
     🔴止めるときは素早く(約0.25秒+予約オシレータもstop)
     🔴音量ゼロの人には AudioContext を作らない */
var Sound = (function () {
  var ctx = null;
  var bgmVol = 0.7, seVol = 0.7;
  var playing = false;
  var curTrack = 'home';
  var master = null, bgmBus = null, seBus = null;
  var timer = 0, nextBar = 0, barIdx = 0;
  var live = [];
  var noiseBuf = null;

  /* ---- 音名(Hz) ---- */
  var D2=73.42, Eb2=77.78, E2=82.41, F2=87.31, G2=98.00, A2=110.00,
      C3=130.81, D3=146.83, E3=164.81, F3=174.61, G3=196.00, A3=220.00, B3=246.94, C4=261.63,
      D4=293.66, E4=329.63, F4=349.23, G4=392.00, A4=440.00, B4=493.88, C5=523.25,
      D5=587.33, E5=659.25, F5=698.46, G5=783.99, A5=880.00;

  /* ---------------- BGMトラック定義(和風) ----------------
     bar: 1小節の秒数 / 位置は小節内の割合(0〜1)
     koto: [位置, 音, 音量倍率?] / fue: [位置, 音, 長さ(小節比)]
     taiko,tsuzumi,suzu: [位置...] / drone: 低音の持続音
     fueAlt: 偶数小節と奇数小節で笛の旋律を交互に */
  var TRACKS = {
    /* 里の日常: 陽旋法・のどかな琴と笛 */
    home: { bar: 4.8, vol: 0.05,
      koto: [[0,D3],[.125,A3],[.25,D4],[.375,E4],[.5,G4],[.625,E4],[.75,D4],[.875,A3]],
      fue: [[.5,A4,.4]], fueAlt: [[.2,G4,.3],[.6,E4,.35]],
      suzu: [.94], taiko: [], tsuzumi: [], drone: null },
    /* 旅立ち: 祭囃子風・太鼓と鼓 */
    travel: { bar: 2.6, vol: 0.05,
      koto: [[0,D4],[.25,G4],[.5,A4],[.75,B4]],
      fue: [[0,D5,.22],[.5,B4,.22]], fueAlt: [[0,A4,.45]],
      suzu: [], taiko: [0,.5,.75], tsuzumi: [.25], drone: null },
    /* 夜の海: 尺八風の長い音と、まばらな琴 */
    night: { bar: 6.0, vol: 0.042,
      koto: [[.15,D4,.7],[.7,A3,.7]],
      fue: [[0,A3,.5]], fueAlt: [[.3,D4,.55]],
      suzu: [.5], taiko: [], tsuzumi: [], drone: D2 },
    /* 鬼ヶ島・対決: 太鼓と低い琴・陰旋法 */
    tense: { bar: 3.0, vol: 0.05,
      koto: [[0,D2,1.4],[.25,D2,1.1],[.5,Eb2,1.4],[.75,D2,1.1]],
      fue: [[.5,F4,.28]], fueAlt: [],
      suzu: [], taiko: [0,.5,.625], tsuzumi: [], drone: null },
    /* 結末: ゆったりの琴と鈴 */
    warm: { bar: 5.4, vol: 0.048,
      koto: [[0,G3],[.16,D4],[.33,G4],[.5,B4],[.66,A4],[.83,D4]],
      fue: [[.4,D5,.4]], fueAlt: [],
      suzu: [0,.5], taiko: [], tsuzumi: [], drone: null },
    /* おにがしまの くらし: 陰旋法・間の多い ものがなしさ */
    oni: { bar: 6.0, vol: 0.045,
      koto: [[0,E3],[.4,A3],[.75,B3]],
      fue: [[.2,E4,.6]], fueAlt: [[.5,C4,.5]],
      suzu: [], taiko: [], tsuzumi: [], drone: E2 },
    /* キジの そら: 高い笛と かろやかな鼓 */
    kiji: { bar: 2.8, vol: 0.046,
      koto: [[0,D4],[.5,A4]],
      fue: [[0,A5,.18],[.25,G5,.18],[.5,E5,.3]], fueAlt: [[0,D5,.5]],
      suzu: [.75], taiko: [], tsuzumi: [0,.5], drone: null },

    /* ---- 欧州セット(あかずきん) ---- */
    /* 家: オルゴール風の高いアルペジオ */
    eu_home: { bar: 4.4, vol: 0.042,
      koto: [[0,C5],[.125,E5],[.25,G5],[.375,E5],[.5,A5],[.625,G5],[.75,E5],[.875,G5]],
      kotoAlt: [[0,B4],[.125,D5],[.25,G5],[.375,D5],[.5,F5],[.625,D5],[.75,B4],[.875,D5]],
      fue: [], fueAlt: [], suzu: [0], taiko: [], tsuzumi: [], drone: C3 },
    /* 森: 3拍子の牧歌(ワルツバス+笛) */
    eu_mori: { bar: 2.7, vol: 0.046,
      koto: [[0,F3,1.4],[.33,A4,.9],[.36,C5,.9],[.66,A4,.9],[.69,C5,.9]],
      kotoAlt: [[0,C3,1.4],[.33,G4,.9],[.36,B4,.9],[.66,G4,.9],[.69,B4,.9]],
      fue: [[0,A4,.6]], fueAlt: [[0,G4,.3],[.5,C5,.4]],
      suzu: [], taiko: [], tsuzumi: [], drone: null },
    /* オオカミ: 低い半音の忍び足 */
    eu_wolf: { bar: 3.2, vol: 0.048,
      koto: [[0,E2,1.5],[.25,E2,1.1],[.5,F2,1.5],[.75,E2,1.1]],
      fue: [[.5,B3,.28]], fueAlt: [],
      suzu: [], taiko: [], tsuzumi: [], drone: null },
    /* 冬: さびしく ひろい */
    eu_fuyu: { bar: 6.0, vol: 0.040,
      koto: [[.1,A3,.8],[.55,E4,.7]],
      fue: [[.3,A3,.5]], fueAlt: [[.6,E4,.5]],
      suzu: [.8], taiko: [], tsuzumi: [], drone: A2 },
    /* 救出: ホルン風の あかるい しらせ */
    eu_sukui: { bar: 3.4, vol: 0.048,
      koto: [[0,C3,1.3],[.5,G3,1.1]],
      fue: [[0,C4,.26],[.22,E4,.26],[.44,G4,.5]], fueAlt: [[0,G4,.6]],
      suzu: [.9], taiko: [], tsuzumi: [], drone: null },
    /* 結末: ゆったりの ワルツ */
    eu_owari: { bar: 2.6, vol: 0.044,
      koto: [[0,G2,1.5],[.33,B3,.9],[.36,D4,.9],[.66,B3,.9],[.69,D4,.9]],
      kotoAlt: [[0,C3,1.5],[.33,C4,.9],[.36,E4,.9],[.66,C4,.9],[.69,E4,.9]],
      fue: [[0,D5,.5]], fueAlt: [[0,B4,.3],[.5,G4,.4]],
      suzu: [0], taiko: [], tsuzumi: [], drone: null },

    /* ---- ロシアセット(おおきなかぶ)。バラライカ風=同音2連打の爪弾き ---- */
    /* 畑: のどかな短調の民謡 */
    ru_hatake: { bar: 4.4, vol: 0.044,
      koto: [[0,D4],[.06,D4],[.25,F4],[.31,F4],[.5,A4],[.56,A4],[.75,F4],[.81,F4]],
      kotoAlt: [[0,C4],[.06,C4],[.25,E4],[.31,E4],[.5,G4],[.56,G4],[.75,E4],[.81,E4]],
      fue: [[.5,D5,.35]], fueAlt: [[.25,A4,.3],[.62,F4,.3]],
      suzu: [], taiko: [], tsuzumi: [], drone: null },
    /* 引っぱり: 低音の踏んばり+刻み */
    ru_pull: { bar: 2.0, vol: 0.048,
      koto: [[0,D3,1.4],[.25,D4],[.31,D4],[.5,D3,1.2],[.75,D4],[.81,D4]],
      fue: [[0,A4,.25],[.5,G4,.25]], fueAlt: [[0,F4,.5]],
      suzu: [], taiko: [0,.5], tsuzumi: [.25,.75], drone: null },
    /* 土の中(かぶ視点): こもって ぬくぬく */
    ru_kabu: { bar: 5.6, vol: 0.040,
      koto: [[.1,D3,.9],[.6,A3,.8]],
      fue: [[.3,F4,.5]], fueAlt: [[.65,E4,.4]],
      suzu: [], taiko: [], tsuzumi: [], drone: D2 },
    /* お祝い: カリンカ風に はやい */
    ru_win: { bar: 1.7, vol: 0.046,
      koto: [[0,D4],[.05,D4],[.25,A4],[.3,A4],[.5,D5],[.55,D5],[.75,A4],[.8,A4]],
      kotoAlt: [[0,G4],[.05,G4],[.25,B4],[.3,B4],[.5,G5],[.55,G5],[.75,B4],[.8,B4]],
      fue: [[0,F5,.3]], fueAlt: [[0,E5,.15],[.33,D5,.15],[.66,C5,.2]],
      suzu: [0], taiko: [0,.5], tsuzumi: [.25,.75], drone: null },
    /* ねずみ: ちょこちょこ高音 */
    ru_nezumi: { bar: 2.4, vol: 0.038,
      koto: [[0,A5],[.125,G5],[.25,A5],[.5,E5],[.625,G5],[.75,A5]],
      fue: [], fueAlt: [],
      suzu: [.25,.75], taiko: [], tsuzumi: [0,.5], drone: null },

    /* ---- 和風追加(うらしまたろう) ---- */
    /* 浜辺: 6/8の ゆりかごのような 波のリズム */
    ura_umi: { bar: 5.4, vol: 0.044,
      koto: [[0,D3,1.1],[.083,A3],[.167,D4],[.25,E4],[.333,D4],[.417,A3],
             [.5,G3,1.1],[.583,B3],[.667,D4],[.75,E4],[.833,D4],[.917,B3]],
      kotoAlt: [[0,D3,1.1],[.083,A3],[.167,D4],[.25,E4],[.333,D4],[.417,A3],
                [.5,A2,1.1],[.583,A3],[.667,C4,.9],[.75,E4],[.833,C4,.9],[.917,A3]],
      fue: [[.5,A4,.42]], fueAlt: [[.12,B4,.28],[.58,G4,.34]],
      suzu: [], taiko: [], tsuzumi: [], drone: D2 },
    /* 竜宮: 鈴と高音の琴が きらきら ゆらめく 幻想 */
    ura_ryugu: { bar: 6.4, vol: 0.040,
      koto: [[0,A3,.9],[.125,E4,.7],[.25,A4,.7],[.375,B4,.6],
             [.5,C5,.7],[.625,B4,.6],[.75,A4,.6],[.875,E4,.6]],
      kotoAlt: [[0,G3,.9],[.125,D4,.7],[.25,G4,.7],[.375,A4,.6],
                [.5,B4,.7],[.625,A4,.6],[.75,G4,.6],[.875,D4,.6]],
      fue: [[.3,E5,.5]], fueAlt: [[.55,C5,.45]],
      suzu: [0,.5], taiko: [], tsuzumi: [], drone: A2 },

    /* ---- 欧風追加(さんびきのこぶた)。🔴3拍子の童謡調は使わない(既存楽曲想起の防止) ---- */
    /* こぶたの日常・旅立ち: 4拍子の かろやかな マーチ */
    buta_march: { bar: 2.4, vol: 0.046,
      koto: [[0,C3,1.3],[.125,E4,.8],[.25,G3],[.375,G4,.8],
             [.5,E3,1.2],[.625,E4,.8],[.75,G3],[.875,G4,.8]],
      kotoAlt: [[0,F3,1.3],[.125,F4,.8],[.25,A3],[.375,A4,.8],
                [.5,C3,1.2],[.625,G4,.8],[.75,G3],[.875,B4,.8]],
      fue: [[0,C5,.2],[.25,E5,.2],[.5,G5,.35]], fueAlt: [[0,D5,.2],[.25,C5,.2],[.5,E5,.4]],
      suzu: [], taiko: [0,.5], tsuzumi: [.25,.75], drone: null },
    /* 建築: 木琴風の トンカン 2連打 */
    buta_ton: { bar: 2.0, vol: 0.046,
      koto: [[0,C4],[.125,C4],[.25,E4],[.5,G4],[.625,G4],[.75,E4]],
      kotoAlt: [[0,D4],[.125,D4],[.25,F4],[.5,A4],[.625,A4],[.75,F4]],
      fue: [[.5,C5,.2]], fueAlt: [],
      suzu: [], taiko: [0,.5], tsuzumi: [.25,.75], drone: null },
    /* だまし合い・追いかけっこ: はやい 8ぶ */
    buta_oikake: { bar: 1.6, vol: 0.044,
      koto: [[0,C4],[.125,E4],[.25,G4],[.375,E4],[.5,A4],[.625,G4],[.75,E4],[.875,D4]],
      kotoAlt: [[0,D4],[.125,F4],[.25,A4],[.375,F4],[.5,B4],[.625,A4],[.75,F4],[.875,E4]],
      fue: [[0,E5,.15],[.5,G5,.2]], fueAlt: [[0,C5,.3]],
      suzu: [], taiko: [0,.5], tsuzumi: [0,.25,.5,.75], drone: null },

    /* ---- 欧風追加(ヘンゼルとグレーテル) ---- */
    /* おかしの いえ: オルゴールと 鈴の きらきら(あまい 4拍子) */
    hg_okashi: { bar: 3.2, vol: 0.042,
      koto: [[0,C5,.8],[.125,E5,.7],[.25,G5,.7],[.375,C5,.6],[.5,A4,.8],[.625,C5,.7],[.75,E5,.7],[.875,A4,.6]],
      kotoAlt: [[0,F4,.8],[.125,A4,.7],[.25,C5,.7],[.375,F4,.6],[.5,G4,.8],[.625,B4,.7],[.75,D5,.7],[.875,G4,.6]],
      fue: [[.25,E5,.3],[.75,G5,.25]], fueAlt: [[.25,C5,.5]],
      suzu: [0,.5], taiko: [], tsuzumi: [], drone: null },
    /* まじょの いえの なか: 低音の しのびあし + はねる アクセント(ぶきみ だが わらえる) */
    hg_majo: { bar: 2.8, vol: 0.046,
      koto: [[0,E2,1.4],[.25,E2,1.0],[.5,F2,1.3],[.625,G2,.9],[.75,E2,1.0]],
      kotoAlt: [[0,A2,1.4],[.25,A2,1.0],[.5,G2,1.3],[.625,F2,.9],[.75,E2,1.0]],
      fue: [[.5,B3,.2],[.7,C4,.15]], fueAlt: [[.4,E4,.35]],
      suzu: [.875], taiko: [], tsuzumi: [0,.5], drone: null },

    /* ---- 和風追加(かぐやひめ)。🔴陽気な来迎演出・サンバ調は使わない ---- */
    /* みやび: 笙の持続和音(笛3音重ね) + 琴の ゆっくりした 爪弾き(平安の御殿) */
    kg_miyabi: { bar: 6.4, vol: 0.040,
      koto: [[0,D3,1.0],[.25,A3,.8],[.5,D4,.8],[.75,E4,.7]],
      kotoAlt: [[0,A2,1.0],[.25,E3,.8],[.5,A3,.8],[.75,B3,.7]],
      fue: [[0,D4,.95],[0,A4,.95],[0,E5,.95]], fueAlt: [[0,E4,.95],[0,B4,.95],[0,D5,.95]],
      suzu: [.5], taiko: [], tsuzumi: [], drone: D2 },
    /* つき: 使者の降臨・昇天(ura_ryuguより おごそかで おそい。鈴 + 高音の琴 + 低い drone) */
    kg_tsuki: { bar: 8.0, vol: 0.040,
      koto: [[0,E4,.7],[.2,B4,.6],[.4,E5,.6],[.6,B4,.5],[.8,E4,.5]],
      kotoAlt: [[0,D4,.7],[.2,A4,.6],[.4,D5,.6],[.6,A4,.5],[.8,D4,.5]],
      fue: [[.1,B4,.7]], fueAlt: [[.3,E5,.6]],
      suzu: [0,.5], taiko: [], tsuzumi: [], drone: E2 },

    /* ---- 欧風追加(ブレーメンの おんがくたい)。段階合奏=同じ土台に楽器を1つずつ足した4段 ---- */
    /* 1段: ロバだけ(低音の琴 + drone) */
    br_g1: { bar: 2.8, vol: 0.046,
      koto: [[0,D3,1.3],[.5,A2,1.1],[.75,D3,.9]],
      fue: [], fueAlt: [], suzu: [], taiko: [], tsuzumi: [], drone: D2 },
    /* 2段: + イヌ(太鼓と鼓) */
    br_g2: { bar: 2.8, vol: 0.046,
      koto: [[0,D3,1.3],[.5,A2,1.1],[.75,D3,.9]],
      fue: [], fueAlt: [], suzu: [], taiko: [0,.5], tsuzumi: [.25,.75], drone: D2 },
    /* 3段: + ネコ(笛の旋律) */
    br_g3: { bar: 2.8, vol: 0.046,
      koto: [[0,D3,1.3],[.5,A2,1.1],[.75,D3,.9]],
      fue: [[0,D5,.2],[.25,F5,.2],[.5,A5,.35]], fueAlt: [[0,E5,.2],[.25,D5,.2],[.5,F5,.4]],
      suzu: [], taiko: [0,.5], tsuzumi: [.25,.75], drone: D2 },
    /* 4段: + オンドリ(鈴と高音の琴) = 4ひきの がっしょう */
    br_g4: { bar: 2.8, vol: 0.046,
      koto: [[0,D3,1.3],[.25,A4,.8],[.5,A2,1.1],[.625,D5,.8],[.75,D3,.9],[.875,F5,.7]],
      kotoAlt: [[0,D3,1.3],[.25,F4,.8],[.5,A2,1.1],[.625,A4,.8],[.75,D3,.9],[.875,D5,.7]],
      fue: [[0,D5,.2],[.25,F5,.2],[.5,A5,.35]], fueAlt: [[0,E5,.2],[.25,D5,.2],[.5,F5,.4]],
      suzu: [.25,.75], taiko: [0,.5], tsuzumi: [.25,.75], drone: D2 },

    /* ---- 和風追加(じゅうにしの はじまり) ---- */
    /* がんたん: 鈴と笛の はれやかな あさ(ゆっくり4拍子・陽旋法) */
    ju_gantan: { bar: 4.0, vol: 0.044,
      koto: [[0,D3,1.1],[.25,A3],[.5,D4],[.75,E4]],
      kotoAlt: [[0,G3,1.1],[.25,D4],[.5,G4],[.75,A4]],
      fue: [[0,A4,.3],[.5,D5,.45]], fueAlt: [[.25,B4,.3],[.5,A4,.25],[.75,G4,.2]],
      suzu: [0,.5], taiko: [], tsuzumi: [.75], drone: null },
    /* かけっこ: はやい 太鼓と 鼓・にぎやか(勝負の緊迫ではなく お祭りの かけあし) */
    ju_kake: { bar: 1.5, vol: 0.046,
      koto: [[0,D4],[.25,A4],[.5,D5],[.75,A4]],
      kotoAlt: [[0,G4],[.25,B4],[.5,D5],[.75,B4]],
      fue: [[0,A5,.15],[.5,D5,.2]], fueAlt: [[0,G5,.15],[.25,A5,.15],[.5,B4,.25]],
      suzu: [.5], taiko: [0,.5,.75], tsuzumi: [.25], drone: null },

    /* ---- 和風追加(つるの おんがえし) ---- */
    /* はたおり: トン(太鼓)・カラ(鼓2連)・リ(高音の琴)。障子越しに聞く音なので笛なし */
    ts_hata: { bar: 2.6, vol: 0.042,
      koto: [[.28,A5,.5],[.78,A5,.5]],
      kotoAlt: [[.28,E5,.5],[.78,A5,.5]],
      fue: [], fueAlt: [],
      suzu: [], taiko: [0,.5], tsuzumi: [.14,.2,.64,.7], drone: null },
    /* ゆきの よる: 陰旋法(ミ・ファ・ラ・シ・ド)・笛の長音・まばらな鈴・低いドローン */
    ts_yuki: { bar: 7.5, vol: 0.04,
      koto: [[0,E3,1.6],[.5,A3,1.4]],
      kotoAlt: [[0,E3,1.6],[.5,B3,1.4]],
      fue: [[.05,E4,1.6],[.4,F4,.9],[.6,A4,1.8]], fueAlt: [[.05,B4,1.4],[.35,A4,.8],[.55,E4,2.0]],
      suzu: [.3,.85], taiko: [], tsuzumi: [], drone: E2 }
  };

  function ensure() {
    if (bgmVol <= 0 && seVol <= 0) return;
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; }
      if (ctx) {
        master = ctx.createGain(); master.gain.value = 1; master.connect(ctx.destination);
        bgmBus = ctx.createGain(); bgmBus.gain.value = bgmVol; bgmBus.connect(master);
        seBus = ctx.createGain(); seBus.gain.value = seVol; seBus.connect(master);
      }
    }
    if (ctx && ctx.state === 'suspended') {
      try { ctx.resume().then(function () { maybeStartBgm(); }).catch(function () {}); } catch (e) {}
    }
  }

  function trackOsc(o) {
    live.push(o);
    o.onended = function () { var i = live.indexOf(o); if (i >= 0) live.splice(i, 1); };
  }

  function getNoise() {
    if (noiseBuf) return noiseBuf;
    var len = Math.floor(ctx.sampleRate * 0.5);
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
  }

  /* ---- 和楽器(BGM用) ---- */
  /* 琴: するどい立ち上がり+はやい減衰+2倍音 */
  function koto(f, t, vol) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    o.connect(g); g.connect(bgmBus);
    o.start(t); o.stop(t + 1.0); trackOsc(o);
    var o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.type = 'sine'; o2.frequency.value = f * 2;
    g2.gain.setValueAtTime(0.0001, t);
    g2.gain.linearRampToValueAtTime(vol * 0.35, t + 0.01);
    g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    o2.connect(g2); g2.connect(bgmBus);
    o2.start(t); o2.stop(t + 0.5); trackOsc(o2);
  }
  /* 笛: ゆっくり立ち上がる sine+ビブラート+息のノイズ */
  function fue(f, t, dur, vol) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = f;
    var lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = 5.2; lg.gain.value = f * 0.012;
    lfo.connect(lg); lg.connect(o.frequency);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + dur * 0.3);
    g.gain.linearRampToValueAtTime(vol * 0.8, t + dur * 0.7);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(bgmBus);
    o.start(t); o.stop(t + dur + 0.05); trackOsc(o);
    lfo.start(t); lfo.stop(t + dur + 0.05); trackOsc(lfo);
    var s = ctx.createBufferSource(), sg = ctx.createGain(), hp = ctx.createBiquadFilter();
    s.buffer = getNoise(); hp.type = 'highpass'; hp.frequency.value = 5000;
    sg.gain.setValueAtTime(vol * 0.12, t);
    sg.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
    s.connect(hp); hp.connect(sg); sg.connect(bgmBus);
    s.start(t); s.stop(t + 0.2);
  }
  /* 太鼓 */
  function taiko(t, vol) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(105, t);
    o.frequency.exponentialRampToValueAtTime(46, t + 0.16);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);
    o.connect(g); g.connect(bgmBus);
    o.start(t); o.stop(t + 0.28); trackOsc(o);
  }
  /* 鼓: 高めのポン */
  function tsuzumi(t, vol) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(330, t);
    o.frequency.exponentialRampToValueAtTime(230, t + 0.08);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(g); g.connect(bgmBus);
    o.start(t); o.stop(t + 0.15); trackOsc(o);
  }
  /* 鈴 */
  function suzu(t, vol) {
    [2800, 4200].forEach(function (f, i) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(vol * (i ? 0.4 : 0.7), t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      o.connect(g); g.connect(bgmBus);
      o.start(t); o.stop(t + 0.7); trackOsc(o);
    });
  }

  /* ---------------- BGMスケジューラ ---------------- */
  function scheduleBar(t) {
    var p = TRACKS[curTrack] || TRACKS.home;
    var odd = (barIdx % 2) === 1;
    barIdx++;
    var kt = (odd && p.kotoAlt && p.kotoAlt.length) ? p.kotoAlt : (p.koto || []);
    kt.forEach(function (n) { koto(n[1], t + n[0] * p.bar, p.vol * (n[2] || 1)); });
    var mel = (odd && p.fueAlt && p.fueAlt.length) ? p.fueAlt : (p.fue || []);
    mel.forEach(function (n) { fue(n[1], t + n[0] * p.bar, n[2] * p.bar, p.vol * 0.9); });
    (p.taiko || []).forEach(function (b) { taiko(t + b * p.bar, p.vol * 3.4); });
    (p.tsuzumi || []).forEach(function (b) { tsuzumi(t + b * p.bar, p.vol * 2.2); });
    (p.suzu || []).forEach(function (b) { suzu(t + b * p.bar, p.vol * 0.9); });
    if (p.drone) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = p.drone;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(p.vol * 0.8, t + p.bar * 0.3);
      g.gain.linearRampToValueAtTime(0.0001, t + p.bar * 1.1);
      o.connect(g); g.connect(bgmBus);
      o.start(t); o.stop(t + p.bar * 1.15); trackOsc(o);
    }
  }

  function startBgm() {
    ensure();
    if (!ctx || playing || bgmVol <= 0) return;
    if (ctx.state === 'suspended') return;
    playing = true; barIdx = 0;
    var p = TRACKS[curTrack] || TRACKS.home;
    bgmBus.gain.cancelScheduledValues(ctx.currentTime);
    bgmBus.gain.setValueAtTime(0.0001, ctx.currentTime);
    bgmBus.gain.linearRampToValueAtTime(bgmVol, ctx.currentTime + 0.6);
    nextBar = ctx.currentTime + 0.1;
    scheduleBar(nextBar); nextBar += p.bar;
    timer = setInterval(function () {
      if (!playing || !ctx) return;
      var pp = TRACKS[curTrack] || TRACKS.home;
      if (ctx.currentTime > nextBar - 1.2) {
        scheduleBar(nextBar);
        nextBar += pp.bar;
      }
    }, 300);
  }

  function stopBgm(fast) {
    if (!playing) return;
    playing = false;
    clearInterval(timer);
    var now = ctx ? ctx.currentTime : 0;
    if (bgmBus && ctx) {
      try {
        bgmBus.gain.cancelScheduledValues(now);
        bgmBus.gain.setValueAtTime(bgmBus.gain.value, now);
        bgmBus.gain.linearRampToValueAtTime(0.0001, now + (fast ? 0.25 : 0.5));
      } catch (e) {}
    }
    live.forEach(function (o) {
      try { o.stop(now + (fast ? 0.26 : 0.55)); } catch (e) { try { o.stop(); } catch (e2) {} }
    });
    live = [];
  }

  function maybeStartBgm() { if (bgmVol > 0 && !playing) startBgm(); }

  function setTrack(name) {
    if (!name || name === curTrack) return;
    curTrack = name;
    if (!playing || !ctx) return;
    stopBgm(false);
    setTimeout(function () { maybeStartBgm(); }, 350);
  }

  /* ---------------- 効果音 ---------------- */
  function tone(freq, dur, opt) {
    if (!ctx || seVol <= 0) return;
    opt = opt || {};
    var t = ctx.currentTime + (opt.at || 0);
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = opt.type || 'sine';
    o.frequency.setValueAtTime(freq, t);
    if (opt.to) o.frequency.exponentialRampToValueAtTime(opt.to, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(opt.vol || 0.12, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(seBus);
    o.start(t); o.stop(t + dur + 0.05);
  }
  function noiseHit(dur, cutFreq, vol, at) {
    if (!ctx || seVol <= 0) return;
    var t = ctx.currentTime + (at || 0);
    var s = ctx.createBufferSource(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    s.buffer = getNoise();
    f.type = cutFreq > 1000 ? 'highpass' : 'lowpass';
    f.frequency.value = cutFreq;
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(seBus);
    s.start(t); s.stop(t + dur + 0.05);
  }
  function kick(at, vol) {
    tone(150, 0.22, { to: 45, vol: vol || 0.3, at: at || 0 });
    noiseHit(0.1, 400, (vol || 0.3) * 0.5, at || 0);
  }

  var SE = {
    /* 操作 */
    pi:      function () { tone(1320, 0.06, { vol: 0.07 }); },
    page:    function () { noiseHit(0.1, 900, 0.06); tone(520, 0.08, { to: 720, vol: 0.04 }); },
    /* カットイン汎用 */
    don:     function () { kick(0, 0.32); },
    dodon:   function () { kick(0, 0.3); kick(0.14, 0.34); },
    zugan:   function () { kick(0, 0.34); tone(400, 0.4, { to: 60, type: 'sawtooth', vol: 0.1 }); noiseHit(0.3, 2500, 0.12); },
    shakin:  function () { noiseHit(0.18, 5000, 0.12); tone(2200, 0.22, { to: 7000, vol: 0.08 }); },
    fanfare: function () { [523.25, 659.25, 783.99, 1046.50].forEach(function (f, i) { tone(f, 0.35, { vol: 0.1, at: i * 0.09 }); }); },
    pon:     function () { tone(300, 0.18, { to: 640, vol: 0.14 }); tone(1568, 0.3, { vol: 0.06, at: 0.12 }); },
    gong:    function () { tone(98, 1.6, { vol: 0.14 }); tone(196.5, 1.2, { vol: 0.05 }); },
    stamp:   function () { tone(180, 0.14, { to: 60, vol: 0.26 }); noiseHit(0.09, 500, 0.16); },
    kira:    function () { [1318.51, 1567.98, 2093.00].forEach(function (f, i) { tone(f, 0.4, { vol: 0.07, at: i * 0.1 }); }); },
    /* 技ごとの音 */
    kamitsuki: function () { /* がぶりっ */
      noiseHit(0.12, 700, 0.2); tone(260, 0.16, { to: 90, vol: 0.2 });
      noiseHit(0.08, 900, 0.14, 0.12); tone(200, 0.1, { to: 80, vol: 0.14, at: 0.12 });
    },
    hikkaki: function () { /* シャッシャッ */
      noiseHit(0.1, 3200, 0.14); tone(1800, 0.1, { to: 900, vol: 0.05 });
      noiseHit(0.1, 3600, 0.14, 0.14); tone(2000, 0.1, { to: 1000, vol: 0.05, at: 0.14 });
    },
    tsutsuki: function () { /* コンコンコン */
      [0, 0.11, 0.22].forEach(function (at) {
        tone(1150, 0.05, { to: 900, vol: 0.13, at: at });
        noiseHit(0.03, 4000, 0.06, at);
      });
    },
    zushin: function () { /* ズシン、ズシン */
      kick(0, 0.36); tone(70, 0.35, { to: 40, vol: 0.2 });
      kick(0.3, 0.4); tone(65, 0.4, { to: 38, vol: 0.24, at: 0.3 });
    },
    nami: function () { /* ザザーッ */
      noiseHit(0.5, 800, 0.1); noiseHit(0.35, 2000, 0.06, 0.1);
      tone(180, 0.4, { to: 120, vol: 0.03 });
    },
    gabu: function () { /* ぱくりっ! */
      kick(0, 0.3);
      noiseHit(0.15, 600, 0.2); tone(220, 0.18, { to: 70, vol: 0.22 });
      noiseHit(0.1, 800, 0.16, 0.16); tone(180, 0.12, { to: 60, vol: 0.16, at: 0.16 });
    },
    suppon: function () { /* すっぽーん! */
      tone(140, 0.3, { to: 950, vol: 0.2 });
      noiseHit(0.12, 700, 0.16);
      [1046.50, 1318.51, 1567.98].forEach(function (f, i) { tone(f, 0.35, { vol: 0.07, at: 0.26 + i * 0.08 }); });
    },
    fuu: function () { /* ふうふうの おおかぜ(みじかい ふっ + ながい ふうーっ) */
      if (!ctx || seVol <= 0) return;
      var t = ctx.currentTime;
      [[0, 0.3, 0.14], [0.4, 0.95, 0.2]].forEach(function (w) {
        var s = ctx.createBufferSource(), g = ctx.createGain(), f = ctx.createBiquadFilter();
        s.buffer = getNoise(); s.loop = true;
        f.type = 'lowpass';
        f.frequency.setValueAtTime(500, t + w[0]);
        f.frequency.linearRampToValueAtTime(1400, t + w[0] + w[1] * 0.4);
        f.frequency.linearRampToValueAtTime(400, t + w[0] + w[1]);
        g.gain.setValueAtTime(0.0001, t + w[0]);
        g.gain.linearRampToValueAtTime(w[2], t + w[0] + 0.08);
        g.gain.exponentialRampToValueAtTime(0.0001, t + w[0] + w[1]);
        s.connect(f); f.connect(g); g.connect(seBus);
        s.start(t + w[0]); s.stop(t + w[0] + w[1] + 0.05);
      });
    },
    tonkan: function () { /* トン・カン・トン・カン */
      [0, 0.13, 0.26, 0.39].forEach(function (at, i) {
        var hi = i % 2 === 1;
        tone(hi ? 980 : 560, 0.07, { to: hi ? 780 : 430, vol: 0.14, at: at });
        noiseHit(0.04, hi ? 3000 : 1400, 0.08, at);
      });
    },
    goro: function () { /* たるが ごろごろ ごろごろ */
      [0, 0.28, 0.56].forEach(function (at) {
        tone(95, 0.3, { to: 70, vol: 0.2, at: at });
        noiseHit(0.22, 320, 0.12, at);
      });
    },
    juu: function () { /* どっぼーん + じゅうぅ */
      kick(0, 0.34);
      noiseHit(0.15, 2500, 0.14);
      tone(160, 0.35, { to: 60, vol: 0.16 });
      noiseHit(0.55, 4500, 0.1, 0.22);
      noiseHit(0.4, 5500, 0.06, 0.5);
    },
    kemuri: function () { /* しろい けむり……(ながく やわらかい しゅうぅ) */
      if (!ctx || seVol <= 0) return;
      var t = ctx.currentTime;
      var s = ctx.createBufferSource(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      s.buffer = getNoise(); s.loop = true;
      f.type = 'lowpass';
      f.frequency.setValueAtTime(300, t);
      f.frequency.linearRampToValueAtTime(900, t + 1.0);
      f.frequency.linearRampToValueAtTime(250, t + 2.0);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(0.09, t + 0.7);
      g.gain.linearRampToValueAtTime(0.05, t + 1.4);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.1);
      s.connect(f); f.connect(g); g.connect(seBus);
      s.start(t); s.stop(t + 2.2);
      tone(98, 1.8, { vol: 0.03 });
    },
    koishi: function () { /* こいしが ころん ころん */
      tone(1500, 0.08, { to: 1100, vol: 0.1 });
      noiseHit(0.03, 3000, 0.05);
      tone(1200, 0.1, { to: 850, vol: 0.08, at: 0.1 });
      [1567.98, 2093.00, 2637.02].forEach(function (f, i) { tone(f, 0.35, { vol: 0.05, at: 0.24 + i * 0.09 }); });
    },
    kajiru: function () { /* かりかり かりかり */
      [0, 0.09, 0.2, 0.29].forEach(function (at, i) {
        noiseHit(0.05, i % 2 ? 3600 : 2800, 0.1, at);
        tone(i % 2 ? 2400 : 2000, 0.04, { to: 1400, vol: 0.05, at: at });
      });
    },
    kamado: function () { /* てつの とが ばたん + ごう */
      kick(0, 0.36);
      noiseHit(0.12, 600, 0.2);
      tone(120, 0.25, { to: 50, vol: 0.2 });
      tone(240, 0.3, { to: 90, vol: 0.08, at: 0.02 });
      noiseHit(0.5, 400, 0.1, 0.15);
    },
    pafu: function () { /* ふわっと あまい */
      tone(660, 0.4, { to: 990, vol: 0.06 });
      tone(880, 0.5, { vol: 0.05, at: 0.1 });
      noiseHit(0.3, 6000, 0.03);
      [1318.51, 1567.98, 2093.00].forEach(function (f, i) { tone(f, 0.45, { vol: 0.05, at: 0.2 + i * 0.1 }); });
    },
    hikari: function () { /* ひかりの はしら(鈴 + 高音の もちおん・しずかに) */
      [2093.00, 2637.02, 3135.96].forEach(function (f, i) { tone(f, 1.4, { vol: 0.045, at: i * 0.15 }); });
      tone(1318.51, 1.8, { vol: 0.03, at: 0.1 });
      tone(659.25, 1.6, { vol: 0.025, at: 0.3 });
      noiseHit(0.4, 7000, 0.02, 0.05);
    },
    koromo: function () { /* きぬずれ(さらり) */
      noiseHit(0.22, 3500, 0.06);
      noiseHit(0.28, 4500, 0.05, 0.18);
      tone(1760, 0.3, { to: 1320, vol: 0.02, at: 0.05 });
    },
    take: function () { /* たけを きる(すぱっ + からん) */
      noiseHit(0.08, 2200, 0.14);
      tone(900, 0.06, { to: 500, vol: 0.1 });
      tone(1400, 0.16, { to: 1100, vol: 0.08, at: 0.14 });
      tone(1050, 0.18, { to: 800, vol: 0.06, at: 0.26 });
    },
    hiho: function () { /* ロバ: ヒー ホー */
      tone(620, 0.22, { to: 900, type: 'sawtooth', vol: 0.06 });
      tone(880, 0.32, { to: 480, type: 'sawtooth', vol: 0.06, at: 0.24 });
      noiseHit(0.1, 1200, 0.03);
    },
    wan: function () { /* イヌ: ワン ワン */
      [0, 0.2].forEach(function (at) {
        tone(320, 0.12, { to: 180, type: 'sawtooth', vol: 0.09, at: at });
        noiseHit(0.07, 900, 0.1, at);
      });
    },
    nyaa: function () { /* ネコ: ニャー */
      tone(880, 0.28, { to: 1250, vol: 0.08 });
      tone(1250, 0.34, { to: 780, vol: 0.07, at: 0.28 });
    },
    kokekokko: function () { /* オンドリ: コケコッコー */
      [0, 0.13, 0.26].forEach(function (at, i) { tone(1150 + i * 120, 0.1, { to: 1450, vol: 0.09, at: at }); });
      tone(1600, 0.5, { to: 1050, vol: 0.09, at: 0.4 });
    },
    kasane: function () { /* 4ひきが じゅんに かさなって、さいごに いっせいに(映像の 150/450/750/1050/1450ms と同期) */
      var s = SE;
      setTimeout(s.hiho, 150);
      setTimeout(s.wan, 450);
      setTimeout(s.nyaa, 750);
      setTimeout(s.kokekokko, 1050);
      setTimeout(function () { s.hiho(); s.wan(); s.nyaa(); s.kokekokko(); s.fanfare(); }, 1450);
    },
    namae: function () { /* としの なまえ(鈴の ひとうち + 印を おす とん) */
      [2800, 4200].forEach(function (f, i) { tone(f, 0.5, { vol: i ? 0.03 : 0.05 }); });
      tone(180, 0.1, { to: 70, vol: 0.14, at: 0.2 });
      noiseHit(0.05, 500, 0.08, 0.2);
    },
    tobiori: function () { /* ぴょん */
      tone(700, 0.12, { to: 1300, vol: 0.09 });
      tone(1100, 0.1, { to: 500, vol: 0.07, at: 0.14 });
      noiseHit(0.04, 1500, 0.05, 0.24);
    },
    tonkarari: function () { /* トン・カラ・リ ×2(hata カットインの 0.65秒周期に同期) */
      [0, 0.65].forEach(function (b) {
        tone(560, 0.1, { to: 430, vol: 0.12, at: b });
        noiseHit(0.03, 700, 0.06, b);
        tone(980, 0.05, { vol: 0.07, at: b + 0.18 });
        tone(1150, 0.05, { vol: 0.07, at: b + 0.26 });
        tone(1568, 0.22, { vol: 0.06, at: b + 0.36 });
      });
    },
    hane: function () { /* はばたき(ふわ、ふわ) */
      [0, 0.28, 0.56].forEach(function (b, i) {
        noiseHit(0.12, 900 - i * 150, 0.07 - i * 0.015, b);
      });
    }
  };

  function se(name) {
    if (seVol <= 0) return;
    ensure();
    if (!ctx || ctx.state === 'suspended') return;
    if (SE[name]) SE[name]();
  }

  function tap() {
    if (bgmVol <= 0 && seVol <= 0) return;
    ensure();
    maybeStartBgm();
  }

  function suspendNow() { if (ctx) { try { ctx.suspend(); } catch (e) {} } }
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('visibilitychange', function () {
      if (!ctx) return;
      if (document.hidden) { suspendNow(); return; }
      if (bgmVol > 0 || seVol > 0) { try { ctx.resume().catch(function () {}); } catch (e) {} }
    });
  }
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('pagehide', suspendNow);
  }

  return {
    tap: tap,
    se: se,
    setTrack: setTrack,
    setVolumes: function (bgm, sev, startNow) {
      bgmVol = bgm; seVol = sev;
      if (ctx && seBus) seBus.gain.value = seVol;
      if (bgmVol <= 0) { stopBgm(true); return; }
      if (ctx && bgmBus && playing) {
        bgmBus.gain.cancelScheduledValues(ctx.currentTime);
        bgmBus.gain.setValueAtTime(bgmBus.gain.value, ctx.currentTime);
        bgmBus.gain.linearRampToValueAtTime(bgmVol, ctx.currentTime + 0.2);
      }
      if (startNow !== false) { ensure(); maybeStartBgm(); }
    },
    get playing() { return playing; }
  };
})();
if (typeof window !== 'undefined') window.Sound = Sound;
