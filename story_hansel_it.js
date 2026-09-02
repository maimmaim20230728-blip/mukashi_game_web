"use strict";
/* Hansel e Gretel - Italian scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   Le filastrocche (il richiamo della strega, la risposta dei bambini, la preghiera all'anatra)
   sono rese in proprio dal testo giapponese e dall'originale PD dei Grimm (KHM 15, 1857),
   senza ricalcare traduzioni italiane esistenti.
   Nomi nella forma corrente in italiano: Hansel, Gretel. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var HANSEL_IT = {

  /* ================= Hansel e Gretel ================= */

  hg1:{art:'hg_ie', text:'Questa è la storia della famiglia di un taglialegna che viveva vicino a un grande bosco.\nHansel e Gretel, il fratello e la sorella,\nvivevano con il padre e la matrigna, tutti e quattro insieme.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'Quell\'anno una carestia si diffuse in tutto il paese.\nIl pane costava caro, e anche in casa del taglialegna il cibo diminuiva ogni giorno.';
    if(f.first) return t;
    return t + '\nOggi c\'è un solo pane piccolo. Come lo dividono?';
  }, choices:[
    {t:'Dividerlo in parti uguali tra tutti', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel dà di più alla sorella', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"Tanto io non ho fame."\nHansel posò piano la sua parte nel piatto di Gretel.'
    : 'Divisero il piccolo pane in quattro e lo mangiarono insieme.\n"Speriamo che domani se ne possa comprare uno più grande."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'Quella notte i due sentirono la voce della matrigna.\n"Domani mattina portiamo i bambini nel folto del bosco e li lasciamo lì.\nAltrimenti moriremo di fame tutti e quattro."\nIl padre disse di no, molte volte.\nMa alla fine annuì, senza una parola.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel si mise a piangere.\n"Tranquilla. Ho un\'idea."\nHansel uscì piano e raccolse sassolini bianchi al chiaro di luna.';
    if(f.first) return t + '\nFinché le tasche non furono piene.';
    return t + '\nQuali sassolini raccoglie?';
  }, choices:[
    {t:'I sassolini bianchi e tondi', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'I sassolini che brillano di più alla luna', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'Li provò uno per uno e scelse quelli che brillavano d\'argento.\nFinché le tasche non furono piene.'
    : 'Sassolini bianchi e tondi tondi, finché le tasche non furono piene.\nTornato in casa sussurrò a Gretel: "Ora va tutto bene."', next:'hg5'},

  hg5:{art:'hg_mori', text:'La mattina dopo la famiglia si avviò verso il bosco.\nCamminando, Hansel lasciava cadere i sassolini uno dopo l\'altro.\nNel folto del bosco il padre accese un fuoco.\n"Riposate qui. Torneremo a prendervi più tardi."\nSenza accorgersene, i due si addormentarono.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'Quando si svegliarono, era buio pesto.\nGretel si mise a piangere.\n"Aspettiamo che sorga la luna", disse Hansel.\nE quando la luna salì sopra il bosco...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'I sassolini brillano!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'I sassolini, che brillavano come argento, segnavano il cammino fino a casa.\nMano nella mano, i due camminarono fino al mattino.', next:'hg8'},

  hg8:{art:'hg_ie', text:'Il padre pianse e strinse forte i due bambini.\nLa matrigna non disse niente.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Ma la carestia continuò.\nUna notte si sentì di nuovo quella voce.\nQuesta volta la porta era chiusa a chiave, e non si poteva uscire.';
    if(f.first) return t + '\nHansel decise di sbriciolare il pane del mattino e di segnare così il cammino.';
    return t + '\nChe cosa fa?';
  }, choices:[
    {t:'La mattina, sbriciolare il pane per segnare il cammino', go:'hg10'},
    {t:'Uscire piano dalla finestra e raccogliere sassolini', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'Sulla strada per il bosco Hansel lasciò cadere le briciole, una dopo l\'altra.\nAnche questa volta i due si addormentarono accanto al fuoco.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'La luna sorse, ma non c\'era più una sola briciola.\nGli uccelli del bosco le avevano mangiate tutte.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'I due camminarono e camminarono.\nUna notte, due notti, e poi la terza mattina.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'La pancia vuota, le gambe pesanti.\nProprio allora, su un ramo, un uccello bianco come la neve cantava.', next:'hg13'},

  hg13:{art:'hg_tori', text:'L\'uccello volava davanti ai due e li guidava sempre più addentro nel bosco.\nE quando arrivarono in una radura...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'Una casa di dolci!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Muri di pane, un tetto di dolci, finestre di zucchero trasparente.\nTutta la casa era da mangiare.';
    if(f.first) return t + '\nHansel mordeva il tetto, Gretel la finestra, e non si fermavano più.';
    return t + '\nDa dove cominciano?';
  }, choices:[
    {t:'Il dolce del tetto', go:'hg14r', set:{hokashi:'yane'}},
    {t:'La finestra di zucchero', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'La finestra di zucchero si ruppe con un crac e si sciolse in bocca.\n"Non ho mai mangiato niente di così buono."'
    : 'Il dolce del tetto sapeva di miele.\n"Non ho mai mangiato niente di così buono."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Cric croc, cric croc.\nProprio allora, da dentro la casa, si sentì una voce sottile.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Cric croc, cric croc, chi mi rosicchia la casa?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'I due risposero:\n"È il vento, è il vento, il vento del bambino del cielo."\nE continuarono a mangiare.', next:'hg17'},

  hg17:{art:'hg_majo', text:'La porta si aprì e uscì una vecchia che si appoggiava a un bastone.\n"Oh, che cari ospiti. Entrate pure."\nLatte e frittelle, mele e noci.\nIn lettini bianchi i due dormirono profondamente.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Ma quella vecchia...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'Era una strega.\nLa strega aveva gli occhi rossi e non vedeva lontano.\nIn compenso aveva un fiuto fine come quello delle bestie.\nQuando un bambino si avvicinava, lo sentiva dall\'odore.', next:'hg19'},

  hg19:{art:'hg_ori', text:'La mattina Hansel fu chiuso in una gabbia.\n"Prima ti ingrasso, poi ti mangio."\nGretel dovette portare l\'acqua e cucinare.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Ogni mattina la strega diceva:\n"Fammi vedere il dito. Sei ingrassato?"\nE al posto del dito Hansel le porgeva un ossicino.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'È un osso!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'La strega dalla vista debole si fece ingannare molte volte.\nPassarono quattro settimane e alla fine perse la pazienza.\n"Grasso o magro, domani mattina ti mangio."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'La strega accese il fuoco nel forno.\n"Entra dentro e guarda se è già abbastanza caldo."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel contro la strega!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel capì che cosa aveva in mente la strega.';
    if(f.first) return t + '\n"Non so come si fa. Come si entra?"';
    return t + '\nChe cosa fa?';
  }, choices:[
    {t:'Rispondere: "Non so come si fa"', go:'hg24'},
    {t:'Prendere la chiave della gabbia e scappare', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Che bambina sciocca. Guarda, si fa così!"\nE proprio nel momento in cui la strega infilò la testa nel forno...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'Sbam!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel spinse la strega dentro il forno e chiuse di colpo lo sportello di ferro.\nE per la strega finì lì.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel aprì la gabbia.\n"Hansel, ora siamo salvi!"\nDentro la casa c\'erano casse piene di perle e di pietre preziose.';
    if(f.first) return t + '\nI due si riempirono le tasche di pietre preziose.';
    return t + '\nChe cosa portano a casa?';
  }, choices:[
    {t:'Riempirsi le tasche di pietre preziose', go:'hg27'},
    {t:'Riempire un sacco con il cibo dello scaffale', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'Camminando nel bosco arrivarono a una grande distesa d\'acqua.\nNon c\'era né ponte né barca.\nProprio allora arrivò a nuoto un\'anatra bianca.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Cara anatra, ti prego!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Cara anatra, cara anatra, qui ci sono Gretel e Hansel.\nNon c\'è ponte né barca. Prendici sul tuo dorso bianco."\n"Insieme siamo troppo pesanti. Passiamo uno alla volta."\nE l\'anatra li portò all\'altra riva, uno alla volta.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Passato un bosco che conoscevano, videro la loro vecchia casa.\nIl padre li vide e pianse.\nLa matrigna non c\'era più.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'Le perle e le pietre preziose caddero dalle tasche, e il padre sgranò gli occhi.\nDa quel giorno non mancò mai più il cibo.\nTutti e tre vissero insieme in buon accordo.\nE vissero felici e contenti.'},

  /* ---- Ancora una volta i sassolini ---- */
  hk1:{art:'hg_koishi', text:'Hansel uscì piano dalla finestra\ne al chiaro di luna si riempì le tasche di sassolini bianchi.', next:'hk2'},
  hk2:{art:'hg_mori', text:'Il giorno dopo li lasciarono nel folto del bosco, ma i due non si spaventarono.\nQuando sorse la luna i sassolini brillarono fino a casa.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Non lo farò mai più."\nIl padre lo promise davanti ai due bambini.\nAnche la matrigna, quella notte, restò in silenzio a capo chino.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'Quell\'inverno la casa restò povera.\nMa dividevano ogni pane in quattro e aspettarono la primavera.\nLa strega della casa di dolci non la incontrarono mai.\nE vissero felici e contenti.'},

  /* ---- Sull'altra riva ---- */
  hkw1:{art:'hg_kamado', text:'Gretel prese la chiave della gabbia e fece uscire Hansel.\n"Scappiamo!"\nLa strega dalla vista debole li inseguì annusando l\'aria.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Arrivati all\'acqua, c\'era un\'anatra bianca.\n"Uno alla volta! Se pesate troppo, vado a fondo."\nL\'anatra portò prima Gretel, poi Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'Anche la strega arrivò alla riva.\n"Anatra, prendi anche me."\nMa la strega era troppo pesante, e l\'anatra non si mosse di un dito.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'Sull\'altra riva la strega non poté fare altro che pestare i piedi.\nMano nella mano, i due tornarono a casa.\nNessuno entrò nel forno e nessuno fu mangiato.\nE vissero felici e contenti.'},

  /* ---- L'inverno del villaggio ---- */
  hgm1:{art:'hg_takara', text:'Gretel guardò gli scaffali.\nFarina, miele, noci, mele.\n"Questo è meglio delle pietre preziose."\nI due riempirono un sacco di cibo.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Con il sacco pesante tra le braccia arrivarono all\'acqua.\nL\'anatra bianca portò all\'altra riva i due e il sacco, uno alla volta.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'Nel villaggio la carestia durava ancora.\nI due divisero con tutto il villaggio il cibo che avevano portato.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Quell\'inverno la farina della casa di dolci diventò il pane del villaggio.\nFinché non venne la primavera e nei campi spuntò il verde, nessuno ebbe fame.\nE vissero felici e contenti.'},

  /* ================= La storia della strega ================= */

  hw1:{art:'majo_daidokoro', text:'Questa è la storia di una strega che viveva nel folto del bosco.\nOgni giorno la strega cuoceva il pane e preparava dolci,\ne con quelli faceva muri e tetti, e continuava a costruire la sua casa.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'Che cosa cuoce oggi?', choices:[
    {t:'Biscotti dolci', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Pane alle noci', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'Il pane alle noci venne fuori bello dorato.\nMa non c\'era nessuno che lo mangiasse.\nLa strega lo accatastò nel muro.'
    : 'I biscotti dolci vennero fuori croccanti.\nMa non c\'era nessuno che li mangiasse.\nLa strega li dispose sul tetto.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'Un giorno si sentì un cric croc.\nQualcuno stava rosicchiando la casa.\nGli occhi rossi della strega non vedevano lontano.\nSolo il naso sentì l\'odore dei bambini.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Cric croc, chi mi rosicchia la casa?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"È il vento, il vento del bambino del cielo."\nRisposero due vocine.\nLa strega aprì la porta. E ora...', choices:[
    {t:'Ingrassarli e poi mangiarli', go:'hwm1'},
    {t:'Preparare loro un banchetto', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'Sul tavolo, pane appena sfornato e latte.\n"Buono!" "Buono!", dissero i due molte volte.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...Buono?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Era da tanto tempo che la strega non sentiva quella parola.\nQualcuno mangiava quello che aveva preparato lei.\nLa strega pianse, di nascosto.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Da allora, ogni tanto, alla casa di dolci arrivano degli ospiti.\nLa strega ancora oggi cuoce il pane e prepara dolci.\nQuesta volta per le persone che li mangeranno.\nE vissero felici e contenti.'},

  hwm1:{art:'hg_ori', text:'Chiuse Hansel nella gabbia e ogni mattina diceva: "Fammi vedere il dito".\nMa gli occhi della strega non distinguevano un osso da un dito.\n"Ancora così magro..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Perché non ingrassi!?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'La strega perse la pazienza e accese il fuoco nel forno.\n"Guarda se è già abbastanza caldo."\n"Non so come si fa", disse Gretel.\nAllora la strega infilò dentro la testa lei stessa.\n...Non vedeva niente.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"Qui è buio pesto! Qualcuno mi tenga lo sportello!"\nMentre la strega si dimenava, i due scapparono via.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'La strega uscì carponi dal forno e prese una decisione.\n"Mi compro degli occhiali."\nLa mattina dopo, con il suo bastone, partì per la città.\nQuello che la strega vide con gli occhiali è tutta un\'altra storia.\nE vissero felici e contenti.'},

  /* ================= La storia dell'uccello bianco ================= */

  hb1:{art:'tori_sora', text:'Questa è la storia di un uccello bianco come la neve che viveva nel bosco.\nUna mattina, sul sentiero del bosco, c\'erano briciole di pane sparse qua e là.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Che briciole invitanti. Che fare?', choices:[
    {t:'Mangiarne solo una', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Mangiare a sazietà', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'Solo una, era l\'intenzione.\nMa arrivarono anche gli altri uccelli, e le briciole finirono tutte.'
    : 'Arrivarono anche gli altri uccelli, e in un attimo le briciole finirono tutte.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'Quella notte l\'uccello vide:\ndue bambini che cercavano qualcosa, vagando per il bosco.\n"Quelle... erano le briciole che abbiamo mangiato."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'È colpa mia'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'L\'uccello ci pensò su.\nChe cosa poteva fare adesso?', choices:[
    {t:'Cercare dal cielo la via di casa e guidarli', go:'hbp1'},
    {t:'Avvisare con un canto della casa di dolci', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'L\'uccello volò in alto.\nDa lassù la casa del taglialegna era proprio lì vicino.\nVolò basso davanti ai due e mostrò loro il cammino.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"Quell\'uccello sembra dire: venite con me."\nI due camminarono dietro all\'uccello.\nUsciti dal bosco, videro il fumo della loro casa.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'L\'uccello che aveva mangiato le briciole\nin cambio restituì ai due la via di casa.\nRiparare comincia da quello che si può fare.\nE vissero felici e contenti.'},

  hbu1:{art:'hg_tori', text:'L\'uccello sapeva.\nLa casa di dolci nel folto del bosco, e anche chi ci abitava.\nSi posò su un ramo e cantò:\n"Rosicchia pure il muro, ma non entrare dentro."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'Non entrate dentro!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'I due capirono il senso del canto.\nRosicchiarono un po\' di muro per riempirsi la pancia,\ne quando la porta si aprì non entrarono, ma tornarono sul sentiero del bosco.\nL\'uccello bianco volò avanti, verso la loro casa.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'L\'uccello che sapeva della casa di dolci\ncontinuò a cantare sul suo ramo anche dopo.\nUn canto di avviso per ogni bambino che si perde nel bosco.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_IT);

  T.ZK_EN.push(
    {section:'Hansel e Gretel'},
    {id:'hg_seishi',  n:'La via di casa dell\'anatra bianca', h:'La storia originale, dalla tua primissima lettura'},
    {id:'hg_koishi',  n:'Ancora una volta i sassolini',      h:'Nella seconda notte, uscire dalla finestra...'},
    {id:'hg_kawa',    n:'Sull\'altra riva',                  h:'Davanti al forno, scegliere di scappare...'},
    {id:'hg_mura',    n:'L\'inverno del villaggio',          h:'Portare a casa il cibo invece delle pietre preziose...'},
    {id:'hw_okyaku',  n:'I primi ospiti',                    h:'Nella storia della strega, preparare un banchetto...'},
    {id:'hw_megane',  n:'Occhi rossi e occhiali',            h:'Nella storia della strega, provare a ingrassarli...'},
    {id:'hb_pankuzu', n:'Chi ha mangiato le briciole',       h:'Nella storia dell\'uccello bianco, guidarli dal cielo...'},
    {id:'hb_uta',     n:'Avvisare con un canto',             h:'Nella storia dell\'uccello bianco, avvisare con un canto...'}
  );

})();
