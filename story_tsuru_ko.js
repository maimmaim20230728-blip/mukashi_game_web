"use strict";
/* 학의 보은 - Korean scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var TSURU_KO = {

  /* ================= 학의 보은 ================= */

  ts1:{art:'ts_yuki_wana', text:'이것은 눈 오는 날에 도움을 받은 학의 이야기입니다.\n어느 겨울날, 할아버지는 땔나무를 팔러 마을로 가던 도중에,\n덫에 걸린 학을 발견했습니다.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'덫을 풀었다!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = '할아버지는 덫을 풀어, 학을 놓아주었습니다.\n학은 크게 날갯짓을 하고, 눈 내리는 하늘로 날아갔습니다.';
    if(f.first) return t;
    return t + '\n마을에서 무엇을 사서 돌아갈까요?';
  }, choices:[
    {t:'쌀을 산다', go:'ts2r', set:{tslife:'kome'}},
    {t:'사탕을 산다', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? '할아버지는 땔나무를 판 돈으로, 작은 사탕을 하나 샀습니다.\n할머니에게 줄 선물입니다.'
    : '할아버지는 땔나무를 판 돈으로, 쌀을 조금 샀습니다.\n오늘 저녁밥으로 쓸 만큼입니다.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'그날 밤, 눈은 계속 내리고 있었습니다.\n똑똑. 문을 두드리는 소리가 났습니다.\n하얀 기모노를 입은 아가씨가 눈 속에 서 있었습니다.\n"길을 잃었습니다. 하룻밤만 재워 주세요."', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'재워 주세요'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'할아버지와 할머니는 아가씨를 화롯가에 앉게 했습니다.\n아가씨는 부지런히 일했고, 며칠이나 함께 지냈습니다.\n"저를 여기에 있게 해 주세요."\n두 사람은 아가씨를 자기들의 딸처럼 여기게 되었습니다.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'어느 날, 아가씨가 말했습니다.\n"실을 사다 주세요. 베틀로 천을 짜겠습니다.\n짜는 동안에는 장지문을 열지 말아 주세요."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'철커덕, 철커덕'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'3일 낮과 3일 밤, 방에서 베틀 소리가 이어졌습니다.\n4일째 아침, 아가씨는 하얀 천을 들고 나왔습니다.\n눈처럼 하얗고, 빛나는 천이었습니다.', next:'ts7'},

  ts7:{art:'ts_machi', text:'할아버지가 마을로 가지고 가자, 천은 비싸게 팔렸습니다.\n그해 겨울, 집은 따뜻해졌습니다.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'고맙구나……'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"한 장 더 짜겠습니다." 하고 아가씨가 말했습니다.\n또 3일 낮과 3일 밤, 방에서 베틀 소리가 났습니다.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'철커덕, 철커덕'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = '2장째 천도 비싸게 팔렸습니다.\n하지만 아가씨의 얼굴빛은 전보다 하얘져 있었습니다.\n"한 장 더 짜겠습니다." 하고 아가씨가 말했습니다.';
    if(f.first) return t;
    return t + '\n할아버지는 어떻게 할까요?';
  }, choices:[
    {t:'"부탁한다"라고 말한다', go:'ts10'},
    {t:'"이제 짜지 않아도 된다"라고 말한다', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'3장째.\n베틀 소리는 전보다 느렸습니다.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'철커……덕……'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = '할머니는 방 앞에서 걸음을 멈췄습니다.\n(저 아이는 괜찮을까)\n(실도 없는데, 무엇을 짜고 있는 걸까)';
    if(f.first) return t + '\n할머니는 장지문을 조금만 열었습니다.';
    return t + '\n할머니는 어떻게 할까요?';
  }, choices:[
    {t:'장지문을 조금 연다', go:'ts12'},
    {t:'말만 건네고 물러난다', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'장지문 너머에 학이 있었습니다.\n자기 깃털로 천을 짜고 있었던 것입니다.\n깃털은 조금 줄어 있었습니다.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'……'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = '그날 밤, 아가씨는 두 사람 앞에 앉았습니다.\n"저는 눈 오는 날에 도움을 받은 학입니다.\n진짜 모습을 보이고 말았습니다.\n이제 아가씨의 모습으로는 있을 수 없습니다."';
    if(f.first) return t;
    return t + '\n두 사람은 어떻게 할까요?';
  }, choices:[
    {t:'말없이 배웅한다', go:'ts14'},
    {t:'문을 열고 하늘을 올려다본다', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'아가씨는 학의 모습으로 돌아가, 눈 내리는 하늘로 날아갔습니다.\n할아버지와 할머니는 언제까지나 하늘을 바라보았습니다.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'학은, 하늘로'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'눈 오는 날에 도움을 받은 학은 하늘로 돌아갔습니다.\n집에는 하얀 천 2장과, 짜다 만 베틀이 남았습니다.\n끝.'},

  /* ---- 이제 짜지 않아도 된다 ---- */
  tsm1:{art:'ts_kaoiro', text:'"이제 짜지 않아도 된다. 천은 2장이면 충분하다."\n할아버지는 그렇게 말했습니다.\n아가씨는 잠시 잠자코 있다가, "네" 하고 대답했습니다.', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'겨울이 끝나고, 봄이 왔습니다.\n하늘에서 학의 울음소리가 났습니다.\n"저는 눈 오는 날에 도움을 받은 학입니다. 동료들이 부르고 있습니다."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'아가씨는 학의 모습으로 돌아가, 동료들이 있는 곳으로 날아갔습니다.\n집에는 하얀 천 2장이 남았습니다.\n할아버지와 할머니는 봄 하늘을 배웅했습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 들여다보지 않은 겨울 ---- */
  tsn1:{art:'ts_nozoku', text:'"무리하지 말아요."\n할머니는 장지문 밖에서 말을 건네고, 방에서 물러났습니다.\n안에서 "네" 하는 소리가 들렸습니다.', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'3장째 천이 다 짜였습니다.\n가장 아름다운 천이었습니다.\n아가씨의 얼굴빛은 아직 하얀 채였습니다.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'봄이 오고, 하늘에서 학의 울음소리가 났습니다.\n"저는 눈 오는 날에 도움을 받은 학입니다.\n깃털은 이제 없습니다. 동료들이 부르고 있습니다."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'할아버지와 할머니는 문간에서 아가씨를 배웅했습니다.\n들여다보지 않아도 이별은 왔습니다.\n하지만 그 이별에는 숨긴 일이 하나도 없었습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 창을 열고 ---- */
  tsd1:{art:'ts_mado', text:'다음 날 아침, 할아버지는 문을 열었습니다.\n맑게 갠 하늘에 학이 한 마리.\n학은 집 위를 한 바퀴 돌고, 멀리 날아갔습니다.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'두 사람은 손을 흔들었습니다.\n학이 뒤돌아보았는지는 알 수 없습니다.\n하지만 집 위를 한 바퀴 돌았다는 것은 오래도록 기억했습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 학의 이야기 ================= */

  tz1:{art:'ts_yuki_wana', text:'이것은 학 한 마리의 이야기입니다.\n눈 오는 날, 덫에 걸려 움직일 수 없게 되었습니다.\n지나가던 할아버지가 덫을 풀어 주었습니다.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'학은 은혜를 갚으려고 생각했습니다.\n어떤 모습으로 갈까요?', choices:[
    {t:'하얀 기모노를 입은 아가씨', go:'tz2r', set:{tzlife:'musume'}},
    {t:'여행하는 아가씨', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? '학은 삿갓을 쓴 여행하는 아가씨로 모습을 바꾸어,\n눈 내리는 밤에 집의 문을 두드렸습니다.'
    : '학은 하얀 기모노를 입은 아가씨로 모습을 바꾸어,\n눈 내리는 밤에 집의 문을 두드렸습니다.', next:'tz3'},
  tz3:{art:'tz_hane', text:'베틀로 천을 짜려면 자기 깃털을 씁니다.\n깃털에는 한계가 있습니다.\n학은 깃털을 세면서 천을 짰습니다.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'……남은 건, 이만큼'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'3장째를 짜고 있을 때, 장지문이 조금 열렸습니다.\n학은 어떻게 할까요?', choices:[
    {t:'계속 짠다', go:'tzh1'},
    {t:'베틀을 멈추고 하늘을 본다', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'학은 끝까지 짰습니다.\n깃털은 많이 줄어 있었습니다.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'모습을 보였기 때문에, 학은 집을 나섰습니다.\n왜 끝까지 짰는지는 이 이야기에 쓰여 있지 않습니다.\n끝.'},
  tzs1:{art:'tz_sora_ie', text:'학은 베틀을 멈추고, 창으로 하늘을 보았습니다.\n봄 하늘이었습니다.\n학은 그날 밤에 집을 나섰습니다.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'하늘에서 보니 집은 작았고, 불빛이 하나 켜져 있었습니다.\n학은 그 불빛을 한동안 바라보았습니다.\n끝.'},

  /* ================= 할머니의 겨울 이야기 ================= */

  tb1:{art:'ts_irori', text:'이것은 한 할머니의 이야기입니다.\n눈 내리는 밤에 온 아가씨는 부지런히 일했고, 잘 웃었습니다.\n할머니는 아가씨가 사랑스러워 견딜 수 없었습니다.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'아가씨가 천을 짜는 동안, 할머니는 무엇을 할까요?', choices:[
    {t:'따뜻한 국을 끓인다', go:'tb2r', set:{tblife:'shiru'}},
    {t:'화로의 불을 꺼뜨리지 않는다', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? '할머니는 화로의 불이 꺼지지 않도록, 땔나무를 계속 넣었습니다.\n방이 추워지지 않도록.'
    : '할머니는 따뜻한 국을 끓여, 장지문 밖에 놓아두었습니다.\n아침이 되면, 그릇은 비어 있었습니다.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'2장째 뒤로, 아가씨의 얼굴빛은 하얘져 있었습니다.\n할머니는 몇 번이나 방 앞을 오갔습니다.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'보지 말라고 했지만'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'보지 말라고 하면, 보고 싶어집니다.\n걱정이 되니, 더욱 그렇습니다.\n할머니는 어떻게 할까요?', choices:[
    {t:'장지문을 연다', go:'tbk1'},
    {t:'방 앞에 앉아서 기다린다', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'장지문 너머에 학이 있었습니다.\n할머니는 장지문을 살며시 닫았습니다.\n하지만 본 것은 이제 되돌릴 수 없었습니다.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'아가씨는 학으로 돌아가, 날아갔습니다.\n보고 싶어지는 마음은 누구에게나 있습니다.\n그것을 나쁘다고 말하는 사람은 이 이야기에 나오지 않습니다.\n끝.'},
  tbh1:{art:'tb_hata_nokori', text:'할머니는 방 앞에 앉아, 베틀 소리를 들었습니다.\n철커덕. 철커덕.\n봄까지 그렇게 있었습니다.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'봄에 아가씨가 떠난 뒤, 방에는 베틀이 남았습니다.\n할머니는 베틀을 그대로 두고, 날마다 방을 열었습니다.\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, TSURU_KO);

  T.ZK_EN.push(
    {section:'학의 보은', note:'일본 옛이야기에는 진짜 모습이 알려지면 떠나가는 이야기가 많이 있습니다. 학, 뱀, 휘파람새. 벌을 주는 이야기가 아닙니다.'},
    {id:'ts_seishi',    n:'눈 오는 날의 학',        h:'처음 1회차에서 만나는, 전해 내려오는 이야기'},
    {id:'ts_mou',       n:'이제 짜지 않아도 된다',  h:'3장째 전에, 할아버지가 무언가 말하면……'},
    {id:'ts_nozokanai', n:'들여다보지 않은 겨울',   h:'할머니가 말만 건네고 물러나면……'},
    {id:'ts_mado',      n:'창을 열고',              h:'이별의 밤에, 문을 열고 하늘을 올려다보면……'},
    {id:'tz_hane',      n:'깃털의 수',              h:'학의 이야기에서, 끝까지 계속 짜면……'},
    {id:'tz_sora',      n:'하늘에서 본 집',         h:'학의 이야기에서, 베틀을 멈추고 하늘을 보면……'},
    {id:'tb_kokoro',    n:'보고 싶어지는 마음',     h:'할머니의 이야기에서, 장지문을 열면……'},
    {id:'tb_hata',      n:'짜다 만 베틀',           h:'할머니의 이야기에서, 방 앞에서 기다리면……'}
  );

})();
