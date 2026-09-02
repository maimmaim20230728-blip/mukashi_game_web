"use strict";
/* Ali Baba e os 40 Ladrões - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both) scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var ALIBABA_PT = {

  /* ================= Ali Baba e os 40 Ladrões ================= */

  ab1:{art:'ab_mori', text:'Esta é a história de Ali Baba, que vivia em uma cidade da Pérsia.\nAli Baba era um lenhador pobre.\nTodos os dias levava seus 2 burros para a floresta, para juntar lenha.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Hoje também Ali Baba juntava lenha na floresta.';
    if(f.first) return t;
    return t + '\nQuanta lenha ele junta?';
  }, choices:[
    {t:'2 feixes, e voltar cedo para casa', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 feixes, e voltar sem pressa', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Ele colocou 4 feixes de lenha nas costas dos burros.\nHoje pretendia voltar para casa sem pressa.'
    : 'Ele colocou 2 feixes de lenha nas costas dos burros.\nHoje pretendia voltar cedo para casa.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'Nesse momento, ouviu o som de cascos de cavalos.\nAli Baba se escondeu no alto de uma árvore.\n40 homens se reuniram diante de uma grande rocha.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 homens...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'O homem que ia à frente falou para a rocha.\n"Abre-te, Sésamo!"\nEntão a rocha se abriu com um estrondo.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Abre-te, Sésamo!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'Os homens entraram.\nDepois de um tempo saíram de novo. "Fecha-te, Sésamo!"\nA rocha se fechou, e os homens foram embora.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba desceu da árvore e ficou diante da rocha.\n"Abre-te, Sésamo!"\nA rocha se abriu, e lá dentro estava cheio de moedas de ouro e tesouros.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'O brilho do tesouro'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba encheu sacos de moedas de ouro e colocou nos burros.\nApenas o que conseguia levar para casa.\n"Fecha-te, Sésamo!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'Em casa, Ali Baba contou tudo à esposa.\nOs dois quiseram contar as moedas de ouro, mas eram tantas que não conseguiam.\n"Vamos pedir emprestada uma medida na casa do meu irmão."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Seu irmão Cassim era um comerciante rico.\nA esposa de Cassim passou um pouco de gordura no fundo da medida, sem ninguém ver.\nQuando a medida voltou, havia 1 moeda de ouro grudada no fundo.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim perguntou a Ali Baba sobre aquilo.\nAli Baba contou tudo: a rocha e as palavras mágicas.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'Na manhã seguinte, Cassim levou 10 burros até a rocha.\n"Abre-te, Sésamo!"\nA rocha se abriu.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Abre-te, Sésamo!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim encheu os sacos de moedas de ouro.\nMas, quando quis sair, tinha esquecido as palavras mágicas.\n"Abre-te, Cevada!" "Abre-te, Feijão!"\nA rocha não se abriu.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'Naquela noite, Cassim não voltou para casa.\nA esposa de Cassim veio chorando à casa de Ali Baba.';
    if(f.first) return t;
    return t + '\nO que Ali Baba faz?';
  }, choices:[
    {t:'Esperar até de manhã', go:'ab14'},
    {t:'Ir até a rocha ainda de noite', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'De manhã, Ali Baba foi até a rocha.\n"Abre-te, Sésamo!"\nLá dentro estava tudo quieto. Os ladrões tinham voltado antes.\nCassim não se movia mais.\nAli Baba colocou o irmão em um burro e o levou em silêncio para casa.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'Na casa de Ali Baba havia uma criada chamada Morgiana.\nEra uma pessoa que percebia tudo.\nPara preparar o funeral, Morgiana chamou um velho sapateiro da cidade.\nPara que ele não guardasse o caminho, vendou os olhos dele e o levou até a casa.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'A venda, por favor'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'Quando os ladrões voltaram à rocha, viram que Cassim tinha sumido.\n"Mais alguém sabe."\nO chefe mandou um dos seus homens para a cidade.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'O ladrão encontrou o velho sapateiro.\nDe olhos vendados, o velho lembrou o caminho com os pés.\nE o ladrão fez uma marca branca na porta da casa de Ali Baba.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana percebeu a marca.\nEntão fez a mesma marca na casa vizinha, e na casa ao lado dela também.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Marcas por toda parte!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'Quando os ladrões chegaram, não sabiam qual era a casa.\nO chefe resolveu ir ele mesmo.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'O chefe se disfarçou de vendedor de óleo.\n19 burros, com 38 potes grandes.\nSó um tinha óleo, e em cada um dos outros havia um ladrão escondido.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Sou um vendedor de óleo que está viajando. Posso passar a noite aqui?"\nAli Baba o recebeu com gentileza.\nOs potes foram colocados em fila no pátio.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'... Quando cair a noite'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'De noite, o óleo da lâmpada de Morgiana acabou, e ela foi pegar um pouco nos potes do pátio.\nEntão veio uma voz de dentro de um pote.\n"Já é hora?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'... Há alguém dentro do pote'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana respondeu com voz grossa.\n"Ainda não."\nDepois conferiu todos os 37 potes.';
    if(f.first) return t;
    return t + '\nO que Morgiana faz?';
  }, choices:[
    {t:'Ferver o óleo', go:'ab24'},
    {t:'Buscar cordas e chamar os guardas', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana ferveu o óleo em uma panela grande.\nDepois despejou o óleo fervente em um pote de cada vez.\nDentro dos potes, tudo ficou em silêncio.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'No meio da noite, o chefe saiu ao pátio e bateu nos potes.\nNão houve resposta.\nO chefe fugiu sozinho.', next:'ab26'},

  ab26:{art:'ab_ie', text:'De manhã, Morgiana contou tudo a Ali Baba.\nAli Baba disse a ela:\n"A partir de hoje, você está livre."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Alguns dias depois, o chefe apareceu de novo, disfarçado de comerciante.\nTinha feito amizade com o filho de Ali Baba e foi convidado para a casa.\nMorgiana se lembrava daquele rosto.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Lembro deste rosto'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Depois da refeição, Morgiana dançou para eles.\nNa faixa da cintura, havia um punhal.';
    if(f.first) return t;
    return t + '\nO que Morgiana faz?';
  }, choices:[
    {t:'Dançar até o fim da dança', go:'ab29'},
    {t:'Parar a dança e falar das marcas', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'No fim da dança, Morgiana parou diante do comerciante.\nO chefe caiu.\nPara Ali Baba, que estava espantado, Morgiana disse baixinho:\n"Este homem é aquele chefe."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba disse a Morgiana:\n"Você já está livre. O que fizer a partir de agora, você mesma decide."\nMorgiana pensou um pouco e respondeu:\n"Eu fico aqui. Vou ser uma pessoa desta casa."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Depois disso, Morgiana se juntou ao filho de Ali Baba e passou a ser uma pessoa desta casa.\nUsaram o tesouro da rocha com simplicidade.\nE viveram felizes para sempre.'},

  /* ---- Buscar o irmão ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Ainda de noite, Ali Baba levou um burro até a rocha.\n"Abre-te, Sésamo!"\nLá no fundo, Cassim estava sentado, tremendo.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"Eu tinha esquecido as palavras mágicas... Sésamo, era Sésamo."\nAli Baba colocou o irmão no burro e o levou para casa.\nDe moedas de ouro, levou só um saco.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'O irmão estava a salvo.\nAs palavras mágicas viraram um segredo só dos dois.\nOs ladrões perceberam que faltavam moedas de ouro, mas nunca souberam quem tinha feito aquilo.\nE viveram felizes para sempre.'},

  /* ---- Cordas e guardas ---- */
  abr1:{art:'ab_abura', text:'Morgiana trouxe cordas.\nAmarrou a tampa de cada pote por fora, uma de cada vez.\nDepois saiu correndo para chamar os guardas da cidade.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'Os guardas chegaram e abriram os 37 potes.\nOs ladrões foram levados um a um, amarrados com cordas.\nO chefe aproveitou o momento e fugiu.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'O chefe nunca mais apareceu na cidade.\nAli Baba disse a Morgiana: "Você já está livre."\nUsaram o tesouro da rocha com simplicidade.\nE viveram felizes para sempre.'},

  /* ---- O chefe fugiu ---- */
  abg1:{art:'ab_odori', text:'Morgiana parou a dança e ficou diante do comerciante.\n"A marca que você fez, fui eu que multipliquei."\nO rosto do comerciante mudou de cor.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Sem dizer nada, o chefe se levantou e fugiu pela cidade, noite adentro.\nNunca mais voltou à cidade da Pérsia.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba disse a Morgiana:\n"Você já está livre. O que fizer a partir de agora, você mesma decide."\n"Eu fico aqui", respondeu Morgiana.\nE viveram felizes para sempre.'},

  /* ================= A história de Morgiana ================= */

  am1:{art:'am_daidokoro', text:'Esta é a história de uma criada chamada Morgiana.\nEla trabalhava na casa de Ali Baba.\nAs pessoas diziam que ela percebia tudo.', next:'am2'},
  am2:{art:'am_daidokoro', text:'De manhã. Por onde ela começa?', choices:[
    {t:'Assar o pão', go:'am2r', set:{amlife:'pan'}},
    {t:'Tirar água do poço', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana tirou água do poço e encheu o pote até a boca.\nDa casa, ela sabia tudo.'
    : 'Morgiana acendeu o forno e assou o pão.\nDa casa, ela sabia tudo.', next:'am3'},
  am3:{art:'ab_shirushi', text:'Uma manhã, encontrou uma marca branca na porta.\n(Alguém está querendo guardar esta casa na memória.)\nMorgiana fez a mesma marca na casa vizinha também.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'É só fazer mais marcas'}, then:'am4'},
  am4:{art:'ab_abura', text:'A noite do vendedor de óleo. De dentro de um pote veio uma voz.\nO que Morgiana faz?', choices:[
    {t:'Ferver o óleo', go:'am4r', set:{amhow:'abura'}},
    {t:'Amarrar os potes e chamar os guardas', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana amarrou as tampas dos potes e chamou os guardas.\nOs ladrões foram levados.'
    : 'Morgiana ferveu o óleo e despejou nos potes.\nDentro dos potes, tudo ficou em silêncio.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'Na manhã em que tudo tinha acabado, Ali Baba disse:\n"Você já está livre. O que fizer, você mesma decide."\nO que Morgiana faz?', choices:[
    {t:'Ficar nesta casa', go:'ami1'},
    {t:'Partir em viagem', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana saiu uma vez pelo portão.\nAndou pela cidade, olhou o mercado, olhou o rio.\nDepois, com os próprios pés, voltou para a casa.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Esta é a casa que eu escolhi."\nNão como criada, mas como uma pessoa desta casa.\nE viveram felizes para sempre.'},
  amt1:{art:'am_michi', text:'Morgiana pegou um saco e saiu pelo portão.\nAli Baba não a impediu.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Para onde Morgiana foi, esta história não conta.\nO destino, só Morgiana sabe.\nFim.'},

  /* ================= A história do chefe dos ladrões ================= */

  at1:{art:'at_dokutsu_kara', text:'Esta é a história do chefe dos ladrões.\nEram 40, e guardavam o tesouro dentro da rocha.\nUm dia, ele percebeu que parte do tesouro tinha sumido.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'O que o chefe examina?', choices:[
    {t:'As pegadas diante da rocha', go:'at2r', set:{atlife:'ashi'}},
    {t:'As marcas do burro', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Diante da rocha tinham ficado as marcas de um burro.\nAlguém da cidade.'
    : 'Diante da rocha tinham ficado pegadas pequenas.\nNão eram de nenhum dos seus homens.', next:'at3'},
  at3:{art:'ab_iwa', text:'(O que dava medo não era o tesouro levado, mas alguém saber o segredo da rocha.)\nO chefe mandou um homem para a cidade.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'Um segredo basta'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'O plano dos potes tinha falhado.\nDos seus homens, não restava nenhum.\nO que o chefe faz?', choices:[
    {t:'Deixar o tesouro e ir para longe', go:'ato1'},
    {t:'Voltar mais uma vez àquela casa', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'O chefe ficou diante da rocha.\n"Fecha-te, Sésamo."\nDepois saiu andando, sem olhar para trás.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'O tesouro ficou dentro da rocha.\nPara onde o chefe foi, ninguém sabe.\nFim.'},
  ath1:{art:'ab_odori', text:'Disfarçado de comerciante, o chefe foi àquela casa.\nNo fim da dança, a criada ficou diante dele.\n(Esta pessoa sabia desde o começo.)\nO chefe não fez nada e saiu da casa.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'O segredo já não era mais segredo.\nO chefe aceitou isso e deixou a cidade.\nO que dava medo não era perder o tesouro, mas o fato de alguém saber.\nFim.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_PT);

  T.ZK_EN.push(
    {section:'Ali Baba e os 40 Ladrões', note:'Esta história não aparece nos livros antigos escritos em árabe. Há cerca de 300 anos, um francês escreveu esta história depois de ouvi-la de um contador de histórias da Síria. É uma história diferente de "Aladim". Na história original, Morgiana é uma escrava e, no fim, se torna livre.'},
    {id:'ab_seishi',  n:'Abre-te, Sésamo',           h:'A história como é contada, na primeira vez de todas'},
    {id:'ab_ani',     n:'Buscar o irmão',            h:'Na noite em que Cassim não volta, ir até a rocha...'},
    {id:'ab_rouya',   n:'Cordas e guardas',          h:'Na noite dos potes, não ferver o óleo...'},
    {id:'ab_nigeta',  n:'O chefe fugiu',             h:'Parar a dança e falar das marcas...'},
    {id:'am_ie',      n:'A casa que eu escolhi',     h:'Na história de Morgiana, ficar na casa...'},
    {id:'am_tabi',    n:'Para além da porta',        h:'Na história de Morgiana, partir em viagem...'},
    {id:'at_oite',    n:'Deixar o tesouro',          h:'Na história do chefe, ir para longe...'},
    {id:'at_himitsu', n:'Um só segredo',             h:'Na história do chefe, voltar mais uma vez àquela casa...'}
  );

})();
