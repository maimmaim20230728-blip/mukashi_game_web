"use strict";
/* Como os doze animais foram escolhidos - Portuguese (neutral; avoid Europe-only or Brazil-only slang,
   prefer forms understood in both) scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var N12 = ['Rato','Boi','Tigre','Coelho','Dragão','Serpente','Cavalo','Ovelha','Macaco','Galo','Cão','Javali'];

  var JUNISHI_PT = {

  /* ================= Como os doze animais foram escolhidos ================= */

  ju1:{art:'ju_ofure', text:'Esta é a história dos 12 animais que deram os seus nomes aos anos.\nNo fim de um certo ano, o deus mandou anunciar um aviso.\n"Na manhã do dia de Ano Novo, venham ao meu palácio. Os 12 primeiros a chegar, na ordem em que chegarem, darão os seus nomes aos anos."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'Os animais começaram os preparativos, cada um à sua maneira.';
    if(f.first) return t;
    return t + '\nO que vão preparar?';
  }, choices:[
    {t:'Treinar a corrida', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Preparar um banquete e esperar', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'A ovelha fez bolinhos de arroz, e o macaco juntou castanhas.\nNa manhã de Ano Novo, todos iriam comer juntos.'
    : 'O tigre e o cavalo correram pelo campo muitas e muitas vezes.\nO coelho treinou os seus saltos, salta, salta, salta.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'O gato não tinha ouvido o dia que estava no aviso.\n"Ei, rato, quando é mesmo que vamos ao palácio?"';
    if(f.first) return t + '\n"Na manhã do dia 2 de janeiro."\nFoi assim que o rato respondeu.';
    return t + '\nO que o rato responde?';
  }, choices:[
    {t:'"Na manhã do dia 2 de janeiro"', go:'ju4'},
    {t:'"Na manhã do dia 1 de janeiro"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'A noite de véspera de Ano Novo.\n"Sou lento das pernas, então é melhor partir agora."\nE o boi começou a andar pelo caminho de neve, ainda no escuro.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Vamos devagar'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Partida ao anoitecer!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Nas costas dele, o rato saltou de leve.\nO boi não notou nada.\nPelo caminho de neve, devagar, devagar.';
    if(f.first) return t;
    return t + '\nO que o rato fez pelo caminho, à noite?';
  }, choices:[
    {t:'Dormiu nas costas do boi', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Contou as estrelas', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'No céu noturno sobre a neve havia estrelas sem conta.\nO rato foi contando, uma, duas, três, e esperou a manhã.'
    : 'As costas do boi eram quentes, e sem perceber o rato adormeceu.\nSó os passos do boi seguiam pelo caminho de neve.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Chegou a manhã.\nO portão do palácio estava bem à frente deles.\nO boi pensou que tinha chegado primeiro.';
    if(f.first) return t;
    return t + '\nO que o rato faz?';
  }, choices:[
    {t:'Saltar e entrar primeiro', go:'juc_tobiori'},
    {t:'Ficar em cima e entrar junto com o boi', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Saltou!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'Nesse momento, o rato saltou das costas do boi\ne entrou pelo portão antes dele.\nA voz do deus falou: "O primeiro ano será o do Rato."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Rato'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Em seguida, o boi passou pelo portão.\n"O próximo ano será o do Boi."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Rato, Boi'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'O tigre chegou correndo.\nDepois o coelho passou pelo portão com um salto.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'O dragão e a serpente chegaram ao portão no mesmo instante.\n"Passe primeiro", disse a serpente.\nO dragão entrou primeiro, e a serpente depois.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tigre, Coelho, Dragão, Serpente'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'O cavalo chegou a galope, e a ovelha veio atrás.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'O macaco e o cão começaram a discutir no caminho e quase não avançavam.\nO galo entrou no meio dos dois.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'Ao palácio primeiro!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Depois do pedido do galo, o macaco e o cão pararam de discutir.\nPassaram pelo portão nesta ordem: o macaco, o galo e o cão.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Cavalo, Ovelha, Macaco, Galo, Cão'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'Por último, o javali.\nComo só sabia correr em linha reta,\npassou direto pelo portão e teve de voltar.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Javali em linha reta!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'O 12º foi o Javali.\nAssim ficaram completos os 12 nomes dos anos.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'Os 12 nomes!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'O deus falou aos 12 animais.\n"De agora em diante, ano após ano e por ordem, deem ao ano o seu nome."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'Na manhã seguinte.\nO gato chegou ao portão do palácio.\nO portão estava fechado.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... Hm?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'A voz do deus falou.\n"O dia de vir ao palácio era ontem. Lave o rosto e volte outro dia."';
    if(f.first) return t;
    return t + '\nO que o gato faz?';
  }, choices:[
    {t:'Lavar o rosto e voltar para casa', go:'ju18'},
    {t:'Lavar o rosto e ir ao portão mais uma vez', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'O gato lavou o rosto.\nE, desde então, sempre que via um rato, ia atrás dele.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Rato, Boi, Tigre, Coelho, Dragão, Serpente, Cavalo, Ovelha, Macaco, Galo, Cão, Javali.\nAno após ano e por ordem, os 12 animais deram ao ano o seu nome.\nE viveram felizes para sempre.'},

  /* ---- Nas costas do boi ---- */
  jua1:{art:'ju_mon', text:'O rato não saltou.\nContinuou nas costas do boi, e os dois passaram juntos pelo portão.\n"Dois de uma vez, então", disse a voz do deus.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"O boi pode ser o primeiro", disse o rato.\n"O rato pode ser o primeiro", disse o boi.\nO deus riu.\n"Então o primeiro ano será o do Rato, e o próximo o do Boi.\nEm troca, vocês dois vão ajudar um ao outro nos seus anos."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Desde então, no ano do Rato, ajuda o boi, e no ano do Boi, ajuda o rato,\ncada um no trabalho do outro.\nA ordem não mudou. Mas foi uma manhã de dois.\nE viveram felizes para sempre.'},

  /* ---- O cumprimento de cada ano ---- */
  jub1:{art:'ju_neko_kao', text:'O gato lavou o rosto e foi ao portão mais uma vez.\n"Lavei o rosto e voltei."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'A voz do deus falou.\n"Só há 12 nomes para os anos.\nMas venha dar os seus cumprimentos em cada dia de Ano Novo."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Desde então, em cada manhã de Ano Novo, o gato vai ao palácio dar os seus cumprimentos.\nO gato não dá o seu nome a nenhum ano.\nMas o portão do palácio abre para o gato.\nE viveram felizes para sempre.'},

  /* ---- Do outro lado do mar ---- */
  juu1:{art:'ju_nezuneko', text:'"Na manhã do dia 1 de janeiro."\nO gato disse "Obrigado" e, nessa noite, foi dormir cedo.', next:'juu2'},
  juu2:{art:'ju_kake', text:'A manhã de Ano Novo.\nO rato nas costas do boi, o boi devagar, o tigre a toda velocidade.\nE, diante do portão, o coelho e o gato chegaram no mesmo instante.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'No mesmo instante?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'O deus pensou por um tempo e então falou.\n"Aqui, este ano será do Coelho.\nNas terras do outro lado do mar, este ano ficará com o Gato."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'Por isso, ainda hoje, nas terras do outro lado do mar\nhá lugares em que o gato dá o seu nome a um ano.\nA mesma história, mas em outro país os nomes também são outros.\nE viveram felizes para sempre.'},

  /* ================= A história do gato ================= */

  jn1:{art:'jneko_hinata', text:'Esta é a história de um gato.\nEle ouviu que havia um aviso do deus, mas não ouviu o dia.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'A quem perguntar?', choices:[
    {t:'Perguntar ao rato', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Perguntar ao cão', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"Janeiro... dia 1, será? O rato sabe melhor", disse o cão.\nEntão o gato perguntou ao rato.\n"Na manhã do dia 2 de janeiro", respondeu o rato.'
    : '"Na manhã do dia 2 de janeiro", respondeu o rato.\n"Obrigado", disse o gato.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'A manhã do dia 2 de janeiro.\nO gato foi ao portão do palácio.\nO portão estava fechado.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... Ontem?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"O dia de vir ao palácio era ontem. Lave o rosto e volte outro dia."\nAssim falou a voz do deus.\nO que o gato faz?', choices:[
    {t:'Lavar o rosto e voltar para casa', go:'jna1'},
    {t:'Enrolar-se ao sol', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'O gato lavou o rosto.\nA água estava fria.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'O que o gato pensou depois de lavar o rosto\nnão está escrito nesta história.\nO gato lavou o rosto. Só isso.\nFim.'},
  jnh1:{art:'jneko_hinata', text:'O gato foi para um lugar ao sol.\nEnrolou-se e fechou os olhos.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Há gatos que correm atrás de ratos, e há gatos que dormem ao sol.\nO que este gato pensa agora, só o gato sabe.\nFim.'},

  /* ================= A história do rato ================= */

  jz1:{art:'jnezumi_ana', text:'Esta é a história de um rato.\nAo ouvir o aviso do deus, o rato pensou.\n(Com estas pernas, por mais que eu corra, não chego a tempo.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'De noite, dentro da toca, o que fazer?', choices:[
    {t:'Pensar no caminho até o palácio', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Dormir cedo e ficar pronto para a manhã', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'O rato entrou fundo na palha e dormiu cedo.\nAté nos sonhos, ele via o portão do palácio.'
    : 'O rato percorreu na cabeça, muitas e muitas vezes, o caminho até o palácio.\nÉ um caminho longo. Preciso das costas de alguém, pensou ele.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"Quando é mesmo que vamos ao palácio?", perguntou o gato.\nO rato respondeu: "Na manhã do dia 2 de janeiro."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'Na noite de véspera de Ano Novo, o rato saltou para as costas do boi.\nO boi não notou nada.\nO que o rato faz?', choices:[
    {t:'Seguir viagem em silêncio', go:'jzu1'},
    {t:'Falar com o boi', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'De manhã, diante do portão, o rato saltou.\nO primeiro ano foi o do Rato.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'O rato não disse ao gato o dia verdadeiro.\nO motivo, só o rato sabe.\nE o rato deu o seu nome ao primeiro de todos os anos.\nFim.'},
  jzs1:{art:'ju_senaka', text:'"Boi, obrigado por me levar."\nO boi virou a cabeça, surpreso.\n"Ah, é você, rato. Não pesa nada. Pode ficar aí mesmo."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Diante do portão, o boi disse:\n"Vá depressa e busque o seu nome."\nO rato saltou e passou pelo portão.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'O primeiro ano foi o do Rato. O próximo, o do Boi.\nO rato nunca esqueceu o boi que lhe emprestou as costas.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_PT);

  T.ZK_EN.push(
    {section:'Como os doze animais foram escolhidos', note:'Nas terras do outro lado do mar, há lugares em que o gato faz parte dos doze. No Japão também se contam jogos de palavras sobre um décimo terceiro animal, como a doninha ou a rã.'},
    {id:'ju_seishi',  n:'Os doze nomes',                 h:'A história como é contada, logo na primeira vez'},
    {id:'ju_ushi',    n:'Nas costas do boi',             h:'Diante do portão, ficar em cima em vez de saltar...'},
    {id:'ju_kao',     n:'O cumprimento de cada ano',     h:'Lavar o rosto e ir ao portão mais uma vez...'},
    {id:'ju_umi',     n:'Do outro lado do mar',          h:'Quando o rato responde o dia verdadeiro...'},
    {id:'jn_asa',     n:'A manhã seguinte',              h:'Na história do gato: lavar o rosto e voltar para casa...'},
    {id:'jn_hinata',  n:'O gato ao sol',                 h:'Na história do gato: enrolar-se ao sol...'},
    {id:'jz_uso',     n:'O dia da mentira',              h:'Na história do rato: seguir viagem em silêncio...'},
    {id:'jz_senaka',  n:'O dia das costas emprestadas',  h:'Na história do rato: falar com o boi...'}
  );

})();
