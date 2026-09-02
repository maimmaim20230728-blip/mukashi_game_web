"use strict";
/* De noordenwind en de zon - Dutch scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Dutch wording is original;
   no existing Dutch translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var KITAKAZE_NL = {

  /* ================= De noordenwind en de zon ================= */

  kz1:{art:'kz_sora', text:'Dit is het verhaal van de noordenwind en de zon.\nOp een dag maakten de noordenwind en de zon hoog in de lucht ruzie.\n"Ik ben sterker." "Nee, ik ben het."', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Wie is sterker?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'Die ochtend liep een reiziger het dorp uit, de weg op.\nMet een jas aan en een tas over de schouder.';
    if(f.first) return t;
    return t + '\nWat gaat er in de tas?';
  }, choices:[
    {t:'Een fles water', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Brood en een appel', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'In de tas: brood, een appel en nog een jas.\nHet leek een lange weg te worden.'
    : 'In de tas: een fles water en nog een jas.\nHet leek een lange weg te worden.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'De noordenwind en de zon zagen de reiziger.\n"Wie de reiziger de jas laat uittrekken, die is de sterkste."';
    if(f.first) return t + '\nEerst was de noordenwind aan de beurt.';
    return t + '\nWat nu?';
  }, choices:[
    {t:'De krachten meten. De noordenwind begint', go:'kz4'},
    {t:'Niet meten, maar het samen proberen', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'De noordenwind blies meteen vanaf het begin hard.\nWoesj!\nDe reiziger hield de kraag van de jas vast.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Woesj!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'De noordenwind blies nog harder.\nWoesj, woesj!\nDe reiziger hield de jas met beide handen stevig vast.\n"Koud. Ik trek er nog een aan."\nUit de tas kwam nog een jas, en die ging over de eerste heen.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Woesj, woesj!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Koud...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'De noordenwind blies met alle kracht die er was.\nBladeren vlogen op en het zand van de weg dwarrelde omhoog.\nToch liet de reiziger de jas niet los.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Woeoeoesj!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'De noordenwind werd moe.';
    if(f.first) return t + '\n"Zon, nu jij."\nEn de noordenwind gaf de reiziger door aan de zon.';
    return t + '\nWat doet de noordenwind?';
  }, choices:[
    {t:'"Zon, nu jij"', go:'kzc_kao_kk'},
    {t:'De wolken halen', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Nu jij'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'De zon scheen eerst maar matig.\nWarm en zacht.\nDe reiziger trok de tweede jas uit en stopte die terug in de tas.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Warm en zacht...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'De zon scheen feller.\nFel en heet.\nDe reiziger begon te zweten.';
    if(f.first) return t;
    return t + '\nWat doet de reiziger?';
  }, choices:[
    {t:'Gewoon doorlopen', go:'kzc_poka2'},
    {t:'In de schaduw gaan', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Fel en heet!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'De zon scheen nog feller.\n"Heet. Niet meer om uit te houden."\nDe reiziger trok de jas helemaal uit en hing hem over de schouder.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Naast de weg stroomde een rivier.\nDe reiziger legde de jas op de oever en sprong het water in.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Plons!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'De reiziger baadde in de rivier, en het zag er aangenaam uit.\nHoog in de lucht keken de noordenwind en de zon toe.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'De reiziger weet niets van de wedstrijd.\nDe jas droogde op de oever, en de reiziger liep verder.\nEinde.'},

  /* ---- Wasweer met zijn tweeën ---- */
  kzf1:{art:'kz_sentaku', text:'"Laten we ophouden met meten en het samen proberen."\nDe noordenwind blies, en de zon scheen.\nDe hele was in het dorp was al voor de middag droog.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'De reiziger liep aangenaam verder, met de jas nog aan.\nDe wind was koel en het zonlicht warm.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'De mensen in het dorp noemden die dag "het mooiste wasweer".\nWie van de twee sterker is, heeft niemand beslist.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Even rusten in de schaduw ---- */
  kzk1:{art:'kz_kokage', text:'De reiziger ging in de schaduw van een grote boom zitten.\nDe jas bleef aan.\nEven water drinken en uitrusten.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'De zon zakte lager en het werd koel.\nDe reiziger liep weer verder, met de jas nog aan.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'Hoog in de lucht keken de noordenwind en de zon elkaar aan.\nDe wedstrijd bleef onbeslist.\nEinde.'},

  /* ---- Toen de wolken kwamen ---- */
  kzu1:{art:'kz_kumo', text:'De noordenwind haalde de wolken erbij.\nDe lucht werd donker en het begon te regenen.\nDe reiziger schuilde onder een boom.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'Toen de regen ophield, liep de reiziger weer verder.\nDe jas bleef aan.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'"Laten we het voor vandaag hierbij laten", zei de zon.\n"Een andere keer", zei de noordenwind.\nEinde.'},

  /* ================= Het verhaal van de noordenwind ================= */

  kk1:{art:'kz_sora', text:'Dit is het verhaal van de noordenwind.\nDe noordenwind komt aanwaaien van de zee in het noorden.\nHard blazen, dat is het werk van de noordenwind.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Waar gaat de noordenwind vandaag blazen?', choices:[
    {t:'Naar de zee', go:'kk2r', set:{kklife:'umi'}},
    {t:'Naar de weiden', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'De noordenwind blies één keer over de weiden.\nHet gras wees ineens allemaal dezelfde kant op.'
    : 'De noordenwind blies één keer over de zee.\nOveral kwamen ineens witte golven omhoog.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'De wedstrijd om de reiziger de jas te laten uittrekken liep niet goed af.\nEen beetje moe rustte de noordenwind hoog in de lucht uit.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Blazen kan ik juist goed'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Vanuit de lucht is beneden van alles te zien.\nWaar gaat de noordenwind heen?', choices:[
    {t:'Naar de schepen in de haven', go:'kkh1'},
    {t:'Naar de bloemen in de weide', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'In de haven lag een schip dat niet vooruitkwam.\nEr was geen wind, en de zeilen hingen slap.\nDe noordenwind blies zachtjes tegen de zeilen.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'De zeilen bolden op, en het schip voer de zee op.\nDe zeelui zwaaiden omhoog naar de lucht.\nEn ze leefden nog lang en gelukkig.'},
  kkt1:{art:'kk_nohara', text:'De bloemen in de weide droegen zaden.\nDe noordenwind nam de zaden mee en droeg ze ver weg.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'De volgende lente bloeiden dezelfde bloemen op een verre heuvel.\nHet waren de zaden die de noordenwind had gedragen.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de zon ================= */

  kh1:{art:'kz_sora', text:'Dit is het verhaal van de zon.\nDe zon komt in de ochtend op in het oosten en gaat in de avond onder in het westen.\nSchijnen, dat is het werk van de zon.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'Waar schijnt de zon vanochtend het eerst op?', choices:[
    {t:'Op de akkers', go:'kh2r', set:{khlife:'hatake'}},
    {t:'Op de daken van het dorp', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'De zon scheen op de daken van het dorp.\nEen kat op een dak rekte zich uit.'
    : 'De zon scheen op de akkers.\nDe dauw glinsterde, en de jonge scheuten groeiden.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'Op de dag van de wedstrijd met de reiziger scheen de zon feller dan anders.\nDe reiziger sprong de rivier in, maar de aarde op de akkers droogde uit en barstte open.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Misschien heb ik te fel geschenen'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'Wat doet de zon?', choices:[
    {t:'De wolk om schaduw vragen', go:'khk1'},
    {t:'Blijven schijnen tot de zon ondergaat', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'De zon vroeg het aan een wolk die voorbijkwam.\n"Wil je een beetje schaduw maken boven de akkers?"\nDe wolk bleef boven de akkers staan.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'In de schaduw konden de akkers even op adem komen.\nOok de zon kan niet alles.\nDe dag dat de zon het aan de wolk vroeg, is de zon niet vergeten.\nEn ze leefden nog lang en gelukkig.'},
  khy1:{art:'kh_yuuhi', text:'De zon bleef schijnen tot ze onderging achter de bergen in het westen.\nDe zon zag de rug van de reiziger over een verre heuvel gaan.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Of de reiziger de jas aantrok of uittrok, de zon kan het niet meer zien.\nMorgen komt de zon weer op.\nEinde.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_NL);

  T.ZK_EN.push(
    {section:'De noordenwind en de zon', note:'In de oude Griekse tekst eindigt dit verhaal ermee dat de reiziger in een rivier gaat baden. Wie van de twee gewonnen heeft, staat niet in het boek. De zin "in veel gevallen werkt overtuigen beter dan geweld" is er later bij geschreven. Er is meer dan één manier om het verhaal te lezen.'},
    {id:'kz_seishi', n:'Een bad in de rivier',      h:'Het overgeleverde verhaal, meteen de eerste keer'},
    {id:'kz_kokage', n:'Even rusten in de schaduw', h:'Als de reiziger bij de zon in de schaduw gaat...'},
    {id:'kz_futari', n:'Wasweer met zijn tweeën',   h:'Als ze ophouden met meten en het samen doen...'},
    {id:'kz_kumo',   n:'Toen de wolken kwamen',     h:'Als de noordenwind de wolken haalt...'},
    {id:'kk_ho',     n:'De zeilen bollen',          h:'Als je in het verhaal van de noordenwind naar de haven gaat...'},
    {id:'kk_tane',   n:'Zaden dragen',              h:'Als je in het verhaal van de noordenwind naar de weide gaat...'},
    {id:'kh_kumo',   n:'De wolk vragen',            h:'Als je in het verhaal van de zon de wolk iets vraagt...'},
    {id:'kh_yuuhi',  n:'Tot de zon ondergaat',      h:'Als je in het verhaal van de zon schijnt tot de zon ondergaat...'}
  );

})();
