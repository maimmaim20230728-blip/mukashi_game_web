"use strict";
/* I musicanti di Brema - Italian scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   Le formule fisse (musicante della citta / qualunque cosa e meglio della morte /
   il grido del gallo / la bocca ancora calda dell'ultimo narratore) sono rese in proprio,
   non riprese alla lettera da traduzioni esistenti. Nessun nome proprio per gli animali. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var BREMEN_IT = {

  /* ================= I musicanti di Brema ================= */

  br1:{art:'br_koya', text:'Questa è la storia di un asino che lavorò per tanti anni presso un padrone.\nAl mulino, l\'asino portava sacchi di farina, un sacco dopo l\'altro.\nMa diventò vecchio, e le sue forze cominciarono a mancare.', next:'br2'},

  br2:{art:'br_koya', text:'Un giorno l\'asino capì una cosa.\n(Il padrone sta pensando di non darmi più da mangiare.)\nCosì l\'asino lasciò il mulino.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'A Brema!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Andrò a Brema e diventerò musicante della città."\nL\'asino decise così e si mise in cammino sulla strada maestra.';
    if(f.first) return t;
    return t + '\nChe strada prende?';
  }, choices:[
    {t:'La strada lungo il fiume', go:'br3r', set:{brmichi:'kawa'}},
    {t:'La strada tra i campi', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'Sulla strada tra i campi di grano il vento passava libero.\nDopo tanto tempo, l\'asino camminava senza portare niente.'
    : 'Sulla strada lungo il fiume il rumore dell\'acqua era piacevole.\nDopo tanto tempo, l\'asino camminava senza portare niente.', next:'br4'},

  br4:{art:'br_inu', text:'Sul bordo della strada c\'era un cane da caccia sdraiato.\nAnsimava, ansimava, con il fiato corto.\n"Che cosa ti succede, perché sei così senza fiato?"', next:'br5'},

  br5:{art:'br_inu', text:'"Sono diventato vecchio e non riesco più ad andare a caccia.\nAllora il mio padrone ha voluto uccidermi.\nSono scappato, ma adesso come faccio a vivere?"\n"Io vado a Brema e divento musicante. Vieni con me.\nIo suono il liuto, e tu batti il tamburo."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'Il cane si unisce alla banda!!'}, then:'br6'},

  br6:{art:'br_neko', text:'Poco più avanti, un gatto era seduto su un muro.\nAveva una faccia scura come dopo tre giorni di pioggia.', next:'br7'},

  br7:{art:'br_neko', text:'"Sono diventato vecchio, i miei denti si sono consumati,\ne preferisco stare davanti al camino invece di rincorrere i topi.\nAllora la padrona ha voluto affogarmi nel fiume."\n"Allora vieni a Brema con noi.\nNella musica di notte non ti batte nessuno."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'Nella musica di notte...'}, then:'br8'},

  br8:{art:'br_ondori', text:'Sul cancello di una fattoria un gallo cantava con tutto il fiato che aveva.\n"Che voce potente."\n"Domani è domenica e arrivano gli ospiti.\nIo devo finire nella zuppa.\nPerciò canto finché ho ancora voce."', next:'br9'},

  br9:{art:'br_ondori', text:'"Qualunque cosa è meglio della morte. Tu hai una bella voce.\nFai musica con noi. Ne verrà fuori di sicuro qualcosa."\nIl gallo saltò giù dal cancello.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Chicchirichì!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'A Brema non si arrivava in un giorno solo.\nQuando venne la notte, i 4 decisero di riposare nel bosco.';
    if(f.first) return t + '\nL\'asino e il cane sotto un albero. Il gatto su un ramo. Il gallo in cima.';
    return t + '\nDove riposano?';
  }, choices:[
    {t:'Sotto l\'albero, tutti insieme', go:'br10r', set:{brmori:'shita'}},
    {t:'Su un ramo alto, di guardia', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'Il gatto e il gallo salirono su un ramo alto.\nSotto, l\'asino e il cane dormirono schiena contro schiena.'
    : 'I 4 si accucciarono insieme sotto un grande albero e dormirono.\nSolo il gallo, prima di dormire, salì fino in cima.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Dalla cima, il gallo vide una luce lontana.\n"Laggiù c\'è una casa. C\'è una luce accesa."';
    if(f.first) return t + '\n"Andiamoci. Qui non si dorme troppo bene", disse l\'asino.';
    return t + '\nChe cosa fanno?';
  }, choices:[
    {t:'Andare alla casa con la luce', go:'br12'},
    {t:'Restare lontani e passare la notte nel bosco', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'Arrivati alla casa con la luce, l\'asino guardò dentro dalla finestra.\n"Che cosa vedi?" chiese il gallo.\n"Una tavola piena di buone cose,\ne dei ladri seduti intorno che mangiano."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"Anche noi abbiamo bisogno di questo", disse il gallo.\nI 4 misero le teste insieme e si consultarono.', next:'br14'},

  br14:{art:'br_mado', text:'L\'asino appoggiò le zampe davanti sul davanzale.\nIl cane gli saltò sulla schiena,\nil gatto salì sopra il cane,\ne in cima a tutti si posò il gallo.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'Tutti insieme!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'E poi saltarono dentro dalla finestra tutti in una volta.\nIl vetro andò in frantumi!\nI ladri gridarono "Un mostro!" e scapparono nel bosco.', next:'br16'},

  br16:{art:'br_gochisou', text:'I 4 si sedettero a tavola.\nMangiarono come se dovessero saziarsi per quaranta giorni, poi spensero la luce\ne ognuno andò a dormire nel posto che preferiva.\nL\'asino nel cortile, il cane sulla soglia, il gatto vicino al camino, il gallo sulla trave del tetto.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Mezzanotte.'}, then:'br17'},

  br17:{art:'br_yoru', text:'Uno dei ladri tornò indietro per vedere come stavano le cose.\nLa casa era silenziosa. In cucina, in fondo al camino, qualcosa brillava.\n(È carbone ancora acceso.)\nPensò così e avvicinò un fiammifero. E proprio in quel momento.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'Graffio!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'Il gatto gli saltò in faccia e lo graffiò.\nIl ladro corse verso la porta di dietro. Lì c\'era il cane.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'Morso!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'Quando corse fuori nel cortile, l\'asino gli diede un calcio con le zampe di dietro.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'Calcio!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Sul tetto il gallo si svegliò e cantò a gran voce.\n"Chicchirichì!"\nAl ladro sembrò di sentire questo:\n"Portatemelo qui!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'Una strega! Un giudice!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'Il ladro tornò di corsa nel bosco e disse ai compagni:\n"In quella casa c\'è una strega terribile.\nMi ha sputato addosso e mi ha graffiato la faccia con le unghie lunghe.\nSulla soglia c\'era un uomo con un coltello e mi ha punto la gamba.\nNel cortile c\'era un mostro nero che mi ha picchiato con un bastone.\nE sul tetto c\'era un giudice che gridava: Portatemelo qui!"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'Da quel giorno i ladri non tornarono mai più.';
    if(f.first) return t;
    return t + '\nLa mattina i 4 si consultarono. Che cosa fanno?';
  }, choices:[
    {t:'Vivere in questa casa', go:'e_br_seishi'},
    {t:'Andare comunque a Brema', go:'brb1'},
    {t:'Decidere in questa casa che cosa fare la mattina', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'Ai 4 musicanti la casa piacque così tanto\nche non vollero più andarsene.\nE chi ha raccontato questa storia per ultimo ha ancora la bocca calda.\nE vissero felici e contenti.'},

  /* ---- Nella città di Brema ---- */
  brb1:{art:'br_roba', text:'"Questa è una bella casa. Ma noi siamo musicanti."\nI 4 chiusero a chiave la casa e tornarono sulla strada maestra.', next:'brb2'},
  brb2:{art:'br_bremen', text:'La città di Brema era grande e piena di vita.\nE nella piazza c\'erano già i musicanti della città.\nLe trombe e i tamburi erano lucidi.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'... Allora, qui.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'In un angolo della piazza i 4 unirono le loro voci.\nI-o, bau, miao, chicchirichì.\nI bambini arrivarono, prima uno, poi due, e poi altri ancora.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Strumenti lucidi non ne avevano.\nMa in quell\'angolo della piazza i bambini venivano ogni giorno.\nIn un angolo della città, i 4 diventarono musicanti.\nE vissero felici e contenti.'},

  /* ---- Mattino nel bosco ---- */
  brm1:{art:'br_mori', text:'"Di notte è meglio non avvicinarsi a una casa", disse l\'asino.\nI 4 passarono la notte nel bosco.', next:'brm2'},
  brm2:{art:'br_mori', text:'La mattina il gallo cantò e tutti si svegliarono.\n"Già che ci siamo, proviamo a cantare insieme."\nI-o, bau, miao, chicchirichì.', next:'brm3'},
  brm3:{art:'br_roba', text:'Proprio allora passò un carro carico di sacchi di farina.\nIl mugnaio sentì la voce dell\'asino e disse:\n"Che bella voce. Non vuoi lavorare nel mio mulino? Da mangiare te ne do in abbondanza."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Io sono un musicante.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'L\'asino rifiutò con gentilezza e continuò a camminare con i compagni.\nDove sarebbero arrivati, non si sapeva ancora.\nIl canto dei 4 risuonava lontano nel mattino del bosco.\nE vissero felici e contenti.'},

  /* ---- Ognuno il suo mattino ---- */
  bra1:{art:'br_ie_asa', text:'Mattino. Che cosa fanno in questa casa?', choices:[
    {t:'Il gallo canta l\'ora dal tetto', go:'bra1r', set:{brasa:'ondori'}},
    {t:'Il cane fa un sonnellino sulla soglia', go:'bra1r', set:{brasa:'inu'}},
    {t:'Il gatto si accuccia davanti al camino', go:'bra1r', set:{brasa:'neko'}},
    {t:'L\'asino muove le orecchie al sole', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'Il cane si distese sulla soglia.\nNon doveva più rincorrere nessuno.';
    if(f.brasa==='neko') return 'Il gatto si accucciò davanti al camino.\nI giorni in cui rincorreva i topi erano finiti.';
    if(f.brasa==='roba') return 'L\'asino stava al sole e muoveva le lunghe orecchie.\nSulla sua schiena non c\'erano più sacchi di farina.';
    return 'Il gallo salì sul tetto e cantò verso il cielo a oriente.\nNessuno gliel\'aveva chiesto.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Nessuno gliel\'aveva detto.\nOgnuno decise da sé.\nAnche oggi il gallo canta l\'ora, il cane dorme sulla soglia,\nil gatto si accuccia davanti al camino e l\'asino muove le lunghe orecchie al sole.\nE vissero felici e contenti.'},

  /* ================= La storia dei ladri ================= */

  bd1:{art:'dorobou_mori', text:'Questa è la storia di 3 ladri che abitavano in una casa nel bosco.\nAnche quella sera la tavola era piena di buone cose.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'Che cosa si mangia oggi?', choices:[
    {t:'Salsiccia e vino', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Pane, formaggio e mele', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'Riempirono tutta la tavola di pane, formaggio e mele.\nI 3 cominciarono a mangiare di ottimo umore.'
    : 'Arrostirono la salsiccia e versarono il vino.\nI 3 cominciarono a mangiare di ottimo umore.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'All\'improvviso, fuori dalla finestra, si sentì una voce mai sentita prima.\nI-o, bau, miao, chicchirichì. Tutto in una volta.\nE poi il vetro andò in frantumi!\n"Un mostro!"\nI 3 scapparono nel bosco.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'Nel folto del bosco i 3 ripresero fiato.\n"E quella casa, che ne facciamo?"', choices:[
    {t:'Tornare a dare un\'occhiata', go:'bdg1'},
    {t:'Rinunciare a quella casa', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'Nella cucina c\'era buio pesto.\nIn fondo al camino brillavano due piccole luci.\n(È carbone ancora acceso.)\nAvvicinò un fiammifero...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'Una strega!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'Graffiato in faccia, punto alla gamba, picchiato con un bastone,\ne dal tetto: "Portatemelo qui!"\nIl ladro tornò di corsa nel bosco.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"C\'è una strega, un uomo con un coltello, un mostro nero e un giudice."\nNessuno dei compagni si avvicinò mai più a quella casa.\nCome stessero davvero le cose, non lo seppe nessuno.\nE vissero felici e contenti.'},

  bdm1:{art:'dorobou_mori', text:'"Quella casa adesso è loro."\nI 3 camminarono verso l\'uscita del bosco.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'In città c\'era il mercato del mattino.\nSu un cartello c\'era scritto: "Cercasi portatori."\nI 3 si guardarono in faccia.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'Che cosa fecero i 3 per vivere da quel giorno,\nin questa storia non è scritto.\nNella casa nel bosco risuona il canto dei 4.\nFine.'},

  /* ================= La storia del gallo ================= */

  bo1:{art:'ondori_yane', text:'Questa è la storia di un gallo che cantava sul cancello di una fattoria.\nDomani è domenica. Arrivano gli ospiti e io devo finire nella zuppa.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'Che cosa fa nel suo ultimo giorno?', choices:[
    {t:'Cantare con tutto il fiato', go:'bo2r', set:{bolife:'naku'}},
    {t:'Camminare piano per il cortile', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Camminò piano per il cortile, da un capo all\'altro.\nVoleva guardarlo un\'ultima volta.'
    : 'Sul cancello cantò finché la voce non gli si fece roca.\nQualcuno si tappava le orecchie. A lui non importava.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Proprio allora passarono un asino, un cane e un gatto.\n"Qualunque cosa è meglio della morte. Tu hai una bella voce."\nIl gallo saltò giù dal cancello.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Basta la mia voce?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'Nella casa nel bosco il gallo si posò in cima a tutti.\nQuello che venne dopo, lo decise il gallo.', choices:[
    {t:'Cantare dal tetto a mezzanotte', go:'bok1'},
    {t:'Vivere in questa casa e annunciare il mattino', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'A mezzanotte si svegliò sulla trave del tetto.\nSotto, un ladro si agitava.\nIl gallo cantò con tutto il fiato che aveva.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Chicchirichì!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'Al ladro sembrò di sentire: "Portatemelo qui!"\nLa voce che doveva finire nella zuppa aveva difeso la casa.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'A che cosa serve la sua voce, lo decide lui.\nDa quel giorno il gallo cantò quando voleva e come voleva.\nE vissero felici e contenti.'},

  boa1:{art:'br_ie_asa', text:'Quando andarono ad abitare nella casa, il gallo salì sul tetto.\nNessuno gliel\'aveva chiesto.\nLa mattina, quando il cielo a oriente si faceva chiaro, il gallo cantava.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'Il cane si svegliò, il gatto si stiracchiò e l\'asino scosse le orecchie.\n"Non finirò più nella zuppa. Ogni mattina canto qui."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'Alla voce del gallo qualcuno si sveglia.\nSolo questo bastava a rendere contento il gallo.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_IT);

  T.ZK_EN.push(
    {section:'I musicanti di Brema'},
    {id:'br_seishi', n:'La casa che piacque loro', h:'La storia originale, dalla prima lettura'},
    {id:'br_bremen', n:'Nella città di Brema',    h:'La mattina, andare comunque a Brema...'},
    {id:'br_mori',   n:'Mattino nel bosco',       h:'Restare lontani dalla casa con la luce...'},
    {id:'br_asa',    n:'Ognuno il suo mattino',   h:'Decidere in casa che cosa fare la mattina...'},
    {id:'bd_gokai',  n:'La strega e il giudice',  h:'Nella storia dei ladri, tornare a dare un\'occhiata...'},
    {id:'bd_machi',  n:'Fuori dal bosco',         h:'Nella storia dei ladri, rinunciare alla casa...'},
    {id:'bo_koe',    n:'Una voce che arrivò',     h:'Nella storia del gallo, cantare a mezzanotte...'},
    {id:'bo_asa',    n:'Annunciare il mattino',   h:'Nella storia del gallo, annunciare il mattino...'}
  );

})();
