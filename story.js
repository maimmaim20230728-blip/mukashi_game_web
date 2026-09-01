"use strict";
/* えらべる むかしばなし - シナリオ正本
   文体ルール: わかちがき・ひらがな主体・ダッシュ記号は使わない
   わかちがき方針: 補助動詞は密着(〜ていました)・形式名詞と「みたい」は分かち・
   オノマトペ+するは分かち・時間名詞(その ひ 等)は分かち・
   数量・時刻は算用数字+かな(3びき・6じ)、和語の数詞(みっつ・ふたり・さんねん)はかな */

const nakama = f => (f.dog|0) + (f.saru|0) + (f.kiji|0);

const STORIES = {
  momo: { start:'m1', init:{} },
  oni:  { start:'o1', init:{} },
  kiji: { start:'k1', init:{dog:1, saru:1, kiji:1} }
};

const SCENES = {

/* ================= ももたろう ================= */

m1:{art:'yama', text:'むかしむかし、あるところに、おじいさんと おばあさんが すんでいました。\nおじいさんは やまへ しばかりに、おばあさんは かわへ せんたくに でかけます。', next:'m2'},

m2:{art:'momo_river', text:'かわで せんたくを していると、かわかみから おおきな ももが どんぶらこ、どんぶらこと ながれてきました。', choices:[
  {t:'いえに もってかえる', go:'m3a', set:{open:'home'}},
  {t:'そのばで わってみる', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'おばあさんは よいしょ、よいしょと ももを いえまで はこびました。\nおじいさんと ふたりで、さっそく わってみると……', next:'c_paka'},
m3b:{art:'momo_river', text:'まちきれない おばあさんは、かわらの いしの うえで ももを わってみることに しました。すると……', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'ぱかっ！！'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'なかから げんきな おとこのこが とびだしました！\nおばあさんは あかんぼうを だいて、いえへ おおいそぎ。\nおじいさんと ふたり、おおよろこびで「ももたろう」と なづけました。'
  : 'なかから げんきな おとこのこが とびだしました！\nふたりは おおよろこびで、ももから うまれた おとこのこに「ももたろう」と なづけました。', next:'m5'},

m5:{art:'kids', text:'ももたろうは、むらの こどもたちと あそぶのが だいすき。\nきょうは なにを する？', choices:[
  {t:'すもうを とる', go:'m5a', set:{hobby:'sumo'}},
  {t:'かけっこを する', go:'m5b', set:{hobby:'run'}},
  {t:'おてつだいを する', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'おおきな こどもたちも、つぎつぎ ころりん。\n「この ちからは、むらいちばんだ！」と みんなが びっくりです。', next:'m6'},
m5b:{art:'kids', text:'ももたろうより はやい こは、どこにも いません。\nかぜのように はしって、みんなを あっと いわせました。', next:'m6'},
m5c:{art:'kids', text:'おもい たきぎも、ももたろうが もてば かるがる。\nおじいさんも おばあさんも、おおだすかりです。', next:'m6'},

m6:{art:'momotaro', text:'ももたろうは すくすく そだち、つよくて やさしい わかものに なりました。', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'その よる。\nむらで たいへんな ことが おこりました。'}, then:'m7'},
m7:{art:'village_sad', text:'あくる あさ。\nおにがしまの おにが、むらの たからを うばっていったと わかったのです。\nむらの ひとたちは、こまりはてています。', next:'m8'},
m8:{art:'momotaro', text:'ももたろうは たちあがりました。\n「わたしが おにがしまへ いって、たからを とりもどしてきます！」', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'おばあさんは にっぽんいちの きびだんごを つくってくれました。\nこしに さげて、しゅっぱつの じゅんびは ばっちりです。'
  : 'おばあさんは にっぽんいちの きびだんごを つくってくれると いいます。\nさて、どうする？', choices:[
  {t:'きびだんごを たくさん つくってもらう', go:'m10', set:{dango:'full'}},
  {t:'みがるに すこしだけ もらう', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'しゅっぱつの あさ。\nおばあさんが ふたつの はちまきを だしてくれました。\nどっちを まいていく？', choices:[
  {t:'しろい はちまき', go:'m10r', set:{band:'white'}},
  {t:'あかい はちまき', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'あかい はちまきを きゅっと むすぶと、むねの おくが あつく なりました。\n「いってきます！」'
  : 'しろい はちまきを きゅっと むすぶと、こころが しんと すみわたりました。\n「いってきます！」', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'いざ、おにたいじ！！'}, then:'m11'},

m11:{art:'michi', text:'みちは ふたつに わかれています。\nやまを こえる みちと、うみぞいの みち。\nどっちから いく？', choices:[
  {t:'やまみちを いく', go:'m11a', set:{road:'yama'}},
  {t:'うみぞいの みちを いく', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'やまの てっぺんから、とおくの うみに ぽつんと くろい しまが みえました。\nあれが おにがしま……。\nももたろうは ぐっと こぶしを にぎりました。', next:'m12'},
m11b:{art:'umizoi', text:'なみの おとを ききながら すなはまを あるきます。\nあしもとに、ももいろの きれいな かいがらを みつけました。\nおばあさんへの おみやげに しましょう。', next:'m12'},

m12:{art:'dog', text:'とことこ あるいていくと、イヌが やってきました。\n「ももたろうさん、どちらへ？ きびだんごを ひとつ くだされば、おともしますよ！」', choices:[
  {t:'きびだんごを あげる', go:'c_dog_join', set:{dog:1}},
  {t:'「ごめんよ、いそいでいるんだ」', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'イヌが なかまに なった！！'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '「すこししか ないけど、はんぶんこ しよう」\nイヌは しっぽを ぶんぶん ふって、よろこびました！'
  : 'イヌは しっぽを ぶんぶん ふって、よろこびました！\n「どこまでも おともしますよ！」', next:'m13'},
m12n:{art:'dog', text:'イヌは ちょっぴり ざんねんそうに、ももたろうを みおくりました。', next:'m13'},

m13:{art:'saru', text:'こんどは きのうえから サルが こえを かけてきました。\n「きびだんごを くれたら、みちあんないは まかせて！」', choices:[
  {t:'きびだんごを あげる', go:'c_saru_join', set:{saru:1}},
  {t:'「ごめんよ、さきを いそぐんだ」', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'サルが なかまに なった！！'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'ちいさく わけた きびだんごでも、サルは おおよろこび。\nきから するすると おりてきて、むねを ぽんと たたきました。'
  : 'サルは きから するすると おりてきて、むねを ぽんと たたきました。\n「まかせておいて！」', next:'m14'},
m13n:{art:'saru', text:'サルは きのうえから ひらひらと てを ふりました。', next:'m14'},

m14:{art:'kiji', text:'そらから キジが まいおりてきました。\n「きびだんごを くれたら、そらから おにがしまの ようすを みてきますよ！」', choices:[
  {t:'きびだんごを あげる', go:'c_kiji_join', set:{kiji:1}},
  {t:'「ごめんよ、もう いかなくちゃ」', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'キジが なかまに なった！！'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'はんぶんこの きびだんごを、キジは たいせつそうに たべました。\nうれしそうに はねを ひろげて、そらを ひとまわり。'
  : 'キジは うれしそうに はねを ひろげて、そらを ひとまわり しました。\n「そらの ことは おまかせを！」', next:'m15'},
m14n:{art:'kiji', text:'キジは おおきく ひとまわり して、やまの ほうへ とんでいきました。', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'みなとに つくと、ちいさな ふねが ありました。';
  if(n===0) t += '\nともは いないけれど、ももたろうの こころは きまっています。';
  else if(n===1) t += '\nなかまと ふたり、ちからを あわせて のりこみます。';
  else t += '\nみんなで のりこめば、ふねは ぎゅうぎゅうの まんいんです。';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'しゅっぱーつ！！'}, then:'m16'},

m16:{art:'fune_night', text:'よるの うみは しずかです。\nほしぞらの したで、ももたろうは かんがえます。', choices:[
  {t:'おばあさんの きびだんごの あじを おもいだす', go:'m17', set:{think:'dango'}},
  {t:'むらの たからの ことを かんがえる', go:'m17', set:{think:'takara'}},
  {t:'おにって どんな やつだろうと かんがえる', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'あまい きびだんごの あじが、ゆうきを くれる きが しました。\nあしたは きっと、だいじょうぶ。',
  takara:'むらの みんなの かおが うかびます。\nぜったいに とりもどさなくちゃ。',
  oni:'つよいのかな。こわいのかな。\n……あってみなければ、わかりません。'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'あさひの なか、しまが ぐんぐん ちかづいてきます。';
  if(f.first) t += '\nキジが ひとあし さきに とんで、みんなに しまの ばしょを おしえてくれました。';
  else if(f.kiji) t += '\nキジが ひとあし さきに とんで、もどってきました。\n「もんは おおきいのが ひとつ！ うらに いわみちが あるよ！」';
  else t += '\nふねの へさきで、ももたろうは まっすぐ しまを みつめます。';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'みえたぞ、おにがしま！'}, then:'m19'},

m19:{art:'onigashima', text:'いわだらけの しまに、おおきな くろい もんが そびえています。\nさて、どこから いく？', choices:f=>[
  {t:'しょうめんから どうどうと いく', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'キジの みつけた うらの いわみちから いく', go:'m20', set:{gate:'back'}}
    : {t:'しまを ぐるりと まわって、うらみちを さがす', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'ももたろうは むねを はって、もんの まえに たちました。\n「おにたちよ！ むらの たからを かえしてもらいに きた！」'
  : (f.kiji
    ? 'キジの あんないで、うらの いわみちを そっと のぼります。\nみはりの おには まだ きづいていません。'
    : 'いわの あいだに、ほそい みちを みつけました。\nそっと のぼれば、みはりの おには まだ きづいていません。'), next:'m21'},
m21:{art:'onigashima', text:'むねが どきどき してきました。\nさあ、いよいよです。', choices:[
  {t:'ふかく こきゅうを ひとつ する', go:'m21r', set:{calm:1}},
  {t:'いきおいよく とびこむ', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'すう、はあ。\nこころが すっと おちつきました。よし、いこう。'
  : 'かんがえるより さきに、からだが うごいていました！', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'ＶＳ'}, then:'m22'},

m22:{art:'oyabun', text:'じひびきと ともに、おにの おやぶんが あらわれた！', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'なにものだ！！'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'たからを かえしてもらう！！'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '「むらの たからを かえしてもらいに きた。わたしは ももたろう！」';
  if(f.first) return t;
  t += '\n' + ({
    dango:'（きびだんごの あじを おもいだしたら、ふしぎと こわくなくなりました）',
    takara:'（むらの みんなが まっている。まけられない！）',
    oni:'（おおきい。つよそう。でも……どこか かなしそうな めを している）'
  }[f.think] || '');
  t += '\nどう たたかう？';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'みんなで、いっせいに！', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'カタナで しょうぶ！', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'イヌ、たのむ！', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'サル、たのむ！', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'キジ、たのむ！', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'カタナを おさめて、はなしあう', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'みんなで、いっせいに！！'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'イヌの かみつき！！'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'サルの ひっかき！！'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'キジの つつき！！'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'カタナの いちげき！！'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'イヌの とっしん！！'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'サルの はやわざ！！'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'キジの きゅうこうか！！'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'なにっ！？'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'きまった！！'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'イヌは あしに がぶり、サルは せなかを ひっかき、キジは あたまを ばさばさ つつきます。\nさすがの おやぶんも、3びきの いっせいこうげきには かないません。\n「ま、まいった！」\nちからを あわせれば、こわいものなしです。', next:'m24'},

rk:{art:'maitta', text:f=>'ももたろうの たちさばきは でんこうせっか！\nおやぶんの かなぼうは そらたかく はじきとばされました。\n「ま、まいった！」\n' + HOBBY_LINE(f), next:'m24'},
rd:{art:'maitta', text:'イヌが かぜのように かけだして、おやぶんの あしに がぶり！\nおやぶんは どしーんと しりもちを つきました。\n「ま、まいった！」\nイヌを しんじて まかせた ももたろうも、むねを はって わらいました。', next:'m24'},
rs:{art:'maitta', text:'サルは ひらり ひらりと とびまわり、おやぶんの かなぼうを ぱっと うばいました。\n「ま、まいった！」\nサルの はやわざに、ももたろうも おもわず はくしゅ！', next:'m24'},
rj:{art:'maitta', text:'キジが そらから きゅうこうか！ つばさで ばさばさ、めかくしです！\nおやぶんは めを まわして「ま、まいった！」\nそらの なかまは、やっぱり たのもしい。ももたろうは おおきく てを ふりました。', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'おやぶんは ちいさく なって あやまりました。\n「たからは かえす。だから ゆるしてくれ……」';
  if(!f.first) t += '\nさて、どうする？';
  return t;
}, choices:[
  {t:'たからを もって むらへ かえる', go:'e_gaisen'},
  {t:'どうして うばったのか、はなしを きく', go:'m25'}
]},
m25:{art:'talk', text:'おやぶんは ぽつり ぽつりと はなしはじめました。\n「おにがしまは いわだらけで、さくもつが そだたない。こどもたちに ひもじい おもいを させたくなかったんだ……」', next:'e_naka'},

t1:{art:'oyabun', text:'ももたろうは カタナに てを かけず、まっすぐ まえを みました。', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'はなしが したい！！'}, then:'t2'},
t2:{art:'talk', text:'おやぶんは めを まるく して、それから ぽつり ぽつりと はなしはじめました。\n「おにがしまは いわだらけで、さくもつが そだたないんだ。こどもたちの ために、たからを かりるしか なかった……」\nおやぶんの はなしを きいて、ももたろうは かんがえました。', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'きびだんごを みんなで わける', go:'e_kibi'});
  c.push({t:'「たからは かえして、むらと なかよく しよう」と やくそくする', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'たからを のせた くるまと いっしょに、ももたろうは むらへ かえりました。\nむらは おおよろこび！\n';
  t += ({
    minna:'イヌも サルも キジも、むねを はっての だいこうしん。\n3びきの かつやくは、ながく むらの かたりぐさに なりました。',
    katana:'むらの ひとたちは、ももたろうの みごとな たちさばきの はなしで もちきりです。',
    dog:'くるまを ひいたのは、おおかつやくの イヌ。むねを はって、おいわいの ぎょうれつの せんとうを あるきます。',
    saru:'サルは うばった かなぼうを かたに かついで、とくいげです。',
    kiji:'キジは おいわいの そらを くるりと まわって、きれいな はねを いちまい おとしていきました。'
  }[f.style] || '');
  if(f.shell) t += '\nおばあさんには、ももいろの かいがらも わたしました。\n「うみの おとが きこえるねえ」と おばあさんは わらいました。';
  t += '\nめでたし、めでたし。';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'ももたろうは たからを うけとると、おかえしに おこめと たねいもを おにがしまへ おくることに しました。\nつぎの はるから、おにたちは むらの はたけしごとを てつだいに くるように なりました。\nむらの まつりには、おにの たいこが なりひびきます。';
  if(f.shell) t += '\nおばあさんは、おみやげの かいがらを たいこの おとに あわせて ならしました。';
  t += '\nめでたし、めでたし。';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '「たからは かえす。やくそくだ」\nももたろうと おやぶんは、ゆびきりを しました。\nそれから おにがしまと むらは、すこしずつ いききを するように なりました。\nたたかわずに かえってきた ももたろうを、むらの ひとは「たいした ものだ」と ほめたたえました。';
  if(f.shell) t += '\nおみやげの かいがらを みせると、おばあさんは にっこり わらいました。';
  t += '\nめでたし、めでたし。';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'「これ、にっぽんいちの きびだんごだよ。みんなで たべよう」\nおにたちは きびだんごを ほおばって、ぽろぽろ なみだを こぼしました。\n「こんなに おいしい ものは、うまれて はじめてだ……」\nももたろうと おにたちは、いっしょに いわを どかして、はたけを つくることに しました。\nいちばん ふしぎで、いちばん あたたかい けつまつです。\nめでたし、めでたし。'},

/* ================= おにの はなし（アカ） ================= */

o1:{art:'oni_village', text:'これは、おにがしまに すむ わかい おに、アカの おはなし。\nおにがしまは いわだらけ。はたけを つくっても、さくもつは そだちません。', next:'o2'},
o2:{art:'oni_village', text:'アカの きょうの しごとは、どっちに しよう？', choices:[
  {t:'がけの したから みずくみ', go:'o2r', set:{owork:'mizu'}},
  {t:'はたけの いわはこび', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'おもい おけを かついで、がけみちを なんども のぼります。\nちいさな おとうとたちが、のどを からからに して まっているのです。'
  : 'ごろごろの いわを ひとつ どかしても、つちは かちかち。\nそれでも アカは、いつか ここに はたけが できると しんじています。', next:'o3'},
o3:{art:'oni_dinner', text:'ゆうごはんは、うすい おかゆだけ。\nおとうとの ミドリが いいました。\n「にいちゃん、おなか すいたよう……」', choices:[
  {t:'「はるに なったら、いっぱい たべような」と はげます', go:'o3r', set:{care:'hagemasu'}},
  {t:'じぶんの おかゆを はんぶん わけてあげる', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '「にいちゃんの ぶんも おいしいね」\nミドリは にっこり わらいました。\nアカの おなかは すこし さみしいけれど、むねは あったかいのです。'
  : 'ミドリは ちいさく うなずいて、のこりの おかゆを たいせつそうに たべました。\nはるは、まだ とおいけれど。', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'その よる。'}, then:'o4'},
o4:{art:'oni_kaigi', text:'おやぶんが みんなを あつめて いいました。\n「むらから たからを かりてくるぞ。こどもたちの ふゆごしの ためだ」\nアカは むねが ざわざわ しました。\nどうする？', choices:[
  {t:'「それは どろぼうだよ！」と とめる', go:'c_dorobo'},
  {t:'だまって ついていく', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'それは どろぼうだよ！！'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'あたりは しんと しずまりかえりました。\nおやぶんは ながいこと だまりこんで……\n「では、どうすれば いいんだ」', next:'o6a'},
o6a:{art:'oni_kaigi', text:'アカは いっしょうけんめい かんがえました。', choices:[
  {t:'むらの ひとに おねがいしに いこう', go:'o7a'},
  {t:'じぶんたちの てで はたけを つくろう', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'「あたまを さげて、たべものを わけてもらうんだ。そのかわり、おにの ちからで おれいを する」\nおやぶんは ふとい うでを くんで、ゆっくり うなずきました。', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'つぎの ひ、おにたちは ふねに のって、むらへ むかいました。\nたたかいの ぶきは もたず、かわりに やまぶどうの かごを かかえて。\nそれは たからを うばうより、ずっと ずっと ゆうきの いることでした。\nむらの こたえは……それは また、べつの おはなし。'},
o7b:{art:'oni_village', text:'「いわを ぜんぶ どかして、はたけを つくろう！ おにの ちからなら できるよ！」\nその ひから、しまじゅうの おにが いわはこびを はじめました。', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'おにの ちから、ぜんかい！！'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'いわは やまのように おおきくて、しごとは なかなか おわりません。\nでも、ふしぎです。みんなで ながす あせは、ちっとも つらくないのです。\nはるが きて、はたけに ちいさな めが でました。\nミドリが とんで はねて よろこびました。\nめでたし、めでたし。'},

o5b:{art:'oni_raid', text:'アカは おやぶんたちの ふねに のりました。\nむらに ついても、アカは ふねの うえから うごけません。\nとおくで あかりが ゆれて、だれかの なきごえが きこえた きが しました。', next:'o6b'},
o6b:{art:'oni_takara', text:'しまに もどっても、アカの むねは ざわざわ したままです。\nつみあがった たからの まえで、アカは かんがえました。', choices:[
  {t:'たからを ひとつ、こっそり かえしに いく', go:'o7c'},
  {t:'なにも できないまま、よるが すぎる', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'アカは ちいさな たからを ひとつ もって、よるの うみへ ふねを だしました。\nむらの はまべに そっと おいて、かえろうとした そのとき。\n「おにさん、それ かえしに きてくれたの？」', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'みつかった！？'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'ちいさな おんなのこが、じっと アカを みていました。\nアカは どきどき しながら、こくんと うなずきました。\nおんなのこは にっこり わらって、ちいさな こえで いいました。\n「ありがとう。ないしょに してあげる」\nつめたい よるの はずなのに、アカの むねは ぽかぽかでした。'},

o7d:{art:'oni_night', text:'なにも できないまま、いくつもの よるが すぎました。\nある ばん、ねむれない アカが がけの うえから うみを みていると、とおくから ちいさな ふねが ちかづいてきます。\nあの ふねに のっているのは、だれでしょう。', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'よが あけました。'}, then:'o8'},
o8:{art:'oni_village', text:'しまじゅうが おおさわぎに なりました。\n「にんげんだ！ はちまきの にんげんが、こっちへ くるぞ！」\nアカの むねが、どきんと はねました。\nどうする？', choices:[
  {t:'ミドリを いわかげに かくす', go:'o9a', set:{guard:'midori'}},
  {t:'おやぶんの そばへ はしる', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'「しーっ。ここに いれば だいじょうぶ」\nミドリの ちいさな てを、アカは ぎゅっと にぎりました。', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'おやぶんは かなぼうを にぎって、もんの ほうを にらんでいます。\nその せなかが、いつもより おおきく みえました。', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'ＶＳ'}, then:'o10'},
o10:{art:'oyabun', text:'たたかいは、あっというまでした。\nおやぶんの かなぼうは はじきとばされ、アカは ものかげから いきを のんで みつめています。', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'ま、まいった！！'}, then:'o11'},
o11:{art:'oyabun', text:'はちまきの わかものは、カタナを おさめて なにか はなしています。\nいまなら、こえを かけられるかもしれない。\nどうする？', choices:[
  {t:'ゆうきを だして、ものかげから でる', go:'e_o_asa'},
  {t:'でられないまま、みおくる', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'「あ、あの！ たから、はこぶの てつだうよ」\nものかげから とびだした アカを みて、わかものは めを まるく しました。\nそれから、にっこり わらって いいました。\n「ありがとう。きみは ゆうきの ある おにだね」\nあさひが、ふたりを あたたかく てらしました。'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'こえを かける ゆうきは、でませんでした。\nたからを のせた ふねが、うみの むこうに ちいさく なっていきます。\nでも、アカは きめたのです。\nつぎに あえたら、きっと「ありがとう」も「ごめんね」も いうんだと。\nその「つぎ」は、そう とおくない みらいに、きっと やってきます。'},

/* ================= キジの はなし ================= */

k1:{art:'kiji_yama', text:'これは、やまに すむ いちわの キジの、もうひとつの おはなし。\nイヌは ちからもち。サルは きのぼりの めいじん。\nそれに くらべて じぶんは、ちいさくて、ちからも ない……。\nキジは いつも、すこしだけ じしんが ありませんでした。', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'ちいさな はねでは、\nなにも できないのかな。'}, then:'k2'},
k2:{art:'kiji_yama', text:'きょうも ひとりで そらの さんぽ。\nどこを とぼう？', choices:[
  {t:'やまの うえを とぶ', go:'k2r', set:{kfly:'yama'}},
  {t:'うみの ほうへ とぶ', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'やまの うえから みると、むらは おもちゃばこ みたいです。\nえんとつの けむりが、ぽっぽっと のぼっていました。'
  : 'うみの うえは かぜが つよくて、はねが ばたばた なります。\nとおくに、くろい しまが ぽつんと みえました。', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'ある ひ、したの みちを あるいていく ふしぎな ぎょうれつを みつけました。\nはちまきの わかものと、イヌと、サル。\nなにやら たのしそうです。', choices:[
  {t:'おもいきって こえを かける', go:'k4a'},
  {t:'もうすこし そらから ようすを みる', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'キジは ばさばさと まいおりて、せいいっぱい おおきな こえで いいました。\n「ぼ、ぼくも つれていってくれませんか！」', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'そらから そっと ついていくうちに、わかものが きづいて てを ふりました。\n「そらの ともだちも、いっしょに どうだい！」', next:'k5'},
k5:{art:'kiji_join', text:'「きびだんごを ひとつ、どうぞ」\nあまくて、ほっぺが おちそうです。\n「そ、そのかわり、そらの ことは ぼくに まかせてください！」\nせいいっぱいの おおきな こえで、キジは いいました。', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'キジが なかまに なった！！'}, then:'k6'},
k6:{art:'fune', text:'ふねの うえで、キジは きが つきました。\nうみの うえを とべるのは、じぶんだけ。\nイヌにも サルにも できない ことです。', choices:[
  {t:'たかく とんで しま ぜんたいを みる', go:'k6r', set:{kscout:'high'}},
  {t:'ひくく とんで もんの ちかくを しらべる', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'たかい そらから、しまの かたちが ぜんぶ みえました。\nもんの うらに、ほそい いわみちが あるのも わかります。\n「みんな、うらみちが あるよ！」'
  : 'なみすれすれに とんで、もんの まえまで。\nみはりの おにの かずも、かなぼうの おおきさも、しっかり みてきました。\n「みんな、てきの ようすは ばっちりだよ！」', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'ＶＳ'}, then:'k7'},
k7:{art:'oyabun', text:'おにの おやぶんとの たたかいが はじまりました！\nおやぶんの かなぼうが、ぶんと イヌに ふりおろされます。\nキジの むねが、どきんと なりました。\nどうする？', choices:[
  {t:'めかくしに とびこむ！', go:'c_kwaza1'},
  {t:'おおごえで みんなに しらせる！', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'キジの きゅうこうか！！'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'なにっ！？'}, then:'k8a'},
k8a:{art:'maitta', text:'キジは むがむちゅうで、おやぶんの かおの まえに とびこみました。\nつばさで ばさばさ、めかくしです！\nその すきに イヌが ひらりと にげて、サルが かなぼうを うばいました。\n「ま、まいった！」', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'イヌ、うしろ！！'}, then:'k8b'},
k8b:{art:'maitta', text:'やまびこ みたいに おおきな こえが、たたかいの ばに ひびきわたりました。\nイヌは ひらりと かわし、ももたろうの カタナが きらりと ひかります。\n「ま、まいった！」', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'たたかいの あと、ももたろうが いいました。\n「きょうの いちばんの てがらは、キジだよ」\nイヌも サルも、おおきく うなずきました。\nちいさな むねの おくが、ぽっと あつく なりました。\nちいさくても、できる ことが ある。\nキジは もう、うつむきません。'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'「あの こえが なかったら、あぶなかった」と イヌが いいました。\n「そらの みはりは、キジに しか できないね」と サルが いいました。\nキジは てれて、はねで かおを かくしました。\nちいさくても、できる ことが ある。\nキジは もう、うつむきません。'}

};

function HOBBY_LINE(f){
  return {
    sumo:'すもうで きたえた こしの ちからが、ここぞという ときに いきました。',
    run:'かけっこで きたえた あしは、だれにも まけません。',
    help:'まいにちの おてつだいで きたえた うでは、だてじゃ ありません。'
  }[f.hobby] || '';
}

/* ================= けつまつずかん
   {section:'…'} は おはなしごとの みだし行（ずかんで 全幅に えがく・かずには 入れない）。
   あかずきん分の みだしと けつまつは story_akazukin.js が push する */
const ZK = [
  {section:'ももたろう'},
  {id:'a_minna',  n:'がいせん・みんなで',     h:'なかま みんなで いっせいに たたかうと…'},
  {id:'a_katana', n:'がいせん・カタナ',       h:'カタナで たたかって、たからを もちかえると…'},
  {id:'a_dog',    n:'がいせん・イヌ',         h:'イヌと たたかって、たからを もちかえると…'},
  {id:'a_saru',   n:'がいせん・サル',         h:'サルと たたかって、たからを もちかえると…'},
  {id:'a_kiji',   n:'がいせん・キジ',         h:'キジと たたかって、たからを もちかえると…'},
  {id:'b_naka',   n:'おにと なかなおり',      h:'かった あとに、はなしを きいてみると…'},
  {id:'c_yaku',   n:'はなしあいの やくそく',  h:'なかまを つれずに いって、カタナを おさめると…'},
  {id:'d_kibi',   n:'きびだんごの きせき',    h:'きびだんごを たくさん もって ひとりで いき、カタナを おさめると…'},
  {id:'o_negai',  n:'やまぶどうの かご',      h:'おにの おはなしで とめて、おねがいを えらぶと…'},
  {id:'o_hatake', n:'おにがしまの はたけ',    h:'おにの おはなしで とめて、はたけを えらぶと…'},
  {id:'o_kaesu',  n:'よるの はまべの ないしょ', h:'だまって ついていった あと、たからを かえしに いくと…'},
  {id:'o_asa',    n:'あさひの やくそく',      h:'なにも できなかった あさ、ゆうきを だすと…'},
  {id:'o_miokuri',n:'いつか いえる ひ',       h:'ゆうきが でないまま、ふねを みおくると…'},
  {id:'k_hero',   n:'ちいさな えいゆう',      h:'キジの おはなしで、とびこむと…'},
  {id:'k_voice',  n:'そらの みはりやく',      h:'キジの おはなしで、おおごえを だすと…'}
];

/* ================= はじめての1かいめ（正統ルート）
   おはなし（tale）ごとに 一本道の列を もつ。あかずきん分（FIRST_RUNS.akz）は
   story_akazukin.js が あとから 足す。
   momo: 出版されている桃太郎に忠実な一本道。問いかけ文は f.first で非表示、
   選択のために作ったオリジナル場面（あそび・はちまき・みち・ふねの夜・こきゅう）は列に入れない。
   到達する結末 = a_minna（3びき全員の活躍） */
const FIRST_RUNS = {
momo: {
  init: {
    first:1, open:'home', dango:'full', band:'white', road:'yama', shell:0,
    think:'takara', gate:'front', calm:1, style:'minna', dog:1, saru:1, kiji:1
  },
  scenes: [
    'm1','m2','m3a','c_paka','m4','m6','c_shirase','m7','m8','m9','c_iza',
    'm12','c_dog_join','m12y','m13','c_saru_join','m13y','m14','c_kiji_join','m14y',
    'm15','c_shuppatsu','m18','c_mieta','m20','c_vs','m22','c_nanimono','c_sengen','m23',
    'cw_minna','c_m_dog','c_m_saru','c_m_kiji','c_nani','c_kimari','rm','m24','e_gaisen'
  ]
}
};

/* ================= 結末の振り返り再生（ずかんから）
   最後の選択の直後あたりから、選択肢を挟まずに読み返す固定シーン列 */
const RECAP = {
  a_minna:  {f:{style:'minna', dog:1, saru:1, kiji:1}, scenes:['cw_minna','c_m_dog','c_m_saru','c_m_kiji','c_nani','c_kimari','rm','e_gaisen']},
  a_katana: {f:{style:'katana'}, scenes:['cw_kat','c_nani','c_kimari','rk','e_gaisen']},
  a_dog:    {f:{style:'dog', dog:1}, scenes:['cw_dog','c_nani','c_kimari','rd','e_gaisen']},
  a_saru:   {f:{style:'saru', saru:1}, scenes:['cw_saru','c_nani','c_kimari','rs','e_gaisen']},
  a_kiji:   {f:{style:'kiji', kiji:1}, scenes:['cw_kiji','c_nani','c_kimari','rj','e_gaisen']},
  b_naka:   {f:{style:'katana'}, scenes:['m25','e_naka']},
  c_yaku:   {f:{style:'talk', dango:'light'}, scenes:['t1','c_hanashi','e_yaku']},
  d_kibi:   {f:{style:'talk', dango:'full'}, scenes:['t1','c_hanashi','e_kibi']},
  o_negai:  {f:{}, scenes:['o7a','e_o_negai']},
  o_hatake: {f:{}, scenes:['o7b','c_onipower','e_o_hatake']},
  o_kaesu:  {f:{}, scenes:['o7c','c_mitsu','e_o_kaesu']},
  o_asa:    {f:{guard:'midori'}, scenes:['c_ovs','o10','c_omaitta','e_o_asa']},
  o_miokuri:{f:{guard:'midori'}, scenes:['c_ovs','o10','c_omaitta','e_o_miokuri']},
  k_hero:   {f:{dog:1, saru:1, kiji:1, kscout:'high'}, scenes:['c_kvs','c_kwaza1','c_knani','k8a','e_k_hero']},
  k_voice:  {f:{dog:1, saru:1, kiji:1, kscout:'low'}, scenes:['c_kvs','c_kwaza2','k8b','e_k_voice']}
};

if (typeof module !== 'undefined') module.exports = { SCENES, ZK, STORIES, RECAP, FIRST_RUNS, nakama };
