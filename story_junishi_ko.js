"use strict";
/* 십이지의 시작 - Korean scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var N12 = ['쥐','소','호랑이','토끼','용','뱀','말','양','원숭이','닭','개','멧돼지'];

  var JUNISHI_KO = {

  /* ================= 십이지의 시작 ================= */

  ju1:{art:'ju_ofure', text:'이것은 12마리의 동물이 해의 이름이 된 이야기입니다.\n어느 해가 저물 무렵, 신령님이 알림을 내렸습니다.\n"새해 첫날 아침, 궁전에 온 순서대로 12번째까지, 그 해의 이름으로 삼겠다."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = '동물들은 저마다 준비를 시작했습니다.';
    if(f.first) return t;
    return t + '\n무엇을 준비할까요?';
  }, choices:[
    {t:'달리기 연습을 한다', go:'ju2r', set:{julife:'hashiru'}},
    {t:'맛있는 음식을 만들며 기다린다', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? '양은 떡을 찧고, 원숭이는 밤을 주웠습니다.\n새해 첫날 아침에 다 같이 먹을 것입니다.'
    : '호랑이와 말은 들판을 몇 번이나 달렸습니다.\n토끼는 깡충깡충 뛰는 연습을 했습니다.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = '고양이는 알림의 날짜를 듣지 못했습니다.\n"저기 쥐야, 궁전에 가는 게 언제였지?"';
    if(f.first) return t + '\n"1월 2일 아침이야."\n쥐는 그렇게 대답했습니다.';
    return t + '\n쥐는 뭐라고 대답할까요?';
  }, choices:[
    {t:'"1월 2일 아침이야"', go:'ju4'},
    {t:'"1월 1일 아침이야"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'새해 전날 밤.\n"나는 걸음이 느리니까, 지금부터 나서야지."\n소는 아직 어두운 눈길을 걷기 시작했습니다.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'천천히 가자'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'초저녁에 출발!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = '그 등에 쥐가 살짝 뛰어올랐습니다.\n소는 알아차리지 못했습니다.\n눈길을 따라, 천천히 천천히.';
    if(f.first) return t;
    return t + '\n밤길에서 쥐는 무엇을 했을까요?';
  }, choices:[
    {t:'등에서 잠을 잤다', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'별을 세었다', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? '눈 내린 밤하늘에 별이 가득했습니다.\n쥐는 하나 둘 세어 가며 아침을 기다렸습니다.'
    : '소의 등은 따뜻해서, 쥐는 어느새 잠이 들었습니다.\n소의 발소리만이 눈길에 이어졌습니다.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = '아침이 되었습니다.\n궁전의 문이 눈앞에 있습니다.\n소는 자기가 맨 먼저 도착했다고 생각했습니다.';
    if(f.first) return t;
    return t + '\n쥐는 어떻게 할까요?';
  }, choices:[
    {t:'뛰어내려서 먼저 들어간다', go:'juc_tobiori'},
    {t:'뛰어내리지 않고 소와 함께 들어간다', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'뛰어내렸다!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'그때 등에서 쥐가 폴짝 뛰어내려,\n문 안으로 먼저 들어갔습니다.\n신령님의 목소리가 들렸습니다. "첫 번째 해는 쥐."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'쥐'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'이어서 소가 문을 지나갔습니다.\n"다음 해는 소."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'쥐, 소'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'호랑이가 달려 들어왔습니다.\n이어서 토끼가 폴짝 뛰어 문을 지나갔습니다.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'용과 뱀은 문 앞에 같은 때에 닿았습니다.\n"먼저 가시지요." 하고 뱀이 말했습니다.\n용이 먼저, 뱀이 다음으로 들어갔습니다.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'호랑이, 토끼, 용, 뱀'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'말이 달려오고, 양이 뒤를 이었습니다.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'원숭이와 개는 길에서 말다툼이 붙어 좀처럼 나아가지 못했습니다.\n닭이 둘 사이에 끼어들었습니다.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'먼저 궁전으로!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'닭이 재촉하자 원숭이와 개는 말다툼을 그만두었습니다.\n원숭이, 닭, 개의 순서로 문을 지나갔습니다.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'말, 양, 원숭이, 닭, 개'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'마지막은 멧돼지.\n곧장 달리는 것밖에 하지 못해서,\n문 앞을 지나쳐 갔다가 되돌아왔습니다.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'곧장, 멧돼지!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'12번째는 멧돼지.\n이것으로 12개의 해 이름이 모두 갖추어졌습니다.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'열두 개의 이름!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'신령님은 12마리에게 말했습니다.\n"이제부터 해마다 차례대로, 그 해의 이름이 되어라."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'다음 날 아침.\n고양이가 궁전의 문으로 찾아왔습니다.\n문은 닫혀 있었습니다.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'……어라?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = '신령님의 목소리가 들렸습니다.\n"궁전에 오는 날은 어제였다. 얼굴을 씻고, 다시 오너라."';
    if(f.first) return t;
    return t + '\n고양이는 어떻게 할까요?';
  }, choices:[
    {t:'얼굴을 씻고 돌아간다', go:'ju18'},
    {t:'얼굴을 씻고 한 번 더 문으로', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'고양이는 얼굴을 씻었습니다.\n그 뒤로 쥐를 보면 뒤쫓게 되었습니다.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양, 원숭이, 닭, 개, 멧돼지.\n12마리의 동물은 해마다 차례대로, 그 해의 이름이 되었습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 소의 등에서 ---- */
  jua1:{art:'ju_mon', text:'쥐는 뛰어내리지 않았습니다.\n소의 등에 탄 채로 함께 문을 지나갔습니다.\n"둘이 함께로구나." 하고 신령님의 목소리가 들렸습니다.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"소가 먼저면 좋겠어요." 하고 쥐가 말했습니다.\n"쥐가 먼저면 좋겠소." 하고 소가 말했습니다.\n신령님은 웃었습니다.\n"그러면 첫 번째 해는 쥐. 다음은 소.\n그 대신, 둘이서 서로의 해를 도와주어라."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'그 뒤로 쥐의 해에는 소가, 소의 해에는 쥐가,\n서로의 일을 도와주게 되었습니다.\n순서는 바뀌지 않습니다. 하지만 둘이서 함께한 하나의 아침이었습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 해마다 드리는 인사 ---- */
  jub1:{art:'ju_neko_kao', text:'고양이는 얼굴을 씻고, 한 번 더 문으로 갔습니다.\n"얼굴을 씻고 왔습니다."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'신령님의 목소리가 들렸습니다.\n"해의 이름은 12개밖에 없다.\n하지만 해마다 새해 첫날에는 인사하러 오너라."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'그 뒤로 고양이는 해마다 새해 첫날 아침에 궁전으로 인사하러 갑니다.\n해의 이름이 되지는 않습니다.\n하지만 궁전의 문은 고양이를 위해 열립니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 바다 건너 나라에서는 ---- */
  juu1:{art:'ju_nezuneko', text:'"1월 1일 아침이야."\n고양이는 "고마워." 하고 말하고, 그날 밤은 일찍 잠자리에 들었습니다.', next:'juu2'},
  juu2:{art:'ju_kake', text:'새해 첫날 아침.\n쥐는 소의 등에서, 소는 천천히, 호랑이는 힘차게.\n그리고 문 앞에서 토끼와 고양이가 같은 때에 닿았습니다.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'같은 순간에!?'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'신령님은 한참을 생각하고 말했습니다.\n"여기서는 이 해를 토끼에게.\n바다 건너 나라에서는 이 해를 고양이에게 맡기겠다."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'그래서 지금도 바다 건너 나라에는,\n고양이가 해의 이름이 되어 있는 곳이 있습니다.\n같은 이야기라도 나라가 다르면 이름도 다른 것입니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 고양이의 이야기 ================= */

  jn1:{art:'jneko_hinata', text:'이것은 한 마리 고양이의 이야기입니다.\n신령님의 알림이 있었다는 말은 들었지만, 날짜는 듣지 못했습니다.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'누구에게 물어볼까요?', choices:[
    {t:'쥐에게 묻는다', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'개에게 묻는다', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"1월…… 1일, 이었던가. 쥐가 잘 알아." 하고 개가 말했습니다.\n고양이는 쥐에게 물었습니다.\n"1월 2일 아침이야." 하고 쥐가 대답했습니다.'
    : '"1월 2일 아침이야." 하고 쥐가 대답했습니다.\n고양이는 "고마워." 하고 말했습니다.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'1월 2일 아침.\n고양이는 궁전의 문으로 갔습니다.\n문은 닫혀 있었습니다.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'……어제?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"궁전에 오는 날은 어제였다. 얼굴을 씻고, 다시 오너라."\n신령님의 목소리가 들렸습니다.\n고양이는 어떻게 할까요?', choices:[
    {t:'얼굴을 씻고 집으로 돌아간다', go:'jna1'},
    {t:'햇볕에서 몸을 둥글게 만다', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'고양이는 얼굴을 씻었습니다.\n차가운 물이었습니다.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'얼굴을 씻은 고양이가 그다음에 무엇을 생각했는지는,\n이 이야기에 쓰여 있지 않습니다.\n고양이는 얼굴을 씻었다. 그것뿐입니다.\n끝.'},
  jnh1:{art:'jneko_hinata', text:'고양이는 햇볕이 드는 곳으로 갔습니다.\n몸을 둥글게 말고, 눈을 감았습니다.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'쥐를 뒤쫓는 고양이도 있고, 햇볕에서 잠드는 고양이도 있습니다.\n고양이가 지금 무엇을 생각하고 있는지는, 고양이만이 알고 있습니다.\n끝.'},

  /* ================= 쥐의 이야기 ================= */

  jz1:{art:'jnezumi_ana', text:'이것은 한 마리 쥐의 이야기입니다.\n신령님의 알림을 듣고, 쥐는 생각했습니다.\n(내 다리로는 달려도 따라잡을 수 없다.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'밤, 굴 안에서 무엇을 할까요?', choices:[
    {t:'궁전까지 가는 길을 생각한다', go:'jz2r', set:{jzlife:'michi'}},
    {t:'일찍 자고 아침을 준비한다', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? '쥐는 짚 속으로 파고들어 일찍 잠들었습니다.\n꿈속에서도 궁전의 문이 보였습니다.'
    : '쥐는 궁전까지 가는 길을 머릿속으로 몇 번이나 더듬어 보았습니다.\n먼 길입니다. 누군가의 등이 필요하다고 생각했습니다.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"궁전에 가는 게 언제였지?" 하고 고양이가 물었습니다.\n쥐는 "1월 2일 아침이야." 하고 대답했습니다.', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'……'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'새해 전날 밤, 쥐는 소의 등에 뛰어올랐습니다.\n소는 알아차리지 못했습니다.\n쥐는 어떻게 할까요?', choices:[
    {t:'말없이 타고 간다', go:'jzu1'},
    {t:'소에게 말을 건다', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'아침, 문 앞에서 쥐는 뛰어내렸습니다.\n첫 번째 해는 쥐.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'쥐는 고양이에게 진짜 날짜를 말하지 않았습니다.\n그 까닭은 쥐만이 알고 있습니다.\n그리고 쥐는 첫 번째 해의 이름이 되었습니다.\n끝.'},
  jzs1:{art:'ju_senaka', text:'"소야, 태워 줘서 고마워."\n소는 놀라서 뒤를 돌아보았습니다.\n"뭐야, 쥐로구나. 무겁지도 않으니 그대로 타고 있으렴."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'문 앞에서 소가 말했습니다.\n"어서 가서 이름을 받아 오렴."\n쥐는 뛰어내려 문을 지나갔습니다.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'첫 번째 해는 쥐. 다음은 소.\n쥐는 등을 빌려준 소를 오래도록 잊지 않았습니다.\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_KO);

  T.ZK_EN.push(
    {section:'십이지의 시작', note:'바다 건너 나라에는 고양이가 십이지에 들어 있는 곳도 있습니다. 13번째 동물로 족제비나 개구리를 두는 말놀이도 전해집니다.'},
    {id:'ju_seishi',  n:'열두 개의 이름',        h:'처음 1회차에서 만나는, 전해 내려오는 이야기'},
    {id:'ju_ushi',    n:'소의 등에서',           h:'문 앞에서 뛰어내리지 않고 있으면……'},
    {id:'ju_kao',     n:'해마다 드리는 인사',    h:'얼굴을 씻고 한 번 더 문으로 가면……'},
    {id:'ju_umi',     n:'바다 건너 나라에서는',  h:'쥐가 진짜 날짜를 대답하면……'},
    {id:'jn_asa',     n:'다음 날 아침',          h:'고양이의 이야기에서, 얼굴을 씻고 돌아가면……'},
    {id:'jn_hinata',  n:'햇볕의 고양이',         h:'고양이의 이야기에서, 햇볕에 몸을 둥글게 말면……'},
    {id:'jz_uso',     n:'거짓말을 한 날',        h:'쥐의 이야기에서, 말없이 타고 가면……'},
    {id:'jz_senaka',  n:'등을 빌린 날',          h:'쥐의 이야기에서, 소에게 말을 걸면……'}
  );

})();
