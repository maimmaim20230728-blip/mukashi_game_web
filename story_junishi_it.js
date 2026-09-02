"use strict";
/* Come furono scelti i dodici animali - Italian scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Stile: italiano semplice da libro illustrato, in linea con story_it.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var N12 = ['Topo','Bue','Tigre','Coniglio','Drago','Serpente','Cavallo','Pecora','Scimmia','Gallo','Cane','Cinghiale'];

  var JUNISHI_IT = {

  /* ================= Come furono scelti i dodici animali ================= */

  ju1:{art:'ju_ofure', text:'Questa è la storia di 12 animali che diventarono i nomi degli anni.\nAlla fine di un anno, il dio fece un annuncio.\n"La mattina di Capodanno venite al palazzo. I primi 12 ad arrivare diventeranno, nell\'ordine, il nome di un anno."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'Gli animali cominciarono a prepararsi, ognuno a modo suo.';
    if(f.first) return t;
    return t + '\nChe cosa preparano?';
  }, choices:[
    {t:'Allenarsi a correre', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Preparare un banchetto e aspettare', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'La pecora preparò i dolci di riso, e la scimmia raccolse le castagne.\nLa mattina di Capodanno li avrebbero mangiati tutti insieme.'
    : 'La tigre e il cavallo corsero e ricorsero per i campi.\nIl coniglio si allenava a saltare, hop, hop, hop.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'Il gatto non aveva sentito il giorno dell\'annuncio.\n"Senti, Topo, quand\'è che si va al palazzo?"';
    if(f.first) return t + '\n"La mattina del 2 gennaio."\nCosì rispose il topo.';
    return t + '\nChe cosa risponde il topo?';
  }, choices:[
    {t:'"La mattina del 2 gennaio"', go:'ju4'},
    {t:'"La mattina del primo gennaio"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'La notte dell\'ultimo dell\'anno.\n"Ho le zampe lente. È meglio che parta subito."\nE il bue si incamminò sulla strada innevata, che era ancora buio.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Andiamo con calma'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Si parte a sera!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Sulla sua schiena saltò il topo, leggero leggero.\nIl bue non se ne accorse.\nSulla strada innevata, piano piano.';
    if(f.first) return t;
    return t + '\nChe cosa fece il topo lungo la strada di notte?';
  }, choices:[
    {t:'Dormire sulla schiena', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Contare le stelle', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'Sopra la neve, il cielo della notte era pieno di stelle.\nIl topo le contava, una, due, tre, e aspettava il mattino.'
    : 'La schiena del bue era calda, e senza accorgersene il topo si addormentò.\nSulla strada innevata restavano solo i passi del bue.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Venne il mattino.\nIl portone del palazzo era lì davanti.\nIl bue pensò di essere arrivato per primo.';
    if(f.first) return t;
    return t + '\nChe cosa fa il topo?';
  }, choices:[
    {t:'Saltare giù ed entrare per primo', go:'juc_tobiori'},
    {t:'Restare sulla schiena ed entrare insieme al bue', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Un salto giù!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'In quel momento il topo saltò giù dalla schiena del bue\ned entrò dal portone prima di lui.\nSi udì la voce del dio: "Il primo anno sarà il Topo."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Topo'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Subito dopo, il bue passò sotto il portone.\n"Il prossimo anno sarà il Bue."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Topo, Bue'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'La tigre arrivò di corsa.\nPoi il coniglio passò sotto il portone con un balzo.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'Il drago e il serpente arrivarono al portone nello stesso momento.\n"Prego, passa tu", disse il serpente.\nEntrò prima il drago, e poi il serpente.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tigre, Coniglio, Drago, Serpente'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'Il cavallo arrivò al galoppo, e la pecora lo seguì.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'La scimmia e il cane cominciarono a litigare per strada e non andavano più avanti.\nIl gallo si mise in mezzo a loro.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'Prima al palazzo!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Spinti dal gallo, la scimmia e il cane smisero di litigare.\nPassarono sotto il portone la scimmia, il gallo e il cane, in questo ordine.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Cavallo, Pecora, Scimmia, Gallo, Cane'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'Per ultimo il cinghiale.\nSapeva correre soltanto dritto,\ncosì passò oltre il portone e dovette tornare indietro.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Sempre dritto, Cinghiale!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'Il dodicesimo fu il Cinghiale.\nCosì i 12 nomi degli anni furono al completo.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'I dodici nomi!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'Il dio disse ai 12 animali:\n"D\'ora in poi, ogni anno, uno dopo l\'altro, diventerete il nome dell\'anno."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'La mattina dopo.\nIl gatto arrivò al portone del palazzo.\nIl portone era chiuso.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... Eh?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'Si udì la voce del dio.\n"Il giorno per venire al palazzo era ieri. Lavati la faccia e torna un\'altra volta."';
    if(f.first) return t;
    return t + '\nChe cosa fa il gatto?';
  }, choices:[
    {t:'Lavarsi la faccia e tornare a casa', go:'ju18'},
    {t:'Lavarsi la faccia e andare di nuovo al portone', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'Il gatto si lavò la faccia.\nE da allora, ogni volta che vedeva un topo, si metteva a rincorrerlo.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Topo, Bue, Tigre, Coniglio, Drago, Serpente, Cavallo, Pecora, Scimmia, Gallo, Cane, Cinghiale.\nOgni anno, uno dopo l\'altro, i 12 animali diventarono il nome dell\'anno.\nE vissero felici e contenti.'},

  /* ---- Sulla schiena del bue ---- */
  jua1:{art:'ju_mon', text:'Il topo non saltò giù.\nRestò sulla schiena del bue, e insieme passarono sotto il portone.\n"Allora siete in due", disse la voce del dio.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"Vada prima il bue", disse il topo.\n"Vada prima il topo", disse il bue.\nIl dio rise.\n"Allora il primo anno sarà il Topo, e il prossimo il Bue.\nIn cambio, aiutatevi a vicenda nei vostri anni."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Da allora, il bue aiutava nell\'anno del Topo, e il topo aiutava nell\'anno del Bue,\nognuno nel lavoro dell\'altro.\nL\'ordine non cambia. Ma quella era una mattina in due.\nE vissero felici e contenti.'},

  /* ---- Il saluto di ogni anno ---- */
  jub1:{art:'ju_neko_kao', text:'Il gatto si lavò la faccia e andò di nuovo al portone.\n"Mi sono lavato la faccia."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'Si udì la voce del dio.\n"I nomi degli anni sono soltanto 12.\nMa ogni anno, a Capodanno, vieni a salutarmi."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Da allora il gatto va al palazzo ogni mattina di Capodanno, a portare il suo saluto.\nNon diventa il nome di un anno.\nMa il portone del palazzo si apre per il gatto.\nE vissero felici e contenti.'},

  /* ---- Nei paesi oltre il mare ---- */
  juu1:{art:'ju_nezuneko', text:'"La mattina del primo gennaio."\nIl gatto disse "Grazie" e quella notte andò a dormire presto.', next:'juu2'},
  juu2:{art:'ju_kake', text:'La mattina di Capodanno.\nIl topo sulla schiena del bue, il bue piano piano, la tigre a tutta corsa.\nE davanti al portone, il coniglio e il gatto arrivarono nello stesso momento.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'Nello stesso momento?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'Il dio ci pensò un momento, poi disse.\n"Qui questo anno sarà del Coniglio.\nNei paesi oltre il mare, questo anno lo affiderò al Gatto."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'Ecco perché ancora oggi, nei paesi oltre il mare,\nci sono luoghi in cui il gatto è il nome di un anno.\nÈ la stessa storia, ma in un altro paese anche i nomi sono diversi.\nE vissero felici e contenti.'},

  /* ================= La storia del gatto ================= */

  jn1:{art:'jneko_hinata', text:'Questa è la storia di un gatto.\nAveva sentito che il dio aveva fatto un annuncio, ma il giorno non l\'aveva sentito.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'A chi lo chiede?', choices:[
    {t:'Chiedere al topo', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Chiedere al cane', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"Gennaio... il primo, mi pare? Il topo lo sa meglio", disse il cane.\nCosì il gatto lo chiese al topo.\n"La mattina del 2 gennaio", rispose il topo.'
    : '"La mattina del 2 gennaio", rispose il topo.\n"Grazie", disse il gatto.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'La mattina del 2 gennaio.\nIl gatto andò al portone del palazzo.\nIl portone era chiuso.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... Ieri?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"Il giorno per venire al palazzo era ieri. Lavati la faccia e torna un\'altra volta."\nCosì disse la voce del dio.\nChe cosa fa il gatto?', choices:[
    {t:'Lavarsi la faccia e tornare a casa', go:'jna1'},
    {t:'Rannicchiarsi al sole', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'Il gatto si lavò la faccia.\nL\'acqua era fredda.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'Che cosa pensò il gatto dopo essersi lavato la faccia,\nin questa storia non è scritto.\nIl gatto si lavò la faccia. Nient\'altro.\nFine.'},
  jnh1:{art:'jneko_hinata', text:'Il gatto andò in un posto al sole.\nSi rannicchiò e chiuse gli occhi.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Ci sono gatti che rincorrono i topi e gatti che dormono al sole.\nChe cosa pensa adesso questo gatto, lo sa soltanto il gatto.\nFine.'},

  /* ================= La storia del topo ================= */

  jz1:{art:'jnezumi_ana', text:'Questa è la storia di un topo.\nQuando sentì l\'annuncio del dio, il topo si mise a pensare.\n(Con le mie zampe non ce la faccio, per quanto corra.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'Di notte, nella sua tana, che cosa fa?', choices:[
    {t:'Pensare alla strada per il palazzo', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Dormire presto e farsi trovare pronto', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'Il topo si infilò nella paglia e si addormentò presto.\nAnche nel sogno vedeva il portone del palazzo.'
    : 'Il topo ripercorse tante volte con la mente la strada fino al palazzo.\nEra una strada lunga. Mi serve la schiena di qualcuno, pensò.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"Quand\'è che si va al palazzo?" chiese il gatto.\nIl topo rispose: "La mattina del 2 gennaio."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'La notte dell\'ultimo dell\'anno, il topo saltò sulla schiena del bue.\nIl bue non se ne accorse.\nChe cosa fa il topo?', choices:[
    {t:'Farsi portare in silenzio', go:'jzu1'},
    {t:'Parlare al bue', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'Al mattino, davanti al portone, il topo saltò giù.\nIl primo anno fu il Topo.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'Il topo non disse al gatto il giorno vero.\nPerché, lo sa soltanto il topo.\nE il topo diventò il nome del primo anno.\nFine.'},
  jzs1:{art:'ju_senaka', text:'"Bue, grazie che mi porti."\nIl bue si voltò sorpreso.\n"Ah, sei tu, Topo. Non pesi niente, resta pure lì."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Davanti al portone, il bue disse:\n"Corri, vai a prenderti il tuo nome."\nIl topo saltò giù e passò sotto il portone.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'Il primo anno fu il Topo. Il prossimo, il Bue.\nIl topo non dimenticò mai il bue che gli aveva prestato la schiena.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_IT);

  T.ZK_EN.push(
    {section:'Come furono scelti i dodici animali', note:'In alcuni paesi oltre il mare il gatto fa parte dei dodici animali. In Giappone si raccontano anche giochi di parole su un tredicesimo animale, per esempio una donnola o una rana.'},
    {id:'ju_seishi',  n:'I dodici nomi',                  h:'La storia come viene raccontata, fin dalla prima volta'},
    {id:'ju_ushi',    n:'Sulla schiena del bue',          h:'Se al portone resti sulla schiena invece di saltare giù...'},
    {id:'ju_kao',     n:'Il saluto di ogni anno',         h:'Se ti lavi la faccia e torni ancora una volta al portone...'},
    {id:'ju_umi',     n:'Oltre il mare',                  h:'Se il topo dice il giorno vero...'},
    {id:'jn_asa',     n:'La mattina dopo',                h:'Nella storia del gatto: lavarsi la faccia e tornare a casa...'},
    {id:'jn_hinata',  n:'Il gatto al sole',               h:'Nella storia del gatto: rannicchiarsi al sole...'},
    {id:'jz_uso',     n:'Il giorno della bugia',          h:'Nella storia del topo: farsi portare in silenzio...'},
    {id:'jz_senaka',  n:'Il giorno della schiena prestata', h:'Nella storia del topo: parlare al bue...'}
  );

})();
