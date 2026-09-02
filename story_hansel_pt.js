"use strict";
/* Hansel e Gretel - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both) scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   As rimas sao redacao propria em portugues, sem seguir nenhuma traducao existente:
   "Croc, croc, croquinho, quem roi a minha casinha?" / "E o vento, e o vento. O menino do ceu."
   Nomes na grafia corrente (Hansel, Gretel). */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var HANSEL_PT = {

  /* ================= Hansel e Gretel ================= */

  hg1:{art:'hg_ie', text:'Esta é a história de uma família de lenhadores que morava perto de uma grande floresta.\nHansel e Gretel, os dois irmãos,\nmoravam ali com o pai e a madrasta, os quatro juntos.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'Naquele ano, uma grande fome se espalhou pelo país.\nO pão ficou caro, e a comida na casa do lenhador foi diminuindo aos poucos.';
    if(f.first) return t;
    return t + '\nHoje só há um pão pequeno. Como vão dividir?';
  }, choices:[
    {t:'Dividir em quatro partes iguais', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel dá mais para a irmã', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"É que eu não tenho fome."\nHansel colocou a sua parte, bem devagar, no prato de Gretel.'
    : 'Dividiram o pãozinho em quatro e comeram juntos.\n"Espero que amanhã possamos comprar um maior."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'Naquela noite, os dois ouviram a voz da madrasta.\n"Amanhã de manhã vamos levar as crianças para o fundo da floresta e deixá-las lá.\nSe não fizermos isso, nós quatro vamos morrer de fome."\nO pai disse que não, muitas vezes.\nMas no fim, assentiu com a cabeça, calado.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel começou a chorar.\n"Está tudo bem. Eu tenho um plano."\nHansel saiu sem fazer barulho e, ao luar, juntou pedrinhas brancas.';
    if(f.first) return t + '\nAté encher os bolsos.';
    return t + '\nQuais pedrinhas ele vai juntar?';
  }, choices:[
    {t:'As pedrinhas redondas e brancas', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'As que mais brilham ao luar', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'Uma por uma, ele foi testando e escolheu as que brilhavam como prata.\nAté encher os bolsos.'
    : 'Pedrinhas brancas bem redondas, até encher os bolsos.\nDe volta em casa, ele sussurrou para Gretel: "Agora está tudo bem."', next:'hg5'},

  hg5:{art:'hg_mori', text:'Na manhã seguinte, a família seguiu para a floresta.\nEnquanto caminhava, Hansel deixava cair as pedrinhas, uma a uma.\nNo fundo da floresta, o pai acendeu uma fogueira.\n"Descansem aqui. Depois nós voltamos para buscar vocês."\nSem perceber, os dois acabaram por adormecer.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'Quando acordaram, tudo em volta estava escuro.\nGretel começou a chorar.\n"Vamos esperar a lua nascer", disse Hansel.\nE quando enfim a lua subiu acima da floresta...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'As pedrinhas brilharam!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'As pedrinhas brilhavam como prata e seguiam, uma após a outra, até a casa.\nDe mãos dadas, os dois caminharam a noite toda até de manhã.', next:'hg8'},

  hg8:{art:'hg_ie', text:'O pai chorou e abraçou os dois bem apertado.\nA madrasta não disse nada.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Mas a fome continuou.\nCerta noite, ouviram de novo aquela voz.\nDessa vez a porta estava trancada, e não dava para sair.';
    if(f.first) return t + '\nHansel decidiu esfarelar o pão da manhã e marcar o caminho com as migalhas.';
    return t + '\nO que ele faz?';
  }, choices:[
    {t:'De manhã, marcar o caminho com migalhas de pão', go:'hg10'},
    {t:'Sair pela janela sem fazer barulho e juntar pedrinhas', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'No caminho para a floresta, Hansel foi deixando cair migalha após migalha.\nE de novo os dois adormeceram perto da fogueira.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'A lua nasceu, mas não havia mais nenhuma migalha.\nOs pássaros da floresta tinham comido todas.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'Os dois caminharam e caminharam.\nUma noite, duas noites, e então a terceira manhã.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'As barrigas vazias, as pernas cansadas.\nNaquele momento, num galho, um pássaro branco como a neve cantava.', next:'hg13'},

  hg13:{art:'hg_tori', text:'O pássaro voou à frente dos dois, guiando-os cada vez mais para o fundo da floresta.\nE quando chegaram a uma clareira...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'Uma casa de doces!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Paredes de pão, telhado de bolo, janelas de açúcar transparente.\nA casa inteira era comida.';
    if(f.first) return t + '\nHansel mordeu o telhado, Gretel mordeu a janela, e os dois comeram sem parar.';
    return t + '\nPor onde começar?';
  }, choices:[
    {t:'O bolo do telhado', go:'hg14r', set:{hokashi:'yane'}},
    {t:'A janela de açúcar', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'A janela de açúcar quebrou com um estalo e derreteu na boca.\n"Nunca comi nada tão bom."'
    : 'O bolo do telhado tinha sabor de mel.\n"Nunca comi nada tão bom."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Croc, croc. Croc, croc.\nNaquele momento, uma voz fininha veio de dentro da casa.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Croc, croc, croquinho, quem rói a minha casinha?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'Os dois responderam:\n"É o vento, é o vento. O menino do céu."\nE continuaram a comer.', next:'hg17'},

  hg17:{art:'hg_majo', text:'A porta se abriu e saiu uma velhinha apoiada numa bengala.\n"Ora, que hóspedes tão queridos. Entrem, entrem."\nLeite e panquecas, maçãs e nozes.\nEm camas brancas, os dois dormiram profundamente.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Mas aquela velhinha...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...era uma bruxa.\nA bruxa tinha os olhos vermelhos e não conseguia ver de longe.\nEm troca, tinha o faro apurado como o dos bichos.\nQuando uma criança se aproximava, ela sabia pelo cheiro.', next:'hg19'},

  hg19:{art:'hg_ori', text:'De manhã, Hansel foi trancado numa jaula.\n"Primeiro engordar, depois comer."\nGretel teve que buscar água e cozinhar.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Todas as manhãs a bruxa dizia:\n"Mostre o dedo. Já engordou?"\nE, em vez do dedo, Hansel estendia um ossinho.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'É um osso!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'A bruxa de vista fraca se deixou enganar muitas vezes.\nPassaram-se quatro semanas, e ela finalmente perdeu a paciência.\n"Gordo ou magro, amanhã de manhã eu como você."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'A bruxa acendeu o fogo do forno.\n"Entre aí dentro e veja se já está bem quente."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel contra a bruxa!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel percebeu o plano da bruxa.';
    if(f.first) return t + '\n"Não sei como. Como é que se entra aí?"';
    return t + '\nO que ela faz?';
  }, choices:[
    {t:'Responder: "Não sei como"', go:'hg24'},
    {t:'Agarrar a chave da jaula e fugir', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Que criança mais boba. Olhe, é assim!"\nE no exato momento em que a bruxa enfiou a própria cabeça no forno...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'Bam!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel empurrou a bruxa para dentro do forno e fechou a porta de ferro com força.\nE foi o fim da bruxa.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel abriu a jaula.\n"Hansel, agora está tudo bem!"\nDentro da casa havia caixas cheias de pérolas e pedras preciosas.';
    if(f.first) return t + '\nOs dois encheram os bolsos de pedras preciosas.';
    return t + '\nO que eles levam para casa?';
  }, choices:[
    {t:'Encher os bolsos de pedras preciosas', go:'hg27'},
    {t:'Encher um saco com a comida da prateleira', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'Andando pela floresta, chegaram à beira de um grande lago.\nNão havia ponte nem barco.\nEntão um pato branco veio nadando até eles.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Patinho, por favor!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Patinho, patinho, aqui estão Gretel e Hansel.\nNão há ponte nem barco. Leve-nos nas suas costas brancas."\n"Os dois juntos ficam pesados. Vamos um de cada vez."\nE o pato levou os dois, um de cada vez, para a outra margem.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Depois de atravessar uma floresta conhecida, avistaram a casa de sempre.\nO pai viu os dois e chorou.\nA madrasta já não estava mais ali.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'As pérolas e as pedras preciosas caíram dos bolsos, e o pai arregalou os olhos.\nDaquele dia em diante, nunca mais faltou comida.\nOs três viveram juntos, sempre em paz.\nE viveram felizes para sempre.'},

  /* ---- Pedrinhas mais uma vez ---- */
  hk1:{art:'hg_koishi', text:'Hansel saiu pela janela sem fazer barulho\ne, ao luar, encheu os bolsos de pedrinhas brancas.', next:'hk2'},
  hk2:{art:'hg_mori', text:'No dia seguinte, deixados no fundo da floresta, os dois não se assustaram.\nQuando a lua nasceu, as pedrinhas brilharam e levaram até a casa.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Nunca mais vou fazer uma coisa dessas."\nO pai prometeu isso diante dos dois.\nA madrasta, naquela noite, ficou calada, de cabeça baixa.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'Naquele inverno, a casa continuou pobre.\nMas os quatro dividiam cada pão e esperaram a primavera.\nCom a bruxa da casa de doces eles nunca chegaram a se encontrar.\nE viveram felizes para sempre.'},

  /* ---- Para a outra margem ---- */
  hkw1:{art:'hg_kamado', text:'Gretel agarrou a chave e tirou Hansel da jaula.\n"Vamos fugir!"\nA bruxa de vista fraca veio atrás, farejando o ar.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Na beira do lago estava o pato branco.\n"Um de cada vez! Com peso demais eu afundo."\nO pato levou primeiro Gretel e depois Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'A bruxa também chegou à margem.\n"Patinho, leve-me também."\nMas a bruxa era pesada demais, e o pato não se mexeu nem um pouco.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'Na outra margem, a bruxa só batia os pés no chão.\nDe mãos dadas, os dois voltaram para casa.\nNinguém entrou no forno, e ninguém foi comido.\nE viveram felizes para sempre.'},

  /* ---- O inverno da aldeia ---- */
  hgm1:{art:'hg_takara', text:'Gretel olhou para as prateleiras.\nFarinha de trigo, mel, nozes, maçãs.\n"Isto é melhor do que pedras preciosas."\nOs dois encheram um saco de comida.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Com o saco pesado nos braços, foram até a beira do lago.\nO pato branco levou os dois e o saco, um de cada vez, para a outra margem.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'Na aldeia, a fome ainda continuava.\nOs dois repartiram com a aldeia inteira a comida que trouxeram.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Naquele inverno, a farinha da casa de doces virou o pão da aldeia.\nAté a primavera chegar e os campos brotarem, ninguém passou fome.\nE viveram felizes para sempre.'},

  /* ================= A história da bruxa ================= */

  hw1:{art:'majo_daidokoro', text:'Esta é a história de uma bruxa que morava no fundo da floresta.\nTodos os dias ela assava pão e fazia doces,\ne com eles fazia paredes e telhados, construindo a casa sem parar.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'O que ela vai assar hoje?', choices:[
    {t:'Biscoitos doces', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Pão de nozes', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'O pão de nozes ficou douradinho.\nMas não havia ninguém para comer.\nA bruxa o empilhou na parede.'
    : 'Os biscoitos doces ficaram bem crocantes.\nMas não havia ninguém para comer.\nA bruxa os arrumou no telhado.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'Um dia, ouviu-se um croc, croc.\nAlguém roía a casa.\nOs olhos vermelhos da bruxa não conseguiam ver de longe.\nSó o nariz sentiu o cheiro de crianças.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Croc, croc, quem rói a minha casinha?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"É o vento, é o vento. O menino do céu."\nResponderam duas vozinhas.\nA bruxa abriu a porta. E agora...', choices:[
    {t:'Engordar os dois e comer', go:'hwm1'},
    {t:'Preparar um banquete para eles', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'Na mesa: pão quentinho e leite.\n"Delicioso!" "Delicioso!", diziam os dois sem parar.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...Delicioso?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Fazia muito, muito tempo que a bruxa não ouvia essa palavra.\nAlguém comia o que ela mesma tinha feito.\nA bruxa chorou, escondida.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Desde então, de vez em quando chegam visitas à casa de doces.\nA bruxa ainda hoje assa pão e faz doces.\nAgora, para as pessoas que vão comer.\nE viveram felizes para sempre.'},

  hwm1:{art:'hg_ori', text:'Ela pôs Hansel na jaula e, todas as manhãs: "Mostre o dedo."\nMas os olhos da bruxa não distinguiam um osso de um dedo.\n"Ainda tão magro..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Mas você não engorda nunca!?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'Sem paciência, a bruxa acendeu o fogo do forno.\n"Veja se já está bem quente."\n"Não sei como", disse Gretel.\nEntão a bruxa enfiou a própria cabeça lá dentro.\n...Não conseguia ver nada.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"Está tudo escuro aqui! Alguém segure a porta!"\nEnquanto a bruxa se remexia, os dois foram embora.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'A bruxa saiu do forno arrastando-se e tomou uma decisão.\n"Vou comprar óculos."\nNa manhã seguinte, apoiada na bengala, saiu para a cidade.\nO que a bruxa viu com os óculos novos é uma outra história.\nE viveram felizes para sempre.'},

  /* ================= A história do pássaro branco ================= */

  hb1:{art:'tori_sora', text:'Esta é a história de um pássaro branco como a neve, que morava na floresta.\nCerta manhã, no caminho da floresta, havia migalhas de pão espalhadas.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Que migalhas apetitosas. O que fazer?', choices:[
    {t:'Comer só uma', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Comer até se fartar', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'A intenção era comer só uma.\nMas os outros pássaros também vieram, e as migalhas acabaram todas.'
    : 'Os outros pássaros também vieram, e num instante as migalhas acabaram todas.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'Naquela noite, o pássaro viu:\nduas crianças que procuravam alguma coisa, perdidas na floresta.\n"Aquilo que elas procuram... são as migalhas que nós comemos."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'A culpa é minha'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'O pássaro pensou.\nO que ele podia fazer agora?', choices:[
    {t:'Procurar o caminho de volta lá do alto e guiá-los', go:'hbp1'},
    {t:'Avisar sobre a casa de doces com uma canção', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'O pássaro voou bem alto.\nLá de cima, a casa do lenhador estava logo ali.\nO pássaro voou baixo à frente dos dois, mostrando o caminho.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"Aquele pássaro parece dizer: venham comigo."\nOs dois foram atrás do pássaro.\nAo sair da floresta, avistaram a fumaça da chaminé da sua casa.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'O pássaro que comeu as migalhas de pão\ndevolveu aos dois o caminho de volta.\nA reparação começa pelo que se pode fazer.\nE viveram felizes para sempre.'},

  hbu1:{art:'hg_tori', text:'O pássaro sabia.\nDa casa de doces no fundo da floresta, e também de quem morava nela.\nO pássaro pousou num galho e cantou:\n"Podem morder a parede, mas não entrem lá dentro."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'Não entrem lá dentro!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'Os dois entenderam o sentido da canção.\nMorderam um pouco da parede para matar a fome,\ne, quando a porta se abriu, não entraram e voltaram para o caminho da floresta.\nO pássaro branco voou na frente, na direção da casa deles.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'O pássaro que conhecia a casa de doces\ncontinuou a cantar no seu galho desde então.\nUma canção de aviso para qualquer criança perdida na floresta.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_PT);

  T.ZK_EN.push(
    {section:'Hansel e Gretel'},
    {id:'hg_seishi',  n:'O caminho de volta do pato branco', h:'A história original, da sua primeira vez'},
    {id:'hg_koishi',  n:'Pedrinhas mais uma vez',            h:'Na segunda noite, sair pela janela...'},
    {id:'hg_kawa',    n:'Para a outra margem',               h:'Diante do forno, escolher fugir...'},
    {id:'hg_mura',    n:'O inverno da aldeia',               h:'Levar comida em vez de pedras preciosas...'},
    {id:'hw_okyaku',  n:'As primeiras visitas',              h:'Na história da bruxa, preparar um banquete...'},
    {id:'hw_megane',  n:'Olhos vermelhos e óculos',          h:'Na história da bruxa, tentar engordar as crianças...'},
    {id:'hb_pankuzu', n:'Quem comeu as migalhas',            h:'Na história do pássaro branco, guiar lá do alto...'},
    {id:'hb_uta',     n:'Avisar com uma canção',             h:'Na história do pássaro branco, avisar com uma canção...'}
  );

})();
