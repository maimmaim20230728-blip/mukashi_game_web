"use strict";
/* Principessa Kaguya - Italian scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   Fonte: Taketori Monogatari (X secolo, pubblico dominio). Nessun elemento proprio del film del 2013. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var KAGUYA_IT = {

  /* ================= Principessa Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Questa è una storia di tanto, tanto tempo fa.\nC\'era un vecchio che viveva tagliando il bambù.\nLa gente lo chiamava il Tagliabambù.\nUn giorno, in fondo al boschetto di bambù, trovò una canna con la radice che brillava d\'oro.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'Il bambù brilla!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'Quando aprì la canna, dentro c\'era seduta una bambina piccolissima, non più grande di una mano.\nIl vecchio la posò sul palmo e la portò a casa.\nInsieme alla moglie decise di crescerla in una cesta.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'Che cosa fare ogni giorno per la piccola principessa?', choices:[
    {t:'Cantarle una ninnananna', go:'kg3r', set:{takeko:'uta'}},
    {t:'Farle dei giocattoli di bambù', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'Il vecchio intagliò nel bambù piccoli flauti e carretti.\nQuando la principessa rideva, rideva anche la vecchia.'
    : 'Quando la vecchia cantava la ninnananna, la principessa si addormentava serena.\nI due restavano accanto alla cesta e la guardavano a lungo.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'Da allora, ogni volta che tagliava una canna, dentro trovava dell\'oro.\nLa bambina crebbe a vista d\'occhio e in 3 mesi circa divenne una bella ragazza.\nLe diedero il nome "Kaguya, principessa del bambù snello".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'Della bellezza della principessa Kaguya parlava ormai tutto il paese.\nIntorno alla casa la gente si radunava per vederla anche solo un istante.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Fra loro vennero 5 giovani nobili che la volevano assolutamente in sposa.\nIl principe Ishitsukuri, il principe Kuramochi, il ministro Abe,\nil Gran Consigliere Otomo e il Consigliere di Mezzo Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'La principessa Kaguya disse:\n"Andrò da chi mi porterà il tesoro che desidero vedere."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'La ciotola di pietra del Buddha!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'Il ramo di gioielli di Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'La pelliccia del topo di fuoco!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'La gemma del collo del drago!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'La conchiglia cauri della rondine!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Nessuno di questi tesori sembrava esistere a questo mondo.\nI 5 partirono, ciascuno per il proprio viaggio.';
    if(f.first) return t;
    return t + '\nDi chi ascoltiamo la storia?';
  }, choices:[
    {t:'Il principe Ishitsukuri', go:'kgk1'},
    {t:'Il principe Kuramochi', go:'kgk2'},
    {t:'Il ministro Abe', go:'kgk3'},
    {t:'Il Gran Consigliere Otomo', go:'kgk4'},
    {t:'Il Consigliere di Mezzo Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'Il principe Ishitsukuri trovò troppo faticoso arrivare fino alla lontana India,\ne portò una vecchia ciotola di un tempio lì vicino.\nMa la ciotola del Buddha doveva brillare.\nUna ciotola senza luce fu scoperta subito.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'Il principe Kuramochi fece fabbricare il ramo di gioielli da alcuni artigiani.\nLa principessa e il vecchio guardarono stupiti quel ramo magnifico.\nMa proprio allora arrivarono gli artigiani e dissero:\n"Non abbiamo ancora ricevuto il nostro compenso."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'Il ministro Abe si fece mandare una pelliccia da un paese lontano.\nLa principessa disse: "La pelliccia del topo di fuoco non brucia, nemmeno nel fuoco."\nLa misero nel fuoco, e la pelliccia bruciò tutta, crepitando.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'Il Gran Consigliere Otomo partì per mare in cerca di un drago.\nUna grande tempesta lo colse e la nave girò su se stessa.\nQuando finalmente toccò riva, tornò a casa con gli occhi rossi e gonfi.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'Il Consigliere di Mezzo Isonokami infilò la mano in un nido di rondini,\ne nel momento in cui afferrò qualcosa, cadde dal tetto.\nQuello che stringeva era vecchio sterco di rondine.\nIl consigliere si fece male e dovette mettersi a letto.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'Alla fine, nessuno riportò un tesoro vero.';
    if(f.first) return t;
    return t + '\nE adesso, che cosa fare?';
  }, choices:[
    {t:'Lasciar correre le voci e vivere in pace', go:'kg10'},
    {t:'Dire la verità al vecchio e alla vecchia', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'Le voci arrivarono anche alle orecchie dell\'Imperatore.\nFingendo di andare a caccia, l\'Imperatore visitò la casa del Tagliabambù.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'La portantina dell\'Imperatore!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'Quando l\'Imperatore fece per farla salire sulla portantina,\nla figura della principessa Kaguya divenne piano piano luce e scomparve.\n"Non la porterò via."\nCosì disse l\'Imperatore, e tornò alla capitale.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'Da allora l\'Imperatore e la principessa Kaguya si scambiarono lettere e poesie.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'E così passarono 3 anni.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'Quando venne la primavera, la principessa Kaguya guardava la luna e le scendevano le lacrime.\nQuando il vecchio le chiedeva il motivo, lei non rispondeva.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'Alla fine dell\'estate, la principessa Kaguya lo disse finalmente.\n"Io vengo dalla Capitale della Luna.\nLa notte di luna piena dell\'8° mese verranno a prendermi. Devo tornare."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'Non la lascio andare!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'Il vecchio chiese aiuto all\'Imperatore, e vennero molti soldati.\nSul tetto e nel giardino si schierarono uomini con l\'arco.\nLa vecchia nascose la principessa nella stanza più interna e chiuse bene la porta.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'La notte di luna piena. Passata la mezzanotte,\nintorno alla casa si fece più chiaro che di giorno.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'La luce della luna scende!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Dal cielo scesero delle persone in piedi sulle nuvole.\nAi soldati mancarono le forze, e nessuno riuscì a tendere l\'arco.\nLa porta si aprì da sola, e dalle braccia della vecchia la principessa si fece avanti.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'Il messaggero della Luna disse:\n"Vecchio. La principessa ha commesso una colpa sulla Luna e, per pagarla, è scesa qui per un poco.\nIl tempo della pena è finito.\nEra anche un ringraziamento per una tua piccola buona azione."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'La principessa Kaguya scrisse una lettera al vecchio.\n"Pensate alla veste che lascio qui come se fossi io.\nNelle notti in cui esce la luna, guardate in alto."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'Il messaggero della Luna porse un vaso con l\'elisir di lunga vita.';
    if(f.first) return t + '\nLa principessa ne assaggiò un sorso, unì il resto alla lettera per l\'Imperatore\ne lo consegnò al messaggero dell\'Imperatore.';
    return t + '\nA chi dare questo elisir?';
  }, choices:[
    {t:'Unirlo alla lettera per l\'Imperatore', go:'kg21'},
    {t:'Lasciarlo al vecchio e alla vecchia', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'Il messaggero della Luna porse la veste di piume.\n"Chi la indossa, perde ogni pensiero del cuore."';
    if(f.first) return t + '\nLa principessa indossò la veste di piume.';
    return t + '\nChe cosa fare?';
  }, choices:[
    {t:'Indossare la veste di piume', go:'kg22'},
    {t:'Voltarsi ancora una volta prima di indossarla', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'Perduti i pensieri del cuore, la principessa non sentì più per il vecchio né affetto né nostalgia.\nSalì su una nuvola e si levò verso la luna.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Verso la luna...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'Il vecchio e la vecchia non riuscivano a smettere di piangere.\nStringendo la veste lasciata dalla principessa, guardarono a lungo, a lungo il cielo.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'L\'Imperatore fece bruciare la lettera della principessa e l\'elisir di lunga vita\nsulla cima del monte di Suruga, quello più vicino al cielo.\nPoiché su quel monte erano saliti moltissimi guerrieri,\nda allora fu chiamato "monte Fuji", il monte ricco di guerrieri.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'Nelle notti in cui esce la luna, guardate in alto.\nIl vecchio e la vecchia fecero come aveva scritto la principessa e nelle notti di luna guardarono il cielo.\nLa veste che lei si era tolta e aveva lasciato rimase nelle loro mani.\nFine.'},

  /* ---- I giorni che restavano ---- */
  kgn1:{art:'kg_uchiake', text:'Prima ancora che venisse l\'Imperatore, la principessa Kaguya parlò ai due.\n"Io vengo dalla Capitale della Luna. Quest\'autunno devo tornare."\nIl vecchio e la vecchia rimasero a lungo in silenzio.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'Da quel giorno, i 3 vissero ogni giornata con cura.\nPasseggiarono nel boschetto di bambù e andarono anche alla canna dove lei era stata trovata la prima volta.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'Nelle notti con la luna bella, i 3 sedevano insieme sulla veranda.\n"Nelle notti di luna, sedetevi qui. Anch\'io guarderò questo posto dalla luna."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'La notte di luna piena vennero a prenderla.\nIl vecchio non combatté.\nI 3 si tennero per mano e aspettarono la luce.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'L\'addio arrivò lo stesso.\nMa prima di quel momento, i 3 avevano avuto un intero autunno insieme.\nSulla veranda, 3 cuscini sono rimasti dove erano.\nFine.'},

  /* ---- Prima della veste di piume ---- */
  kgm1:{art:'kg_shouten', text:'Prima di indossare la veste di piume, la principessa si voltò.\nIl vecchio e la vecchia la stavano guardando.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Grazie di avermi cresciuta'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'La vecchia piangeva, sorrideva e salutava con la mano.\nAnche il vecchio salutò con un ampio gesto.\nLa principessa si impresse negli occhi quei volti e poi indossò la veste di piume.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Anche se i pensieri del cuore erano svaniti, i due volti visti per ultimi\nrimasero nella luce, per sempre.\nFine.'},

  /* ---- L'elisir di lunga vita ---- */
  kgu1:{art:'kg_tegami', text:'La principessa diede l\'elisir di lunga vita al vecchio e alla vecchia.\n"Se lo bevete, vivrete per sempre."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Dopo che la principessa era tornata sulla luna, i due guardarono il vaso dell\'elisir.\n"Un mondo senza la principessa non c\'è bisogno di viverlo per sempre."\nDisse il vecchio, piano.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'La notte di luna successiva, i due posarono il vaso sulla veranda.\nCome se lo offrissero alla luna, con delicatezza.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'L\'elisir non fu mai bevuto e rimase lì, immerso nella luce della luna.\nL\'Imperatore bruciò il suo sul monte Fuji, il vecchio offrì il suo alla luna dalla veranda.\nErano due modi, ciascuno il proprio, per non dimenticare la principessa.\nFine.'},

  /* ================= La storia del Tagliabambù ================= */

  kj1:{art:'okina_take', text:'Questa è la storia del Tagliabambù e di sua moglie, e di quello che venne dopo.\nDa quando la principessa è tornata sulla luna è passato un mese.', next:'kj2'},
  kj2:{art:'kg_ato', text:'Che cosa fare oggi?', choices:[
    {t:'Piegare la veste della principessa', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Camminare nel boschetto di bambù', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'Il boschetto di bambù ondeggiava nel vento, proprio come quel giorno.\nIl vecchio rimase un poco ad ascoltare il suono del bambù.'
    : 'La vecchia piegò con cura la veste della principessa.\nLa piegò, la aprì di nuovo e la piegò ancora.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'Una notte di luna. I due rilessero ancora una volta la lettera della principessa.\n"Nelle notti in cui esce la luna, guardate in alto."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Guardiamo in alto?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'La vecchia lo disse al vecchio.\nChe cosa faranno i due?', choices:[
    {t:'Guardare la luna dalla veranda', go:'kjt1'},
    {t:'Andare nel boschetto di bambù al mattino', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'I due sedettero vicini sulla veranda e guardarono la luna.\nLa tristezza non se ne andò.\nMa la luce della luna arrivava fino alla veranda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Da allora, nelle notti di luna, i due siedono sulla veranda.\nCi sono notti in cui piangono, notti in cui parlano e notti in cui tacciono.\nLa luce della luna arrivava allo stesso modo in ognuna di quelle notti.\nFine.'},
  kjk1:{art:'okina_take', text:'Un mattino di primavera, il vecchio tornò nel boschetto di bambù.\nDi canne che brillano non ce n\'erano più.\nAl loro posto, qua e là, i germogli di bambù mettevano fuori la testa.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'... Li raccolgo.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'Il vecchio scavò i germogli di bambù, uno dopo l\'altro.\nSenza fretta, senza che nessuno glielo dicesse, per sua scelta.\nQuando la cesta fu piena, arrivò la vecchia con il pranzo.\nE vissero felici e contenti.'},

  /* ================= La storia del messaggero della Luna ================= */

  ku1:{art:'tsuki_miyako', text:'Questa è la storia di un messaggero che vive nella Capitale della Luna.\nNella Capitale della Luna non ci sono lacrime. E non ci sono pensieri del cuore.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Oggi è il giorno di scendere sulla terra. Che cosa portare?', choices:[
    {t:'Solo la veste di piume', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'Anche l\'elisir di lunga vita', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'Nella cassa mise la veste di piume e un vaso con l\'elisir di lunga vita.\nSi dice che la gente della terra lo desideri molto.'
    : 'Nella cassa mise la veste di piume.\nCon questa soltanto, la principessa tornerà subito a essere una persona della Luna.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'Sceso su una nuvola, il messaggero trovò molta gente intorno alla casa.\nAvevano archi in mano e guardavano fisso da quella parte.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'Il vecchio stava gridando qualcosa.\nIl messaggero non capiva il significato di quelle parole.\nSulla Luna non esiste una parola come "non la rendo".', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'... Lacrime?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'La principessa si fece avanti.\nChe cosa farà il messaggero?', choices:[
    {t:'Metterle la veste di piume, come vuole la regola', go:'kun1'},
    {t:'Ascoltare la richiesta della principessa', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'Il messaggero, come voleva la regola, mise alla principessa la veste di piume.\nMa non riuscì a fingere di non vedere il viso bagnato del vecchio.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'Tornato sulla Luna, il messaggero continuava a ricordare quel viso.\nIn un paese senza lacrime, per la prima volta seppe che cosa significano le lacrime.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'Da allora, ogni tanto, il messaggero della Luna guarda giù verso la terra.\nNel paese che non conosce le lacrime, ora c\'è qualcuno che le conosce.\nFine.'},
  kut1:{art:'kg_tegami', text:'"Per favore, consegna al vecchio la mia lettera e la mia veste."\nAlla richiesta della principessa, il messaggero annuì.\nNelle regole della Luna non c\'è nulla del genere. Ma sarà l\'usanza della terra.', next:'kut2'},
  kut2:{art:'kg_ato', text:'Il messaggero scese davanti al vecchio e gli consegnò con cura la lettera e la veste.\nIl vecchio se le strinse al petto.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'Tornato nella Capitale della Luna, il messaggero aggiunse una riga alle regole.\n"Chi torna dalla terra può lasciare indietro una cosa sola."\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_IT);

  T.ZK_EN.push(
    {section:'Principessa Kaguya'},
    {id:'kg_seishi',  n:'Nelle notti di luna, guardare in alto', h:'La storia originale, quella del 1° giro'},
    {id:'kg_nokori',  n:'I giorni che restavano',               h:'Se dici la verità prima che arrivi l\'Imperatore...'},
    {id:'kg_koromo',  n:'Prima della veste di piume',           h:'Se ti volti ancora una volta prima della veste di piume...'},
    {id:'kg_kusuri',  n:'L\'elisir di lunga vita',               h:'Se lasci l\'elisir al vecchio e alla vecchia...'},
    {id:'kj_tsukiyo', n:'Dove arriva la luce della luna',       h:'Nella storia dei due vecchi: se guardi in alto dalla veranda...'},
    {id:'kj_take',    n:'Di nuovo ai germogli di bambù',        h:'Nella storia dei due vecchi: se al mattino vai nel boschetto di bambù...'},
    {id:'ku_namida',  n:'Il paese senza lacrime',               h:'Nella storia del messaggero della Luna: se segui la regola...'},
    {id:'ku_tegami',  n:'Il messaggio',                         h:'Nella storia del messaggero della Luna: se ascolti la richiesta della principessa...'}
  );

})();
