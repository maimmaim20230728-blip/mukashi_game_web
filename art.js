"use strict";
/* えらべる むかしばなし - 絵（SVG）正本
   絵本タッチ: 輪郭線 + グラデ空 + やわらかい色
   すべて 480x300 viewBox。FACES はカットイン用 200x200 */

const P = {
  ink:'#4a3a2c',
  skyTop:'#bfe8f7', skyBtm:'#eaf9fd',
  duskTop:'#f2a96e', duskBtm:'#f7dfae',
  nightTop:'#16223f', nightBtm:'#2c3f66',
  grayTop:'#8fa6bd', grayBtm:'#c3d1dc',
  sea:'#63b4d8', seaDeep:'#3d87ad', seaNight:'#1d3355',
  grass:'#93c97a', grass2:'#6fae57', sand:'#eed9a4',
  rock:'#93897a', rock2:'#6e6557', wood:'#9a7845', woodD:'#7a5c34',
  skin:'#ffe3c2', hair:'#3a2c20',
  momoBlue:'#4a8fd4', peach:'#ffa8ba', peachD:'#f08a9e',
  oniR:'#e06060', oniG:'#6fb06f', oniHair:'#5a4090', oniDark:'#5c333c', oniNight:'#a34848',
  hood:'#d94f5a', hoodD:'#b8404c',
  wolf:'#8a8f9a', wolfD:'#6f7480', wolfBelly:'#d2d7de',
  fir:'#4f8f63', fir2:'#3d7550', wall:'#f6eede', beam:'#8a6a44', snow:'#eef7fc',
  turnip:'#fbf6ef', turnipS:'#e2d2c6', turnipP:'#c9a3d6',
  leafG:'#5aa66b', leafG2:'#46895a',
  soil:'#a9814f', soilD:'#7a5c34', soilN:'#5a4028',
  uraBlue:'#5a86bd', uraBlueD:'#456b9c', obi:'#d9a35a',
  umiTop:'#4a9cc6', umiBtm:'#1b4e78', umiTopD:'#2f6f95', umiBtmD:'#12314e',
  kame:'#5f9e58', kameD:'#48793f', kameL:'#8ac47a', kameH:'#7fb86e',
  ryuguR:'#d9534f', ryuguG:'#f2ce6a', sango:'#f28ea0',
  himeR:'#e8607a', himeP:'#f8b8c8',
  buta:'#f4b7c2', butaD:'#e795a6', butaL:'#fbdce1', butaNose:'#e0788f',
  wara:'#e9c766', waraD:'#c9a441',
  eda:'#a9773f', edaD:'#7d5327',
  renga:'#c26a4e', rengaD:'#9d503a', rengaM:'#ecdfc6',
  pwolf:'#a97a4e', pwolfD:'#8a5f36', pwolfB:'#e8d3ad',
  nabe:'#4d4744',
  hanFuku:'#7a8a63', hanFukuD:'#5f6e4c',
  greFuku:'#a9737e', greFukuD:'#87596a', epuron:'#f4efe4', hgKami:'#c99a52',
  pan:'#dcae6b', panD:'#b8863f', choco:'#8a5a3a', cookie:'#d9a35a', icing:'#fdf6ea',
  ameP:'#f79ab4', ameB:'#8fd4e6', ameY:'#f7d06e', ameG:'#a9dd8f',
  sato:'#cfeaf4', satoD:'#a3d0e4',
  majoFuku:'#6e4a86', majoFukuD:'#523569', majoKami:'#ddd6cc', majoMe:'#d94f3f',
  yoruTop:'#101c36', yoruBtm:'#2a3c62', moriYo:'#2f5a46', moriYo2:'#24483a',
  koishi:'#eef4fb', shiro:'#fdfdfb', kuchi:'#f2b04f',
  tetsu:'#8a8f9a', tetsuD:'#6f7480', shinju:'#f4eef6',
  /* かぐやひめ: しろ〜うすむらさきの かさね・たけの みどり・げっこうの はっきん・こんの よぞら */
  kgShiro:'#fbf8f2', kgKasane:'#efe7f7', kgUsu:'#dcd0ee', kgUsuD:'#bdaadd', kgObi:'#b193cf',
  take:'#7fb562', takeD:'#5c9147', takeHa:'#a8d18a', takeHikari:'#f9f1bd',
  gekkou:'#f6f2dd', hakukin:'#efe6c2',
  kgYoruTop:'#131e42', kgYoruBtm:'#2e4276',
  gotenAka:'#c25a44', gotenAkaD:'#9c4534', shiraki:'#ead9b6', shirakiD:'#c5ae86',
  kikoAo:'#4a7fc0', kikoMidori:'#5f9e6a', kikoKi:'#e0a83a', kikoSuou:'#b1526a', kikoNibi:'#7c8698',
  mikadoFuku:'#6b4f9e', mikadoFukuD:'#513a7c',
  tennin:'#fdfbf6', tenninK:'#e2dcf0', tenninObi:'#cdbfe4',
  miyako:'#efe9f7', miyakoD:'#cfc4e4',
  noragi:'#8a8f6e', noragiD:'#6e7355', ounaFuku:'#9a8a72', tenugui:'#e8e2d2', shiraga:'#e6e0d6',
  /* ブレーメンの おんがくたい: としを とった 4ひきの けなみ・どろぼうの ぬの・よるの まどあかり
     🔴 ロバの はいちゃ / イヌの こい ちゃ（ももたろうの dog・かぶの inu とは べつ）/ ネコの はいぐろ / オンドリの あかちゃ */
  robaKe:'#a8a299', robaKeD:'#877f76', robaHara:'#e2ded4', robaTate:'#5f574f',
  brInuKe:'#8f6a4a', brInuKeD:'#6f5038', brInuHara:'#d9b98a', brInuKuchi:'#efe8dc',
  brNekoKe:'#6b6871', brNekoKeD:'#4f4d57', brNekoHara:'#a9a6ae', brNekoMe:'#ffd76e',
  ondoriHa:'#c2683c', ondoriHaD:'#9c4d2c', ondoriO:'#3f5246', ondoriTosaka:'#d94f3f', ondoriKuchi:'#f2ce6a',
  doroA:'#5f6b7a', doroAD:'#495462', doroB:'#8a7350', doroBD:'#6e5a3e', doroC:'#7a6070', doroCD:'#5f4a57',
  madoAkari:'#f7d98a', madoAkariD:'#e8b45a',
  kona:'#efe6d2', machiKabe:'#f4ead6', machiYane:'#a8563f',
  /* じゅうにしの はじまり: 12ひきの けなみ・がんじつの あさぞら・おおみそかの ゆきみち・おふれの わし
     🔴 ごてんの しゅと しらきは かぐやの gotenAka / shiraki を そのまま つかう
     🔴 ネズミは かぶの nezumi、ネコは ブレーメンの brNeko とは べつの けいろに する */
  juNezu:'#bdb6ad', juNezuD:'#978f86', juNezuHara:'#efe9df', juNezuMimi:'#f0c2ca',
  juNeko:'#e0a862', juNekoD:'#bd8440', juNekoHara:'#fbf1dc', juNekoShima:'#a86f2f',
  juUshi:'#5c5751', juUshiD:'#423e39', juUshiHara:'#ece6d8', juTsuno:'#e6dcc0',
  juTora:'#e2a251', juToraD:'#bb7d31', juToraHara:'#f9edd6', juShima:'#4a3a2c',
  juUsagi:'#f8f4ec', juUsagiD:'#ddd6c8', juUsagiMimi:'#f2bfc8',
  juTatsu:'#5f9e8a', juTatsuD:'#437a68', juTatsuHara:'#ecdfa6', juTatsuTate:'#c2683c',
  juHebi:'#8fae5a', juHebiD:'#6e8c42', juHebiHara:'#eee7c2',
  juUma:'#a9743f', juUmaD:'#86592c', juUmaTate:'#4a3a2c', juUmaHara:'#e4cba6',
  juHitsuji:'#f6f1e4', juHitsujiKao:'#c2ae90',
  juIno:'#7a5a42', juInoD:'#5a4030', juInoHara:'#a98a6a', juInoKiba:'#f6f1e2',
  juAsaTop:'#ffd7a4', juAsaBtm:'#fdf4de',
  juYoruTop:'#1b2a4e', juYoruBtm:'#3d5484',
  juYuki:'#f2f8fd', juYukiK:'#d2e2ef', juYukiYo:'#c2d2e6', juYukiYoK:'#8ea4c4',
  juWashi:'#f7f1e0', juSumi:'#3a332c', juShuin:'#c9403a',
  juMatsu:'#4f8f5f', juMatsuD:'#3b7049', juTake:'#8fb562',
  /* つるの おんがえし: ゆきの ひると よる・しょうじの わし・いろりの ひ・しろい ぬのの ひかり・はるの そら
     🔴 ゆきの いろは P.snow と じゅうにしの juYuki* を そのまま つかいまわす（ふやさない）
     🔴 おじいさん/おばあさんは かぐやの noragi / ounaFuku とは べつの いろ（わたいれの あいねずと あかちゃ） */
  tsHiruTop:'#cdd9e6', tsHiruBtm:'#f4fafd',
  tsYoruTop:'#182644', tsYoruBtm:'#35496f',
  tsWashi:'#fbf5e6', tsWashiYo:'#f4dfa8', tsWashiK:'#d6c9a8',
  tsHai:'#cfc6b8', tsSumi:'#4a423a', tsRo:'#6e5a44', tsRoD:'#523f2e',
  tsNuno:'#fcfbf7', tsNunoK:'#e2e8ee',
  tsKaya:'#c9a86b', tsKayaD:'#a3843f', tsKabe:'#e8dcc0', tsKabeD:'#c6b28a',
  tsHata:'#a9825a', tsHataD:'#7f5c36', tsIto:'#f6f2e6',
  tsNawa:'#d9c08a', tsNawaD:'#a3843f',
  tsTsuru:'#fdfdfb', tsTsuruK:'#e4eaef', tsTsuruAka:'#d94f3f', tsTsuruKuro:'#3f3a36',
  tsKimono:'#fbf8f2', tsKimonoK:'#e8e2d6', tsObi:'#c2453f',
  tsJii:'#6e7b8a', tsJiiD:'#54606e', tsZukin:'#4f5c6b',
  tsBaa:'#a9836e', tsBaaD:'#876453', tsTenugui:'#ded4c2',
  tsHaruTop:'#c2e2f2', tsHaruBtm:'#f8f6de',
  tsWakakusa:'#9ac96e', tsWakakusaD:'#7cae52',
  tsUme:'#f6b8c8', tsUmeD:'#dd8fa4', tsUmeEda:'#7a5c44',
  /* アリババと 40にんの とうぞく: かわいた そらと すなの じめん・しろい はこがたの いえ・
     あおい とびら・いわはだ・どうくつの くらさと きん・すやきの つぼ・ターバンの いろ
     🔴 おいのりの たてもの（とがった とう・きんの まるやね）の いろは つくらない。
        すまいの いえ・いちばの まるやねと のれん・ラクダ・つぼだけ
     🔴 ゆげ・ほのお・ざいほうは きそんの yuge / honoo / takaraBako / spark を つかいまわす */
  abSoraTop:'#a9d8ee', abSoraBtm:'#f8f0d6',
  abYuuTop:'#e8925a', abYuuBtm:'#f8dfae',
  abYoruTop:'#141f3a', abYoruBtm:'#33415f',
  abSuna:'#e8cf9a', abSunaD:'#cfae72', abSunaYo:'#6b708c', abSunaYoD:'#4e5470',
  abKabe:'#f8f3e6', abKabeK:'#e0d6c0', abKabeD:'#c9bda4', abKabeYo:'#aab2c6',
  abTobira:'#4a7fa8', abTobiraD:'#356585',
  abIwaHada:'#a89a86', abIwaHadaD:'#8a7c68', abIwaKage:'#6b5f50',
  abDoTop:'#4a3f52', abDoBtm:'#221c2c', abDoKabe:'#5a4d63', abDoYuka:'#3c3242',
  abKin:'#f2ce6a', abKinD:'#c9a33f', abKinK:'#fdf0b8',
  abSuyaki:'#c98f5a', abSuyakiD:'#a06a3c', abSuyakiK:'#e2b184',
  abNoren:'#c2683c', abNorenD:'#9c4d2c', abMaruya:'#ead9b6', abMaruyaD:'#c9b083',
  abRaku:'#d9b57e', abRakuD:'#b28c55', abRakuHara:'#e8d2a6',
  abAli:'#a9825a', abAliD:'#87643f', abAliT:'#e4dcc6',
  abMoru:'#3f8f8a', abMoruD:'#2f6e6a', abMoruZ:'#f2c66e', abMoruZD:'#d9a441',
  abKashi:'#7a5f9e', abKashiD:'#5c4680', abKashiT:'#f2e2a4',
  abKashira:'#66707f', abKashiraD:'#4a5361', abKashiraNu:'#7c8494', abKashiraT:'#a6aebb',
  abTou:'#5f5a52', abTouD:'#454039',
  abKutsu:'#8a8f6e', abKutsuD:'#6b7053',
  /* きたかぜと たいよう: ふゆの そらと はれた そら・あまぐもの そら・たびの みちの つち・
     くさの おか・かわの みず・とんでいく きの はと すな・ゆうひ・
     きたかぜ（くも）と たいよう（ひの まる）と たびびとの いろ
     🔴 きたかぜと たいようは おなじ あかるさの いろに する（かたほうだけ くらい いろに しない）
     🔴 ゆうひの そらは かぐやの duskTop / duskBtm を つかいまわす（ふやさない）
     🔴 うみは ももたろうの sea / seaDeep、つなは つるの tsNawaD を つかいまわす */
  kzFuyuTop:'#a6c6de', kzFuyuBtm:'#e4eff5',
  kzHareTop:'#7fc9ec', kzHareBtm:'#f8f6dc',
  kzAmeTop:'#7d8896', kzAmeBtm:'#bac3cb',
  kzKumoA:'#8e99a8', kzKumoAD:'#6e798a', kzAmesuji:'#a9c6dd',
  kzMichi:'#d9bd84', kzMichiD:'#b59660',
  kzOka:'#8fc06e', kzOkaD:'#6ea352', kzOkaTo:'#a9c9b2',
  kzMizu:'#6ec2dd', kzMizuD:'#3f95b8', kzMizuA:'#a9dcea',
  kzHa:'#5fa85f', kzHaD:'#3f8248', kzSuna:'#d9c49a',
  kzYuuhi:'#f6a24a', kzYuuhiK:'#fcd68e', kzYuuOka:'#8a6a72', kzYuuOkaD:'#6e5460',
  kzKaze:'#f4f9fd', kzKazeK:'#cfdde9', kzKazeH:'#9fb4c6',
  kzTaiyou:'#fbd05e', kzTaiyouK:'#f2a63f', kzTaiyouH:'#fdeeb0',
  kzUwagi:'#8a9ec2', kzUwagiD:'#67809f', kzUwagiK:'#a9bcd6',
  kzFuku:'#e2d2b0', kzFukuD:'#bfab86',
  kzBou:'#a9825a', kzBouD:'#836043',
  kzHo:'#f8f3e4', kzHoK:'#dcd2ba', kzFune:'#8a5f36', kzFuneD:'#664226',
  kzNuno:'#fdfbf5', kzNunoA:'#f2b8c2', kzNunoB:'#a9d2ea',
  kzWata:'#f2ead6', kzWataD:'#c9b98a'
};
const O = `stroke="${P.ink}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;

const wrap = i => '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img">' + i + '</svg>';
const rc  = (x,y,w,h,c,rx) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"${rx?` rx="${rx}"`:''}/>`;
const rco = (x,y,w,h,c,rx) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"${rx?` rx="${rx}"`:''} ${O}/>`;
const ci  = (x,y,r,c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const cio = (x,y,r,c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" ${O}/>`;
const el  = (x,y,rx,ry,c) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}"/>`;
const elo = (x,y,rx,ry,c) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" ${O}/>`;
const pt  = (d,c) => `<path d="${d}" fill="${c}"/>`;
const pto = (d,c) => `<path d="${d}" fill="${c}" ${O}/>`;
const ln  = (d,c,w) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const g   = (x,y,s,i) => `<g transform="translate(${x} ${y}) scale(${s})">${i}</g>`;
const gr  = (x,y,s,r,i) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">${i}</g>`;

function grad(id,c1,c2){
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="480" height="300" fill="url(#${id})"/>`;
}
const cloud = (x,y,s) => g(x,y,s, el(0,0,26,13,'#fff')+el(-20,5,18,10,'#fff')+el(20,5,18,10,'#fff'));
const sun = (x,y) => ci(x,y,34,'rgba(255,225,140,.45)')+ci(x,y,22,'#ffd76e');
const star = (x,y,r) => ci(x,y,r,'#fff8dd');
const mtns = () => pt('M0 210 L70 150 L140 205 L210 160 L300 215 L390 165 L480 210 L480 225 L0 225 z','rgba(150,190,210,.55)');
const waveRow = (y,op) => `<path d="M-10 ${y} q20 -10 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" fill="none" stroke="rgba(255,255,255,${op})" stroke-width="3" stroke-linecap="round"/>`;
const spark = (x,y,s) => g(x,y,s, pt('M0 -8 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 l6 -2 z','#ffd76e'));
const tree = (x,y,s) => g(x,y,s, rco(-6,-38,12,38,P.woodD,3) + cio(-16,-50,17,P.grass2) + cio(14,-48,15,P.grass2) + cio(0,-62,20,P.grass2));
const house = (x,y,s) => g(x,y,s, rco(-45,-52,90,52,'#f4e6c8',3) + pto('M-56 -52 L0 -94 L56 -52 z','#95603c') + rco(-13,-32,26,32,'#6e5138',2) + rc(14,-44,18,14,'#cfe6f0'));

/* ---------- あかずきん用の背景部品 ---------- */
const cir = (x,y,r,c,w) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="${w||2}"/>`;
/* もみの木（三角の重ね） */
const fir = (x,y,s) => g(x,y,s, rco(-5,-30,10,30,P.woodD,3)
  + pto('M-26 -26 L0 -58 L26 -26 z',P.fir)
  + pto('M-21 -44 L0 -74 L21 -44 z',P.fir2)
  + pto('M-15 -62 L0 -88 L15 -62 z',P.fir));
const firYuki = (x,y,s) => fir(x,y,s) + g(x,y,s,
    pt('M-24 -26 q24 -13 48 0 q-24 -6 -48 0 z','#fff')
  + pt('M-19 -44 q19 -12 38 0 q-19 -5 -38 0 z','#fff')
  + pt('M-13 -62 q13 -11 26 0 q-13 -4 -26 0 z','#fff'));
/* 木組みの家（白壁＋茶の梁の格子） */
const whouse = (x,y,s) => g(x,y,s, rco(-46,-54,92,54,P.wall,3)
  + ln('M-46 -30 L46 -30',P.beam,5)
  + ln('M-22 -54 L-22 0',P.beam,5) + ln('M22 -54 L22 0',P.beam,5)
  + ln('M-46 -54 L-22 -30',P.beam,4) + ln('M46 -54 L22 -30',P.beam,4)
  + rco(-42,-48,17,14,'#cfe6f0',2) + rco(25,-48,17,14,'#cfe6f0',2)
  + rco(-13,-32,26,32,P.woodD,3) + ci(7,-16,2.4,'#f2ce6a')
  + pto('M-58 -54 L0 -94 L58 -54 z','#a8563f')
  + ln('M-40 -68 L40 -68','#8e4634',3)
  + rco(24,-104,14,26,'#a8563f',3));
/* 部屋の中（木組みの壁＋板の床） */
const room = id => grad(id,'#f9efdc','#ead9ba')
  + ln('M70 0 L70 238',P.beam,7) + ln('M410 0 L410 238',P.beam,7) + ln('M0 92 L480 92',P.beam,7)
  + rc(0,238,480,62,'#b98a52') + ln('M0 238 L480 238','#8a6a3f',3)
  + ln('M0 262 L480 262','rgba(122,92,52,.45)',2) + ln('M0 286 L480 286','rgba(122,92,52,.45)',2);
const mado = (x,y,s) => g(x,y,s, rco(-42,-32,84,64,'#cfe6f0',4)
  + ln('M0 -32 L0 32',P.beam,4) + ln('M-42 0 L42 0',P.beam,4)
  + rco(-46,-38,92,9,P.beam,3));
const bed = (x,y,s) => g(x,y,s, rco(-96,-86,16,86,P.woodD,5) + rco(-100,-100,24,18,P.wood,5)
  + rco(80,-56,16,56,P.woodD,5) + rco(76,-68,24,16,P.wood,5)
  + rco(-88,-52,172,26,'#a9743f',5)
  + rco(-84,-64,164,16,'#f6f1e6',6)
  + rco(-80,-78,56,20,'#fff',9)
  + rco(-18,-72,98,26,'#cfe0ec',10) + ln('M-10 -60 L72 -60','#b4cddd',2.5));
const hana = (x,y,c,s) => ln(`M${x} ${y} q3 -8 0 -14`,'#5aa66b',2.4)
  + g(x,y-14,s||1, ci(-4,0,3.4,c) + ci(4,0,3.4,c) + ci(0,-4,3.4,c) + ci(0,4,3.4,c) + ci(0,0,2.6,'#ffe9a8'));
const chou = (x,y,s,c) => g(x,y,s, pto('M-1 0 q-13 -13 -17 -2 q-2 11 15 6 z',c||'#f7d06e')
  + pto('M1 0 q13 -13 17 -2 q2 11 -15 6 z',c||'#f7d06e') + ln('M0 -3 l0 9',P.ink,2));
const zzz = (x,y,s) => g(x,y,s, ln('M0 0 l15 0 l-15 17 l15 0','rgba(74,58,44,.7)',3)
  + ln('M20 -20 l11 0 l-11 12 l11 0','rgba(74,58,44,.55)',2.6)
  + ln('M37 -36 l8 0 l-8 9 l8 0','rgba(74,58,44,.42)',2.2));
const hasami = (x,y,s,r) => gr(x,y,s,r||0, pto('M-2 -3 L-21 -27 L-16 -31 L2 -7 z','#c9d0d8')
  + pto('M2 -3 L21 -27 L16 -31 L-2 -7 z','#c9d0d8')
  + ln('M-2 -3 q-4 7 -6 11',P.ink,2.5) + ln('M2 -3 q4 7 6 11',P.ink,2.5)
  + cir(-8,12,7,P.ink,2.5) + cir(8,12,7,P.ink,2.5)
  + cio(0,-4,2.8,'#8a8f9a'));

/* ---------- 人物 ---------- */
function momoChar(band, noSword){
  let s = el(0,2,17,5,'rgba(0,0,0,.13)')
    + rco(-10,-18,8,18,'#5b4632',3) + rco(2,-18,8,18,'#5b4632',3);
  if(!noSword) s += gr(17,-36,1,24, rco(0,-2,20,5,P.rock,2) + rco(-7,-3,8,7,'#b03a3a',2));
  s += rco(-16,-58,32,44,P.momoBlue,12)
    + rc(-16,-27,32,7,'#f2e6c8')
    + cio(0,-44,6,P.peach)
    + rco(-24,-56,9,25,P.momoBlue,4) + rco(15,-56,9,25,P.momoBlue,4)
    + cio(-19,-29,4.5,P.skin) + cio(20,-29,4.5,P.skin)
    + cio(0,-77,19,P.skin)
    + pt('M-19 -77 a19 19 0 0 1 38 0 q-5 4 -9.5 0 q-4.5 4 -9.5 0 q-4.5 4 -9.5 0 q-5 4 -9.5 0 z',P.hair);
  if(band){
    s += rco(-21,-88,42,8,band,4) + pto('M21 -86 l11 -6 l-2 9 z',band);
  }
  s += ci(-7,-73,2.8,'#333') + ci(7,-73,2.8,'#333') + ci(-6,-74,1,'#fff') + ci(8,-74,1,'#fff')
    + ci(-13,-66,3,'rgba(255,140,140,.5)') + ci(13,-66,3,'rgba(255,140,140,.5)')
    + ln('M-4 -66 q4 5 8 0','#333',2.5);
  return s;
}
const momoBand = f => (f && f.band) ? (f.band==='red' ? '#e05555' : '#fff') : null;
function personChar(robe, hairC, extra){
  hairC = hairC || P.hair;
  return el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-9,-16,7,16,'#5b4632',3) + rco(2,-16,7,16,'#5b4632',3)
    + rco(-14,-56,28,42,robe,11)
    + rco(-21,-53,8,22,robe,4) + rco(13,-53,8,22,robe,4)
    + cio(0,-72,16,P.skin)
    + pt('M-16 -72 a16 16 0 0 1 32 0 z',hairC)
    + ci(-5.5,-69,2.4,'#333') + ci(5.5,-69,2.4,'#333')
    + ci(-11,-63,2.6,'rgba(255,140,140,.5)') + ci(11,-63,2.6,'rgba(255,140,140,.5)')
    + ln('M-4 -62 q4 4.5 8 0','#333',2.2)
    + (extra || '');
}
const baachanChar = () => personChar('#d488a4','#ddd6cc', cio(0,-86,7,'#ddd6cc') + rc(-14,-44,28,20,'#fff'));
const jiichanChar = () => personChar('#8a9a68','#ddd6cc', rco(-13,-86,26,8,'#f4e6c8',4));
const villagerChar = c => personChar(c || '#c09454');
const girlChar = () => g(0,0,0.8, personChar('#d46a6a','#3a2c20', cio(0,-88,6,'#3a2c20')));

function oniChar(c, opt){
  opt = opt || {};
  const mood = opt.mood || 'angry';
  let s = el(0,2,22,6,'rgba(0,0,0,.15)')
    + rco(-14,-18,11,18,c,4) + rco(3,-18,11,18,c,4)
    + rco(-23,-78,46,62,c,15)
    + rco(-19,-31,38,16,'#f2ce6a',5)
    + pt('M-12 -29 l5 10 l-10 0 z','#7a5a1e') + pt('M4 -29 l5 10 l-10 0 z','#7a5a1e')
    + rco(-31,-74,9,28,c,4) + rco(22,-74,9,28,c,4)
    + cio(0,-100,25,c)
    + cio(-10,-121,9,P.oniHair) + cio(0,-125,10,P.oniHair) + cio(10,-120,9,P.oniHair)
    + pto('M-13 -120 q-6 -16 5 -19 l2 9 q-5 4 -3 10 z','#fff2cf')
    + pto('M13 -120 q6 -16 -5 -19 l-2 9 q5 4 3 10 z','#fff2cf');
  if(mood === 'angry'){
    s += ci(-9,-101,4.5,'#fff') + ci(9,-101,4.5,'#fff') + ci(-9,-100,2,'#333') + ci(9,-100,2,'#333')
      + ln('M-15 -108 l10 3','#3a2c20',3) + ln('M15 -108 l-10 3','#3a2c20',3)
      + pto('M-9 -90 q9 8 18 0 l-2 -3 q-7 5 -14 0 z','#7a3030')
      + pt('M-8 -90 l3 5 l-6 0 z','#fff') + pt('M8 -90 l3 5 l-6 0 z','#fff');
  }else if(mood === 'sad'){
    s += ci(-9,-100,2.6,'#333') + ci(9,-100,2.6,'#333')
      + ln('M-14 -106 l10 -3','#3a2c20',3) + ln('M14 -106 l-10 -3','#3a2c20',3)
      + ln('M-6 -89 q6 -5 12 0','#5a2e00',2.5)
      + ci(19,-108,3,'#aee3f5');
  }else{
    s += ln('M-12 -101 q3 -4 6 0','#333',2.5) + ln('M6 -101 q3 -4 6 0','#333',2.5)
      + ln('M-6 -90 q6 6 12 0','#5a2e00',2.5)
      + ci(-16,-93,3,'rgba(255,140,140,.5)') + ci(16,-93,3,'rgba(255,140,140,.5)');
  }
  if(opt.club){
    s += gr(34,-72,1,20, rco(-8,-62,16,80,P.wood,8) + ci(-4,-50,2.2,'#554') + ci(4,-38,2.2,'#554') + ci(-3,-24,2.2,'#554'));
  }
  return s;
}
function oniSit(c, mood){
  let s = el(0,2,26,6,'rgba(0,0,0,.15)')
    + elo(-14,-6,12,7,c) + elo(14,-6,12,7,c)
    + rco(-22,-58,44,52,c,16)
    + rco(-18,-24,36,12,'#f2ce6a',5)
    + rco(-30,-52,9,24,c,4) + rco(21,-52,9,24,c,4)
    + cio(0,-78,23,c)
    + cio(-9,-97,8,P.oniHair) + cio(0,-101,9,P.oniHair) + cio(9,-96,8,P.oniHair)
    + pto('M-12 -97 q-5 -14 5 -17 l2 8 q-5 4 -3 9 z','#fff2cf')
    + pto('M12 -97 q5 -14 -5 -17 l-2 8 q5 4 3 9 z','#fff2cf');
  if(mood === 'happy'){
    s += ln('M-11 -80 q3 -4 6 0','#333',2.5) + ln('M5 -80 q3 -4 6 0','#333',2.5)
      + ln('M-5 -70 q5 5 10 0','#5a2e00',2.5);
  }else{
    s += ci(-8,-79,2.4,'#333') + ci(8,-79,2.4,'#333')
      + ln('M-13 -85 l9 -3','#3a2c20',2.5) + ln('M13 -85 l-9 -3','#3a2c20',2.5)
      + ln('M-5 -69 q5 -4 10 0','#5a2e00',2.5)
      + ci(17,-88,3,'#aee3f5');
  }
  return s;
}
const oniKid = mood => g(0,0,0.62, oniChar(P.oniG, {mood: mood || 'sad'}));

/* いぬ（ももたろう）。🔴 opt.kubiwa===false で くびわを はずす（じゅうにしの イヌは くびわ なし） */
const dogChar = (opt) => el(0,2,15,4,'rgba(0,0,0,.13)')
  + pto('M-15 -20 q-11 -3 -9 -13 q9 -3 10 7 z','#c98a4b')
  + elo(0,-14,17,11,'#f6efe2')
  + rco(-11,-9,6,9,'#efe4d2',2) + rco(5,-9,6,9,'#efe4d2',2)
  + cio(15,-28,11,'#f6efe2')
  + pto('M8 -37 l-2 -10 l9 4 z','#c98a4b') + pto('M20 -38 l3 -10 l-10 5 z','#c98a4b')
  + el(21,-25,5,4,'#fff')
  + ci(24,-27,2.2,'#3a2c20') + ci(13,-29,2.2,'#333')
  + pt('M22 -21 q2 4 -2 5 l-1 -4 z','#e08a8a')
  + ((opt && opt.kubiwa === false) ? '' : rco(7,-20,13,4,'#d95555',2));

const saruChar = () => el(0,2,13,4,'rgba(0,0,0,.13)')
  + ln('M-12 -13 q-12 1 -9 -12','#a9743f',4.5)
  + cio(0,-15,12,'#b07a42')
  + elo(0,-13,8,8.5,'#ffe3c8')
  + rco(-16,-22,7,14,'#b07a42',3) + rco(9,-22,7,14,'#b07a42',3)
  + cio(0,-33,11,'#b07a42') + cio(-11,-33,4.5,'#b07a42') + cio(11,-33,4.5,'#b07a42')
  + el(0,-31,7.5,8,'#ffe3c8')
  + ci(-3,-33,1.9,'#333') + ci(3,-33,1.9,'#333')
  + ci(-6,-28,2,'rgba(255,140,140,.55)') + ci(6,-28,2,'rgba(255,140,140,.55)')
  + ln('M-2.5 -27 q2.5 2.6 5 0','#333',2);

const kijiChar = () => el(0,0,14,3.5,'rgba(0,0,0,.13)')
  + pto('M-12 -18 q-26 -12 -30 -4 q10 8 28 8 z','#b0703f')
  + pto('M-12 -14 q-28 -2 -29 6 q12 5 28 0 z','#8a5a2f')
  + ln('M-32 -18 l6 2','#4a3a2c',2) + ln('M-33 -9 l6 0','#4a3a2c',2)
  + elo(0,-15,15,10,'#2f7d4f')
  + elo(-3,-15,8,5.5,'#25603c')
  + ln('M4 -22 q6 3 6 8','#fff',3)
  + cio(12,-27,8,'#1f6f46')
  + ci(14,-28,3.6,'#d94f3f')
  + ci(14.5,-28,1.5,'#333')
  + pto('M19 -29 l9 2 l-9 3 z','#f2ce6a')
  + ln('M-3 -5 l0 5','#f2ce6a',2.2) + ln('M4 -5 l0 5','#f2ce6a',2.2);

const kijiFly = () => pto('M-14 6 q-30 -4 -34 4 q12 7 32 3 z','#8a5a2f')
  + elo(0,0,16,9,'#2f7d4f')
  + pto('M-4 -4 q-12 -22 -2 -26 q10 2 8 24 z','#25603c')
  + pto('M2 6 q-8 20 2 24 q10 -4 6 -22 z','#25603c')
  + ln('M6 -8 q6 3 6 8','#fff',3)
  + cio(14,-10,7.5,'#1f6f46')
  + ci(16,-11,3.2,'#d94f3f') + ci(16.5,-11,1.4,'#333')
  + pto('M21 -12 l8 2 l-8 3 z','#f2ce6a');

/* ---------- あかずきんの 人物 ---------- */
function akazukinChar(basket){
  let s = el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-9,-16,7,16,'#5b4632',3) + rco(2,-16,7,16,'#5b4632',3)
    + pto('M-15 -34 L15 -34 L20 -14 L-20 -14 z',P.hood)
    + rco(-13,-56,26,26,P.hood,9)
    + pto('M-10 -37 L10 -37 L13 -14 L-13 -14 z','#fff')
    + rco(-20,-53,8,23,P.hood,4) + rco(12,-53,8,23,P.hood,4)
    + cio(-16,-29,4.5,P.skin) + cio(16,-29,4.5,P.skin)
    + pto('M-17 -56 q17 -10 34 0 l4 14 q-21 8 -42 0 z',P.hoodD)
    + pto('M-21 -68 q0 -25 21 -25 q21 0 21 25 q0 15 -8 19 l-26 0 q-8 -4 -8 -19 z',P.hood)
    + elo(0,-70,14,15,P.skin)
    + pt('M-12 -72 a12 13 0 0 1 24 0 q-12 6 -24 0 z','#e0a95e')
    + ci(-5,-68,2.6,'#333') + ci(5,-68,2.6,'#333') + ci(-4,-69,1,'#fff') + ci(6,-69,1,'#fff')
    + ci(-10,-62,2.8,'rgba(255,140,140,.55)') + ci(10,-62,2.8,'rgba(255,140,140,.55)')
    + ln('M-4 -60 q4 4.5 8 0','#333',2.2);
  if(basket){
    s += g(21,-24,1, ln('M-8 -6 q8 -17 16 0',P.woodD,2.5)
      + pto('M-10 -6 L10 -6 L8 8 L-8 8 z','#c99a56')
      + ln('M-9 0 L9 0','#a97a3a',2)
      + rco(-5,-17,8,10,'#7a4a9a',2)
      + pto('M-10 -8 q10 -6 20 0 l-1 4 q-9 4 -18 0 z','#fff')
      + cio(5,-9,3.5,'#f4e6b8'));
  }
  return s;
}

function ookamiHead(mood, cap){
  const c = P.wolf;
  let s = pto('M-15 -8 L-21 -30 L-3 -18 z',c) + pto('M15 -8 L21 -30 L3 -18 z',c)
    + cio(0,0,17,c)
    + pt('M-14 -13 L-18 -26 L-7 -18 z','#d69aa0') + pt('M14 -13 L18 -26 L7 -18 z','#d69aa0')
    + elo(0,12,12,8,P.wolfBelly)
    + ci(-13,3,3,'rgba(255,140,140,.4)') + ci(13,3,3,'rgba(255,140,140,.4)')
    + pto('M-5 5 q5 -3 10 0 q-2 6 -5 6 q-3 0 -5 -6 z','#2f2b28');
  if(mood === 'sad'){
    s += ci(-7,-4,2.8,'#2c2620') + ci(7,-4,2.8,'#2c2620')
      + ln('M-14 -11 l9 -3','#3a3330',2.6) + ln('M14 -11 l-9 -3','#3a3330',2.6)
      + ln('M-5 18 q5 -4 10 0','#2f2b28',2.4)
      + ci(15,-5,2.8,'#aee3f5');
  }else if(mood === 'happy'){
    s += ln('M-11 -5 q4 -5 8 0','#2c2620',2.6) + ln('M3 -5 q4 -5 8 0','#2c2620',2.6)
      + ln('M-5 15 q5 5 10 0','#2f2b28',2.4);
  }else if(mood === 'sleep'){
    s += ln('M-11 -5 q4 5 8 0','#2c2620',2.6) + ln('M3 -5 q4 5 8 0','#2c2620',2.6)
      + elo(0,17,4,2.6,'#6e3838');
  }else{
    s += el(-7,-4,5.6,3.8,'#f6da84') + el(7,-4,5.6,3.8,'#f6da84')
      + ci(-6,-3,2.4,'#2c2620') + ci(8,-3,2.4,'#2c2620')
      + el(-7,-7.5,5.6,3.6,c) + el(7,-7.5,5.6,3.6,c)
      + ln('M-14 -12 l9 3','#3a3330',2.6) + ln('M14 -12 l-9 3','#3a3330',2.6)
      + pto('M-7 14 q7 8 14 0 q-3 7 -7 7 q-4 0 -7 -7 z','#6e3838')
      + pt('M-5 14 l2 5 l-5 1 z','#fff') + pt('M5 14 l-2 5 l5 1 z','#fff');
  }
  if(cap){
    s += pto('M-14 -12 q0 -22 14 -22 q14 0 14 22 q-14 -6 -28 0 z','#f4d0dc')
      + pto('M-12 -26 q-14 -10 -26 -2 q8 10 22 8 z','#f4d0dc')
      + cio(-40,-26,5.5,'#fff')
      + rco(-16,-17,32,7,'#fff',3);
  }
  return s;
}

function ookamiChar(opt){
  opt = opt || {};
  const c = P.wolf, cd = P.wolfD;
  let s = el(0,2,17,5,'rgba(0,0,0,.14)')
    + pto('M-12 -20 q-24 -2 -26 -20 q-1 -11 8 -12 q-3 15 10 20 q9 4 8 12 z',c)
    + pt('M-38 -40 q-1 -11 8 -12 q3 8 -3 13 z',P.wolfBelly)
    + rco(-12,-17,9,17,cd,4) + rco(3,-17,9,17,cd,4)
    + rco(-16,-58,32,44,c,13)
    + elo(0,-30,11,13,P.wolfBelly)
    + rco(-24,-55,9,25,c,4) + rco(15,-55,9,25,c,4)
    + cio(-19,-29,5,cd) + cio(20,-29,5,cd);
  if(opt.dress){
    s += pto('M-18 -57 q18 -9 36 0 l6 43 q-24 8 -48 0 z','#f6eef2')
      + ln('M-13 -46 q13 6 26 0','#dfc9d4',2.5)
      + rco(-7,-59,14,10,'#f4d0dc',4);
  }
  s += g(0,-76,1, ookamiHead(opt.mood || 'sly', opt.dress));
  return s;
}

function ookamiLie(dress){
  const c = P.wolf, cd = P.wolfD;
  return el(22,6,58,7,'rgba(0,0,0,.13)')
    + pto('M50 -20 q26 -2 34 -20 q-20 -6 -30 6 z',c)
    + elo(24,-16,40,17,c)
    + elo(50,-8,15,9,cd) + elo(28,-7,15,9,cd)
    + (dress ? pto('M-2 -30 q26 -8 50 4 l-5 18 q-24 8 -48 -4 z','#f6eef2') : '')
    + elo(2,-9,15,9,cd)
    + g(-14,-24,1, ookamiHead('sleep', dress));
}

const hahaChar = () => personChar('#6f8fb8','#6e4b32', cio(0,-86,7,'#6e4b32') + rc(-14,-44,28,22,'#fff'));
const gmaChar = () => personChar('#9a8ab8','#e6e0d6', cio(0,-86,7,'#e6e0d6')
  + pto('M-15 -56 q15 -9 30 0 l4 15 q-19 7 -38 0 z','#c98aa8')
  + cir(-5.5,-69,5,P.ink,2) + cir(5.5,-69,5,P.ink,2)
  + ln('M-0.5 -69 L0.5 -69',P.ink,2) + ln('M-10.5 -70 L-14 -71',P.ink,2) + ln('M10.5 -70 L14 -71',P.ink,2));
const ryoushiChar = () => personChar('#5f8a52','#6b5030',
    pto('M-9 -60 q9 13 18 0 q-2 13 -9 13 q-7 0 -9 -13 z','#8a6a44')
  + pto('M-19 -84 q19 -14 38 0 q-19 7 -38 0 z','#3f6b3f')
  + pto('M-13 -84 q0 -17 13 -17 q13 0 13 17 z','#4f7d4a')
  + pto('M9 -97 q11 -12 17 -8 q-4 9 -14 11 z','#d94f5a'));

/* ---------- おおきなかぶ用の背景部品 ---------- */
/* 左右を 反転して おく（むきあう 場面で つかう） */
const gx = (x,y,s,i) => `<g transform="translate(${x} ${y}) scale(${-s} ${s})">${i}</g>`;
/* 風車（ロシアの 畑の めじるし） */
const fusha = (x,y,s) => g(x,y,s, pto('M-20 0 L-14 -58 L14 -58 L20 0 z','#c9a86b')
  + pto('M-19 -58 L0 -76 L19 -58 z','#8a5c30')
  + rco(-7,-24,14,24,P.woodD,3) + ci(4,-12,2,'#f2ce6a')
  + gr(0,-62,1,22, rco(-4,-46,8,92,'#efe0c4',3))
  + gr(0,-62,1,112, rco(-4,-46,8,92,'#efe0c4',3))
  + cio(0,-62,5,P.woodD));
/* みみず（土の なかの ともだち） */
const mimizu = (x,y,s) => g(x,y,s, ln('M-16 0 q8 -11 16 0 q8 11 16 0',P.ink,7)
  + ln('M-16 0 q8 -11 16 0 q8 11 16 0','#e0a0a8',4)
  + ci(15,-1,1.3,'#4a3a2c'));
/* とびちる 土の つぶ */
const tsuchi = (x,y,s) => g(x,y,s, ci(-15,-6,3.2,P.soilD) + ci(4,-13,2.6,P.soilD) + ci(15,2,3.4,P.soilD)
  + ci(-6,9,2.4,P.soil) + ci(21,-9,2.2,P.soil) + ci(-21,5,2.6,P.soil));
/* うしろすがた（ねずみ視点の 列で つかう） */
const senakaChar = (robe,hair,extra) => el(0,2,15,4,'rgba(0,0,0,.12)')
  + rco(-9,-16,7,16,'#5b4632',3) + rco(2,-16,7,16,'#5b4632',3)
  + rco(-14,-56,28,42,robe,11)
  + rco(-21,-53,8,22,robe,4) + rco(13,-53,8,22,robe,4)
  + cio(0,-72,16,P.skin)
  + pto('M-16 -70 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z',hair)
  + (extra || '');
const inuSenaka = () => el(0,3,20,5,'rgba(0,0,0,.13)')
  + ln('M15 -34 q17 -12 9 -28',P.ink,8) + ln('M15 -34 q17 -12 9 -28','#8a5a2f',5)
  + elo(0,-22,20,23,'#b0703f')
  + cio(0,-45,14,'#b0703f')
  + pto('M-12 -51 q-9 8 -5 19 q9 0 9 -13 z','#8a5a2f') + pto('M12 -51 q9 8 5 19 q-9 0 -9 -13 z','#8a5a2f')
  + rco(-14,-6,7,8,'#8a5a2f',2) + rco(7,-6,7,8,'#8a5a2f',2);
const nekoSenaka = () => el(0,3,18,5,'rgba(0,0,0,.12)')
  + ln('M13 -30 q19 -10 13 -35',P.ink,8) + ln('M13 -30 q19 -10 13 -35','#fbf6ef',5)
  + elo(0,-21,18,22,'#fbf6ef')
  + cio(0,-44,13,'#fbf6ef')
  + pto('M-11 -50 l-3 -12 l12 5 z','#fbf6ef') + pto('M11 -50 l3 -12 l-12 5 z','#fbf6ef')
  + rco(-12,-5,6,7,'#f2ece0',2) + rco(6,-5,6,7,'#f2ece0',2);

/* ---------- おおきなかぶの 人物 ---------- */
/* じいさん: ルバシカ（腰ひもの 上着）と 白ひげ */
const jiiChar = () => personChar('#efe0c4','#e6e0d6',
    rco(-15,-32,30,8,'#a9743f',3) + ci(0,-28,2.4,'#7a5c34')
  + ln('M-9 -55 L-9 -34','#d9c49a',2.5) + ln('M9 -55 L9 -34','#d9c49a',2.5)
  + ln('M-9 -14 L-2 -14','#3a2c20',2.2) + ln('M2 -14 L9 -14','#3a2c20',2.2)
  + pto('M-12 -63 q12 20 24 0 q-3 19 -12 19 q-9 0 -12 -19 z','#f2ede2')
  + pt('M-10 -62 q10 -6 20 0 q-5 8 -10 5 q-5 3 -10 -5 z','#fff')
  + ln('M-11 -76 l8 -3','#ddd6cc',3) + ln('M11 -76 l-8 -3','#ddd6cc',3)
  + pto('M-17 -84 q17 -11 34 0 q-17 6 -34 0 z','#6e7d92')
  + pto('M-13 -84 q0 -14 13 -14 q13 0 13 14 z','#8496ab'));
/* ばあさん: 赤い スカーフ（プラトーク）と エプロン */
const baaRuChar = () => personChar('#8fa2cc','#c9c2b8',
    pto('M-13 -46 q13 -5 26 0 l2 31 q-15 5 -30 0 z','#f6efe2')
  + ln('M-15 -44 L15 -44','#e0d6c2',2.5)
  + pto('M-15 -73 q-6 13 -2 21 q7 -4 6 -14 z','#d94f5a')
  + pto('M15 -73 q6 13 2 21 q-7 -4 -6 -14 z','#d94f5a')
  + pto('M-17 -70 a17 17 0 0 1 34 0 q-5 4 -9 1 q-8 -5 -16 0 q-4 3 -9 -1 z','#d94f5a')
  + ln('M-11 -82 q11 -5 22 0','#c9464f',2) + ln('M-6 -88 q6 -3 12 0','#c9464f',1.8));
/* まご: おさげ髪の 女の子・青い ワンピース */
const magoChar = () => personChar('#5a8fd4','#5a4632',
    elo(-18,-61,5.5,15,'#5a4632') + elo(18,-61,5.5,15,'#5a4632')
  + cio(-18,-45,4,'#e8607a') + cio(18,-45,4,'#e8607a')
  + pt('M-9 -56 q9 8 18 0 l-2 5 q-7 4 -14 0 z','#fff'));
/* いぬ: たれ耳の 茶いろい 犬 */
const inuRuChar = () => el(0,2,16,4,'rgba(0,0,0,.13)')
  + pto('M-16 -20 q-13 -5 -9 -17 q10 -1 10 9 z','#8a5a2f')
  + elo(0,-14,18,11,'#b0703f')
  + rco(-12,-9,6,9,'#8a5a2f',2) + rco(5,-9,6,9,'#8a5a2f',2)
  + cio(16,-28,11,'#b0703f')
  + pto('M9 -35 q-8 6 -5 16 q7 1 8 -11 z','#8a5a2f')
  + pto('M23 -36 q9 6 6 16 q-7 1 -7 -11 z','#8a5a2f')
  + el(22,-25,5.5,4.5,'#f2e0c8')
  + ci(25,-27,2.2,'#3a2c20') + ci(14,-29,2.2,'#333')
  + ci(9,-24,2.6,'rgba(255,140,140,.45)')
  + ln('M13 -23 q4 3 8 0','#3a2c20',2)
  + rco(8,-20,13,4,'#5aa66b',2);
/* ねこ: まるい 白ねこ・立ち尻尾 */
const nekoChar = () => el(0,2,14,4,'rgba(0,0,0,.12)')
  + ln('M-11 -12 q-15 -6 -11 -28',P.ink,8) + ln('M-11 -12 q-15 -6 -11 -28','#fbf6ef',5)
  + elo(0,-14,13,13,'#fbf6ef')
  + elo(0,-10,8,8,'#f2ece0')
  + rco(-9,-4,6,4,'#f2ece0',2) + rco(3,-4,6,4,'#f2ece0',2)
  + cio(0,-32,11,'#fbf6ef')
  + pto('M-10 -38 l-3 -11 l11 5 z','#fbf6ef') + pto('M10 -38 l3 -11 l-11 5 z','#fbf6ef')
  + pt('M-8 -39 l-1 -6 l6 3 z','#f4c4cc') + pt('M8 -39 l1 -6 l-6 3 z','#f4c4cc')
  + ci(-4,-33,2.2,'#333') + ci(4,-33,2.2,'#333')
  + ci(-3.3,-33.8,.9,'#fff') + ci(4.7,-33.8,.9,'#fff')
  + ci(-8,-27,2.4,'rgba(255,140,140,.45)') + ci(8,-27,2.4,'rgba(255,140,140,.45)')
  + pt('M0 -29 l3 2 l-3 2.4 l-3 -2.4 z','#e08a8a')
  + ln('M-1 -25 q-3 3 -6 1','#333',1.8) + ln('M1 -25 q3 3 6 1','#333',1.8)
  + ln('M-9 -29 l-9 -3','#5a5248',1.6) + ln('M9 -29 l9 -3','#5a5248',1.6);
/* ねずみ: ほかの みんなの 半分いかの 大きさ */
const nezumiChar = () => el(0,2,13,4,'rgba(0,0,0,.12)')
  + ln('M-11 -8 q-18 3 -13 -14','#8a8f9a',3)
  + elo(0,-11,13,10,'#a8adb6')
  + elo(-1,-8,8,6,'#d2d7de')
  + rco(-7,-4,5,4,'#8a8f9a',2) + rco(2,-4,5,4,'#8a8f9a',2)
  + cio(11,-18,9,'#a8adb6')
  + cio(6,-26,5.5,'#a8adb6') + cio(16,-25,5,'#a8adb6')
  + ci(6,-26,3,'#e8bcc4') + ci(16,-25,2.6,'#e8bcc4')
  + el(18,-15,4.5,3.5,'#d2d7de')
  + ci(20,-16,2,'#e08a8a')
  + ci(13,-19,2.2,'#333') + ci(13.7,-19.7,.9,'#fff')
  + ci(8,-14,2.2,'rgba(255,140,140,.4)')
  + ln('M18 -13 l8 2','#5a5248',1.6) + ln('M18 -14 l8 -4','#5a5248',1.6);
/* おおきな かぶ。face=true で にっこり顔（かぶ視点用） */
function kabuArt(face){
  let s = pto('M0 0 C-14 -22 -40 -30 -40 -58 C-40 -86 -18 -96 0 -96 C18 -96 40 -86 40 -58 C40 -30 14 -22 0 0 z',P.turnip)
    + ln('M-4 -12 q-11 5 -15 -2',P.turnipS,2.5) + ln('M4 -16 q12 4 16 -3',P.turnipS,2.5)
    + pt('M-37 -70 q37 -26 74 0 q-5 -26 -37 -26 q-32 0 -37 26 z',P.turnipP)
    + el(-17,-80,10,7,'rgba(255,255,255,.5)')
    + gr(0,-90,1,-27, pto('M0 0 q-16 -26 0 -54 q16 28 0 54 z',P.leafG) + ln('M0 -6 L0 -46',P.leafG2,2.5))
    + gr(0,-93,1,2, pto('M0 0 q-18 -30 0 -64 q18 32 0 64 z',P.leafG) + ln('M0 -6 L0 -54',P.leafG2,2.5))
    + gr(0,-90,1,28, pto('M0 0 q-16 -26 0 -54 q16 28 0 54 z',P.leafG) + ln('M0 -6 L0 -46',P.leafG2,2.5));
  if(face){
    s += ci(-14,-62,5,'#333') + ci(14,-62,5,'#333') + ci(-12.4,-63.6,1.8,'#fff') + ci(15.6,-63.6,1.8,'#fff')
      + ci(-25,-51,5,'rgba(255,140,140,.5)') + ci(25,-51,5,'rgba(255,140,140,.5)')
      + ln('M-9 -50 q9 8 18 0','#333',3);
  }
  return s;
}
/* 引っぱる 列: c2..c5 の じゅんに ならべる（来ていない 人は 描かない） */
const KB_CH = {
  baa:  {s:.95, y:2, f:baaRuChar},
  mago: {s:.76, y:4, f:magoChar},
  inu:  {s:1.2, y:4, f:inuRuChar},
  neko: {s:1.15,y:4, f:nekoChar}
};
const kbCount = f => [f&&f.c2, f&&f.c3, f&&f.c4, f&&f.c5].filter(k => KB_CH[k]).length;
const kbRetsu = (f,x0,dx,y) => {
  let s = '', x = x0;
  for(const k of [f&&f.c2, f&&f.c3, f&&f.c4, f&&f.c5]){
    const c = KB_CH[k];
    if(!c) continue;
    s += g(x, y + c.y, c.s, c.f());
    x += dx;
  }
  return s;
};

/* ---------- うらしまたろう用の 背景部品 ---------- */
/* 六角形（かめの こうらの もよう） */
const rok = (x,y,r,c) => pt(`M${x} ${y-r} L${x+r*.87} ${y-r*.5} L${x+r*.87} ${y+r*.5} L${x} ${y+r} L${x-r*.87} ${y+r*.5} L${x-r*.87} ${y-r*.5} z`,c);
/* 浜の 松（みきが すこし まがっている） */
const matsu = (x,y,s) => g(x,y,s, pto('M-7 0 q2 -22 -2 -34 q-3 -12 4 -22 l9 3 q-6 9 -3 20 q4 12 3 33 z',P.woodD)
  + elo(-20,-56,21,10,'#3f7d4f') + elo(18,-62,20,10,'#3f7d4f')
  + elo(-4,-72,25,12,'#4a8f5a') + elo(3,-52,17,9,'#4a8f5a'));
/* 小舟（浜に あげてある 舟） */
const kobune = (x,y,s) => g(x,y,s, pto('M-40 -10 Q0 4 40 -10 L32 8 Q0 18 -32 8 z',P.wood)
  + ln('M-33 -3 L33 -3','#7a5c34',3)
  + gr(24,-8,1,-24, rco(-2,-46,5,46,P.woodD,2)));
/* あわ（水の なかの あぶく） */
const awa = (x,y,s) => g(x,y,s, ci(0,0,5,'rgba(255,255,255,.5)') + ci(-11,13,3.2,'rgba(255,255,255,.42)')
  + ci(9,21,2.4,'rgba(255,255,255,.38)') + ci(-5,31,4,'rgba(255,255,255,.32)') + ci(7,45,2.2,'rgba(255,255,255,.26)'));
/* 光の柱（水面から さしこむ 白い 帯） */
const hikari = (x,w,op) => pt(`M${x} 0 L${x+w} 0 L${x+w+36} 300 L${x+18} 300 z`,`rgba(255,255,255,${op})`);
/* 海の なか（青の グラデ + 光の柱）。dark=true で 少し さびしい 色あい */
const umiNaka = (id,dark) => grad(id, dark ? P.umiTopD : P.umiTop, dark ? P.umiBtmD : P.umiBtm)
  + hikari(64,26,dark ? .1 : .17) + hikari(232,34,dark ? .08 : .13) + hikari(390,20,dark ? .06 : .1);
/* サンゴ */
const sango = (x,y,s,c) => g(x,y,s, ln('M0 0 L0 -26',c||P.sango,7)
  + ln('M0 -13 q-13 -4 -15 -22',c||P.sango,6) + ln('M0 -17 q13 -5 16 -21',c||P.sango,6)
  + ci(0,-28,4,c||P.sango) + ci(-16,-37,3.4,c||P.sango) + ci(17,-40,3.4,c||P.sango));
/* 海草 */
const kaisou = (x,y,s) => g(x,y,s, ln('M0 0 q-11 -18 -1 -34 q10 -16 1 -30','#4e9e72',5)
  + ln('M11 0 q9 -14 3 -26 q-6 -12 3 -20','#3f8f63',4.5));
/* 小さい 魚（むれ用・輪郭なし） */
const sakanaS = (x,y,c) => g(x,y,1, el(0,0,8,5,c||P.ryuguG) + pt('M-7 0 l-8 -6 l0 12 z',c||P.ryuguG));
/* 魚の むれ */
const mure = (x,y,s,c) => g(x,y,s, sakanaS(0,0,c) + sakanaS(28,-14,c) + sakanaS(50,5,c)
  + sakanaS(76,-8,c) + sakanaS(24,18,c) + sakanaS(58,28,c));
/* たい（赤い 魚）。r で かたむけて まいおどらせる */
const tai = (x,y,s,r) => gr(x,y,s,r||0, pto('M-14 0 q10 -17 26 -17 q18 0 24 17 q-6 17 -24 17 q-16 0 -26 -17 z','#e05e5e')
  + pto('M-14 0 l-16 -14 l0 28 z','#d94a4a')
  + pto('M4 -15 q4 -14 12 -15 q0 9 -4 15 z','#e8807a')
  + pto('M6 15 q4 13 12 14 q0 -8 -4 -14 z','#e8807a')
  + ln('M-2 5 q12 5 22 1','#c74040',2.5)
  + ci(24,-4,2.8,'#333') + ci(24.9,-4.9,1,'#fff')
  + ln('M32 2 q4 3 8 1','#c74040',2));
/* ひらめ（ひらたい 魚・目が かたがわに ならぶ） */
const hirame = (x,y,s,r) => gr(x,y,s,r||0, elo(0,0,27,13,'#cbb996')
  + pto('M-26 0 l-13 -13 l0 26 z','#b8a67e')
  + ln('M-13 -7 q14 -6 27 -2','#a89060',2.5)
  + ci(13,-5,2.8,'#333') + ci(20,-6,2.4,'#333') + ci(13.9,-5.9,1,'#fff')
  + ln('M22 3 q4 3 8 1','#a89060',2));
/* 玉手箱（黒ぬり + 金の ひも） */
const tamabako = (x,y,s) => g(x,y,s, rco(-25,-17,50,17,'#332e30',3)
  + rco(-27,-26,54,10,'#413a3d',3)
  + ln('M-27 -21 L27 -21',P.ryuguG,3) + ln('M0 -26 L0 0',P.ryuguG,3)
  + pto('M0 -26 q-12 -9 -4 -13 q5 0 4 13 z',P.ryuguG) + pto('M0 -26 q12 -9 4 -13 q-5 0 -4 13 z',P.ryuguG)
  + ln('M-22 -8 q22 5 44 0','rgba(242,206,106,.55)',2));
/* 水鏡の 台（おとひめさまの へや） */
const mizukagami = (x,y,s) => g(x,y,s, rco(-22,-6,44,8,'#c9a86b',4) + rco(-9,-24,18,20,'#c9a86b',3)
  + elo(0,-30,32,12,'#bfe8f7') + el(-11,-33,11,4,'rgba(255,255,255,.7)'));
/* りゅうぐうじょう（赤い はしら・そりの ある 金の 屋根） */
const ryuguDo = (x,y,s) => g(x,y,s, rco(-72,-58,144,58,'#f6e8cc',4)
  + rco(-66,-58,13,58,P.ryuguR,3) + rco(-6,-58,13,58,P.ryuguR,3) + rco(53,-58,13,58,P.ryuguR,3)
  + rco(-42,-46,32,32,'#7fc4e0',3) + rco(10,-46,32,32,'#7fc4e0',3)
  + pto('M-88 -58 Q-58 -94 0 -94 Q58 -94 88 -58 z',P.ryuguG)
  + ln('M-70 -68 Q0 -88 70 -68','#d9a83a',3)
  + rco(-28,-108,56,16,'#f6e8cc',3)
  + pto('M-50 -104 Q-32 -130 0 -130 Q32 -130 50 -104 z',P.ryuguG)
  + cio(0,-136,6,'#ffd76e'));
/* りゅうぐうの へや（赤い はしら + 金の かもい + 板の 床） */
const ryuguHeya = id => grad(id,'#fdf2dc','#efdcb8')
  + rco(50,0,26,244,P.ryuguR,3) + rco(404,0,26,244,P.ryuguR,3)
  + rc(0,0,480,26,P.ryuguG) + ln('M0 26 L480 26','#d9a83a',3)
  + rc(0,244,480,56,'#c98a6e') + ln('M0 244 L480 244','#a86a52',3)
  + ln('M0 272 L480 272','rgba(168,106,82,.5)',2);
/* 海が 見える まど（サンゴの にわ） */
const umiMado = (x,y,s) => g(x,y,s, rco(-46,-38,92,76,'#3f8fbe',5)
  + pt('M-44 36 L44 36 L44 18 Q0 6 -44 18 z','#dfc78e')
  + sango(-24,30,.5) + sango(20,32,.45,'#f2a86e') + kaisou(0,34,.45)
  + sakanaS(16,-14,'#ffd76e') + sakanaS(-16,-2,'#fff')
  + rco(-50,-46,100,10,P.ryuguG,3));
/* つる（白い 鶴。はねの さきと おは 黒・あしは うしろに ながく のばす） */
const tsuru = (x,y,s) => g(x,y,s, pto('M-16 2 q-24 -6 -30 4 q12 9 28 3 z','#3f3a36')
  + ln('M-14 7 l-20 7',P.ryuguG,2.5) + ln('M-11 9 l-18 10',P.ryuguG,2.5)
  + elo(0,0,20,10,'#fff')
  + pto('M-4 -5 q-15 -22 -3 -28 q13 4 10 26 z','#e8ebee')
  + pto('M-7 -33 q7 -4 10 3 l-6 6 z','#3f3a36')
  + pto('M2 5 q-9 22 3 27 q12 -6 6 -25 z','#f6f8fa')
  + pto('M3 32 q7 -6 11 0 l-5 7 z','#3f3a36')
  + ln('M13 -4 q14 -8 25 -17',P.ink,11) + ln('M13 -4 q14 -8 25 -17','#fff',7)
  + cio(41,-23,6.5,'#fff')
  + pt('M36 -28 q5 -6 10 -1 q-5 3 -10 1 z','#d94f5a')
  + pto('M47 -22 l15 3 l-15 4 z',P.ryuguG)
  + ci(43,-24,1.7,'#333'));

/* ---------- うらしまたろうの 人物 ---------- */
/* たろうの 上はんしん（こしを 原点に かく）。old は 白髪 白ひげでも 着物は そのまま */
function uraUwa(old){
  const hairC = old ? '#e6e0d6' : P.hair;
  let s = pto('M-15 -40 L15 -40 L18 4 L-18 4 z',P.uraBlue)
    + pt('M-10 -41 L0 -22 L10 -41 z','#f2ede2')
    + rco(-17,-19,34,9,P.obi,2)
    + rco(-26,-38,11,26,P.uraBlue,3) + rco(15,-38,11,26,P.uraBlue,3)
    + cio(-20,-11,4.5,P.skin) + cio(20,-11,4.5,P.skin)
    + cio(0,-56,16,P.skin)
    + pt('M-16 -56 a16 16 0 0 1 32 0 z',hairC)
    + cio(0,-75,5.5,hairC)
    + ci(-5.5,-53,2.4,'#333') + ci(5.5,-53,2.4,'#333')
    + ci(-4.6,-54,.9,'#fff') + ci(6.4,-54,.9,'#fff')
    + ci(-11,-47,2.6,'rgba(255,140,140,.5)') + ci(11,-47,2.6,'rgba(255,140,140,.5)');
  if(old){
    s += pto('M-12 -47 q12 20 24 0 q-3 19 -12 19 q-9 0 -12 -19 z','#f2ede2')
      + pt('M-10 -46 q10 -6 20 0 q-5 8 -10 5 q-5 3 -10 -5 z','#fff')
      + ln('M-11 -60 l8 -3','#ddd6cc',3) + ln('M11 -60 l-8 -3','#ddd6cc',3);
  }else{
    s += ln('M-4 -46 q4 4.5 8 0','#333',2.2);
  }
  return s;
}
/* たろう: 青い 着物と 帯・わらじ。rod で つりざお。old で 白髪 白ひげ・すこし まえかがみ */
function urashimaChar(opt){
  opt = opt || {};
  let s = el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-9,-16,7,16,P.skin,3) + rco(2,-16,7,16,P.skin,3)
    + rco(-11,-5,10,5,'#d9c08a',2) + rco(1,-5,10,5,'#d9c08a',2);
  s += opt.old ? gr(0,-16,1,7,uraUwa(true)) : g(0,-16,1,uraUwa(false));
  if(opt.rod){
    s += ln('M20 -32 L66 -86','#8a6a44',3.5)
      + ln('M66 -86 q9 18 4 32','rgba(255,255,255,.55)',1.6);
  }
  return s;
}
/* おとひめさま: ながい 黒かみと かんざし・かさねの 着物 */
function otohimeChar(){
  return el(0,2,20,5,'rgba(0,0,0,.12)')
    + pto('M-20 -54 L20 -54 L32 -6 L-32 -6 z',P.himeR)
    + pt('M-27 -18 L27 -18 L30 -6 L-30 -6 z',P.himeP)
    + pt('M-10 -55 L0 -34 L10 -55 z','#f6efe2')
    + rco(-30,-52,13,30,P.himeR,4) + rco(17,-52,13,30,P.himeR,4)
    + rc(-29,-27,11,5,P.himeP) + rc(18,-27,11,5,P.himeP)
    + cio(-24,-20,4.5,P.skin) + cio(23,-20,4.5,P.skin)
    + pto('M-17 -76 q-10 30 -6 56 q11 4 12 -22 z',P.hair)
    + pto('M17 -76 q10 30 6 56 q-11 4 -12 -22 z',P.hair)
    + cio(0,-72,16,P.skin)
    + pt('M-16 -72 a16 16 0 0 1 32 0 q-8 6 -16 3 q-8 3 -16 -3 z',P.hair)
    + ln('M14 -82 l5 10',P.ryuguG,2)
    + g(13,-86,.75, ci(-4,0,3.4,P.himeP) + ci(4,0,3.4,P.himeP) + ci(0,-4,3.4,P.himeP) + ci(0,4,3.4,P.himeP) + ci(0,0,2.6,'#ffe9a8'))
    + ci(-5.5,-70,2.6,'#333') + ci(5.5,-70,2.6,'#333')
    + ci(-4.6,-71,1,'#fff') + ci(6.4,-71,1,'#fff')
    + ln('M-10 -77 q4 -3 8 -1','#3a2c20',2) + ln('M10 -77 q-4 -3 -8 -1','#3a2c20',2)
    + ci(-11,-64,2.8,'rgba(255,140,140,.55)') + ci(11,-64,2.8,'rgba(255,140,140,.55)')
    + ln('M-3.5 -63 q3.5 4 7 0','#a04040',2.2);
}
/* かめ: まるい こうら（六角もよう）・ひれあし・つぶらな目。small=浜の 場面用 */
function kameChar(opt){
  opt = opt || {};
  const s = el(2,3,22,5,'rgba(0,0,0,.13)')
    + pto('M-22 -8 q-14 3 -14 11 q11 4 18 -5 z',P.kameH)
    + pto('M12 -6 q12 6 10 15 q-13 1 -16 -9 z',P.kameH)
    + pto('M-25 -8 a25 21 0 0 1 50 0 z',P.kame)
    + pto('M-25 -8 q25 11 50 0 q-25 9 -50 0 z',P.kameD)
    + rok(0,-19,8,P.kameL) + rok(-14,-14,6,P.kameL) + rok(14,-14,6,P.kameL)
    + cio(28,-16,9,P.kameH)
    + ci(31,-19,2.4,'#333') + ci(31.8,-19.8,.9,'#fff')
    + ci(24,-11,2.4,'rgba(255,140,140,.4)')
    + ci(34,-17,1,'#3a2c20')
    + ln('M31 -12 q4 3 7 1','#3a2c20',2);
  return opt.small ? g(0,0,.72,s) : s;
}

/* ---------- さんびきの こぶた用の 背景部品 ---------- */
/* レンガの 目地（ちどりづみ）。c で 目地の いろを かえる */
const rengaMe = (x,y,w,h,rows,cols,c) => {
  cols = cols || 4; c = c || P.rengaM;
  const rh = h / rows, cw = w / cols;
  let s = '';
  for(let i = 1; i < rows; i++){
    const ly = Math.round(y + rh * i);
    s += ln(`M${x} ${ly} L${x + w} ${ly}`,c,2.2);
  }
  for(let i = 0; i < rows; i++){
    const y0 = Math.round(y + rh * i), y1 = Math.round(y + rh * (i + 1));
    for(let j = 0; j <= cols; j++){
      const vx = Math.round(x + (i % 2 ? cw / 2 : 0) + cw * j);
      if(vx > x + 1 && vx < x + w - 1) s += ln(`M${vx} ${y0} L${vx} ${y1}`,c,2.2);
    }
  }
  return s;
};
/* わらの いえ（きいろい たばの まるやね・いちばん はやく たつ） */
const waraIe = (x,y,s) => g(x,y,s, pto('M-52 0 q-2 -64 52 -64 q54 0 52 64 z',P.wara)
  + ln('M-42 -2 q-4 -30 10 -48',P.waraD,2.6) + ln('M-21 -2 q-6 -34 3 -57',P.waraD,2.6)
  + ln('M0 -2 L0 -62',P.waraD,2.6)
  + ln('M21 -2 q6 -34 -3 -57',P.waraD,2.6) + ln('M42 -2 q4 -30 -10 -48',P.waraD,2.6)
  + ln('M-49 -22 q49 -14 98 0',P.waraD,3.4)
  + ln('M-3 -64 l-9 -13',P.wara,3.4) + ln('M2 -64 l7 -14',P.wara,3.4) + ln('M0 -66 l1 -15',P.wara,3)
  + pto('M-14 0 q0 -26 14 -26 q14 0 14 26 z','#8a6a3f')
  + ln('M-10 -12 q10 -6 20 0','#6e5138',2.4));
/* えだの いえ（くみあげた 木のえだ・かぜが とおって きもちいい） */
const edaIe = (x,y,s) => g(x,y,s, pto('M-52 0 L0 -70 L52 0 z',P.eda)
  + ln('M-44 -11 L44 -11',P.edaD,3.4) + ln('M-34 -25 L34 -25',P.edaD,3.2)
  + ln('M-24 -39 L24 -39',P.edaD,3) + ln('M-14 -53 L14 -53',P.edaD,2.8)
  + ln('M-32 -2 L14 -54',P.edaD,2.6) + ln('M32 -2 L-14 -54',P.edaD,2.6)
  + ln('M0 -70 l-12 -12',P.eda,3.4) + ln('M0 -70 l10 -14',P.eda,3.2) + ln('M-2 -72 l-2 -14',P.eda,2.8)
  + pto('M-13 0 q0 -24 13 -24 q13 0 13 24 z','#6e5138')
  + ln('M-9 -11 q9 -5 18 0','#5a4230',2.4));
/* レンガの いえ（じかんは かかるけど じょうぶ・えんとつ つき） */
const rengaIe = (x,y,s) => g(x,y,s, rco(-56,-72,112,72,P.renga,3)
  + rengaMe(-56,-72,112,72,5,4)
  + pto('M-68 -72 L0 -112 L68 -72 z',P.rengaD)
  + ln('M-38 -88 L38 -88','rgba(236,223,198,.45)',2.6)
  + rco(-42,-58,30,24,'#cfe6f0',3) + ln('M-27 -58 L-27 -34',P.beam,2.6) + ln('M-42 -46 L-12 -46',P.beam,2.6)
  + rco(8,-44,34,44,'#7a5230',4) + ln('M8 -22 L42 -22','#5f3f22',2.4) + ci(15,-22,3,'#f2ce6a')
  + rco(24,-134,20,46,P.renga,2) + rengaMe(24,-134,20,46,3,2));
/* ゆげ・けむり */
const yuge = (x,y,s,op) => g(x,y,s, ln('M0 0 q-13 -16 -1 -30 q12 -14 -1 -30',`rgba(255,255,255,${op || .7})`,5));
/* ほのお */
const honoo = (x,y,s) => g(x,y,s, pt('M-11 0 q-4 -30 11 -40 q15 10 11 40 z','#f2803f')
  + pt('M-6 0 q-2 -19 6 -26 q9 8 6 26 z','#ffd76e'));
/* ふうっと ふく 大風（よこに ぬける うずまき） */
const kazeUzu = (x,y,s,op) => g(x,y,s, ln('M0 0 q46 -16 92 -2 q26 8 34 -8 q7 -14 -9 -16 q-14 -2 -11 13',`rgba(255,255,255,${op || .8})`,5));
/* とんでいく かけら */
const waraKire = (x,y,s,r) => gr(x,y,s,r||0, ln('M-13 0 L13 -2',P.wara,4) + ln('M-9 -6 L11 -7',P.waraD,3));
const edaKire = (x,y,s,r) => gr(x,y,s,r||0, ln('M-15 0 L15 -3',P.eda,4.5) + ln('M3 -2 l9 -9',P.edaD,3.5));
const rengaHitotsu = (x,y,s,r) => gr(x,y,s,r||0, rco(-16,-9,32,18,P.renga,2) + ln('M-10 0 L10 0','rgba(236,223,198,.6)',2));
/* バターの たる（たがが 2ほん） */
const butaTaru = (x,y,s,r) => gr(x,y,s,r||0, pto('M-24 -19 q-9 19 0 38 l48 0 q9 -19 0 -38 z','#c9a05e')
  + rco(-25,-22,50,6,'#8a6a3f',2) + rco(-25,16,50,6,'#8a6a3f',2)
  + ln('M-24 -7 L24 -7','#8a6a3f',3.4) + ln('M-24 7 L24 7','#8a6a3f',3.4)
  + ln('M-8 -19 L-8 19','#a9803f',2.2) + ln('M8 -19 L8 19','#a9803f',2.2));
/* りんごの き */
const ringoKi = (x,y,s) => g(x,y,s, rco(-9,-56,18,56,P.woodD,4)
  + ln('M0 -38 l-20 -14',P.woodD,5) + ln('M0 -46 l18 -12',P.woodD,5)
  + cio(-27,-72,26,P.grass2) + cio(26,-70,25,P.grass2) + cio(0,-90,29,P.grass2)
  + ln('M-30 -73 l0 -6','#5a4230',2) + ln('M-6 -85 l0 -6','#5a4230',2) + ln('M20 -69 l0 -6','#5a4230',2)
  + ci(-30,-66,7,'#d94f3f') + ci(-6,-78,7,'#d94f3f') + ci(20,-62,7,'#d94f3f')
  + ci(30,-84,6,'#e06a4f') + ci(4,-104,6,'#d94f3f'));
/* おおきな なべ。soup で やさいスープ（あたたかい いろ） */
const ooNabe = (x,y,s,opt) => {
  opt = opt || {};
  return g(x,y,s, ln('M-33 -36 q33 -40 66 0','#3a3634',3.4)
    + pto('M-34 -34 q0 36 34 36 q34 0 34 -36 z',P.nabe)
    + elo(0,-34,36,10,'#5f5854')
    + el(0,-34,29,6.5, opt.soup ? '#e8a04f' : '#e6dcc2')
    + (opt.soup
        ? ci(-12,-35,3.4,'#e8804f') + ci(4,-33,3,'#6fae57') + ci(16,-36,2.8,'#f2ce6a')
        : ci(-13,-35,3.2,'rgba(255,255,255,.85)') + ci(3,-33,2.6,'rgba(255,255,255,.7)') + ci(15,-36,2.2,'rgba(255,255,255,.6)'))
    + ln('M-22 -12 q22 8 44 0','rgba(255,255,255,.14)',3));
};
/* レンガの へや（いえの なか）。dark で だんろの ちかくの くらい いろ */
const rengaHeya = (id,dark) => grad(id, dark ? '#7a4438' : '#bd7856', dark ? '#4a2a22' : '#9c5c40')
  + rengaMe(0,0,480,238,7,8, dark ? 'rgba(240,200,170,.22)' : 'rgba(244,232,208,.55)')
  + rc(0,238,480,62,'#b98a52') + ln('M0 238 L480 238','#8a6a3f',3)
  + ln('M0 262 L480 262','rgba(122,92,52,.45)',2) + ln('M0 286 L480 286','rgba(122,92,52,.45)',2);
/* だんろ。nabe で なべを つるす */
const danro = (x,y,s,opt) => {
  opt = opt || {};
  return g(x,y,s, rco(-72,-104,144,104,P.rengaD,4)
    + rengaMe(-72,-104,144,104,4,4,'rgba(236,223,198,.45)')
    + rco(-80,-116,160,14,'#8a5230',4)
    + pto('M-46 0 q0 -66 46 -66 q46 0 46 66 z','#2c1c16')
    + ln('M-30 -8 L30 -18','#6b4530',7) + ln('M-28 -18 L30 -6','#5a3826',7)
    + honoo(-20,-8,.7) + honoo(2,-6,1) + honoo(24,-10,.66)
    + (opt.nabe ? ooNabe(0,-36,.72,opt) : ''));
};

/* ---------- こぶた と オオカミ（さんびきの こぶた） ---------- */
/* こぶたの かお。size で みみの かたちを かえる（l=たれみみ / m=よこみみ / s=とがりみみ） */
function butaHead(size, mood){
  const c = P.buta, cd = P.butaD, inn = '#f8d7dd';
  let s = '';
  if(size === 'l'){
    s += pto('M-13 -14 q-18 -3 -21 14 q12 8 22 -3 z',cd) + pto('M13 -14 q18 -3 21 14 q-12 8 -22 -3 z',cd)
      + pt('M-14 -12 q-13 -1 -15 10 q9 4 16 -3 z',inn) + pt('M14 -12 q13 -1 15 10 q-9 4 -16 -3 z',inn);
  }else if(size === 's'){
    s += pto('M-15 -10 L-21 -32 L-3 -21 z',cd) + pto('M15 -10 L21 -32 L3 -21 z',cd)
      + pt('M-14 -13 L-18 -27 L-6 -20 z',inn) + pt('M14 -13 L18 -27 L6 -20 z',inn);
  }else{
    s += gr(-17,-13,1,-34, elo(0,0,11,7.5,cd)) + gr(17,-13,1,34, elo(0,0,11,7.5,cd))
      + gr(-17,-13,1,-34, el(0,0,6,4,inn)) + gr(17,-13,1,34, el(0,0,6,4,inn));
  }
  s += cio(0,0,19,c)
    + ci(-14,3,4,'rgba(255,140,140,.45)') + ci(14,3,4,'rgba(255,140,140,.45)')
    + elo(0,7,11,8,P.butaL)
    + el(-4,7,2.2,3,P.butaNose) + el(4,7,2.2,3,P.butaNose)
    + el(-4,2,4,2,'rgba(255,255,255,.5)');
  if(mood === 'odoroki'){
    s += el(-7,-6,4.4,5,'#fff') + el(7,-6,4.4,5,'#fff')
      + ci(-7,-5,2.8,'#333') + ci(7,-5,2.8,'#333')
      + ln('M-13 -14 l7 3','#c98a96',2.4) + ln('M13 -14 l-7 3','#c98a96',2.4)
      + elo(0,15,4,3.2,'#a04040');
  }else if(mood === 'yasashii'){
    s += ln('M-11 -6 q4 -5 8 0','#333',2.6) + ln('M3 -6 q4 -5 8 0','#333',2.6)
      + ln('M-5 16 q5 4 10 0','#a04040',2.2);
  }else if(mood === 'shonbori'){
    s += ci(-7,-5,2.8,'#333') + ci(7,-5,2.8,'#333')
      + ln('M-13 -12 l8 4','#c98a96',2.4) + ln('M13 -12 l-8 4','#c98a96',2.4)
      + ln('M-5 17 q5 -4 10 0','#a04040',2.2);
  }else{
    s += ci(-7,-6,3,'#333') + ci(7,-6,3,'#333')
      + ci(-5.8,-7.2,1.1,'#fff') + ci(8.2,-7.2,1.1,'#fff')
      + ln('M-5 16 q5 4 10 0','#a04040',2.2);
  }
  return s;
}
/* こぶた: ももいろ・くるんと まいた しっぽ。size で 3きょうだいを かきわける
   🔴 ふく・ぼうし・がっきは もたせない */
function butaChar(opt){
  opt = opt || {};
  const size = opt.size || 'm';
  const k = size === 'l' ? 1.12 : (size === 's' ? .84 : 1);
  const c = P.buta, cd = P.butaD;
  const s = el(0,2,17,5,'rgba(0,0,0,.13)')
    + ln('M-16 -32 q-12 -2 -10 -11 q1 -6 6 -4 q4 2 1 6',cd,3.2)
    + rco(-11,-16,9,16,cd,4) + rco(2,-16,9,16,cd,4)
    + rco(-24,-52,9,25,c,4) + rco(15,-52,9,25,c,4)
    + rco(-16,-54,32,42,c,13)
    + elo(0,-28,11,12,P.butaL)
    + cio(-19,-26,5,cd) + cio(20,-26,5,cd)
    + g(0,-70,1, butaHead(size, opt.mood));
  return g(0,0,k,s);
}
/* オオカミ（こぶた編）の かお: ちゃいろ・ながい はなさき。🔴 あかずきんの はいいろとは 別デザイン */
function pwolfHead(mood){
  const c = P.pwolf, inn = '#d9a98a';
  let s = pto('M-9 -8 L-15 -26 L2 -15 z',c) + pto('M7 -10 L9 -28 L21 -13 z',c)
    + pt('M-8 -11 L-12 -22 L-1 -15 z',inn) + pt('M8 -13 L10 -24 L17 -14 z',inn)
    + cio(0,0,13,c)
    + ci(-6,4,3.4,'rgba(255,140,140,.35)')
    + pto('M4 -3 q20 1 23 8 q-4 7 -23 5 z',c)
    + el(8,7,11,4.5,P.pwolfB)
    + ci(25,2,3.2,'#3a2f28');
  if(mood === 'odoroki'){
    s += elo(14,9,6,5,'#7a3a3a')
      + el(-1,-4,4.4,5,'#fff') + ci(-1,-3,2.6,'#2c2620')
      + ln('M-8 -13 l8 2','#6b4a2c',2.2);
  }else if(mood === 'fuu'){
    s += elo(19,8,5,4.5,'#7a3a3a')
      + ln('M-5 -5 q3 4 6 0','#2c2620',2.4)
      + ln('M-8 -11 l8 1','#6b4a2c',2.2);
  }else if(mood === 'niko'){
    s += ln('M9 6 q7 4 12 -1','#7a3a3a',2.6)
      + ln('M-4 -5 q3 -5 6 0','#2c2620',2.4)
      + ln('M-8 -11 l8 2','#6b4a2c',2.2);
  }else if(mood === 'tsukare'){
    s += pto('M8 6 q11 3 18 -1 q-3 11 -9 11 q-7 0 -9 -10 z','#7a3a3a')
      + elo(15,14,5,3.4,'#e08a8a')
      + ln('M-5 -4 q3 4 6 0','#2c2620',2.4)
      + ln('M-8 -12 l8 4','#6b4a2c',2.2);
  }else if(mood === 'sly'){
    s += ln('M8 7 q8 3 13 -2','#7a3a3a',2.6)
      + el(-1,-4,3.2,2.6,'#2c2620')
      + ln('M-8 -9 l9 2','#6b4a2c',2.4);
  }else{
    s += pto('M8 6 q11 3 18 -1 q-3 11 -9 11 q-7 0 -9 -10 z','#7a3a3a')
      + elo(14,13,5,3.4,'#e08a8a')
      + ci(-1,-4,2.8,'#2c2620') + ci(0,-5,1,'#fff')
      + ln('M-8 -11 l8 2','#6b4a2c',2.2)
      + ln('M21 9 q2 6 0 9','rgba(255,255,255,.7)',2);
  }
  return s;
}
/* オオカミ（こぶた編）: ちゃいろの よつあし・はらぺこで ほっそり。こわすぎない かおつき */
function pwolfChar(opt){
  opt = opt || {};
  const c = P.pwolf, cd = P.pwolfD;
  return el(2,2,32,6,'rgba(0,0,0,.13)')
    + pto('M-26 -30 q-18 -6 -18 -23 q0 -10 8 -9 q-5 13 13 21 z',c)
    + pt('M-36 -62 q8 -1 8 9 q-5 1 -8 -9 z',P.pwolfB)
    + rco(-22,-18,9,18,cd,4) + rco(-9,-18,9,18,cd,4)
    + elo(0,-30,30,14,c)
    + el(-2,-22,22,6.5,P.pwolfB)
    + ln('M-10 -38 q2 8 0 13','rgba(74,58,44,.16)',2.4) + ln('M-1 -39 q2 8 0 14','rgba(74,58,44,.16)',2.4)
    + rco(12,-18,9,18,cd,4) + rco(24,-18,9,18,cd,4)
    + g(34,-48,1, pwolfHead(opt.mood));
}

/* ---------- ヘンゼルと グレーテル用の 背景部品 ---------- */
/* よるの もみの木（ひるの fir と おなじ かたち・森の 夜の いろ） */
const firYoru = (x,y,s) => g(x,y,s, rco(-5,-30,10,30,'#3a2c22',3)
  + pto('M-26 -26 L0 -58 L26 -26 z',P.moriYo)
  + pto('M-21 -44 L0 -74 L21 -44 z',P.moriYo2)
  + pto('M-15 -62 L0 -88 L15 -62 z',P.moriYo));
/* まんまるの つき（やわらかい かさ つき） */
const tsuki = (x,y,s) => g(x,y,s, ci(0,0,40,'rgba(255,250,215,.14)') + ci(0,0,29,'rgba(255,250,215,.26)')
  + ci(0,0,20,'#fdf3c4') + ci(-6,-5,4.5,'rgba(255,255,255,.45)') + ci(7,5,3.4,'rgba(238,226,180,.7)'));
/* つきに ひかる しろい こいし */
const koishiTsubu = (x,y,s) => g(x,y,s, ci(0,0,7,'rgba(200,224,248,.3)')
  + ci(0,0,3.8,P.koishi) + ci(-1.2,-1.2,1.4,'#fff'));
/* パンくず */
const pankuzu = (x,y,s) => g(x,y,s, ci(0,0,2.8,P.pan) + ci(6,3,2.2,P.panD)
  + ci(-5,3,2,P.pan) + ci(1,-4,1.8,P.panD));
/* かれ木（きこりの もりの ふゆ） */
const kareki = (x,y,s) => g(x,y,s, rco(-6,-46,12,46,P.woodD,3)
  + ln('M0 -34 l-20 -16',P.woodD,4.5) + ln('M0 -42 l18 -13',P.woodD,4.5)
  + ln('M-20 -50 l-8 -9','#6b4f2c',3) + ln('M18 -55 l7 -10','#6b4f2c',3)
  + ln('M0 -46 l-5 -15',P.woodD,3.5));
/* きこりの いえ（ちいさな 板の こや） */
const kikoriIe = (x,y,s) => g(x,y,s, rco(-44,-50,88,50,'#c9a97e',3)
  + ln('M-44 -36 L44 -36','#a9895e',2.6) + ln('M-44 -22 L44 -22','#a9895e',2.6)
  + pto('M-56 -50 L0 -86 L56 -50 z','#8a6a44')
  + ln('M-40 -62 L40 -62','#6e5138',3)
  + rco(-13,-30,26,30,P.woodD,3) + ci(6,-15,2.4,'#f2ce6a')
  + rco(16,-44,18,14,'#cfe6f0',2) + ln('M25 -44 L25 -30',P.beam,2.2)
  + rco(-36,-44,16,12,'#cfe6f0',2)
  + rco(26,-100,13,22,'#8a6a44',3));
/* よるの へや（ろうそくの あかりだけ） */
const heyaYoru = id => grad(id,'#4d4136','#2c241d')
  + ln('M70 0 L70 238','#3a2f26',7) + ln('M410 0 L410 238','#3a2f26',7) + ln('M0 92 L480 92','#3a2f26',7)
  + rc(0,238,480,62,'#5a4530') + ln('M0 238 L480 238','#3f2e1e',3)
  + ln('M0 262 L480 262','rgba(40,28,18,.5)',2) + ln('M0 286 L480 286','rgba(40,28,18,.5)',2);
/* ろうそく */
const rousoku = (x,y,s) => g(x,y,s, rco(-7,-6,14,10,'#c9a86b',3)
  + rco(-4,-32,8,26,'#f6ece0',3)
  + pt('M0 -46 q-5 8 0 14 q5 -6 0 -14 z','#ffd76e')
  + ci(0,-36,8,'rgba(255,215,150,.4)'));
/* おんぷ（とりの うた） */
const onpu = (x,y,s,c) => g(x,y,s, cio(-4,4,4.4,c || '#fff')
  + ln('M0 3 L0 -12',c || '#fff',2.6) + ln('M0 -12 q7 2 8 8',c || '#fff',2.6));
/* ほそい ほね。さいごの rc で つなぎめの 線を かくす */
const hone = (x,y,s,r) => gr(x,y,s,r || 0,
    cio(-13,-4,4.4,'#f4efe4') + cio(-13,4,4.4,'#f4efe4')
  + cio(13,-4,4.4,'#f4efe4') + cio(13,4,4.4,'#f4efe4')
  + rco(-13,-4.6,26,9.2,'#f4efe4',3)
  + rc(-15,-3.6,30,7.2,'#f4efe4'));
/* ドロップ（まるい あめ） */
const ame = (x,y,s,c) => g(x,y,s, cio(0,0,7,c || P.ameP) + el(-2.6,-2.6,3,2,'rgba(255,255,255,.6)'));
/* クッキー（つぶつぶ いり） */
const kukki = (x,y,s) => g(x,y,s, cio(0,0,9,P.cookie)
  + ci(-3.4,-2,1.9,P.choco) + ci(3,1.4,1.7,P.choco) + ci(-1,4.6,1.5,P.choco));
/* おかしの いえ: パンの かべ・クッキーの やね・すきとおった さとうの まど（原典どおり）
   🔴 じっさいの しょうひんの かたち・ロゴ・パッケージは かかない（そうしょうてきな おかしだけ） */
const okashiIe = (x,y,s) => g(x,y,s,
    rco(-58,-74,116,74,P.pan,6)
  + ln('M-56 -52 q56 -9 112 0',P.panD,2.6) + ln('M-56 -28 q56 -9 112 0',P.panD,2.6)
  + ci(-40,-63,3,P.panD) + ci(32,-65,2.6,P.panD) + ci(-18,-39,2.6,P.panD) + ci(44,-41,3,P.panD)
  + pto('M-72 -74 L0 -117 L72 -74 z',P.choco)
  + kukki(-48,-82,.95) + kukki(-32,-82,.95) + kukki(-16,-82,.95) + kukki(0,-82,.95)
  + kukki(16,-82,.95) + kukki(32,-82,.95) + kukki(48,-82,.95)
  + kukki(-26,-96,.8) + kukki(-13,-96,.8) + kukki(0,-96,.8) + kukki(13,-96,.8) + kukki(26,-96,.8)
  + kukki(-7,-108,.65) + kukki(7,-108,.65)
  + pto('M-72 -74 L72 -74 L72 -69 q-9 14 -18 0 q-9 14 -18 0 q-9 14 -18 0 q-9 14 -18 0'
      + ' q-9 14 -18 0 q-9 14 -18 0 q-9 14 -18 0 q-9 14 -18 0 z',P.icing)
  + rco(-46,-58,32,26,P.sato,3) + ln('M-30 -58 L-30 -32',P.icing,3) + ln('M-46 -45 L-14 -45',P.icing,3)
  + pt('M-26 -56 l8 0 l-12 20 l-8 0 z','rgba(255,255,255,.5)')
  + rco(14,-58,32,26,P.sato,3) + ln('M30 -58 L30 -32',P.icing,3) + ln('M14 -45 L46 -45',P.icing,3)
  + pt('M34 -56 l8 0 l-12 20 l-8 0 z','rgba(255,255,255,.5)')
  + pto('M-15 0 q0 -32 15 -32 q15 0 15 32 z',P.panD)
  + ln('M0 -31 L0 0',P.icing,2.6) + ln('M-14 -14 L14 -14',P.icing,2.6)
  + ame(8,-16,.6,P.ameB)
  + ame(-58,-30,.9,P.ameY) + ame(58,-30,.9,P.ameG) + ame(-58,-56,.8,P.ameP) + ame(58,-56,.8,P.ameB));
/* まじょの いえの なか（板ばりの あたたかい へや） */
const majoHeya = id => grad(id,'#c9a97e','#9e7f58')
  + ln('M0 66 L480 66','#a9895e',5) + ln('M0 132 L480 132','#a9895e',5) + ln('M0 198 L480 198','#a9895e',5)
  + ln('M120 0 L120 238','#b09068',4) + ln('M360 0 L360 238','#b09068',4)
  + rc(0,238,480,62,'#8a6a44') + ln('M0 238 L480 238','#6e5138',3)
  + ln('M0 262 L480 262','rgba(90,66,38,.5)',2) + ln('M0 286 L480 286','rgba(90,66,38,.5)',2);
/* てつの おり。inner に なかに いる ものを わたす（うしろ→なか→まえの かくじゅん） */
const tetsuOri = (x,y,s,inner) => g(x,y,s, rco(-48,-80,96,80,'#5f4f40',5)
  + rc(-42,-74,84,74,'#3f342c')
  + (inner || '')
  + ln('M-30 -74 L-30 -2',P.tetsu,4) + ln('M-14 -74 L-14 -2',P.tetsu,4)
  + ln('M2 -74 L2 -2',P.tetsu,4) + ln('M18 -74 L18 -2',P.tetsu,4) + ln('M34 -74 L34 -2',P.tetsu,4)
  + rco(-50,-84,100,10,P.tetsuD,3) + rco(-50,-8,100,10,P.tetsuD,3)
  + cio(42,-42,5,P.tetsuD));
/* かまど（れんがの おおきな かま）。🔴 ひは 小さく かく（こわがらせない） */
const kamado = (x,y,s) => g(x,y,s, pto('M-62 0 q0 -86 62 -86 q62 0 62 86 z',P.renga)
  + ln('M-60 -26 q60 -16 120 0','rgba(236,223,198,.6)',2.6)
  + ln('M-54 -50 q54 -15 108 0','rgba(236,223,198,.6)',2.6)
  + ln('M-40 -70 q40 -12 80 0','rgba(236,223,198,.6)',2.6)
  + ln('M-30 -4 L-30 -26','rgba(236,223,198,.6)',2.6) + ln('M30 -4 L30 -26','rgba(236,223,198,.6)',2.6)
  + ln('M-14 -30 L-14 -50','rgba(236,223,198,.6)',2.6) + ln('M16 -30 L16 -50','rgba(236,223,198,.6)',2.6)
  + rco(-17,-104,34,20,P.rengaD,3)
  + pto('M-30 0 q0 -44 30 -44 q30 0 30 44 z','#3a1e14')
  + honoo(-11,-2,.5) + honoo(8,0,.62)
  + gr(-40,-4,1,-22, rco(-36,-42,36,42,P.tetsu,4) + cio(-18,-21,4.4,P.tetsuD)));
/* たからの はこ（しんじゅと ほうせき）。ふたは うしろに ひらいて いる */
const takaraBako = (x,y,s) => g(x,y,s,
    pto('M-44 -40 L-24 -76 L66 -76 L46 -40 z','#a9803f')
  + ln('M-30 -60 L58 -60','#8a6a3f',2.6)
  + rco(-46,-36,92,36,'#8a6a44',4) + ln('M-46 -18 L46 -18','#6e5138',3)
  + rco(-50,-44,100,9,'#a9803f',3)
  + pt('M-42 -44 q42 -13 84 0 z','#2f2118')
  + ci(-26,-48,8,P.shinju) + ci(-10,-52,9,P.shinju) + ci(6,-48,8,P.shinju) + ci(22,-51,7,P.shinju)
  + ci(-28,-50,2.6,'#fff') + ci(-12,-54,2.8,'#fff') + ci(4,-50,2.4,'#fff')
  + rok(-36,-45,7,'#4a8fd4') + rok(15,-43,7,'#d94f6a') + rok(33,-47,6,'#5aa66b') + rok(-2,-41,6,P.ryuguG)
  + spark(-40,-62,.7) + spark(34,-66,.6));
/* 木を うえから 見る（とりの ばめん） */
const kiUe = (x,y,s) => g(x,y,s, cio(0,0,18,P.grass2)
  + ci(-6,-6,7,'rgba(255,255,255,.18)') + ci(1,1,5,'#4a7a42'));

/* ---------- ヘンゼルと グレーテル（人物） ---------- */
/* きょうだいの かお（あたまの まんなかが 0,0）。mood で ひょうじょうを かえる */
function hgKao(mood){
  if(mood === 'odoroki'){
    return el(-5.5,2,3.6,4.4,'#fff') + el(5.5,2,3.6,4.4,'#fff')
      + ci(-5.5,2.6,2.3,'#333') + ci(5.5,2.6,2.3,'#333')
      + ln('M-11 -6 l6 -1','#3a2c20',2.2) + ln('M11 -6 l-6 -1','#3a2c20',2.2)
      + elo(0,11,3.6,3,'#a04040');
  }
  /* 🔴 まゆの うちがわを 上げる（下げると おこった かおに 見える） */
  if(mood === 'shonbori'){
    return ci(-5.5,3,2.4,'#333') + ci(5.5,3,2.4,'#333')
      + ln('M-11 -2 l6 -4','#3a2c20',2.2) + ln('M11 -2 l-6 -4','#3a2c20',2.2)
      + ci(-11,9,2.6,'rgba(255,140,140,.45)') + ci(11,9,2.6,'rgba(255,140,140,.45)')
      + ln('M-4 12 q4 -4 8 0','#a04040',2.2);
  }
  if(mood === 'niko'){
    return ln('M-8 1 q3 -5 6 0','#333',2.4) + ln('M2 1 q3 -5 6 0','#333',2.4)
      + ci(-11,9,2.8,'rgba(255,140,140,.55)') + ci(11,9,2.8,'rgba(255,140,140,.55)')
      + ln('M-4 10 q4 5 8 0','#a04040',2.4);
  }
  return ci(-5.5,3,2.4,'#333') + ci(5.5,3,2.4,'#333') + ci(-4.6,2,1,'#fff') + ci(6.4,2,1,'#fff')
    + ci(-11,9,2.6,'rgba(255,140,140,.5)') + ci(11,9,2.6,'rgba(255,140,140,.5)')
    + ln('M-4 10 q4 4.5 8 0','#333',2.2);
}
/* きょうだいが てに もつ もの（みぎての ところに かさねる） */
function hgMochimono(te){
  if(te === 'koishi') return ci(20,-25,3.2,P.koishi) + ci(15,-21,2.8,P.koishi) + ci(23,-19,2.6,P.koishi);
  if(te === 'pan')    return elo(20,-25,8,5.5,P.pan) + ln('M15 -27 l10 -1',P.panD,2);
  if(te === 'kukki')  return kukki(20,-25,.8);
  if(te === 'sato')   return rco(13,-32,15,13,P.sato,2) + ln('M20 -32 L20 -19',P.icing,2.4);
  if(te === 'oke')    return ln('M12 -33 q8 -11 16 0',P.tetsuD,2.2)
      + pto('M11 -33 L29 -33 L27 -20 L13 -20 z',P.tetsu)
      + el(20,-32,8,2.6,'#7fb6cf') + ln('M12 -27 L28 -27',P.tetsuD,2);
  return '';
}
/* ヘンゼル（あに）: しつそな ぬのの うわぎ。いもうとより すこし 大きい
   te='koishi'/'pan'/'kukki' で てに もたせる */
function hanselChar(opt){
  opt = opt || {};
  const s = el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-9,-16,7,16,'#6b5a44',3) + rco(2,-16,7,16,'#6b5a44',3)
    + rco(-14,-56,28,42,P.hanFuku,11)
    + ln('M-14 -46 q14 5 28 0',P.hanFukuD,2.2)
    + rc(-14,-34,28,6,'#6b5a44')
    + rco(-21,-53,8,23,P.hanFuku,4) + rco(13,-53,8,23,P.hanFuku,4)
    + cio(-17,-29,4.6,P.skin) + cio(17,-29,4.6,P.skin)
    + cio(0,-72,16,P.skin)
    + pt('M-16 -72 a16 16 0 0 1 32 0 q-6 5 -11 0 q-5 5 -10 0 q-5 5 -11 0 z',P.hgKami)
    + g(0,-72,1, hgKao(opt.mood))
    + hgMochimono(opt.te);
  return g(0,0,.88,s);
}
/* グレーテル（いもうと）: ぬのの ワンピースと しろい エプロン・みつあみ 2ほん */
function gretelChar(opt){
  opt = opt || {};
  const s = el(0,2,14,4,'rgba(0,0,0,.12)')
    + rco(-8,-14,6,14,'#6b5a44',3) + rco(2,-14,6,14,'#6b5a44',3)
    + pto('M-13 -56 L13 -56 L18 -14 L-18 -14 z',P.greFuku)
    + pto('M-9 -40 L9 -40 L13 -16 L-13 -16 z',P.epuron)
    + ln('M-9 -40 q9 -6 18 0',P.greFukuD,2.2)
    + rco(-20,-53,8,22,P.greFuku,4) + rco(12,-53,8,22,P.greFuku,4)
    + cio(-16,-29,4.4,P.skin) + cio(16,-29,4.4,P.skin)
    + cio(0,-72,16,P.skin)
    + ln('M-15 -76 q-7 12 -4 22',P.hgKami,6) + ln('M15 -76 q7 12 4 22',P.hgKami,6)
    + ln('M-17 -68 l-3 3','#a9803f',2) + ln('M17 -68 l3 3','#a9803f',2)
    + cio(-19,-55,2.8,P.greFukuD) + cio(19,-55,2.8,P.greFukuD)
    + pt('M-16 -72 a16 16 0 0 1 32 0 q-8 5 -16 2 q-8 3 -16 -2 z',P.hgKami)
    + g(0,-72,1, hgKao(opt.mood))
    + hgMochimono(opt.te);
  return g(0,0,.76,s);
}
/* あひるの せなかに すわる すがた（hg_ahiru だけで つかう） */
function hgNoru(who, mood){
  const fuku = who === 'gretel' ? P.greFuku : P.hanFuku;
  let s = rco(-11,-32,22,28,fuku,9)
    + pto('M-8 -11 L14 -13 L23 -3 L-8 -1 z',fuku)
    + cio(24,-2,4.6,'#6b5a44')
    + rco(2,-28,8,18,fuku,4) + cio(6,-10,4.2,P.skin)
    + cio(0,-48,14,P.skin);
  if(who === 'gretel'){
    s += ln('M-13 -51 q-6 10 -3 18',P.hgKami,5) + ln('M13 -51 q6 10 3 18',P.hgKami,5)
      + pt('M-14 -48 a14 14 0 0 1 28 0 q-7 4 -14 2 q-7 3 -14 -2 z',P.hgKami);
  }else{
    s += pt('M-14 -48 a14 14 0 0 1 28 0 q-5 4 -9 0 q-4 4 -9 0 q-5 4 -10 0 z',P.hgKami);
  }
  return s + g(0,-48,.88, hgKao(mood || 'niko'));
}
/* ちち（きこり）と まま おかあさん。むらびとの かたを つかう */
const chichiChar = () => personChar('#8a7454','#6b5030',
  pto('M-8 -58 q8 10 16 0 q-2 11 -8 11 q-6 0 -8 -11 z','#6b5030'));
const mamaChar = () => personChar('#7d8fa8','#8a6a4a', cio(0,-86,7,'#8a6a4a') + rc(-14,-44,28,20,P.epuron));
/* まじょ: あかい め・とおくが 見えない（めを ほそめる）・はなが きく・つえ
   🔴 わるの けんげには しない。オオカミたちとは べつの けいとう */
function majoChar(opt){
  opt = opt || {};
  const mood = opt.mood || 'majo';
  let s = el(0,2,17,5,'rgba(0,0,0,.13)');
  if(opt.tsue !== false){
    s += gr(21,-28,1,5, rco(-3.5,-34,7,64,P.wood,3) + cio(0,-36,6,P.woodD) + ln('M-2 -12 l4 -7','#6e5138',2.2));
  }
  s += rco(-9,-15,7,15,'#5b4632',3) + rco(2,-15,7,15,'#5b4632',3)
    + pto('M-13 -58 L13 -58 L19 -14 L-19 -14 z',P.majoFuku)
    + ln('M-15 -32 q15 5 30 0',P.majoFukuD,2.4)
    + rco(-21,-55,8,24,P.majoFuku,4) + rco(13,-55,8,24,P.majoFuku,4)
    + cio(-17,-30,4.6,P.skin) + cio(17,-30,4.6,P.skin)
    + pto('M-16 -58 q16 -9 32 0 l4 13 q-20 7 -40 0 z','#9a8fa8')
    + cio(0,-74,16,P.skin)
    + pt('M-16 -74 a16 16 0 0 1 32 0 q-16 5 -32 0 z',P.majoKami)
    + pto('M-18 -74 q0 -20 18 -20 q18 0 18 20 q-9 -7 -18 -7 q-9 0 -18 7 z',P.majoFukuD)
    + ln('M0 -74 q4 6 -1 7','#c9a58a',2.2);
  if(mood === 'yasashii'){
    s += ln('M-10 -76 q4 -5 8 0','#5a4a3a',2.4) + ln('M2 -76 q4 -5 8 0','#5a4a3a',2.4)
      + ci(-11,-68,2.8,'rgba(255,140,140,.5)') + ci(11,-68,2.8,'rgba(255,140,140,.5)')
      + ln('M-5 -63 q5 5 10 0','#a04040',2.4);
  }else if(mood === 'odoroki'){
    s += el(-6,-77,4.2,4.6,'#fff') + el(6,-77,4.2,4.6,'#fff')
      + ci(-6,-77,2.4,P.majoMe) + ci(6,-77,2.4,P.majoMe)
      + ln('M-12 -83 l6 2','#8a7a6a',2.2) + ln('M12 -83 l-6 2','#8a7a6a',2.2)
      + elo(0,-62,3.6,3,'#a04040');
  }else if(mood === 'kunkun'){
    s += el(-6,-77,4.4,2.4,'#fff') + el(6,-77,4.4,2.4,'#fff')
      + ci(-6,-77,1.8,P.majoMe) + ci(6,-77,1.8,P.majoMe)
      + ln('M-11 -80 q5 -2 10 0','#8a7a6a',2) + ln('M1 -80 q5 -2 10 0','#8a7a6a',2)
      + ln('M-5 -63 q5 3 10 0','#a04040',2.2)
      + ln('M9 -70 q8 -3 13 -8','rgba(74,58,44,.45)',2.4)
      + ln('M10 -64 q9 -2 15 -6','rgba(74,58,44,.32)',2.2);
  }else if(mood === 'shonbori'){
    s += el(-6,-77,4.2,3.4,'#fff') + el(6,-77,4.2,3.4,'#fff')
      + ci(-6,-76,2,P.majoMe) + ci(6,-76,2,P.majoMe)
      + ln('M-12 -82 l6 3','#8a7a6a',2.2) + ln('M12 -82 l-6 3','#8a7a6a',2.2)
      + ln('M-5 -62 q5 -4 10 0','#a04040',2.2);
  }else{
    s += el(-6,-77,4.6,3.2,'#fff') + el(6,-77,4.6,3.2,'#fff')
      + ci(-6,-77,2.1,P.majoMe) + ci(6,-77,2.1,P.majoMe)
      + ci(-5.4,-77.8,.8,'#fff') + ci(6.6,-77.8,.8,'#fff')
      + ln('M-11 -79 q5 -3 10 0','#8a7a6a',2) + ln('M1 -79 q5 -3 10 0','#8a7a6a',2)
      + ln('M-13 -73 l-3 2','#c9a58a',1.8) + ln('M13 -73 l3 2','#c9a58a',1.8)
      + ln('M-4 -63 q4 3 8 0','#a04040',2.2);
  }
  return s;
}
/* ゆきの ように しろい とり。🔴 キジとは べつの デザイン（まるい からだ・みじかい しっぽ） */
const toriChar = () => el(0,2,13,3.5,'rgba(0,0,0,.12)')
  + pto('M-10 -14 q-18 -5 -21 3 q9 6 21 2 z',P.shiro)
  + elo(0,-15,14,11,P.shiro)
  + pto('M-3 -18 q-12 5 -9 13 q10 2 13 -9 z','#e4ecf4')
  + cio(10,-27,8.5,P.shiro)
  + pto('M18 -27 l10 3 l-10 3.5 z',P.kuchi)
  + ci(11,-29,2.3,'#333') + ci(11.9,-29.9,.9,'#fff')
  + ln('M-2 -4 l0 5',P.kuchi,2.2) + ln('M5 -4 l0 5',P.kuchi,2.2);
/* とんで いる しろい とり */
const toriTobu = () => pto('M-12 4 q-20 -3 -23 4 q10 6 22 1 z',P.shiro)
  + elo(0,0,15,9,P.shiro)
  + pto('M-3 -3 q-11 -19 -1 -23 q9 3 7 21 z','#e4ecf4')
  + pto('M1 4 q-7 17 2 21 q9 -4 5 -19 z','#eef2f8')
  + cio(13,-9,7.5,P.shiro)
  + pto('M20 -9 l10 3 l-10 3 z',P.kuchi)
  + ci(14,-11,2.1,'#333') + ci(14.8,-11.8,.8,'#fff');
/* しろい あひる（みずの うえ。0,0 が みずめん） */
const ahiruChar = () => pto('M-15 -14 q-13 -6 -16 2 q8 6 17 2 z',P.shiro)
  + elo(0,-11,18,11,P.shiro)
  + gr(11,-22,1,10, rco(-4,-12,8,24,P.shiro,4))
  + cio(15,-34,8,P.shiro)
  + pto('M21 -36 q11 1 11 4 q0 3 -11 3 z',P.kuchi)
  + ci(15,-36,2.2,'#333') + ci(15.9,-36.9,.8,'#fff')
  + pto('M1 -14 q-10 4 -8 11 q9 2 11 -7 z','#e4ecf4');

/* ---------- かぐやひめ用の 背景部品 ---------- */
/* ひかりの つぶ（たけの ひかり・つきの ひかりに そえる） */
const hikariTsubu = (x,y,s) => g(x,y,s, ci(0,0,6.5,'rgba(255,250,220,.22)')
  + ci(0,0,3.2,'#fff8dd') + ci(-1.1,-1.1,1.2,'#fff'));
/* ひかりの はしら（上から まっすぐ おりる はっきんの おび）
   🔴 らいごうずふうの はでな えんしゅつには しない（しずかな たての ひかりだけ） */
const hikariBashira = (x,w,op) => pt('M' + (x - w / 2) + ' 0 L' + (x + w / 2) + ' 0 L'
  + (x + w * 0.85) + ' 300 L' + (x - w * 0.85) + ' 300 z','rgba(246,242,221,' + (op || .18) + ')');
/* たけの えだは（みぎ上に のびる かたち。r で むき・hc/ec で よるの いろに かえる） */
const takeEda = (x,y,s,r,hc,ec) => gr(x,y,s,r || 0, ln('M0 0 q19 -5 34 -13',ec || P.takeD,2.4)
  + pto('M7 -3 q14 -10 27 -8 q-11 9 -25 10 z',hc || P.takeHa)
  + pto('M18 -6 q17 -3 24 5 q-13 4 -25 -1 z',hc || P.takeHa)
  + pto('M28 -13 q14 -6 22 1 q-11 6 -22 2 z',hc || P.takeHa));
/* たけ（ふしの ある みき + 上に はっぱ）。h で たかさ・c で おくゆきの いろ・hc/ec で よるの はの いろ */
const takeKi = (x,y,s,h,c,hc,ec) => {
  h = h || 190; c = c || P.take;
  let fu = '';
  for(let i = 1; i * 48 < h; i++) fu += ln('M-7 ' + (-48 * i) + ' L7 ' + (-48 * i),ec || P.takeD,3);
  return g(x,y,s, rco(-7,-h,14,h,c,3) + fu
    + takeEda(6,10 - h,1,-26,hc,ec) + takeEda(-6,30 - h,1,204,hc,ec) + takeEda(5,-6 - h,.8,-54,hc,ec));
};
/* ねもとが 金色に ひかる たけ（ふしから 下が まるごと ひかる） */
const takeHikaru = (x,y,s,h) => {
  h = h || 180;
  return g(x,y,s, ci(0,-48,78,'rgba(255,232,138,.26)') + ci(0,-48,50,'rgba(255,232,138,.34)')
    + rco(-9,-h,18,h,P.take,3)
    + ln('M-9 -96 L9 -96',P.takeD,3)
    + pt('M-7.5 -94 L7.5 -94 L7.5 -2 L-7.5 -2 z','#f0dc84')
    + ln('M-9 -48 L9 -48','#d9c46a',3)
    + ln('M0 -88 L0 -8','#fffbe0',5)
    + takeEda(7,12 - h,1,-26) + takeEda(-7,32 - h,1,204)
    + hikariTsubu(-23,-34,.95) + hikariTsubu(25,-68,.8)
    + hikariTsubu(-28,-82,.65) + hikariTsubu(21,-16,.7));
};
/* たけのこ（はるの たけばやし） */
const takenoko = (x,y,s) => g(x,y,s, pto('M-13 0 q1 -34 13 -47 q12 13 13 47 z','#c9a97e')
  + ln('M-12 -10 q12 8 24 0','#a9855e',2.4)
  + ln('M-10 -22 q10 7 20 0','#a9855e',2.2)
  + ln('M-7 -33 q7 6 14 0','#a9855e',2)
  + pt('M-11 -2 q11 -9 22 0 z','#8a6a44')
  + ln('M0 -46 l-1 -9','#8a6a44',2.4));
/* うすい よるの くも（つきや ひかりの はしらに かける） */
const kumoUsu = (x,y,s,op) => g(x,y,s, el(0,0,40,10,'rgba(238,240,252,' + (op || .26) + ')')
  + el(-30,4,26,7,'rgba(238,240,252,' + ((op || .26) * .72) + ')')
  + el(30,4,26,7,'rgba(238,240,252,' + ((op || .26) * .72) + ')'));
/* わしつ（しょうじ・はしら・たたみ）。dark で よるの あかりだけに する */
function washitsu(id,dark){
  const shoji = dark ? '#6b7290' : '#fbf7ec';
  const ki = dark ? '#4a3a2a' : P.beam;
  let s = grad(id, dark ? '#4a4f6e' : '#f7efdd', dark ? '#2b3049' : '#e8dabb')
    + rc(0,0,480,20,ki)
    + rco(24,20,196,152,shoji,3) + rco(260,20,196,152,shoji,3);
  for(const bx of [24,260]){
    s += ln('M' + (bx + 65) + ' 20 L' + (bx + 65) + ' 172',ki,2.6)
      + ln('M' + (bx + 131) + ' 20 L' + (bx + 131) + ' 172',ki,2.6)
      + ln('M' + bx + ' 71 L' + (bx + 196) + ' 71',ki,2.6)
      + ln('M' + bx + ' 122 L' + (bx + 196) + ' 122',ki,2.6);
  }
  return s + ln('M240 0 L240 240',ki,9)
    + rc(0,240,480,60,dark ? '#6e7052' : '#d2d5a4') + ln('M0 240 L480 240',dark ? '#4e5038' : '#a9ae78',3)
    + ln('M160 240 L160 300',dark ? 'rgba(78,80,56,.6)' : 'rgba(169,174,120,.7)',2.4)
    + ln('M320 240 L320 300',dark ? 'rgba(78,80,56,.6)' : 'rgba(169,174,120,.7)',2.4);
}
/* あんどん（わしつの あかり）。ひかりは やわらかく */
const andon = (x,y,s) => g(x,y,s, ci(0,-26,44,'rgba(255,214,130,.13)')
  + rco(-20,-6,40,8,P.woodD,3)
  + rco(-16,-46,32,40,'#f7efd2',3)
  + ln('M-16 -32 L16 -32','#c9a86b',2.4) + ln('M0 -46 L0 -6','#c9a86b',2.4)
  + ci(0,-26,11,'rgba(255,216,140,.55)')
  + rco(-20,-53,40,7,P.woodD,3));
/* えんがわ（ひさし・かべと しょうじ + いたの ゆか）。x,y は ゆかの ひだり上・w は はば */
function engawa(x,y,w,dark){
  const shoji = dark ? '#5b6788' : '#fbf7ec';
  const ki = dark ? '#4a3a2a' : P.beam;
  const yane = dark ? '#3a4452' : '#7c8698';
  const pw = (w - 30) / 2;
  const t = y - 88;
  let s = pto('M' + (x - 28) + ' ' + t + ' L' + (x + 18) + ' ' + (t - 26)
      + ' L' + (x + w - 18) + ' ' + (t - 26) + ' L' + (x + w + 28) + ' ' + t + ' z',yane)
    + rc(x,t,w,88,dark ? '#3f4756' : '#e8dcc0')
    + rc(x,t,w,9,ki);
  for(const bx of [x + 8,x + w - 8 - pw]){
    s += rco(bx,t + 14,pw,68,shoji,3)
      + ln('M' + (bx + pw / 2) + ' ' + (t + 14) + ' L' + (bx + pw / 2) + ' ' + (t + 82),ki,2.4)
      + ln('M' + bx + ' ' + (t + 37) + ' L' + (bx + pw) + ' ' + (t + 37),ki,2.4)
      + ln('M' + bx + ' ' + (t + 60) + ' L' + (bx + pw) + ' ' + (t + 60),ki,2.4);
  }
  return s + rc(x - 12,y,w + 24,16,'#7a5c34')
    + ln('M' + (x - 12) + ' ' + y + ' L' + (x + w + 12) + ' ' + y,'#5f4426',3)
    + rc(x - 12,y + 16,w + 24,10,'#5f4426');
}
/* やしき（ついじべいと もん）。たけとりの いえが ゆたかに なった あとの すがた */
const yashiki = (x,y,s) => g(x,y,s, rco(-150,-56,300,56,'#e2d6bc',3)
  + ln('M-150 -34 L150 -34','#c2b394',2.6)
  + pto('M-162 -56 L-150 -72 L150 -72 L162 -56 z','#8a8f9a')
  + rco(-40,-98,80,98,P.shiraki,3)
  + rc(-34,-92,68,11,P.shirakiD)
  + rco(-17,-66,34,66,'#7a5c34',3) + ln('M0 -66 L0 0','#5f4426',2.4)
  + pto('M-58 -98 L0 -130 L58 -98 z','#7c8698')
  + ln('M-46 -111 L46 -111','#67707f',3));
/* みかどの おこし（かつぐ ぼうつき。金の かざりは ひかえめに） */
const koshiKago = (x,y,s) => g(x,y,s, ln('M-112 -48 L112 -48','#7a5c34',9)
  + ln('M-112 -48 L112 -48','rgba(255,255,255,.18)',3)
  + rco(-52,-86,104,54,P.gotenAka,4)
  + rc(-46,-80,92,14,P.ryuguG)
  + rco(-30,-70,60,34,'#f6eddc',3) + ln('M-30 -53 L30 -53','#c9b48c',2.4)
  + pto('M-64 -86 L0 -116 L64 -86 z','#6b7280')
  + ln('M-50 -99 L50 -99','#586070',3)
  + cio(0,-122,6,P.ryuguG)
  + rco(-56,-42,112,12,P.gotenAkaD,3)
  + rc(-42,-30,12,14,'#7a5c34') + rc(30,-30,12,14,'#7a5c34')
  + rco(-50,-16,100,10,'#7a5c34',3));
/* 5つの たからの そうぞうず（きこうしが もとめられた もの） */
/* ほとけの みいしの はち */
const hachiIshi = (x,y,s) => g(x,y,s, pto('M-26 -10 q26 27 52 0 q-6 23 -26 23 q-20 0 -26 -23 z','#9aa0a8')
  + elo(0,-11,26,7,'#b6bcc4') + el(-9,-12,9,3,'rgba(255,255,255,.5)'));
/* ほうらいの たまの えだ */
const tamaEda = (x,y,s) => g(x,y,s, ln('M0 22 q3 -22 -2 -36',P.ryuguG,4)
  + ln('M-1 0 q-14 -6 -22 -18',P.ryuguG,3) + ln('M0 -8 q14 -6 22 -20',P.ryuguG,3)
  + pto('M-8 -14 q-13 -4 -17 -12 q13 0 19 8 z',P.takeHa)
  + cio(-23,-19,6,P.shinju) + cio(23,-29,6,P.shinju) + cio(-2,-38,7,P.shinju)
  + ci(-25,-21,2,'#fff') + ci(21,-31,2,'#fff') + ci(-4,-40,2.4,'#fff'));
/* ひねずみの かわぎぬ（けの ころも。えりと すそを もこもこに して かわの ころもに 見せる） */
const kawaGoromo = (x,y,s) => g(x,y,s,
    pto('M-24 -26 L24 -26 L31 18 L-31 18 z','#a9743f')
  + pto('M-24 -24 L-42 -16 L-38 8 L-22 1 z','#98653a')
  + pto('M24 -24 L42 -16 L38 8 L22 1 z','#98653a')
  + pt('M-10 -26 L0 -4 L10 -26 z','#e8d8bc')
  + pt('M-24 -26 q8 9 16 0 q8 9 16 0 q8 9 16 0 l0 -6 l-48 0 z','#c9a06b')
  + ln('M-15 2 L-13 15','#8a5c30',2.2) + ln('M0 0 L0 15','#8a5c30',2.2)
  + ln('M15 2 L13 15','#8a5c30',2.2)
  + pt('M-31 15 q8 9 16 0 q8 9 16 0 q8 9 15 0 l0 4 l-47 0 z','#c9a06b'));
/* たつの くびの たま（五しきに ひかる たま） */
const ryuTama = (x,y,s) => g(x,y,s, ci(0,0,27,'rgba(255,255,255,.16)')
  + cio(0,0,17,'#eaf1f7')
  + pt('M-17 0 a17 17 0 0 1 34 0 z','rgba(122,168,224,.5)')
  + pt('M-17 0 a17 17 0 0 0 34 0 z','rgba(232,150,170,.42)')
  + pt('M-17 0 q8 6 17 6 l0 -6 z','rgba(140,206,150,.45)')
  + pt('M0 -17 q9 1 13 8 l-13 9 z','rgba(246,214,120,.4)')
  + el(-6,-6,6,4,'rgba(255,255,255,.75)')
  + spark(-23,-19,.6) + spark(21,17,.5));
/* つばめの こやすがい（すの なかの ちいさな かい） */
const koyasuGai = (x,y,s) => g(x,y,s, pto('M-28 10 q5 -20 28 -20 q23 0 28 20 z','#9a7a52')
  + ln('M-22 4 q22 -10 44 0','#7d6040',2.4) + ln('M-19 11 q19 -8 38 0','#7d6040',2.2)
  + elo(0,-3,16,11,'#f6efe2')
  + ln('M-9 -3 q9 8 18 0','#c9bda6',2.6)
  + ci(-6,-8,4,'rgba(255,255,255,.7)')
  + ci(-13,-4,1.6,'#d8cbb6') + ci(13,-4,1.6,'#d8cbb6'));
/* ふじの やま（いただきに ゆき）。けむりは yuge を かさねる */
const fujiYama = (x,y,s) => g(x,y,s,
    pto('M-152 0 Q-62 -30 -30 -96 Q-14 -128 0 -128 Q14 -128 30 -96 Q62 -30 152 0 z','#8fa2bd')
  + pt('M-34 -92 Q-16 -122 0 -122 Q16 -122 34 -92 q-17 8 -34 2 q-17 6 -34 -2 z',P.snow)
  + ln('M-70 -40 q30 -15 40 -40','rgba(255,255,255,.32)',3)
  + ln('M64 -44 q-26 -16 -36 -40','rgba(255,255,255,.28)',3));
/* つきの みやこの ろう（しろと うすむらさきの しずかな たてもの） */
const miyakoRou = (x,y,s) => g(x,y,s, rco(-46,-72,92,72,P.miyako,3)
  + ln('M-46 -48 L46 -48',P.miyakoD,2.6) + ln('M-46 -24 L46 -24',P.miyakoD,2.6)
  + pto('M-58 -72 L0 -104 L58 -72 z',P.miyakoD)
  + rco(-14,-40,28,40,'#ded4ee',3)
  + rco(-11,-113,22,11,P.miyakoD,3));
/* ふみ（まきがみの てがみ） */
const fumiMaki = (x,y,s) => g(x,y,s, rco(-30,-8,60,16,'#f6f0e2',3)
  + ln('M-18 -3 L14 -3','#c9bda6',2) + ln('M-18 2 L8 2','#c9bda6',2)
  + cio(-32,0,8,'#efe6d2') + ln('M-32 -6 L-32 6','#c9bda6',2));
/* たたんだ ころも（ぬぎおく きぬ） */
const koromoTatami = (x,y,s) => g(x,y,s, pto('M-34 -6 L34 -6 L38 6 L-38 6 z',P.kgUsu)
  + pto('M-32 -20 L32 -20 L34 -6 L-34 -6 z',P.kgKasane)
  + pto('M-30 -32 L30 -32 L32 -20 L-32 -20 z',P.kgShiro)
  + ln('M-24 -26 L24 -26','#ded6ea',2.4) + ln('M-26 -13 L26 -13','#cfc4e4',2.4));
/* ふづくえ（ちいさな つくえ） */
const fuzukue = (x,y,s) => g(x,y,s, rco(-38,-22,76,10,'#a9805a',3)
  + rc(-32,-12,9,12,'#8a6a44') + rc(23,-12,9,12,'#8a6a44')
  + ln('M-32 0 L-23 0','#6e5138',2.4) + ln('M23 0 L32 0','#6e5138',2.4));

/* ---------- かぐやひめの 人物 ---------- */
/* かおの ひょうじょう（あたまの まんなかが 0,0・はんけい 16 に あわせる）
   mood: normal / namida（なみだ）/ hohoemi / odoroki。mayu で まゆの いろを かえる */
function kgKao(mood,mayu){
  const m = mayu || '#3a2c20';
  if(mood === 'odoroki'){
    return el(-5.5,2,3.8,4.6,'#fff') + el(5.5,2,3.8,4.6,'#fff')
      + ci(-5.5,2.6,2.4,'#333') + ci(5.5,2.6,2.4,'#333')
      + ln('M-11 -6 l6 -1',m,2.2) + ln('M11 -6 l-6 -1',m,2.2)
      + elo(0,11,3.6,3,'#a04040');
  }
  /* 🔴 まゆの うちがわを 上げる（下げると おこった かおに 見える） */
  if(mood === 'namida'){
    return ln('M-9 1 q4 5 8 0','#333',2.4) + ln('M1 1 q4 5 8 0','#333',2.4)
      + ln('M-11 -5 l6 -3',m,2.2) + ln('M11 -5 l-6 -3',m,2.2)
      + pt('M-10 4 q-4 8 0 11 q4 -3 0 -11 z','#8fc8e8')
      + ci(-12,10,2.6,'rgba(255,140,140,.45)') + ci(12,10,2.6,'rgba(255,140,140,.45)')
      + ln('M-4 12 q4 -3 8 0','#a04040',2.2);
  }
  if(mood === 'hohoemi'){
    return ln('M-9 2 q4 -5 8 0','#333',2.4) + ln('M1 2 q4 -5 8 0','#333',2.4)
      + ci(-11,9,2.8,'rgba(255,140,140,.5)') + ci(11,9,2.8,'rgba(255,140,140,.5)')
      + ln('M-4 10 q4 5 8 0','#a04040',2.4);
  }
  return ci(-5.5,3,2.4,'#333') + ci(5.5,3,2.4,'#333') + ci(-4.6,2,1,'#fff') + ci(6.4,2,1,'#fff')
    + ln('M-11 -4 l6 -1',m,2) + ln('M11 -4 l-6 -1',m,2)
    + ci(-11,9,2.6,'rgba(255,140,140,.45)') + ci(11,9,2.6,'rgba(255,140,140,.45)')
    + ln('M-3.5 11 q3.5 4 7 0','#a04040',2.2);
}
/* かぐやひめ: しろ〜うすむらさきの かさねの きもの・ながい くろかみ・かんむりは なし
   🔴 おとひめ（赤/桃・かんざし）とは べつの いろと かたち。opt.hikari で うすい ひかりの りんかく */
function kaguyaChar(opt){
  opt = opt || {};
  let s = '';
  if(opt.hikari){
    s += el(0,-48,46,62,'rgba(255,250,224,.18)') + el(0,-48,35,52,'rgba(255,250,224,.24)');
  }
  s += el(0,2,24,5,'rgba(0,0,0,.10)')
    + pto('M-27 -14 L27 -14 L36 0 L-36 0 z',P.kgUsuD)
    + pto('M-25 -21 L25 -21 L32 -5 L-32 -5 z',P.kgUsu)
    + pto('M-17 -58 L17 -58 L28 -9 L-28 -9 z',P.kgShiro)
    + pto('M-17 -56 L-31 -50 L-36 -20 L-19 -26 z',P.kgKasane)
    + pto('M17 -56 L31 -50 L36 -20 L19 -26 z',P.kgKasane)
    + ln('M-34 -23 L-20 -28',P.kgUsuD,3) + ln('M34 -23 L20 -28',P.kgUsuD,3)
    + ln('M-17 -34 L17 -34',P.kgObi,4)
    + pt('M-10 -58 L0 -38 L10 -58 z',P.kgKasane)
    + pt('M-6 -58 L0 -46 L6 -58 z',P.kgUsuD)
    + cio(0,-76,16,P.skin)
    + pt('M-16 -76 a16 16 0 0 1 32 0 q-8 6 -16 3 q-8 3 -16 -3 z',P.hair)
    + pto('M-16 -80 q-14 34 -10 60 q11 3 13 -22 z',P.hair)
    + pto('M16 -80 q14 34 10 60 q-11 3 -13 -22 z',P.hair)
    + g(0,-76,1,kgKao(opt.mood));
  if(opt.hikari){
    s += hikariTsubu(-32,-66,.7) + hikariTsubu(32,-54,.6) + hikariTsubu(0,-101,.55);
  }
  return s;
}
/* さんずんの ひめ（たけの なかで 見つかった とき）。かぐやひめの ちいさい ばんでは なく せんようの すがた */
const himeAkaChar = () => ci(0,-16,28,'rgba(255,250,220,.20)')
  + pto('M-11 -6 L11 -6 L15 2 L-15 2 z',P.kgUsu)
  + pto('M-9 -21 L9 -21 L13 -3 L-13 -3 z',P.kgShiro)
  + pt('M-5 -21 L0 -13 L5 -21 z',P.kgUsuD)
  + cio(0,-29,10,P.skin)
  + pt('M-10 -29 a10 10 0 0 1 20 0 q-5 4 -10 2 q-5 2 -10 -2 z',P.hair)
  + ci(-3.4,-27,1.8,'#333') + ci(3.4,-27,1.8,'#333')
  + ci(-7,-23,2,'rgba(255,140,140,.5)') + ci(7,-23,2,'rgba(255,140,140,.5)')
  + ln('M-2.4 -22 q2.4 2.6 4.8 0','#a04040',1.8);
/* おきな（たけとりの おじいさん）: しつその のらぎ・ねじり はちまき・みじかい しらひげ
   🔴 かぶの jiiChar（ながい ころも・ずきん・大きな しらひげ）とは べつの すがた。opt.kago で せおいかご */
function okinaChar(opt){
  opt = opt || {};
  let s = el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-12,-6,10,6,'#d9c08a',2) + rco(2,-6,10,6,'#d9c08a',2)
    + pto('M-13 -30 L13 -30 L11 -6 L2 -6 L2 -18 L-2 -18 L-2 -6 L-11 -6 z','#7f8a6b');
  if(opt.kago){
    s += g(-22,-40,1, pto('M-11 -20 L11 -20 L9 10 L-9 10 z','#c9a86b')
      + ln('M-10 -12 L10 -12','#a9855e',2.2) + ln('M-10 -3 L10 -3','#a9855e',2.2)
      + ln('M-10 6 L10 6','#a9855e',2.2) + ln('M0 -20 L0 10','#a9855e',2.2));
  }
  s += rco(-15,-58,30,30,P.noragi,5)
    + pt('M-9 -58 L0 -40 L9 -58 z',P.tenugui)
    + rc(-15,-34,30,6,'#8a6a44')
    + rco(-22,-56,8,22,P.noragi,4) + rco(14,-56,8,22,P.noragi,4)
    + ln('M-21 -36 L-15 -36',P.noragiD,2.4) + ln('M21 -36 L15 -36',P.noragiD,2.4)
    + cio(-18,-32,4.6,P.skin) + cio(18,-32,4.6,P.skin)
    + cio(0,-72,16,'#f6d9b4')
    + g(0,-72,1, pt('M-16 0 a16 16 0 0 1 32 0 z',P.shiraga)
      + pt('M-8 7 q8 -3 16 0 q-4 5 -8 3 q-4 2 -8 -3 z','#f2ede2')
      + kgKao(opt.mood,'#ddd6cc')
      + pto('M-9 14 q9 12 18 0 q-2 13 -9 13 q-7 0 -9 -13 z','#f2ede2'))
    + rco(-18,-85,36,8,P.tenugui,3) + pto('M18 -83 l11 -5 l-2 10 z',P.tenugui);
  return s;
}
/* おうな（たけとりの おばあさん）: のらぎと まえかけ・あねさん かぶり
   🔴 あかずきんの obaasan（めがねと ももいろの えり）とは べつの すがた */
function ounaChar(opt){
  opt = opt || {};
  return el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-11,-6,9,6,'#d9c08a',2) + rco(2,-6,9,6,'#d9c08a',2)
    + pto('M-15 -56 L15 -56 L19 -6 L-19 -6 z',P.ounaFuku)
    + pto('M-10 -38 L10 -38 L13 -8 L-13 -8 z','#efe9dc')
    + rc(-16,-40,32,6,'#a97a52')
    + rco(-21,-54,8,22,P.ounaFuku,4) + rco(13,-54,8,22,P.ounaFuku,4)
    + cio(-17,-30,4.4,P.skin) + cio(17,-30,4.4,P.skin)
    + cio(0,-70,16,'#f8dcbc')
    + g(0,-70,1, pt('M-16 0 a16 16 0 0 1 32 0 z',P.shiraga)
      + pto('M-17 -2 q0 -20 17 -20 q17 0 17 20 q-17 -9 -34 0 z',P.tenugui)
      + pto('M15 -7 l10 -4 l-2 9 z',P.tenugui)
      + kgKao(opt.mood,'#c9c2b8'));
}
/* きこうしの はんよう（いかん そくたい ふう）。いろちがいで 5にん
   🔴 こっけいさは のこしても、あざけった かおには しない（ふつうの ひょうじょう） */
function kikoshiChar(c,opt){
  opt = opt || {};
  c = c || P.kikoAo;
  return el(0,2,17,5,'rgba(0,0,0,.12)')
    + pto('M-12 -88 q-22 3 -26 19 l8 3 q3 -12 18 -14 z','#2f2b28')
    + rco(-12,-6,10,6,'#3f3a36',2) + rco(2,-6,10,6,'#3f3a36',2)
    + pto('M-17 -58 L17 -58 L27 -4 L-27 -4 z',c)
    + pt('M-25 -18 L25 -18 L27 -4 L-27 -4 z','rgba(0,0,0,.10)')
    + rco(-30,-56,13,30,c,4) + rco(17,-56,13,30,c,4)
    + rc(-29,-30,11,5,'rgba(0,0,0,.12)') + rc(18,-30,11,5,'rgba(0,0,0,.12)')
    + cio(-24,-24,4.6,P.skin) + cio(24,-24,4.6,P.skin)
    + rco(-4,-52,8,26,P.shiraki,2)
    + pt('M-9 -58 L0 -44 L9 -58 z','#f2ede2')
    + cio(0,-74,16,P.skin)
    + g(0,-74,1, pt('M-16 0 a16 16 0 0 1 32 0 z',P.hair) + kgKao(opt.mood))
    + pto('M-14 -84 q14 -15 28 0 z','#2f2b28')
    + rco(-3,-98,6,8,'#2f2b28',2);
}
/* みかど: きこうしと おなじ かたちだが こい むらさきと 金の へり・りゅうえいの かんむり
   （かくの ちがいが わかる ていど。ぎょうぎょうしくは しない） */
function mikadoChar(opt){
  opt = opt || {};
  const s = el(0,2,19,5,'rgba(0,0,0,.13)')
    + pto('M-13 -92 q-24 4 -28 21 l9 3 q3 -13 20 -15 z','#2f2b28')
    + rco(-13,-6,11,6,'#3f3a36',2) + rco(2,-6,11,6,'#3f3a36',2)
    + pto('M-19 -62 L19 -62 L31 -4 L-31 -4 z',P.mikadoFuku)
    + pt('M-28 -20 L28 -20 L31 -4 L-31 -4 z',P.mikadoFukuD)
    + ln('M-28 -13 L28 -13',P.ryuguG,3)
    + rco(-34,-60,14,33,P.mikadoFuku,4) + rco(20,-60,14,33,P.mikadoFuku,4)
    + ln('M-33 -29 L-21 -29',P.ryuguG,3) + ln('M33 -29 L21 -29',P.ryuguG,3)
    + cio(-27,-25,4.8,P.skin) + cio(27,-25,4.8,P.skin)
    + rco(-5,-56,10,28,P.ryuguG,2) + ln('M0 -54 L0 -30','#d9a83a',2.4)
    + pt('M-10 -62 L0 -46 L10 -62 z','#f2ede2')
    + cio(0,-78,16,P.skin)
    + g(0,-78,1, pt('M-16 0 a16 16 0 0 1 32 0 z',P.hair) + kgKao(opt.mood))
    + pto('M-14 -88 q14 -15 28 0 z','#2f2b28')
    + ln('M-12 -89 q12 -6 24 0',P.ryuguG,2.4)
    + rco(-3,-114,6,18,'#2f2b28',3);
  return g(0,0,1.06,s);
}
/* つきの つかい（てんにん）: しろい ころも・うすい ひかりの わ・おだやかで むかんじょうよりの かお
   🔴 らいごうずふうの くもに のった ぼさつの すがたには しない。ほおべにと 目の ハイライトは つけない */
function shishaChar(opt){
  opt = opt || {};
  return el(0,-40,32,46,'rgba(246,242,221,.16)')
    + pto('M-16 -58 L16 -58 L26 2 L-26 2 z',P.tennin)
    + pt('M-24 -12 L24 -12 L26 2 L-26 2 z',P.tenninK)
    + pto('M-16 -56 L-28 -50 L-32 -18 L-18 -24 z',P.tennin)
    + pto('M16 -56 L28 -50 L32 -18 L18 -24 z',P.tennin)
    + ln('M-17 -34 L17 -34',P.tenninObi,4)
    + pt('M-8 -58 L0 -42 L8 -58 z',P.tenninK)
    + ln('M-30 -46 q-25 11 -35 -4','rgba(226,220,240,.7)',5)
    + ln('M30 -46 q25 11 35 -4','rgba(226,220,240,.7)',5)
    + ci(0,-76,23,'rgba(255,252,232,.26)')
    + cir(0,-76,23,'rgba(190,176,222,.85)',3.2)
    + cir(0,-76,23,'rgba(255,255,255,.5)',1.4)
    + cio(0,-76,16,P.skin)
    + g(0,-76,1, pt('M-16 0 a16 16 0 0 1 32 0 q-8 5 -16 2 q-8 3 -16 -2 z',P.hair)
      + ci(-5.5,3,2.4,'#333') + ci(5.5,3,2.4,'#333')
      + ln('M-11 -4 l6 0','#3a2c20',2) + ln('M11 -4 l-6 0','#3a2c20',2)
      + ln('M-3 11 L3 11','#a04040',2.2))
    + (opt.te === 'fumi' ? fumiMaki(24,-36,.5) : '');
}
/* もんを かためる へい（十五夜の まえ）。ぶきは ゆみだけ・かおは ふつう */
function heiChar(yumi){
  return el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-11,-6,9,6,'#5b4632',2) + rco(2,-6,9,6,'#5b4632',2)
    + pto('M-13 -30 L13 -30 L11 -6 L2 -6 L2 -16 L-2 -16 L-2 -6 L-11 -6 z','#5f6b52')
    + rco(-15,-56,30,28,'#6e7a5e',4)
    + rc(-15,-34,30,6,'#4a4030')
    + rco(-22,-54,8,20,'#6e7a5e',4) + rco(14,-54,8,20,'#6e7a5e',4)
    + cio(-18,-32,4.4,P.skin) + cio(18,-32,4.4,P.skin)
    + cio(0,-70,15,P.skin)
    + g(0,-70,1, pt('M-15 0 a15 15 0 0 1 30 0 z',P.hair) + kgKao())
    + pto('M-23 -79 q23 -14 46 0 q-23 6 -46 0 z','#8a6a44')
    + (yumi ? ln('M23 -66 q13 33 0 64','#7a5c34',3.5) + ln('M23 -66 L23 -2','rgba(255,255,255,.45)',1.6) : '');
}

/* ---------- ブレーメンの おんがくたい用の 背景部品 ---------- */
/* みずぐるま（こなひきごやの わき。8まいの はねを まわす） */
const suisha = (x,y,s) => {
  let ha = '';
  for(let i = 0; i < 8; i++) ha += gr(0,0,1,i * 45, ln('M0 0 L0 -30',P.woodD,3.4) + rco(-8,-38,16,8,P.wood,2));
  return g(x,y,s, cir(0,0,31,P.woodD,4) + ha + cio(0,0,6,P.woodD));
};
/* こなひきごや（木ぐみの こや）。とぐちは おおきく あけて おく（あるじの かげが 立つ） */
const konayaIe = (x,y,s) => g(x,y,s, rco(-56,-74,112,74,P.wall,3)
  + ln('M-56 -44 L56 -44',P.beam,5) + ln('M-22 -74 L-22 -56',P.beam,5) + ln('M24 -74 L24 0',P.beam,5)
  + pto('M-70 -74 L0 -116 L70 -74 z','#8e4634')
  + ln('M-48 -92 L48 -92','#7a3a2c',3)
  + rco(-48,-68,20,17,'#cfe6f0',2) + rco(32,-68,20,17,'#cfe6f0',2)
  + rco(-15,-54,32,54,'#6e5138',3)
  + rco(-19,-58,40,8,P.beam,3));
/* こなの ふくろ（こやの まえに つんで ある） */
const konaFukuro = (x,y,s) => g(x,y,s, pto('M-15 0 q-5 -25 3 -32 q8 5 12 -2 q10 10 8 34 z',P.kona)
  + ln('M-11 -13 q13 5 24 -2','#d9cfb4',2.4));
/* もりの いちけんや（どろぼうの いえ）。akari で まどに あかりが ともる */
const moriIe = (x,y,s,akari) => g(x,y,s, rco(-60,-70,120,70,P.wall,3)
  + ln('M-60 -40 L60 -40',P.beam,5) + ln('M-24 -70 L-24 0',P.beam,5) + ln('M24 -70 L24 0',P.beam,5)
  + ln('M-60 -70 L-38 -48',P.beam,4) + ln('M60 -70 L38 -48',P.beam,4)
  + pto('M-74 -70 L0 -114 L74 -70 z','#8e4634')
  + ln('M-50 -86 L50 -86','#7a3a2c',3)
  + rco(30,-138,15,48,'#8e4634',3)
  + rco(-52,-64,26,20, akari ? P.madoAkari : '#cfe6f0',3)
  + rco(26,-64,26,20, akari ? P.madoAkari : '#cfe6f0',3)
  + ln('M-39 -64 L-39 -44', akari ? P.madoAkariD : '#a9c4d4',2.4)
  + ln('M39 -64 L39 -44', akari ? P.madoAkariD : '#a9c4d4',2.4)
  + rco(-15,-36,30,36,'#5a4632',3) + ci(8,-18,2.6,'#f2ce6a'));
/* まどから もれる あかりの ひろがり。うすい わを かさねて ふちを めだたせない */
const madoHikari = (x,y,s) => g(x,y,s, ci(0,0,60,'rgba(255,214,130,.045)')
  + ci(0,0,50,'rgba(255,214,130,.05)') + ci(0,0,40,'rgba(255,214,130,.055)')
  + ci(0,0,30,'rgba(255,220,150,.07)') + ci(0,0,21,'rgba(255,226,165,.09)')
  + ci(0,0,13,'rgba(255,236,190,.12)'));
/* いえの よこの おおきな まど（つみかさなる ばめん）。akari で なかの あかり */
const ooMado = (x,y,s,akari) => g(x,y,s, rco(-44,-56,88,56, akari ? P.madoAkari : '#3f4f68',4)
  + ln('M0 -56 L0 0',P.beam,4) + ln('M-44 -28 L44 -28',P.beam,4)
  + rco(-49,-63,98,9,P.beam,3) + rco(-49,-2,98,8,P.beam,3));
/* マッチの ちいさな ひ（よるに もどった どろぼうが ともす） */
const matchiBi = (x,y,s) => g(x,y,s, ci(0,-4,20,'rgba(255,200,120,.08)') + ci(0,-4,13,'rgba(255,206,130,.12)')
  + ci(0,-4,7,'rgba(255,220,150,.2)')
  + ln('M1 0 l5 10','#c9a86b',2.2)
  + pt('M-2.4 -2 q-1.6 -8 2.4 -11 q4 3 2.4 11 q-2.4 2.4 -4.8 0 z','#f2a03f')
  + pt('M-1 -3 q-.8 -5 1 -7 q1.8 2 1 7 q-1 1.4 -2 0 z','#ffe9a8'));
/* しょくたく（ながい いた + あし） */
const shokutaku = (x,y,s) => g(x,y,s, rco(-98,-14,196,14,'#a9743f',5)
  + rc(-86,0,13,46,P.woodD) + rc(73,0,13,46,P.woodD)
  + ln('M-86 22 L86 22',P.woodD,5));
/* ごちそう（パン・チーズ・ぶどう・さかずき） */
const panMaru = (x,y,s) => g(x,y,s, elo(0,0,16,9,P.pan)
  + ln('M-9 -4 l7 -4',P.panD,2.2) + ln('M2 -5 l7 -3',P.panD,2.2));
const chiizu = (x,y,s) => g(x,y,s, pto('M-13 0 L11 0 L4 -19 z','#f2ce6a')
  + ci(-4,-6,2.2,'#e0b45a') + ci(2,-12,1.8,'#e0b45a'));
const budou = (x,y,s) => g(x,y,s, ci(-6,0,4.4,'#8a6ab0') + ci(3,0,4.4,'#8a6ab0')
  + ci(-2,7,4.4,'#7a5aa0') + ci(6,7,4.4,'#7a5aa0') + ci(-2,-7,4.4,'#9a7ac0')
  + ln('M-2 -12 q4 -7 10 -9','#5aa66b',2.4));
const koppu = (x,y,s) => g(x,y,s, pto('M-8 -19 L8 -19 L5 -3 L-5 -3 z','#e4dccc')
  + rco(-8,-3,16,5,'#c9bda8',2) + el(0,-18,6.4,2.4,'#b06a4a'));
/* まちの いえ（きりづまが かいだんに なった 北ドイツふうの ならび）。yane で 屋根の いろを かえる */
const machiIe = (x,y,s,c,yane) => g(x,y,s, rco(-38,-86,76,86,c || P.machiKabe,3)
  + pto('M-44 -86 L-44 -96 L-30 -96 L-30 -108 L-16 -108 L-16 -119 L0 -130 L16 -119 L16 -108 L30 -108 L30 -96 L44 -96 L44 -86 z',yane || P.machiYane)
  + rco(-27,-74,19,17,'#cfe6f0',2) + rco(8,-74,19,17,'#cfe6f0',2)
  + rco(-27,-46,19,17,'#cfe6f0',2) + rco(8,-46,19,17,'#cfe6f0',2)
  + rco(-13,-24,26,24,P.woodD,3));
/* ひろばの いしだたみ。手まえほど 石を 大きく して ゆかに 見せる（かべに 見えない ように） */
const ishidatami = (y0) => {
  let s = '', y = y0, gap = 7;
  for(let i = 0; i < 6; i++){
    s += ln('M0 ' + y + ' L480 ' + y,'rgba(150,140,124,.32)',2);
    const w = 40 + i * 10;
    for(let j = 0; j < 13; j++){
      const vx = Math.round(j * w + (i % 2 ? w / 2 : 0));
      if(vx < 480) s += ln('M' + vx + ' ' + y + ' l0 ' + gap,'rgba(150,140,124,.26)',2);
    }
    y += gap; gap += 3;
  }
  return s;
};
/* まちの おんがくたい（ひろばの おくで えんそうする ひとたち）
   🔴 がっきを もつのは この まちの ひとたちだけ。4ひきには もたせない */
const machiGakutai = (x,y,s) => g(x,y,s,
    g(-46,0,1, villagerChar('#6b7d92')
      + gr(19,-48,1,-34, rco(-3,-20,6,22,'#e0b45a',2) + elo(0,4,8,5.5,'#e0b45a')))
  + g(4,2,1, villagerChar('#8a6a4a')
      + rco(-15,-46,30,20,'#c9a86b',4) + ln('M-15 -36 L15 -36','#a9803f',2.4)
      + ln('M18 -50 l8 -6','#e4dccc',3) + ln('M-18 -50 l-8 -6','#e4dccc',3))
  + g(50,0,1, villagerChar('#7a8a63')
      + ln('M12 -56 l22 6','#e0b45a',4.5) + ci(20,-53,1.6,'#a9803f') + ci(27,-51,1.6,'#a9803f')));

/* ---------- ブレーメンの おんがくたい（4ひきの どうぶつ） ----------
   🔴 4ひきとも としを とった すがた（しろい まつげ・すこし まがった せ）。でも 目は あかるい
   🔴 がっきは もたせない（原典どおり）。つみかさなりは よこから かく */
/* ロバの かお（0,0 が あたまの まんなか・みぎむき） */
function robaHead(mood){
  const c = P.robaKe;
  let s = pto('M-11 -6 q-14 -19 -7 -26 q11 2 13 24 z',c)
    + pto('M3 -9 q0 -25 10 -27 q7 7 -1 29 z',c)
    + pt('M-10 -8 q-9 -13 -5 -17 q6 2 7 16 z',P.robaHara)
    + pt('M5 -11 q1 -17 5 -19 q4 5 -1 18 z',P.robaHara)
    + cio(0,0,13,c)
    + pto('M4 -2 q22 2 24 10 q-2 9 -24 6 z',c)
    + el(20,8,11,5,P.robaHara)
    + ci(25,3,2.4,'#4a3f38')
    + ln('M-9 -11 q8 -4 13 1',P.robaTate,4.5);
  if(mood === 'niko'){
    s += ln('M0 -5 q4 -5 8 0','#333',2.6)
      + ci(-4,2,3,'rgba(255,140,140,.4)')
      + ln('M13 12 q6 3 10 -1','#6e5f52',2.4);
  }else if(mood === 'shonbori'){
    s += ci(4,-3,2.6,'#333')
      + ln('M-2 -9 l10 3',P.shiraga,2.4)
      + ln('M13 13 q6 -3 10 0','#6e5f52',2.4);
  }else if(mood === 'nakigoe'){
    s += ci(3,-5,2.6,'#333')
      + ln('M-2 -11 l10 2',P.shiraga,2.4)
      + pto('M12 6 q15 2 19 -3 q1 15 -9 15 q-9 0 -10 -12 z','#8a4040')
      + pt('M14 6 l4 6 l-6 0 z','#fff') + pt('M25 4 l-3 6 l6 -1 z','#fff');
  }else if(mood === 'odoroki'){
    s += el(4,-4,3.6,4.4,'#fff') + ci(4,-3,2.4,'#333')
      + ln('M-2 -11 l10 1',P.shiraga,2.4)
      + elo(18,11,4,3.4,'#8a4040');
  }else{
    s += ci(4,-4,2.8,'#333') + ci(5,-5,1,'#fff')
      + ln('M-2 -10 l10 1',P.shiraga,2.4)
      + ln('M13 12 q6 2 10 -2','#6e5f52',2.4);
  }
  return s;
}
/* ロバ: いちばん 大きい。せなかが すこし たれて いる（としを とった すがた）
   tate=まえあしを 上げる（まどに かける）/ keri=うしろあしを けり上げる */
function robaChar(opt){
  opt = opt || {};
  const c = P.robaKe, cd = P.robaKeD, h = P.robaTate;
  const ashi = (x,r) => gr(x,-26,1,r || 0, rco(-5,0,10,26,cd,4) + rco(-6,18,12,8,h,3));
  const karada = pto('M-34 -46 C-36 -57 -26 -57 -14 -52 C-2 -47 12 -50 26 -58 C38 -52 42 -36 34 -26 C14 -18 -14 -18 -30 -26 C-38 -32 -36 -40 -34 -46 z',c)
    + ln('M-24 -50 q20 5 40 -6','rgba(74,58,44,.14)',2.4)
    + pto('M20 -56 q14 -8 28 -15 l11 17 q-17 6 -27 15 z',c)
    /* たてがみは みじかい ふさふさ（くびわに 見えない ように 線では かかない） */
    + ln('M22 -58 l-4 -8',h,3.2) + ln('M29 -62 l-3 -8',h,3.2) + ln('M36 -66 l-3 -8',h,3.2)
    + ln('M43 -70 l-2 -8',h,3.2) + ln('M50 -73 l-1 -8',h,3.2);
  const shippo = ln('M-32 -44 q-13 11 -11 23',cd,4) + pto('M-43 -25 q-7 8 -4 16 q8 2 9 -7 q1 -7 -5 -9 z',h);
  let s;
  if(opt.tate){
    s = shippo + ashi(-28) + ashi(-15) + karada
      + gr(22,-46,1,-64, rco(-5,0,10,27,cd,4) + rco(-6,19,12,8,h,3))
      + gr(32,-48,1,-48, rco(-5,0,10,27,cd,4) + rco(-6,19,12,8,h,3))
      + g(54,-58,1, robaHead(opt.mood));
    return el(-16,2,26,6,'rgba(0,0,0,.13)') + gr(-22,0,1,-22, s);
  }
  if(opt.keri){
    s = shippo
      + gr(-26,-30,1,118, rco(-5,0,10,28,cd,4) + rco(-6,20,12,8,h,3))
      + gr(-16,-28,1,106, rco(-5,0,10,28,cd,4) + rco(-6,20,12,8,h,3))
      + karada + ashi(16) + ashi(28) + g(54,-58,1, robaHead(opt.mood || 'nakigoe'));
    return el(18,2,28,6,'rgba(0,0,0,.13)') + gr(24,0,1,12, s);
  }
  return el(4,2,38,6,'rgba(0,0,0,.13)')
    + shippo + ashi(-28) + ashi(-15) + karada + ashi(16) + ashi(28)
    + g(54,-58,1, robaHead(opt.mood));
}
/* イヌの かお（0,0 が あたまの まんなか・みぎむき）
   🔴 ももたろうの dogChar・かぶの inuRuChar とは べつ。としを とった りょうけん=たれ耳・しろい くちもと */
function bremenInuHead(mood){
  const c = P.brInuKe, cd = P.brInuKeD;
  let s = pto('M-8 -6 q-14 2 -12 17 q10 3 14 -10 z',cd)
    + cio(0,0,11,c)
    + pto('M3 -1 q12 2 13 8 q-3 7 -13 4 z',c)
    + el(9,7,8,4.4,P.brInuKuchi)
    + ci(15,3,2.4,'#3a2f28');
  if(mood === 'niko'){
    s += ln('M-2 -4 q4 -5 8 0','#2c2620',2.4)
      + ln('M-5 -11 l9 2',P.shiraga,2.4)
      + ln('M6 9 q4 3 8 -1','#7a4040',2.4);
  }else if(mood === 'shonbori'){
    s += ci(2,-3,2.4,'#2c2620')
      + ln('M-5 -9 l9 3',P.shiraga,2.4)
      + ln('M7 11 q4 -3 7 0','#7a4040',2.2);
  }else if(mood === 'hoeru'){
    s += ci(2,-5,2.4,'#2c2620')
      + ln('M-5 -12 l9 2',P.shiraga,2.4)
      + pto('M5 4 q10 2 12 -3 q1 13 -6 13 q-6 0 -6 -10 z','#7a3a3a')
      + pt('M7 4 l3 5 l-5 0 z','#fff') + pt('M16 2 l-2 5 l5 -1 z','#fff');
  }else if(mood === 'odoroki'){
    s += el(2,-4,3.2,4,'#fff') + ci(2,-3,2.2,'#2c2620')
      + ln('M-5 -12 l9 2',P.shiraga,2.4)
      + elo(10,11,3.6,3,'#7a3a3a');
  }else{
    s += ci(2,-4,2.6,'#2c2620') + ci(3,-5,.9,'#fff')
      + ln('M-5 -11 l9 2',P.shiraga,2.4)
      + ln('M6 10 q4 3 8 -1','#7a4040',2.2);
  }
  return s;
}
/* イヌ: としを とった りょうけん。fuse=みちばたに 寝そべる
   🔴 大きさは ももたろうの dogChar に そろえる（join型の カットインで つかう） */
function bremenInuChar(opt){
  opt = opt || {};
  const c = P.brInuKe, cd = P.brInuKeD;
  if(opt.fuse){
    return el(4,4,27,5,'rgba(0,0,0,.13)')
      + ln('M-20 -12 q-13 3 -13 12',cd,3.2)
      + elo(0,-11,21,10,c)
      + el(2,-7,15,5,P.brInuHara)
      + elo(-9,-2,9,5,cd) + elo(9,-2,9,5,cd)
      + g(20,-22,1, bremenInuHead(opt.mood || 'shonbori'));
  }
  return el(0,2,17,4,'rgba(0,0,0,.13)')
    + ln('M-15 -21 q-11 4 -10 13',cd,3.2)
    + rco(-13,-10,6,10,cd,3) + rco(-5,-10,6,10,cd,3)
    + elo(0,-18,17,11,c)
    + el(0,-13,12,4.4,P.brInuHara)
    + ln('M-7 -24 q1 6 0 9','rgba(74,58,44,.16)',2) + ln('M0 -25 q1 6 0 9','rgba(74,58,44,.16)',2)
    + rco(4,-10,6,10,cd,3) + rco(12,-10,6,10,cd,3)
    + g(7,-31,1, bremenInuHead(opt.mood));
}
/* ネコの かお（0,0 が あたまの まんなか・みぎむき）。hikaru で よるに 目が ひかる */
function bremenNekoHead(mood,hikaru){
  const c = hikaru ? '#332f3c' : P.brNekoKe;
  const inn = hikaru ? '#3f3a49' : '#8a8792';
  let s = pto('M-9 -6 l-4 -13 l12 6 z',c) + pto('M8 -7 l4 -13 l-11 6 z',c)
    + pt('M-8 -8 l-2 -7 l6 3 z',inn) + pt('M7 -9 l2 -7 l-6 3 z',inn)
    + cio(0,0,11,c)
    + el(9,5,8,5.5, hikaru ? '#3f3a49' : P.brNekoHara)
    + pt('M13 2 l3 2 l-3 2.4 l-3 -2.4 z', hikaru ? '#6e5a5e' : '#e08a8a');
  if(hikaru){
    s += ci(-2,-3,6.5,'rgba(255,215,110,.28)') + ci(8,-4,6.5,'rgba(255,215,110,.28)')
      + ci(-2,-3,3.2,P.brNekoMe) + ci(8,-4,3.2,P.brNekoMe)
      + ln('M-2 -5.4 l0 4.8','#6e5320',1.6) + ln('M8 -6.4 l0 4.8','#6e5320',1.6);
    return s;
  }
  if(mood === 'niko'){
    s += ln('M-5 -4 q3 -5 6 0','#2c2620',2.4) + ln('M5 -5 q3 -5 6 0','#2c2620',2.4)
      + ln('M-4 -10 l7 1',P.shiraga,2) + ln('M6 -11 l7 1',P.shiraga,2);
  }else if(mood === 'shonbori'){
    s += ci(-2,-2,2.4,'#f2ce6a') + ci(8,-3,2.4,'#f2ce6a')
      + ln('M-6 -8 l7 3',P.shiraga,2) + ln('M5 -9 l7 2',P.shiraga,2)
      + ln('M-1 -2.6 l0 5','#2c2620',1.6) + ln('M9 -3.6 l0 5','#2c2620',1.6);
  }else{
    s += ci(-2,-3,3,'#f2ce6a') + ci(8,-4,3,'#f2ce6a')
      + ln('M-2 -6 l0 6','#2c2620',1.8) + ln('M8 -7 l0 6','#2c2620',1.8)
      + ln('M-5 -9 l7 1',P.shiraga,2) + ln('M6 -10 l7 1',P.shiraga,2);
  }
  s += ln('M9 8 q4 3 8 0', hikaru ? '#4a3f38' : '#7a4040',2);
  return s + ln('M5 3 l-8 -2','#d8d2c8',1.6) + ln('M16 2 l7 -2','#d8d2c8',1.6);
}
/* ネコ: はいぐろの ねこ。hikaruMe で くらやみに 目だけが ひかる すがた */
function bremenNekoChar(opt){
  opt = opt || {};
  const hikaru = !!opt.hikaruMe;
  const c = hikaru ? '#332f3c' : P.brNekoKe;
  const cd = hikaru ? '#28242f' : P.brNekoKeD;
  return el(2,2,22,5, hikaru ? 'rgba(0,0,0,.2)' : 'rgba(0,0,0,.12)')
    + ln('M-15 -22 q-14 -4 -12 -22',P.ink,7) + ln('M-15 -22 q-14 -4 -12 -22',c,4.5)
    + rco(-13,-13,7,13,cd,3) + rco(-5,-13,7,13,cd,3)
    + elo(0,-20,16,10,c)
    + el(0,-15,11,4.4, hikaru ? '#3f3a49' : P.brNekoHara)
    + rco(5,-13,7,13,cd,3) + rco(13,-13,7,13,cd,3)
    + g(18,-30,1, bremenNekoHead(opt.mood,hikaru));
}
/* オンドリ: あかちゃの はねと あかい とさか。naku で くびを 上げて 鳴く
   🔴 opt.wakai で しろい まつげを けす（じゅうにしの トリは としを とった すがたに しない） */
function ondoriChar(opt){
  opt = opt || {};
  const c = P.ondoriHa, cd = P.ondoriHaD;
  const atama = (mood) => {
    let s = cio(0,0,9,c)
      + pto('M-8 -8 q2 -8 5 -3 q3 -8 6 -2 q4 -7 6 1 q-8 4 -17 4 z',P.ondoriTosaka)
      + pto('M4 7 q5 8 0 11 q-5 -3 -4 -11 z',P.ondoriTosaka)
      + (opt.wakai ? '' : ln('M-7 -6 l7 2',P.shiraga,2));
    if(mood === 'naku'){
      s += pto('M8 -3 l14 -3 l-13 6 z',P.ondoriKuchi)
        + pto('M8 1 l13 6 l-13 1 z',P.ondoriKuchi)
        + ci(1,-3,2.4,'#333');
    }else if(mood === 'shonbori'){
      s += pto('M8 0 l13 3 l-13 4 z',P.ondoriKuchi) + ci(1,-1,2.2,'#333');
    }else{
      s += pto('M8 -1 l13 3 l-13 4 z',P.ondoriKuchi)
        + ci(1,-3,2.4,'#333') + ci(1.8,-3.8,.9,'#fff');
    }
    return s;
  };
  const naku = opt.naku || opt.mood === 'naku';
  return el(0,2,15,4,'rgba(0,0,0,.13)')
    + pto('M-12 -26 q-24 -8 -26 -32 q15 8 21 19 q-6 -20 4 -30 q7 15 7 30 z',P.ondoriO)
    + elo(0,-26,16,14,c)
    + pto('M-6 -26 q-13 6 -9 18 q13 1 15 -13 z',cd)
    + ln('M-4 -6 l0 8',P.ondoriKuchi,2.6) + ln('M4 -6 l0 8',P.ondoriKuchi,2.6)
    + ln('M-4 2 l-5 3',P.ondoriKuchi,2.2) + ln('M4 2 l5 3',P.ondoriKuchi,2.2)
    + (naku
        ? gr(10,-38,1,-24, pto('M-6 4 q4 -12 12 -14 l6 10 q-8 4 -10 14 z',c) + g(6,-14,1, atama('naku')))
        : pto('M4 -34 q6 -8 12 -10 l5 10 q-8 4 -10 12 z',c) + g(18,-46,1, atama(opt.mood)));
}
/* どろぼう: 3にんぐみ。こわがりの きやくで、こわい かおには しない
   te='age'（りょうてを 上げる）/'yubi'（かたてで さししめす）/'matchi'（マッチを もつ）・nige で かけだす */
function dorobouChar(c,opt){
  opt = opt || {};
  const cd = (c === P.doroB) ? P.doroBD : (c === P.doroC ? P.doroCD : P.doroAD);
  const mood = opt.mood || 'futsu';
  const ashi = opt.nige
    ? gr(-5,-16,1,-38, rco(-4,0,8,17,'#4f412f',3)) + gr(6,-17,1,42, rco(-4,0,8,17,'#4f412f',3))
    : rco(-9,-16,7,16,'#4f412f',3) + rco(2,-16,7,16,'#4f412f',3);
  let ude;
  if(opt.te === 'age' || opt.nige){
    ude = gr(-17,-52,1,-46, rco(-4,-2,8,24,c,4) + cio(0,24,4.6,P.skin))
      + gr(17,-52,1,46, rco(-4,-2,8,24,c,4) + cio(0,24,4.6,P.skin));
  }else if(opt.te === 'yubi'){
    ude = rco(-21,-53,8,22,c,4) + cio(-17,-30,4.6,P.skin)
      + gr(17,-52,1,58, rco(-4,-2,8,24,c,4) + cio(0,24,4.6,P.skin));
  }else{
    ude = rco(-21,-53,8,22,c,4) + rco(13,-53,8,22,c,4)
      + cio(-17,-30,4.6,P.skin) + cio(17,-30,4.6,P.skin);
  }
  let kao;
  if(mood === 'odoroki'){
    kao = el(-5.5,-70,3.6,4.6,'#fff') + el(5.5,-70,3.6,4.6,'#fff')
      + ci(-5.5,-69,2.4,'#333') + ci(5.5,-69,2.4,'#333')
      + ln('M-12 -77 l6 2','#5a4a3a',2.2) + ln('M12 -77 l-6 2','#5a4a3a',2.2)
      + elo(0,-61,4.4,3.6,'#8a4040');
  }else if(mood === 'kowagari'){
    kao = ci(-5.5,-69,2.4,'#333') + ci(5.5,-69,2.4,'#333')
      + ln('M-12 -75 l6 -3','#5a4a3a',2.2) + ln('M12 -75 l-6 -3','#5a4a3a',2.2)
      + ln('M-4 -61 q4 -4 8 0','#8a4040',2.2);
  }else if(mood === 'hanashi'){
    kao = ci(-5.5,-69,2.4,'#333') + ci(5.5,-69,2.4,'#333')
      + ln('M-12 -76 l6 1','#5a4a3a',2.2) + ln('M12 -76 l-6 1','#5a4a3a',2.2)
      + elo(0,-61,4,3.2,'#8a4040');
  }else{
    kao = ci(-5.5,-69,2.4,'#333') + ci(5.5,-69,2.4,'#333') + ci(-4.6,-70,.9,'#fff') + ci(6.4,-70,.9,'#fff')
      + ln('M-12 -76 l6 1','#5a4a3a',2.2) + ln('M12 -76 l-6 1','#5a4a3a',2.2)
      + ln('M-4 -62 q4 4 8 0','#333',2.2);
  }
  let s = el(0,2,15,4,'rgba(0,0,0,.12)')
    + ashi
    + rco(-14,-56,28,42,c,11)
    + rc(-14,-34,28,6,cd)
    + ude
    + cio(0,-72,16,P.skin)
    + pto('M-17 -74 q0 -19 17 -19 q17 0 17 19 q-17 -7 -34 0 z',cd)
    + pto('M-17 -76 q17 -6 34 0 l3 5 q-20 6 -40 0 z',c)
    + pt('M-11 -63 q11 6 22 0 q-9 9 -22 0 z','rgba(74,58,44,.22)')
    + kao;
  if(opt.te === 'matchi') s += matchiBi(24,-58,.9);
  if(opt.nige) return gr(0,0,1,-13, s);
  return s;
}
/* あるじ: とぐちの かげ・うしろすがた。🔴 かおは 出さない（ひょうかを 誰にも 言わせない ため） */
const shujinChar = () => el(0,2,16,5,'rgba(0,0,0,.16)')
  + pt('M-9 -16 L-2 -16 L-2 0 L-9 0 z','#2f2a26') + pt('M2 -16 L9 -16 L9 0 L2 0 z','#2f2a26')
  + pt('M-15 -56 q15 -6 30 0 l3 42 q-18 5 -36 0 z','#3a332c')
  + pt('M-20 -53 q-3 21 1 25 q6 -2 6 -25 z','#3a332c')
  + pt('M20 -53 q3 21 -1 25 q-6 -2 -6 -25 z','#3a332c')
  + ci(0,-72,16,'#332c26')
  + pt('M-17 -74 q0 -15 17 -15 q17 0 17 15 q-17 -5 -34 0 z','#2a241f')
  + ln('M-13 -84 q13 -6 26 0','rgba(255,255,255,.10)',2);

/* ---------- じゅうにしの はじまり用の 背景部品 ---------- */
/* ゆきの じめん。yoru で よるの いろに かえる */
const juYukiNo = (y,yoru) => rc(0,y,480,300 - y, yoru ? P.juYukiYoK : P.juYukiK)
  + el(240,y + 26,400,52, yoru ? P.juYukiYo : P.juYuki);
/* ちらつく ゆき。🔴 いちは きめうち（まいかい かわると 絵が おちつかない） */
const juYukiFuru = op => {
  const a = [[38,44,3.2],[112,86,2.4],[186,38,2.8],[262,104,2.2],[330,58,3],[404,96,2.6],
    [72,148,2.2],[228,168,2.6],[356,152,2.2],[442,42,2.4],[152,206,2],[300,214,2.2]];
  let s = '';
  for(const p of a) s += ci(p[0],p[1],p[2],'rgba(255,255,255,' + (op || .8) + ')');
  return s;
};
/* ゆきを かぶった まつ（うらしまの matsu に ゆきを のせる） */
const juMatsuYuki = (x,y,s) => matsu(x,y,s) + g(x,y,s,
    el(-20,-61,15,4.5,'#fff') + el(18,-67,14,4.5,'#fff')
  + el(-4,-78,18,5,'#fff') + el(3,-57,11,3.4,'#fff'));
/* うごきの 線（はしる・とびおりる ときに そえる） */
const juUgoki = (x,y,s,r,c) => gr(x,y,s,r || 0, ln('M0 0 l-28 0',c || 'rgba(74,58,44,.22)',3.4)
  + ln('M2 -10 l-20 0',c || 'rgba(74,58,44,.17)',2.8)
  + ln('M2 10 l-20 0',c || 'rgba(74,58,44,.17)',2.8));
/* たてふだ（おふれの こうさつ）。🔴 もじは かかない（すみの 行を 線で しめすだけ） */
const juFuda = (x,y,s) => {
  let moji = '';
  for(let i = 0; i < 5; i++) moji += ln('M' + (-30 + i * 12) + ' -66 l0 -' + (i % 2 ? 32 : 40),P.juSumi,2.4);
  return g(x,y,s, rco(-7,-58,14,58,P.woodD,3)
    + rco(-42,-120,84,66,P.juWashi,3)
    + moji
    + cio(30,-62,6,P.juShuin)
    + pto('M-50 -120 L50 -120 L40 -132 L-40 -132 z',P.woodD));
};
/* かどまつ（もんの わきの まつと たけ） */
const juKadomatsu = (x,y,s) => g(x,y,s,
    pto('M-10 -22 L-10 -50 L-3 -57 L-3 -22 z','#a9cf7e')
  + pto('M-1 -22 L-1 -64 L7 -72 L7 -22 z',P.juTake)
  + pto('M9 -22 L9 -42 L16 -49 L16 -22 z','#a9cf7e')
  + ln('M-3 -54 L-3 -26','#6e9a48',2) + ln('M7 -68 L7 -26','#6e9a48',2)
  + elo(-15,-32,10,7,P.juMatsu) + elo(18,-36,9,6,P.juMatsu) + elo(2,-27,12,7,P.juMatsuD)
  + rco(-16,-22,32,22,'#dcc78e',3)
  + ln('M-16 -15 L16 -15','#b8a068',2.4) + ln('M-16 -8 L16 -8','#b8a068',2.4));
/* ついじべい（もんの りょうわきに つづく かべ） */
const juHei = (x0,x1,y) => rc(x0,y - 40,x1 - x0,40,'#e2d6bc')
  + ln('M' + x0 + ' ' + (y - 22) + ' L' + x1 + ' ' + (y - 22),'#c2b394',2.6)
  + rc(x0,y - 49,x1 - x0,10,'#8a8f9a')
  + ln('M' + x0 + ' ' + (y - 39) + ' L' + x1 + ' ' + (y - 39),P.ink,2.5);
/* ごてんの もん（しらきの はしら・しゅの かもい・かわらの やね）
   o.aki=とびらを ひらく / o.oku=とびらの おくに おく 絵（かみさまの かげ など） */
const juMon = (x,y,s,o) => {
  o = o || {};
  const naka = o.aki
    ? rco(-31,-80,62,76,'#2f2a24',3) + (o.oku || '')
      + pto('M-31 -80 L-31 -4 L-53 -13 L-53 -71 z','#6e5138')
      + pto('M31 -80 L31 -4 L53 -13 L53 -71 z','#6e5138')
    : rco(-31,-80,62,76,'#7a5c34',3) + ln('M0 -80 L0 -4','#5f4426',2.6)
      + cio(-14,-42,3.6,P.gotenAka) + cio(14,-42,3.6,P.gotenAka);
  return g(x,y,s, naka
    + rco(-66,-90,22,90,P.shiraki,3) + rco(44,-90,22,90,P.shiraki,3)
    + rc(-60,-84,9,84,P.shirakiD) + rc(51,-84,9,84,P.shirakiD)
    + rco(-76,-107,152,18,P.gotenAka,3)
    + pto('M-94 -107 L-74 -131 L74 -131 L94 -107 z','#7c8698')
    + ln('M-78 -119 L78 -119','#67707f',3)
    + pto('M-17 -131 L17 -131 L11 -144 L-11 -144 z',P.gotenAkaD));
};
/* わふうの こや（ゆきの さとの いえ）。akari で しょうじに あかりが ともる */
const juKoya = (x,y,s,akari) => g(x,y,s, rco(-54,-58,108,58,'#e2d6ba',3)
  + rco(-38,-48,46,34, akari ? P.madoAkari : '#cfe6f0',3)
  + ln('M-15 -48 L-15 -14', akari ? P.madoAkariD : '#a9c4d4',2.4)
  + ln('M-38 -31 L8 -31', akari ? P.madoAkariD : '#a9c4d4',2.4)
  + rco(18,-42,26,42,'#7a5c34',3)
  + pto('M-70 -58 L-54 -84 L54 -84 L70 -58 z','#7c8698')
  + ln('M-56 -72 L56 -72','#67707f',3)
  + pt('M-70 -58 L-62 -70 q62 -9 124 0 L70 -58 z','rgba(255,255,255,.82)'));

/* ---------- じゅうにしの はじまり（どうぶつ） ----------
   🔴 12ひき＋ネコと 数が おおいので、よつあしの どうたい（からだ・4本の あし・しっぽ）は
      juKarada に まとめ、あたまと もようだけ さしかえる。目もとは juMe で 全ぴき そろえる
   🔴 としを とった すがたには しない（ブレーメンの 4ひきとの ちがい）。がっき・ころもは もたせない
   🔴 サル=saruChar / イヌ=dogChar({kubiwa:false}) / トリ=ondoriChar({wakai:1}) を つかいまわす */
/* どうぶつの 目もと（あたまの ざひょうけい）。mood: normal / niko / odoroki */
const juMe = (x,y,mood,c) => {
  const ink = c || '#2c2620';
  if(mood === 'odoroki') return el(x,y - 1,3.4,4.4,'#fff') + ci(x,y,2.4,ink);
  if(mood === 'niko') return ln('M' + (x - 4) + ' ' + (y + 1) + ' q4 -6 8 0',ink,2.6);
  return ci(x,y,2.7,ink) + ci(x + .9,y - 1,1,'#fff');
};
/* ひげ（はなさきの よこから 2本）。🔴 ながいと ぼうを くわえて 見えるので みじかく うすく */
const juHige = (x,y) => ln('M' + x + ' ' + y + ' l8 -2.5','#a89e92',1.6)
  + ln('M' + x + ' ' + (y + 3) + ' l8 2.5','#a89e92',1.6);
/* よつあしの どうたい。c=けなみ / cd=あしと こい ところ / hara=おなか
   w,h=からだの はんけい / y=からだの 中心の たかさ / aw=あしの ふとさ
   head=あたまの 絵・hx,hy=あたまの いち / kake=はしる かっこう / mofu=もこもこの け */
function juKarada(o){
  const c = o.c, cd = o.cd || o.c, w = o.w || 18, h = o.h || 11;
  const y = o.y == null ? -20 : o.y, aw = o.aw || 7;
  const top = y + h - 4, ah = -top, k = o.kake ? 1 : 0;
  const ashi = (x,r) => r ? gr(x,top,1,r, rco(-aw / 2,0,aw,ah,cd,3)) : rco(x - aw / 2,top,aw,ah,cd,3);
  const dou = o.mofu
    ? elo(0,y,w,h,c) + cio(-w * .58,y + 1,h * .62,c) + cio(-w * .22,y - h * .44,h * .66,c)
      + cio(w * .2,y - h * .38,h * .66,c) + cio(w * .56,y + 1,h * .6,c)
    : elo(0,y,w,h,c) + el(1,y + h * .38,w * .66,h * .44,o.hara || c);
  return (o.noKage ? '' : el(2,2,w + 5,5, k ? 'rgba(0,0,0,.09)' : 'rgba(0,0,0,.13)'))
    + (o.shippo || '')
    + ashi(-w * .6,k ? 40 : 0) + ashi(-w * .28,k ? 22 : 0)
    + dou
    + (o.moyou || '')
    + ashi(w * .28,k ? -22 : 0) + ashi(w * .6,k ? -40 : 0)
    + g(o.hx,o.hy,o.hs || 1,o.head);
}
/* ネズミ: かぶの nezumiChar より 頭身を 上げた 立ちすがた
   mood: normal / odoroki / damaru（なにも いわない）。noKage で かげを けす（ウシの せなかに のせる とき） */
function jnezumiChar(opt){
  opt = opt || {};
  const c = P.juNezu, cd = P.juNezuD, mood = opt.mood || 'normal';
  let kao;
  if(mood === 'odoroki'){
    kao = el(6,-29,3.2,4,'#fff') + ci(6,-28,2.3,'#2c2620') + elo(12,-19,3.2,2.8,'#8a4040');
  }else if(mood === 'damaru'){
    kao = ln('M3 -28 q3.5 -4 7 0','#2c2620',2.3) + ln('M9 -20 l6 1','#8a7a68',2);
  }else{
    kao = ci(6,-28,2.5,'#2c2620') + ci(6.9,-29,.9,'#fff')
      + ci(-1,-22,2.6,'rgba(255,140,140,.4)') + ln('M9 -21 q3 3 6 1','#8a7a68',1.9);
  }
  return (opt.noKage ? '' : el(0,2,12,4,'rgba(0,0,0,.12)'))
    + ln('M-9 -13 q-20 5 -15 -13',cd,3)
    + rco(-7,-5,6,5,cd,2) + rco(1,-5,6,5,cd,2)
    + elo(0,-14,11,10,c)
    + el(1,-11,7,6,P.juNezuHara)
    + cio(-4,-34,5.6,c) + cio(9,-33,5.6,c)
    + ci(-4,-34,3.2,P.juNezuMimi) + ci(9,-33,3.2,P.juNezuMimi)
    + cio(2,-26,10,c)
    + pt('M2 -36 q-5 9 -3 17 q4 3 7 0 q2 -9 -4 -17 z',P.juNezuHara)
    + el(11,-21,5,4,P.juNezuHara)
    + ci(14,-22,1.8,'#e08a8a')
    + kao
    + juHige(12,-18);
}
/* ネコの かお（0,0 が あたまの まんなか・みぎむき）。🔴 ちゃとらの わかい ネコ */
function jnekoHead(mood){
  const c = P.juNeko, sh = P.juNekoShima;
  let s = pto('M-11 -7 l-4 -14 l13 7 z',c) + pto('M6 -9 l4 -14 l-12 6 z',c)
    + pt('M-9 -9 l-2 -8 l7 4 z',P.juUsagiMimi) + pt('M6 -11 l2 -7 l-6 3 z',P.juUsagiMimi)
    + cio(0,0,12,c)
    + ln('M-8 -8 q4 -4 9 -2',sh,2.4) + ln('M-3 -12 q5 -3 9 -1',sh,2.2)
    + elo(8,6,8,5.5,P.juNekoHara)
    + ln('M-9 3 q3 4 7 3',sh,2.2)
    + pt('M10 2 l3 2 l-3 2.4 l-3 -2.4 z','#e08a8a');
  if(mood === 'odoroki'){
    s += el(-2,-4,3.6,4.6,'#fff') + el(8,-5,3.6,4.6,'#fff')
      + ci(-2,-3,2.6,'#3f7a52') + ci(8,-4,2.6,'#3f7a52');
  }else if(mood === 'kao'){
    s += ln('M-5 -4 q3 4 6 0','#2c2620',2.4) + ln('M5 -5 q3 4 6 0','#2c2620',2.4);
  }else{
    s += el(-2,-3,3.4,4,'#8fc49a') + el(8,-4,3.4,4,'#8fc49a')
      + ln('M-2 -6 l0 6','#2c2620',1.9) + ln('M8 -7 l0 6','#2c2620',1.9)
      + ci(-3,-5,1,'#fff') + ci(7,-6,1,'#fff');
  }
  /* 🔴 くちは くちもとの なかに おく（そとに 出すと ぼうを くわえて 見える）
     🔴 kao の ときは みぎの ひげを 出さない（まえあしと かさなって ぼうに 見える） */
  return s + ln('M5 8 q4 3 8 -1','#8a4040',2)
    + ln('M4 4 l-8 -2','#d8d2c8',1.6)
    + (mood === 'kao' ? '' : ln('M14 3 l7 -3','#d8d2c8',1.6));
}
/* ネコ: わかい ちゃとら。🔴 かぶの nekoChar・ブレーメンの bremenNekoChar とは べつ
   mood: normal / odoroki / kao（まえあしで かおを あらう）。maru で ひなたに まるくなる */
function jnekoChar(opt){
  opt = opt || {};
  const c = P.juNeko, sh = P.juNekoShima, mood = opt.mood || 'normal';
  if(opt.maru){
    return el(2,3,25,6,'rgba(0,0,0,.12)')
      + ln('M-19 -8 q-9 -13 6 -15',P.ink,7) + ln('M-19 -8 q-9 -13 6 -15',c,4.5)
      + elo(0,-13,23,13,c)
      + el(2,-9,15,7,P.juNekoHara)
      + ln('M-13 -20 q6 -3 12 -1',sh,2.6) + ln('M-3 -22 q6 -3 12 -1',sh,2.6)
      + g(15,-18,.86, pto('M-11 -7 l-4 -14 l13 7 z',c) + pto('M6 -9 l4 -14 l-12 6 z',c)
          + cio(0,0,12,c)
          + elo(7,6,8,5.5,P.juNekoHara)
          + ln('M-5 -4 q3 4 6 0','#2c2620',2.4) + ln('M5 -5 q3 4 6 0','#2c2620',2.4)
          + pt('M9 2 l3 2 l-3 2.4 l-3 -2.4 z','#e08a8a')
          + ln('M4 8 q4 3 8 -1','#8a4040',2));
  }
  let s = el(2,2,17,5,'rgba(0,0,0,.12)')
    + ln('M-13 -12 q-19 -6 -14 -28',P.ink,7) + ln('M-13 -12 q-19 -6 -14 -28',c,4.5)
    + elo(0,-17,15,16,c)
    + el(2,-13,9,10,P.juNekoHara)
    + ln('M-10 -26 q5 -3 10 -1',sh,2.6) + ln('M-10 -18 q5 -3 10 -1',sh,2.6)
    + rco(-2,-6,7,6,c,2) + rco(6,-6,7,6,c,2)
    + g(5,-37,1, jnekoHead(mood));
  if(mood === 'kao') s += ln('M13 -25 q2 5 2 8',c,4.6) + elo(15,-30,5,4.4,c);
  return s;
}
/* ウシ: くろちゃの ふとった からだ・みじかい つの */
function ushiHead(mood){
  const c = P.juUshi, cd = P.juUshiD;
  /* 🔴 つのは みじかく ずんぐり（ながく すると みみに 見える）・みみは よこに はる */
  return elo(-14,-5,7,4.6,cd) + elo(12,-8,6.5,4.2,cd)
    + pto('M-8 -10 q-6 -8 -1 -10 q4 2 3 10 z',P.juTsuno)
    + pto('M6 -11 q5 -8 10 -9 q1 4 -4 10 z',P.juTsuno)
    + cio(0,0,12,c)
    + pto('M4 -2 q15 1 16 8 q-2 9 -16 7 z',c)
    + elo(13,8,8.5,5.6,P.juUshiHara)
    + ci(10,7,1.7,'#8a7a68') + ci(17,7,1.7,'#8a7a68')
    + ln('M11 13 q5 3 9 -1','#8a7a68',2.2)
    + juMe(3,-4,mood);
}
/* ウシ。nezumi で せなかに ネズミを のせる（🔴 あたまでは なく せなか） */
function ushiChar(opt){
  opt = opt || {};
  /* 🔴 hara は けなみと おなじ いろに して、まだらは moyou で 3つだけ おく（ぼやけないように） */
  let s = juKarada({c:P.juUshi, cd:P.juUshiD, hara:P.juUshi,
    w:27, h:15, y:-36, aw:8.5,
    shippo: ln('M-25 -42 q-16 12 -14 27',P.juUshiD,3.6)
      + pto('M-40 -16 q-6 9 -3 16 q9 1 9 -8 q0 -7 -6 -8 z',P.juUshiD),
    moyou: el(-9,-43,10.5,6.5,P.juUshiHara) + el(9,-46,7,4.2,P.juUshiHara)
      + el(0,-27,13,5,P.juUshiHara),
    hx:33, hy:-56, head: ushiHead(opt.mood)});
  if(opt.nezumi) s += g(-3,-51,.78, jnezumiChar({mood: opt.nezumiMood || 'normal', noKage:1}));
  return s;
}
/* トラ: だいだいに くろの しま・しろい くちもと */
function toraHead(mood){
  const c = P.juTora, sh = P.juShima;
  return cio(-11,-8,5.5,c) + cio(9,-11,5,c)
    + ci(-11,-8,2.8,P.juUsagiMimi) + ci(9,-11,2.6,P.juUsagiMimi)
    + cio(0,0,12.5,c)
    + ln('M-8 -10 l3 7',sh,2.6) + ln('M-1 -12 l1 7',sh,2.6) + ln('M6 -11 l-1 7',sh,2.4)
    + elo(10,6,8.5,6,P.juToraHara)
    + ln('M-10 2 l-4 -2',sh,2.4) + ln('M-10 6 l-4 2',sh,2.4)
    + pt('M12 2 l3.2 2.2 l-3.2 2.4 l-3.2 -2.4 z','#e08a8a')
    + ln('M13 8 q4 3 8 -1','#8a4040',2.2)
    + juMe(3,-4,mood)
    + juHige(15,4);
}
function toraChar(opt){
  opt = opt || {};
  return juKarada({c:P.juTora, cd:P.juToraD, hara:P.juToraHara,
    w:24, h:13, y:-28, aw:7.5, kake:opt.kake,
    shippo: ln('M-22 -32 q-21 3 -18 -13',P.ink,7) + ln('M-22 -32 q-21 3 -18 -13',P.juTora,4.5),
    moyou: ln('M-14 -38 l-2 9',P.juShima,3) + ln('M-6 -40 l-2 10',P.juShima,3)
      + ln('M2 -40 l-1 10',P.juShima,3) + ln('M10 -38 l-1 9',P.juShima,3),
    hx:28, hy:-44, head: toraHead(opt.mood)});
}
/* ウサギ: ながい みみ。hane で とびはねる かっこう */
function usagiHead(mood){
  const c = P.juUsagi;
  return cio(0,0,10.5,c)
    + elo(7,4,7,5,'#fff')
    + pt('M9 1 l2.6 1.8 l-2.6 2 l-2.6 -2 z','#e08a8a')
    + ln('M9 5 l0 3','#c9b8a8',1.8)
    + juMe(3,-3,mood,'#5a4a3a')
    + juHige(12,3);
}
function usagiChar(opt){
  opt = opt || {};
  const c = P.juUsagi, cd = P.juUsagiD;
  const mimi = (x,y,r) => gr(x,y,1,r, elo(0,-16,5.5,17,c) + el(0,-16,2.8,12,P.juUsagiMimi));
  if(opt.hane){
    return el(4,2,17,4,'rgba(0,0,0,.1)')
      + cio(-15,-17,5.5,c)
      + gr(-6,-16,1,-22, elo(0,0,15,10,c) + el(-3,1,9,5,'#fff'))
      + gr(-11,-8,1,44, rco(-3.4,0,7,10,cd,3)) + gr(-4,-7,1,28, rco(-3.4,0,7,9,cd,3))
      + gr(8,-12,1,-32, rco(-3.2,0,6.4,10,cd,3))
      + mimi(1,-28,-42) + mimi(8,-31,-24)
      + g(13,-28,1, usagiHead(opt.mood));
  }
  return el(2,2,14,4,'rgba(0,0,0,.12)')
    + cio(-13,-9,5.5,c)
    + elo(0,-14,13,14,c)
    + el(2,-11,8,8,'#fff')
    + pto('M-6 -6 q11 -5 18 0 q0 6 -9 6 q-9 0 -9 -6 z',cd)
    + mimi(-1,-27,-9) + mimi(9,-28,13)
    + g(7,-31,1, usagiHead(opt.mood));
}
/* タツ: とうようの りゅう。くもに のって そらを ゆく。🔴 つばさは つけない */
function tatsuHead(mood){
  const c = P.juTatsu, cd = P.juTatsuD;
  return pto('M-7 -9 q-6 -11 1 -14 q3 6 4 12 z',P.juTsuno)
    + pto('M3 -11 q4 -11 11 -12 q-3 7 -6 13 z',P.juTsuno)
    + ln('M-9 -3 q-12 3 -17 11',P.juTatsuTate,4.5)
    + ln('M-10 3 q-13 4 -17 12',P.juTatsuTate,4)
    + cio(0,0,11,c)
    + pto('M4 -3 q17 0 18 7 q-2 9 -18 6 z',c)
    + elo(16,6,7,4.6,P.juTatsuHara)
    + ci(19,3,1.7,'#2c2620')
    + ln('M21 8 q11 5 15 14',P.juTatsuHara,2.4) + ln('M20 10 q7 9 6 18',P.juTatsuHara,2.2)
    + ln('M-6 -8 q6 -3 10 0',cd,2.4)
    + juMe(3,-4,mood);
}
function tatsuChar(opt){
  opt = opt || {};
  const c = P.juTatsu, cd = P.juTatsuD;
  const d = 'M-64 26 q-30 -14 -8 -34 q20 -18 42 -26 q22 -8 26 -26';
  const ashi = (x,y,r) => gr(x,y,1,r, ln('M0 0 q7 8 5 15',cd,5.4)
    + ln('M3 13 l-6 5',cd,2.4) + ln('M5 14 l0 6',cd,2.4) + ln('M7 13 l6 4',cd,2.4));
  return (opt.kumo === false ? '' : cloud(-52,40,1.05) + cloud(22,-4,.72))
    + ln(d,P.ink,17) + ln(d,c,13)
    + ln('M-78 14 q-6 -12 4 -20',P.juTatsuHara,4.5)
    + ln('M-46 -20 q14 -8 18 -18',P.juTatsuHara,4)
    + ln('M-88 8 l-9 -2',cd,2.8) + ln('M-78 -4 l-8 -6',cd,2.8)
    + ln('M-58 -20 l-4 -9',cd,2.8) + ln('M-34 -34 l-2 -9',cd,2.8)
    + ln('M-16 -48 l-3 -9',cd,2.8)
    + ashi(-62,18,16) + ashi(-22,-30,-8)
    + pto('M-64 26 q-18 6 -24 -4 q14 -3 16 -13 q7 8 8 17 z',P.juTatsuD)
    + g(10,-64,1, tatsuHead(opt.mood));
}
/* ヘビ: とぐろを まいた すがた */
function hebiHead(mood){
  const c = P.juHebi;
  return elo(0,0,11,7.5,c)
    + el(-2,2,7,4,P.juHebiHara)
    + ln('M-7 -4 q7 -4 12 0',P.juHebiD,2.4)
    + ln('M10 2 l9 0','#d94f5a',2) + ln('M19 2 l6 -3','#d94f5a',1.8) + ln('M19 2 l6 3','#d94f5a',1.8)
    + juMe(3,-2,mood);
}
function hebiChar(opt){
  opt = opt || {};
  const c = P.juHebi, cd = P.juHebiD;
  return el(2,3,26,6,'rgba(0,0,0,.12)')
    + ln('M-20 -6 q-15 1 -17 8',c,6)
    + elo(0,-7,25,9,c) + el(0,-5,17,5,P.juHebiHara)
    + ln('M-16 -12 l-6 -3',cd,2.4) + ln('M-2 -14 l-2 -6',cd,2.4) + ln('M13 -12 l4 -5',cd,2.4)
    + elo(-1,-17,18,7.5,c) + el(-1,-15,12,4,P.juHebiHara)
    + ln('M-12 -22 l-5 -4',cd,2.2) + ln('M2 -23 l0 -6',cd,2.2)
    + elo(-3,-26,11,6,c) + el(-3,-24,7,3,P.juHebiHara)
    + pto('M2 -30 q10 -3 13 -11 l9 5 q-4 12 -15 14 z',c)
    + g(20,-44,1, hebiHead(opt.mood));
}
/* ウマ: robaChar の からだから 派生（耳は みじかく・たてがみは ながい） */
function umaHead(mood){
  const c = P.juUma, t = P.juUmaTate;
  return pto('M-9 -11 q-3 -13 3 -15 q5 6 2 15 z',c)
    + pto('M2 -13 q3 -13 10 -13 q1 7 -4 15 z',c)
    + cio(0,0,12,c)
    + pto('M4 -2 q19 2 21 10 q-2 9 -21 6 z',c)
    + elo(19,10,8,5,P.juUmaHara)
    + ci(17,9,1.6,'#4a3a2c') + ci(23,10,1.6,'#4a3a2c')
    + ln('M18 15 q5 3 9 -1','#8a7a68',2.2)
    + ln('M-8 -12 q9 -4 14 2',t,5.4)
    + ln('M-11 -5 q-9 4 -12 12',t,5)
    + juMe(4,-4,mood);
}
function umaChar(opt){
  opt = opt || {};
  return juKarada({c:P.juUma, cd:P.juUmaD, hara:P.juUmaHara,
    w:26, h:14, y:-34, aw:7.5, kake:opt.kake,
    shippo: ln('M-24 -42 q-19 13 -17 29',P.juUmaTate,7.5),
    moyou: ln('M4 -46 q9 -6 15 -8',P.juUmaTate,5) + ln('M13 -48 q8 -5 12 -8',P.juUmaTate,4.5),
    hx:32, hy:-56, head: umaHead(opt.mood)});
}
/* ヒツジ: もこもこの け（juKarada の mofu）・こげちゃの かお */
function hitsujiHead(mood){
  const c = P.juHitsujiKao;
  return elo(-10,-2,6,4.4,c) + elo(9,-6,5.5,4,c)
    + pto('M-9 -8 q-10 -6 -6 -12 q8 1 8 11 z',P.juTsuno)
    + cio(0,0,10.5,c)
    + pto('M3 0 q12 1 13 7 q-2 8 -13 6 z',c)
    + elo(11,7,6.5,4.4,'#efe6d6')
    + ci(9,6,1.5,'#8a7a68') + ci(14,6,1.5,'#8a7a68')
    + pt('M-11 -9 q11 -8 22 -1 q-11 -3 -22 1 z',P.juHitsuji)
    + juMe(2,-3,mood);
}
function hitsujiChar(opt){
  opt = opt || {};
  return juKarada({c:P.juHitsuji, cd:P.juHitsujiKao, mofu:1,
    w:21, h:14, y:-30, aw:6.5,
    shippo: cio(-20,-32,5,P.juHitsuji),
    hx:26, hy:-42, head: hitsujiHead(opt.mood)});
}
/* イノシシ: butaChar の たいけいから 派生（こげちゃ・きば・せなかの しま） */
function inoHead(mood){
  const c = P.juIno, cd = P.juInoD;
  return pto('M-9 -10 q-4 -11 2 -13 q5 5 2 13 z',cd)
    + pto('M3 -12 q4 -11 10 -11 q1 6 -4 13 z',cd)
    + cio(0,0,11.5,c)
    + ln('M-6 -12 l-1 -8',cd,2.6) + ln('M0 -13 l1 -8',cd,2.6) + ln('M6 -12 l3 -7',cd,2.6)
    + pto('M4 -3 q17 1 18 8 q-2 8 -18 6 z',c)
    + elo(19,6,6.5,5.5,P.juInoHara)
    + ci(17,5,1.6,'#4a3a2c') + ci(22,6,1.6,'#4a3a2c')
    + pto('M12 8 q-2 10 -6 11 q-3 -8 1 -12 z',P.juInoKiba)
    + juMe(3,-4,mood);
}
function inoshishiChar(opt){
  opt = opt || {};
  return juKarada({c:P.juIno, cd:P.juInoD, hara:P.juInoHara,
    w:24, h:14, y:-26, aw:7, kake:opt.kake,
    shippo: ln('M-22 -30 q-10 4 -8 11',P.juInoD,3),
    moyou: ln('M-14 -38 l-3 -8',P.juInoD,2.6) + ln('M-6 -40 l-2 -8',P.juInoD,2.6)
      + ln('M2 -40 l-1 -8',P.juInoD,2.6) + ln('M10 -38 l1 -8',P.juInoD,2.6)
      + ln('M-16 -32 l10 -1',P.juInoHara,2.4) + ln('M-4 -35 l11 -1',P.juInoHara,2.4),
    hx:27, hy:-36, head: inoHead(opt.mood)});
}
/* かみさま: ごてんの おくの ぎゃっこうの かげ
   🔴 かおは 出さない（ひょうかする 人を 絵に しない。ブレーメンの shujinChar と おなじ かんがえ方） */
const kamisamaChar = () => el(0,3,22,6,'rgba(0,0,0,.18)')
  + pt('M-30 -100 q30 -12 60 0 l12 100 q-42 12 -84 0 z','#3a332c')
  + pt('M-42 -92 q-10 38 -4 52 q12 -2 14 -50 z','#3a332c')
  + pt('M42 -92 q10 38 4 52 q-12 -2 -14 -50 z','#3a332c')
  + ln('M-24 -60 q24 8 48 0','#2a241f',3)
  + ci(0,-118,18,'#332c26')
  + pt('M-19 -120 q0 -17 19 -17 q19 0 19 17 q-19 -6 -38 0 z','#2a241f')
  + ln('M-15 -130 q15 -6 30 0','rgba(255,255,255,.10)',2)
  + ln('M-28 -96 q28 -10 56 0','rgba(255,255,255,.08)',2.4);

/* ---------- つるの おんがえし用の 背景部品 ----------
   🔴 ゆきの じめん juYukiNo・ちらつく ゆき juYukiFuru・わふうの こや juKoya は
      じゅうにしの ものを そのまま つかいまわす（おなじ ゆきの さとなので ふやさない）
   🔴 はねを ぬく どうさ・きず・ち・やせた からだは どの 部品にも かかない */
/* ゆきの まつ。juMatsuYuki より ゆきを あつく のせ、yoru で よるの いろに する */
const matsuYuki = (x,y,s,yoru) => {
  const c = yoru ? P.juYukiYo : '#fff';
  return matsu(x,y,s) + g(x,y,s, el(-20,-61,17,5.5,c) + el(18,-67,16,5,c)
    + el(-4,-79,20,6,c) + el(3,-57,12,4,c) + el(-14,-46,10,3.4,c));
};
/* うめの き（はるの にわ）。えだは くろく・はなは ちいさく ちらす */
const umeKi = (x,y,s) => g(x,y,s, ln('M0 0 q-4 -26 2 -44',P.tsUmeEda,9)
  + ln('M0 -30 q-16 -10 -30 -30',P.tsUmeEda,6) + ln('M1 -38 q16 -8 28 -26',P.tsUmeEda,5.5)
  + ln('M2 -50 q-8 -12 -6 -24',P.tsUmeEda,5)
  + ln('M-22 -50 q-10 -8 -12 -18',P.tsUmeEda,3.4) + ln('M22 -56 q10 -8 13 -17',P.tsUmeEda,3.2)
  + ci(-32,-62,5.5,P.tsUme) + ci(-20,-72,5,P.tsUme) + ci(-6,-78,5.5,P.tsUme)
  + ci(8,-74,5,P.tsUme) + ci(24,-70,5.5,P.tsUme) + ci(34,-58,5,P.tsUme)
  + ci(-28,-48,4.4,P.tsUmeD) + ci(2,-60,4.4,P.tsUmeD) + ci(18,-84,4.4,P.tsUme)
  + ci(-32,-62,1.8,'#fff') + ci(-6,-78,1.8,'#fff') + ci(24,-70,1.8,'#fff'));
/* わらぶきの いえ（かやぶきの きゅうな やねと つちかべ）
   🔴 きそんの house / whouse / kikoriIe は ぜんぶ おうふうなので あたらしく つくる
   akari で しょうじに あかり・aki で とぐちを あける・yuki で やねに ゆき */
const kayabukiIe = (x,y,s,o) => {
  o = o || {};
  const sho = o.akari ? P.tsWashiYo : P.tsWashi;
  const shoK = o.akari ? '#d9ab52' : P.tsWashiK;
  return g(x,y,s, rco(-78,-66,156,66,P.tsKabe,3)
    + ln('M-78 -30 L78 -30',P.tsKabeD,2.4)
    + rco(-62,-56,58,38,sho,3)
    + ln('M-33 -56 L-33 -18',shoK,2.4) + ln('M-62 -37 L-4 -37',shoK,2.4)
    + (o.aki
        ? rco(14,-58,48,58,'#4a4038',3)
          + (o.akari ? pt('M16 -56 L60 -56 L60 -2 L16 -2 z','rgba(255,214,130,.30)') : '')
        : rco(14,-58,48,58,'#7a5c34',3) + ln('M38 -58 L38 0','#5f4426',2.6))
    + pto('M-108 -64 Q-98 -122 -36 -136 L36 -136 Q98 -122 108 -64 z',P.tsKaya)
    + ln('M-92 -86 Q0 -114 92 -86',P.tsKayaD,3)
    + ln('M-101 -72 Q0 -104 101 -72',P.tsKayaD,2.6)
    /* 🔴 ゆきは やねの 上のほうだけ。ぜんぶ しろく すると かやぶきに 見えなく なる */
    + (o.yuki ? pt('M-96 -92 Q-88 -124 -36 -134 L36 -134 Q88 -124 96 -92 q-96 -14 -192 0 z','rgba(255,255,255,.9)') : '')
    + rco(-35,-145,70,12,P.tsKayaD,4)
    + (o.yuki ? pt('M-35 -145 L35 -145 L35 -138 q-35 -6 -70 0 z','#fff') : ''));
};
/* いろり（ろぶちの 中の はいと すみ）。ほのおは honoo・ゆげは yuge を つかう
   jizai で じざいかぎと なべを つるす */
const irori = (x,y,s,o) => {
  o = o || {};
  return g(x,y,s, ci(0,-16,58,'rgba(255,196,110,.13)') + ci(0,-14,34,'rgba(255,208,130,.16)')
    + (o.jizai ? ln('M0 -180 L0 -72',P.tsRoD,3.4) + rco(-9,-79,18,7,P.tsRo,2) : '')
    + rco(-54,-20,108,26,P.tsRo,3)
    + ln('M-54 -8 L54 -8',P.tsRoD,2.4)
    + rc(-44,-16,88,16,P.tsHai)
    + el(0,-14,33,7,'#b8ad9c')
    + ln('M-22 -12 l26 -5',P.tsSumi,6) + ln('M-18 -6 l30 4',P.tsSumi,5.5)
    + honoo(-16,-10,.5) + honoo(2,-8,.72) + honoo(18,-12,.5)
    + (o.jizai ? ooNabe(0,-44,.6) : '')
    + yuge(0,-56,.5,.24));
};
/* はたおりき（たかばた）。🔴 かぶの kabu_hata は はたけの ばめんなので なまえを わける
   おりての いちは ひだり（みぎむきに すわる）。nuno で おりあがった ぬの・kake で おりかけ
   kage に いろを わたすと ぬりつぶしの シルエットに なる（しょうじごしの ばめん用） */
const hataori = (x,y,s,o) => {
  o = o || {};
  const kg = o.kage;
  const c = kg || P.tsHata, cd = kg || P.tsHataD, ito = kg || P.tsIto;
  const R = kg ? rc : rco, T = kg ? pt : pto;
  /* たていと。かげの ときは 1まいの おびに する（ほそい 線を かさねると つぶれて 見える）
     あかるい へやでは うすい したじきを しいて 白い いとが 見えるように する */
  let ta = '';
  if(kg) ta = pt('M-34 -42 L34 -66 L34 -78 L-34 -54 z',ito);
  else{
    ta = pt('M-34 -42 L34 -66 L34 -79 L-34 -55 z','rgba(122,92,52,.16)');
    for(let i = 0; i < 7; i++) ta += ln('M-34 ' + (-43 - i * 1.9) + ' L34 ' + (-67 - i * 1.9),ito,2);
  }
  return g(x,y,s, R(-50,-94,12,94,c,3) + R(38,-94,12,94,c,3)
    + R(-58,-105,116,12,cd,3)
    + R(-50,-26,100,9,cd,2)
    + R(32,-78,18,18,cd,9)
    + ln('M-8 -93 L-8 -80',cd,2.4) + ln('M8 -93 L8 -80',cd,2.4)
    + R(-14,-82,28,11,cd,2)
    + ta
    + R(-50,-52,18,18,cd,9)
    + R(-20,-76,9,32,c,2)
    + ((o.nuno || o.kake) ? T('M-42 -52 q-6 20 -2 38 l16 1 q-4 -18 4 -38 z',kg || P.tsNuno) : ''));
};
/* しょうじごしの かげ。x,y=しょうじの ひだり上・w,h=おおきさ
   akari で うちがわの あかり・usui で かげを うすく・kage で かげの かたち
   （'hata'=すわって はたに むかう 人 / 'tsuru'=つるが はたに むかう）・ks で かげの おおきさ
   🔴 はねを ぬく かげは どちらでも つくらない（はたに むかう すがただけ）
   🔴 さんは かげの 上に かさねる（しょうじの むこうがわだと わかるように する） */
function shojiKage(x,y,w,h,o){
  o = o || {};
  const sho = o.akari ? P.tsWashiYo : P.tsWashi;
  const ki = P.beam, ks = o.ks || 1;
  const cx = x + w / 2 + (o.kx || 0), yb = y + h;
  const kc = o.usui ? 'rgba(58,68,92,.40)' : 'rgba(58,68,92,.60)';
  let s = rco(x,y,w,h,sho,3);
  /* 🔴 あかりの まるみは しょうじの 中に おさめる（はみ出すと はしらの そとに にじむ） */
  if(o.akari){
    s += el(x + w / 2,y + h * .62,w * .40,h * .34,'rgba(255,226,158,.42)')
      + el(x + w / 2,y + h * .70,w * .25,h * .22,'rgba(255,240,196,.40)');
  }
  const ky = yb - h * .05;
  if(o.kage === 'tsuru'){
    /* 🔴 くびは 立てたまま はたの ほうへ。うつむかせると 「ぬいて いる」ように 見えて しまう */
    s += g(cx - 48 * ks,ky,ks * .92,tsuruChar({pose:'kage',kage:kc}))
      + hataori(cx + 34 * ks,ky,ks * .92,{kage:kc,kake:1});
  }else if(o.kage === 'hata'){
    s += g(cx - 50 * ks,ky,ks * .92,tsHitoKage(kc))
      + hataori(cx + 32 * ks,ky,ks * .92,{kage:kc,kake:1});
  }
  for(let i = 1; i < 4; i++) s += ln('M' + (x + w * i / 4) + ' ' + y + ' L' + (x + w * i / 4) + ' ' + yb,ki,2.6);
  for(let i = 1; i < 5; i++) s += ln('M' + x + ' ' + (y + h * i / 5) + ' L' + (x + w) + ' ' + (y + h * i / 5),ki,2.4);
  return s + ln('M' + x + ' ' + y + ' L' + (x + w) + ' ' + y + ' L' + (x + w) + ' ' + yb
    + ' L' + x + ' ' + yb + ' z',ki,3.4);
}
/* わな（ゆきの 上の くくりわな）。hazusu で わが ゆるんで はずれた ところ
   🔴 きず・ち・もがく すがたは かかない。くいと なわだけ */
const wana = (x,y,s,o) => {
  o = o || {};
  return g(x,y,s, gr(-42,2,1,-16, rco(-4.5,-30,9,30,P.woodD,2))
    + ln('M-40 -16 q17 13 23 13',P.tsNawaD,3.4)
    + (o.hazusu
        ? ln('M-20 4 q23 -20 41 1 q-21 9 -41 -1',P.tsNawa,4)
        : ln('M-21 0 q21 -15 42 0 q-21 15 -42 0',P.tsNawa,4.2))
    + ci(-21,0,2.8,P.tsNawaD) + ci(21,0,2.8,P.tsNawaD));
};
/* たんもの（まいた ぬの）。c で いろ・tsumi で 2ほん かさねる・hiraku で はしを すこし ひろげる */
const tanmono = (x,y,s,o) => {
  o = o || {};
  const c = o.c || P.tsNuno, ck = o.ck || P.tsNunoK;
  const maki = dy => rco(-42,dy - 18,84,18,c,4)
    + ln('M-42 ' + (dy - 9) + ' L36 ' + (dy - 9),ck,2.2)
    + elo(42,dy - 9,5,9,ck)
    + el(-24,dy - 14,14,3,'rgba(255,255,255,.6)');
  return g(x,y,s, maki(0) + (o.tsumi ? maki(-20) + maki(-40) : '')
    + (o.hiraku ? pt('M-42 -14 q-32 6 -50 24 l5 12 q20 -20 45 -24 z',c)
        + ln('M-86 20 q20 -17 44 -21',ck,2.2) : ''));
};

/* ---------- つるの おんがえしの 人物 ----------
   🔴 かぐやの okinaChar / ounaChar と おなじ すがたに ならないよう いろを かえる
      （わたいれの あいねず＋ずきん / あかちゃ＋てぬぐいの はちまき）
   🔴 むすめと つるの あいだに れんあいの えがきかたは しない */
/* わそうの からだ（3人 きょうつう）。じゅうにしの juKarada と おなじ かんがえ方で
   きものの いろと あたまの 絵だけ さしかえる
   c=きもの / cd=こい ところ / obi=おび / eri=えり / hada=はだ / atama=あたまの 絵（0,0=あたまの 中心）
   suwaru で せいざ（あしを かかない）・te='ageru'（上げる）/'mae'（まえに のばす） */
function tsKarada(o){
  const c = o.c, cd = o.cd || o.c, eri = o.eri || '#efe9dc';
  const obi = o.obi || '#7a5c34', hada = o.hada || P.skin;
  const su = o.suwaru ? 1 : 0;
  const kata = su ? -44 : -58, koshi = su ? -22 : -34;
  const suso = su ? -1 : -6, atama = su ? -60 : -74, sode = su ? 19 : 23;
  const migi = o.te === 'ageru'
    ? pto('M14 ' + (kata + 2) + ' q20 -4 26 -22 l9 4 q-7 22 -26 28 z',c)
      + cio(41,kata - 20,4.6,hada)
    : o.te === 'mae'
      ? pto('M14 ' + (kata + 3) + ' q22 0 31 12 l-6 9 q-9 -11 -25 -12 z',c)
        + cio(45,kata + 22,4.6,hada)
      : rco(15,kata + 2,8,sode,c,4) + ln('M22 ' + (kata + sode + 1) + ' L16 ' + (kata + sode + 1),cd,2.4)
        + cio(19,kata + sode + 5,4.6,hada);
  return (su ? el(0,2,25,6,'rgba(0,0,0,.12)') : el(0,2,15,4,'rgba(0,0,0,.12)'))
    + (su ? '' : rco(-12,-6,10,6,'#d9c08a',2) + rco(2,-6,10,6,'#d9c08a',2))
    + pto('M-15 ' + kata + ' L15 ' + kata + ' L' + (su ? 31 : 20) + ' ' + suso
        + ' L' + (su ? -31 : -20) + ' ' + suso + ' z',c)
    + (su ? elo(-17,suso - 8,13,8,cd) + elo(17,suso - 8,13,8,cd) : '')
    + (o.moyou || '')
    + rc(-16,koshi,32,6,obi)
    /* 🔴 うしろすがたの ときは まえの えりを かかない（せなかなのに むねが 見えて しまう） */
    + (o.senaka ? ln('M-8 ' + (kata + 1) + ' L8 ' + (kata + 1),cd,2.6)
        : pt('M-9 ' + kata + ' L0 ' + (kata + 19) + ' L9 ' + kata + ' z',eri))
    + rco(-23,kata + 2,8,sode,c,4) + ln('M-22 ' + (kata + sode + 1) + ' L-16 ' + (kata + sode + 1),cd,2.4)
    + cio(-19,kata + sode + 5,4.6,hada)
    + migi
    + cio(0,atama,16,hada)
    + g(0,atama,1,o.atama);
}
/* おじいさん: わたいれ（あいねず）と ずきん・みじかい しらひげ */
function tsjiiChar(opt){
  opt = opt || {};
  const su = opt.suwaru ? -44 : -58;
  return tsKarada({c:P.tsJii, cd:P.tsJiiD, obi:'#5f4426', eri:'#e8e2d2', hada:'#f6d9b4',
    suwaru:opt.suwaru, te:opt.te,
    moyou: ln('M-13 ' + (su + 10) + ' L13 ' + (su + 10),P.tsJiiD,2.2)
      + ln('M-13 ' + (su + 18) + ' L13 ' + (su + 18),P.tsJiiD,2.2),
    atama: pt('M-16 0 a16 16 0 0 1 32 0 z',P.shiraga)
      + pto('M-17 4 q-3 -25 17 -25 q20 0 17 25 q-7 -12 -17 -11 q-10 -1 -17 11 z',P.tsZukin)
      + pt('M-17 4 q-2 9 2 13 l5 -15 z',P.tsZukin) + pt('M17 4 q2 9 -2 13 l-5 -15 z',P.tsZukin)
      + pto('M14 -7 l12 3 l-9 9 z',P.tsZukin)
      + kgKao(opt.mood,'#ddd6cc')
      + pto('M-9 14 q9 12 18 0 q-2 13 -9 13 q-7 0 -9 -13 z','#f2ede2')});
}
/* おばあさん: わたいれ（あかちゃ）と てぬぐいの はちまき・うしろで まとめた しらが
   senaka で うしろすがた（かおを かかない） */
function tsbaaChar(opt){
  opt = opt || {};
  const su = opt.suwaru ? -44 : -58;
  const atama = opt.senaka
    ? pto('M-16 -2 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z',P.shiraga)
      + cio(-2,-17,7,P.shiraga)
      + rco(-17,-13,34,7,P.tsTenugui,3) + pto('M15 -12 l11 -3 l-3 10 z',P.tsTenugui)
    : pt('M-16 0 a16 16 0 0 1 32 0 z',P.shiraga)
      + cio(-3,-18,7,P.shiraga)
      + rco(-17,-13,34,7,P.tsTenugui,3) + pto('M15 -12 l11 -3 l-3 10 z',P.tsTenugui)
      + kgKao(opt.mood,'#c9c2b8');
  return tsKarada({c:P.tsBaa, cd:P.tsBaaD, obi:'#7a5c34', eri:'#efe9dc', hada:'#f8dcbc',
    suwaru:opt.suwaru, te:opt.te, senaka:opt.senaka,
    moyou: ln('M-14 ' + (su + 12) + ' L14 ' + (su + 12),P.tsBaaD,2.2)
      + ln('M-14 ' + (su + 20) + ' L14 ' + (su + 20),P.tsBaaD,2.2),
    atama: atama});
}
/* むすめ: しろい きもの・くろかみ・あかい おび
   🔴 かぐやひめ（かさねの うすむらさき）とは べつの いろと かたち
   aoi で かおいろを しろめに する（やせた ようすは かかない・ほおべにを つけないだけ） */
function tsmusumeChar(opt){
  opt = opt || {};
  const kao = opt.aoi
    ? ci(-5.5,3,2.4,'#333') + ci(5.5,3,2.4,'#333')
      + ln('M-11 -4 l6 -1','#3a2c20',2) + ln('M11 -4 l-6 -1','#3a2c20',2)
      + ln('M-3.5 11 L3.5 11','#b06060',2.2)
    : kgKao(opt.mood);
  return tsKarada({c:P.tsKimono, cd:P.tsKimonoK, obi:P.tsObi, eri:P.tsKimonoK,
    hada: opt.aoi ? '#f8ece2' : P.skin,
    suwaru:opt.suwaru, te:opt.te,
    atama: pt('M-16 0 a16 16 0 0 1 32 0 q-8 6 -16 3 q-8 3 -16 -3 z',P.hair)
      + pto('M-16 -4 q-13 30 -9 52 q10 3 12 -19 z',P.hair)
      + pto('M16 -4 q13 30 9 52 q-10 3 -12 -19 z',P.hair)
      + kao});
}
/* すわって はたに むかう 人の かげ（0,0=ゆか・みぎむき・かおの つくりは かかない） */
const tsHitoKage = c => pt('M-30 0 q-12 -32 0 -54 q10 -18 30 -16 l8 42 q4 16 14 22 l-10 8 q-24 4 -42 -2 z',c)
  + ci(2,-86,13,c)
  + pt('M-9 -88 q-11 4 -13 17 q7 4 13 -5 z',c)
  + pt('M2 -68 q22 2 34 16 l-8 10 q-12 -14 -28 -16 z',c);
/* つる（たんちょう）。pose: tatsu=たちすがた / tobu=とぶ すがた（きそんの tsuru を つかいまわす）
   / kage=しょうじごしの ぬりつぶしの かげ。mood: normal / fuseru（くびを すこし さげる）
   🔴 はねを ぬく どうさは どの pose でも つくらない。くびは まえに むける
      （じぶんの はねの ほうへ ふりむかせると 「ぬいて いる」ように 見えて しまう） */
function tsuruChar(opt){
  opt = opt || {};
  if(opt.pose === 'tobu') return tsuru(0,0,1);
  const kg = opt.pose === 'kage', kc = opt.kage || 'rgba(58,68,92,.60)';
  const c = kg ? kc : P.tsTsuru, ck = kg ? kc : P.tsTsuruK;
  const kr = kg ? kc : P.tsTsuruKuro, ak = kg ? kc : P.tsTsuruAka;
  const T = kg ? pt : pto, E = kg ? el : elo, C = kg ? ci : cio;
  const fu = opt.mood === 'fuseru';
  const hx = fu ? 29 : 31, hy = fu ? -88 : -102;
  return (kg ? '' : el(0,2,23,5,'rgba(0,0,0,.12)'))
    + ln('M-3 0 L-1 -32',kr,3.4) + ln('M7 0 L5 -32',kr,3.4)
    + ln('M-3 0 l-9 3',kr,3) + ln('M7 0 l-9 3',kr,3)
    + E(0,-50,26,19,c)
    + T('M-19 -58 q-27 3 -33 20 q17 7 33 -7 z',kr)
    + (kg ? '' : ln('M-16 -54 q15 8 31 3',ck,2.4) + ln('M-12 -44 q13 7 27 3',ck,2.2))
    + ln((fu ? 'M14 -58 q14 -14 15 -30' : 'M14 -58 q17 -18 17 -44'),kg ? kc : P.ink,11)
    + ln((fu ? 'M14 -58 q14 -14 15 -30' : 'M14 -58 q17 -18 17 -44'),c,7)
    + (kg ? '' : ln((fu ? 'M18 -60 q11 -12 12 -25' : 'M18 -60 q13 -16 13 -37'),kr,3))
    + C(hx,hy,7,c)
    + T('M' + (hx - 6) + ' ' + (hy - 4) + ' q6 -8 12 -2 q-6 4 -12 2 z',ak)
    + (fu ? T('M' + (hx + 5) + ' ' + (hy - 1) + ' l14 9 l-15 3 z',kg ? kc : '#cfbe8e')
          : T('M' + (hx + 5) + ' ' + (hy - 1) + ' l16 3 l-16 4 z',kg ? kc : '#cfbe8e'))
    + (kg ? '' : ci(hx + 1,hy - 1,1.7,'#333'));
}

/* ---------- アリババと 40にんの とうぞく用の 背景部品 ----------
   🔴 中東ふうの 部品は これまで ひとつも ないので ぜんぶ 新しく つくる
      （ロバは ブレーメンの robaChar、ざいほうは takaraBako / spark を つかいまわす）
   🔴 おいのりの たてもの（とがった とう・きんの まるやね）は かかない。
      すまいの しろい いえ・いちばの まるやねと のれん・ラクダ・つぼ・ターバンだけ
   🔴 ころしの しゅんかん・あぶらを そそぐ 手・たんけんの つきさし・なきがら・ちは 1まいも かかない */
/* すなの じめん。yoru で よるの いろに する */
const abSunaNo = (y,yoru) => rc(0,y,480,300 - y, yoru ? P.abSunaYoD : P.abSunaD)
  + el(240,y + 30,430,46, yoru ? P.abSunaYo : P.abSuna);
/* すなの おか（さばくの うねり）。y=手まえの たかさ */
const abSakyu = (y,yoru) => {
  const c = yoru ? P.abSunaYo : P.abSuna, ck = yoru ? P.abSunaYoD : P.abSunaD;
  return pt('M0 ' + y + ' Q120 ' + (y - 32) + ' 240 ' + (y - 4) + ' Q360 ' + (y + 20) + ' 480 ' + (y - 18)
      + ' L480 300 L0 300 z',c)
    + ln('M0 ' + (y + 12) + ' Q130 ' + (y - 18) + ' 300 ' + (y + 14),ck,3)
    + ln('M180 ' + (y + 44) + ' Q300 ' + (y + 20) + ' 480 ' + (y + 38),ck,2.6);
};
/* とおくの まちなみ（しろい はこがたの いえの ならび）。y=ちへいせん
   🔴 いちは きめうち（まいかい かわると 絵が おちつかない） */
const abMachiNami = (y,yoru) => {
  const c = yoru ? P.abKabeYo : P.abKabe, ck = yoru ? '#96a0b6' : P.abKabeK;
  const md = yoru ? '#5d6b8a' : '#cfc0a4';
  const a = [[16,40,30],[62,30,22],[100,46,38],[152,32,26],[192,40,32],
    [286,30,24],[326,48,40],[386,30,26],[428,38,30]];
  let s = '';
  for(const b of a){
    const bx = b[0], bw = b[1], bh = b[2];
    s += rc(bx,y - bh,bw,bh,c)
      + ln('M' + bx + ' ' + (y - bh) + ' L' + (bx + bw) + ' ' + (y - bh),ck,2.6)
      + rc(bx + bw * .28,y - bh * .62,bw * .17,bh * .26,md)
      + rc(bx + bw * .58,y - bh * .62,bw * .17,bh * .26,md);
  }
  return s;
};
/* かわいた くさむら（さばくの みち ばた） */
const abKusa = (x,y,s) => g(x,y,s, ln('M0 0 q-4 -14 -12 -20','#a9a06e',3)
  + ln('M0 0 q1 -16 -2 -24','#c2b87e',3) + ln('M0 0 q5 -13 13 -19','#a9a06e',2.6));
/* まき（たばねた えだ）。r で かたむける */
const abMaki = (x,y,s,r) => gr(x,y,s,r || 0,
    ln('M-30 -3 L28 -6',P.eda,5) + ln('M-27 -10 L31 -13',P.edaD,4.6)
  + ln('M-31 -17 L26 -20',P.eda,4.4) + ln('M-25 -24 L29 -26',P.edaD,4)
  + ln('M-28 -30 L22 -32',P.eda,3.6)
  + rc(-13,-35,6,34,P.tsNawaD) + rc(10,-36,6,34,P.tsNawaD));
/* にもつの ふくろ（ロバの せなかに のせる） */
const abFukuro = (x,y,s) => g(x,y,s, pto('M-18 0 q-6 -26 4 -34 q10 6 15 -2 q11 12 8 36 z','#c9a86b')
  + ln('M-14 -12 q14 7 26 0','#a9803f',2.4)
  + rc(-7,-38,14,6,P.tsNawaD));
/* かご（いちばの しなもの）。中は パンと なつめ */
const abKago = (x,y,s) => g(x,y,s, pto('M-16 0 L16 0 L12 -16 L-12 -16 z','#c9a05e')
  + ln('M-14 -8 L14 -8','#a9803f',2.2)
  + elo(0,-16,13,4.5,'#a9803f')
  + el(-5,-19,6,3.4,P.pan) + el(6,-20,6,3.4,P.panD) + el(0,-22,5,3,P.pan));
/* くつ（くつなおしの みせさき）。r で むきを かえる */
const abKutsuHitotsu = (x,y,s,r) => gr(x,y,s,r || 0, pto('M-15 0 q-3 -11 9 -13 q13 -2 21 7 l0 6 z',P.abNoren)
  + ln('M-8 -8 q9 -3 16 2',P.abNorenD,2.2));
/* きんかの 山（どうくつの ざいほう）
   🔴 「大金もち」の えんしゅつには しない。山は ひくく・きらめきは すこしだけ */
const abKinYama = (x,y,s) => g(x,y,s, pto('M-50 0 q10 -28 50 -28 q40 0 50 28 z',P.abKinD)
  + pt('M-38 -3 q10 -18 38 -18 q28 0 38 18 z',P.abKin)
  + ci(-28,-8,5,P.abKinK) + ci(-10,-15,5.5,P.abKinK) + ci(9,-12,5,P.abKinK) + ci(26,-6,4.4,P.abKinK)
  + ci(-19,-4,4.4,P.abKin) + ci(1,-3,4,P.abKin) + ci(18,-4,4.4,P.abKin)
  + spark(-22,-22,.55) + spark(20,-20,.5));
/* きんかを はかる ます（きの ますと こぼれた きんか） */
const abMasu = (x,y,s) => g(x,y,s, pto('M-26 -26 L26 -26 L22 0 L-22 0 z',P.wood)
  + ln('M-24 -14 L24 -14',P.woodD,2.4)
  + elo(0,-26,26,7,P.woodD)
  + ci(-10,-28,5,P.abKin) + ci(2,-30,5.5,P.abKin) + ci(13,-27,4.6,P.abKin)
  + ci(-10,-28,1.8,P.abKinK) + ci(2,-30,2,P.abKinK)
  + ci(-34,-4,5,P.abKin) + ci(35,-4,4.6,P.abKin) + ci(-43,-3,4,P.abKinD) + ci(44,-3,4.2,P.abKinD));
/* おおきな つぼ（人が はいれる おおきさ）。kage=ぬりつぶしの シルエット（いろを わたす）
   futa=ふたを のせる / yuge=しずかな ゆげ
   🔴 中を のぞきこむ 手・あぶらは かかない。つぼは しずかな まま */
const abTsubo = (x,y,s,o) => {
  o = o || {};
  const kg = o.kage;
  const c = kg || P.abSuyaki, cd = kg || P.abSuyakiD, ck = kg || P.abSuyakiK;
  const T = kg ? pt : pto, E = kg ? el : elo;
  return g(x,y,s, (kg ? '' : el(0,3,28,7,'rgba(0,0,0,.14)'))
    + T('M-13 -62 C-34 -52 -34 -14 -13 -5 q13 4 26 0 C34 -14 34 -52 13 -62 z',c)
    + (kg ? '' : el(-14,-38,5,12,'rgba(255,255,255,.22)') + ln('M-26 -26 q26 10 52 0',cd,2.4))
    + E(0,-63,15,6,cd)
    + (o.futa ? E(0,-69,17,6,ck) + (kg ? '' : ci(0,-73,3.4,cd)) : '')
    + (o.yuge ? yuge(0,-76,.5,.5) + yuge(11,-84,.36,.34) : ''));
};
/* しろい はこがたの いえ（ひらやねと あおい とびら）
   mado=0 で まどを けす / akari=まどに あかり / shirushi=とびらに しろい しるし
   kai=やねの 上に へやを のせる / yoru=よるの いろ */
const abIe = (x,y,s,o) => {
  o = o || {};
  const c = o.yoru ? P.abKabeYo : P.abKabe, ck = o.yoru ? '#96a0b6' : P.abKabeK;
  const mado = o.akari ? P.madoAkari : (o.yoru ? '#46587a' : '#8fb0c4');
  const madoK = o.akari ? P.madoAkariD : (o.yoru ? '#33425e' : '#6b8fa8');
  const mad = (mx,my) => rco(mx,my,26,24,mado,3) + ln('M' + (mx + 13) + ' ' + my + ' L' + (mx + 13) + ' ' + (my + 24),madoK,2.4);
  return g(x,y,s, (o.kai ? rco(-34,-130,68,44,c,3) + rco(-42,-140,84,12,ck,3) + mad(-13,-120) : '')
    + rco(-56,-88,112,88,c,3)
    + rco(-64,-100,128,14,ck,3)
    + ln('M-56 -52 L56 -52',ck,2.4)
    + (o.mado === 0 ? '' : mad(-46,-78) + mad(20,-78))
    + rco(-19,-58,38,58,P.abTobira,3)
    + ln('M0 -58 L0 0',P.abTobiraD,2.6)
    + cio(-7,-30,2.6,P.abKinD) + cio(7,-30,2.6,P.abKinD)
    + (o.shirushi ? ln('M-11 -46 l22 20','#fff',4.5) + ln('M11 -46 l-22 20','#fff',4.5) : ''));
};
/* いちばの みせ（まるやねと のれん）。c/cd で のれんの いろを かえる */
const abMachi = (x,y,s,o) => {
  o = o || {};
  const nor = o.c || P.abNoren, norD = o.cd || P.abNorenD;
  return g(x,y,s, pto('M-52 -58 a52 52 0 0 1 104 0 z',P.abMaruya)
    + ln('M-42 -76 q42 -22 84 0',P.abMaruyaD,2.6)
    + ln('M-49 -62 q49 -28 98 0',P.abMaruyaD,2.4)
    + rco(-56,-58,112,12,P.abMaruyaD,3)
    + rc(-50,-46,10,46,P.woodD) + rc(40,-46,10,46,P.woodD)
    + pto('M-52 -46 L52 -46 L52 -28 q-13 10 -26 0 q-13 10 -26 0 q-13 10 -26 0 q-13 10 -26 0 z',nor)
    + ln('M-26 -46 L-26 -32',norD,2.6) + ln('M0 -46 L0 -32',norD,2.6) + ln('M26 -46 L26 -32',norD,2.6)
    + rco(-42,-18,84,10,P.wood,3) + rc(-34,-8,8,8,P.woodD) + rc(26,-8,8,8,P.woodD)
    + abTsubo(-26,-18,.24) + abTsubo(-7,-18,.2,{futa:1})
    + abKago(22,-18,.58));
};
/* もん（しろい かべに ついた とぐち）。aki で とびらを ひらく
   🔴 とがった とうは のせない（すまいの かべと とぐちだけ） */
const abMon = (x,y,s,o) => {
  o = o || {};
  return g(x,y,s, rco(-98,-124,196,124,P.abKabe,3)
    + rco(-108,-138,216,16,P.abKabeK,3)
    + ln('M-98 -70 L98 -70',P.abKabeK,2.4)
    + pto('M-40 0 L-40 -76 q40 -36 80 0 L40 0 z',P.abTobiraD)
    + (o.aki
        ? pt('M-33 0 L-33 -72 q33 -31 66 0 L33 0 z','#7a6647')
          + pt('M-24 0 L-24 -68 q24 -27 48 0 L24 0 z','#f4e2b0')
          + pto('M-40 0 L-40 -76 q11 -10 22 -13 L-18 0 z',P.abTobira)
        : ln('M0 -108 L0 0',P.abTobira,3)
          + cio(-11,-40,3,P.abKinD) + cio(11,-40,3,P.abKinD)));
};
/* いわの とびら。aki で 左右に われて きんいろの ひかりが もれる
   🔴 じゅもんを となえる 手は この 部品では かかない（ばめんの がわで おく） */
const abIwa = (x,y,s,o) => {
  o = o || {};
  const d = o.aki ? 30 : 0;
  const hada = P.abIwaHada, hadaD = P.abIwaHadaD, kage = P.abIwaKage;
  /* 🔴 まるい ドームには しない（テントに 見えて しまう）。かくばった いわはだで つくる */
  const hidari = pto('M-146 0 L-140 -34 L-118 -48 L-126 -74 L-96 -92 L-88 -114 L-56 -124 L-30 -142 L2 -138 L2 0 z',hada)
    + ln('M-124 -8 L-112 -46 L-94 -60',hadaD,3.4)
    + ln('M-84 -8 L-72 -62 L-52 -88',kage,2.6)
    + ln('M-96 -92 L-64 -100 L-46 -122',hadaD,2.6)
    + ln('M-40 -14 L-30 -70',kage,2.2)
    + pto('M-134 0 L-122 -17 L-106 0 z',hada);
  const migi = pto('M-2 -138 L34 -134 L60 -120 L90 -110 L98 -88 L128 -70 L120 -46 L142 -32 L146 0 L-2 0 z',hada)
    + ln('M126 -8 L114 -44 L96 -58',hadaD,3.4)
    + ln('M84 -8 L74 -60 L52 -86',kage,2.6)
    + ln('M98 -88 L66 -98 L48 -118',hadaD,2.6)
    + ln('M40 -14 L30 -70',kage,2.2)
    + pto('M108 0 L120 -14 L134 0 z',hada);
  const naka = o.aki
    ? pt('M-34 0 L-34 -118 L34 -118 L34 0 z','#241d2c')
      + pt('M-25 0 L-25 -110 L25 -110 L25 0 z','rgba(242,206,106,.45)')
      + pt('M-13 0 L-13 -102 L13 -102 L13 0 z','rgba(253,240,184,.7)')
      + spark(-17,-70,.7) + spark(15,-90,.6)
    : '';
  return g(x,y,s, el(0,5,146,12,'rgba(0,0,0,.13)')
    + naka + g(-d,0,1,hidari) + g(d,0,1,migi)
    /* とじた ときの とびら。すこし ほりこんだ かたちに して「ここが とびら」と わかるように する */
    + (o.aki ? '' : pto('M-32 0 L-32 -84 q32 -30 64 0 L32 0 z',hadaD)
        + ln('M-24 -6 L-24 -80 q24 -22 48 0 L24 -6',kage,2.4)
        + ln('M0 -104 L0 0','rgba(107,95,80,.55)',2.6)));
};
/* どうくつの 中（いわの てんじょうと かべ・ゆか）
   takara=おくに ざいほうの 山を おく / hikari=とぐちからの ひかりを 入れる */
const abDokutsu = (id,o) => {
  o = o || {};
  /* 🔴 てんじょうは なみ＋つらら岩（なめらかな 山だけだと おかの シルエットに 見えて しまう） */
  let s = grad(id,P.abDoTop,P.abDoBtm)
    + pt('M0 0 L480 0 L480 34 Q420 62 360 40 Q300 18 240 44 Q180 70 120 46 Q60 22 0 44 z',P.abDoKabe)
    + pt('M96 44 L108 90 L120 46 z',P.abDoKabe) + pt('M212 44 L222 98 L234 46 z',P.abDoKabe)
    + pt('M330 38 L340 80 L352 40 z',P.abDoKabe) + pt('M410 46 L418 76 L428 46 z',P.abDoKabe)
    + pt('M56 34 L64 62 L72 36 z',P.abDoKabe)
    + pt('M0 0 L54 0 Q78 118 44 300 L0 300 z',P.abDoKabe)
    + pt('M480 0 L426 0 Q402 118 436 300 L480 300 z',P.abDoKabe)
    + pt('M0 300 L0 236 Q240 214 480 240 L480 300 z',P.abDoYuka)
    + ln('M0 238 Q240 216 480 242','rgba(255,255,255,.12)',3);
  /* 🔴 ひかりは とぐちの がわから ななめに 入れる（そらは 見えない ばしょなので 上からは 入れない） */
  if(o.hikari) s += pt('M0 54 L74 34 L166 300 L0 300 z','rgba(253,240,184,.09)')
    + pt('M0 74 L52 60 L118 300 L0 300 z','rgba(253,240,184,.07)');
  if(o.takara) s += abKinYama(128,248,.9) + abKinYama(362,252,1.05) + abKinYama(248,240,.68)
    + abTsubo(62,256,.6) + abTsubo(430,260,.66,{futa:1});
  return s;
};
/* いえの 中（しっくいの かべ・かべの くぼみ・じゅうたんを しいた ゆか）。yoru で よるの いろ */
const abHeya = (id,o) => {
  o = o || {};
  const yo = o.yoru;
  const kabeK = yo ? '#544c60' : '#ddcfb0';
  const yuka = yo ? '#5a4a3f' : '#c9a86b', yukaK = yo ? '#42352c' : '#a9803f';
  const juu = yo ? '#7a4038' : '#a9524a', juuK = yo ? '#5f3028' : '#8a3f38';
  return grad(id, yo ? '#5f5768' : '#f6eeda', yo ? '#3a3546' : '#e6d8ba')
    + ln('M0 128 L480 128',kabeK,3)
    /* かべの くぼみ（ものおき）。まるい かたちは すまいの つくり */
    + pto('M40 214 L40 118 q34 -32 68 0 L108 214 z',kabeK)
    + rc(46,124,56,90, yo ? '#443d50' : '#eee2c6')
    + ln('M46 168 L102 168',kabeK,2.4)
    + abTsubo(62,166,.28,{futa:1}) + abTsubo(88,166,.24)
    + abTsubo(72,210,.34,{futa:1})
    /* まど（きの さんの ついた しかくい まど）。かべの まん中に ひとつだけ */
    + rco(196,50,88,66, yo ? '#3f4f68' : '#bfe0f2',3)
    + ln('M240 50 L240 116', yo ? '#33425e' : '#8fb0c4',2.6)
    + ln('M196 83 L284 83', yo ? '#33425e' : '#8fb0c4',2.6)
    + rco(188,40,104,10,kabeK,3)
    + rc(0,214,480,86,yuka) + ln('M0 214 L480 214',yukaK,3)
    + pto('M46 300 L146 226 L334 226 L434 300 z',juu)
    + ln('M78 300 L166 234',juuK,2.6) + ln('M402 300 L314 234',juuK,2.6)
    + ln('M120 262 L360 262',juuK,2.4) + ln('M96 282 L384 282',juuK,2.2);
};
/* あぶらランプ（つるした あかり）。ひかりは やわらかく */
const abRanpu = (x,y,s) => g(x,y,s, ln('M0 -62 L0 -24','#8a6a44',2.6)
  + ci(6,-10,21,'rgba(255,214,130,.26)')
  + pto('M-16 -22 q16 -12 32 0 q-6 13 -16 13 q-10 0 -16 -13 z','#c9a05e')
  + pto('M14 -18 l16 4 l-13 7 z','#c9a05e')
  + ln('M-4 -24 L4 -24','#a9803f',2.4)
  + honoo(23,-13,.26));
/* ひくい つくえ（つつましい しょくたく）。pan で パンと なつめと コップを のせる */
const abZen = (x,y,s,o) => {
  o = o || {};
  return g(x,y,s, elo(0,-16,66,15,'#a9803f')
    + el(0,-19,58,11,'#c9a05e')
    + ln('M-38 -4 l-6 12','#8a6a3f',4) + ln('M38 -4 l6 12','#8a6a3f',4)
    + (o.pan ? panMaru(-24,-22,.8) + panMaru(-3,-24,.7)
        + el(22,-22,10,5,'#8a5a3a') + ci(31,-24,3.4,'#6b4530') + ci(15,-25,3.2,'#6b4530')
        + koppu(45,-18,.8) + koppu(-46,-18,.7) : ''));
};
/* ラクダの かお（0,0 が あたまの まんなか・みぎむき）。じゅうにしの umaHead と おなじ かんがえ方 */
function abRakudaHead(mood){
  const c = P.abRaku;
  return pto('M-10 -10 q-2 -11 4 -12 q4 6 1 13 z',c)
    + pto('M2 -12 q3 -10 9 -10 q1 6 -4 12 z',c)
    + cio(0,0,12,c)
    + pto('M4 -3 q20 3 22 11 q-3 9 -22 5 z',c)
    + elo(20,10,8,5,P.abRakuHara)
    + ci(18,9,1.6,'#4a3a2c') + ci(24,10,1.6,'#4a3a2c')
    + ln('M19 15 q5 3 9 -1','#8a7a68',2.2)
    + juMe(3,-4,mood);
}
/* ラクダ（ひとつこぶ）。ロバより 大きく くびが ながい。juKarada を つかいまわす
   nimotsu で せなかに にもつを のせる */
function abRakuda(opt){
  opt = opt || {};
  const c = P.abRaku, cd = P.abRakuD;
  return juKarada({c:c, cd:cd, hara:P.abRakuHara,
    w:28, h:14, y:-44, aw:7,
    shippo: ln('M-27 -50 q-11 12 -9 24',cd,4),
    moyou: pto('M-16 -54 q6 -22 16 -22 q10 0 16 22 z',c)
      + (opt.nimotsu ? rco(-15,-72,30,16,P.abNoren,3) + ln('M-15 -64 L15 -64',P.abNorenD,2.4) : '')
      + pto('M14 -50 q16 -6 20 -26 l11 3 q-6 24 -22 34 z',c),
    hx:42, hy:-84, head: abRakudaHead(opt.mood)});
}
/* とうぞくの すがた（とおくの シルエット）。🔴 かおは かかない・ぶきは もたせない */
const abTouKage = (x,y,s) => g(x,y,s, el(0,3,13,4,'rgba(0,0,0,.18)')
  + pt('M-13 -46 L13 -46 L18 0 L-18 0 z',P.abTou)
  + rc(-15,-30,30,5,P.abTouD)
  + pt('M-19 -44 l-6 26 l7 2 l6 -24 z',P.abTou)
  + pt('M19 -44 l6 26 l-7 2 l-6 -24 z',P.abTou)
  + ci(0,-56,11,P.abTouD)
  + pt('M-12 -58 q-2 -14 12 -14 q14 0 12 14 q-12 -5 -24 0 z',P.abTou));

/* ---------- アリババと 40にんの とうぞくの 人物 ----------
   🔴 かおは alibaba / morgiana / kashimu / kashira の 4つを 新しく つくる
      （ブレーメンの dorobou は そのまま のこして この はなしでは つかわない）
   🔴 かしらは へんそうが きほん＝目もとだけ 見せる。うしろすがたも つかう
   🔴 たんけんは おびに さしたまま 小さく かく。ぬく・つきさす どうさは つくらない */
/* ターバン（あたまの ざひょうけい・0,0=あたまの まんなか・はんけい16）
   🔴 すそを かくばらせない（ぼうしに 見えて しまう）。まきつけた ぬのの なみに する
   よこに ちいさな むすびめ（ながい さんかくの たれは つくらない） */
const abTurban = (c,ck) => pto('M-18 -4 q-4 -21 18 -21 q22 0 18 21 q-4 6 -10 3 q-8 -4 -16 0 q-6 3 -10 -3 z',c)
  + ln('M-15 -11 q15 -8 30 0',ck,2.4)
  + ln('M-16 -6 q16 -7 32 0',ck,2.2)
  + pto('M14 -9 q10 1 11 9 q-6 4 -12 -3 z',c);
/* かおの ターバン（カットイン 200x200 用）。あたまに まきつけた ぬの */
const abTurbanF = (c,ck) => pto('M28 100 q-6 -80 72 -80 q78 0 72 80 q-14 16 -32 8 q-40 -16 -80 0 q-18 8 -32 -8 z',c)
  + ln('M44 68 q56 -28 112 0',ck,3.4)
  + ln('M36 86 q64 -30 128 0',ck,3)
  + pto('M158 94 q28 6 26 28 q-18 6 -30 -12 z',c);
/* ターバンの ひとの からだ（4人 きょうつう）。つるの tsKarada と おなじ かんがえ方で
   ふくの いろと あたまの 絵だけ さしかえる
   c=ふく / cd=こい ところ / obi=おび / eri=まえあわせ / hada=はだ / atama=あたまの 絵
   te='age'（かたてを 上げる）/'mae'（まえに のばす）/'ryo'（りょうてを ひらく）
   suwaru=ゆかに すわる / senaka=うしろすがた（かおを かかない）/ tanken=おびに さした たんけん */
function abKarada(o){
  const c = o.c, cd = o.cd || o.c, obi = o.obi || '#a9803f', hada = o.hada || P.skin;
  const eri = o.eri || cd;
  const su = o.suwaru ? 1 : 0;
  const kata = su ? -46 : -60, koshi = su ? -25 : -35;
  const suso = su ? -2 : -4, atama = su ? -62 : -76, sode = su ? 19 : 24;
  const ageM = pto('M14 ' + (kata + 3) + ' q21 -6 27 -25 l10 4 q-8 25 -28 31 z',c) + cio(44,kata - 23,4.8,hada);
  const ageH = pto('M-14 ' + (kata + 3) + ' q-21 -6 -27 -25 l-10 4 q8 25 28 31 z',c) + cio(-44,kata - 23,4.8,hada);
  const maeM = pto('M14 ' + (kata + 4) + ' q23 0 32 13 l-7 10 q-9 -12 -26 -13 z',c) + cio(47,kata + 25,4.8,hada);
  const sodeM = rco(15,kata + 3,9,sode,c,4) + ln('M24 ' + (kata + sode + 2) + ' L18 ' + (kata + sode + 2),cd,2.4)
    + cio(19,kata + sode + 6,4.8,hada);
  const sodeH = rco(-24,kata + 3,9,sode,c,4) + ln('M-23 ' + (kata + sode + 2) + ' L-17 ' + (kata + sode + 2),cd,2.4)
    + cio(-19,kata + sode + 6,4.8,hada);
  const migi = (o.te === 'age' || o.te === 'ryo') ? ageM : (o.te === 'mae' ? maeM : sodeM);
  const hidari = o.te === 'ryo' ? ageH : sodeH;
  return (su ? el(0,2,26,6,'rgba(0,0,0,.12)') : el(0,2,16,4,'rgba(0,0,0,.12)'))
    /* サンダル。すわる ときは すその 下に あしを おさめる */
    + (su ? '' : rco(-13,-7,11,7,'#a9825a',2) + rco(2,-7,11,7,'#a9825a',2))
    + pto('M-16 ' + kata + ' L16 ' + kata + ' L' + (su ? 33 : 24) + ' ' + suso
        + ' L' + (su ? -33 : -24) + ' ' + suso + ' z',c)
    + (su ? elo(-19,suso - 9,14,9,cd) + elo(19,suso - 9,14,9,cd) : '')
    + (o.moyou || '')
    + rc(-18,koshi,36,7,obi)
    /* 🔴 たんけんは さやに 入ったまま。は は 見せない（つかがしらだけ） */
    + (o.tanken ? rco(12,koshi - 10,6,12,'#8a6a44',2) + ci(15,koshi - 12,2.6,P.abKin) : '')
    /* 🔴 うしろすがたの ときは まえあわせを かかない */
    + (o.senaka ? ln('M-9 ' + (kata + 2) + ' L9 ' + (kata + 2),cd,2.6)
        : pt('M-10 ' + kata + ' L0 ' + (kata + 21) + ' L10 ' + kata + ' z',eri))
    + hidari
    + migi
    + cio(0,atama,16,hada)
    + g(0,atama,1,o.atama);
}
/* アリババ: そまつな あさいろの ふく・しろっぽい ターバン・みじかい ひげ
   mood は kgKao と おなじ（normal / hohoemi / odoroki / namida） */
function alibabaChar(opt){
  opt = opt || {};
  const kata = opt.suwaru ? -46 : -60;
  const atama = opt.senaka
    ? pt('M-16 2 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z',P.hair) + abTurban(P.abAliT,'#c9bda4')
    : pt('M-16 0 a16 16 0 0 1 32 0 z',P.hair) + abTurban(P.abAliT,'#c9bda4')
      + kgKao(opt.mood)
      + pto('M-9 15 q9 11 18 0 q-2 12 -9 12 q-7 0 -9 -12 z','#4a3a2c');
  return abKarada({c:P.abAli, cd:P.abAliD, obi:'#7a5c34', eri:'#efe6d2',
    suwaru:opt.suwaru, te:opt.te, senaka:opt.senaka, atama:atama,
    moyou: ln('M-13 ' + (kata + 26) + ' L13 ' + (kata + 26),P.abAliD,2.2)});
}
/* モルジアナ: みどりの ふく・きんいろの ずきん
   odori で おどりの すがた（りょうてを 上げ、すこし かたむける）
   🔴 たんけんは おどりの ときだけ・おびに さしたまま 小さく */
function morgianaChar(opt){
  opt = opt || {};
  const zu = P.abMoruZ, zuD = P.abMoruZD;
  /* 🔴 よこの たれぬのは みじかく・おりめの 線を 入れる（ながいと かみの けに 見えて しまう） */
  const zukin = pto('M-18 1 q-2 -23 18 -23 q20 0 18 23 q-7 -7 -18 -7 q-11 0 -18 7 z',zu)
    + pto('M-18 -1 q-6 17 -3 26 q9 -4 10 -23 z',zu)
    + pto('M18 -1 q6 17 3 26 q-9 -4 -10 -23 z',zu)
    + ln('M-16 8 q4 6 3 12',zuD,2) + ln('M16 8 q-4 6 -3 12',zuD,2)
    + ln('M-15 -8 q15 -9 30 0',zuD,2.4);
  const atama = opt.senaka
    ? pt('M-16 2 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z',P.hair) + zukin
    : pt('M-16 0 a16 16 0 0 1 32 0 z',P.hair) + zukin + kgKao(opt.mood);
  const karada = abKarada({c:P.abMoru, cd:P.abMoruD, obi:zu, eri:'#efe6d2',
    suwaru:opt.suwaru, senaka:opt.senaka, atama:atama,
    tanken: opt.odori ? 1 : opt.tanken,
    te: opt.odori ? 'ryo' : opt.te,
    moyou: opt.odori ? ln('M-20 -22 q20 8 40 0',P.abMoruD,2.4) + ln('M-22 -12 q22 9 44 0',P.abMoruD,2.2) : ''});
  return opt.odori ? gr(0,0,1,-6,karada) : karada;
}
/* カシム: にいさん。ゆたかな しょうにんの ふく（むらさきに きんの ふち）と きんいろの ターバン
   🔴 「よくばり」に 見える しぐさ（かねを かかえる など）は させない */
function kashimuChar(opt){
  opt = opt || {};
  const kata = opt.suwaru ? -46 : -60;
  const atama = opt.senaka
    ? pt('M-16 2 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z','#3a2c20') + abTurban(P.abKashiT,'#d9c48a')
      + cio(0,-23,4.2,P.abKinD)
    : pt('M-16 0 a16 16 0 0 1 32 0 z','#3a2c20') + abTurban(P.abKashiT,'#d9c48a')
      + cio(0,-23,4.2,P.abKinD)
      + kgKao(opt.mood)
      + pto('M-10 14 q10 12 20 0 q-3 14 -10 14 q-7 0 -10 -14 z','#3a2c20');
  return abKarada({c:P.abKashi, cd:P.abKashiD, obi:P.abKashiT, eri:'#efe6d2',
    suwaru:opt.suwaru, te:opt.te, senaka:opt.senaka, atama:atama,
    moyou: opt.senaka ? '' : ln('M0 ' + (kata + 21) + ' L0 ' + (opt.suwaru ? -6 : -8),P.abKin,3)});
}
/* とうぞくの かしら: へんそうが きほん。henso='abura'（あぶらしょうにん）/'shonin'（しょうにん）
   🔴 かおは 目もとだけ。くちもとは ぬので つつむ。senaka で うしろすがた（かおなし）
   🔴 にらむ まゆ・こわい かおには しない */
function kashiraChar(opt){
  opt = opt || {};
  const shonin = opt.henso === 'shonin';
  const c = shonin ? P.abKashira : '#8a7a5a', cd = shonin ? P.abKashiraD : '#6b5c3e';
  const nuno = P.abKashiraNu, tab = P.abKashiraT;
  /* 🔴 ターバンと くちもとの ぬのは いろを かえる（おなじだと あたまが 1つの くろい かたまりに 見える）
     🔴 目もとの まわりは はだを のこす（かおを ぜんぶ おおうと こわい すがたに なる） */
  const atama = opt.senaka
    ? pt('M-16 2 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z','#2f2a26') + abTurban(tab,'#7f8797')
    : abTurban(tab,'#7f8797')
      + pto('M-15 5 q15 -7 30 0 q-1 15 -15 15 q-14 0 -15 -15 z',nuno)
      + ci(-5.5,-1,2.6,'#333') + ci(5.5,-1,2.6,'#333')
      + ci(-4.6,-2,1,'#fff') + ci(6.4,-2,1,'#fff')
      + ln('M-12 -8 q6 -4 12 -1','#4a4238',2.2) + ln('M12 -8 q-6 -4 -12 -1','#4a4238',2.2);
  return abKarada({c:c, cd:cd, obi:'#4a4030', eri:cd,
    suwaru:opt.suwaru, te:opt.te, senaka:opt.senaka, atama:atama});
}
/* くつなおしの おじいさん: しらひげと ちいさな ぼうし。mekakushi で 目に ぬのを あてる
   🔴 めかくしの ばめんでも こわがる かおには しない（しずかな すわりすがた） */
function kutsunaoshiChar(opt){
  opt = opt || {};
  const kao = opt.mekakushi
    ? rco(-17,-4,34,10,'#bfb296',3) + ln('M-16 1 L16 1','#9c8f74',2.2)
      + ln('M-4 12 q4 4 8 0','#a04040',2.2)
    : kgKao(opt.mood,'#ddd6cc');
  const atama = pt('M-16 0 a16 16 0 0 1 32 0 z',P.shiraga)
    + pto('M-15 -9 q-1 -15 15 -15 q16 0 15 15 q-15 -6 -30 0 z','#efe9dc')
    + ln('M-14 -10 q14 -6 28 0','#cfc6b2',2.2)
    + kao
    + pto('M-10 13 q10 13 20 0 q-3 16 -10 16 q-7 0 -10 -16 z',P.shiraga);
  return abKarada({c:P.abKutsu, cd:P.abKutsuD, obi:'#6b5a3a', eri:'#efe9dc', hada:'#f6d9b4',
    suwaru:opt.suwaru, te:opt.te, senaka:opt.senaka, atama:atama});
}
/* アリババの むすこ: 小がら。ちいさな ターバンと あおい ふく */
const musukoChar = opt => {
  opt = opt || {};
  const atama = opt.senaka
    ? pt('M-16 2 a16 16 0 0 1 32 0 q0 15 -16 15 q-16 0 -16 -15 z',P.hair) + abTurban('#dbe4ec','#b6c2cc')
    : pt('M-16 0 a16 16 0 0 1 32 0 z',P.hair) + abTurban('#dbe4ec','#b6c2cc') + kgKao(opt.mood);
  return g(0,0,.86, abKarada({c:'#6b8fa8', cd:'#4e6e86', obi:'#a9803f', eri:'#efe6d2',
    suwaru:opt.suwaru, te:opt.te, senaka:opt.senaka, atama:atama}));
};

/* ---------- きたかぜと たいよう用の 背景部品と 人物 ----------
   🔴 きたかぜ（くもの ぎじんか）と たいよう（ひの まる）の かおは おなじ ぶひん kzKao で つくる。
      かたほうだけ おこった かお・いじわるな かお・かちほこった かおには しない
   🔴 たびびとは なまえも せいべつも わからない つくり（かみは ぼうしの 下に かくす・からだつきは 中せい）
   🔴 みずあびは かたまで みずに つかった ところだけ かく（うわぎは きしに おく）
   流用: sun / cloud / kazeUzu / waraKire / edaKire / tree / hana / chou / mtns / house / spark */
/* くさの おかと、まんなかから 手まえに ひろがる つちの みち。y=ちへいせん・yu で ゆうがたの いろ */
const kzJimen = (y,yu) => pt('M0 ' + y + ' Q140 ' + (y - 24) + ' 262 ' + (y - 6)
    + ' Q382 ' + (y + 12) + ' 480 ' + (y - 12) + ' L480 300 L0 300 z', yu ? P.kzYuuOka : P.kzOka)
  + el(240,y + 58,430,58, yu ? P.kzYuuOkaD : P.kzOkaD)
  + pt('M208 ' + (y - 5) + ' L264 ' + (y - 5) + ' L392 300 L92 300 z', yu ? '#a9846e' : P.kzMichi)
  + ln('M236 ' + (y + 4) + ' Q252 250 306 300', yu ? '#8a6a58' : P.kzMichiD,2.6);
/* とんでいく きの は。r で かたむける */
const kzHaKire = (x,y,s,r) => gr(x,y,s,r || 0, pto('M-11 3 q-1 -15 11 -17 q5 14 -11 17 z',P.kzHa)
  + ln('M-9 2 L2 -12',P.kzHaD,1.8));
/* まいあがる すな。🔴 みちの 上でも 見えるように つちより こい いろに する */
const kzSunaKire = (x,y,s) => g(x,y,s, ci(-14,-4,2.8,P.kzMichiD) + ci(3,-11,2.2,P.kzMichiD)
  + ci(14,2,3,P.kzMichiD) + ci(-4,7,2,'#8a6f42') + ci(20,-7,2,'#8a6f42'));
/* くもの かたち（きたかぜの からだ・あまぐも に つかう） */
const kzKumoKata = c => pto('M-46 24 a24 24 0 0 1 0 -48 a30 30 0 0 1 50 -14 a26 26 0 0 1 42 14 a24 24 0 0 1 0 48 q-23 12 -46 0 q-23 -12 -46 0 z',c);
/* あまぐも。ame で あめの すじを たす */
const kzAmagumo = (x,y,s,o) => {
  o = o || {};
  return g(x,y,s, kzKumoKata(P.kzKumoA)
    + ln('M-36 8 q36 12 72 -2',P.kzKumoAD,2.6)
    + ln('M-20 -16 q20 -8 40 0',P.kzKumoAD,2.2)
    + (o.ame ? ln('M-40 30 l-7 28',P.kzAmesuji,3.4) + ln('M-16 33 l-7 32',P.kzAmesuji,3.4)
        + ln('M8 33 l-7 30',P.kzAmesuji,3.4) + ln('M32 30 l-7 26',P.kzAmesuji,3.4) : ''));
};
/* かわ（て前を よこぎる ながれ）。y=みずぎわ。きしの すなと あさせを 手まえに おく */
const kzKawa = y => pt('M0 ' + (y - 8) + ' Q120 ' + (y - 20) + ' 244 ' + (y - 10)
    + ' Q368 ' + y + ' 480 ' + (y - 14) + ' L480 ' + (y + 8) + ' L0 ' + (y + 8) + ' z',P.kzSuna)
  + pt('M0 ' + y + ' Q120 ' + (y - 12) + ' 244 ' + (y - 2)
    + ' Q368 ' + (y + 8) + ' 480 ' + (y - 6) + ' L480 300 L0 300 z',P.kzMizuA)
  + pt('M0 ' + (y + 14) + ' Q120 ' + (y + 2) + ' 244 ' + (y + 12)
    + ' Q368 ' + (y + 22) + ' 480 ' + (y + 8) + ' L480 300 L0 300 z',P.kzMizu)
  + pt('M0 ' + (y + 34) + ' Q160 ' + (y + 20) + ' 320 ' + (y + 36)
    + ' Q400 ' + (y + 44) + ' 480 ' + (y + 34) + ' L480 300 L0 300 z',P.kzMizuD)
  + waveRow(y + 16,.5) + waveRow(y + 56,.4);
/* おおきな きと、その したの こかげ */
const kzKokage = (x,y,s) => g(x,y,s, el(-6,8,100,23,'rgba(56,84,50,.36)')
  + rco(-11,-86,22,86,P.woodD,4)
  + ln('M0 -54 l-26 -18',P.woodD,6) + ln('M0 -66 l24 -16',P.woodD,6)
  + cio(-40,-106,32,P.grass2) + cio(38,-102,30,P.grass2) + cio(0,-128,38,P.grass2)
  + cio(-16,-88,25,P.grass) + cio(22,-84,23,P.grass));
/* せんたくものの ぬの 1まい。kaze で かぜの ほうへ ふくらませる */
const kzHosuNuno = (x,y,w,h,c,kaze) => pto('M' + (x - w) + ' ' + y + ' L' + (x + w) + ' ' + y
  + ' L' + (x + w + (kaze ? 9 : 0)) + ' ' + (y + h) + ' q' + (-w) + ' ' + (kaze ? 13 : 9) + ' '
  + (-2 * w - (kaze ? 9 : 0)) + ' 0 z',c);
/* むらの せんたくもの（2本の さおに わたした つなと、かぜに なびく ぬの） */
const kzSentaku = (x,y,s,o) => {
  o = o || {};
  const k = o.kaze ? 1 : 0;
  return g(x,y,s, rco(-98,-98,8,98,P.woodD,3) + rco(90,-98,8,98,P.woodD,3)
    + ln('M-94 -94 Q0 -84 94 -94',P.tsNawaD,3)
    + kzHosuNuno(-58,-90,21,44,P.kzNuno,k)
    + kzHosuNuno(0,-87,25,50,P.kzNunoA,k)
    + kzHosuNuno(58,-90,19,40,P.kzNunoB,k)
    + ln('M-64 -78 q6 14 4 26','#dcd7cc',2.2) + ln('M-8 -74 q6 16 4 30','#dda6b0',2.2));
};
/* ほぶね。ho で ほを ふくらませる（かぜを うけて いる） */
const kzHobune = (x,y,s,o) => {
  o = o || {};
  return g(x,y,s, rco(-3,-98,6,88,P.kzFuneD,2)
    + (o.ho ? pto('M0 -94 Q58 -62 32 -16 L0 -16 z',P.kzHo) + ln('M9 -84 Q48 -56 27 -22',P.kzHoK,2.4)
            : pto('M0 -94 Q16 -56 9 -16 L0 -16 z',P.kzHo) + ln('M3 -84 Q11 -56 6 -22',P.kzHoK,2.2))
    + pto('M3 -98 L27 -92 L3 -86 z',P.kzNunoA)
    + pto('M-52 -14 Q0 4 52 -14 L42 12 Q0 24 -42 12 z',P.kzFune)
    + ln('M-44 -6 L44 -6',P.kzFuneD,3));
};
/* のの はな（たねを つけた もの）と、かぜに のる わたげ
   🔴 わたげは ほそい 線を ひろげた かたち。ふちどりを すると むしのように 見えて しまう */
const kzTane = (x,y,s) => g(x,y,s, ln('M0 0 q4 -18 0 -30',P.leafG,2.6)
  + ln('M1 -11 q-9 -3 -12 -10',P.leafG,2.2) + ln('M1 -18 q9 -3 12 -9',P.leafG,2.2)
  + ci(0,-40,12,'rgba(246,240,224,.85)')
  + ln('M0 -40 L-11 -50',P.kzWataD,1.5) + ln('M0 -40 L-4 -53',P.kzWataD,1.5)
  + ln('M0 -40 L4 -53',P.kzWataD,1.5) + ln('M0 -40 L11 -50',P.kzWataD,1.5)
  + ln('M0 -40 L-13 -41',P.kzWataD,1.5) + ln('M0 -40 L13 -41',P.kzWataD,1.5)
  + ci(0,-38,3,P.kzWataD));
const kzWatage = (x,y,s,r) => gr(x,y,s,r || 0, el(0,-14,9,7,'rgba(246,240,224,.9)')
  + ln('M0 0 L0 -9',P.kzWataD,1.5)
  + ln('M0 -9 l-7 -9',P.kzWata,1.8) + ln('M0 -9 l0 -11',P.kzWata,1.8) + ln('M0 -9 l7 -9',P.kzWata,1.8)
  + ci(0,1,2,P.kzWataD));
/* はたけの め（ふたばと くき）。🔴 ちいさいので ふちどりを しない */
const kzMe = (x,y,s) => g(x,y,s, ln('M0 0 L0 -9',P.leafG2,2.2)
  + pt('M0 -8 q-12 -2 -13 -10 q11 -1 13 10 z',P.leafG)
  + pt('M0 -8 q12 -2 13 -10 q-11 -1 -13 10 z',P.leafG));
/* きしに おいた うわぎと ふくろ（みずあびの ばめん） */
const kzNugiUwagi = (x,y,s) => g(x,y,s, pto('M-27 0 q-7 -18 5 -25 q15 -8 28 0 q12 7 5 25 z',P.kzUwagi)
  + ln('M-19 -9 q19 6 38 0',P.kzUwagiD,2.4)
  + pto('M16 0 q-5 -17 4 -21 q8 4 12 -2 q9 8 6 23 z','#c9a86b')
  + ln('M20 -11 q10 5 18 0','#a9803f',2.2));
/* たびの ぼうし。🔴 かみを かくす ために かならず かぶせる（つばで あたまを ぜんぶ おおう） */
const kzBoushi = (x,y,s) => g(x,y,s, pto('M-12 -10 q-1 -20 12 -20 q13 0 12 20 z',P.kzBou)
  + elo(0,-11,21,5.5,P.kzBouD)
  + ln('M-10 -13 q10 -4 20 0','#6b4a30',2.2));
/* たいようの ほうしゃせん。n本を まわりに ならべる */
const kzHikari = (x,y,r1,r2,n,c,w) => {
  let s = '';
  for(let i = 0; i < n; i++){
    s += gr(x,y,1,i * 360 / n, ln('M0 ' + (-r1) + ' L0 ' + (-r2),c,w));
  }
  return s;
};
/* きたかぜと たいようの かお（かおの まんなかを 0,0 に する）
   🔴 2人とも この ぶひんで つくる。かたほうだけ こわい かおには しない
   me: 'ake'（まるい 目）/ 'hoso'（目を ほそめる）/ 'niko'（わらった 目）/ 'yasumi'（ゆるく とじた 目）
   kuchi: 'fuku'（まるく すぼめる）/ 'niko'（ほほえみ）/ 'ho'（ふうっと ひといき）
   hoo に いろを わたすと ほおを ふくらませる */
function kzKao(o){
  o = o || {};
  const me = o.me || 'ake', kuchi = o.kuchi || 'niko', mayu = o.mayu || '#8a9aa8';
  /* ほおは くちの よこに、ふちどりを しない たいらな だ円で おく
     （まるく ふちどると 目が 4つ あるように 見えて しまう） */
  let s = o.hoo ? el(-18,9,11,8,o.hoo) + el(18,9,11,8,o.hoo) : '';
  /* 🔴 まゆは うちがわを 上げる（下げると おこった かおに 見える） */
  s += ln('M-19 -15 l9 -3',mayu,2.6) + ln('M19 -15 l-9 -3',mayu,2.6);
  if(me === 'niko') s += ln('M-17 -3 q7 -9 14 0','#333',3) + ln('M3 -3 q7 -9 14 0','#333',3);
  else if(me === 'hoso') s += ln('M-17 -5 q7 7 14 0','#333',3) + ln('M3 -5 q7 7 14 0','#333',3);
  else if(me === 'yasumi') s += ln('M-18 -5 q8 8 16 0','#333',2.8) + ln('M2 -5 q8 8 16 0','#333',2.8);
  else s += ci(-10,-3,4.6,'#333') + ci(10,-3,4.6,'#333')
    + ci(-8.2,-4.8,1.8,'#fff') + ci(11.8,-4.8,1.8,'#fff');
  s += ci(-18,11,5,'rgba(255,140,140,.42)') + ci(18,11,5,'rgba(255,140,140,.42)');
  if(kuchi === 'fuku') s += elo(0,11,5,6.5,'#a04040');
  else if(kuchi === 'ho') s += elo(0,11,8,4.5,'#a04040');
  else s += pto('M-9 7 q9 10 18 0 q-3 11 -9 11 q-6 0 -9 -11 z','#a04040');
  return s;
}
/* カットイン用（200x200）。kzKao と おなじ つくりで 大きさだけ かえる
   🔴 きたかぜと たいようで 目・まゆ・ほおの いちは まったく おなじに する */
function kzKaoF(o){
  o = o || {};
  const me = o.me || 'ake', kuchi = o.kuchi || 'niko', mayu = o.mayu || '#8a9aa8';
  /* ほおは くちの よこに、ふちどりを しない たいらな だ円で おく
     （まるく ふちどると 目が 4つ あるように 見えて しまう） */
  let s = o.hoo ? el(62,132,23,17,o.hoo) + el(138,132,23,17,o.hoo) : '';
  s += ln('M58 84 l22 -6',mayu,5) + ln('M142 84 l-22 -6',mayu,5);
  if(me === 'niko') s += ln('M64 106 q14 -18 28 0','#333',6) + ln('M108 106 q14 -18 28 0','#333',6);
  else if(me === 'hoso') s += ln('M64 102 q14 14 28 0','#333',6) + ln('M108 102 q14 14 28 0','#333',6);
  else if(me === 'yasumi') s += ln('M62 102 q16 16 32 0','#333',5.5) + ln('M106 102 q16 16 32 0','#333',5.5);
  else s += ci(78,106,10,'#333') + ci(122,106,10,'#333')
    + ci(81.5,102,3.6,'#fff') + ci(125.5,102,3.6,'#fff');
  s += ci(62,135,10,'rgba(255,140,140,.42)') + ci(138,135,10,'rgba(255,140,140,.42)');
  if(kuchi === 'fuku') s += elo(100,132,11,13.5,'#a04040');
  else if(kuchi === 'ho') s += elo(100,132,16,9,'#a04040');
  else s += pto('M82 126 q18 20 36 0 q-6 22 -18 22 q-12 0 -18 -22 z','#a04040');
  return s;
}
/* たびびと: なまえも せいべつも わからない つくり（personChar と おなじ たかさ）
   🔴 かみは ぼうしの 下に かくす。かたに かける ふくろは いつも おなじ もの
   coat: 'on'（えりを 立てて 手を そえる）/ 'tight'（りょうてで おさえる）/
         'kasane'（2まい かさねて おさえる）/ 'kata'（かたに かける）/ 'off'（ぬいで 手に もつ）
   mood は kgKao と おなじ（normal / hohoemi / odoroki / namida）。senaka で うしろすがた */
function tabibitoChar(opt){
  opt = opt || {};
  const coat = opt.coat || 'on';
  const c = P.kzUwagi, cd = P.kzUwagiD, ck = P.kzUwagiK;
  const naka = P.kzFuku, nakaD = P.kzFukuD;
  const kasane = coat === 'kasane';
  const kiru = coat === 'on' || coat === 'tight' || kasane;
  const osae = coat === 'tight' || kasane;
  const sode = kiru ? c : naka, sodeD = kiru ? cd : nakaD;
  let s = el(0,2,15,4,'rgba(0,0,0,.12)')
    + rco(-9,-16,7,16,'#5b4632',3) + rco(2,-16,7,16,'#5b4632',3)
    /* かたに かけた ふくろ。🔴 うでの まえには かかない（からだの うしろがわに さげる） */
    + rco(-30,-40,8,6,'#a9803f',2)
    + elo(-26,-28,13,11,'#c9a86b')
    + ln('M-35 -31 q9 5 17 -1','#a9803f',2.2)
    /* したの ふく */
    + rco(-13,-55,26,41,naka,10) + ln('M-13 -31 L13 -31',nakaD,2.2);
  /* うわぎ。2まいめを かさねた ときは ひとまわり おおきく する
     🔴 ふちどりの ある かたちを かさねない（りんかくが 2じゅうに なって よごれて 見える） */
  if(kiru){
    const w = kasane ? 18 : 15, tk = kasane ? 46 : 42, ty = kasane ? -59 : -55;
    s += rco(-w,ty,w * 2,tk,c,11);
    /* 🔴 うしろすがたの ときは まえあわせと えりを かかない */
    if(opt.senaka) s += ln('M' + (3 - w) + ' ' + (ty + 5) + ' L' + (w - 3) + ' ' + (ty + 5),cd,2.4);
    else s += ln('M0 ' + (ty + 7) + ' L0 -13',cd,2.2)
      + pto('M' + (2 - w) + ' ' + (ty - 2) + ' L-3 ' + (ty + 8) + ' L' + (2 - w) + ' ' + (ty + 13) + ' z',cd)
      + pto('M' + (w - 2) + ' ' + (ty - 2) + ' L3 ' + (ty + 8) + ' L' + (w - 2) + ' ' + (ty + 13) + ' z',cd);
    /* 🔴 2まいめは「下に きた うわぎが えりから のぞく」かたちで しめす */
    if(kasane && !opt.senaka) s += pt('M-12 -48 L0 -38 L12 -48 L12 -41 L0 -31 L-12 -41 z',ck);
  }
  /* ふくろの ひも（むね・せなかを ななめに わたす） */
  s += ln('M9 -57 L-27 -38',sodeD,2.6);
  /* うしろから 見た えりあし（🔴 かみは 出さない。ぬのの えりだけ） */
  if(opt.senaka) s += rco(-10,-62,20,7,P.kzFukuD,3);
  /* うで */
  if(osae){
    /* りょうてで うわぎを ぎゅっと おさえる */
    s += gr(-15,-52,1,-34, rco(-4,0,8,22,sode,4)) + cio(-8,-36,5,P.skin)
      + gr(15,-52,1,34, rco(-4,0,8,22,sode,4)) + cio(8,-36,5,P.skin);
  } else if(coat === 'on'){
    /* かたほうの 手を えりに そえる */
    s += rco(-22,-53,8,22,sode,4) + cio(-18,-29,4.6,P.skin)
      + gr(14,-52,1,34, rco(-4,0,8,17,sode,4)) + cio(3,-39,4.6,P.skin);
  } else if(coat === 'off'){
    /* ぬいだ うわぎを 手に もつ */
    s += rco(-22,-53,8,22,sode,4) + cio(-18,-29,4.6,P.skin)
      + rco(14,-53,8,22,sode,4) + cio(18,-29,4.6,P.skin)
      + pto('M11 -27 q15 -5 21 8 q5 13 -2 22 q-11 4 -17 -5 q-6 -11 -2 -25 z',c)
      + ln('M16 -21 q9 8 7 21',cd,2.2);
  } else {
    s += rco(-22,-53,8,22,sode,4) + cio(-18,-29,4.6,P.skin)
      + rco(14,-53,8,22,sode,4) + cio(18,-29,4.6,P.skin);
  }
  /* かたに かけた うわぎ。ふくろと ぶつからないように みぎの かたに かける
     （たたんで かたに のせ、まえに すこし たらす） */
  if(coat === 'kata'){
    s += gr(17,-55,1,16, rco(-13,-7,26,14,c,6))
      + pto('M27 -51 q6 12 4 25 l-11 2 q3 -13 -1 -25 z',c)
      + ln('M24 -41 q2 9 0 17',cd,2);
  }
  /* あたま。🔴 かみは ぼうしで かくす
     うしろすがたは ぼうしの うしろがわ（まるい やまと つば）だけを 見せる */
  if(opt.senaka){
    s += rc(-5,-65,10,9,P.skin)
      + cio(0,-76,16,P.kzBou) + elo(0,-72,22,6,P.kzBouD)
      + ln('M-11 -82 q11 -4 22 0','#6b4a30',2.2);
  } else {
    s += cio(0,-72,16,P.skin) + g(0,-70,1,kgKao(opt.mood)) + kzBoushi(0,-72,1);
  }
  return s;
}
/* きたかぜ: くもの ぎじんか。ほおを ふくらませて いきを ふく
   mood: 'fuku'（ふく）/ 'hohoemi' / 'tsukare'（ひとやすみ）
   🔴 おこった かお・いじわるな かおは つくらない（たいようと おなじ かおの ぶひん） */
function kitakazeChar(opt){
  opt = opt || {};
  const mood = opt.mood || 'fuku';
  let s = kzKumoKata(P.kzKaze)
    + ln('M-34 16 q34 10 68 -2',P.kzKazeK,2.6)
    + ln('M-24 -20 q24 -8 48 0',P.kzKazeK,2.2);
  s += g(0,-2,1.15, mood === 'fuku'
      ? kzKao({me:'niko', kuchi:'fuku', hoo:P.kzKazeK, mayu:P.kzKazeH})
      : mood === 'tsukare'
        ? kzKao({me:'yasumi', kuchi:'ho', mayu:P.kzKazeH})
        : kzKao({me:'ake', kuchi:'niko', mayu:P.kzKazeH}));
  if(mood === 'fuku') s += kazeUzu(44,20,.46,.85) + kazeUzu(50,34,.32,.6);
  if(mood === 'tsukare') s += yuge(40,10,.34,.45);
  return s;
}
/* たいよう: ひの まると ほうしゃせんと かお
   mood: 'nikkori' / 'giragira'
   🔴「ぎらぎら」は 目を ほそめる ていどに する（にらむ かお・いばる かおには しない）
   🔴 きたかぜと おなじ かおの ぶひんを つかう */
function taiyouChar(opt){
  opt = opt || {};
  const gira = opt.mood === 'giragira';
  /* yuu で ゆうがたの いろ（にしに しずむ ところ） */
  let s = ci(0,0,66,gira ? 'rgba(255,222,140,.42)' : 'rgba(255,225,150,.28)')
    + kzHikari(0,0,46,gira ? 72 : 62,gira ? 18 : 12,opt.yuu ? P.kzYuuhiK : P.kzTaiyouK,gira ? 5 : 4)
    + cio(0,0,44,opt.yuu ? P.kzYuuhi : P.kzTaiyou)
    + el(-24,-27,11,7,P.kzTaiyouH)
    + g(0,0,1.15, kzKao(gira
        ? {me:'hoso', kuchi:'niko', mayu:'#c98a3f'}
        : {me:'ake', kuchi:'niko', mayu:'#c98a3f'}));
  return s;
}
/* かわで みずあびを する たびびと
   🔴 かたまで みずに つかった ところだけ かく（うわぎは きしに おく・ぼうしは かぶったまま） */
const kzMizuabi = (x,y,s,mood) => g(x,y,s, pto('M-30 14 q6 -24 30 -24 q24 0 30 24 z',P.skin)
  + cio(0,-16,16,P.skin) + g(0,-14,1,kgKao(mood || 'hohoemi')) + kzBoushi(0,-16,1)
  + el(0,14,42,8,'rgba(110,194,221,.5)')
  + ln('M-48 12 q22 -9 44 0','rgba(255,255,255,.7)',3)
  + ln('M6 20 q22 -9 44 0','rgba(255,255,255,.6)',3));

/* ---------- カットイン用の顔 (200x200) ---------- */
const FACES = {
  momo: f => {
    const band = (f && f.band==='red') ? '#e05555' : '#fff';
    return cio(100,112,66,P.skin)
      + pt('M34 112 a66 66 0 0 1 132 0 q-17 12 -33 0 q-16 12 -33 0 q-16 12 -33 0 q-17 12 -33 0 z',P.hair)
      + rco(28,74,144,22,band,10)
      + pto('M172 80 l24 -12 l-5 20 z',band)
      + ci(76,118,9,'#333') + ci(124,118,9,'#333') + ci(79,115,3,'#fff') + ci(127,115,3,'#fff')
      + ln('M60 104 l24 -6','#3a2c20',5) + ln('M140 104 l-24 -6','#3a2c20',5)
      + ci(58,138,9,'rgba(255,140,140,.6)') + ci(142,138,9,'rgba(255,140,140,.6)')
      + pto('M82 148 q18 18 36 0 q-4 16 -18 16 q-14 0 -18 -16 z','#a04040');
  },
  oyabun: f => cio(100,115,72,P.oniR)
      + cio(66,52,22,P.oniHair) + cio(100,44,24,P.oniHair) + cio(134,52,22,P.oniHair)
      + pto('M62 55 q-16 -34 12 -42 l6 20 q-12 8 -8 22 z','#fff2cf')
      + pto('M138 55 q16 -34 -12 -42 l-6 20 q12 8 8 22 z','#fff2cf')
      + ci(72,106,13,'#fff') + ci(128,106,13,'#fff') + ci(74,108,6,'#333') + ci(126,108,6,'#333')
      + ln('M52 90 l30 8','#3a2c20',6) + ln('M148 90 l-30 8','#3a2c20',6)
      + pto('M66 140 q34 26 68 0 q-6 28 -34 28 q-28 0 -34 -28 z','#6e2828')
      + pt('M74 142 l9 15 l-16 1 z','#fff') + pt('M126 142 l-9 15 l16 1 z','#fff'),
  aka: f => cio(100,115,64,P.oniR)
      + cio(84,58,16,P.oniHair) + cio(108,54,17,P.oniHair)
      + pto('M96 52 q-2 -26 18 -24 l-2 16 q-10 2 -8 10 z','#fff2cf')
      + ci(78,114,8,'#333') + ci(122,114,8,'#333') + ci(81,111,2.6,'#fff') + ci(125,111,2.6,'#fff')
      + ln('M62 102 l24 8','#3a2c20',5) + ln('M138 102 l-24 8','#3a2c20',5)
      + ci(62,136,8,'rgba(255,170,150,.6)') + ci(138,136,8,'rgba(255,170,150,.6)')
      + elo(100,153,15,11,'#6e2828'),
  kiji: f => cio(100,110,58,'#1f6f46')
      + pto('M60 138 a58 58 0 0 0 80 0 l0 12 a58 58 0 0 1 -80 0 z','#fff')
      + cio(120,96,26,'#d94f3f')
      + ci(124,94,10,'#333') + ci(128,90,3.4,'#fff')
      + pto('M150 100 l40 6 l-36 14 z','#f2ce6a')
      + pto('M150 116 l30 16 l-34 0 z','#e2b84a')
      + pto('M48 84 q-10 -22 10 -26 q14 4 4 26 z','#25603c'),

  akazukin: f => pto('M20 112 q0 -90 80 -90 q80 0 80 90 q0 56 -26 72 l-108 0 q-26 -16 -26 -72 z',P.hood)
      + elo(100,112,58,62,P.skin)
      + pt('M46 106 a54 56 0 0 1 108 0 q-27 10 -54 4 q-27 6 -54 -4 z','#e0a95e')
      + ci(78,120,9.5,'#333') + ci(122,120,9.5,'#333') + ci(82,116,3.4,'#fff') + ci(126,116,3.4,'#fff')
      + ln('M60 102 l22 -4','#3a2c20',5) + ln('M140 102 l-22 -4','#3a2c20',5)
      + ci(58,142,9,'rgba(255,140,140,.6)') + ci(142,142,9,'rgba(255,140,140,.6)')
      + pto('M84 152 q16 16 32 0 q-4 16 -16 16 q-12 0 -16 -16 z','#a04040')
      + pt('M60 54 q40 -18 80 0 q-40 -6 -80 0 z','rgba(255,255,255,.22)'),

  ookami: f => pto('M56 60 L34 22 L84 34 z',P.wolf) + pto('M144 60 L166 22 L116 34 z',P.wolf)
      + cio(100,110,64,P.wolf)
      + pt('M58 56 L44 32 L80 42 z','#d69aa0') + pt('M142 56 L156 32 L120 42 z','#d69aa0')
      + elo(100,148,44,30,P.wolfBelly)
      + ci(50,124,10,'rgba(255,140,140,.35)') + ci(150,124,10,'rgba(255,140,140,.35)')
      + pto('M84 130 q16 -9 32 0 q-6 17 -16 17 q-10 0 -16 -17 z','#2f2b28')
      + el(74,98,20,13,'#f6da84') + el(126,98,20,13,'#f6da84')
      + ci(77,101,8.5,'#2c2620') + ci(129,101,8.5,'#2c2620') + ci(80,97,3,'#fff') + ci(132,97,3,'#fff')
      + el(74,86,20,12,P.wolf) + el(126,86,20,12,P.wolf)
      + ln('M50 78 l30 8','#3a3330',6) + ln('M150 78 l-30 8','#3a3330',6)
      + pto('M72 154 q28 22 56 0 q-8 20 -28 20 q-20 0 -28 -20 z','#6e3838')
      + pt('M82 156 l7 13 l-14 1 z','#fff') + pt('M118 156 l-7 13 l14 1 z','#fff'),

  obaasan: f => cio(100,114,62,P.skin)
      + pt('M38 114 a62 62 0 0 1 124 0 z','#e6e0d6')
      + cio(100,48,19,'#e6e0d6')
      + ln('M66 118 q12 -14 24 0','#3a2c20',5) + ln('M110 118 q12 -14 24 0','#3a2c20',5)
      + ci(56,142,9,'rgba(255,140,140,.5)') + ci(144,142,9,'rgba(255,140,140,.5)')
      + pto('M84 148 q16 15 32 0 q-4 15 -16 15 q-12 0 -16 -15 z','#a04040')
      + cir(78,118,21,P.ink,4) + cir(122,118,21,P.ink,4)
      + ln('M99 118 L101 118',P.ink,4) + ln('M57 112 L40 105',P.ink,4) + ln('M143 112 L160 105',P.ink,4)
      + pto('M26 182 q74 -18 148 0 l4 18 q-78 18 -156 0 z','#c98aa8'),

  ryoushi: f => cio(100,116,62,P.skin)
      + ci(78,112,9,'#333') + ci(122,112,9,'#333') + ci(81,108,3.2,'#fff') + ci(125,108,3.2,'#fff')
      + ci(56,140,9,'rgba(255,140,140,.5)') + ci(144,140,9,'rgba(255,140,140,.5)')
      + pto('M60 142 q40 44 80 0 q-6 52 -40 52 q-34 0 -40 -52 z','#8a6a44')
      + pto('M84 152 q16 14 32 0 q-4 15 -16 15 q-12 0 -16 -15 z','#8a4040')
      + pt('M66 138 q34 -12 68 0 q-17 15 -34 10 q-17 5 -34 -10 z','#9a7a50')
      + ln('M56 100 l26 -8','#6b5030',7) + ln('M144 100 l-26 -8','#6b5030',7)
      + pto('M30 78 q70 -30 140 0 q-70 18 -140 0 z','#3f6b3f')
      + pto('M46 78 q0 -54 54 -54 q54 0 54 54 z','#4f7d4a')
      + pto('M138 36 q34 -32 50 -24 q-12 26 -42 32 z','#d94f5a'),

  jii: f => cio(100,116,62,P.skin)
      + ci(78,112,9,'#333') + ci(122,112,9,'#333') + ci(81,108,3.2,'#fff') + ci(125,108,3.2,'#fff')
      + ci(54,140,9,'rgba(255,140,140,.5)') + ci(146,140,9,'rgba(255,140,140,.5)')
      + pto('M56 136 q44 54 88 0 q-4 58 -44 58 q-40 0 -44 -58 z','#f2ede2')
      + pto('M84 150 q16 14 32 0 q-4 15 -16 15 q-12 0 -16 -15 z','#a04040')
      + pt('M64 132 q36 -12 72 0 q-18 15 -36 10 q-18 5 -36 -10 z','#fff')
      + ln('M58 96 l26 -6','#ddd6cc',7) + ln('M142 96 l-26 -6','#ddd6cc',7)
      + pto('M28 78 q72 -26 144 0 q-72 16 -144 0 z','#6e7d92')
      + pto('M46 78 q0 -52 54 -52 q54 0 54 52 z','#8496ab'),

  kabu: f => pto('M100 200 C72 166 34 152 34 106 C34 62 64 36 100 36 C136 36 166 62 166 106 C166 152 128 166 100 200 z',P.turnip)
      + pt('M40 86 q60 -30 120 0 q-8 -44 -60 -44 q-52 0 -60 44 z',P.turnipP)
      + el(66,64,15,10,'rgba(255,255,255,.5)')
      + gr(100,42,1,-27, pto('M0 0 q-18 -18 0 -38 q18 20 0 38 z',P.leafG) + ln('M0 -5 L0 -30',P.leafG2,3))
      + gr(100,40,1,2, pto('M0 0 q-20 -20 0 -44 q20 22 0 44 z',P.leafG) + ln('M0 -5 L0 -36',P.leafG2,3))
      + gr(100,42,1,28, pto('M0 0 q-18 -18 0 -38 q18 20 0 38 z',P.leafG) + ln('M0 -5 L0 -30',P.leafG2,3))
      + ci(76,110,11,'#333') + ci(124,110,11,'#333') + ci(80,106,4,'#fff') + ci(128,106,4,'#fff')
      + ci(50,136,10,'rgba(255,140,140,.5)') + ci(150,136,10,'rgba(255,140,140,.5)')
      + pto('M78 144 q22 22 44 0 q-6 22 -22 22 q-16 0 -22 -22 z','#a04040'),

  nezumi: f => cio(56,58,30,'#a8adb6') + cio(144,58,30,'#a8adb6')
      + ci(56,58,17,'#e8bcc4') + ci(144,58,17,'#e8bcc4')
      + cio(100,120,62,'#a8adb6')
      + elo(100,152,34,23,'#d2d7de')
      + ci(78,112,11,'#333') + ci(122,112,11,'#333') + ci(82,108,4,'#fff') + ci(126,108,4,'#fff')
      + ci(50,140,10,'rgba(255,140,140,.45)') + ci(150,140,10,'rgba(255,140,140,.45)')
      + ci(100,146,7,'#e08a8a')
      + ln('M92 154 q8 9 16 0','#5a5248',3)
      + ln('M64 148 l-40 -10','#5a5248',3) + ln('M64 158 l-40 8','#5a5248',3)
      + ln('M136 148 l40 -10','#5a5248',3) + ln('M136 158 l40 8','#5a5248',3),

  urashima: f => cio(100,112,66,P.skin)
      + pt('M34 112 a66 66 0 0 1 132 0 q-33 8 -66 -2 q-33 6 -66 2 z',P.hair)
      + cio(100,38,16,P.hair)
      + ci(76,124,9,'#333') + ci(124,124,9,'#333') + ci(79,120,3,'#fff') + ci(127,120,3,'#fff')
      + ci(54,144,9,'rgba(255,140,140,.6)') + ci(146,144,9,'rgba(255,140,140,.6)')
      + pto('M80 152 q20 20 40 0 q-5 18 -20 18 q-15 0 -20 -18 z','#a04040'),

  otohime: f => pt('M16 200 q0 -122 84 -122 q84 0 84 122 z',P.hair)
      + cio(100,116,62,P.skin)
      + pt('M38 116 a62 62 0 0 1 124 0 q-31 14 -62 3 q-31 11 -62 -3 z',P.hair)
      + ci(78,124,9.5,'#333') + ci(122,124,9.5,'#333') + ci(82,120,3.4,'#fff') + ci(126,120,3.4,'#fff')
      + ln('M62 106 q11 -8 22 -2','#3a2c20',4.5) + ln('M138 106 q-11 -8 -22 -2','#3a2c20',4.5)
      + ci(56,146,9,'rgba(255,140,140,.6)') + ci(144,146,9,'rgba(255,140,140,.6)')
      + pto('M86 152 q14 14 28 0 q-4 15 -14 15 q-10 0 -14 -15 z','#a04040')
      + ln('M146 92 l-8 18',P.ryuguG,3)
      + g(148,86,1.5, ci(-4,0,3.4,P.himeP) + ci(4,0,3.4,P.himeP) + ci(0,-4,3.4,P.himeP) + ci(0,4,3.4,P.himeP) + ci(0,0,2.6,'#ffe9a8')),

  kamec: f => pto('M14 200 q0 -66 86 -66 q86 0 86 66 z',P.kame)
      + rok(48,168,13,P.kameL) + rok(100,180,14,P.kameL) + rok(152,168,13,P.kameL)
      + cio(100,104,60,P.kameH)
      + ci(76,98,12,'#333') + ci(124,98,12,'#333') + ci(80,93,4.2,'#fff') + ci(128,93,4.2,'#fff')
      + ci(50,120,10,'rgba(255,140,140,.4)') + ci(150,120,10,'rgba(255,140,140,.4)')
      + ci(92,120,2.4,'#3a2c20') + ci(108,120,2.4,'#3a2c20')
      + ln('M84 134 q16 12 32 0','#3a2c20',4)
      + ln('M60 78 q16 -8 30 -2',P.kameD,3.5) + ln('M140 78 q-16 -8 -30 -2',P.kameD,3.5),

  kobuta: f => pto('M52 66 L32 30 L84 46 z',P.butaD) + pto('M148 66 L168 30 L116 46 z',P.butaD)
      + pt('M56 62 L38 38 L78 52 z','#f8d7dd') + pt('M144 62 L162 38 L122 52 z','#f8d7dd')
      + cio(100,112,66,P.buta)
      + ci(44,132,11,'rgba(255,140,140,.5)') + ci(156,132,11,'rgba(255,140,140,.5)')
      + elo(100,140,32,25,P.butaL)
      + el(87,140,6,8.5,P.butaNose) + el(113,140,6,8.5,P.butaNose)
      + el(86,124,11,6,'rgba(255,255,255,.5)')
      + ci(76,98,10,'#333') + ci(124,98,10,'#333') + ci(80,94,3.6,'#fff') + ci(128,94,3.6,'#fff')
      + ln('M82 169 q18 12 36 0','#a04040',4.5),

  pwolf: f => pto('M54 64 L34 26 L86 40 z',P.pwolf) + pto('M146 64 L166 26 L114 40 z',P.pwolf)
      + pt('M58 60 L44 34 L80 48 z','#d9a98a') + pt('M142 60 L156 34 L120 48 z','#d9a98a')
      + cio(100,110,64,P.pwolf)
      + ci(46,128,11,'rgba(255,140,140,.4)') + ci(154,128,11,'rgba(255,140,140,.4)')
      + elo(100,150,46,32,P.pwolfB)
      + ci(74,100,11,'#2c2620') + ci(126,100,11,'#2c2620') + ci(78,95,4,'#fff') + ci(130,95,4,'#fff')
      + ln('M50 80 l28 4','#6b4a2c',6) + ln('M150 80 l-28 4','#6b4a2c',6)
      + pto('M86 126 q14 -8 28 0 q-6 15 -14 15 q-8 0 -14 -15 z','#3a2f28')
      + pto('M74 150 q26 22 52 0 q-8 30 -26 30 q-18 0 -26 -30 z','#7a3a3a')
      + elo(100,172,16,10,'#e08a8a')
      + ln('M126 166 q6 13 2 23','rgba(255,255,255,.7)',3.5),

  prenga: f => pto('M-4 64 L100 10 L204 64 z',P.rengaD)
      + ln('M22 50 L178 50','rgba(236,223,198,.45)',3)
      + rco(16,64,168,128,P.renga,4)
      + rengaMe(16,64,168,128,5,4)
      + ci(40,150,12,'rgba(255,150,150,.6)') + ci(160,150,12,'rgba(255,150,150,.6)')
      + rco(40,88,44,38,'#cfe6f0',4) + rco(116,88,44,38,'#cfe6f0',4)
      + rco(34,78,56,9,'#8a5230',3) + rco(110,78,56,9,'#8a5230',3)
      + ci(62,110,10,'#333') + ci(138,110,10,'#333') + ci(66,105,3.6,'#fff') + ci(142,105,3.6,'#fff')
      + pto('M74 192 q0 -44 26 -44 q26 0 26 44 z','#7a5230')
      + ln('M80 170 q20 9 40 0','#5f3f22',3) + ci(116,172,4,'#f2ce6a')
      + rco(130,24,24,28,P.renga,2) + rengaMe(130,24,24,28,2,2),

  hansel: f => cio(100,112,64,P.skin)
      + pt('M36 112 a64 64 0 0 1 128 0 q-22 15 -43 0 q-21 15 -42 0 q-21 15 -43 0 z',P.hgKami)
      + ci(76,120,10,'#333') + ci(124,120,10,'#333') + ci(80,116,3.4,'#fff') + ci(128,116,3.4,'#fff')
      + ln('M58 102 l24 -2','#3a2c20',5) + ln('M142 102 l-24 -2','#3a2c20',5)
      + ci(54,142,9,'rgba(255,140,140,.55)') + ci(146,142,9,'rgba(255,140,140,.55)')
      + pto('M82 150 q18 16 36 0 q-4 17 -18 17 q-14 0 -18 -17 z','#a04040'),

  gretel: f => ln('M56 86 q-30 38 -18 72',P.hgKami,17) + ln('M144 86 q30 38 18 72',P.hgKami,17)
      + ln('M28 116 l14 6','#a9803f',3) + ln('M26 138 l14 6','#a9803f',3)
      + ln('M172 116 l-14 6','#a9803f',3) + ln('M174 138 l-14 6','#a9803f',3)
      + cio(38,160,6.5,P.greFukuD) + cio(162,160,6.5,P.greFukuD)
      + cio(100,114,60,P.skin)
      + pt('M42 114 a58 58 0 0 1 116 0 q-29 12 -58 3 q-29 9 -58 -3 z',P.hgKami)
      + ci(78,122,10,'#333') + ci(122,122,10,'#333') + ci(82,118,3.4,'#fff') + ci(126,118,3.4,'#fff')
      + ln('M60 104 l22 -2','#3a2c20',5) + ln('M140 104 l-22 -2','#3a2c20',5)
      + ci(56,144,9,'rgba(255,140,140,.55)') + ci(144,144,9,'rgba(255,140,140,.55)')
      + pto('M84 152 q16 16 32 0 q-4 16 -16 16 q-12 0 -16 -16 z','#a04040'),

  /* まじょ: あかい めと、とおくが 見えないので ほそめた まぶた */
  majo: f => cio(100,116,60,P.skin)
      + pt('M42 116 a58 58 0 0 1 116 0 q-29 8 -58 2 q-29 6 -58 -2 z',P.majoKami)
      + pto('M34 116 q0 -72 66 -72 q66 0 66 72 q-33 -23 -66 -23 q-33 0 -66 23 z',P.majoFukuD)
      + pto('M46 122 q-11 14 -3 27 q11 -6 9 -25 z',P.majoKami)
      + pto('M154 122 q11 14 3 27 q-11 -6 -9 -25 z',P.majoKami)
      + el(76,116,17,11,'#fff') + el(124,116,17,11,'#fff')
      + ci(76,116,8,P.majoMe) + ci(124,116,8,P.majoMe)
      + ci(73,120,2.8,'#fff') + ci(121,120,2.8,'#fff')
      + pto('M58 104 q18 16 36 0 q-18 -6 -36 0 z',P.skin)
      + pto('M106 104 q18 16 36 0 q-18 -6 -36 0 z',P.skin)
      + ln('M44 128 l-13 7','#c9a58a',3) + ln('M156 128 l13 7','#c9a58a',3)
      + pto('M100 110 q-9 16 -7 26 q3 9 14 5 q9 -6 2 -14 q-5 -8 -9 -17 z','#f4cfa8')
      + ci(52,146,9,'rgba(255,140,140,.4)') + ci(148,146,9,'rgba(255,140,140,.4)')
      + ln('M84 160 q16 9 32 0','#a04040',4)
      + pto('M22 184 q78 -20 156 0 l6 16 q-84 18 -168 0 z','#9a8fa8'),

  /* しろい とりは そらいろを しいて うかび上がらせる */
  tori: f => rc(0,0,200,200,'#bfe0f0')
      + cloud(40,42,1) + cloud(166,160,.8)
      + pto('M40 152 q-32 -14 -32 4 q18 13 38 5 z',P.shiro)
      + elo(80,152,52,40,P.shiro)
      + pto('M74 130 q-22 16 -16 34 q26 5 30 -22 z','#e4ecf4')
      + cio(112,92,56,P.shiro)
      + pto('M160 88 l30 12 l-30 14 z',P.kuchi)
      + ci(118,80,12,'#333') + ci(123,75,4.4,'#fff')
      + ci(72,120,10,'rgba(255,170,170,.35)')
      + pt('M78 58 q26 -16 50 -2 q-25 -1 -50 2 z','#eef4fa'),

  /* かぐやひめ: ながい くろかみと しろ〜うすむらさきの かさねの えり（かんむり・かんざしは なし） */
  kaguya: f => pt('M18 200 q0 -122 82 -122 q82 0 82 122 z',P.hair)
      + cio(100,110,64,P.skin)
      + pt('M36 110 a64 64 0 0 1 128 0 q-32 13 -64 2 q-32 11 -64 -2 z',P.hair)
      + ci(78,120,9.5,'#333') + ci(122,120,9.5,'#333') + ci(82,116,3.4,'#fff') + ci(126,116,3.4,'#fff')
      + ln('M62 102 q11 -7 22 -1','#3a2c20',4.5) + ln('M138 102 q-11 -7 -22 -1','#3a2c20',4.5)
      + ci(54,142,9,'rgba(255,140,140,.5)') + ci(146,142,9,'rgba(255,140,140,.5)')
      + pto('M86 150 q14 14 28 0 q-4 15 -14 15 q-10 0 -14 -15 z','#a04040')
      + pto('M62 200 L100 180 L138 200 z',P.kgShiro)
      + pt('M80 200 L100 189 L120 200 z',P.kgUsu),

  /* おきな: ねじり はちまきと みじかい しらひげ・ひやけした はだ（かぶの jii とは べつ）
     🔴 ひげで かおを うめない（くちを 上に だす） */
  okina: f => cio(100,116,62,'#f6d9b4')
      + pt('M38 116 a62 62 0 0 1 124 0 z',P.shiraga)
      + rco(28,62,144,21,P.tenugui,8) + pto('M170 66 l26 -10 l-4 24 z',P.tenugui)
      + ci(78,116,9,'#333') + ci(122,116,9,'#333') + ci(81,112,3.2,'#fff') + ci(125,112,3.2,'#fff')
      + ci(52,140,9,'rgba(255,140,140,.5)') + ci(148,140,9,'rgba(255,140,140,.5)')
      + ln('M56 102 l26 -6','#ddd6cc',7) + ln('M144 102 l-26 -6','#ddd6cc',7)
      + pt('M76 140 q24 -8 48 0 q-12 11 -24 8 q-12 3 -24 -8 z','#f2ede2')
      + pto('M84 150 q16 13 32 0 q-4 14 -16 14 q-12 0 -16 -14 z','#a04040')
      + pto('M78 166 q22 26 44 0 q-4 26 -22 26 q-18 0 -22 -26 z','#f2ede2')
      + ln('M46 128 l-12 6','#e0b48e',3) + ln('M154 128 l12 6','#e0b48e',3),

  /* おうな: あねさん かぶりの てぬぐい・よこに のぞく しらが
     （あかずきんの obaasan とは べつ。めがねは なし） */
  ouna: f => cio(100,118,60,'#f8dcbc')
      + pt('M40 118 a60 60 0 0 1 120 0 z',P.shiraga)
      + pt('M36 132 q-6 -32 10 -50 q-3 28 6 48 z',P.shiraga)
      + pt('M164 132 q6 -32 -10 -50 q3 28 -6 48 z',P.shiraga)
      + pto('M36 104 q0 -72 64 -72 q64 0 64 72 q-32 -20 -64 -20 q-32 0 -64 20 z',P.tenugui)
      + ln('M46 88 q54 -20 108 0','#d8d2c2',3)
      + pto('M156 102 l22 0 l-11 18 z',P.tenugui)
      + ci(78,122,9,'#333') + ci(122,122,9,'#333') + ci(81,118,3.2,'#fff') + ci(125,118,3.2,'#fff')
      + ln('M62 108 l22 2','#c9c2b8',5) + ln('M138 108 l-22 2','#c9c2b8',5)
      + ci(54,146,9,'rgba(255,140,140,.5)') + ci(146,146,9,'rgba(255,140,140,.5)')
      + pto('M84 152 q16 15 32 0 q-4 15 -16 15 q-12 0 -16 -15 z','#a04040')
      + ln('M46 134 l-12 6','#e0b48e',3) + ln('M154 134 l12 6','#e0b48e',3),

  /* つきの つかい: ひかりの わと しろい ころも。🔴 ほおべに・目の ハイライト・えみは つけない */
  shisha: f => ci(100,104,90,'rgba(232,227,247,.34)')
      + cir(100,104,80,'rgba(205,191,228,.7)',6)
      + cir(100,104,80,'rgba(255,255,255,.5)',2.5)
      + cio(100,116,60,P.skin)
      + pt('M40 116 a60 60 0 0 1 120 0 q-30 11 -60 2 q-30 9 -60 -2 z',P.hair)
      + ci(78,122,8.5,'#333') + ci(122,122,8.5,'#333')
      + ln('M62 104 q11 -4 22 0','#3a2c20',4.5) + ln('M138 104 q-11 -4 -22 0','#3a2c20',4.5)
      + ln('M88 156 L112 156','#a04040',4)
      + pto('M42 200 q16 -36 58 -36 q42 0 58 36 z',P.tennin)
      + pt('M86 200 q6 -24 14 -32 q8 8 14 32 z',P.tenninK)
      + ln('M74 186 L60 200',P.tenninObi,3) + ln('M126 186 L140 200',P.tenninObi,3),

  /* ロバ: ながい みみ・はいちゃの けなみ。🔴 4ひきとも しろい まつげ（としを とった すがた）で 目は あかるい */
  roba: f => pto('M58 70 q-26 -50 -8 -62 q24 10 28 58 z',P.robaKe)
      + pto('M142 70 q26 -50 8 -62 q-24 10 -28 58 z',P.robaKe)
      + pt('M62 62 q-17 -34 -7 -42 q16 10 18 40 z',P.robaHara)
      + pt('M138 62 q17 -34 7 -42 q-16 10 -18 40 z',P.robaHara)
      + cio(100,108,60,P.robaKe)
      + ln('M66 66 q34 -14 68 0',P.robaTate,11)
      + elo(100,152,38,30,P.robaHara)
      + ci(88,146,4.6,'#4a3f38') + ci(112,146,4.6,'#4a3f38')
      + ln('M84 168 q16 9 32 0','#6e5f52',4)
      + ci(78,104,10,'#333') + ci(122,104,10,'#333') + ci(82,100,3.6,'#fff') + ci(126,100,3.6,'#fff')
      + ln('M58 96 l26 -5',P.shiraga,5) + ln('M142 96 l-26 -5',P.shiraga,5)
      + ci(50,128,10,'rgba(255,140,140,.4)') + ci(150,128,10,'rgba(255,140,140,.4)'),

  /* イヌ: たれ耳の りょうけん。しろい くちもとと まつげ */
  inu: f => pto('M52 76 q-30 26 -22 76 q26 6 38 -50 z',P.brInuKeD)
      + pto('M148 76 q30 26 22 76 q-26 6 -38 -50 z',P.brInuKeD)
      + pt('M54 82 q-22 22 -17 60 q18 3 26 -40 z','#a9825e')
      + pt('M146 82 q22 22 17 60 q-18 3 -26 -40 z','#a9825e')
      + cio(100,110,60,P.brInuKe)
      + elo(100,152,40,30,P.brInuKuchi)
      + ci(100,134,8,'#3a2f28')
      + ln('M84 170 q16 9 32 0','#7a4040',4)
      + ci(78,106,10,'#2c2620') + ci(122,106,10,'#2c2620') + ci(82,102,3.6,'#fff') + ci(126,102,3.6,'#fff')
      + ln('M56 98 l26 -5',P.shiraga,5) + ln('M144 98 l-26 -5',P.shiraga,5)
      + ci(50,132,10,'rgba(255,140,140,.4)') + ci(150,132,10,'rgba(255,140,140,.4)'),

  /* ネコ: はいぐろの けなみ。🔴 ひかる目では ない ふつうの かお（かぶの nekoChar とは べつ） */
  neko: f => pto('M58 74 L34 20 L92 52 z',P.brNekoKe) + pto('M142 74 L166 20 L108 52 z',P.brNekoKe)
      + pt('M62 70 L44 32 L86 54 z','#8a8792') + pt('M138 70 L156 32 L114 54 z','#8a8792')
      + cio(100,112,62,P.brNekoKe)
      + elo(100,146,32,24,P.brNekoHara)
      + el(76,108,17,13,'#f6da84') + el(124,108,17,13,'#f6da84')
      + ln('M76 98 l0 20','#2c2620',5) + ln('M124 98 l0 20','#2c2620',5)
      + ci(72,102,3.4,'#fff') + ci(120,102,3.4,'#fff')
      + ln('M56 94 l24 -4',P.shiraga,4.5) + ln('M144 94 l-24 -4',P.shiraga,4.5)
      + pt('M94 136 l6 4 l-6 5 l-6 -5 z','#e08a8a')
      + ln('M96 150 q-8 8 -16 2','#2c2620',3) + ln('M104 150 q8 8 16 2','#2c2620',3)
      + ln('M74 140 l-26 -6','#d8d2c8',3) + ln('M74 149 l-26 5','#d8d2c8',3)
      + ln('M126 140 l26 -6','#d8d2c8',3) + ln('M126 149 l26 5','#d8d2c8',3),

  /* オンドリ: あたまの 上の とさか・下がる にくぜん・きいろい くちばし */
  ondori: f => pto('M70 62 Q74 30 86 44 Q92 22 104 40 Q112 20 122 42 Q130 34 133 58 Q100 74 70 62 z',P.ondoriTosaka)
      + cio(100,116,60,P.ondoriHa)
      + pt('M46 128 a56 56 0 0 1 20 -46 q-16 24 -12 48 z',P.ondoriHaD)
      + pto('M88 156 q9 22 0 30 q-9 -8 -7 -30 z',P.ondoriTosaka)
      + pto('M112 156 q-9 22 0 30 q9 -8 7 -30 z',P.ondoriTosaka)
      + pto('M82 132 L118 132 L100 166 z',P.ondoriKuchi)
      + ln('M84 142 L116 142',P.ondoriHaD,3)
      + ci(76,106,11,'#333') + ci(124,106,11,'#333') + ci(80,101,4,'#fff') + ci(128,101,4,'#fff')
      + ln('M54 96 l24 -5',P.shiraga,5) + ln('M146 96 l-24 -5',P.shiraga,5)
      + ci(52,130,10,'rgba(255,140,140,.3)') + ci(148,130,10,'rgba(255,140,140,.3)'),

  /* どろぼう: こわがりの きやく。🔴 きょうあくには かかない（笑いは 本人の かんちがいから 出る） */
  dorobou: f => cio(100,116,62,P.skin)
      + pto('M44 102 q0 -60 56 -60 q56 0 56 60 q-28 -19 -56 -19 q-28 0 -56 19 z',P.doroA)
      + pto('M46 98 q54 -18 108 0 l6 12 q-60 16 -120 0 z',P.doroAD)
      + ln('M62 74 q38 -14 76 0','rgba(255,255,255,.14)',3)
      + pt('M60 150 q40 22 80 0 q-30 32 -80 0 z','rgba(74,58,44,.22)')
      + el(78,124,12,14,'#fff') + el(122,124,12,14,'#fff')
      + ci(78,126,7,'#333') + ci(122,126,7,'#333')
      + ci(54,148,9,'rgba(255,140,140,.45)') + ci(146,148,9,'rgba(255,140,140,.45)')
      + elo(100,162,11,9,'#8a4040'),

  /* ネズミ（じゅうにし）: あたたかい ねずみいろ・みみは 上・はなすじに しろい すじ
     🔴 かぶの nezumi（つめたい はいいろ・みみは よこ）とは べつ */
  jnezumi: f => cio(54,50,31,P.juNezu) + cio(146,50,31,P.juNezu)
      + ci(54,50,17,P.juNezuMimi) + ci(146,50,17,P.juNezuMimi)
      + cio(100,118,62,P.juNezu)
      + pt('M100 58 q-17 32 -11 58 q11 8 22 0 q6 -26 -11 -58 z',P.juNezuHara)
      + elo(100,152,34,23,P.juNezuHara)
      + ci(78,110,11,'#2c2620') + ci(122,110,11,'#2c2620')
      + ci(82,105,4,'#fff') + ci(126,105,4,'#fff')
      + ci(48,138,10,'rgba(255,140,140,.42)') + ci(152,138,10,'rgba(255,140,140,.42)')
      + ci(100,146,7,'#e08a8a')
      + ln('M92 155 q8 8 16 0','#8a8074',3)
      + ln('M66 148 l-38 -11','#8a8074',3) + ln('M66 158 l-38 7','#8a8074',3)
      + ln('M134 148 l38 -11','#8a8074',3) + ln('M134 158 l38 7','#8a8074',3),

  /* ネコ（じゅうにし）: ちゃとらの わかい ネコ・みどりの 目
     🔴 ブレーメンの neko（はいぐろ・きいろい 目・しろい まつげ）とは べつ */
  jneko: f => pto('M56 72 L32 18 L92 50 z',P.juNeko) + pto('M144 72 L168 18 L108 50 z',P.juNeko)
      + pt('M60 68 L44 32 L86 52 z',P.juUsagiMimi) + pt('M140 68 L156 32 L114 52 z',P.juUsagiMimi)
      + cio(100,112,62,P.juNeko)
      + ln('M78 66 q12 -8 22 -3',P.juNekoShima,4.5) + ln('M122 66 q-12 -8 -22 -3',P.juNekoShima,4.5)
      + ln('M100 58 l0 12',P.juNekoShima,4.5)
      + ln('M54 118 l20 5',P.juNekoShima,4.5) + ln('M146 118 l-20 5',P.juNekoShima,4.5)
      + elo(100,148,32,24,P.juNekoHara)
      + el(76,108,17,14,'#8fc49a') + el(124,108,17,14,'#8fc49a')
      + ln('M76 98 l0 20','#2c2620',5) + ln('M124 98 l0 20','#2c2620',5)
      + ci(71,102,3.4,'#fff') + ci(119,102,3.4,'#fff')
      + ci(50,132,10,'rgba(255,140,140,.35)') + ci(150,132,10,'rgba(255,140,140,.35)')
      + pt('M94 138 l6 4 l-6 5 l-6 -5 z','#e08a8a')
      + ln('M96 152 q-8 8 -16 2','#2c2620',3) + ln('M104 152 q8 8 16 2','#2c2620',3)
      + ln('M74 142 l-26 -6','#d8d2c8',3) + ln('M74 151 l-26 5','#d8d2c8',3)
      + ln('M126 142 l26 -6','#d8d2c8',3) + ln('M126 151 l26 5','#d8d2c8',3),

  /* ウシ: みじかい つのと 大きな はなづら */
  jushi: f => pto('M54 60 q-30 -16 -24 -38 q26 4 34 32 z',P.juTsuno)
      + pto('M146 60 q30 -16 24 -38 q-26 4 -34 32 z',P.juTsuno)
      + elo(38,98,20,13,P.juUshiD) + elo(162,98,20,13,P.juUshiD)
      + cio(100,112,60,P.juUshi)
      + elo(100,152,41,30,P.juUshiHara)
      + ci(88,148,4.8,'#8a7a68') + ci(112,148,4.8,'#8a7a68')
      + ln('M84 172 q16 9 32 0','#8a7a68',4)
      + ci(78,106,10,'#2c2620') + ci(122,106,10,'#2c2620')
      + ci(82,101,3.6,'#fff') + ci(126,101,3.6,'#fff')
      + ln('M56 92 l26 -4','#332e29',5) + ln('M144 92 l-26 -4','#332e29',5)
      + ci(50,130,10,'rgba(255,140,140,.3)') + ci(150,130,10,'rgba(255,140,140,.3)'),

  /* トリ（じゅうにし・あいだに はいる やく）: わかい すがた
     🔴 ブレーメンの ondori（しろい まつげ）とは べつ。えりの はねを つけて わけて いる */
  jutori: f => pto('M74 58 Q78 28 88 44 Q94 20 104 40 Q114 20 122 44 Q130 36 132 58 Q102 72 74 58 z',P.ondoriTosaka)
      + cio(100,116,58,P.ondoriHa)
      + pt('M50 130 a54 54 0 0 1 22 -46 q-18 24 -14 48 z',P.ondoriHaD)
      + pt('M52 158 q48 26 96 0 q-10 30 -48 30 q-38 0 -48 -30 z','#f2e2c2')
      + ln('M60 168 q40 18 80 0','#ded0ae',3)
      + pto('M88 156 q9 22 0 30 q-9 -8 -7 -30 z',P.ondoriTosaka)
      + pto('M112 156 q-9 22 0 30 q9 -8 7 -30 z',P.ondoriTosaka)
      + pto('M82 132 L118 132 L100 166 z',P.ondoriKuchi)
      + ln('M84 142 L116 142',P.ondoriHaD,3)
      + ci(76,106,11,'#2c2620') + ci(124,106,11,'#2c2620')
      + ci(80,101,4,'#fff') + ci(128,101,4,'#fff')
      + ci(52,130,10,'rgba(255,140,140,.3)') + ci(148,130,10,'rgba(255,140,140,.3)'),

  /* おじいさん（つる）: ずきんと みじかい しらひげ
     🔴 かぶの jii（ふねの ぼうしと 大きな ひげ）・かぐやの okina（ねじり はちまき）とは べつ */
  tsjii: f => cio(100,116,62,'#f6d9b4')
      + pt('M36 132 q-6 -30 8 -46 q-1 30 8 48 z',P.shiraga)
      + pt('M164 132 q6 -30 -8 -46 q1 30 -8 48 z',P.shiraga)
      + pto('M32 124 q-6 -98 68 -98 q74 0 68 98 q-30 -34 -68 -32 q-38 -2 -68 32 z',P.tsZukin)
      + pt('M32 124 q-2 20 10 30 l14 -32 z',P.tsZukin) + pt('M168 124 q2 20 -10 30 l-14 -32 z',P.tsZukin)
      + pto('M160 114 l26 -6 l-8 22 z',P.tsZukin)
      + ci(78,116,9,'#333') + ci(122,116,9,'#333') + ci(81,112,3.2,'#fff') + ci(125,112,3.2,'#fff')
      + ln('M58 102 l24 -4','#ddd6cc',6) + ln('M142 102 l-24 -4','#ddd6cc',6)
      + ci(52,140,9,'rgba(255,140,140,.5)') + ci(148,140,9,'rgba(255,140,140,.5)')
      + pt('M76 140 q24 -8 48 0 q-12 11 -24 8 q-12 3 -24 -8 z','#f2ede2')
      + pto('M84 150 q16 13 32 0 q-4 14 -16 14 q-12 0 -16 -14 z','#a04040')
      + pto('M78 166 q22 26 44 0 q-4 26 -22 26 q-18 0 -22 -26 z','#f2ede2'),

  /* おばあさん（つる）: てぬぐいの はちまきと うしろで まとめた しらが
     🔴 あかずきんの obaasan（めがね）・かぐやの ouna（あねさん かぶり）とは べつ */
  tsbaa: f => pto('M82 70 q0 -34 18 -34 q18 0 18 34 z',P.shiraga)
      + cio(100,118,60,'#f8dcbc')
      + pt('M40 118 a60 60 0 0 1 120 0 z',P.shiraga)
      + ln('M50 116 q50 -20 100 0','#d8d2c2',2.4)
      + pto('M32 86 q68 -26 136 0 l4 18 q-72 -22 -144 0 z',P.tsTenugui)
      + pto('M168 96 l18 -2 l-7 17 z',P.tsTenugui)
      + ci(78,122,9,'#333') + ci(122,122,9,'#333') + ci(81,118,3.2,'#fff') + ci(125,118,3.2,'#fff')
      + ln('M62 110 l22 2','#c9c2b8',5) + ln('M138 110 l-22 2','#c9c2b8',5)
      + ci(54,146,9,'rgba(255,140,140,.5)') + ci(146,146,9,'rgba(255,140,140,.5)')
      + pto('M84 152 q16 15 32 0 q-4 15 -16 15 q-12 0 -16 -15 z','#a04040')
      + ln('M46 134 l-12 6','#e0b48e',3) + ln('M154 134 l12 6','#e0b48e',3),

  /* むすめ: しろい きものの えりに あかい はんえり・しずかな かお
     🔴 かぐや（うすむらさきの かさね）とは えりの いろで わける */
  tsmusume: f => pt('M22 200 q0 -118 78 -118 q78 0 78 118 z',P.hair)
      + cio(100,112,62,P.skin)
      + pt('M38 112 a62 62 0 0 1 124 0 q-31 12 -62 2 q-31 10 -62 -2 z',P.hair)
      + ci(78,120,9.5,'#333') + ci(122,120,9.5,'#333') + ci(82,116,3.4,'#fff') + ci(126,116,3.4,'#fff')
      + ln('M62 102 q11 -6 22 -1','#3a2c20',4.5) + ln('M138 102 q-11 -6 -22 -1','#3a2c20',4.5)
      + ci(54,142,9,'rgba(255,140,140,.42)') + ci(146,142,9,'rgba(255,140,140,.42)')
      + ln('M89 152 q11 9 22 0','#a04040',3.6)
      + pto('M56 200 L100 176 L144 200 z',P.tsKimono)
      + pt('M76 200 L100 187 L124 200 z',P.tsObi),

  /* つる: しろい あたま・とうちょうの あか・くろい めもとと のど
     🔴 ヘンゼルの tori（まるい しろい とり）とは べつ。ながい くちばしで つると わかるように する */
  tstsuru: f => pt('M62 200 q4 -58 38 -66 q34 8 38 66 z',P.tsTsuru)
      + pt('M62 200 q2 -44 26 -58 l12 12 q-20 18 -20 46 z',P.tsTsuruKuro)
      + pt('M138 200 q-2 -44 -26 -58 l-12 12 q20 18 20 46 z',P.tsTsuruKuro)
      + elo(100,106,45,56,P.tsTsuru)
      + pto('M70 76 q30 -32 60 0 q-30 -13 -60 0 z',P.tsTsuruAka)
      + ln('M69 77 q31 -12 62 0','#d8dde2',2.4)
      + ci(78,110,10,'#2c2620') + ci(122,110,10,'#2c2620')
      + ci(82,105,3.6,'#fff') + ci(126,105,3.6,'#fff')
      + ci(68,134,8,'rgba(255,140,140,.24)') + ci(132,134,8,'rgba(255,140,140,.24)')
      + pto('M91 128 L109 128 L100 194 z','#cfbe8e')
      + ln('M100 138 L100 186','#a89464',2.2),

  /* アリババ: しろっぽい ターバン・みじかい ひげ・しずかな 目
     🔴 ブレーメンの dorobou（ずきんと くちの ぬの）とは べつの あたま */
  alibaba: f => cio(100,118,60,P.skin)
      + pt('M40 118 a60 60 0 0 1 120 0 z',P.hair)
      + abTurbanF(P.abAliT,'#c9bda4')
      + ci(78,122,9,'#333') + ci(122,122,9,'#333') + ci(81,118,3.2,'#fff') + ci(125,118,3.2,'#fff')
      + ln('M60 108 q11 -6 22 -1','#3a2c20',4.5) + ln('M140 108 q-11 -6 -22 -1','#3a2c20',4.5)
      + ci(52,146,9,'rgba(255,140,140,.45)') + ci(148,146,9,'rgba(255,140,140,.45)')
      + pto('M84 152 q16 13 32 0 q-4 14 -16 14 q-12 0 -16 -14 z','#a04040')
      + pto('M74 166 q26 22 52 0 q-6 30 -26 30 q-20 0 -26 -30 z','#4a3a2c'),

  /* モルジアナ: きんいろの ずきん・くろい まえがみ・おだやかな 目
     🔴 かぐや（かさねの きもの）とは べつ。かんむり・かざりは つけない */
  morgiana: f => pt('M26 200 q0 -104 74 -104 q74 0 74 104 z',P.abMoruZ)
      + ln('M40 176 q60 -22 120 0',P.abMoruZD,3)
      + cio(100,120,58,P.skin)
      + pt('M42 120 a58 58 0 0 1 116 0 q-29 11 -58 1 q-29 10 -58 -1 z',P.hair)
      + abTurbanF(P.abMoruZ,P.abMoruZD)
      + ci(78,124,9.5,'#333') + ci(122,124,9.5,'#333') + ci(82,120,3.4,'#fff') + ci(126,120,3.4,'#fff')
      + ln('M62 108 q11 -6 22 -1','#3a2c20',4.5) + ln('M138 108 q-11 -6 -22 -1','#3a2c20',4.5)
      + ci(54,148,9,'rgba(255,140,140,.42)') + ci(146,148,9,'rgba(255,140,140,.42)')
      + ln('M89 156 q11 9 22 0','#a04040',3.6),

  /* カシム: にいさんの ゆたかな みなり（きんいろの ターバンと ふさふさの ひげ）
     🔴 ひげと ターバンの いろで アリババと 見わける */
  kashimu: f => cio(100,118,60,P.skin)
      + pt('M40 118 a60 60 0 0 1 120 0 z','#3a2c20')
      + abTurbanF(P.abKashiT,'#d9c48a')
      + cio(100,48,10,P.abKinD) + ci(100,48,4,P.abKinK)
      + ci(78,120,9,'#333') + ci(122,120,9,'#333') + ci(81,116,3.2,'#fff') + ci(125,116,3.2,'#fff')
      + ln('M58 106 q12 -6 24 -1','#3a2c20',5) + ln('M142 106 q-12 -6 -24 -1','#3a2c20',5)
      + ci(52,144,9,'rgba(255,140,140,.42)') + ci(148,144,9,'rgba(255,140,140,.42)')
      + pto('M60 146 q40 28 80 0 q-8 50 -40 50 q-32 0 -40 -50 z','#3a2c20')
      + pto('M84 156 q16 12 32 0 q-4 13 -16 13 q-12 0 -16 -13 z','#a04040'),

  /* とうぞくの かしら: へんそうの すがた
     🔴 かおは 目もとだけ（くちもとは ぬので つつむ）。にらむ まゆには しない
     🔴 ターバンと ぬのは いろを かえ、目の まわりに はだを のこす
        （かおを ぜんぶ おおうと こわい すがたに 見えて しまう） */
  kashira: f => cio(100,118,60,'#f6dcb8')
      + abTurbanF(P.abKashiraT,'#8a93a4')
      + ci(78,120,9,'#333') + ci(122,120,9,'#333') + ci(81,116,3.2,'#fff') + ci(125,116,3.2,'#fff')
      + ln('M60 104 q12 -5 24 -1','#4a4238',4.5) + ln('M140 104 q-12 -5 -24 -1','#4a4238',4.5)
      + ci(54,144,9,'rgba(255,140,140,.35)') + ci(146,144,9,'rgba(255,140,140,.35)')
      + pto('M34 142 q66 -22 132 0 q-8 60 -66 60 q-58 0 -66 -60 z',P.abKashiraNu)
      + ln('M42 152 q58 -18 116 0','#616a79',2.6)
      + ln('M50 170 q50 -14 100 0','#616a79',2.2),

  /* たびびと: なまえも せいべつも わからない つくり
     🔴 かみの けを 1本も 出さない（ぼうしの つばで あたまを ぜんぶ かくす）
     🔴 ひげ・かざり・かみがたで 男女が わかる しるしは つけない */
  tabibito: f => cio(100,120,60,P.skin)
      + ci(78,124,9,'#333') + ci(122,124,9,'#333') + ci(81,120,3.2,'#fff') + ci(125,120,3.2,'#fff')
      + ln('M60 104 q12 -6 24 -1','#6b5a4a',4.5) + ln('M140 104 q-12 -6 -24 -1','#6b5a4a',4.5)
      + ci(52,148,9,'rgba(255,140,140,.45)') + ci(148,148,9,'rgba(255,140,140,.45)')
      + pto('M84 154 q16 13 32 0 q-4 14 -16 14 q-12 0 -16 -14 z','#a04040')
      + pto('M56 62 q-4 -46 44 -46 q48 0 44 46 z',P.kzBou)
      + elo(100,64,74,17,P.kzBouD)
      + ln('M62 56 q38 -14 76 0','#6b4a30',3),

  /* きたかぜ: くもの ぎじんか。ほおを ふくらませて いきを ふく
     🔴 たいようと おなじ かおの ぶひん（kzKaoF）で つくる。目・まゆ・ほおの いちも おなじ
     🔴 おこった かお・いじわるな かおには しない */
  kitakaze: f => pto('M28 158 a38 38 0 0 1 0 -76 a46 46 0 0 1 78 -22 a40 40 0 0 1 66 22 a38 38 0 0 1 0 76 q-36 18 -72 0 q-36 -18 -72 0 z',P.kzKaze)
      + ln('M42 66 q36 -14 72 -2',P.kzKazeK,4)
      + kzKaoF({me:'ake', kuchi:'fuku', hoo:P.kzKazeK, mayu:P.kzKazeH})
      + kazeUzu(114,178,.6,.8),

  /* たいよう: ひの まると ほうしゃせん
     🔴 きたかぜと おなじ かおの ぶひん（kzKaoF）。「ぎらぎら」でも 目を ほそめる ていどに とどめる */
  taiyou: f => ci(100,110,98,'rgba(255,225,150,.26)')
      + kzHikari(100,110,78,98,18,P.kzTaiyouK,5)
      + cio(100,110,74,P.kzTaiyou)
      + el(58,62,17,10,P.kzTaiyouH)
      + kzKaoF({me:'ake', kuchi:'niko', mayu:'#c98a3f'})
};

/* ---------- タイトルの 絵（せかいの ものがたりの とびら）の 部品 ----------
   🔴 場面の 絵（480x300）とは べつの 400x260。index.html が 小さく して 出す
   🔴 和ふうの 部品（まつ・とりい・ふじさん・さくら）は 1つも 入れない
   🔴 せかい地図は まるい かたまりの あつまりだけ。くにざかいの 線は 引かない・
      どこかの 国を 大きく しない */
const tiWrap = i => '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + i + '</svg>';
const tiSora = '<defs><linearGradient id="g_title" x1="0" y1="0" x2="0" y2="1">'
  + '<stop offset="0" stop-color="#e4f1fb"/><stop offset="1" stop-color="#fdf4e0"/></linearGradient></defs>'
  + '<rect width="400" height="260" fill="url(#g_title)"/>';
/* うすい 大陸の かげ（ただの だえん）。よこに ならべて 地図の おびに 見せる
   🔴 くもに 見えないように たてに つぶし、キャラの あたま（y=140より下）には かからない */
const tiChizu = () => {
  const c = 'rgba(112,164,126,.26)';
  /* 世界地図の わく（よこながの だえん＝うみ）。この 中に 大陸を おくと くもに 見えない。
     2まい かさねて ふちを やわらかく する */
  return el(200,100,172,62,'rgba(142,196,226,.09)') + el(200,100,160,54,'rgba(142,196,226,.13)')
    /* にしの りく（きたと みなみを ほそく つなぐ） */
    + el(90,78,26,13,c) + el(84,93,13,8,c) + el(98,112,12,16,c) + el(102,131,8,10,c)
    /* まんなかの りく */
    + el(176,70,21,8,c) + el(185,90,15,19,c) + el(189,113,10,10,c)
    /* ひがしの りく */
    + el(272,72,42,15,c) + el(292,91,21,11,c) + el(250,85,13,7,c)
    /* みなみの しま */
    + el(316,118,13,8,c);
};
/* 小さな ほし（きんいろの きらきら＋つぶ） */
const tiHoshi = '<g opacity=".55">' + spark(36,46,.72) + spark(122,30,.52) + spark(210,50,.5)
  + spark(296,30,.6) + spark(372,96,.5) + spark(154,104,.42) + spark(240,96,.4) + '</g>'
  + ci(88,26,1.8,'#f0d79a') + ci(268,62,1.6,'#f0d79a') + ci(196,22,1.6,'#f0d79a')
  + ci(342,132,1.6,'#f0d79a') + ci(30,120,1.6,'#f0d79a');
/* ひらいた 本（クリームの ページ・あかちゃの ひょうし）。
   🔴 主人公たちより あとに かさねる（ページの ふちで 足もとを かくす ため） */
const tiHon = () => el(200,252,178,10,'rgba(74,58,44,.10)')
  + pto('M24 200 Q116 174 200 204 Q284 174 376 200 L376 250 Q284 224 200 254 Q116 224 24 250 z','#b3603f')
  + pto('M30 190 Q118 164 200 194 Q282 164 370 190 L370 240 Q282 214 200 244 Q118 214 30 240 z','#fffdf5')
  + ln('M200 194 L200 244',P.ink,3)
  + ln('M58 208 Q108 202 154 216','#c9a86b',2.4) + ln('M58 222 Q108 216 154 230','#c9a86b',2.4)
  + ln('M342 208 Q292 202 246 216','#c9a86b',2.4) + ln('M342 222 Q292 216 246 230','#c9a86b',2.4);
/* ページから かおを 出す 主人公たち。🔴 きそんの キャラ関数を そのまま よぶ（新しい 絵は つくらない）
   🔴 足もとは ページの ふちより 下に おく（本が かくして くれる）
   🔴 後列（本の おく）は 前列より 小さく・高い ところに おく。
      前列の あたまで かおが かくれないように、いちばん せの ひくい ネズミの うしろに ならべる */
const tiMinna = () =>
  /* 後列: ヘンゼルとグレーテル */
    g(250,182,.55, gretelChar({mood:'niko'}))
  /* 前列 */
  + g(52,214,.66, akazukinChar(false))
  + g(85,206,.64, butaChar({size:'m', mood:'yasashii'}))
  + g(100,232,.72, tsuruChar({}))
  + g(150,206,.64, momoChar('#fff'))
  + g(182,218,.66, kaguyaChar({}))
  + g(220,218,.66, morgianaChar({mood:'hohoemi'}))
  + g(246,196,.72, jnezumiChar({}))
  + g(276,196,.62, jnekoChar({}))
  + g(310,216,.60, robaChar({tate:1, mood:'niko'}))
  + g(352,214,.66, tabibitoChar({coat:'on', mood:'hohoemi'}));
/* ひらいた ページの 上に いる 2つ（うらしまの かめ・おおきな かぶ）。
   🔴 tiHon() の あとに かさねる（ページの 手前に のって いるように 見せる）
   🔴 ページの ふちから はみ出さない 大きさに とどめる */
const tiTemae = () =>
    g(74,220,.72, kameChar())
  + g(330,229,.29, kabuArt(false));

/* ---------- 場面 ---------- */
const ART = {

/* ----- タイトル画面（せかいの ものがたりの とびら） ----- */
title: f => tiWrap(tiSora + tiChizu() + tiHoshi
  + g(54,60,.42, kitakazeChar({mood:'hohoemi'}))
  + g(346,60,.40, taiyouChar({}))
  + tiMinna()
  + tiHon()
  + tiTemae()),

yama: f => wrap(grad('g_yama',P.skyTop,P.skyBtm) + sun(414,54) + cloud(120,56,1) + cloud(330,84,.8)
  + mtns() + el(110,258,160,72,P.grass2) + el(400,266,180,84,P.grass)
  + house(250,208,1) + tree(60,232,1)
  + pt('M0 300 L0 268 Q240 248 480 264 L480 300 z',P.sea) + waveRow(276,.8)
  + g(126,214,.78,jiichanChar()) + g(408,266,.85,baachanChar()) + elo(432,276,16,6,'#fff')),

momo_river: f => wrap(grad('g_mriver',P.skyTop,P.skyBtm) + cloud(90,50,.9) + cloud(390,66,.7) + mtns()
  + rc(0,236,480,64,P.grass)
  + pt('M0 168 L480 206 L480 300 L0 300 z',P.sea)
  + waveRow(232,.75) + waveRow(266,.5)
  + cio(252,204,45,P.peach) + pt('M252 162 q11 42 0 84 q-4 -42 0 -84 z',P.peachD)
  + el(236,190,12,7,'rgba(255,255,255,.55)')
  + gr(286,166,1,-32, elo(0,0,17,8,'#5aa66b'))
  + spark(198,158,1) + spark(312,214,.8)
  + g(92,268,1,baachanChar())),

baby: f => wrap(grad('g_baby','#fbe9cd','#f2d5a4') + rc(0,232,480,68,'#dcc27e')
  + ln('M0 232 L480 232','#c4a763',3)
  + pto('M104 210 a48 48 0 0 1 92 0 z',P.peach) + pt('M112 208 a40 40 0 0 1 76 0 z','#ffd9a8')
  + pto('M284 210 a48 48 0 0 1 92 0 z',P.peach) + pt('M292 208 a40 40 0 0 1 76 0 z','#ffd9a8')
  + cio(240,172,27,P.skin)
  + pto('M240 146 q-6 -12 9 -11 q7 7 -3 13 z',P.hair)
  + ci(231,170,2.6,'#333') + ci(249,170,2.6,'#333')
  + ci(224,180,3.5,'rgba(255,140,140,.55)') + ci(256,180,3.5,'rgba(255,140,140,.55)')
  + ln('M234 181 q6 6 12 0','#333',2.5)
  + elo(240,216,30,18,'#fff')
  + cio(214,206,6,P.skin) + cio(266,206,6,P.skin)
  + spark(150,96,1.1) + spark(340,86,.9) + spark(240,66,.7)
  + g(60,282,.95,jiichanChar()) + g(420,282,.95,baachanChar())),

kids: f => wrap(grad('g_kids',P.skyTop,P.skyBtm) + sun(60,52) + cloud(300,54,.9)
  + rc(0,226,480,74,P.grass) + tree(430,236,1.1)
  + elo(190,252,96,26,P.sand)
  + `<ellipse cx="190" cy="252" rx="78" ry="19" fill="none" stroke="#c9a86b" stroke-width="4"/>`
  + g(150,252,.85,momoChar(null, true))
  + g(238,254,.8,villagerChar('#7a9ac9'))
  + g(360,268,.75,villagerChar('#c98a4b'))
  + spark(190,170,.8)),

momotaro: f => wrap(grad('g_mtaro',P.skyTop,P.skyBtm) + sun(418,52) + cloud(110,64,1) + mtns()
  + rc(0,230,480,70,P.grass)
  + house(398,212,.8)
  + rco(316,152,6,130,P.woodD,2) + rco(324,158,64,44,'#fff',3) + cio(356,180,14,P.peach)
  + g(200,282,1.5,momoChar(momoBand(f)))),

momo_home: f => wrap(grad('g_mhome','#fbe9cd','#f2d5a4') + rc(0,232,480,68,'#dcc27e')
  + ln('M0 232 L480 232','#c4a763',3)
  + cio(240,196,52,P.peach)
  + ln('M240 148 q12 48 0 96','#e87f96',4)
  + gr(276,154,1,-30, elo(0,0,17,8,'#5aa66b'))
  + el(226,182,13,8,'rgba(255,255,255,.55)')
  + g(110,282,1,jiichanChar()) + g(376,282,1,baachanChar())
  + spark(150,110,.9) + spark(340,100,.8)),

village_sad: f => wrap(grad('g_vsad','#a8b6c6','#d4dde4')
  + pt('M0 214 L90 158 L180 210 L260 168 L360 218 L480 172 L480 232 L0 232 z','rgba(140,150,160,.45)')
  + rc(0,228,480,72,'#c9b68c')
  + house(110,206,.85) + house(390,208,.8)
  + rco(216,206,52,30,'#8a6d3b',4) + pto('M216 206 l52 0 l-8 -14 l-36 0 z','#6e5530')
  + ln('M228 214 q14 8 28 0','#5c4626',3)
  + g(200,278,.9,villagerChar('#9a7a9a')) + g(300,280,.9,villagerChar('#7a9a8a'))
  + ci(440,46,18,'rgba(255,240,200,.5)')),

kibidango: f => wrap(grad('g_kibi','#fbe9cd','#f2d5a4') + rc(0,230,480,70,'#e0c890')
  + rco(150,206,180,15,P.wood,4) + rc(162,221,10,22,P.woodD) + rc(308,221,10,22,P.woodD)
  + elo(240,202,54,12,'#fff')
  + cio(219,190,10,'#f4e6b8') + cio(241,188,10,'#f4e6b8') + cio(262,190,10,'#f4e6b8')
  + ln('M225 168 q3 -8 -2 -14','rgba(160,160,160,.7)',2.5) + ln('M248 164 q3 -8 -2 -14','rgba(160,160,160,.7)',2.5)
  + g(106,270,1.05,baachanChar()) + g(384,272,1.1,momoChar(momoBand(f)))),

hachimaki: f => wrap(grad('g_hachi','#fbe9cd','#f2d5a4') + rc(0,230,480,70,'#e0c890')
  + rco(160,196,160,52,'#b0703f',6) + el(240,196,80,12,'#c98a4b')
  + rco(184,182,52,14,'#fff',7) + pto('M236 184 l14 -8 l-3 12 z','#fff')
  + rco(250,182,52,14,'#e05555',7) + pto('M302 184 l14 -8 l-3 12 z','#e05555')
  + g(96,272,1.05,baachanChar()) + g(392,274,1.1,momoChar(null))
  + spark(240,140,.9)),

michi: f => wrap(grad('g_michi',P.skyTop,P.skyBtm) + cloud(80,60,.9) + cloud(400,50,.8)
  + pt('M0 190 L110 130 L220 195 z','rgba(120,170,120,.6)')
  + pt('M300 196 L480 176 L480 300 L300 300 z','rgba(120,190,220,.45)')
  + rc(0,226,480,74,P.grass)
  + pto('M230 300 L258 300 L150 214 L128 214 z',P.sand)
  + pto('M250 300 L282 300 L352 214 L330 214 z',P.sand)
  + rco(236,150,7,80,P.woodD,2)
  + rco(200,150,44,16,'#f4e6c8',3) + rco(238,172,44,16,'#f4e6c8',3)
  + g(240,286,1.05,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))),

yamamichi: f => wrap(grad('g_ymichi',P.skyTop,P.skyBtm) + sun(70,50) + cloud(190,88,.8)
  + pt('M0 172 L480 148 L480 300 L0 300 z','rgba(120,190,220,.5)')
  + waveRow(200,.5) + waveRow(240,.35)
  + pto('M348 148 q14 -20 30 0 q10 12 -4 16 q-24 4 -26 -16 z','#4a4a55')
  + pt('M0 300 L0 220 Q120 190 200 226 Q300 262 480 250 L480 300 z',P.grass2)
  + tree(90,246,.9)
  + g(180,240,1,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))),

umizoi: f => wrap(grad('g_umizoi',P.skyTop,P.skyBtm) + sun(414,50) + cloud(120,58,.9)
  + pt('M0 160 L480 190 L480 300 L0 300 z',P.sea)
  + waveRow(210,.7) + waveRow(248,.5)
  + pt('M0 300 L0 250 Q240 226 480 262 L480 300 z',P.sand)
  + pto('M242 262 q-9 -14 4 -18 q13 4 5 18 q-4 4 -9 0 z',P.peach)
  + ln('M244 250 l3 10','#f08a9e',2)
  + spark(252,238,.9)
  + g(160,282,1.05,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + pt('M330 130 l7 3 l7 -3 l-7 6 z',P.ink) + pt('M370 112 l6 3 l6 -3 l-6 5 z',P.ink)),

dog: f => wrap(grad('g_dog',P.skyTop,P.skyBtm) + sun(420,52) + cloud(150,54,.9) + mtns()
  + rc(0,230,480,70,P.grass) + tree(60,238,1)
  + pto('M212 300 L268 300 L352 232 L322 232 z',P.sand)
  + g(152,274,1.15,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + g(332,274,1.7,dogChar())),

saru: f => wrap(grad('g_saru',P.skyTop,P.skyBtm) + cloud(100,60,.9) + mtns()
  + rc(0,230,480,70,P.grass)
  + rco(336,104,20,130,P.woodD,4) + cio(346,96,44,P.grass2) + cio(306,116,26,P.grass2) + cio(390,120,26,P.grass2)
  + g(152,274,1.15,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog ? g(88,278,1.2,dogChar()) : '')
  + (f && f.saru ? g(315,274,1.4,saruChar()) : g(346,160,1.5,saruChar()))),

kiji: f => wrap(grad('g_kiji',P.skyTop,P.skyBtm) + sun(66,52) + cloud(300,50,.8) + mtns()
  + rc(0,230,480,70,P.grass) + tree(430,240,1)
  + g(152,274,1.15,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog ? g(90,278,1.15,dogChar()) : '')
  + (f && f.saru ? g(228,278,1,saruChar()) : '')
  + g(330,160,1.7,kijiFly())
  + ln('M282 128 q12 -8 24 0','#fff',3) + ln('M382 104 q12 -8 24 0','#fff',3)),

fune: f => wrap(grad('g_fune',P.skyTop,P.skyBtm) + sun(66,50) + cloud(210,44,.9) + cloud(400,74,.7)
  + rc(0,150,480,150,P.sea)
  + elo(432,152,44,15,P.rock2)
  + waveRow(180,.6) + waveRow(226,.5) + waveRow(268,.4)
  + pto('M146 234 Q240 252 344 234 L316 272 Q240 284 174 272 z',P.wood)
  + ln('M160 246 L330 246','#7a5c34',3)
  + rco(240,142,7,96,P.woodD,2)
  + pto('M182 150 L238 150 L238 216 L182 208 z','#fff') + cio(210,180,12,P.peach)
  + pto('M247 142 l16 -8 l-3 12 z','#e05555')
  + g(202,240,.95,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog  ? g(258,242,.85,dogChar()) : '')
  + (f && f.saru ? g(298,242,.9,saruChar()) : '')
  + (f && f.kiji ? g(368,182,1.05,kijiFly()) : '')),

fune_night: f => wrap(grad('g_fnight',P.nightTop,P.nightBtm)
  + star(60,44,2) + star(150,30,1.6) + star(230,58,2.2) + star(320,26,1.6) + star(420,48,2) + star(390,90,1.4) + star(100,90,1.4) + star(270,100,1.2)
  + ci(408,58,22,'rgba(245,230,180,.35)') + ci(408,58,15,'#f5e6b8')
  + rc(0,168,480,132,P.seaNight)
  + ln('M370 200 q20 -6 40 0','rgba(245,230,180,.4)',3) + ln('M350 240 q26 -8 52 0','rgba(245,230,180,.25)',3)
  + pt('M150 232 Q240 250 340 232 L314 268 Q240 280 176 268 z','#241d16')
  + rc(242,142,6,94,'#241d16')
  + pt('M186 150 L240 150 L240 214 L186 206 z','#3a3350')
  + g(210,236,1, ci(0,-52,13,'#241d16') + rc(-11,-42,22,32,'#241d16'))
  + (f && f.dog  ? g(258,236,1, el(0,-10,13,9,'#241d16') + ci(11,-20,8,'#241d16')) : '')
  + (f && f.saru ? g(292,236,1, ci(0,-12,10,'#241d16') + ci(0,-26,8,'#241d16')) : '')
  + (f && f.kiji ? g(245,132,1, el(0,0,11,7,'#241d16') + ci(9,-8,5,'#241d16')) : '')
  + ci(300,224,7,'rgba(255,200,120,.9)') + ci(300,224,13,'rgba(255,200,120,.3)')
  + waveRow(284,.15)),

fune_asa: f => wrap(grad('g_fasa','#f2a96e','#f7e3b4')
  + ci(240,150,40,'rgba(255,220,150,.5)') + ci(240,150,26,'#ffd76e')
  + rc(0,150,480,150,'#4d9cc0')
  + waveRow(190,.5) + waveRow(240,.4)
  + pto('M180 150 q22 -44 60 -44 q40 0 60 44 z','#3f3f4a')
  + rc(216,118,10,34,'#2c2c34') + rc(254,118,10,34,'#2c2c34') + rc(206,110,68,10,'#2c2c34')
  + pt('M140 260 Q240 278 350 258 L322 292 Q240 302 170 292 z',P.wood)
  + rc(244,196,6,70,P.woodD)
  + g(230,266,.9,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog  ? g(285,268,.8,dogChar()) : '')
  + (f && f.saru ? g(320,268,.8,saruChar()) : '')
  + (f && f.kiji ? g(330,140,1.2,kijiFly()) : cloud(340,110,.7))),

onigashima: f => wrap(grad('g_onigs',P.grayTop,P.grayBtm)
  + rc(0,240,480,60,P.rock) + elo(84,248,104,42,P.rock2) + elo(420,252,110,46,P.rock2)
  + pt('M60 240 l30 -46 l30 46 z','#7d7466') + pt('M370 240 l34 -54 l34 54 z','#7d7466')
  + rco(184,104,26,136,'#3a3a3a',3) + rco(270,104,26,136,'#3a3a3a',3)
  + rco(166,84,148,24,'#2e2e2e',5) + rc(176,116,128,10,'#4a4a4a')
  + pto('M182 84 l58 -20 l58 20 z','#242424')
  + g(238,290,.95,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog  ? g(186,290,.7,dogChar()) : '')
  + (f && f.saru ? g(298,292,.7,saruChar()) : '')
  + (f && f.kiji ? g(340,220,.9,kijiFly()) : '')),

oyabun: f => wrap(grad('g_oyab','#5d7292','#8296ad')
  + rc(0,242,480,58,P.rock) + elo(70,250,92,38,P.rock2) + elo(432,252,80,36,P.rock2)
  + rco(58,150,8,96,P.woodD,2) + pto('M62 152 q-14 -24 0 -40 q14 16 0 40 z','#f7a642') + ci(62,118,8,'rgba(255,200,120,.5)')
  + rco(416,150,8,96,P.woodD,2) + pto('M420 152 q-14 -24 0 -40 q14 16 0 40 z','#f7a642') + ci(420,118,8,'rgba(255,200,120,.5)')
  + g(318,288,1.35,oniChar(P.oniR,{club:true,mood:'angry'}))
  + g(122,286,1.1,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog  ? g(66,288,.8,dogChar()) : '')
  + (f && f.saru ? g(178,290,.75,saruChar()) : '')
  + (f && f.kiji ? g(180,180,.95,kijiFly()) : '')),

maitta: f => wrap(grad('g_maitta','#7d90ab','#9fb0c4')
  + rc(0,242,480,58,P.rock) + elo(80,250,92,38,P.rock2)
  + gr(400,262,1,80, rco(-7,-58,14,72,P.wood,7) + ci(-3,-44,2,'#554') + ci(3,-30,2,'#554'))
  + g(310,288,1.2,oniSit(P.oniR,'sad'))
  + g(130,286,1.1,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog  ? g(72,288,.8,dogChar()) : '')
  + (f && f.saru ? g(196,290,.72,saruChar()) : '')
  + (f && f.kiji ? g(210,182,.9,kijiFly()) : '')),

talk: f => wrap(grad('g_talk',P.duskTop,P.duskBtm) + ci(404,62,30,'rgba(255,190,120,.5)') + ci(404,62,20,'#f7a76e')
  + rc(0,240,480,60,P.rock) + elo(90,248,100,40,P.rock2)
  + g(148,284,1.1,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + g(330,286,1.15,oniSit(P.oniR,'sad'))
  + (f && f.dango==='full' ? elo(240,266,34,9,'#fff') + cio(228,257,7,'#f4e6b8') + cio(241,255,7,'#f4e6b8') + cio(254,257,7,'#f4e6b8') : '')
  + (f && f.dog ? g(70,288,.75,dogChar()) : '')
  + (f && f.saru ? g(430,290,.7,saruChar()) : '')
  + (f && f.kiji ? g(60,150,.9,kijiFly()) : '')),

festival: f => wrap(grad('g_fest',P.skyTop,P.skyBtm) + sun(420,50)
  + ln('M0 44 Q240 78 480 44','#c9a86b',3)
  + pt('M40 52 l18 0 l-9 16 z','#e8804f') + pt('M110 60 l18 0 l-9 16 z','#5aa66b') + pt('M180 64 l18 0 l-9 16 z','#4a8fd4')
  + pt('M260 64 l18 0 l-9 16 z','#e8b04f') + pt('M330 60 l18 0 l-9 16 z','#d488a4') + pt('M400 52 l18 0 l-9 16 z','#5aa66b')
  + rc(0,232,480,68,P.grass)
  + house(78,206,.75) + house(420,208,.7)
  + rco(202,220,92,42,P.wood,6)
  + cio(218,266,12,'#5b4632') + ln('M212 260 L224 272','#3a2c20',2) + ln('M224 260 L212 272','#3a2c20',2)
  + cio(278,266,12,'#5b4632') + ln('M272 260 L284 272','#3a2c20',2) + ln('M284 260 L272 272','#3a2c20',2)
  + cio(226,212,11,'#ffd76e') + cio(248,206,12,'#ffd76e') + cio(268,214,10,P.peach)
  + spark(226,186,.8) + spark(262,190,.7)
  + g(148,286,1.15,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + (f && f.dog  ? g(310,286,.95,dogChar()) : '')
  + (f && f.saru ? g(352,288,.95,saruChar()) : '')
  + (f && f.kiji ? g(396,232,1.05,kijiFly()) : '')
  + g(96,286,.9,baachanChar())
  + g(44,286,.85,villagerChar('#c09454')) + g(452,288,.8,villagerChar('#7a9a8a'))),

nakanaori: f => wrap(grad('g_naka',P.skyTop,P.skyBtm) + sun(60,50)
  + ln('M0 44 Q240 78 480 44','#c9a86b',3)
  + pt('M70 54 l16 0 l-8 15 z','#e8804f') + pt('M200 66 l16 0 l-8 15 z','#5aa66b') + pt('M340 60 l16 0 l-8 15 z','#d488a4')
  + rc(0,232,480,68,P.grass)
  + house(70,206,.7)
  + g(158,286,1.05,momoChar(f && f.band==='red' ? '#e05555' : '#fff'))
  + g(272,288,1.05,oniChar(P.oniR,{mood:'happy'}))
  + g(352,290,1,oniKid('happy'))
  + (f && f.dog  ? g(92,288,.85,dogChar()) : '')
  + (f && f.saru ? g(216,290,.8,saruChar()) : '')
  + (f && f.kiji ? g(80,170,.95,kijiFly()) : '')
  + g(410,288,.9,baachanChar())
  + g(452,288,.85,villagerChar('#c09454'))
  + ci(120,116,4,'#f8b8c8') + ci(230,92,4,'#f8b8c8') + ci(330,124,4,'#f8b8c8') + ci(420,100,4,'#f8b8c8') + ci(60,140,3,'#f8b8c8')),

/* ----- おにの はなし ----- */
oni_village: f => wrap(grad('g_oniv','#a3adba','#c9d0d8')
  + rc(0,238,480,62,P.rock) + elo(96,246,110,44,P.rock2) + elo(404,250,106,46,P.rock2)
  + pt('M40 238 l26 -40 l26 40 z','#7d7466')
  + g(410,214,.9, rco(-40,-40,80,40,'#8a8272',4) + pto('M-50 -40 L0 -70 L50 -40 z','#b0a068'))
  + rco(170,200,130,42,'#7a6a52',4)
  + ln('M186 240 l0 -20','#5f5140',3.5) + ln('M212 240 l0 -15','#5f5140',3.5) + ln('M240 240 l0 -20','#5f5140',3.5) + ln('M268 240 l0 -14','#5f5140',3.5)
  + g(140,288,.95,oniChar(P.oniR,{mood:'sad'}))
  + g(330,290,1,oniSit(P.oniR,'sad'))
  + g(404,292,1,oniKid('sad'))),

oni_dinner: f => wrap(grad('g_onid','#6e5a48','#4a3a30')
  + el(240,262,200,34,'#3a2e26')
  + cio(210,240,10,P.rock2) + cio(240,246,10,P.rock2) + cio(270,240,10,P.rock2)
  + pt('M228 232 q4 -20 12 -22 q10 8 8 22 z','#f7a642') + pt('M234 230 q3 -12 6 -13 q5 5 4 13 z','#ffd76e')
  + ci(240,222,18,'rgba(255,180,100,.25)')
  + ln('M240 168 L240 200','#3a2c20',3) + elo(240,208,22,12,'#5c5c66')
  + elo(150,258,16,7,'#fff') + elo(330,258,16,7,'#fff')
  + g(140,252,.9,oniSit(P.oniR,'sad'))
  + g(348,254,.95,oniKid('sad'))),

oni_kaigi: f => wrap(grad('g_onik',P.nightTop,P.nightBtm)
  + star(60,40,1.8) + star(160,26,1.4) + star(300,36,1.8) + star(420,30,1.6) + star(380,70,1.2)
  + rc(0,244,480,56,'#2c2620')
  + ln('M212 268 L268 268','#5c4626',6) + ln('M222 274 L258 262','#5c4626',6)
  + pt('M220 262 q6 -34 20 -38 q16 12 12 38 z','#f7a642') + pt('M228 258 q4 -20 10 -24 q8 8 6 24 z','#ffd76e')
  + ci(240,240,30,'rgba(255,180,100,.2)')
  + g(120,286,1.15,oniChar(P.oniR,{club:true,mood:'angry'}))
  + g(354,288,.95,oniChar(P.oniDark,{mood:'sad'}))
  + g(428,290,.85,oniKid('sad'))
  + g(258,292,.9,oniChar(P.oniR,{mood:'sad'}))),

oni_ship: f => wrap(grad('g_onis',P.skyTop,P.skyBtm) + sun(70,50) + cloud(240,44,.8)
  + rc(0,150,480,150,P.sea)
  + elo(60,152,46,16,P.rock2)
  + waveRow(190,.6) + waveRow(240,.45)
  + pto('M166 234 Q250 252 354 234 L326 272 Q250 284 194 272 z',P.wood)
  + rco(255,140,7,96,P.woodD,2)
  + pto('M197 150 L253 150 L253 214 L197 206 z','#fff')
  + g(226,240,.85,oniChar(P.oniR,{mood:'sad'}))
  + g(300,242,.85,oniKid('sad'))
  + g(330,238,1, rco(-14,-18,28,18,'#b0703f',4) + ln('M-14 -18 q14 -14 28 0','#7a5c34',3) + cio(-5,-22,4,'#7a4090') + cio(3,-24,4,'#7a4090') + cio(-1,-28,4,'#7a4090'))),

oni_hatake: f => wrap(grad('g_onih',P.skyTop,P.skyBtm) + sun(414,52) + cloud(120,50,.9)
  + rc(0,222,480,78,'#a9814f')
  + ln('M0 244 L480 244','#8a6a3f',3) + ln('M0 268 L480 268','#8a6a3f',3)
  + pt('M60 240 l5 -10 l5 10 z','#5aa66b') + pt('M140 240 l5 -10 l5 10 z','#5aa66b') + pt('M220 240 l5 -10 l5 10 z','#5aa66b') + pt('M300 240 l5 -10 l5 10 z','#5aa66b') + pt('M380 240 l5 -10 l5 10 z','#5aa66b')
  + pt('M100 264 l5 -10 l5 10 z','#5aa66b') + pt('M260 264 l5 -10 l5 10 z','#5aa66b') + pt('M420 264 l5 -10 l5 10 z','#5aa66b')
  + g(120,290,1,oniChar(P.oniR,{mood:'happy'}))
  + g(390,292,.9,oniKid('happy'))
  + spark(180,140,1) + spark(320,120,.8)),

oni_raid: f => wrap(grad('g_onir',P.nightTop,P.nightBtm)
  + star(80,36,1.6) + star(220,26,1.4) + star(360,40,1.6)
  + rc(0,150,480,150,P.seaNight)
  + pt('M0 150 L480 150 L480 176 Q240 160 0 176 z','rgba(30,50,90,.6)')
  + rc(80,120,26,20,'#3a3a3a') + rc(150,116,30,24,'#3a3a3a') + rc(230,122,24,18,'#3a3a3a') + rc(310,118,28,22,'#3a3a3a')
  + rc(86,126,8,8,'#ffd76e') + rc(158,122,8,8,'#ffd76e') + rc(318,124,8,8,'#ffd76e')
  + ci(90,130,10,'rgba(255,215,110,.25)') + ci(162,126,10,'rgba(255,215,110,.25)')
  + pt('M0 300 L0 236 Q240 210 480 236 L480 300 z','#241d16')
  + g(240,268,1.05,oniChar(P.oniNight,{mood:'sad'}))),

oni_takara: f => wrap(grad('g_onit','#3a3030','#241d1d')
  + el(240,268,210,30,'#1a1414')
  + rco(58,148,8,92,P.woodD,2) + pto('M62 150 q-13 -22 0 -36 q13 14 0 36 z','#f7a642')
  + rco(300,206,90,52,'#8a5c30',6) + rc(300,206,90,14,'#a9743f') + cio(345,214,7,'#f2ce6a')
  + cio(220,232,13,'#ffd76e') + cio(248,226,13,'#ffd76e') + cio(234,210,13,'#ffd76e') + cio(206,214,11,'#ffd76e')
  + pto('M158 240 q-4 -26 14 -30 q16 8 8 30 z',P.peachD)
  + spark(236,186,1) + spark(210,254,.7) + spark(280,244,.8)
  + g(120,288,1.05,oniChar(P.oniR,{mood:'sad'}))),

oni_hama: f => wrap(grad('g_onihm',P.nightTop,P.nightBtm)
  + ci(404,54,26,'rgba(245,230,180,.35)') + ci(404,54,17,'#f5e6b8')
  + star(80,40,1.8) + star(200,28,1.4) + star(300,50,1.6)
  + rc(0,168,480,132,P.seaNight) + waveRow(196,.25)
  + pt('M0 300 L0 240 Q240 216 480 248 L480 300 z','#bfa87c')
  + rco(226,236,44,26,'#8a5c30',4) + rc(226,236,44,9,'#a9743f') + cio(248,240,4.5,'#f2ce6a')
  + g(150,288,1,oniChar(P.oniNight,{mood:'sad'}))
  + g(340,282,1.05,girlChar())
  + spark(248,214,.8)),

oni_night: f => wrap(grad('g_onin',P.nightTop,P.nightBtm)
  + ci(400,60,30,'rgba(245,230,180,.3)') + ci(400,60,20,'#f5e6b8') + ci(392,54,16,P.nightTop)
  + star(70,50,1.8) + star(170,34,1.5) + star(250,70,1.3) + star(330,28,1.6) + star(120,100,1.2)
  + rc(0,196,480,104,P.seaNight)
  + ln('M330 236 q22 -6 44 0','rgba(245,230,180,.3)',3)
  + pt('M0 300 L0 156 L96 176 L156 226 L110 300 z','#141d33')
  + g(96,212,.95,oniChar(P.oniNight,{mood:'sad'}))
  + pt('M352 226 L414 226 L402 240 L364 240 z','#3a3a3a')
  + rc(380,206,3,20,'#3a3a3a') + pto('M383 206 l16 9 l-16 7 z','#ddd6cc')),

/* ----- キジの はなし ----- */
kiji_yama: f => wrap(grad('g_kjy',P.skyTop,P.skyBtm) + sun(414,52) + cloud(90,60,.9) + mtns()
  + rc(0,236,480,64,P.grass)
  + rco(348,90,22,150,P.woodD,5)
  + cio(358,82,48,P.grass2) + cio(316,106,28,P.grass2) + cio(402,110,28,P.grass2)
  + rco(288,150,64,10,P.woodD,4)
  + g(310,150,1.15,kijiChar())
  + g(110,282,1.1,dogChar())
  + ln('M96 246 q10 -8 22 -2','rgba(0,0,0,.15)',3)
  + g(210,278,.9,saruChar())),

kiji_sora: f => f && f.kfly==='umi'
  ? wrap(grad('g_kjs1',P.skyTop,'#d8f2fa') + cloud(90,80,1.1) + cloud(360,60,.9) + cloud(230,130,.7)
    + pt('M0 190 L480 210 L480 300 L0 300 z',P.sea)
    + waveRow(236,.5) + waveRow(268,.4)
    + pto('M356 210 q16 -26 40 -26 q26 0 38 26 z','#3f3f4a')
    + g(180,120,1.9,kijiFly()))
  : wrap(grad('g_kjs2',P.skyTop,'#d8f2fa') + cloud(80,70,1.1) + cloud(390,54,.9)
    + pt('M0 210 L110 160 L230 214 L340 170 L480 216 L480 300 L0 300 z','rgba(120,175,120,.75)')
    + g(150,250,.5, house(0,0,1)) + g(240,262,.45, house(0,0,1)) + g(330,252,.5, house(0,0,1))
    + ln('M150 216 q4 -12 -2 -20','rgba(220,220,220,.8)',4) + ln('M330 218 q4 -12 -2 -20','rgba(220,220,220,.8)',4)
    + g(240,110,1.9,kijiFly())),

kiji_gyoretsu: f => wrap(grad('g_kjg',P.skyTop,P.skyBtm) + sun(60,50) + cloud(390,60,.8)
  + rc(0,200,480,100,P.grass)
  + pto('M0 300 L60 300 L300 210 L260 210 z',P.sand)
  + tree(420,232,1)
  + g(210,258,.6,momoChar('#fff'))
  + g(160,262,.6,dogChar())
  + g(255,256,.55,saruChar())
  + g(330,120,1.6,kijiFly())
  + ln('M300 156 q10 8 2 20','rgba(0,0,0,.2)',3)),

kiji_join: f => wrap(grad('g_kjj',P.skyTop,P.skyBtm) + sun(414,52) + cloud(140,54,.9) + mtns()
  + rc(0,232,480,68,P.grass)
  + g(170,280,1.15,momoChar('#fff'))
  + g(80,282,1.1,dogChar())
  + g(430,280,1,saruChar())
  + cio(214,224,7,'#f4e6b8')
  + g(320,278,1.5,kijiChar())
  + spark(262,200,.9)),

kiji_scout: f => f && f.kscout==='high'
  ? wrap(grad('g_kjc1',P.skyTop,'#d8f2fa') + cloud(80,60,1) + cloud(400,90,.8)
    + el(240,210,150,64,'#5c6a7d') + el(240,204,138,56,'#6e7d8f')
    + rc(226,164,10,30,'#2c2c34') + rc(248,164,10,30,'#2c2c34') + rc(218,158,48,8,'#2c2c34')
    + pto('M300 190 q30 10 44 34','#8a8272')
    + g(240,90,1.7,kijiFly()))
  : wrap(grad('g_kjc2',P.grayTop,P.grayBtm)
    + rc(0,190,480,110,P.sea) + waveRow(220,.6) + waveRow(258,.45)
    + rco(196,60,24,130,'#3a3a3a',3) + rco(266,60,24,130,'#3a3a3a',3) + rco(180,42,126,22,'#2e2e2e',5)
    + g(230,190,.62,oniChar('#7a5560',{mood:'angry',club:true}))
    + g(288,192,.55,oniChar('#5c6a55',{mood:'angry'}))
    + g(130,180,1.5,kijiFly())
    + ln('M60 200 q16 -8 32 0','#fff',3)),

kiji_hero: f => wrap(grad('g_kjh',P.duskTop,P.duskBtm)
  + ci(240,80,44,'rgba(255,210,140,.5)') + ci(240,80,28,'#ffd76e')
  + rc(0,238,480,62,P.rock) + elo(240,252,70,22,P.rock2)
  + g(240,236,1.7,kijiChar())
  + g(110,288,1,momoChar('#fff'))
  + g(340,290,1,dogChar())
  + g(396,288,.9,saruChar())
  + spark(180,160,1.1) + spark(300,150,1) + spark(240,120,.8)),

oni_asa: f => wrap(grad('g_oniasa','#f7c98a','#fbe9cd')
  + ci(240,74,48,'rgba(255,220,150,.55)') + ci(240,74,30,'#ffd76e')
  + rc(0,240,480,60,P.rock) + elo(100,248,100,40,P.rock2) + elo(410,252,90,38,P.rock2)
  + g(160,286,1.1,momoChar('#fff'))
  + g(320,288,1,oniChar(P.oniR,{mood:'happy'}))
  + g(408,292,.85,oniKid('happy'))
  + spark(240,140,1) + spark(150,120,.8) + spark(330,110,.8)),

miokuri: f => wrap(grad('g_mioku','#f7c98a','#fbe9cd')
  + ci(80,66,40,'rgba(255,220,150,.5)') + ci(80,66,26,'#ffd76e')
  + rc(0,160,480,140,'#6db9d9')
  + waveRow(200,.5) + waveRow(244,.35)
  + pt('M338 190 L392 190 L382 202 L350 202 z',P.wood)
  + rc(362,168,4,22,'#6e5138') + pto('M366 168 l16 8 l-16 7 z','#fff')
  + pt('M0 300 L0 236 Q160 214 300 240 L300 300 z',P.rock)
  + g(150,282,1.05,oniChar(P.oniNight,{mood:'sad'}))
  + ln('M330 236 q16 -6 32 0','rgba(255,255,255,.6)',3)),

/* ----- あかずきん（本編） ----- */
akz_home: f => wrap(room('g_azhome')
  + mado(340,148,1)
  + rco(140,204,180,14,P.wood,4) + rc(154,218,10,28,P.woodD) + rc(296,218,10,28,P.woodD)
  + elo(192,200,30,9,'#fff')
  + cio(178,192,8,'#f4e6b8') + cio(194,190,8,'#f2d9a0') + cio(210,192,7,'#f4e6b8')
  + rco(250,166,22,38,'#7a4a9a',5) + rc(250,180,22,11,'#f2ede2')
  + rco(256,148,10,20,'#6a3f88',3) + rco(254,142,14,7,'#c9a86b',2)
  + g(92,286,1.15,hahaChar())
  + g(384,288,1.15,akazukinChar(true))
  + spark(232,124,.8) + spark(150,152,.6)),

akz_door: f => wrap(grad('g_azdoor',P.skyTop,P.skyBtm) + sun(64,54) + cloud(292,50,.9) + cloud(170,88,.6)
  + rc(0,214,480,86,P.grass) + el(96,238,200,44,P.grass2) + el(432,242,150,40,P.grass2)
  + whouse(140,224,1.4)
  + fir(408,236,1.2) + fir(452,244,.85)
  + elo(214,258,17,6,'#cfc6b4') + elo(254,272,19,7,'#cfc6b4') + elo(302,288,21,7,'#cfc6b4')
  + g(214,244,.95,hahaChar())
  + g(332,290,1.15,akazukinChar(true))
  + hana(56,286,'#e8607a',.9) + hana(88,294,'#fff',.9) + hana(466,290,'#7aa8e0',.9)
  + chou(376,172,.8)),

akz_forest: f => wrap(grad('g_azf','#c6e7f4','#eaf7e4') + cloud(120,48,.8) + cloud(360,64,.6)
  + rc(0,204,480,96,P.grass) + el(240,228,340,46,P.grass2)
  + pt('M60 0 L150 0 L104 300 L0 300 z','rgba(255,246,196,.22)')
  + pt('M300 0 L352 0 L332 300 L268 300 z','rgba(255,246,196,.15)')
  + pto('M170 300 L302 300 L272 206 L228 206 z',P.sand)
  + fir(44,252,1.55) + fir(116,234,1.1) + fir(176,214,.7)
  + fir(432,258,1.65) + fir(366,232,1.05) + fir(310,212,.7)
  + g(238,288,1.2,akazukinChar(true))
  + chou(140,164,.85) + spark(360,124,.7)),

akz_meet: f => wrap(grad('g_azmeet','#c6e7f4','#e8f4e0') + cloud(110,46,.8) + cloud(392,68,.6)
  + rc(0,206,480,94,P.grass) + el(240,230,340,46,P.grass2)
  + pto('M140 300 L318 300 L276 208 L232 208 z',P.sand)
  + fir(38,254,1.5) + fir(104,236,1.05) + fir(180,212,.65)
  + fir(444,258,1.6) + fir(384,234,1.05)
  + g(146,288,1.15,akazukinChar(true))
  + g(346,292,1.3,ookamiChar({mood:'sly'}))
  + spark(248,144,.7)),

akz_flowers: f => wrap(grad('g_azfl','#c6e7f4','#f2fbe6') + sun(408,50) + cloud(126,56,.9)
  + rc(0,192,480,108,P.grass) + el(120,216,270,46,P.grass2) + el(410,210,200,40,P.grass2)
  + fir(40,214,1.1) + fir(456,206,.95) + fir(302,196,.7)
  + hana(44,268,'#e8607a',1.3) + hana(92,292,'#fff',1.3) + hana(140,262,'#7aa8e0',1.2)
  + hana(180,296,'#e8607a',1.3) + hana(76,238,'#7aa8e0',1) + hana(302,244,'#e8607a',1)
  + hana(330,268,'#fff',1.3) + hana(374,294,'#e8607a',1.3) + hana(422,262,'#7aa8e0',1.2)
  + hana(456,294,'#fff',1.3) + hana(392,238,'#fff',1) + hana(196,252,'#fff',1.1)
  + hana(268,290,'#7aa8e0',1.2) + hana(120,300,'#e8607a',1.2)
  + gr(246,286,1.15,14, akazukinChar(true)
      + hana(-25,-24,'#e8607a',.8) + hana(-16,-27,'#fff',.8) + hana(-32,-20,'#7aa8e0',.8))
  + chou(150,146,.9) + chou(336,182,.75) + spark(240,120,.7)),

akz_gma_out: f => wrap(grad('g_azgo','#c6e7f4','#eaf7e4') + sun(66,52) + cloud(322,52,.9)
  + rc(0,218,480,82,P.grass) + el(240,242,340,46,P.grass2)
  + fir(36,246,1.5) + fir(96,232,1.05) + fir(150,212,.7)
  + fir(430,250,1.6) + fir(468,236,1.1) + fir(348,210,.75)
  + whouse(248,240,1.25)
  + ln('M278 106 q13 -16 0 -30','rgba(255,255,255,.75)',4)
  + ln('M292 92 q12 -14 2 -26','rgba(255,255,255,.5)',3.5)
  + elo(238,270,18,6,'#cfc6b4') + elo(244,288,20,7,'#cfc6b4')
  + hana(110,288,'#e8607a',.9) + hana(392,290,'#fff',.9)
  + chou(150,180,.8)),

akz_bed: f => wrap(room('g_azbed')
  + mado(108,144,.9)
  + bed(298,248,1)
  + elo(294,176,15,8,P.wolf) + elo(328,178,15,8,P.wolf)
  + g(246,158,1.05,ookamiHead('sly',true))
  + g(128,290,1.1,akazukinChar(true))),

akz_onaka: f => wrap(grad('g_azon','#5a2f2a','#2a1614')
  + el(240,54,320,74,'#6b3a33') + el(240,304,340,92,'#43211e')
  + el(74,168,74,124,'#4e2823') + el(408,168,74,124,'#4e2823')
  + ln('M46 116 q34 32 0 64','rgba(255,180,140,.14)',10)
  + ln('M436 116 q-34 32 0 64','rgba(255,180,140,.14)',10)
  + g(180,252,1.05,akazukinChar(false))
  + g(322,256,1,gmaChar())
  + rc(0,0,480,300,'rgba(24,12,10,.5)')
  + ci(180,178,46,'rgba(255,205,130,.16)') + ci(180,178,27,'rgba(255,215,150,.2)')
  + ci(322,184,44,'rgba(255,205,130,.14)') + ci(322,184,25,'rgba(255,215,150,.18)')
  + ci(252,120,11,'rgba(255,220,160,.5)') + ci(252,120,22,'rgba(255,220,160,.2)')
  + spark(252,120,.9)),

akz_hunter: f => wrap(grad('g_azhu','#c6e7f4','#eaf7e4') + cloud(300,50,.8) + cloud(96,74,.55)
  + rc(0,216,480,84,P.grass) + el(240,240,340,46,P.grass2)
  + fir(44,246,1.4) + fir(104,228,.9) + fir(438,252,1.5)
  + whouse(168,232,1.2)
  + zzz(226,170,.9)
  + g(348,290,1.25, ryoushiChar() + pto('M-22 -74 q-11 -5 -13 5 q2 9 13 4 z',P.skin))
  + hana(60,292,'#e8607a',.9) + chou(400,182,.75)),

akz_rescue: f => wrap(room('g_azres')
  + mado(392,140,.85)
  + bed(140,232,.78)
  + g(340,288,.95,ookamiLie(true))
  + zzz(298,238,.7)
  + g(80,290,1.05,akazukinChar(false))
  + g(154,292,1.05,gmaChar())
  + g(234,292,1.1,ryoushiChar())
  + hasami(280,254,.9,-25)
  + spark(200,150,.9) + spark(116,180,.7)),

akz_stone: f => wrap(grad('g_azst','#c6e7f4','#eaf7e4') + sun(414,52) + cloud(140,58,.9)
  + rc(0,212,480,88,P.grass) + el(240,236,340,46,P.grass2)
  + whouse(92,226,1.05) + fir(432,240,1.3) + fir(378,224,.85)
  + elo(392,272,30,15,P.rock) + elo(356,278,22,12,P.rock2) + elo(424,280,20,11,P.rock2)
  + g(238,290,1.2, akazukinChar(false)
      + elo(0,-38,19,15,P.rock) + ln('M-9 -43 q9 5 18 -1',P.rock2,2.5)
      + pt('M23 -84 q-5 9 0 11 q7 -2 0 -11 z','#aee3f5'))
  + hana(180,292,'#fff',.9)),

akz_end: f => wrap(grad('g_azend','#bfe8f7','#f2fbe6') + sun(420,50) + cloud(108,56,1) + cloud(300,80,.7)
  + rc(0,200,480,100,P.grass) + el(240,224,360,46,P.grass2)
  + fir(40,232,1.2) + fir(360,212,.8) + fir(450,238,1.3)
  + hana(70,282,'#e8607a',.9) + hana(112,292,'#fff',.9) + hana(430,286,'#7aa8e0',.9)
  + g(126,278,1.05,akazukinChar(false))
  + g(240,276,1,gmaChar())
  + g(352,278,1.1,ryoushiChar())
  + elo(240,290,130,24,'#f6ece0')
  + ln('M136 288 L344 288','#e2cfba',2.5) + ln('M240 268 L240 300','#e2cfba',2.5)
  + elo(196,282,26,8,'#fff') + cio(186,275,7,'#f4e6b8') + cio(202,274,7,'#f2d9a0')
  + g(300,278,.9, ln('M-8 -6 q8 -17 16 0',P.woodD,2.5) + pto('M-10 -6 L10 -6 L8 8 L-8 8 z','#c99a56') + ln('M-9 0 L9 0','#a97a3a',2))
  + chou(160,150,.85) + spark(300,138,.8)),

akz_talk: f => wrap(grad('g_aztalk','#c6e7f4','#eef7e2') + sun(62,54) + cloud(330,56,.9)
  + rc(0,210,480,90,P.grass) + el(240,234,340,46,P.grass2)
  + pto('M110 300 L360 300 L300 212 L200 212 z',P.sand)
  + fir(38,248,1.35) + fir(112,226,.8) + fir(446,252,1.45)
  + rco(216,246,50,28,'#c9a86b',5) + elo(241,246,25,9,'#e0c496')
  + elo(241,240,20,7,'#fff') + cio(233,234,6,'#f4e6b8') + cio(247,233,6,'#f2d9a0')
  + g(150,290,1.15,akazukinChar(true))
  + g(342,292,1.2,ookamiChar({mood:'happy'}))
  + spark(240,178,.8) + chou(400,170,.7)),

akz_machibuse: f => wrap(room('g_azmb')
  + rco(66,130,102,108,P.woodD,5) + ln('M66 162 L168 162','#5f4426',3) + ln('M66 206 L168 206','#5f4426',3)
  + cio(152,188,5,'#f2ce6a')
  + rco(56,178,122,14,'#8a8f9a',5) + cio(117,185,6.5,'#6f7480')
  + mado(348,150,1)
  + g(348,152,.9, pt('M-15 -8 L-21 -30 L-3 -18 z','#3c4250') + pt('M15 -8 L21 -30 L3 -18 z','#3c4250')
      + ci(0,0,17,'#3c4250') + el(0,12,12,8,'#3c4250')
      + ci(-7,-4,3,'#f6da84') + ci(7,-4,3,'#f6da84'))
  + rc(0,0,480,300,'rgba(58,48,66,.16)')
  + g(206,290,1,gmaChar())
  + g(278,288,1.05,akazukinChar(false))),

akz_yane: f => wrap(grad('g_azyane','#a9c2d4','#e2eef2') + cloud(390,48,.8) + cloud(120,64,.6)
  + rc(0,230,480,70,P.grass) + el(240,254,340,44,P.grass2)
  + fir(40,256,1.3) + fir(446,260,1.4)
  + whouse(230,240,1.5)
  + g(302,149,.6,ookamiChar({mood:'sad'}))
  + rco(300,262,50,32,'#a9743f',5) + elo(325,262,25,8,'#7fb6cf')
  + ln('M300 274 L350 274','#8a5c30',3)
  + ln('M312 254 q9 -14 0 -26','rgba(255,255,255,.8)',3.5)
  + ln('M336 256 q9 -13 1 -24','rgba(255,255,255,.6)',3)
  + hana(70,290,'#e8607a',.9)),

akz_haha_road: f => wrap(grad('g_azhr','#c6e7f4','#eaf7e4') + sun(410,52) + cloud(120,50,.85)
  + rc(0,206,480,94,P.grass) + el(240,230,340,46,P.grass2)
  + pto('M150 300 L330 300 L282 208 L232 208 z',P.sand)
  + fir(40,252,1.5) + fir(108,234,1.05) + fir(300,210,.7)
  + fir(440,256,1.55) + fir(380,232,1)
  + g(196,288,1.1,hahaChar())
  + g(290,290,1.15,akazukinChar(true))
  + hana(70,290,'#e8607a',.9) + chou(360,168,.8)),

/* ----- オオカミの はなし ----- */
w_fuyu: f => wrap(grad('g_wfuyu','#b8cddd','#eef6fb')
  + ci(72,58,26,'rgba(255,255,255,.4)')
  + rc(0,212,480,88,P.snow) + el(240,236,340,46,'#fff')
  + firYuki(44,248,1.5) + firYuki(120,232,1.05) + firYuki(196,210,.7)
  + firYuki(430,254,1.6) + firYuki(366,230,1)
  + ci(90,96,3,'#fff') + ci(160,64,2.4,'#fff') + ci(232,110,3,'#fff') + ci(300,72,2.6,'#fff')
  + ci(392,104,3,'#fff') + ci(126,148,2.4,'#fff') + ci(348,152,2.6,'#fff') + ci(58,180,2.2,'#fff')
  + g(244,290,1.25,ookamiChar({mood:'sad'}))
  + elo(146,284,12,5,'rgba(150,170,190,.5)') + elo(174,292,12,5,'rgba(150,170,190,.5)')
  + elo(204,286,12,5,'rgba(150,170,190,.5)')),

w_mura: f => wrap(grad('g_wmura',P.duskTop,P.duskBtm)
  + ci(402,66,34,'rgba(255,220,150,.45)') + ci(402,66,22,'#ffd76e')
  + cloud(120,58,.9) + cloud(320,44,.7)
  + pt('M0 206 L120 166 L250 204 L360 170 L480 208 L480 232 L0 232 z','rgba(120,142,162,.5)')
  + rc(0,226,480,74,'#7fa06a')
  + whouse(96,244,.5) + whouse(198,248,.42) + whouse(300,246,.46) + whouse(392,250,.4)
  + ln('M108 190 q10 -12 0 -22','rgba(255,255,255,.55)',3)
  + ln('M310 194 q9 -11 0 -20','rgba(255,255,255,.45)',3)
  + pt('M0 300 L0 264 Q160 234 320 268 L480 256 L480 300 z',P.grass2)
  + fir(58,282,1.1) + fir(436,288,1.2)
  + g(178,282,1.2,ookamiChar({mood:'sad'}))),

w_panya: f => wrap(grad('g_wpan','#cfe0ec','#f0f2e6')
  + rc(0,232,480,68,'#c9c2b4') + ln('M0 232 L480 232','#a9a294',3)
  + ln('M0 258 L480 258','rgba(169,162,148,.7)',2) + ln('M0 284 L480 284','rgba(169,162,148,.7)',2)
  + rco(52,92,250,140,P.wall,4)
  + ln('M52 150 L302 150',P.beam,5) + ln('M136 92 L136 232',P.beam,5) + ln('M218 92 L218 232',P.beam,5)
  + pto('M36 92 L177 44 L318 92 z','#a8563f')
  + rco(74,132,54,58,'#cfe6f0',4) + ln('M101 132 L101 190',P.beam,3)
  + pto('M84 172 q17 -13 34 0 q3 12 -17 14 q-20 -2 -17 -14 z','#d9a35a')
  + rco(232,144,56,88,P.woodD,4) + ci(276,190,4.5,'#f2ce6a')
  + ln('M302 106 L346 106',P.beam,4) + ln('M340 106 L340 124',P.woodD,3)
  + rco(308,124,64,42,'#e8d9b8',5)
  + pto('M322 148 q18 -16 36 0 q3 12 -18 14 q-21 -2 -18 -14 z','#d9a35a')
  + ln('M330 142 l6 -6','#a9743f',2.5) + ln('M344 142 l6 -6','#a9743f',2.5)
  + rco(310,206,34,26,'#a9743f',4) + ln('M310 218 L344 218','#7a5c34',2.5)
  + g(408,288,1.25,ookamiChar({mood:'sad'}))),

w_haru: f => wrap(grad('g_whr','#bfe8f7','#f4fbe8') + sun(414,50) + cloud(116,56,.9) + cloud(330,80,.6)
  + rc(0,198,480,102,P.grass) + el(240,222,360,46,P.grass2)
  + tree(56,232,1.2)
  + ci(38,196,5,'#f8b8c8') + ci(74,190,5,'#f8b8c8') + ci(56,158,5,'#f8b8c8') + ci(30,172,4,'#f8b8c8') + ci(80,166,4,'#f8b8c8')
  + fir(392,214,.8) + fir(448,238,1.2)
  + hana(88,268,'#e8607a',1) + hana(132,290,'#fff',1) + hana(172,264,'#7aa8e0',.9)
  + hana(336,268,'#fff',1) + hana(380,292,'#e8607a',1) + hana(422,266,'#7aa8e0',.9)
  + hana(206,294,'#fff',.9) + hana(300,246,'#e8607a',.8)
  + g(238,286,1.3,ookamiChar({mood:'happy'}))
  + ci(150,120,4,'#f8b8c8') + ci(210,96,4,'#f8b8c8') + ci(320,130,4,'#f8b8c8') + ci(400,110,3,'#f8b8c8')
  + chou(150,152,.9) + chou(340,182,.75) + spark(240,118,.8)),

/* ----- おばあさんの はなし ----- */
g_heya: f => wrap(room('g_gheya')
  + mado(372,142,1)
  + bed(140,246,.85)
  + rco(266,232,60,10,P.wood,4) + rc(272,242,8,26,P.woodD) + rc(312,242,8,26,P.woodD)
  + rco(316,176,10,58,P.woodD,4) + rco(266,176,10,58,P.woodD,4) + rco(266,180,60,10,P.wood,4)
  + g(296,290,1.15,gmaChar())
  + ln('M290 236 l42 -12',P.woodD,2.5) + ln('M292 246 l42 -12',P.woodD,2.5)
  + rco(300,240,40,26,'#e8b4c0',5) + ln('M304 248 L336 248','#d29aa8',2) + ln('M304 256 L336 256','#d29aa8',2)
  + cio(386,272,17,'#d94f5a') + ln('M382 256 q-16 -12 -42 -14','#d94f5a',2.5)
  + ln('M376 264 q12 8 22 3','#b83c46',2)
  + spark(200,150,.7)),

/* ----- おおきな かぶ（本編） ----- */
kabu_hata: f => wrap(grad('g_kbhata',P.skyTop,P.skyBtm) + sun(56,52) + cloud(214,46,1) + cloud(400,80,.7)
  + pt('M0 212 L110 198 L250 210 L370 196 L480 210 L480 228 L0 228 z','rgba(146,190,150,.5)')
  + rc(0,222,480,78,P.soil)
  + ln('M0 222 L480 222','#8a6a3f',3) + ln('M0 250 L480 250','rgba(122,92,52,.5)',3) + ln('M0 278 L480 278','rgba(122,92,52,.4)',3)
  + house(88,222,.62) + tree(166,222,.55) + fusha(408,222,.85)
  + g(276,290,1.15,jiiChar())
  + ci(322,246,3,'#c9a86b') + ci(342,264,3,'#c9a86b') + ci(360,242,2.6,'#c9a86b')
  + ci(378,270,3,'#c9a86b') + ci(398,254,2.6,'#c9a86b') + ci(418,274,3,'#c9a86b')
  + spark(240,148,.8) + chou(150,170,.7)),

kabu_sodatsu: f => wrap(grad('g_kbsod',P.skyTop,P.skyBtm) + sun(432,54) + cloud(96,52,.9) + cloud(336,94,.6)
  + pt('M0 214 L120 202 L260 212 L380 200 L480 212 L480 228 L0 228 z','rgba(146,190,150,.5)')
  + rc(0,222,480,78,P.soil) + ln('M0 222 L480 222','#8a6a3f',3) + ln('M0 258 L480 258','rgba(122,92,52,.45)',3)
  + fusha(58,222,.5)
  + g(186,258,1.3,kabuArt(false))
  + elo(186,254,62,14,'#8a6a3f')
  + g(374,290,1.15,jiiChar())
  + spark(298,118,.9) + spark(122,98,.8) + chou(322,192,.75)),

kabu_hiku: f => wrap(grad('g_kbhiku',P.skyTop,P.skyBtm) + sun(60,50) + cloud(312,44,.8)
  + pt('M0 214 L120 202 L260 212 L380 200 L480 212 L480 228 L0 228 z','rgba(146,190,150,.5)')
  + rc(0,222,480,78,P.soil) + ln('M0 222 L480 222','#8a6a3f',3) + ln('M0 264 L480 264','rgba(122,92,52,.4)',3)
  + g(76,254,1.12,kabuArt(false))
  + elo(76,250,54,13,'#8a6a3f')
  + ln('M112 242 q15 -9 28 -2','rgba(74,58,44,.3)',3.5) + ln('M114 254 q15 -3 28 4','rgba(74,58,44,.25)',3)
  + g(160,288,1.02,jiiChar())
  + kbRetsu(f,214,54,290)
  + (f && f.nezumi ? g(214 + 54*kbCount(f),292,1,nezumiChar()) : '')
  + ln('M188 276 l-13 -7','rgba(74,58,44,.3)',3) + ln('M186 286 l-15 -1','rgba(74,58,44,.22)',3)
  + spark(118,142,.7)),

kabu_nuketa: f => wrap(grad('g_kbnuke',P.skyTop,'#eaf9fd') + sun(70,48) + cloud(392,60,.8)
  + pt('M0 216 L130 204 L270 214 L400 202 L480 212 L480 228 L0 228 z','rgba(146,190,150,.5)')
  + rc(0,224,480,76,P.soil) + ln('M0 224 L480 224','#8a6a3f',3)
  + elo(112,246,42,13,P.soilD)
  + gr(150,176,1,18,kabuArt(false))
  + tsuchi(150,196,1.1) + tsuchi(98,216,.8) + tsuchi(216,204,.9)
  + ln('M92 108 q-11 20 -5 36','rgba(255,255,255,.7)',4) + ln('M214 112 q11 20 5 36','rgba(255,255,255,.7)',4)
  + gr(72,286,.95,-26,jiiChar())
  + gr(178,290,.92,20,baaRuChar())
  + gr(258,292,.74,-18,magoChar())
  + gr(322,286,1.15,22,inuRuChar())
  + gr(388,288,1.05,-20,nekoChar())
  + gr(446,290,1,24,nezumiChar())
  + spark(240,96,1) + spark(310,146,.8)),

kabu_matsuri: f => wrap(grad('g_kbmatsu',P.skyTop,P.skyBtm) + sun(432,48)
  + ln('M0 46 Q240 80 480 46','#c9a86b',3)
  + pt('M44 54 l18 0 l-9 16 z','#e8804f') + pt('M114 62 l18 0 l-9 16 z','#5aa66b') + pt('M184 66 l18 0 l-9 16 z','#4a8fd4')
  + pt('M264 66 l18 0 l-9 16 z','#e8b04f') + pt('M334 62 l18 0 l-9 16 z','#d488a4') + pt('M404 54 l18 0 l-9 16 z','#5aa66b')
  + rc(0,226,480,74,P.grass)
  + house(58,214,.62) + fusha(438,226,.55)
  + g(140,268,1.05,kabuArt(false)) + elo(140,264,52,12,'#7fae66')
  + ln('M310 270 L350 270','#5c4626',5) + pt('M316 266 q6 -22 14 -24 q12 8 8 24 z','#f7a642')
  + rco(302,232,58,32,'#8a8f9a',6) + elo(331,232,29,8,'#a9aeb6')
  + ln('M320 214 q10 -14 0 -25','rgba(255,255,255,.6)',3.5) + ln('M344 218 q9 -13 1 -23','rgba(255,255,255,.45)',3)
  + g(200,292,.95,inuRuChar()) + g(232,290,.9,jiiChar()) + g(264,292,.85,baaRuChar()) + g(286,294,.66,magoChar())
  + g(386,292,.9,nekoChar()) + g(416,294,.85,nezumiChar())
  + g(56,290,.85,villagerChar('#c09454')) + g(94,292,.8,villagerChar('#7a9a8a')) + g(452,290,.82,villagerChar('#9a7a9a'))
  + spark(206,152,.9) + spark(300,128,.8)),

kabu_yuyake: f => wrap(grad('g_kbyu',P.duskTop,P.duskBtm)
  + ci(240,190,48,'rgba(255,220,150,.45)') + ci(240,190,28,'#ffd76e')
  + cloud(92,60,.9) + cloud(376,46,.7)
  + pt('M0 206 L120 194 L260 204 L380 192 L480 204 L480 218 L0 218 z','rgba(190,150,100,.45)')
  + rc(0,212,480,88,'#c9a06a') + ln('M0 212 L480 212','#a97a48',3) + ln('M0 250 L480 250','rgba(169,122,72,.5)',3)
  + fusha(54,212,.5)
  + g(126,246,.95,kabuArt(false)) + elo(126,242,46,11,'#a97a48')
  + elo(316,286,130,24,'#f6ece0') + ln('M200 284 L432 284','#e2cfba',2.5)
  + elo(266,280,15,6,'#fff') + elo(370,282,15,6,'#fff')
  + g(316,278,.9, rco(-16,-46,32,46,'#e8b04f',8) + rco(-11,-56,22,10,'#d99a3a',4) + rco(-6,-64,12,8,'#d99a3a',3)
      + pto('M16 -30 l11 4 l-11 5 z','#d99a3a') + ln('M-16 -36 q-11 8 0 17','#c98a2a',3)
      + ln('M-9 -52 L9 -52','#c98a2a',2.5))
  + ln('M316 208 q10 -14 0 -24','rgba(255,255,255,.5)',3)
  + g(176,294,1,inuRuChar()) + g(216,292,.9,jiiChar()) + g(252,296,.85,baaRuChar())
  + g(404,296,.68,magoChar()) + g(438,294,.95,nekoChar()) + g(466,296,.8,nezumiChar())
  + pt('M96 116 l8 4 l8 -4 l-8 7 z',P.ink) + pt('M140 94 l7 3 l7 -3 l-7 6 z',P.ink)),

kabu_talk: f => wrap(grad('g_kbtalk',P.skyTop,P.skyBtm) + sun(66,54) + cloud(320,50,.9) + cloud(180,88,.6)
  + pt('M0 216 L120 204 L260 214 L380 202 L480 214 L480 230 L0 230 z','rgba(146,190,150,.5)')
  + rc(0,224,480,76,P.soil) + ln('M0 224 L480 224','#8a6a3f',3) + ln('M0 264 L480 264','rgba(122,92,52,.4)',3)
  + fusha(434,224,.45)
  + g(160,262,1.25,kabuArt(true))
  + elo(160,258,60,14,'#8a6a3f')
  + g(370,290,1.15,jiiChar())
  + ci(272,180,5,'#f8b8c8') + ci(300,152,4,'#f8b8c8') + ci(248,146,4,'#f8b8c8')
  + spark(300,216,.8) + chou(114,152,.7)),

/* ----- かぶの はなし ----- */
kt_tsuchi: f => wrap(grad('g_kttsu',P.skyTop,P.skyBtm) + sun(64,44) + cloud(336,46,.7)
  + house(408,120,.42) + tree(94,120,.5)
  + rc(0,120,480,26,'#8fbf72') + ln('M0 120 L480 120','#6fa85c',3)
  + rc(0,146,480,154,P.soil)
  + ln('M0 146 L480 146',P.soilD,4)
  + ln('M0 202 L480 202','rgba(122,92,52,.5)',3) + ln('M0 256 L480 256','rgba(122,92,52,.4)',3)
  + elo(66,226,17,10,P.rock2) + elo(414,266,15,9,P.rock2) + elo(374,190,11,7,P.rock)
  + ci(120,178,3,P.soilD) + ci(300,232,3,P.soilD) + ci(438,206,2.6,P.soilD) + ci(58,282,3,P.soilD)
  + g(240,274,1.4,kabuArt(true))
  + ln('M228 272 q-16 10 -30 6',P.turnipS,3) + ln('M252 268 q17 9 32 4',P.turnipS,3)
  + mimizu(114,240,1) + mimizu(398,222,.85)
  + chou(160,84,.7) + spark(280,70,.7)),

kt_up: f => wrap(grad('g_ktup','#8a6a44','#3a2a1c')
  + pt('M0 0 L480 0 L480 60 Q360 96 240 92 Q120 88 0 58 z',P.skyTop)
  + ln('M0 58 Q120 88 240 92 Q360 96 480 60',P.soilN,5)
  + pt('M0 300 L0 66 Q72 152 44 300 z','#5a4028')
  + pt('M480 300 L480 68 Q412 154 442 300 z','#5a4028')
  + ln('M100 152 q22 14 12 40','rgba(90,64,40,.55)',5) + ln('M384 178 q-22 14 -12 40','rgba(90,64,40,.45)',5)
  + elo(152,248,20,12,P.rock2) + elo(332,214,15,9,P.rock) + elo(238,272,17,10,P.rock2)
  + ln('M92 196 q26 16 30 44','rgba(70,48,28,.5)',4) + ln('M392 224 q-26 14 -30 40','rgba(70,48,28,.45)',4)
  + ci(196,208,3,'#5a4028') + ci(288,252,3,'#5a4028') + ci(122,266,2.6,'#5a4028') + ci(366,286,3,'#5a4028')
  + g(140,86,.44,jiiChar()) + g(182,88,.42,baaRuChar()) + g(218,90,.34,magoChar())
  + g(258,88,.5,inuRuChar()) + g(310,88,.48,nekoChar()) + g(348,90,.44,nezumiChar())
  + gr(186,122,1.05,-24, pto('M0 0 q-18 -30 0 -64 q18 32 0 64 z',P.leafG) + ln('M0 -8 L0 -54',P.leafG2,2.5))
  + gr(302,126,1.05,26, pto('M0 0 q-18 -30 0 -64 q18 32 0 64 z',P.leafG) + ln('M0 -8 L0 -54',P.leafG2,2.5))
  + tsuchi(232,172,1) + tsuchi(146,124,.7) + tsuchi(346,192,.8)
  + ln('M118 214 q18 -9 36 0','rgba(255,255,255,.18)',4) + ln('M318 244 q18 -9 36 0','rgba(255,255,255,.14)',4)),

kt_sora: f => wrap(grad('g_ktsora',P.skyTop,'#eaf9fd') + sun(64,50) + cloud(392,66,.8) + cloud(150,40,.7)
  + pt('M0 232 L120 222 L260 230 L380 220 L480 230 L480 244 L0 244 z','rgba(146,190,150,.5)')
  + rc(0,240,480,60,P.soil) + ln('M0 240 L480 240','#8a6a3f',3)
  + elo(120,258,40,12,P.soilD)
  + gr(238,196,1.15,-10,kabuArt(true))
  + tsuchi(238,212,1.1) + tsuchi(162,234,.8) + tsuchi(318,228,.9)
  + ln('M132 122 q-12 22 -6 40','rgba(255,255,255,.7)',4) + ln('M346 126 q12 22 6 40','rgba(255,255,255,.7)',4)
  + ln('M168 88 q-8 16 -4 28','rgba(255,255,255,.45)',3) + ln('M312 92 q8 16 4 28','rgba(255,255,255,.45)',3)
  + g(58,292,.55,jiiChar()) + g(102,294,.52,baaRuChar()) + g(138,296,.42,magoChar())
  + g(180,294,.6,inuRuChar()) + g(392,294,.6,nekoChar()) + g(440,296,.55,nezumiChar())
  + ln('M84 244 L84 254','#4a3a2c',3) + ci(84,260,1.8,'#4a3a2c')
  + ln('M412 246 L412 256','#4a3a2c',3) + ci(412,262,1.8,'#4a3a2c')
  + spark(238,102,1) + spark(322,158,.8)),

/* ----- ねずみの はなし ----- */
kn_naya: f => wrap(grad('g_knnaya','#b08f5e','#7a5c3c')
  + ln('M64 0 L64 236','rgba(90,64,40,.5)',3) + ln('M148 0 L148 236','rgba(90,64,40,.5)',3)
  + ln('M232 0 L232 236','rgba(90,64,40,.5)',3) + ln('M316 0 L316 236','rgba(90,64,40,.5)',3)
  + ln('M400 0 L400 236','rgba(90,64,40,.5)',3)
  + rc(0,236,480,64,'#8a6a44') + ln('M0 236 L480 236','#5f4426',3)
  + ln('M0 264 L480 264','rgba(95,68,38,.6)',2.5) + ln('M0 290 L480 290','rgba(95,68,38,.5)',2.5)
  + pt('M52 0 L164 0 L104 236 L0 236 z','rgba(255,240,180,.16)')
  + pto('M368 292 q-24 -8 -20 -34 q4 -24 26 -24 q22 0 26 24 q4 26 -20 34 z','#c9a86b')
  + ln('M352 240 q18 -9 34 0','#a9884b',3) + ln('M356 268 L384 268','rgba(169,136,75,.7)',2.5)
  + ln('M52 292 l28 -16','#e0c890',3) + ln('M62 294 l30 -10','#e0c890',3) + ln('M56 286 l26 -20','#e0c890',3)
  + pto('M212 292 L212 262 L258 252 L258 282 z','#f2ce6a')
  + pt('M212 262 L258 252 L250 246 L204 256 z','#f7e0a0')
  + ci(226,276,3.4,'#dfb44e') + ci(244,268,2.6,'#dfb44e')
  + g(150,288,1.25,nezumiChar())
  + spark(190,226,.6) + spark(96,182,.5)),

kn_neko: f => wrap(grad('g_knneko',P.skyTop,P.skyBtm) + sun(430,52) + cloud(122,52,.9)
  + pt('M0 216 L120 204 L260 214 L380 202 L480 214 L480 230 L0 230 z','rgba(146,190,150,.5)')
  + rc(0,224,480,76,P.soil) + ln('M0 224 L480 224','#8a6a3f',3)
  + g(56,222,.55,kabuArt(false)) + elo(56,220,32,8,'#8a6a3f')
  + gr(196,290,1.6,18,nekoChar())
  + gx(310,292,1.1,nezumiChar())
  + ln('M166 212 q16 -10 32 -2','rgba(74,58,44,.32)',3.5)
  + ln('M158 226 q14 -12 30 -6','rgba(74,58,44,.22)',3)
  + ci(258,174,5,'#f8b8c8') + ci(286,150,4,'#f8b8c8') + ci(230,148,4,'#f8b8c8')
  + spark(262,206,.8) + hana(432,290,'#fff',.9)),

kn_retsu: f => wrap(grad('g_knretsu',P.skyTop,P.skyBtm) + sun(52,42) + cloud(180,38,.7) + cloud(404,62,.6)
  + pt('M0 200 L120 190 L260 198 L380 188 L480 198 L480 212 L0 212 z','rgba(146,190,150,.5)')
  + rc(0,206,480,94,P.soil) + ln('M0 206 L480 206','#8a6a3f',3) + ln('M0 252 L480 252','rgba(122,92,52,.35)',3)
  + g(28,206,.42,kabuArt(false))
  + g(66,232,.52,senakaChar('#efe0c4','#e6e0d6',
      pto('M-17 -84 q17 -11 34 0 q-17 6 -34 0 z','#6e7d92') + pto('M-13 -84 q0 -14 13 -14 q13 0 13 14 z','#8496ab')))
  + g(122,250,.7,senakaChar('#8fa2cc','#d94f5a', ci(-7,-79,1.6,'#fff') + ci(4,-83,1.6,'#fff')))
  + g(192,276,.95,senakaChar('#5a8fd4','#5a4632'))
  + g(280,296,1.25,inuSenaka())
  + g(372,300,1.9,nekoSenaka())
  + gx(444,296,1.35,nezumiChar())
  + ln('M118 216 q14 -9 28 -3','rgba(74,58,44,.3)',3)
  + spark(88,146,.6)),

/* ----- うらしまたろう（本編） ----- */
ura_hama: f => wrap(grad('g_urhama',P.skyTop,P.skyBtm) + sun(60,52) + cloud(300,56,.95) + cloud(178,96,.6)
  + pt('M0 158 L480 174 L480 300 L0 300 z',P.sea)
  + waveRow(198,.65) + waveRow(234,.5)
  + pt('M0 300 L0 252 Q240 224 480 256 L480 300 z',P.sand)
  + matsu(68,258,1.15) + matsu(430,268,.85)
  + kobune(372,286,.9)
  + g(206,292,1.2,urashimaChar({rod:1}))
  + pt('M330 116 l7 3 l7 -3 l-7 6 z',P.ink) + pt('M372 98 l6 3 l6 -3 l-6 5 z',P.ink)),

ura_ijime: f => wrap(grad('g_urijime',P.skyTop,P.skyBtm) + sun(430,54) + cloud(150,58,.9)
  + pt('M0 164 L480 178 L480 300 L0 300 z',P.sea) + waveRow(202,.6) + waveRow(236,.45)
  + pt('M0 300 L0 250 Q240 224 480 254 L480 300 z',P.sand)
  + matsu(44,254,1)
  + g(232,290,1,kameChar({small:1}))
  + g(166,286,.68,villagerChar('#c98a4b'))
  + g(292,288,.68,villagerChar('#7a9ac9'))
  + g(400,292,1.1,urashimaChar())
  + ln('M356 254 q16 -10 30 -2','rgba(74,58,44,.25)',3.5)
  + ln('M352 268 q14 -12 28 -6','rgba(74,58,44,.18)',3)),

ura_tasuke: f => wrap(grad('g_urtas',P.duskTop,P.duskBtm)
  + ci(410,68,34,'rgba(255,210,140,.5)') + ci(410,68,22,'#ffd76e')
  + cloud(130,54,.85)
  + pt('M0 168 L480 182 L480 300 L0 300 z','#5f9fc0')
  + waveRow(206,.5) + waveRow(242,.35)
  + pt('M0 300 L0 254 Q150 230 320 258 L286 300 z','#e2c78e')
  + matsu(48,262,.95)
  + g(376,272,1.05,kameChar())
  + ln('M336 278 q18 -8 34 0','rgba(255,255,255,.55)',3)
  + ln('M348 292 q18 -8 34 0','rgba(255,255,255,.4)',3)
  + g(160,290,1.2,urashimaChar())
  + spark(256,212,.8)),

ura_kame_mukae: f => wrap(grad('g_urmuk',P.skyTop,P.skyBtm) + sun(66,50) + cloud(320,54,.9)
  + pt('M0 156 L480 170 L480 300 L0 300 z',P.sea) + waveRow(194,.65) + waveRow(230,.5)
  + pt('M0 300 L0 262 Q170 236 340 264 L306 300 z',P.sand)
  + matsu(56,268,1)
  + gx(376,276,1.15,kameChar())
  + ln('M400 288 q18 -8 34 0','rgba(255,255,255,.55)',3)
  + ci(288,214,5,'rgba(255,255,255,.85)') + ci(308,196,4,'rgba(255,255,255,.7)') + ci(324,182,3,'rgba(255,255,255,.55)')
  + g(180,292,1.2,urashimaChar())),

ura_umi_naka: f => wrap(umiNaka('g_urumi',0)
  + mure(60,84,1,'rgba(255,236,170,.75)') + mure(330,52,.75,'rgba(255,255,255,.5)')
  + pt('M0 300 L0 276 Q240 254 480 274 L480 300 z','#2b5f80')
  + kaisou(52,296,1.2) + kaisou(430,292,1)
  + sango(108,294,.9,'#f2a86e') + sango(392,290,.85)
  + awa(140,140,1) + awa(368,112,.85) + awa(252,196,.7)
  + g(236,244,1.5,kameChar())
  + gr(226,206,.95,-5,urashimaChar())
  + spark(120,66,.8) + spark(400,190,.7)),

ura_ryugu: f => wrap(umiNaka('g_urryu',0)
  + mure(56,68,.85,'rgba(255,236,170,.6)') + mure(360,88,.7,'rgba(255,255,255,.45)')
  + pt('M0 300 L0 268 Q240 246 480 268 L480 300 z','#dfc78e')
  + ryuguDo(240,270,1)
  + sango(74,290,1.2) + sango(414,286,1.1,'#f2a86e')
  + kaisou(126,296,1.15) + kaisou(370,292,1)
  + awa(150,176,.9) + awa(342,150,.8)
  + spark(240,110,.9) + spark(168,132,.7) + spark(316,120,.7)),

ura_otohime: f => wrap(ryuguHeya('g_urhime')
  + umiMado(240,124,1.05)
  + g(150,292,1.2,urashimaChar())
  + g(336,294,1.2,otohimeChar())
  + spark(240,206,.8) + spark(112,150,.7) + spark(392,168,.7)),

ura_utage: f => wrap(ryuguHeya('g_urutage')
  + rco(186,258,108,12,'#a8563f',3) + rc(196,270,9,16,'#8e4634') + rc(275,270,9,16,'#8e4634')
  + elo(212,254,17,7,'#f6ece0') + elo(268,254,17,7,'#f6ece0') + cio(240,250,9,P.ryuguG)
  + tai(150,150,1.05,-18) + tai(324,132,.95,16)
  + hirame(238,182,1,-10) + hirame(412,182,.8,14)
  + g(104,292,1.05,urashimaChar()) + g(378,294,1.05,otohimeChar())
  + spark(240,86,.9) + spark(126,108,.7) + spark(352,80,.7)),

ura_shiki: f => wrap(grad('g_urshiki','#fdf2dc','#e8d5b0')
  + rc(0,252,480,48,'#c98a6e') + ln('M0 252 L480 252','#a86a52',3)
  + rco(30,26,420,224,P.ryuguG,6)
  + rc(40,36,195,97,'#fbe3ee') + rc(40,112,195,21,'#8fbf72')
  + ln('M110 112 L110 84','#9a7854',5)
  + ci(110,74,14,'#f8b8c8') + ci(93,86,11,'#f8b8c8') + ci(127,86,11,'#f8b8c8')
  + ci(68,58,3,'#f8b8c8') + ci(166,62,3,'#f8b8c8') + ci(196,92,3,'#f8b8c8') + ci(150,104,2.6,'#f8b8c8')
  + rc(245,36,195,97,'#bfe8f7') + rc(245,108,195,25,'#4a9cc6')
  + ci(268,58,9,'#ffd76e')
  + ci(340,82,20,'#fff') + ci(316,92,14,'#fff') + ci(364,92,14,'#fff') + ci(348,62,14,'#fff')
  + ln('M256 118 q12 -6 24 0','rgba(255,255,255,.8)',3) + ln('M300 126 q12 -6 24 0','rgba(255,255,255,.65)',3)
  + ln('M380 118 q12 -6 24 0','rgba(255,255,255,.7)',3)
  + rc(40,143,195,97,'#f7e0bc') + rc(40,218,195,22,'#c9a86b')
  + ln('M118 218 L118 190','#8a6a44',5)
  + ci(118,180,14,'#e0703f') + ci(101,192,11,'#e8964a') + ci(135,192,11,'#d95f3f')
  + pt('M68 206 l5 -9 l5 9 z','#d95f3f') + pt('M178 196 l5 -9 l5 9 z','#e8964a')
  + pt('M196 226 l4 -8 l4 8 z','#e0703f') + pt('M62 174 l4 -8 l4 8 z','#e8964a')
  + rc(245,143,195,97,'#dbe9f2') + rc(245,214,195,26,P.snow)
  + firYuki(310,218,.6) + firYuki(384,222,.45)
  + ci(268,170,3,'#fff') + ci(330,158,2.6,'#fff') + ci(410,176,3,'#fff')
  + ci(360,196,2.4,'#fff') + ci(280,202,2.6,'#fff') + ci(422,206,2.2,'#fff')
  + ln('M240 26 L240 250',P.ryuguG,10) + ln('M30 138 L450 138',P.ryuguG,10)
  + g(96,296,.55,urashimaChar()) + g(392,298,.55,otohimeChar())),

ura_tama: f => wrap(ryuguHeya('g_urtama')
  + umiMado(360,114,.72)
  + g(140,292,1.2,otohimeChar())
  + tamabako(198,280,.95)
  + g(320,294,1.2,urashimaChar())
  + spark(240,200,.9) + spark(186,164,.7) + spark(288,146,.7)),

ura_kame_kaeri: f => wrap(umiNaka('g_urkae',1)
  + mure(336,72,.7,'rgba(255,255,255,.3)')
  + pt('M0 300 L0 282 Q240 262 480 280 L480 300 z','#20475f')
  + kaisou(44,298,1) + sango(444,294,.85,'#a87e92')
  + awa(120,168,.8) + awa(392,140,.7)
  + gx(250,240,1.45,kameChar())
  + gr(258,200,.95,5,urashimaChar())
  + tamabako(228,194,.62)),

ura_hama700: f => wrap(grad('g_ur700',P.duskTop,P.duskBtm)
  + ci(76,74,36,'rgba(255,210,140,.45)') + ci(76,74,24,'#ffd76e')
  + cloud(320,56,.8)
  + pt('M0 172 L480 184 L480 300 L0 300 z','#5f8fae') + waveRow(210,.4) + waveRow(246,.3)
  + pt('M0 300 L0 256 Q240 232 480 260 L480 300 z','#d9bd88')
  + matsu(392,266,1.95) + matsu(112,258,1.3)
  + elo(140,290,26,9,P.rock2) + elo(356,296,20,8,P.rock)
  + g(246,294,1.2,urashimaChar())
  + pt('M330 120 l7 3 l7 -3 l-7 6 z',P.ink)),

ura_oldman: f => wrap(grad('g_urold',P.grayTop,P.grayBtm)
  + ci(398,66,26,'rgba(255,245,215,.4)')
  + pt('M0 176 L480 188 L480 300 L0 300 z','#6d93ab') + waveRow(214,.35) + waveRow(250,.22)
  + pt('M0 300 L0 262 Q240 240 480 266 L480 300 z','#cfbc94')
  + matsu(60,270,1.5)
  + g(152,296,1.15, rco(-26,-15,52,15,'#332e30',3)
      + rco(-22,-19,44,6,'#1b1719',2)
      + ln('M-24 -8 q24 6 48 0','rgba(242,206,106,.55)',2.5)
      + gr(52,-3,1,-16, rco(-24,-9,48,9,'#413a3d',3) + ln('M-20 -4 L20 -4','rgba(242,206,106,.5)',2)))
  + ln('M188 268 q14 -22 4 -40','rgba(255,255,255,.4)',6)
  + ln('M202 244 q12 -18 2 -32','rgba(255,255,255,.26)',5)
  + g(302,294,1.25,urashimaChar({old:1}))),

ura_tsuru: f => wrap(grad('g_urtsuru','#f7b98a','#fbe3c0')
  + ci(388,86,44,'rgba(255,220,160,.5)') + ci(388,86,27,'#ffd76e')
  + cloud(108,62,.8) + cloud(258,44,.55)
  + pt('M0 206 L480 220 L480 300 L0 300 z','#5f9fc0')
  + ln('M300 238 q22 -8 44 0','rgba(255,225,170,.45)',4)
  + ln('M282 266 q26 -9 52 0','rgba(255,225,170,.32)',4)
  + waveRow(250,.4) + waveRow(284,.28)
  + tsuru(172,128,1.5)
  + gx(346,264,.9,kameChar())
  + ln('M308 268 q20 -9 38 -1','rgba(255,255,255,.6)',3.5)
  + spark(112,88,.9) + spark(288,72,.8)),

ura_fune: f => wrap(grad('g_urfune','#f7c98a','#fbe9cd')
  + ci(240,84,46,'rgba(255,220,150,.55)') + ci(240,84,28,'#ffd76e')
  + rc(0,166,480,134,'#5aa6c8')
  + ln('M212 196 q28 -10 56 0','rgba(255,235,180,.5)',5)
  + ln('M198 226 q42 -12 84 0','rgba(255,235,180,.38)',5)
  + ln('M184 258 q56 -14 112 0','rgba(255,235,180,.28)',5)
  + waveRow(204,.4) + waveRow(246,.3)
  + kobune(296,234,1.05)
  + g(296,226,.85,otohimeChar())
  + pt('M0 300 L0 268 Q150 250 300 278 L268 300 z','#e0cb96')
  + g(96,292,1.1,urashimaChar())
  + spark(240,132,.8)),

/* ----- おとひめさまの はなし ----- */
hime_ryugu: f => wrap(ryuguHeya('g_himeryu')
  + umiMado(346,120,1.05)
  + mizukagami(148,254,1.2)
  + g(240,292,1.2,otohimeChar())
  + spark(148,192,.8) + spark(300,84,.7)),

/* ----- かめの はなし ----- */
kame_hama: f => wrap(grad('g_kamehama',P.skyTop,P.skyBtm) + sun(402,44) + cloud(126,44,.8)
  + pt('M0 128 L480 140 L480 300 L0 300 z',P.sea)
  + waveRow(164,.75) + waveRow(198,.6)
  + pt('M0 300 L0 212 Q240 174 480 208 L480 300 z',P.sand)
  + matsu(414,204,.75)
  + pt('M0 300 L0 262 Q240 232 480 258 L480 300 z','#e6cf9a')
  + ci(58,282,5,'#d9bd88') + ci(126,294,6.5,'#d9bd88') + ci(300,286,5,'#d9bd88')
  + ci(392,296,7,'#d9bd88') + ci(214,298,4.5,'#d9bd88') + ci(452,278,4,'#d9bd88')
  + ln('M262 288 q20 -6 40 -2','rgba(160,130,80,.3)',3)
  + g(168,282,1.8,kameChar())
  + spark(346,168,.7)),

/* ----- さんびきの こぶた（本編） ----- */
buta_hajimari: f => wrap(grad('g_pbhaji',P.skyTop,P.skyBtm) + sun(418,52) + cloud(128,58,.95) + cloud(336,88,.6)
  + rc(0,212,480,88,P.grass) + el(240,236,360,46,P.grass2)
  + whouse(96,240,1.24)
  + tree(454,252,1)
  + hana(40,288,'#e8607a',.9) + hana(212,294,'#fff',.85) + hana(300,290,'#7aa8e0',.85)
  + g(198,290,1.14,butaChar({size:'l',mood:'yasashii'}))
  + g(288,290,.86,butaChar({size:'l'}))
  + g(352,292,.8,butaChar({size:'m'}))
  + g(412,294,.74,butaChar({size:'s'}))
  + chou(252,158,.8) + spark(324,128,.7)),

buta_michi: f => wrap(grad('g_pbmichi',P.skyTop,P.skyBtm) + sun(66,54) + cloud(300,50,.9) + cloud(170,90,.55)
  + rc(0,192,480,108,P.grass) + el(240,216,360,46,P.grass2)
  + pt('M222 212 L258 212 L136 176 L112 188 z',P.sand)
  + pt('M230 212 L250 212 L248 162 L234 162 z',P.sand)
  + pt('M222 212 L258 212 L356 174 L380 186 z',P.sand)
  + pt('M182 300 L298 300 L258 208 L222 208 z',P.sand)
  + ln('M114 190 L222 214','rgba(160,130,80,.3)',2.5) + ln('M378 188 L258 214','rgba(160,130,80,.3)',2.5)
  + tree(52,246,1.1) + fir(408,208,.72) + tree(456,242,.85)
  + hana(84,288,'#fff',.85) + hana(432,296,'#e8607a',.85)
  + g(154,292,1.05,butaChar({size:'l'}))
  + g(240,298,1,butaChar({size:'m'}))
  + g(338,294,.98,butaChar({size:'s'}))
  + chou(132,160,.75) + spark(300,132,.7)),

buta_wara: f => wrap(grad('g_pbwara',P.skyTop,P.skyBtm) + sun(60,50) + cloud(320,48,.85) + cloud(160,88,.55)
  + rc(0,210,480,90,P.grass) + el(240,234,360,46,P.grass2)
  + tree(48,254,1) + fir(118,232,.6)
  + waraIe(212,286,1.45)
  + waraKire(96,290,1,-8) + waraKire(126,296,.9,12) + waraKire(348,296,.95,6)
  + g(400,292,1.15,butaChar({size:'l',mood:'niko'}))
  + hana(66,292,'#fff',.85) + chou(122,168,.75) + spark(316,132,.7)
  + (f && f.wolf ? g(62,298,1.15,pwolfChar({mood:'sly'})) : '')),

buta_eda: f => wrap(grad('g_pbeda',P.skyTop,P.skyBtm) + sun(422,52) + cloud(120,54,.9) + cloud(320,88,.55)
  + rc(0,210,480,90,P.grass) + el(240,234,360,46,P.grass2)
  + tree(440,258,1.05) + fir(378,236,.62)
  + edaIe(248,288,1.4)
  + edaKire(128,294,1,-14) + edaKire(160,300,.85,10) + edaKire(104,282,.8,26)
  + g(78,290,1.1,butaChar({size:'m',mood:'niko'}))
  + hana(422,294,'#7aa8e0',.85) + chou(150,168,.75) + spark(196,138,.7)
  + (f && f.wolf ? gx(406,294,1.2,pwolfChar({mood:'sly'})) : '')),

buta_renga: f => wrap(grad('g_pbrenga',P.skyTop,P.skyBtm) + sun(64,50) + cloud(310,52,.85) + cloud(150,90,.55)
  + rc(0,208,480,92,P.grass) + el(240,232,360,46,P.grass2)
  + tree(42,252,.95)
  + rengaIe(250,292,1.25)
  + yuge(292,114,.9,.5)
  + rengaHitotsu(140,292,1,0) + rengaHitotsu(140,274,1,0) + rengaHitotsu(174,294,.95,7)
  + g(84,288,1.05,butaChar({size:'s',mood:'niko'}))
  + hana(414,296,'#fff',.85) + chou(180,158,.7) + spark(346,128,.7)
  + (f && f.wolf ? gx(412,292,1.15,pwolfChar({mood:'sly'})) : '')),

buta_fuki_wara: f => wrap(grad('g_pbfwara','#a9c2d4','#e2eef2') + cloud(392,44,.7) + cloud(214,74,.5)
  + rc(0,216,480,84,P.grass) + el(240,240,360,44,P.grass2)
  + g(300,288,1.25, pto('M-48 0 q-6 -30 20 -38 q26 -8 38 10 q8 14 4 28 z',P.wara)
      + ln('M-36 -2 q-6 -20 8 -30',P.waraD,2.6) + ln('M-14 -2 q-4 -22 10 -30',P.waraD,2.6)
      + ln('M4 -2 q0 -12 6 -18',P.waraD,2.6)
      + ln('M-42 -16 q26 -10 48 -4',P.waraD,3))
  + kazeUzu(168,226,1.35,.85) + kazeUzu(178,258,1.05,.6) + kazeUzu(158,196,.9,.5)
  + waraKire(300,146,1.1,-24) + waraKire(348,108,.95,32) + waraKire(392,160,.9,-12)
  + waraKire(252,116,.8,18) + waraKire(430,96,.75,42)
  + g(78,292,1.45,pwolfChar({mood:'fuu'}))
  + g(420,296,1,butaChar({size:'l',mood:'odoroki'}))),

buta_fuki_eda: f => wrap(grad('g_pbfeda','#a9c2d4','#e2eef2') + cloud(384,50,.7) + cloud(206,80,.5)
  + rc(0,216,480,84,P.grass) + el(240,240,360,44,P.grass2)
  + g(302,290,1.25, pto('M-46 0 L-14 -40 L10 -14 L30 -34 L44 0 z',P.eda)
      + ln('M-34 -10 L20 -10',P.edaD,3) + ln('M-24 -24 L2 -24',P.edaD,2.8)
      + ln('M-30 -2 L-6 -34',P.edaD,2.6) + ln('M16 -2 L30 -30',P.edaD,2.6))
  + kazeUzu(170,224,1.35,.85) + kazeUzu(180,256,1.05,.6) + kazeUzu(160,194,.9,.5)
  + edaKire(298,142,1.1,-28) + edaKire(350,106,.95,36) + edaKire(396,156,.9,-14)
  + edaKire(256,112,.8,22) + edaKire(432,94,.75,48)
  + g(80,292,1.45,pwolfChar({mood:'fuu'}))
  + g(422,296,1,butaChar({size:'m',mood:'odoroki'}))),

buta_naka: f => wrap(rengaHeya('g_pbnaka')
  + g(430,124,.86, rco(-42,-32,84,64,'#5d7292',4)
      + ln('M0 -32 L0 32',P.beam,4) + ln('M-42 0 L42 0',P.beam,4)
      + rco(-46,-38,92,9,P.beam,3))
  + ci(110,190,74,'rgba(255,170,90,.18)')
  + danro(110,238,.92)
  + rco(196,146,76,92,'#7a5230',4) + ln('M196 192 L272 192','#5f3f22',2.6) + ci(206,192,4,'#f2ce6a')
  + g(288,288,1.12,butaChar({size:'l',mood:'odoroki'}))
  + g(350,292,1.06,butaChar({size:'m',mood:'odoroki'}))
  + g(406,294,1,butaChar({size:'s',mood:'yasashii'}))),

buta_entotsu: f => wrap(grad('g_pbento','#5d7292','#a9bccd')
  + ci(392,60,26,'rgba(255,245,215,.45)') + cloud(120,56,.6)
  + rc(0,244,480,56,'#6f8a62') + el(240,262,340,40,'#5f7a52')
  + fir(44,268,1.2) + fir(440,272,1.3)
  + rengaIe(240,300,1.8)
  + yuge(301,44,.8,.4)
  + gx(330,151,1.05, gr(0,0,1,-30, pwolfChar({mood:'sly'})))),

buta_nabe: f => wrap(grad('g_pbnabe','#6e3a2c','#2a1614')
  + rengaMe(0,0,480,224,6,8,'rgba(255,200,150,.16)')
  + rco(198,-16,84,66,'#170c0a',6) + ln('M204 44 L276 44','rgba(255,200,150,.22)',2.5)
  + rc(0,224,480,76,'#3a2018') + ln('M0 224 L480 224','rgba(255,200,150,.16)',2.5)
  + ci(240,250,110,'rgba(255,170,90,.2)')
  + ln('M162 286 L318 268','#6b4530',10) + ln('M172 268 L316 288','#5a3826',10)
  + honoo(160,284,.95) + honoo(190,282,1.1) + honoo(240,286,1.5)
  + honoo(292,280,1.05) + honoo(320,284,.9)
  + ln('M120 150 L360 150','#3a3634',7) + ln('M240 150 L240 182','#3a3634',4)
  + ooNabe(240,266,1.5)
  + honoo(196,272,.7) + honoo(288,270,.66)
  + yuge(206,176,1,.5) + yuge(240,158,1.2,.6) + yuge(276,180,.95,.45)),

buta_soup: f => wrap(rengaHeya('g_pbsoup')
  + mado(404,124,.85)
  + ci(170,196,88,'rgba(255,210,140,.2)')
  + g(100,286,.95,butaChar({size:'s',mood:'yasashii'}))
  + g(390,288,.95,butaChar({size:'m',mood:'niko'}))
  + rco(120,236,244,14,'#a9743f',5) + rc(136,250,12,50,P.woodD) + rc(336,250,12,50,P.woodD)
  + ooNabe(186,236,.92,{soup:1})
  + pto('M264 212 q24 20 48 0 q-4 24 -24 24 q-20 0 -24 -24 z','#f6ece0')
  + elo(288,214,25,9,'#f6ece0') + el(288,214,19,6,'#e8a04f')
  + pto('M324 218 q18 15 36 0 q-3 18 -18 18 q-15 0 -18 -18 z','#f6ece0')
  + elo(342,220,19,7,'#f6ece0') + el(342,220,14,5,'#e8a04f')
  + yuge(186,182,.95,.75) + yuge(288,194,.7,.6) + yuge(342,202,.6,.5)
  + spark(240,146,.7)),

buta_nigeru: f => wrap(grad('g_pbnige',P.duskTop,P.duskBtm)
  + ci(72,74,36,'rgba(255,210,140,.5)') + ci(72,74,24,'#ffd76e')
  + cloud(300,54,.75)
  + pt('M180 224 L260 152 L330 214 L400 158 L480 218 L480 240 L180 240 z','rgba(120,110,140,.45)')
  + rc(0,232,480,68,'#7f9a72') + el(240,256,340,44,'#6f8a62')
  + rengaIe(72,300,.62) + yuge(88,182,.5,.4)
  + fir(392,258,1.2) + fir(444,266,1.4)
  + gr(280,288,1.5,-7,pwolfChar({mood:'tsukare'}))
  + yuge(240,248,.66,.55) + yuge(222,258,.55,.42)
  + ln('M168 262 q22 -8 44 -2','rgba(255,255,255,.45)',3.5)
  + ln('M154 280 q24 -8 46 -2','rgba(255,255,255,.3)',3)
  + ln('M182 292 q20 -7 40 -2','rgba(255,255,255,.22)',3)),

buta_kabubatake: f => wrap(grad('g_pbkabu','#f7c98a','#fbe9cd')
  + ci(410,76,34,'rgba(255,220,150,.5)') + ci(410,76,22,'#ffd76e')
  + pt('M0 206 L110 192 L250 204 L370 190 L480 204 L480 222 L0 222 z','rgba(170,190,150,.5)')
  + whouse(78,208,.42)
  + rc(0,216,480,84,P.soil) + rc(0,216,480,84,'rgba(122,92,52,.22)')
  + ln('M0 216 L480 216','#8a6a3f',3.5) + ln('M0 248 L480 248','rgba(96,72,40,.5)',3.5)
  + ln('M0 282 L480 282','rgba(96,72,40,.45)',3.5)
  + g(64,262,.42,kabuArt(false)) + g(148,268,.46,kabuArt(false))
  + elo(238,276,26,7,'#8a6a3f')
  + g(238,278,.52,kabuArt(false)) + g(342,272,.48,kabuArt(false))
  + g(392,286,1.05,butaChar({size:'s',mood:'niko'}))
  + chou(300,176,.7) + spark(180,150,.7)),

buta_ringo: f => wrap(grad('g_pbringo',P.skyTop,P.skyBtm) + sun(62,52) + cloud(330,54,.85) + cloud(180,88,.55)
  + rc(0,206,480,94,P.grass) + el(240,230,360,46,P.grass2)
  + fir(452,244,.8)
  + ringoKi(184,278,1.6)
  + ci(258,290,8,'#d94f3f') + ln('M258 283 l0 -6','#5a4230',2)
  + ci(224,296,7,'#e06a4f')
  + ln('M330 216 q46 -26 96 14','rgba(255,255,255,.5)',3.5)
  + ci(430,238,9,'#d94f3f') + ln('M430 230 l0 -6','#5a4230',2.2)
  + g(314,292,1.05,butaChar({size:'s',mood:'niko'}))
  + hana(78,292,'#fff',.85) + chou(402,196,.75) + spark(346,146,.7)),

buta_ichi: f => wrap(grad('g_pbichi',P.skyTop,P.skyBtm) + sun(424,50)
  + ln('M0 46 Q240 82 480 46','#c9a86b',3)
  + pt('M56 56 l18 0 l-9 16 z','#e8804f') + pt('M126 64 l18 0 l-9 16 z','#5aa66b')
  + pt('M196 70 l18 0 l-9 16 z','#4a8fd4') + pt('M276 70 l18 0 l-9 16 z','#e8b04f')
  + pt('M346 64 l18 0 l-9 16 z','#d488a4') + pt('M416 54 l18 0 l-9 16 z','#5aa66b')
  + rc(0,228,480,72,P.grass) + el(240,252,360,44,P.grass2)
  + whouse(46,230,.44) + whouse(430,234,.42)
  + rco(140,196,10,86,P.woodD,3) + rco(300,196,10,86,P.woodD,3)
  + rco(126,176,198,24,'#f6ece0',4)
  + rc(148,178,20,20,'#d95f5f') + rc(192,178,20,20,'#d95f5f')
  + rc(236,178,20,20,'#d95f5f') + rc(280,178,20,20,'#d95f5f')
  + rco(136,230,180,28,P.wood,4) + ln('M136 244 L316 244','#7a5c34',2.5)
  + rc(148,258,10,30,P.woodD) + rc(294,258,10,30,P.woodD)
  + cio(168,222,10,'#e8b04f') + cio(196,220,11,'#d9a35a') + cio(226,222,10,'#e8b04f')
  + ci(258,220,9,'#d94f3f') + ci(282,222,8,'#d94f3f')
  + butaTaru(374,272,1.1,0) + butaTaru(428,278,.95,0) + butaTaru(402,232,.85,0)
  + g(90,292,1.05,butaChar({size:'s',mood:'niko'}))),

buta_taru: f => wrap(grad('g_pbtaru',P.skyTop,P.skyBtm) + sun(70,50) + cloud(320,56,.8) + cloud(180,92,.5)
  + pt('M0 300 L0 158 Q170 196 480 272 L480 300 z',P.grass)
  + pt('M0 176 Q168 214 480 290 L480 300 Q168 236 0 198 z',P.sand)
  + fir(56,188,.9) + tree(148,212,.75)
  + ln('M150 196 q30 6 58 16','rgba(255,255,255,.55)',4)
  + ln('M136 214 q34 6 64 18','rgba(255,255,255,.4)',3.4)
  + butaTaru(214,222,1.3,28)
  + gx(376,282,1.3,pwolfChar({mood:'odoroki'}))
  + ci(348,196,5,'#8fc6e0') + ci(364,180,3.6,'#8fc6e0')
  + spark(276,164,.7)),

buta_owari: f => wrap(grad('g_pbowari','#bfe8f7','#f4fbe8') + sun(424,50) + cloud(112,58,1) + cloud(322,86,.6)
  + rc(0,204,480,96,P.grass) + el(240,228,360,46,P.grass2)
  + rengaIe(112,286,1.08) + yuge(148,124,.75,.5)
  + tree(452,248,1)
  + hana(52,290,'#e8607a',.9) + hana(212,296,'#fff',.85) + hana(424,294,'#7aa8e0',.85)
  + g(258,290,1.12,butaChar({size:'l',mood:'niko'}))
  + g(330,292,1.06,butaChar({size:'m',mood:'niko'}))
  + g(396,294,1,butaChar({size:'s',mood:'niko'}))
  + chou(196,166,.8) + spark(300,138,.7) + spark(160,190,.6)),

/* ----- オオカミの はなし ----- */
pwolf_yama: f => wrap(grad('g_pwyama',P.grayTop,P.grayBtm)
  + ci(392,62,26,'rgba(255,245,215,.4)')
  + mtns()
  + rc(0,228,480,72,'#7f9a72') + el(240,252,340,44,'#6f8a62')
  + fir(46,258,1.35) + fir(116,240,.95) + fir(424,262,1.45) + fir(360,238,.9)
  + elo(392,290,26,10,P.rock2) + elo(88,294,20,8,P.rock)
  + g(224,288,1.6,pwolfChar({mood:'hara'}))
  + gr(140,150,1,24, elo(0,0,7,3.4,'#c9a441'))
  + gr(96,190,1,-18, elo(0,0,6,3,'#b0863a'))
  + gr(330,168,1,40, elo(0,0,6.5,3.2,'#c9a441'))),

/* ----- レンガの いえの はなし ----- */
prenga_kamado: f => wrap(grad('g_pskama','#e8c9a0','#c9a074')
  + rc(0,236,480,64,'#a9814f') + ln('M0 236 L480 236','#8a6a3f',3)
  + ln('M0 270 L480 270','rgba(122,92,52,.35)',2.5)
  + g(240,236,1.12, pto('M-84 0 q0 -108 84 -108 q84 0 84 108 z',P.renga)
      + ln('M-82 -32 q82 -22 164 0','rgba(236,223,198,.7)',2.6)
      + ln('M-74 -62 q74 -20 148 0','rgba(236,223,198,.7)',2.6)
      + ln('M-56 -88 q56 -16 112 0','rgba(236,223,198,.7)',2.6)
      + ln('M-34 -102 q34 -10 68 0','rgba(236,223,198,.7)',2.6)
      + ln('M-44 -6 L-44 -30','rgba(236,223,198,.7)',2.6) + ln('M42 -6 L42 -30','rgba(236,223,198,.7)',2.6)
      + ln('M-62 -36 L-62 -60','rgba(236,223,198,.7)',2.6) + ln('M58 -36 L58 -60','rgba(236,223,198,.7)',2.6)
      + ln('M-24 -64 L-24 -86','rgba(236,223,198,.7)',2.6) + ln('M26 -64 L26 -86','rgba(236,223,198,.7)',2.6)
      + rco(-16,-128,32,26,P.rengaD,3)
      + pto('M-30 0 q0 -48 30 -48 q30 0 30 48 z','#3a1e14'))
  + ci(240,214,64,'rgba(255,170,90,.22)')
  + honoo(224,234,.9) + honoo(250,236,1.1) + honoo(272,232,.72)
  + yuge(240,88,1,.55) + yuge(268,104,.7,.4)
  + rengaHitotsu(72,286,1.1,0) + rengaHitotsu(72,266,1.1,0) + rengaHitotsu(72,246,1.1,0)
  + rengaHitotsu(408,288,1.05,0) + rengaHitotsu(408,268,1.05,0)
  + rengaHitotsu(122,292,.95,6)),

/* ----- ヘンゼルと グレーテル（本編） ----- */
hg_ie: f => wrap(grad('g_hgie','#a3b4c4','#dbe2e2')
  + cloud(324,54,.8) + cloud(126,76,.55)
  + pt('M0 204 L110 186 L250 200 L370 184 L480 202 L480 222 L0 222 z','rgba(120,146,138,.5)')
  + rc(0,216,480,84,'#9aa87e') + el(240,240,360,44,'#88976c')
  + kikoriIe(112,258,1.12)
  + ln('M141 156 q10 -14 0 -26','rgba(255,255,255,.4)',3)
  + kareki(206,244,.85) + fir(452,252,1.25) + fir(404,234,.8)
  + elo(166,282,17,6,'#c9a86b') + ln('M154 280 q12 -8 24 -2','#a9803f',2.2)
  + g(252,272,1.02,chichiChar())
  + g(310,274,1.02,mamaChar())
  + g(376,290,1.2,hanselChar({mood:'shonbori'}))
  + g(428,292,1.25,gretelChar({mood:'shonbori'}))),

hg_yoru: f => wrap(heyaYoru('g_hgyoru')
  + rco(344,104,124,134,'#4a3a2c',5)
  + ln('M374 108 L374 234','#3a2c20',3) + ln('M406 108 L406 234','#3a2c20',3)
  + ln('M438 108 L438 234','#3a2c20',3)
  + rco(150,208,116,12,'#6b5a44',4) + rc(166,220,10,30,'#4f412f') + rc(240,220,10,30,'#4f412f')
  + g(122,266,1.02,chichiChar())
  + g(268,268,1.02,mamaChar())
  + g(372,292,1.15,hanselChar({mood:'shonbori'}))
  + g(422,294,1.2,gretelChar({mood:'shonbori'}))
  + rc(0,0,480,300,'rgba(22,18,38,.42)')
  + ci(208,182,50,'rgba(255,205,130,.12)') + ci(208,182,28,'rgba(255,215,150,.14)')
  + rousoku(208,206,.95)),

hg_koishi: f => wrap(grad('g_hgkoi',P.yoruTop,P.yoruBtm)
  + tsuki(394,64,1)
  + star(96,58,2.6) + star(160,96,2) + star(58,120,2.2) + star(232,52,2.4)
  + star(300,96,2) + star(140,168,1.8) + star(330,140,2.2) + star(268,124,1.6)
  + pt('M0 212 L110 192 L250 206 L370 188 L480 204 L480 224 L0 224 z','rgba(24,38,68,.75)')
  + rc(0,218,480,82,'#2b3a52') + el(240,242,340,44,'#243247')
  + firYoru(42,252,1.5) + firYoru(112,236,1.05) + firYoru(178,216,.7)
  + firYoru(438,256,1.6) + firYoru(374,234,1) + firYoru(312,214,.7)
  + pto('M168 300 L322 300 L276 216 L230 216 z','#3f4f68')
  + koishiTsubu(252,222,.7) + koishiTsubu(240,236,.8) + koishiTsubu(262,250,.9)
  + koishiTsubu(244,264,1) + koishiTsubu(268,278,1.1) + koishiTsubu(248,292,1.2)
  + koishiTsubu(296,262,.75) + koishiTsubu(214,282,.85)
  + g(150,290,1.15,hanselChar({te:'koishi',mood:'niko'}))
  + g(200,292,1.2,gretelChar({mood:'niko'}))),

hg_mori: f => wrap(grad('g_hgmori','#8fa2b4','#c4cfcd')
  + cloud(330,50,.65) + cloud(140,74,.45)
  + rc(0,204,480,96,'#6f8a62') + el(240,228,360,46,'#5f7a52')
  + fir(38,250,1.6) + fir(108,232,1.1) + fir(176,212,.7)
  + fir(452,256,1.65) + fir(388,234,1.05)
  + rco(396,176,20,92,P.woodD,4) + ln('M400 200 L412 200','#5f4426',2.6)
  + ln('M406 182 q14 8 20 20','#8a7a5a',2.4)
  + edaKire(430,208,1.15,-34)
  + elo(240,286,36,11,'#6b5a48')
  + ln('M218 282 L262 276','#5a4530',5) + ln('M222 276 L260 284','#4f3d2c',5)
  + honoo(232,282,.42) + honoo(248,284,.36)
  + yuge(240,262,.5,.35)
  + g(150,292,1.2,hanselChar({mood:'shonbori'}))
  + g(200,294,1.25,gretelChar({mood:'shonbori'}))),

hg_pankuzu: f => wrap(grad('g_hgpan','#98a8bc','#ccd6d2')
  + cloud(360,54,.7) + cloud(140,88,.45)
  + rc(0,200,480,100,'#6f8a62') + el(240,224,360,46,'#5f7a52')
  + fir(36,246,1.5) + fir(102,228,1) + fir(170,210,.68)
  + fir(444,250,1.55) + fir(384,230,1)
  + pto('M148 300 L344 300 L288 204 L234 204 z','#87956e')
  + pankuzu(250,224,.6) + pankuzu(232,244,.75) + pankuzu(268,258,.85)
  + pankuzu(210,276,1) + pankuzu(306,286,1.05) + pankuzu(252,296,1.1)
  + g(178,278,.95,toriChar())
  + gx(332,268,.85,toriChar())
  + g(276,294,1.1,toriChar())
  + g(392,132,1,toriTobu()) + g(96,96,.8,toriTobu())),

hg_mayou: f => wrap(grad('g_hgmayo','#6b7d90','#a9b8ba')
  + rc(0,194,480,106,'#557047') + el(240,218,360,46,'#48633e')
  + fir(26,252,1.85) + fir(96,238,1.4) + fir(166,222,1) + fir(232,206,.72)
  + fir(456,256,1.9) + fir(390,240,1.45) + fir(320,222,1) + fir(286,204,.7)
  + el(240,212,270,15,'rgba(232,242,246,.3)')
  + el(120,246,190,17,'rgba(232,242,246,.42)') + el(368,264,200,19,'rgba(232,242,246,.34)')
  + el(60,284,150,15,'rgba(232,242,246,.26)')
  + g(216,292,1.18,hanselChar({mood:'shonbori'}))
  + g(266,294,1.22,gretelChar({mood:'shonbori'}))
  + rc(0,0,480,300,'rgba(70,86,96,.18)')),

hg_tori: f => wrap(grad('g_hgtori','#bfdcee','#f0f8e4')
  + sun(58,50) + cloud(330,58,.8) + cloud(180,96,.5)
  + rc(0,208,480,92,P.grass) + el(240,232,360,46,P.grass2)
  + fir(34,248,1.35) + fir(96,232,.9) + fir(452,254,1.45) + fir(404,236,.9)
  + ln('M480 86 q-120 22 -224 44',P.woodD,9)
  + ln('M330 108 l14 -18',P.woodD,4.5) + ln('M400 96 l10 -16',P.woodD,4)
  + gr(348,86,1,-24, elo(0,0,15,7,P.grass2)) + gr(410,78,1,-16, elo(0,0,13,6,P.grass2))
  + gr(302,116,1,20, elo(0,0,14,7,P.grass2))
  + g(266,130,1.25,toriChar())
  + onpu(212,96,1,'#4a3a2c') + onpu(178,124,.85,'#4a3a2c') + onpu(238,64,.75,'#4a3a2c')
  + spark(150,152,.7)
  + g(110,290,1.2,hanselChar({mood:'odoroki'}))
  + g(160,292,1.25,gretelChar({mood:'odoroki'}))),

/* 🔴 パンの かべ・クッキーの やね・すきとおった さとうの まど（原典どおり） */
hg_okashi: f => wrap(grad('g_hgoka','#c6e7f4','#f4fbe6')
  + sun(66,50) + cloud(336,54,.85) + cloud(180,92,.55)
  + rc(0,206,480,94,P.grass) + el(240,230,360,46,P.grass2)
  + fir(32,246,1.3) + fir(92,230,.85) + fir(458,250,1.4) + fir(410,232,.9)
  + okashiIe(268,292,1.3)
  + kukki(148,286,1) + ame(176,294,1,P.ameB) + ame(120,296,.9,P.ameY) + kukki(196,296,.85)
  + g(60,290,1.15,hanselChar({mood:'odoroki'}))
  + g(106,294,1.2,gretelChar({mood:'odoroki'}))
  + spark(206,150,.9) + spark(392,140,.75) + spark(150,196,.6)),

hg_kajiru: f => wrap(grad('g_hgkaji','#c6e7f4','#f4fbe6')
  + cloud(96,54,.7)
  + rc(0,204,480,96,P.grass) + el(240,228,360,46,P.grass2)
  + okashiIe(340,368,2.5)
  + kukki(238,290,.9) + ame(264,296,.85,P.ameP) + pankuzu(212,286,1)
  + g(96,292,1.35,hanselChar({mood:'niko',te:'kukki'}))
  + g(172,296,1.4,gretelChar({mood:'niko',te:'sato'}))
  + spark(140,152,.8) + spark(304,120,.7)),

hg_majo: f => wrap(grad('g_hgmajo','#c6e7f4','#f2f9e6')
  + sun(60,52) + cloud(340,56,.8) + cloud(206,94,.5)
  + rc(0,206,480,94,P.grass) + el(240,230,360,46,P.grass2)
  + fir(34,246,1.3) + fir(460,252,1.4)
  + okashiIe(320,292,1.22)
  + g(320,292,1.12,majoChar({mood:'yasashii'}))
  + kukki(238,294,.85) + ame(206,296,.85,P.ameG)
  + g(120,290,1.15,hanselChar({mood:'odoroki'}))
  + g(168,294,1.2,gretelChar({mood:'odoroki'}))
  + spark(258,160,.75)),

hg_ori: f => wrap(majoHeya('g_hgori')
  + rco(316,88,136,10,'#8a6a44',3)
  + rco(322,96,124,84,P.sato,4) + ln('M384 96 L384 180',P.icing,4) + ln('M322 138 L446 138',P.icing,4)
  + tetsuOri(128,268,1.12, g(0,-8,.74,hanselChar({mood:'shonbori'})))
  + rco(226,214,90,10,'#8a6a44',3) + rc(238,224,8,26,'#6e5138') + rc(298,224,8,26,'#6e5138')
  + kukki(250,206,.9) + kukki(274,208,.85) + ame(298,206,.8,P.ameP)
  + g(382,292,1.25,gretelChar({mood:'shonbori',te:'oke'}))),

hg_hone: f => wrap(majoHeya('g_hghone')
  + rco(292,76,166,10,'#8a6a44',3)
  + rco(300,84,150,96,P.sato,4) + ln('M375 84 L375 180',P.icing,4) + ln('M300 132 L450 132',P.icing,4)
  + rc(0,0,190,300,'#4a3f34')
  + ln('M44 0 L44 300',P.tetsu,7) + ln('M100 0 L100 300',P.tetsu,7) + ln('M156 0 L156 300',P.tetsu,7)
  + rco(-10,116,210,12,P.tetsuD,4)
  + g(196,230,1.55, rco(-42,-7,42,14,P.hanFuku,6) + cio(0,0,7.5,P.skin))
  + hone(236,230,1.35,-6)
  + g(300,292,1.45,majoChar({mood:'kunkun'}))),

/* 🔴 たいじの こうず。ひは 小さく、こわがらせない */
hg_kamado: f => wrap(majoHeya('g_hgkama')
  + rco(354,78,110,10,'#8a6a44',3)
  + rco(360,86,104,80,P.sato,4) + ln('M412 86 L412 166',P.icing,4) + ln('M360 126 L464 126',P.icing,4)
  + kamado(126,262,1.05)
  + ci(126,222,64,'rgba(255,170,90,.14)')
  + rco(190,146,116,10,'#8a6a44',3)
  + kukki(212,136,.85) + kukki(238,138,.8) + ame(264,136,.8,P.ameP) + kukki(288,138,.75)
  + g(272,284,1.22,majoChar({mood:'majo'}))
  + g(384,290,1.3,gretelChar({mood:'odoroki'}))),

hg_takara: f => wrap(majoHeya('g_hgtaka')
  + rco(34,88,122,10,'#8a6a44',3)
  + rco(40,96,110,80,P.sato,4) + ln('M95 96 L95 176',P.icing,4) + ln('M40 136 L150 136',P.icing,4)
  + rco(300,150,150,12,'#8a6a44',4)
  + ci(322,140,7,P.shinju) + ci(340,142,6,P.shinju)
  + rok(360,140,6,'#4a8fd4') + rok(378,141,5,'#d94f6a')
  + takaraBako(250,272,1.2)
  + g(112,290,1.15,hanselChar({mood:'niko'}))
  + g(396,292,1.2,gretelChar({mood:'niko'}))
  + spark(196,182,.9) + spark(324,198,.75) + spark(250,152,.7)),

hg_ahiru: f => wrap(grad('g_hgahi','#c6e7f4','#eef7e2')
  + sun(414,50) + cloud(120,54,.85) + cloud(320,84,.55)
  + rc(0,190,480,110,P.grass) + el(240,214,320,42,P.grass2)
  + fir(40,228,1.15) + fir(436,232,1.2) + tree(122,220,.8)
  + pt('M0 238 Q240 218 480 240 L480 284 Q240 266 0 286 z',P.sea)
  + waveRow(252,.55) + waveRow(272,.4)
  + ln('M150 268 q30 -8 58 -2','rgba(255,255,255,.45)',3.5)
  + ln('M140 280 q34 -8 62 -2','rgba(255,255,255,.3)',3)
  + g(268,266,1.3,ahiruChar())
  + g(254,244,1.05,hgNoru('hansel','niko'))
  + g(92,296,1.15,gretelChar({mood:'niko'}))
  + hana(430,296,'#fff',.85) + chou(202,168,.75) + spark(344,150,.7)),

hg_saikai: f => wrap(grad('g_hgsai','#bfe8f7','#f4fbe8')
  + sun(60,50) + cloud(322,56,.9) + cloud(186,94,.55)
  + rc(0,202,480,98,P.grass) + el(240,226,360,46,P.grass2)
  + kikoriIe(104,268,1.15)
  + ln('M134 158 q11 -15 0 -28','rgba(255,255,255,.6)',3.5)
  + ln('M148 142 q10 -13 1 -24','rgba(255,255,255,.4)',3)
  + tree(446,256,1.05) + fir(396,238,.75)
  + hana(48,290,'#e8607a',.9) + hana(196,296,'#fff',.85) + hana(462,292,'#7aa8e0',.85)
  + g(244,286,1.15,chichiChar())
  + g(322,290,1.2,hanselChar({mood:'niko'}))
  + g(382,292,1.25,gretelChar({mood:'niko'}))
  + ci(292,274,6,P.shinju) + ci(304,284,5,P.shinju) + rok(352,280,5,'#4a8fd4')
  + chou(180,166,.8) + spark(268,140,.8) + spark(414,176,.65)),

/* ----- まじょの はなし ----- */
majo_daidokoro: f => wrap(majoHeya('g_mjdai')
  + rco(190,76,128,10,'#8a6a44',3)
  + rco(196,84,116,82,'#3f4f68',4) + ln('M254 84 L254 166',P.icing,4) + ln('M196 125 L312 125',P.icing,4)
  + ci(226,110,9,'#fdf3c4') + ci(288,142,3,'#fdf3c4') + ci(210,146,2.4,'#fdf3c4')
  + kamado(78,258,.92)
  + ci(78,222,58,'rgba(255,170,90,.14)')
  + rco(212,214,196,12,'#8a6a44',4) + rc(224,226,10,32,'#6e5138') + rc(386,226,10,32,'#6e5138')
  + kukki(232,204,.95) + kukki(258,206,.95) + kukki(284,204,.95) + kukki(310,206,.9)
  + ame(336,204,.9,P.ameP) + ame(358,206,.85,P.ameB) + ame(380,204,.8,P.ameY)
  + rco(414,246,38,44,'#c9a86b',4) + ln('M414 264 L452 264','#a9803f',2.5)
  + rco(150,246,40,10,P.wood,3) + rc(156,256,8,34,P.woodD) + rc(176,256,8,34,P.woodD)
  + g(306,290,1.25,majoChar({mood:'yasashii'}))
  + onpu(176,176,.85,'rgba(74,58,44,.45)')),

/* ----- しろい とりの はなし ----- */
tori_sora: f => wrap(grad('g_trsora','#7fae6b','#5c8a4e')
  + pt('M0 46 q120 26 240 8 q120 -18 240 24 l0 28 q-120 -42 -240 -24 q-120 18 -240 -8 z',P.sea)
  + ln('M0 58 q120 26 240 8','rgba(255,255,255,.4)',3)
  + ln('M132 300 q26 -70 -8 -118 q-34 -48 42 -96 q52 -32 40 -74','#d8c9a0',11)
  + pankuzu(126,258,.8) + pankuzu(118,206,.8) + pankuzu(150,138,.75) + pankuzu(196,74,.7)
  + kiUe(48,190,1.15) + kiUe(34,262,.95) + kiUe(96,236,.85) + kiUe(108,288,1.1)
  + kiUe(196,290,1) + kiUe(258,198,.95) + kiUe(262,292,.9)
  + kiUe(300,120,1.1) + kiUe(322,262,1.15) + kiUe(378,110,1)
  + kiUe(440,168,1.1) + kiUe(452,246,.9) + kiUe(390,292,1.05)
  + g(398,214,1, pto('M0 -30 L46 0 L0 30 L-46 0 z',P.choco)
      + ln('M0 -28 L0 28',P.icing,2.6)
      + kukki(-22,0,.7) + kukki(0,-13,.7) + kukki(0,13,.7) + kukki(22,0,.7))
  + el(202,214,32,11,'rgba(30,50,30,.2)')
  + g(168,132,2,toriTobu())),

/* ----- かぐやひめ（本編） ----- */
kg_takebayashi: f => wrap(grad('g_kgtake','#cfe9e4','#eff7e0')
  + rc(0,210,480,90,'#7fa860') + el(240,234,380,46,'#6e9a52')
  + takeKi(190,224,.72,150,'#a9d193') + takeKi(300,220,.68,145,'#a9d193')
  + takeKi(30,238,1.1,200) + takeKi(82,230,.92,170,'#9cc97e') + takeKi(128,242,1.02,190)
  + takeKi(396,234,1.05,195) + takeKi(446,244,1.15,210) + takeKi(350,228,.88,165,'#9cc97e')
  + takeHikaru(252,278,1.15,180)
  + hikariTsubu(214,150,.9) + hikariTsubu(292,178,.75) + hikariTsubu(268,112,.6)
  + takenoko(96,290,.85)
  + g(150,292,1.15,okinaChar({mood:'odoroki',kago:1}))),

kg_akachan: f => wrap(grad('g_kgaka','#d4ece2','#f4f8e2')
  + rc(0,214,480,86,'#7fa860') + el(240,238,380,44,'#6e9a52')
  + takeKi(150,226,.7,148,'#a9d193') + takeKi(336,224,.68,145,'#a9d193')
  + takeKi(36,244,1,190) + takeKi(90,236,.86,162,'#9cc97e')
  + takeKi(408,246,1.05,200) + takeKi(452,238,.9,172,'#9cc97e')
  + ci(240,160,92,'rgba(255,246,190,.18)') + ci(240,160,62,'rgba(255,246,190,.24)')
  + g(240,292,1.2, rco(-30,-110,60,110,P.take,4)
      + ln('M-30 -60 L30 -60',P.takeD,3.4)
      + elo(0,-110,30,11,P.takeHikari) + el(0,-110,21,7,'#fff8d2'))
  + g(240,160,1.95,himeAkaChar())
  + hikariTsubu(178,140,.85) + hikariTsubu(302,156,.75) + hikariTsubu(240,74,.6)
  + g(118,294,1.1,okinaChar({mood:'odoroki'}))),

kg_seichou: f => wrap(washitsu('g_kgsei')
  + andon(58,238,.9)
  + g(240,238,1.15,kaguyaChar({hikari:1,mood:'hohoemi'}))
  + g(118,242,1.05,okinaChar({mood:'hohoemi'}))
  + g(368,242,1.05,ounaChar({mood:'hohoemi'}))
  + hikariTsubu(302,146,.7) + hikariTsubu(180,128,.6)),

kg_hyouban: f => wrap(grad('g_kghyo',P.duskTop,P.duskBtm)
  + cloud(120,54,.7) + cloud(356,78,.5)
  + rc(0,222,480,78,'#8a9a6b') + el(240,244,380,42,'#7a8a5e')
  + yashiki(240,222,1.02)
  + ci(240,158,30,'rgba(255,220,150,.22)')
  + takeKi(26,236,.88,168) + takeKi(456,240,.94,180)
  + g(92,288,1,villagerChar('#7a9ac9')) + g(146,292,1.05,villagerChar('#c98a4b'))
  + g(326,292,1.05,villagerChar('#8a8f6e')) + g(392,288,1,villagerChar('#a9737e'))
  + g(240,296,.92,kikoshiChar(P.kikoAo))),

kg_kikoshi: f => wrap(grad('g_kgkiko',P.skyTop,P.skyBtm) + sun(58,50) + cloud(320,56,.8)
  + rc(0,214,480,86,'#8fae6b') + el(240,238,380,42,'#7fa05e')
  + yashiki(240,212,.7)
  + takeKi(24,232,.84,158) + takeKi(458,236,.9,170)
  + g(64,290,1,kikoshiChar(P.kikoAo))
  + g(152,292,1.02,kikoshiChar(P.kikoMidori))
  + g(240,294,1.04,kikoshiChar(P.kikoKi))
  + g(328,292,1.02,kikoshiChar(P.kikoSuou))
  + g(416,290,1,kikoshiChar(P.kikoNibi))),

kg_takara: f => wrap(grad('g_kgtakara','#cfd9f2','#f4ecda')
  + kumoUsu(110,58,1,.4) + kumoUsu(382,52,.9,.34)
  + kumoUsu(146,186,1.2,.44) + kumoUsu(342,192,1.1,.36)
  + rc(0,252,480,48,'#8fae6b') + el(240,268,380,34,'#7fa05e')
  + hachiIshi(60,124,1.25) + tamaEda(152,104,1.2) + kawaGoromo(244,96,1.15)
  + ryuTama(340,102,1.25) + koyasuGai(434,124,1.25)
  + spark(106,64,.8) + spark(296,52,.7) + spark(404,60,.65)
  + g(60,296,.62,kikoshiChar(P.kikoAo))
  + g(152,296,.62,kikoshiChar(P.kikoMidori))
  + g(244,296,.62,kikoshiChar(P.kikoKi))
  + g(340,296,.62,kikoshiChar(P.kikoSuou))
  + g(434,296,.62,kikoshiChar(P.kikoNibi))),

kg_mikado: f => wrap(grad('g_kgmika',P.skyTop,'#f6f7e4') + sun(62,48) + cloud(330,58,.8)
  + rc(0,220,480,80,'#8fae6b') + el(240,242,380,40,'#7fa05e')
  + yashiki(120,220,.88)
  + takeKi(28,232,.8,152) + takeKi(456,238,.92,176)
  + g(262,292,.85,villagerChar('#6e7355')) + g(424,292,.85,villagerChar('#6e7355'))
  + koshiKago(342,282,1.02)
  + g(178,294,1.06,mikadoChar())
  + hana(58,294,'#fff',.8)),

kg_hikari: f => wrap(washitsu('g_kghika')
  + ci(302,178,98,'rgba(255,250,214,.18)') + ci(302,178,66,'rgba(255,250,214,.24)')
  + '<g opacity=".42">' + g(302,240,1.15,kaguyaChar({hikari:1})) + '</g>'
  + hikariTsubu(256,148,.9) + hikariTsubu(348,166,.8) + hikariTsubu(302,104,.7) + hikariTsubu(272,208,.6)
  + g(122,244,1.06,mikadoChar({mood:'odoroki'}))
  + andon(50,238,.85)),

kg_tsukimi: f => wrap(grad('g_kgtsuki',P.kgYoruTop,P.kgYoruBtm)
  + tsuki(378,70,1.3)
  + star(80,52,2.4) + star(146,92,2) + star(54,124,2.2) + star(216,56,2.2)
  + star(296,112,1.8) + star(124,162,1.7) + star(268,142,2) + star(456,150,1.6)
  + kumoUsu(150,120,1,.14)
  + takeKi(32,252,1,190,'#3f6b4a','#5f8f68','#456f52') + takeKi(84,244,.85,160,'#4a7a56','#5f8f68','#456f52')
  + takeKi(448,254,1.05,200,'#3f6b4a','#5f8f68','#456f52')
  + rc(0,246,480,54,'#3a4a3c') + el(240,262,380,32,'#33422f')
  + engawa(112,240,320,1)
  + andon(394,240,.76)
  + g(258,240,1.15,kaguyaChar({mood:'namida'}))),

kg_uchiake: f => wrap(washitsu('g_kguchi',1)
  + ci(352,86,34,'rgba(246,242,221,.20)')
  + andon(60,238,.95)
  + g(240,242,1.12,kaguyaChar({mood:'namida'}))
  + g(112,246,1.02,okinaChar({mood:'odoroki'}))
  + g(370,246,1.02,ounaChar({mood:'odoroki'}))
  + hikariTsubu(430,124,.55)),

kg_mamori: f => wrap(grad('g_kgmamo',P.kgYoruTop,P.kgYoruBtm)
  + kumoUsu(120,70,1.1,.2) + kumoUsu(352,52,.9,.16)
  + star(62,58,2) + star(430,98,1.8) + star(196,44,1.6) + star(286,80,1.5)
  + ci(414,64,46,'rgba(246,242,221,.10)')
  + rc(0,226,480,74,'#2f3a44') + el(240,248,380,40,'#27313a')
  + yashiki(240,226,1.02)
  + rco(212,178,56,11,'#7a5c34',3)
  + rc(0,0,480,300,'rgba(22,34,66,.30)')
  + g(42,288,1, rco(-14,-10,28,10,'#5f4426',3) + honoo(0,-10,.62))
  + g(438,288,1, rco(-14,-10,28,10,'#5f4426',3) + honoo(0,-10,.55))
  + g(100,290,1,heiChar(1)) + g(162,292,1.02,heiChar(1))
  + g(320,292,1.02,heiChar(1)) + g(384,290,1,heiChar(1))),

/* 🔴 らいごうずふうの くもに のった ぼさつぐんには しない。しずかな ひかりの はしらと 白い ひとかげだけ */
kg_juugoya: f => wrap(grad('g_kgjuu',P.kgYoruTop,P.kgYoruBtm)
  + star(58,50,2.2) + star(140,94,1.8) + star(414,62,2) + star(300,42,1.7) + star(452,132,1.6)
  + tsuki(384,64,1.25)
  + rc(0,250,480,50,'#2b3540') + el(240,266,380,34,'#26303a')
  + pto('M46 250 L240 194 L434 250 z','#3f4a58')
  + hikariBashira(240,96,.13) + hikariBashira(240,52,.17)
  + kumoUsu(146,152,1.1,.12) + kumoUsu(330,168,1,.1)
  + '<g opacity=".72">' + g(196,176,.48,shishaChar()) + g(240,158,.54,shishaChar())
      + g(286,178,.48,shishaChar()) + '</g>'
  + hikariTsubu(202,216,.7) + hikariTsubu(280,202,.6) + hikariTsubu(240,234,.55)
  + g(104,292,.9,heiChar(1)) + g(376,292,.9,heiChar(1))),

kg_tegami: f => wrap(washitsu('g_kgtega',1)
  + ci(372,92,34,'rgba(246,242,221,.18)')
  + andon(64,240,.9)
  + g(252,244,1.12,kaguyaChar({hikari:1,mood:'namida'}))
  + fuzukue(140,268,1.05) + fumiMaki(140,240,.95)
  + koromoTatami(356,276,1.05)
  + hikariTsubu(206,150,.6) + hikariTsubu(316,138,.55)),

kg_shouten: f => wrap(grad('g_kgshou',P.kgYoruTop,P.kgYoruBtm)
  + tsuki(104,58,1.1)
  + star(392,88,1.8) + star(160,40,1.6) + star(444,44,1.7) + star(320,120,1.5) + star(60,140,1.5)
  + hikariBashira(268,88,.15) + hikariBashira(268,50,.2)
  + rc(0,252,480,48,'#2b3540') + el(240,268,380,32,'#26303a')
  + pto('M56 252 L250 196 L444 252 z','#3f4a58')
  + '<g opacity=".85">' + g(268,152,.92,kaguyaChar({hikari:1})) + '</g>'
  + hikariTsubu(232,118,.8) + hikariTsubu(304,134,.7) + hikariTsubu(268,86,.6)
  + g(150,292,1.05,okinaChar({mood:'namida'}))
  + g(346,292,1.05,ounaChar({mood:'namida'}))),

/* 🔴 かんしょうを あおる こうずには しない。ふたりが しずかに そらを 見る だけ */
kg_ato: f => wrap(grad('g_kgato','#b9c6d6','#f0e8d6')
  + ci(392,64,32,'rgba(255,252,238,.16)') + ci(392,64,20,'rgba(255,252,238,.6)')
  + cloud(120,66,.55) + cloud(316,96,.4)
  + rc(0,228,480,72,'#8a9a76') + el(240,250,380,40,'#7c8c68')
  + takeKi(34,244,.9,172,'#7fa066','#96be7e') + takeKi(452,248,.95,182,'#7fa066','#96be7e')
  + engawa(78,240,344,0)
  + g(206,240,1.02,okinaChar())
  + g(286,240,1.02,ounaChar())
  + hana(64,292,'#fff',.75) + hana(424,296,'#e8d0e8',.7)),

kg_fuji: f => wrap(grad('g_kgfuji','#c9dcee','#f7ecd8')
  + ci(76,64,32,'rgba(255,236,180,.45)') + ci(76,64,20,'#ffd76e')
  + cloud(336,74,.7) + cloud(186,104,.45)
  + fujiYama(240,266,1)
  + yuge(240,132,.9,.6) + yuge(252,96,.62,.36) + yuge(228,66,.42,.22)
  + kumoUsu(116,182,1,.4) + kumoUsu(372,198,.9,.34)
  + rc(0,266,480,34,'#8a9a76') + el(240,280,380,28,'#7c8c68')
  + tree(52,296,.85) + tree(432,298,.75)),

/* ----- おきなと おうなの はなし ----- */
okina_take: f => wrap(grad('g_okitake','#cfeaf0','#f2f9e0')
  + sun(414,50) + cloud(126,58,.8)
  + rc(0,216,480,84,'#8fb86e') + el(240,240,380,44,'#7fa85e')
  + takeKi(190,224,.75,150,'#a9d193') + takeKi(300,222,.7,146,'#a9d193')
  + takeKi(28,240,1.1,200) + takeKi(80,232,.94,176,'#9cc97e') + takeKi(134,244,1,190)
  + takeKi(394,238,1.04,196) + takeKi(446,246,1.14,210) + takeKi(344,232,.9,170,'#9cc97e')
  + takenoko(118,284,1) + takenoko(356,290,1.1) + takenoko(404,280,.85)
  + g(240,292,1.15,okinaChar({mood:'hohoemi',kago:1}))
  + chou(184,166,.7) + hana(56,292,'#fff',.8) + spark(302,150,.65)),

/* ----- つきの つかいの はなし ----- */
/* 🔴 かんじょうの ない くに。にぎやかな えんしゅつ・らいごうずふうの ひょうげんは しない */
tsuki_miyako: f => wrap(grad('g_tsukimiya','#57527e','#b3a9cf')
  + ci(240,110,130,'rgba(255,252,240,.06)')
  + kumoUsu(88,124,1.2,.16) + kumoUsu(392,152,1,.14) + kumoUsu(240,198,1.4,.1)
  + rc(0,236,480,64,P.miyakoD) + el(240,254,400,40,P.miyako)
  + miyakoRou(166,224,.6) + miyakoRou(320,222,.6)
  + miyakoRou(96,238,.88) + miyakoRou(392,240,.84) + miyakoRou(240,232,1.12)
  + ln('M40 282 L440 282','rgba(255,255,255,.28)',2.4)
  + ln('M96 296 L384 296','rgba(255,255,255,.2)',2.4)
  + '<g opacity=".92">' + g(146,280,.92,shishaChar()) + g(336,282,.92,shishaChar()) + '</g>'
  + hikariTsubu(120,150,.5) + hikariTsubu(404,118,.45)),

/* ----- ブレーメンの おんがくたい（本編） ----- */
/* 🔴 あるじの かおは 出さない（とぐちの かげ）。しうちの ばめんは 絵に かかない */
br_koya: f => wrap(grad('g_brkoya','#a9bccd','#e4ebe8')
  + cloud(330,52,.7) + cloud(146,80,.5)
  + rc(0,212,480,88,'#8fa06b') + el(240,236,380,44,'#7f9060')
  + tree(462,266,.8)
  + konayaIe(146,240,1.1)
  + pt('M0 256 Q64 250 126 268 L168 300 L0 300 z',P.sea) + waveRow(276,.45)
  + suisha(56,248,.9)
  + konaFukuro(230,286,1.05) + konaFukuro(262,292,.85)
  + g(150,240,.6,shujinChar())
  + g(340,294,1,robaChar({mood:'shonbori'}))),

br_roba: f => wrap(grad('g_brroba',P.skyTop,P.skyBtm) + sun(414,52) + cloud(120,58,.9) + cloud(322,88,.55)
  + mtns()
  + rc(0,214,480,86,P.grass) + el(240,238,380,44,P.grass2)
  + pt('M186 300 L318 300 L272 214 L232 214 z',P.sand)
  + ln('M234 216 L190 296','rgba(160,130,80,.28)',2.5) + ln('M270 216 L314 296','rgba(160,130,80,.28)',2.5)
  + tree(50,254,1.05) + tree(444,264,.95) + fir(392,238,.7)
  + hana(78,290,'#fff',.85) + hana(412,296,'#e8607a',.85)
  + g(214,292,1.08,robaChar({mood:'niko'}))
  + chou(146,164,.75) + spark(334,142,.7)),

br_inu: f => wrap(grad('g_brinu',P.skyTop,'#eef7e6') + sun(66,52) + cloud(316,54,.85) + cloud(172,92,.5)
  + rc(0,210,480,90,P.grass) + el(240,234,380,44,P.grass2)
  + pt('M150 300 L332 300 L288 210 L244 210 z',P.sand)
  + tree(42,250,1) + fir(430,240,.75) + tree(464,264,.9)
  + g(140,292,1.15,bremenInuChar({fuse:1,mood:'shonbori'}))
  + gx(396,296,1,robaChar({mood:'futsu'}))
  + hana(84,294,'#7aa8e0',.85) + chou(212,166,.7)),

br_neko: f => wrap(grad('g_brneko','#c9e4f2','#f2f8e6') + sun(58,50) + cloud(324,58,.8) + cloud(178,96,.5)
  + rc(0,208,480,92,P.grass) + el(240,232,380,46,P.grass2)
  + tree(38,248,1)
  + rc(230,170,250,52,'#c4bdaf') + rengaMe(230,170,250,52,3,6,'rgba(120,112,98,.35)')
  + ln('M230 170 L230 222',P.ink,2.5)
  + rco(224,158,256,13,'#a9a294',3)
  + g(340,158,1.05,bremenNekoChar({mood:'shonbori'}))
  + g(96,294,.95,robaChar({mood:'futsu'}))
  + g(190,296,1.05,bremenInuChar({mood:'futsu'}))
  + hana(60,292,'#fff',.85) + chou(150,146,.7)),

br_ondori: f => wrap(grad('g_brondo','#d4e8ee','#f6f4dc') + sun(408,54) + cloud(120,56,.8) + cloud(196,110,.45)
  + rc(0,212,480,88,P.grass) + el(240,236,380,44,P.grass2)
  + rco(268,150,22,90,P.wood,3) + rco(418,150,22,90,P.wood,3)
  + rco(260,138,38,13,P.woodD,3) + rco(410,138,38,13,P.woodD,3)
  + ln('M290 178 L418 178',P.woodD,7) + ln('M290 208 L418 208',P.woodD,7)
  + ln('M290 236 L418 236',P.woodD,6) + ln('M296 178 L412 236',P.woodD,5)
  + g(279,138,1.1,ondoriChar({naku:1}))
  + g(76,292,.92,robaChar({mood:'futsu'}))
  + g(172,296,1.1,bremenInuChar({mood:'niko'}))
  + g(226,296,1,bremenNekoChar({mood:'futsu'}))
  + tree(452,262,.9) + hana(38,294,'#e8607a',.8) + spark(348,120,.7)),

br_mori: f => wrap(grad('g_brmori',P.yoruTop,P.yoruBtm)
  + tsuki(408,62,1)
  + star(80,54,2.4) + star(150,96,2) + star(56,124,2.2) + star(226,50,2.2)
  + star(302,102,1.8) + star(142,168,1.7) + star(340,58,1.6)
  + pt('M0 212 L110 192 L250 206 L370 188 L480 204 L480 226 L0 226 z','rgba(24,38,68,.75)')
  + rc(0,220,480,80,'#2b3a52') + el(240,244,340,44,'#243247')
  + firYoru(40,256,1.5) + firYoru(112,240,1.05) + firYoru(452,262,1.6) + firYoru(404,240,1)
  + g(126,294,.98,robaChar({mood:'futsu'}))
  + g(232,296,1.15,bremenInuChar({mood:'futsu'}))
  + g(292,296,1.1,bremenNekoChar({mood:'futsu'}))
  + g(348,296,1.05,ondoriChar({mood:'futsu'}))),

br_akari: f => wrap(grad('g_brakari',P.yoruTop,P.yoruBtm)
  + star(66,58,2.2) + star(140,44,1.8) + star(206,88,1.7) + star(46,138,1.6) + star(280,52,1.6)
  + pt('M0 208 L120 188 L260 202 L380 184 L480 200 L480 222 L0 222 z','rgba(24,38,68,.75)')
  + rc(0,216,480,84,'#2b3a52') + el(240,240,340,44,'#243247')
  + madoHikari(330,198,1.1) + moriIe(330,214,.32,1)
  + firYoru(38,262,1.6) + firYoru(108,244,1.15) + firYoru(180,228,.8)
  + firYoru(452,266,1.65) + firYoru(392,246,1.1) + firYoru(268,224,.62)
  + g(66,296,.92,robaChar({mood:'odoroki'}))
  + g(172,298,1.1,bremenInuChar({mood:'odoroki'}))
  + g(226,298,1,bremenNekoChar({mood:'futsu'}))
  + g(320,298,.98,ondoriChar({mood:'futsu'}))),

br_ie_soto: f => wrap(grad('g_briesoto',P.yoruTop,P.yoruBtm)
  + tsuki(58,58,.85)
  + star(150,48,2) + star(226,92,1.8) + star(300,44,1.7) + star(430,110,1.6) + star(112,128,1.5)
  + rc(0,224,480,76,'#2b3a52') + el(240,248,340,42,'#243247')
  + firYoru(36,258,1.35) + firYoru(458,262,1.4) + firYoru(392,240,.85)
  + madoHikari(266,196,1.5) + madoHikari(344,196,1.5)
  + moriIe(306,246,1.02,1)
  + pt('M250 202 L282 202 L300 258 L232 258 z','rgba(255,214,130,.09)')
  + pt('M328 202 L360 202 L380 258 L312 258 z','rgba(255,214,130,.09)')
  + g(44,294,.82,robaChar({mood:'futsu'}))
  + g(126,296,.95,bremenInuChar({mood:'futsu'}))
  + g(172,296,.88,bremenNekoChar({mood:'futsu'}))
  + g(232,296,.85,ondoriChar({mood:'futsu'}))),

/* 🔴 つみかさなりは よこから・まどに まえあしを かけた うごきで かく（ブレーメンの どうぞうの ぞうけいは 写さない） */
br_mado: f => wrap(grad('g_brmado',P.yoruTop,P.yoruBtm)
  + star(58,44,2) + star(122,86,1.7) + star(46,132,1.6)
  + rc(0,232,480,68,'#2b3a52') + el(240,254,340,38,'#243247')
  + firYoru(34,268,1.2)
  + rc(196,0,284,236,P.wall) + ln('M196 0 L196 236',P.ink,2.5)
  + ln('M196 96 L480 96',P.beam,6) + ln('M300 0 L300 96',P.beam,6) + ln('M400 96 L400 236',P.beam,6)
  + ooMado(310,196,1.05,1)
  + madoHikari(310,166,1.6)
  + g(208,284,1.02,robaChar({tate:1,mood:'nakigoe'}))
  + gr(236,204,1,-14,bremenInuChar({mood:'hoeru'}))
  + gr(258,158,.92,-9,bremenNekoChar({mood:'futsu'}))
  + g(276,120,.86,ondoriChar({naku:1}))),

br_tobikomi: f => wrap(room('g_brtobi')
  + rco(46,118,92,70,'#2b3a52',4)
  + rco(40,110,104,9,P.beam,3)
  + pt('M46 118 L74 118 L52 146 z','rgba(255,255,255,.45)') + pt('M138 130 L138 168 L114 140 z','rgba(255,255,255,.35)')
  + gr(30,124,1,-28, rco(-8,-6,16,62,P.beam,3))
  + rco(392,128,66,110,'#5a4632',4) + ci(402,190,3,'#f2ce6a')
  + shokutaku(212,238,.72) + panMaru(180,224,.8) + koppu(240,226,.8)
  + ln('M96 196 q34 10 66 2','rgba(74,58,44,.28)',3) + ln('M92 216 q36 12 70 4','rgba(74,58,44,.22)',3)
  + ln('M104 236 q30 10 58 4','rgba(74,58,44,.18)',3)
  + g(114,290,.95,robaChar({mood:'nakigoe'}))
  + g(206,294,1.1,bremenInuChar({mood:'hoeru'}))
  + g(258,294,1,bremenNekoChar({mood:'futsu'}))
  + g(298,292,.95,ondoriChar({naku:1}))
  + g(348,296,1.02,dorobouChar(P.doroA,{mood:'odoroki',nige:1}))
  + g(400,298,1,dorobouChar(P.doroB,{mood:'kowagari',nige:1}))
  + g(446,296,.98,dorobouChar(P.doroC,{mood:'odoroki',nige:1}))),

br_gochisou: f => wrap(room('g_brgochi')
  + g(430,128,.82, rco(-42,-32,84,64,'#2b3a52',4)
      + ln('M0 -32 L0 32',P.beam,4) + ln('M-42 0 L42 0',P.beam,4)
      + rco(-46,-38,92,9,P.beam,3))
  + ci(72,192,72,'rgba(255,170,90,.16)')
  + danro(72,238,.62)
  + shokutaku(288,240,.94)
  + panMaru(212,224,.9) + chiizu(248,228,.9) + budou(282,220,.85) + koppu(316,228,.9)
  + g(122,292,.9,robaChar({mood:'niko'}))
  + g(212,296,1.1,bremenInuChar({mood:'niko'}))
  + g(336,224,.85,bremenNekoChar({mood:'niko'}))
  + g(420,296,1,ondoriChar({mood:'futsu'}))
  + onpu(176,168,.8,'rgba(74,58,44,.4)') + onpu(392,150,.7,'rgba(74,58,44,.32)')),

/* 🔴 ネコの ひかる 目は「すみび」と まちがえられる ところ。こわい えんしゅつには しない */
br_yoru: f => wrap(room('g_bryoru')
  + rc(56,120,148,118,P.rengaD) + rengaMe(56,120,148,118,4,4,'rgba(236,223,198,.35)')
  + rco(48,108,164,14,'#8a5230',4)
  + pto('M84 238 q0 -68 46 -68 q46 0 46 68 z','#241a16')
  + shokutaku(320,238,.8) + panMaru(288,226,.8) + koppu(348,228,.8)
  + g(328,292,1.08,dorobouChar(P.doroA,{mood:'futsu'}))
  + rc(0,0,480,300,'rgba(16,20,44,.62)')
  + ci(328,232,86,'rgba(255,200,120,.05)') + ci(328,232,62,'rgba(255,204,128,.06)')
  + ci(328,232,40,'rgba(255,210,140,.08)') + ci(328,232,24,'rgba(255,218,152,.1)')
  + ci(118,196,17,'rgba(255,215,110,.14)') + ci(142,196,17,'rgba(255,215,110,.14)')
  + ci(118,196,9,'rgba(255,215,110,.2)') + ci(142,196,9,'rgba(255,215,110,.2)')
  + ci(118,196,5.4,P.brNekoMe) + ci(142,196,5.4,P.brNekoMe)
  + ln('M118 191 l0 10','#6e5320',2.4) + ln('M142 191 l0 10','#6e5320',2.4)
  + matchiBi(352,238,1.2)),

br_niwa: f => wrap(grad('g_brniwa',P.yoruTop,P.yoruBtm)
  + tsuki(422,58,.85)
  + star(66,52,2) + star(148,92,1.8) + star(240,46,1.7) + star(46,132,1.6)
  + rc(0,226,480,74,'#2b3a52') + el(240,250,340,40,'#243247')
  + firYoru(452,268,1.3)
  + madoHikari(124,206,1.2) + moriIe(124,228,.98,1)
  + g(124,118,.95,ondoriChar({naku:1}))
  + gx(272,294,1,robaChar({keri:1}))
  + ln('M328 250 q22 -8 42 -2','rgba(255,255,255,.3)',3) + ln('M330 266 q24 -6 44 0','rgba(255,255,255,.22)',3)
  + g(410,296,1.02,dorobouChar(P.doroA,{mood:'odoroki',nige:1}))),

br_houkoku: f => wrap(grad('g_brhouko',P.yoruTop,P.yoruBtm)
  + tsuki(72,60,.8)
  + star(160,48,2) + star(240,94,1.8) + star(330,44,1.7) + star(420,104,1.6) + star(120,132,1.5)
  + pt('M0 206 L120 186 L260 200 L380 182 L480 198 L480 220 L0 220 z','rgba(24,38,68,.75)')
  + rc(0,214,480,86,'#2b3a52') + el(240,238,340,44,'#243247')
  + firYoru(34,254,1.45) + firYoru(104,238,1) + firYoru(452,258,1.5) + firYoru(388,240,1.05)
  + firYoru(226,226,.66) + firYoru(310,222,.56)
  + g(128,296,1.2,dorobouChar(P.doroB,{mood:'hanashi',te:'yubi'}))
  + g(258,298,1.14,dorobouChar(P.doroA,{mood:'kowagari'}))
  + g(346,296,1.08,dorobouChar(P.doroC,{mood:'odoroki'}))),

br_ie_asa: f => wrap(grad('g_brieasa','#c6e7f4','#f4fbe6') + sun(62,52) + cloud(330,56,.85) + cloud(178,94,.5)
  + rc(0,206,480,94,P.grass) + el(240,230,360,46,P.grass2)
  + fir(30,246,1.3) + fir(462,254,1.4)
  + moriIe(258,258,1.05,0)
  + yuge(292,140,.9,.5) + yuge(302,108,.6,.3)
  + g(64,292,.92,robaChar({mood:'niko'}))
  + g(156,296,1.1,bremenInuChar({mood:'niko'}))
  + g(364,296,1.05,bremenNekoChar({mood:'niko'}))
  + g(438,294,1,ondoriChar({naku:1}))
  + hana(112,296,'#fff',.85) + hana(206,298,'#e8607a',.85) + chou(190,168,.75) + spark(140,150,.7)),

/* 🔴 まちには もう おんがくたいが いた。がっきを もつのは まちの ひとたちだけ（4ひきは 鳴きごえ） */
br_bremen: f => wrap(grad('g_brbremen',P.skyTop,'#f6f4e2') + sun(58,50) + cloud(324,56,.85) + cloud(190,92,.5)
  + rc(0,212,480,88,'#e2dccf') + el(240,238,420,34,'#d9d2c4') + ishidatami(246)
  + ln('M0 214 L480 214','rgba(150,140,124,.3)',2.5)
  + machiIe(62,212,.84,'#f2e4d0','#9c5040') + machiIe(172,208,.78,P.machiKabe)
  + machiIe(292,210,.82,'#eee2ce','#b56a4a') + machiIe(412,214,.88,'#f4ead6')
  + machiGakutai(372,236,.52)
  + onpu(330,192,.62,'rgba(74,58,44,.42)') + onpu(414,176,.54,'rgba(74,58,44,.34)')
  + g(56,296,.86,robaChar({mood:'niko'}))
  + g(154,300,1.05,bremenInuChar({mood:'niko'}))
  + g(212,300,1,bremenNekoChar({mood:'niko'}))
  + g(262,298,.95,ondoriChar({naku:1}))
  + g(320,300,.66,girlChar())
  + g(358,300,.54,villagerChar('#7aa8e0'))
  + spark(112,150,.7)),

/* ----- どろぼうの はなし ----- */
dorobou_mori: f => wrap(grad('g_bdmori',P.yoruTop,P.yoruBtm)
  + tsuki(84,64,.9)
  + star(178,46,2) + star(256,92,1.8) + star(352,50,1.7) + star(438,114,1.6) + star(140,134,1.5)
  + pt('M0 210 L120 190 L260 204 L380 186 L480 202 L480 224 L0 224 z','rgba(24,38,68,.75)')
  + rc(0,218,480,82,'#2b3a52') + el(240,242,340,44,'#243247')
  + madoHikari(398,206,.9) + moriIe(398,222,.28,1)
  + firYoru(30,262,1.7) + firYoru(102,244,1.2) + firYoru(174,228,.82)
  + firYoru(462,266,1.7) + firYoru(300,226,.7)
  + g(216,276,.78,dorobouChar(P.doroB,{mood:'futsu'}))
  + g(142,296,1.05,dorobouChar(P.doroA,{mood:'kowagari'}))
  + g(276,300,1.12,dorobouChar(P.doroC,{mood:'kowagari',te:'yubi'}))),

/* ----- オンドリの はなし ----- */
ondori_yane: f => wrap(grad('g_boyane',P.duskTop,P.duskBtm)
  + ci(96,98,42,'rgba(255,236,180,.45)') + ci(96,98,26,'#ffd76e')
  + cloud(352,74,.85) + cloud(408,132,.5)
  + pt('M0 244 L60 224 L130 240 L200 220 L280 242 L350 218 L420 240 L480 226 L480 258 L0 258 z','rgba(96,86,74,.5)')
  + pto('M18 300 L240 170 L462 300 z',P.machiYane)
  + ln('M60 278 L420 278','#8e4634',4) + ln('M86 262 L394 262','#8e4634',4)
  + ln('M112 247 L368 247','#8e4634',4) + ln('M138 232 L342 232','#8e4634',4)
  + ln('M164 216 L316 216','#8e4634',4) + ln('M190 201 L290 201','#8e4634',4)
  + ln('M216 186 L264 186','#8e4634',4)
  + pto('M214 176 L266 176 L266 170 L214 170 z','#7a3a2c')
  + rco(352,202,22,48,'#8e4634',3) + rco(346,194,34,10,'#7a3a2c',3)
  + g(240,170,1.4,ondoriChar({naku:1}))
  + onpu(346,116,.9,'rgba(74,58,44,.5)') + onpu(392,86,.75,'rgba(74,58,44,.4)')
  + spark(146,120,.75)),

/* ----- じゅうにしの はじまり（本編） ----- */
/* 🔴 かみさまの かおは 出さない（ごてんの おくの ぎゃっこう）
   🔴 とうちゃくの ばめんに じゅんいの すうじは かかない
   🔴 どうぶつは としを とった すがたに しない。がっき・ころもは もたせない */
ju_ofure: f => wrap(grad('g_juofure','#cfe0ee','#f6fafc')
  + cloud(102,54,.7) + cloud(360,84,.5)
  + mtns()
  + juYukiNo(208)
  + juMatsuYuki(40,254,1) + juMatsuYuki(464,262,1.05)
  /* 🔴 どうぶつは たてふだの ほうを むく（みぎむきの キャラを ふだの ひだりに ならべる） */
  + juFuda(400,264,.95)
  + g(62,296,1.1,saruChar())
  + g(146,294,.88,ushiChar())
  + g(246,294,.9,toraChar())
  + g(312,296,.95,usagiChar())
  + juYukiFuru(.6)),

ju_nezuneko: f => wrap(grad('g_junezune',P.duskTop,P.duskBtm)
  + ci(410,66,40,'rgba(255,236,180,.4)') + ci(410,66,24,'#ffd76e')
  + cloud(120,58,.6) + cloud(300,96,.42)
  + juYukiNo(212)
  + juMatsuYuki(44,258,1)
  + juKoya(392,214,.86,1)
  + g(184,294,1.25,jnezumiChar({mood:'damaru'}))
  + gx(292,294,1.05,jnekoChar({mood:'normal'}))
  + juYukiFuru(.5)),

ju_ushi_yoru: f => wrap(grad('g_juushiyo',P.juYoruTop,P.juYoruBtm)
  + tsuki(406,58,1)
  + star(72,52,2.3) + star(150,94,1.9) + star(226,46,2.1) + star(58,132,1.8) + star(300,110,1.7)
  + pt('M0 202 L112 182 L250 196 L372 178 L480 194 L480 218 L0 218 z','rgba(26,42,78,.7)')
  + juYukiNo(210,1)
  + juMatsuYuki(38,262,1.1) + juMatsuYuki(456,268,1.2)
  + juKoya(122,254,.92,1)
  + ln('M0 276 q240 -26 480 -4','rgba(255,255,255,.3)',3.4)
  + g(302,294,1,ushiChar())
  + juYukiFuru(.55)),

ju_senaka: f => wrap(grad('g_jusenaka',P.juYoruTop,P.juYoruBtm)
  + tsuki(80,60,.9)
  + star(190,48,2.2) + star(270,96,1.9) + star(360,44,1.8) + star(440,110,1.7) + star(140,128,1.6)
  + pt('M0 206 L120 186 L260 200 L380 182 L480 198 L480 222 L0 222 z','rgba(26,42,78,.7)')
  + juYukiNo(214,1)
  + juMatsuYuki(44,266,1.05) + juMatsuYuki(448,272,1.15)
  + ln('M0 280 q240 -24 480 -2','rgba(255,255,255,.28)',3.4)
  + g(230,296,1.25,ushiChar({nezumi:1}))
  + juYukiFuru(.5)),

ju_mon: f => wrap(grad('g_jumon',P.juAsaTop,P.juAsaBtm)
  + ci(76,60,40,'rgba(255,236,180,.45)') + ci(76,60,25,'#ffd76e')
  + cloud(356,68,.62) + cloud(192,44,.42)
  + juYukiNo(216)
  + juHei(0,172,216) + juHei(308,480,216)
  + juMon(240,216,1.12,{aki:1,
      oku: ci(0,-46,34,'rgba(255,244,206,.13)') + ci(0,-46,22,'rgba(255,244,206,.17)')
        + g(0,-6,.5,kamisamaChar())})
  + juKadomatsu(158,216,.98) + juKadomatsu(322,216,.98)
  + spark(112,142,.7) + spark(408,126,.6)),

ju_tobiori: f => wrap(grad('g_jutobi',P.juAsaTop,P.juAsaBtm)
  + ci(72,58,38,'rgba(255,236,180,.45)') + ci(72,58,24,'#ffd76e')
  + cloud(372,72,.58)
  + juYukiNo(220)
  + juHei(0,214,220) + juHei(388,480,220)
  + juMon(300,220,1.02,{aki:1,
      oku: ci(0,-46,30,'rgba(255,244,206,.13)') + g(0,-6,.48,kamisamaChar())})
  + juKadomatsu(374,220,.86)
  + g(106,300,1.25,ushiChar())
  + ln('M148 234 q38 -26 68 -8','rgba(74,58,44,.3)',3)
  + juUgoki(186,230,.85,-28)
  + gr(220,230,.95,-26,jnezumiChar({mood:'normal',noKage:1}))),

ju_kake: f => wrap(grad('g_jukake','#ffe2b8','#fdf7e4')
  + ci(404,56,36,'rgba(255,236,180,.42)') + ci(404,56,22,'#ffd76e')
  + cloud(112,62,.62) + cloud(300,40,.44)
  + mtns()
  + juYukiNo(214)
  + juMatsuYuki(38,258,.95) + juMatsuYuki(456,266,1.05)
  + ln('M0 272 q240 -24 480 -2','rgba(255,255,255,.4)',3.4)
  + juUgoki(130,262,1.2,0) + juUgoki(292,268,1.05,0)
  + g(166,294,1.2,toraChar({kake:1}))
  + g(330,296,1.25,usagiChar({hane:1}))),

ju_tatsu_hebi: f => wrap(grad('g_jutatsu','#c4e2f2','#f8fae8')
  + ci(64,54,36,'rgba(255,236,180,.4)') + ci(64,54,22,'#ffd76e')
  + cloud(186,98,.7) + cloud(432,58,.55)
  + mtns()
  + juYukiNo(218)
  + juMatsuYuki(42,264,1)
  + g(320,150,1,tatsuChar())
  + g(148,296,1.2,hebiChar())
  + spark(252,106,.7) + spark(396,204,.6)),

ju_uma_hitsuji: f => wrap(grad('g_juumahi','#d2e6f2','#f8f8e6')
  + ci(410,58,36,'rgba(255,236,180,.42)') + ci(410,58,22,'#ffd76e')
  + cloud(128,58,.68) + cloud(320,92,.48)
  + mtns()
  + juYukiNo(212)
  + juMatsuYuki(40,256,1) + juMatsuYuki(452,264,1.1)
  + ln('M0 270 q240 -24 480 -2','rgba(255,255,255,.4)',3.4)
  + g(152,294,1.15,umaChar())
  + g(334,296,1.2,hitsujiChar())),

/* 🔴 いさかいの ばめんだが こわい かおには しない（トリが あいだに 立つ ところを 見せる） */
ju_saru_inu_tori: f => wrap(grad('g_jusaru','#cfe4ee','#f8f8e8')
  + cloud(96,60,.6) + cloud(392,84,.46)
  + mtns()
  + juYukiNo(214)
  + yashiki(398,214,.52)
  + juMatsuYuki(38,258,.95) + juMatsuYuki(456,266,1.05)
  + g(112,296,1.25,saruChar())
  + gx(378,296,1.25,dogChar({kubiwa:false}))
  + g(240,294,1.15,ondoriChar({wakai:1,naku:1}))
  + ln('M166 234 l16 -10','rgba(74,58,44,.26)',3) + ln('M170 246 l18 -4','rgba(74,58,44,.2)',3)
  + ln('M320 234 l-16 -10','rgba(74,58,44,.26)',3) + ln('M316 246 l-18 -4','rgba(74,58,44,.2)',3)),

ju_inoshishi: f => wrap(grad('g_juino',P.juAsaTop,P.juAsaBtm)
  + ci(66,56,36,'rgba(255,236,180,.42)') + ci(66,56,22,'#ffd76e')
  + cloud(344,70,.55)
  + juYukiNo(218)
  + juHei(0,140,218) + juHei(250,480,218)
  + juMon(190,218,.95,{aki:1,
      oku: ci(0,-46,28,'rgba(255,244,206,.13)') + g(0,-6,.46,kamisamaChar())})
  + juKadomatsu(120,218,.82) + juKadomatsu(260,218,.82)
  + juUgoki(326,260,1.25,0) + juUgoki(312,278,1.05,0)
  + g(390,298,1.15,inoshishiChar({kake:1}))),

/* 🔴 じゅんいの すうじは かかない。ならびも とうちゃくじゅんに しない（2れつに 入りまじる） */
ju_seizoroi: f => wrap(grad('g_juseizo',P.juAsaTop,P.juAsaBtm)
  + ci(400,54,38,'rgba(255,236,180,.42)') + ci(400,54,24,'#ffd76e')
  + cloud(110,58,.6) + cloud(300,40,.42)
  + juYukiNo(196)
  + juHei(0,172,196) + juHei(310,480,196)
  + juMon(240,196,.82,{})
  + juKadomatsu(178,196,.7) + juKadomatsu(302,196,.7)
  + g(120,116,.55,tatsuChar())
  + g(56,250,.62,hitsujiChar())
  + g(146,250,.56,ushiChar())
  + g(238,248,.62,ondoriChar({wakai:1}))
  + g(330,250,.62,hebiChar())
  + g(422,248,.68,saruChar())
  + g(48,298,.72,usagiChar())
  + g(126,298,.78,dogChar({kubiwa:false}))
  + g(196,298,.95,jnezumiChar())
  + g(268,298,.66,umaChar())
  + g(348,298,.7,inoshishiChar())
  + g(428,298,.68,toraChar())),

ju_neko_asa: f => wrap(grad('g_junekoa','#e2ecf4','#fdf8ea')
  + ci(400,58,34,'rgba(255,236,180,.35)') + ci(400,58,21,'#ffd76e')
  + cloud(120,54,.6) + cloud(320,86,.44)
  + juYukiNo(218)
  + juHei(0,166,218) + juHei(314,480,218)
  + juMon(240,218,1.05,{})
  + juKadomatsu(158,218,.9) + juKadomatsu(322,218,.9)
  + g(120,298,1.15,jnekoChar({mood:'odoroki'}))),

ju_neko_kao: f => wrap(grad('g_junekok','#e6eef6','#fdf9ec')
  + ci(88,58,36,'rgba(255,236,180,.4)') + ci(88,58,22,'#ffd76e')
  + cloud(330,64,.55)
  + juYukiNo(206)
  + juHei(304,480,206)
  + juMon(396,206,.7,{})
  + juMatsuYuki(48,244,.9)
  + g(206,292,1.55,jnekoChar({mood:'kao'}))),

/* 🔴 「べつの 土地の はなし」を ならべる ばめん。どちらが 上とは かかない */
ju_umi: f => wrap(grad('g_juumi',P.skyTop,P.skyBtm) + sun(70,52) + cloud(300,48,.8) + cloud(410,98,.5)
  + pt('M0 152 L480 160 L480 300 L0 300 z',P.sea)
  + waveRow(192,.6) + waveRow(232,.45)
  + kobune(378,170,.5)
  + pt('M0 300 L0 248 Q240 222 480 254 L480 300 z',P.sand)
  + matsu(52,256,.95)
  + g(214,292,1.12,jnekoChar({mood:'normal'}))
  + g(320,294,1.05,usagiChar())
  + spark(152,130,.6)),

ju_maitoshi: f => wrap(grad('g_jumaito',P.juAsaTop,P.juAsaBtm)
  + ci(398,56,38,'rgba(255,236,180,.45)') + ci(398,56,24,'#ffd76e')
  + cloud(112,60,.6) + cloud(300,40,.42)
  + juYukiNo(216)
  + juHei(0,172,216) + juHei(308,480,216)
  + juMon(240,216,1.1,{aki:1,
      oku: ci(0,-46,32,'rgba(255,244,206,.13)') + ci(0,-46,20,'rgba(255,244,206,.17)')
        + g(0,-6,.49,kamisamaChar())})
  + juKadomatsu(158,216,.96) + juKadomatsu(322,216,.96)
  + g(110,298,1.12,jnekoChar({mood:'normal'}))
  + spark(84,148,.65) + spark(420,130,.55)),

/* ----- ネコの はなし ----- */
/* 🔴 ネコが いま なにを おもって いるかは 絵にも かかない。ひなたに いる ところだけ */
jneko_hinata: f => wrap(grad('g_jnhina','#cfe8f2','#f8f6e0')
  + sun(410,56) + cloud(122,66,.6) + cloud(300,102,.42)
  + rc(0,216,480,84,P.grass) + el(240,240,380,44,P.grass2)
  + engawa(96,244,300,0)
  + el(272,250,96,28,'rgba(255,232,160,.34)') + el(272,248,64,18,'rgba(255,240,186,.34)')
  + g(268,244,1.25,jnekoChar({maru:1}))
  + hana(52,292,'#fff',.8) + hana(438,296,'#e8d0e8',.75)
  + chou(72,196,.7)),

/* ----- ネズミの はなし ----- */
jnezumi_ana: f => wrap(grad('g_jzana',P.juYoruTop,P.juYoruBtm)
  + tsuki(74,54,.85)
  + star(180,44,2.2) + star(268,86,1.9) + star(356,42,1.8) + star(430,104,1.6)
  + juYukiNo(148,1)
  + rc(0,178,480,122,P.soil) + ln('M0 178 L480 178',P.soilD,4)
  + ci(96,214,7,P.soilD) + ci(392,232,8,P.soilD) + ci(180,270,6,P.soilD) + ci(292,196,5,P.soilD)
  + ln('M120 182 q14 42 74 56 q56 13 84 10',P.soilN,22)
  + elo(316,246,64,44,P.soilN)
  + el(316,250,54,34,'#4a3524')
  + ln('M272 276 l34 -6',P.wara,3.4) + ln('M280 282 l40 -4',P.waraD,3)
  + ln('M322 280 l34 -8',P.wara,3.2)
  + g(320,274,1.15,jnezumiChar({mood:'normal',noKage:1}))
  + juYukiFuru(.4)),

/* ----- つるの おんがえし（本編） -----
   🔴 はねを ぬく どうさ・きず・ち・やせた からだは 1まいも かかない
   🔴 のぞく がわを わるく 見せる こうず（かげから にらむ・ゆびさす など）は つくらない
   🔴 わかれの ばめんで かんしょうを あおらない（ふたりは しずかに 見あげる だけ） */
ts_yuki_wana: f => wrap(grad('g_tsyukiw',P.tsHiruTop,P.tsHiruBtm)
  + cloud(106,52,.6) + cloud(358,80,.45)
  + mtns()
  + juYukiNo(206)
  + matsuYuki(44,256,1) + matsuYuki(456,264,1.05)
  + ln('M0 268 q240 -22 480 -2','rgba(255,255,255,.5)',3.4)
  + g(326,284,.92,tsuruChar({pose:'tatsu',mood:'fuseru'}))
  + wana(322,284,1)
  + g(104,266,.74,tsjiiChar({mood:'odoroki'}))
  + juYukiFuru(.6)),

ts_tasukeru: f => wrap(grad('g_tstasu','#d6e2ec','#f7fbfd')
  + cloud(94,50,.5) + cloud(388,74,.4)
  + mtns()
  + juYukiNo(212)
  + matsuYuki(40,260,1.05) + matsuYuki(452,268,.95)
  + g(348,290,.95,tsuruChar({pose:'tatsu'}))
  + wana(300,290,1.05,{hazusu:1})
  + g(210,292,1.15,tsjiiChar({mood:'hohoemi',suwaru:1,te:'mae'}))
  + ln('M266 268 q16 13 24 20','rgba(74,58,44,.3)',3)
  + juYukiFuru(.4)),

ts_yoru_to: f => wrap(grad('g_tsyoruto',P.tsYoruTop,P.tsYoruBtm)
  + star(96,44,2) + star(300,38,1.8) + star(430,72,1.6)
  + juYukiNo(226,1)
  + matsuYuki(44,268,1,1) + matsuYuki(452,276,.9,1)
  + kayabukiIe(150,240,1,{akari:1,aki:1,yuki:1})
  + pt('M166 240 L210 240 L272 300 L118 300 z','rgba(255,214,130,.20)')
  + andon(188,236,.55)
  + g(300,288,1.05,tsmusumeChar({mood:'normal'}))
  + juYukiFuru(.55)),

/* 🔴 じざいかぎと なべは まん中の 人を かくして しまうので ここでは つるさない */
ts_irori: f => wrap(washitsu('g_tsirori',1)
  + andon(56,242,.85)
  + g(240,254,.95,tsmusumeChar({suwaru:1,mood:'hohoemi'}))
  + irori(240,288,1.08)
  + g(112,292,1,tsjiiChar({suwaru:1,mood:'hohoemi'}))
  + g(368,292,1,tsbaaChar({suwaru:1,mood:'hohoemi'}))),

/* 🔴 とじた しょうじの そと。かげは うすく、はたの かたちが わかる ていどに とどめる */
ts_hata_shoji: f => wrap(grad('g_tshatas',P.tsYoruTop,P.tsYoruBtm)
  + rc(0,0,480,30,'#3a2c20') + ln('M0 30 L480 30','#2c2118',3)
  + rc(22,30,16,212,P.beam) + rc(442,30,16,212,P.beam)
  + shojiKage(50,40,380,200,{akari:1,kage:'hata',usui:1,ks:.9})
  + rc(0,242,480,26,'#5f4426') + ln('M0 242 L480 242','#4a3420',3)
  + rc(0,268,480,32,P.juYukiYoK) + el(240,278,420,26,P.juYukiYo)
  + matsuYuki(40,298,.72,1) + matsuYuki(446,300,.66,1)
  + juYukiFuru(.5)),

ts_nuno: f => wrap(washitsu('g_tsnuno')
  + el(240,236,190,52,'rgba(255,255,255,.38)')
  + g(240,270,.9,tsmusumeChar({mood:'hohoemi'}))
  + pto('M112 246 q128 -22 256 0 l0 30 q-128 -22 -256 0 z',P.tsNuno)
  + ln('M118 258 q122 -20 244 0',P.tsNunoK,2.4)
  + ln('M120 268 q120 -20 240 0','rgba(255,255,255,.75)',2.4)
  + g(96,288,1,tsjiiChar({mood:'odoroki'}))
  + g(392,288,1,tsbaaChar({mood:'odoroki'}))
  + spark(150,176,.7) + spark(342,168,.6)),

ts_machi: f => wrap(grad('g_tsmachi','#cfe0ee','#f8f5e4')
  + sun(60,50) + cloud(316,54,.6) + cloud(174,36,.4)
  + rc(0,220,480,80,'#d9cdb2') + ln('M0 220 L480 220','#bdad8c',3)
  + ln('M0 258 L480 250','rgba(189,173,140,.5)',2.4)
  + juKoya(56,220,.86) + juKoya(432,224,.94,1)
  /* みせさき（やね・かべ・ひさし・はしら・のれん）。のれんだけ うかせない */
  + pto('M132 140 L240 104 L348 140 z','#7c8698') + ln('M146 133 L334 133','#67707f',3)
  + rco(150,140,180,32,P.tsKabe,3) + ln('M150 156 L330 156',P.tsKabeD,2.4)
  + rco(142,170,196,14,'#7c8698',3)
  + rc(156,184,11,58,P.woodD) + rc(313,184,11,58,P.woodD)
  + rco(172,184,136,28,'#3f5f7a',3)
  + ln('M206 184 L206 212','#2f4a60',2.4) + ln('M240 184 L240 212','#2f4a60',2.4)
  + ln('M274 184 L274 212','#2f4a60',2.4)
  + el(74,232,74,12,'rgba(255,255,255,.7)') + el(414,236,72,12,'rgba(255,255,255,.7)')
  + rco(174,236,136,10,P.wood,3) + rc(186,246,10,26,P.woodD) + rc(288,246,10,26,P.woodD)
  + tanmono(214,236,.58,{tsumi:1})
  + tanmono(276,236,.5,{c:'#e8d2a4',ck:'#c9ab7e',hiraku:1})
  + g(110,292,.98,tsjiiChar({mood:'hohoemi'}))
  + g(360,292,.98,villagerChar('#7a8a9a'))),

ts_kaoiro: f => wrap(washitsu('g_tskao',1)
  + andon(58,242,.8)
  + g(196,270,.98,tsmusumeChar({suwaru:1,aoi:1}))
  + irori(300,290,.95)
  + g(400,292,.95,tsbaaChar({suwaru:1}))),

/* 🔴 おばあさんの せなかだけ。かおも 気もちも 絵にしない */
ts_nozoku: f => wrap(grad('g_tsnozo','#3a4258','#232b3e')
  + rc(0,0,480,26,'#3a2c20')
  + rc(18,26,14,214,P.beam) + rc(448,26,14,214,P.beam)
  + shojiKage(46,36,388,204,{akari:1,kage:'hata',usui:1,ks:.86,kx:-40})
  + rc(0,240,480,60,'#4a3420') + ln('M0 240 L480 240','#3a2818',3)
  + ln('M0 270 L480 270','rgba(58,40,24,.6)',2.4)
  + g(306,298,1.32,tsbaaChar({senaka:1,te:'ageru'}))),

/* 🔴 「はねを ぬく」ように 見える かたちには しない。はたに むかう 立ちすがたの かげだけ */
ts_kage: f => wrap(grad('g_tskage','#2a3350','#3f4c6e')
  + rc(0,0,480,22,'#3a2c20')
  + rc(4,22,16,244,P.beam) + rc(460,22,16,244,P.beam)
  + shojiKage(28,30,424,236,{akari:1,kage:'tsuru',ks:1.45})
  + rc(0,266,480,34,'#5f4426') + ln('M0 266 L480 266','#4a3420',3)),

ts_wakare: f => wrap(washitsu('g_tswaka',1)
  + andon(58,242,.85)
  + g(240,262,.98,tsmusumeChar({suwaru:1}))
  + irori(240,296,.9)
  + g(108,292,.98,tsjiiChar({suwaru:1}))
  + g(374,292,.98,tsbaaChar({suwaru:1}))),

ts_sora: f => wrap(grad('g_tssora','#b6c8de','#f4f9fc')
  + cloud(118,58,.7) + cloud(372,96,.5)
  + mtns()
  + juYukiNo(214)
  + matsuYuki(42,262,1) + matsuYuki(452,268,1.05)
  + kayabukiIe(392,250,.62,{yuki:1,aki:1})
  + ln('M180 150 q80 -54 168 -34','rgba(255,255,255,.45)',3)
  + g(256,102,1.4,tsuruChar({pose:'tobu'}))
  + g(146,286,.98,tsjiiChar())
  + g(212,290,.98,tsbaaChar())
  + juYukiFuru(.5)),

ts_haru: f => wrap(grad('g_tsharu',P.tsHaruTop,P.tsHaruBtm)
  + sun(414,54) + cloud(122,60,.65) + cloud(300,92,.42)
  + mtns()
  + rc(0,216,480,84,P.tsWakakusa) + el(240,240,380,44,P.tsWakakusaD)
  + kayabukiIe(408,250,.58,{aki:1})
  + umeKi(74,268,1.15)
  + g(268,292,1,tsuruChar({pose:'tatsu'}))
  + g(152,292,.98,tsjiiChar({mood:'hohoemi'}))
  + g(214,294,.98,tsbaaChar({mood:'hohoemi'}))
  + hana(36,292,'#fff',.8) + hana(440,298,'#f2e2a4',.75)
  + chou(120,178,.7)),

ts_mado: f => wrap(grad('g_tsmado','#bfe0f2','#f6fbfd')
  + sun(64,52) + cloud(330,64,.7) + cloud(184,40,.45)
  + mtns()
  + juYukiNo(222)
  + matsuYuki(38,266,1) + matsuYuki(456,272,.95)
  + kayabukiIe(238,254,1.05,{aki:1,yuki:1})
  + ln('M120 96 q130 -44 254 4','rgba(255,255,255,.5)',3.2)
  + g(336,74,1.22,tsuruChar({pose:'tobu'}))
  + g(160,292,.95,tsjiiChar())
  + g(342,294,.95,tsbaaChar())),

/* ----- つるの はなし ----- */
/* 🔴 そらから 見おろした 絵。つるじしんは 出さない（見て いる がわの 目に なる） */
tz_sora_ie: f => wrap(grad('g_tzsorai','#101a34','#2a3a5e')
  + star(64,44,2.2) + star(148,86,1.8) + star(246,40,2) + star(340,92,1.7)
  + star(424,52,1.9) + star(96,148,1.6) + star(400,158,1.5)
  + kumoUsu(112,116,1.2,.13) + kumoUsu(372,152,1,.11)
  /* 🔴 じめんは くらく おとして とおくに 見せる（そらの 上から 見おろして いるので） */
  + pt('M0 244 Q240 226 480 246 L480 300 L0 300 z','#55688c')
  + el(240,268,380,26,'#7e93b6')
  + ci(238,266,28,'rgba(255,214,130,.16)')
  + kayabukiIe(238,278,.28,{akari:1,yuki:1})
  + matsuYuki(150,288,.32,1) + matsuYuki(336,292,.34,1)
  /* 🔴 ちへいせんに かかる 手まえの くもで 「そらの 上から 見ている」ことを しめす */
  + kumoUsu(72,246,1.9,.5) + kumoUsu(414,262,1.6,.42)
  + juYukiFuru(.35)),

/* 🔴 はねを 「かぞえる」ばめんだが、はねを ぬく すがた・おちた はねは かかない
      はたの まえに しずかに 立って いる ところだけ */
tz_hane: f => wrap(washitsu('g_tzhane',1)
  + andon(54,242,.78)
  + hataori(322,288,1.02,{kake:1})
  + g(190,290,1.12,tsuruChar({pose:'tatsu',mood:'fuseru'}))),

/* ----- おばあさんの はなし ----- */
tb_hata_nokori: f => wrap(washitsu('g_tbhata')
  + pt('M292 20 L392 20 L338 240 L246 240 z','rgba(255,246,206,.22)')
  + ci(380,92,66,'rgba(255,250,214,.16)')
  + hataori(250,286,1.18,{kake:1})
  + tanmono(92,290,.78,{tsumi:1})
  + spark(196,142,.6) + spark(374,166,.55)),

tb_engawa: f => wrap(grad('g_tbenga',P.tsHaruTop,P.tsHaruBtm)
  + sun(410,56) + cloud(128,64,.6) + cloud(306,96,.42)
  + mtns()
  + rc(0,216,480,84,P.tsWakakusa) + el(240,240,380,44,P.tsWakakusaD)
  + engawa(88,246,300,0)
  + umeKi(46,290,.95)
  + g(268,246,1.05,tsbaaChar({mood:'hohoemi'}))
  + hana(432,294,'#fff',.8) + hana(408,300,'#f2e2a4',.7)
  + chou(52,196,.7)),

/* ----- アリババと 40にんの とうぞく（本編） -----
   🔴 ころしの しゅんかん・あぶらを そそぐ 手・たんけんの つきさし・なきがら・ちは 1まいも かかない
   🔴 つぼの ばめんは「ゆげ」と「しずかな つぼ」まで。おどりの たんけんは おびに さしたまま
   🔴 とうぞくを わるく 見せる こうず（にらむ・ゆびさす）は つくらない。とおくの すがただけ
   🔴 おいのりの たてものは かかない（すまいの いえ・いちば・ラクダ・つぼだけ） */
ab_mori: f => wrap(grad('g_abmori',P.abSoraTop,P.abSoraBtm)
  + sun(410,52) + cloud(112,56,.6) + cloud(318,38,.42)
  + mtns()
  + rc(0,212,480,88,P.grass2) + el(240,240,420,48,P.grass)
  + pt('M0 300 L64 250 Q240 234 480 260 L480 300 z',P.abSuna)
  + tree(48,244,1.05) + tree(148,230,.68) + tree(444,252,.95)
  + g(316,282,.86, robaChar({mood:'normal'}) + abMaki(2,-58,.66,-4))
  + g(414,270,.7, robaChar({mood:'niko'}) + abMaki(2,-58,.62,3))
  + abMaki(92,288,.9,-2)
  + g(176,292,1,alibabaChar({mood:'hohoemi',te:'mae'}))
  + chou(112,192,.6)),

/* 🔴 とうぞくは とおくの すがただけ。かおも ぶきも かかない */
ab_iwa: f => wrap(grad('g_abiwa',P.abSoraTop,P.abSoraBtm)
  + cloud(88,46,.5) + cloud(392,74,.42)
  + mtns()
  + abSunaNo(214)
  + abIwa(320,272,.95,{aki:1})
  + abTouKage(56,290,.68) + abTouKage(102,284,.62) + abTouKage(144,278,.56)
  + abTouKage(182,274,.5) + abTouKage(214,270,.45)
  + tree(34,252,.82) + abKusa(258,284,1) + abKusa(452,292,1.1)),

ab_dokutsu: f => wrap(abDokutsu('g_abdoku',{takara:1,hikari:1})
  + takaraBako(150,264,.7)
  + g(280,288,.95,alibabaChar({mood:'odoroki'}))
  + hikariTsubu(198,176,1) + hikariTsubu(356,152,.9) + hikariTsubu(112,196,.8)
  + spark(214,190,.7) + spark(342,168,.6)),

ab_ie: f => wrap(grad('g_abie',P.abSoraTop,P.abSoraBtm)
  + sun(58,50) + cloud(336,58,.62) + cloud(206,34,.4)
  + abMachiNami(212)
  + abSunaNo(212)
  + abIe(320,286,1,{})
  + abIe(96,258,.56,{})
  + tree(440,268,.78)
  + g(150,290,.95,alibabaChar({mood:'hohoemi'}))
  + g(208,292,.95,musukoChar({mood:'hohoemi'}))
  + g(52,296,.58,robaChar({mood:'niko'}))),

/* 🔴 「よくばり」に 見える しぐさは させない。ますで はかって いる ところだけ */
ab_kashimu: f => wrap(abHeya('g_abkashi')
  + abRanpu(392,112,.95)
  + abTsubo(60,282,.52,{futa:1})
  + g(168,288,1.02,kashimuChar({mood:'odoroki',suwaru:1,te:'mae'}))
  + abMasu(272,284,1.05)
  + abKinYama(342,288,.6)
  + spark(258,244,.6) + spark(348,254,.5)),

/* 🔴 とびらは とじたまま。「立ちつくす」ところで とめる（この さきは 絵に しない） */
ab_kashimu_iwa: f => wrap(grad('g_abkaiwa',P.abSoraTop,P.abSoraBtm)
  + cloud(96,50,.5) + cloud(380,78,.4)
  + mtns()
  + abSunaNo(216)
  + abIwa(300,274,1)
  + g(112,292,1.02,kashimuChar({senaka:1}))
  + g(56,298,.62,robaChar({mood:'shonbori'}))
  + abKusa(190,290,1) + abKusa(452,296,1.1)),

/* 🔴 ロバが はこぶのは ふつうの にもつ。ぬのを かけた かたちには しない */
ab_yoru_hakobu: f => wrap(grad('g_abyoru',P.abYoruTop,P.abYoruBtm)
  + star(72,40,2.2) + star(168,72,1.8) + star(296,44,2) + star(240,110,1.5) + star(126,132,1.6)
  + tsuki(400,64,1)
  + abMachiNami(220,1)
  + abSunaNo(220,1)
  + abIe(92,264,.58,{yoru:1,akari:1})
  + g(316,292,.92, robaChar({mood:'normal'}) + abFukuro(-8,-58,.8) + abFukuro(20,-56,.7))
  + g(206,294,.98,alibabaChar({mood:'normal'}))
  + ln('M130 288 q120 -10 240 -4','rgba(255,255,255,.10)',3)),

/* 🔴 めかくしの おじいさんは しずかな すわりすがた。手を ひかれる こうずには しない */
ab_kutsunaoshi: f => wrap(grad('g_abkutsu',P.abSoraTop,P.abSoraBtm)
  + sun(430,50) + cloud(122,44,.5)
  + abMachiNami(200)
  + rc(0,200,480,100,P.abSunaD) + el(240,230,430,46,P.abSuna)
  + abMachi(244,248,.88)
  + abIe(56,236,.5,{})
  + g(148,292,1.02,kutsunaoshiChar({suwaru:1,mekakushi:1}))
  + abKutsuHitotsu(78,294,1,-6) + abKutsuHitotsu(104,300,.9,4)
  + ci(212,288,6,P.abKin) + ci(212,288,2.4,P.abKinK)
  + g(370,294,.98,kashiraChar({henso:'shonin'}))),

ab_shirushi: f => wrap(grad('g_abshiru',P.abSoraTop,P.abSoraBtm)
  + cloud(96,40,.45) + cloud(392,58,.4)
  + abMachiNami(196)
  + rc(0,196,480,104,P.abSunaD) + el(240,226,440,44,P.abSuna)
  + abIe(58,268,.72,{mado:0})
  + abIe(154,268,.72,{shirushi:1})
  + abIe(250,268,.72,{shirushi:1})
  + abIe(346,268,.72,{shirushi:1})
  + abIe(442,268,.72,{shirushi:1,mado:0})
  + g(206,296,.62,morgianaChar({mood:'normal',te:'mae'}))),

/* 🔴 つぼは しずかに ならんで いるだけ。中を のぞく 手・あぶらは かかない */
ab_tsubo: f => wrap(grad('g_abtsubo',P.abYuuTop,P.abYuuBtm)
  + sun(74,58) + cloud(322,48,.5)
  + abMachiNami(126)
  + rc(0,126,480,88,P.abKabe) + ln('M0 126 L480 126',P.abKabeK,3)
  + rc(0,112,480,16,P.abKabeD)
  + ln('M0 172 L480 172',P.abKabeK,2.4)
  + abRanpu(62,166,.75)
  + rc(0,214,480,86,'#c9a86b') + ln('M0 214 L480 214','#a9803f',3)
  + ln('M0 250 L480 246','rgba(169,128,63,.42)',2.4) + ln('M0 284 L480 288','rgba(169,128,63,.38)',2.2)
  + g(374,246,.5,robaChar({mood:'shonbori'}))
  + abTsubo(58,276,.95) + abTsubo(130,280,1) + abTsubo(202,278,.96) + abTsubo(272,282,.98)
  + g(402,290,.74,robaChar({mood:'normal'}))),

/* 🔴 だいどころには 人を 出さない。おおなべと ゆげと しずけさだけ
      （あぶらを そそぐ 手・つぼの 中は 1まいも かかない） */
ab_abura: f => wrap(abHeya('g_ababura',{yoru:1})
  + abRanpu(150,112,.95)
  + rco(300,120,150,12,P.wood,3)
  + abTsubo(330,120,.3,{futa:1}) + abTsubo(360,120,.26,{futa:1}) + abTsubo(392,120,.28)
  + rco(160,238,160,34,'#8a8f9a',4)
  + ln('M160 252 L320 252','#6f7480',2.6)
  + pto('M204 272 q0 -28 36 -28 q36 0 36 28 z','#2c1c16')
  + honoo(222,270,.44) + honoo(242,268,.56) + honoo(262,270,.42)
  + ooNabe(240,238,1.15)
  + yuge(224,192,.8,.5) + yuge(252,184,.66,.42) + yuge(238,160,.5,.3)
  + abTsubo(74,282,.62,{futa:1})
  + abKago(390,290,.9)),

/* 🔴 たんけんは おびに さしたまま（つかがしらだけ）。ぬく・つきさす どうさは つくらない */
ab_odori: f => wrap(abHeya('g_abodori',{yoru:1})
  + abRanpu(148,112,.9) + abRanpu(392,104,.95)
  + g(216,290,1.05,morgianaChar({mood:'hohoemi',odori:1}))
  + g(96,292,.9,alibabaChar({mood:'hohoemi',suwaru:1}))
  + g(322,296,.88,musukoChar({mood:'hohoemi',suwaru:1}))
  + g(404,290,.94,kashiraChar({henso:'shonin',suwaru:1}))
  + onpu(140,194,.7,'#f2ce6a') + onpu(318,178,.6,'#fdf0b8') + onpu(60,220,.5,'#f2ce6a')),

ab_jiyuu: f => wrap(grad('g_abjiyu',P.juAsaTop,P.juAsaBtm)
  + sun(404,58) + cloud(120,48,.5)
  + abMachiNami(206)
  + abSunaNo(206)
  + abMon(176,272,1,{aki:1})
  + pt('M136 272 L216 272 L246 300 L106 300 z','rgba(253,240,184,.32)')
  + g(330,292,1,morgianaChar({mood:'hohoemi'}))
  + cloud(300,42,.42) + g(84,88,.85,toriTobu())
  + abKusa(438,294,1.1)),

/* 🔴 「大金もち」の えんしゅつには しない。パンと なつめの つつましい つくえ */
ab_owari: f => wrap(abHeya('g_abowari')
  + abRanpu(404,108,.9)
  + g(240,248,.8,musukoChar({mood:'hohoemi',suwaru:1}))
  + g(116,292,.98,alibabaChar({mood:'hohoemi',suwaru:1}))
  + g(360,292,.98,morgianaChar({mood:'hohoemi',suwaru:1}))
  + abZen(240,284,1.05,{pan:1})),

/* ----- モルジアナの はなし ----- */
am_daidokoro: f => wrap(abHeya('g_amdai')
  + rco(292,124,158,12,P.wood,3)
  + abTsubo(320,124,.3,{futa:1}) + abTsubo(352,124,.26) + abTsubo(384,124,.28,{futa:1})
  + rco(330,238,116,26,'#8a8f9a',4)
  + ooNabe(388,246,.85)
  + yuge(378,214,.5,.36) + yuge(398,208,.4,.28)
  + g(172,292,1.02,morgianaChar({mood:'hohoemi',te:'mae'}))
  + abTsubo(62,280,.66) + abKago(268,292,.95)
  + panMaru(300,286,.9) + panMaru(320,290,.8)),

am_michi: f => wrap(grad('g_ammichi',P.abSoraTop,P.abSoraBtm)
  + sun(72,54) + cloud(330,52,.55) + cloud(196,32,.38)
  + mtns()
  + abMachiNami(198)
  + abSakyu(212)
  + pt('M120 300 Q200 246 268 216 L306 216 Q226 250 190 300 z','#dfc188')
  + g(336,272,.92,abRakuda({mood:'normal',nimotsu:1}))
  + g(168,290,1,morgianaChar({mood:'hohoemi'}))
  + abKusa(64,272,1.1) + abKusa(430,288,1.2) + abKusa(266,264,.9)),

/* ----- とうぞくの かしらの はなし ----- */
/* 🔴 からっぽの どうくつ。かしらは うしろすがた（かおも 気もちも 絵にしない） */
at_dokutsu_kara: f => wrap(abDokutsu('g_atkara',{hikari:1})
  + ln('M120 264 q60 -10 120 -2','rgba(255,255,255,.05)',3)
  + abTsubo(88,268,.62) + abTsubo(416,272,.56,{futa:1})
  + ci(200,272,5,P.abKin) + ci(200,272,2,P.abKinK) + ci(216,276,4.4,P.abKinD)
  + g(292,290,1.15,kashiraChar({senaka:1}))),

at_sabaku: f => wrap(grad('g_atsaba',P.abYuuTop,P.abYuuBtm)
  + ci(404,150,40,'rgba(255,236,180,.35)') + ci(404,150,24,'#ffe6a4')
  + pt('M0 206 L74 174 L148 204 L226 168 L318 206 L400 176 L480 202 L480 214 L0 214 z','rgba(180,140,120,.4)')
  + abSakyu(210)
  + g(336,254,.78,abRakuda({mood:'normal',nimotsu:1}))
  + g(238,252,.74,kashiraChar({senaka:1}))
  + abTouKage(190,254,.6) + abTouKage(288,258,.56)
  + el(238,256,26,5,'rgba(120,84,60,.25)') + el(336,258,30,5,'rgba(120,84,60,.22)')
  + abKusa(80,276,1.2) + abKusa(438,292,1.3)),

/* ----- きたかぜと たいよう（本編・きたかぜの はなし・たいようの はなし） -----
   🔴 きたかぜと たいようは どちらも おだやかな かお。かちほこる かお・くやしがる かおは 1まいも かかない
   🔴 たびびとは なまえも せいべつも わからない つくり（かみは ぼうしの 下・からだつきは 中せい）
   🔴 みずあびは かたまで みずに つかった ところだけ。うわぎは きしに おく
   🔴 かぜは ひだりから みぎへ ながす（3だんかいで kazeUzu の 本すうを ふやす） */
kz_sora: f => wrap(grad('g_kzsora',P.kzHareTop,P.kzHareBtm)
  + cloud(238,42,.36) + cloud(62,176,.44) + cloud(424,184,.36)
  + mtns()
  + pt('M0 232 Q120 208 262 228 Q380 244 480 222 L480 250 L0 250 z',P.kzOkaTo)
  + kzJimen(238)
  + tree(34,268,.7) + tree(452,272,.62)
  + g(124,98,1.05,kitakazeChar({mood:'hohoemi'}))
  + g(362,94,1,taiyouChar({mood:'nikkori'}))),

kz_asa: f => wrap(grad('g_kzasa',P.juAsaTop,P.juAsaBtm)
  + sun(408,58) + cloud(112,50,.62) + cloud(286,36,.44)
  + mtns()
  + kzJimen(216)
  + house(76,214,.78) + house(160,204,.58) + tree(24,240,.8) + tree(216,208,.46)
  + g(320,292,1.05,tabibitoChar({coat:'on', mood:'hohoemi'}))
  + hana(438,290,'#fff',.8) + hana(414,298,'#f2b8c2',.7) + chou(384,216,.6)),

/* かぜ 1だんかい: うずは 1本。たびびとは えりに 手を そえる */
kz_kaze1: f => wrap(grad('g_kzkaze1',P.kzFuyuTop,P.kzFuyuBtm)
  + cloud(330,48,.5) + cloud(206,74,.38)
  + mtns()
  + kzJimen(220)
  + tree(56,248,.82)
  + g(98,90,.52,kitakazeChar({mood:'fuku'}))
  + kazeUzu(146,214,1.25,.75)
  + gr(334,292,1.02,-4,tabibitoChar({coat:'on', mood:'normal'}))
  + kzHaKire(262,168,.85,-24)),

/* かぜ 2だんかい: うずは 2本と きの は。たびびとは もう いちまい かさねて りょうてで おさえる */
kz_kaze2: f => wrap(grad('g_kzkaze2',P.kzFuyuTop,P.kzFuyuBtm)
  + cloud(344,42,.5) + cloud(214,72,.36)
  + mtns()
  + kzJimen(220)
  + tree(52,250,.82)
  + g(100,86,.58,kitakazeChar({mood:'fuku'}))
  + kazeUzu(140,212,1.35,.8) + kazeUzu(152,252,1.05,.6)
  + gr(336,292,1.02,-7,tabibitoChar({coat:'kasane', mood:'normal'}))
  + kzHaKire(238,166,.95,-26) + kzHaKire(292,132,.85,34) + kzHaKire(392,180,.8,-12)),

/* かぜ 3だんかい: うずは 3本と きの はと すな。それでも うわぎは はなさない */
kz_kaze3: f => wrap(grad('g_kzkaze3',P.kzFuyuTop,P.kzFuyuBtm)
  + cloud(352,38,.48) + cloud(222,70,.34)
  + mtns()
  + kzJimen(222)
  + tree(48,252,.82)
  + g(102,82,.66,kitakazeChar({mood:'fuku'}))
  + kazeUzu(134,206,1.45,.85) + kazeUzu(146,246,1.15,.65) + kazeUzu(156,282,.9,.5)
  + gr(338,294,1.02,-10,tabibitoChar({coat:'kasane', mood:'normal'}))
  + kzHaKire(228,158,1,-30) + kzHaKire(286,120,.9,38) + kzHaKire(384,168,.85,-16)
  + kzHaKire(422,112,.75,44) + kzHaKire(258,204,.7,20)
  + kzSunaKire(268,280,1.05) + kzSunaKire(196,292,.9) + kzSunaKire(404,286,.8)),

/* ひざし 1だんかい: ほどほどに てらす。かさねた うわぎを いちまい ぬいだ ところ */
kz_hinata1: f => wrap(grad('g_kzhina1',P.kzHareTop,P.kzHareBtm)
  + cloud(104,62,.5) + cloud(258,44,.36)
  + mtns()
  + kzJimen(218)
  + tree(50,248,.82)
  + g(396,86,.55,taiyouChar({mood:'nikkori'}))
  + g(296,292,1.05,tabibitoChar({coat:'on', mood:'hohoemi'}))
  + hana(436,294,'#fff',.75) + chou(154,196,.6) + spark(348,150,.6)),

/* ひざし 2だんかい: もっと つよく てらす。うわぎは かたに かける */
kz_hinata2: f => wrap(grad('g_kzhina2',P.kzHareTop,P.kzHareBtm)
  + cloud(112,66,.4)
  + mtns()
  + kzJimen(218)
  + tree(46,250,.8)
  + g(390,80,.72,taiyouChar({mood:'giragira'}))
  + ln('M148 268 q10 -14 0 -28','rgba(255,214,140,.5)',3.4)
  + ln('M190 276 q10 -14 0 -28','rgba(255,214,140,.42)',3)
  + ln('M406 272 q10 -14 0 -28','rgba(255,214,140,.42)',3)
  + g(292,294,1.05,tabibitoChar({coat:'kata', mood:'normal'}))
  + spark(240,158,.7) + spark(342,190,.6)),

/* 🔴 みずあびは かたまで みずに つかった ところだけ。うわぎと ふくろは きしに おく */
kz_kawa: f => wrap(grad('g_kzkawa',P.kzHareTop,P.kzHareBtm)
  + cloud(96,54,.52) + cloud(300,38,.4)
  + mtns()
  + rc(0,198,480,102,P.kzOka) + el(240,226,440,42,P.kzOkaD)
  + tree(44,226,.78) + kzKokage(438,232,.62)
  + g(392,74,.5,taiyouChar({mood:'giragira'}))
  + kzKawa(234)
  + kzNugiUwagi(112,222,1)
  + kzMizuabi(268,266,1.15,'hohoemi')
  + hana(66,214,'#fff',.7) + spark(206,208,.6) + chou(160,178,.55)),

kz_kokage: f => wrap(grad('g_kzkoka',P.kzHareTop,P.kzHareBtm)
  + sun(54,52) + cloud(300,46,.48)
  + mtns()
  + kzJimen(216)
  + kzKokage(344,274,1.18)
  + g(288,292,1.02,tabibitoChar({coat:'on', mood:'hohoemi'}))
  + hana(76,292,'#fff',.8) + hana(120,300,'#f7d06e',.7) + chou(178,222,.6)
  + kzTane(438,296,.8)),

/* 🔴 きたかぜと たいようは そらに ならべて おく（どちらも おなじ 大きさ・おなじ たかさ） */
kz_sentaku: f => wrap(grad('g_kzsen',P.kzHareTop,P.kzHareBtm)
  + cloud(240,190,.42)
  + mtns()
  + kzJimen(214)
  + house(60,216,.7) + house(422,210,.58)
  + kzSentaku(238,296,1,{kaze:1})
  + g(146,86,.62,kitakazeChar({mood:'fuku'}))
  + g(340,86,.62,taiyouChar({mood:'nikkori'}))
  + hana(26,292,'#fff',.8) + chou(126,222,.6)),

kz_kumo: f => wrap(grad('g_kzkumo',P.kzAmeTop,P.kzAmeBtm)
  + kzAmagumo(126,84,1.05,{ame:1}) + kzAmagumo(322,68,.86,{ame:1}) + kzAmagumo(436,122,.6,{})
  + mtns()
  + kzJimen(218)
  + ln('M56 186 l-8 30',P.kzAmesuji,3) + ln('M212 196 l-8 32',P.kzAmesuji,3)
  + ln('M282 176 l-8 28',P.kzAmesuji,2.8) + ln('M404 200 l-8 30',P.kzAmesuji,2.8)
  + ln('M150 236 l-7 26',P.kzAmesuji,2.6) + ln('M348 248 l-7 24',P.kzAmesuji,2.6)
  + kzKokage(348,278,1.12)
  + g(330,294,1,tabibitoChar({coat:'on', mood:'normal'}))
  + tree(46,254,.7)),

/* ----- きたかぜの はなし ----- */
kk_umi: f => wrap(grad('g_kkumi',P.kzFuyuTop,P.kzFuyuBtm)
  + cloud(310,54,.5) + cloud(196,36,.36)
  + pt('M0 176 L92 156 L180 178 L286 152 L392 176 L480 160 L480 182 L0 182 z','rgba(150,190,210,.55)')
  + pt('M0 176 L480 164 L480 300 L0 300 z',P.sea)
  + waveRow(202,.6) + waveRow(240,.48) + waveRow(282,.38)
  + kazeUzu(150,182,1.1,.6) + kazeUzu(134,238,.85,.45)
  + kzHobune(112,214,.5,{ho:1})
  + kzHobune(304,268,1.05,{ho:1})
  + g(112,80,.6,kitakazeChar({mood:'fuku'}))
  + g(422,116,.9,toriTobu()) + g(452,138,.7,toriTobu())),

kk_nohara: f => wrap(grad('g_kknoha',P.kzHareTop,P.kzHareBtm)
  + cloud(372,50,.48) + cloud(196,70,.36)
  + mtns()
  + rc(0,208,480,92,P.kzOka) + el(240,242,440,58,P.kzOkaD)
  + kzTane(80,288,1.1) + kzTane(134,298,1) + kzTane(410,292,1.05) + kzTane(452,300,.86)
  + hana(184,294,'#fff',.8) + hana(232,300,'#f2b8c2',.7) + hana(298,296,'#f7d06e',.75)
  + kazeUzu(92,176,1.15,.7) + kazeUzu(114,224,.85,.5)
  + kzWatage(218,196,1,18) + kzWatage(270,162,.9,-14) + kzWatage(324,190,.85,26)
  + kzWatage(372,140,.8,-8) + kzWatage(164,148,.7,32)
  + g(86,84,.6,kitakazeChar({mood:'fuku'}))
  + chou(428,208,.6)),

/* ----- たいようの はなし ----- */
/* 🔴 くもは たのまれて ひかげを つくる。たいようを わるく 見せる こうずには しない */
kh_kumo: f => wrap(grad('g_khkumo',P.kzHareTop,P.kzHareBtm)
  + cloud(128,54,.44)
  + mtns()
  + rc(0,198,480,26,P.kzOka) + el(240,214,440,22,P.kzOkaD)
  + house(46,198,.5) + tree(430,200,.5)
  + rc(0,220,480,80,P.soil)
  + pt('M0 238 L480 234 L480 250 L0 256 z','rgba(122,92,52,.34)')
  + pt('M0 272 L480 268 L480 288 L0 296 z','rgba(122,92,52,.3)')
  + kzMe(46,236,.62) + kzMe(134,235,.62) + kzMe(222,234,.62) + kzMe(310,233,.62) + kzMe(398,232,.62)
  + kzMe(88,270,.85) + kzMe(200,269,.85) + kzMe(312,268,.85) + kzMe(424,267,.85)
  + kzMe(56,300,1.05) + kzMe(198,299,1.05) + kzMe(340,298,1.05)
  + el(200,264,150,44,'rgba(74,96,118,.2)')
  + kzAmagumo(200,152,1.05,{})
  + g(400,78,.56,taiyouChar({mood:'nikkori'}))),

/* 🔴 ゆうひは しずむ ところ。たびびとは とおくの せなかだけ（かおは かかない） */
kh_yuuhi: f => wrap(grad('g_khyuu',P.duskTop,P.duskBtm)
  + cloud(92,64,.6) + cloud(246,42,.42)
  + ci(374,204,86,'rgba(255,206,140,.26)')
  + pt('M0 210 L70 150 L140 205 L210 160 L300 215 L390 165 L480 210 L480 225 L0 225 z','rgba(138,102,112,.5)')
  + g(374,206,.62,taiyouChar({mood:'nikkori', yuu:1}))
  + kzJimen(214,1)
  + g(248,268,.66,tabibitoChar({coat:'on', senaka:1}))
  + tree(44,252,.68)
  + g(118,104,.55,toriTobu()) + g(150,120,.42,toriTobu()))

};

const CHARS = { dog: dogChar, saru: saruChar, kiji: kijiChar, momo: () => momoChar('#fff'),
  inu: () => bremenInuChar() };

if (typeof module !== 'undefined') module.exports = { ART, FACES, CHARS, P };
