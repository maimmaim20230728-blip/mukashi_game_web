"use strict";
/* La gru che ricambiò la gentilezza - Italian scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_IT !== 'undefined') {
    T = { SCENES_EN: SCENES_IT, ZK_EN: ZK_IT };
  } else {
    T = require('./story_it.js');
  }

  var TSURU_IT = {

  /* ================= La gru che ricambiò la gentilezza ================= */

  ts1:{art:'ts_yuki_wana', text:'Questa è la storia di una gru salvata in un giorno di neve.\nUn giorno d\'inverno, mentre andava in città a vendere la legna,\nil vecchio trovò una gru presa in una trappola.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Trappola aperta!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'Il vecchio aprì la trappola e lasciò libera la gru.\nCon un grande battito d\'ali, la gru volò nel cielo di neve.';
    if(f.first) return t;
    return t + '\nChe cosa compra in città prima di tornare a casa?';
  }, choices:[
    {t:'Comprare del riso', go:'ts2r', set:{tslife:'kome'}},
    {t:'Comprare una caramella', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'Con il denaro della legna, il vecchio comprò una piccola caramella.\nUn regalo per la vecchia.'
    : 'Con il denaro della legna, il vecchio comprò un po\' di riso.\nQuanto bastava per la cena di quella sera.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'Quella notte la neve continuava a cadere.\nToc, toc. Qualcuno bussava alla porta.\nUna ragazza con un kimono bianco stava nella neve.\n"Ho perso la strada. Posso fermarmi per una notte?"', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Fatemi restare, per favore'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'Il vecchio e la vecchia fecero sedere la ragazza vicino al focolare.\nLa ragazza lavorava molto, e passarono tanti giorni insieme.\n"Lasciatemi restare qui con voi."\nI due cominciarono a pensare a lei come a una figlia.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'Un giorno la ragazza disse:\n"Compratemi del filo. Voglio tessere al telaio.\nMentre tesso, non aprite la porta di carta."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Tac-tac, clac-clac'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'Per 3 giorni e 3 notti il rumore del telaio uscì dalla stanza.\nLa mattina del 4° giorno la ragazza uscì con un tessuto bianco.\nEra bianco come la neve, e brillava.', next:'ts7'},

  ts7:{art:'ts_machi', text:'Il vecchio lo portò in città, e il tessuto fu venduto a caro prezzo.\nQuell\'inverno la casa rimase calda.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Siamo grati...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Ne tesserò un altro", disse la ragazza.\nDi nuovo, per 3 giorni e 3 notti, dalla stanza si sentì il telaio.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Tac-tac, clac-clac'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'Anche il 2° tessuto fu venduto a caro prezzo.\nMa il viso della ragazza era più pallido di prima.\n"Ne tesserò un altro", disse la ragazza.';
    if(f.first) return t;
    return t + '\nChe cosa fa il vecchio?';
  }, choices:[
    {t:'Dire: "Sì, tessi pure"', go:'ts10'},
    {t:'Dire: "Non devi più tessere"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'Il 3° tessuto.\nIl rumore del telaio era più lento di prima.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Tac... clac...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'La vecchia si fermò davanti alla stanza.\n(Starà bene, quella ragazza?)\n(Non ha filo. Che cosa starà tessendo?)';
    if(f.first) return t + '\nLa vecchia aprì la porta di carta, appena un poco.';
    return t + '\nChe cosa fa la vecchia?';
  }, choices:[
    {t:'Aprire un poco la porta di carta', go:'ts12'},
    {t:'Chiamarla soltanto e allontanarsi', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Dietro la porta di carta c\'era una gru.\nCon le proprie piume tesseva al telaio.\nLe piume erano un poco diminuite.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'Quella sera la ragazza si sedette davanti a loro due.\n"Io sono la gru salvata in un giorno di neve.\nLa mia vera forma è stata vista.\nNon posso più restare con l\'aspetto di una ragazza."';
    if(f.first) return t;
    return t + '\nChe cosa fanno i due?';
  }, choices:[
    {t:'Salutarla in silenzio', go:'ts14'},
    {t:'Aprire la porta e guardare il cielo', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'La ragazza riprese la forma di gru e volò nel cielo di neve.\nIl vecchio e la vecchia guardarono il cielo a lungo, a lungo.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'La gru, verso il cielo'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'La gru salvata in un giorno di neve tornò nel cielo.\nNella casa restarono 2 tessuti bianchi e un telaio con il lavoro non finito.\nFine.'},

  /* ---- Non devi più tessere ---- */
  tsm1:{art:'ts_kaoiro', text:'"Non devi più tessere. 2 tessuti bastano."\nCosì disse il vecchio.\nLa ragazza tacque un poco, poi rispose: "Sì."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'L\'inverno finì e arrivò la primavera.\nDal cielo venne il richiamo delle gru.\n"Io sono la gru salvata in un giorno di neve. Il mio stormo mi chiama."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'La ragazza riprese la forma di gru e volò dal suo stormo.\nNella casa restarono 2 tessuti bianchi.\nIl vecchio e la vecchia la seguirono con lo sguardo nel cielo di primavera.\nE vissero felici e contenti.'},

  /* ---- Un inverno senza sguardi ---- */
  tsn1:{art:'ts_nozoku', text:'"Non affaticarti troppo."\nLa vecchia la chiamò da fuori la porta di carta e si allontanò dalla stanza.\nDa dentro arrivò un "Sì."', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'Il 3° tessuto fu finito.\nEra il più bello di tutti.\nIl viso della ragazza era ancora pallido.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Arrivò la primavera, e dal cielo venne il richiamo delle gru.\n"Io sono la gru salvata in un giorno di neve.\nDi piume non ne ho più. Il mio stormo mi chiama."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'Il vecchio e la vecchia salutarono la ragazza sulla porta di casa.\nAnche senza guardare, l\'addio arrivò.\nMa in quell\'addio non c\'era nemmeno un segreto.\nE vissero felici e contenti.'},

  /* ---- Aprire la finestra ---- */
  tsd1:{art:'ts_mado', text:'La mattina dopo il vecchio aprì la porta.\nNel cielo sereno c\'era una gru.\nLa gru fece un giro sopra la casa e volò lontano.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'I due salutarono con la mano.\nSe la gru si sia voltata, non si sa.\nMa che abbia fatto un giro sopra la casa, se lo ricordarono per sempre.\nE vissero felici e contenti.'},

  /* ================= La storia della gru ================= */

  tz1:{art:'ts_yuki_wana', text:'Questa è la storia di una gru.\nIn un giorno di neve era caduta in una trappola e non poteva muoversi.\nUn vecchio che passava di lì le aprì la trappola.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'La gru volle ricambiare la gentilezza.\nCon quale aspetto si presenta?', choices:[
    {t:'Una ragazza con il kimono bianco', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Una ragazza in viaggio', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'La gru prese l\'aspetto di una ragazza in viaggio, con un cappello di paglia,\ne in una notte di neve bussò alla porta della casa.'
    : 'La gru prese l\'aspetto di una ragazza con il kimono bianco,\ne in una notte di neve bussò alla porta della casa.', next:'tz3'},
  tz3:{art:'tz_hane', text:'Per tessere al telaio servono le proprie piume.\nLe piume non sono infinite.\nLa gru tesseva contando le piume.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Ne restano solo queste'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Mentre tesseva il 3° tessuto, la porta di carta si aprì un poco.\nChe cosa fa la gru?', choices:[
    {t:'Continuare a tessere', go:'tzh1'},
    {t:'Fermare il telaio e guardare il cielo', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'La gru tessé fino alla fine.\nLe piume erano diminuite parecchio.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'La sua vera forma era stata vista, e così la gru lasciò la casa.\nPerché abbia tessuto fino alla fine, in questa storia non è scritto.\nFine.'},
  tzs1:{art:'tz_sora_ie', text:'La gru fermò il telaio e guardò il cielo dalla finestra.\nEra un cielo di primavera.\nQuella notte la gru lasciò la casa.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Vista dal cielo, la casa era piccola, e dentro brillava una sola luce.\nLa gru guardò quella luce per un poco.\nFine.'},

  /* ================= L'inverno della vecchia ================= */

  tb1:{art:'ts_irori', text:'Questa è la storia di una vecchia.\nLa ragazza arrivata in una notte di neve lavorava molto e rideva molto.\nLa vecchia non poteva fare a meno di volerle bene.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Mentre la ragazza tesse, che cosa fa la vecchia?', choices:[
    {t:'Preparare una zuppa calda', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Non lasciar spegnere il fuoco del focolare', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'La vecchia continuò ad aggiungere legna perché il fuoco del focolare non si spegnesse.\nPerché la stanza non diventasse fredda.'
    : 'La vecchia preparò una zuppa calda e la lasciò fuori dalla porta di carta.\nAl mattino la ciotola era vuota.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Dopo il 2° tessuto, il viso della ragazza era diventato pallido.\nLa vecchia andava avanti e indietro davanti alla stanza, tante volte.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'Mi ha detto di non guardare, ma...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'Quando ti dicono "non guardare", viene voglia di guardare.\nE ancora di più quando sei in pensiero.\nChe cosa fa la vecchia?', choices:[
    {t:'Aprire la porta di carta', go:'tbk1'},
    {t:'Sedersi davanti alla stanza e aspettare', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Dietro la porta di carta c\'era una gru.\nLa vecchia richiuse piano la porta di carta.\nMa quello che aveva visto non si poteva più cancellare.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'La ragazza riprese la forma di gru e volò via.\nLa voglia di guardare ce l\'hanno tutti.\nIn questa storia non c\'è nessuno che la chiami sbagliata.\nFine.'},
  tbh1:{art:'tb_hata_nokori', text:'La vecchia si sedette davanti alla stanza e ascoltò il rumore del telaio.\nTac-tac. Clac-clac.\nRestò così fino alla primavera.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Dopo che la ragazza se ne fu andata in primavera, nella stanza restò il telaio.\nLa vecchia lasciò il telaio com\'era e ogni giorno apriva la stanza.\nE vissero felici e contenti.'}

  };

  Object.assign(T.SCENES_EN, TSURU_IT);

  T.ZK_EN.push(
    {section:'La gru che ricambiò la gentilezza', note:'Nelle fiabe giapponesi ci sono molte storie in cui qualcuno se ne va appena la sua vera forma viene scoperta: una gru, un serpente, un usignolo. Non sono storie di punizione.'},
    {id:'ts_seishi',    n:'La gru nella neve',           h:'La storia come viene raccontata, fin dalla 1ª volta'},
    {id:'ts_mou',       n:'Non devi più tessere',        h:'Se prima del 3° tessuto il vecchio dice qualcosa...'},
    {id:'ts_nozokanai', n:'Un inverno senza sguardi',    h:'Se la vecchia la chiama soltanto e si allontana...'},
    {id:'ts_mado',      n:'Aprire la finestra',          h:'Se nella notte del distacco si apre la porta e si guarda il cielo...'},
    {id:'tz_hane',      n:'Il numero delle piume',       h:'Se nella storia della gru si continua a tessere fino alla fine...'},
    {id:'tz_sora',      n:'La casa vista dal cielo',     h:'Se nella storia della gru si ferma il telaio e si guarda il cielo...'},
    {id:'tb_kokoro',    n:'La voglia di guardare',       h:'Se nella storia della vecchia si apre la porta di carta...'},
    {id:'tb_hata',      n:'Il telaio incompiuto',        h:'Se nella storia della vecchia si aspetta davanti alla stanza...'}
  );

})();
