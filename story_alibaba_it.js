"use strict";
/* Ali Baba e i 40 ladroni - Italian scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Stile: italiano semplice da libro illustrato, in linea con story_it.js. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var ALIBABA_IT = {

  /* ================= Ali Baba e i 40 ladroni ================= */

  ab1:{art:'ab_mori', text:'Questa è la storia di Ali Baba, che viveva in una città della Persia.\nAli Baba era un povero taglialegna.\nOgni giorno portava i suoi 2 asini nel bosco a raccogliere legna.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Anche oggi Ali Baba raccoglieva legna nel bosco.';
    if(f.first) return t;
    return t + '\nQuanta legna raccoglie?';
  }, choices:[
    {t:'2 fascine, e tornare presto a casa', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 fascine, e tornare a casa con calma', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Caricò 4 fascine di legna sul dorso degli asini.\nOggi voleva tornare a casa con calma.'
    : 'Caricò 2 fascine di legna sul dorso degli asini.\nOggi voleva tornare a casa presto.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'In quel momento sentì il rumore degli zoccoli dei cavalli.\nAli Baba si nascose su un albero.\n40 uomini si radunarono davanti a una grande roccia.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 uomini...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'L\'uomo che stava davanti a tutti parlò alla roccia.\n"Apriti, Sesamo!"\nE la roccia si aprì con un forte rumore.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Apriti, Sesamo!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'Gli uomini entrarono.\nDopo un po\' uscirono di nuovo. "Chiuditi, Sesamo!"\nLa roccia si chiuse e gli uomini se ne andarono.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba scese dall\'albero e si mise davanti alla roccia.\n"Apriti, Sesamo!"\nLa roccia si aprì, e dentro era tutto pieno di monete d\'oro e di tesori.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'La luce del tesoro'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba riempì dei sacchi di monete d\'oro e li caricò sugli asini.\nSolo quanto poteva portare a casa.\n"Chiuditi, Sesamo!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'Tornato a casa, Ali Baba raccontò tutto a sua moglie.\nI due provarono a contare le monete, ma erano troppe per poterle contare.\n"Andiamo a farci prestare una misura per il grano da mio fratello."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Suo fratello Cassim era un ricco mercante.\nLa moglie di Cassim spalmò di nascosto un po\' di grasso sul fondo della misura.\nQuando la misura tornò indietro, sul fondo era attaccata 1 moneta d\'oro.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim fece delle domande ad Ali Baba.\nAli Baba gli raccontò tutto: della roccia e delle parole magiche.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'La mattina dopo Cassim portò 10 asini alla roccia.\n"Apriti, Sesamo!"\nLa roccia si aprì.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Apriti, Sesamo!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim riempì i suoi sacchi d\'oro.\nMa quando volle uscire, si era dimenticato le parole magiche.\n"Apriti, Orzo!" "Apriti, Fagiolo!"\nLa roccia non si aprì.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'Quella notte Cassim non tornò a casa.\nLa moglie di Cassim venne in lacrime a casa di Ali Baba.';
    if(f.first) return t;
    return t + '\nChe cosa fa Ali Baba?';
  }, choices:[
    {t:'Aspettare fino al mattino', go:'ab14'},
    {t:'Andare alla roccia quella notte stessa', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'La mattina Ali Baba andò alla roccia.\n"Apriti, Sesamo!"\nDentro era tutto silenzioso. I ladroni erano tornati prima di lui.\nCassim non si muoveva più.\nAli Baba mise suo fratello su un asino e lo portò a casa in silenzio.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'Nella casa di Ali Baba c\'era una serva di nome Morgiana.\nEra una persona a cui non sfuggiva nulla.\nPer preparare il funerale, Morgiana chiamò un vecchio ciabattino della città.\nPerché non potesse ricordare la strada, gli bendò gli occhi e lo guidò fino a casa.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'La benda, prego'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'Quando i ladroni tornarono alla roccia, si accorsero che Cassim non c\'era più.\n"Lo sa anche qualcun altro."\nIl capo mandò uno dei suoi uomini in città.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'Il ladrone trovò il vecchio ciabattino.\nCon gli occhi bendati, il vecchio ritrovò la strada con i piedi.\nE il ladrone fece un segno bianco sulla porta della casa di Ali Baba.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana notò il segno.\nE fece lo stesso segno sulla porta accanto, e su quella dopo ancora.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Segni dappertutto!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'Quando i ladroni arrivarono, non capirono quale fosse la casa.\nIl capo decise di andare lui stesso.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'Il capo si travestì da mercante d\'olio.\n19 asini, con 38 grandi giare.\nSolo in una c\'era olio; in ognuna delle altre era nascosto un ladrone.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Sono un mercante d\'olio di passaggio. Posso fermarmi per una notte?"\nAli Baba lo accolse con gentilezza.\nLe giare furono allineate nel cortile.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'...Quando verrà la notte'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'Di notte a Morgiana finì l\'olio della lampada, e andò a prenderne dalle giare nel cortile.\nAllora da dentro una giara venne una voce.\n"È già ora?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'...Dentro la giara c\'è qualcuno'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana rispose con voce bassa.\n"Non ancora."\nPoi controllò tutte e 37 le giare.';
    if(f.first) return t;
    return t + '\nChe cosa fa Morgiana?';
  }, choices:[
    {t:'Far bollire l\'olio', go:'ab24'},
    {t:'Prendere delle corde e chiamare le guardie', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana fece bollire l\'olio in una grande pentola.\nPoi versò l\'olio bollente in una giara dopo l\'altra.\nDentro le giare si fece silenzio.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'Nel cuore della notte il capo uscì nel cortile e batté sulle giare.\nNon ci fu risposta.\nIl capo fuggì da solo.', next:'ab26'},

  ab26:{art:'ab_ie', text:'La mattina Morgiana raccontò tutto ad Ali Baba.\nAli Baba le disse:\n"Da oggi sei libera."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Qualche giorno dopo il capo tornò, travestito da mercante.\nAveva fatto amicizia con il figlio di Ali Baba ed era stato invitato in casa.\nMorgiana si ricordava di quel viso.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Questo viso me lo ricordo'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Dopo il pasto Morgiana danzò per loro.\nNella cintura era infilato un pugnale.';
    if(f.first) return t;
    return t + '\nChe cosa fa Morgiana?';
  }, choices:[
    {t:'Danzare fino alla fine della danza', go:'ab29'},
    {t:'Fermare la danza e parlare dei segni', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'Alla fine della danza Morgiana si fermò davanti al mercante.\nIl capo cadde a terra.\nAd Ali Baba, che era sbalordito, Morgiana disse con calma:\n"Quest\'uomo era il capo."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba disse a Morgiana:\n"Ormai sei libera. Che cosa farai da adesso, puoi deciderlo tu."\nMorgiana ci pensò un po\' e rispose:\n"Resto qui. Sarò una persona di questa casa."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Da allora Morgiana e il figlio di Ali Baba si unirono, e lei divenne una persona di questa casa.\nIl tesoro della roccia lo usarono con parsimonia.\nE vissero felici e contenti.'},

  /* ---- Andare a prendere il fratello ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Quella notte stessa Ali Baba portò un asino fino alla roccia.\n"Apriti, Sesamo!"\nIn fondo, dentro, Cassim stava seduto e tremava.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"Avevo dimenticato le parole magiche... Sesamo, era Sesamo."\nAli Baba mise suo fratello sull\'asino e lo riportò a casa.\nDi monete d\'oro ne prese solo un sacco.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'Il fratello era sano e salvo.\nLe parole magiche rimasero un segreto fra loro due.\nI ladroni si accorsero che mancavano delle monete d\'oro, ma non capirono mai chi fosse stato.\nE vissero felici e contenti.'},

  /* ---- Corde e guardie ---- */
  abr1:{art:'ab_abura', text:'Morgiana andò a prendere delle corde.\nLegò da fuori un coperchio dopo l\'altro.\nPoi corse a chiamare le guardie della città.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'Le guardie arrivarono e aprirono le 37 giare.\nI ladroni furono portati via uno alla volta, legati con le corde.\nIl capo approfittò di quel momento e fuggì.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'Il capo non si fece più vedere in città.\nAli Baba disse a Morgiana: "Ormai sei libera."\nIl tesoro della roccia lo usarono con parsimonia.\nE vissero felici e contenti.'},

  /* ---- Il capo è fuggito ---- */
  abg1:{art:'ab_odori', text:'Morgiana fermò la danza e si mise davanti al mercante.\n"Il segno che avete fatto voi, l\'ho moltiplicato io."\nAl mercante cambiò il colore del viso.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Senza dire una parola il capo si alzò e fuggì nella città notturna.\nNella città della Persia non tornò mai più.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba disse a Morgiana:\n"Ormai sei libera. Che cosa farai da adesso, puoi deciderlo tu."\n"Resto qui", rispose Morgiana.\nE vissero felici e contenti.'},

  /* ================= La storia di Morgiana ================= */

  am1:{art:'am_daidokoro', text:'Questa è la storia di una serva di nome Morgiana.\nLavorava nella casa di Ali Baba.\nDi lei si diceva che non le sfuggiva nulla.', next:'am2'},
  am2:{art:'am_daidokoro', text:'Mattino. Da che cosa comincia?', choices:[
    {t:'Cuocere il pane', go:'am2r', set:{amlife:'pan'}},
    {t:'Attingere l\'acqua', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana attinse l\'acqua dal pozzo e riempì la giara fino all\'orlo.\nDella casa sapeva tutto.'
    : 'Morgiana accese il forno e cosse il pane.\nDella casa sapeva tutto.', next:'am3'},
  am3:{art:'ab_shirushi', text:'Una mattina trovò un segno bianco sulla porta.\n(Qualcuno vuole ricordare questa casa.)\nMorgiana fece lo stesso segno anche sulla porta accanto.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'I segni si possono moltiplicare'}, then:'am4'},
  am4:{art:'ab_abura', text:'La notte del mercante d\'olio. Da dentro una giara venne una voce.\nChe cosa fa Morgiana?', choices:[
    {t:'Far bollire l\'olio', go:'am4r', set:{amhow:'abura'}},
    {t:'Legare le giare e chiamare le guardie', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana legò i coperchi delle giare e chiamò le guardie.\nI ladroni furono portati via.'
    : 'Morgiana fece bollire l\'olio e lo versò nelle giare.\nDentro le giare si fece silenzio.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'La mattina in cui tutto era finito, Ali Baba disse:\n"Ormai sei libera. Quello che farai, puoi deciderlo tu."\nChe cosa fa Morgiana?', choices:[
    {t:'Restare in questa casa', go:'ami1'},
    {t:'Partire per un viaggio', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana uscì una volta dal portone.\nCamminò per la città, guardò il mercato, guardò il fiume.\nPoi, con i suoi piedi, tornò alla casa.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Questa è la casa che ho scelto io."\nNon come serva, ma come una persona di questa casa.\nE vissero felici e contenti.'},
  amt1:{art:'am_michi', text:'Morgiana prese un sacco e uscì dal portone.\nAli Baba non la trattenne.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Dove sia andata Morgiana, in questa storia non è scritto.\nLa meta la conosce soltanto Morgiana.\nFine.'},

  /* ================= La storia del capo dei ladroni ================= */

  at1:{art:'at_dokutsu_kara', text:'Questa è la storia del capo dei ladroni.\nIn 40 mettevano da parte il loro tesoro dentro la roccia.\nUn giorno si accorse che una parte non c\'era più.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'Che cosa va a controllare il capo?', choices:[
    {t:'Le impronte davanti alla roccia', go:'at2r', set:{atlife:'ashi'}},
    {t:'Le tracce di un asino', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Davanti alla roccia erano rimaste le tracce di un asino.\nQualcuno della città.'
    : 'Davanti alla roccia erano rimaste delle impronte piccole.\nNon erano di uno dei suoi uomini.', next:'at3'},
  at3:{art:'ab_iwa', text:'(Non era il tesoro portato via a fargli paura, ma il fatto che qualcuno conoscesse il segreto della roccia.)\nIl capo mandò un uomo in città.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'Un segreto solo basta'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'Il piano delle giare era fallito.\nDei suoi uomini non era rimasto nessuno.\nChe cosa fa il capo?', choices:[
    {t:'Lasciare il tesoro e andare lontano', go:'ato1'},
    {t:'Tornare ancora una volta a quella casa', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'Il capo si mise davanti alla roccia.\n"Chiuditi, Sesamo."\nPoi si incamminò senza voltarsi.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'Il tesoro rimase dentro la roccia.\nDove sia andato il capo, nessuno lo sa.\nFine.'},
  ath1:{art:'ab_odori', text:'Travestito da mercante, il capo tornò a quella casa.\nAlla fine della danza la serva gli si mise davanti.\n(Questa persona lo sapeva fin dall\'inizio.)\nIl capo non fece nulla e uscì dalla casa.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'Il segreto non era più un segreto.\nIl capo lo accettò e lasciò la città.\nQuello che gli faceva paura non era perdere il tesoro, ma il fatto che qualcuno lo sapesse.\nFine.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_IT);

  T.ZK_EN.push(
    {section:'Ali Baba e i 40 ladroni', note:'Nei vecchi libri scritti in lingua araba questa storia non c\'è. Circa 300 anni fa un francese la mise per iscritto dopo averla sentita da un narratore siriano. È una storia diversa da "Aladino". Nella storia originale Morgiana è una schiava, e alla fine diventa libera.'},
    {id:'ab_seishi',  n:'Apriti, Sesamo',             h:'La storia tramandata, alla primissima volta'},
    {id:'ab_ani',     n:'Andare a prendere il fratello', h:'La notte in cui Cassim non torna, andare alla roccia...'},
    {id:'ab_rouya',   n:'Corde e guardie',            h:'Nella notte delle giare, non far bollire l\'olio...'},
    {id:'ab_nigeta',  n:'Il capo è fuggito',          h:'Fermare la danza e parlare dei segni...'},
    {id:'am_ie',      n:'La casa che ho scelto',      h:'Nella storia di Morgiana, restare in casa...'},
    {id:'am_tabi',    n:'Oltre il portone',           h:'Nella storia di Morgiana, partire per un viaggio...'},
    {id:'at_oite',    n:'Lasciare il tesoro',         h:'Nella storia del capo, andare lontano...'},
    {id:'at_himitsu', n:'Un solo segreto',            h:'Nella storia del capo, tornare ancora una volta a quella casa...'}
  );

})();
