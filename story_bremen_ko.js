"use strict";
/* 브레멘 음악대 - Korean scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   정형구(브레멘 음악대 / 무엇이든 죽는 것보다는 나아 / 수탉의 울음소리 /
   마지막으로 들려준 사람의 입은 아직 따뜻하다)는 기존 번역서를 따르지 않고 직접 옮겼습니다.
   동물에게 고유한 이름은 붙이지 않습니다. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var BREMEN_KO = {

  /* ================= 브레멘 음악대 ================= */

  br1:{art:'br_koya', text:'이것은 한 주인 밑에서 오랫동안 일한 당나귀의 이야기입니다.\n당나귀는 방앗간에서 밀가루 자루를 계속 날랐습니다.\n하지만 나이가 들어 힘이 약해졌습니다.', next:'br2'},

  br2:{art:'br_koya', text:'어느 날, 당나귀는 알아차렸습니다.\n(주인은 나에게 먹이 주는 것을 그만두려고 생각하고 있다.)\n그래서 당나귀는 방앗간을 나왔습니다.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'브레멘으로!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"나는 브레멘으로 가서 그 마을의 음악대가 되겠어."\n당나귀는 그렇게 정하고, 큰길을 걷기 시작했습니다.';
    if(f.first) return t;
    return t + '\n어느 길로 갈까요?';
  }, choices:[
    {t:'강가를 따라가는 길', go:'br3r', set:{brmichi:'kawa'}},
    {t:'밭 사이로 난 길', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? '밀밭 사이로 난 길에는 바람이 잘 통했습니다.\n당나귀는 오랜만에 아무것도 나르지 않고 걸었습니다.'
    : '강가를 따라가는 길에는 물소리가 기분 좋게 울렸습니다.\n당나귀는 오랜만에 아무것도 나르지 않고 걸었습니다.', next:'br4'},

  br4:{art:'br_inu', text:'길가에 사냥개 한 마리가 누워 있었습니다.\n헉, 헉 하고 힘겹게 숨을 쉬고 있습니다.\n"무슨 일이야, 그렇게 숨을 헐떡이고."', next:'br5'},

  br5:{art:'br_inu', text:'"나이가 들어 사냥을 나갈 수 없게 됐어.\n그랬더니 주인이 나를 죽이려고 했지.\n도망쳐 나왔지만, 이제 어떻게 살아야 할지 모르겠어."\n"나는 브레멘으로 가서 음악대가 될 거야. 같이 가자.\n나는 류트를 켤 테니, 너는 북을 치면 돼."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'개, 음악대에 들어오다!!'}, then:'br6'},

  br6:{art:'br_neko', text:'조금 더 가니, 담 위에 고양이가 앉아 있었습니다.\n사흘 내내 비가 내린 뒤 같은, 가라앉은 얼굴입니다.', next:'br7'},

  br7:{art:'br_neko', text:'"나이가 들어 이가 약해져서,\n쥐를 쫓는 것보다 난롯가에 있고 싶어졌어.\n그랬더니 안주인이 나를 강에 빠뜨리려고 했지."\n"그러면 같이 브레멘으로 가자.\n밤의 노래라면 너를 당할 자가 없을 거야."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'밤의 노래라면……'}, then:'br8'},

  br8:{art:'br_ondori', text:'농가의 문 위에서 수탉이 힘껏 울고 있었습니다.\n"참 큰 목소리구나."\n"내일은 일요일이라 손님이 와.\n나는 수프가 될 거래.\n그래서 목소리가 나올 때 울어 두는 거야."', next:'br9'},

  br9:{art:'br_ondori', text:'"무엇이든 죽는 것보다는 나아. 너는 좋은 목소리를 가졌어.\n같이 음악을 하자. 분명 뭐라도 될 거야."\n수탉은 문 위에서 뛰어내렸습니다.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'꼬끼오!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = '브레멘은 하루 만에 닿을 수 없습니다.\n밤이 되자 4마리는 숲에서 쉬기로 했습니다.';
    if(f.first) return t + '\n당나귀와 개는 나무 아래에. 고양이는 가지 위에. 수탉은 꼭대기에.';
    return t + '\n어디에서 쉴까요?';
  }, choices:[
    {t:'나무 아래에서 다 같이', go:'br10r', set:{brmori:'shita'}},
    {t:'높은 가지에서 망을 보며', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? '고양이와 수탉은 높은 가지로 올라갔습니다.\n아래에서는 당나귀와 개가 등을 맞대고 잡니다.'
    : '4마리는 큰 나무 아래에 둥글게 모여 잠들었습니다.\n수탉만은 자기 전에 꼭대기로 올라갔습니다.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = '꼭대기에 있던 수탉이 멀리서 불빛을 발견했습니다.\n"저기에 집이 있어. 불이 켜져 있어."';
    if(f.first) return t + '\n"가자. 여기 잠자리는 그다지 좋지 않아."라고 당나귀가 말했습니다.';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'불빛이 있는 집으로 간다', go:'br12'},
    {t:'가까이 가지 않고 숲에서 밤을 지새운다', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'불빛이 있는 집에 닿자, 당나귀가 창문으로 들여다보았습니다.\n"뭐가 보여?"라고 수탉이 물었습니다.\n"맛있는 음식이 차려진 식탁과,\n그것을 둘러싸고 먹는 도둑들이야."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"우리에게도 저것이 필요해."라고 수탉이 말했습니다.\n4마리는 머리를 맞대고 의논했습니다.', next:'br14'},

  br14:{art:'br_mado', text:'당나귀가 앞발을 창턱에 올렸습니다.\n그 등에 개가 뛰어오르고,\n개 위에 고양이가 올라가고,\n맨 위에 수탉이 앉았습니다.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'합창!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'그리고 다 함께 창문으로 뛰어들었습니다.\n유리가 와장창!\n도둑들은 "괴물이다!" 하고 소리치며 숲으로 달아났습니다.', next:'br16'},

  br16:{art:'br_gochisou', text:'4마리는 식탁에 앉았습니다.\n40일치는 먹은 듯한 얼굴로 불을 끄고,\n저마다 마음에 드는 자리에서 잠들었습니다.\n당나귀는 마당, 개는 문간, 고양이는 난롯가, 수탉은 지붕 들보.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'한밤중.'}, then:'br17'},

  br17:{art:'br_yoru', text:'도둑 가운데 한 명이 상황을 보러 돌아왔습니다.\n집은 조용합니다. 부엌에 들어가자 난로 안쪽에서 무언가가 빛나고 있습니다.\n(타다 남은 숯이군.)\n그렇게 생각하고 성냥을 가까이 댄 바로 그때.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'할퀴기!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'고양이가 얼굴에 달려들어 할퀴었습니다.\n도둑은 뒷문으로 달아납니다. 거기에는 개가 있었습니다.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'덥석!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'마당으로 뛰쳐나가자, 당나귀가 뒷발로 걷어찼습니다.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'걷어차기!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'지붕 위에서는 잠에서 깬 수탉이 큰 소리로 울었습니다.\n"꼬끼오!"\n도둑에게는 이렇게 들렸습니다.\n"그놈을 이리로 데려와라!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'마녀다! 재판관이다!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'도둑은 숲으로 도망쳐 돌아가서 동료들에게 말했습니다.\n"그 집에는 무서운 마녀가 있어.\n침을 뱉고, 긴 손톱으로 얼굴을 할퀴었어.\n문간에는 칼을 든 남자가 있어서 다리를 찔렀어.\n마당에는 검은 괴물이 있어서 몽둥이로 때렸어.\n지붕 위에는 재판관이 있어서, 그놈을 이리로 데려오라고 소리쳤어."', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = '그 뒤로 도둑들이 돌아오는 일은 없었습니다.';
    if(f.first) return t;
    return t + '\n아침에 4마리는 의논했습니다. 어떻게 할까요?';
  }, choices:[
    {t:'이 집에서 산다', go:'e_br_seishi'},
    {t:'역시 브레멘으로 간다', go:'brb1'},
    {t:'이 집에서 아침에 무엇을 할지 정한다', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'4마리의 음악대는 이 집이 아주 마음에 들어서,\n떠날 생각을 하지 않았습니다.\n이 이야기를 마지막으로 들려준 사람의 입은 아직 따뜻합니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 브레멘 마을에서 ---- */
  brb1:{art:'br_roba', text:'"여기는 좋은 집이야. 하지만 우리는 음악대야."\n4마리는 집에 자물쇠를 채우고, 다시 큰길을 걸었습니다.', next:'brb2'},
  brb2:{art:'br_bremen', text:'브레멘 마을은 크고 북적였습니다.\n그리고 광장에는 이미 마을의 음악대가 있었습니다.\n나팔도 북도 반짝반짝합니다.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'……그럼, 이쪽에서'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'4마리는 광장 구석에서 목소리를 맞추었습니다.\n히힝, 멍멍, 야옹, 꼬끼오.\n아이들이 한 명, 두 명 모여들었습니다.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'반짝이는 악기는 없습니다.\n하지만 광장 구석에는 날마다 아이들이 왔습니다.\n4마리는 마을 구석에서 음악대가 되었습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 숲의 아침 ---- */
  brm1:{art:'br_mori', text:'"밤에는 집에 가까이 가지 않는 편이 좋아."라고 당나귀가 말했습니다.\n4마리는 숲에서 밤을 지새웠습니다.', next:'brm2'},
  brm2:{art:'br_mori', text:'아침에 수탉이 울어, 모두가 잠에서 깨었습니다.\n"기왕이면 한번 소리를 맞춰 보자."\n히힝, 멍멍, 야옹, 꼬끼오.', next:'brm3'},
  brm3:{art:'br_roba', text:'그때 밀가루 자루를 실은 짐수레가 지나갔습니다.\n방앗간 주인은 당나귀의 목소리를 듣고 말했습니다.\n"좋은 목소리구나. 우리 방앗간에서 일하지 않겠니? 먹이는 넉넉히 주마."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'나는 음악대다'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'당나귀는 정중히 거절하고, 동료들과 계속 걸었습니다.\n어디에 닿을지는 아직 모릅니다.\n4마리의 노래는 숲의 아침에 잘 울려 퍼졌습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 저마다의 아침 ---- */
  bra1:{art:'br_ie_asa', text:'아침에 이 집에서 무엇을 할까요?', choices:[
    {t:'수탉이 지붕에서 때를 알린다', go:'bra1r', set:{brasa:'ondori'}},
    {t:'개가 문간에서 낮잠을 잔다', go:'bra1r', set:{brasa:'inu'}},
    {t:'고양이가 난롯가에서 몸을 둥글게 만다', go:'bra1r', set:{brasa:'neko'}},
    {t:'당나귀가 양지에서 귀를 흔든다', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return '개는 문간에 드러누웠습니다.\n이제 누군가를 쫓아가지 않아도 됩니다.';
    if(f.brasa==='neko') return '고양이는 난롯가에서 몸을 둥글게 말았습니다.\n쥐를 쫓던 날들은 이제 끝입니다.';
    if(f.brasa==='roba') return '당나귀는 양지에 서서 긴 귀를 흔들었습니다.\n밀가루 자루는 이제 등에 없습니다.';
    return '수탉은 지붕에 올라가 동쪽 하늘을 향해 울었습니다.\n누가 부탁한 것도 아닙니다.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'누가 시킨 것도 아닙니다.\n저마다 스스로 정했습니다.\n오늘도 수탉이 때를 알리고, 개가 문간에서 잠들고,\n고양이가 난롯가에서 몸을 둥글게 말고, 당나귀는 양지에서 긴 귀를 흔들고 있습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 도둑 이야기 ================= */

  bd1:{art:'dorobou_mori', text:'이것은 숲속 집에 살던 3명의 도둑 이야기입니다.\n그날 밤에도 식탁에는 맛있는 음식이 차려져 있었습니다.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'오늘의 음식은?', choices:[
    {t:'소시지와 포도주', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'빵과 치즈와 사과', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? '빵과 치즈와 사과를 식탁 가득 차렸습니다.\n3명은 기분 좋게 먹기 시작했습니다.'
    : '소시지를 굽고 포도주를 따랐습니다.\n3명은 기분 좋게 먹기 시작했습니다.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'갑자기 창밖에서 들어 본 적 없는 소리가 났습니다.\n히힝, 멍멍, 야옹, 꼬끼오. 전부 한꺼번에.\n그리고 유리가 와장창!\n"괴물이다!"\n3명은 숲으로 달아났습니다.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'숲속 깊은 곳에서 3명은 숨을 골랐습니다.\n"그 집, 어떻게 할까?"', choices:[
    {t:'상황을 보러 돌아간다', go:'bdg1'},
    {t:'그 집은 포기한다', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'캄캄한 부엌.\n난로 안쪽에 두 개의 불이 켜져 있습니다.\n(타다 남은 숯이군.)\n성냥을 가까이 대자……', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'마녀다!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'얼굴을 할퀴이고, 다리를 찔리고, 몽둥이로 얻어맞고,\n지붕에서는 "그놈을 이리로 데려와라!"\n도둑은 숲으로 도망쳐 돌아갔습니다.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"마녀와, 칼을 든 남자와, 검은 괴물과, 재판관이 있어."\n동료들은 아무도 그 집에 가까이 가려 하지 않았습니다.\n정말로 무슨 일이 있었는지는 아무도 모르는 채로 남았습니다.\n그리고 모두 행복하게 살았습니다.'},

  bdm1:{art:'dorobou_mori', text:'"그 집은 이제 저들의 것이야."\n3명은 숲의 출구로 걸어갔습니다.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'마을에는 아침 장이 서 있었습니다.\n"짐 나를 사람을 찾습니다"라고 쓴 팻말이 붙어 있습니다.\n3명은 서로 얼굴을 마주 보았습니다.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'그날부터 3명이 무엇을 하며 살았는지는,\n이 이야기에 쓰여 있지 않습니다.\n숲속 집에는 4마리의 노래가 울리고 있습니다.\n끝.'},

  /* ================= 수탉 이야기 ================= */

  bo1:{art:'ondori_yane', text:'이것은 농가의 문 위에서 울고 있던 수탉의 이야기입니다.\n내일은 일요일. 손님이 오고, 나는 수프가 된다.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'마지막 날에는 무엇을 할까요?', choices:[
    {t:'마음껏 운다', go:'bo2r', set:{bolife:'naku'}},
    {t:'마당을 천천히 걷는다', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? '마당을 이 끝에서 저 끝까지 천천히 걸었습니다.\n마지막으로 보아 두려는 것이었습니다.'
    : '문 위에서 목이 쉴 때까지 울었습니다.\n귀를 막는 사람도 있었지만, 상관없습니다.', next:'bo3'},
  bo3:{art:'br_ondori', text:'그때 당나귀와 개와 고양이가 지나갔습니다.\n"무엇이든 죽는 것보다는 나아. 너는 좋은 목소리를 가졌어."\n수탉은 문 위에서 뛰어내렸습니다.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'내 목소리로 괜찮을까'}, then:'bo4'},
  bo4:{art:'br_mado', text:'숲속 집에서 수탉은 맨 위에 앉았습니다.\n그 다음 일은 수탉이 정합니다.', choices:[
    {t:'한밤중에 지붕 위에서 운다', go:'bok1'},
    {t:'이 집에서 살며 아침을 알린다', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'한밤중, 지붕 들보에서 잠이 깨었습니다.\n아래에서는 도둑이 날뛰고 있습니다.\n수탉은 힘껏 울었습니다.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'꼬끼오!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'도둑에게는 "그놈을 이리로 데려와라"라고 들렸습니다.\n수프가 될 뻔했던 목소리가 집을 지킨 것입니다.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'목소리를 어디에 쓸지는 스스로 정합니다.\n수탉은 그 뒤로도 울고 싶을 때, 울고 싶은 대로 울었습니다.\n그리고 모두 행복하게 살았습니다.'},

  boa1:{art:'br_ie_asa', text:'집에 살기 시작하고, 수탉은 지붕에 올라갔습니다.\n누가 부탁한 것도 아닙니다.\n아침에 동쪽 하늘이 하얘지면 수탉은 울었습니다.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'개가 잠에서 깨고, 고양이가 기지개를 켜고, 당나귀가 귀를 흔들었습니다.\n"이제 수프가 되지 않아. 매일 아침 여기서 울 거야."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'수탉의 목소리에 누군가가 잠에서 깹니다.\n그것만으로 수탉은 기뻤습니다.\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_KO);

  T.ZK_EN.push(
    {section:'브레멘 음악대'},
    {id:'br_seishi', n:'마음에 든 집',         h:'처음 1회차의 원래 이야기'},
    {id:'br_bremen', n:'브레멘 마을에서',      h:'아침에 역시 브레멘으로 가면……'},
    {id:'br_mori',   n:'숲의 아침',            h:'불빛이 있는 집에 가까이 가지 않으면……'},
    {id:'br_asa',    n:'저마다의 아침',        h:'이 집에서 아침에 무엇을 할지 정하면……'},
    {id:'bd_gokai',  n:'마녀와 재판관',        h:'도둑 이야기에서 상황을 보러 돌아가면……'},
    {id:'bd_machi',  n:'숲을 떠나다',          h:'도둑 이야기에서 집을 포기하면……'},
    {id:'bo_koe',    n:'목소리가 닿았다',      h:'수탉 이야기에서 한밤중에 울면……'},
    {id:'bo_asa',    n:'아침을 알리다',        h:'수탉 이야기에서 아침을 알리면……'}
  );

})();
