"use strict";
/* Chapeuzinho Vermelho - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both) scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Estilo: português simples de livro ilustrado, igual ao de story_pt.js.
   O famoso diálogo repetido segue a fórmula tradicional ("É para ... você melhor"). */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var AKZ_PT = {

  /* ================= Chapeuzinho Vermelho ================= */

  z1:{art:'akz_home', text:'Esta é a história de uma menina que ficava muito bem com um chapeuzinho vermelho.\nO chapeuzinho era feito à mão pela avó, e a menina o usava todos os dias.\nPor isso todo mundo chamava a menina de Chapeuzinho Vermelho.', next:'z2'},

  z2:{art:'akz_home', text:'Um dia, a mãe disse:\n"A avó, que mora do outro lado da floresta, está doente. Você leva doces e suco de uva para ela?"\n"Não fique se distraindo pelo caminho, e não saia da trilha."', next:'z3'},

  z3:{art:'akz_home', text:'Chapeuzinho Vermelho pensou um pouco.\nVamos colocar mais uma coisa na cesta.', choices:[
    {t:'Colocar um pote de mel', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Colocar uma maçã bem vermelha', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'A maçã bem vermelha rolou para dentro da cesta e brilhou ali.\nSerá que a avó vai gostar?'
    : 'Ela colocou com cuidado o pote de mel doce na cesta.\nSerá que a avó vai gostar?', next:'z4'},

  z4:{art:'akz_door', text:'"Já estou indo!"\nCom a cesta no braço, Chapeuzinho Vermelho saiu pela porta num pulo.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'Em missão de entrega!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'Na floresta de abetos, a luz brilhava entre os galhos.\nDava para ouvir o canto dos passarinhos.', next:'z5b'},
  z5b:{art:'akz_forest', text:'E agora, de que jeito caminhar?', choices:[
    {t:'Caminhar cantando uma canção', go:'z5r', set:{walk:'uta'}},
    {t:'Caminhar procurando borboletas', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'Uma borboleta amarela voava adiante, no meio do caminho.\nParecia até que estava mostrando a trilha.'
    : '"Lá, lá, lá, pela trilha da floresta."\nOs passarinhos cantaram junto com a canção de Chapeuzinho Vermelho.', next:'z6'},

  z6:{art:'akz_meet', text:'Farfalha, farfalha.\nDe trás de uma árvore apareceu um Lobo grande.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Bom dia, mocinha bonita. Aonde você vai?"\nperguntou o Lobo com um sorriso largo.';
    if(f.first) return t;
    return t + '\nO que ela vai fazer?';
  }, choices:f=>{
    var c = [
      {t:'Responder com sinceridade', go:'z8'},
      {t:'"Não vou contar!"', go:'zn1'},
      {t:'Correr de volta para casa', go:'zh1'}
    ];
    if(f.item) c.push({t:'Perguntar: "Você está com fome?"', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"Para a casa da avó. Ela está doente, e eu levo doces e suco de uva."\nChapeuzinho Vermelho respondeu com sinceridade.\nE lá no fundo, o Lobo foi bolando um plano astuto.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Olhe só. Que flores bonitas estão nascendo ali.\nSe você levar um buquê, a avó com certeza vai ficar contente."';
    if(f.first) return t;
    return t + '\nO que ela vai fazer?';
  }, choices:[
    {t:'Colher algumas flores', go:'z10'},
    {t:'"Não, eu vou direto para lá"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'É mesmo, pensou Chapeuzinho Vermelho, e saiu da trilha.\nUma flor branca, uma flor azul. Cada vez que colhia uma, avistava outra ainda mais bonita mais adiante.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Enquanto isso, o Lobo...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'O Lobo correu por um atalho e chegou primeiro à casa da avó.\nToc, toc.\n"Avó, sou eu, Chapeuzinho Vermelho."\nImitando a voz dela, ele entrou.', next:'z12'},

  z12:{art:'akz_bed', text:'Em um instante, a avó foi engolida inteira.\nO Lobo vestiu a camisola dela, pôs a touca de dormir e se enfiou na cama.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Com o buquê nos braços, Chapeuzinho Vermelho finalmente chegou.\n"Ora, a porta está aberta..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Avó, eu cheguei!"\nA avó na cama estava com um jeito estranho.\nChapeuzinho Vermelho se aproximou devagar e olhou bem para o rosto dela.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'Que orelhas grandes você tem!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'É para ouvir você melhor'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'Que olhos grandes você tem!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'É para ver você melhor'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'Que mãos grandes você tem!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'É para segurar você melhor'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'Que boca grande você tem!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'É para comer você!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'Nhac!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'Quando ela deu por si, estava tudo escuro: era a barriga do Lobo.\n"É você, Chapeuzinho? Que susto. Mas agora vai ficar tudo bem."\nEra a voz da avó, e uma mão quente apertou a dela.';
    if(f.first) return t;
    return t + '\nO que as duas vão fazer?';
  }, choices:[
    {t:'Esperar quietas por ajuda', go:'z16'},
    {t:'Cantar bem alto, as duas juntas', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'De mãos dadas, as duas esperaram bem quietas.\nCom a barriga cheia, o Lobo dormia na cama: ronc, ronc.\nEra um ronco enorme, que ecoava pela casa inteira.', next:'z17'},

  z17:{art:'akz_hunter', text:'Nisso, o caçador que fazia a ronda da floresta passou por ali.\n"Que ronco vem da casa da avó... Tem alguma coisa estranha."\nEle espiou devagar para dentro, e na cama estava um Lobo de barriga inchada!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Tris, tris!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Com a tesoura, o caçador abriu com cuidado a barriga do Lobo adormecido.\n"Lá dentro estava escuro demais!", disse Chapeuzinho Vermelho.\nA avó também estava bem. Nenhuma das duas tinha um arranhão sequer.';
    if(f.first) return t;
    return t + '\nO que elas vão fazer?';
  }, choices:[
    {t:'Encher a barriga de pedras', go:'z19'},
    {t:'Fazer o Lobo prometer: "nunca mais"', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Chapeuzinho Vermelho correu até o jardim e trouxe pedras pesadas.\nO caçador encheu a barriga com elas e costurou ponto por ponto.', next:'z20'},

  z20:{art:'akz_stone', text:'O Lobo acordou e deu um salto para fugir.\nMas as pedras na barriga eram pesadas, muito pesadas.\nPum! Ele caiu ali mesmo e não se mexeu mais.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Todos se sentaram na grama e dividiram os doces e o suco de uva.\nA avó também parecia estar bem melhor.\nE Chapeuzinho Vermelho decidiu:\n"Nunca mais vou me distrair fora da trilha."\nE viveram felizes para sempre.'},

  /* ---- Não contar / ir direto -> A sabedoria da avó ---- */
  zn1:{art:'akz_meet', text:'"Não vou contar!"\nChapeuzinho Vermelho ergueu o queixo e seguiu a passos rápidos.\nO Lobo abriu um sorriso de canto e sumiu atrás das árvores.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Alguma coisa dentro dela ficou inquieta.\nChapeuzinho Vermelho apertou o passo e seguiu sem olhar para os lados.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Chapeuzinho Vermelho chegou primeiro à casa da avó.\n"Avó, encontrei um Lobo grande na floresta."\n"Ora essa. Então é melhor trancar a porta."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Clac, fez a fechadura.\nPouco depois: toc, toc.\n"Sou eu, Chapeuzinho Vermelho, abra a porta."\nPor mais que ele imitasse a voz, as duas ficaram caladas. A porta não se abriu.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Então: crec, crec.\nO Lobo subiu no telhado e ficou de tocaia lá em cima.\nA avó falou bem baixinho:\n"Esse Lobo adora cheiro de salsicha. Vamos despejar no tanque em frente da casa a água em que as salsichas cozinharam."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'Tive uma boa ideia'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'O cheiro bom de salsicha subiu em nuvens de vapor até o telhado.\nO Lobo fungou, escorregou, escorregou mais e mais...\nSplash!\nCaiu dentro do tanque e, todo encharcado, fugiu para a floresta.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Avó, você é incrível!"\n"Hi, hi. Isso é o que se chama de sabedoria dos mais velhos."\nA avó não é alguém que só serve para ser protegida.\nNaquela noite, as duas comeram salsichas bem quentinhas.\nE viveram felizes para sempre.'},

  /* ---- Fugir -> Junto com a mãe ---- */
  zh1:{art:'akz_forest', text:'Chapeuzinho Vermelho deu meia-volta e saiu correndo o mais rápido que pôde.\nO Lobo ficou sem entender nada, só olhando ela ir embora.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Mãe! Encontrei um Lobo grande na floresta!"\n"Que bom que você me contou logo. Você fez certo.\nEntão vamos juntas até a casa da avó."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'De mãos dadas com a mãe, ela percorreu de novo a trilha da floresta.\nO Lobo observava de longe, atrás das árvores, mas com uma adulta por perto ele não saiu do lugar.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'Na casa da avó, logo se ouviram risadas de todo mundo.\nQuando alguma coisa preocupa ou assusta você, conte logo para um adulto.\nEssa é a melhor magia que existe.\nE viveram felizes para sempre.'},

  /* ---- Você está com fome? -> O visitante da floresta ---- */
  zt1:{art:'akz_meet', text:'"Senhor Lobo, será que você está com fome?"\nO Lobo se assustou tanto que só piscava os olhos.\n"...Faz três dias que eu não como nada."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Chapeuzinho Vermelho se sentou na beira do caminho e dividiu os doces e a maçã bem vermelha.\nO Lobo deu uma mordida, e uma lágrima escorreu.'
    : 'Chapeuzinho Vermelho se sentou na beira do caminho e dividiu os doces com mel por cima.\nO Lobo deu uma mordida, e uma lágrima escorreu.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"Nunca ninguém foi tão gentil comigo."\nCom a barriga cheia, o Lobo voltou para o fundo da floresta.\nQuando ela contou isso na casa da avó, a avó sorriu.\n"Uma criança que sabe dividir a comida é a mais forte do mundo."\nE viveram felizes para sempre.'},

  /* ---- Cantar -> O coral da barriga ---- */
  zu1:{art:'akz_onaka', text:'"Avó, vamos cantar juntas!"\n"Boa ideia. Mesmo no escuro, dá para cantar."\nAs duas puxaram o ar bem fundo e...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'O coral da barriga!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"Lá, lá, lá, pela trilha da floresta."\nDo lado de fora da casa, o caçador não acreditou no que ouvia.\n"Canto vindo de dentro da casa? E ainda por cima... de dentro do Lobo?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Tris, tris!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Foi pela canção que eu achei vocês na hora", disse o caçador.\nO Lobo levou um susto, meteu o rabo entre as pernas e fugiu para a floresta.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Mesmo no lugar mais escuro, se você usar a voz, ela chega em alguém."\nChapeuzinho Vermelho nunca esqueceu essas palavras da avó.\nDaquele dia em diante, as duas cantam juntas, como um pequeno coral.\nE viveram felizes para sempre.'},

  /* ---- Pedir a promessa -> A manhã da promessa ---- */
  zy1:{art:'akz_rescue', text:'"Encher de pedras é crueldade demais. Em vez disso..."\nChapeuzinho Vermelho olhou bem nos olhos do Lobo, que tinha acabado de acordar.\n"Prometa que nunca mais vai comer ninguém."\nO Lobo baixou a cabeça e disse baixinho: "...Nunca mais."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'Na luz do sol da manhã, o Lobo voltou para o fundo da floresta.\nSe a promessa vai mesmo ser cumprida, ninguém sabe.\nMas o caçador disse:\n"A ronda vocês deixam por minha conta."\nE viveram felizes para sempre.'},

  /* ================= A história do Lobo ================= */

  w1:{art:'w_fuyu', text:'Esta é a história de um Lobo que vivia sozinho na floresta de inverno.\nA neve era funda, e não havia caça em lugar nenhum.\nFazia três dias que o Lobo não comia nada.', next:'w2'},
  w2:{art:'w_fuyu', text:'Uma noite muito, muito fria.\nComo o Lobo vai passar por ela?', choices:[
    {t:'Se enrolar dentro da toca', go:'w2r', set:{wnight:'maru'}},
    {t:'Uivar olhando para as estrelas', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Ele levantou o focinho para o céu azul da noite: auuuu!\nMas nenhum companheiro respondeu em lugar nenhum.'
    : 'Ele escondeu o focinho com o rabo e se enrolou bem pequenininho.\nMesmo assim, o vento que entrava pelas frestas era gelado.', next:'w3'},
  w3:{art:'w_mura', text:'De manhã, do alto da colina, ele olhou o vilarejo, e o cheiro de pão quentinho subiu no ar.\nA barriga dele roncou.\nO que fazer?', choices:[
    {t:'Criar coragem e pedir ao padeiro', go:'wp1'},
    {t:'Esperar alguém na trilha da floresta', go:'wm1'}
  ]},

  /* ---- Pedir ao padeiro ---- */
  wp1:{art:'w_panya', text:'Quando ele desceu ao vilarejo, todos fugiram com medo.\nSó o padeiro não fugiu.\n"...Você quer comer alguma coisa?"', next:'wp2'},
  wp2:{art:'w_panya', text:'O Lobo fez que sim com a cabeça, bem devagarinho.\nO padeiro separou para ele um monte de casca de pão dura.\n"Você é o primeiro lobo que pede em vez de roubar."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'A partir do dia seguinte, o Lobo passou a ajudar a rachar lenha e a receber pão em troca.\nAs pessoas do vilarejo que tinham medo dele foram se acostumando aos poucos.\nA coragem de pedir era mais forte que qualquer presa.\nE viveram felizes para sempre.'},

  /* ---- Esperar na trilha (o outro lado da história) ---- */
  wm1:{art:'akz_meet', text:'Enquanto esperava na trilha da floresta, apareceu uma menina de chapeuzinho vermelho.\nEle pretendia comê-la. Mesmo assim, a menina se aproximou sorrindo.\n"Senhor Lobo, será que você está com fome?"', choices:[
    {t:'Dizer a verdade: "estou com fome"', go:'wt1'},
    {t:'Seguir com o plano astuto', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Faz três dias que eu não como nada."\nDepois de dizer isso, o próprio Lobo se surpreendeu.\nA menina abriu a cesta e dividiu os doces com ele.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Eu sou a Chapeuzinho Vermelho. Senhor Lobo, vamos nos encontrar de novo nesta trilha."\nEle queria comê-la, e acabou ficando amigo dela.\nNos dias de fome, basta ir até aquela trilha.\nSó de pensar nisso, a floresta de inverno fica um pouco mais quente.\nE viveram felizes para sempre.'},

  wz1:{art:'akz_gma_out', text:'O Lobo deu uma resposta astuta e saiu correndo pelo atalho.\nEnquanto corria, alguma coisa espetava dentro do peito dele.\n"Se eu não comer, não passo do inverno", disse ele para si mesmo.', next:'wz2'},
  wz2:{art:'akz_bed', text:'O que veio depois está na história de Chapeuzinho Vermelho.\nEle engoliu inteiras a avó e a menina, e depois adormeceu.\nE quando acordou...', next:'wz3'},
  wz3:{art:'akz_stone', text:'A barriga dele estava cheia de pedras.\nPesadas, muito pesadas, e ele não conseguia dar um passo.\n"Então era isso que espetava no meu peito..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'O longo inverno passou,\ne a primavera chegou.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'O caçador, em sua ronda, tirou as pedras do Lobo que não conseguia se mexer e cuidou do ferimento.\n"Você aprendeu com isso?"\nO Lobo fez que sim com a cabeça, muitas e muitas vezes.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'No vento da primavera, o Lobo começa a caminhar.\nQuando sentir fome, da próxima vez ele vai dizer: "Você divide comigo?"\nO peso daquelas pedras o Lobo não esqueceu um só dia.\nE viveram felizes para sempre.'},

  /* ================= A história da avó ================= */

  g1:{art:'g_heya', text:'Esta é a história da avó que vive sozinha em uma casa na floresta.\nFoi ela quem tricotou aquele chapeuzinho vermelho.\nHoje estava com um pouco de febre e tricotava na cama.', next:'g2'},
  g2:{art:'g_heya', text:'Ainda sobrou um pouco de lã vermelha.\nO que será que ela vai tricotar agora?', choices:[
    {t:'Umas luvas pequenas', go:'g2r', set:{knit:'tebukuro'}},
    {t:'Um cachecol comprido', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'Um cachecol bem, bem comprido.\nComprido o bastante para as duas se enrolarem juntas.'
    : 'Umas luvas vermelhas pequenas.\nDo tamanho certo para aquelas mãozinhas.', next:'g3'},
  g3:{art:'g_heya', text:'Nisso, uma sombra grande passou pela janela.\nToc, toc.\n"Avó, sou eu, Chapeuzinho Vermelho."\n...Ora, ora. Essa voz está diferente do costume.', choices:[
    {t:'Conferir pela janela antes de responder', go:'gy1'},
    {t:'Responder logo: "Pode entrar"', go:'go1'}
  ]},

  /* ---- Conferir -> O visitante no telhado ---- */
  gy1:{art:'akz_machibuse', text:'Ela espiou pela fresta da cortina: um Lobo enorme!\nSem pressa e sem alvoroço, a avó girou a chave. Clac.\n"Para enganar uma velha como eu, você ainda precisa de cem anos."', next:'gy2'},
  gy2:{art:'akz_yane', text:'O Lobo subiu no telhado: crec, crec.\nA avó despejou de uma vez no tanque em frente da casa a água em que as salsichas cozinharam.\nAtraído pelo cheiro bom, o Lobo escorregou e... splash!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Todo encharcado, o Lobo fugiu para a floresta.\nQuando a avó contou isso a Chapeuzinho Vermelho, que chegou depois, a menina arregalou os olhos.\n"Avó, você parece uma heroína!"\n"Hi, hi. É que eu não sou só alguém para ser protegida."\nE viveram felizes para sempre.'},

  /* ---- Pode entrar -> Calma até na barriga ---- */
  go1:{art:'akz_bed', text:'Quem entrou foi um Lobo enorme.\nEm um instante, ela foi engolida inteira.\nMas a avó não se desesperou.\nAfinal, ela já tinha atravessado dezenas de invernos compridos.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Ora. Aqui dentro da barriga até que é quentinho."\nPouco depois, Chapeuzinho Vermelho também caiu ali dentro.\nA avó apertou bem a mãozinha dela e disse:\n"Vai ficar tudo bem. Psiu, escute com atenção. ...Está ouvindo? Passos."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Tris, tris!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'O caçador abriu a barriga com todo o cuidado.\n"Que espanto. A senhora ficou calma lá dentro esse tempo todo?"\n"Fiquei. Quem se desespera não tem boas ideias."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Em agradecimento, a avó deu ao caçador o cachecol comprido que estava tricotando.\n"A ronda no inverno deve ser fria."\nEra a história de um dia assustador, e mesmo assim todo mundo estava rindo.\nE viveram felizes para sempre.'
    : 'Em agradecimento, a avó deu ao caçador as luvas vermelhas que estava tricotando.\n"A ronda no inverno deve ser fria."\nEra a história de um dia assustador, e mesmo assim todo mundo estava rindo.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, AKZ_PT);

  T.ZK_EN.push(
    {section:'Chapeuzinho Vermelho'},
    {id:'za_seishi',   n:'O resgate do caçador',    h:'A história original, da primeira vez de todas'},
    {id:'za_chie',     n:'A sabedoria da avó',      h:'Se você não contar nada e for direto...'},
    {id:'za_gassho',   n:'O coral da barriga',      h:'Se as duas cantarem juntas na barriga escura...'},
    {id:'za_okyaku',   n:'O visitante da floresta', h:'Se você puser algo a mais na cesta e for gentil com o Lobo...'},
    {id:'za_yakusoku', n:'A manhã da promessa',     h:'Se depois do resgate você escolher outra coisa no lugar das pedras...'},
    {id:'za_okaasan',  n:'Junto com a mãe',         h:'Se você ficar com medo, voltar logo e contar...'},
    {id:'zw_pan',      n:'O primeiro pedido',       h:'Na história do Lobo, descer até o vilarejo...'},
    {id:'zw_tomo',     n:'A primeira amizade',      h:'Na história do Lobo, dizer a verdade...'},
    {id:'zw_hansei',   n:'O vento da primavera',    h:'Aonde o plano astuto leva no final...'},
    {id:'zg_yane',     n:'O visitante no telhado',  h:'Na história da avó, conferir antes de responder...'},
    {id:'zg_onaka',    n:'Calma até na barriga',    h:'Na história da avó, ficar calma...'}
  );

})();
