"use strict";
/* おおきな かぶ - シナリオ正本（3作品目）
   底本=A.トルストイ再話1940年版(PD)。順序=おじいさん→おばあさん→まご→いぬ→ねこ→ねずみ
   🔴内田莉莎子訳の失敗文連鎖(ところが→それでも→まだまだ…)はなぞらない。掛け声のみ一般定型として使用
   文体: わかちがき・ひらがな主体。この話は底本の趣に合わせ いぬ・ねこ・ねずみ もひらがな
   ※シーンの enter:{...} は表示時に F へ取り込まれる(1周目の引っぱり列を段階的に増やすため) */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var NAMES = { baa:'おばあさん', mago:'まご', inu:'いぬ', neko:'ねこ' };

  /* 連鎖文: いま列に いる みんなが つながる(小さい者から かぶへ) */
  function chain(f){
    var order = [];
    if(f.nezumi) order.push('ねずみ');
    if(f.c5) order.push(NAMES[f.c5]);
    if(f.c4) order.push(NAMES[f.c4]);
    if(f.c3) order.push(NAMES[f.c3]);
    if(f.c2) order.push(NAMES[f.c2]);
    order.push('おじいさん');
    if(order.length === 1) return 'おじいさんは かぶを つかみました。';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += order[i] + 'が ' + order[i+1] + 'に、\n';
    }
    t += 'おじいさんが かぶに、ぎゅっと つかまりました。';
    return t;
  }

  var KABU = {

  /* ================= おおきな かぶ(本編) ================= */

  kb1:{art:'kabu_hata', text:'これは、ひろい ひろい はたけの おはなし。\nはるの あさ、おじいさんが かぶの たねを まきました。\n「あまい あまい かぶに おなり。おおきな おおきな かぶに おなり」', next:'kb2'},

  kb2:{art:'kabu_hata', text:'おじいさんの まいにちの おせわが はじまります。\nなにを いちばん たいせつに しよう？', choices:[
    {t:'まいにち たっぷり みずを やる', go:'kb2r', set:{care:'mizu'}},
    {t:'まいにち やさしく はなしかける', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '「おおきく なあれ、おおきく なあれ」\nはなしかけるたびに、はっぱが うれしそうに ゆれた きが します。'
    : 'おひさまの ひかりと たっぷりの みずで、\nはっぱは ぐんぐん、ぐんぐん のびていきます。', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'かぶは そだって そだって、とうとう おじいさんの せより おおきく なりました。\nこんな かぶは、むらの だれも みたことが ありません。', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'ＶＳ'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'さあ、しゅうかくの ひが きました。';
    if(f.first) return t + '\nおじいさんは うでまくりを しました。';
    return t + '\nどうしよう？';
  }, choices:f=>{
    var c = [{t:'さっそく ぬいてみる', go:'kb5'}];
    c.push({t:'もっと おおきく そだててみる', go:'km1'});
    if(f.care==='hanashi') c.push({t:'かぶに おねがいしてみる', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'おじいさんは かぶを つかんで、ちからいっぱい！', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'うんとこしょ、どっこいしょ！！'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'かぶは びくとも しません。';
    if(f.first) return t + '\n「ばあさんや、ちょっと てを かしておくれ」';
    return t + '\nだれを よんでこよう？';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES[k]+'を よんでくる', go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> NAMES[f.c2]+'が やってきて、うしろに つきました。\n'+chain(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'うんとこしょ、どっこいしょ！！'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'かぶは まだ すこしも うごきません。';
    if(f.first) return t + '\n「こんどは まごを よんでこよう」';
    return t + '\nつぎは だれを よぶ？';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES[k]+'を よんでくる', go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> NAMES[f.c3]+'が やってきて、うしろに つきました。\n'+chain(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'うんとこしょ、どっこいしょ！！'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'はっぱが ゆさゆさ ゆれた だけ。';
    if(f.first) return t + '\n「よし、いぬも よんでこよう」';
    return t + '\nつぎは だれを よぶ？';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES[k]+'を よんでくる', go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> NAMES[f.c4]+'が やってきて、うしろに つきました。\n'+chain(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'うんとこしょ、どっこいしょ！！'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'ずずっ。すこしだけ うごいた…… きが します。';
    if(f.first) return t + '\n「ねこも おいで！」';
    return t + '\nさいごの ひとりを よぼう。';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES[k]+'を よんでくる', go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> NAMES[f.c5]+'が やってきて、うしろに つきました。\n'+chain(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'うんとこしょ、どっこいしょ！！'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'ぬけそうで ぬけません。あと ほんの ひといきです。\nでも、もう よべる ひとは いません。';
    if(f.first) return t;
    return t + '\nどうする？';
  }, choices:[
    {t:'あきらめずに もう いちど', go:'kb10', set:{nezumi:1}},
    {t:'きょうは ここまでに する', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'すると、ねこが すっと はしっていって、\nちいさな ちいさな ねずみを つれてきました。\n「きみの ちからが ひつようなの」', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'ぼくで いいの……？'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'うんとこしょ、どっこいしょ！！'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'かぶが そらたかく とびあがって、\nみんなは しりもちを つきました。\nいたた……でも、だれの かおにも おおきな えがおです。', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'やっと、かぶは ぬけました。\nさいごの ひとおしは、いちばん ちいさな ねずみでした。\nちいさな ちからも、みんなと あわされば せかいいち。\nめでたし、めでたし。'},

  /* ---- もっと そだてる → むらじゅうの おまつり ---- */
  km1:{art:'kabu_sodatsu', text:'「ここまで きたら、とことん おおきく してみよう」\nみずを やり、うたを うたい、まいにち まいにち おせわを つづけました。\nかぶは とうとう、おじいさんの いえより おおきく なりました。', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'こうなったら、かぞくだけでは とても むりです。\nおじいさんは おかの うえから さけびました。\n「おーい！ むらの みんなー！ ちからを かしてくれー！」', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'むらじゅう、しゅうごう！！'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'パンやさんも、こなひきさんも、こどもたちも。\nむらじゅうの ひとが、いちれつに つながりました。\nいちばん うしろは、やっぱり ちいさな ねずみです。', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'うんとこしょ、どっこいしょ！！'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'ぬけた かぶは、おおきな おおきな おなべへ。\nゆげの むこうで、みんなの わらいごえが ひびきます。', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'せかいいち おおきな かぶは、せかいいち おおきな おまつりに なりました。\nあまい かぶの スープは、むらじゅうの おなかを あたためました。\n「らいねんも おおきいのを たのむよ！」\nめでたし、めでたし。'},

  /* ---- かぶに おねがい → かぶの きもち ---- */
  ko1:{art:'kabu_talk', text:'おじいさんは かぶの まえに こしを おろしました。\n「まいにち はなしかけた こえだもの。きっと とどくはず」\n「かぶさんや。そろそろ でてきてくれないかい」', next:'ko2'},
  ko2:{art:'kabu_talk', text:'はっぱが ゆさりと ゆれました。\nつちが もこもこと もりあがって……', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'よんだ？'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'「まいにち こえを かけてくれたのは、おじいさんだね。\nこえで ちゃんと わかるよ。\nいいよ。じゃあ、いくよ。せーの……」', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'かぶは じぶんから、ぽーんと とびだしてくれました。\nちからずくじゃ なくても、こころは とどくのです。\nまいにちの 「おおきく なあれ」は、まほうの ことばでした。\nめでたし、めでたし。'},

  /* ---- きょうは ここまで → あしたも みんなで ---- */
  ka1:{art:'kabu_yuyake', text:'「きょうは ここまでに しよう。みんな、ようく がんばった」\nゆうやけの はたけで、あたたかい おちゃを のみました。\nかぶも きょうは、ゆっくり おやすみ。', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'「あした また、みんなで ぬこうな」\nそう いいあって、それぞれの いえに かえります。\nぬけない ひが あっても だいじょうぶ。\nあしたが なんだか たのしみなのですから。\nめでたし、めでたし。'},

  /* ================= かぶの はなし ================= */

  kt1:{art:'kt_tsuchi', text:'これは、つちの なかの おはなし。\nぼくは かぶ。ひろい はたけの まんなかで、ぬくぬく そだっています。\nうえからは まいにち、おじいさんの こえが きこえます。', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'つちの なかにも、たのしみは いっぱい。\nきょうは なにを しよう？', choices:[
    {t:'みみずさんと おしゃべりする', go:'kt2r', set:{klife:'mimizu'}},
    {t:'おひさまの あじを ゆっくり あじわう', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '「きみ、また おおきく なったねえ」と みみずさん。\n「えへへ。まいにち いい こえを きいてるからね」'
    : 'はっぱから、おひさまの あじが とろりと おりてきます。\nあまくて、ぽかぽかで、ちょっと ねむくなる あじです。', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'そして ある ひ。\nぐいっ！\n「わわっ、なんだ なんだ？」\nからだが うえに ひっぱられます。しゅうかくの ひが きたのです。', next:'kt4'},
  kt4:{art:'kt_up', text:'さあ、どうしよう？', choices:[
    {t:'まだ でたくない！ ふんばる', go:'kt5'},
    {t:'よし、そとの せかいを みてみよう', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'「まだ ここに いたいんだ！」\nかぶは ねっこに ちからを こめて、ぐぐっと ふんばりました。\nうえでは「うんとこしょ、どっこいしょ」。どんどん にぎやかに なっていきます。', next:'kt6'},
  kt6:{art:'kt_up', text:'ふたり、さんにん、よにん……。\nそれでも まけずに ふんばっていると、さいごに とても ちいさな こえが きこえました。', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'おねがい、かぶさん'}, then:'kt7'},
  kt7:{art:'kt_up', text:'ちからずくなら、いくらでも ふんばれます。\nでも、そんな ちいさな こえで たのまれたら……\n「……もう、しかたないなあ」\nかぶは ふっと、ねっこを ゆるめました。', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'そらは たかくて、みんなの えがおが まぶしくて。\n「なんだ。そとも わるくないや」\nおおきな ちからには まけなかった かぶも、\nちいさな おねがいには かなわなかったのでした。\nめでたし、めでたし。'},

  ktj1:{art:'kt_up', text:'「そういえば、そらって どんな いろなんだろう」\nかぶは むずむず してきました。\n「よし、じぶんから いっちゃえ。せーの……」', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'あんまり いきおいよく とびだしたので、\nみんなは そろって しりもちを つきました。\n「そらって、こんなに ひろいのか！」\nじぶんで きめた とびだしは、さいこうの きぶんでした。\nめでたし、めでたし。'},

  /* ================= ねずみの はなし ================= */

  kn1:{art:'kn_naya', text:'これは、なやの すみっこに すむ、ちいさな ねずみの おはなし。\nちからしごとは にがてです。おもい ものは はこべません。\nでも、きょうも げんきに ちょろちょろ しています。', next:'kn2'},
  kn2:{art:'kn_naya', text:'きょうの おひるは なにを しよう？', choices:[
    {t:'チーズの かけらを さがす', go:'kn2r', set:{nlife:'cheese'}},
    {t:'まどべで ひなたぼっこ', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'まどべの ひだまりは、せかいいちの とくとうせき。\nひげを ぴんと のばして、うとうと うとうと。'
    : 'なやの おくで、いい におい。\nちいさな チーズの かけらを みつけて、ほっぺが ぱんぱんです。', next:'kn3'},
  kn3:{art:'kn_neko', text:'そこへ、ねこが やってきました。\nいつもなら にげるところ。でも きょうの ねこは、ぺこりと あたまを さげたのです。\n「おねがいが あるの。ちからを かしてほしいの」', choices:[
    {t:'こわいけど、ついていく', go:'kn3a'},
    {t:'「ほんとうに ぼくで いいの？」と きく', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'ねこの あとを、どきどき しながら ついていきます。\nはたけに つくと、みんなが こまった かおで まっていました。', next:'kn4'},
  kn3b:{art:'kn_neko', text:'「ちいさな きみだから いいの」と ねこは いいました。\n「いちばん うしろには、いちばん かるい ひとが いるんだって」', next:'kn4'},
  kn4:{art:'kn_retsu', text:'れつの いちばん うしろに つきました。\nまえには おおきな せなかが、ずらり。\nちいさな ねずみに できることは、なんだろう？', choices:[
    {t:'しっぽで ぎゅっと ひっぱる', go:'kns1'},
    {t:'おおきな こえで おんどを とる', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'ねずみは ねこの しっぽに、じぶんの しっぽを からめて、\nちいさな からだで おもいっきり！', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'うんとこしょ、どっこいしょ！！'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'「さいごの ひとおしは、きみだったね」と おじいさん。\nちいさな しっぽの、おおきな おおてがら。\nその ひから ねずみは、なやの すみっこじゃなく、\nみんなの まんなかで ごはんを たべています。\nめでたし、めでたし。'},

  kno1:{art:'kn_retsu', text:'ちからが だめなら、こえが ある！\nねずみは おおきく いきを すいこんで、せいいっぱい さけびました。', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'せーの！ うんとこしょ！！'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'すっぽーん！！'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'みんなの ちからが、こえの おかげで ひとつに そろいました。\n「いい おんどだったよ」と おばあさんが わらいます。\nちからが ちいさくても、みんなを そろえる こえが ある。\nねずみは むねを はって、ちゅう、と なきました。\nめでたし、めでたし。'},

  /* ---- 1周目専用(正統・トルストイ順の固定列。enterで列が段階的に増える) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'おばあさんが やってきて、おじいさんの うしろに つきました。\nおばあさんが おじいさんに、おじいさんが かぶに、ぎゅっと つかまります。', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'うんとこしょ、どっこいしょ！！'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'かぶは まだ すこしも うごきません。\nこんどは まごが やってきて、うしろに つきました。', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'うんとこしょ、どっこいしょ！！'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'はっぱが ゆさゆさ ゆれた だけ。\nこんどは いぬが かけてきて、うしろに つきました。', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'うんとこしょ、どっこいしょ！！'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'ずずっ。すこしだけ うごいた…… きが します。\nこんどは ねこが とんできて、うしろに つきました。', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'うんとこしょ、どっこいしょ！！'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'ぬけそうで ぬけません。あと ほんの ひといきです。\nすると ねこが、ちいさな ちいさな ねずみを つれてきました。', next:'kc_nezu'}

  };

  Object.assign(T.SCENES, KABU);

  /* ---- 図鑑(おおきなかぶの部) ---- */
  T.ZK.push(
    {section:'おおきな かぶ'},
    {id:'kb_seishi',  n:'やっと ぬけました',            h:'はじめての 1かいめの、もとの おはなし'},
    {id:'kb_matsuri', n:'むらじゅうの おまつり',        h:'ぬくのを がまんして、もっと そだてると…'},
    {id:'kb_onegai',  n:'かぶの きもち',                h:'まいにち はなしかけて そだてると…'},
    {id:'kb_ashita',  n:'あしたも みんなで',            h:'ぬけない ひは、むりを しないで…'},
    {id:'kt_koe',     n:'ちいさな こえに まけた',       h:'かぶの おはなしで、ふんばりつづけると…'},
    {id:'kt_jibun',   n:'じぶんで すっぽーん',          h:'かぶの おはなしで、そとが きになったら…'},
    {id:'kn_shippo',  n:'ちいさな しっぽの おおてがら', h:'ねずみの おはなしで、しっぽを つかうと…'},
    {id:'kn_ondo',    n:'ちびっこ おんどとり',          h:'ねずみの おはなしで、こえを つかうと…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    kb_seishi:  {f:{first:1, c2:'baa', c3:'mago', c4:'inu', c5:'neko'}, scenes:['kbf6','kc_nezu','kc_p6','kc_suppon','kb11','e_kb_seishi']},
    kb_matsuri: {f:{}, scenes:['km1','km2','kc_mura','km3','kc_pM','kc_supponM','km4','e_kb_matsuri']},
    kb_onegai:  {f:{care:'hanashi'}, scenes:['ko1','ko2','kc_kao_kabu','ko3','kc_supponO','e_kb_onegai']},
    kb_ashita:  {f:{c2:'baa', c3:'mago', c4:'inu', c5:'neko'}, scenes:['ka1','e_kb_ashita']},
    kt_koe:     {f:{}, scenes:['kt5','kt6','kc_kt1','kt7','ktc_sup1','e_kt_koe']},
    kt_jibun:   {f:{}, scenes:['ktj1','ktc_sup2','e_kt_jibun']},
    kn_shippo:  {f:{}, scenes:['kns1','knc_p1','knc_sup1','e_kn_shippo']},
    kn_ondo:    {f:{}, scenes:['kno1','knc_k1','knc_sup2','e_kn_ondo']}
  });

  /* ---- はじめての1かいめ(正統・トルストイ版忠実) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.kabu = {
      init: { first:1 },
      scenes: [
        'kb1','kb3','kc_vs','kb4','kb5','kc_p1','kb5f',
        'kbf2','kc_f2','kbf3','kc_f3','kbf4','kc_f4','kbf5','kc_f5','kbf6',
        'kc_nezu','kc_p6','kc_suppon','kb11','e_kb_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.kabu   = { start:'kb1', init:{} };
  T.STORIES.turnip = { start:'kt1', init:{} };
  T.STORIES.mouse  = { start:'kn1', init:{} };

})();
