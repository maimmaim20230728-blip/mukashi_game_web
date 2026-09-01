"use strict";
/* さんびきのこぶた - シナリオ正本（5作品目）
   底本=Joseph Jacobs "English Fairy Tales" (1890・PD確認済み)。
   1周目の筋は日本の主流形(逃げ込み型・全員無事)。ヒロさん承認済み(2026-09-01)。
   原典のだまし合い3連(かぶばたけ/りんご/たる)は分岐 pb_genten で復活。
   🔴日本語セリフは全てJacobs英語原文からの自前訳(瀬田貞二訳=2049年まで存続・なぞらない)
   🔴ディズニー固有要素(固有名・楽器・性格対比・楽曲)は不使用
   文体: わかちがき・ひらがな主体。オオカミ=カタカナ(あかずきんと統一)・こぶた=ひらがな */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var KOBUTA = {

  /* ================= さんびきのこぶた(本編) ================= */

  p1:{art:'buta_hajimari', text:'これは、3びきの こぶたの きょうだいの おはなし。\nおおきい こぶた、まんなかの こぶた、ちいさい こぶた。\nみんな おおきく なったので、じぶんの いえを たてる ことに しました。', next:'p2'},

  p2:{art:'buta_hajimari', text:'たびだちの あさ。おかあさんに、なんて いおう？', choices:[
    {t:'いってきます！と げんきよく', go:'p2r', set:{plife:'genki'}},
    {t:'おいしいものが できたら もってくるね', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '「たのしみに してるね」と おかあさんは にっこり。\nみおくりの てが、いつまでも ふられていました。'
    : '「いってらっしゃい！」と おかあさんも げんきよく。\nあかるい こえに おくられて、あしどりも かるく なります。', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'みちは みっつに わかれていました。';
    if(f.first) return t + '\n3びきは てを ふりあって、それぞれの みちを あるいていきました。';
    return t + '\nさて、どうする？';
  }, choices:[
    {t:'それぞれの みちを いく', go:'p4'},
    {t:'3びきで いっしょに 1けんを たてる', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'おおきい こぶたは、わらを どっさり せおった おじさんに あいました。\n「その わら、わけてください」\nわらの いえなら、きょうじゅうに できあがります。\nはやく できるのが、いちばんの いいところ。', next:'p5'},

  p5:{art:'buta_eda', text:'まんなかの こぶたは、きの えだを かかえた おじさんに あいました。\n「その えだ、わけてください」\nえだの いえは、かぜが とおって きもちよさそう。\nそれが いちばんの いいところ。', next:'p6'},

  p6:{art:'buta_renga', text:'ちいさい こぶたは、レンガを つんだ くるまを ひく おじさんに あいました。\n「その レンガ、わけてください」\nレンガの いえは、じかんは かかるけれど、うんと じょうぶ。\nそれが いちばんの いいところ。', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'トンカン トンカン！！'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'みっつの いえが できあがりました。\nわらの いえ、えだの いえ、レンガの いえ。\nどれも じまんの いえです。';
    if(f.first) return t;
    return t + '\nできた いえで、まず なにを しようか？';
  }, choices:[
    {t:'みんなで いえを みせあいっこ', go:'p7r', set:{plife2:'miseai'}},
    {t:'ひとやすみして おちゃに する', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'はたらいた あとの おちゃは かくべつです。\n「あしたは おたがいの いえに あそびに いこうね」'
    : '「はやく できたね」「かぜが きもちいいね」「じょうぶだね」\nどの いえにも、いいところが ちゃんと あります。', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'そのとき。\nやまから はらぺこの オオカミが おりてきて、\nわらの いえの まえに たちました。';
    return 'そのとき。\nちいさい こぶたが、やまみちを おりてくる オオカミを とおくに みつけました。\nどうする？';
  }, choices:[
    {t:'そのまま ようすを みる', go:'pc_vs'},
    {t:'みんなに しらせて レンガの いえに あつまる', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'こぶた たい オオカミ！！'}, then:'p9'},

  p9:{art:'buta_wara', text:'オオカミは わらの いえを とんとん。\n「こぶたさん、こぶたさん、なかへ いれておくれ」\n「だめだめ、あけないよ。あごの ひげひげ ひげに かけて、ぜったいに だめ！」\n「それなら ふうふうの ふうーっで、いえごと ふきとばしてやる！」', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'ふうーーっ！！'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'わらの いえは、くるくると まいあがってしまいました。\nおおきい こぶたは ころがるように にげだして、\nまんなかの こぶたの えだの いえに とびこみました。', next:'p11'},

  p11:{art:'buta_eda', text:'オオカミも すぐ おいかけてきました。\n「こぶたさん、こぶたさん、なかへ いれておくれ」\nこんどは ふたり、こえを そろえて こたえます。\n「だめだめ、あけないよ。あごの ひげひげ ひげに かけて、ぜったいに だめ！」', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'ふうふうーーっ！！'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'えだの いえも、ばらばらと とんでいきました。\nふたりは いちもくさんに はしって、\nちいさい こぶたの レンガの いえに とびこみました。', next:'p13'},

  p13:{art:'buta_naka', text:'「ここなら だいじょうぶ。\nこの いえは、じかんを かけて、うんと じょうぶに つくってあるからね」\nちいさい こぶたは、ドアに しっかり かぎを かけました。', next:'p14'},

  p14:{art:'buta_renga', text:'「こぶたさん、こぶたさん、なかへ いれておくれ」\n「「「だめだめ、あけないよ。あごの ひげひげ ひげに かけて、ぜったいに だめ！」」」\nオオカミは おおきく いきを すいこみました。', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'……びくとも しない！！'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'なんど ふいても、レンガの いえは びくとも しません。';
    if(f.first) return t + '\nオオカミは はあはあ いいながら、やねの うえの えんとつを みあげました。';
    return t + '\nはらぺこの オオカミは、つぎの てを かんがえます。';
  }, choices:[
    {t:'えんとつから はいろうと する', go:'p16'},
    {t:'あまい ことばで さそいだそうと する', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'オオカミは やねに のぼって、えんとつに あしを かけました。\nでも、いえの なかでは とっくに おみとおしです。', next:'p17'},

  p17:{art:'buta_nabe', text:'えんとつの したの だんろには、おおきな おなべ。\nぐつぐつ、ぐつぐつ。おゆが たっぷり わいています。', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'どっぼーん！！'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'「あちちちち！！」\nおしりを やけどした オオカミは、\nいちもくさんに やまへ にげかえっていきました。', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'それからは、オオカミが やってくる ことも ありません。\n3びきは ときどき みんなで あつまって、\nあたたかい スープを のみながら、たのしく くらしましたとさ。\nめでたし、めでたし。'},

  /* ---- イギリスの ほんとうの おはなし(Jacobs 1890のだまし合い3連) ---- */
  pg1:{art:'buta_renga', text:'オオカミは こえを やさしくして いいました。\n「ねえ こぶたさん。むらはずれに、おいしい かぶばたけが あるんだよ。\nあした あさ 6じに、いっしょに いかないかい？」\nちいさい こぶたは ぴんと きました。（これは わなだな）\n「いいよ。じゃあ 6じにね」', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'しめしめ、6じが たのしみだ'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'つぎの あさ、こぶたは 5じに おきて、\nさっさと かぶを とって かえってきました。\n6じに きた オオカミは びっくりです。\n「もう いってきたよ。おなべ いっぱいの かぶが とれたよ」', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'なにいっ、もう いってきただと！？'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'こんどは りんごの きの おさそいです。「あさ 5じに むかえに いくよ」\nこぶたは 4じに でかけました。ところが きの うえに いるうちに、\nオオカミが きてしまいました。\n「いちばん おいしいのを あげるよ」\nこぶたは りんごを えいっと とおくへ なげ、\nオオカミが ひろいに いった すきに、するりと おりて にげかえりました。', next:'pg4'},
  pg4:{art:'buta_ichi', text:'さいごは まちの おまつりの おさそいです。「ひるの 3じに いこう」\nこぶたは ひるまえに でかけて、バターづくりの たるを かいました。\nかえりみち、さかの うえから みると、のぼってくる オオカミの すがた。\nこぶたは たるの なかに もぐりこみました。', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'ごろごろ ごろごろ！！'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'たるは こぶたを のせて、さかを ごろごろ ごろごろ！\nまるくて おおきな ものが とんでくるのを みて、\nオオカミは びっくりぎょうてん。しっぽを まいて にげだしました。', next:'pg6'},
  pg6:{art:'buta_renga', text:'あとで わけを しった オオカミは、かんかんです。\n「こうなったら、えんとつから はいってやる！」\nでも いえの なかでは、とっくに おみとおしです。', next:'pg7'},
  pg7:{art:'buta_nabe', text:'だんろの おおなべは、きょうも ぐつぐつ。\nとってきた かぶが たっぷり はいった、あつあつの スープです。', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'どっぼーん！！'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'「あちちちち！！」\nおおやけどの オオカミは、やまの おくの おくへ にげていって、\nそれっきり、にどと あらわれませんでした。', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'かぶばたけ、りんごの き、そして バターの たる。\nこれが、イギリスに つたわる もとの おはなしに いちばん ちかい みちすじです。\nかしこい ちいさい こぶたは、そのあとも ながく しあわせに くらしましたとさ。\nめでたし、めでたし。'},

  /* ---- さいしょから 3びきで ---- */
  pk1:{art:'buta_renga', text:'「みんなで 1けん、うんと じょうぶなのを たてようよ」\nちいさい こぶたの ひとことで、3びきは レンガはこびを はじめました。\nおもい レンガも、3びきなら へっちゃらです。', next:'pk2'},
  pk2:{art:'buta_naka', text:'やねの したに ベッドが みっつ。\nだんろも まども ついた、りっぱな いえが できあがりました。', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'そこへ はらぺこの オオカミが やってきて、\nおおきく いきを すいこみました。', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'……びくとも しない！！'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'オオカミは ひが くれるまで ふきつづけて、\nくたくたに なって やまへ かえっていきました。\nちからを あわせて たてた いえは、なによりも じょうぶです。\nめでたし、めでたし。'},

  /* ---- みはりと そなえ ---- */
  pn1:{art:'buta_michi', text:'「オオカミが くるよ！」\nちいさい こぶたは、ふたりの いえへ ひとっぱしり。\n3びきは いそいで レンガの いえに あつまりました。', next:'pn2'},
  pn2:{art:'buta_naka', text:'まどから そっと のぞくと、オオカミが わらの いえを ふいています。\n「だれも いないぞ！？」\nえだの いえも ふきました。\n「ここも からっぽだ！？」', next:'pn3'},
  pn3:{art:'buta_renga', text:'さいごに レンガの いえを ふうふう。でも びくとも しません。\nオオカミは すっかり くたびれて、\nはらぺこの まま すわりこんでしまいました。', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'まどから こえが します。\n「おきゃくさんかい？ わるいけど、きょうは もう おしまいだよ」\nオオカミは とぼとぼと やまへ かえっていきました。\nそなえていれば、あわてない。3びきは また おちゃの つづきです。\nめでたし、めでたし。'},

  /* ================= オオカミの はなし ================= */

  pw1:{art:'pwolf_yama', text:'これは、やまに すむ、いっぴきの オオカミの おはなし。\nこのごろ めっきり たべものが みつからず、\nおなかは いつだって ぺっこぺこ。', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'きょうは どこで たべものを さがそう？', choices:[
    {t:'かわの ちかくを さがす', go:'pw2r', set:{wlife:'kawa'}},
    {t:'はやしの おくを さがす', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'はやしの きのみは、とりたちに さきを こされていました。\nおなかが ぐうと なりました。'
    : 'かわには さかなの かげも ありません。\nおなかが ぐうと なりました。', next:'pw3'},
  pw3:{art:'buta_wara', text:'ふもとに おりると、あたらしい いえが 3けん ならんでいます。\nどこからか、おいしそうな においも してきます。', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'ごちそうの よかんが する！'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'ふうふうは オオカミの とくいわざ。\nわらの いえも えだの いえも ふきとばしたのに、\nこぶたたちには するりと にげられて ばかりです。', next:'pw5'},
  pw5:{art:'buta_renga', text:'のこるは レンガの いえ。これが びくとも しません。\nはらぺこの オオカミは、つぎの てを かんがえました。', choices:[
    {t:'あまい ことばで さそいだす', go:'pw6'},
    {t:'しょうじきに はなしてみる', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'かぶばたけに さそえば、さきまわり。\nりんごの きに さそえば、するりと にげられ。\nおまつりの かえりを まちぶせた、その ときです。\nさかの うえから、まるくて おおきな なにかが……', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'ごろごろ ごろごろ！！'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'ごろごろ ごろごろ、すごい いきおいで ころがってきます。\nみたことも ない、まるい おおきな かたまりです。', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'ば、ばけものだあ！！'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'オオカミは しっぽを まいて、やまの てっぺんまで にげかえりました。\n「ふもとには、まるい ばけものが いる……」\nこの はなしは、やまの オオカミたちの あいだで、\nながく ながく かたりつがれた ということです。\nめでたし、めでたし。'},

  pwh1:{art:'buta_renga', text:'オオカミは ドアの まえに すわりこんで、\nちいさな こえで いいました。\n「……ほんとうは、もう なんにちも、なにも たべていないんだ」', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'いえの なかで、3びきは かおを みあわせました。\nドアは あけません。でも、まどから こえが しました。\n「そこで ちょっと まってな」', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'まどから そっと さしだされたのは、あつあつの やさいスープ。\nかぶも おいもも、ごろごろ はいっています。', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'あついから、ふうふう してね'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'オオカミの じまんの ふうふうは、\nいえを とばす ちからでは なくて、\nあつい スープを ちょうどよく さます ちからに なりました。\nとくいわざの つかいみちは、ひとつだけじゃ ないのです。\nめでたし、めでたし。'},

  /* ================= レンガの いえの はなし ================= */

  ps1:{art:'prenga_kamado', text:'これは、いっけんの レンガの いえの おはなし。\nレンガは ひとつひとつ、かまどの ひで じっくり やかれて うまれます。\nだから、ちょっとや そっとでは くずれません。', next:'ps2'},
  ps2:{art:'buta_renga', text:'ある ひ、ちいさい こぶたが やってきて、\nレンガを ていねいに つみはじめました。\nトンカン、トンカン。すこしずつ、いえに なっていきます。\nはじめて できた まどから、なにが みえた？', choices:[
    {t:'ひろい あおぞら', go:'ps2r', set:{slife:'sora'}},
    {t:'むらはずれの かぶばたけ', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'まどの むこうに、かぶばたけが ひろがっています。\nまいにち すこしずつ そだつのを、いえは たのしみに みていました。'
    : 'まどいっぱいの あおぞらを、しろい くもが ながれていきます。\nいえに なるって、いい ものだなあ。', next:'ps3'},
  ps3:{art:'buta_naka', text:'ある ひ、おにいさん こぶたが ふたり、\nいきを きらして とびこんできました。\nそとには オオカミが いる ようです。', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'わたしの でばんです'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'オオカミは おおきく いきを すいこんで、ふきつけてきました。\nいちど、にど、さんど。\nかべの レンガは、ひとつも うごきません。', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'びくとも しません！！'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'あらしのような よるが すぎて、いえは かんがえました。\nこれからも、なにを いちばん たいせつに しよう？', choices:[
    {t:'かぜにも あめにも まけない こと', go:'e_ps_mamoru'},
    {t:'だんろに ひを いれて あたたかく する こと', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'かぜの よるも、あめの あさも、いえは びくとも しません。\nじょうぶに うまれた わけを、いえは ちゃんと しっています。\nなかに、まもりたい 3びきが いるからです。\nめでたし、めでたし。'},
  pss1:{art:'buta_soup', text:'ふゆが きました。だんろに ひが はいり、おなべが ことこと。\nおかあさんぶたも あそびに きて、\nいえの なかは わらいごえで いっぱいです。', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'いえの しごとは、かぜや あめを ふせぐ こと。\nでも いちばん だいじな しごとは、\nわらいごえを たいせつに しまっておく ことです。\nきょうも レンガの いえから、あたたかい こえが きこえてきます。\nめでたし、めでたし。'}

  };

  Object.assign(T.SCENES, KOBUTA);

  /* ---- 図鑑(さんびきのこぶたの部) ---- */
  T.ZK.push(
    {section:'さんびきの こぶた'},
    {id:'pb_seishi',   n:'にげこんだ レンガの おうち',        h:'はじめての 1かいめの、おなじみの おはなし'},
    {id:'pb_genten',   n:'イギリスの ほんとうの おはなし',    h:'オオカミが あまい ことばで さそってきたら…'},
    {id:'pb_kyoryoku', n:'さいしょから 3びきで',              h:'わかれみちで、いっしょの みちを えらぶと…'},
    {id:'pb_sonae',    n:'みはりと そなえ',                   h:'オオカミを とおくから みつけたら…'},
    {id:'pw_taru',     n:'ばけものだあ！',                    h:'はらぺこ オオカミの おはなしで、さそいだす ほうを えらぶと…'},
    {id:'pw_fuufuu',   n:'ふうふうの ほんとうの つかいみち',  h:'はらぺこ オオカミの おはなしで、しょうじきに はなすと…'},
    {id:'ps_mamoru',   n:'びくとも しません',                 h:'レンガの いえの おはなしで、かぜにも あめにも…'},
    {id:'ps_waraigoe', n:'わらいごえの うつわ',               h:'レンガの いえの おはなしで、だんろに ひを いれると…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    pb_seishi:   {f:{first:1, wolf:1}, scenes:['p15','p16','p17','pc_dobon','p18','e_pb_seishi']},
    pb_genten:   {f:{wolf:1}, scenes:['pg4','pc_goro','pg5','pg6','pg7','pc_dobon2','pg8','e_pb_genten']},
    pb_kyoryoku: {f:{}, scenes:['pk1','pk2','pk3','pkc_fuu','e_pb_kyoryoku']},
    pb_sonae:    {f:{wolf:1}, scenes:['pn1','pn2','pn3','e_pb_sonae']},
    pw_taru:     {f:{}, scenes:['pw6','pwc_goro','pw7','pwc_taru','e_pw_taru']},
    pw_fuufuu:   {f:{}, scenes:['pwh1','pwh2','pwh3','pwc_fuu','e_pw_fuufuu']},
    ps_mamoru:   {f:{}, scenes:['ps4','psc_fuu','e_ps_mamoru']},
    ps_waraigoe: {f:{}, scenes:['pss1','e_ps_waraigoe']}
  });

  /* ---- はじめての1かいめ(日本の主流形・一本道) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.buta = {
      init: { first:1 },
      scenes: [
        'p1','p3','p4','p5','p6','pc_ton','p7','p8','pc_vs','p9','pc_fuu1','p10',
        'p11','pc_fuu2','p12','p13','p14','pc_fuu3','p15','p16','p17','pc_dobon','p18','e_pb_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.buta   = { start:'p1',  init:{} };
  T.STORIES.pwolf  = { start:'pw1', init:{} };
  T.STORIES.prenga = { start:'ps1', init:{} };

})();
