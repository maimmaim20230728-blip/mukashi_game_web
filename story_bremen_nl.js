"use strict";
/* De Bremer stadsmuzikanten - Dutch scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   Vaste wendingen (stadsmuzikant / iets is beter dan de dood / de roep van de haan /
   de nog warme mond van de laatste verteller) zijn vrij hervertaald, niet woordelijk
   uit een bestaande Nederlandse vertaling overgenomen. De dieren hebben geen eigennaam. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var BREMEN_NL = {

  /* ================= De Bremer stadsmuzikanten ================= */

  br1:{art:'br_koya', text:'Dit is het verhaal van een ezel die lange tijd bij één baas werkte.\nIn de molen droeg hij zak na zak vol meel.\nMaar hij werd oud, en zijn kracht nam af.', next:'br2'},

  br2:{art:'br_koya', text:'Op een dag merkte de ezel iets.\n(Mijn baas denkt erover om mij geen voer meer te geven.)\nDaarom verliet de ezel de molen.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'Naar Bremen!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Ik ga naar Bremen en word daar stadsmuzikant."\nDat besloot de ezel, en hij ging op weg over de grote weg.';
    if(f.first) return t;
    return t + '\nWelke weg neemt hij?';
  }, choices:[
    {t:'De weg langs de rivier', go:'br3r', set:{brmichi:'kawa'}},
    {t:'De weg tussen de akkers', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'Op de weg tussen de korenvelden woei de wind vrij.\nVoor het eerst in lange tijd liep de ezel zonder iets te dragen.'
    : 'Op de weg langs de rivier klonk het water aangenaam.\nVoor het eerst in lange tijd liep de ezel zonder iets te dragen.', next:'br4'},

  br4:{art:'br_inu', text:'Langs de weg lag een jachthond.\nHijg, hijg, moeizaam ging zijn adem.\n"Wat is er, dat je zo buiten adem bent?"', next:'br5'},

  br5:{art:'br_inu', text:'"Ik ben oud geworden en kan niet meer mee op jacht.\nToen wilde mijn baas mij doden.\nIk ben weggelopen, maar waarvan moet ik nu leven?"\n"Ik ga naar Bremen en word muzikant. Kom toch mee.\nIk speel luit. Jij kunt de trom slaan."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'De hond sluit zich aan!!'}, then:'br6'},

  br6:{art:'br_neko', text:'Een stuk verderop zat een kat op een muur.\nZe keek somber, als na drie dagen regen.', next:'br7'},

  br7:{art:'br_neko', text:'"Ik ben oud geworden, mijn tanden zijn bot,\nen ik zit liever bij de haard dan dat ik op muizen jaag.\nToen wilde mijn bazin mij in de rivier verdrinken."\n"Kom dan met ons mee naar Bremen.\nBij nachtmuziek doet niemand het jou na."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'Bij nachtmuziek...'}, then:'br8'},

  br8:{art:'br_ondori', text:'Op de poort van een boerderij kraaide een haan uit volle borst.\n"Dat is me een luide stem."\n"Morgen is het zondag, en er komen gasten.\nIk moet soep worden.\nDaarom kraai ik, zolang ik nog een stem heb."', next:'br9'},

  br9:{art:'br_ondori', text:'"Iets is beter dan de dood. Jij hebt een mooie stem.\nMaak muziek met ons. Daar komt vast iets van."\nDe haan sprong van de poort af.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Kukeleku!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'Bremen was niet op één dag te bereiken.\nToen het nacht werd, wilden de 4 in het bos rusten.';
    if(f.first) return t + '\nDe ezel en de hond onder een boom. De kat op een tak. De haan helemaal bovenin.';
    return t + '\nWaar rusten ze?';
  }, choices:[
    {t:'Onder de boom, allemaal samen', go:'br10r', set:{brmori:'shita'}},
    {t:'Op een hoge tak, en de wacht houden', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'De kat en de haan klommen op een hoge tak.\nBeneden sliepen de ezel en de hond rug aan rug.'
    : 'De 4 rolden zich onder een grote boom op en sliepen.\nAlleen de haan klom voor het slapen helemaal naar boven.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Van helemaal boven zag de haan in de verte een licht.\n"Daar staat een huis. Er brandt licht."';
    if(f.first) return t + '\n"Laten we gaan. Het nachtverblijf hier is niet best", zei de ezel.';
    return t + '\nWat doen ze?';
  }, choices:[
    {t:'Naar het huis met het licht gaan', go:'br12'},
    {t:'Wegblijven en de nacht in het bos doorbrengen', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'Bij het huis met het licht keek de ezel door het raam naar binnen.\n"Wat zie je?", vroeg de haan.\n"Een tafel vol lekkere dingen,\nen rovers die eromheen zitten te eten."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"Zoiets hebben wij ook nodig", zei de haan.\nDe 4 staken de koppen bij elkaar en overlegden.', next:'br14'},

  br14:{art:'br_mado', text:'De ezel zette zijn voorpoten op de vensterbank.\nDe hond sprong op zijn rug,\nde kat klom op de hond,\nen helemaal bovenop ging de haan zitten.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'In koor!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'En toen sprongen ze allemaal tegelijk door het raam naar binnen.\nRinkeldekinkel, daar brak het glas!\nDe rovers riepen "Een monster!" en vluchtten het bos in.', next:'br16'},

  br16:{art:'br_gochisou', text:'De 4 gingen aan tafel.\nZe aten alsof het voor veertig dagen was, deden het licht uit\nen gingen ieder op hun liefste plek slapen.\nDe ezel op het erf, de hond bij de deur, de kat bij de haard, de haan op de dakbalk.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Middernacht.'}, then:'br17'},

  br17:{art:'br_yoru', text:'Een van de rovers kwam terug om te kijken.\nHet huis was stil. In de keuken glom er iets achter in de haard.\n(Dat is nog gloeiende kool.)\nDat dacht hij en hield er een lucifer bij. Precies op dat moment.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'Krab!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'De kat sprong hem in het gezicht en krabde hem.\nDe rover vluchtte naar de achterdeur. Daar wachtte de hond.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'Hap!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'Toen hij het erf op rende, gaf de ezel hem een trap met zijn achterpoten.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'Schop!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Boven op het dak werd de haan wakker en kraaide luid.\n"Kukeleku!"\nVoor de rover klonk dat zo:\n"Breng die schurk hier bij mij!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'Een heks! Een rechter!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'De rover vluchtte terug het bos in en zei tegen de anderen:\n"In dat huis zit een vreselijke heks.\nZe spuwde naar me en krabde met lange nagels mijn gezicht open.\nBij de deur stond een man met een mes en die stak me in mijn been.\nOp het erf was een zwart monster en dat sloeg me met een knuppel.\nEn op het dak zat een rechter die riep: Breng die schurk hier bij mij!"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'Vanaf die dag kwamen de rovers nooit meer terug.';
    if(f.first) return t;
    return t + '\nIn de ochtend overlegden de 4. Wat doen ze?';
  }, choices:[
    {t:'In dit huis gaan wonen', go:'e_br_seishi'},
    {t:'Toch nog naar Bremen gaan', go:'brb1'},
    {t:'In dit huis bepalen wat er in de ochtend gebeurt', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'Het huis beviel de 4 muzikanten zo goed\ndat ze er niet meer weg wilden.\nEn wie dit verhaal het laatst verteld heeft, die heeft nog een warme mond.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- In de stad Bremen ---- */
  brb1:{art:'br_roba', text:'"Dit is een goed huis. Maar wij zijn muzikanten."\nDe 4 deden het huis op slot en gingen weer op weg over de grote weg.', next:'brb2'},
  brb2:{art:'br_bremen', text:'De stad Bremen was groot en druk.\nEn op het plein waren de stadsmuzikanten er al.\nHun trompetten en trommels blonken.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'...Dan maar hier.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'In een hoek van het plein zetten de 4 samen in.\nIa, waf, miauw, kukeleku.\nEr kwam een kind, en nog een, en zo kwamen er steeds meer.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Blinkende instrumenten hadden ze niet.\nMaar in die hoek van het plein kwamen elke dag kinderen.\nIn een hoek van de stad werden de 4 muzikanten.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Ochtend in het bos ---- */
  brm1:{art:'br_mori', text:'"Bij nacht ga je beter niet naar een huis toe", zei de ezel.\nDe 4 brachten de nacht door in het bos.', next:'brm2'},
  brm2:{art:'br_mori', text:'In de ochtend kraaide de haan, en iedereen werd wakker.\n"Nu we hier toch zijn, laten we eens samen inzetten."\nIa, waf, miauw, kukeleku.', next:'brm3'},
  brm3:{art:'br_roba', text:'Toen kwam er een kar voorbij, beladen met zakken meel.\nDe molenaar hoorde de stem van de ezel en zei:\n"Wat een stem. Wil je niet in mijn molen werken? Voer krijg je genoeg."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Ik ben muzikant.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'De ezel sloeg het beleefd af en liep verder met zijn gezellen.\nWaar ze zouden aankomen, wist nog niemand.\nHet lied van de 4 klonk ver door de ochtend in het bos.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Ieder zijn eigen ochtend ---- */
  bra1:{art:'br_ie_asa', text:'Ochtend. Wat doen ze in dit huis?', choices:[
    {t:'De haan kraait het uur van het dak', go:'bra1r', set:{brasa:'ondori'}},
    {t:'De hond doet een dutje bij de deur', go:'bra1r', set:{brasa:'inu'}},
    {t:'De kat rolt zich op bij de haard', go:'bra1r', set:{brasa:'neko'}},
    {t:'De ezel wiebelt met zijn oren in de zon', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'De hond strekte zich uit bij de deur.\nHij hoefde niemand meer achterna te zitten.';
    if(f.brasa==='neko') return 'De kat rolde zich op bij de haard.\nDe dagen dat ze op muizen joeg, waren voorbij.';
    if(f.brasa==='roba') return 'De ezel stond in de zon en wiebelde met zijn lange oren.\nOp zijn rug lagen geen zakken meel meer.';
    return 'De haan klom op het dak en kraaide naar de hemel in het oosten.\nNiemand had hem daarom gevraagd.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Niemand had het hun gezegd.\nIeder van hen besliste het zelf.\nOok vandaag kraait de haan het uur, slaapt de hond bij de deur,\nrolt de kat zich op bij de haard, en wiebelt de ezel met zijn lange oren in de zon.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de rovers ================= */

  bd1:{art:'dorobou_mori', text:'Dit is het verhaal van 3 rovers die in een huis in het bos woonden.\nOok die avond stond de tafel vol lekkere dingen.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'Wat staat er vandaag op tafel?', choices:[
    {t:'Worst en wijn', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Brood, kaas en appels', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'Ze zetten de hele tafel vol met brood, kaas en appels.\nDe 3 begonnen goedgemutst te eten.'
    : 'Ze bakten worst en schonken de wijn in.\nDe 3 begonnen goedgemutst te eten.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'Plotseling klonk er buiten het raam een stem die nog nooit iemand had gehoord.\nIa, waf, miauw, kukeleku. Alles tegelijk.\nEn toen: rinkeldekinkel, daar brak het glas!\n"Een monster!"\nDe 3 vluchtten het bos in.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'Diep in het bos kwamen de 3 weer op adem.\n"Wat doen we met dat huis?"', choices:[
    {t:'Teruggaan en gaan kijken', go:'bdg1'},
    {t:'Dat huis opgeven', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'De keuken was pikdonker.\nAchter in de haard gloeiden twee kleine lichtjes.\n(Dat is nog gloeiende kool.)\nHij hield er een lucifer bij...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'Een heks!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'Zijn gezicht opengekrabd, in zijn been gestoken, met een knuppel geslagen,\nen van het dak: "Breng die schurk hier bij mij!"\nDe rover vluchtte terug het bos in.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"Daar zijn een heks, een man met een mes, een zwart monster en een rechter."\nGeen van de anderen ging ooit nog in de buurt van dat huis.\nWat er werkelijk was, kwam niemand te weten.\nEn ze leefden nog lang en gelukkig.'},

  bdm1:{art:'dorobou_mori', text:'"Dat huis is nu van hen."\nDe 3 liepen naar de uitgang van het bos.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'In de stad was het ochtendmarkt.\nOp een bord stond: "Dragers gevraagd."\nDe 3 keken elkaar aan.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'Waarvan de 3 vanaf die dag leefden,\nstaat niet in dit verhaal.\nIn het huis in het bos klinkt het lied van de 4.\nEinde.'},

  /* ================= Het verhaal van de haan ================= */

  bo1:{art:'ondori_yane', text:'Dit is het verhaal van een haan die op de poort van een boerderij kraaide.\nMorgen is het zondag. Er komen gasten, en ik moet soep worden.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'Wat doet hij op zijn laatste dag?', choices:[
    {t:'Uit volle borst kraaien', go:'bo2r', set:{bolife:'naku'}},
    {t:'Langzaam over het erf lopen', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Hij liep langzaam over het erf, van het ene eind naar het andere.\nHet moest een laatste blik zijn.'
    : 'Op de poort kraaide hij tot zijn stem hees was.\nSommigen hielden hun oren dicht. Dat kon hem niet schelen.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Toen kwamen er een ezel, een hond en een kat voorbij.\n"Iets is beter dan de dood. Jij hebt een mooie stem."\nDe haan sprong van de poort af.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Is mijn stem wel genoeg?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'Bij het huis in het bos zat de haan helemaal bovenop.\nWat er daarna gebeurde, besliste de haan zelf.', choices:[
    {t:'Om middernacht van het dak kraaien', go:'bok1'},
    {t:'In dit huis wonen en de ochtend aankondigen', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'Om middernacht werd hij wakker op de dakbalk.\nBeneden ging een rover tekeer.\nDe haan kraaide uit volle borst.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Kukeleku!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'Voor de rover klonk het als "Breng die schurk hier bij mij!"\nDe stem die soep had moeten worden, had het huis beschermd.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'Waarvoor hij zijn stem gebruikt, beslist hij zelf.\nDe haan kraaide voortaan wanneer hij wilde en zoals hij wilde.\nEn ze leefden nog lang en gelukkig.'},

  boa1:{art:'br_ie_asa', text:'Toen ze in het huis gingen wonen, klom de haan op het dak.\nNiemand had hem daarom gevraagd.\nIn de ochtend, als de hemel in het oosten licht werd, kraaide de haan.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'De hond werd wakker, de kat rekte zich uit, en de ezel schudde zijn oren.\n"Ik word geen soep meer. Elke ochtend kraai ik hier."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'Door de stem van de haan wordt iemand wakker.\nAlleen dat al maakte de haan blij.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_NL);

  T.ZK_EN.push(
    {section:'De Bremer stadsmuzikanten'},
    {id:'br_seishi', n:'Het huis dat hun beviel',  h:'Het oorspronkelijke verhaal van de allereerste keer'},
    {id:'br_bremen', n:'In de stad Bremen',        h:'Als je in de ochtend toch naar Bremen gaat...'},
    {id:'br_mori',   n:'Ochtend in het bos',       h:'Als je wegblijft bij het huis met het licht...'},
    {id:'br_asa',    n:'Ieder zijn eigen ochtend', h:'Als je in het huis bepaalt wat er in de ochtend gebeurt...'},
    {id:'bd_gokai',  n:'De heks en de rechter',    h:'In het verhaal van de rovers teruggaan en gaan kijken...'},
    {id:'bd_machi',  n:'Het bos uit',              h:'In het verhaal van de rovers het huis opgeven...'},
    {id:'bo_koe',    n:'Een stem die aankwam',     h:'In het verhaal van de haan om middernacht kraaien...'},
    {id:'bo_asa',    n:'De ochtend aankondigen',   h:'In het verhaal van de haan de ochtend aankondigen...'}
  );

})();
