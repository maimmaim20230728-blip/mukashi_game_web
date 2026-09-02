"use strict";
/* Roodkapje - Dutch scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Stijl: eenvoudig prentenboek-Nederlands, passend bij story_nl.js.
   De beroemde vraag-en-antwoordreeks volgt de klassieke Nederlandse formule ("Om je beter te kunnen ..."). */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var AKZ_NL = {

  /* ================= Roodkapje ================= */

  z1:{art:'akz_home', text:'Dit is het verhaal van een meisje dat een rood kapje prachtig stond.\nHet kapje was gemaakt door haar grootmoeder, en het meisje droeg het elke dag.\nDaarom noemde iedereen het kind Roodkapje.', next:'z2'},

  z2:{art:'akz_home', text:'Op een dag zei haar moeder:\n"Grootmoeder aan de andere kant van het bos is ziek. Breng je haar koek en druivensap?"\n"Treuzel niet onderweg en ga niet van het pad af."', next:'z3'},

  z3:{art:'akz_home', text:'Roodkapje dacht even na.\nLaten we nog iets in de mand doen.', choices:[
    {t:'Een potje honing erbij doen', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Een knalrode appel erbij doen', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'De knalrode appel rolde in de mand en glansde daar.\nZou grootmoeder er blij mee zijn?'
    : 'Voorzichtig deed ze het potje zoete honing in de mand.\nZou grootmoeder er blij mee zijn?', next:'z4'},

  z4:{art:'akz_door', text:'"Tot straks!"\nMet de mand aan haar arm huppelde Roodkapje vrolijk de deur uit.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'Op pad met de boodschap!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'In het dennenbos glinsterde het licht tussen de takken.\nErgens zongen kleine vogels.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Hoe zal Roodkapje vandaag verder lopen?', choices:[
    {t:'Zingend verder lopen', go:'z5r', set:{walk:'uta'}},
    {t:'Naar vlinders kijken onderweg', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'Een gele vlinder fladderde voor haar uit.\nNet alsof hij haar de weg wees.'
    : '"Lalala, over het bospaadje."\nDe kleine vogels zongen met het liedje van Roodkapje mee.', next:'z6'},

  z6:{art:'akz_meet', text:'Ritsel, ritsel.\nAchter een boom vandaan kwam een grote wolf tevoorschijn.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Goedendag, jongedame. Waar ga je naartoe?"\nvroeg de wolf met een brede glimlach.';
    if(f.first) return t;
    return t + '\nWat zal Roodkapje doen?';
  }, choices:f=>{
    var c = [
      {t:'Eerlijk antwoorden', go:'z8'},
      {t:'"Dat zeg ik lekker niet!"', go:'zn1'},
      {t:'Snel naar huis terugrennen', go:'zh1'}
    ];
    if(f.item) c.push({t:'"Meneer Wolf, heb je honger?" vragen', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"Naar het huis van grootmoeder. Ze is ziek, dus ik breng haar koek en druivensap."\nRoodkapje antwoordde eerlijk.\nEn stiekem bedacht de wolf een sluw plan.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Kijk toch eens, wat een mooie bloemen daar staan.\nAls je er een bos van plukt, wordt grootmoeder vast blij."';
    if(f.first) return t;
    return t + '\nWat zal Roodkapje doen?';
  }, choices:[
    {t:'Bloemen plukken', go:'z10'},
    {t:'"Nee, ik ga er rechtstreeks heen"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'Dat is waar, dacht Roodkapje, en ze ging van het pad af.\nEen witte bloem, een blauwe bloem. En telkens als ze er een plukte, stond er verderop een nog mooiere.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Ondertussen de wolf...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'De wolf had de kortste weg genomen en was eerder bij het huis van grootmoeder.\nKlop, klop.\n"Grootmoeder, ik ben het, Roodkapje."\nHij deed haar stem na en glipte naar binnen.', next:'z12'},

  z12:{art:'akz_bed', text:'In een oogwenk werd grootmoeder helemaal opgeslokt.\nDe wolf trok haar nachthemd aan, zette haar slaapmuts op en kroop in haar bed.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Eindelijk kwam Roodkapje aan, met de bos bloemen in haar armen.\n"Hé, de deur staat open..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Grootmoeder, ik ben er!"\nDe grootmoeder in bed zag er een beetje vreemd uit.\nRoodkapje kwam zachtjes dichterbij en keek haar in het gezicht.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'Wat heb je grote oren!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'Om je beter te kunnen horen'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'Wat heb je grote ogen!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'Om je beter te kunnen zien'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'Wat heb je grote handen!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'Om je beter te kunnen pakken'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'Wat heb je een grote mond!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'Om je op te kunnen eten!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'Hap!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'Toen ze haar ogen opendeed, was alles donker. Ze zat in de buik van de wolf.\n"Ben jij dat, Roodkapje? Wat een schrik. Maar het komt goed."\nHet was de stem van grootmoeder, en een warme hand kneep zachtjes in de hare.';
    if(f.first) return t;
    return t + '\nWat zullen de twee doen?';
  }, choices:[
    {t:'Stil blijven en op hulp wachten', go:'z16'},
    {t:'Samen zo hard mogelijk zingen', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Hand in hand wachtten de twee heel stil.\nDe wolf met zijn volle buik sliep diep in het bed.\nZijn gesnurk dreunde door het hele huis.', next:'z17'},

  z17:{art:'akz_hunter', text:'Net toen kwam de jager langs, die zijn ronde door het bos deed.\n"Wat een gesnurk uit het huis van grootmoeder... Daar klopt iets niet."\nHij keek stilletjes naar binnen, en in bed lag een wolf met een dikke, ronde buik!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Knip, knip!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Met zijn schaar opende de jager voorzichtig de buik van de slapende wolf.\n"Wat was het daarbinnen donker!", zei Roodkapje.\nMet grootmoeder ging het ook goed. Geen van beiden had ook maar een schrammetje.';
    if(f.first) return t;
    return t + '\nWat zullen de twee doen?';
  }, choices:[
    {t:'De buik met stenen vullen', go:'z19'},
    {t:'Hem laten beloven: nooit meer', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Roodkapje haalde snel zware stenen uit de tuin.\nDe jager deed ze in de buik en naaide hem steek voor steek weer dicht.', next:'z20'},

  z20:{art:'akz_stone', text:'De wolf werd wakker en sprong op om weg te lopen.\nMaar de stenen in zijn buik waren zwaar, zo zwaar.\nBonk! Hij viel om en bewoog niet meer.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Iedereen ging in het gras zitten en ze deelden de koek en het druivensap.\nOok met grootmoeder leek het alweer beter te gaan.\nEn Roodkapje nam zich stevig voor:\n"Nooit meer treuzel ik van het pad af."\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Niets verklappen / rechtstreeks doorlopen -> De wijsheid van grootmoeder ---- */
  zn1:{art:'akz_meet', text:'"Dat zeg ik lekker niet!"\nRoodkapje stak haar neus in de lucht en liep met stevige passen door.\nDe wolf grijnsde en verdween achter de bomen.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Ze kreeg een onrustig gevoel van binnen.\nRoodkapje liep sneller en keek niet naar links en niet naar rechts.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Roodkapje kwam als eerste bij het huis van grootmoeder aan.\n"Grootmoeder, in het bos ben ik een grote wolf tegengekomen."\n"Lieve help. Dan doen we de deur maar op slot."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Klik, deed het slot.\nEven later: klop, klop.\n"Ik ben het, Roodkapje, doe eens open."\nHoe goed hij de stem ook nadeed, de twee bleven stil. De deur ging niet open.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Toen kraakte het. Kraak, kraak.\nDe wolf klom op het dak en ging daar op de loer liggen.\nGrootmoeder zei heel zachtjes:\n"Die wolf is dol op de geur van worst. Laten we het kookwater van de worst in de trog voor het huis gieten."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'Ik heb een goed idee'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'De lekkere worstengeur steeg in dikke wolken op tot aan het dak.\nDe wolf snuffelde, gleed, en gleed nog verder...\nPlons!\nDe wolf viel in de trog en rende kletsnat het bos in.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Grootmoeder, wat knap van je!"\n"Hihi. Dat noemen ze de wijsheid van de ouderdom."\nGrootmoeder is niet alleen iemand die beschermd wordt.\nDie avond aten ze samen hete worst.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Weglopen -> Samen met mama ---- */
  zh1:{art:'akz_forest', text:'Roodkapje draaide zich om en rende zo hard ze kon naar huis.\nDe wolf keek haar alleen maar verbaasd na.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Mama! In het bos ben ik een grote wolf tegengekomen!"\n"Fijn dat je het meteen vertelt. Dat was goed van je.\nDan gaan we samen naar grootmoeder."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'Hand in hand met haar moeder liep Roodkapje nog een keer over het bospad.\nVer weg tussen de bomen keek de wolf toe, maar naast een volwassene durfde hij niet tevoorschijn te komen.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'In het huis van grootmoeder klonk al snel vrolijk gelach.\nAls iets je bang maakt of dwarszit, vertel het dan meteen aan een volwassene.\nDat is de allerbeste toverspreuk.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Heb je honger? -> De gast uit het bos ---- */
  zt1:{art:'akz_meet', text:'"Meneer Wolf, heb je misschien honger?"\nDe wolf was zo verrast dat hij alleen maar met zijn ogen knipperde.\n"...Ik heb al drie dagen niets gegeten."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Roodkapje ging aan de kant van het pad zitten en deelde de koek en de knalrode appel.\nDe wolf nam een hap, en er rolde een traan naar beneden.'
    : 'Roodkapje ging aan de kant van het pad zitten en deelde de koek met honing erop.\nDe wolf nam een hap, en er rolde een traan naar beneden.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"Zo aardig is nog nooit iemand tegen mij geweest."\nMet een volle buik ging de wolf terug naar het diepe bos.\nToen Roodkapje het bij grootmoeder vertelde, glimlachte grootmoeder.\n"Een kind dat haar eten kan delen, is het sterkste kind ter wereld."\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Zingen -> Het koor in de buik ---- */
  zu1:{art:'akz_onaka', text:'"Grootmoeder, laten we samen zingen!"\n"Goed idee. Ook in het donker kun je zingen."\nZe haalden diep adem, en toen...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'Het koor in de buik!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"Lalala, over het bospaadje."\nBuiten voor het huis geloofde de jager zijn oren niet.\n"Gezang uit het huis? En nog wel... uit de buik van de wolf?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Knip, knip!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Door jullie lied heb ik jullie meteen gevonden", zei de jager.\nDe geschrokken wolf kneep zijn staart tussen zijn poten en rende het bos in.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Ook op de donkerste plek bereikt je stem iemand, als je hem laat horen."\nDie woorden van grootmoeder heeft Roodkapje nooit vergeten.\nVanaf die dag zongen ze samen, als een klein koor.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Laten beloven -> De ochtend van de belofte ---- */
  zy1:{art:'akz_rescue', text:'"Er stenen in stoppen is zielig. In plaats daarvan..."\nRoodkapje keek de ontwaakte wolf recht in de ogen.\n"Beloof me dat je nooit meer iemand opeet."\nDe wolf liet zijn kop hangen en zei zachtjes: "...Ik doe het nooit meer."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'In het licht van de ochtendzon ging de wolf terug naar het diepe bos.\nOf hij zijn belofte echt houdt, weet niemand.\nMaar de jager zei:\n"Het opletten laten jullie aan mij over."\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de wolf ================= */

  w1:{art:'w_fuyu', text:'Dit is het verhaal van een wolf die alleen in het winterbos leefde.\nDe sneeuw lag diep, en nergens was prooi te vinden.\nDe wolf had al drie dagen niets gegeten.', next:'w2'},
  w2:{art:'w_fuyu', text:'Een koude, koude nacht.\nHoe zal de wolf hem doorbrengen?', choices:[
    {t:'Zich in het hol oprollen', go:'w2r', set:{wnight:'maru'}},
    {t:'Naar de sterren huilen', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Naar de blauwe nachthemel omhoog: Woehoehoe!\nMaar nergens antwoordde een vriend.'
    : 'Hij legde zijn staart over zijn neus en rolde zich klein op.\nToch was de tocht ijskoud.', next:'w3'},
  w3:{art:'w_mura', text:'In de ochtend keek hij vanaf de heuvel op het dorp neer, en de geur van versgebakken brood woei omhoog.\nZijn buik rommelde luid.\nWat zal hij doen?', choices:[
    {t:'Moed verzamelen en het de bakker vragen', go:'wp1'},
    {t:'Op het bospad op iemand wachten', go:'wm1'}
  ]},

  /* ---- Het de bakker vragen ---- */
  wp1:{art:'w_panya', text:'Toen hij het dorp in kwam, renden alle mensen bang weg.\nAlleen de bakker rende niet weg.\n"...Heb je honger?"', next:'wp2'},
  wp2:{art:'w_panya', text:'De wolf knikte heel kort.\nDe bakker gaf hem een grote arm vol harde broodkorsten.\n"Jij bent de eerste wolf die het vraagt in plaats van het te stelen."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'Vanaf de volgende dag hielp de wolf met hout hakken en kreeg daarvoor brood.\nOok de mensen in het dorp die bang waren geweest, raakten langzaam aan hem gewend.\nDe moed om iets te vragen was sterker dan welke tand ook.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Op het pad wachten (de andere kant van het verhaal) ---- */
  wm1:{art:'akz_meet', text:'Terwijl hij op het bospad wachtte, kwam er een meisje met een rood kapje aan.\nHij wilde haar opeten. En toch kwam het meisje lachend naar hem toe.\n"Meneer Wolf, heb je misschien honger?"', choices:[
    {t:'Eerlijk zeggen: "Ja, ik heb honger"', go:'wt1'},
    {t:'Doorgaan met het sluwe plan', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Ik heb al drie dagen niets gegeten."\nZodra het eruit was, was de wolf verbaasd over zichzelf.\nHet meisje deed de mand open en deelde de koek met hem.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Ik heet Roodkapje. Meneer Wolf, laten we elkaar weer op dit pad ontmoeten."\nHij had haar willen opeten, en nu was ze zijn vriendin.\nOp hongerige dagen hoeft hij alleen maar naar dat kleine pad te gaan.\nAlleen al die gedachte maakt het winterbos een beetje warmer.\nEn ze leefden nog lang en gelukkig.'},

  wz1:{art:'akz_gma_out', text:'De wolf gaf een sluw antwoord en rende de kortste weg langs.\nOnder het rennen prikte er iets vreemds in zijn borst.\n"Als ik niet eet, kom ik de winter niet door", zei hij tegen zichzelf.', next:'wz2'},
  wz2:{art:'akz_bed', text:'Wat daarna gebeurde, staat in het verhaal van Roodkapje.\nHij slokte grootmoeder en ook Roodkapje op en viel in slaap.\nEn toen hij wakker werd...', next:'wz3'},
  wz3:{art:'akz_stone', text:'Zijn buik zat vol stenen.\nZo zwaar, zo zwaar, dat hij geen stap kon zetten.\n"Dus dat was het prikken in mijn borst..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'De lange winter ging voorbij,\nen de lente kwam.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'De jager op zijn ronde haalde de stenen uit de wolf, die zich niet kon bewegen, en verzorgde de wond.\n"Heb je er iets van geleerd?"\nDe wolf knikte keer op keer.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'In de lentewind ging de wolf op weg.\nAls hij honger heeft, wil hij de volgende keer zeggen: "Wil je met mij delen?"\nHet gewicht van de stenen is de wolf geen enkele dag vergeten.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van grootmoeder ================= */

  g1:{art:'g_heya', text:'Dit is het verhaal van de grootmoeder die alleen in een huis in het bos woont.\nZij is het ook die het rode kapje heeft gebreid.\nVandaag had ze wat koorts en zat ze in bed te breien.', next:'g2'},
  g2:{art:'g_heya', text:'Van de rode wol was nog een restje over.\nWat zal ze nu weer breien?', choices:[
    {t:'Kleine wanten', go:'g2r', set:{knit:'tebukuro'}},
    {t:'Een lange sjaal', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'Een lange, lange sjaal.\nZo lang dat ze hem samen met Roodkapje kunnen omslaan.'
    : 'Kleine rode wanten.\nPrecies goed voor die kleine handjes.', next:'g3'},
  g3:{art:'g_heya', text:'Toen schoot er een grote schaduw langs het raam.\nKlop, klop.\n"Grootmoeder, ik ben het, Roodkapje."\n...Kijk eens aan. Die stem klinkt vandaag anders.', choices:[
    {t:'Eerst bij het raam gaan kijken', go:'gy1'},
    {t:'"Kom binnen!" roepen', go:'go1'}
  ]},

  /* ---- Gaan kijken -> De gast op het dak ---- */
  gy1:{art:'akz_machibuse', text:'Door de kier in het gordijn keek ze naar buiten: een grote wolf!\nZonder haast en zonder ophef draaide grootmoeder de sleutel om. Klik.\n"Om een oude vrouw beet te nemen, ben je honderd jaar te vroeg."', next:'gy2'},
  gy2:{art:'akz_yane', text:'De wolf klom op het dak. Kraak, kraak.\nGrootmoeder goot het kookwater van de worst uit de pan in de trog voor het huis.\nDe lekkere geur lokte hem, de wolf gleed en gleed, en plons!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Kletsnat rende de wolf het bos in.\nToen Roodkapje later aankwam en dit verhaal hoorde, zette ze grote ogen op.\n"Grootmoeder, je lijkt wel een held!"\n"Hihi. Ik ben niet alleen iemand die beschermd wordt."\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Binnen roepen -> Rust zelfs in de buik ---- */
  go1:{art:'akz_bed', text:'Er kwam een grote wolf binnen.\nIn een oogwenk was grootmoeder doorgeslikt.\nMaar grootmoeder raakte niet in paniek.\nZe had al vele tientallen jaren lange winters doorstaan.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Kijk eens aan. In een buik is het best warm."\nEven later rolde ook Roodkapje naar binnen.\nGrootmoeder kneep stevig in het kleine handje en zei:\n"Het komt goed. Sst, luister goed. ...Hoor je dat? Voetstappen."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Knip, knip!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'De jager maakte de buik heel voorzichtig open.\n"Verbazingwekkend. Bent u daarbinnen al die tijd rustig gebleven?"\n"Ja. Wie in paniek raakt, verzint niets slims."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Als dank gaf grootmoeder de jager de lange sjaal waaraan ze had gebreid.\n"De rondes in de winter zijn vast koud."\nHet was een dag om bang van te worden, en toch lachte iedereen.\nEn ze leefden nog lang en gelukkig.'
    : 'Als dank gaf grootmoeder de jager de rode wanten waaraan ze had gebreid.\n"De rondes in de winter zijn vast koud."\nHet was een dag om bang van te worden, en toch lachte iedereen.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, AKZ_NL);

  T.ZK_EN.push(
    {section:'Roodkapje'},
    {id:'za_seishi',   n:'De redding door de jager',    h:'Het oorspronkelijke verhaal van de allereerste keer'},
    {id:'za_chie',     n:'De wijsheid van grootmoeder', h:'Als je niets verklapt en rechtstreeks doorloopt...'},
    {id:'za_gassho',   n:'Het koor in de buik',         h:'Als jullie in de donkere buik samen zingen...'},
    {id:'za_okyaku',   n:'De gast uit het bos',         h:'Als je iets in de mand doet en aardig bent tegen de wolf...'},
    {id:'za_yakusoku', n:'De ochtend van de belofte',   h:'Als je na de redding iets anders kiest dan stenen...'},
    {id:'za_okaasan',  n:'Samen met mama',              h:'Als je bij angst meteen teruggaat en het vertelt...'},
    {id:'zw_pan',      n:'De eerste keer vragen',       h:'In het verhaal van de wolf het dorp in gaan...'},
    {id:'zw_tomo',     n:'De eerste vriendin',          h:'In het verhaal van de wolf eerlijk antwoorden...'},
    {id:'zw_hansei',   n:'De lentewind',                h:'Waar het sluwe plan uiteindelijk toe leidt...'},
    {id:'zg_yane',     n:'De gast op het dak',          h:'In het verhaal van grootmoeder eerst gaan kijken...'},
    {id:'zg_onaka',    n:'Rust zelfs in de buik',       h:'In het verhaal van grootmoeder rustig blijven...'}
  );

})();
