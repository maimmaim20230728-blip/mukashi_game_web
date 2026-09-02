"use strict";
/* Cappuccetto Rosso - Italian scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Stile: italiano semplice da libro illustrato, in linea con story_it.js.
   Il famoso botta e risposta segue la formula classica italiana ("Per ...ti meglio"). */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var AKZ_IT = {

  /* ================= Cappuccetto Rosso ================= */

  z1:{art:'akz_home', text:'Questa è la storia di una bambina a cui stava benissimo un cappuccio rosso.\nGlielo aveva fatto la nonna, e la bambina lo portava tutti i giorni.\nPer questo tutti la chiamavano Cappuccetto Rosso.', next:'z2'},

  z2:{art:'akz_home', text:'Un giorno la mamma le disse:\n"La nonna che abita oltre il bosco è malata. Le porti dei dolci e del succo d\'uva?"\n"Non fermarti per strada e non uscire dal sentiero."', next:'z3'},

  z3:{art:'akz_home', text:'Cappuccetto Rosso ci pensò un momento.\nMettiamo ancora qualcosa nel cestino.', choices:[
    {t:'Mettere un vasetto di miele', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Mettere una mela rossa rossa', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'La mela rossa rossa rotolò nel cestino e ci brillò dentro.\nChissà se la nonna sarà contenta.'
    : 'Mise piano nel cestino il vasetto di miele dolce.\nChissà se la nonna sarà contenta.', next:'z4'},

  z4:{art:'akz_door', text:'"Vado, ciao!"\nCon il cestino al braccio, Cappuccetto Rosso uscì di corsa tutta allegra.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'Si parte per la commissione!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'Nel bosco di abeti la luce brillava tra i rami.\nDa qualche parte cantavano gli uccellini.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Allora, in che modo proseguire il cammino?', choices:[
    {t:'Camminare cantando una canzone', go:'z5r', set:{walk:'uta'}},
    {t:'Camminare cercando le farfalle', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'Una farfalla gialla svolazzava davanti a lei lungo il sentiero.\nSembrava quasi che le indicasse la strada.'
    : '"La la la, sul sentiero del bosco."\nGli uccellini cantavano insieme a Cappuccetto Rosso.', next:'z6'},

  z6:{art:'akz_meet', text:'Fru, fru.\nDa dietro un albero sbucò un grande Lupo.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Buongiorno, cara signorina. Dove stai andando?"\nchiese il Lupo con un gran sorriso.';
    if(f.first) return t;
    return t + '\nChe cosa fa Cappuccetto Rosso?';
  }, choices:f=>{
    var c = [
      {t:'Rispondere sinceramente', go:'z8'},
      {t:'"Non te lo dico!"', go:'zn1'},
      {t:'Tornare di corsa a casa', go:'zh1'}
    ];
    if(f.item) c.push({t:'Chiedere: "Signor Lupo, hai fame?"', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"Dalla nonna. È malata, così le porto dei dolci e del succo d\'uva."\nCappuccetto Rosso rispose sinceramente.\nE dentro di sé il Lupo fece un piano furbo.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Guarda un po\' là. Che bei fiori sono sbocciati.\nSe gliene porti un mazzo, la nonna sarà di sicuro contenta."';
    if(f.first) return t;
    return t + '\nChe cosa fa Cappuccetto Rosso?';
  }, choices:[
    {t:'Cogliere i fiori', go:'z10'},
    {t:'"No, vado dritta da lei"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'È proprio vero, pensò Cappuccetto Rosso, e lasciò il sentiero.\nUn fiore bianco, un fiore azzurro. E ogni volta che ne coglieva uno, più in là ne brillava uno ancora più bello.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Intanto il Lupo...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'Il Lupo aveva preso la scorciatoia ed era arrivato per primo alla casa della nonna.\nToc, toc.\n"Nonna, sono io, Cappuccetto Rosso."\nImitò la sua voce e sgusciò dentro.', next:'z12'},

  z12:{art:'akz_bed', text:'In un attimo la nonna fu inghiottita in un boccone.\nIl Lupo si mise la sua camicia da notte, si calcò in testa la cuffia e si infilò nel letto.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Finalmente arrivò Cappuccetto Rosso, con il mazzo di fiori tra le braccia.\n"Oh, la porta è aperta..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Nonna, sono arrivata!"\nLa nonna nel letto sembrava un po\' strana.\nCappuccetto Rosso si avvicinò piano e le guardò il viso.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'Che orecchie grandi!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'Per sentirti meglio'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'Che occhi grandi!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'Per vederti meglio'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'Che mani grandi!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'Per afferrarti meglio'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'Che bocca grande!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'Per mangiarti meglio!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'Gnam!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'Quando aprì gli occhi era tutto buio: era nella pancia del Lupo.\n"Sei tu, Cappuccetto Rosso? Che spavento. Ma adesso andrà tutto bene."\nEra la voce della nonna, e una mano calda le strinse la sua.';
    if(f.first) return t;
    return t + '\nChe cosa fanno le due?';
  }, choices:[
    {t:'Aspettare aiuto senza muoversi', go:'z16'},
    {t:'Cantare insieme a voce alta', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Mano nella mano, le due aspettarono in silenzio.\nIl Lupo, con la pancia piena, dormiva profondamente nel letto.\nIl suo russare rimbombava per tutta la casa.', next:'z17'},

  z17:{art:'akz_hunter', text:'Proprio allora passò di lì il cacciatore che faceva il giro del bosco.\n"Che russare, dalla casa della nonna... Qui c\'è qualcosa che non va."\nGuardò piano dentro: nel letto c\'era un Lupo con la pancia gonfia e tonda!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Zac, zac!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Con le forbici il cacciatore aprì piano la pancia del Lupo addormentato.\n"Là dentro era tutto buio!" disse Cappuccetto Rosso.\nAnche la nonna stava bene. Nessuna delle due aveva un solo graffio.';
    if(f.first) return t;
    return t + '\nChe cosa fanno le due?';
  }, choices:[
    {t:'Riempire la pancia di pietre', go:'z19'},
    {t:'Farsi promettere: mai più', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Cappuccetto Rosso corse a prendere delle pietre pesanti dal giardino.\nIl cacciatore le mise nella pancia e la ricucì punto dopo punto.', next:'z20'},

  z20:{art:'akz_stone', text:'Il Lupo si svegliò e fece un balzo per scappare.\nMa le pietre nella pancia erano pesanti, così pesanti.\nTonf! Cadde a terra e non si mosse più.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Si sedettero tutti sull\'erba e divisero i dolci e il succo d\'uva.\nAnche la nonna sembrava già stare meglio.\nE Cappuccetto Rosso si ripromise:\n"Non mi fermerò mai più fuori dal sentiero."\nE vissero felici e contenti.'},

  /* ---- Non dire niente / andare dritta -> La saggezza della nonna ---- */
  zn1:{art:'akz_meet', text:'"Non te lo dico!"\nCappuccetto Rosso alzò il mento e proseguì a passo svelto.\nIl Lupo fece un ghigno e sparì dietro gli alberi.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Nel petto le si mosse una specie di inquietudine.\nCappuccetto Rosso affrettò il passo e andò avanti senza guardarsi intorno.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Cappuccetto Rosso arrivò per prima alla casa della nonna.\n"Nonna, nel bosco ho incontrato un grande Lupo."\n"Oh cielo. Allora chiudiamo a chiave."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Clic, fece la serratura.\nPoco dopo: toc, toc.\n"Sono Cappuccetto Rosso, aprimi."\nPer quanto imitasse la voce, le due dentro restarono zitte. La porta non si aprì.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Poi si sentì scricchiolare. Scric, scric.\nIl Lupo salì sul tetto e si mise in agguato.\nLa nonna disse a voce bassissima:\n"Quel Lupo adora l\'odore delle salsicce. Versiamo l\'acqua di cottura della pentola nella tinozza davanti a casa."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'Mi è venuta una bella idea'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'Il buon odore di salsiccia salì a nuvole fino al tetto.\nIl Lupo annusò, si sporse, scivolò, scivolò...\nSplash!\nCaduto nella tinozza, il Lupo scappò nel bosco tutto bagnato.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Nonna, sei fortissima!"\n"Eh eh. Questa si chiama saggezza degli anni."\nLa nonna non è mica solo qualcuno da proteggere.\nQuella sera le due mangiarono salsicce belle calde.\nE vissero felici e contenti.'},

  /* ---- Scappare -> Insieme alla mamma ---- */
  zh1:{art:'akz_forest', text:'Cappuccetto Rosso si girò di scatto e corse via a gambe levate.\nIl Lupo, sbalordito, rimase lì a guardarla andare via.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Mamma! Nel bosco ho incontrato un grande Lupo!"\n"Hai fatto bene a dirmelo subito. Brava.\nAllora andiamo insieme dalla nonna."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'Mano nella mano con la mamma, percorse di nuovo il sentiero del bosco.\nLontano, tra gli alberi, il Lupo guardava, ma con un adulto accanto non uscì allo scoperto.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'Nella casa della nonna risuonarono presto le risate di tutti.\nQuando qualcosa ti spaventa o ti preoccupa, dillo subito a un adulto.\nÈ la magia migliore che ci sia.\nE vissero felici e contenti.'},

  /* ---- Hai fame? -> L'ospite del bosco ---- */
  zt1:{art:'akz_meet', text:'"Signor Lupo, per caso hai fame?"\nIl Lupo si stupì tanto che sbatté le palpebre.\n"...Sono tre giorni che non mangio niente."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Cappuccetto Rosso si sedette sul ciglio del sentiero e divise i dolci e la mela rossa rossa.\nIl Lupo diede un morso e gli scese una lacrima.'
    : 'Cappuccetto Rosso si sedette sul ciglio del sentiero e divise i dolci con il miele sopra.\nIl Lupo diede un morso e gli scese una lacrima.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"Nessuno era mai stato così gentile con me."\nCon la pancia piena, il Lupo tornò nel bosco profondo.\nQuando Cappuccetto Rosso lo raccontò alla nonna, la nonna sorrise.\n"Chi sa dividere il proprio cibo è il più forte del mondo."\nE vissero felici e contenti.'},

  /* ---- Cantare -> Il coro nella pancia ---- */
  zu1:{art:'akz_onaka', text:'"Nonna, cantiamo insieme!"\n"Che bella idea. Anche al buio si può cantare."\nPresero un bel respiro, e poi...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'Il coro nella pancia!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"La la la, sul sentiero del bosco."\nFuori dalla casa, il cacciatore non credeva alle sue orecchie.\n"Un canto da dentro la casa? E per di più... dalla pancia del Lupo?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Zac, zac!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Grazie alla vostra canzone vi ho trovate subito", disse il cacciatore.\nIl Lupo, spaventato, mise la coda tra le gambe e scappò nel bosco.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Anche nel posto più buio, se alzi la voce, arriva a qualcuno."\nCappuccetto Rosso non dimenticò mai queste parole della nonna.\nDa quel giorno le due cantano sempre insieme, come un piccolo coro di amiche.\nE vissero felici e contenti.'},

  /* ---- Farsi promettere -> Il mattino della promessa ---- */
  zy1:{art:'akz_rescue', text:'"Riempirgli la pancia di pietre sarebbe crudele. Invece..."\nCappuccetto Rosso guardò dritto negli occhi il Lupo che si stava svegliando.\n"Promettimi che non mangerai mai più nessuno."\nIl Lupo abbassò la testa e disse piano: "...Non lo farò mai più."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'Nella luce del mattino, il Lupo tornò nel bosco profondo.\nSe manterrà davvero la promessa, nessuno lo sa.\nMa il cacciatore disse:\n"La sorveglianza lasciatela a me."\nE vissero felici e contenti.'},

  /* ================= La storia del Lupo ================= */

  w1:{art:'w_fuyu', text:'Questa è la storia di un Lupo che viveva solo nel bosco d\'inverno.\nLa neve era alta e non c\'era preda da nessuna parte.\nDa tre giorni il Lupo non mangiava niente.', next:'w2'},
  w2:{art:'w_fuyu', text:'Una notte fredda, fredda.\nCome la passerà il Lupo?', choices:[
    {t:'Rannicchiarsi nella tana', go:'w2r', set:{wnight:'maru'}},
    {t:'Ululare guardando le stelle', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Verso il cielo blu della notte: Auuuuh!\nMa nessun compagno gli rispose.'
    : 'Si coprì il naso con la coda e si rannicchiò, piccolo piccolo.\nEppure lo spiffero era gelido.', next:'w3'},
  w3:{art:'w_mura', text:'Al mattino, dalla collina guardò giù verso il villaggio, e salì il profumo del pane appena sfornato.\nLa pancia gli brontolò forte.\nChe cosa fa?', choices:[
    {t:'Farsi coraggio e chiedere al fornaio', go:'wp1'},
    {t:'Aspettare qualcuno sul sentiero del bosco', go:'wm1'}
  ]},

  /* ---- Chiedere al fornaio ---- */
  wp1:{art:'w_panya', text:'Quando scese al villaggio, tutti scapparono spaventati.\nSolo il fornaio non scappò.\n"...Hai fame?"', next:'wp2'},
  wp2:{art:'w_panya', text:'Il Lupo annuì appena appena.\nIl fornaio gli diede una bracciata di croste di pane duro.\n"Sei il primo lupo che chiede invece di rubare."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'Dal giorno dopo il Lupo aiutò a spaccare la legna e in cambio ebbe del pane.\nAnche la gente del villaggio, che aveva paura, a poco a poco si abituò.\nIl coraggio di chiedere era più forte di qualsiasi zanna.\nE vissero felici e contenti.'},

  /* ---- Aspettare sul sentiero (l'altra faccia della storia) ---- */
  wm1:{art:'akz_meet', text:'Mentre aspettava sul sentiero del bosco, arrivò una bambina con un cappuccio rosso.\nVoleva mangiarla. Eppure la bambina gli si avvicinò sorridendo.\n"Signor Lupo, per caso hai fame?"', choices:[
    {t:'Dire la verità: "Sì, ho fame"', go:'wt1'},
    {t:'Andare avanti con il piano furbo', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Sono tre giorni che non mangio niente."\nAppena lo disse, il Lupo si stupì di se stesso.\nLa bambina aprì il cestino e divise con lui i dolci.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Io mi chiamo Cappuccetto Rosso. Signor Lupo, incontriamoci ancora su questo sentiero."\nVoleva mangiarla, e invece è diventata la sua amica.\nNei giorni di fame gli basta andare su quel piccolo sentiero.\nSolo a pensarci, il bosco d\'inverno sembra un po\' più caldo.\nE vissero felici e contenti.'},

  wz1:{art:'akz_gma_out', text:'Il Lupo diede una risposta furba e corse via per la scorciatoia.\nMentre correva, qualcosa gli pungeva stranamente nel petto.\n"Se non mangio, non passo l\'inverno", si disse.', next:'wz2'},
  wz2:{art:'akz_bed', text:'Quello che successe dopo lo sapete dalla storia di Cappuccetto Rosso.\nInghiottì la nonna e anche Cappuccetto Rosso, e si addormentò.\nE quando si svegliò...', next:'wz3'},
  wz3:{art:'akz_stone', text:'La pancia era piena di pietre.\nCosì pesanti, così pesanti, che non riusciva a fare un passo.\n"Ecco che cos\'era quella fitta nel petto..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'Il lungo inverno passò,\ne arrivò la primavera.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'Il cacciatore, durante il suo giro, tolse le pietre al Lupo che non poteva muoversi e gli curò la ferita.\n"Hai imparato la lezione?"\nIl Lupo annuì tante e tante volte.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'Nel vento di primavera il Lupo si mette in cammino.\nLa prossima volta che avrà fame dirà: "Me ne dai un po\', per favore?"\nIl peso di quelle pietre il Lupo non l\'ha dimenticato neanche un giorno.\nE vissero felici e contenti.'},

  /* ================= La storia della nonna ================= */

  g1:{art:'g_heya', text:'Questa è la storia della nonna che vive sola in una casetta nel bosco.\nÈ lei che ha lavorato a maglia quel cappuccio rosso.\nOggi aveva un po\' di febbre e lavorava a maglia nel letto.', next:'g2'},
  g2:{art:'g_heya', text:'Della lana rossa era rimasto ancora un po\'.\nChe cosa lavorare adesso?', choices:[
    {t:'Un paio di guantini', go:'g2r', set:{knit:'tebukuro'}},
    {t:'Una sciarpa lunga', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'Una sciarpa lunga, lunga.\nTanto lunga da potersela mettere insieme a Cappuccetto Rosso.'
    : 'Guantini rossi piccoli.\nGiusti giusti per quelle manine.', next:'g3'},
  g3:{art:'g_heya', text:'Proprio allora una grande ombra passò davanti alla finestra.\nToc, toc.\n"Nonna, sono io, Cappuccetto Rosso."\n...Ma guarda. Oggi la voce sembra diversa.', choices:[
    {t:'Controllare dalla finestra prima di rispondere', go:'gy1'},
    {t:'Dire subito "Entra pure!"', go:'go1'}
  ]},

  /* ---- Controllare -> L'ospite sul tetto ---- */
  gy1:{art:'akz_machibuse', text:'Sbirciò dalla fessura della tenda: un grande Lupo!\nSenza fretta e senza agitarsi, la nonna girò la chiave. Clic.\n"Per imbrogliare una vecchia come me ci vogliono ancora cent\'anni."', next:'gy2'},
  gy2:{art:'akz_yane', text:'Il Lupo salì sul tetto. Scric, scric.\nLa nonna versò l\'acqua di cottura delle salsicce nella tinozza davanti a casa.\nAttirato dal buon odore, il Lupo scivolò e scivolò, e splash!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Tutto bagnato, il Lupo scappò nel bosco.\nQuando la nonna lo raccontò a Cappuccetto Rosso, arrivata più tardi, la bambina fece due occhi grandi così.\n"Nonna, sembri un\'eroina!"\n"Eh eh. Non sono mica solo qualcuno da proteggere."\nE vissero felici e contenti.'},

  /* ---- Entra pure -> Calma anche nella pancia ---- */
  go1:{art:'akz_bed', text:'Entrò un grande Lupo.\nIn un attimo la nonna fu inghiottita.\nMa la nonna non si agitò per niente.\nAveva superato tanti e tanti inverni lunghi.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Ma guarda. Dentro la pancia si sta piuttosto al caldo."\nPoco dopo rotolò dentro anche Cappuccetto Rosso.\nLa nonna le strinse forte la manina e disse:\n"Sta\' tranquilla. Ssst, ascolta bene. ...Ecco, si sentono dei passi."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Zac, zac!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'Il cacciatore aprì la pancia con delicatezza.\n"Che meraviglia. È rimasta calma là dentro per tutto il tempo?"\n"Certo. A chi si agita non vengono buone idee."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Per ringraziarlo, la nonna regalò al cacciatore la sciarpa lunga che stava lavorando.\n"I giri d\'inverno sono freddi, vero?"\nEra stata una giornata da paura, eppure ridevano tutti.\nE vissero felici e contenti.'
    : 'Per ringraziarlo, la nonna regalò al cacciatore i guantini rossi che stava lavorando.\n"I giri d\'inverno sono freddi, vero?"\nEra stata una giornata da paura, eppure ridevano tutti.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, AKZ_IT);

  T.ZK_EN.push(
    {section:'Cappuccetto Rosso'},
    {id:'za_seishi',   n:'Il salvataggio del cacciatore', h:'La storia originale, quella della primissima volta'},
    {id:'za_chie',     n:'La saggezza della nonna',       h:'Se non dici niente e vai dritta...'},
    {id:'za_gassho',   n:'Il coro nella pancia',          h:'Se nella pancia buia cantate insieme...'},
    {id:'za_okyaku',   n:'L\'ospite del bosco',           h:'Se metti qualcosa nel cestino e sei gentile con il Lupo...'},
    {id:'za_yakusoku', n:'Il mattino della promessa',     h:'Se dopo il salvataggio scegli qualcosa al posto delle pietre...'},
    {id:'za_okaasan',  n:'Insieme alla mamma',            h:'Se hai paura e torni subito a raccontarlo...'},
    {id:'zw_pan',      n:'La prima richiesta',            h:'Nella storia del Lupo, scendere al villaggio...'},
    {id:'zw_tomo',     n:'La prima amica',                h:'Nella storia del Lupo, dire la verità...'},
    {id:'zw_hansei',   n:'Il vento di primavera',         h:'Dove porta davvero il piano furbo...'},
    {id:'zg_yane',     n:'L\'ospite sul tetto',           h:'Nella storia della nonna, prima controllare...'},
    {id:'zg_onaka',    n:'Calma anche nella pancia',      h:'Nella storia della nonna, restare tranquilla...'}
  );

})();
