"use strict";
/* Italian scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Italian. */

var SCENES_IT = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Tanto tempo fa, in un luogo lontano, vivevano un vecchietto e una vecchietta.\nIl vecchietto andava sui monti a raccogliere legna, la vecchietta andava al fiume a lavare i panni.', next:'m2'},

m2:{art:'momo_river', text:'Mentre lavava i panni al fiume, da monte arrivò una grande pesca, plin plon, plin plon, portata dalla corrente.', choices:[
  {t:'Portarla a casa', go:'m3a', set:{open:'home'}},
  {t:'Aprirla subito qui', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Issa, issa! La vecchietta portò la pesca fino a casa.\nInsieme al vecchietto la aprì subito, e allora...', next:'c_paka'},
m3b:{art:'momo_river', text:'La vecchietta non riusciva più ad aspettare. Decise di aprire la pesca lì sul posto, su una pietra della riva. E allora...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'Crac!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'Ne saltò fuori un bambino pieno di vita!\nLa vecchietta prese in braccio il neonato e corse a casa.\nInsieme al vecchietto, felicissimi, lo chiamarono Momotaro.'
  : 'Ne saltò fuori un bambino pieno di vita!\nFelicissimi, i due chiamarono Momotaro il bambino nato dalla pesca.', next:'m5'},

m5:{art:'kids', text:'A Momotaro piaceva tantissimo giocare con i bambini del villaggio.\nChe cosa fa Momotaro oggi?', choices:[
  {t:'Fare la lotta sumo', go:'m5a', set:{hobby:'sumo'}},
  {t:'Fare una corsa', go:'m5b', set:{hobby:'run'}},
  {t:'Dare una mano nei lavori', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Anche i bambini più grandi finivano a terra, uno dopo l\'altro.\n"Nessuno al villaggio è forte come lui!" dicevano tutti stupiti.', next:'m6'},
m5b:{art:'kids', text:'Non c\'era nessuno che corresse più veloce di Momotaro.\nCorreva come il vento, e tutti restavano a bocca aperta.', next:'m6'},
m5c:{art:'kids', text:'Anche la legna più pesante diventava leggera nelle braccia di Momotaro.\nPer il vecchietto e la vecchietta era un grande aiuto.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro crebbe in fretta e diventò un giovane forte e gentile.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'Quella notte.\nNel villaggio accadde qualcosa di terribile.'}, then:'m7'},
m7:{art:'village_sad', text:'La mattina dopo.\nSi seppe che gli orchi dell\'Isola degli Orchi avevano portato via il tesoro del villaggio.\nLa gente del villaggio non sapeva più che fare.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro si alzò in piedi.\n"Andrò all\'Isola degli Orchi e riprenderò il tesoro!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'La vecchietta gli preparò i migliori gnocchi di miglio di tutto il Giappone.\nSe li legò alla cintura: era pronto a partire.'
  : 'La vecchietta dice che gli preparerà i migliori gnocchi di miglio di tutto il Giappone.\nE ora, che cosa fare?', choices:[
  {t:'Farsene preparare tanti', go:'m10', set:{dango:'full'}},
  {t:'Prenderne pochi e viaggiare leggero', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'La mattina della partenza.\nLa vecchietta tirò fuori due fasce per la testa.\nQuale mettere?', choices:[
  {t:'La fascia bianca', go:'m10r', set:{band:'white'}},
  {t:'La fascia rossa', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Si strinse bene la fascia rossa intorno alla testa, e in fondo al petto sentì un gran calore.\n"Vado!"'
  : 'Si strinse bene la fascia bianca intorno alla testa, e nel cuore si fece silenzio e chiarezza.\n"Vado!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'Avanti, contro gli orchi!!'}, then:'m11'},

m11:{art:'michi', text:'La strada si divideva in due.\nUna passava per i monti, l\'altra costeggiava il mare.\nDa che parte andare?', choices:[
  {t:'Prendere la strada dei monti', go:'m11a', set:{road:'yama'}},
  {t:'Prendere la strada lungo il mare', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Dalla cima del monte vide lontano nel mare una piccola isola nera.\nQuella è l\'Isola degli Orchi...\nMomotaro strinse forte i pugni.', next:'m12'},
m11b:{art:'umizoi', text:'Camminò sulla spiaggia ascoltando il rumore delle onde.\nAi suoi piedi trovò una bella conchiglia rosa pesca.\nSarà un regalo per la vecchietta.', next:'m12'},

m12:{art:'dog', text:'Mentre camminava, arrivò trotterellando un Cane.\n"Momotaro, dove vai? Se mi dai uno gnocco di miglio, vengo con te!"', choices:[
  {t:'Dargli uno gnocco', go:'c_dog_join', set:{dog:1}},
  {t:'"Scusa, ho fretta"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'Il Cane si unisce al gruppo!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Ne ho pochi, ma li dividiamo a metà."\nIl Cane scodinzolò forte forte per la gioia!'
  : 'Il Cane scodinzolò forte forte per la gioia!\n"Ti seguo dovunque tu vada!"', next:'m13'},
m12n:{art:'dog', text:'Un po\' dispiaciuto, il Cane guardò Momotaro allontanarsi.', next:'m13'},

m13:{art:'saru', text:'Poi una Scimmia chiamò dall\'alto di un albero.\n"Se mi dai uno gnocco di miglio, ti faccio da guida!"', choices:[
  {t:'Darle uno gnocco', go:'c_saru_join', set:{saru:1}},
  {t:'"Scusa, devo andare avanti"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'La Scimmia si unisce al gruppo!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Anche del piccolo pezzo di gnocco la Scimmia fu felicissima.\nScese svelta dall\'albero e si diede un colpetto sul petto.'
  : 'La Scimmia scese svelta dall\'albero e si diede un colpetto sul petto.\n"Lascia fare a me!"', next:'m14'},
m13n:{art:'saru', text:'La Scimmia salutò con la mano dall\'alto dell\'albero.', next:'m14'},

m14:{art:'kiji', text:'Dal cielo scese in volo un Fagiano.\n"Se mi dai uno gnocco di miglio, vado a vedere dall\'alto com\'è l\'Isola degli Orchi!"', choices:[
  {t:'Dargli uno gnocco', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Scusa, devo proprio andare"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'Il Fagiano si unisce al gruppo!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'Il Fagiano mangiò il suo mezzo gnocco con molta cura.\nPoi aprì le ali contento e fece un giro nel cielo.'
  : 'Il Fagiano aprì le ali contento e fece un giro nel cielo.\n"Del cielo mi occupo io!"', next:'m15'},
m14n:{art:'kiji', text:'Il Fagiano fece un grande giro e volò via verso i monti.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'Al porto c\'era una piccola barca.';
  if(n===0) t += '\nNon aveva compagni, ma Momotaro aveva già deciso.';
  else if(n===1) t += '\nIn due salirono a bordo e unirono le forze.';
  else t += '\nCon tutti a bordo, la barca era piena piena.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Si saaalpa!!'}, then:'m16'},

m16:{art:'fune_night', text:'Di notte il mare era calmo.\nSotto il cielo stellato, Momotaro pensava.', choices:[
  {t:'Ricordare il sapore degli gnocchi della vecchietta', go:'m17', set:{think:'dango'}},
  {t:'Pensare al tesoro del villaggio', go:'m17', set:{think:'takara'}},
  {t:'Chiedersi come sono gli orchi', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'Il sapore dolce degli gnocchi di miglio sembrava dargli coraggio.\nDomani andrà tutto bene di sicuro.',
  takara:'Gli tornarono in mente i volti di tutti al villaggio.\nDeve assolutamente riportare indietro il tesoro.',
  oni:'Saranno forti? Saranno spaventosi?\n...Non lo saprà finché non li avrà incontrati.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'Nella luce del mattino l\'isola si avvicinava sempre di più.';
  if(f.first) t += '\nIl Fagiano volò avanti e mostrò a tutti dov\'era l\'isola.';
  else if(f.kiji) t += '\nIl Fagiano volò avanti e tornò subito indietro.\n"C\'è un grande portone! E dietro c\'è un sentiero fra le rocce!"';
  else t += '\nA prua della barca, Momotaro guardava dritto verso l\'isola.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'Eccola, l\'Isola degli Orchi!'}, then:'m19'},

m19:{art:'onigashima', text:'Sull\'isola di roccia si ergeva un grande portone nero.\nE ora, da dove entrare?', choices:f=>[
  {t:'Entrare dal portone principale a testa alta', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Prendere il sentiero fra le rocce trovato dal Fagiano', go:'m20', set:{gate:'back'}}
    : {t:'Girare intorno all\'isola e cercare un passaggio', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro si fermò davanti al portone a petto in fuori.\n"Orchi! Sono venuto a riprendere il tesoro del villaggio!"'
  : (f.kiji
    ? 'Guidati dal Fagiano, salirono in silenzio per il sentiero fra le rocce.\nLe guardie degli orchi non si erano accorte di niente.'
    : 'Fra le rocce trovarono un sentiero stretto.\nSalirono piano piano, e le guardie degli orchi non si accorsero di niente.'), next:'m21'},
m21:{art:'onigashima', text:'Il cuore cominciò a battere forte.\nEcco, ci siamo.', choices:[
  {t:'Fare un respiro profondo', go:'m21r', set:{calm:1}},
  {t:'Buttarsi dentro di slancio', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'Inspira, espira.\nIl cuore si calmò tutto d\'un colpo. Bene, andiamo.'
  : 'Prima ancora di pensare, il corpo si era già mosso!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'Con un rimbombo che scosse la terra, comparve il capo degli orchi!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'Chi sei tu!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Ridateci il tesoro!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Sono venuto a riprendere il tesoro del villaggio. Io sono Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(Ripensando al sapore degli gnocchi, stranamente la paura era sparita.)',
    takara:'(Tutto il villaggio aspetta. Non posso perdere!)',
    oni:'(È grande. Sembra forte. Ma... i suoi occhi sembrano un po\' tristi.)'
  }[f.think] || '');
  t += '\nCome combattere?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'Tutti insieme, ora!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Combattere con la spada!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Cane, tocca a te!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Scimmia, tocca a te!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Fagiano, tocca a te!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Riporre la spada e parlare', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'Tutti insieme, ora!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Il morso del Cane!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'La graffiata della Scimmia!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'La beccata del Fagiano!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'Il colpo di spada!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'La carica del Cane!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Il guizzo della Scimmia!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'La picchiata del Fagiano!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'Cosa?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'Colpito!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'Il Cane gli morse una gamba, la Scimmia gli graffiò la schiena, il Fagiano gli beccò la testa a colpi d\'ala.\nNemmeno il capo poteva resistere all\'attacco di tutti e 3 insieme.\n"M-mi arrendo!"\nQuando si uniscono le forze, non c\'è niente da temere.', next:'m24'},

rk:{art:'maitta', text:f=>'La spada di Momotaro si mosse veloce come un lampo!\nLa clava di ferro del capo volò in alto nel cielo.\n"M-mi arrendo!"\n' + HOBBY_LINE_IT(f), next:'m24'},
rd:{art:'maitta', text:'Il Cane si lanciò come il vento e morse il capo a una gamba!\nCon un gran tonfo il capo cadde a sedere.\n"M-mi arrendo!"\nMomotaro, che si era fidato del Cane, raddrizzò la schiena e rise.', next:'m24'},
rs:{art:'maitta', text:'La Scimmia saltava di qua e di là e strappò via la clava di ferro al capo.\n"M-mi arrendo!"\nDavanti alla rapidità della Scimmia, Momotaro applaudì senza accorgersene!', next:'m24'},
rj:{art:'maitta', text:'Il Fagiano piombò giù dal cielo! Colpi d\'ala, e il capo non vide più niente!\nAl capo girò la testa: "M-mi arrendo!"\nSui compagni del cielo si può contare davvero. Momotaro salutò con un grande gesto.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'Il capo si fece piccolo piccolo e chiese scusa.\n"Il tesoro ve lo restituiamo. Perdonateci..."';
  if(!f.first) t += '\nE ora, che cosa fare?';
  return t;
}, choices:[
  {t:'Tornare al villaggio con il tesoro', go:'e_gaisen'},
  {t:'Chiedere perché lo hanno portato via', go:'m25'}
]},
m25:{art:'talk', text:'Il capo cominciò a raccontare, un po\' alla volta.\n"L\'Isola degli Orchi è tutta rocce, i raccolti non crescono. Non volevo che i nostri bambini avessero fame..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro non mise mano alla spada e guardò dritto davanti a sé.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Voglio parlare!!'}, then:'t2'},
t2:{art:'talk', text:'Il capo spalancò gli occhi, poi cominciò a raccontare, un po\' alla volta.\n"L\'Isola degli Orchi è tutta rocce, i raccolti non crescono. Per i nostri bambini non ci restava che prendere in prestito il vostro tesoro..."\nMomotaro ascoltò il capo e si mise a pensare.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Dividere gli gnocchi di miglio con tutti', go:'e_kibi'});
  c.push({t:'Promettere: il tesoro torna indietro e si diventa amici del villaggio', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Insieme al carro carico di tesoro, Momotaro tornò al villaggio.\nTutto il villaggio esultò!\n';
  t += ({
    minna:'Il Cane, la Scimmia e il Fagiano sfilarono in testa, a petto in fuori.\nDelle imprese dei 3 compagni si parlò a lungo nel villaggio.',
    katana:'Al villaggio non si parlava d\'altro che dei colpi di spada di Momotaro.',
    dog:'A tirare il carro fu il Cane, il grande protagonista della giornata. Camminava in testa al corteo di festa, a petto in fuori.',
    saru:'La Scimmia portava sulla spalla la clava conquistata, tutta soddisfatta.',
    kiji:'Il Fagiano fece un giro nel cielo della festa e lasciò cadere una bella penna.'
  }[f.style] || '');
  if(f.shell) t += '\nAlla vecchietta diede anche la conchiglia rosa pesca.\n"Ci si sente il rumore del mare", disse ridendo la vecchietta.';
  t += '\nE vissero felici e contenti.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro ricevette il tesoro e in cambio mandò riso e patate da semina all\'Isola degli Orchi.\nDalla primavera dopo, gli orchi vennero ad aiutare nei campi del villaggio.\nE alla festa del villaggio risuonarono i tamburi degli orchi.';
  if(f.shell) t += '\nLa vecchietta faceva suonare la sua conchiglia a tempo con i tamburi.';
  t += '\nE vissero felici e contenti.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"Il tesoro ve lo restituiamo. È una promessa."\nMomotaro e il capo intrecciarono i mignoli.\nDa allora l\'Isola degli Orchi e il villaggio cominciarono piano piano a frequentarsi.\nMomotaro era tornato senza combattere, e la gente del villaggio lo lodò: "Che ragazzo in gamba!"';
  if(f.shell) t += '\nQuando mostrò la conchiglia, la vecchietta sorrise felice.';
  t += '\nE vissero felici e contenti.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Ecco, i migliori gnocchi di miglio di tutto il Giappone. Mangiamoli insieme."\nGli orchi si riempirono la bocca di gnocchi e giù lacrime a goccioloni.\n"Non abbiamo mai mangiato niente di così buono..."\nMomotaro e gli orchi tolsero insieme le rocce e prepararono un campo.\nÈ il finale più strano e più caldo di tutti.\nE vissero felici e contenti.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Questa è la storia di Aka, un giovane orco che vive sull\'Isola degli Orchi.\nL\'Isola degli Orchi è tutta rocce. Anche se preparano un campo, i raccolti non crescono.', next:'o2'},
o2:{art:'oni_village', text:'Che lavoro fa Aka oggi?', choices:[
  {t:'Portare su l\'acqua dai piedi della scogliera', go:'o2r', set:{owork:'mizu'}},
  {t:'Portare via le rocce dal campo', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Con il secchio pesante sulla spalla, saliva e risaliva il sentiero della scogliera.\nSopra, i fratellini aspettano con la gola secca secca.'
  : 'Anche spostando una grossa roccia, la terra sotto era dura come pietra.\nEppure Aka crede che un giorno qui crescerà un campo.', next:'o3'},
o3:{art:'oni_dinner', text:'Per cena c\'era solo una zuppa di riso liquida.\nIl fratellino Midori disse:\n"Fratellone, ho fame..."', choices:[
  {t:'Dirgli: "In primavera mangeremo a sazietà"', go:'o3r', set:{care:'hagemasu'}},
  {t:'Dargli metà della propria zuppa', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"Anche la parte del fratellone è buona!"\nMidori sorrise contento.\nLo stomaco di Aka restò un po\' vuoto, ma nel petto si sentiva caldo.'
  : 'Midori fece un piccolo cenno con la testa e mangiò con cura il resto della sua zuppa.\nAlla primavera manca ancora tanto.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'Quella notte.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'Il capo riunì tutti e disse:\n"Prendiamo in prestito il tesoro del villaggio. Serve ai bambini per passare l\'inverno."\nNel petto di Aka qualcosa si agitò.\nChe cosa fare?', choices:[
  {t:'Fermarli: "Ma quello è un furto!"', go:'c_dorobo'},
  {t:'Stare zitto e andare con loro', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'Ma quello è un furto!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Tutt\'intorno si fece silenzio.\nIl capo restò zitto per un tempo lunghissimo...\n"E allora che cosa dovremmo fare?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka pensò con tutte le sue forze.', choices:[
  {t:'Andare a chiedere aiuto alla gente del villaggio', go:'o7a'},
  {t:'Fare un campo con le proprie mani', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"Chiniamo la testa e chiediamo che dividano il cibo con noi. In cambio li ringraziamo con la forza degli orchi."\nIl capo incrociò le grosse braccia e annuì lentamente.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'Il giorno dopo gli orchi salirono su una barca e andarono al villaggio.\nNon portavano armi, ma ceste piene di uva selvatica.\nCi voleva molto, molto più coraggio che portare via un tesoro.\nE la risposta del villaggio... quella è un\'altra storia.'},
o7b:{art:'oni_village', text:'"Togliamo tutte le rocce e facciamo un campo! Con la forza degli orchi ce la possiamo fare!"\nDa quel giorno tutti gli orchi dell\'isola cominciarono a portare via le rocce.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Forza degli orchi, al massimo!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'Le rocce erano grandi come montagne e il lavoro non finiva mai.\nMa che strano: il sudore versato tutti insieme non pesava affatto.\nArrivò la primavera e nel campo spuntarono piccoli germogli.\nMidori saltò e ballò dalla gioia.\nE vissero felici e contenti.'},

o5b:{art:'oni_raid', text:'Aka salì sulla barca con il capo e gli altri.\nAnche arrivato al villaggio, Aka non riuscì a muoversi dalla barca.\nIn lontananza tremolavano delle luci, e gli parve di sentire qualcuno che piangeva.', next:'o6b'},
o6b:{art:'oni_takara', text:'Anche tornato sull\'isola, nel petto di Aka restò quell\'inquietudine.\nDavanti al tesoro ammucchiato, Aka si mise a pensare.', choices:[
  {t:'Riportare indietro di nascosto un pezzo del tesoro', go:'o7c'},
  {t:'Non fare niente, mentre la notte passa', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka prese un piccolo pezzo del tesoro e uscì in barca nel mare notturno.\nLo posò piano sulla spiaggia del villaggio, e proprio mentre stava per tornare...\n"Signor orco, sei venuto a riportarlo indietro?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Scoperto?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'Una bambina piccola stava lì e guardava Aka in silenzio.\nCon il cuore che batteva, Aka annuì con la testa.\nLa bambina sorrise e disse a voce bassa:\n"Grazie. Sarà il nostro segreto."\nEra una notte fredda, eppure nel petto di Aka si stava caldi caldi.'},

o7d:{art:'oni_night', text:'Senza riuscire a fare niente, Aka vide passare tante notti.\nUna sera, mentre non riusciva a dormire e guardava il mare dall\'alto della scogliera, da lontano si avvicinò una piccola barca.\nChi ci sarà su quella barca?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'Si fece giorno.'}, then:'o8'},
o8:{art:'oni_village', text:'Su tutta l\'isola scoppiò un gran trambusto.\n"Un umano! Un umano con la fascia in testa sta venendo qui!"\nIl cuore di Aka fece un salto.\nChe cosa fare?', choices:[
  {t:'Nascondere Midori dietro le rocce', go:'o9a', set:{guard:'midori'}},
  {t:'Correre accanto al capo', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Ssst. Qui sei al sicuro."\nAka strinse forte la manina di Midori.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'Il capo stringeva la clava di ferro e fissava il portone.\nLa sua schiena sembrava più grande del solito.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'Il combattimento durò un attimo.\nLa clava di ferro del capo volò via, e Aka guardava dal suo nascondiglio trattenendo il fiato.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'M-mi arrendo!!'}, then:'o11'},
o11:{art:'oyabun', text:'Il giovane umano con la fascia ripose la spada e stava parlando di qualcosa.\nForse adesso Aka potrebbe rivolgergli la parola.\nChe cosa fare?', choices:[
  {t:'Farsi coraggio e uscire dal nascondiglio', go:'e_o_asa'},
  {t:'Restare nascosto e guardarli andare via', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"S-scusa! Ti aiuto io a portare il tesoro!"\nQuando Aka saltò fuori dal nascondiglio, il giovane spalancò gli occhi.\nPoi sorrise e disse:\n"Grazie. Sei un orco coraggioso."\nIl sole del mattino scaldava tutti e due.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'Il coraggio di parlare non arrivò.\nLa barca carica di tesoro diventava sempre più piccola in mezzo al mare.\nMa Aka aveva deciso.\nLa prossima volta dirà di sicuro "grazie" e anche "scusa".\nE quella "prossima volta" arriverà di sicuro, in un futuro non tanto lontano.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Questa è un\'altra storia ancora: la storia di un Fagiano che vive sui monti.\nIl Cane è forte. La Scimmia è una campionessa nell\'arrampicarsi sugli alberi.\nLui invece è piccolo e non ha forza...\nIl Fagiano non aveva mai avuto molta fiducia in sé.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Con ali così piccole\nnon si può fare niente?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Anche oggi una passeggiata nel cielo, da solo.\nDove volare?', choices:[
  {t:'Volare sopra i monti', go:'k2r', set:{kfly:'yama'}},
  {t:'Volare verso il mare', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Dall\'alto dei monti il villaggio sembra una scatola di giocattoli.\nDai camini saliva il fumo, sbuffo dopo sbuffo.'
  : 'Sopra il mare il vento è forte e le penne sbattono rumorose.\nLontano si vedeva una piccola isola nera, tutta sola.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'Un giorno, sulla strada in basso, vide passare uno strano corteo.\nUn giovane con la fascia in testa, un Cane e una Scimmia.\nSembra che si stiano divertendo.', choices:[
  {t:'Farsi coraggio e chiamarli', go:'k4a'},
  {t:'Guardare ancora un po\' dal cielo', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'Il Fagiano scese giù sbattendo le ali e disse con tutta la voce che aveva:\n"P-posso venire anch\'io con voi?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Mentre li seguiva piano dal cielo, il giovane se ne accorse e salutò con la mano.\n"Amico del cielo, vieni anche tu con noi!"', next:'k5'},
k5:{art:'kiji_join', text:'"Ecco, uno gnocco di miglio per te."\nEra dolce da leccarsi i baffi.\n"I-in cambio, lasciate il cielo a me!"\ndisse il Fagiano con tutta la voce che aveva.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'Il Fagiano si unisce al gruppo!!'}, then:'k6'},
k6:{art:'fune', text:'Sulla barca il Fagiano si accorse di una cosa.\nVolare sopra il mare può farlo solo lui.\nNé il Cane né la Scimmia ci riescono.', choices:[
  {t:'Volare alto e guardare tutta l\'isola', go:'k6r', set:{kscout:'high'}},
  {t:'Volare basso ed esaminare il portone da vicino', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Dall\'alto del cielo vide tutta la forma dell\'isola.\nDietro il portone si vede anche un sentiero stretto fra le rocce.\n"Amici, c\'è una via da dietro!"'
  : 'Volando rasente le onde arrivò fino al portone.\nQuante guardie c\'erano e quanto erano grandi le loro clave: guardò tutto per bene.\n"Amici, so esattamente che cosa ci aspetta!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'Cominciò il combattimento con il capo degli orchi!\nLa clava di ferro del capo calò fischiando sul Cane.\nAl Fagiano il cuore fece un salto.\nChe cosa fare?', choices:[
  {t:'Volargli davanti agli occhi!', go:'c_kwaza1'},
  {t:'Avvisare tutti a gran voce!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'La picchiata del Fagiano!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'Cosa?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Senza pensarci, il Fagiano volò davanti alla faccia del capo.\nColpi d\'ala, e il capo non vide più niente!\nIn quel momento il Cane scattò di lato e la Scimmia gli portò via la clava.\n"M-mi arrendo!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Cane, dietro di te!!'}, then:'k8b'},
k8b:{art:'maitta', text:'Una voce grande come l\'eco dei monti risuonò sul campo di battaglia.\nIl Cane schivò con un balzo e la spada di Momotaro lampeggiò.\n"M-mi arrendo!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Dopo il combattimento Momotaro disse:\n"Il merito più grande oggi è del Fagiano."\nAnche il Cane e la Scimmia annuirono con forza.\nIn fondo al piccolo petto si accese un calore.\nAnche chi è piccolo può fare qualcosa.\nIl Fagiano non abbassa più la testa.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Senza quella voce sarebbe andata male", disse il Cane.\n"Tenere d\'occhio il cielo può farlo solo il Fagiano", disse la Scimmia.\nIl Fagiano si vergognò e nascose la faccia dietro un\'ala.\nAnche chi è piccolo può fare qualcosa.\nIl Fagiano non abbassa più la testa.'}

};

function HOBBY_LINE_IT(f){
  return {
    sumo:'La forza dei fianchi, allenata con il sumo, servì proprio al momento giusto.',
    run:'Le gambe, allenate nelle corse, non le batte nessuno.',
    help:'Le braccia, allenate ogni giorno dando una mano, non sono lì per bellezza.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (IT) ================= */
var ZK_IT = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Trionfo: tutti insieme',    h:'Combattere con tutti e 3 i compagni insieme...'},
  {id:'a_katana', n:'Trionfo: la spada',         h:'Combattere con la spada e riportare a casa il tesoro...'},
  {id:'a_dog',    n:'Trionfo: il Cane',          h:'Far combattere il Cane e riportare a casa il tesoro...'},
  {id:'a_saru',   n:'Trionfo: la Scimmia',       h:'Far combattere la Scimmia e riportare a casa il tesoro...'},
  {id:'a_kiji',   n:'Trionfo: il Fagiano',       h:'Far combattere il Fagiano e riportare a casa il tesoro...'},
  {id:'b_naka',   n:'Pace con gli orchi',        h:'Dopo la vittoria, chiedere il motivo...'},
  {id:'c_yaku',   n:'La promessa dei mignoli',   h:'Andare senza compagni e riporre la spada...'},
  {id:'d_kibi',   n:'Il miracolo degli gnocchi', h:'Portare tanti gnocchi, andare da soli e riporre la spada...'},
  {id:'o_negai',  n:'Le ceste di uva selvatica', h:'Nella storia degli orchi, intervenire e scegliere di chiedere...'},
  {id:'o_hatake', n:'Il campo dell\'Isola degli Orchi', h:'Nella storia degli orchi, intervenire e scegliere il campo...'},
  {id:'o_kaesu',  n:'Il segreto della spiaggia notturna', h:'Andare in silenzio con gli altri e riportare il tesoro...'},
  {id:'o_asa',    n:'La promessa del sole del mattino', h:'Nel mattino in cui non si è potuto fare nulla, farsi coraggio...'},
  {id:'o_miokuri',n:'Un giorno le parole',       h:'Senza coraggio, guardare la barca allontanarsi...'},
  {id:'k_hero',   n:'Il piccolo eroe',           h:'Nella storia del Fagiano, buttarsi in mezzo...'},
  {id:'k_voice',  n:'La sentinella del cielo',   h:'Nella storia del Fagiano, gridare a gran voce...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_IT, ZK_IT };
