"use strict";
/* 커다란 순무 - Korean scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "영차, 영차!!" / "쑤욱, 뽑혔다!!" */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  /* 이름은 모두 모음으로 끝나므로 조사는 '가' / '를' 로 고정 */
  var NAMES_KO = { baa:'할머니', mago:'손녀', inu:'개', neko:'고양이', nezumi:'쥐', jii:'할아버지' };

  function chainKo(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return '할아버지가 순무를 붙잡았습니다.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += NAMES_KO[order[i]] + '가 ' + NAMES_KO[order[i+1]] + '를,\n';
    }
    t += '할아버지가 순무를 꽉 붙잡았습니다.';
    return t;
  }

  var KABU_KO = {

  /* ================= 커다란 순무 ================= */

  kb1:{art:'kabu_hata', text:'이것은 넓고 넓은 밭의 이야기입니다.\n봄날 아침, 할아버지가 순무 씨앗을 뿌렸습니다.\n"달고 단 순무가 되어라. 크고 큰 순무가 되어라."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'할아버지가 날마다 돌보기 시작합니다.\n무엇을 가장 소중히 할까요?', choices:[
    {t:'날마다 듬뿍 물을 준다', go:'kb2r', set:{care:'mizu'}},
    {t:'날마다 다정하게 말을 건다', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"크게 자라라, 크게 자라라."\n말을 걸 때마다 잎이 기쁜 듯 흔들리는 것 같았습니다.'
    : '햇살과 듬뿍 준 물로,\n잎은 무럭무럭, 무럭무럭 뻗어 나갔습니다.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'순무는 자라고 또 자라서, 마침내 할아버지의 키보다도 커졌습니다.\n이런 순무는 마을의 그 누구도 본 적이 없었습니다.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = '자, 수확하는 날이 왔습니다.';
    if(f.first) return t + '\n할아버지는 팔을 걷어붙였습니다.';
    return t + '\n어떻게 할까요?';
  }, choices:f=>{
    var c = [{t:'바로 뽑아 본다', go:'kb5'}];
    c.push({t:'더 크게 키워 본다', go:'km1'});
    if(f.care==='hanashi') c.push({t:'순무에게 부탁해 본다', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'할아버지는 순무를 붙잡고, 있는 힘껏!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'영차, 영차!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = '순무는 꿈쩍도 하지 않습니다.';
    if(f.first) return t + '\n"할멈, 잠깐 손 좀 빌려주게."';
    return t + '\n누구를 불러올까요?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES_KO[k]+'를 불러온다', go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> NAMES_KO[f.c2]+'가 와서 뒤에 섰습니다.\n'+chainKo(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'영차, 영차!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = '순무는 아직 조금도 움직이지 않습니다.';
    if(f.first) return t + '\n"이번에는 손녀를 불러오자."';
    return t + '\n다음은 누구를 부를까요?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES_KO[k]+'를 불러온다', go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> NAMES_KO[f.c3]+'가 와서 뒤에 섰습니다.\n'+chainKo(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'영차, 영차!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = '잎이 흔들흔들 흔들렸을 뿐입니다.';
    if(f.first) return t + '\n"좋아, 개도 불러오자."';
    return t + '\n다음은 누구를 부를까요?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES_KO[k]+'를 불러온다', go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> NAMES_KO[f.c4]+'가 와서 뒤에 섰습니다.\n'+chainKo(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'영차, 영차!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = '쓱. 조금 움직인…… 것 같습니다.';
    if(f.first) return t + '\n"고양이도 오너라!"';
    return t + '\n마지막 한 명을 부릅시다.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:NAMES_KO[k]+'를 불러온다', go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> NAMES_KO[f.c5]+'가 와서 뒤에 섰습니다.\n'+chainKo(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'영차, 영차!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = '뽑힐 듯 뽑히지 않습니다. 이제 정말 한 번만 더 하면 됩니다.\n하지만 이제 부를 수 있는 사람이 없습니다.';
    if(f.first) return t;
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'포기하지 않고 한 번 더', go:'kb10', set:{nezumi:1}},
    {t:'오늘은 여기까지 한다', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'그러자 고양이가 쓱 달려가더니\n작고 작은 쥐를 데려왔습니다.\n"네 힘이 필요해."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'나라도 괜찮아……?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'영차, 영차!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'순무가 하늘 높이 튀어 올라서\n모두 엉덩방아를 찧었습니다.\n아야야…… 그래도 누구의 얼굴에나 커다란 웃음이 피었습니다.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'마침내 순무가 뽑혔습니다.\n마지막 한 번을 밀어 준 것은 가장 작은 쥐였습니다.\n작은 힘도 모두와 합치면 세상에서 제일입니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- Let it grow → 온 마을의 잔치 ---- */
  km1:{art:'kabu_sodatsu', text:'"여기까지 왔으니 끝까지 크게 키워 보자."\n물을 주고 노래를 부르며, 날마다 날마다 돌보기를 이어 갔습니다.\n순무는 마침내 할아버지의 집보다도 커졌습니다.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'이렇게 되니 가족만으로는 도저히 무리입니다.\n할아버지는 언덕 위에서 외쳤습니다.\n"어어이! 마을 사람들아! 힘을 좀 빌려주게!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'온 마을, 집합!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'빵 굽는 사람도, 방아 찧는 사람도, 아이들도.\n온 마을 사람들이 한 줄로 이어졌습니다.\n맨 뒤는 역시 작은 쥐입니다.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'영차, 영차!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'뽑힌 순무는 크고 큰 냄비 속으로.\n김이 오르는 저편에서 모두의 웃음소리가 울렸습니다.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'세상에서 제일 큰 순무는 세상에서 제일 큰 잔치가 되었습니다.\n달콤한 순무 수프는 온 마을의 배를 따뜻하게 데워 주었습니다.\n"내년에도 큰 놈으로 부탁하네!"\n그리고 모두 행복하게 살았습니다.'},

  /* ---- Ask the turnip → 순무의 마음 ---- */
  ko1:{art:'kabu_talk', text:'할아버지는 순무 앞에 앉았습니다.\n"날마다 말을 걸어 온 목소리인걸. 분명 닿을 거야."\n"순무야. 이제 슬슬 나와 주지 않겠니?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'잎이 한 번 크게 흔들렸습니다.\n흙이 불룩불룩 솟아오르더니……', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'불렀어?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"날마다 말을 걸어 준 건 할아버지구나.\n목소리로 다 알 수 있어.\n좋아. 그럼 갈게. 하나, 둘……"', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'순무는 스스로 폴짝 튀어나와 주었습니다.\n힘으로 하지 않아도 마음은 닿습니다.\n날마다 하던 "크게 자라라"는 마법의 말이었습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- Call it a day → 내일도 다 같이 ---- */
  ka1:{art:'kabu_yuyake', text:'"오늘은 여기까지 하자. 다들 정말 애썼구나."\n노을 진 밭에서 따뜻한 차를 마셨습니다.\n순무도 오늘은 푹 쉬렴.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"내일 또 다 같이 뽑자꾸나."\n그렇게 서로 말하고 저마다의 집으로 돌아갑니다.\n뽑히지 않는 날이 있어도 괜찮습니다.\n내일이 왠지 기다려지니까요.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 순무의 이야기 ================= */

  kt1:{art:'kt_tsuchi', text:'이것은 흙 속의 이야기입니다.\n나는 순무. 넓은 밭 한가운데에서 포근하게 자라고 있습니다.\n위에서는 날마다 할아버지의 목소리가 들려옵니다.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'흙 속에도 즐거운 일은 가득합니다.\n오늘은 무엇을 할까요?', choices:[
    {t:'지렁이와 수다를 떤다', go:'kt2r', set:{klife:'mimizu'}},
    {t:'햇살의 맛을 천천히 맛본다', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"너, 또 커졌구나" 하고 지렁이가 말합니다.\n"헤헤. 날마다 좋은 목소리를 듣고 있으니까."'
    : '잎에서 햇살의 맛이 사르르 내려옵니다.\n달콤하고 따끈따끈하고, 조금 졸음이 오는 맛입니다.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'그러던 어느 날.\n확!\n"으악, 뭐야 뭐야?"\n몸이 위로 끌어당겨집니다. 수확하는 날이 온 것입니다.', next:'kt4'},
  kt4:{art:'kt_up', text:'자, 어떻게 할까요?', choices:[
    {t:'아직 나가기 싫어! 버틴다', go:'kt5'},
    {t:'좋아, 바깥세상을 보러 간다', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"아직 여기 있고 싶단 말이야!"\n순무는 뿌리에 힘을 주고 꾹 버텼습니다.\n위에서는 "영차, 영차." 점점 더 떠들썩해집니다.', next:'kt6'},
  kt6:{art:'kt_up', text:'두 사람, 세 사람, 네 사람…….\n그래도 지지 않고 버티고 있으니, 마지막에 아주 작은 목소리가 들려왔습니다.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'부탁이야, 순무야'}, then:'kt7'},
  kt7:{art:'kt_up', text:'힘으로 하는 거라면 얼마든지 버틸 수 있습니다.\n하지만 그렇게 작은 목소리로 부탁을 받으면……\n"……어휴, 어쩔 수 없네."\n순무는 스르르 뿌리의 힘을 풀었습니다.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'하늘은 높고, 모두의 웃는 얼굴은 눈부셨습니다.\n"뭐야. 바깥도 나쁘지 않은걸."\n커다란 힘에는 지지 않았던 순무도\n작은 부탁에는 당해 내지 못했습니다.\n그리고 모두 행복하게 살았습니다.'},

  ktj1:{art:'kt_up', text:'"그러고 보니 하늘은 무슨 색일까."\n순무는 몸이 근질근질해졌습니다.\n"좋아, 내가 먼저 나가 버리자. 하나, 둘……"', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'너무나 힘차게 튀어나온 바람에\n모두가 나란히 엉덩방아를 찧었습니다.\n"하늘이 이렇게나 넓구나!"\n스스로 정해서 튀어나온 기분은 최고였습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 쥐의 이야기 ================= */

  kn1:{art:'kn_naya', text:'이것은 헛간 구석에 사는 작은 쥐의 이야기입니다.\n힘쓰는 일은 잘하지 못합니다. 무거운 것은 나르지 못합니다.\n하지만 오늘도 신나게 종종거리며 돌아다닙니다.', next:'kn2'},
  kn2:{art:'kn_naya', text:'오늘 낮에는 무엇을 할까요?', choices:[
    {t:'치즈 조각을 찾는다', go:'kn2r', set:{nlife:'cheese'}},
    {t:'창가에서 햇볕을 쬔다', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? '창가의 볕 드는 자리는 세상에서 제일가는 특등석.\n수염을 쭉 펴고, 꾸벅꾸벅 꾸벅꾸벅.'
    : '헛간 안쪽에서 좋은 냄새.\n작은 치즈 조각을 찾아내서 볼이 빵빵합니다.', next:'kn3'},
  kn3:{art:'kn_neko', text:'그때 고양이가 다가왔습니다.\n여느 때 같으면 도망쳤을 텐데. 그런데 오늘의 고양이는 꾸벅 고개를 숙였습니다.\n"부탁이 있어. 네 힘을 빌리고 싶어."', choices:[
    {t:'무섭지만 따라간다', go:'kn3a'},
    {t:'"정말 나라도 괜찮아?" 하고 묻는다', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'고양이의 뒤를 두근두근하며 따라갑니다.\n밭에 도착하니, 모두가 난처한 얼굴로 기다리고 있었습니다.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"작은 너라서 좋은 거야" 하고 고양이가 말했습니다.\n"맨 뒤에는 가장 가벼운 사람이 서는 거래."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'줄의 맨 뒤에 섰습니다.\n앞에는 커다란 등이 죽 늘어서 있습니다.\n작은 쥐가 할 수 있는 일은 무엇일까요?', choices:[
    {t:'꼬리로 꽉 잡아당긴다', go:'kns1'},
    {t:'큰 목소리로 구령을 붙인다', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'쥐는 고양이의 꼬리에 자기 꼬리를 감고,\n작은 몸으로 있는 힘껏!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'영차, 영차!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"마지막 한 번을 밀어 준 건 너였구나" 하고 할아버지가 말했습니다.\n작은 꼬리가 세운 커다란 공로.\n그날부터 쥐는 헛간 구석이 아니라\n모두의 한가운데에서 밥을 먹고 있습니다.\n그리고 모두 행복하게 살았습니다.'},

  kno1:{art:'kn_retsu', text:'힘이 안 되면 목소리가 있습니다!\n쥐는 크게 숨을 들이쉬고 힘껏 외쳤습니다.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'하나, 둘! 영차!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'쑤욱, 뽑혔다!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'모두의 힘이 그 목소리 덕분에 하나로 모였습니다.\n"참 좋은 구령이었어" 하고 할머니가 웃습니다.\n힘이 작아도 모두를 하나로 모으는 목소리가 있습니다.\n쥐는 가슴을 펴고 찍, 하고 울었습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'할머니가 와서 할아버지의 뒤에 섰습니다.\n할머니가 할아버지를, 할아버지가 순무를 꽉 붙잡습니다.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'영차, 영차!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'순무는 아직 조금도 움직이지 않습니다.\n이번에는 손녀가 와서 뒤에 섰습니다.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'영차, 영차!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'잎이 흔들흔들 흔들렸을 뿐입니다.\n이번에는 개가 달려와서 뒤에 섰습니다.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'영차, 영차!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'쓱. 조금 움직인…… 것 같습니다.\n이번에는 고양이가 뛰어와서 뒤에 섰습니다.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'영차, 영차!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'뽑힐 듯 뽑히지 않습니다. 이제 정말 한 번만 더 하면 됩니다.\n그러자 고양이가 작고 작은 쥐를 데려왔습니다.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_KO);

  T.ZK_EN.push(
    {section:'커다란 순무'},
    {id:'kb_seishi',  n:'드디어 뽑혔다',            h:'처음 1회차에서 만나는 본래의 이야기'},
    {id:'kb_matsuri', n:'온 마을의 잔치',           h:'뽑는 것을 참고 더 크게 키우면…'},
    {id:'kb_onegai',  n:'순무의 마음',              h:'날마다 말을 걸며 키우면…'},
    {id:'kb_ashita',  n:'내일도 다 같이',           h:'뽑히지 않는 날에는 무리하지 않으면…'},
    {id:'kt_koe',     n:'작은 목소리에 졌다',       h:'순무의 이야기에서 계속 버티면…'},
    {id:'kt_jibun',   n:'스스로 쑤욱',              h:'순무의 이야기에서 바깥이 궁금해지면…'},
    {id:'kn_shippo',  n:'작은 꼬리의 큰 공로',      h:'쥐의 이야기에서 꼬리를 쓰면…'},
    {id:'kn_ondo',    n:'꼬마 구령쟁이',            h:'쥐의 이야기에서 목소리를 쓰면…'}
  );

})();
