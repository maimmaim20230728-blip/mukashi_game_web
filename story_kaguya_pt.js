"use strict";
/* Princesa Kaguya - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both)
   scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   Fonte: Taketori Monogatari (séc. X, PD). Sem elementos do filme de 2013. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var KAGUYA_PT = {

  /* ================= Princesa Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Esta é a história de um tempo muito, muito antigo.\nHavia um velho que vivia de cortar bambu.\nEra conhecido como o Cortador de Bambu.\nUm dia, no fundo do bambuzal, encontrou um bambu cuja raiz brilhava dourada.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'O bambu brilhou!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'Quando abriu o bambu, dentro dele estava sentada uma menina bem pequena, do tamanho de uma mão.\nO velho levou a menina para casa na palma da mão.\nJunto com a velha, sua esposa, decidiu criar a menina num cesto.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'O que fazer todos os dias pela pequena princesa?', choices:[
    {t:'Cantar uma canção de ninar', go:'kg3r', set:{takeko:'uta'}},
    {t:'Fazer brinquedos de bambu', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'O velho fez pequenas flautas e carrinhos de bambu.\nQuando a princesa ria, a velha ria também.'
    : 'Quando a velha cantava uma canção de ninar, a princesa dormia tranquila.\nOs dois ficavam junto ao cesto, olhando sem parar.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'Desde então, cada bambu que ele cortava tinha ouro dentro.\nA menina cresceu muito depressa e, em cerca de 3 meses, era uma bela jovem.\nDeram a ela o nome de "Kaguya, a Princesa do Bambu Esguio".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'A beleza da Princesa Kaguya virou assunto em todo o país.\nAo redor da casa, muita gente vinha só para ver a princesa.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Entre eles, 5 jovens nobres vieram porque queriam muito casar com a princesa.\nO Príncipe Ishitsukuri, o Príncipe Kuramochi, o Ministro Abe,\no Grande Conselheiro Otomo e o Segundo Conselheiro Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'A Princesa Kaguya disse:\n"Irei para junto de quem me trouxer o tesouro que eu quero ver."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'A tigela de pedra do Buda!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'O ramo de joias de Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'O manto do rato de fogo!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'A joia do pescoço do dragão!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'O búzio da andorinha!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Nenhum desses tesouros parecia existir neste mundo.\nOs 5 partiram, cada um em sua própria viagem.';
    if(f.first) return t;
    return t + '\nDe quem vamos ouvir a história?';
  }, choices:[
    {t:'Príncipe Ishitsukuri', go:'kgk1'},
    {t:'Príncipe Kuramochi', go:'kgk2'},
    {t:'Ministro Abe', go:'kgk3'},
    {t:'Grande Conselheiro Otomo', go:'kgk4'},
    {t:'Segundo Conselheiro Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'O Príncipe Ishitsukuri achou trabalhosa demais a longa viagem à Índia\ne levou uma tigela velha de um templo ali perto.\nMas a tigela do Buda deveria brilhar.\nUma tigela sem luz foi descoberta na mesma hora.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'O Príncipe Kuramochi mandou uns artesãos fazerem o ramo de joias.\nA princesa e o velho ficaram admirados com o ramo esplêndido.\nMas então chegaram os artesãos, dizendo:\n"Ainda não recebemos o pagamento."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'O Ministro Abe mandou vir um manto de pele de um país distante.\nA princesa disse: "O manto do rato de fogo não deve queimar, nem no fogo."\nPosto no fogo, o manto ardeu em chamas.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'O Grande Conselheiro Otomo saiu de barco à procura do dragão.\nUma grande tempestade veio, e o barco rodou e rodou.\nQuando enfim chegou à praia, o conselheiro voltou para casa com os olhos inchados.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'O Segundo Conselheiro Isonokami enfiou a mão num ninho de andorinha\ne, no instante em que agarrou alguma coisa, caiu do telhado.\nO que tinha na mão era esterco velho de andorinha.\nO conselheiro ficou ferido e teve de ficar de cama.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'No fim, nem um deles conseguiu trazer um tesouro verdadeiro.';
    if(f.first) return t;
    return t + '\nE agora, o que fazer?';
  }, choices:[
    {t:'Deixar os boatos como estão e viver em silêncio', go:'kg10'},
    {t:'Contar a verdade ao velho e à velha', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'Os boatos chegaram também aos ouvidos do Imperador.\nFingindo sair para caçar, o Imperador foi visitar a casa do Cortador de Bambu.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'O palanquim do Imperador!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'Quando o Imperador quis erguer a princesa para o palanquim,\na figura da Princesa Kaguya virou luz e desapareceu.\n"Não vou levar a princesa."\nDisse isso o Imperador e voltou para a capital.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'Desde então, o Imperador e a Princesa Kaguya passaram a trocar cartas e poemas.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'E assim passaram-se 3 anos.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'Quando chegou a primavera, a Princesa Kaguya passou a olhar para a lua e chorar.\nO velho perguntava o motivo, mas a princesa não respondia.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'No fim do verão, a Princesa Kaguya enfim contou tudo.\n"Eu sou da Capital da Lua.\nNa noite de lua cheia de agosto, virão buscar-me. Tenho de voltar."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'Não vou entregar a princesa!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'O velho pediu ajuda ao Imperador, e muitos soldados vieram.\nNo telhado e no jardim, havia arqueiros enfileirados.\nA velha escondeu a princesa no quarto mais interno e fechou bem a porta.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'A noite de lua cheia. Pouco depois da meia-noite,\ntudo em volta da casa ficou mais claro do que de dia.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'A luz da lua desceu!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Do céu desceram pessoas em cima de nuvens.\nA força saiu dos soldados, e nenhum conseguia retesar o arco.\nA porta abriu-se sozinha e, dos braços da velha, a princesa deu um passo à frente.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'O mensageiro da Lua disse:\n"Velho. A princesa cometeu uma falta na Lua e, para pagar por ela, desceu e ficou aqui por um tempo.\nO tempo de pagamento acabou.\nIsso também foi um agradecimento por uma pequena boa ação sua."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'A Princesa Kaguya escreveu uma carta ao velho.\n"Pensem na roupa que eu deixo aqui como se fosse eu.\nNas noites em que a lua aparecer, olhem para cima."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'O mensageiro da Lua estendeu um pote com o elixir da vida.';
    if(f.first) return t + '\nA princesa provou um gole, juntou o resto à carta para o Imperador\ne entregou tudo ao mensageiro do Imperador.';
    return t + '\nPara quem vai este elixir?';
  }, choices:[
    {t:'Juntar à carta para o Imperador', go:'kg21'},
    {t:'Deixar para o velho e a velha', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'O mensageiro da Lua estendeu o manto de plumas.\n"Quem veste este manto perde todas as preocupações do coração."';
    if(f.first) return t + '\nA princesa vestiu o manto de plumas.';
    return t + '\nO que fazer?';
  }, choices:[
    {t:'Vestir o manto de plumas', go:'kg22'},
    {t:'Olhar para trás mais uma vez antes de vestir', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'Sem as preocupações do coração, a princesa deixou de sentir carinho pelo velho, e também deixou de sentir saudade.\nEm cima de uma nuvem, subiu em direção à lua.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Para a lua...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'O velho e a velha não conseguiam parar de chorar.\nAbraçados à roupa que a princesa deixou, olharam para o céu por muito tempo.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'O Imperador mandou queimar a carta da princesa e o elixir da vida\nno alto da montanha de Suruga, a mais próxima do céu.\nComo muitos guerreiros subiram aquela montanha,\nela passou a chamar-se "monte Fuji", a montanha cheia de guerreiros.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'Nas noites em que a lua aparecer, olhem para cima.\nO velho e a velha fizeram como a princesa escreveu e, nas noites de lua, olharam para o céu.\nA roupa que ela deixou ficou ali, nas mãos dos dois.\nFim.'},

  /* ---- Os dias que restaram ---- */
  kgn1:{art:'kg_uchiake', text:'Antes que o Imperador chegasse, a Princesa Kaguya contou tudo aos dois.\n"Eu sou da Capital da Lua. Neste outono, tenho de voltar."\nO velho e a velha ficaram calados por muito tempo.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'A partir daquele dia, cada dia era precioso para os 3.\nPassearam pelo bambuzal e foram também ao lugar do bambu onde a princesa foi encontrada.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'Nas noites de lua bonita, os 3 sentavam-se juntos na varanda.\n"Nas noites de lua, sentem-se aqui. Eu também vou olhar para este lugar, lá da lua."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'Na noite de lua cheia, vieram buscar a princesa.\nO velho não lutou.\nOs 3 deram as mãos e esperaram a luz.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'A despedida chegou da mesma maneira.\nMas, antes dela, os 3 tiveram um outono inteiro juntos.\nNa varanda, as 3 almofadas continuam onde foram deixadas.\nFim.'},

  /* ---- Antes do manto de plumas ---- */
  kgm1:{art:'kg_shouten', text:'Antes de vestir o manto de plumas, a princesa olhou para trás.\nO velho e a velha olhavam para ela.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Obrigada por me criarem'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'A velha chorava, sorria e acenava.\nO velho também acenou com força.\nA princesa guardou aqueles rostos nos olhos e então vestiu o manto de plumas.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Mesmo com as preocupações do coração desaparecidas, os dois rostos que a princesa viu por último\nficaram ali, dentro da luz, o tempo todo.\nFim.'},

  /* ---- O elixir da vida ---- */
  kgu1:{art:'kg_tegami', text:'A princesa entregou o elixir da vida ao velho e à velha.\n"Quem bebe isto vive para sempre."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Depois que a princesa voltou para a lua, os dois ficaram olhando para o pote.\n"Não é preciso viver para sempre num mundo sem a princesa."\nO velho disse isso em voz baixa.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'Na noite de lua seguinte, os dois puseram o pote do elixir na varanda.\nComo se o estendessem devagar em direção à lua.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'O elixir nunca foi bebido e continuou banhado pela luz da lua.\nO Imperador queimou o dele no monte Fuji; o velho ofereceu o dele à lua, na varanda.\nCada um tinha a sua maneira de não esquecer a princesa.\nFim.'},

  /* ================= A história do velho Cortador de Bambu ================= */

  kj1:{art:'okina_take', text:'Esta é a história do velho Cortador de Bambu e da velha, e do que veio depois.\nJá passou um mês desde que a princesa voltou para a lua.', next:'kj2'},
  kj2:{art:'kg_ato', text:'O que fazer hoje?', choices:[
    {t:'Dobrar a roupa da princesa', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Caminhar pelo bambuzal', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'O bambuzal balançava ao vento, como naquele dia.\nPor um tempo, o velho escutou o som do bambu.'
    : 'A velha dobrou a roupa da princesa com cuidado.\nDobrava, abria de novo e dobrava outra vez.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'Uma noite de lua. Os dois leram a carta da princesa mais uma vez.\n"Nas noites em que a lua aparecer, olhem para cima."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Vamos olhar para cima?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'A velha disse isso ao velho.\nO que os dois vão fazer?', choices:[
    {t:'Olhar para a lua da varanda', go:'kjt1'},
    {t:'De manhã, ir ao bambuzal', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'Os dois sentaram-se lado a lado na varanda e olharam para a lua.\nA tristeza não desaparece.\nMas a luz da lua chegava à varanda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Desde então, nas noites de lua, os dois sentam-se na varanda.\nHá noites de choro, noites de conversa e noites de silêncio.\nA luz da lua chegou igual em todas essas noites.\nFim.'},
  kjk1:{art:'okina_take', text:'Numa manhã de primavera, o velho foi de novo ao bambuzal.\nJá não havia bambu que brilhasse.\nEm vez disso, aqui e ali, brotos de bambu apontavam do chão.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'... Vamos colher.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'O velho cavou os brotos de bambu, um por um.\nSem pressa, sem que ninguém pedisse, por decisão própria.\nQuando o cesto ficou cheio, a velha chegou com o almoço.\nE viveram felizes para sempre.'},

  /* ================= A história do mensageiro da Lua ================= */

  ku1:{art:'tsuki_miyako', text:'Esta é a história de um mensageiro que vive na Capital da Lua.\nNa Capital da Lua não há lágrimas. Nem preocupações do coração.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Hoje é o dia de descer à Terra. O que levar?', choices:[
    {t:'Só o manto de plumas', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'Também o elixir da vida', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'Na caixa foram o manto de plumas e o pote com o elixir da vida.\nDizem que as pessoas da Terra querem muito uma coisa dessas.'
    : 'Na caixa foi o manto de plumas.\nSó com isso, a princesa volta a ser gente da Lua num instante.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'Ao descer em cima de uma nuvem, havia muita gente ao redor da casa.\nCom arcos nas mãos, encaravam este lado.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'O velho gritava alguma coisa.\nO mensageiro não entendeu o sentido daquelas palavras.\nNa Lua não existe a palavra "não devolver".', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'... Lágrimas?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'A princesa deu um passo à frente.\nO que o mensageiro vai fazer?', choices:[
    {t:'Seguir a regra e vestir o manto na princesa', go:'kun1'},
    {t:'Atender ao pedido da princesa', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'O mensageiro seguiu a regra e vestiu o manto na princesa.\nMas não conseguiu fingir que não via o rosto molhado do velho.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'De volta à Lua, o mensageiro continuava a lembrar aquele rosto.\nNum país sem lágrimas, soube pela primeira vez o que as lágrimas querem dizer.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'Desde então, de vez em quando, o mensageiro da Lua olha para a Terra lá de cima.\nNo país que não conhece lágrimas, passou a haver alguém que as conhece.\nFim.'},
  kut1:{art:'kg_tegami', text:'"Entregue a carta e a roupa ao velho, por favor."\nDiante do pedido da princesa, o mensageiro fez que sim com a cabeça.\nNas regras da Lua não existe nada assim. Mas deve ser o costume da Terra.', next:'kut2'},
  kut2:{art:'kg_ato', text:'O mensageiro desceu diante do velho e entregou a carta e a roupa com cuidado.\nO velho abraçou tudo contra o peito.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'De volta à Capital da Lua, o mensageiro acrescentou uma linha às regras.\n"Quem volta da Terra pode deixar para trás uma única coisa."\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_PT);

  T.ZK_EN.push(
    {section:'Princesa Kaguya'},
    {id:'kg_seishi',  n:'Nas noites de lua, olhar para cima', h:'A história original, a da primeira vez'},
    {id:'kg_nokori',  n:'Os dias que restaram',              h:'Se contar a verdade antes de o Imperador chegar...'},
    {id:'kg_koromo',  n:'Antes do manto de plumas',          h:'Se olhar para trás antes de vestir o manto...'},
    {id:'kg_kusuri',  n:'O elixir da vida',                  h:'Se deixar o elixir para o velho e a velha...'},
    {id:'kj_tsukiyo', n:'Onde a luz da lua chega',           h:'Na história do velho casal, se olhar para cima da varanda...'},
    {id:'kj_take',    n:'De volta a colher bambu',           h:'Na história do velho casal, se for ao bambuzal de manhã...'},
    {id:'ku_namida',  n:'O país que não conhece lágrimas',   h:'Na história do mensageiro da Lua, se seguir a regra...'},
    {id:'ku_tegami',  n:'O recado',                          h:'Na história do mensageiro da Lua, se atender ao pedido da princesa...'}
  );

})();
