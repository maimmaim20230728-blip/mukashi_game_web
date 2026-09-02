"use strict";
/* Il Vento del Nord e il Sole - Italian scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Italian wording is original;
   no existing Italian translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var KITAKAZE_IT = {

  /* ================= Il Vento del Nord e il Sole ================= */

  kz1:{art:'kz_sora', text:'Questa è la storia del Vento del Nord e del Sole.\nUn giorno, in alto nel cielo, il Vento del Nord e il Sole stavano litigando.\n"Io sono più forte." "No, sono io."', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Chi è più forte?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'Quella mattina un viaggiatore uscì dal villaggio e si incamminò lungo la strada.\nCon il mantello addosso e la sacca sulla spalla.';
    if(f.first) return t;
    return t + '\nChe cosa mettere nella sacca?';
  }, choices:[
    {t:'Una borraccia d\'acqua', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Pane e una mela', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'Nella sacca: pane, una mela e un altro mantello.\nLa strada sembrava lunga.'
    : 'Nella sacca: una borraccia d\'acqua e un altro mantello.\nLa strada sembrava lunga.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'Il Vento del Nord e il Sole videro quel viaggiatore.\n"Chi farà togliere il mantello a quel viaggiatore sarà il più forte."';
    if(f.first) return t + '\nPer primo toccava al Vento del Nord.';
    return t + '\nChe cosa succede?';
  }, choices:[
    {t:'Fare a gara. Comincia il Vento del Nord', go:'kz4'},
    {t:'Non fare a gara e provare insieme', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'Il Vento del Nord soffiò forte fin dall\'inizio.\nFiuu!\nIl viaggiatore strinse il bavero del mantello.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Fiuu!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'Il Vento del Nord soffiò ancora più forte.\nFiuu, fiuu!\nIl viaggiatore strinse il mantello con tutte e due le mani.\n"Che freddo. Ne metto un altro."\nDalla sacca uscì il secondo mantello, e il viaggiatore se lo mise sopra al primo.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Fiuu, fiuu!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Che freddo...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'Il Vento del Nord soffiò con tutta la sua forza.\nLe foglie degli alberi volarono e la sabbia della strada si sollevò.\nEppure il viaggiatore non lasciò andare il mantello.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Fiuuuuu!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'Il Vento del Nord si stancò.';
    if(f.first) return t + '\n"Sole, adesso tocca a te."\nE il Vento del Nord passò il viaggiatore al Sole.';
    return t + '\nChe cosa fa il Vento del Nord?';
  }, choices:[
    {t:'"Sole, adesso tocca a te"', go:'kzc_kao_kk'},
    {t:'Andare a chiamare le nuvole', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Adesso tocca a te'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'Il Sole all\'inizio splendette solo un poco.\nTiepido, tiepido.\nIl viaggiatore si tolse il mantello in più e lo rimise nella sacca.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Tiepido, tiepido...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'Il Sole splendette più forte.\nSole a picco.\nIl viaggiatore cominciò a sudare.';
    if(f.first) return t;
    return t + '\nChe cosa fa il viaggiatore?';
  }, choices:[
    {t:'Continuare a camminare', go:'kzc_poka2'},
    {t:'Mettersi all\'ombra', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Sole a picco!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'Il Sole splendette ancora più forte.\n"Che caldo. Un caldo insopportabile."\nIl viaggiatore si tolse completamente il mantello e se lo mise sulla spalla.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Di fianco alla strada scorreva un fiume.\nIl viaggiatore posò il mantello sulla riva e si tuffò nell\'acqua.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Tonfo!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'Il viaggiatore fece il bagno, e sembrava proprio piacevole.\nIn alto nel cielo, il Vento del Nord e il Sole guardavano.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'Il viaggiatore non sa che c\'è stata una gara.\nIl mantello si asciugò sulla riva, e il viaggiatore riprese il cammino.\nFine.'},

  /* ---- Giornata da bucato ---- */
  kzf1:{art:'kz_sentaku', text:'"Smettiamo di fare a gara e proviamo insieme."\nIl Vento del Nord soffiò e il Sole splendette.\nTutto il bucato del villaggio si asciugò prima di mezzogiorno.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'Il viaggiatore proseguì tranquillo, con il mantello ancora addosso.\nIl vento era fresco e il sole caldo.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'La gente del villaggio chiamò quel giorno "giornata da bucato".\nChi dei due sia più forte, non lo decise nessuno.\nE vissero felici e contenti.'},

  /* ---- Una sosta all'ombra ---- */
  kzk1:{art:'kz_kokage', text:'Il viaggiatore si mise all\'ombra di un grande albero e si sedette.\nIl mantello restò addosso.\nUn sorso d\'acqua e un po\' di riposo.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'Il sole scese più in basso e l\'aria si fece fresca.\nIl viaggiatore riprese il cammino, con il mantello ancora addosso.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'In alto nel cielo, il Vento del Nord e il Sole si guardarono.\nLa gara restò aperta.\nFine.'},

  /* ---- Quando arrivarono le nuvole ---- */
  kzu1:{art:'kz_kumo', text:'Il Vento del Nord andò a chiamare le nuvole.\nIl cielo si fece scuro e cominciò a piovere.\nIl viaggiatore si riparò sotto un albero.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'Quando smise di piovere, il viaggiatore riprese il cammino.\nIl mantello restò addosso.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'"Per oggi basta così", disse il Sole.\n"Un\'altra volta", disse il Vento del Nord.\nFine.'},

  /* ================= La storia del Vento del Nord ================= */

  kk1:{art:'kz_sora', text:'Questa è la storia del Vento del Nord.\nIl Vento del Nord arriva soffiando dal mare del nord.\nSoffiare forte è il lavoro del Vento del Nord.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Dove va a soffiare oggi il Vento del Nord?', choices:[
    {t:'Sul mare', go:'kk2r', set:{kklife:'umi'}},
    {t:'Sui prati', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'Il Vento del Nord soffiò una volta sui prati.\nL\'erba si voltò tutta insieme dalla stessa parte.'
    : 'Il Vento del Nord soffiò una volta sul mare.\nLe onde bianche si alzarono tutte insieme.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'La gara per far togliere il mantello al viaggiatore non era andata bene.\nUn po\' stanco, il Vento del Nord si riposò in alto nel cielo.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Eppure soffiare mi viene benissimo'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Dal cielo si vedono tante cose là sotto.\nDove va il Vento del Nord?', choices:[
    {t:'Dalle navi nel porto', go:'kkh1'},
    {t:'Dai fiori nei prati', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'Nel porto c\'era una nave che non riusciva a muoversi.\nNon c\'era vento e le vele pendevano molli.\nIl Vento del Nord soffiò piano dentro le vele.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'Le vele si gonfiarono e la nave uscì verso il mare.\nI marinai salutarono con la mano verso il cielo.\nE vissero felici e contenti.'},
  kkt1:{art:'kk_nohara', text:'I fiori dei prati avevano fatto i semi.\nIl Vento del Nord prese i semi e li portò lontano.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'La primavera dopo, su una collina lontana, fiorirono gli stessi fiori.\nErano i semi portati dal Vento del Nord.\nE vissero felici e contenti.'},

  /* ================= La storia del Sole ================= */

  kh1:{art:'kz_sora', text:'Questa è la storia del Sole.\nIl Sole sorge a est la mattina e tramonta a ovest la sera.\nSplendere è il lavoro del Sole.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'Stamattina, che cosa illumina per primo il Sole?', choices:[
    {t:'I campi', go:'kh2r', set:{khlife:'hatake'}},
    {t:'I tetti del villaggio', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'Il Sole illuminò i tetti del villaggio.\nUn gatto sul tetto si stiracchiò.'
    : 'Il Sole illuminò i campi.\nLa rugiada brillò e i germogli crebbero.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'Il giorno della gara il Sole splendette più forte del solito.\nIl viaggiatore si tuffò nel fiume, ma la terra dei campi si seccò e si crepò.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Forse ho scaldato troppo'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'Che cosa fa il Sole?', choices:[
    {t:'Chiedere un po\' d\'ombra alla nuvola', go:'khk1'},
    {t:'Continuare a splendere fino al tramonto', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'Il Sole lo chiese a una nuvola che passava di lì.\n"Puoi fare un po\' d\'ombra sopra i campi?"\nLa nuvola si fermò sopra i campi.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'All\'ombra, i campi tirarono il fiato.\nAnche il Sole non può fare tutto.\nIl Sole non dimenticò il giorno in cui chiese alla nuvola.\nE vissero felici e contenti.'},
  khy1:{art:'kh_yuuhi', text:'Il Sole continuò a splendere finché non tramontò dietro le montagne a ovest.\nVide la schiena del viaggiatore superare una collina lontana.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Se il viaggiatore ha messo o tolto il mantello, il Sole non lo vede più.\nDomani il Sole sorgerà di nuovo.\nFine.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_IT);

  T.ZK_EN.push(
    {section:'Il Vento del Nord e il Sole', note:'Nell\'antico testo greco questa storia finisce con il viaggiatore che fa il bagno in un fiume. Chi dei due abbia vinto, il libro non lo dice. La frase "in molti casi convincere funziona meglio della forza" è stata aggiunta più tardi. Non c\'è un solo modo di leggerla.'},
    {id:'kz_seishi', n:'Un bagno nel fiume',        h:'La storia tramandata, già dalla prima volta'},
    {id:'kz_kokage', n:'Una sosta all\'ombra',       h:'Quando, nel turno del Sole, il viaggiatore si mette all\'ombra...'},
    {id:'kz_futari', n:'Giornata da bucato',        h:'Quando i due smettono di fare a gara e provano insieme...'},
    {id:'kz_kumo',   n:'Quando arrivarono le nuvole', h:'Quando il Vento del Nord va a chiamare le nuvole...'},
    {id:'kk_ho',     n:'Gonfiare le vele',          h:'Nella storia del Vento del Nord, quando si va al porto...'},
    {id:'kk_tane',   n:'Portare i semi',            h:'Nella storia del Vento del Nord, quando si va nei prati...'},
    {id:'kh_kumo',   n:'Chiedere alla nuvola',      h:'Nella storia del Sole, quando si chiede alla nuvola...'},
    {id:'kh_yuuhi',  n:'Fino al tramonto',          h:'Nella storia del Sole, quando si splende fino al tramonto...'}
  );

})();
