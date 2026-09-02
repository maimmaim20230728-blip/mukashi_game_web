"use strict";
/* La rapa gigante - Italian scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "Oh, issa! Oh, issa!!" / "Plop, fuori!!" */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  /* soggetto / "a" + articolo (tenersi stretto a) / accordo di genere per "stretto" */
  var NAMES_IT = { baa:'la nonna', mago:'la nipotina', inu:'il cane', neko:'il gatto', nezumi:'il topolino', jii:'il nonno' };
  var A_IT = { baa:'alla nonna', mago:'alla nipotina', inu:'al cane', neko:'al gatto', nezumi:'al topolino', jii:'al nonno' };
  var STRETTO_IT = { baa:'stretta', mago:'stretta', inu:'stretto', neko:'stretto', nezumi:'stretto', jii:'stretto' };

  function chainIt(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return 'Il nonno afferrò la rapa.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(NAMES_IT[order[i]]) : NAMES_IT[order[i]]) + ' si teneva ' + STRETTO_IT[order[i]] + ' ' + A_IT[order[i+1]] + ',\n';
    }
    t += 'e il nonno si teneva stretto alla rapa.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_IT = {

  /* ================= La rapa gigante ================= */

  kb1:{art:'kabu_hata', text:'Questa è la storia di un campo grande, grande.\nUna mattina di primavera il nonno seminò un seme di rapa.\n"Diventa una rapa dolce, dolce. Diventa una rapa grande, grande."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Ogni giorno il nonno si prendeva cura della rapa.\nA che cosa deve badare di più?', choices:[
    {t:'Annaffiarla bene ogni giorno', go:'kb2r', set:{care:'mizu'}},
    {t:'Parlarle con gentilezza ogni giorno', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Diventa grande, diventa grande."\nOgni volta che le parlava, le foglie sembravano dondolare di gioia.'
    : 'Con la luce del sole e tanta acqua\nle foglie crescevano sempre più su, sempre più su.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'La rapa crebbe e crebbe, finché diventò più alta del nonno stesso.\nUna rapa così non l\'aveva mai vista nessuno nel villaggio.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Ecco, era arrivato il giorno del raccolto.';
    if(f.first) return t + '\nIl nonno si rimboccò le maniche.';
    return t + '\nChe cosa deve fare?';
  }, choices:f=>{
    var c = [{t:'Provare subito a tirarla fuori', go:'kb5'}];
    c.push({t:'Farla crescere ancora di più', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Provare a chiedere gentilmente alla rapa', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'Il nonno afferrò la rapa e tirò con tutte le sue forze!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Oh, issa! Oh, issa!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'La rapa non si mosse per niente.';
    if(f.first) return t + '\n"Nonna, vieni a darmi una mano!"';
    return t + '\nChi deve chiamare?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chiamare '+NAMES_IT[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_IT[f.c2])+' arrivò e si mise in fondo alla fila.\n'+chainIt(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Oh, issa! Oh, issa!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'La rapa non si muoveva ancora nemmeno un po\'.';
    if(f.first) return t + '\n"Adesso chiamiamo la nipotina."';
    return t + '\nChi chiamano adesso?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chiamare '+NAMES_IT[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_IT[f.c3])+' arrivò e si mise in fondo alla fila.\n'+chainIt(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Oh, issa! Oh, issa!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'Le foglie dondolarono avanti e indietro. Nient\'altro.';
    if(f.first) return t + '\n"Bene, chiamiamo anche il cane."';
    return t + '\nChi chiamano adesso?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chiamare '+NAMES_IT[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_IT[f.c4])+' arrivò e si mise in fondo alla fila.\n'+chainIt(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Oh, issa! Oh, issa!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Zac. Si mosse solo un pochino... forse.';
    if(f.first) return t + '\n"Vieni anche tu, gatto!"';
    return t + '\nChiamiamo l\'ultimo aiuto.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chiamare '+NAMES_IT[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_IT[f.c5])+' arrivò e si mise in fondo alla fila.\n'+chainIt(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Oh, issa! Oh, issa!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'Era quasi fuori, ma non usciva. Mancava davvero pochissimo.\nE non c\'era più nessuno da chiamare.';
    if(f.first) return t;
    return t + '\nChe cosa fanno?';
  }, choices:[
    {t:'Non arrendersi. Ancora una volta!', go:'kb10', set:{nezumi:1}},
    {t:'Per oggi basta così', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Allora il gatto corse via veloce\ne portò con sé un topolino piccolo piccolo.\n"Abbiamo bisogno della tua forza."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Proprio io...?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Oh, issa! Oh, issa!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'La rapa volò su in alto nel cielo\ne tutti caddero seduti per terra.\nAhia... ma su ogni faccia c\'era un gran sorriso.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Finalmente la rapa venne fuori.\nL\'ultima spinta la diede il topolino più piccolo di tutti.\nAnche una forza piccola, unita a quella di tutti, diventa la più grande del mondo.\nE vissero felici e contenti.'},

  /* ---- Let it grow → La festa di tutto il villaggio ---- */
  km1:{art:'kabu_sodatsu', text:'"Se è arrivata fin qui, vediamo quanto può diventare grande."\nAcqua e canzoni, e ogni giorno, ogni giorno il nonno continuò a curarla.\nAlla fine la rapa diventò più grande della casa del nonno.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'Ormai per la famiglia da sola era davvero impossibile.\nIl nonno salì sulla collina e gridò:\n"Ehiii! Gente del villaggio! Venite a darci una mano!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'Tutto il villaggio, adunata!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'Venne il fornaio, venne il mugnaio, vennero i bambini.\nTutto il villaggio si mise in una sola lunga fila.\nE in fondo alla fila, naturalmente, c\'era il topolino.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Oh, issa! Oh, issa!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'La rapa appena uscita finì in una pentola grande, grande.\nDietro il vapore risuonavano le risate di tutti.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'La rapa più grande del mondo diventò la festa più grande del mondo.\nLa dolce zuppa di rapa scaldò la pancia di tutto il villaggio.\n"L\'anno prossimo facciamone un\'altra bella grande!"\nE vissero felici e contenti.'},

  /* ---- Ask the turnip → Il cuore della rapa ---- */
  ko1:{art:'kabu_talk', text:'Il nonno si sedette davanti alla rapa.\n"È la voce con cui le ho parlato ogni giorno. Di sicuro le arriverà."\n"Cara rapa. Non vorresti venire fuori adesso?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'Le foglie dondolarono una volta.\nLa terra si gonfiò e si sollevò, e poi...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'Mi hai chiamata?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"Sei tu che mi hai parlato ogni giorno, vero, nonno?\nTi riconosco benissimo dalla voce.\nVa bene. Allora arrivo. Uno, due..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'La rapa saltò fuori da sola, plop.\nAnche senza forza, un cuore può arrivare a un altro cuore.\nQuel "diventa grande" di ogni giorno era una parola magica.\nE vissero felici e contenti.'},

  /* ---- Call it a day → Domani di nuovo tutti insieme ---- */
  ka1:{art:'kabu_yuyake', text:'"Per oggi basta così. Avete aiutato tutti tanto."\nNel campo al tramonto bevvero del tè caldo.\nAnche la rapa, per oggi, si riposò con calma.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Domani ci riproviamo, tutti insieme."\nSe lo dissero e tornarono ognuno a casa propria.\nVa bene anche se c\'è un giorno in cui non esce.\nPerché adesso c\'è un domani da aspettare.\nE vissero felici e contenti.'},

  /* ================= La storia della rapa ================= */

  kt1:{art:'kt_tsuchi', text:'Questa è la storia di quello che c\'è sotto terra.\nIo sono la rapa. Cresco al calduccio, proprio in mezzo al campo grande.\nDa sopra, ogni giorno, sento la voce del nonno.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Anche sotto terra ci sono tante cose belle.\nChe cosa faccio oggi?', choices:[
    {t:'Chiacchierare con il lombrico', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Assaporare con calma il gusto del sole', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Sei diventata di nuovo più grande", dice il lombrico.\n"Eh eh. Perché ogni giorno sento una bella voce."'
    : 'Dalle foglie scende piano piano il gusto del sole.\nÈ dolce, tiepido e fa venire un po\' di sonno.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'E poi, un giorno.\nStrattone!\n"Ehi, ehi, che succede?"\nQualcuno mi tira verso l\'alto. È arrivato il giorno del raccolto.', next:'kt4'},
  kt4:{art:'kt_up', text:'E adesso, che cosa fa la rapa?', choices:[
    {t:'Non voglio ancora uscire! Tenere duro', go:'kt5'},
    {t:'Va bene, andiamo a vedere il mondo di fuori', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"Voglio restare ancora qui!"\nLa rapa mise tutta la forza nelle radici e tenne duro con tutte le sue forze.\nDa sopra: "Oh, issa! Oh, issa." E c\'era sempre più baccano.', next:'kt6'},
  kt6:{art:'kt_up', text:'Due, tre, quattro...\nLa rapa continuò a tenere duro, e alla fine sentì una vocina piccolissima.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Ti prego, cara rapa'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Contro la forza posso tenere duro quanto voglio.\nMa se una vocina così piccola me lo chiede...\n"...Va bene, non c\'è niente da fare."\nE la rapa allentò piano le radici.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'Il cielo era altissimo e i sorrisi di tutti brillavano.\n"Ma guarda. Anche fuori non si sta male."\nLa rapa, che non aveva ceduto alla forza grande,\nnon riuscì a resistere a una piccola supplica.\nE vissero felici e contenti.'},

  ktj1:{art:'kt_up', text:'"A proposito, di che colore sarà il cielo?"\nLa rapa cominciò a sentire un formicolio.\n"Va bene, esco da sola. Uno, due..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'Saltò fuori con tanto slancio\nche tutti quanti caddero seduti per terra.\n"Ma allora il cielo è così grande!"\nSaltare fuori per propria scelta era una sensazione bellissima.\nE vissero felici e contenti.'},

  /* ================= La storia del topolino ================= */

  kn1:{art:'kn_naya', text:'Questa è la storia di un topolino che vive nell\'angolo del fienile.\nI lavori di forza non fanno per lui. Le cose pesanti non riesce a portarle.\nMa anche oggi corre qua e là pieno di energia.', next:'kn2'},
  kn2:{art:'kn_naya', text:'Che cosa fa il topolino oggi a mezzogiorno?', choices:[
    {t:'Cercare un pezzetto di formaggio', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Prendere il sole vicino alla finestra', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'Il posticino di sole vicino alla finestra è il posto migliore del mondo.\nCon i baffi ben tesi, un pisolino, un pisolino.'
    : 'In fondo al fienile c\'è un buon profumo.\nTrovato un pezzetto di formaggio, le guance sono belle piene.', next:'kn3'},
  kn3:{art:'kn_neko', text:'Proprio allora arrivò il gatto.\nUn altro giorno il topolino sarebbe scappato. Ma oggi il gatto chinò la testa con gentilezza.\n"Ho una cosa da chiederti. Ci serve la tua forza."', choices:[
    {t:'Fa paura, ma andare con lui', go:'kn3a'},
    {t:'Chiedere: "Vado bene proprio io?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Con il cuore che batteva forte, il topolino seguì il gatto.\nArrivati al campo, tutti aspettavano con la faccia preoccupata.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"Proprio perché sei piccolo", disse il gatto.\n"Dicono che in fondo alla fila deve stare il più leggero."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'Il topolino si mise in fondo alla fila.\nDavanti a lui, una schiena grande dopo l\'altra.\nChe cosa può fare un topolino piccolo?', choices:[
    {t:'Tirare forte con la coda', go:'kns1'},
    {t:'Dare il tempo a voce alta', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'Il topolino attorcigliò la propria coda a quella del gatto\ne tirò con tutto il suo piccolo corpo!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Oh, issa! Oh, issa!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"L\'ultima spinta l\'hai data tu", disse il nonno.\nUna coda piccola, un\'impresa grande.\nDa quel giorno il topolino non mangia più nell\'angolo del fienile,\nma in mezzo a tutti gli altri.\nE vissero felici e contenti.'},

  kno1:{art:'kn_retsu', text:'Se la forza non basta, c\'è la voce!\nIl topolino fece un bel respiro profondo e gridò più forte che poteva.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Uno, due! Oh, issa!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'Plop, fuori!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Grazie a quella voce, le forze di tutti si unirono nello stesso momento.\n"Hai dato un bel tempo", disse la nonna ridendo.\nAnche con poca forza, c\'è una voce che mette tutti insieme.\nIl topolino gonfiò il petto e fece "squit".\nE vissero felici e contenti.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'La nonna arrivò e si mise dietro al nonno.\nLa nonna si teneva stretta al nonno, e il nonno si teneva stretto alla rapa.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Oh, issa! Oh, issa!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'La rapa non si muoveva ancora nemmeno un po\'.\nAdesso arrivò la nipotina e si mise in fondo alla fila.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Oh, issa! Oh, issa!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'Le foglie dondolarono avanti e indietro. Nient\'altro.\nAdesso arrivò di corsa il cane e si mise in fondo alla fila.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Oh, issa! Oh, issa!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Zzz. Sembrò muoversi appena un pochino...\nAdesso arrivò di slancio il gatto e si mise in fondo alla fila.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Oh, issa! Oh, issa!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'Era quasi fuori, ma non usciva. Mancava davvero pochissimo.\nAllora il gatto andò a prendere un topolino piccolo piccolo.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_IT);

  T.ZK_EN.push(
    {section:'La rapa gigante'},
    {id:'kb_seishi',  n:'Finalmente è uscita',              h:'La storia originale, quella del primo giro'},
    {id:'kb_matsuri', n:'La festa di tutto il villaggio',   h:'Non tirarla e lasciarla crescere ancora di più...'},
    {id:'kb_onegai',  n:'Il cuore della rapa',              h:'Parlarle con gentilezza ogni giorno mentre cresce...'},
    {id:'kb_ashita',  n:'Domani di nuovo tutti insieme',    h:'Nei giorni in cui non esce, non forzare...'},
    {id:'kt_koe',     n:'Vinta da una vocina',              h:'Nella storia della rapa, tenere duro fino in fondo...'},
    {id:'kt_jibun',   n:'Fuori da sola, plop',              h:'Nella storia della rapa, incuriosirsi del mondo di fuori...'},
    {id:'kn_shippo',  n:'La grande impresa di una piccola coda', h:'Nella storia del topolino, usare la coda...'},
    {id:'kn_ondo',    n:'Il piccolo che dà il tempo',       h:'Nella storia del topolino, usare la voce...'}
  );

})();
