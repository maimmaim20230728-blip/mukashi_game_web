"use strict";
/* じゅうにしの はじまり - シナリオ正本（9作品目）
   底本=作者未詳の口承民話(中国から伝わり日本各地に採話)。骨格は『日本民俗大辞典 上』の項目要約と
   福島県川俣町・沖縄県読谷村・沖縄市の自治体公式採話の筋。文・絵・音楽は100%自作。
   ヒロさん承認済み(2026-09-02): 犬猿の言い争いにトリが入る/ヘビがタツに譲る=1周目に入れる(筋のみ自前)/
   褒美=「その としの なまえに なる」(大将・王様・一番を使わない)/ネコが十二支に入る分岐=「うみの むこうの くにでは」1本のみ。
   🔴参照禁止: 岩崎京子版(2095年まで)・まんが日本昔ばなし1977・各社絵本・再話サイト・英語再話。方言語り(〜んだと)厳禁
   🔴中国渡河型の要素(玉皇大帝・川渡り・タツの雨・ヘビが蹄に・筏・イヌの水遊び)不使用
   🔴そよぎ固有: 順位=年の名前の順で優劣でない(評価語禁止)・ネズミの嘘は事実として描き断罪も擁護もしない・
   ネコを怠け者にしない・ネコの心情を書かない・かみさまは顔を出さない
   文体: わかちがき・ひらがな主体。動物=カタカナ・かみさま=ひらがな・年の名前=ひらがな */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var N12 = ['ね','うし','とら','う','たつ','み','うま','ひつじ','さる','とり','いぬ','い'];

  var JUNISHI = {

  /* ================= じゅうにしの はじまり(本編) ================= */

  ju1:{art:'ju_ofure', text:'これは、12の どうぶつが、としの なまえに なった おはなし。\nある としの くれ、かみさまが おふれを だしました。\n「がんじつの あさ、ごてんに きた じゅんに、12ばんめまで、その としの なまえに しよう」', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'どうぶつたちは、それぞれ したくを はじめました。';
    if(f.first) return t;
    return t + '\nなにを したくする？';
  }, choices:[
    {t:'はしる れんしゅうを する', go:'ju2r', set:{julife:'hashiru'}},
    {t:'ごちそうを つくって まつ', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'ヒツジは おもちを つき、サルは くりを ひろいました。\nがんじつの あさに、みんなで たべるのです。'
    : 'トラと ウマは、のはらを なんども かけました。\nウサギは、ぴょんぴょんと とぶ れんしゅうです。', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'ネコは、おふれの ひを ききのがしていました。\n「ねえ ネズミ、ごてんへ いくのは いつだっけ」';
    if(f.first) return t + '\n「1がつ ふつかの あさだよ」\nネズミは、そう こたえました。';
    return t + '\nネズミは、なんと こたえる？';
  }, choices:[
    {t:'「1がつ ふつかの あさだよ」', go:'ju4'},
    {t:'「1がつ ついたちの あさだよ」', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'おおみそかの よる。\n「わたしは あしが おそいから、いまから でよう」\nウシは、まだ くらい ゆきみちを あるきはじめました。', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'ゆっくり いこう'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'よいの くちに しゅっぱつ！！'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'その せなかに、ネズミが ちょこんと とびのりました。\nウシは きづきません。\nゆきみちを、ゆっくり ゆっくり。';
    if(f.first) return t;
    return t + '\nよみちで、ネズミは なにを した？';
  }, choices:[
    {t:'せなかで ねむった', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'ほしを かぞえた', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'ゆきの よぞらに、ほしが いっぱいです。\nネズミは ひとつ ふたつと かぞえながら、あさを まちました。'
    : 'ウシの せなかは あたたかくて、ネズミは いつのまにか ねむっていました。\nウシの あしおとだけが、ゆきみちに つづきます。', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'あさに なりました。\nごてんの もんが、めの まえです。\nウシは、いちばんに ついたと おもいました。';
    if(f.first) return t;
    return t + '\nネズミは、どうする？';
  }, choices:[
    {t:'とびおりて、さきに はいる', go:'juc_tobiori'},
    {t:'とびおりず、ウシと いっしょに はいる', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'とびおりた！！'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'その とき、せなかから ネズミが ぴょんと とびおりて、\nもんの なかへ さきに はいりました。\nかみさまの こえが しました。「はじめの としは、ね」', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'ね'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'つづいて、ウシが もんを くぐりました。\n「つぎの としは、うし」', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'ね、うし'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'トラが かけこんできました。\nつづいて ウサギが、ぴょんと はねて もんを くぐりました。', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'タツと ヘビは、もんの まえに おなじ ときに つきました。\n「おさきに どうぞ」と ヘビ。\nタツが さきに、ヘビが つぎに はいりました。', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'とら、う、たつ、み'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'ウマが かけてきて、ヒツジが つづきました。', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'サルと イヌは、みちで いいあいに なって、なかなか すすめません。\nトリが あいだに はいりました。', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'さきに ごてんへ！'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'トリに うながされて、サルと イヌは いいあいを やめました。\nサル、トリ、イヌの じゅんに、もんを くぐりました。', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'うま、ひつじ、さる、とり、いぬ'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'さいごに イノシシ。\nまっすぐ はしる ことしか できないので、\nもんの まえを とおりすぎて、もどってきました。', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'まっすぐ イノシシ！！'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'12ばんめは、い。\nこれで、12の としの なまえが そろいました。', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'じゅうにの なまえ！！'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'かみさまは、12ひきに いいました。\n「これから まいとし じゅんばんに、その としの なまえに なりなさい」', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'つぎの あさ。\nネコが、ごてんの もんへ やってきました。\nもんは、しまっていました。', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'……あれ？'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'かみさまの こえが しました。\n「ごてんに くる ひは、きのうだった。かおを あらって、でなおしなさい」';
    if(f.first) return t;
    return t + '\nネコは、どうする？';
  }, choices:[
    {t:'かおを あらって、かえる', go:'ju18'},
    {t:'かおを あらって、もう いちど もんへ', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'ネコは、かおを あらいました。\nそれから、ネズミを みかけると おいかけるように なりました。', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'ね、うし、とら、う、たつ、み、うま、ひつじ、さる、とり、いぬ、い。\n12の どうぶつは、まいとし じゅんばんに、その としの なまえに なりました。\nめでたし、めでたし。'},

  /* ---- ウシの せなかで ---- */
  jua1:{art:'ju_mon', text:'ネズミは とびおりませんでした。\nウシの せなかに のったまま、いっしょに もんを くぐりました。\n「ふたり いっしょか」と、かみさまの こえ。', next:'jua2'},
  jua2:{art:'ju_mon', text:'「ウシが さきで いい」と ネズミ。\n「ネズミが さきで いい」と ウシ。\nかみさまは わらいました。\n「では、はじめの としは ね。つぎは うし。\nそのかわり、ふたりで おたがいの としを てつだいなさい」', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'それから ねの としには ウシが、うしの としには ネズミが、\nおたがいの はたらきを てつだうように なりました。\nじゅんばんは かわりません。でも、ふたりで ひとつの あさでした。\nめでたし、めでたし。'},

  /* ---- まいとしの あいさつ ---- */
  jub1:{art:'ju_neko_kao', text:'ネコは かおを あらって、もう いちど もんへ いきました。\n「かおを あらって きました」', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'かみさまの こえが しました。\n「としの なまえは、12しか ない。\nでも、まいとし がんじつには、あいさつに きなさい」', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'それから ネコは、まいとし がんじつの あさ、ごてんへ あいさつに いきます。\nとしの なまえには なりません。\nでも、ごてんの もんは、ネコの ために あきます。\nめでたし、めでたし。'},

  /* ---- うみの むこうの くにでは ---- */
  juu1:{art:'ju_nezuneko', text:'「1がつ ついたちの あさだよ」\nネコは「ありがとう」と いって、その よるは はやめに ねました。', next:'juu2'},
  juu2:{art:'ju_kake', text:'がんじつの あさ。\nネズミは ウシの せなかで、ウシは ゆっくり、トラは いきおいよく。\nそして もんの まえで、ウサギと ネコが おなじ ときに つきました。', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'おなじ とき！？'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'かみさまは、しばらく かんがえて いいました。\n「ここでは、この としを ウサギに。\nうみの むこうの くにでは、この としを ネコに まかせよう」', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'だから いまでも、うみの むこうの くにには、\nネコが としの なまえに なっている ところが あります。\nおなじ おはなしでも、くにが ちがえば、なまえも ちがうのです。\nめでたし、めでたし。'},

  /* ================= ネコの はなし ================= */

  jn1:{art:'jneko_hinata', text:'これは、いっぴきの ネコの おはなし。\nかみさまの おふれが あったと ききましたが、ひにちを ききのがしました。', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'だれに きこう？', choices:[
    {t:'ネズミに きく', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'イヌに きく', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '「1がつ……ついたち、だったかな。ネズミが くわしいよ」と イヌ。\nネコは ネズミに ききました。\n「1がつ ふつかの あさだよ」と ネズミは こたえました。'
    : '「1がつ ふつかの あさだよ」と ネズミは こたえました。\nネコは「ありがとう」と いいました。', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'1がつ ふつかの あさ。\nネコは ごてんの もんへ いきました。\nもんは、しまっていました。', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'……きのう？'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'「ごてんに くる ひは、きのうだった。かおを あらって、でなおしなさい」\nかみさまの こえが しました。\nネコは、どうする？', choices:[
    {t:'かおを あらって、いえへ かえる', go:'jna1'},
    {t:'ひなたで、まるく なる', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'ネコは、かおを あらいました。\nつめたい みずでした。', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'かおを あらった ネコが、その あと なにを おもったのかは、\nこの おはなしには かかれていません。\nネコは、かおを あらった。それだけです。\nおしまい。'},
  jnh1:{art:'jneko_hinata', text:'ネコは、ひなたに いきました。\nまるく なって、めを とじました。', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'ネズミを おいかける ネコも いれば、ひなたで ねむる ネコも います。\nネコが いま なにを おもっているかは、ネコだけが しっています。\nおしまい。'},

  /* ================= ネズミの はなし ================= */

  jz1:{art:'jnezumi_ana', text:'これは、いっぴきの ネズミの おはなし。\nかみさまの おふれを きいて、ネズミは かんがえました。\n（わたしの あしでは、はしっても おいつけない）', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'よる、あなの なかで、なにを する？', choices:[
    {t:'ごてんまでの みちを かんがえる', go:'jz2r', set:{jzlife:'michi'}},
    {t:'はやく ねて、あさに そなえる', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'ネズミは わらの なかに もぐって、はやく ねました。\nゆめの なかでも、ごてんの もんが みえました。'
    : 'ネズミは、ごてんまでの みちを あたまの なかで なんども たどりました。\nとおい みちです。だれかの せなかが いる、と おもいました。', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'「ごてんへ いくのは いつだっけ」と ネコ。\nネズミは、「1がつ ふつかの あさだよ」と こたえました。', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'……'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'おおみそかの よる、ネズミは ウシの せなかに とびのりました。\nウシは きづきません。\nネズミは、どうする？', choices:[
    {t:'だまって のっていく', go:'jzu1'},
    {t:'ウシに こえを かける', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'あさ、もんの まえで、ネズミは とびおりました。\nはじめの としは、ね。', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'ネズミは、ネコに ほんとうの ひを いいませんでした。\nその わけは、ネズミだけが しっています。\nそして ネズミは、はじめの としの なまえに なりました。\nおしまい。'},
  jzs1:{art:'ju_senaka', text:'「ウシ、のせてくれて ありがとう」\nウシは おどろいて、ふりむきました。\n「なんだ、ネズミか。おもくも ないから、そのまま のっていな」', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'もんの まえで、ウシは いいました。\n「はやく いって、なまえを もらっといで」\nネズミは とびおりて、もんを くぐりました。', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'はじめの としは ね。つぎは うし。\nネズミは、せなかを かした ウシの ことを、ずっと わすれませんでした。\nめでたし、めでたし。'}

  };

  Object.assign(T.SCENES, JUNISHI);

  /* ---- 図鑑(じゅうにしの はじまりの部) ---- */
  T.ZK.push(
    {section:'じゅうにしの はじまり', note:'うみの むこうの くにには、ネコが じゅうにしに はいっている ところも あります。13ばんめの どうぶつには、イタチや カエルの ことばあそびも つたわっています。'},
    {id:'ju_seishi',  n:'じゅうにの なまえ',           h:'はじめての 1かいめの、つたわっている おはなし'},
    {id:'ju_ushi',    n:'ウシの せなかで',             h:'もんの まえで、とびおりずに いると…'},
    {id:'ju_kao',     n:'まいとしの あいさつ',         h:'かおを あらって、もう いちど もんへ いくと…'},
    {id:'ju_umi',     n:'うみの むこうの くにでは',    h:'ネズミが ほんとうの ひを こたえると…'},
    {id:'jn_asa',     n:'つぎの あさ',                 h:'ネコの おはなしで、かおを あらって かえると…'},
    {id:'jn_hinata',  n:'ひなたの ネコ',               h:'ネコの おはなしで、ひなたで まるく なると…'},
    {id:'jz_uso',     n:'うそを ついた ひ',            h:'ネズミの おはなしで、だまって のっていくと…'},
    {id:'jz_senaka',  n:'せなかを かりた ひ',          h:'ネズミの おはなしで、ウシに こえを かけると…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    ju_seishi:  {f:{first:1}, scenes:['ju17','ju18','e_ju_seishi']},
    ju_ushi:    {f:{}, scenes:['jua1','jua2','e_ju_ushi']},
    ju_kao:     {f:{}, scenes:['jub1','jub2','e_ju_kao']},
    ju_umi:     {f:{}, scenes:['juu1','juu2','juc_kao_neko2','juu3','e_ju_umi']},
    jn_asa:     {f:{}, scenes:['jna1','e_jn_asa']},
    jn_hinata:  {f:{}, scenes:['jnh1','e_jn_hinata']},
    jz_uso:     {f:{}, scenes:['jzu1','e_jz_uso']},
    jz_senaka:  {f:{}, scenes:['jzs1','jzs2','e_jz_senaka']}
  });

  /* ---- はじめての1かいめ(日本標準形・一本道) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.ju = {
      init: { first:1 },
      scenes: [
        'ju1','ju2','ju3','ju4','juc_kao_ushi','juc_shuppatsu','ju5','ju6','juc_tobiori','ju7','juc_n1','ju8','juc_n2',
        'ju9','ju10','juc_n3','ju11','ju12','juc_kao_tori','ju12b','juc_n4','ju13','juc_inoshishi','ju14','juc_n12','ju15',
        'ju16','juc_kao_neko','ju17','ju18','e_ju_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.ju      = { start:'ju1', init:{} };
  T.STORIES.jneko   = { start:'jn1', init:{} };
  T.STORIES.jnezumi = { start:'jz1', init:{} };

})();
