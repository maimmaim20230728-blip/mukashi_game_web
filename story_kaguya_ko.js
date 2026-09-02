"use strict";
/* 가구야 공주 - Korean scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   출전: 다케토리 이야기(10세기, PD). 2013년 영화의 고유 요소는 사용하지 않음. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var KAGUYA_KO = {

  /* ================= 가구야 공주 ================= */

  kg1:{art:'kg_takebayashi', text:'이것은 아주 먼 옛날의 이야기입니다.\n대나무를 베며 살아가는 할아버지가 있었습니다.\n사람들은 그를 대나무 할아범이라고 불렀습니다.\n어느 날, 대숲 깊은 곳에서 밑동이 금빛으로 빛나는 대나무를 발견했습니다.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'대나무가 빛난다!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'대나무를 잘라 보니, 그 안에 3치쯤 되는 작은 여자아이가 앉아 있었습니다.\n할아버지는 아이를 손바닥에 올려 집으로 데려왔습니다.\n아내인 할머니와 둘이서, 바구니에 넣어 기르기로 했습니다.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'작은 공주님에게 날마다 무엇을 해 줄까요?', choices:[
    {t:'자장가를 불러 준다', go:'kg3r', set:{takeko:'uta'}},
    {t:'대나무 장난감을 만든다', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? '할아버지는 대나무로 작은 피리와 수레를 만들었습니다.\n공주님이 웃으면, 할머니도 웃었습니다.'
    : '할머니가 자장가를 부르면, 공주님은 새근새근 잠이 듭니다.\n바구니 곁에서, 두 사람은 오래도록 지켜보았습니다.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'그 뒤로는 대나무를 벨 때마다, 안에서 금이 나왔습니다.\n여자아이는 무럭무럭 자라, 3개월쯤 만에 아름다운 아가씨가 되었습니다.\n이름을 "가녀린 대나무의 가구야 공주"라고 지었습니다.', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'가구야 공주의 아름다움은 온 나라의 소문이 되었습니다.\n집 주위에는 한 번이라도 보려는 사람들이 모여듭니다.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'그중에서도 5명의 귀공자가, 꼭 아내로 맞고 싶다며 찾아왔습니다.\n이시쓰쿠리 황자, 구라모치 황자, 아베 대신,\n오토모 대납언, 이소노카미 중납언.', next:'kg7'},

  kg7:{art:'kg_takara', text:'가구야 공주가 말했습니다.\n"제가 보고 싶은 보물을 가져다주신 분에게 가겠습니다."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'부처님의 돌 발우!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'봉래산의 옥 가지!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'불쥐의 가죽옷!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'용의 목에 달린 구슬!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'제비의 개오지 조개!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = '어느 것도 이 세상에 있으리라고는 생각되지 않는 보물입니다.\n5명은 저마다 길을 떠났습니다.';
    if(f.first) return t;
    return t + '\n누구의 이야기를 들을까요?';
  }, choices:[
    {t:'이시쓰쿠리 황자', go:'kgk1'},
    {t:'구라모치 황자', go:'kgk2'},
    {t:'아베 대신', go:'kgk3'},
    {t:'오토모 대납언', go:'kgk4'},
    {t:'이소노카미 중납언', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'이시쓰쿠리 황자는 먼 천축까지 가는 것은 힘들다며,\n가까운 절의 오래된 발우를 가져갔습니다.\n하지만 부처님의 발우라면 빛이 날 터입니다.\n빛이 없는 발우는 금세 들통이 나고 말았습니다.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'구라모치 황자는 장인들에게 옥 가지를 만들게 했습니다.\n공주님도 할아버지도, 훌륭한 가지에 눈이 휘둥그레졌습니다.\n그런데 그곳에 "삯을 아직 받지 못했습니다" 하며\n장인들이 찾아온 것입니다.', next:'kg9'},
  kgk3:{art:'kg_takara', text:'아베 대신은 먼 나라에서 가죽옷을 들여왔습니다.\n공주님이 말했습니다. "불쥐의 가죽옷은 불에 넣어도 타지 않을 터입니다."\n불에 넣자, 가죽옷은 활활 타 버렸습니다.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'오토모 대납언은 배를 타고 용을 찾아 나섰습니다.\n큰 폭풍을 만나, 배는 빙글빙글.\n겨우 물가로 돌아온 대납언은 눈이 퉁퉁 부은 채 집으로 갔습니다.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'이소노카미 중납언은 제비 둥지에 손을 넣었다가,\n무언가를 붙잡은 순간 지붕에서 떨어지고 말았습니다.\n쥐고 있던 것은 제비의 오래된 똥.\n중납언은 다쳐서 자리에 눕고 말았습니다.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = '결국 진짜 보물을 가져올 수 있었던 사람은 한 명도 없었습니다.';
    if(f.first) return t;
    return t + '\n자, 어떻게 할까요?';
  }, choices:[
    {t:'소문은 그대로 두고, 조용히 지낸다', go:'kg10'},
    {t:'할아버지와 할머니에게 진실을 이야기한다', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'그 소문은 임금님의 귀에도 닿았습니다.\n임금님은 사냥을 나가는 척하며, 대나무 할아범의 집을 찾아갔습니다.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'임금님의 가마!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'임금님이 가마에 태우려 하자,\n가구야 공주의 모습은 스르르 빛이 되어 사라졌습니다.\n"데려가는 것은 그만두자."\n임금님은 그렇게 말하고 도읍으로 돌아갔습니다.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'그 뒤로 임금님과 가구야 공주는, 편지와 노래를 주고받게 되었습니다.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'그렇게 3년이 지났습니다.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'봄이 되자, 가구야 공주는 달을 올려다보며 눈물을 흘리게 되었습니다.\n할아버지가 까닭을 물어도 대답하지 않습니다.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'여름이 끝날 무렵, 가구야 공주는 마침내 털어놓았습니다.\n"저는 달의 도읍 사람입니다.\n8월 보름날 밤에 마중이 옵니다. 돌아가야 합니다."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'돌려보낼 수 없다!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'할아버지는 임금님께 부탁해서 많은 병사를 불렀습니다.\n지붕에도 마당에도, 활을 든 사람들이 늘어섭니다.\n할머니는 공주님을 방 안쪽에 숨기고, 문을 단단히 닫았습니다.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'보름날 밤. 한밤중이 지날 무렵,\n집 주위가 낮보다 밝아졌습니다.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'달빛이 내려온다!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'하늘에서 구름을 탄 사람들이 내려왔습니다.\n병사들은 힘이 빠져, 활을 당길 수조차 없습니다.\n문은 저절로 열리고, 할머니의 품에서 공주님이 앞으로 나왔습니다.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'달의 사자가 말했습니다.\n"할아범이여. 공주는 달에서 죄를 지어, 그 값을 치르려고 한동안 이곳에 내려와 있었습니다.\n값을 치르는 시간은 끝났습니다.\n그대의 작은 선행에 대한 보답이기도 했습니다."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'가구야 공주는 할아버지에게 편지를 썼습니다.\n"벗어 두고 가는 옷을 저라고 여겨 주세요.\n달이 뜨는 밤에는 올려다봐 주세요."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = '달의 사자가 불사의 약이 담긴 항아리를 내밀었습니다.';
    if(f.first) return t + '\n공주님은 한 모금 맛보고, 나머지를 임금님께 보내는 편지에 곁들여\n임금님의 사자에게 건넸습니다.';
    return t + '\n이 약을 누구에게 줄까요?';
  }, choices:[
    {t:'임금님께 보내는 편지에 곁들인다', go:'kg21'},
    {t:'할아버지와 할머니에게 남긴다', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = '달의 사자가 날개옷을 내밉니다.\n"이것을 입으면, 사람의 시름이 모두 사라져 버립니다."';
    if(f.first) return t + '\n공주님은 날개옷을 입었습니다.';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'날개옷을 입는다', go:'kg22'},
    {t:'입기 전에, 한 번 더 뒤돌아본다', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'시름이 사라진 공주님은, 할아버지를 사랑스럽다고도 그립다고도 여기지 않게 되었습니다.\n구름을 타고, 달을 향해 올라갑니다.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'달로……'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'할아버지와 할머니는 눈물이 멈추지 않았습니다.\n공주님이 남긴 옷을 끌어안고, 언제까지나 하늘을 올려다보았습니다.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'임금님은 공주님의 편지와 불사의 약을,\n하늘에 가장 가까운 스루가의 산꼭대기에서 태우게 했습니다.\n수많은 무사가 오른 산이라서,\n그 산은 "후지산"이라고 불리게 되었습니다.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'달이 뜨는 밤에는 올려다봐 주세요.\n할아버지와 할머니는 공주님의 말대로, 달이 뜬 밤에는 하늘을 올려다보았습니다.\n벗어 두고 간 옷은 두 사람의 곁에 남았습니다.\n끝.'},

  /* ---- 남은 나날 ---- */
  kgn1:{art:'kg_uchiake', text:'가구야 공주는 임금님이 오기 전에, 두 사람에게 이야기했습니다.\n"저는 달의 도읍 사람입니다. 올해 가을에 돌아가야 합니다."\n할아버지와 할머니는 오랫동안 말이 없었습니다.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'그날부터 3명은 하루하루를 소중히 보냈습니다.\n대숲을 거닐고, 처음 공주님을 발견한 대나무가 있던 곳에도 갔습니다.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'달이 고운 밤에는, 3명이 함께 툇마루에 앉았습니다.\n"달이 뜨는 밤에는 여기에 앉아 주세요. 저도 달에서 이곳을 보겠습니다."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'보름날 밤, 마중이 왔습니다.\n할아버지는 싸우지 않았습니다.\n3명은 손을 맞잡고 빛을 기다렸습니다.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'이별은 똑같이 찾아왔습니다.\n하지만 그 전에, 3명에게는 함께 보낸 가을이 있었습니다.\n툇마루에는 방석 3개가 놓인 그대로입니다.\n끝.'},

  /* ---- 날개옷을 입기 전에 ---- */
  kgm1:{art:'kg_shouten', text:'날개옷을 입기 전에, 공주님은 뒤를 돌아보았습니다.\n할아버지와 할머니가 이쪽을 보고 있습니다.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'길러 주셔서 고맙습니다'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'할머니는 울면서, 웃으며 손을 흔들었습니다.\n할아버지도 크게 손을 흔들었습니다.\n공주님은 그 얼굴을 눈에 새기고 나서, 날개옷을 입었습니다.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'시름은 사라져도, 마지막으로 본 두 사람의 얼굴은\n빛 속에 오래도록 남아 있었습니다.\n끝.'},

  /* ---- 불사의 약 ---- */
  kgu1:{art:'kg_tegami', text:'공주님은 불사의 약을 할아버지와 할머니에게 건넸습니다.\n"이것을 마시면 언제까지나 살 수 있습니다."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'공주님이 달로 돌아간 뒤, 두 사람은 약 항아리를 바라보았습니다.\n"공주님이 없는 세상을 언제까지나 살지 않아도 된다."\n할아버지는 조용히 말했습니다.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'다음 달밤, 두 사람은 약 항아리를 툇마루에 놓았습니다.\n달을 향해, 살며시 내밀듯이.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'약은 마셔지지 않은 채, 계속 달빛을 받았습니다.\n임금님은 후지산에서 약을 태웠고, 할아버지는 툇마루에서 달에 바쳤습니다.\n둘 다 공주님을 잊지 않기 위한, 저마다의 방식이었습니다.\n끝.'},

  /* ================= 할아버지와 할머니의 이야기 ================= */

  kj1:{art:'okina_take', text:'이것은 대나무 할아범과 할머니의, 그 뒤의 이야기입니다.\n공주님이 달로 돌아가고 한 달이 지났습니다.', next:'kj2'},
  kj2:{art:'kg_ato', text:'오늘은 무엇을 할까요?', choices:[
    {t:'공주님의 옷을 갠다', go:'kj2r', set:{takelife:'kimono'}},
    {t:'대숲을 걷는다', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? '대숲은 그날과 똑같이, 바람에 흔들리고 있었습니다.\n할아버지는 한동안 대나무 소리를 듣고 있었습니다.'
    : '할머니는 공주님의 옷을 정성스레 갰습니다.\n갰다가 펼치고, 다시 갰습니다.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'달이 뜬 밤. 두 사람은 공주님의 편지를 다시 한번 읽었습니다.\n"달이 뜨는 밤에는 올려다봐 주세요."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'올려다볼까요'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'할머니가 할아버지에게 말했습니다.\n두 사람은 어떻게 할까요.', choices:[
    {t:'툇마루에서 달을 올려다본다', go:'kjt1'},
    {t:'아침이 되면 대숲으로 간다', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'두 사람은 툇마루에 나란히 앉아 달을 올려다보았습니다.\n슬픔은 사라지지 않습니다.\n하지만 달빛은 툇마루까지 닿아 있었습니다.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'그 뒤로 두 사람은, 달이 뜬 밤이면 툇마루에 앉습니다.\n우는 밤도, 이야기하는 밤도, 말없이 있는 밤도 있습니다.\n달빛은 어느 밤에나 똑같이 닿았습니다.\n끝.'},
  kjk1:{art:'okina_take', text:'봄날 아침, 할아버지는 다시 대숲으로 갔습니다.\n빛나는 대나무는 이제 없습니다.\n그 대신, 여기저기에 죽순이 고개를 내밀고 있었습니다.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'……캘까'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'할아버지는 하나하나 죽순을 캤습니다.\n서두르지 않고, 누가 시킨 것도 아니라, 스스로 정해서.\n바구니가 가득 찰 무렵, 할머니가 도시락을 들고 왔습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 달의 사자의 이야기 ================= */

  ku1:{art:'tsuki_miyako', text:'이것은 달의 도읍에 사는 달의 사자의 이야기입니다.\n달의 도읍에는 눈물이 없습니다. 시름도 없습니다.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'오늘은 지상으로 내려가는 날. 무엇을 가져갈까요?', choices:[
    {t:'날개옷만', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'불사의 약도', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? '상자에 날개옷과 불사의 약 항아리를 넣었습니다.\n지상의 사람들은 이것을 원한다고 들었습니다.'
    : '상자에 날개옷을 넣었습니다.\n이것만 있으면, 공주님은 곧바로 달의 사람으로 돌아갈 수 있습니다.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'구름을 타고 내려가자, 집 주위에 많은 사람이 있었습니다.\n활을 들고, 이쪽을 노려보고 있습니다.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'할아버지가 무언가를 외치고 있습니다.\n사자에게는 그 말의 뜻이 이해되지 않았습니다.\n달에는 "돌려보내지 않겠다"라는 말이 없는 것입니다.', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'……눈물?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'공주님이 앞으로 나왔습니다.\n사자는 어떻게 할까요.', choices:[
    {t:'규칙대로 날개옷을 입힌다', go:'kun1'},
    {t:'공주님의 부탁을 들어준다', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'사자는 규칙대로 공주님에게 날개옷을 입혔습니다.\n하지만 할아버지의 젖은 얼굴을, 못 본 척할 수는 없었습니다.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'달로 돌아와서도, 사자는 그 얼굴을 떠올립니다.\n눈물이 없는 나라에서 처음으로, 눈물의 뜻을 알았습니다.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'달의 사자는 그 뒤로도 이따금 지상을 내려다봅니다.\n눈물을 모르는 나라에, 눈물을 아는 이가 한 명 생겼습니다.\n끝.'},
  kut1:{art:'kg_tegami', text:'"편지와 옷을 할아버지에게 전해 주세요."\n공주님의 부탁에 사자는 고개를 끄덕였습니다.\n달의 규칙에 그런 것은 없습니다. 하지만 지상의 예법이겠지요.', next:'kut2'},
  kut2:{art:'kg_ato', text:'사자는 할아버지 앞에 내려가, 편지와 옷을 정성스레 건넸습니다.\n할아버지는 그것을 꼭 끌어안았습니다.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'달의 도읍으로 돌아온 사자는 규칙에 한 줄을 덧붙였습니다.\n"지상에서 돌아오는 자는, 단 하나만은 두고 와도 좋다."\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_KO);

  T.ZK_EN.push(
    {section:'가구야 공주'},
    {id:'kg_seishi',  n:'달밤에는 올려다보며',        h:'처음 1회차에서 보는, 본래의 이야기'},
    {id:'kg_nokori',  n:'남은 나날',                  h:'임금님이 오기 전에 진실을 이야기하면…'},
    {id:'kg_koromo',  n:'날개옷을 입기 전에',         h:'날개옷을 입기 전에 뒤돌아보면…'},
    {id:'kg_kusuri',  n:'불사의 약',                  h:'약을 할아버지와 할머니에게 남기면…'},
    {id:'kj_tsukiyo', n:'달빛이 닿는 집',             h:'할아버지와 할머니의 이야기에서, 툇마루에서 올려다보면…'},
    {id:'kj_take',    n:'다시 대나무를 베러',         h:'할아버지와 할머니의 이야기에서, 아침에 대숲으로 가면…'},
    {id:'ku_namida',  n:'눈물을 모르는 나라',         h:'달의 사자의 이야기에서, 규칙대로 하면…'},
    {id:'ku_tegami',  n:'전언',                       h:'달의 사자의 이야기에서, 공주님의 부탁을 들어주면…'}
  );

})();
