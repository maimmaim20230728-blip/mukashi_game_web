"use strict";
/* ブレーメンの おんがくたい - シナリオ正本（8作品目）
   底本=グリム童話 KHM27 決定版(1857・de.wikisource)+Margaret Hunt英訳(1884・Gutenberg #5314)。ともにPD。
   ヒロさん承認済み(2026-09-02): 動機=各動物の一人称の台詞で原文どおり(絵に描かない)/
   「ブレーメンに着く」分岐=作る(上下なし)/楽器=持たせない("つもり"の台詞のみ)。
   🔴瀬田貞二訳(2049年まで)ほか保護中訳者の言い回しをなぞらない。誘いの定型・鳴き声の並べ方・報告の4語・
   結び句・鳴き声の聞きなし(bringt mir den Schelm her)は独原文から自前訳。動物の固有名(Packan等)不使用
   🔴主人を断罪する地の文なし・「年をとると役に立たない」を事実として書かない・4匹が泥棒を嘲らない・
   「着けなかったけれど」型の逆接や「本当の目的地は仲間」型の意味づけを書かない
   文体: わかちがき・ひらがな主体。ロバ/イヌ/ネコ/オンドリ=カタカナ・どろぼう=ひらがな・あるじ */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var BREMEN = {

  /* ================= ブレーメンの おんがくたい(本編) ================= */

  br1:{art:'br_koya', text:'これは、ひとりの あるじの ところで、ながい あいだ はたらいた ロバの おはなし。\nロバは こなひきごやで、こなの ふくろを はこびつづけてきました。\nでも としを とって、ちからが おとろえてきました。', next:'br2'},

  br2:{art:'br_koya', text:'ある ひ、ロバは きづきました。\n（あるじは、わたしに えさを やるのを やめようと かんがえている）\nそこで ロバは、こやを でました。', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'ブレーメンへ！！'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '「ブレーメンへ いって、まちの おんがくたいに なろう」\nロバは そう きめて、かいどうを あるきはじめました。';
    if(f.first) return t;
    return t + '\nどっちの みちを いく？';
  }, choices:[
    {t:'かわぞいの みち', go:'br3r', set:{brmichi:'kawa'}},
    {t:'はたけの あいだの みち', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'むぎばたけの あいだの みちは、かぜが よく とおります。\nロバは ひさしぶりに、なにも はこばずに あるきました。'
    : 'かわぞいの みちは、みずの おとが きもちよく ひびきます。\nロバは ひさしぶりに、なにも はこばずに あるきました。', next:'br4'},

  br4:{art:'br_inu', text:'みちばたに、りょうけんが ねそべっていました。\nはあ、はあと くるしそうに いきを しています。\n「どうしたんだい、そんなに いきを きらして」', next:'br5'},

  br5:{art:'br_inu', text:'「としを とって、かりに いけなく なった。\nそしたら あるじに ころされそうに なったんだ。\nにげてきたけれど、これから どうやって くらせば いいのか」\n「わたしは ブレーメンへ いって、おんがくたいに なる。いっしょに おいで。\nわたしは リュートを ひく。おまえは たいこを たたけば いい」', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'イヌ、おんがくたいに はいる！！'}, then:'br6'},

  br6:{art:'br_neko', text:'すこし いくと、へいの うえに ネコが すわっていました。\nみっか あめが ふりつづいた あとのような、しずんだ かおです。', next:'br7'},

  br7:{art:'br_neko', text:'「としを とって、はが よわって、\nねずみを おいかけるより だんろの まえに いたく なった。\nそしたら おかみさんに、かわに しずめられそうに なったの」\n「なら、いっしょに ブレーメンへ。\nよるの うたなら、おまえは だれにも まけないだろう」', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'よるの うたなら……'}, then:'br8'},

  br8:{art:'br_ondori', text:'のうかの もんの うえで、オンドリが せいいっぱい ないていました。\n「ずいぶん おおごえだね」\n「あしたは にちようびで、おきゃくが くる。\nわたしは スープに なる はずなんだ。\nだから、こえが でる うちに、ないておくんだ」', next:'br9'},

  br9:{art:'br_ondori', text:'「なにかは、しぬより ましだ。おまえは いい こえを している。\nいっしょに おんがくを やろう。きっと なにかに なる」\nオンドリは、もんから とびおりました。', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'コケコッコー！！'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'ブレーメンは、いちにちでは つけません。\nよるに なって、4ひきは もりで やすむことに しました。';
    if(f.first) return t + '\nロバと イヌは きの したに。ネコは えだの うえに。オンドリは てっぺんに。';
    return t + '\nどこで やすむ？';
  }, choices:[
    {t:'きの したで、みんな いっしょに', go:'br10r', set:{brmori:'shita'}},
    {t:'たかい えだで、みはりを しながら', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'ネコと オンドリは たかい えだに のぼりました。\nしたでは ロバと イヌが、せなかを くっつけて ねむります。'
    : '4ひきは おおきな きの したに、まるく なって ねむりました。\nオンドリだけは、ねる まえに てっぺんへ のぼりました。', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'てっぺんの オンドリが、とおくに あかりを みつけました。\n「あそこに いえが ある。あかりが ついている」';
    if(f.first) return t + '\n「いこう。ここの やどは、あまり よくない」と ロバ。';
    return t + '\nどうする？';
  }, choices:[
    {t:'あかりの いえへ いく', go:'br12'},
    {t:'ちかづかず、もりで よを あかす', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'あかりの いえに つくと、ロバが まどから のぞきました。\n「なにが みえる？」と オンドリ。\n「ごちそうの ならんだ テーブルと、\nそれを かこんで たべている どろぼうたちだ」', next:'br13'},

  br13:{art:'br_ie_soto', text:'「わたしたちにも、あれが ひつようだ」と オンドリ。\n4ひきは あたまを よせて、そうだんしました。', next:'br14'},

  br14:{art:'br_mado', text:'ロバが まえあしを まどに かけました。\nその せなかに イヌが とびのり、\nイヌの うえに ネコが のぼり、\nいちばん うえに オンドリが とまりました。', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'がっしょう！！'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'そして、いっせいに まどから とびこみました。\nガラスが がしゃん！\nどろぼうたちは「ばけものだ！」と さけんで、もりへ にげていきました。', next:'br16'},

  br16:{art:'br_gochisou', text:'4ひきは テーブルに つきました。\nよんじゅうにちぶんは たべたような かおで あかりを けして、\nそれぞれ すきな ばしょで ねむりました。\nロバは にわ、イヌは とぐち、ネコは だんろ、オンドリは やねの はり。', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'まよなか。'}, then:'br17'},

  br17:{art:'br_yoru', text:'どろぼうの ひとりが、ようすを みに もどってきました。\nいえは しずかです。だいどころに はいると、だんろの おくで なにかが ひかっています。\n（もえのこりの すみだ）\nそう おもって、マッチを ちかづけた そのとき。', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'ひっかき！！'}, then:'br18'},

  br18:{art:'br_yoru', text:'ネコが かおに とびついて、ひっかきました。\nどろぼうは うらぐちへ にげます。そこには イヌ。', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'がぶり！！'}, then:'br19'},

  br19:{art:'br_niwa', text:'にわに とびだすと、ロバが うしろあしで けとばしました。', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'けとばし！！'}, then:'br20'},

  br20:{art:'br_niwa', text:'やねの うえでは、めを さました オンドリが おおごえで なきました。\n「コケコッコー！」\nどろぼうには、こう きこえました。\n「そいつを ここへ つれてこい！」', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'まじょだ！ さいばんかんだ！'}, then:'br21'},

  br21:{art:'br_houkoku', text:'どろぼうは もりへ にげかえって、なかまに いいました。\n「あの いえには おそろしい まじょが いる。\nつばを はいて、ながい つめで かおを ひっかいた。\nとぐちには ナイフを もった おとこが いて、あしを さした。\nにわには くろい かいぶつが いて、こんぼうで なぐった。\nやねの うえには さいばんかんが いて、そいつを ここへ つれてこいと さけんだ」', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'それからは、どろぼうたちが もどってくる ことは ありませんでした。';
    if(f.first) return t;
    return t + '\nあさ、4ひきは そうだんしました。どうする？';
  }, choices:[
    {t:'この いえに すむ', go:'e_br_seishi'},
    {t:'やっぱり ブレーメンへ いく', go:'brb1'},
    {t:'この いえで、あさに なにを するか きめる', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'4ひきの おんがくたいは、この いえが すっかり きに いって、\nでていこうとは おもいませんでした。\nこれを さいごに はなした ひとの くちは、まだ あたたかい。\nめでたし、めでたし。'},

  /* ---- ブレーメンの まちで ---- */
  brb1:{art:'br_roba', text:'「ここは いい いえだ。でも、わたしたちは おんがくたいだ」\n4ひきは いえに かぎを かけて、また かいどうを あるきました。', next:'brb2'},
  brb2:{art:'br_bremen', text:'ブレーメンの まちは、おおきくて にぎやかでした。\nそして ひろばには、もう、まちの おんがくたいが いました。\nラッパも たいこも、ぴかぴかです。', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'……なら、こっちで'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'4ひきは ひろばの すみで、こえを あわせました。\nヒーホー、ワン、ニャー、コケコッコー。\nこどもたちが、ひとり、ふたりと あつまってきました。', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'ぴかぴかの がっきは ありません。\nでも ひろばの すみには、まいにち こどもたちが きました。\n4ひきは まちの すみで、おんがくたいに なりました。\nめでたし、めでたし。'},

  /* ---- もりの あさ ---- */
  brm1:{art:'br_mori', text:'「よるの いえには、ちかづかない ほうが いい」と ロバ。\n4ひきは もりで、よを あかしました。', next:'brm2'},
  brm2:{art:'br_mori', text:'あさ、オンドリが ないて、みんなが めを さましました。\n「せっかくだ。ひとつ、あわせてみよう」\nヒーホー、ワン、ニャー、コケコッコー。', next:'brm3'},
  brm3:{art:'br_roba', text:'そこへ、こなの ふくろを つんだ にぐるまが とおりかかりました。\nこなひきは ロバの こえを きいて いいました。\n「いい こえだ。うちの こやで はたらかないか。えさは たっぷり やるよ」', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'わたしは、おんがくたいだ'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'ロバは ていねいに ことわって、なかまと あるきつづけました。\nどこへ つくかは、まだ わかりません。\n4ひきの うたは、もりの あさに よく ひびきました。\nめでたし、めでたし。'},

  /* ---- それぞれの あさ ---- */
  bra1:{art:'br_ie_asa', text:'あさ、この いえで なにを する？', choices:[
    {t:'オンドリが やねで ときを つげる', go:'bra1r', set:{brasa:'ondori'}},
    {t:'イヌが とぐちで ひるねを する', go:'bra1r', set:{brasa:'inu'}},
    {t:'ネコが だんろの まえで まるく なる', go:'bra1r', set:{brasa:'neko'}},
    {t:'ロバが ひなたで みみを ゆらす', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'イヌは とぐちに ねそべりました。\nもう、だれかを おいかけなくても いいのです。';
    if(f.brasa==='neko') return 'ネコは だんろの まえで まるく なりました。\nねずみを おいかける ひは、もう おわりです。';
    if(f.brasa==='roba') return 'ロバは ひなたに たって、ながい みみを ゆらしました。\nこなの ふくろは、もう せなかに ありません。';
    return 'オンドリは やねに のぼって、ひがしの そらに むかって なきました。\nだれに たのまれたのでも ありません。';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'だれに いわれたのでも ありません。\nそれぞれが、じぶんで きめました。\nきょうも オンドリが ときを つげ、イヌが とぐちで ねむり、\nネコが だんろの まえで まるく なり、ロバは ひなたで ながい みみを ゆらしています。\nめでたし、めでたし。'},

  /* ================= どろぼうの はなし ================= */

  bd1:{art:'dorobou_mori', text:'これは、もりの いえに すんでいた、3にんの どろぼうの おはなし。\nその ばんも、テーブルには ごちそうが ならんでいました。', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'きょうの ごちそうは？', choices:[
    {t:'ソーセージと ワイン', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'パンと チーズと りんご', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'パンと チーズと りんごを、テーブルいっぱいに ならべました。\n3にんは、いい きぶんで たべはじめました。'
    : 'ソーセージを やいて、ワインを つぎました。\n3にんは、いい きぶんで たべはじめました。', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'とつぜん、まどの そとで、きいたことの ない こえが しました。\nヒーホー、ワン、ニャー、コケコッコー。ぜんぶ いっぺんに。\nそして ガラスが がしゃん！\n「ばけものだ！」\n3にんは もりへ にげだしました。', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'もりの おくで、3にんは いきを ととのえました。\n「あの いえ、どうする？」', choices:[
    {t:'ようすを みに もどる', go:'bdg1'},
    {t:'あの いえは、あきらめる', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'まっくらな だいどころ。\nだんろの おくに、ふたつの ひが ともっています。\n（もえのこりの すみだ）\nマッチを ちかづけると……', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'まじょだ！！'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'かおを ひっかかれ、あしを さされ、こんぼうで なぐられ、\nやねから「そいつを ここへ つれてこい！」\nどろぼうは もりへ にげかえりました。', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'「まじょと、ナイフの おとこと、くろい かいぶつと、さいばんかんが いる」\nなかまは だれも、その いえに ちかづこうとは しませんでした。\nほんとうの ことは、だれも しらないままです。\nめでたし、めでたし。'},

  bdm1:{art:'dorobou_mori', text:'「あの いえは、もう あいつらの ものだ」\n3にんは もりの でぐちへ あるきました。', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'まちには あさいちが たっていました。\n「にもつはこびを さがしている」と ふだが でています。\n3にんは かおを みあわせました。', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'その ひから 3にんが なにを して くらしたのかは、\nこの はなしには かかれていません。\nもりの いえには、4ひきの うたが ひびいています。\nおしまい。'},

  /* ================= オンドリの はなし ================= */

  bo1:{art:'ondori_yane', text:'これは、のうかの もんの うえで ないていた、オンドリの おはなし。\nあしたは にちようび。おきゃくが きて、わたしは スープに なる。', next:'bo2'},
  bo2:{art:'ondori_yane', text:'さいごの ひは、なにを する？', choices:[
    {t:'おもいきり なく', go:'bo2r', set:{bolife:'naku'}},
    {t:'にわを ゆっくり あるく', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'にわを はしから はしまで、ゆっくり あるきました。\nみおさめの つもりでした。'
    : 'もんの うえで、こえが かれるまで なきました。\nみみを ふさぐ ひとも いましたが、かまいません。', next:'bo3'},
  bo3:{art:'br_ondori', text:'そこへ、ロバと イヌと ネコが とおりかかりました。\n「なにかは、しぬより ましだ。おまえは いい こえを している」\nオンドリは、もんから とびおりました。', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'わたしの こえで、いいのか'}, then:'bo4'},
  bo4:{art:'br_mado', text:'もりの いえで、オンドリは いちばん うえに とまりました。\nそれからの ことは、オンドリが きめます。', choices:[
    {t:'まよなか、やねの うえから なく', go:'bok1'},
    {t:'この いえに すんで、あさを つげる', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'まよなか、やねの はりで めが さめました。\nしたで どろぼうが あばれています。\nオンドリは、せいいっぱい なきました。', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'コケコッコー！！'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'どろぼうには「そいつを ここへ つれてこい」と きこえました。\nスープに なる はずだった こえが、いえを まもったのです。', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'こえの つかいみちは、じぶんで きめる。\nオンドリは それからも、いいたい ときに、いいたい ように なきました。\nめでたし、めでたし。'},

  boa1:{art:'br_ie_asa', text:'いえに すみはじめて、オンドリは やねに のぼりました。\nだれに たのまれたのでも ありません。\nあさ、ひがしの そらが しろく なると、オンドリは なきました。', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'イヌが めを さまし、ネコが のびを して、ロバが みみを ふりました。\n「もう スープには ならない。まいあさ、ここで なく」', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'オンドリの こえで、だれかが めを さまします。\nそれだけの ことが、オンドリには うれしいのでした。\nめでたし、めでたし。'}

  };

  Object.assign(T.SCENES, BREMEN);

  /* ---- 図鑑(ブレーメンの おんがくたいの部) ---- */
  T.ZK.push(
    {section:'ブレーメンの おんがくたい'},
    {id:'br_seishi', n:'きに いった いえ',           h:'はじめての 1かいめの、もとの おはなし'},
    {id:'br_bremen', n:'ブレーメンの まちで',         h:'あさ、やっぱり ブレーメンへ いくと…'},
    {id:'br_mori',   n:'もりの あさ',                 h:'あかりの いえに ちかづかずに いると…'},
    {id:'br_asa',    n:'それぞれの あさ',             h:'この いえで、あさに なにを するか きめると…'},
    {id:'bd_gokai',  n:'まじょと さいばんかん',       h:'どろぼうの おはなしで、ようすを みに もどると…'},
    {id:'bd_machi',  n:'もりを でる',                 h:'どろぼうの おはなしで、いえを あきらめると…'},
    {id:'bo_koe',    n:'こえが とどいた',             h:'オンドリの おはなしで、まよなかに なくと…'},
    {id:'bo_asa',    n:'あさを つげる',               h:'オンドリの おはなしで、あさを つげると…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    br_seishi: {f:{first:1}, scenes:['brc_kao_dorobou','br21','br22','e_br_seishi']},
    br_bremen: {f:{}, scenes:['brb1','brb2','brc_kao_roba','brb3','e_br_bremen']},
    br_mori:   {f:{}, scenes:['brm1','brm2','brm3','brc_kao_roba2','e_br_mori']},
    br_asa:    {f:{brasa:'ondori'}, scenes:['bra1r','e_br_asa']},
    bd_gokai:  {f:{}, scenes:['bdg1','bdc_1','bdg2','e_bd_gokai']},
    bd_machi:  {f:{}, scenes:['bdm1','bdm2','e_bd_machi']},
    bo_koe:    {f:{}, scenes:['bok1','boc_2','bok2','e_bo_koe']},
    bo_asa:    {f:{}, scenes:['boa1','boa2','e_bo_asa']}
  });

  /* ---- はじめての1かいめ(決定版忠実・一本道) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.br = {
      init: { first:1 },
      scenes: [
        'br1','br2','brc_tabi','br3','br4','br5','brc_join','br6','br7','brc_neko','br8','br9','brc_ondori',
        'br10','br11','br12','br13','br14','brc_kasane','br15','br16','brc_dark','br17','brc_hikkaki','br18',
        'brc_kamitsuki','br19','brc_zushin','br20','brc_kao_dorobou','br21','br22','e_br_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.br      = { start:'br1', init:{} };
  T.STORIES.dorobou = { start:'bd1', init:{} };
  T.STORIES.ondori  = { start:'bo1', init:{} };

})();
