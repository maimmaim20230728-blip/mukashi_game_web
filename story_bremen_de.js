"use strict";
/* Die Bremer Stadtmusikanten - German scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   Feste Wendungen (Stadtmusikant / etwas Besseres als der Tod / der Ruf des Hahns /
   der noch warme Mund des letzten Erzaehlers) sind frei nachgedichtet, nicht woertlich
   aus dem Grimm-Original uebernommen. Keine Eigennamen fuer die Tiere. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var BREMEN_DE = {

  /* ================= Die Bremer Stadtmusikanten ================= */

  br1:{art:'br_koya', text:'Dies ist die Geschichte von einem Esel, der viele Jahre lang bei einem Herrn gearbeitet hat.\nIn der Mühle trug er Sack um Sack voll Mehl.\nDoch er wurde alt, und seine Kraft ließ nach.', next:'br2'},

  br2:{art:'br_koya', text:'Eines Tages merkte der Esel etwas.\n(Mein Herr überlegt, mir kein Futter mehr zu geben.)\nDa verließ der Esel die Mühle.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'Nach Bremen!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Ich will nach Bremen und dort Stadtmusikant werden."\nSo beschloss es der Esel und machte sich auf den Weg.';
    if(f.first) return t;
    return t + '\nWelchen Weg nimmt er?';
  }, choices:[
    {t:'Den Weg am Fluss entlang', go:'br3r', set:{brmichi:'kawa'}},
    {t:'Den Weg zwischen den Feldern', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'Auf dem Weg zwischen den Kornfeldern wehte der Wind frei.\nZum ersten Mal seit langer Zeit ging der Esel, ohne etwas zu tragen.'
    : 'Auf dem Weg am Fluss klang das Wasser angenehm.\nZum ersten Mal seit langer Zeit ging der Esel, ohne etwas zu tragen.', next:'br4'},

  br4:{art:'br_inu', text:'Am Wegrand lag ein Jagdhund.\nKeuch, keuch, mühsam ging sein Atem.\n"Was ist denn los, dass du so aus der Puste bist?"', next:'br5'},

  br5:{art:'br_inu', text:'"Ich bin alt geworden und kann nicht mehr auf die Jagd.\nDa wollte mein Herr mich töten.\nIch bin weggelaufen, aber wovon soll ich jetzt leben?"\n"Ich will nach Bremen und dort Musikant werden. Komm doch mit.\nIch spiele die Laute, und du schlägst die Trommel."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'Der Hund schließt sich an!!'}, then:'br6'},

  br6:{art:'br_neko', text:'Ein Stück weiter saß eine Katze auf einer Mauer.\nSie machte ein Gesicht wie drei Tage Dauerregen.', next:'br7'},

  br7:{art:'br_neko', text:'"Ich bin alt geworden, meine Zähne sind stumpf,\nund ich sitze lieber am Kamin, als Mäusen nachzujagen.\nDa wollte meine Herrin mich im Fluss ertränken."\n"Dann komm mit uns nach Bremen.\nBei Nachtmusik macht dir sicher niemand etwas vor."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'Bei Nachtmusik ...'}, then:'br8'},

  br8:{art:'br_ondori', text:'Auf dem Hoftor eines Bauernhauses krähte ein Hahn aus voller Kehle.\n"Das ist aber eine laute Stimme."\n"Morgen ist Sonntag, und es kommen Gäste.\nIch soll zu Suppe werden.\nDarum krähe ich, solange ich noch eine Stimme habe."', next:'br9'},

  br9:{art:'br_ondori', text:'"Irgendetwas ist besser als der Tod. Du hast eine gute Stimme.\nMach Musik mit uns. Daraus wird bestimmt etwas."\nDer Hahn sprang vom Tor herunter.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Kikeriki!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'Bremen war an einem Tag nicht zu erreichen.\nAls es Nacht wurde, wollten die 4 im Wald rasten.';
    if(f.first) return t + '\nDer Esel und der Hund unter einem Baum. Die Katze auf einem Ast. Der Hahn ganz oben.';
    return t + '\nWo rasten sie?';
  }, choices:[
    {t:'Unter dem Baum, alle zusammen', go:'br10r', set:{brmori:'shita'}},
    {t:'Auf einem hohen Ast, und Wache halten', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'Die Katze und der Hahn kletterten auf einen hohen Ast.\nUnten schliefen der Esel und der Hund Rücken an Rücken.'
    : 'Die 4 rollten sich unter einem großen Baum zusammen und schliefen.\nNur der Hahn kletterte vor dem Schlafen ganz nach oben.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Von ganz oben sah der Hahn in der Ferne ein Licht.\n"Dort steht ein Haus. Da brennt ein Licht."';
    if(f.first) return t + '\n"Gehen wir. Das Nachtlager hier ist nicht besonders gut", sagte der Esel.';
    return t + '\nWas tun sie?';
  }, choices:[
    {t:'Zum Haus mit dem Licht gehen', go:'br12'},
    {t:'Fernbleiben und die Nacht im Wald verbringen', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'Am Haus mit dem Licht angekommen, sah der Esel durch das Fenster.\n"Was siehst du?", fragte der Hahn.\n"Einen Tisch voller guter Sachen,\nund Räuber, die rundherum sitzen und essen."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"So etwas brauchen wir auch", sagte der Hahn.\nDie 4 steckten die Köpfe zusammen und berieten sich.', next:'br14'},

  br14:{art:'br_mado', text:'Der Esel stellte die Vorderfüße auf das Fensterbrett.\nDer Hund sprang ihm auf den Rücken,\ndie Katze kletterte auf den Hund,\nund ganz oben setzte sich der Hahn.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'Alle zusammen!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'Und dann sprangen sie alle auf einmal durch das Fenster.\nKlirr, das Glas zersprang!\nDie Räuber schrien "Ein Ungeheuer!" und flohen in den Wald.', next:'br16'},

  br16:{art:'br_gochisou', text:'Die 4 setzten sich an den Tisch.\nSie aßen, als hätten sie sich für vierzig Tage satt gegessen, löschten das Licht\nund legten sich jeder an seinen liebsten Platz schlafen.\nDer Esel in den Hof, der Hund an die Tür, die Katze an den Kamin, der Hahn auf den Dachbalken.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Mitternacht.'}, then:'br17'},

  br17:{art:'br_yoru', text:'Einer der Räuber kam zurück, um nachzusehen.\nIm Haus war es still. In der Küche glomm tief im Kamin etwas auf.\n(Das ist noch glühende Kohle.)\nDas dachte er und hielt ein Streichholz daran. Genau in diesem Augenblick.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'Kratz!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'Die Katze sprang ihm ins Gesicht und kratzte ihn.\nDer Räuber floh zur Hintertür. Dort wartete der Hund.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'Schnapp!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'Als er in den Hof hinauslief, trat ihn der Esel mit den Hinterbeinen.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'Tritt!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Oben auf dem Dach wachte der Hahn auf und krähte laut.\n"Kikeriki!"\nFür den Räuber klang das so:\n"Bringt mir den Kerl her!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'Eine Hexe! Ein Richter!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'Der Räuber floh in den Wald zurück und sagte zu den anderen:\n"In dem Haus sitzt eine schreckliche Hexe.\nSie spuckte mich an und zerkratzte mir mit langen Krallen das Gesicht.\nAn der Tür stand ein Mann mit einem Messer und stach mir ins Bein.\nIm Hof war ein schwarzes Ungeheuer und schlug mich mit einer Keule.\nUnd auf dem Dach saß ein Richter und schrie: Bringt mir den Kerl her!"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'Von da an kamen die Räuber nie wieder zurück.';
    if(f.first) return t;
    return t + '\nAm Morgen berieten sich die 4. Was tun sie?';
  }, choices:[
    {t:'In diesem Haus wohnen', go:'e_br_seishi'},
    {t:'Doch noch nach Bremen gehen', go:'brb1'},
    {t:'Im Haus entscheiden, was am Morgen geschieht', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'Den 4 Musikanten gefiel das Haus so gut,\ndass sie nicht mehr fort wollten.\nUnd wer diese Geschichte zuletzt erzählt hat, dem ist der Mund noch warm.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- In der Stadt Bremen ---- */
  brb1:{art:'br_roba', text:'"Das ist ein gutes Haus. Aber wir sind Musikanten."\nDie 4 schlossen das Haus ab und gingen wieder auf die Straße.', next:'brb2'},
  brb2:{art:'br_bremen', text:'Die Stadt Bremen war groß und voller Leben.\nUnd auf dem Marktplatz gab es die Stadtmusikanten schon.\nIhre Trompeten und Trommeln glänzten.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'... Dann eben hier.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'In einer Ecke des Platzes stimmten die 4 gemeinsam an.\nI-ah, wau, miau, kikeriki.\nErst kam ein Kind, dann noch eines, und nach und nach wurden es mehr.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Glänzende Instrumente hatten sie nicht.\nAber in die Ecke des Platzes kamen jeden Tag Kinder.\nIn einer Ecke der Stadt wurden die 4 zu Musikanten.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Morgen im Wald ---- */
  brm1:{art:'br_mori', text:'"An ein Haus bei Nacht geht man besser nicht heran", sagte der Esel.\nDie 4 verbrachten die Nacht im Wald.', next:'brm2'},
  brm2:{art:'br_mori', text:'Am Morgen krähte der Hahn, und alle wachten auf.\n"Wenn wir schon hier sind, singen wir doch einmal zusammen."\nI-ah, wau, miau, kikeriki.', next:'brm3'},
  brm3:{art:'br_roba', text:'Da kam ein Karren vorbei, beladen mit Mehlsäcken.\nDer Müller hörte die Stimme des Esels und sagte:\n"Was für eine Stimme. Willst du nicht in meiner Mühle arbeiten? Futter bekommst du reichlich."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Ich bin Musikant.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'Der Esel lehnte höflich ab und ging mit seinen Gefährten weiter.\nWohin sie kommen würden, wusste noch niemand.\nDas Lied der 4 klang weit durch den Morgen im Wald.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Jeder seinen Morgen ---- */
  bra1:{art:'br_ie_asa', text:'Morgen. Was tun sie in diesem Haus?', choices:[
    {t:'Der Hahn kräht auf dem Dach die Stunde', go:'bra1r', set:{brasa:'ondori'}},
    {t:'Der Hund hält an der Tür ein Nickerchen', go:'bra1r', set:{brasa:'inu'}},
    {t:'Die Katze rollt sich am Kamin zusammen', go:'bra1r', set:{brasa:'neko'}},
    {t:'Der Esel wackelt in der Sonne mit den Ohren', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'Der Hund streckte sich an der Tür aus.\nEr musste niemandem mehr nachlaufen.';
    if(f.brasa==='neko') return 'Die Katze rollte sich am Kamin zusammen.\nDie Tage, an denen sie Mäusen nachjagte, waren vorbei.';
    if(f.brasa==='roba') return 'Der Esel stand in der Sonne und wackelte mit den langen Ohren.\nAuf seinem Rücken lagen keine Mehlsäcke mehr.';
    return 'Der Hahn stieg aufs Dach und krähte zum Himmel im Osten.\nNiemand hatte ihn darum gebeten.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Niemand hatte es ihnen gesagt.\nJeder von ihnen entschied selbst.\nAuch heute kräht der Hahn die Stunde, schläft der Hund an der Tür,\nrollt sich die Katze am Kamin zusammen, und der Esel wackelt in der Sonne mit den langen Ohren.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Räuber ================= */

  bd1:{art:'dorobou_mori', text:'Dies ist die Geschichte von 3 Räubern, die in einem Haus im Wald wohnten.\nAuch an jenem Abend stand der Tisch voller guter Sachen.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'Was gibt es heute zu essen?', choices:[
    {t:'Wurst und Wein', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Brot, Käse und Äpfel', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'Sie deckten den ganzen Tisch mit Brot, Käse und Äpfeln.\nDie 3 fingen bestens gelaunt zu essen an.'
    : 'Sie brieten Wurst und schenkten Wein ein.\nDie 3 fingen bestens gelaunt zu essen an.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'Plötzlich klang vor dem Fenster eine Stimme, die noch nie jemand gehört hatte.\nI-ah, wau, miau, kikeriki. Alles auf einmal.\nUnd dann: Klirr, das Glas zersprang!\n"Ein Ungeheuer!"\nDie 3 flohen in den Wald.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'Tief im Wald kamen die 3 wieder zu Atem.\n"Was machen wir mit dem Haus?"', choices:[
    {t:'Zurückgehen und nachsehen', go:'bdg1'},
    {t:'Das Haus aufgeben', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'Die Küche war stockdunkel.\nTief im Kamin glommen zwei kleine Lichter.\n(Das ist noch glühende Kohle.)\nEr hielt ein Streichholz daran ...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'Eine Hexe!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'Das Gesicht zerkratzt, ins Bein gestochen, mit einer Keule geschlagen,\nund vom Dach: "Bringt mir den Kerl her!"\nDer Räuber floh in den Wald zurück.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"Da sind eine Hexe, ein Mann mit einem Messer, ein schwarzes Ungeheuer und ein Richter."\nKeiner der anderen ging je wieder in die Nähe dieses Hauses.\nWas wirklich dort war, erfuhr niemand.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  bdm1:{art:'dorobou_mori', text:'"Das Haus gehört jetzt ihnen."\nDie 3 gingen zum Ausgang des Waldes.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'In der Stadt war Morgenmarkt.\nAuf einem Schild stand: "Träger gesucht."\nDie 3 sahen einander an.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'Wovon die 3 von jenem Tag an lebten,\nsteht in dieser Geschichte nicht.\nIm Haus im Wald klingt das Lied der 4.\nEnde.'},

  /* ================= Die Geschichte des Hahns ================= */

  bo1:{art:'ondori_yane', text:'Dies ist die Geschichte von einem Hahn, der auf dem Hoftor eines Bauernhauses krähte.\nMorgen ist Sonntag. Es kommen Gäste, und ich soll zu Suppe werden.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'Was tut er an seinem letzten Tag?', choices:[
    {t:'Aus voller Kehle krähen', go:'bo2r', set:{bolife:'naku'}},
    {t:'Langsam durch den Hof gehen', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Er ging langsam durch den Hof, von einem Ende zum anderen.\nEs sollte ein letzter Blick sein.'
    : 'Auf dem Tor krähte er, bis seine Stimme heiser war.\nManche hielten sich die Ohren zu. Das war ihm gleich.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Da kamen ein Esel, ein Hund und eine Katze vorbei.\n"Irgendetwas ist besser als der Tod. Du hast eine gute Stimme."\nDer Hahn sprang vom Tor herunter.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Reicht meine Stimme denn?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'Am Haus im Wald saß der Hahn ganz oben.\nWas dann geschah, entschied der Hahn selbst.', choices:[
    {t:'Um Mitternacht vom Dach krähen', go:'bok1'},
    {t:'In diesem Haus wohnen und den Morgen ankündigen', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'Um Mitternacht wachte er auf dem Dachbalken auf.\nUnten tobte ein Räuber herum.\nDer Hahn krähte aus voller Kehle.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Kikeriki!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'Für den Räuber klang es wie: "Bringt mir den Kerl her!"\nDie Stimme, die zu Suppe werden sollte, hatte das Haus beschützt.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'Wozu er seine Stimme braucht, entscheidet er selbst.\nDer Hahn krähte von da an, wann er wollte und wie er wollte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  boa1:{art:'br_ie_asa', text:'Als sie im Haus wohnten, stieg der Hahn aufs Dach.\nNiemand hatte ihn darum gebeten.\nAm Morgen, wenn der Himmel im Osten hell wurde, krähte der Hahn.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'Der Hund wachte auf, die Katze streckte sich, und der Esel schüttelte die Ohren.\n"Ich werde keine Suppe mehr. Jeden Morgen krähe ich hier."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'Bei der Stimme des Hahns wacht jemand auf.\nSchon das machte den Hahn froh.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_DE);

  T.ZK_EN.push(
    {section:'Die Bremer Stadtmusikanten'},
    {id:'br_seishi', n:'Das Haus, das ihnen gefiel', h:'Die ursprüngliche Geschichte aus dem 1. Durchgang'},
    {id:'br_bremen', n:'In der Stadt Bremen',       h:'Am Morgen doch noch nach Bremen gehen ...'},
    {id:'br_mori',   n:'Morgen im Wald',            h:'Dem Haus mit dem Licht fernbleiben ...'},
    {id:'br_asa',    n:'Jeder seinen Morgen',       h:'Im Haus entscheiden, was am Morgen geschieht ...'},
    {id:'bd_gokai',  n:'Die Hexe und der Richter',  h:'In der Geschichte der Räuber zurückgehen und nachsehen ...'},
    {id:'bd_machi',  n:'Aus dem Wald hinaus',       h:'In der Geschichte der Räuber das Haus aufgeben ...'},
    {id:'bo_koe',    n:'Eine Stimme, die ankam',    h:'In der Geschichte des Hahns um Mitternacht krähen ...'},
    {id:'bo_asa',    n:'Den Morgen ankündigen',     h:'In der Geschichte des Hahns den Morgen ankündigen ...'}
  );

})();
