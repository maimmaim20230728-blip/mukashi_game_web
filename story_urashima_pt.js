"use strict";
/* Urashima Taro - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both) scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var URA_PT = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Esta é a história de um jovem pescador que morava numa aldeia à beira-mar.\nSeu nome era Urashima Taro.\nEle vivia com o pai e a mãe, já idosos, os três juntos.', next:'u2'},

  u2:{art:'ura_hama', text:'Hoje também o som das ondas está bonito.\nO que vamos fazer antes de sair para pescar?', choices:[
    {t:'Consertar as redes', go:'u2r', set:{ulife:'ami'}},
    {t:'Olhar o mar por um tempo', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'Ao olhar as ondas que brilhavam, o coração dele ficava quieto e calmo.\nO mar era o melhor amigo de Taro.'
    : 'A rede consertada com cuidado ficou bem esticada.\nCuidar bem das ferramentas era o jeito de Taro.', next:'u3'},

  u3:{art:'ura_ijime', text:'De repente, viu na praia um grupo de crianças que cercava uma tartaruga grande e fazia muito barulho.\nA tartaruga, sem saber o que fazer, encolheu a cabeça.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Não maltratem a tartaruga!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'Depois que as crianças foram para casa, Taro levou a tartaruga de volta ao mar com cuidado.\n"Não se deixe pegar outra vez."\nA tartaruga olhou para trás muitas vezes e sumiu para além das ondas.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Passaram-se alguns dias, e então, certo dia.\nÀ beira da água chegou aquela tartaruga.\n"Taro, muito obrigada pelo outro dia.\nEm agradecimento, vou levá-lo ao Palácio do Dragão."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Subiu nas costas da tartaruga, e agora, para dentro do mar.\nE então, como fazer a viagem?', choices:[
    {t:'Segurar firme nas costas', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Olhar em volta e aproveitar a paisagem', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Para o Palácio do Dragão!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Cardumes de peixes brilhavam, colunas de luz balançavam.\nDiante da paisagem que nunca tinha visto, Taro ficou absorto.'
    : (f.uride==='tsukamaru'
      ? 'Ao se segurar bem firme no casco, as costas da tartaruga estavam mornas,\ne, por incrível que pareça, ele não sentiu medo nenhum.'
      : 'Dentro da luz azul, a tartaruga mergulhava cada vez mais fundo.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'No fundo do mar apareceu um castelo verdadeiramente magnífico.\nEra o Palácio do Dragão.\nUma beleza que nenhum quadro conseguiria pintar.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Bem-vindo, Taro. É a pessoa gentil que salvou a nossa tartaruga, não é?"\nA Princesa Otohime o recebeu com um sorriso.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'A dança dos pargos e dos linguados!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Diante de uma mesa cheia de iguarias, pargos e linguados dançavam alegremente.\nTaro arregalou os olhos e bateu palmas.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'No castelo havia a "Sala das Quatro Estações".\nPelas quatro janelas dava para ver primavera, verão, outono e inverno ao mesmo tempo.';
    if(f.first) return t;
    return t + '\nQual foi a janela preferida?';
  }, choices:[
    {t:'A janela da primavera, com flores de cerejeira caindo', go:'u10r', set:{umado:'haru'}},
    {t:'A janela do inverno, com neve caindo', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'A neve vista do fundo do mar caía em silêncio, e dava para ficar olhando sem parar.\n"Que coisa curiosa. Aqui existe de tudo."'
    : 'Do outro lado da janela, as pétalas de cerejeira voavam devagar.\n"Que coisa curiosa. Aqui existe de tudo."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'Os dias alegres passaram como um sonho...\ne, quando percebeu, três anos tinham passado.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Certa noite, Taro se lembrou de repente do pai e da mãe que ficaram na aldeia.\nSerá que estão bem? Será que estão com saudade dele?';
    if(f.first) return t + '\n"Princesa Otohime. Já está na hora de eu voltar para casa."';
    return t + '\nO que ele vai fazer?';
  }, choices:[
    {t:'Dizer "Deixe-me voltar para casa"', go:'u13'},
    {t:'Ficar aqui só mais um pouco', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'A Princesa Otohime assentiu com um ar um pouco triste\ne estendeu uma bela caixa de laca preta brilhante.\n"Esta caixa chama-se tamatebako."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Nunca deve abrir esta caixa'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'Nas costas da tartaruga, ele atravessou o mar de volta.\nAo olhar para trás, as luzes do Palácio do Dragão ficaram distantes e pequenas.', next:'u15'},

  u15:{art:'ura_hama700', text:'Ao chegar à praia, alguma coisa estava diferente.\nA casa dele não estava lá. O pinheiro de sempre também não.\nNo caminho, só encontrava rostos desconhecidos.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Durante os três anos no Palácio do Dragão,\nsetecentos anos tinham passado em terra.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'O pai e a mãe já eram pessoas de um tempo muito distante.\nTaro estava completamente sozinho.';
    if(f.first) return t + '\nNa sua solidão, pôs a mão na tampa do tamatebako.';
    return t + '\nO que ele vai fazer?';
  }, choices:[
    {t:'Abrir o tamatebako', go:'uc_kemuri'},
    {t:'Deixar fechado e esperar na praia', go:'ua1'},
    {t:'Devolver ao mar', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Uma fumaça branca...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'Quando a fumaça sumiu, Taro tinha virado um velho de cabelos brancos.\nO tempo que estava parado no Palácio do Dragão voltou todo de uma vez.';
    if(f.first) return t;
    return t + '\nO que ele vai fazer?';
  }, choices:[
    {t:'Ficar parado, olhando para o mar', go:'e_u_seishi'},
    {t:'Começar a andar em direção ao Palácio do Dragão', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Aberto, e agora o arrependimento: o tamatebako.\nAinda assim, no peito de Taro continuavam aqueles dias bonitos,\nmais bonitos do que qualquer quadro, guardados como um tesouro.\nSó o som das ondas ecoava, calmo.\nFim.'},

  /* ---- O grou (o antigo final do Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'Rumo à beira da água, um passo, dois passos.\nEnquanto caminhava como se fosse puxado para o mar do Palácio do Dragão,\no corpo de Taro ficou leve como uma pluma.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'Transformou-se num grou!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Taro, agora um grou branco, voou sobre o mar do amanhecer.\nEntão, entre as ondas, uma tartaruga verde pôs a cabeça de fora.\nEra a Princesa Otohime, que tinha tomado a forma de uma tartaruga.\nO grou e a tartaruga são sinais de vida longa e de felicidade.\nOs dois dançaram para sempre sobre o mar brilhante.\nE viveram felizes para sempre.', ending:'u_tsuru'},

  /* ---- Não abrir (a promessa do Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro não abriu a caixa.\n"Eu prometi que não ia abrir."\nA partir daquele dia, de manhã e de tarde, Taro olhava o mar desde a praia.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Numa manhã, alguns dias depois, o mar brilhou dourado\ne um barco veio deslizando sobre a água.\n"Taro. Cumpriu a promessa, não foi?"\nEra a voz da Princesa Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Eu acreditava que, se a caixa ficasse fechada, um dia voltaríamos a nos ver."\nTaro subiu no barco e partiu para uma viagem sem despedidas.\nO tamatebako era o sinal da promessa que unia os dois.\nE viveram felizes para sempre.'},

  /* ---- Devolver ao mar ---- */
  uu1:{art:'ura_hama', text:'Taro pediu emprestado um barco pequeno e foi para o alto-mar.\n"O que é precioso deve voltar para um lugar precioso."\nCom cuidado, deixou o tamatebako flutuar sobre as ondas.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Então, debaixo das ondas, apareceu aquela tartaruga\ne colocou a caixa nas costas.\n"Taro. Talvez essa seja a melhor resposta de todas."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'As lembranças ficam no peito, mesmo sem abrir a caixa.\nTaro decidiu viver de novo como pescador, numa aldeia nova.\nO mar continua a brilhar, hoje também.\nE viveram felizes para sempre.'},

  /* ---- Ficar no palácio ---- */
  un1:{art:'ura_otohime', text:'"Deixe-me ficar aqui só mais um pouco. Mas..."\nComo se tivesse visto o fundo do coração dele, a Princesa Otohime assentiu em silêncio\ne levou Taro diante do espelho de água.', next:'un2'},
  un2:{art:'hime_ryugu', text:'No espelho de água aparecia a casa da aldeia, tão conhecida.\nO pai e a mãe riam, com o ar de quem está bem.\n"De vez em quando podemos olhar por eles daqui.\nE quando quiser vê-los, a tartaruga pode levá-lo a qualquer hora."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Tranquilo, Taro decidiu continuar a vida no Palácio do Dragão.\nMesmo longe, se pensam uns nos outros, família é família.\nOs dias no Palácio do Dragão seguem calmos, hoje também.\nE viveram felizes para sempre.'},

  /* ================= A história da Princesa Otohime ================= */

  h1:{art:'hime_ryugu', text:'Esta é a história da Princesa Otohime, do Palácio do Dragão.\nUm castelo bonito, comidas deliciosas, canto e dança.\nTinha tudo, e mesmo assim Otohime estava um pouco entediada.', next:'h2'},
  h2:{art:'hime_ryugu', text:'O que vamos fazer hoje?', choices:[
    {t:'Passear pelo jardim de corais', go:'h2r', set:{hlife:'sango'}},
    {t:'Ir ouvir o canto das baleias', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'De um mar distante chegava o canto grave das baleias.\nUm canto grande, suave e um pouco solitário.'
    : 'Corais vermelhos e cor-de-rosa balançavam por todo o jardim.\nEram bonitos, mas era uma pena não haver ninguém a quem mostrá-los.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Certo dia, a tartaruga voltou com pressa.\nO casco reluzia e os olhos brilhavam.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Princesa, escute isto!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Alguém me salvou quando eu estava presa na praia!"\nTaro, convidado ao castelo, era uma pessoa que ria muito.\nNo Palácio do Dragão surgiram risadas que nunca tinham existido ali,\ne os dias entediantes começaram a ganhar cor.', next:'h5'},
  h5:{art:'ura_otohime', text:'Mas, numa noite do terceiro ano:\n"Já está na hora de eu voltar para casa."\nO peito de Otohime ficou apertado.\nQueria segurá-lo. Mas não se pode deter um coração que pensa na família.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Queria segurá-lo.\nMas...'}, then:'h6'},
  h6:{art:'ura_tama', text:'Otohime preparou uma caixa de laca preta brilhante.\nO que colocar dentro desta caixa antes de entregá-la?', choices:[
    {t:'Guardar dentro os dias felizes de Taro', go:'e_h_himitsu'},
    {t:'Guardar dentro a magia do "vamos nos encontrar de novo"', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Três anos no Palácio do Dragão são setecentos anos em terra.\nSe nada fosse feito, Taro iria envelhecer de uma vez só.\nPor isso ela fechou dentro da caixa, com cuidado, o tempo que tinha passado.\n"Enquanto não abrir, Taro continua o mesmo Taro.\nNas noites de solidão, abrace esta caixa e durma."\nEsse era o segredo do tamatebako, que ninguém conhecia.\nE viveram felizes para sempre.'},
  hm1:{art:'hime_ryugu', text:'"Se não abrir a caixa, com certeza vamos nos encontrar de novo."\nCom esse desejo guardado dentro, Otohime entregou a caixa.\nE, a partir daquele dia, ela olhava o espelho de água todos os dias.', next:'hm2'},
  hm2:{art:'ura_fune', text:'No espelho de água, Taro também hoje não tinha aberto a caixa\ne olhava fixamente para o mar.\n"...Já basta. Vou buscá-lo."\nOtohime mandou preparar o barco mais rápido de todos.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'O barco desliza sobre o mar dourado da manhã.\nDireto para a pessoa que está à espera.\nUma promessa só se torna magia quando estão juntos\nquem a cumpre e quem acredita nela.\nE viveram felizes para sempre.'},

  /* ================= A história da tartaruga ================= */

  v1:{art:'kame_hama', text:'Esta é a história de uma tartaruga marinha.\nEla adorava tomar sol e, naquele dia, também cochilava na praia.\nQuando percebeu, estava rodeada de crianças.', next:'v2'},
  v2:{art:'kame_hama', text:'"Não maltratem a tartaruga!"\nUm pescador de voz gentil veio ajudá-la\ne a levou de volta ao mar com cuidado.\nBalançando nas ondas, a tartaruga tomou uma decisão firme.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'Esta bondade eu vou retribuir!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'De volta ao Palácio do Dragão, a tartaruga começou os preparativos na hora.\nO que fazer primeiro?', choices:[
    {t:'Polir o casco até ficar reluzente', go:'v3r', set:{vlife:'migaku'}},
    {t:'Contar logo tudo à Princesa', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'Um convidado ia viajar nessas costas, então elas tinham de ficar reluzentes.\nBem polido, o casco brilhava como um espelho.'
    : '"Que pessoa admirável", disse a Princesa com um sorriso.\n"Vamos convidá-lo para agradecer, sem falta."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Com a permissão da Princesa, a tartaruga foi buscá-lo na praia.\n"Taro, em agradecimento, vou levá-lo ao Palácio do Dragão."\nEra a primeira vez na vida que levava um convidado nas costas.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Suba nas minhas costas!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'E agora, o caminho para o Palácio do Dragão.\nPor onde vamos passar?', choices:[
    {t:'Ir pelo atalho secreto', go:'v5r', set:{vmichi:'chika'}},
    {t:'Ir pelo caminho mais bonito', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Passaram num instante ao lado de uma baleia enorme.\n"Uau!", gritou Taro, lá nas costas dela.\nÉ um atalho do qual ela tem um pouco de orgulho.'
    : 'Atravessaram devagar a floresta de corais.\n"Que bonito", suspirou Taro, lá nas costas dela.\nÉ uma paisagem da qual ela tem um pouco de orgulho.', next:'v6'},
  v6:{art:'ura_ryugu', text:'Entregou o convidado em segurança: grande missão cumprida.\nE agora, o que fazer?', choices:[
    {t:'Ficar no Palácio do Dragão e cuidar dele', go:'e_v_senaka'},
    {t:'Voltar à praia e esperar por ele', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'Durante três anos, a tartaruga foi o transporte particular de Taro.\nAs costas dela eram sempre o melhor lugar do mar.\n"As costas da tartaruga são o lugar onde eu fico mais tranquilo."\nCada vez que ouvia isso, o casco dela ficava um pouquinho orgulhoso.\nE viveram felizes para sempre.'},
  vm1:{art:'kame_hama', text:'A tartaruga voltou à praia e decidiu esperar todos os dias à beira da água.\nAs tartarugas vivem muito, muito tempo.\nPor mais tempo que passe, elas nunca esquecem uma promessa importante.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'O tempo passou: setecentos anos.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Certa manhã, uma pessoa muito conhecida estava de pé na praia.\n"Bem-vindo de volta, Taro."\nNaquela praia completamente mudada, uma só criatura,\na tartaruga, ainda se lembrava de Taro.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, URA_PT);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'O tamatebako do arrependimento', h:'A história original, da primeira partida'},
    {id:'u_tsuru',    n:'Taro, o grou',                 h:'Se, depois de abrir a caixa, caminhar em direção ao mar...'},
    {id:'u_akenai',   n:'O tamatebako que ficou fechado', h:'Se cumprir a promessa e esperar na praia...'},
    {id:'u_umi',      n:'O tesouro devolvido ao mar',   h:'Se, sem abrir a caixa, devolvê-la ao mar...'},
    {id:'u_nokoru',   n:'Os dias no Palácio do Dragão', h:'Se não voltar para casa e ficar mais um pouco...'},
    {id:'uh_himitsu', n:'O segredo do tamatebako',      h:'Na história de Otohime, se guardar os dias na caixa...'},
    {id:'uh_mukae',   n:'O barco que vem buscá-lo',     h:'Na história de Otohime, se guardar a magia na caixa...'},
    {id:'uv_senaka',  n:'O convidado nas costas',       h:'Na história da tartaruga, se ficar no palácio...'},
    {id:'uv_matsu',   n:'A promessa na praia',          h:'Na história da tartaruga, se esperar na praia...'}
  );

})();
