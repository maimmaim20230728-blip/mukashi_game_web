"use strict";
/* Urashima Taro - Italian scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var URA_IT = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Questa è la storia di un giovane pescatore che viveva in un villaggio in riva al mare.\nSi chiamava Urashima Taro.\nViveva con il suo vecchio padre e la sua vecchia madre, tutti e tre insieme.', next:'u2'},

  u2:{art:'ura_hama', text:'Anche oggi le onde hanno un suono bello e calmo.\nChe cosa facciamo prima di uscire a pescare?', choices:[
    {t:'Sistemare le reti da pesca', go:'u2r', set:{ulife:'ami'}},
    {t:'Restare a guardare il mare', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'Guardando le onde che luccicavano, il suo cuore si faceva calmo e silenzioso.\nIl mare era il migliore amico di Taro.'
    : 'La rete riparata con cura era ben tesa.\nAvere cura dei propri attrezzi, questo era il modo di fare di Taro.', next:'u3'},

  u3:{art:'ura_ijime', text:'A un tratto vide sulla spiaggia dei bambini che facevano chiasso intorno a una grande tartaruga.\nLa tartaruga non sapeva più che fare e teneva la testa ritirata nel guscio.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Non maltrattate la tartaruga!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'Quando i bambini se ne furono andati, Taro riportò dolcemente la tartaruga in mare.\n"Non farti prendere un\'altra volta."\nLa tartaruga si voltò indietro molte volte e sparì oltre le onde.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Qualche giorno dopo.\nSulla riva arrivò quella stessa tartaruga.\n"Taro, grazie per l\'altro giorno.\nPer ringraziarti, ti accompagno al Palazzo del Drago."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Sul dorso della tartaruga, e via giù nel mare.\nAllora, come facciamo il viaggio?', choices:[
    {t:'Tenersi ben stretto al guscio', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Guardarsi intorno e godersi il panorama', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Al Palazzo del Drago!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Banchi di pesci luccicavano, colonne di luce ondeggiavano nel blu.\nTaro non aveva mai visto un panorama simile e non riusciva a staccare gli occhi.'
    : (f.uride==='tsukamaru'
      ? 'Si tenne stretto al guscio, e il dorso della tartaruga era caldo,\ne stranamente non aveva nessuna paura.'
      : 'Nella luce azzurra la tartaruga scendeva sempre più in profondità.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'In fondo al mare apparve un castello davvero magnifico.\nEra il Palazzo del Drago.\nCosì bello che nessun quadro potrebbe dipingerlo.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Benvenuto, caro Taro. Sei tu la persona gentile che ha salvato la nostra tartaruga."\nLa principessa Otohime lo accolse con un sorriso cordiale.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'La danza dell\'orata e della passera!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Davanti a una lunga tavola piena di leccornie, orate e passere danzavano allegramente.\nTaro sgranò gli occhi e batté le mani.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'Nel castello c\'era la "Sala delle quattro stagioni".\nDalle sue quattro finestre si vedevano insieme primavera, estate, autunno e inverno.';
    if(f.first) return t;
    return t + '\nQuale finestra ti piace di più?';
  }, choices:[
    {t:'La finestra della primavera, con i fiori di ciliegio che cadono', go:'u10r', set:{umado:'haru'}},
    {t:'La finestra dell\'inverno, con la neve che cade', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'La neve vista dal fondo del mare cadeva silenziosa, e si poteva stare a guardarla per sempre.\n"Che meraviglia. Qui c\'è proprio tutto."'
    : 'Oltre la finestra i petali di ciliegio scendevano danzando piano.\n"Che meraviglia. Qui c\'è proprio tutto."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'I giorni felici passarono come un sogno...\ne quando se ne accorse, erano trascorsi tre anni.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Una sera Taro pensò all\'improvviso al padre e alla madre rimasti al villaggio.\nStaranno bene? Si sentiranno soli?';
    if(f.first) return t + '\n"Principessa Otohime. Adesso vorrei tornare a casa."';
    return t + '\nChe cosa deve fare?';
  }, choices:[
    {t:'Dire "vorrei tornare a casa"', go:'u13'},
    {t:'Restare ancora un po\' qui', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'La principessa Otohime annuì, un poco triste,\ne gli porse una bella scatola di lacca nera lucente.\n"Questo si chiama tamatebako, uno scrigno dei tesori."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Non devi aprirlo mai'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'Sul dorso della tartaruga tornò attraverso il mare.\nQuando si voltò, le luci del Palazzo del Drago si facevano lontane e piccole.', next:'u15'},

  u15:{art:'ura_hama700', text:'Arrivato sulla spiaggia, qualcosa era diverso.\nLa sua casa non c\'era più. Nemmeno il pino che conosceva bene.\nPer strada incontrava soltanto volti sconosciuti.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Nei tre anni passati al Palazzo del Drago,\nsulla terra erano trascorsi settecento anni.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'Suo padre e sua madre appartenevano ormai a un tempo lontanissimo.\nTaro era tutto solo.';
    if(f.first) return t + '\nNella sua solitudine posò la mano sul coperchio del tamatebako.';
    return t + '\nChe cosa deve fare?';
  }, choices:[
    {t:'Aprire il tamatebako', go:'uc_kemuri'},
    {t:'Lasciarlo chiuso e aspettare sulla spiaggia', go:'ua1'},
    {t:'Restituirlo al mare', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Fumo bianco...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'Quando il fumo si dissolse, Taro era diventato un vecchio dai capelli bianchi.\nIl tempo che si era fermato al Palazzo del Drago era tornato tutto insieme.';
    if(f.first) return t;
    return t + '\nChe cosa deve fare?';
  }, choices:[
    {t:'Restare fermo a guardare il mare', go:'e_u_seishi'},
    {t:'Incamminarsi verso il Palazzo del Drago', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Aperto, ed ecco il rimpianto: il tamatebako.\nEppure nel petto di Taro restavano quei giorni belli come nessun quadro,\nrimasti lì come un tesoro.\nSoltanto il suono delle onde risuonava piano.\nFine.'},

  /* ---- La gru (il vero finale antico dell'Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'Verso la riva, un passo, poi un altro.\nCamminava come attirato dal mare dove sorgeva il Palazzo del Drago,\ne il corpo di Taro si fece all\'improvviso leggero leggero.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'È diventato una gru!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Diventato una gru bianca, Taro volò sul mare all\'alba.\nEd ecco che tra le onde spuntò la testa di una tartaruga verde.\nEra la principessa Otohime, che aveva preso la forma di una tartaruga.\nLa gru e la tartaruga sono segni di lunga vita e di felicità.\nE i due danzarono per sempre sopra il mare che luccicava.\nE vissero felici e contenti.', ending:'u_tsuru'},

  /* ---- Non aprirlo (la promessa del Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro non aprì lo scrigno.\n"Ho promesso che non lo avrei aperto."\nDa quel giorno, mattina e sera, visse guardando il mare dalla spiaggia.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Una mattina, qualche giorno dopo, il mare brillò d\'oro\ne una sola barca arrivò scivolando sull\'acqua.\n"Caro Taro. Hai mantenuto la promessa."\nEra la voce della principessa Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Credevo che ci saremmo rivisti, se lo scrigno fosse rimasto chiuso."\nTaro salì sulla barca e partì per un viaggio senza addii.\nIl tamatebako era il segno di una promessa che univa i due.\nE vissero felici e contenti.'},

  /* ---- Restituirlo al mare ---- */
  uu1:{art:'ura_hama', text:'Taro prese in prestito una piccola barca e uscì al largo.\n"Le cose preziose vanno rese a un luogo prezioso."\nPoi posò dolcemente il tamatebako sulle onde.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Allora da sotto le onde spuntò quella stessa tartaruga\ne prese lo scrigno sul dorso.\n"Taro. Forse questa è la risposta migliore di tutte."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'I ricordi restano nel petto, anche senza aprire lo scrigno.\nTaro decise di vivere di nuovo come pescatore in un nuovo villaggio.\nE il mare luccica anche oggi.\nE vissero felici e contenti.'},

  /* ---- Restare ---- */
  un1:{art:'ura_otohime', text:'"Lasciami restare ancora un poco. Ma..."\nCome se avesse visto in fondo al suo cuore, la principessa Otohime annuì in silenzio\ne condusse Taro davanti allo specchio d\'acqua.', next:'un2'},
  un2:{art:'hime_ryugu', text:'Nello specchio d\'acqua appariva la cara casa del villaggio.\nSuo padre e sua madre ridevano, sani e in forze.\n"Da qui li veglieremo di tanto in tanto.\nE quando vorrai rivederli, la tartaruga ti porterà da loro."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Rassicurato, Taro decise di continuare a vivere nel Palazzo del Drago.\nAnche lontani, finché ci si pensa, una famiglia resta una famiglia.\nI giorni al Palazzo del Drago sono sereni anche oggi.\nE vissero felici e contenti.'},

  /* ================= La storia della principessa Otohime ================= */

  h1:{art:'hime_ryugu', text:'Questa è la storia della principessa Otohime del Palazzo del Drago.\nUn castello bellissimo, cibi squisiti, canti e danze.\nAveva tutto, eppure Otohime si annoiava un poco.', next:'h2'},
  h2:{art:'hime_ryugu', text:'Che cosa facciamo oggi?', choices:[
    {t:'Passeggiare nel giardino di coralli', go:'h2r', set:{hlife:'sango'}},
    {t:'Andare ad ascoltare il canto delle balene', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'Da lontano nel mare arrivava il canto profondo delle balene.\nUn canto grande, dolce e un poco solitario.'
    : 'Coralli rossi e rosa ondeggiavano in tutto il giardino.\nErano belli, ma peccato: non c\'era nessuno a cui mostrarli.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Un giorno la tartaruga tornò di gran fretta.\nAveva il guscio lucido lucido e gli occhi che brillavano.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Principessa, dovete sentire questo!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Sulla spiaggia mi avevano presa, e qualcuno mi ha salvata!"\nTaro, invitato al castello, era una persona che rideva spesso.\nNel Palazzo del Drago si sentirono risate che prima non c\'erano mai state,\ne le giornate noiose parvero riempirsi di colore.', next:'h5'},
  h5:{art:'ura_otohime', text:'Ma una sera del terzo anno.\n"Adesso vorrei tornare a casa."\nIl petto di Otohime si strinse.\nAvrebbe voluto trattenerlo. Ma un cuore che pensa alla famiglia non si può fermare.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Vorrei trattenerlo.\nMa...'}, then:'h6'},
  h6:{art:'ura_tama', text:'La principessa Otohime preparò una scatola di lacca nera lucente.\nChe cosa racchiudere in questa scatola prima di donarla?', choices:[
    {t:'Racchiudere i giorni felici di Taro', go:'e_h_himitsu'},
    {t:'Racchiudere la magia del "ci rivedremo"', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Tre anni al Palazzo del Drago sono settecento anni sulla terra.\nCosì com\'era, Taro sarebbe invecchiato tutto in un momento.\nPer questo racchiuse dolcemente nella scatola il tempo trascorso.\n"Finché resta chiusa, Taro resterà sempre lo stesso Taro.\nNelle notti solitarie, tieni questa scatola tra le braccia e dormi."\nQuesto era il segreto del tamatebako, che nessuno conosceva.\nE vissero felici e contenti.'},
  hm1:{art:'hime_ryugu', text:'"Se non aprirai la scatola, ci rivedremo di sicuro."\nCon questo desiderio dentro, Otohime gli consegnò la scatola.\nE da quel giorno guardò ogni giorno nello specchio d\'acqua.', next:'hm2'},
  hm2:{art:'ura_fune', text:'Nello specchio d\'acqua, anche oggi Taro non aveva aperto la scatola\ne guardava fisso il mare.\n"...Ora basta così. Andiamo a prenderlo."\nOtohime fece preparare la sua barca più veloce.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Sul mare dorato del mattino la barca scivolava avanti.\nDritta verso la persona che stava aspettando.\nUna promessa diventa magia soltanto quando c\'è chi la mantiene\ne chi ci crede.\nE vissero felici e contenti.'},

  /* ================= La storia della tartaruga ================= */

  v1:{art:'kame_hama', text:'Questa è la storia di una tartaruga marina.\nLe piaceva moltissimo stare al sole, e anche quel giorno sonnecchiava sulla spiaggia.\nQuando si svegliò, era circondata dai bambini.', next:'v2'},
  v2:{art:'kame_hama', text:'"Non maltrattate la tartaruga!"\nUn pescatore dalla voce gentile venne in suo aiuto\ne la riportò dolcemente in mare.\nCullata dalle onde, la tartaruga prese una decisione ferma.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'Ricambierò di sicuro questa gentilezza!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'Tornata al Palazzo del Drago, la tartaruga cominciò subito i preparativi.\nChe cosa fare per prima cosa?', choices:[
    {t:'Lucidare il guscio finché non splende', go:'v3r', set:{vlife:'migaku'}},
    {t:'Riferire subito alla principessa', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'Su quel dorso sarebbe salito un ospite, quindi doveva splendere.\nLucidato per bene, il guscio brillava come uno specchio.'
    : '"Che persona meravigliosa", disse la principessa con un sorriso.\n"Invitiamolo qui, per ringraziarlo come si deve."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Con il permesso della principessa, la tartaruga nuotò fino alla spiaggia.\n"Taro, per ringraziarti ti accompagno al Palazzo del Drago."\nEra la prima volta in vita sua che portava un ospite sul dorso.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Sali sul mio dorso!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'E ora, ecco la strada fino al Palazzo del Drago.\nQuale strada prendiamo?', choices:[
    {t:'Prendere la scorciatoia segreta', go:'v5r', set:{vmichi:'chika'}},
    {t:'Prendere la strada più bella', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Fiuu, passarono proprio accanto a una balena enorme.\n"Uau!", esclamò Taro sul suo dorso.\nDi quella scorciatoia andava un po\' fiera.'
    : 'Attraversarono lentamente la foresta di coralli.\n"Che bellezza", sospirò Taro sul suo dorso.\nDi quel panorama andava un po\' fiera.', next:'v6'},
  v6:{art:'ura_ryugu', text:'L\'ospite è arrivato sano e salvo, il grande compito è compiuto.\nE adesso, che cosa facciamo?', choices:[
    {t:'Restare al Palazzo del Drago e prendersi cura di lui', go:'e_v_senaka'},
    {t:'Tornare alla spiaggia e aspettare il suo ritorno', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'Per tre anni la tartaruga fu la cavalcatura personale di Taro.\nIl suo dorso era sempre il posto migliore del mare.\n"Sul tuo dorso mi sento più tranquillo che in qualsiasi altro posto."\nOgni volta che se lo sentiva dire, il guscio si gonfiava un pochino d\'orgoglio.\nE vissero felici e contenti.'},
  vm1:{art:'kame_hama', text:'La tartaruga tornò alla spiaggia e decise di aspettare ogni giorno sulla riva.\nLe tartarughe vivono moltissimo.\nE per quanto tempo passi, non dimenticano una promessa importante.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'Il tempo scorse, settecento anni.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Una mattina, una figura familiare stava in piedi sulla spiaggia.\n"Bentornato, Taro."\nSu quella spiaggia tutta cambiata, una soltanto,\nla tartaruga, si ricordava ancora di Taro.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, URA_IT);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'Lo scrigno del rimpianto',      h:'La storia originale del primissimo giro'},
    {id:'u_tsuru',    n:'Taro diventa una gru',          h:'Se dopo aver aperto lo scrigno cammini verso il mare...'},
    {id:'u_akenai',   n:'Il tamatebako mai aperto',      h:'Se mantieni la promessa e aspetti sulla spiaggia...'},
    {id:'u_umi',      n:'Il tesoro reso al mare',        h:'Se senza aprirlo lo restituisci al mare...'},
    {id:'u_nokoru',   n:'I giorni al Palazzo del Drago', h:'Se non torni a casa e resti ancora un po\'...'},
    {id:'uh_himitsu', n:'Il segreto del tamatebako',     h:'Se nella storia di Otohime racchiudi i giorni felici...'},
    {id:'uh_mukae',   n:'La barca che viene a prenderlo', h:'Se nella storia di Otohime racchiudi la magia...'},
    {id:'uv_senaka',  n:'L\'ospite sul dorso',           h:'Se nella storia della tartaruga resti al palazzo...'},
    {id:'uv_matsu',   n:'La promessa sulla spiaggia',    h:'Se nella storia della tartaruga aspetti sulla spiaggia...'}
  );

})();
