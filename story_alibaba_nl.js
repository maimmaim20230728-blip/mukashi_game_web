"use strict";
/* Ali Baba en de 40 rovers - Dutch scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var ALIBABA_NL = {

  /* ================= Ali Baba en de 40 rovers ================= */

  ab1:{art:'ab_mori', text:'Dit is het verhaal van Ali Baba, die in een stad in Perzië woonde.\nAli Baba was een arme houthakker.\nElke dag nam hij zijn 2 ezels mee naar het bos om brandhout te halen.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Ook vandaag verzamelde Ali Baba brandhout in het bos.';
    if(f.first) return t;
    return t + '\nHoeveel brandhout verzamelt hij?';
  }, choices:[
    {t:'2 bundels, en vroeg naar huis', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 bundels, en rustig naar huis', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Hij laadde 4 bundels brandhout op de ruggen van de ezels.\nVandaag wilde hij rustig naar huis gaan.'
    : 'Hij laadde 2 bundels brandhout op de ruggen van de ezels.\nVandaag wilde hij vroeg naar huis gaan.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'Op dat moment hoorde hij de hoefslag van paarden.\nAli Baba verstopte zich boven in een boom.\n40 mannen verzamelden zich voor een grote rots.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 mannen ...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'De voorste man sprak tot de rots.\n"Sesam, open u!"\nDaarop ging de rots met een gerommel open.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Sesam, open u!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'De mannen gingen naar binnen.\nNa een tijdje kwamen ze weer naar buiten. "Sesam, sluit u!"\nDe rots sloot zich, en de mannen reden weg.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba klom uit de boom en ging voor de rots staan.\n"Sesam, open u!"\nDe rots ging open, en binnen lag het vol met goudstukken en schatten.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'De glans van de schat'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba deed goudstukken in zakken en laadde ze op de ezels.\nAlleen zoveel als hij mee naar huis kon nemen.\n"Sesam, sluit u!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'Thuis vertelde Ali Baba alles aan zijn vrouw.\nSamen wilden ze de goudstukken tellen, maar het waren er veel te veel.\n"Laten we een maatvat lenen bij het huis van mijn broer."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Zijn broer Cassim was een rijke koopman.\nDe vrouw van Cassim streek stiekem wat vet op de bodem van het maatvat.\nToen het terugkwam, zat er 1 goudstuk aan de bodem geplakt.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim vroeg Ali Baba ernaar.\nAli Baba vertelde hem alles: over de rots en over de toverwoorden.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'De volgende ochtend nam Cassim 10 ezels mee naar de rots.\n"Sesam, open u!"\nDe rots ging open.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Sesam, open u!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim deed goudstukken in zijn zakken.\nMaar toen hij naar buiten wilde, was hij de toverwoorden vergeten.\n"Gerst, open u!" "Boon, open u!"\nDe rots ging niet open.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'Die avond kwam Cassim niet thuis.\nDe vrouw van Cassim kwam huilend naar het huis van Ali Baba.';
    if(f.first) return t;
    return t + '\nWat doet Ali Baba?';
  }, choices:[
    {t:'Wachten tot de ochtend', go:'ab14'},
    {t:'Nog diezelfde nacht naar de rots gaan', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'In de ochtend ging Ali Baba naar de rots.\n"Sesam, open u!"\nBinnen was het stil. De rovers waren eerder teruggekomen.\nCassim bewoog niet meer.\nAli Baba legde zijn broer op een ezel en bracht hem stil naar huis.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'In het huis van Ali Baba woonde een dienares die Morgiana heette.\nZij was iemand die alles opmerkte.\nVoor de voorbereiding van de begrafenis haalde Morgiana een oude schoenlapper uit de stad.\nZodat hij de weg niet kon onthouden, deed zij hem een blinddoek om en bracht hem naar het huis.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'De blinddoek, alstublieft'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'Toen de rovers bij de rots terugkwamen, merkten zij dat Cassim weg was.\n"Iemand anders weet ervan."\nDe aanvoerder stuurde een van zijn mannen naar de stad.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'De rover vond de oude schoenlapper.\nMet de blinddoek voor vond de oude man de weg terug met zijn voeten.\nEn de rover zette een wit teken op de deur van het huis van Ali Baba.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana merkte het teken op.\nEn zij zette hetzelfde teken op het huis ernaast, en op het huis daarnaast.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Overal tekens!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'Toen de rovers kwamen, wisten zij niet welk huis het was.\nDe aanvoerder besloot zelf te gaan.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'De aanvoerder vermomde zich als oliekoopman.\n19 ezels, met 38 grote kruiken.\nIn maar 1 kruik zat olie, in alle andere zat telkens een rover verstopt.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Ik ben een reizende oliekoopman. Mag ik hier een nacht blijven?"\nAli Baba nam hem vriendelijk op.\nDe kruiken werden op de binnenplaats op een rij gezet.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'... Als het nacht wordt'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'In de nacht raakte de lampolie op, en Morgiana wilde wat olie uit de kruiken op de binnenplaats halen.\nToen kwam er uit een kruik een stem.\n"Is het al tijd?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'... In de kruik zit iemand'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana antwoordde met een lage stem.\n"Nog niet."\nDaarna controleerde zij alle 37 kruiken.';
    if(f.first) return t;
    return t + '\nWat doet Morgiana?';
  }, choices:[
    {t:'De olie koken', go:'ab24'},
    {t:'Touwen halen en de stadswacht roepen', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana kookte de olie in een grote pan.\nDaarna goot zij de kokende olie in de ene kruik na de andere.\nIn de kruiken werd het stil.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'Midden in de nacht kwam de aanvoerder op de binnenplaats en klopte op de kruiken.\nEr kwam geen antwoord.\nDe aanvoerder vluchtte alleen weg.', next:'ab26'},

  ab26:{art:'ab_ie', text:'In de ochtend vertelde Morgiana alles aan Ali Baba.\nAli Baba zei tegen haar:\n"Vanaf vandaag ben je vrij."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Een paar dagen later kwam de aanvoerder weer, vermomd als koopman.\nHij was bevriend geraakt met de zoon van Ali Baba en was in huis uitgenodigd.\nMorgiana herinnerde zich dat gezicht.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Dit gezicht ken ik nog'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Na het eten liet Morgiana een dans zien.\nIn haar gordel stak een dolk.';
    if(f.first) return t;
    return t + '\nWat doet Morgiana?';
  }, choices:[
    {t:'Tot het einde van de dans dansen', go:'ab29'},
    {t:'De dans stoppen en over de tekens spreken', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'Aan het einde van de dans bleef Morgiana voor de koopman staan.\nDe aanvoerder viel neer.\nTegen de verbaasde Ali Baba zei Morgiana rustig:\n"Deze man was de aanvoerder."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba zei tegen Morgiana:\n"Je bent nu vrij. Wat je vanaf nu doet, mag je zelf beslissen."\nMorgiana dacht een tijdje na en antwoordde:\n"Ik blijf hier. Ik hoor bij dit huis."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Daarna werden Morgiana en de zoon van Ali Baba een paar, en zij hoorde bij dit huis.\nDe schat uit de rots gebruikten zij bescheiden.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- De broer ophalen ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Nog diezelfde nacht leidde Ali Baba een ezel naar de rots.\n"Sesam, open u!"\nDiep binnenin zat Cassim te beven.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"Ik was de toverwoorden vergeten ... Sesam, het was Sesam."\nAli Baba zette zijn broer op de ezel en bracht hem mee naar huis.\nVan de goudstukken nam hij maar één zak vol mee.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'Zijn broer was ongedeerd.\nDe toverwoorden werden een geheim van hen tweeën.\nDe rovers merkten dat er goudstukken ontbraken, maar wie het gedaan had, kwamen zij nooit te weten.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Touwen en de stadswacht ---- */
  abr1:{art:'ab_abura', text:'Morgiana haalde touwen.\nEen voor een bond zij de deksels van de kruiken van buitenaf dicht.\nDaarna rende zij weg om de stadswacht te roepen.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'De stadswacht kwam en opende de 37 kruiken.\nDe rovers werden een voor een met touwen weggeleid.\nDe aanvoerder maakte van dat moment gebruik en vluchtte.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'De aanvoerder liet zich nooit meer in de stad zien.\nAli Baba zei tegen Morgiana: "Je bent nu vrij."\nDe schat uit de rots gebruikten zij bescheiden.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- De aanvoerder vluchtte ---- */
  abg1:{art:'ab_odori', text:'Morgiana stopte de dans en ging voor de koopman staan.\n"Het teken dat u had gezet, heb ik vermeerderd."\nDe koopman verschoot van kleur.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Zonder iets te zeggen stond de aanvoerder op en vluchtte de nachtelijke stad in.\nNaar de stad in Perzië kwam hij nooit meer terug.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba zei tegen Morgiana:\n"Je bent nu vrij. Wat je vanaf nu doet, mag je zelf beslissen."\n"Ik blijf hier," antwoordde Morgiana.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van Morgiana ================= */

  am1:{art:'am_daidokoro', text:'Dit is het verhaal van een dienares die Morgiana heette.\nZij werkte in het huis van Ali Baba.\nMen zei dat haar niets ontging.', next:'am2'},
  am2:{art:'am_daidokoro', text:'De ochtend. Waarmee begint zij?', choices:[
    {t:'Brood bakken', go:'am2r', set:{amlife:'pan'}},
    {t:'Water putten', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana putte water uit de put en vulde de kruik tot de rand.\nOver het huis wist zij alles.'
    : 'Morgiana maakte vuur in de oven en bakte brood.\nOver het huis wist zij alles.', next:'am3'},
  am3:{art:'ab_shirushi', text:'Op een ochtend vond zij een wit teken op de deur.\n(Iemand wil zich dit huis onthouden.)\nMorgiana zette het teken ook op het huis ernaast.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'Tekens kun je vermeerderen'}, then:'am4'},
  am4:{art:'ab_abura', text:'De nacht van de oliekoopman. Uit een kruik kwam een stem.\nWat doet Morgiana?', choices:[
    {t:'De olie koken', go:'am4r', set:{amhow:'abura'}},
    {t:'De kruiken dichtbinden en de stadswacht roepen', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana bond de deksels van de kruiken dicht en riep de stadswacht.\nDe rovers werden weggeleid.'
    : 'Morgiana kookte de olie en goot die in de kruiken.\nIn de kruiken werd het stil.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'Op de ochtend nadat alles voorbij was, zei Ali Baba:\n"Je bent nu vrij. Wat je doet, mag je zelf beslissen."\nWat doet Morgiana?', choices:[
    {t:'In dit huis blijven', go:'ami1'},
    {t:'Op reis gaan', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana ging één keer de poort uit.\nZij liep door de stad, zag de markt, zag de rivier.\nDaarna kwam zij op haar eigen benen terug naar het huis.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Dit is het huis dat ik heb gekozen."\nNiet als dienares, maar als iemand die bij dit huis hoort.\nEn ze leefden nog lang en gelukkig.'},
  amt1:{art:'am_michi', text:'Morgiana nam één zak mee en ging de poort uit.\nAli Baba hield haar niet tegen.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Waar Morgiana naartoe ging, staat niet in dit verhaal.\nWaar de weg heen ging, weet alleen Morgiana.\nEinde.'},

  /* ================= Het verhaal van de aanvoerder ================= */

  at1:{art:'at_dokutsu_kara', text:'Dit is het verhaal van de aanvoerder van de rovers.\nMet 40 man bewaarden zij hun schat in de rots.\nOp een dag merkte hij dat er iets van ontbrak.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'Wat onderzoekt de aanvoerder?', choices:[
    {t:'De voetsporen voor de rots', go:'at2r', set:{atlife:'ashi'}},
    {t:'De sporen van een ezel', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Voor de rots waren sporen van een ezel achtergebleven.\nIemand uit de stad.'
    : 'Voor de rots waren kleine voetsporen achtergebleven.\nZij waren niet van een van zijn mannen.', next:'at3'},
  at3:{art:'ab_iwa', text:'(Niet dat de schat was weggenomen maakte hem bang, maar dat iemand het geheim van de rots kende.)\nDe aanvoerder stuurde een man naar de stad.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'Eén geheim is genoeg'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'Het plan met de kruiken was mislukt.\nVan zijn mannen was er niemand meer over.\nWat doet de aanvoerder?', choices:[
    {t:'De schat achterlaten en ver weg gaan', go:'ato1'},
    {t:'Nog één keer naar dat huis', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'De aanvoerder ging voor de rots staan.\n"Sesam, sluit u."\nDaarna liep hij weg zonder om te kijken.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'De schat bleef achter in de rots.\nWaar de aanvoerder naartoe ging, weet niemand.\nEinde.'},
  ath1:{art:'ab_odori', text:'Vermomd als koopman ging de aanvoerder naar dat huis.\nAan het einde van de dans ging de dienares voor hem staan.\n(Zij heeft het vanaf het begin geweten.)\nDe aanvoerder deed niets en verliet het huis.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'Het geheim was geen geheim meer.\nDe aanvoerder aanvaardde dat en verliet de stad.\nWat hem bang maakte, was niet het verlies van de schat, maar dat iemand ervan wist.\nEinde.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_NL);

  T.ZK_EN.push(
    {section:'Ali Baba en de 40 rovers', note:'In de oude boeken in het Arabisch staat dit verhaal niet. Ongeveer 300 jaar geleden schreef een Fransman het op, nadat hij het van een verteller uit Syrië had gehoord. Het is een ander verhaal dan "Aladin". In het oorspronkelijke verhaal is Morgiana een slavin, en aan het einde wordt zij vrij.'},
    {id:'ab_seishi',  n:'Sesam, open u',                h:'Het overgeleverde verhaal, bij de allereerste keer'},
    {id:'ab_ani',     n:'De broer ophalen',             h:'In de nacht dat Cassim niet thuiskomt naar de rots gaan ...'},
    {id:'ab_rouya',   n:'Touwen en de stadswacht',      h:'In de nacht van de kruiken de olie niet koken ...'},
    {id:'ab_nigeta',  n:'De aanvoerder vluchtte',       h:'De dans stoppen en over de tekens spreken ...'},
    {id:'am_ie',      n:'Het huis dat ik koos',         h:'In het verhaal van Morgiana in het huis blijven ...'},
    {id:'am_tabi',    n:'Voorbij de deur',              h:'In het verhaal van Morgiana op reis gaan ...'},
    {id:'at_oite',    n:'De schat achterlaten',         h:'In het verhaal van de aanvoerder ver weg gaan ...'},
    {id:'at_himitsu', n:'Eén geheim',                   h:'In het verhaal van de aanvoerder nog één keer naar dat huis gaan ...'}
  );

})();
