"use strict";
/* I tre porcellini - Italian scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Traduzione propria,
   nessuna traduzione italiana altrui ricalcata. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var KOBUTA_IT = {

  /* ================= I tre porcellini ================= */

  p1:{art:'buta_hajimari', text:'Questa è la storia di 3 porcellini che erano fratelli.\nIl porcellino grande, il porcellino di mezzo e il porcellino piccolo.\nErano cresciuti tutti e tre, e ognuno decise di costruirsi una casa.', next:'p2'},

  p2:{art:'buta_hajimari', text:'Il mattino della partenza. Che cosa dicono i porcellini alla mamma?', choices:[
    {t:'Un allegro "Andiamo, mamma!"', go:'p2r', set:{plife:'genki'}},
    {t:'"Ti portiamo qualcosa di buono!"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"Lo aspetto con gioia", disse la mamma con un sorriso.\nLa sua mano salutò e salutò, ancora per molto tempo.'
    : '"Buon viaggio!", disse la mamma, allegra come loro.\nAccompagnati da quella voce chiara, i passi si fecero leggeri.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'La strada si divideva in tre.';
    if(f.first) return t + '\nI 3 porcellini si salutarono con la mano e ognuno prese la sua strada.';
    return t + '\nAllora, che cosa fanno i porcellini?';
  }, choices:[
    {t:'Ognuno prende la sua strada', go:'p4'},
    {t:'Costruire una sola casa tutti e 3 insieme', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'Il porcellino grande incontrò un uomo con un grosso fascio di paglia sulle spalle.\n"Per favore, mi dia un po\' di quella paglia."\nUna casa di paglia è pronta in giornata.\nEssere pronta in fretta: questo è il suo pregio più bello.', next:'p5'},

  p5:{art:'buta_eda', text:'Il porcellino di mezzo incontrò un uomo con un braccio pieno di rami.\n"Per favore, mi dia un po\' di quei rami."\nIn una casa di rami passa il vento, fresca e piacevole.\nQuesto è il suo pregio più bello.', next:'p6'},

  p6:{art:'buta_renga', text:'Il porcellino piccolo incontrò un uomo che tirava un carro di mattoni.\n"Per favore, mi dia un po\' di quei mattoni."\nUna casa di mattoni richiede tempo, ma diventa molto solida.\nQuesto è il suo pregio più bello.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Tan, tan! Tan, tan!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Le tre case erano finite.\nLa casa di paglia, la casa di rami e la casa di mattoni.\nDi ognuna si poteva andare fieri.';
    if(f.first) return t;
    return t + '\nChe cosa fanno per prima cosa nelle case nuove?';
  }, choices:[
    {t:'Mostrarsi le case a vicenda', go:'p7r', set:{plife2:'miseai'}},
    {t:'Fare una pausa e bere un tè', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'Il tè dopo il lavoro ha un sapore tutto speciale.\n"Domani andiamo a trovarci nelle case, uno dopo l\'altro!"'
    : '"La tua è stata pronta subito!" "Da te passa un bel vento!" "La tua è solida!"\nOgni casa aveva davvero il suo pregio.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'In quel momento.\nUn lupo affamato scese dalla montagna\ne si fermò davanti alla casa di paglia.';
    return 'In quel momento.\nIl porcellino piccolo vide da lontano un lupo che scendeva dal sentiero di montagna.\nChe cosa fanno i porcellini?';
  }, choices:[
    {t:'Restare fermi e stare a guardare', go:'pc_vs'},
    {t:'Avvisare gli altri e riunirsi nella casa di mattoni', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Porcellini contro Lupo!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'Il lupo bussò alla casa di paglia, toc, toc.\n"Porcellino, porcellino, fammi entrare."\n"No, no, non apro. Per i peli, peli, peli del mio mento, non apro di sicuro!"\n"E allora soffio e sbuffo, e ti faccio volare via tutta la casa!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'Sbuuuuff!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'La casa di paglia volò via roteando nell\'aria.\nIl porcellino grande scappò fuori a rotoli\ne si infilò nella casa di rami del porcellino di mezzo.', next:'p11'},

  p11:{art:'buta_eda', text:'Il lupo arrivò subito dietro di loro.\n"Porcellini, porcellini, fatemi entrare."\nQuesta volta i due risposero a una voce sola:\n"No, no, non apriamo. Per i peli, peli, peli del nostro mento, non apriamo di sicuro!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'Sbuff, sbuuuuff!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'Anche la casa di rami volò via in mille pezzi.\nI due corsero più veloce che potevano\ne si infilarono nella casa di mattoni del porcellino piccolo.', next:'p13'},

  p13:{art:'buta_naka', text:'"Qui siamo al sicuro.\nQuesta casa l\'ho costruita con calma, per questo è molto solida."\nIl porcellino piccolo chiuse bene la porta a chiave.', next:'p14'},

  p14:{art:'buta_renga', text:'"Porcellini, porcellini, fatemi entrare."\n"NO, NO, NON APRIAMO. PER I PELI, PELI, PELI DEL NOSTRO MENTO, NON APRIAMO DI SICURO!"\nIl lupo prese fiato, un respiro lungo lungo.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... Non si muove di un dito!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Per quanto il lupo soffiasse, la casa di mattoni non si muoveva.';
    if(f.first) return t + '\nAnsimando e sbuffando, il lupo guardò in alto verso il camino sul tetto.';
    return t + '\nIl lupo affamato pensò alla sua prossima mossa.';
  }, choices:[
    {t:'Provare a entrare dal camino', go:'p16'},
    {t:'Provare a farlo uscire con parole dolci', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'Il lupo salì sul tetto e mise un piede nel camino.\nMa dentro casa lo avevano capito da un pezzo.', next:'p17'},

  p17:{art:'buta_nabe', text:'Sotto il camino, nel focolare, c\'era una grande pentola.\nBolle, bolle. Era piena fino all\'orlo di acqua bollente.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Patapunf, splash!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"Ahia, brucia, brucia, brucia!!"\nCon il sedere ustionato, il lupo\ncorse via di filata, su verso la montagna.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Da quel giorno il lupo non venne più.\nI 3 porcellini si ritrovavano ogni tanto tutti insieme\ne, davanti a una zuppa calda, passavano giornate allegre.\nE vissero felici e contenti.'},

  /* ---- La vera storia inglese (Jacobs 1890: i 3 tranelli) ---- */
  pg1:{art:'buta_renga', text:'Il lupo addolcì la voce.\n"Senti, porcellino. Ai margini del villaggio c\'è un campo di rape buonissime.\nDomani mattina alle 6 ci andiamo insieme?"\nIl porcellino piccolo capì subito. (Questa è una trappola.)\n"Va bene. Allora alle 6."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Che bello, non vedo l\'ora che arrivino le 6!'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'La mattina dopo il porcellino si alzò alle 5,\nraccolse in fretta le rape e tornò a casa.\nQuando il lupo arrivò alle 6, restò a bocca aperta.\n"Ci sono già stato. Ho preso una pentola piena di rape."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'Cosaaa? Ci sei già stato?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Poi il lupo lo invitò al melo. "Passo a prenderti alle 5 del mattino."\nIl porcellino uscì alle 4. Ma mentre era ancora sull\'albero,\narrivò il lupo.\n"Ti do la mela più buona di tutte!"\nIl porcellino lanciò una mela lontano lontano\ne, mentre il lupo andava a raccoglierla, scese in fretta e corse a casa.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Per ultimo il lupo lo invitò alla festa in città. "Andiamoci alle 3 del pomeriggio."\nIl porcellino uscì prima di mezzogiorno e comprò una zangola per il burro.\nSulla via del ritorno, dall\'alto della salita, vide il lupo che saliva.\nAllora il porcellino si infilò dentro la zangola.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rotola, rotola! Rotola, rotola!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Con il porcellino dentro, la zangola rotolò giù per la salita, rotola, rotola!\nQuando il lupo vide arrivare quella cosa grande e rotonda,\nsi spaventò moltissimo. Mise la coda tra le gambe e scappò via.', next:'pg6'},
  pg6:{art:'buta_renga', text:'Quando poi il lupo seppe com\'erano andate le cose, andò su tutte le furie.\n"Adesso basta! Entro dal camino!"\nMa dentro casa lo avevano capito da un pezzo.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'Nel focolare la grande pentola bolliva come ogni giorno.\nDentro c\'era una zuppa bollente, piena delle rape raccolte quel mattino.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Patapunf, splash!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"Ahia, brucia, brucia, brucia!!"\nUstionato per bene, il lupo scappò nel profondo della montagna\ne da allora non si fece mai più vedere.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'Il campo di rape, il melo e la zangola del burro.\nQuesta è la strada più vicina alla storia antica come la racconta l\'Inghilterra.\nIl porcellino piccolo e furbo visse a lungo e sereno anche dopo.\nE vissero felici e contenti.'},

  /* ---- Tutti e 3 insieme fin dall'inizio ---- */
  pk1:{art:'buta_renga', text:'"Costruiamo insieme una sola casa, ma bella solida!"\nBastò una parola del porcellino piccolo, e i 3 iniziarono a portare mattoni.\nIn 3, anche i mattoni pesanti non sono un problema.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Sotto un solo tetto c\'erano tre letti.\nVenne fuori una bella casa, con il focolare e le finestre.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Là arrivò il lupo affamato\ne prese fiato, un respiro lungo lungo.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... Non si muove di un dito!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'Il lupo soffiò e soffiò fino al tramonto,\npoi tornò alla montagna sfinito.\nUna casa costruita unendo le forze è la più solida di tutte.\nE vissero felici e contenti.'},

  /* ---- Attenti e preparati ---- */
  pn1:{art:'buta_michi', text:'"Arriva il lupo!"\nIl porcellino piccolo corse di volata alle case dei due fratelli.\nI 3 si riunirono in fretta nella casa di mattoni.', next:'pn2'},
  pn2:{art:'buta_naka', text:'Sbirciando piano dalla finestra, videro il lupo che soffiava sulla casa di paglia.\n"Non c\'è nessuno?!"\nPoi soffiò anche sulla casa di rami.\n"Anche questa è vuota?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Per ultima soffiò sulla casa di mattoni. Ma non si mosse di un dito.\nIl lupo era ormai stremato\ne si sedette per terra, affamato come prima.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Dalla finestra si sentì una voce.\n"Un ospite? Mi dispiace, per oggi abbiamo già chiuso."\nIl lupo tornò alla montagna a passi lenti.\nChi è preparato non si agita. I 3 ripresero il loro tè.\nE vissero felici e contenti.'},

  /* ================= La storia del lupo ================= */

  pw1:{art:'pwolf_yama', text:'Questa è la storia di un lupo che viveva sulla montagna.\nDa un po\' di tempo non trovava quasi più niente da mangiare,\ne la sua pancia era sempre vuota.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Dove cerca da mangiare il lupo, oggi?', choices:[
    {t:'Cercare vicino al fiume', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Cercare nel folto del bosco', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Alle bacche del bosco gli uccelli erano arrivati prima di lui.\nLa pancia gli fece un forte brontolio.'
    : 'Nel fiume non c\'era nemmeno l\'ombra di un pesce.\nLa pancia gli fece un forte brontolio.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Sceso ai piedi della montagna, trovò 3 case nuove una accanto all\'altra.\nE da qualche parte arrivava un buon profumo.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'Qui sento odore di banchetto!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Soffiare era la specialità del lupo.\nAveva fatto volare via la casa di paglia e la casa di rami,\nma i porcellini gli scappavano via ogni volta.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Restava la casa di mattoni. E quella non si muoveva di un dito.\nIl lupo affamato pensò alla sua prossima mossa.', choices:[
    {t:'Farli uscire con parole dolci', go:'pw6'},
    {t:'Provare a parlare con sincerità', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Lo invitò al campo di rape: il porcellino ci era già stato prima.\nLo invitò al melo: il porcellino gli scappò via.\nSi mise in agguato sulla via del ritorno dalla festa, e proprio allora,\ndall\'alto della salita, arrivò qualcosa di grande e rotondo...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rotola, rotola! Rotola, rotola!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Rotola, rotola, arrivava con una forza tremenda.\nEra un grosso blocco rotondo, come non ne aveva mai visti.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'U-un mostro!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'Il lupo mise la coda tra le gambe e corse fino in cima alla montagna.\n"Laggiù, ai piedi del monte, vive un mostro tutto rotondo..."\nE questa storia, tra i lupi della montagna,\nsi raccontò ancora a lungo, a lungo.\nE vissero felici e contenti.'},

  pwh1:{art:'buta_renga', text:'Il lupo si sedette davanti alla porta\ne disse con un filo di voce:\n"...La verità è che non mangio niente da tanti giorni."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Dentro casa, i 3 porcellini si guardarono in faccia.\nLa porta non la aprirono. Ma dalla finestra arrivò una voce.\n"Aspetta lì un momento."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Dalla finestra spuntò piano piano una zuppa di verdure bollente.\nDentro c\'erano rape e patate a grossi pezzi.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'È calda, soffiaci sopra prima.'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'Il soffio famoso del lupo\nnon era più una forza che faceva volare via le case,\nma una forza che raffreddava la zuppa calda al punto giusto.\nUna specialità non serve a una cosa sola.\nE vissero felici e contenti.'},

  /* ================= La storia della casa di mattoni ================= */

  ps1:{art:'prenga_kamado', text:'Questa è la storia di una casa di mattoni.\nOgni mattone nasce cotto piano piano nel fuoco della fornace.\nPer questo non si sbriciola al primo urto.', next:'ps2'},
  ps2:{art:'buta_renga', text:'Un giorno arrivò il porcellino piccolo\ne cominciò a posare i mattoni con cura.\nTan, tan. A poco a poco diventavano una casa.\nChe cosa si vedeva dalla prima finestra finita?', choices:[
    {t:'L\'ampio cielo azzurro', go:'ps2r', set:{slife:'sora'}},
    {t:'Il campo di rape ai margini del villaggio', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Oltre la finestra si stendeva il campo di rape.\nLa casa guardava volentieri come cresceva un po\' ogni giorno.'
    : 'Nel cielo azzurro che riempiva tutta la finestra passavano nuvole bianche.\nEssere una casa, pensò la casa, è proprio una bella cosa.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Un giorno i due porcellini più grandi\nentrarono di corsa, senza fiato.\nFuori, a quanto pare, c\'era un lupo.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'Adesso tocca a me.'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'Il lupo prese un respiro profondo e soffiò con tutta la sua forza.\nUna volta, due volte, tre volte.\nNei muri non si mosse neanche un mattone.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'Non si muove di un dito!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'Passata quella notte di tempesta, la casa si mise a pensare.\nDa adesso in poi, che cosa avrà più caro di tutto?', choices:[
    {t:'Resistere al vento e alla pioggia', go:'e_ps_mamoru'},
    {t:'Tenere acceso il fuoco del focolare', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'Nelle notti di vento e nei mattini di pioggia, la casa non si muove di un dito.\nLa casa sa bene perché è nata così solida.\nPerché dentro ci sono 3 porcellini che vuole proteggere.\nE vissero felici e contenti.'},
  pss1:{art:'buta_soup', text:'Arrivò l\'inverno. Nel focolare si accese il fuoco e la pentola sobbolliva.\nVenne in visita anche la mamma dei porcellini,\ne tutta la casa si riempì di risate.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'Il lavoro di una casa è tenere fuori il vento e la pioggia.\nMa il suo lavoro più importante di tutti\nè custodire con cura le risate che ha dentro.\nAnche oggi dalla casa di mattoni arrivano voci calde.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_IT);

  T.ZK_EN.push(
    {section:'I tre porcellini'},
    {id:'pb_seishi',   n:'La casa di mattoni che salva',        h:'La storia di sempre, quella del primo giro'},
    {id:'pb_genten',   n:'La vera storia inglese',              h:'Quando il lupo invita con parole dolci...'},
    {id:'pb_kyoryoku', n:'Insieme fin dall\'inizio',            h:'Al bivio, scegliere una strada sola insieme...'},
    {id:'pb_sonae',    n:'Attenti e preparati',                 h:'Avvistare il lupo quando è ancora lontano...'},
    {id:'pw_taru',     n:'Un mostro!',                          h:'Nella storia del lupo affamato, scegliere le parole dolci...'},
    {id:'pw_fuufuu',   n:'Il vero uso del soffio',              h:'Nella storia del lupo affamato, parlare con sincerità...'},
    {id:'ps_mamoru',   n:'Non si muove di un dito',             h:'Nella storia della casa di mattoni, resistere a vento e pioggia...'},
    {id:'ps_waraigoe', n:'Un vaso per le risate',               h:'Nella storia della casa di mattoni, accendere il fuoco nel focolare...'}
  );

})();
