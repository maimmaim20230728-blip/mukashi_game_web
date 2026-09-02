"use strict";
/* Korean scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Korean. */

var SCENES_KO = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'옛날 옛날 어느 곳에, 할아버지와 할머니가 살고 있었습니다.\n할아버지는 산으로 나무를 하러, 할머니는 강으로 빨래를 하러 갑니다.', next:'m2'},

m2:{art:'momo_river', text:'강에서 빨래를 하고 있으니, 강 위쪽에서 커다란 복숭아가 둥실둥실, 둥실둥실 떠내려왔습니다.', choices:[
  {t:'집으로 가져간다', go:'m3a', set:{open:'home'}},
  {t:'그 자리에서 쪼개 본다', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'할머니는 영차, 영차 하며 복숭아를 집까지 옮겼습니다.\n할아버지와 둘이서 곧바로 쪼개 보니……', next:'c_paka'},
m3b:{art:'momo_river', text:'더 기다릴 수 없었던 할머니는, 강가의 돌 위에서 복숭아를 쪼개 보기로 했습니다. 그러자……', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'쩍!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? '안에서 건강한 사내아이가 튀어나왔습니다!\n할머니는 아기를 안고 집으로 부리나케 돌아갔습니다.\n할아버지와 둘이서 크게 기뻐하며 "모모타로"라고 이름 지었습니다.'
  : '안에서 건강한 사내아이가 튀어나왔습니다!\n두 사람은 크게 기뻐하며, 복숭아에서 태어난 사내아이에게 "모모타로"라고 이름 지었습니다.', next:'m5'},

m5:{art:'kids', text:'모모타로는 마을 아이들과 노는 것을 아주 좋아합니다.\n오늘은 무엇을 할까요?', choices:[
  {t:'스모를 한다', go:'m5a', set:{hobby:'sumo'}},
  {t:'달리기를 한다', go:'m5b', set:{hobby:'run'}},
  {t:'일손을 돕는다', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'덩치 큰 아이들도 차례차례 데굴데굴 넘어집니다.\n"이 힘은 마을에서 제일이야!" 하고 모두가 깜짝 놀랐습니다.', next:'m6'},
m5b:{art:'kids', text:'모모타로보다 빠른 아이는 어디에도 없습니다.\n바람처럼 달려서 모두를 놀라게 했습니다.', next:'m6'},
m5c:{art:'kids', text:'무거운 장작도 모모타로가 들면 가뿐합니다.\n할아버지도 할머니도 큰 도움을 받았습니다.', next:'m6'},

m6:{art:'momotaro', text:'모모타로는 무럭무럭 자라, 힘세고 다정한 젊은이가 되었습니다.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'그날 밤.\n마을에 큰일이 벌어졌습니다.'}, then:'m7'},
m7:{art:'village_sad', text:'이튿날 아침.\n도깨비 섬의 도깨비들이 마을의 보물을 빼앗아 갔다는 것을 알게 되었습니다.\n마을 사람들은 어찌할 바를 모르고 있습니다.', next:'m8'},
m8:{art:'momotaro', text:'모모타로는 자리에서 일어섰습니다.\n"제가 도깨비 섬으로 가서 보물을 되찾아 오겠습니다!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? '할머니는 일본 제일의 수수경단을 만들어 주었습니다.\n허리에 차고 나니 떠날 준비는 완벽합니다.'
  : '할머니가 일본 제일의 수수경단을 만들어 주겠다고 합니다.\n자, 어떻게 할까요?', choices:[
  {t:'수수경단을 많이 만들어 달라고 한다', go:'m10', set:{dango:'full'}},
  {t:'가볍게 조금만 받는다', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'떠나는 날 아침.\n할머니가 머리띠 두 개를 꺼내 주었습니다.\n어느 쪽을 매고 갈까요?', choices:[
  {t:'흰 머리띠', go:'m10r', set:{band:'white'}},
  {t:'붉은 머리띠', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? '붉은 머리띠를 꽉 묶으니, 가슴 속이 뜨거워졌습니다.\n"다녀오겠습니다!"'
  : '흰 머리띠를 꽉 묶으니, 마음이 고요하게 맑아졌습니다.\n"다녀오겠습니다!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'자, 이제 도깨비 퇴치다!!'}, then:'m11'},

m11:{art:'michi', text:'길은 두 갈래로 나뉘어 있습니다.\n산을 넘는 길과, 바닷가를 따라가는 길.\n어느 쪽으로 갈까요?', choices:[
  {t:'산길로 간다', go:'m11a', set:{road:'yama'}},
  {t:'바닷가 길로 간다', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'산꼭대기에서 보니, 먼바다에 검은 섬이 덩그러니 보였습니다.\n저것이 도깨비 섬…….\n모모타로는 주먹을 꽉 쥐었습니다.', next:'m12'},
m11b:{art:'umizoi', text:'파도 소리를 들으며 모래사장을 걷습니다.\n발밑에서 복숭앗빛의 예쁜 조개껍데기를 발견했습니다.\n할머니에게 줄 선물로 삼기로 했습니다.', next:'m12'},

m12:{art:'dog', text:'터벅터벅 걸어가는데, 개가 다가왔습니다.\n"모모타로 님, 어디로 가시나요? 수수경단을 하나 주시면 함께 가겠습니다!"', choices:[
  {t:'수수경단을 준다', go:'c_dog_join', set:{dog:1}},
  {t:'"미안해, 급한 길이야"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'개가 동료가 되었다!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"조금밖에 없지만, 반씩 나누자."\n개는 꼬리를 힘차게 흔들며 기뻐했습니다!'
  : '개는 꼬리를 힘차게 흔들며 기뻐했습니다!\n"어디까지든 함께 가겠습니다!"', next:'m13'},
m12n:{art:'dog', text:'개는 조금 아쉬운 듯이 모모타로를 배웅했습니다.', next:'m13'},

m13:{art:'saru', text:'이번에는 나무 위에서 원숭이가 말을 걸어왔습니다.\n"수수경단을 주면, 길 안내는 나에게 맡겨!"', choices:[
  {t:'수수경단을 준다', go:'c_saru_join', set:{saru:1}},
  {t:'"미안해, 갈 길이 바빠"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'원숭이가 동료가 되었다!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? '작게 나눈 수수경단에도 원숭이는 크게 기뻐했습니다.\n나무에서 스르르 내려와 가슴을 툭 두드렸습니다.'
  : '원숭이는 나무에서 스르르 내려와 가슴을 툭 두드렸습니다.\n"나한테 맡겨!"', next:'m14'},
m13n:{art:'saru', text:'원숭이는 나무 위에서 팔랑팔랑 손을 흔들었습니다.', next:'m14'},

m14:{art:'kiji', text:'하늘에서 꿩이 내려앉았습니다.\n"수수경단을 주시면, 하늘에서 도깨비 섬의 모습을 보고 오겠습니다!"', choices:[
  {t:'수수경단을 준다', go:'c_kiji_join', set:{kiji:1}},
  {t:'"미안해, 이제 가야 해"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'꿩이 동료가 되었다!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? '반으로 나눈 수수경단을 꿩은 소중히 먹었습니다.\n기쁜 듯이 날개를 펴고 하늘을 한 바퀴 돌았습니다.'
  : '꿩은 기쁜 듯이 날개를 펴고 하늘을 한 바퀴 돌았습니다.\n"하늘 일은 저에게 맡겨 주세요!"', next:'m15'},
m14n:{art:'kiji', text:'꿩은 크게 한 바퀴 돌고, 산 쪽으로 날아갔습니다.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = '항구에 도착하니, 작은 배가 있었습니다.';
  if(n===0) t += '\n함께 갈 동료는 없지만, 모모타로의 마음은 정해져 있습니다.';
  else if(n===1) t += '\n동료와 둘이서, 힘을 모아 배에 올라탑니다.';
  else t += '\n다 함께 올라타니, 배는 꽉 찬 만원입니다.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'자, 출발!!'}, then:'m16'},

m16:{art:'fune_night', text:'밤바다는 고요합니다.\n별하늘 아래에서 모모타로는 생각합니다.', choices:[
  {t:'할머니의 수수경단 맛을 떠올린다', go:'m17', set:{think:'dango'}},
  {t:'마을의 보물을 생각한다', go:'m17', set:{think:'takara'}},
  {t:'도깨비는 어떤 존재일까 생각한다', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'달콤한 수수경단의 맛이 용기를 주는 것 같았습니다.\n내일은 분명 괜찮을 거야.',
  takara:'마을 사람들의 얼굴이 떠오릅니다.\n반드시 되찾아야 해.',
  oni:'강할까. 무서울까.\n……만나 보지 않으면 알 수 없습니다.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = '아침 햇살 속에서, 섬이 점점 가까워집니다.';
  if(f.first) t += '\n꿩이 한발 먼저 날아가, 모두에게 섬의 위치를 알려 주었습니다.';
  else if(f.kiji) t += '\n꿩이 한발 먼저 날아갔다가 돌아왔습니다.\n"문은 커다란 게 하나! 뒤쪽에 바윗길이 있어!"';
  else t += '\n뱃머리에서 모모타로는 섬을 똑바로 바라봅니다.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'보인다, 도깨비 섬!'}, then:'m19'},

m19:{art:'onigashima', text:'바위투성이 섬에, 커다란 검은 문이 우뚝 솟아 있습니다.\n자, 어디로 들어갈까요?', choices:f=>[
  {t:'정면으로 당당히 들어간다', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'꿩이 찾아낸 뒤쪽 바윗길로 간다', go:'m20', set:{gate:'back'}}
    : {t:'섬을 빙 돌아 뒷길을 찾는다', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? '모모타로는 가슴을 펴고 문 앞에 섰습니다.\n"도깨비들아! 마을의 보물을 돌려받으러 왔다!"'
  : (f.kiji
    ? '꿩의 안내를 받아, 뒤쪽 바윗길을 살며시 올라갑니다.\n망을 보는 도깨비는 아직 눈치채지 못했습니다.'
    : '바위 사이에서 좁은 길을 찾아냈습니다.\n살며시 올라가니, 망을 보는 도깨비는 아직 눈치채지 못했습니다.'), next:'m21'},
m21:{art:'onigashima', text:'가슴이 두근두근하기 시작했습니다.\n자, 드디어입니다.', choices:[
  {t:'깊게 숨을 한 번 쉰다', go:'m21r', set:{calm:1}},
  {t:'기세 좋게 뛰어든다', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? '스읍, 후우.\n마음이 스르르 가라앉았습니다. 좋아, 가자.'
  : '생각하기도 전에, 몸이 먼저 움직이고 있었습니다!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'땅울림과 함께, 도깨비 두목이 나타났습니다!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'넌 누구냐!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'보물을 돌려받겠다!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"마을의 보물을 돌려받으러 왔다. 나는 모모타로다!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(수수경단의 맛을 떠올리자, 신기하게도 무섭지 않아졌습니다.)',
    takara:'(마을 사람들이 기다리고 있다. 질 수 없다!)',
    oni:'(크다. 강해 보인다. 하지만…… 어딘가 슬퍼 보이는 눈을 하고 있다.)'
  }[f.think] || '');
  t += '\n어떻게 싸울까요?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'다 같이, 한꺼번에!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'칼로 승부!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'개야, 부탁해!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'원숭이야, 부탁해!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'꿩아, 부탁해!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'칼을 거두고, 이야기를 나눈다', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'다 같이, 한꺼번에!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'개의 물어뜯기!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'원숭이의 할퀴기!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'꿩의 쪼기!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'칼의 일격!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'개의 돌진!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'원숭이의 재빠른 솜씨!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'꿩의 급강하!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'뭐라고?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'결정타!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'개는 다리를 콱 물고, 원숭이는 등을 할퀴고, 꿩은 머리를 푸드덕푸드덕 쪼았습니다.\n아무리 두목이라도, 3마리의 일제 공격에는 당해 낼 수 없습니다.\n"져, 졌다!"\n힘을 모으면 무서울 것이 없습니다.', next:'m24'},

rk:{art:'maitta', text:f=>'모모타로의 칼 솜씨는 번개처럼 빨랐습니다!\n두목의 쇠몽둥이는 하늘 높이 튕겨 날아갔습니다.\n"져, 졌다!"\n' + HOBBY_LINE_KO(f), next:'m24'},
rd:{art:'maitta', text:'개가 바람처럼 달려 나가, 두목의 다리를 콱 물었습니다!\n두목은 쿵 하고 엉덩방아를 찧었습니다.\n"져, 졌다!"\n개를 믿고 맡긴 모모타로도, 가슴을 펴고 웃었습니다.', next:'m24'},
rs:{art:'maitta', text:'원숭이는 훌쩍훌쩍 뛰어다니며, 두목의 쇠몽둥이를 냉큼 빼앗았습니다.\n"져, 졌다!"\n원숭이의 재빠른 솜씨에, 모모타로도 저도 모르게 박수를 쳤습니다!', next:'m24'},
rj:{art:'maitta', text:'꿩이 하늘에서 급강하했습니다! 날개로 푸드덕푸드덕, 눈가리개입니다!\n두목은 눈이 빙글빙글 돌아 "져, 졌다!"\n하늘의 동료는 역시 든든합니다. 모모타로는 크게 손을 흔들었습니다.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = '두목은 몸을 잔뜩 움츠리고 사과했습니다.\n"보물은 돌려주겠다. 그러니 용서해 다오……"';
  if(!f.first) t += '\n자, 어떻게 할까요?';
  return t;
}, choices:[
  {t:'보물을 가지고 마을로 돌아간다', go:'e_gaisen'},
  {t:'왜 빼앗았는지 이야기를 듣는다', go:'m25'}
]},
m25:{art:'talk', text:'두목은 띄엄띄엄 이야기를 시작했습니다.\n"도깨비 섬은 바위투성이라 작물이 자라지 않는다. 아이들을 굶주리게 하고 싶지 않았다……"', next:'e_naka'},

t1:{art:'oyabun', text:'모모타로는 칼에 손을 대지 않고, 앞을 똑바로 보았습니다.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'이야기를 하고 싶어!!'}, then:'t2'},
t2:{art:'talk', text:'두목은 눈을 동그랗게 뜨더니, 띄엄띄엄 이야기를 시작했습니다.\n"도깨비 섬은 바위투성이라 작물이 자라지 않는다. 아이들을 위해서는, 보물을 빌리는 수밖에 없었다……"\n두목의 이야기를 듣고, 모모타로는 생각했습니다.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'수수경단을 다 같이 나눈다', go:'e_kibi'});
  c.push({t:'"보물은 돌려주고, 마을과 사이좋게 지내자"라고 약속한다', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = '보물을 실은 수레와 함께, 모모타로는 마을로 돌아왔습니다.\n마을은 크게 기뻐했습니다!\n';
  t += ({
    minna:'개도 원숭이도 꿩도, 가슴을 펴고 큰 행진을 했습니다.\n3마리의 활약은 오래도록 마을의 이야깃거리가 되었습니다.',
    katana:'마을 사람들은 모모타로의 훌륭한 칼 솜씨 이야기로 온통 떠들썩합니다.',
    dog:'수레를 끈 것은 크게 활약한 개입니다. 가슴을 펴고, 축하 행렬의 맨 앞을 걸어갑니다.',
    saru:'원숭이는 빼앗은 쇠몽둥이를 어깨에 메고, 의기양양합니다.',
    kiji:'꿩은 축하의 하늘을 빙그르르 돌며, 예쁜 깃털을 한 장 떨어뜨리고 갔습니다.'
  }[f.style] || '');
  if(f.shell) t += '\n할머니에게는 복숭앗빛 조개껍데기도 건넸습니다.\n"바다 소리가 들리는구나" 하고 할머니는 웃었습니다.';
  t += '\n그리고 모두 행복하게 살았습니다.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = '모모타로는 보물을 돌려받고, 답례로 쌀과 씨감자를 도깨비 섬으로 보내기로 했습니다.\n다음 봄부터, 도깨비들은 마을의 밭일을 도우러 오게 되었습니다.\n마을 축제에는 도깨비의 북소리가 울려 퍼집니다.';
  if(f.shell) t += '\n할머니는 선물로 받은 조개껍데기를 북소리에 맞추어 울렸습니다.';
  t += '\n그리고 모두 행복하게 살았습니다.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"보물은 돌려주겠다. 약속이다."\n모모타로와 두목은 새끼손가락을 걸었습니다.\n그 뒤로 도깨비 섬과 마을은, 조금씩 오가게 되었습니다.\n싸우지 않고 돌아온 모모타로를, 마을 사람들은 "대단하구나" 하고 칭찬했습니다.';
  if(f.shell) t += '\n선물로 가져온 조개껍데기를 보여 주자, 할머니는 방긋 웃었습니다.';
  t += '\n그리고 모두 행복하게 살았습니다.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"이거, 일본 제일의 수수경단이야. 다 같이 먹자."\n도깨비들은 수수경단을 한입 가득 물고, 뚝뚝 눈물을 흘렸습니다.\n"이렇게 맛있는 것은 태어나서 처음이다……"\n모모타로와 도깨비들은 함께 바위를 치우고, 밭을 만들기로 했습니다.\n가장 신기하고, 가장 따뜻한 결말입니다.\n그리고 모두 행복하게 살았습니다.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'이것은 도깨비 섬에 사는 젊은 도깨비, 아카의 이야기입니다.\n도깨비 섬은 바위투성이. 밭을 만들어도 작물은 자라지 않습니다.', next:'o2'},
o2:{art:'oni_village', text:'아카의 오늘 일은 어느 쪽으로 할까요?', choices:[
  {t:'벼랑 아래에서 물 긷기', go:'o2r', set:{owork:'mizu'}},
  {t:'밭의 바위 나르기', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? '무거운 물통을 메고, 벼랑길을 몇 번이고 오릅니다.\n어린 동생들이 목이 바싹 마른 채 기다리고 있는 것입니다.'
  : '울퉁불퉁한 바위를 하나 치워도, 흙은 딱딱합니다.\n그래도 아카는, 언젠가 이곳에 밭이 생길 거라고 믿고 있습니다.', next:'o3'},
o3:{art:'oni_dinner', text:'저녁밥은 묽은 죽뿐입니다.\n동생 미도리가 말했습니다.\n"형, 배고파……"', choices:[
  {t:'"봄이 되면 실컷 먹자"라고 다독인다', go:'o3r', set:{care:'hagemasu'}},
  {t:'자기 죽을 반 나누어 준다', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"형 몫도 맛있다."\n미도리는 방긋 웃었습니다.\n아카의 배는 조금 허전하지만, 가슴은 따뜻합니다.'
  : '미도리는 작게 고개를 끄덕이고, 남은 죽을 소중히 먹었습니다.\n봄은 아직 멀지만.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'그날 밤.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'두목이 모두를 모아 놓고 말했습니다.\n"마을에서 보물을 빌려 오겠다. 아이들이 겨울을 나기 위해서다."\n아카는 가슴이 술렁였습니다.\n어떻게 할까요?', choices:[
  {t:'"그건 도둑질이야!"라고 말린다', go:'c_dorobo'},
  {t:'잠자코 따라간다', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'그건 도둑질이야!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'주위가 쥐 죽은 듯 조용해졌습니다.\n두목은 오랫동안 입을 다물고 있다가……\n"그럼, 어떻게 하면 되느냐."', next:'o6a'},
o6a:{art:'oni_kaigi', text:'아카는 열심히 생각했습니다.', choices:[
  {t:'마을 사람들에게 부탁하러 가자', go:'o7a'},
  {t:'우리 손으로 밭을 만들자', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"머리를 숙이고, 먹을 것을 나누어 달라고 하는 거야. 그 대신 도깨비의 힘으로 보답하자."\n두목은 굵은 팔로 팔짱을 끼고, 천천히 고개를 끄덕였습니다.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'다음 날, 도깨비들은 배를 타고 마을로 향했습니다.\n싸움의 무기는 들지 않고, 대신 머루가 담긴 바구니를 안고서.\n그것은 보물을 빼앗는 것보다, 훨씬 훨씬 용기가 필요한 일이었습니다.\n마을의 대답은…… 그것은 또, 다른 이야기입니다.'},
o7b:{art:'oni_village', text:'"바위를 전부 치우고, 밭을 만들자! 도깨비의 힘이라면 할 수 있어!"\n그날부터 섬 전체의 도깨비가 바위 나르기를 시작했습니다.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'도깨비의 힘, 전력으로!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'바위는 산처럼 커서, 일은 좀처럼 끝나지 않습니다.\n하지만 신기합니다. 다 같이 흘리는 땀은, 조금도 힘들지 않은 것입니다.\n봄이 오고, 밭에 작은 싹이 돋았습니다.\n미도리가 팔짝팔짝 뛰며 기뻐했습니다.\n그리고 모두 행복하게 살았습니다.'},

o5b:{art:'oni_raid', text:'아카는 두목들의 배에 탔습니다.\n마을에 도착해서도, 아카는 배 위에서 움직이지 못합니다.\n멀리서 불빛이 흔들리고, 누군가의 울음소리가 들린 것 같았습니다.', next:'o6b'},
o6b:{art:'oni_takara', text:'섬으로 돌아와서도, 아카의 가슴은 술렁인 채입니다.\n쌓아 올린 보물 앞에서, 아카는 생각했습니다.', choices:[
  {t:'보물을 하나, 몰래 돌려주러 간다', go:'o7c'},
  {t:'아무것도 하지 못한 채, 밤이 지나간다', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'아카는 작은 보물을 하나 들고, 밤바다로 배를 띄웠습니다.\n마을 바닷가에 살며시 놓고 돌아가려던 그때.\n"도깨비님, 그거 돌려주러 온 거야?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'들켰나?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'작은 여자아이가 가만히 아카를 보고 있었습니다.\n아카는 두근두근하면서, 고개를 꾸벅 끄덕였습니다.\n여자아이는 방긋 웃으며, 작은 목소리로 말했습니다.\n"고마워. 비밀로 해 줄게."\n차가운 밤일 텐데도, 아카의 가슴은 따끈따끈했습니다.'},

o7d:{art:'oni_night', text:'아무것도 하지 못한 채, 여러 밤이 지났습니다.\n어느 밤, 잠들지 못한 아카가 벼랑 위에서 바다를 보고 있는데, 멀리서 작은 배가 다가옵니다.\n저 배에 타고 있는 것은 누구일까요.', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'날이 밝았습니다.'}, then:'o8'},
o8:{art:'oni_village', text:'섬 전체가 큰 소동이 되었습니다.\n"인간이다! 머리띠를 맨 인간이 이쪽으로 온다!"\n아카의 가슴이 쿵 하고 뛰었습니다.\n어떻게 할까요?', choices:[
  {t:'미도리를 바위 뒤에 숨긴다', go:'o9a', set:{guard:'midori'}},
  {t:'두목 곁으로 달려간다', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"쉿. 여기 있으면 괜찮아."\n미도리의 작은 손을, 아카는 꼭 쥐었습니다.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'두목은 쇠몽둥이를 쥐고, 문 쪽을 노려보고 있습니다.\n그 등이 여느 때보다 크게 보였습니다.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'싸움은 순식간이었습니다.\n두목의 쇠몽둥이는 튕겨 날아가고, 아카는 그늘에서 숨을 죽이고 바라보고 있습니다.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'져, 졌다!!'}, then:'o11'},
o11:{art:'oyabun', text:'머리띠를 맨 젊은이는, 칼을 거두고 무언가 이야기하고 있습니다.\n지금이라면 말을 걸 수 있을지도 모릅니다.\n어떻게 할까요?', choices:[
  {t:'용기를 내어, 그늘에서 나온다', go:'e_o_asa'},
  {t:'나서지 못한 채, 배웅한다', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"저, 저기! 보물, 나르는 거 도와줄게."\n그늘에서 뛰어나온 아카를 보고, 젊은이는 눈을 동그랗게 떴습니다.\n그러고는 방긋 웃으며 말했습니다.\n"고마워. 너는 용기 있는 도깨비구나."\n아침 해가 두 사람을 따뜻하게 비추었습니다.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'말을 걸 용기는 나지 않았습니다.\n보물을 실은 배가, 바다 저편으로 점점 작아져 갑니다.\n하지만 아카는 마음을 정했습니다.\n다음에 만나면, 꼭 "고마워"도 "미안해"도 말하겠다고.\n그 "다음"은, 그리 멀지 않은 미래에 반드시 찾아옵니다.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'이것은 산에 사는 꿩 한 마리의, 또 하나의 이야기입니다.\n개는 힘이 셉니다. 원숭이는 나무타기의 명수입니다.\n그에 비해 자신은, 작고 힘도 없습니다…….\n꿩은 언제나 조금 자신이 없었습니다.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'이 작은 날개로는,\n아무것도 할 수 없는 걸까.'}, then:'k2'},
k2:{art:'kiji_yama', text:'오늘도 혼자서 하늘 산책입니다.\n어디를 날아 볼까요?', choices:[
  {t:'산 위를 난다', go:'k2r', set:{kfly:'yama'}},
  {t:'바다 쪽으로 난다', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? '산 위에서 내려다보니, 마을은 장난감 상자 같습니다.\n굴뚝의 연기가 폴폴 피어오르고 있었습니다.'
  : '바다 위는 바람이 세서, 날개가 파닥파닥 소리를 냅니다.\n멀리에 검은 섬이 덩그러니 보였습니다.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'어느 날, 아래쪽 길을 걸어가는 신기한 행렬을 발견했습니다.\n머리띠를 맨 젊은이와, 개와, 원숭이.\n어쩐지 즐거워 보입니다.', choices:[
  {t:'용기를 내어 말을 건다', go:'k4a'},
  {t:'조금 더 하늘에서 지켜본다', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'꿩은 푸드덕푸드덕 내려앉아, 있는 힘껏 큰 목소리로 말했습니다.\n"저, 저도 데려가 주시지 않겠습니까!"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'하늘에서 살며시 따라가는 동안, 젊은이가 알아차리고 손을 흔들었습니다.\n"하늘의 친구도 같이 가지 않겠나!"', next:'k5'},
k5:{art:'kiji_join', text:'"수수경단 하나, 드세요."\n달아서 볼이 떨어질 것 같습니다.\n"그, 그 대신, 하늘 일은 저에게 맡겨 주세요!"\n있는 힘껏 큰 목소리로, 꿩은 말했습니다.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'꿩이 동료가 되었다!!'}, then:'k6'},
k6:{art:'fune', text:'배 위에서 꿩은 깨달았습니다.\n바다 위를 날 수 있는 것은 자기뿐입니다.\n개도 원숭이도 할 수 없는 일입니다.', choices:[
  {t:'높이 날아 섬 전체를 본다', go:'k6r', set:{kscout:'high'}},
  {t:'낮게 날아 문 근처를 살핀다', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? '높은 하늘에서, 섬의 모양이 전부 보였습니다.\n문 뒤쪽에 좁은 바윗길이 있는 것도 알 수 있습니다.\n"모두들, 뒷길이 있어!"'
  : '파도에 닿을 듯 낮게 날아, 문 앞까지 갔습니다.\n망을 보는 도깨비의 수도, 쇠몽둥이의 크기도, 똑똑히 보고 왔습니다.\n"모두들, 상대의 모습은 완벽하게 파악했어!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'도깨비 두목과의 싸움이 시작되었습니다!\n두목의 쇠몽둥이가, 붕 하고 개에게 내리쳐집니다.\n꿩의 가슴이 쿵 하고 뛰었습니다.\n어떻게 할까요?', choices:[
  {t:'눈을 가리러 뛰어든다!', go:'c_kwaza1'},
  {t:'큰 소리로 모두에게 알린다!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'꿩의 급강하!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'뭐라고?!'}, then:'k8a'},
k8a:{art:'maitta', text:'꿩은 정신없이, 두목의 얼굴 앞으로 뛰어들었습니다.\n날개로 푸드덕푸드덕, 눈가리개입니다!\n그 틈에 개가 훌쩍 몸을 피하고, 원숭이가 쇠몽둥이를 빼앗았습니다.\n"져, 졌다!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'개야, 뒤!!'}, then:'k8b'},
k8b:{art:'maitta', text:'메아리처럼 큰 목소리가, 싸움터에 울려 퍼졌습니다.\n개는 훌쩍 몸을 피하고, 모모타로의 칼이 번쩍 빛납니다.\n"져, 졌다!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'싸움이 끝난 뒤, 모모타로가 말했습니다.\n"오늘의 가장 큰 공은 꿩이야."\n개도 원숭이도, 크게 고개를 끄덕였습니다.\n작은 가슴 속이, 뜨끈하게 데워졌습니다.\n작아도, 할 수 있는 일이 있습니다.\n꿩은 이제, 고개를 숙이지 않습니다.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"그 목소리가 없었으면 위험했어" 하고 개가 말했습니다.\n"하늘의 망보기는 꿩밖에 할 수 없지" 하고 원숭이가 말했습니다.\n꿩은 쑥스러워서, 날개로 얼굴을 가렸습니다.\n작아도, 할 수 있는 일이 있습니다.\n꿩은 이제, 고개를 숙이지 않습니다.'}

};

function HOBBY_LINE_KO(f){
  return {
    sumo:'스모로 단련한 허리의 힘이, 결정적인 순간에 살아났습니다.',
    run:'달리기로 단련한 다리는, 누구에게도 뒤지지 않습니다.',
    help:'매일 일손을 도우며 단련한 팔은, 괜히 굵은 것이 아닙니다.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (KO) ================= */
var ZK_KO = [
  {section:'모모타로'},
  {id:'a_minna',  n:'금의환향: 다 같이',     h:'동료 모두와 한꺼번에 싸우면……'},
  {id:'a_katana', n:'금의환향: 칼',          h:'칼로 싸워서, 보물을 가지고 돌아오면……'},
  {id:'a_dog',    n:'금의환향: 개',          h:'개에게 맡겨 싸워서, 보물을 가지고 돌아오면……'},
  {id:'a_saru',   n:'금의환향: 원숭이',      h:'원숭이에게 맡겨 싸워서, 보물을 가지고 돌아오면……'},
  {id:'a_kiji',   n:'금의환향: 꿩',          h:'꿩에게 맡겨 싸워서, 보물을 가지고 돌아오면……'},
  {id:'b_naka',   n:'도깨비와 화해',         h:'이긴 뒤에, 이야기를 들어 보면……'},
  {id:'c_yaku',   n:'대화로 맺은 약속',      h:'동료를 데려가지 않고 가서, 칼을 거두면……'},
  {id:'d_kibi',   n:'수수경단의 기적',       h:'수수경단을 많이 들고 혼자 가서, 칼을 거두면……'},
  {id:'o_negai',  n:'머루 바구니',           h:'도깨비 이야기에서 말리고, 부탁하기를 고르면……'},
  {id:'o_hatake', n:'도깨비 섬의 밭',        h:'도깨비 이야기에서 말리고, 밭을 고르면……'},
  {id:'o_kaesu',  n:'밤 바닷가의 비밀',      h:'잠자코 따라간 뒤, 보물을 돌려주러 가면……'},
  {id:'o_asa',    n:'아침 해의 약속',        h:'아무것도 하지 못한 아침에, 용기를 내면……'},
  {id:'o_miokuri',n:'언젠가 말할 날',        h:'용기가 나지 않은 채, 배를 배웅하면……'},
  {id:'k_hero',   n:'작은 영웅',             h:'꿩 이야기에서, 뛰어들면……'},
  {id:'k_voice',  n:'하늘의 망보기',         h:'꿩 이야기에서, 큰 소리를 내면……'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_KO, ZK_KO };
