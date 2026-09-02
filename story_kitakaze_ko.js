"use strict";
/* 북풍과 태양 - Korean scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Korean wording is original;
   no existing Korean translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var KITAKAZE_KO = {

  /* ================= 북풍과 태양 ================= */

  kz1:{art:'kz_sora', text:'이것은 북풍과 태양의 이야기입니다.\n어느 날, 하늘 위에서 북풍과 태양이 말다툼을 하고 있었습니다.\n"내가 더 세다." "아니, 내가 더 세다."', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'어느 쪽이 더 셀까?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = '그날 아침, 한 나그네가 마을을 나와 길을 걷기 시작했습니다.\n겉옷을 입고, 자루를 어깨에 메고서.';
    if(f.first) return t;
    return t + '\n자루에 무엇을 넣어 갈까요?';
  }, choices:[
    {t:'물통', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'빵과 사과', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? '자루 속에는 빵과 사과, 그리고 겉옷 한 벌 더.\n긴 길이 될 것 같습니다.'
    : '자루 속에는 물통, 그리고 겉옷 한 벌 더.\n긴 길이 될 것 같습니다.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = '북풍과 태양은 그 나그네를 발견했습니다.\n"저 나그네의 겉옷을 벗기는 쪽이 더 센 걸로 하자."';
    if(f.first) return t + '\n먼저, 북풍의 차례입니다.';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'겨룬다. 먼저 북풍의 차례', go:'kz4'},
    {t:'겨루기를 그만두고, 함께 해 본다', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'북풍은 처음부터 세게 불었습니다.\n휭!\n나그네는 겉옷의 깃을 붙잡았습니다.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'휭!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'북풍은 더 세게 불었습니다.\n휭휭!\n나그네는 겉옷을 두 손으로 꼭 붙잡았습니다.\n"춥다. 한 벌 더 입어야겠다."\n자루에서 한 벌을 더 꺼내, 겹쳐 입었습니다.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'휭휭!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'춥다……'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'북풍은 있는 힘을 다해 불었습니다.\n나뭇잎이 날리고, 길의 모래가 흩날렸습니다.\n그래도 나그네는 겉옷을 놓지 않았습니다.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'휘이이이잉!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = '북풍은 지쳐 버렸습니다.';
    if(f.first) return t + '\n"태양, 다음은 부탁한다."\n북풍은 나그네를 태양에게 넘겼습니다.';
    return t + '\n북풍은 어떻게 할까요?';
  }, choices:[
    {t:'"태양, 다음은 부탁한다"', go:'kzc_kao_kk'},
    {t:'구름을 불러온다', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'다음은 부탁한다'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'태양은 처음에는 적당히 비추었습니다.\n포근포근.\n나그네는 겹쳐 입은 겉옷을 한 벌 벗어, 자루에 넣었습니다.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'포근포근……'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = '태양은 더 세게 비추었습니다.\n쨍쨍.\n나그네는 땀을 흘리기 시작했습니다.';
    if(f.first) return t;
    return t + '\n나그네는 어떻게 할까요?';
  }, choices:[
    {t:'그대로 걷는다', go:'kzc_poka2'},
    {t:'나무 그늘로 들어간다', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'쨍쨍!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'태양은 한층 더 세게 비추었습니다.\n"덥다. 더워서 견딜 수가 없다."\n나그네는 겉옷을 모두 벗어, 어깨에 걸쳤습니다.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'길가에 강이 흐르고 있었습니다.\n나그네는 겉옷을 강가에 두고, 강으로 뛰어들었습니다.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'첨벙!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'나그네는 기분 좋은 듯이 멱을 감았습니다.\n하늘 위에서 북풍과 태양은 그것을 보고 있었습니다.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'나그네는 승부가 있었다는 것을 모릅니다.\n겉옷을 강가에서 말리고, 다시 걸어갔습니다.\n끝.'},

  /* ---- 둘이 만든 빨래 날 ---- */
  kzf1:{art:'kz_sentaku', text:'"겨루기는 그만두고, 함께 해 보자."\n북풍이 불고, 태양이 비추었습니다.\n마을의 빨래가 점심 전에 모두 말랐습니다.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'나그네는 겉옷을 입은 채로, 기분 좋게 걸어갔습니다.\n바람은 시원하고, 햇볕은 따뜻하게.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'마을 사람들은 그날을 "빨래하기 좋은 날"이라고 불렀습니다.\n어느 쪽이 더 센지는 아무도 정하지 않았습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 나무 그늘에서 쉬기 ---- */
  kzk1:{art:'kz_kokage', text:'나그네는 큰 나무의 그늘로 들어가, 자리에 앉았습니다.\n겉옷은 입은 그대로입니다.\n물을 마시고, 잠시 쉽니다.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'해가 기울어, 시원해졌습니다.\n나그네는 겉옷을 입은 채로, 다시 걷기 시작했습니다.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'하늘 위에서 북풍과 태양은 서로 얼굴을 마주 보았습니다.\n승부는 나지 않았습니다.\n끝.'},

  /* ---- 구름이 와서 ---- */
  kzu1:{art:'kz_kumo', text:'북풍은 구름을 불러왔습니다.\n하늘이 어두워지고, 비가 내리기 시작했습니다.\n나그네는 나무 아래에서 비를 피했습니다.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'비가 그치자, 나그네는 다시 걷기 시작했습니다.\n겉옷은 입은 그대로입니다.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'"오늘은 여기까지 하자"라고 태양이 말했습니다.\n"다음에 또"라고 북풍이 말했습니다.\n끝.'},

  /* ================= 북풍의 이야기 ================= */

  kk1:{art:'kz_sora', text:'이것은 북풍의 이야기입니다.\n북풍은 북쪽 바다에서 불어옵니다.\n세게 부는 것이 북풍의 일입니다.', next:'kk2'},
  kk2:{art:'kk_umi', text:'오늘은 어디로 가서 불까요?', choices:[
    {t:'바다로', go:'kk2r', set:{kklife:'umi'}},
    {t:'들판으로', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? '북풍은 들판을 한 번 불었습니다.\n풀이 일제히 같은 쪽을 향했습니다.'
    : '북풍은 바다 위를 한 번 불었습니다.\n하얀 물결이 일제히 일었습니다.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'나그네의 겉옷을 벗기는 승부는 잘되지 않았습니다.\n북풍은 조금 지쳐서, 하늘 높은 곳에서 쉬었습니다.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'부는 건 자신 있는데'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'하늘에서 아래를 내려다보면, 여러 가지가 보입니다.\n북풍은 어디로 갈까요?', choices:[
    {t:'항구의 배가 있는 곳으로', go:'kkh1'},
    {t:'들판의 꽃이 있는 곳으로', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'항구에 움직이지 못하는 배가 있었습니다.\n바람이 없어서, 돛이 축 늘어져 있습니다.\n북풍은 돛을 향해, 살며시 불었습니다.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'돛이 부풀고, 배는 바다로 나아갔습니다.\n뱃사람들이 하늘을 향해 손을 흔들었습니다.\n그리고 모두 행복하게 살았습니다.'},
  kkt1:{art:'kk_nohara', text:'들판의 꽃은 씨앗을 맺고 있었습니다.\n북풍은 씨앗을 실어, 멀리까지 옮겼습니다.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'다음 봄, 멀리 있는 언덕에 같은 꽃이 피었습니다.\n북풍이 옮긴 씨앗입니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 태양의 이야기 ================= */

  kh1:{art:'kz_sora', text:'이것은 태양의 이야기입니다.\n태양은 아침에 동쪽에서 떠올라, 저녁에 서쪽으로 집니다.\n비추는 것이 태양의 일입니다.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'오늘 아침은 무엇을 가장 먼저 비출까요?', choices:[
    {t:'밭', go:'kh2r', set:{khlife:'hatake'}},
    {t:'마을의 지붕', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? '태양은 마을의 지붕을 비추었습니다.\n지붕 위의 고양이가 기지개를 켰습니다.'
    : '태양은 밭을 비추었습니다.\n이슬이 반짝이고, 새싹이 자랐습니다.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'나그네의 승부가 있던 날, 태양은 여느 때보다 세게 비추었습니다.\n나그네는 강에 뛰어들었지만, 밭의 흙은 말라서 갈라졌습니다.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'너무 세게 비추었는지도 모른다'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'태양은 어떻게 할까요?', choices:[
    {t:'구름에게 그늘을 부탁한다', go:'khk1'},
    {t:'질 때까지 계속 비춘다', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'태양은 지나가던 구름에게 부탁했습니다.\n"밭 위에 그늘을 조금 만들어 주지 않겠니?"\n구름은 밭 위에서 멈추어 섰습니다.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'밭은 그늘에서 한숨 돌렸습니다.\n태양에게도 할 수 없는 일이 있습니다.\n구름에게 부탁한 날의 일을, 태양은 잊지 않았습니다.\n그리고 모두 행복하게 살았습니다.'},
  khy1:{art:'kh_yuuhi', text:'태양은 서쪽 산으로 질 때까지 계속 비추었습니다.\n나그네의 등이 멀리 있는 언덕을 넘어가는 것이 보였습니다.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'나그네가 겉옷을 입었는지 벗었는지, 태양에게는 이제 보이지 않습니다.\n태양은 내일도 떠오릅니다.\n끝.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_KO);

  T.ZK_EN.push(
    {section:'북풍과 태양', note:'그리스의 오래된 책에서는, 이 이야기는 나그네가 강에서 멱을 감으며 끝납니다. 어느 쪽이 이겼는지는 책에 쓰여 있지 않습니다. "많은 경우, 설득은 힘보다 잘 통한다"라는 말은 나중에 덧붙여진 것입니다. 읽는 방법은 하나가 아닙니다.'},
    {id:'kz_seishi', n:'강에서 멱감기',        h:'맨 처음 1회차에 만나는, 전해 내려오는 이야기'},
    {id:'kz_kokage', n:'나무 그늘에서 쉬기',   h:'태양의 차례에 나무 그늘로 들어가면……'},
    {id:'kz_futari', n:'둘이 만든 빨래 날',    h:'겨루기를 그만두고, 함께 해 보면……'},
    {id:'kz_kumo',   n:'구름이 와서',          h:'북풍이 구름을 불러오면……'},
    {id:'kk_ho',     n:'돛을 부풀려서',        h:'북풍의 이야기에서 항구로 가면……'},
    {id:'kk_tane',   n:'씨앗을 옮기다',        h:'북풍의 이야기에서 들판으로 가면……'},
    {id:'kh_kumo',   n:'구름에게 부탁하다',    h:'태양의 이야기에서 구름에게 부탁하면……'},
    {id:'kh_yuuhi',  n:'질 때까지',            h:'태양의 이야기에서 질 때까지 비추면……'}
  );

})();
