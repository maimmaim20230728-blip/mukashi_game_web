"use strict";
/* つるの おんがえし - シナリオ正本（10作品目）
   底本=全国に伝わる民話「鶴女房」(稲田浩二『日本昔話通観』話型IT153)の骨格による独自再話。特定の再話本・戯曲に依拠しない。
   文・絵・音楽は100%自作。翁型(老夫婦の娘として来る・おばあさんが3枚目で覗く)=ヒロさん承認(2026-09-02)。
   🔴不使用: 木下順二『夕鶴』(2076年末まで)の人名「つう/与ひょう/運ず/惣ど」・「千羽織」・金儲けを煽る第三者・独白・雪の夕空の幕切れ。
   🔴参照禁止: 松谷みよ子版・矢川澄子/赤羽末吉版・いもとようこ版ほか各社絵本・まんが日本昔ばなし1975・採話サイトの台詞(趣旨のみ自前文)。
   🔴そよぎ固有: 自己犠牲を美談にしない(「はねが へった=ぬのが うつくしい」の因果を書かない)・覗いた側を断罪しない・別れを罰にしない
   (別れは覗く/覗かないに関係なく来る=羽は有限・春に仲間が呼ぶ)・羽を抜く動作を描写しない(影と音のみ・「はねが すこし へっていました」まで)・
   禁止語(かわいそう/乗り越える/前を向く/がんばれ)・去る側の心情を断定しない。人名なし。つる=ひらがな(題名と統一)。
   文体: わかちがき・ひらがな主体。布=「はた」「ぬの」「にしき」 */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var TSURU = {

  /* ================= つるの おんがえし(本編) ================= */

  ts1:{art:'ts_yuki_wana', text:'これは、ゆきの ひに たすけられた つるの おはなし。\nある ふゆの ひ、おじいさんは たきぎを うりに まちへ いく とちゅうで、\nわなに かかった つるを みつけました。', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'わなを はずした！！'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'おじいさんは わなを はずして、つるを はなしてやりました。\nつるは おおきく はばたいて、ゆきの そらへ とんでいきました。';
    if(f.first) return t;
    return t + '\nまちで、なにを かって かえる？';
  }, choices:[
    {t:'おこめを かう', go:'ts2r', set:{tslife:'kome'}},
    {t:'あめだまを かう', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'おじいさんは、たきぎを うった おかねで、ちいさな あめだまを ひとつ かいました。\nおばあさんへの おみやげです。'
    : 'おじいさんは、たきぎを うった おかねで、おこめを すこし かいました。\nきょうの ばんごはんの ぶんです。', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'その よる、ゆきは ふりつづいていました。\nとんとん。とを たたく おとが します。\nしろい きものの むすめが、ゆきの なかに たっていました。\n「みちに まよいました。ひとばん、とめて ください」', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'とめて ください'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'おじいさんと おばあさんは、むすめを いろりの そばに すわらせました。\nむすめは よく はたらき、なんにちも いっしょに くらしました。\n「わたしを、ここに おいて ください」\nふたりは、むすめを じぶんたちの むすめのように おもうように なりました。', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'ある ひ、むすめは いいました。\n「いとを かって ください。はたを おります。\nおっている あいだは、しょうじを あけないで ください」', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'トンカラリ、トンカラリ'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'3にち 3ばん、へやから はたの おとが つづきました。\n4かめの あさ、むすめは しろい ぬのを もって でてきました。\nゆきのように しろく、ひかる ぬのでした。', next:'ts7'},

  ts7:{art:'ts_machi', text:'おじいさんが まちへ もっていくと、ぬのは たかく うれました。\nその ふゆ、いえは あたたかく なりました。', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'ありがたい……'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'「もう いちまい、おりましょう」と むすめ。\nまた 3にち 3ばん、へやから はたの おとが しました。', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'トンカラリ、トンカラリ'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = '2まいめの ぬのも、たかく うれました。\nでも、むすめの かおいろは、まえより しろく なっていました。\n「もう いちまい、おります」と むすめは いいました。';
    if(f.first) return t;
    return t + '\nおじいさんは、どうする？';
  }, choices:[
    {t:'「たのむよ」と いう', go:'ts10'},
    {t:'「もう おらなくて いい」と いう', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'3まいめ。\nはたの おとは、まえより ゆっくりでした。', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'トン……カラリ……'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'おばあさんは、へやの まえで たちどまりました。\n（あの こは、だいじょうぶだろうか）\n（いとも ないのに、なにを おっているのだろう）';
    if(f.first) return t + '\nおばあさんは、しょうじを すこしだけ あけました。';
    return t + '\nおばあさんは、どうする？';
  }, choices:[
    {t:'しょうじを すこし あける', go:'ts12'},
    {t:'こえだけ かけて、はなれる', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'しょうじの むこうに、つるが いました。\nじぶんの はねで、はたを おっていたのです。\nはねは、すこし へっていました。', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'……'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'その ばん、むすめは ふたりの まえに すわりました。\n「わたしは、ゆきの ひに たすけられた つるです。\nほんとうの すがたを、みられて しまいました。\nもう、むすめの すがたでは いられません」';
    if(f.first) return t;
    return t + '\nふたりは、どうする？';
  }, choices:[
    {t:'だまって みおくる', go:'ts14'},
    {t:'とを あけて、そらを みあげる', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'むすめは つるの すがたに もどり、ゆきの そらへ とんでいきました。\nおじいさんと おばあさんは、いつまでも そらを みていました。', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'つるは、そらへ'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'ゆきの ひに たすけられた つるは、そらへ かえりました。\nいえには、しろい ぬのが 2まいと、おりかけの はたが のこりました。\nおしまい。'},

  /* ---- もう おらなくて いい ---- */
  tsm1:{art:'ts_kaoiro', text:'「もう おらなくて いい。ぬのは 2まいで じゅうぶんだ」\nおじいさんは、そう いいました。\nむすめは しばらく だまって、「はい」と こたえました。', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'ふゆが おわり、はるが きました。\nそらに、つるの こえが しました。\n「わたしは、ゆきの ひに たすけられた つるです。なかまが よんでいます」', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'むすめは つるの すがたに もどり、なかまの ところへ とんでいきました。\nいえには、しろい ぬのが 2まい のこりました。\nおじいさんと おばあさんは、はるの そらを みおくりました。\nめでたし、めでたし。'},

  /* ---- のぞかない ふゆ ---- */
  tsn1:{art:'ts_nozoku', text:'「むりを しないでね」\nおばあさんは しょうじの そとから こえを かけて、へやから はなれました。\nなかから、「はい」と こえが しました。', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'3まいめの ぬのが おりあがりました。\nいちばん うつくしい ぬのでした。\nむすめの かおいろは、まだ しろい ままでした。', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'はるが きて、そらに つるの こえが しました。\n「わたしは、ゆきの ひに たすけられた つるです。\nはねは、もう ありません。なかまが よんでいます」', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'おじいさんと おばあさんは、とぐちで むすめを みおくりました。\nのぞかなくても、わかれは きました。\nでも、その わかれには、かくしごとが ひとつも ありませんでした。\nめでたし、めでたし。'},

  /* ---- まどを あけて ---- */
  tsd1:{art:'ts_mado', text:'つぎの あさ、おじいさんは とを あけました。\nはれた そらに、つるが いちわ。\nつるは、いえの うえを ひとまわりして、とおくへ とんでいきました。', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'ふたりは、てを ふりました。\nつるが ふりむいたかどうかは、わかりません。\nでも、いえの うえを ひとまわりした ことは、ずっと おぼえていました。\nめでたし、めでたし。'},

  /* ================= つるの はなし ================= */

  tz1:{art:'ts_yuki_wana', text:'これは、いちわの つるの おはなし。\nゆきの ひ、わなに かかって、うごけなく なっていました。\nとおりかかった おじいさんが、わなを はずしてくれました。', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'つるは、おんがえしを しようと おもいました。\nどんな すがたで いく？', choices:[
    {t:'しろい きものの むすめ', go:'tz2r', set:{tzlife:'musume'}},
    {t:'たびの むすめ', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'つるは、かさを かぶった たびの むすめに すがたを かえて、\nゆきの よるに、いえの とを たたきました。'
    : 'つるは、しろい きものの むすめに すがたを かえて、\nゆきの よるに、いえの とを たたきました。', next:'tz3'},
  tz3:{art:'tz_hane', text:'はたを おるには、じぶんの はねを つかいます。\nはねには、かぎりが あります。\nつるは、はねを かぞえながら おりました。', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'……あと、これだけ'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'3まいめを おっている とき、しょうじが すこし あきました。\nつるは、どうする？', choices:[
    {t:'おりつづける', go:'tzh1'},
    {t:'はたを とめて、そらを みる', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'つるは、さいごまで おりました。\nはねは、だいぶ へっていました。', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'すがたを みられたので、つるは いえを でました。\nなぜ さいごまで おったのかは、この おはなしには かかれていません。\nおしまい。'},
  tzs1:{art:'tz_sora_ie', text:'つるは はたを とめて、まどから そらを みました。\nはるの そらでした。\nつるは、その よるに いえを でました。', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'そらから みると、いえは ちいさくて、あかりが ひとつ ともっていました。\nつるは、その あかりを しばらく みていました。\nおしまい。'},

  /* ================= おばあさんの ふゆの はなし ================= */

  tb1:{art:'ts_irori', text:'これは、ひとりの おばあさんの おはなし。\nゆきの よるに きた むすめは、よく はたらき、よく わらいました。\nおばあさんは、むすめが かわいくて しかたが ありませんでした。', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'むすめが はたを おっている あいだ、おばあさんは なにを する？', choices:[
    {t:'あたたかい しるを つくる', go:'tb2r', set:{tblife:'shiru'}},
    {t:'いろりの ひを たやさない', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'おばあさんは、いろりの ひが きえないように、たきぎを たしつづけました。\nへやが さむく ならないように。'
    : 'おばあさんは、あたたかい しるを つくって、しょうじの そとに おきました。\nあさに なると、おわんは からに なっていました。', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'2まいめの あと、むすめの かおいろは しろく なっていました。\nおばあさんは、なんども へやの まえを いったり きたり しました。', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'みないで、と いわれたけれど'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'みないで、と いわれると、みたくなる。\nしんぱいだから、なおさら。\nおばあさんは、どうする？', choices:[
    {t:'しょうじを あける', go:'tbk1'},
    {t:'へやの まえに すわって、まつ', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'しょうじの むこうに、つるが いました。\nおばあさんは、しょうじを そっと しめました。\nでも、みた ことは、もう もどせませんでした。', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'むすめは つるに もどって、とんでいきました。\nみたくなる こころは、だれにでも あります。\nそれを わるいと いう ひとは、この おはなしには でてきません。\nおしまい。'},
  tbh1:{art:'tb_hata_nokori', text:'おばあさんは、へやの まえに すわって、はたの おとを ききました。\nトンカラリ。トンカラリ。\nはるまで、そうしていました。', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'はるに むすめが さった あと、へやには はたが のこりました。\nおばあさんは はたを そのままに して、まいにち へやを あけました。\nめでたし、めでたし。'}

  };

  Object.assign(T.SCENES, TSURU);

  /* ---- 図鑑(つるの おんがえしの部) ---- */
  T.ZK.push(
    {section:'つるの おんがえし', note:'にほんの むかしばなしには、ほんとうの すがたを しられた ひとが さっていく はなしが たくさん あります。つる、へび、うぐいす。ばつの はなしでは ありません。'},
    {id:'ts_seishi',    n:'ゆきの ひの つる',        h:'はじめての 1かいめの、つたわっている おはなし'},
    {id:'ts_mou',       n:'もう おらなくて いい',    h:'3まいめの まえに、おじいさんが なにか いうと…'},
    {id:'ts_nozokanai', n:'のぞかない ふゆ',         h:'おばあさんが、こえだけ かけて はなれると…'},
    {id:'ts_mado',      n:'まどを あけて',           h:'わかれの ばんに、とを あけて そらを みあげると…'},
    {id:'tz_hane',      n:'はねの かず',             h:'つるの おはなしで、さいごまで おりつづけると…'},
    {id:'tz_sora',      n:'そらから みた いえ',      h:'つるの おはなしで、はたを とめて そらを みると…'},
    {id:'tb_kokoro',    n:'みたくなる こころ',       h:'おばあさんの おはなしで、しょうじを あけると…'},
    {id:'tb_hata',      n:'おりかけの はた',         h:'おばあさんの おはなしで、へやの まえで まつと…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    ts_seishi:    {f:{first:1}, scenes:['ts13','ts14','tsc_hikari','e_ts_seishi']},
    ts_mou:       {f:{}, scenes:['tsm1','tsm2','e_ts_mou']},
    ts_nozokanai: {f:{}, scenes:['tsn1','tsn2','tsn3','e_ts_nozokanai']},
    ts_mado:      {f:{}, scenes:['tsd1','e_ts_mado']},
    tz_hane:      {f:{}, scenes:['tzh1','e_tz_hane']},
    tz_sora:      {f:{}, scenes:['tzs1','e_tz_sora']},
    tb_kokoro:    {f:{}, scenes:['tbk1','e_tb_kokoro']},
    tb_hata:      {f:{}, scenes:['tbh1','e_tb_hata']}
  });

  /* ---- はじめての1かいめ(翁型標準形・一本道) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.ts = {
      init: { first:1 },
      scenes: [
        'ts1','tsc_wana','ts2','ts3','tsc_kao_musume','ts4','ts5','tsc_hata1','ts6','ts7','tsc_kao_jii',
        'ts8','tsc_hata2','ts9','ts10','tsc_hata3','ts11','ts12','tsc_kao_baa','ts13','ts14','tsc_hikari','e_ts_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.ts    = { start:'ts1', init:{} };
  T.STORIES.tsuru = { start:'tz1', init:{} };
  T.STORIES.tbaa  = { start:'tb1', init:{} };

})();
