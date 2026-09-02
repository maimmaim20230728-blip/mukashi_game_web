"use strict";
/* De kraanvogel die de vriendelijkheid teruggaf - Dutch scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var TSURU_NL = {

  /* ================= De kraanvogel die de vriendelijkheid teruggaf ================= */

  ts1:{art:'ts_yuki_wana', text:'Dit is het verhaal van een kraanvogel die op een dag in de sneeuw werd gered.\nOp een winterdag ging een oude man naar de stad om brandhout te verkopen.\nOnderweg vond hij een kraanvogel die in een val gevangen zat.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Val losgemaakt!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'De oude man maakte de val los en liet de kraanvogel vrij.\nMet grote vleugelslagen vloog de kraanvogel op in de vallende sneeuw.';
    if(f.first) return t;
    return t + '\nWat koopt hij in de stad voordat hij naar huis gaat?';
  }, choices:[
    {t:'Rijst kopen', go:'ts2r', set:{tslife:'kome'}},
    {t:'Een snoepje kopen', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'Van het geld voor het brandhout kocht de oude man één klein snoepje.\nEen cadeautje voor de oude vrouw.'
    : 'Van het geld voor het brandhout kocht de oude man een beetje rijst.\nGenoeg voor het avondeten van die dag.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'Die nacht bleef het sneeuwen.\nKlop, klop. Er werd op de deur geklopt.\nEen meisje in een witte kimono stond in de sneeuw.\n"Ik ben verdwaald. Mag ik één nacht blijven?"', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Laat me alstublieft blijven'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'De oude man en de oude vrouw lieten het meisje bij de haard zitten.\nHet meisje werkte hard, en vele dagen woonden ze samen.\n"Laat mij hier alstublieft blijven wonen."\nDe twee gingen het meisje zien als hun eigen dochter.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'Op een dag zei het meisje:\n"Koop alstublieft garen voor mij. Ik ga weven op het weefgetouw.\nZolang ik weef, doe de papieren deur alstublieft niet open."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Klik-klak, klepper-klak'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'3 dagen en 3 nachten klonk het weefgetouw uit de kamer.\nOp de ochtend van de 4e dag kwam het meisje naar buiten met een witte doek.\nDe doek was wit als sneeuw en glansde.', next:'ts7'},

  ts7:{art:'ts_machi', text:'De oude man bracht de doek naar de stad, en hij werd duur verkocht.\nDie winter werd het warm in huis.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Wij zijn dankbaar...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Ik weef er nog één", zei het meisje.\nOpnieuw klonk 3 dagen en 3 nachten het weefgetouw uit de kamer.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Klik-klak, klepper-klak'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'Ook de 2e doek werd duur verkocht.\nMaar het gezicht van het meisje was bleker dan eerst.\n"Ik weef er nog één", zei het meisje.';
    if(f.first) return t;
    return t + '\nWat doet de oude man?';
  }, choices:[
    {t:'Zeggen: "Alsjeblieft, weef het"', go:'ts10'},
    {t:'Zeggen: "Je hoeft niet meer te weven"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'De 3e doek.\nHet weefgetouw klonk langzamer dan eerst.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Klik... klepper...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'De oude vrouw bleef voor de kamer staan.\n(Zou het goed gaan met dat kind?)\n(Ze heeft geen garen. Wat weeft ze daar toch?)';
    if(f.first) return t + '\nDe oude vrouw schoof de papieren deur een klein stukje open.';
    return t + '\nWat doet de oude vrouw?';
  }, choices:[
    {t:'De papieren deur een klein stukje openschuiven', go:'ts12'},
    {t:'Alleen iets roepen en weglopen', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Achter de papieren deur zat een kraanvogel.\nDe kraanvogel weefde met zijn eigen veren op het weefgetouw.\nDe veren waren een beetje minder geworden.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'Die avond ging het meisje voor de twee zitten.\n"Ik ben de kraanvogel die op een dag in de sneeuw werd gered.\nMijn ware gedaante is gezien.\nIk kan niet langer in de gedaante van een meisje blijven."';
    if(f.first) return t;
    return t + '\nWat doen de twee?';
  }, choices:[
    {t:'Zwijgend afscheid nemen', go:'ts14'},
    {t:'De deur openen en omhoog kijken naar de lucht', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'Het meisje nam weer de gedaante van een kraanvogel aan en vloog op in de vallende sneeuw.\nDe oude man en de oude vrouw keken lang, heel lang naar de lucht.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'De kraanvogel, de lucht in'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'De kraanvogel die op een dag in de sneeuw werd gered, keerde terug naar de lucht.\nIn huis bleven 2 witte doeken achter, en een weefgetouw met onafgemaakt werk.\nEinde.'},

  /* ---- Je hoeft niet meer te weven ---- */
  tsm1:{art:'ts_kaoiro', text:'"Je hoeft niet meer te weven. 2 doeken zijn genoeg."\nDat zei de oude man.\nHet meisje zweeg een tijdje en antwoordde toen: "Ja."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'De winter liep ten einde, en de lente kwam.\nIn de lucht klonken de stemmen van kraanvogels.\n"Ik ben de kraanvogel die op een dag in de sneeuw werd gered. Mijn zwerm roept mij."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'Het meisje nam weer de gedaante van een kraanvogel aan en vloog naar de zwerm.\nIn huis bleven 2 witte doeken achter.\nDe oude man en de oude vrouw keken de lentelucht na.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Een winter zonder te kijken ---- */
  tsn1:{art:'ts_nozoku', text:'"Doe rustig aan, hoor."\nDe oude vrouw riep het van buiten door de papieren deur en liep bij de kamer weg.\nVan binnen klonk een "Ja".', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'De 3e doek was klaar.\nHet was de mooiste doek van allemaal.\nHet gezicht van het meisje was nog steeds bleek.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'De lente kwam, en in de lucht klonken de stemmen van kraanvogels.\n"Ik ben de kraanvogel die op een dag in de sneeuw werd gered.\nVeren heb ik niet meer. Mijn zwerm roept mij."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'De oude man en de oude vrouw namen bij de deur afscheid van het meisje.\nOok zonder te kijken kwam het afscheid.\nMaar in dat afscheid was er geen enkel geheim.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Het raam openen ---- */
  tsd1:{art:'ts_mado', text:'De volgende ochtend deed de oude man de deur open.\nIn de heldere lucht, één kraanvogel.\nDe kraanvogel maakte één rondje boven het huis en vloog toen ver weg.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'De twee zwaaiden.\nOf de kraanvogel nog omkeek, weet niemand.\nMaar dat hij één rondje boven het huis maakte, zijn ze nooit vergeten.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de kraanvogel ================= */

  tz1:{art:'ts_yuki_wana', text:'Dit is het verhaal van één kraanvogel.\nOp een dag in de sneeuw zat hij in een val en kon hij niet meer bewegen.\nEen oude man kwam voorbij en maakte de val los.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'De kraanvogel wilde de vriendelijkheid teruggeven.\nIn welke gedaante zal hij gaan?', choices:[
    {t:'Als meisje in een witte kimono', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Als meisje op reis', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'De kraanvogel nam de gedaante aan van een reizend meisje met een strohoed\nen klopte in een sneeuwnacht op de deur van het huis.'
    : 'De kraanvogel nam de gedaante aan van een meisje in een witte kimono\nen klopte in een sneeuwnacht op de deur van het huis.', next:'tz3'},
  tz3:{art:'tz_hane', text:'Om op het weefgetouw te weven, gebruik je je eigen veren.\nVeren zijn niet oneindig.\nDe kraanvogel telde de veren tijdens het weven.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Nog maar zoveel'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Terwijl de 3e doek geweven werd, schoof de papieren deur een stukje open.\nWat doet de kraanvogel?', choices:[
    {t:'Doorgaan met weven', go:'tzh1'},
    {t:'Het weefgetouw stilzetten en naar de lucht kijken', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'De kraanvogel weefde tot het einde.\nDe veren waren flink minder geworden.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'De ware gedaante was gezien, en daarom verliet de kraanvogel het huis.\nWaarom hij tot het einde weefde, staat niet in dit verhaal.\nEinde.'},
  tzs1:{art:'tz_sora_ie', text:'De kraanvogel zette het weefgetouw stil en keek door het raam naar de lucht.\nHet was een lentelucht.\nDie nacht verliet de kraanvogel het huis.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Van boven uit de lucht was het huis klein, en er brandde één lichtje.\nDe kraanvogel keek een tijdje naar dat lichtje.\nEinde.'},

  /* ================= De winter van de oude vrouw ================= */

  tb1:{art:'ts_irori', text:'Dit is het verhaal van een oude vrouw.\nHet meisje dat in een sneeuwnacht kwam, werkte hard en lachte veel.\nDe oude vrouw kon niet anders dan van het meisje houden.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Wat doet de oude vrouw terwijl het meisje weeft?', choices:[
    {t:'Warme soep maken', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Het haardvuur niet laten uitgaan', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'De oude vrouw legde steeds hout bij, zodat het haardvuur niet uitging.\nZodat het niet koud zou worden in de kamer.'
    : 'De oude vrouw maakte warme soep en zette die buiten de papieren deur.\nToen het ochtend werd, was de kom leeg.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Na de 2e doek was het gezicht van het meisje bleek geworden.\nDe oude vrouw liep keer op keer voor de kamer heen en weer.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'Ik mag niet kijken, maar...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'Als iemand zegt "niet kijken", wil je juist kijken.\nEn helemaal als je je zorgen maakt.\nWat doet de oude vrouw?', choices:[
    {t:'De papieren deur openschuiven', go:'tbk1'},
    {t:'Voor de kamer gaan zitten en wachten', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Achter de papieren deur zat een kraanvogel.\nDe oude vrouw schoof de papieren deur zachtjes weer dicht.\nMaar wat ze gezien had, kon niet meer ongedaan worden gemaakt.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'Het meisje werd weer een kraanvogel en vloog weg.\nIedereen heeft een hart dat wil kijken.\nNiemand in dit verhaal noemt dat verkeerd.\nEinde.'},
  tbh1:{art:'tb_hata_nokori', text:'De oude vrouw ging voor de kamer zitten en luisterde naar het weefgetouw.\nKlik-klak. Klepper-klak.\nZo bleef ze zitten tot de lente.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Nadat het meisje in de lente was vertrokken, bleef het weefgetouw in de kamer staan.\nDe oude vrouw liet het weefgetouw zoals het was en deed de kamer elke dag open.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, TSURU_NL);

  T.ZK_EN.push(
    {section:'De kraanvogel die de vriendelijkheid teruggaf', note:'In Japanse volksverhalen zijn er veel verhalen waarin iemand weggaat zodra de ware gedaante gezien is: een kraanvogel, een slang, een nachtegaal. Het zijn geen verhalen over straf.'},
    {id:'ts_seishi',    n:'De kraanvogel in de sneeuw',   h:'Het verhaal zoals het verteld wordt, al vanaf de 1e keer'},
    {id:'ts_mou',       n:'Je hoeft niet meer te weven',  h:'Als de oude man voor de 3e doek iets zegt...'},
    {id:'ts_nozokanai', n:'Een winter zonder te kijken',  h:'Als de oude vrouw alleen iets roept en weggaat...'},
    {id:'ts_mado',      n:'Het raam openen',              h:'Als je in de nacht van het afscheid de deur opent en naar de lucht kijkt...'},
    {id:'tz_hane',      n:'Het aantal veren',             h:'Als je in het verhaal van de kraanvogel tot het einde doorweeft...'},
    {id:'tz_sora',      n:'Het huis vanuit de lucht',     h:'Als je in het verhaal van de kraanvogel het weefgetouw stilzet en naar de lucht kijkt...'},
    {id:'tb_kokoro',    n:'Het hart dat wil kijken',      h:'Als je in het verhaal van de oude vrouw de papieren deur openschuift...'},
    {id:'tb_hata',      n:'Het onafgemaakte weefgetouw',  h:'Als je in het verhaal van de oude vrouw voor de kamer wacht...'}
  );

})();
