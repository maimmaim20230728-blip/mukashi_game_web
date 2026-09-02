"use strict";
/* 알리바바와 40인의 도둑 - Korean scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var ALIBABA_KO = {

  /* ================= 알리바바와 40인의 도둑 ================= */

  ab1:{art:'ab_mori', text:'이것은 페르시아의 마을에 살던 알리바바의 이야기입니다.\n알리바바는 가난한 나무꾼이었습니다.\n날마다 당나귀 2마리를 데리고 숲으로 땔감을 하러 갑니다.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = '오늘도 알리바바는 숲에서 땔감을 모으고 있었습니다.';
    if(f.first) return t;
    return t + '\n땔감을 얼마나 모을까요?';
  }, choices:[
    {t:'2다발만 모으고 일찍 돌아간다', go:'ab2r', set:{ablife:'futa'}},
    {t:'4다발을 모으고 천천히 돌아간다', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? '4다발의 땔감을 당나귀 등에 실었습니다.\n오늘은 천천히 돌아갈 생각이었습니다.'
    : '2다발의 땔감을 당나귀 등에 실었습니다.\n오늘은 일찍 돌아갈 생각이었습니다.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'그때 말발굽 소리가 들려왔습니다.\n알리바바는 나무 위에 숨었습니다.\n남자들 40명이 커다란 바위 앞에 모였습니다.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40명……'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'맨 앞의 남자가 바위를 향해 말했습니다.\n"열려라, 참깨!"\n그러자 바위가 소리를 내며 열렸습니다.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'열려라, 참깨!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'남자들은 안으로 들어갔습니다.\n한참 뒤에 나오더니, "닫혀라, 참깨!"\n바위는 닫히고, 남자들은 가 버렸습니다.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'알리바바는 나무에서 내려와 바위 앞에 섰습니다.\n"열려라, 참깨!"\n바위가 열리고, 안은 금화와 보물로 가득했습니다.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'보물의 빛'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'알리바바는 금화를 자루에 담아 당나귀에 실었습니다.\n가지고 돌아갈 수 있는 만큼만입니다.\n"닫혀라, 참깨!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'집에 돌아온 알리바바는 아내에게 이야기했습니다.\n두 사람은 금화를 세어 보려 했지만, 너무 많아서 셀 수 없었습니다.\n"형님 댁에서 되를 빌려 옵시다."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'형인 카심은 돈 많은 상인이었습니다.\n카심의 아내는 되 바닥에 몰래 기름을 발라 두었습니다.\n돌아온 되 바닥에 금화가 1닢 붙어 있었습니다.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'카심은 알리바바에게 물었습니다.\n알리바바는 바위 이야기도, 주문 이야기도, 모두 들려주었습니다.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'다음 날 아침, 카심은 당나귀 10마리를 데리고 바위로 갔습니다.\n"열려라, 참깨!"\n바위는 열렸습니다.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'열려라, 참깨!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'카심은 자루에 금화를 담았습니다.\n그런데 밖으로 나가려 할 때, 주문을 잊어버렸습니다.\n"열려라, 보리!" "열려라, 콩!"\n바위는 열리지 않았습니다.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = '그날 밤, 카심은 돌아오지 않았습니다.\n카심의 아내가 알리바바의 집에 와서 울었습니다.';
    if(f.first) return t;
    return t + '\n알리바바는 어떻게 할까요?';
  }, choices:[
    {t:'아침까지 기다린다', go:'ab14'},
    {t:'밤중에 바위로 간다', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'아침에 알리바바는 바위로 갔습니다.\n"열려라, 참깨!"\n안은 조용했습니다. 도둑들이 먼저 돌아와 있었던 것입니다.\n카심은 이제 움직이지 않았습니다.\n알리바바는 형을 당나귀에 싣고, 조용히 집으로 옮겼습니다.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'알리바바의 집에는 모르지아나라는 하녀가 있었습니다.\n무엇이든 잘 알아차리는 사람입니다.\n장례 준비를 위해 모르지아나는 마을의 구두 고치는 할아버지를 불렀습니다.\n길을 기억하지 못하도록 눈을 가리고 집까지 안내했습니다.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'눈가리개를 해 주세요'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'바위로 돌아온 도둑들은 카심이 없어진 것을 알아차렸습니다.\n"누군가 또 알고 있다."\n두목은 한 사람을 마을로 보냈습니다.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'도둑은 구두 고치는 할아버지를 찾아냈습니다.\n할아버지는 눈을 가린 채로, 발로 길을 떠올렸습니다.\n그리고 도둑은 알리바바의 집 문에 하얀 표시를 했습니다.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'모르지아나는 그 표시를 알아차렸습니다.\n그리고 옆집에도, 그 옆집에도, 똑같은 표시를 했습니다.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'표시는 여기저기에!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'도둑들이 와도, 어느 집인지 알 수 없었습니다.\n두목은 자기가 직접 가기로 했습니다.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'두목은 기름 장수로 모습을 바꾸었습니다.\n당나귀 19마리에, 커다란 항아리가 38개.\n기름이 들어 있는 것은 1개뿐이고, 나머지에는 도둑이 한 사람씩 숨어 있었습니다.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"떠돌이 기름 장수입니다. 하룻밤 묵게 해 주십시오."\n알리바바는 친절하게 묵게 해 주었습니다.\n항아리는 안뜰에 늘어놓였습니다.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'……밤이 되면'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'밤에 모르지아나는 등잔 기름이 떨어져서, 안뜰의 항아리에서 얻으려고 했습니다.\n그러자 항아리 안에서 목소리가 들렸습니다.\n"이제 시간인가?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'……항아리 안에 사람이 있다'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = '모르지아나는 낮은 목소리로 대답했습니다.\n"아직이다."\n그리고 37개의 항아리를 모두 확인했습니다.';
    if(f.first) return t;
    return t + '\n모르지아나는 어떻게 할까요?';
  }, choices:[
    {t:'기름을 끓인다', go:'ab24'},
    {t:'밧줄을 가져와서 관리를 부른다', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'모르지아나는 커다란 솥에 기름을 끓였습니다.\n그리고 항아리 하나하나에 끓는 기름을 부었습니다.\n항아리 안은 조용해졌습니다.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'한밤중에 두목이 안뜰로 나와 항아리를 두드렸습니다.\n대답은 없었습니다.\n두목은 혼자서 달아났습니다.', next:'ab26'},

  ab26:{art:'ab_ie', text:'아침에 모르지아나는 알리바바에게 모두 이야기했습니다.\n알리바바는 모르지아나에게 말했습니다.\n"오늘부터 당신은 자유의 몸입니다."', next:'ab27'},

  ab27:{art:'ab_odori', text:'며칠이 지나, 두목은 상인의 모습으로 다시 찾아왔습니다.\n알리바바의 아들과 친해져서, 집에 초대받은 것입니다.\n모르지아나는 그 얼굴을 기억하고 있었습니다.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'이 얼굴, 기억하고 있다'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = '식사 뒤에 모르지아나는 춤을 보여 주었습니다.\n허리띠에는 단검이 꽂혀 있습니다.';
    if(f.first) return t;
    return t + '\n모르지아나는 어떻게 할까요?';
  }, choices:[
    {t:'춤의 마지막까지 춘다', go:'ab29'},
    {t:'춤을 멈추고, 표시에 대해 말한다', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'춤의 마지막에, 모르지아나는 상인 앞에서 멈췄습니다.\n두목은 쓰러졌습니다.\n놀란 알리바바에게 모르지아나는 조용히 말했습니다.\n"이 사람은 그 두목입니다."', next:'ab30'},

  ab30:{art:'ab_owari', text:'알리바바는 모르지아나에게 말했습니다.\n"당신은 이제 자유의 몸입니다. 앞으로 어떻게 할지는 당신이 정해도 됩니다."\n모르지아나는 잠시 생각하고 대답했습니다.\n"여기에 있겠습니다. 이 집의 사람이 되겠습니다."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'그 뒤 모르지아나는 알리바바의 아들과 부부가 되어, 이 집의 사람이 되었습니다.\n바위의 보물은 검소하게 썼습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 형을 데리러 ---- */
  abn1:{art:'ab_yoru_hakobu', text:'알리바바는 밤중에 당나귀를 끌고 바위로 갔습니다.\n"열려라, 참깨!"\n안쪽 깊은 곳에 카심이 떨면서 앉아 있었습니다.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"주문을 잊어버렸다…… 참깨, 참깨였구나."\n알리바바는 형을 당나귀에 태우고 집으로 데리고 돌아왔습니다.\n금화는 한 자루만 가지고.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'형은 무사했습니다.\n주문에 대한 것은 두 사람만의 비밀로 했습니다.\n도둑들은 금화가 줄어든 것을 알아차렸지만, 누가 한 일인지는 알지 못했습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 밧줄과 관리 ---- */
  abr1:{art:'ab_abura', text:'모르지아나는 밧줄을 가져왔습니다.\n항아리 뚜껑을 밖에서 하나하나 묶었습니다.\n그러고 나서 마을의 관리를 부르러 달려갔습니다.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'관리들이 와서 37개의 항아리를 열었습니다.\n도둑들은 한 사람씩 밧줄에 묶여 끌려갔습니다.\n두목은 그 틈에 달아났습니다.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'두목은 그 뒤로 마을에 나타나지 않았습니다.\n알리바바는 모르지아나에게 말했습니다. "당신은 이제 자유의 몸입니다."\n바위의 보물은 검소하게 썼습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 두목은 달아났다 ---- */
  abg1:{art:'ab_odori', text:'모르지아나는 춤을 멈추고 상인 앞에 섰습니다.\n"당신이 남긴 표시를 늘린 것은 저입니다."\n상인의 얼굴빛이 변했습니다.', next:'abg2'},
  abg2:{art:'ab_odori', text:'두목은 아무 말도 하지 않고 일어나, 밤의 마을로 달아났습니다.\n그 뒤로 페르시아의 마을에는 돌아오지 않았습니다.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'알리바바는 모르지아나에게 말했습니다.\n"당신은 이제 자유의 몸입니다. 앞으로 어떻게 할지는 당신이 정해도 됩니다."\n모르지아나는 "여기에 있겠습니다"라고 대답했습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 모르지아나의 이야기 ================= */

  am1:{art:'am_daidokoro', text:'이것은 모르지아나라는 하녀의 이야기입니다.\n알리바바의 집에서 일하고 있었습니다.\n무엇이든 잘 알아차리는 사람이라는 말을 들었습니다.', next:'am2'},
  am2:{art:'am_daidokoro', text:'아침입니다. 무엇부터 시작할까요?', choices:[
    {t:'빵을 굽는다', go:'am2r', set:{amlife:'pan'}},
    {t:'물을 긷는다', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? '모르지아나는 우물에서 물을 길어 항아리를 가득 채웠습니다.\n집안일이라면 무엇이든 알고 있습니다.'
    : '모르지아나는 화덕에 불을 지펴 빵을 구웠습니다.\n집안일이라면 무엇이든 알고 있습니다.', next:'am3'},
  am3:{art:'ab_shirushi', text:'어느 아침, 문에 하얀 표시가 붙어 있는 것을 발견했습니다.\n(누군가 이 집을 기억하려 하고 있다)\n모르지아나는 옆집에도 표시를 했습니다.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'표시는 늘리면 된다'}, then:'am4'},
  am4:{art:'ab_abura', text:'기름 장수가 온 밤. 항아리 안에서 목소리가 들렸습니다.\n모르지아나는 어떻게 할까요?', choices:[
    {t:'기름을 끓인다', go:'am4r', set:{amhow:'abura'}},
    {t:'밧줄로 묶고, 관리를 부른다', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? '모르지아나는 항아리 뚜껑을 묶고, 관리를 불렀습니다.\n도둑들은 끌려갔습니다.'
    : '모르지아나는 기름을 끓여 항아리에 부었습니다.\n항아리 안은 조용해졌습니다.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'모든 것이 끝난 아침, 알리바바는 말했습니다.\n"당신은 이제 자유의 몸입니다. 어떻게 할지는 당신이 정해도 됩니다."\n모르지아나는 어떻게 할까요?', choices:[
    {t:'이 집에 남는다', go:'ami1'},
    {t:'길을 떠난다', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'모르지아나는 한 번 문밖으로 나갔습니다.\n마을을 걷고, 시장을 보고, 강을 보았습니다.\n그러고 나서 자기 발로 집에 돌아왔습니다.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"여기가 제가 고른 집입니다."\n하녀로서가 아니라, 이 집의 사람으로서.\n그리고 모두 행복하게 살았습니다.'},
  amt1:{art:'am_michi', text:'모르지아나는 자루 하나를 들고 문밖으로 나갔습니다.\n알리바바는 붙잡지 않았습니다.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'모르지아나가 어디로 갔는지는 이 이야기에 쓰여 있지 않습니다.\n가는 곳은 모르지아나만이 알고 있습니다.\n끝.'},

  /* ================= 도둑 두목의 이야기 ================= */

  at1:{art:'at_dokutsu_kara', text:'이것은 도둑 두목의 이야기입니다.\n40명이서 바위 안에 보물을 모아 두었습니다.\n어느 날, 보물이 줄어든 것을 알아차렸습니다.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'두목은 무엇을 살펴볼까요?', choices:[
    {t:'바위 앞의 발자국', go:'at2r', set:{atlife:'ashi'}},
    {t:'당나귀의 발자국', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? '바위 앞에 당나귀의 발자국이 남아 있었습니다.\n마을의 누군가입니다.'
    : '바위 앞에 작은 발자국이 남아 있었습니다.\n동료의 것은 아닙니다.', next:'at3'},
  at3:{art:'ab_iwa', text:'(보물을 빼앗긴 것보다, 바위의 비밀을 들킨 것이 두려웠다)\n두목은 마을로 사람을 보냈습니다.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'비밀은 하나면 된다'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'항아리 작전은 실패했습니다.\n동료는 이제 한 사람도 없습니다.\n두목은 어떻게 할까요?', choices:[
    {t:'보물을 두고 멀리 떠난다', go:'ato1'},
    {t:'한 번 더, 그 집으로', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'두목은 바위 앞에 섰습니다.\n"닫혀라, 참깨."\n그리고 뒤돌아보지 않고 걷기 시작했습니다.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'보물은 바위 안에 남았습니다.\n두목이 어디로 갔는지는 아무도 모릅니다.\n끝.'},
  ath1:{art:'ab_odori', text:'두목은 상인의 모습으로 그 집에 갔습니다.\n춤의 마지막에, 하녀가 앞에 섰습니다.\n(이 사람은 처음부터 알고 있었다)\n두목은 아무것도 하지 않고 집을 나왔습니다.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'비밀은 이제 비밀이 아니었습니다.\n두목은 그것을 받아들이고 마을을 떠났습니다.\n두려웠던 것은 보물을 잃는 것이 아니라, 알려진 것이었습니다.\n끝.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_KO);

  T.ZK_EN.push(
    {section:'알리바바와 40인의 도둑', note:'아라비아 말로 쓰인 오래된 책에는 이 이야기가 없습니다. 300년쯤 전에 프랑스 사람이 시리아의 이야기꾼에게 듣고 적어 두었습니다. "알라딘"과는 다른 이야기입니다. 모르지아나는 원래 이야기에서는 노예이고, 마지막에 자유의 몸이 됩니다.'},
    {id:'ab_seishi',  n:'열려라, 참깨',        h:'처음 1회째에 만나는, 전해 내려오는 이야기'},
    {id:'ab_ani',     n:'형을 데리러',          h:'카심이 돌아오지 않는 밤에 바위로 가면…'},
    {id:'ab_rouya',   n:'밧줄과 관리',          h:'항아리의 밤에 기름을 끓이지 않으면…'},
    {id:'ab_nigeta',  n:'두목은 달아났다',      h:'춤을 멈추고 표시에 대해 말하면…'},
    {id:'am_ie',      n:'스스로 고른 집',       h:'모르지아나의 이야기에서 집에 남으면…'},
    {id:'am_tabi',    n:'문밖으로',             h:'모르지아나의 이야기에서 길을 떠나면…'},
    {id:'at_oite',    n:'보물을 두고',          h:'두목의 이야기에서 멀리 떠나면…'},
    {id:'at_himitsu', n:'비밀은 하나',          h:'두목의 이야기에서 한 번 더 그 집으로 가면…'}
  );

})();
