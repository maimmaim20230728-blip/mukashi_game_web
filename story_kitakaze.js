"use strict";
/* きたかぜと たいよう - シナリオ正本（12作品目）
   底本=イソップ寓話 Perry 46(ATU 298)・ギリシャ語原文(Chambry版・el.wikisource・PD)。英語参照=Townsend 1867 / Jacobs 1894 のみ
   (🔴Vernon Jones 1912 は訳者1955年没+戦時加算で日本では2036年頃まで保護=参照不可。IPA Handbook 1999 の英文は団体著作物=転用不可)。
   ヒロさん承認(2026-09-02): 1周目=ギリシャ語原文型(旅人の水浴びで閉じる・勝ち名乗りも北風の敗北宣言もなし)/教訓文は本編に書かず
   図鑑注記で後代付加として三人称紹介/協力の分岐「せんたくびより」を2周目の創作として作る。
   🔴参照禁止: 河野与一訳・呉茂一訳・中務哲郎訳・各絵本(蜂飼耳/こがようこ/もきかずこ/岩倉千春/いもとようこ/西本鶏介/平田昭吾)・
   ja.wikisource「太陽と風」・Stead絵本・星新一版・帽子版(典拠なし=書かない)・KIRIN CM・J-POP各曲。
   🔴そよぎ固有: 語り手は判定しない(「かった/まけた」を置かない)・北風を「らんぼう」と書かない・太陽を「やさしい」と書かない・
   北風の退場は「あとは たのむ」のバトンタッチ(自己卑下なし)・旅人は無名で属性を書かない・教訓を言わない。
   文体: わかちがき・ひらがな主体。きたかぜ/たいよう/たびびと=ひらがな。上着=「うわぎ」 */
(function(){
  var T;
  if (typeof SCENES !== 'undefined') {
    T = { SCENES: SCENES, ZK: ZK, RECAP: RECAP, STORIES: STORIES, FIRST_RUNS: (typeof FIRST_RUNS !== 'undefined' ? FIRST_RUNS : null) };
  } else {
    T = require('./story.js');
  }

  var KITAKAZE = {

  /* ================= きたかぜと たいよう(本編・主人公は たびびと) ================= */

  kz1:{art:'kz_sora', text:'これは、きたかぜと たいようの おはなし。\nある ひ、そらの うえで、きたかぜと たいようが いいあらそいを していました。\n「わたしの ほうが つよい」「いや、わたしだ」', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'どちらが つよい？'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'その あさ、ひとりの たびびとが、むらを でて みちを あるきはじめました。\nうわぎを きて、ふくろを かたに かけて。';
    if(f.first) return t;
    return t + '\nふくろに、なにを いれていく？';
  }, choices:[
    {t:'みずの いれもの', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'パンと りんご', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'ふくろには、パンと りんごと、もう いちまいの うわぎ。\nながい みちに なりそうです。'
    : 'ふくろには、みずの いれものと、もう いちまいの うわぎ。\nながい みちに なりそうです。', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'きたかぜと たいようは、その たびびとを みつけました。\n「あの たびびとの うわぎを ぬがせた ほうが、つよいと いうことに しよう」';
    if(f.first) return t + '\nまず、きたかぜの ばんです。';
    return t + '\nどうする？';
  }, choices:[
    {t:'くらべる。まず きたかぜの ばん', go:'kz4'},
    {t:'くらべるのを やめて、いっしょに やってみる', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'きたかぜは、はじめから つよく ふきました。\nびゅう！\nたびびとは、うわぎの えりを おさえました。', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'びゅう！！'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'きたかぜは、もっと つよく ふきました。\nびゅうびゅう！\nたびびとは、うわぎを りょうてで ぎゅっと おさえました。\n「さむい。もう いちまい きよう」\nふくろから もう いちまい だして、かさねて きました。', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'びゅうびゅう！！'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'さむい……'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'きたかぜは、ありったけの ちからで ふきました。\nきの はが とび、みちの すなが まいあがりました。\nそれでも たびびとは、うわぎを はなしませんでした。', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'びゅうううう！！'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'きたかぜは、つかれてしまいました。';
    if(f.first) return t + '\n「たいよう、あとは たのむ」\nきたかぜは、たびびとを たいように わたしました。';
    return t + '\nきたかぜは、どうする？';
  }, choices:[
    {t:'「たいよう、あとは たのむ」', go:'kzc_kao_kk'},
    {t:'くもを よんでくる', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'あとは たのむ'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'たいようは、はじめは ほどほどに てらしました。\nぽかぽか。\nたびびとは、かさねた うわぎを いちまい ぬいで、ふくろに しまいました。', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'ぽかぽか……'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'たいようは、もっと つよく てらしました。\nさんさん。\nたびびとは、あせを かきはじめました。';
    if(f.first) return t;
    return t + '\nたびびとは、どうする？';
  }, choices:[
    {t:'そのまま あるく', go:'kzc_poka2'},
    {t:'こかげに はいる', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'さんさん！！'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'たいようは、さらに つよく てらしました。\n「あつい。あつくて たまらない」\nたびびとは、うわぎを ぜんぶ ぬいで、かたに かけました。', next:'kz11'},

  kz11:{art:'kz_kawa', text:'みちの わきに、かわが ながれていました。\nたびびとは うわぎを きしに おいて、かわに とびこみました。', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'ざぶん！！'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'たびびとは、きもちよさそうに みずあびを しました。\nそらの うえで、きたかぜと たいようは、それを みていました。', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'たびびとは、しょうぶが あったことを しりません。\nうわぎを きしで かわかして、また あるいていきました。\nおしまい。'},

  /* ---- ふたりの せんたくびより ---- */
  kzf1:{art:'kz_sentaku', text:'「くらべるのは やめて、いっしょに やってみよう」\nきたかぜが ふき、たいようが てらしました。\nむらの せんたくものが、ひるまえに ぜんぶ かわきました。', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'たびびとは、うわぎを きたまま、きもちよく あるいていきました。\nかぜは すずしく、ひは あたたかく。', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'むらの ひとは、その ひを「せんたくびより」と よびました。\nどちらが つよいかは、だれも きめませんでした。\nめでたし、めでたし。'},

  /* ---- こかげで ひとやすみ ---- */
  kzk1:{art:'kz_kokage', text:'たびびとは、おおきな きの こかげに はいって、こしを おろしました。\nうわぎは、きたままです。\nみずを のんで、ひとやすみ。', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'ひが かたむいて、すずしく なりました。\nたびびとは、うわぎを きたまま、また あるきだしました。', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'そらの うえで、きたかぜと たいようは、かおを みあわせました。\nしょうぶは、つきませんでした。\nおしまい。'},

  /* ---- くもが きて ---- */
  kzu1:{art:'kz_kumo', text:'きたかぜは、くもを よんできました。\nそらが くらくなり、あめが ふりはじめました。\nたびびとは、きの したで あまやどりを しました。', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'あめが やむと、たびびとは また あるきだしました。\nうわぎは、きたままです。', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'「きょうは、ここまでに しよう」と たいよう。\n「また こんど」と きたかぜ。\nおしまい。'},

  /* ================= きたかぜの はなし ================= */

  kk1:{art:'kz_sora', text:'これは、きたかぜの おはなし。\nきたかぜは、きたの うみから ふいてきます。\nつよく ふくのが、きたかぜの しごとです。', next:'kk2'},
  kk2:{art:'kk_umi', text:'きょうは、どこへ ふきに いく？', choices:[
    {t:'うみへ', go:'kk2r', set:{kklife:'umi'}},
    {t:'のはらへ', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'きたかぜは、のはらを ひとふき しました。\nくさが いっせいに、おなじ ほうを むきました。'
    : 'きたかぜは、うみの うえを ひとふき しました。\nしろい なみが、いっせいに たちました。', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'たびびとの うわぎを ぬがせる しょうぶは、うまく いきませんでした。\nきたかぜは、すこし つかれて、そらの たかいところで やすみました。', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'ふくのは、とくいなのに'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'そらから したを みると、いろいろな ものが みえます。\nきたかぜは、どこへ いく？', choices:[
    {t:'みなとの ふねの ところへ', go:'kkh1'},
    {t:'のはらの はなの ところへ', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'みなとに、うごけない ふねが ありました。\nかぜが なくて、ほが たれています。\nきたかぜは、ほに むかって、そっと ふきました。', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'ほは ふくらみ、ふねは うみへ でていきました。\nふなのりたちが、そらに むかって てを ふりました。\nめでたし、めでたし。'},
  kkt1:{art:'kk_nohara', text:'のはらの はなは、たねを つけていました。\nきたかぜは、たねを のせて、とおくまで はこびました。', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'つぎの はる、とおくの おかに、おなじ はなが さきました。\nきたかぜが はこんだ たねです。\nめでたし、めでたし。'},

  /* ================= たいようの はなし ================= */

  kh1:{art:'kz_sora', text:'これは、たいようの おはなし。\nたいようは、あさ ひがしから のぼり、ゆうがた にしに しずみます。\nてらすのが、たいようの しごとです。', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'けさは、なにを いちばんに てらす？', choices:[
    {t:'はたけ', go:'kh2r', set:{khlife:'hatake'}},
    {t:'むらの やね', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'たいようは、むらの やねを てらしました。\nやねの うえの ねこが、のびを しました。'
    : 'たいようは、はたけを てらしました。\nつゆが きらきらして、めが のびました。', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'たびびとの しょうぶの ひ、たいようは いつもより つよく てらしました。\nたびびとは かわに とびこみましたが、はたけの つちは、かわいて ひびわれました。', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'てらしすぎたかも しれない'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'たいようは、どうする？', choices:[
    {t:'くもに、ひかげを たのむ', go:'khk1'},
    {t:'しずむまで、てらしつづける', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'たいようは、とおりかかった くもに たのみました。\n「はたけの うえに、すこし ひかげを つくってくれないか」\nくもは、はたけの うえで たちどまりました。', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'はたけは、ひかげで ひといき つきました。\nたいようにも、できない ことが あります。\nくもに たのんだ ひの ことを、たいようは わすれませんでした。\nめでたし、めでたし。'},
  khy1:{art:'kh_yuuhi', text:'たいようは、にしの やまに しずむまで てらしつづけました。\nたびびとの せなかが、とおくの おかを こえていくのが みえました。', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'たびびとが うわぎを きたか ぬいだか、たいようには もう みえません。\nたいようは、あしたも のぼります。\nおしまい。'}

  };

  Object.assign(T.SCENES, KITAKAZE);

  /* ---- 図鑑(きたかぜと たいようの部) ---- */
  T.ZK.push(
    {section:'きたかぜと たいよう', note:'ギリシャの ふるい ほんでは、この おはなしは たびびとが かわで みずあびを して おわります。かったのが どちらか、ほんには かいてありません。「おおくの ばあい、せっとくは ちからより よく きく」という ことばは、あとから かきそえられた ものです。よみかたは ひとつでは ありません。'},
    {id:'kz_seishi', n:'かわで みずあび',           h:'はじめての 1かいめの、つたわっている おはなし'},
    {id:'kz_kokage', n:'こかげで ひとやすみ',        h:'たいようの ばんに、こかげに はいると…'},
    {id:'kz_futari', n:'ふたりの せんたくびより',    h:'くらべるのを やめて、いっしょに やると…'},
    {id:'kz_kumo',   n:'くもが きて',                h:'きたかぜが、くもを よんでくると…'},
    {id:'kk_ho',     n:'ほを ふくらませて',          h:'きたかぜの おはなしで、みなとへ いくと…'},
    {id:'kk_tane',   n:'たねを はこぶ',              h:'きたかぜの おはなしで、のはらへ いくと…'},
    {id:'kh_kumo',   n:'くもに たのむ',              h:'たいようの おはなしで、くもに たのむと…'},
    {id:'kh_yuuhi',  n:'しずむ まで',                h:'たいようの おはなしで、しずむまで てらすと…'}
  );

  /* ---- 振り返り再生 ---- */
  Object.assign(T.RECAP, {
    kz_seishi: {f:{first:1}, scenes:['kz11','kzc_zabun','kz12','e_kz_seishi']},
    kz_kokage: {f:{}, scenes:['kzk1','kzk2','e_kz_kokage']},
    kz_futari: {f:{}, scenes:['kzf1','kzf2','e_kz_futari']},
    kz_kumo:   {f:{}, scenes:['kzu1','kzu2','e_kz_kumo']},
    kk_ho:     {f:{}, scenes:['kkh1','e_kk_ho']},
    kk_tane:   {f:{}, scenes:['kkt1','e_kk_tane']},
    kh_kumo:   {f:{}, scenes:['khk1','e_kh_kumo']},
    kh_yuuhi:  {f:{}, scenes:['khy1','e_kh_yuuhi']}
  });

  /* ---- はじめての1かいめ(ギリシャ語原文型・一本道) ---- */
  if(T.FIRST_RUNS){
    T.FIRST_RUNS.kz = {
      init: { first:1 },
      scenes: [
        'kz1','kzc_vs','kz2','kz3','kz4','kzc_fuu1','kz5','kzc_fuu2','kzc_kao_tabi','kz6','kzc_fuu3',
        'kz7','kzc_kao_kk','kz8','kzc_poka1','kz9','kzc_poka2','kz10','kz11','kzc_zabun','kz12','e_kz_seishi'
      ]
    };
  }

  /* ---- 視点の入口 ---- */
  T.STORIES.kz       = { start:'kz1', init:{} };
  T.STORIES.kitakaze = { start:'kk1', init:{} };
  T.STORIES.taiyou   = { start:'kh1', init:{} };

})();
