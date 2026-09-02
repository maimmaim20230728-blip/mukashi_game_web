"use strict";
/* Swedish scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Swedish. */

var SCENES_SV = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Det var en gång en gubbe och en gumma.\nGubben gick upp i bergen för att hämta ved, och gumman gick ner till floden för att tvätta kläder.', next:'m2'},

m2:{art:'momo_river', text:'När gumman tvättade vid floden kom en stor persika flytande uppifrån, plask och skvalp, plask och skvalp.', choices:[
  {t:'Ta med den hem', go:'m3a', set:{open:'home'}},
  {t:'Öppna den på plats', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Hej och hå, hej och hå! Gumman bar persikan hela vägen hem.\nTillsammans med gubben började hon genast öppna den, och då...', next:'c_paka'},
m3b:{art:'momo_river', text:'Gumman kunde inte vänta längre. Hon bestämde sig för att öppna persikan direkt på en sten vid floden. Och då...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'Knäck!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'Ut hoppade en pigg liten pojke!\nGumman tog upp barnet i famnen och skyndade hem.\nFulla av glädje gav hon och gubben honom namnet Momotaro.'
  : 'Ut hoppade en pigg liten pojke!\nFulla av glädje gav de två pojken som föddes ur persikan namnet Momotaro.', next:'m5'},

m5:{art:'kids', text:'Momotaro tyckte om att leka med barnen i byn mer än något annat.\nVad ska Momotaro göra i dag?', choices:[
  {t:'Brottas sumo', go:'m5a', set:{hobby:'sumo'}},
  {t:'Springa ikapp', go:'m5b', set:{hobby:'run'}},
  {t:'Hjälpa till med sysslorna', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Även de största barnen trillade omkull, ett efter ett.\n"Så stark är ingen annan i byn!" sa alla förvånat.', next:'m6'},
m5b:{art:'kids', text:'Det fanns inget barn någonstans som var snabbare än Momotaro.\nHan sprang som vinden, och alla tappade hakan.', next:'m6'},
m5c:{art:'kids', text:'Även tung ved blev lätt som en fjäder i Momotaros armar.\nBåde gubben och gumman var mycket hjälpta.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro växte fort och blev en stark och vänlig ung man.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'Den natten.\nNågot förskräckligt hände i byn.'}, then:'m7'},
m7:{art:'village_sad', text:'Nästa morgon.\nDå stod det klart: trollen från Trollön hade tagit byns skatt.\nByborna visste inte vad de skulle ta sig till.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro reste sig upp.\n"Jag går till Trollön och hämtar tillbaka vår skatt!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'Gumman gjorde Japans allra bästa hirsbollar åt honom.\nHan hängde dem vid bältet, och nu var allt klart för resan.'
  : 'Gumman säger att hon ska göra Japans allra bästa hirsbollar åt honom.\nVad ska Momotaro göra?', choices:[
  {t:'Be om många hirsbollar', go:'m10', set:{dango:'full'}},
  {t:'Ta bara några och resa lätt', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'Morgonen då resan börjar.\nGumman tog fram två pannband.\nVilket ska han knyta om huvudet?', choices:[
  {t:'Det vita pannbandet', go:'m10r', set:{band:'white'}},
  {t:'Det röda pannbandet', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Han knöt det röda pannbandet hårt, och djupt inne i bröstet blev det varmt.\n"Nu ger jag mig av!"'
  : 'Han knöt det vita pannbandet hårt, och inom honom blev det stilla och klart.\n"Nu ger jag mig av!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'Nu bär det av mot trollen!!'}, then:'m11'},

m11:{art:'michi', text:'Vägen delade sig i två.\nEn väg gick över berget, den andra längs havet.\nVilken väg ska han ta?', choices:[
  {t:'Ta bergsvägen', go:'m11a', set:{road:'yama'}},
  {t:'Ta vägen längs havet', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Från bergets topp såg han en svart ö ensam långt ute till havs.\nDet måste vara Trollön...\nMomotaro knöt händerna hårt.', next:'m12'},
m11b:{art:'umizoi', text:'Han gick över sandstranden och lyssnade på vågorna.\nVid sina fötter hittade han ett vackert persikorosa snäckskal.\nDet får bli en present till gumman.', next:'m12'},

m12:{art:'dog', text:'Medan han travade vidare kom en hund emot honom.\n"Momotaro, vart är du på väg? Ger du mig en hirsboll så följer jag med dig!"', choices:[
  {t:'Ge honom en hirsboll', go:'c_dog_join', set:{dog:1}},
  {t:'"Förlåt, jag har bråttom"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'Hunden ansluter sig!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Jag har bara några få, men vi delar på dem."\nHunden viftade vilt på svansen av glädje!'
  : 'Hunden viftade vilt på svansen av glädje!\n"Jag följer med dig vart du än går!"', next:'m13'},
m12n:{art:'dog', text:'Lite besviken såg hunden efter Momotaro.', next:'m13'},

m13:{art:'saru', text:'Sedan ropade en apa ner från ett träd.\n"Ger du mig en hirsboll så visar jag dig vägen!"', choices:[
  {t:'Ge honom en hirsboll', go:'c_saru_join', set:{saru:1}},
  {t:'"Förlåt, jag måste vidare"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'Apan ansluter sig!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Även över den lilla biten hirsboll blev apan mycket glad.\nHan klättrade smidigt ner från trädet och slog sig för bröstet.'
  : 'Apan klättrade smidigt ner från trädet och slog sig för bröstet.\n"Överlåt vägen åt mig!"', next:'m14'},
m13n:{art:'saru', text:'Apan vinkade uppifrån trädet.', next:'m14'},

m14:{art:'kiji', text:'Då kom en fasan flygande ner från himlen.\n"Ger du mig en hirsboll så spanar jag på Trollön uppifrån!"', choices:[
  {t:'Ge honom en hirsboll', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Förlåt, jag måste gå nu"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'Fasanen ansluter sig!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'Fasanen åt sin halva hirsboll ytterst varsamt.\nSedan bredde han glatt ut vingarna och tog ett varv på himlen.'
  : 'Fasanen bredde glatt ut vingarna och tog ett varv på himlen.\n"Överlåt allt i luften åt mig!"', next:'m15'},
m14n:{art:'kiji', text:'Fasanen tog ett stort varv och flög bort mot bergen.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'Vid hamnen låg en liten båt.';
  if(n===0) t += '\nHan hade inga följeslagare med sig, men Momotaro hade bestämt sig.';
  else if(n===1) t += '\nDe två steg ombord tillsammans och hjälptes åt.';
  else t += '\nNär alla hade stigit ombord var båten alldeles full.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Kasta loss!!'}, then:'m16'},

m16:{art:'fune_night', text:'Havet är stilla om natten.\nUnder stjärnhimlen sitter Momotaro och tänker.', choices:[
  {t:'Minnas smaken av gummans hirsbollar', go:'m17', set:{think:'dango'}},
  {t:'Tänka på byns skatt', go:'m17', set:{think:'takara'}},
  {t:'Undra hur trollen egentligen är', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'Den söta smaken av hirsbollarna tycktes ge honom mod.\nI morgon går det säkert bra.',
  takara:'Ansiktena på alla i byn dyker upp för honom.\nSkatten måste han hämta tillbaka.',
  oni:'Är de starka? Är de skrämmande?\n...Det vet man inte förrän man möter dem.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'I morgonljuset kom ön allt närmare.';
  if(f.first) t += '\nFasanen flög i förväg och visade alla var ön låg.';
  else if(f.kiji) t += '\nFasanen flög i förväg och kom snart tillbaka.\n"Det finns en enda stor port! Och en klippstig på baksidan!"';
  else t += '\nI båtens för såg Momotaro rakt mot ön.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'Där är den, Trollön!'}, then:'m19'},

m19:{art:'onigashima', text:'På den klippiga ön reser sig en stor svart port.\nVar ska han ta sig in?', choices:f=>[
  {t:'Gå rakt in genom huvudporten', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Ta klippstigen som fasanen hittade', go:'m20', set:{gate:'back'}}
    : {t:'Runda ön och leta efter en bakväg', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro rätade på ryggen och ställde sig framför porten.\n"Ni troll! Jag har kommit för att hämta tillbaka byns skatt!"'
  : (f.kiji
    ? 'Med fasanen som vägvisare klättrade de tyst uppför klippstigen på baksidan.\nVakterna bland trollen hade ännu inte märkt något.'
    : 'Mellan klipporna hittade de en smal stig.\nDe klättrade tyst uppför den, och vakterna bland trollen hade ännu inte märkt något.'), next:'m21'},
m21:{art:'onigashima', text:'Hjärtat började bulta.\nNu är det dags.', choices:[
  {t:'Ta ett djupt andetag', go:'m21r', set:{calm:1}},
  {t:'Rusa in med full fart', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'In... ut.\nHjärtat lugnade sig genast. Bra, nu går vi.'
  : 'Innan han hann tänka rörde sig kroppen redan!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'Med ett dån i marken trädde trollhövdingen fram!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'Vem är du!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Ge tillbaka skatten!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Jag har kommit för att hämta tillbaka byns skatt. Jag är Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(När han tänkte på smaken av hirsbollarna var rädslan märkligt nog borta.)',
    takara:'(Alla i byn väntar. Jag får inte förlora!)',
    oni:'(Stor. Han ser stark ut. Men... det är något sorgset i hans ögon.)'
  }[f.think] || '');
  t += '\nHur ska han slåss?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'Alla på en gång!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Slåss med svärdet!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Hunden, nu!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Apan, nu!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Fasanen, nu!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Stoppa undan svärdet och prata', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'Alla på en gång!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Hundens bett!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Apans klor!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Fasanens näbbhugg!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'Ett enda svärdshugg!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Hundens anfall!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Apans snabba grepp!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Fasanens störtdykning!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'Vad?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'Fullträff!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'Hunden bet i benet, apan klöste ryggen och fasanen hackade i huvudet med flaxande vingar.\nInte ens hövdingen klarade sig mot alla 3 på en gång.\n"J-jag ger mig!"\nNär alla håller ihop finns det inget att vara rädd för.', next:'m24'},

rk:{art:'maitta', text:f=>'Momotaros svärd for fram snabbt som en blixt!\nHövdingens järnklubba slogs högt upp i luften.\n"J-jag ger mig!"\n' + HOBBY_LINE_SV(f), next:'m24'},
rd:{art:'maitta', text:'Hunden rusade fram som vinden och bet hövdingen i benet!\nMed en duns landade hövdingen på baken.\n"J-jag ger mig!"\nMomotaro, som hade litat på hunden, rätade på ryggen och skrattade.', next:'m24'},
rs:{art:'maitta', text:'Apan hoppade lätt hit och dit och ryckte plötsligt järnklubban ur hövdingens händer.\n"J-jag ger mig!"\nÅt apans snabba grepp klappade Momotaro i händerna helt av sig själv!', next:'m24'},
rj:{art:'maitta', text:'Fasanen störtdök från himlen! Flax, flax med vingarna, och hövdingen såg ingenting!\nHövdingen blev alldeles yr: "J-jag ger mig!"\nPå vännen i luften kan man lita. Momotaro vinkade högt upp mot himlen.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'Hövdingen gjorde sig alldeles liten och bad om ursäkt.\n"Vi ger tillbaka skatten. Förlåt oss..."';
  if(!f.first) t += '\nVad ska Momotaro göra?';
  return t;
}, choices:[
  {t:'Ta skatten och gå hem till byn', go:'e_gaisen'},
  {t:'Fråga varför de tog den', go:'m25'}
]},
m25:{art:'talk', text:'Hövdingen började berätta, långsamt och stötvis.\n"Trollön är full av klippor, ingenting växer här. Vi ville inte att våra barn skulle gå hungriga..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro lade inte handen på svärdet, utan såg rakt fram.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Jag vill prata!!'}, then:'t2'},
t2:{art:'talk', text:'Hövdingen spärrade upp ögonen och började sedan berätta, långsamt och stötvis.\n"Trollön är full av klippor, ingenting växer här. För barnens skull fanns det inget annat att göra än att låna er skatt..."\nMomotaro lyssnade på hövdingen och tänkte efter.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Dela hirsbollarna med alla', go:'e_kibi'});
  c.push({t:'Lova: skatten tillbaka, och vänskap med byn', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Med en vagn full av skatter kom Momotaro tillbaka till byn.\nHela byn jublade!\n';
  t += ({
    minna:'Hunden, apan och fasanen gick stolt först i det stora tåget.\nOm de 3 vännernas insats berättade man i byn länge efteråt.',
    katana:'I byn talade man inte om något annat än Momotaros skickliga svärdsföring.',
    dog:'Vagnen drogs av hunden, som hade gjort den största insatsen. Stolt gick han först i festtåget.',
    saru:'Apan bar den erövrade järnklubban på axeln och såg mycket nöjd ut.',
    kiji:'Fasanen tog ett varv över festen och lät en vacker fjäder falla ner.'
  }[f.style] || '');
  if(f.shell) t += '\nTill gumman gav han också det persikorosa snäckskalet.\n"Man hör havet i det", skrattade gumman.';
  t += '\nOch så levde de lyckliga i alla sina dagar.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro tog emot skatten och skickade i gengäld ris och sättpotatis till Trollön.\nFrån nästa vår kom trollen och hjälpte till med arbetet på byns åkrar.\nPå byns fest dundrade trollens trummor.';
  if(f.shell) t += '\nGumman lät snäckskalet klinga i takt med trummorna.';
  t += '\nOch så levde de lyckliga i alla sina dagar.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"Vi ger tillbaka skatten. Det är ett löfte."\nMomotaro och hövdingen krokade lillfingrarna i varandra.\nDärefter började Trollön och byn så småningom besöka varandra.\nMomotaro hade kommit hem utan att slåss, och byborna berömde honom: "Det var något det!"';
  if(f.shell) t += '\nNär han visade upp snäckskalet log gumman glatt.';
  t += '\nOch så levde de lyckliga i alla sina dagar.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Här, Japans allra bästa hirsbollar. Nu äter vi dem tillsammans."\nTrollen stoppade munnen full av hirsbollar, och stora tårar rullade nerför kinderna.\n"Något så gott har vi aldrig ätit i hela vårt liv..."\nMomotaro och trollen flyttade undan klipporna tillsammans och anlade en åker.\nDet är det märkligaste och det varmaste av alla slut.\nOch så levde de lyckliga i alla sina dagar.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Det här är berättelsen om Aka, ett ungt troll som bor på Trollön.\nTrollön är full av klippor. Hur de än anlägger en åker växer ingenting där.', next:'o2'},
o2:{art:'oni_village', text:'Vilket arbete ska Aka göra i dag?', choices:[
  {t:'Hämta vatten nedanför klippan', go:'o2r', set:{owork:'mizu'}},
  {t:'Bära bort klippor från åkern', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Med det tunga karet på axeln går han uppför klippstigen gång på gång.\nDe små lillebröderna väntar där uppe, torra i halsen.'
  : 'Han rullar undan ett stort stenblock, men jorden under är stenhård.\nÄndå tror Aka att det en dag ska bli en åker just här.', next:'o3'},
o3:{art:'oni_dinner', text:'Till kvällsmat fanns bara tunn risgröt.\nLillebror Midori sa:\n"Storebror, jag är hungrig..."', choices:[
  {t:'Säga: "När våren kommer äter vi oss riktigt mätta"', go:'o3r', set:{care:'hagemasu'}},
  {t:'Ge honom hälften av sin egen gröt', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"Din del smakar också gott!"\nMidori log stort.\nAkas mage är fortfarande lite tom, men i bröstet känns det varmt.'
  : 'Midori nickade litet och åt upp resten av gröten ytterst varsamt.\nTill våren är det ännu långt.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'Den natten.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'Hövdingen samlade alla och sa:\n"Vi lånar skatten från byn. Det är för att barnen ska klara vintern."\nDet blev oroligt i Akas bröst.\nVad ska han göra?', choices:[
  {t:'Säga stopp: "Men det är ju stöld!"', go:'c_dorobo'},
  {t:'Tiga och följa med', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'Det är ju stöld!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Allt runt omkring blev alldeles tyst.\nHövdingen teg länge, länge...\n"Vad ska vi då göra i stället?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka tänkte så hårt han kunde.', choices:[
  {t:'Gå och be byborna om hjälp', go:'o7a'},
  {t:'Anlägga en åker med egna händer', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"Vi bugar oss och ber dem dela med sig av maten. I gengäld tackar vi dem med trollens styrka."\nHövdingen lade de tjocka armarna i kors och nickade långsamt.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'Nästa dag steg trollen i en båt och styrde mot byn.\nVapen hade de inga med sig, i stället bar de korgar fulla med vilda druvor.\nDet krävde mycket, mycket mer mod än att ta en skatt.\nOch vad byn svarade... det är en annan berättelse.'},
o7b:{art:'oni_village', text:'"Vi flyttar undan alla klippor och anlägger en åker! Med trollens styrka går det!"\nFrån den dagen började öns alla troll bära bort klippor.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Trollkraft för fullt!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'Klipporna var stora som berg, och arbetet ville aldrig ta slut.\nMen märkligt nog: svetten som alla utgjuter tillsammans känns inte tung alls.\nVåren kom, och små grodder tittade upp i åkern.\nMidori hoppade och skuttade av glädje.\nOch så levde de lyckliga i alla sina dagar.'},

o5b:{art:'oni_raid', text:'Aka steg i båten tillsammans med hövdingen och de andra.\nÄven när de kom fram till byn kunde Aka inte röra sig ur båten.\nLångt borta fladdrade ljus, och han tyckte sig höra någon gråta.', next:'o6b'},
o6b:{art:'oni_takara', text:'Även tillbaka på ön var det fortfarande oroligt i Akas bröst.\nFramför den upptornade skatten tänkte Aka efter.', choices:[
  {t:'Smyga tillbaka med ett stycke av skatten', go:'o7c'},
  {t:'Inte göra något alls medan natten går', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka tog med sig ett litet stycke av skatten och rodde ut på det nattliga havet.\nHan lade det försiktigt på byns strand, och just när han skulle vända tillbaka.\n"Herr troll, kom du för att lämna tillbaka det?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Upptäckt?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'En liten flicka stod och såg stilla på Aka.\nMed bultande hjärta nickade Aka en gång.\nFlickan log och sa med låg röst:\n"Tack. Det blir vår hemlighet."\nNatten var kall, men i Akas bröst var det alldeles varmt.'},

o7d:{art:'oni_night', text:'Utan att kunna göra något gick den ena natten efter den andra.\nEn kväll satt Aka sömnlös uppe på klippan och såg ut över havet, och då kom en liten båt närmare långt bortifrån.\nVem sitter det i den båten?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'Morgonen grydde.'}, then:'o8'},
o8:{art:'oni_village', text:'Hela ön blev ett enda stort tumult.\n"En människa! En människa med pannband är på väg hit!"\nAkas hjärta gjorde ett skutt.\nVad ska han göra?', choices:[
  {t:'Gömma Midori bakom klipporna', go:'o9a', set:{guard:'midori'}},
  {t:'Springa till hövdingens sida', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Schh. Här är du trygg."\nAka höll Midoris lilla hand hårt.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'Hövdingen grep om järnklubban och stirrade mot porten.\nHans rygg såg större ut än vanligt.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'Striden var över på ett ögonblick.\nHövdingens järnklubba slogs undan, och Aka såg på från sitt gömställe med andan i halsen.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'J-jag ger mig!!'}, then:'o11'},
o11:{art:'oyabun', text:'Den unge mannen med pannband stoppade undan svärdet och talar om något.\nKanske skulle Aka kunna tilltala honom nu.\nVad ska han göra?', choices:[
  {t:'Ta mod till sig och kliva fram ur gömstället', go:'e_o_asa'},
  {t:'Stanna kvar i gömstället och se dem fara', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"U-ursäkta! Jag kan hjälpa till att bära skatten."\nNär den unge mannen såg Aka hoppa fram ur gömstället spärrade han upp ögonen.\nSedan log han och sa:\n"Tack. Du är ett modigt troll."\nMorgonsolen lyste varmt över dem båda.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'Modet att säga något kom aldrig.\nBåten med skatten blev mindre och mindre ute på havet.\nMen Aka bestämde sig.\nNästa gång de möts ska han säga både "tack" och "förlåt".\nDet där "nästa gång" kommer helt säkert, i en framtid som inte är långt borta.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Det här är ännu en berättelse: berättelsen om en fasan som bor i bergen.\nHunden är stark. Apan är en mästare på att klättra i träd.\nJämfört med dem är han själv liten och har ingen kraft alls...\nFasanen hade alltid lite för lite tilltro till sig själv.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Kan man göra något alls\nmed så små vingar?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Också i dag en promenad på himlen, helt ensam.\nVart ska flygturen gå?', choices:[
  {t:'Flyga över bergen', go:'k2r', set:{kfly:'yama'}},
  {t:'Flyga ut mot havet', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Uppifrån bergen ser byn ut som en leksakslåda.\nUr skorstenarna steg röken, puff, puff.'
  : 'Över havet blåser vinden hårt, och fjädrarna smattrar och flaxar.\nLångt borta syntes en svart ö helt ensam.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'En dag upptäckte han ett märkligt följe som gick på vägen nedanför.\nEn ung man med pannband, en hund och en apa.\nDe ser ut att ha trevligt.', choices:[
  {t:'Ta mod till sig och tilltala dem', go:'k4a'},
  {t:'Se på lite till uppifrån himlen', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'Flax, flax, fasanen flög ner och sa med så hög röst han bara kunde:\n"F-får jag följa med er också?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Medan han tyst följde efter uppifrån himlen märkte den unge mannen honom och vinkade.\n"Du vän i luften, följ med oss du också!"', next:'k5'},
k5:{art:'kiji_join', text:'"Varsågod, en hirsboll till dig."\nDen var så söt att kinderna nästan föll av.\n"O-och i gengäld, överlåt allt i luften åt mig!"\nsa fasanen med så hög röst han bara kunde.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'Fasanen ansluter sig!!'}, then:'k6'},
k6:{art:'fune', text:'Ombord på båten märkte fasanen en sak.\nDen ende som kan flyga över havet är han själv.\nDet kan varken hunden eller apan.', choices:[
  {t:'Flyga högt och se hela ön', go:'k6r', set:{kscout:'high'}},
  {t:'Flyga lågt och undersöka porten på nära håll', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Högt uppe på himlen såg han hela öns form.\nHan såg också att det fanns en smal klippstig bakom porten.\n"Hör ni, det finns en bakväg!"'
  : 'Han flög tätt över vågorna, ända fram till porten.\nHur många vakter det stod där och hur stora deras järnklubbor var, allt tittade han noga på.\n"Hör ni, nu vet jag precis hur det ser ut hos dem!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'Striden mot trollhövdingen började!\nHövdingens järnklubba svischade ner mot hunden.\nFasanens hjärta gjorde ett skutt.\nVad ska han göra?', choices:[
  {t:'Flyga rakt framför hans ögon!', go:'c_kwaza1'},
  {t:'Varna alla med hög röst!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Fasanens störtdykning!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'Vad?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Utan att tänka flög fasanen rakt framför hövdingens ansikte.\nFlax, flax med vingarna, och hövdingen såg ingenting!\nI det ögonblicket kom hunden undan med ett lätt skutt, och apan ryckte till sig järnklubban.\n"J-jag ger mig!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Hunden, bakom dig!!'}, then:'k8b'},
k8b:{art:'maitta', text:'En röst stor som ett bergseko genljöd över stridsplatsen.\nHunden vek lätt undan, och Momotaros svärd blänkte till.\n"J-jag ger mig!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Efter striden sa Momotaro:\n"Dagens största insats gjorde fasanen."\nBåde hunden och apan nickade kraftigt.\nDjupt inne i det lilla bröstet blev det med ens varmt.\nÄven den som är liten kan göra något.\nFasanen sänker inte blicken längre.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Utan det ropet hade det gått illa", sa hunden.\n"Att hålla utkik på himlen kan bara fasanen", sa apan.\nFasanen blev generad och gömde ansiktet bakom en vinge.\nÄven den som är liten kan göra något.\nFasanen sänker inte blicken längre.'}

};

function HOBBY_LINE_SV(f){
  return {
    sumo:'Kraften i höfterna, tränad i sumo, kom väl till pass i rätt ögonblick.',
    run:'Benen, tränade i kapplöpning, gav sig inte för någon.',
    help:'Armarna, tränade av det dagliga arbetet, var inte starka i onödan.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (SV) ================= */
var ZK_SV = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triumf: alla tillsammans', h:'Slåss med alla 3 vännerna på en gång...'},
  {id:'a_katana', n:'Triumf: svärdet',          h:'Slåss med svärdet och ta hem skatten...'},
  {id:'a_dog',    n:'Triumf: hunden',           h:'Låt hunden slåss och ta hem skatten...'},
  {id:'a_saru',   n:'Triumf: apan',             h:'Låt apan slåss och ta hem skatten...'},
  {id:'a_kiji',   n:'Triumf: fasanen',          h:'Låt fasanen slåss och ta hem skatten...'},
  {id:'b_naka',   n:'Försoning med trollen',    h:'Fråga efter segern varför de gjorde det...'},
  {id:'c_yaku',   n:'Löftet i samtalet',        h:'Gå utan följeslagare och stoppa undan svärdet...'},
  {id:'d_kibi',   n:'Hirsbollarnas under',      h:'Gå ensam med många hirsbollar och stoppa undan svärdet...'},
  {id:'o_negai',  n:'Korgar med vilda druvor',  h:'I trollets berättelse, säg stopp och välj att be om hjälp...'},
  {id:'o_hatake', n:'Åkern på Trollön',         h:'I trollets berättelse, säg stopp och välj åkern...'},
  {id:'o_kaesu',  n:'Hemlighet på nattstranden', h:'Följ med tyst och lämna sedan tillbaka skatten...'},
  {id:'o_asa',    n:'Löfte i morgonsolen',      h:'Ta mod till dig den morgon då inget gick...'},
  {id:'o_miokuri',n:'En dag kommer orden',      h:'Se båten fara utan att modet kommer...'},
  {id:'k_hero',   n:'Den lille hjälten',        h:'I fasanens berättelse, dyk rakt in...'},
  {id:'k_voice',  n:'Himlens utkik',            h:'I fasanens berättelse, ropa så högt du kan...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_SV, ZK_SV };
