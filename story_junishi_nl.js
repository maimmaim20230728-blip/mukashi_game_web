"use strict";
/* Hoe de twaalf dieren werden gekozen - Dutch scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var N12 = ['Rat','Os','Tijger','Konijn','Draak','Slang','Paard','Schaap','Aap','Haan','Hond','Zwijn'];

  var JUNISHI_NL = {

  /* ================= Hoe de twaalf dieren werden gekozen ================= */

  ju1:{art:'ju_ofure', text:'Dit is het verhaal van de twaalf dieren die hun naam aan de jaren gaven.\nAan het eind van een jaar liet de god een bericht rondgaan.\n"Kom op nieuwjaarsochtend naar mijn paleis. De eerste twaalf die aankomen, worden op volgorde de namen van de jaren."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'De dieren begonnen zich klaar te maken, ieder op zijn eigen manier.';
    if(f.first) return t;
    return t + '\nWat bereiden ze voor?';
  }, choices:[
    {t:'Het rennen oefenen', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Een feestmaal koken en wachten', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'Het schaap stampte rijstkoeken en de aap raapte kastanjes.\nOp nieuwjaarsochtend zouden ze er samen van eten.'
    : 'De tijger en het paard renden keer op keer over de velden.\nHet konijn oefende het springen, hop, hop, hop.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'De kat had de dag uit het bericht niet goed gehoord.\n"Zeg rat, wanneer gaan we ook alweer naar het paleis?"';
    if(f.first) return t + '\n"Op de ochtend van 2 januari."\nDat antwoordde de rat.';
    return t + '\nWat antwoordt de rat?';
  }, choices:[
    {t:'"Op de ochtend van 2 januari"', go:'ju4'},
    {t:'"Op de ochtend van 1 januari"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'Oudejaarsavond.\n"Ik ben traag op mijn poten, dus ik ga nu alvast op weg."\nEn de os begon te lopen over de besneeuwde weg, terwijl het nog donker was.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Rustig aan'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Op weg in de avond!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Op die rug sprong de rat, licht als een blaadje.\nDe os merkte er niets van.\nOver de besneeuwde weg, heel langzaam, heel langzaam.';
    if(f.first) return t;
    return t + '\nWat deed de rat onderweg in de nacht?';
  }, choices:[
    {t:'Op de rug slapen', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'De sterren tellen', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'Boven de sneeuw stond de nachthemel vol sterren.\nDe rat telde ze, een, twee, drie, en wachtte op de ochtend.'
    : 'De rug van de os was warm, en voor hij het wist was de rat in slaap gevallen.\nAlleen de voetstappen van de os gingen verder over de besneeuwde weg.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'De ochtend brak aan.\nDe poort van het paleis stond vlak voor hen.\nDe os dacht dat hij als eerste was aangekomen.';
    if(f.first) return t;
    return t + '\nWat doet de rat?';
  }, choices:[
    {t:'Naar beneden springen en als eerste naar binnen gaan', go:'juc_tobiori'},
    {t:'Blijven zitten en samen met de os naar binnen gaan', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Naar beneden gesprongen!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'Op dat moment sprong de rat van de rug van de os\nen ging voor hem de poort door.\nDe stem van de god sprak: "Het eerste jaar wordt de Rat."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Rat'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Daarna ging de os door de poort.\n"Het volgende jaar wordt de Os."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Rat, Os'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'De tijger kwam aanrennen.\nDaarna sprong het konijn met een sprong door de poort.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'De draak en de slang kwamen op hetzelfde moment bij de poort aan.\n"Ga jij maar voor", zei de slang.\nDe draak ging als eerste naar binnen, de slang daarna.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tijger, Konijn, Draak, Slang'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'Het paard kwam in galop aan, en het schaap volgde.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'De aap en de hond kregen onderweg ruzie en kwamen bijna niet vooruit.\nDe haan ging tussen hen in staan.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'Eerst naar het paleis!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Op aandringen van de haan hielden de aap en de hond op met ruziën.\nDe aap, de haan en de hond gingen in die volgorde door de poort.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Paard, Schaap, Aap, Haan, Hond'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'Als laatste kwam het zwijn.\nHij kon alleen maar rechtdoor rennen,\ndus rende hij de poort voorbij en moest hij terugkomen.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Rechtdoor, Zwijn!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'Het twaalfde jaar was het Zwijn.\nDaarmee waren de twaalf namen van de jaren compleet.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'De twaalf namen!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'De god sprak tot de twaalf dieren.\n"Geef van nu af aan, ieder jaar op volgorde, het jaar jullie naam."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'De volgende ochtend.\nDe kat kwam bij de poort van het paleis.\nDe poort was dicht.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... Hè?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'De stem van de god sprak.\n"De dag om te komen was gisteren. Was je gezicht en kom een andere keer terug."';
    if(f.first) return t;
    return t + '\nWat doet de kat?';
  }, choices:[
    {t:'Haar gezicht wassen en naar huis gaan', go:'ju18'},
    {t:'Haar gezicht wassen en nog een keer naar de poort gaan', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'De kat waste haar gezicht.\nEn vanaf toen ging ze achter een rat aan zodra ze er een zag.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Rat, Os, Tijger, Konijn, Draak, Slang, Paard, Schaap, Aap, Haan, Hond, Zwijn.\nIeder jaar op volgorde gaven de twaalf dieren het jaar hun naam.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Op de rug van de os ---- */
  jua1:{art:'ju_mon', text:'De rat sprong niet naar beneden.\nHij bleef op de rug van de os zitten, en samen gingen ze door de poort.\n"Dus met zijn tweeën tegelijk", zei de stem van de god.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"De os mag eerst", zei de rat.\n"De rat mag eerst", zei de os.\nDe god lachte.\n"Dan wordt het eerste jaar de Rat en het volgende de Os.\nIn ruil daarvoor helpen jullie elkaar in elkaars jaar."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Sindsdien helpt in het jaar van de Rat de os, en in het jaar van de Os de rat,\nde een de ander met het werk.\nDe volgorde veranderde niet. Maar het was één ochtend voor twee.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- De groet elk jaar ---- */
  jub1:{art:'ju_neko_kao', text:'De kat waste haar gezicht en ging nog een keer naar de poort.\n"Ik heb mijn gezicht gewassen."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'De stem van de god sprak.\n"Er zijn maar twaalf namen voor de jaren.\nMaar kom elk jaar op nieuwjaarsdag langs om te groeten."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Sindsdien gaat de kat elk jaar op nieuwjaarsochtend naar het paleis om te groeten.\nZe geeft haar naam niet aan een jaar.\nMaar de poort van het paleis gaat open voor de kat.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Aan de overkant van de zee ---- */
  juu1:{art:'ju_nezuneko', text:'"Op de ochtend van 1 januari."\nDe kat zei "dank je wel" en ging die avond vroeg slapen.', next:'juu2'},
  juu2:{art:'ju_kake', text:'De ochtend van nieuwjaarsdag.\nDe rat op de rug van de os, de os langzaam, de tijger in volle vaart.\nEn bij de poort kwamen het konijn en de kat op hetzelfde moment aan.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'Op hetzelfde moment?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'De god dacht een tijdje na en sprak toen.\n"Hier hoort dit jaar bij het Konijn.\nIn de landen aan de overkant van de zee laat ik dit jaar aan de Kat."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'Daarom zijn er nog altijd, in de landen aan de overkant van de zee,\nplaatsen waar de kat haar naam aan een jaar geeft.\nHetzelfde verhaal, maar in een ander land zijn ook de namen anders.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de kat ================= */

  jn1:{art:'jneko_hinata', text:'Dit is het verhaal van één kat.\nZe hoorde dat er een bericht van de god was, maar de datum had ze niet goed gehoord.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'Aan wie zal ze het vragen?', choices:[
    {t:'Het aan de rat vragen', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Het aan de hond vragen', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"Januari ... de eerste, geloof ik? De rat weet het beter", zei de hond.\nDus vroeg de kat het aan de rat.\n"Op de ochtend van 2 januari", antwoordde de rat.'
    : '"Op de ochtend van 2 januari", antwoordde de rat.\n"Dank je wel", zei de kat.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'De ochtend van 2 januari.\nDe kat ging naar de poort van het paleis.\nDe poort was dicht.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... Gisteren?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"De dag om te komen was gisteren. Was je gezicht en kom een andere keer terug."\nZo sprak de stem van de god.\nWat doet de kat?', choices:[
    {t:'Haar gezicht wassen en naar huis gaan', go:'jna1'},
    {t:'Zich oprollen in de zon', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'De kat waste haar gezicht.\nHet water was koud.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'Wat de kat dacht nadat ze haar gezicht had gewassen,\nstaat niet in dit verhaal.\nDe kat waste haar gezicht. Meer niet.\nEinde.'},
  jnh1:{art:'jneko_hinata', text:'De kat ging naar een zonnig plekje.\nZe rolde zich op en deed haar ogen dicht.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Er zijn katten die achter ratten aan gaan, en er zijn katten die in de zon slapen.\nWat deze kat nu denkt, weet alleen de kat zelf.\nEinde.'},

  /* ================= Het verhaal van de rat ================= */

  jz1:{art:'jnezumi_ana', text:'Dit is het verhaal van één rat.\nToen hij het bericht van de god hoorde, dacht de rat na.\n(Met mijn poten haal ik het niet, hoe hard ik ook ren.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'Wat doet hij \'s nachts in zijn hol?', choices:[
    {t:'Nadenken over de weg naar het paleis', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Vroeg gaan slapen en klaar zijn voor de ochtend', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'De rat kroop diep in het stro en ging vroeg slapen.\nZelfs in zijn droom zag hij de poort van het paleis.'
    : 'De rat ging de weg naar het paleis in gedachten keer op keer na.\nHet was een verre weg. Ik heb iemands rug nodig, dacht hij.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"Wanneer gaan we ook alweer naar het paleis?", vroeg de kat.\nDe rat antwoordde: "Op de ochtend van 2 januari."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'Op oudejaarsavond sprong de rat op de rug van de os.\nDe os merkte er niets van.\nWat doet de rat?', choices:[
    {t:'Zwijgend meerijden', go:'jzu1'},
    {t:'De os aanspreken', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'In de ochtend sprong de rat voor de poort naar beneden.\nHet eerste jaar werd de Rat.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'De rat noemde de kat niet de echte dag.\nWaarom, dat weet alleen de rat.\nEn de rat gaf zijn naam aan het allereerste jaar.\nEinde.'},
  jzs1:{art:'ju_senaka', text:'"Os, bedankt dat je me draagt."\nDe os draaide zich verbaasd om.\n"O, ben jij het, rat. Je weegt toch niets. Blijf maar zitten."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Voor de poort zei de os:\n"Ga snel je naam halen."\nDe rat sprong naar beneden en ging door de poort.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'Het eerste jaar was de Rat. Het volgende de Os.\nDe rat vergat de os die hem zijn rug leende nooit meer.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_NL);

  T.ZK_EN.push(
    {section:'Hoe de twaalf dieren werden gekozen', note:'In sommige landen aan de overkant van de zee hoort de kat bij de twaalf dieren. In Japan worden ook woordspelverhalen verteld over een dertiende dier, zoals een wezel of een kikker.'},
    {id:'ju_seishi',  n:'De twaalf namen',              h:'Het verhaal zoals het verteld wordt, meteen bij de eerste keer'},
    {id:'ju_ushi',    n:'Op de rug van de os',          h:'Als je bij de poort blijft zitten in plaats van naar beneden te springen ...'},
    {id:'ju_kao',     n:'De groet elk jaar',            h:'Als je je gezicht wast en nog een keer naar de poort gaat ...'},
    {id:'ju_umi',     n:'Aan de overkant van de zee',   h:'Als de rat de echte dag noemt ...'},
    {id:'jn_asa',     n:'De volgende ochtend',          h:'In het verhaal van de kat: je gezicht wassen en naar huis gaan ...'},
    {id:'jn_hinata',  n:'De kat in de zon',             h:'In het verhaal van de kat: je oprollen in de zon ...'},
    {id:'jz_uso',     n:'De dag van de leugen',         h:'In het verhaal van de rat: zwijgend meerijden ...'},
    {id:'jz_senaka',  n:'De dag van de geleende rug',   h:'In het verhaal van de rat: de os aanspreken ...'}
  );

})();
