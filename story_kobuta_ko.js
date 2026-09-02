"use strict";
/* 아기 돼지 삼형제 - Korean scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). 자체 번역이며,
   기존 한국어 번역본을 따라 옮기지 않았습니다. */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var KOBUTA_KO = {

  /* ================= 아기 돼지 삼형제 ================= */

  p1:{art:'buta_hajimari', text:'이것은 아기 돼지 3형제의 이야기입니다.\n큰 돼지, 가운데 돼지, 작은 돼지.\n모두 다 자랐기 때문에, 저마다 자기 집을 짓기로 했습니다.', next:'p2'},

  p2:{art:'buta_hajimari', text:'길을 떠나는 아침입니다. 어머니께 뭐라고 말할까요?', choices:[
    {t:'"다녀오겠습니다!" 하고 씩씩하게', go:'p2r', set:{plife:'genki'}},
    {t:'"맛있는 게 생기면 가져올게요" 하고', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"기대하고 있을게" 하고 어머니는 빙그레 웃었습니다.\n배웅하는 손이 언제까지나 흔들리고 있었습니다.'
    : '"잘 다녀오렴!" 하고 어머니도 씩씩하게 말했습니다.\n밝은 목소리의 배웅을 받으니, 발걸음도 가벼워졌습니다.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = '길은 셋으로 갈라져 있었습니다.';
    if(f.first) return t + '\n3형제는 서로 손을 흔들고, 저마다 자기 길을 걸어갔습니다.';
    return t + '\n자, 어떻게 할까요?';
  }, choices:[
    {t:'저마다 자기 길로 간다', go:'p4'},
    {t:'3형제가 함께 집 1채를 짓는다', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'큰 돼지는 짚을 잔뜩 짊어진 아저씨를 만났습니다.\n"그 짚, 좀 나눠 주세요."\n짚으로 지은 집이라면 오늘 안에 다 지을 수 있습니다.\n빨리 지을 수 있다는 것이, 가장 좋은 점입니다.', next:'p5'},

  p5:{art:'buta_eda', text:'가운데 돼지는 나뭇가지를 안고 있는 아저씨를 만났습니다.\n"그 나뭇가지, 좀 나눠 주세요."\n나뭇가지로 지은 집은 바람이 통해서 시원할 것 같습니다.\n그것이 가장 좋은 점입니다.', next:'p6'},

  p6:{art:'buta_renga', text:'작은 돼지는 벽돌을 실은 수레를 끄는 아저씨를 만났습니다.\n"그 벽돌, 좀 나눠 주세요."\n벽돌로 지은 집은 시간은 걸리지만, 아주 튼튼합니다.\n그것이 가장 좋은 점입니다.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'뚝딱 뚝딱!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = '집 세 채가 다 지어졌습니다.\n짚으로 지은 집, 나뭇가지로 지은 집, 벽돌로 지은 집.\n어느 집이나 자랑스러운 집입니다.';
    if(f.first) return t;
    return t + '\n다 지은 집에서 먼저 무엇을 할까요?';
  }, choices:[
    {t:'다 같이 서로 집을 보여 준다', go:'p7r', set:{plife2:'miseai'}},
    {t:'잠시 쉬면서 차를 마신다', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? '일하고 난 뒤에 마시는 차는 각별합니다.\n"내일은 서로의 집에 놀러 가자."'
    : '"빨리 지었구나." "바람이 시원하구나." "튼튼하구나."\n어느 집에나 좋은 점이 제대로 있습니다.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return '그때였습니다.\n산에서 배고픈 늑대가 내려와서,\n짚으로 지은 집 앞에 섰습니다.';
    return '그때였습니다.\n작은 돼지가 산길을 내려오는 늑대를 멀리서 발견했습니다.\n어떻게 할까요?';
  }, choices:[
    {t:'그대로 상황을 지켜본다', go:'pc_vs'},
    {t:'모두에게 알리고 벽돌집에 모인다', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'아기 돼지 대 늑대!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'늑대는 짚으로 지은 집을 똑똑 두드렸습니다.\n"아기 돼지야, 아기 돼지야, 안에 들여보내 다오."\n"안 돼, 안 돼, 열어 주지 않을 거야. 내 턱의 수염수염 수염을 걸고, 절대로 안 돼!"\n"그렇다면 후우 후우 후우우, 집째 날려 버리겠다!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'후우우우!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'짚으로 지은 집은 빙글빙글 하늘로 날아가 버렸습니다.\n큰 돼지는 구르듯이 뛰쳐나와서,\n가운데 돼지의 나뭇가지 집으로 뛰어들었습니다.', next:'p11'},

  p11:{art:'buta_eda', text:'늑대도 곧바로 뒤쫓아 왔습니다.\n"아기 돼지야, 아기 돼지야, 안에 들여보내 다오."\n이번에는 둘이서 목소리를 모아 대답합니다.\n"안 돼, 안 돼, 열어 주지 않을 거야. 내 턱의 수염수염 수염을 걸고, 절대로 안 돼!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'후우 후우우우!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'나뭇가지로 지은 집도 뿔뿔이 흩어져 날아갔습니다.\n둘은 한달음에 달려서,\n작은 돼지의 벽돌집으로 뛰어들었습니다.', next:'p13'},

  p13:{art:'buta_naka', text:'"여기라면 괜찮아.\n이 집은 시간을 들여서, 아주 튼튼하게 지었으니까."\n작은 돼지는 문을 단단히 잠갔습니다.', next:'p14'},

  p14:{art:'buta_renga', text:'"아기 돼지야, 아기 돼지야, 안에 들여보내 다오."\n"안 돼, 안 돼, 열어 주지 않을 거야. 내 턱의 수염수염 수염을 걸고, 절대로 안 돼!" 셋이 한목소리로 외쳤습니다.\n늑대는 크게 숨을 들이마셨습니다.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'……꿈쩍도 하지 않는다!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = '몇 번을 불어도, 벽돌집은 꿈쩍도 하지 않습니다.';
    if(f.first) return t + '\n늑대는 헉헉거리면서, 지붕 위의 굴뚝을 올려다보았습니다.';
    return t + '\n배고픈 늑대는 다음 수를 생각합니다.';
  }, choices:[
    {t:'굴뚝으로 들어가려고 한다', go:'p16'},
    {t:'달콤한 말로 꾀어내려고 한다', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'늑대는 지붕에 올라가서, 굴뚝에 발을 걸쳤습니다.\n하지만 집 안에서는 벌써 다 알고 있었습니다.', next:'p17'},

  p17:{art:'buta_nabe', text:'굴뚝 아래 벽난로에는 커다란 솥이 놓여 있었습니다.\n부글부글, 부글부글. 뜨거운 물이 가득 끓고 있습니다.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'첨버덩!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"앗 뜨거 뜨거 뜨거!!"\n엉덩이에 화상을 입은 늑대는,\n한달음에 산으로 도망쳐 돌아갔습니다.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'그 뒤로는 늑대가 찾아오는 일도 없었습니다.\n3형제는 가끔 다 같이 모여서,\n따뜻한 수프를 마시며 즐겁게 살았답니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 영국의 진짜 이야기 (Jacobs 1890의 속임수 3연발) ---- */
  pg1:{art:'buta_renga', text:'늑대는 목소리를 부드럽게 하고 말했습니다.\n"이봐, 아기 돼지야. 마을 어귀에 맛있는 순무밭이 있단다.\n내일 아침 6시에 같이 가지 않겠니?"\n작은 돼지는 바로 알아차렸습니다. (이건 함정이구나.)\n"좋아. 그럼 6시에 보자."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'옳지, 6시가 기다려지는걸'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'다음 날 아침, 아기 돼지는 5시에 일어나서,\n재빨리 순무를 캐서 돌아왔습니다.\n6시에 온 늑대는 깜짝 놀랐습니다.\n"벌써 다녀왔어. 솥 가득 순무를 캤단다."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'뭐라고, 벌써 다녀왔다고!?'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'이번에는 사과나무로 가자는 권유입니다. "아침 5시에 데리러 갈게."\n아기 돼지는 4시에 나섰습니다. 그런데 나무 위에 있는 사이에,\n늑대가 와 버렸습니다.\n"가장 맛있는 걸 줄게."\n아기 돼지는 사과를 힘껏 멀리 던지고,\n늑대가 주우러 간 틈에 스르르 내려와 도망쳐 돌아왔습니다.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'마지막은 마을 축제로 가자는 권유입니다. "낮 3시에 가자."\n아기 돼지는 점심 전에 나가서, 버터를 만드는 통을 샀습니다.\n돌아오는 길, 언덕 위에서 내려다보니 올라오는 늑대의 모습이 보였습니다.\n아기 돼지는 통 속으로 기어들어 갔습니다.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'데굴데굴 데굴데굴!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'통은 아기 돼지를 태우고, 언덕을 데굴데굴 데굴데굴!\n둥글고 커다란 것이 날아오는 것을 보고,\n늑대는 소스라치게 놀랐습니다. 꼬리를 말고 달아났습니다.', next:'pg6'},
  pg6:{art:'buta_renga', text:'나중에 사정을 알게 된 늑대는 잔뜩 화가 났습니다.\n"이렇게 된 이상, 굴뚝으로 들어가겠다!"\n하지만 집 안에서는 벌써 다 알고 있었습니다.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'벽난로의 큰 솥은 오늘도 부글부글.\n캐 온 순무가 가득 들어간, 뜨거운 수프입니다.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'첨버덩!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"앗 뜨거 뜨거 뜨거!!"\n크게 화상을 입은 늑대는 산속 깊은 곳으로 도망쳐 가서,\n그 뒤로 두 번 다시 나타나지 않았습니다.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'순무밭, 사과나무, 그리고 버터 통.\n이것이 영국에 전해지는 본래 이야기에 가장 가까운 길입니다.\n영리한 작은 돼지는 그 뒤로도 오래오래 행복하게 살았답니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 처음부터 3형제가 함께 ---- */
  pk1:{art:'buta_renga', text:'"다 같이 1채, 아주 튼튼한 집을 짓자."\n작은 돼지의 한마디에, 3형제는 벽돌 나르기를 시작했습니다.\n무거운 벽돌도 3형제가 함께라면 아무것도 아닙니다.', next:'pk2'},
  pk2:{art:'buta_naka', text:'지붕 아래에 침대가 세 개.\n벽난로도 창문도 있는 훌륭한 집이 다 지어졌습니다.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'그곳에 배고픈 늑대가 찾아와서,\n크게 숨을 들이마셨습니다.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'……꿈쩍도 하지 않는다!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'늑대는 해가 질 때까지 계속 불다가,\n기진맥진해서 산으로 돌아갔습니다.\n힘을 모아서 지은 집은 무엇보다도 튼튼합니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 망보기와 준비 ---- */
  pn1:{art:'buta_michi', text:'"늑대가 온다!"\n작은 돼지는 형들의 집으로 한달음에 달려갔습니다.\n3형제는 서둘러 벽돌집에 모였습니다.', next:'pn2'},
  pn2:{art:'buta_naka', text:'창문으로 살며시 내다보니, 늑대가 짚으로 지은 집을 불고 있습니다.\n"아무도 없잖아!?"\n나뭇가지로 지은 집도 불었습니다.\n"여기도 텅 비었잖아!?"', next:'pn3'},
  pn3:{art:'buta_renga', text:'마지막으로 벽돌집을 후우 후우. 그래도 꿈쩍도 하지 않습니다.\n늑대는 완전히 지쳐서,\n배고픈 채로 주저앉아 버렸습니다.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'창문에서 목소리가 들립니다.\n"손님인가요? 미안하지만, 오늘은 이만 끝이랍니다."\n늑대는 터덜터덜 산으로 돌아갔습니다.\n준비해 두면 당황하지 않습니다. 3형제는 다시 차를 마저 마십니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 늑대의 이야기 ================= */

  pw1:{art:'pwolf_yama', text:'이것은 산에 사는 늑대 한 마리의 이야기입니다.\n요즘 들어 먹을 것이 도무지 보이지 않아서,\n배는 언제나 텅텅 비어 있었습니다.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'오늘은 어디에서 먹을 것을 찾을까요?', choices:[
    {t:'강 근처를 찾아본다', go:'pw2r', set:{wlife:'kawa'}},
    {t:'숲속 깊은 곳을 찾아본다', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? '숲의 나무 열매는 새들이 먼저 다 먹어 버린 뒤였습니다.\n배에서 꼬르륵 소리가 났습니다.'
    : '강에는 물고기 그림자도 없습니다.\n배에서 꼬르륵 소리가 났습니다.', next:'pw3'},
  pw3:{art:'buta_wara', text:'산기슭으로 내려오니, 새 집이 3채 나란히 서 있습니다.\n어디선가 맛있는 냄새도 풍겨 옵니다.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'진수성찬의 예감이 든다!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'후우 후우 부는 것은 늑대의 특기입니다.\n짚으로 지은 집도 나뭇가지로 지은 집도 날려 버렸는데,\n아기 돼지들은 번번이 스르르 빠져나가 버립니다.', next:'pw5'},
  pw5:{art:'buta_renga', text:'남은 것은 벽돌집. 그런데 이것이 꿈쩍도 하지 않습니다.\n배고픈 늑대는 다음 수를 생각했습니다.', choices:[
    {t:'달콤한 말로 꾀어낸다', go:'pw6'},
    {t:'솔직하게 이야기해 본다', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'순무밭으로 꾀어내면 한발 앞서 다녀와 버리고.\n사과나무로 꾀어내면 스르르 빠져나가 버리고.\n축제에서 돌아오는 길목을 지키고 기다리던, 바로 그때입니다.\n언덕 위에서 둥글고 커다란 무언가가……', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'데굴데굴 데굴데굴!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'데굴데굴 데굴데굴, 엄청난 기세로 굴러 옵니다.\n본 적도 없는, 둥글고 커다란 덩어리입니다.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'괴, 괴물이다!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'늑대는 꼬리를 말고, 산꼭대기까지 도망쳐 돌아갔습니다.\n"산기슭에는 둥근 괴물이 산다……"\n이 이야기는 산의 늑대들 사이에서,\n오래오래 전해졌다고 합니다.\n그리고 모두 행복하게 살았습니다.'},

  pwh1:{art:'buta_renga', text:'늑대는 문 앞에 주저앉아서,\n작은 목소리로 말했습니다.\n"……사실은 며칠째 아무것도 먹지 못했어."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'집 안에서 3형제는 서로 얼굴을 마주 보았습니다.\n문은 열지 않습니다. 하지만 창문에서 목소리가 들렸습니다.\n"거기서 잠깐 기다려."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'창문으로 살며시 건네진 것은 뜨거운 채소 수프였습니다.\n순무도 감자도 큼직큼직하게 들어 있습니다.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'뜨거우니까, 후우 후우 불어서 먹어'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'늑대가 자랑하던 후우 후우는,\n집을 날리는 힘이 아니라,\n뜨거운 수프를 알맞게 식히는 힘이 되었습니다.\n특기의 쓰임새는 하나만 있는 것이 아닙니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 벽돌집의 이야기 ================= */

  ps1:{art:'prenga_kamado', text:'이것은 벽돌집 한 채의 이야기입니다.\n벽돌은 하나하나, 가마의 불에서 천천히 구워져 태어납니다.\n그래서 웬만해서는 무너지지 않습니다.', next:'ps2'},
  ps2:{art:'buta_renga', text:'어느 날, 작은 돼지가 찾아와서,\n벽돌을 정성껏 쌓기 시작했습니다.\n뚝딱, 뚝딱. 조금씩 집이 되어 갑니다.\n처음으로 생긴 창문으로 무엇이 보였을까요?', choices:[
    {t:'드넓은 파란 하늘', go:'ps2r', set:{slife:'sora'}},
    {t:'마을 어귀의 순무밭', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? '창문 너머로 순무밭이 펼쳐져 있습니다.\n날마다 조금씩 자라는 모습을, 집은 즐겁게 바라보았습니다.'
    : '창문 가득한 파란 하늘을, 하얀 구름이 흘러갑니다.\n집이 된다는 건 참 좋은 일이구나.', next:'ps3'},
  ps3:{art:'buta_naka', text:'어느 날, 형 돼지 둘이,\n숨을 헐떡이며 뛰어들어 왔습니다.\n밖에는 늑대가 있는 모양입니다.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'제가 나설 차례입니다'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'늑대는 크게 숨을 들이마시고, 힘껏 불어 댔습니다.\n한 번, 두 번, 세 번.\n벽의 벽돌은 하나도 움직이지 않습니다.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'꿈쩍도 하지 않습니다!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'폭풍 같은 밤이 지나고, 집은 생각했습니다.\n앞으로도 무엇을 가장 소중히 여길까요?', choices:[
    {t:'바람에도 비에도 지지 않는 것', go:'e_ps_mamoru'},
    {t:'벽난로에 불을 지펴 따뜻하게 하는 것', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'바람 부는 밤에도, 비 오는 아침에도, 집은 꿈쩍도 하지 않습니다.\n튼튼하게 태어난 까닭을, 집은 잘 알고 있습니다.\n안에 지키고 싶은 3형제가 있기 때문입니다.\n그리고 모두 행복하게 살았습니다.'},
  pss1:{art:'buta_soup', text:'겨울이 왔습니다. 벽난로에 불이 들어오고, 솥이 보글보글.\n어머니 돼지도 놀러 와서,\n집 안은 웃음소리로 가득합니다.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'집이 하는 일은 바람과 비를 막는 것.\n하지만 가장 중요한 일은,\n웃음소리를 소중히 간직해 두는 것입니다.\n오늘도 벽돌집에서 따뜻한 목소리가 들려옵니다.\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_KO);

  T.ZK_EN.push(
    {section:'아기 돼지 삼형제'},
    {id:'pb_seishi',   n:'도망쳐 들어간 벽돌집',              h:'처음 1회차에서 만나는, 익숙한 이야기'},
    {id:'pb_genten',   n:'영국의 진짜 이야기',                h:'늑대가 달콤한 말로 꾀어내려 하면……'},
    {id:'pb_kyoryoku', n:'처음부터 3형제가 함께',             h:'갈림길에서 같은 길을 고르면……'},
    {id:'pb_sonae',    n:'망보기와 준비',                     h:'늑대를 멀리서 발견하면……'},
    {id:'pw_taru',     n:'괴물이다!',                         h:'배고픈 늑대의 이야기에서 꾀어내는 쪽을 고르면……'},
    {id:'pw_fuufuu',   n:'후우 후우의 진짜 쓰임새',           h:'배고픈 늑대의 이야기에서 솔직하게 이야기하면……'},
    {id:'ps_mamoru',   n:'꿈쩍도 하지 않습니다',              h:'벽돌집의 이야기에서 바람에도 비에도……'},
    {id:'ps_waraigoe', n:'웃음소리의 그릇',                   h:'벽돌집의 이야기에서 벽난로에 불을 지피면……'}
  );

})();
