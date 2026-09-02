"use strict";
/* Urashima Taro - Korean scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_KO !== 'undefined') {
    T = { SCENES_EN: SCENES_KO, ZK_EN: ZK_KO };
  } else {
    T = require('./story_ko.js');
  }

  var URA_KO = {

  /* ================= 우라시마 타로 ================= */

  u1:{art:'ura_hama', text:'이것은 바닷가 마을에 사는 젊은 어부의 이야기입니다.\n이름은 우라시마 타로.\n나이 드신 아버지 어머니와 셋이서 살고 있었습니다.', next:'u2'},

  u2:{art:'ura_hama', text:'오늘도 파도 소리가 좋습니다.\n고기잡이를 나가기 전에, 무엇을 할까요?', choices:[
    {t:'그물을 손질한다', go:'u2r', set:{ulife:'ami'}},
    {t:'한동안 바다를 바라본다', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? '반짝이는 파도를 바라보고 있으면, 마음이 스르르 조용해집니다.\n바다는 타로의 가장 친한 친구입니다.'
    : '정성껏 손질한 그물은 기분 좋게 팽팽합니다.\n도구를 소중히 하는 것이, 타로의 방식입니다.', next:'u3'},

  u3:{art:'ura_ijime', text:'문득 보니, 바닷가에서 아이들이 커다란 거북이를 둘러싸고 떠들고 있습니다.\n거북이는 곤란해하며, 목을 움츠리고 있었습니다.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'거북이를 괴롭히면 안 돼!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'아이들이 돌아간 뒤, 타로는 거북이를 살며시 바다로 돌려보냈습니다.\n"이제 잡히면 안 된다"\n거북이는 몇 번이나 뒤돌아보며, 파도 너머로 사라져 갔습니다.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'그로부터 며칠이 지난 어느 날.\n물가에, 그 거북이가 찾아왔습니다.\n"타로님, 지난번에는 고마웠습니다.\n보답으로, 용궁으로 안내해 드리겠습니다"', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'거북이 등에 올라타, 자 이제 바닷속으로.\n그런데, 어떻게 갈까요?', choices:[
    {t:'등에 꼭 붙잡는다', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'두리번두리번 경치를 즐긴다', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'용궁으로!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? '물고기 떼가 반짝반짝, 빛의 기둥이 일렁일렁.\n본 적 없는 경치에, 타로는 푹 빠져들었습니다.'
    : (f.uride==='tsukamaru'
      ? '등딱지를 꼭 붙잡으니, 거북이의 등은 따뜻해서,\n이상하게도 무섭지 않았습니다.'
      : '푸른 빛 속을, 거북이는 쑥쑥 깊이 잠겨 들어갑니다.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'바다 밑바닥에, 참으로 훌륭한 성이 보이기 시작했습니다.\n용궁입니다.\n그야말로, 그림으로도 그릴 수 없는 아름다움.', next:'u8'},

  u8:{art:'ura_otohime', text:'"어서 오세요, 타로님. 거북이를 구해 주신, 상냥한 분이시군요"\n오토히메님이, 환하게 웃으며 맞이해 주었습니다.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'도미와 광어의 춤!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'죽 늘어선 진수성찬 앞에서, 도미와 광어가 흥겹게 춤을 춥니다.\n타로는 눈을 동그랗게 뜨고, 손뼉을 쳤습니다.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = '성에는 "사계절의 방"이 있었습니다.\n네 개의 창문에서, 봄 여름 가을 겨울의 경치가, 한꺼번에 보이는 것입니다.';
    if(f.first) return t;
    return t + '\n어느 창문이 가장 마음에 들었나요?';
  }, choices:[
    {t:'벚꽃이 지는 봄의 창문', go:'u10r', set:{umado:'haru'}},
    {t:'눈이 내리는 겨울의 창문', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? '바다 밑바닥에서 보는 눈은, 고요하고 조용해서, 언제까지나 바라볼 수 있습니다.\n"신기하구나. 여기에는 무엇이든 다 있구나"'
    : '창문 너머에서, 벚꽃 잎이 하늘하늘 흩날립니다.\n"신기하구나. 여기에는 무엇이든 다 있구나"', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'즐거운 나날은, 꿈처럼 지나가고……\n정신을 차려 보니, 3년이 지나 있었습니다.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = '어느 날 밤, 타로는 문득, 마을에 두고 온 아버지와 어머니를 떠올렸습니다.\n잘 지내고 계실까. 외로워하고 계시지는 않을까.';
    if(f.first) return t + '\n"오토히메님. 저는 이제 슬슬 돌아가게 해 주세요"';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'"돌아가게 해 주세요"라고 전한다', go:'u13'},
    {t:'조금만 더, 여기에 있는다', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'오토히메님은 조금 쓸쓸한 듯 고개를 끄덕이고,\n검고 윤이 나는, 아름다운 상자를 내밀었습니다.\n"이것은 다마테바코라고 합니다"', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'절대로 열어서는 안 됩니다'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'거북이 등에 올라타, 바다를 되돌아갑니다.\n뒤돌아보니, 용궁의 불빛이, 멀리 작아져 갔습니다.', next:'u15'},

  u15:{art:'ura_hama700', text:'바닷가에 닿으니, 어쩐지 모습이 다릅니다.\n집이 없습니다. 눈에 익은 소나무도 없습니다.\n길에서 마주치는 사람은, 모르는 얼굴뿐.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'용궁에서의 3년 사이에,\n땅 위에서는 700년이 지나 있었던 것입니다.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = '아버지도 어머니도, 아주 먼 옛날 사람이 되어 있었습니다.\n타로는 혼자가 되었습니다.';
    if(f.first) return t + '\n허전한 마음에, 다마테바코의 뚜껑에 손을 얹었습니다.';
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'다마테바코를 연다', go:'uc_kemuri'},
    {t:'열지 않고, 바닷가에서 계속 기다린다', go:'ua1'},
    {t:'바다에 돌려주러 간다', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'하얀 연기……'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = '연기가 사라졌을 때, 타로는 백발의 할아버지가 되어 있었습니다.\n용궁에서 멈춰 있던 시간이, 한꺼번에 되돌아온 것입니다.';
    if(f.first) return t;
    return t + '\n어떻게 할까요?';
  }, choices:[
    {t:'바다를 바라보며 서 있는다', go:'e_u_seishi'},
    {t:'용궁 쪽으로, 걸어 나간다', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'열고 나서 후회한 다마테바코.\n그래도 타로의 가슴에는, 그림으로도 그릴 수 없는 아름다운 나날이,\n보물처럼 남아 있었습니다.\n파도 소리만이, 조용히 울리고 있습니다.\n끝.'},

  /* ---- 학(오토기조시의 정통 결말) ---- */
  ut1:{art:'ura_oldman', text:'물가로, 한 걸음, 두 걸음.\n용궁이 있는 바다로, 빨려 들어가듯 걸어가니,\n타로의 몸이, 두둥실 가벼워졌습니다.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'학이 되었다!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'하얀 학이 된 타로는, 아침노을이 물든 바다를 날아갑니다.\n그러자 파도 사이로, 초록빛 거북이가 불쑥 얼굴을 내밀었습니다.\n그것은, 거북이로 모습을 바꾼 오토히메님이었습니다.\n학과 거북이는, 장수와 행복의 표시.\n두 사람은 언제까지나, 빛나는 바다 위를 계속 춤추었습니다.\n그리고 모두 행복하게 살았습니다.', ending:'u_tsuru'},

  /* ---- 열지 않는다(풍토기의 약속) ---- */
  ua1:{art:'ura_hama700', text:'타로는 상자를 열지 않았습니다.\n"열어서는 안 된다는, 약속이니까"\n그날부터 타로는, 아침에도 저녁에도, 바닷가에서 바다를 바라보며 살았습니다.', next:'ua2'},
  ua2:{art:'ura_fune', text:'며칠째 되는 아침. 바다가 금빛으로 빛나고,\n배 한 척이 미끄러지듯 다가왔습니다.\n"타로님. 약속을, 지켜 주셨군요"\n오토히메님의 목소리였습니다.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"상자를 열지 않으면, 다시 만날 수 있다고 믿고 있었습니다"\n타로는 배에 올라, 이번에는 작별이 없는 여행을 떠났습니다.\n다마테바코는, 두 사람을 잇는 약속의 표시였던 것입니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 바다로 돌려준다 ---- */
  uu1:{art:'ura_hama', text:'타로는 작은 배를 빌려, 먼바다로 나갔습니다.\n"소중한 것은, 소중한 곳으로 돌려주자"\n다마테바코를, 살며시 파도 위에 띄웁니다.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'그러자, 파도 아래에서 그 거북이가 나타나,\n상자를 등에 실었습니다.\n"타로님. 그것이, 가장 좋은 대답일지도 모르겠네요"', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'추억은, 상자를 열지 않아도, 가슴속에 있습니다.\n타로는 새로운 마을에서, 다시 어부로 살아가기로 했습니다.\n바다는 오늘도, 반짝반짝 빛나고 있습니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ---- 남는다 ---- */
  un1:{art:'ura_otohime', text:'"조금만 더, 여기에 있게 해 주세요. 하지만……"\n마음속을 꿰뚫어 본 듯이, 오토히메님은 조용히 고개를 끄덕이고,\n타로를 물거울 앞으로 데려갔습니다.', next:'un2'},
  un2:{art:'hime_ryugu', text:'물거울에는, 그리운 마을의 집이 비치고 있습니다.\n아버지도 어머니도, 건강하게 웃고 있었습니다.\n"때때로 여기에서 지켜봅시다.\n만나고 싶어지면, 언제든 거북이가 데려다 드릴 거예요"', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'타로는 안심하고, 용궁의 생활을 이어 가기로 했습니다.\n떨어져 있어도, 서로를 생각하고 있으면, 가족은 가족.\n용궁의 나날은, 오늘도 평온합니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 오토히메님의 이야기 ================= */

  h1:{art:'hime_ryugu', text:'이것은, 용궁의 오토히메님의 이야기입니다.\n아름다운 성, 맛있는 진수성찬, 노래와 춤.\n무엇이든 다 있는데, 오토히메님은 조금 지루했습니다.', next:'h2'},
  h2:{art:'hime_ryugu', text:'오늘은 무엇을 할까요.', choices:[
    {t:'산호 정원을 산책한다', go:'h2r', set:{hlife:'sango'}},
    {t:'고래의 노래를 들으러 간다', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? '먼바다에서, 고래의 낮은 노래가 울려옵니다.\n크고, 다정하고, 조금 쓸쓸한 노래입니다.'
    : '빨갛고 분홍빛을 띤 산호가, 정원 가득 흔들리고 있습니다.\n예쁜데, 보여 주고 싶은 상대가 없는 것이, 아쉬웠습니다.', next:'h3'},
  h3:{art:'hime_ryugu', text:'어느 날, 거북이가 서둘러 돌아왔습니다.\n등딱지를 반짝반짝 빛내고, 눈을 빛내고 있습니다.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'공주님, 들어 보세요!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"바닷가에서 붙잡혀 있던 저를, 구해 준 사람이 있습니다"\n성에 초대된 타로님은, 잘 웃는 사람이었습니다.\n용궁에, 지금까지 없던 웃음소리가 늘어나,\n지루하던 매일이, 빛깔을 띠어 보였습니다.', next:'h5'},
  h5:{art:'ura_otohime', text:'하지만, 3년째 되는 어느 날 밤.\n"저는 이제 슬슬 돌아가게 해 주세요"\n오토히메님의 가슴이, 꽉 조여 왔습니다.\n붙잡고 싶다. 하지만, 가족을 생각하는 마음을, 막아서는 안 된다.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'붙잡고 싶다.\n하지만…….'}, then:'h6'},
  h6:{art:'ura_tama', text:'오토히메님은, 검고 윤이 나는 상자를 준비했습니다.\n이 상자에, 무엇을 담아 보낼까요.', choices:[
    {t:'타로님의 즐거웠던 나날을 담는다', go:'e_h_himitsu'},
    {t:'"다시 만날 수 있다"는 마법을 담는다', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'용궁의 3년은, 땅 위의 700년.\n그대로라면, 타로님은 순식간에 나이를 먹고 맙니다.\n그래서 상자에, 흘러간 시간을 살며시 가두었습니다.\n"열지 않으면, 타로님은 계속 타로님인 채로.\n쓸쓸한 밤에는, 이 상자를 안고 잠들어 주세요"\n그것이, 아무도 모르는 다마테바코의 비밀이었습니다.\n그리고 모두 행복하게 살았습니다.'},
  hm1:{art:'hime_ryugu', text:'"상자를 열지 않고 계셔 주시면, 반드시 다시 만날 수 있습니다"\n그렇게 소원을 담아, 오토히메님은 상자를 건넸습니다.\n그리고 그날부터, 매일 물거울을 들여다보았습니다.', next:'hm2'},
  hm2:{art:'ura_fune', text:'물거울 속의 타로님은, 오늘도 상자를 열지 않고,\n가만히 바다를 바라보고 있습니다.\n"……이제 충분합니다. 마중을 나갑시다"\n오토히메님은, 가장 빠른 배를 내었습니다.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'금빛 아침 바다를, 배가 미끄러져 갑니다.\n기다려 주는 사람이 있는 곳으로, 곧장.\n약속은, 지키는 사람과 믿는 사람이 갖추어져야,\n비로소 마법이 되는 것입니다.\n그리고 모두 행복하게 살았습니다.'},

  /* ================= 거북이의 이야기 ================= */

  v1:{art:'kame_hama', text:'이것은, 바다거북 한 마리의 이야기입니다.\n햇볕 쬐기를 아주 좋아해서, 그날도 바닷가에서 꾸벅꾸벅.\n정신을 차려 보니, 아이들에게 둘러싸여 있었습니다.', next:'v2'},
  v2:{art:'kame_hama', text:'"거북이를 괴롭히면 안 돼!"\n상냥한 목소리의 어부가 구해 주어,\n바다로 살며시 돌려보내 주었습니다.\n파도에 흔들리면서, 거북이는 굳게 마음먹었습니다.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'이 은혜는 반드시!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'용궁으로 돌아온 거북이는, 곧바로 준비입니다.\n먼저 무엇을 할까요?', choices:[
    {t:'등딱지를 반짝반짝 닦는다', go:'v3r', set:{vlife:'migaku'}},
    {t:'바로 공주님께 보고한다', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? '손님을 태울 등이니까, 반짝반짝하게 해야 합니다.\n닦아 낸 등딱지는, 거울처럼 빛났습니다.'
    : '"그것 참 멋진 분이시군요"라며 공주님은 방긋.\n"꼭 보답으로, 초대합시다"', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'공주님의 허락을 받고, 거북이는 바닷가로 마중을 나갔습니다.\n"타로님, 보답으로 용궁으로 안내해 드리겠습니다"\n등에 손님을 태우는 것은, 태어나서 처음입니다.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'등에 타세요!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'자, 용궁까지의 여정입니다.\n어느 길로 갈까요?', choices:[
    {t:'아껴 둔 지름길로 간다', go:'v5r', set:{vmichi:'chika'}},
    {t:'가장 아름다운 길로 간다', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? '커다란 고래 옆을, 쓩 하고 지나갑니다.\n"우와!" 하고 등에 탄 타로님이 소리를 질렀습니다.\n조금 자랑스러운 지름길입니다.'
    : '산호 숲을 천천히 빠져나갑니다.\n"아름답구나" 하고 등에 탄 타로님이 감탄했습니다.\n조금 자랑스러운 경치입니다.', next:'v6'},
  v6:{art:'ura_ryugu', text:'무사히 데려다 드리고, 큰 임무 완료.\n그럼, 이제부터 어떻게 할까요?', choices:[
    {t:'용궁에 남아서 시중을 든다', go:'e_v_senaka'},
    {t:'바닷가로 돌아가, 돌아오기를 기다린다', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'그로부터 3년, 거북이는 타로님의 전속 탈것 담당.\n등은 언제나 특등석입니다.\n"거북이님의 등이, 제일 편안하구나"\n그런 말을 들을 때마다, 등딱지가 조금 자랑스러웠습니다.\n그리고 모두 행복하게 살았습니다.'},
  vm1:{art:'kame_hama', text:'거북이는 바닷가로 돌아가, 매일 물가에서 기다리기로 했습니다.\n거북이는, 아주 오래 삽니다.\n아무리 시간이 흘러도, 소중한 약속은 잊지 않습니다.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'세월은 흘러, 700년.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'어느 아침, 그리운 사람이 바닷가에 서 있었습니다.\n"어서 오세요, 타로님"\n몰라보게 변해 버린 바닷가에서, 단 한 마리,\n거북이만이, 타로님을 기억하고 있었던 것입니다.\n그리고 모두 행복하게 살았습니다.'}

  };

  Object.assign(T.SCENES_EN, URA_KO);

  T.ZK_EN.push(
    {section:'우라시마 타로'},
    {id:'u_seishi',   n:'열고 나서 후회한 상자',   h:'맨 처음 1회차의, 원래 이야기'},
    {id:'u_tsuru',    n:'학이 된 타로',            h:'상자를 연 뒤, 바다 쪽으로 걸어가면……'},
    {id:'u_akenai',   n:'열지 않은 다마테바코',    h:'약속을 지키고, 바닷가에서 계속 기다리면……'},
    {id:'u_umi',      n:'바다로 돌려준 보물',      h:'상자를 열지 않고, 바다로 돌려주러 가면……'},
    {id:'u_nokoru',   n:'용궁의 나날',             h:'돌아가지 않고, 조금 더 남으면……'},
    {id:'uh_himitsu', n:'다마테바코의 비밀',       h:'오토히메님의 이야기에서, 나날을 담으면……'},
    {id:'uh_mukae',   n:'마중 오는 배',            h:'오토히메님의 이야기에서, 마법을 담으면……'},
    {id:'uv_senaka',  n:'등에 탄 손님',            h:'거북이의 이야기에서, 용궁에 남으면……'},
    {id:'uv_matsu',   n:'바닷가의 약속',           h:'거북이의 이야기에서, 바닷가에서 계속 기다리면……'}
  );

})();
