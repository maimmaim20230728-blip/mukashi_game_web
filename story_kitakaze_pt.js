"use strict";
/* O Vento Norte e o Sol - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both)
   scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Portuguese wording is original;
   no existing Portuguese translation was copied. The traveler is never given a gender:
   'o viajante' is the generic common-gender noun and no pronouns or gendered adjectives are used for it. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var KITAKAZE_PT = {

  /* ================= O Vento Norte e o Sol ================= */

  kz1:{art:'kz_sora', text:'Esta é a história do Vento Norte e do Sol.\nUm dia, lá no alto do céu, o Vento Norte e o Sol discutiam.\n"Eu sou mais forte." "Não, eu é que sou."', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Quem é mais forte?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'Naquela manhã, um viajante saiu da aldeia e começou a caminhar pela estrada.\nDe casaco, com a bolsa no ombro.';
    if(f.first) return t;
    return t + '\nO que vai na bolsa?';
  }, choices:[
    {t:'Uma garrafa de água', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Pão e uma maçã', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'Na bolsa: pão, uma maçã e mais um casaco.\nO caminho parecia longo.'
    : 'Na bolsa: uma garrafa de água e mais um casaco.\nO caminho parecia longo.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'O Vento Norte e o Sol viram aquele viajante.\n"Quem fizer o viajante tirar o casaco, esse será o mais forte."';
    if(f.first) return t + '\nPrimeiro, foi a vez do Vento Norte.';
    return t + '\nE agora?';
  }, choices:[
    {t:'Competir. Primeiro, a vez do Vento Norte', go:'kz4'},
    {t:'Parar de competir e tentar juntos', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'O Vento Norte soprou com força desde o começo.\nVuuu!\nO viajante segurou a gola do casaco.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Vuuu!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'O Vento Norte soprou mais forte.\nVuuu, vuuu!\nO viajante segurou o casaco bem firme com as duas mãos.\n"Que frio. Vou vestir mais um."\nTirou o outro casaco da bolsa e vestiu por cima.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Vuuu, vuuu!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Que frio...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'O Vento Norte soprou com toda a força que tinha.\nAs folhas voaram e a areia da estrada subiu no ar.\nMesmo assim, o viajante não soltou o casaco.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Vuuuuuu!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'O Vento Norte ficou cansado.';
    if(f.first) return t + '\n"Sol, agora é a sua vez."\nE o Vento Norte passou o viajante para o Sol.';
    return t + '\nO que faz o Vento Norte?';
  }, choices:[
    {t:'"Sol, agora é a sua vez"', go:'kzc_kao_kk'},
    {t:'Ir buscar as nuvens', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Agora é a sua vez'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'O Sol brilhou, no começo, só um pouco.\nUm calor suave.\nO viajante tirou o casaco de cima e guardou na bolsa.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Um calor suave...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'O Sol brilhou mais forte.\nClaro e escaldante.\nO viajante começou a suar.';
    if(f.first) return t;
    return t + '\nO que faz o viajante?';
  }, choices:[
    {t:'Seguir em frente', go:'kzc_poka2'},
    {t:'Ir para a sombra', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Escaldante!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'O Sol brilhou ainda mais forte.\n"Que calor. Não dá para aguentar."\nO viajante tirou o casaco todo e pendurou no ombro.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Ao lado da estrada corria um rio.\nO viajante deixou o casaco na margem e saltou na água.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Chuá!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'O viajante tomou banho no rio, com ar de quem se sentia bem.\nLá no alto do céu, o Vento Norte e o Sol olhavam.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'O viajante não sabe que houve uma disputa.\nSecou o casaco na margem e seguiu o seu caminho.\nFim.'},

  /* ---- O dia certo para lavar roupa ---- */
  kzf1:{art:'kz_sentaku', text:'"Vamos parar de competir e tentar juntos."\nO Vento Norte soprou e o Sol brilhou.\nToda a roupa lavada da aldeia secou antes do meio-dia.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'O viajante seguiu o caminho bem à vontade, ainda de casaco.\nO vento estava fresco, e a luz do sol, quente.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'As pessoas da aldeia chamaram aquele dia de "o dia certo para lavar roupa".\nQual dos dois era mais forte, ninguém decidiu.\nE viveram felizes para sempre.'},

  /* ---- Descanso na sombra ---- */
  kzk1:{art:'kz_kokage', text:'O viajante entrou na sombra de uma árvore grande e sentou-se.\nO casaco continuou vestido.\nUm gole de água e um descanso.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'O sol baixou e o ar ficou fresco.\nO viajante voltou a caminhar, ainda de casaco.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'Lá no alto do céu, o Vento Norte e o Sol olharam um para o outro.\nA disputa ficou sem decisão.\nFim.'},

  /* ---- Quando as nuvens vieram ---- */
  kzu1:{art:'kz_kumo', text:'O Vento Norte foi buscar as nuvens.\nO céu escureceu e começou a chover.\nO viajante abrigou-se debaixo de uma árvore.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'Quando a chuva parou, o viajante voltou a caminhar.\nO casaco continuou vestido.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'"Por hoje, ficamos por aqui", disse o Sol.\n"Fica para a próxima", disse o Vento Norte.\nFim.'},

  /* ================= A história do Vento Norte ================= */

  kk1:{art:'kz_sora', text:'Esta é a história do Vento Norte.\nO Vento Norte vem do mar do norte.\nSoprar com força é o trabalho do Vento Norte.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Para onde o Vento Norte vai soprar hoje?', choices:[
    {t:'Para o mar', go:'kk2r', set:{kklife:'umi'}},
    {t:'Para os campos', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'O Vento Norte deu um sopro sobre os campos.\nAs ervas viraram-se todas de uma vez para o mesmo lado.'
    : 'O Vento Norte deu um sopro sobre o mar.\nAs ondas brancas subiram todas de uma vez.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'A disputa para fazer o viajante tirar o casaco não deu em nada.\nUm pouco cansado, o Vento Norte descansou lá no alto do céu.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Ainda assim, sei soprar bem'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Do alto do céu, dá para ver muitas coisas.\nPara onde vai o Vento Norte?', choices:[
    {t:'Para os barcos do porto', go:'kkh1'},
    {t:'Para as flores dos campos', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'No porto havia um barco que não conseguia mover-se.\nNão havia vento, e as velas pendiam frouxas.\nO Vento Norte soprou de leve nas velas.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'As velas encheram-se, e o barco saiu para o mar.\nOs marinheiros acenaram para o céu.\nE viveram felizes para sempre.'},
  kkt1:{art:'kk_nohara', text:'As flores dos campos tinham criado sementes.\nO Vento Norte levou as sementes para bem longe.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'Na primavera seguinte, as mesmas flores floresceram numa colina distante.\nEram as sementes que o Vento Norte tinha levado.\nE viveram felizes para sempre.'},

  /* ================= A história do Sol ================= */

  kh1:{art:'kz_sora', text:'Esta é a história do Sol.\nO Sol nasce de manhã no leste e põe-se à tarde no oeste.\nBrilhar é o trabalho do Sol.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'O que o Sol vai iluminar primeiro esta manhã?', choices:[
    {t:'A horta', go:'kh2r', set:{khlife:'hatake'}},
    {t:'Os telhados da aldeia', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'O Sol iluminou os telhados da aldeia.\nUm gato em cima de um telhado espreguiçou-se.'
    : 'O Sol iluminou a horta.\nO orvalho brilhou, e os brotos cresceram.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'No dia da disputa do viajante, o Sol brilhou mais forte do que de costume.\nO viajante saltou no rio, mas a terra da horta secou e rachou.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Talvez eu tenha brilhado demais'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'O que faz o Sol?', choices:[
    {t:'Pedir sombra à nuvem', go:'khk1'},
    {t:'Continuar a brilhar até se pôr', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'O Sol pediu a uma nuvem que passava.\n"Dá para fazer um pouco de sombra sobre a horta?"\nA nuvem parou em cima da horta.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'Na sombra, a horta pôde respirar.\nHá coisas que nem o Sol consegue fazer.\nO Sol não esqueceu o dia em que pediu à nuvem.\nE viveram felizes para sempre.'},
  khy1:{art:'kh_yuuhi', text:'O Sol continuou a brilhar até se pôr atrás das montanhas do oeste.\nViu as costas do viajante passarem por uma colina distante.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Se o viajante vestiu ou tirou o casaco, o Sol já não pode ver.\nAmanhã o Sol nasce outra vez.\nFim.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_PT);

  T.ZK_EN.push(
    {section:'O Vento Norte e o Sol', note:'No antigo texto grego, esta história termina com o banho do viajante num rio. Qual dos dois venceu, o livro não diz. A frase "em muitos casos, convencer funciona melhor do que a força" foi acrescentada mais tarde. Há mais de uma maneira de ler esta história.'},
    {id:'kz_seishi', n:'Banho no rio',              h:'A história como é contada, logo na primeira vez'},
    {id:'kz_kokage', n:'Descanso na sombra',        h:'Quando, na vez do Sol, o viajante vai para a sombra...'},
    {id:'kz_futari', n:'Dia de lavar roupa',        h:'Quando os dois param de competir e tentam juntos...'},
    {id:'kz_kumo',   n:'Quando as nuvens vieram',   h:'Quando o Vento Norte vai buscar as nuvens...'},
    {id:'kk_ho',     n:'Encher as velas',           h:'Na história do Vento Norte, quando se vai ao porto...'},
    {id:'kk_tane',   n:'Levar as sementes',         h:'Na história do Vento Norte, quando se vai aos campos...'},
    {id:'kh_kumo',   n:'Pedir à nuvem',             h:'Na história do Sol, quando se pede à nuvem...'},
    {id:'kh_yuuhi',  n:'Até se pôr',                h:'Na história do Sol, quando se brilha até o pôr do sol...'}
  );

})();
