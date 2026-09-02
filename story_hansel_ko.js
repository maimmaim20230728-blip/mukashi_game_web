"use strict";
/* Hansel and Gretel - Korean scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   The rhymes are rendered freshly in Korean from the PD Grimm original (KHM 15, 1857):
   "Knusper, knusper, Knäuschen, wer knuspert an meinem Häuschen?" / "Der Wind, der Wind, das himmlische Kind."
   / "Entchen, Entchen, ... nimm uns auf deinen weißen Rücken."
   No wording is taken from any existing Korean translation. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var HANSEL_KO = {

  /* ================= 헨젤과 그레텔 ================= */

  hg1:{art:'hg_ie', text:'이것은 커다란 숲 옆에 사는, 나무꾼 가족의 이야기입니다.\n헨젤과 그레텔 남매는\n아버지와 새어머니와 함께, 네 식구가 살고 있었습니다.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = '그해에는 온 나라에 흉년이 들었습니다.\n빵값은 오르고, 나무꾼 집의 먹을 것도 조금씩 줄어들었습니다.';
    if(f.first) return t;
    return t + '\n오늘 빵은 작은 것 하나뿐입니다. 어떻게 나눌까요?';
  }, choices:[
    {t:'넷이서 똑같이 나눈다', go:'hg2r', set:{hpan:'minna'}},
    {t:'헨젤이 동생에게 더 준다', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"나는 배가 안 고프니까."\n헨젤은 자기 몫을 살며시 그레텔의 접시에 올려놓았습니다.'
    : '작은 빵을 넷으로 나누어 다 같이 먹었습니다.\n"내일은 더 큰 빵을 살 수 있으면 좋겠구나."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'그날 밤, 두 사람은 새어머니의 목소리를 들었습니다.\n"내일 아침, 아이들을 숲속 깊은 곳으로 데려가서 거기에 두고 옵시다.\n그러지 않으면 네 사람 모두 굶고 맙니다."\n아버지는 몇 번이나 싫다고 말했습니다.\n하지만 마지막에는 말없이 고개를 끄덕였습니다.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = '그레텔은 울기 시작했습니다.\n"괜찮아. 나한테 좋은 생각이 있어."\n헨젤은 살며시 밖으로 나가, 달빛 속에서 하얀 조약돌을 주웠습니다.';
    if(f.first) return t + '\n주머니가 가득 찰 때까지.';
    return t + '\n어떤 조약돌을 주울까요?';
  }, choices:[
    {t:'동그랗고 하얀 조약돌', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'달빛에 가장 반짝이는 조약돌', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? '은빛으로 반짝이는 조약돌을 하나하나 살펴보며 골랐습니다.\n주머니가 가득 찰 때까지.'
    : '동그랗고 하얀 조약돌을, 주머니가 가득 찰 때까지.\n집에 돌아와서는 그레텔에게 속삭였습니다. "이제 괜찮아."', next:'hg5'},

  hg5:{art:'hg_mori', text:'다음 날 아침, 가족은 숲으로 떠났습니다.\n헨젤은 걸으면서 조약돌을 하나씩 떨어뜨렸습니다.\n숲속 깊은 곳에서 아버지는 모닥불을 피웠습니다.\n"여기서 쉬고 있으렴. 나중에 데리러 올 테니까."\n두 사람은 어느새 잠들어 버렸습니다.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'눈을 떠 보니 사방이 캄캄했습니다.\n그레텔은 울기 시작했습니다.\n"달이 뜰 때까지 기다리자." 하고 헨젤이 말했습니다.\n이윽고 숲 위로 달이 떠오르자……', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'조약돌이 반짝반짝!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'은처럼 반짝이는 조약돌이 점점이 집까지 이어져 있었습니다.\n두 사람은 손을 잡고 아침까지 걸어서 돌아갔습니다.', next:'hg8'},

  hg8:{art:'hg_ie', text:'아버지는 울면서 두 사람을 꼭 껴안았습니다.\n새어머니는 아무 말도 하지 않았습니다.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = '하지만 흉년은 계속되었습니다.\n어느 날 밤, 또 그 목소리가 들렸습니다.\n이번에는 문에 자물쇠가 걸려 있어서 밖으로 나갈 수 없었습니다.';
    if(f.first) return t + '\n헨젤은 아침에 받을 빵을 뜯어서 표시를 남기기로 했습니다.';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'아침에 빵을 뜯어서 표시를 남긴다', go:'hg10'},
    {t:'창문으로 살며시 빠져나가 조약돌을 줍는다', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'숲으로 가는 길에서 헨젤은 빵부스러기를 조금씩 떨어뜨렸습니다.\n이번에도 두 사람은 모닥불 옆에서 잠들어 버렸습니다.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'달이 떠올라도 빵부스러기는 하나도 없었습니다.\n숲의 새들이 모두 먹어 버린 것입니다.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'두 사람은 걸었습니다.\n하룻밤, 이틀 밤, 그리고 사흘째 아침.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'배는 고프고 다리는 지쳤습니다.\n그때, 나뭇가지 위에서 눈처럼 하얀 새가 노래하고 있었습니다.', next:'hg13'},

  hg13:{art:'hg_tori', text:'새는 두 사람 앞을 날며, 숲속 깊은 곳으로 더 깊은 곳으로 안내했습니다.\n그리고 탁 트인 곳으로 나오자……', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'과자로 만든 집!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = '빵으로 만든 벽, 과자로 만든 지붕, 투명한 설탕 창문.\n집이 통째로 먹을 것이었습니다.';
    if(f.first) return t + '\n헨젤은 지붕을, 그레텔은 창문을 정신없이 갉아 먹었습니다.';
    return t + '\n어디부터 먹을까요?';
  }, choices:[
    {t:'지붕의 과자', go:'hg14r', set:{hokashi:'yane'}},
    {t:'설탕 창문', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? '설탕 창문은 쨍 하고 깨져서 입안에서 녹아내렸습니다.\n"이렇게 맛있는 건 처음이야."'
    : '지붕의 과자에서는 꿀맛이 났습니다.\n"이렇게 맛있는 건 처음이야."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'바삭바삭, 바삭바삭.\n그때, 집 안에서 가느다란 목소리가 들려왔습니다.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'바삭바삭 바삭바삭, 갉아 먹는 건 누구지?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'두 사람은 대답했습니다.\n"바람이야, 바람이야. 하늘의 아이인 바람이야."\n그리고 다시 계속 먹었습니다.', next:'hg17'},

  hg17:{art:'hg_majo', text:'문이 열리고, 지팡이를 짚은 할머니가 나왔습니다.\n"어머나, 귀여운 손님들이구나. 어서 들어오렴."\n우유와 팬케이크, 사과와 호두.\n하얀 침대에서 두 사람은 푹 잠들었습니다.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'하지만 그 할머니는……'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'마녀였습니다.\n마녀는 눈이 빨개서 멀리 보지 못합니다.\n그 대신 짐승처럼 코가 밝습니다.\n아이가 가까이 오면 냄새로 알아차리는 것입니다.', next:'hg19'},

  hg19:{art:'hg_ori', text:'아침에 헨젤은 철창 안에 갇혔습니다.\n"살을 찌운 다음에 잡아먹어야지."\n그레텔은 물을 긷고 요리를 해야 했습니다.', next:'hg20'},

  hg20:{art:'hg_hone', text:'아침마다 마녀는 말했습니다.\n"손가락을 내밀어 보렴. 살이 좀 쪘느냐?"\n헨젤은 손가락 대신 작은 뼈다귀를 내밀었습니다.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'뼈다귀야!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'눈이 나쁜 마녀는 몇 번이나 속았습니다.\n4주가 지나자 마녀는 마침내 참지 못하게 되었습니다.\n"살이 안 쪘어도 내일 아침에 잡아먹겠다."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'마녀는 화덕에 불을 지폈습니다.\n"안에 들어가서 제대로 뜨거워졌는지 봐 다오."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'그레텔 대 마녀!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = '그레텔은 마녀의 속셈을 알아차렸습니다.';
    if(f.first) return t + '\n"어떻게 하는지 모르겠어요. 어떻게 들어가는 거예요?"';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'"어떻게 하는지 모르겠어요"라고 대답한다', go:'hg24'},
    {t:'철창 열쇠를 쥐고 달아난다', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"어리석은 아이로구나. 자, 이렇게 하는 거다."\n마녀가 스스로 화덕에 머리를 넣은 바로 그때.', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'쾅!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'그레텔은 마녀를 화덕에 밀어 넣고, 쇠문을 쾅 닫았습니다.\n마녀는 그것으로 끝이었습니다.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = '그레텔은 철창을 열었습니다.\n"헨젤, 이제 괜찮아!"\n집 안에는 진주와 보석 상자가 가득했습니다.';
    if(f.first) return t + '\n두 사람은 주머니 가득 보석을 채웠습니다.';
    return t + '\n무엇을 가지고 돌아갈까요?';
  }, choices:[
    {t:'보석을 주머니에 채운다', go:'hg27'},
    {t:'선반의 먹을 것을 자루에 담는다', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'숲을 걸어가자 커다란 물가가 나왔습니다.\n다리도 배도 없었습니다.\n그때 하얀 오리 한 마리가 헤엄쳐 왔습니다.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'오리야, 부탁해!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"오리야, 오리야. 여기 그레텔과 헨젤이 있어.\n다리도 배도 없단다. 하얀 등에 태워 줘."\n"둘이 함께는 무거워. 한 명씩 태워 달라고 하자."\n오리는 두 사람을 한 명씩 건너편 기슭으로 실어다 주었습니다.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'눈에 익은 숲을 빠져나오자 그리운 집이 보였습니다.\n아버지는 두 사람을 보고 울었습니다.\n새어머니는 더 이상 그곳에 없었습니다.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'주머니에서 쏟아진 진주와 보석을 보고, 아버지는 눈을 동그랗게 떴습니다.\n그때부터는 먹을 것이 모자라는 일도 없었습니다.\n세 사람은 언제까지나 사이좋게 살았습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 조약돌을 한 번 더 ---- */
  hk1:{art:'hg_koishi', text:'헨젤은 창문으로 살며시 빠져나가,\n달빛 속에서 하얀 조약돌을 주머니 가득 주웠습니다.', next:'hk2'},
  hk2:{art:'hg_mori', text:'다음 날, 숲속 깊은 곳에 남겨져도 두 사람은 당황하지 않았습니다.\n달이 떠오르자 조약돌이 반짝여, 집까지 이어졌습니다.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"두 번 다시 이런 일은 하지 않겠다."\n아버지는 두 사람 앞에서 약속했습니다.\n새어머니도 그날 밤에는 말없이 고개를 숙이고 있었습니다.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'그해 겨울, 집은 가난한 그대로였습니다.\n하지만 빵 하나를 넷이서 나누며 봄을 기다렸습니다.\n과자 집의 마녀와는 한 번도 마주치지 않았습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 강 건너편으로 ---- */
  hkw1:{art:'hg_kamado', text:'그레텔은 철창 열쇠를 쥐고 헨젤을 꺼냈습니다.\n"도망치자!"\n눈이 나쁜 마녀는 코를 킁킁거리며 쫓아왔습니다.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'물가에 다다르니 하얀 오리가 있었습니다.\n"한 명씩! 무거우면 가라앉아 버려."\n오리는 그레텔을, 그다음에 헨젤을 실어다 주었습니다.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'마녀도 기슭에 다다랐습니다.\n"오리야, 나도 태워 다오."\n하지만 마녀는 너무 무거워서, 오리는 꿈쩍도 하지 않았습니다.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'강 건너편에서 마녀는 발만 동동 굴렀습니다.\n두 사람은 손을 잡고 집으로 돌아갔습니다.\n아무도 화덕에 들어가지 않았고, 아무도 잡아먹히지 않았습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 마을의 겨울 ---- */
  hgm1:{art:'hg_takara', text:'그레텔은 선반을 보았습니다.\n밀가루, 꿀, 호두, 사과.\n"보석보다 이게 좋아."\n두 사람은 자루에 먹을 것을 가득 채웠습니다.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'무거운 자루를 안고 물가로.\n하얀 오리가 두 사람과 자루를 하나씩 건너편 기슭으로 실어다 주었습니다.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'마을에서는 아직 흉년이 계속되고 있었습니다.\n두 사람은 가지고 온 먹을 것을 온 마을에 나누었습니다.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'과자 집의 밀가루는 그해 겨울, 마을의 빵이 되었습니다.\n봄이 와서 밭에 싹이 돋을 때까지, 아무도 배를 곯지 않았습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 마녀의 이야기 ================= */

  hw1:{art:'majo_daidokoro', text:'이것은 숲속 깊은 곳에 사는 한 마녀의 이야기입니다.\n마녀는 날마다 빵을 굽고 과자를 만들어,\n그것으로 벽과 지붕을 만들며 집을 계속 지었습니다.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'오늘은 무엇을 구울까요?', choices:[
    {t:'달콤한 쿠키', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'호두 빵', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? '호두 빵이 노릇노릇 구워졌습니다.\n하지만 먹어 줄 사람은 아무도 없습니다.\n마녀는 그것을 벽에 쌓았습니다.'
    : '달콤한 쿠키가 바삭바삭하게 구워졌습니다.\n하지만 먹어 줄 사람은 아무도 없습니다.\n마녀는 그것을 지붕에 늘어놓았습니다.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'어느 날, 바삭바삭 소리가 났습니다.\n누군가가 집을 갉아 먹고 있는 것입니다.\n마녀의 빨간 눈은 멀리 보지 못합니다.\n코만이 아이의 냄새를 맡아냈습니다.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'바삭바삭 갉아 먹는 건 누구지?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"바람이야, 하늘의 아이인 바람이야."\n귀여운 목소리가 대답했습니다.\n마녀는 문을 열었습니다. 자, 이제……', choices:[
    {t:'살을 찌워서 잡아먹자', go:'hwm1'},
    {t:'맛있는 음식을 대접하자', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'식탁에는 갓 구운 빵과 우유.\n두 사람은 "맛있어", "맛있어" 하고 몇 번이나 말했습니다.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'……맛있어?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'마녀는 아주 오랫동안 그 말을 들어 보지 못했습니다.\n자기가 만든 것을 누군가가 먹어 준다.\n마녀는 남몰래 울었습니다.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'그때부터 과자 집에는 이따금 손님이 옵니다.\n마녀는 지금도 빵을 굽고 과자를 만듭니다.\n이번에는 먹어 줄 사람을 위해서.\n그리고 모두 행복하게 살았습니다.'},

  hwm1:{art:'hg_ori', text:'헨젤을 철창에 넣고, 아침마다 "손가락을 내밀어 보렴."\n하지만 마녀의 눈은 뼈다귀와 손가락을 구별하지 못합니다.\n"아직도 가늘구나……"', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'어째서 살이 안 찌는 거야!?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'참지 못한 마녀는 화덕에 불을 지폈습니다.\n"제대로 뜨거워졌는지 봐 다오."\n"어떻게 하는지 모르겠어요." 하고 그레텔이 말했습니다.\n마녀는 스스로 머리를 들이밀었습니다.\n……아무것도 보이지 않습니다.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"캄캄하구나! 누가 문 좀 잡아 다오!"\n마녀가 꼼지락거리는 사이에 두 사람은 도망쳤습니다.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'화덕에서 기어 나온 마녀는 마음을 정했습니다.\n"안경을 사야겠다."\n다음 날 아침, 마녀는 지팡이를 짚고 마을로 나갔습니다.\n안경을 쓴 마녀가 무엇을 보았는지는 또 다른 이야기.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 하얀 새의 이야기 ================= */

  hb1:{art:'tori_sora', text:'이것은 숲에 사는, 눈처럼 하얀 새의 이야기입니다.\n어느 날 아침, 숲길에 빵부스러기가 흩어져 떨어져 있었습니다.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'맛있어 보이는 빵부스러기. 어떻게 할까요?', choices:[
    {t:'하나만 먹는다', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'배부르게 먹는다', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? '하나만 먹을 생각이었습니다.\n하지만 동료 새들도 몰려와, 빵부스러기는 전부 없어졌습니다.'
    : '동료 새들도 몰려와, 빵부스러기는 순식간에 없어졌습니다.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'그날 밤, 새는 보았습니다.\n두 아이가 무언가를 찾으며 숲을 헤매고 있는 것을.\n"저건…… 우리가 먹은 빵부스러기."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'내 탓이야'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'새는 생각했습니다.\n지금 자기가 할 수 있는 일은 무엇일까.', choices:[
    {t:'하늘에서 돌아갈 길을 찾아 안내한다', go:'hbp1'},
    {t:'과자 집에 대해 노래로 알린다', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'새는 높이 날아올랐습니다.\n위에서 보니 나무꾼의 집은 바로 저기였습니다.\n새는 두 사람 앞을 낮게 날며 길을 안내했습니다.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"저 새, 따라오라고 하는 것 같아."\n두 사람은 새의 뒤를 따라 걸었습니다.\n숲을 빠져나오자 그리운 집의 연기가 보였습니다.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'빵부스러기를 먹은 새는\n그 대신 돌아갈 길을 두 사람에게 돌려주었습니다.\n갚는 일은, 할 수 있는 것부터.\n그리고 모두 행복하게 살았습니다.'},

  hbu1:{art:'hg_tori', text:'새는 알고 있었습니다.\n숲속 깊은 곳의 과자 집. 그 주인에 대해서도.\n새는 나뭇가지에 앉아 노래했습니다.\n"벽은 갉아 먹어도, 안에는 들어가지 마."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'안에는 들어가면 안 돼!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'두 사람은 노래의 뜻을 알아차렸습니다.\n벽을 조금 갉아 먹어 배를 채우고는,\n문이 열려도 안에는 들어가지 않고 숲길로 돌아갔습니다.\n하얀 새가 집 쪽으로 날아갑니다.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'과자 집을 알고 있는 새는\n그 뒤로도 나뭇가지에서 계속 노래했습니다.\n숲에서 길을 잃은 아이에게 전하는, 알림의 노래.\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_KO);

  T.ZK_EN.push(
    {section:'헨젤과 그레텔'},
    {id:'hg_seishi',  n:'하얀 오리의 귀갓길',     h:'맨 처음 1회차의, 원래 이야기'},
    {id:'hg_koishi',  n:'조약돌을 한 번 더',      h:'두 번째 밤, 창문으로 빠져나가면…'},
    {id:'hg_kawa',    n:'강 건너편으로',          h:'화덕 앞에서 도망치는 쪽을 고르면…'},
    {id:'hg_mura',    n:'마을의 겨울',            h:'보석 대신 먹을 것을 가지고 돌아가면…'},
    {id:'hw_okyaku',  n:'첫 손님',                h:'마녀의 이야기에서 음식을 대접하면…'},
    {id:'hw_megane',  n:'빨간 눈과 안경',         h:'마녀의 이야기에서 살을 찌우려고 하면…'},
    {id:'hb_pankuzu', n:'빵부스러기를 먹은 건',   h:'하얀 새의 이야기에서 하늘에서 안내하면…'},
    {id:'hb_uta',     n:'노래로 알리다',          h:'하얀 새의 이야기에서 노래로 알리면…'}
  );

})();
