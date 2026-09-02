"use strict";
/* Os Musicos de Bremen - Portuguese (neutral; avoid Europe-only or Brazil-only slang,
   prefer forms understood in both) scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   As formulas fixas (musico da cidade / qualquer coisa e melhor que a morte / o canto do galo /
   a boca ainda quente de quem contou a historia por ultimo) foram redigidas por conta propria,
   sem copiar traducoes existentes. Os animais nao recebem nomes proprios. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var BREMEN_PT = {

  /* ================= Os Musicos de Bremen ================= */

  br1:{art:'br_koya', text:'Esta é a história de um burro que trabalhou muitos anos para o mesmo dono.\nNo moinho, ele carregava sacos de farinha, um atrás do outro.\nMas ficou velho, e as forças foram diminuindo.', next:'br2'},

  br2:{art:'br_koya', text:'Um dia, o burro percebeu uma coisa.\n(Meu dono pensa em deixar de me dar comida.)\nEntão o burro saiu do moinho.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'Para Bremen!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Vou para Bremen e lá serei músico da cidade."\nAssim decidiu o burro, e começou a andar pela estrada.';
    if(f.first) return t;
    return t + '\nQue caminho ele toma?';
  }, choices:[
    {t:'O caminho junto ao rio', go:'br3r', set:{brmichi:'kawa'}},
    {t:'O caminho entre os campos', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'No caminho entre os trigais, o vento passava livre.\nDepois de muito tempo, o burro andava sem carregar nada.'
    : 'No caminho junto ao rio, o som da água soava agradável.\nDepois de muito tempo, o burro andava sem carregar nada.', next:'br4'},

  br4:{art:'br_inu', text:'À beira do caminho estava deitado um cão de caça.\nRespirava ofegante, com dificuldade.\n"O que houve? Por que está tão sem fôlego?"', next:'br5'},

  br5:{art:'br_inu', text:'"Fiquei velho e já não consigo acompanhar a caçada.\nEntão meu dono quis matar-me.\nFugi, mas de que vou viver agora?"\n"Eu vou para Bremen ser músico. Venha comigo.\nEu toco o alaúde, e você bate o tambor."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'O cão entra para o grupo!!'}, then:'br6'},

  br6:{art:'br_neko', text:'Um pouco adiante, um gato estava sentado em cima de um muro.\nTinha uma cara triste, como três dias de chuva sem parar.', next:'br7'},

  br7:{art:'br_neko', text:'"Fiquei velho, meus dentes ficaram fracos,\ne agora gosto mais de ficar junto à lareira do que de caçar ratos.\nEntão minha dona quis afogar-me no rio."\n"Então vamos juntos para Bremen.\nEm música da noite, ninguém canta melhor que você."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'Em música da noite...'}, then:'br8'},

  br8:{art:'br_ondori', text:'No portão de uma casa de campo, um galo cantava com toda a força.\n"Que voz forte."\n"Amanhã é domingo, e vêm visitas.\nEu vou ser a sopa.\nPor isso canto enquanto ainda tenho voz."', next:'br9'},

  br9:{art:'br_ondori', text:'"Qualquer coisa é melhor que a morte. Você tem uma boa voz.\nVamos fazer música juntos. Com certeza vai dar em alguma coisa."\nO galo saltou do portão.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Cocoricó!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'Bremen não dava para alcançar num só dia.\nQuando a noite chegou, os 4 resolveram descansar na floresta.';
    if(f.first) return t + '\nO burro e o cão debaixo de uma árvore. O gato num galho. O galo bem no alto.';
    return t + '\nOnde eles descansam?';
  }, choices:[
    {t:'Debaixo da árvore, todos juntos', go:'br10r', set:{brmori:'shita'}},
    {t:'Num galho alto, ficando de vigia', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'O gato e o galo subiram num galho alto.\nNo chão, o burro e o cão dormiram encostados um no outro.'
    : 'Os 4 dormiram em roda, debaixo de uma árvore grande.\nSó o galo subiu bem no alto antes de dormir.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Lá do alto, o galo viu uma luz bem longe.\n"Há uma casa ali. Tem uma luz acesa."';
    if(f.first) return t + '\n"Vamos. Esta pousada aqui não é lá muito boa", disse o burro.';
    return t + '\nO que eles fazem?';
  }, choices:[
    {t:'Ir à casa com a luz', go:'br12'},
    {t:'Ficar longe e passar a noite na floresta', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'Ao chegar à casa com a luz, o burro espiou pela janela.\n"O que você vê?", perguntou o galo.\n"Uma mesa cheia de comida boa,\ne ladrões sentados em volta dela, comendo."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"É disso que nós precisamos", disse o galo.\nOs 4 juntaram as cabeças e combinaram um plano.', next:'br14'},

  br14:{art:'br_mado', text:'O burro apoiou as patas da frente no peitoril da janela.\nO cão saltou nas costas do burro,\no gato subiu para cima do cão,\ne bem no alto pousou o galo.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'Todos juntos!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'E então todos saltaram pela janela ao mesmo tempo.\nCrás! O vidro quebrou!\nOs ladrões gritaram "Um monstro!" e fugiram para a floresta.', next:'br16'},

  br16:{art:'br_gochisou', text:'Os 4 tomaram lugar à mesa.\nComeram como se fosse comida para quarenta dias, apagaram a luz\ne cada um foi dormir no lugar que preferiu.\nO burro no quintal, o cão na porta, o gato na lareira, o galo na viga do telhado.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Meia-noite.'}, then:'br17'},

  br17:{art:'br_yoru', text:'Um dos ladrões voltou para ver o que tinha acontecido.\nA casa estava em silêncio. Na cozinha, algo brilhava no fundo da lareira.\n(São brasas que ainda não apagaram.)\nFoi o que ele pensou, e aproximou um fósforo. Justo nesse instante.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'Arranhão!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'O gato saltou no rosto dele e arranhou.\nO ladrão correu para a porta de trás. Lá estava o cão.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'Mordida!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'Quando ele saiu correndo para o quintal, o burro deu um coice com as patas de trás.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'Coice!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Em cima do telhado, o galo acordou e cantou bem alto.\n"Cocoricó!"\nPara o ladrão, aquilo soou assim:\n"Tragam o patife para cá!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'Uma bruxa! Um juiz!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'O ladrão fugiu de volta para a floresta e disse aos companheiros:\n"Naquela casa mora uma bruxa terrível.\nEla cuspiu em mim e arranhou meu rosto com unhas compridas.\nNa porta havia um homem com uma faca, que furou minha perna.\nNo quintal havia um monstro preto, que me bateu com um bastão.\nEm cima do telhado havia um juiz, que gritou: tragam o patife para cá!"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'Daquele dia em diante, os ladrões nunca mais voltaram.';
    if(f.first) return t;
    return t + '\nDe manhã, os 4 conversaram. O que eles fazem?';
  }, choices:[
    {t:'Morar nesta casa', go:'e_br_seishi'},
    {t:'Ir mesmo assim para Bremen', go:'brb1'},
    {t:'Decidir o que fazer de manhã nesta casa', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'Os 4 músicos gostaram tanto daquela casa\nque não quiseram mais sair de lá.\nE a boca de quem contou esta história por último ainda está quente.\nE viveram felizes para sempre.'},

  /* ---- Na cidade de Bremen ---- */
  brb1:{art:'br_roba', text:'"Esta é uma boa casa. Mas nós somos músicos."\nOs 4 trancaram a casa e voltaram a andar pela estrada.', next:'brb2'},
  brb2:{art:'br_bremen', text:'A cidade de Bremen era grande e cheia de vida.\nE na praça já havia os músicos da cidade.\nAs trombetas e os tambores brilhavam.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'... Então, por aqui mesmo.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'Num canto da praça, os 4 juntaram as vozes.\nIó, au, miau, cocoricó.\nVeio uma criança, depois outra, e foram chegando mais.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Instrumentos brilhantes eles não tinham.\nMas todos os dias vinham crianças àquele canto da praça.\nNum canto da cidade, os 4 tornaram-se músicos.\nE viveram felizes para sempre.'},

  /* ---- Manha na floresta ---- */
  brm1:{art:'br_mori', text:'"É melhor não chegar perto de uma casa de noite", disse o burro.\nOs 4 passaram a noite na floresta.', next:'brm2'},
  brm2:{art:'br_mori', text:'De manhã o galo cantou, e todos acordaram.\n"Já que estamos aqui, vamos tocar uma vez juntos."\nIó, au, miau, cocoricó.', next:'brm3'},
  brm3:{art:'br_roba', text:'Naquele momento passou uma carroça carregada de sacos de farinha.\nO moleiro ouviu a voz do burro e disse:\n"Que voz boa. Não quer trabalhar no meu moinho? Comida é o que não vai faltar."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Eu sou músico.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'O burro recusou com educação e seguiu andando com os companheiros.\nAonde iriam chegar, ninguém ainda sabia.\nO canto dos 4 soou bem longe na manhã da floresta.\nE viveram felizes para sempre.'},

  /* ---- A manha de cada um ---- */
  bra1:{art:'br_ie_asa', text:'De manhã, o que fazer nesta casa?', choices:[
    {t:'O galo anuncia a hora no telhado', go:'bra1r', set:{brasa:'ondori'}},
    {t:'O cão tira uma soneca na porta', go:'bra1r', set:{brasa:'inu'}},
    {t:'O gato dorme enrolado diante da lareira', go:'bra1r', set:{brasa:'neko'}},
    {t:'O burro balança as orelhas no sol', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'O cão deitou-se na porta.\nNão precisava mais correr atrás de ninguém.';
    if(f.brasa==='neko') return 'O gato enrolou-se diante da lareira.\nOs dias de caçar ratos tinham acabado.';
    if(f.brasa==='roba') return 'O burro ficou parado no sol e balançou as orelhas compridas.\nNas costas dele não havia mais sacos de farinha.';
    return 'O galo subiu no telhado e cantou para o céu do lado leste.\nNinguém tinha pedido isso a ele.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Ninguém mandou fazer nada disso.\nCada um decidiu por conta própria.\nHoje também o galo anuncia a hora, o cão dorme na porta,\no gato fica enrolado diante da lareira, e o burro balança as orelhas compridas no sol.\nE viveram felizes para sempre.'},

  /* ================= A historia dos ladroes ================= */

  bd1:{art:'dorobou_mori', text:'Esta é a história de 3 ladrões que moravam numa casa na floresta.\nNaquela noite também, a mesa estava cheia de comida boa.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'O que tem para comer hoje?', choices:[
    {t:'Salsichas e vinho', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Pão, queijo e maçãs', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'Encheram a mesa inteira de pão, queijo e maçãs.\nOs 3 começaram a comer bem animados.'
    : 'Assaram as salsichas e serviram o vinho.\nOs 3 começaram a comer bem animados.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'De repente, do lado de fora da janela, veio uma voz que ninguém tinha ouvido antes.\nIó, au, miau, cocoricó. Tudo ao mesmo tempo.\nE então, crás! O vidro quebrou!\n"Um monstro!"\nOs 3 fugiram para a floresta.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'No fundo da floresta, os 3 recuperaram o fôlego.\n"E aquela casa? O que fazer?"', choices:[
    {t:'Voltar para dar uma olhada', go:'bdg1'},
    {t:'Desistir daquela casa', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'A cozinha estava escura como breu.\nNo fundo da lareira brilhavam duas luzinhas.\n(São brasas que ainda não apagaram.)\nEle aproximou um fósforo, e...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'Uma bruxa!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'O rosto arranhado, a perna furada, uma bastonada nas costas,\ne do telhado: "Tragam o patife para cá!"\nO ladrão fugiu de volta para a floresta.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"Há uma bruxa, um homem com uma faca, um monstro preto e um juiz."\nNenhum dos companheiros chegou perto daquela casa outra vez.\nO que havia de verdade lá, ninguém chegou a saber.\nE viveram felizes para sempre.'},

  bdm1:{art:'dorobou_mori', text:'"Aquela casa agora é deles."\nOs 3 seguiram para a saída da floresta.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'Na cidade havia feira de manhã.\nNum cartaz estava escrito: "Procuram-se carregadores."\nOs 3 entreolharam-se.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'Do que os 3 viveram daquele dia em diante,\nesta história não conta.\nNa casa da floresta, o canto dos 4 continua ecoando.\nFim.'},

  /* ================= A historia do galo ================= */

  bo1:{art:'ondori_yane', text:'Esta é a história de um galo que cantava no portão de uma casa de campo.\nAmanhã é domingo. Vêm visitas, e eu vou ser a sopa.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'No último dia, o que fazer?', choices:[
    {t:'Cantar com toda a força', go:'bo2r', set:{bolife:'naku'}},
    {t:'Andar devagar pelo quintal', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Andou devagar pelo quintal, de uma ponta à outra.\nEra para ser um último olhar.'
    : 'No portão, cantou até a voz ficar rouca.\nAlgumas pessoas taparam os ouvidos. Ele não se importou.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Naquele momento passaram por ali um burro, um cão e um gato.\n"Qualquer coisa é melhor que a morte. Você tem uma boa voz."\nO galo saltou do portão.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Será que a minha voz serve?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'Na casa da floresta, o galo pousou bem no alto.\nO que veio depois, o galo decidiu sozinho.', choices:[
    {t:'Cantar do telhado à meia-noite', go:'bok1'},
    {t:'Morar nesta casa e anunciar a manhã', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'À meia-noite, ele acordou na viga do telhado.\nLá de baixo, um ladrão corria de um lado para o outro.\nO galo cantou com toda a força.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Cocoricó!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'Para o ladrão soou como "Tragam o patife para cá!".\nA voz que ia ser sopa protegeu a casa.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'Para que serve a sua voz, quem decide é ele mesmo.\nDaí em diante, o galo cantou quando quis e como quis.\nE viveram felizes para sempre.'},

  boa1:{art:'br_ie_asa', text:'Quando começaram a morar na casa, o galo subiu no telhado.\nNinguém tinha pedido isso a ele.\nDe manhã, quando o céu do lado leste clareava, o galo cantava.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'O cão acordou, o gato espreguiçou-se, e o burro sacudiu as orelhas.\n"Não vou mais ser sopa. Toda manhã eu canto aqui."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'Com a voz do galo, alguém acorda.\nSó isso já deixava o galo contente.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_PT);

  T.ZK_EN.push(
    {section:'Os Músicos de Bremen'},
    {id:'br_seishi', n:'A casa de que gostaram',  h:'A história original, da 1ª vez'},
    {id:'br_bremen', n:'Na cidade de Bremen',     h:'De manhã, ir mesmo assim para Bremen...'},
    {id:'br_mori',   n:'Manhã na floresta',       h:'Não se aproximar da casa com a luz...'},
    {id:'br_asa',    n:'A manhã de cada um',      h:'Decidir o que fazer de manhã nesta casa...'},
    {id:'bd_gokai',  n:'A bruxa e o juiz',        h:'Na história dos ladrões, voltar para dar uma olhada...'},
    {id:'bd_machi',  n:'Sair da floresta',        h:'Na história dos ladrões, desistir da casa...'},
    {id:'bo_koe',    n:'A voz que chegou',        h:'Na história do galo, cantar à meia-noite...'},
    {id:'bo_asa',    n:'Anunciar a manhã',        h:'Na história do galo, anunciar a manhã...'}
  );

})();
