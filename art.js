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
  tetsu:'#8a8f9a', tetsuD:'#6f7480', shinju:'#f4eef6'
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

const dogChar = () => el(0,2,15,4,'rgba(0,0,0,.13)')
  + pto('M-15 -20 q-11 -3 -9 -13 q9 -3 10 7 z','#c98a4b')
  + elo(0,-14,17,11,'#f6efe2')
  + rco(-11,-9,6,9,'#efe4d2',2) + rco(5,-9,6,9,'#efe4d2',2)
  + cio(15,-28,11,'#f6efe2')
  + pto('M8 -37 l-2 -10 l9 4 z','#c98a4b') + pto('M20 -38 l3 -10 l-10 5 z','#c98a4b')
  + el(21,-25,5,4,'#fff')
  + ci(24,-27,2.2,'#3a2c20') + ci(13,-29,2.2,'#333')
  + pt('M22 -21 q2 4 -2 5 l-1 -4 z','#e08a8a')
  + rco(7,-20,13,4,'#d95555',2);

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
      + pt('M78 58 q26 -16 50 -2 q-25 -1 -50 2 z','#eef4fa')
};

/* ---------- 場面 ---------- */
const ART = {

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
  + g(168,132,2,toriTobu()))

};

const CHARS = { dog: dogChar, saru: saruChar, kiji: kijiChar, momo: () => momoChar('#fff') };

if (typeof module !== 'undefined') module.exports = { ART, FACES, CHARS, P };
