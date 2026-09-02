"use strict";
/* Os Tres Porquinhos - Portuguese (neutral; avoid Europe-only or Brazil-only slang,
   prefer forms understood in both) scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Traducao propria,
   sem seguir nenhuma traducao portuguesa alheia. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var KOBUTA_PT = {

  /* ================= Os Tres Porquinhos ================= */

  p1:{art:'buta_hajimari', text:'Esta é a história de 3 porquinhos que eram irmãos.\nO porquinho grande, o porquinho do meio e o porquinho pequeno.\nTodos já tinham crescido, e cada um resolveu construir a sua própria casa.', next:'p2'},

  p2:{art:'buta_hajimari', text:'A manhã da partida. O que dizer para a mãe?', choices:[
    {t:'Um alegre "Já vamos indo!"', go:'p2r', set:{plife:'genki'}},
    {t:'"Vamos trazer uma coisa boa para você!"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"Vou ficar esperando", disse a mãe, sorrindo.\nA mão dela acenou e acenou, por muito tempo.'
    : '"Boa viagem!", disse a mãe, igualmente alegre.\nCom aquela voz animada atrás deles, os passos ficaram leves.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'O caminho se dividia em três.';
    if(f.first) return t + '\nOs 3 porquinhos acenaram uns para os outros e cada um seguiu o seu caminho.';
    return t + '\nE agora, o que os porquinhos fazem?';
  }, choices:[
    {t:'Cada um segue o seu caminho', go:'p4'},
    {t:'Os 3 constroem uma casa juntos', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'O porquinho grande encontrou um homem com um grande feixe de palha nas costas.\n"Por favor, pode me dar um pouco dessa palha?"\nUma casa de palha fica pronta no mesmo dia.\nFicar pronta depressa: esse é o melhor lado dela.', next:'p5'},

  p5:{art:'buta_eda', text:'O porquinho do meio encontrou um homem com uma braçada de gravetos.\n"Por favor, pode me dar um pouco desses gravetos?"\nNuma casa de gravetos o vento passa, e fica bem fresquinho.\nEsse é o melhor lado dela.', next:'p6'},

  p6:{art:'buta_renga', text:'O porquinho pequeno encontrou um homem puxando um carrinho cheio de tijolos.\n"Por favor, pode me dar alguns desses tijolos?"\nUma casa de tijolos demora, mas fica bem firme.\nEsse é o melhor lado dela.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Toc, toc! Tac, tac!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'As três casas ficaram prontas.\nA casa de palha, a casa de gravetos e a casa de tijolos.\nDe cada uma delas dá para se orgulhar.';
    if(f.first) return t;
    return t + '\nNas casas novas, o que fazer primeiro?';
  }, choices:[
    {t:'Mostrar as casas uns aos outros', go:'p7r', set:{plife2:'miseai'}},
    {t:'Descansar um pouco e tomar um chá', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'O chá depois do trabalho tem um gosto especial.\n"Amanhã vamos visitar a casa uns dos outros!"'
    : '"A sua ficou pronta bem rápido!" "Na sua entra um vento bom!" "A sua é bem firme!"\nCada casa tem mesmo o seu lado bom.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'Nesse momento.\nUm lobo faminto desceu da montanha\ne parou na frente da casa de palha.';
    return 'Nesse momento.\nO porquinho pequeno viu de longe um lobo descendo pela trilha da montanha.\nO que os porquinhos fazem?';
  }, choices:[
    {t:'Ficar quieto e observar', go:'pc_vs'},
    {t:'Avisar todos e se reunir na casa de tijolos', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Porquinhos contra o Lobo!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'O lobo bateu na casa de palha, toc, toc.\n"Porquinho, porquinho, deixe-me entrar."\n"Não, não, não vou abrir. Pelos pelinhos, pelinhos, pelinhos do meu queixo, de maneira nenhuma!"\n"Então eu sopro, sopro e sopro, e a sua casa inteira vai voar!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'Fuuuuuu!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'A casa de palha subiu rodopiando pelo ar.\nO porquinho grande saiu correndo aos tropeços\ne se enfiou na casa de gravetos do porquinho do meio.', next:'p11'},

  p11:{art:'buta_eda', text:'O lobo veio logo atrás.\n"Porquinhos, porquinhos, deixem-me entrar."\nDesta vez os dois responderam juntos:\n"Não, não, não vamos abrir. Pelos pelinhos, pelinhos, pelinhos do nosso queixo, de maneira nenhuma!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'Fu, fu, fuuuuuu!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'A casa de gravetos também voou toda para os lados.\nOs dois correram o mais rápido que podiam\ne se enfiaram na casa de tijolos do porquinho pequeno.', next:'p13'},

  p13:{art:'buta_naka', text:'"Aqui estamos seguros.\nEsta casa foi feita com tempo, por isso é bem firme."\nO porquinho pequeno trancou bem a porta.', next:'p14'},

  p14:{art:'buta_renga', text:'"Porquinhos, porquinhos, deixem-me entrar."\n"NÃO, NÃO, NÃO VAMOS ABRIR. PELOS PELINHOS, PELINHOS, PELINHOS DO NOSSO QUEIXO, DE MANEIRA NENHUMA!"\nO lobo puxou o ar bem fundo.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... Não se mexe nem um pouco!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Por mais que o lobo soprasse, a casa de tijolos não se mexia.';
    if(f.first) return t + '\nOfegante, o lobo olhou para a chaminé em cima do telhado.';
    return t + '\nO lobo faminto pensou no seu próximo passo.';
  }, choices:[
    {t:'Tentar entrar pela chaminé', go:'p16'},
    {t:'Tentar atrair com palavras doces', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'O lobo subiu no telhado e pôs um pé na chaminé.\nMas dentro da casa já tinham percebido tudo havia muito tempo.', next:'p17'},

  p17:{art:'buta_nabe', text:'Embaixo da chaminé, na lareira, havia uma panela grande.\nBlub, blub, blub. Estava cheia de água fervendo.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Pluf! Chuááá!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"Quente, quente, quente, quente!!"\nCom o traseiro queimado, o lobo\nvoltou correndo direto para a montanha.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Depois disso, o lobo nunca mais apareceu.\nDe vez em quando os 3 porquinhos se reuniam\ne tomavam juntos uma sopa quentinha.\nE viveram felizes para sempre.'},

  /* ---- A verdadeira história inglesa (Jacobs 1890: as 3 artimanhas) ---- */
  pg1:{art:'buta_renga', text:'O lobo falou com uma voz bem macia.\n"Escute, porquinho. Na saída da vila tem um campo de nabos muito bons.\nQue tal irmos juntos amanhã de manhã, às 6 horas?"\nO porquinho pequeno percebeu na hora. (Isso é uma armadilha.)\n"Está bem. Então às 6 horas."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Ótimo, ótimo, mal posso esperar pelas 6 horas!'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'Na manhã seguinte, o porquinho levantou às 5 horas,\ncolheu os nabos bem depressa e voltou para casa.\nQuando o lobo chegou às 6 horas, levou um susto.\n"Já fui e já voltei. Colhi uma panela cheia de nabos."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'O quê?! Já foi e já voltou?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Depois veio o convite para a macieira. "Passo para te buscar às 5 da manhã."\nO porquinho saiu às 4 horas. Mas, enquanto ainda estava em cima da árvore,\no lobo chegou.\n"Vou te dar a maçã mais saborosa!"\nO porquinho jogou uma maçã bem longe\ne, enquanto o lobo foi buscá-la, desceu depressa e voltou para casa.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Por último veio o convite para a feira da cidade. "Vamos às 3 da tarde."\nO porquinho saiu antes do meio-dia e comprou um barril de fazer manteiga.\nNa volta, do alto da ladeira, viu o lobo subindo.\nEntão o porquinho se enfiou dentro do barril.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rola, rola! Rola, rola!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Com o porquinho dentro, o barril desceu a ladeira rolando, rola, rola!\nAo ver aquela coisa grande e redonda vindo em sua direção,\no lobo levou um susto enorme. Enfiou o rabo entre as pernas e fugiu.', next:'pg6'},
  pg6:{art:'buta_renga', text:'Quando o lobo soube depois o que tinha acontecido, ficou furioso.\n"Agora chega! Vou entrar pela chaminé!"\nMas dentro da casa já tinham percebido tudo havia muito tempo.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'Na lareira, a panela grande estava fervendo como todo dia.\nEra uma sopa bem quente, cheia dos nabos que o porquinho tinha colhido.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Pluf! Chuááá!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"Quente, quente, quente, quente!!"\nTodo queimado, o lobo fugiu para bem longe, no fundo da montanha,\ne nunca mais apareceu.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'O campo de nabos, a macieira e o barril de manteiga.\nEste é o caminho mais próximo da história antiga que se conta na Inglaterra.\nO esperto porquinho pequeno viveu muito tempo com alegria depois disso.\nE viveram felizes para sempre.'},

  /* ---- Os 3 juntos desde o começo ---- */
  pk1:{art:'buta_renga', text:'"Vamos construir uma casa só, bem firme, todos juntos!"\nCom essa palavra do porquinho pequeno, os 3 começaram a carregar tijolos.\nMesmo os tijolos pesados são fáceis quando são 3.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Debaixo do mesmo telhado, três camas.\nFicou pronta uma bela casa, com lareira e com janelas.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Foi então que o lobo faminto chegou\ne puxou o ar bem fundo.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... Não se mexe nem um pouco!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'O lobo ficou soprando até o sol se pôr\ne voltou para a montanha muito cansado.\nUma casa construída com a força de todos juntos é a mais firme de todas.\nE viveram felizes para sempre.'},

  /* ---- Vigiar e estar preparado ---- */
  pn1:{art:'buta_michi', text:'"O lobo está vindo!"\nO porquinho pequeno correu até a casa dos dois irmãos.\nOs 3 se reuniram depressa na casa de tijolos.', next:'pn2'},
  pn2:{art:'buta_naka', text:'Espiando pela janela, viram o lobo soprando a casa de palha.\n"Não tem ninguém?!"\nDepois ele soprou a casa de gravetos.\n"Aqui também está vazio?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Por último soprou e soprou a casa de tijolos. Mas ela não se mexeu.\nO lobo ficou completamente cansado\ne sentou no chão, ainda com fome.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Veio uma voz da janela.\n"Uma visita? Desculpe, mas por hoje já fechamos."\nO lobo voltou devagar para a montanha.\nQuem está preparado não perde a calma. Os 3 voltaram para o seu chá.\nE viveram felizes para sempre.'},

  /* ================= A história do lobo ================= */

  pw1:{art:'pwolf_yama', text:'Esta é a história de um lobo que morava na montanha.\nNesses dias quase não encontrava nada para comer,\ne a barriga estava sempre vazia.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Onde o lobo vai procurar comida hoje?', choices:[
    {t:'Procurar perto do rio', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Procurar no fundo do bosque', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Os passarinhos tinham chegado antes dele em todas as frutinhas do bosque.\nA barriga roncou alto.'
    : 'No rio não havia nem a sombra de um peixe.\nA barriga roncou alto.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Ao descer até o pé da montanha, viu 3 casas novas, uma ao lado da outra.\nE de algum lugar vinha um cheiro muito bom.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'Estou sentindo cheiro de banquete!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Soprar é a especialidade do lobo.\nEle derrubou a casa de palha e também a casa de gravetos,\nmas os porquinhos escapavam todas as vezes.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Sobrou a casa de tijolos. E essa não se mexe nem um pouco.\nO lobo faminto pensou no seu próximo passo.', choices:[
    {t:'Atrair com palavras doces', go:'pw6'},
    {t:'Tentar falar com sinceridade', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Convidou para o campo de nabos: o porquinho chegou primeiro.\nConvidou para a macieira: o porquinho escapou.\nQuando ficou à espera na volta da feira, foi então que aconteceu.\nDo alto da ladeira veio uma coisa grande e redonda...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rola, rola! Rola, rola!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Rola, rola, rola, vinha rolando com uma força enorme.\nEra um bloco grande e redondo, como ele nunca tinha visto.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'U-um monstro!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'O lobo enfiou o rabo entre as pernas e correu até o alto da montanha.\n"Lá embaixo, no pé da montanha, mora um monstro redondo..."\nEssa história foi contada entre os lobos da montanha\npor muito, muito tempo.\nE viveram felizes para sempre.'},

  pwh1:{art:'buta_renga', text:'O lobo sentou na frente da porta\ne disse com uma voz bem baixinha:\n"...Na verdade, faz muitos dias que eu não como nada."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Dentro da casa, os 3 porquinhos se olharam.\nNão abriram a porta. Mas da janela veio uma voz.\n"Espere aí um momento."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Pela janela veio, com cuidado, uma sopa de legumes bem quente.\nDentro dela havia nabos e batatas em pedaços grandes.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'Está quente, sopre antes de tomar'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'O famoso sopro do lobo\ndeixou de ser uma força para derrubar casas\ne virou uma força para esfriar a sopa quente na medida certa.\nUma especialidade não serve para uma coisa só.\nE viveram felizes para sempre.'},

  /* ================= A história da casa de tijolos ================= */

  ps1:{art:'prenga_kamado', text:'Esta é a história de uma casa de tijolos.\nCada tijolo nasce assado devagar no fogo do forno.\nPor isso ele não se desfaz por qualquer coisinha.', next:'ps2'},
  ps2:{art:'buta_renga', text:'Um dia, o porquinho pequeno chegou\ne começou a empilhar os tijolos com cuidado.\nToc, toc. Tac, tac. Aos poucos, aquilo foi virando uma casa.\nO que se via pela primeira janela que ficou pronta?', choices:[
    {t:'O céu azul bem largo', go:'ps2r', set:{slife:'sora'}},
    {t:'O campo de nabos na saída da vila', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Do outro lado da janela se estendia o campo de nabos.\nA casa gostava de ver os nabos crescendo um pouquinho a cada dia.'
    : 'Pelo céu azul que enchia a janela passavam nuvens brancas.\nSer uma casa, pensou a casa, é uma coisa boa.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Um dia, os dois porquinhos mais velhos\nentraram correndo, sem fôlego.\nParecia que lá fora havia um lobo.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'Agora é a minha vez'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'O lobo puxou o ar bem fundo e soprou com toda a força.\nUma vez, duas vezes, três vezes.\nNenhum tijolo da parede se mexeu.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'Não se mexe nem um pouco!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'Passada aquela noite de tempestade, a casa ficou pensando.\nDaqui para a frente, o que é mais importante de tudo?', choices:[
    {t:'Aguentar o vento e a chuva', go:'e_ps_mamoru'},
    {t:'Acender a lareira e manter tudo aquecido', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'Nas noites de vento e nas manhãs de chuva, a casa não se mexe.\nA casa sabe muito bem por que nasceu tão firme.\nÉ porque lá dentro há 3 porquinhos que ela quer proteger.\nE viveram felizes para sempre.'},
  pss1:{art:'buta_soup', text:'Chegou o inverno. O fogo acendeu na lareira e a panela cozinhava devagar.\nA mãe dos porquinhos também veio visitar,\ne a casa inteira ficou cheia de risadas.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'O trabalho de uma casa é proteger do vento e da chuva.\nMas o seu trabalho mais importante\né guardar bem as risadas lá dentro.\nHoje também se ouvem vozes calorosas vindo da casa de tijolos.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_PT);

  T.ZK_EN.push(
    {section:'Os Três Porquinhos'},
    {id:'pb_seishi',   n:'A Casa de Tijolos Salvadora',         h:'A história conhecida, do primeiro percurso'},
    {id:'pb_genten',   n:'A Verdadeira História Inglesa',       h:'Quando o lobo convida com palavras doces...'},
    {id:'pb_kyoryoku', n:'Os 3 Juntos desde o Começo',          h:'Na encruzilhada, escolher um caminho juntos...'},
    {id:'pb_sonae',    n:'Vigiar e Estar Preparado',            h:'Avistar o lobo ainda de longe...'},
    {id:'pw_taru',     n:'Um Monstro!',                         h:'Na história do lobo faminto, escolher as palavras doces...'},
    {id:'pw_fuufuu',   n:'O Verdadeiro Uso do Sopro',           h:'Na história do lobo faminto, falar com sinceridade...'},
    {id:'ps_mamoru',   n:'Não se Mexe',                         h:'Na história da casa de tijolos, aguentar o vento e a chuva...'},
    {id:'ps_waraigoe', n:'Um Recipiente para as Risadas',       h:'Na história da casa de tijolos, acender a lareira...'}
  );

})();
