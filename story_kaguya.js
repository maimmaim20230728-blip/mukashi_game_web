"use strict";
/* かぐやひめ - シナリオ正本（7作品目）
   底本=『竹取物語』原文(ウィキソース・國民文庫版翻刻・PD)。日本語は古文からの自前現代語化のみ
   (川端康成・星新一・田辺聖子ほか現代語訳はすべて保護中=参照しない)。
   ヒロさん承認済み(2026-09-02): 帝=輿を寄せ姫が光になり断念まで(袖・翁の約束は入れない)/
   翁嫗の悲しみ=「なみだが とまりませんでした」まで(病臥なし)/難題の顛末=最小描写(死を書かない)。
   🔴ジブリ版固有要素(捨丸・たけのこ・わらべ唄・記憶が消える解釈・来迎演出)不使用。羽衣=「ものおもいが きえる」
   🔴「かわいそう」「のりこえる」「まえを むく」「がんばれ」禁止・親を責める地の文なし・「帰らない」結末なし
   文体: わかちがき・ひらがな主体。翁=おきな・嫗=おうな・帝=みかど・使者=つきの つかい */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var KAGUYA = {

  /* ================= かぐやひめ(本編) ================= */

  kg1:{art:'kg_takebayashi', text:'これは、むかしむかしの おはなし。\nたけを とって くらす おじいさんが いました。\nひとは、たけとりの おきなと よんでいました。\nある ひ、たけやぶの おくで、ねもとが きんいろに ひかる たけを みつけました。', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'たけが ひかった！！'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'たけを きってみると、なかに、さんずんほどの ちいさな おんなのこが すわっていました。\nおきなは てのひらに のせて、いえへ つれてかえりました。\nつまの おうなと ふたりで、かごに いれて そだてることに しました。', next:'kg3'},

  kg3:{art:'kg_akachan', text:'ちいさな ひめに、まいにち なにを してあげよう？', choices:[
    {t:'こもりうたを うたう', go:'kg3r', set:{takeko:'uta'}},
    {t:'たけの おもちゃを つくる', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'おきなは たけで ちいさな ふえや くるまを つくりました。\nひめが わらうと、おうなも わらいました。'
    : 'おうなが こもりうたを うたうと、ひめは すやすやと ねむります。\nかごの そばで、ふたりは ずっと みていました。', next:'kg4'},

  kg4:{art:'kg_seichou', text:'それからは、たけを きるたびに、なかから きんが でてきました。\nおんなのこは みるみる おおきくなって、みつきほどで、うつくしい むすめに なりました。\nなまえを「なよたけの かぐやひめ」と つけました。', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'かぐやひめの うつくしさは、くにじゅうの うわさに なりました。\nやしきの まわりには、ひとめ みようと ひとが あつまります。', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'なかでも 5にんの きこうしが、どうしても つまに したいと やってきました。\nいしつくりの みや、くらもちの みや、あべの だいじん、\nおおともの だいなごん、いそのかみの ちゅうなごん。', next:'kg7'},

  kg7:{art:'kg_takara', text:'かぐやひめは いいました。\n「わたしの みたい たからものを もってきてくださった かたの ところへ、まいります」', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'ほとけの みいしの はち！！'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'ほうらいの たまの えだ！！'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'ひねずみの かわごろも！！'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'りゅうの くびの たま！！'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'つばめの こやすがい！！'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'どれも、この よに あるとは おもえない たからものです。\n5にんは それぞれ、たびに でました。';
    if(f.first) return t;
    return t + '\nだれの はなしを きく？';
  }, choices:[
    {t:'いしつくりの みや', go:'kgk1'},
    {t:'くらもちの みや', go:'kgk2'},
    {t:'あべの だいじん', go:'kgk3'},
    {t:'おおともの だいなごん', go:'kgk4'},
    {t:'いそのかみの ちゅうなごん', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'いしつくりの みやは、とおい てんじくまで いくのは たいへんだと、\nちかくの てらの ふるい はちを もっていきました。\nでも、ほとけの はちなら ひかるはず。\nひかりの ない はちは、すぐに ばれてしまいました。', next:'kg9'},
  kgk2:{art:'kg_takara', text:'くらもちの みやは、しょくにんたちに たまの えだを つくらせました。\nひめも おきなも、みごとな えだに めを みはりました。\nところが そこへ、「おだいを まだ もらっていません」と、\nしょくにんたちが やってきたのです。', next:'kg9'},
  kgk3:{art:'kg_takara', text:'あべの だいじんは、とおい くにから かわごろもを とりよせました。\nひめは いいました。「ひねずみの かわごろもは、ひに いれても もえないはず」\nひに いれると、かわごろもは めらめらと もえてしまいました。', next:'kg9'},
  kgk4:{art:'kg_takara', text:'おおともの だいなごんは、ふねで りゅうを さがしに でました。\nおおあらしに あって、ふねは ぐるぐる。\nやっと きしに もどった だいなごんは、めを はらして かえりました。', next:'kg9'},
  kgk5:{art:'kg_takara', text:'いそのかみの ちゅうなごんは、つばめの すに てを いれて、\nなにかを つかんだ ひょうしに、やねから おちてしまいました。\nつかんでいたのは、つばめの ふるい ふん。\nちゅうなごんは けがを して、ねこんでしまいました。', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'けっきょく、ほんものの たからものを もってこられた ひとは、ひとりも いませんでした。';
    if(f.first) return t;
    return t + '\nさて、どうする？';
  }, choices:[
    {t:'うわさの まま、しずかに すごす', go:'kg10'},
    {t:'おきなと おうなに、ほんとうの ことを はなす', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'その うわさは、みかどの みみにも とどきました。\nみかどは かりに でかける ふりを して、たけとりの いえを たずねました。', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'みかどの おこし！！'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'みかどが おこしに のせようと すると、\nかぐやひめの すがたは、すうっと ひかりに なって きえました。\n「つれていくのは、やめよう」\nみかどは そう いって、みやこへ かえりました。', next:'kg12'},

  kg12:{art:'kg_mikado', text:'それから みかどと かぐやひめは、てがみと うたを おくりあうように なりました。', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'そうして、さんねんが すぎました。'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'はるに なると、かぐやひめは つきを みあげては、なみだを こぼすように なりました。\nおきなが わけを たずねても、こたえません。', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'なつの おわり、かぐやひめは とうとう うちあけました。\n「わたしは、つきの みやこの ものです。\nはちがつ じゅうごやの よる、むかえが きます。かえらなければ なりません」', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'かえすものか！'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'おきなは みかどに たのんで、たくさんの へいしを よびました。\nやねにも にわにも、ゆみを もった ひとが ならびます。\nおうなは ひめを へやの おくに かくして、とを しっかり しめました。', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'じゅうごやの よる。まよなかを すぎた ころ、\nいえの まわりが、ひるよりも あかるく なりました。', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'つきの ひかりが おりてきた！！'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'そらから、くもに のった ひとたちが おりてきました。\nへいしたちは ちからが ぬけて、ゆみを ひくことも できません。\nとは ひとりでに あいて、おうなの うでの なかから、ひめが すすみでました。', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'つきの つかいが いいました。\n「おきなよ。ひめは つきで つみを つくり、その つぐないに、しばらく ここに おりていたのです。\nつぐないの ときは おわりました。\nあなたの ちいさな よい おこないへの、おれいでも ありました」', next:'kg19'},

  kg19:{art:'kg_tegami', text:'かぐやひめは、おきなに てがみを かきました。\n「ぬいで おいていく きものを、わたしと おもってください。\nつきの でる よるは、みあげてください」', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'つきの つかいが、ふしの くすりの つぼを さしだしました。';
    if(f.first) return t + '\nひめは ひとくち なめて、のこりを みかどへの てがみに そえ、\nみかどの つかいの ひとに わたしました。';
    return t + '\nこの くすりを、だれに？';
  }, choices:[
    {t:'みかどへの てがみに そえる', go:'kg21'},
    {t:'おきなと おうなに のこす', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'つきの つかいが、はごろもを さしだします。\n「これを きると、ひとの ものおもいが きえてしまうのです」';
    if(f.first) return t + '\nひめは、はごろもを きました。';
    return t + '\nどうする？';
  }, choices:[
    {t:'はごろもを きる', go:'kg22'},
    {t:'きる まえに、もう いちど ふりかえる', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'ものおもいが きえた ひめは、おきなを いとおしいとも、なつかしいとも おもわなく なりました。\nくもに のって、つきへと のぼっていきます。', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'つきへ……'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'おきなと おうなは、なみだが とまりませんでした。\nひめの のこした きものを だいて、いつまでも そらを みあげていました。', next:'kg24'},

  kg24:{art:'kg_fuji', text:'みかどは、ひめの てがみと ふしの くすりを、\nてんに いちばん ちかい するがの やまの てっぺんで、やかせました。\nたくさんの つわものが のぼった やまなので、\nその やまは「ふじの やま」と よばれるように なりました。', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'つきの でる よるは、みあげてください。\nおきなと おうなは、ひめの ことばの とおりに、つきの よるは そらを みあげました。\nぬいで おいていった きものは、ふたりの てもとに のこりました。\nおしまい。'},

  /* ---- のこりの ひび ---- */
  kgn1:{art:'kg_uchiake', text:'かぐやひめは、みかどが くる まえに、ふたりに はなしました。\n「わたしは つきの みやこの ものです。ことしの あきに、かえらなければ なりません」\nおきなと おうなは、ながい あいだ だまっていました。', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'その ひから、さんにんは まいにちを たいせつに すごしました。\nたけやぶを さんぽして、はじめて みつけた たけの ところへも いきました。', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'つきの きれいな よるは、さんにんで えんがわに すわりました。\n「つきの よるは、ここに すわってください。わたしも つきから、ここを みます」', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'じゅうごやの よる、むかえが きました。\nおきなは たたかいませんでした。\nさんにんは てを にぎって、ひかりを まちました。', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'わかれは、おなじように きました。\nでも その まえに、さんにんには、いっしょに すごした あきが ありました。\nえんがわには、みっつの ざぶとんが おいたままです。\nおしまい。'},

  /* ---- はごろもの まえに ---- */
  kgm1:{art:'kg_shouten', text:'はごろもを きる まえに、ひめは ふりかえりました。\nおきなと おうなが、こちらを みています。', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'そだててくれて、ありがとう'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'おうなは なきながら、わらって てを ふりました。\nおきなも、おおきく てを ふりました。\nひめは その かおを めに やきつけてから、はごろもを きました。', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'ものおもいは きえても、さいごに みた ふたりの かおは、\nひかりの なかに、ずっと のこっていました。\nおしまい。'},

  /* ---- ふしの くすり ---- */
  kgu1:{art:'kg_tegami', text:'ひめは ふしの くすりを、おきなと おうなに わたしました。\n「これを のめば、いつまでも いきられます」', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'ひめが つきへ かえった あと、ふたりは くすりの つぼを みつめました。\n「ひめの いない よを、いつまでも いきなくても いい」\nおきなは しずかに いいました。', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'つぎの つきの よる、ふたりは くすりの つぼを えんがわに おきました。\nつきに むかって、そっと さしだすように。', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'くすりは のまれる ことなく、つきの ひかりを あびつづけました。\nみかどは ふじの やまで くすりを やき、おきなは えんがわで つきに ささげました。\nどちらも、ひめを わすれない ための、それぞれの やりかたでした。\nおしまい。'},

  /* ================= おきなと おうなの はなし ================= */

  kj1:{art:'okina_take', text:'これは、たけとりの おきなと おうなの、それからの おはなし。\nひめが つきへ かえって、ひとつきが たちました。', next:'kj2'},
  kj2:{art:'kg_ato', text:'きょうは なにを しよう？', choices:[
    {t:'ひめの きものを たたむ', go:'kj2r', set:{takelife:'kimono'}},
    {t:'たけやぶを あるく', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'たけやぶは、あの ひと おなじように、かぜに ゆれていました。\nおきなは しばらく、たけの おとを きいていました。'
    : 'おうなは ひめの きものを、ていねいに たたみました。\nたたんでは ひろげ、また たたみました。', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'つきの よる。ふたりは、ひめの てがみを もういちど よみました。\n「つきの でる よるは、みあげてください」', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'みあげましょうか'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'おうなが、おきなに いいました。\nふたりは、どうしよう。', choices:[
    {t:'えんがわで つきを みあげる', go:'kjt1'},
    {t:'あさに なったら、たけやぶへ いく', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'ふたりは えんがわに ならんで、つきを みあげました。\nかなしみは、きえません。\nでも つきの ひかりは、えんがわまで とどいていました。', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'それから ふたりは、つきの よるには えんがわに すわります。\nなく よるも、はなす よるも、だまっている よるも あります。\nつきの ひかりは、どの よるにも おなじように とどきました。\nおしまい。'},
  kjk1:{art:'okina_take', text:'はるの あさ、おきなは また たけやぶへ いきました。\nひかる たけは、もう ありません。\nそのかわり、あちこちに たけのこが かおを だしていました。', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'……とるか'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'おきなは、ひとつ ひとつ、たけのこを ほりました。\nいそがず、だれに いわれたのでもなく、じぶんで きめて。\nかごが いっぱいに なるころ、おうなが おべんとうを もって きました。\nめでたし、めでたし。'},

  /* ================= つきの つかいの はなし ================= */

  ku1:{art:'tsuki_miyako', text:'これは、つきの みやこに すむ、つきの つかいの おはなし。\nつきの みやこには、なみだが ありません。ものおもいも ありません。', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'きょうは、ちじょうへ おりる ひ。なにを もっていこう？', choices:[
    {t:'はごろもだけ', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'ふしの くすりも', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'はこに はごろもと、ふしの くすりの つぼを いれました。\nちじょうの ひとは、これを ほしがると きいています。'
    : 'はこに はごろもを いれました。\nこれさえ あれば、ひめは すぐに つきの ひとに もどれます。', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'くもに のって おりると、いえの まわりに たくさんの ひとが いました。\nゆみを もって、こちらを にらんでいます。', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'おきなが、なにかを さけんでいます。\nつかいには、その ことばの いみが わかりませんでした。\nつきには、「かえさない」という ことばが ないのです。', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'……なみだ？'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'ひめが すすみでてきました。\nつかいは、どうしよう。', choices:[
    {t:'きまりどおり、はごろもを きせる', go:'kun1'},
    {t:'ひめの たのみを きく', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'つかいは きまりどおり、ひめに はごろもを きせました。\nでも、おきなの ぬれた かおを、みないふりは できませんでした。', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'つきに もどっても、つかいは あの かおを おもいだします。\nなみだの ない くにで、はじめて、なみだの いみを しりました。', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'つきの つかいは、それからも ときどき、ちじょうを みおろします。\nなみだを しらない くにに、なみだを しっている ひとが、ひとり できました。\nおしまい。'},
  kut1:{art:'kg_tegami', text:'「てがみと きものを、おきなに わたしてください」\nひめの たのみに、つかいは うなずきました。\nつきの きまりに、そんな ものは ありません。でも、ちじょうの さほうなのでしょう。', next:'kut2'},
  kut2:{art:'kg_ato', text:'つかいは おきなの まえに おりて、てがみと きものを、ていねいに わたしました。\nおきなは、それを だきしめました。', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'つきの みやこに もどった つかいは、きまりに ひとつ、かきたしました。\n「ちじょうから かえる ものは、ひとつだけ、おいていっても よい」\nめでたし、めでたし。'}

  };

  Object.assign(T.SCENES, KAGUYA);

  /* ---- 図鑑(かぐやひめの部) ---- */
  T.ZK.push(
    {section:'かぐやひめ'},
    {id:'kg_seishi',  n:'つきの よるは、みあげて',        h:'はじめての 1かいめの、もとの おはなし'},
    {id:'kg_nokori',  n:'のこりの ひび',                  h:'みかどが くる まえに、ほんとうの ことを はなすと…'},
    {id:'kg_koromo',  n:'はごろもの まえに',              h:'はごろもを きる まえに、ふりかえると…'},
    {id:'kg_kusuri',  n:'ふしの くすり',                  h:'くすりを おきなと おうなに のこすと…'},
    {id:'kj_tsukiyo', n:'つきの ひかりの とどく いえ',    h:'おきなと おうなの おはなしで、えんがわで みあげると…'},
    {id:'kj_take',    n:'また、たけを とりに',            h:'おきなと おうなの おはなしで、あさ たけやぶへ いくと…'},
    {id:'ku_namida',  n:'なみだを しらない くに',         h:'つきの つかいの おはなしで、きまりどおりに すると…'},
    {id:'ku_tegami',  n:'ことづけ',                       h:'つきの つかいの おはなしで、ひめの たのみを きくと…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    kg_seishi:  {f:{first:1}, scenes:['kg21','kg22','kgc_shouten','kg23','kg24','e_kg_seishi']},
    kg_nokori:  {f:{}, scenes:['kgn1','kgn2','kgn3','kgn4','e_kg_nokori']},
    kg_koromo:  {f:{}, scenes:['kgm1','kgc_kao2','kgm2','e_kg_koromo']},
    kg_kusuri:  {f:{}, scenes:['kgu1','kgu2','kgu3','e_kg_kusuri']},
    kj_tsukiyo: {f:{}, scenes:['kjt1','e_kj_tsukiyo']},
    kj_take:    {f:{}, scenes:['kjk1','kjc_2','e_kj_take']},
    ku_namida:  {f:{}, scenes:['kun1','kun2','e_ku_namida']},
    ku_tegami:  {f:{}, scenes:['kut1','kut2','e_ku_tegami']}
  });

  /* ---- はじめての1かいめ(日本主流形+原典要素・一本道) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.kg = {
      init: { first:1 },
      scenes: [
        'kg1','kgc_take','kg2','kg4','kg5','kg6','kg7','kgc_t1','kgc_t2','kgc_t3','kgc_t4','kgc_t5','kg8','kg9',
        'kg10','kgc_mikado','kg11','kg12','kgc_dark1','kg13','kg14','kgc_kao1','kg15','kg16','kgc_hikari',
        'kg17','kg18','kg19','kg20','kg21','kg22','kgc_shouten','kg23','kg24','e_kg_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.kg    = { start:'kg1', init:{} };
  T.STORIES.okina = { start:'kj1', init:{} };
  T.STORIES.tsuki = { start:'ku1', init:{} };

})();
