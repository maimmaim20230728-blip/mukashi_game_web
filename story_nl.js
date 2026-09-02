"use strict";
/* Dutch scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Dutch. */

var SCENES_NL = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Er woonden eens een oude man en een oude vrouw.\nOpa ging naar de bergen om hout te sprokkelen, en oma ging naar de rivier om de was te doen.', next:'m2'},

m2:{art:'momo_river', text:'Terwijl oma bij de rivier de was deed, kwam er van bovenstrooms een grote perzik aangedreven, plits plats, plits plats.', choices:[
  {t:'Hem mee naar huis nemen', go:'m3a', set:{open:'home'}},
  {t:'Hem hier meteen openmaken', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Hè hup, hè hup! Oma droeg de perzik helemaal naar huis.\nSamen met opa maakte ze hem meteen open, en toen...', next:'c_paka'},
m3b:{art:'momo_river', text:'Oma kon niet langer wachten. Ze besloot de perzik meteen daar op een steen aan de rivier open te maken. En toen...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'Krak!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'Er sprong een gezonde kleine jongen uit!\nOma nam de baby in haar armen en haastte zich naar huis.\nSamen met opa noemde ze hem vol vreugde "Momotaro".'
  : 'Er sprong een gezonde kleine jongen uit!\nVol vreugde noemden ze de jongen die uit de perzik kwam "Momotaro".', next:'m5'},

m5:{art:'kids', text:'Momotaro speelde dolgraag met de kinderen uit het dorp.\nWat doet Momotaro vandaag?', choices:[
  {t:'Sumoworstelen', go:'m5a', set:{hobby:'sumo'}},
  {t:'Om het hardst rennen', go:'m5b', set:{hobby:'run'}},
  {t:'Helpen met het werk', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Zelfs de grootste kinderen rolden een voor een om.\n"Zo sterk is niemand anders in het dorp!" riep iedereen verbaasd.', next:'m6'},
m5b:{art:'kids', text:'Nergens was een kind sneller dan Momotaro.\nHij rende als de wind, en iedereen keek met open mond toe.', next:'m6'},
m5c:{art:'kids', text:'Zelfs zwaar brandhout was in de armen van Momotaro zo licht als een veertje.\nOpa en oma waren daar erg blij mee.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro groeide snel op en werd een sterke en vriendelijke jongeman.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'Die nacht.\nIn het dorp gebeurde er iets ergs.'}, then:'m7'},
m7:{art:'village_sad', text:'De volgende ochtend.\nToen werd duidelijk: de ogers van Ogereiland hadden de schat van het dorp geroofd.\nDe mensen in het dorp wisten zich geen raad.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro stond op.\n"Ik ga naar Ogereiland en haal onze schat terug!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'Oma maakte de beste gierstballetjes van heel Japan voor hem.\nHij hing ze aan zijn riem, en zo was hij klaar voor de reis.'
  : 'Oma wil de beste gierstballetjes van heel Japan voor hem maken.\nWat doet Momotaro nu?', choices:[
  {t:'Veel gierstballetjes laten maken', go:'m10', set:{dango:'full'}},
  {t:'Er maar een paar nemen en licht reizen', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'De ochtend van vertrek.\nOma haalde twee hoofdbanden tevoorschijn.\nWelke doet hij om?', choices:[
  {t:'De witte hoofdband', go:'m10r', set:{band:'white'}},
  {t:'De rode hoofdband', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Hij knoopte de rode hoofdband stevig om, en diep in zijn borst werd het warm.\n"Ik ga op weg!"'
  : 'Hij knoopte de witte hoofdband stevig om, en in zijn hart werd het stil en helder.\n"Ik ga op weg!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'Op naar de ogers!!'}, then:'m11'},

m11:{art:'michi', text:'De weg splitste zich in tweeën.\nDe ene ging over de bergen, de andere langs de zee.\nWelke weg neemt hij?', choices:[
  {t:'De bergweg nemen', go:'m11a', set:{road:'yama'}},
  {t:'De weg langs de zee nemen', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Vanaf de top van de berg zag hij ver weg in zee een eenzaam zwart eiland.\nDus dat is Ogereiland...\nMomotaro balde zijn vuisten.', next:'m12'},
m11b:{art:'umizoi', text:'Hij liep over het zandstrand en luisterde naar de golven.\nAan zijn voeten vond hij een mooie perzikroze schelp.\nDat wordt een cadeautje voor oma.', next:'m12'},

m12:{art:'dog', text:'Terwijl hij verder liep, kwam er een hond aandraven.\n"Momotaro, waar ga je heen? Geef me een gierstballetje, dan ga ik met je mee!"', choices:[
  {t:'Hem een balletje geven', go:'c_dog_join', set:{dog:1}},
  {t:'"Sorry, ik heb haast"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'De hond sluit zich aan!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Ik heb er maar weinig, maar we delen samen."\nDe hond kwispelde wild van blijdschap!'
  : 'De hond kwispelde wild van blijdschap!\n"Ik ga met je mee, waar je ook heen gaat!"', next:'m13'},
m12n:{art:'dog', text:'Een beetje teleurgesteld keek de hond Momotaro na.', next:'m13'},

m13:{art:'saru', text:'Toen riep er een aap vanuit een boom naar beneden.\n"Geef me een gierstballetje, dan wijs ik je de weg!"', choices:[
  {t:'Hem een balletje geven', go:'c_saru_join', set:{saru:1}},
  {t:'"Sorry, ik moet verder"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'De aap sluit zich aan!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Ook met een klein stukje balletje was de aap dolblij.\nHij gleed vlug uit de boom en klopte op zijn borst.'
  : 'De aap gleed vlug uit de boom en klopte op zijn borst.\n"Laat het maar aan mij over!"', next:'m14'},
m13n:{art:'saru', text:'De aap zwaaide boven uit de boom naar hem.', next:'m14'},

m14:{art:'kiji', text:'Er kwam een fazant uit de lucht naar beneden gevlogen.\n"Geef me een gierstballetje, dan bekijk ik Ogereiland van bovenaf!"', choices:[
  {t:'Hem een balletje geven', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Sorry, ik moet nu echt gaan"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'De fazant sluit zich aan!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'De fazant at zijn halve balletje heel zorgvuldig op.\nDaarna spreidde hij blij zijn vleugels en maakte een rondje in de lucht.'
  : 'De fazant spreidde blij zijn vleugels en maakte een rondje in de lucht.\n"Laat de lucht maar aan mij over!"', next:'m15'},
m14n:{art:'kiji', text:'De fazant maakte een grote ronde en vloog weg naar de bergen.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'In de haven lag een kleine boot.';
  if(n===0) t += '\nHij had geen metgezellen bij zich, maar zijn besluit stond vast.';
  else if(n===1) t += '\nMet zijn tweeën stapten ze in en hielpen elkaar.';
  else t += '\nToen iedereen aan boord was, zat de boot helemaal vol.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Afvaaaren!!'}, then:'m16'},

m16:{art:'fune_night', text:'De zee was stil in de nacht.\nOnder de sterrenhemel dacht Momotaro na.', choices:[
  {t:'Denken aan de gierstballetjes van oma', go:'m17', set:{think:'dango'}},
  {t:'Denken aan de schat van het dorp', go:'m17', set:{think:'takara'}},
  {t:'Zich afvragen hoe de ogers zijn', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'De zoete smaak van de gierstballetjes leek hem moed te geven.\nMorgen gaat het vast goed.',
  takara:'De gezichten van de mensen uit het dorp kwamen hem voor ogen.\nHij moet de schat echt terughalen.',
  oni:'Zijn ze sterk? Zijn ze eng?\n...Dat weet hij pas als hij ze ontmoet.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'In het ochtendlicht kwam het eiland snel dichterbij.';
  if(f.first) t += '\nDe fazant vloog vooruit en wees iedereen waar het eiland lag.';
  else if(f.kiji) t += '\nDe fazant vloog vooruit en kwam al snel terug.\n"Er is één grote poort! En achterom loopt een rotspad!"';
  else t += '\nOp de boeg van de boot keek Momotaro recht naar het eiland.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'Daar is het, Ogereiland!'}, then:'m19'},

m19:{art:'onigashima', text:'Op het rotsige eiland rees een grote zwarte poort op.\nWaar gaat hij naar binnen?', choices:f=>[
  {t:'Rechtop door de hoofdpoort gaan', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Het rotspad nemen dat de fazant vond', go:'m20', set:{gate:'back'}}
    : {t:'Om het eiland heen gaan en een weg zoeken', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro ging met opgeheven hoofd voor de poort staan.\n"Ogers! Ik kom de schat van het dorp terughalen!"'
  : (f.kiji
    ? 'Geleid door de fazant klommen ze stil het rotspad op.\nDe ogerwachters hadden nog niets gemerkt.'
    : 'Tussen de rotsen vonden ze een smal pad.\nZe klommen er stil omhoog, en de ogerwachters hadden nog niets gemerkt.'), next:'m21'},
m21:{art:'onigashima', text:'Zijn hart begon te bonzen.\nNu is het zover.', choices:[
  {t:'Een keer diep ademhalen', go:'m21r', set:{calm:1}},
  {t:'Met een vaart naar binnen stormen', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'In, uit.\nZijn hart werd helemaal rustig. Goed, we gaan.'
  : 'Nog voor hij kon nadenken, was zijn lichaam al in beweging!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'Met een dof gedreun kwam de ogerhoofdman tevoorschijn!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'Wie ben jij!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Geef de schat terug!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Ik kom de schat van het dorp terughalen. Ik ben Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(Toen hij aan de smaak van de gierstballetjes dacht, was de angst vreemd genoeg weg.)',
    takara:'(Iedereen in het dorp wacht. Verliezen kan niet!)',
    oni:'(Groot. Hij ziet er sterk uit. Maar... zijn ogen staan een beetje verdrietig.)'
  }[f.think] || '');
  t += '\nHoe gaat hij vechten?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'Met zijn allen tegelijk!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Met het zwaard vechten!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Hond, ga jij!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Aap, ga jij!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Fazant, ga jij!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Het zwaard opbergen en praten', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'Met zijn allen tegelijk!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'De beet van de hond!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'De kras van de aap!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'De snavelstoot van de fazant!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'De zwaardslag!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'De stormloop van de hond!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'De snelle greep van de aap!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'De duikvlucht van de fazant!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'Wat?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'Voltreffer!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'De hond beet in zijn been, de aap kraste over zijn rug, en de fazant hakte klapwiekend op zijn hoofd.\nZelfs de hoofdman was niet opgewassen tegen de aanval van alle 3 tegelijk.\n"I-ik geef me over!"\nAls iedereen samenwerkt, is er niets te vrezen.', next:'m24'},

rk:{art:'maitta', text:f=>'Momotaro hanteerde zijn zwaard bliksemsnel!\nDe ijzeren knots van de hoofdman vloog hoog de lucht in.\n"I-ik geef me over!"\n' + HOBBY_LINE_NL(f), next:'m24'},
rd:{art:'maitta', text:'De hond stoof weg als de wind en beet de hoofdman in zijn been!\nMet een luide bons belandde de hoofdman op zijn achterste.\n"I-ik geef me over!"\nMomotaro, die op de hond had vertrouwd, lachte trots.', next:'m24'},
rs:{art:'maitta', text:'De aap sprong lenig heen en weer en griste de ijzeren knots uit de handen van de hoofdman.\n"I-ik geef me over!"\nOm de snelheid van de aap klapte Momotaro vanzelf in zijn handen!', next:'m24'},
rj:{art:'maitta', text:'De fazant dook uit de lucht naar beneden! Klapwiek, klapwiek, en de ogen van de hoofdman waren bedekt!\nDe hoofdman werd duizelig: "I-ik geef me over!"\nOp een metgezel uit de lucht kun je echt rekenen. Momotaro zwaaide hoog omhoog.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'De hoofdman maakte zich klein en bood zijn excuses aan.\n"We geven de schat terug. Vergeef ons alsjeblieft..."';
  if(!f.first) t += '\nWat doet Momotaro nu?';
  return t;
}, choices:[
  {t:'Met de schat terug naar het dorp gaan', go:'e_gaisen'},
  {t:'Vragen waarom ze hem geroofd hebben', go:'m25'}
]},
m25:{art:'talk', text:'Aarzelend begon de hoofdman te vertellen.\n"Ogereiland zit vol rotsen, er groeit hier niets. We wilden niet dat onze kinderen honger zouden lijden..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro legde zijn hand niet op zijn zwaard en keek recht voor zich uit.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Laten we praten!!'}, then:'t2'},
t2:{art:'talk', text:'De hoofdman zette grote ogen op en begon toen aarzelend te vertellen.\n"Ogereiland zit vol rotsen, er groeit hier niets. Voor onze kinderen konden we niets anders doen dan jullie schat lenen..."\nMomotaro luisterde naar de hoofdman en dacht na.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'De gierstballetjes met iedereen delen', go:'e_kibi'});
  c.push({t:'Beloven: de schat terug, en vrienden worden met het dorp', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Met een kar vol schatten kwam Momotaro terug in het dorp.\nHet hele dorp juichte!\n';
  t += ({
    minna:'De hond, de aap en de fazant liepen trots voorop in de grote optocht.\nOver de daden van de 3 metgezellen werd in het dorp nog lang verteld.',
    katana:'In het dorp ging het over niets anders dan het prachtige zwaardwerk van Momotaro.',
    dog:'De kar werd getrokken door de hond, die die dag het meeste had gedaan. Trots liep hij voorop in de feestoptocht.',
    saru:'De aap droeg de buitgemaakte ijzeren knots op zijn schouder en was er maar wat trots op.',
    kiji:'De fazant maakte een rondje boven het feest en liet een mooie veer naar beneden dwarrelen.'
  }[f.style] || '');
  if(f.shell) t += '\nAan oma gaf hij ook de perzikroze schelp.\n"Je hoort de zee erin", lachte oma.';
  t += '\nEn ze leefden nog lang en gelukkig.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro nam de schat aan en stuurde in ruil daarvoor rijst en pootaardappelen naar Ogereiland.\nVanaf de volgende lente kwamen de ogers helpen bij het werk op de akkers van het dorp.\nEn op het dorpsfeest dreunden de trommels van de ogers.';
  if(f.shell) t += '\nOma liet haar schelp klinken op de maat van de trommels.';
  t += '\nEn ze leefden nog lang en gelukkig.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"We geven de schat terug. Dat is een belofte."\nMomotaro en de hoofdman haakten hun pinken in elkaar.\nVanaf toen kwamen Ogereiland en het dorp langzaam nader tot elkaar.\nMomotaro was zonder gevecht teruggekeerd, en de mensen uit het dorp prezen hem: "Dat is me wat!"';
  if(f.shell) t += '\nToen hij de schelp liet zien, lachte oma stralend.';
  t += '\nEn ze leefden nog lang en gelukkig.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Hier, de beste gierstballetjes van heel Japan. Laten we ze samen opeten."\nDe ogers propten de balletjes in hun mond, en dikke tranen rolden over hun wangen.\n"Zoiets lekkers hebben we nog nooit gegeten..."\nMomotaro en de ogers ruimden samen de rotsen op en legden een akker aan.\nDat is het vreemdste en het warmste einde van allemaal.\nEn ze leefden nog lang en gelukkig.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Dit is het verhaal van Aka, een jonge oger die op Ogereiland woont.\nOgereiland zit vol rotsen. Ook als de ogers een akker aanleggen, groeit er niets.', next:'o2'},
o2:{art:'oni_village', text:'Welk werk doet Aka vandaag?', choices:[
  {t:'Water halen onder aan de klif', go:'o2r', set:{owork:'mizu'}},
  {t:'Rotsen wegdragen van de akker', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Met de zware emmer op zijn schouder klom hij keer op keer het klifpad op.\nBoven wachten zijn kleine broertjes met een kurkdroge keel.'
  : 'Hij rolde een dikke rots opzij, maar de grond eronder was steenhard.\nToch gelooft Aka dat hier ooit een akker zal groeien.', next:'o3'},
o3:{art:'oni_dinner', text:'Het avondeten was alleen dunne rijstepap.\nZijn broertje Midori zei:\n"Grote broer, ik heb honger..."', choices:[
  {t:'"In de lente eten we ons vol", zeggen', go:'o3r', set:{care:'hagemasu'}},
  {t:'Hem de helft van zijn eigen pap geven', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"Jouw helft smaakt ook lekker!"\nMidori lachte vrolijk.\nDe buik van Aka bleef een beetje leeg, maar in zijn borst werd het warm.'
  : 'Midori knikte kort en at de rest van zijn pap heel zorgvuldig op.\nDe lente is nog ver weg.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'Die nacht.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'De hoofdman riep iedereen bijeen en zei:\n"We lenen de schat uit het dorp. Zodat de kinderen de winter doorkomen."\nIn de borst van Aka werd het onrustig.\nWat doet Aka?', choices:[
  {t:'"Maar dat is stelen!" roepen', go:'c_dorobo'},
  {t:'Zwijgen en meegaan', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'Dat is stelen!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Overal om hen heen werd het doodstil.\nDe hoofdman zweeg heel lang...\n"En wat moeten we dan doen?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka dacht uit alle macht na.', choices:[
  {t:'De mensen uit het dorp om hulp vragen', go:'o7a'},
  {t:'Met eigen handen een akker aanleggen', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"We buigen ons hoofd en vragen of ze eten met ons willen delen. In ruil daarvoor bedanken we hen met de kracht van de ogers."\nDe hoofdman kruiste zijn dikke armen en knikte langzaam.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'De volgende dag stapten de ogers in een boot en voeren naar het dorp.\nWapens hadden ze niet bij zich, maar wel manden vol wilde druiven.\nDat vroeg veel, veel meer moed dan een schat roven.\nEn wat het dorp antwoordde... dat is een ander verhaal.'},
o7b:{art:'oni_village', text:'"Laten we alle rotsen weghalen en een akker aanleggen! Met de kracht van de ogers lukt dat!"\nVanaf die dag droegen alle ogers van het eiland rotsen weg.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Volle ogerkracht!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'De rotsen waren zo groot als bergen, en het werk wilde maar niet ophouden.\nMaar vreemd genoeg: het zweet dat ze samen vergoten, viel hun helemaal niet zwaar.\nDe lente kwam, en op de akker verschenen kleine groene scheutjes.\nMidori sprong en huppelde van blijdschap.\nEn ze leefden nog lang en gelukkig.'},

o5b:{art:'oni_raid', text:'Aka stapte in de boot bij de hoofdman en de anderen.\nOok toen ze bij het dorp aankwamen, kon Aka zich niet van de boot verroeren.\nIn de verte flakkerden lichtjes, en het leek of hij iemand hoorde huilen.', next:'o6b'},
o6b:{art:'oni_takara', text:'Ook terug op het eiland bleef het onrustig in de borst van Aka.\nVoor de opgestapelde schat dacht Aka na.', choices:[
  {t:'Stiekem één stuk van de schat terugbrengen', go:'o7c'},
  {t:'Niets doen terwijl de nacht voorbijgaat', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka nam één klein stuk van de schat mee en voer uit op de nachtelijke zee.\nHij legde het stil op het strand van het dorp, en net toen hij terug wilde gaan...\n"Meneer oger, kom je dat terugbrengen?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Ontdekt?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'Er stond een klein meisje dat Aka rustig aankeek.\nMet een bonzend hart knikte Aka een keer.\nHet meisje lachte en zei zachtjes:\n"Dank je wel. Het blijft ons geheim."\nHet was een koude nacht, en toch werd het in de borst van Aka behaaglijk warm.'},

o7d:{art:'oni_night', text:'Aka kon niets doen, en er gingen vele nachten voorbij.\nOp een avond zat hij slapeloos boven op de klif naar zee te kijken, en van ver weg kwam een kleine boot dichterbij.\nWie zou er in die boot zitten?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'De ochtend brak aan.'}, then:'o8'},
o8:{art:'oni_village', text:'Op het hele eiland brak grote onrust uit.\n"Een mens! Er komt een mens met een hoofdband deze kant op!"\nHet hart van Aka maakte een sprong.\nWat doet Aka?', choices:[
  {t:'Midori achter de rotsen verstoppen', go:'o9a', set:{guard:'midori'}},
  {t:'Naar de hoofdman toe rennen', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Sst. Hier ben je veilig."\nAka hield het kleine handje van Midori stevig vast.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'De hoofdman hield zijn ijzeren knots vast en staarde naar de poort.\nZijn rug zag er groter uit dan anders.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'Het gevecht was in een oogwenk voorbij.\nDe ijzeren knots van de hoofdman vloog weg, en Aka keek vanuit zijn schuilplaats met ingehouden adem toe.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'I-ik geef me over!!'}, then:'o11'},
o11:{art:'oyabun', text:'De jonge mens met de hoofdband borg zijn zwaard op en praatte ergens over.\nMisschien kan Aka hem nu aanspreken.\nWat doet Aka?', choices:[
  {t:'Moed verzamelen en uit de schuilplaats stappen', go:'e_o_asa'},
  {t:'In de schuilplaats blijven en ze nakijken', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"E-eh! Ik help wel met het dragen van de schat!"\nToen Aka uit zijn schuilplaats sprong, zette de jonge mens grote ogen op.\nDaarna lachte hij en zei:\n"Dank je wel. Jij bent een moedige oger."\nDe ochtendzon scheen warm op hen beiden.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'De moed om hem aan te spreken kwam niet.\nDe boot met de schat werd steeds kleiner aan de andere kant van de zee.\nMaar Aka nam een besluit.\nDe volgende keer zegt hij vast "dank je wel" en ook "het spijt me".\nEn die "volgende keer" komt zeker, en niet eens zo ver weg.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Dit is nog een verhaal: het verhaal van een fazant die in de bergen woont.\nDe hond is sterk. De aap is een meester in klimmen.\nEn hijzelf is klein en heeft geen kracht...\nDe fazant had altijd een beetje te weinig vertrouwen in zichzelf.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Kun je met zulke kleine vleugels\neigenlijk wel iets doen?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Ook vandaag een wandeling door de lucht, helemaal alleen.\nWaar vliegt hij heen?', choices:[
  {t:'Over de bergen vliegen', go:'k2r', set:{kfly:'yama'}},
  {t:'Naar de zee toe vliegen', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Van hoog boven de bergen lijkt het dorp wel een speelgoeddoos.\nUit de schoorstenen steeg de rook op, pof, pof.'
  : 'Boven de zee waait de wind hard, en zijn veren klapperen luid.\nVer weg was een zwart eiland te zien, helemaal alleen.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'Op een dag zag hij beneden op de weg een vreemde stoet lopen.\nEen jonge mens met een hoofdband, een hond en een aap.\nHet ziet eruit alsof ze er plezier in hebben.', choices:[
  {t:'Moedig zijn en ze aanspreken', go:'k4a'},
  {t:'Nog even vanuit de lucht toekijken', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'Klapwiek, klapwiek, de fazant vloog omlaag en riep zo hard als hij kon:\n"M-mag ik ook mee?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Terwijl hij hen stil vanuit de lucht volgde, zag de jonge mens hem en zwaaide.\n"Vriend uit de lucht, ga toch met ons mee!"', next:'k5'},
k5:{art:'kiji_join', text:'"Hier, een gierstballetje voor jou."\nHet was zoeter dan hij ooit had geproefd.\n"D-daarvoor in de plaats, laat de lucht maar aan mij over!"\nzei de fazant zo hard als hij kon.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'De fazant sluit zich aan!!'}, then:'k6'},
k6:{art:'fune', text:'Op de boot merkte de fazant iets op.\nAlleen hij kan over de zee vliegen.\nDe hond kan dat niet, en de aap ook niet.', choices:[
  {t:'Hoog vliegen en het hele eiland bekijken', go:'k6r', set:{kscout:'high'}},
  {t:'Laag vliegen en de poort van dichtbij bekijken', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Vanuit de hoge lucht zag hij de hele vorm van het eiland.\nAchter de poort ontdekte hij ook een smal rotspad.\n"Mensen, er is een weg achterom!"'
  : 'Rakelings over de golven vloog hij tot vlak voor de poort.\nHoeveel wachters er stonden en hoe groot hun ijzeren knotsen waren, bekeek hij allemaal goed.\n"Mensen, ik weet precies wat ons te wachten staat!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'Het gevecht met de ogerhoofdman begon!\nDe ijzeren knots van de hoofdman suisde omlaag naar de hond.\nHet hart van de fazant maakte een sprong.\nWat doet de fazant?', choices:[
  {t:'Voor zijn ogen gaan vliegen!', go:'c_kwaza1'},
  {t:'Iedereen luid waarschuwen!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'De duikvlucht van de fazant!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'Wat?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Zonder na te denken vloog de fazant vlak voor het gezicht van de hoofdman.\nKlapwiek, klapwiek met zijn vleugels, en de hoofdman zag niets meer!\nOp dat moment sprong de hond opzij, en de aap nam de ijzeren knots weg.\n"I-ik geef me over!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Hond, achter je!!'}, then:'k8b'},
k8b:{art:'maitta', text:'Een stem zo luid als een bergecho schalde over het strijdveld.\nDe hond week lenig uit, en het zwaard van Momotaro flitste.\n"I-ik geef me over!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Na het gevecht zei Momotaro:\n"De grootste verdienste van vandaag is die van de fazant."\nDe hond en de aap knikten allebei hard.\nDiep in die kleine borst werd het opeens warm.\nOok wie klein is, kan iets.\nDe fazant laat zijn kop niet meer hangen.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Zonder die roep was het slecht afgelopen", zei de hond.\n"De lucht in de gaten houden kan alleen de fazant", zei de aap.\nDe fazant werd verlegen en verstopte zijn gezicht achter een vleugel.\nOok wie klein is, kan iets.\nDe fazant laat zijn kop niet meer hangen.'}

};

function HOBBY_LINE_NL(f){
  return {
    sumo:'De kracht in zijn heupen, geoefend bij het sumoworstelen, kwam hem op het juiste moment van pas.',
    run:'Zijn benen, geoefend bij het hardlopen, waren sneller dan die van wie dan ook.',
    help:'Zijn armen, geoefend bij het dagelijkse werk, waren niet voor niets zo sterk.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (NL) ================= */
var ZK_NL = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triomf: allen samen',      h:'Met alle 3 metgezellen tegelijk vechten...'},
  {id:'a_katana', n:'Triomf: het zwaard',       h:'Met het zwaard vechten en de schat mee naar huis nemen...'},
  {id:'a_dog',    n:'Triomf: de hond',          h:'De hond laten vechten en de schat mee naar huis nemen...'},
  {id:'a_saru',   n:'Triomf: de aap',           h:'De aap laten vechten en de schat mee naar huis nemen...'},
  {id:'a_kiji',   n:'Triomf: de fazant',        h:'De fazant laten vechten en de schat mee naar huis nemen...'},
  {id:'b_naka',   n:'Vrede met de ogers',       h:'Na de overwinning naar de reden vragen...'},
  {id:'c_yaku',   n:'De belofte van het gesprek', h:'Zonder metgezellen gaan en het zwaard opbergen...'},
  {id:'d_kibi',   n:'Het gierstwonder',         h:'Met veel gierstballetjes alleen gaan en het zwaard opbergen...'},
  {id:'o_negai',  n:'Manden vol wilde druiven', h:'In het ogerverhaal ingrijpen en het vragen kiezen...'},
  {id:'o_hatake', n:'De akker op Ogereiland',   h:'In het ogerverhaal ingrijpen en de akker kiezen...'},
  {id:'o_kaesu',  n:'Het geheim op het strand', h:'Zwijgend meegaan en de schat terugbrengen...'},
  {id:'o_asa',    n:'De belofte in de ochtendzon', h:'Op de ochtend dat niets lukte, moed verzamelen...'},
  {id:'o_miokuri',n:'Ooit de woorden',          h:'Zonder moed de boot nakijken...'},
  {id:'k_hero',   n:'De kleine held',           h:'In het fazantverhaal naar binnen vliegen...'},
  {id:'k_voice',  n:'De wachter van de lucht',  h:'In het fazantverhaal luid roepen...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_NL, ZK_NL };
