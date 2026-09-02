"use strict";
/* De drie biggetjes - Dutch scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Eigen vertaling,
   geen bestaande Nederlandse vertaling nagetekend.
   Stijl: eenvoudig prentenboek-Nederlands, passend bij story_nl.js. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var KOBUTA_NL = {

  /* ================= De drie biggetjes ================= */

  p1:{art:'buta_hajimari', text:'Dit is het verhaal van 3 biggetjes die broers waren.\nHet grote biggetje, het middelste biggetje en het kleine biggetje.\nAlle drie waren ze groot geworden, en nu wilde ieder een eigen huis bouwen.', next:'p2'},

  p2:{art:'buta_hajimari', text:'De ochtend van het vertrek. Wat zeggen de biggetjes tegen hun moeder?', choices:[
    {t:'Vrolijk "Daar gaan we dan!"', go:'p2r', set:{plife:'genki'}},
    {t:'"We brengen je iets lekkers mee!"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"Daar verheug ik me op", zei de moeder met een glimlach.\nHaar hand zwaaide en zwaaide, nog heel lang na.'
    : '"Het ga jullie goed!", riep de moeder, net zo vrolijk.\nHaar heldere stem ging met hen mee, en hun stappen werden licht.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'De weg splitste zich in drieën.';
    if(f.first) return t + '\nDe 3 biggetjes zwaaiden naar elkaar en gingen ieder een eigen weg.';
    return t + '\nWat doen de biggetjes nu?';
  }, choices:[
    {t:'Ieder een eigen weg gaan', go:'p4'},
    {t:'Met zijn drieën één huis bouwen', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'Het grote biggetje kwam een man tegen met een dikke bos stro op zijn rug.\n"Mag ik alstublieft wat van dat stro?"\nEen huis van stro is nog dezelfde dag klaar.\nZo snel klaar zijn, dat is er het mooiste aan.', next:'p5'},

  p5:{art:'buta_eda', text:'Het middelste biggetje kwam een man tegen met een arm vol takken.\n"Mag ik alstublieft wat van die takken?"\nDoor een huis van takken waait de wind, lekker koel.\nDat is er het mooiste aan.', next:'p6'},

  p6:{art:'buta_renga', text:'Het kleine biggetje kwam een man tegen die een kar vol bakstenen trok.\n"Mag ik alstublieft wat van die bakstenen?"\nEen huis van bakstenen duurt lang, maar het wordt heel stevig.\nDat is er het mooiste aan.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Tok, tok! Tok, tok!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Er stonden drie huizen klaar.\nHet huis van stro, het huis van takken en het huis van bakstenen.\nOp elk huis kon je trots zijn.';
    if(f.first) return t;
    return t + '\nWat doen de biggetjes eerst in hun nieuwe huis?';
  }, choices:[
    {t:'Elkaar de huizen laten zien', go:'p7r', set:{plife2:'miseai'}},
    {t:'Even pauzeren en thee drinken', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'Thee na het werk smaakt extra lekker.\n"Morgen gaan we bij elkaar op bezoek!"'
    : '"Dat van jou was zo snel klaar!" "Bij jou waait een fijne wind!" "Dat van jou is zo stevig!"\nElk huis had echt zijn eigen goede kant.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'Op dat moment.\nEen hongerige wolf kwam de berg af\nen bleef voor het huis van stro staan.';
    return 'Op dat moment.\nHet kleine biggetje zag in de verte een wolf die het bergpad af kwam.\nWat doen de biggetjes?';
  }, choices:[
    {t:'Afwachten en kijken', go:'pc_vs'},
    {t:'De anderen waarschuwen en samenkomen in het bakstenen huis', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Biggetjes tegen wolf!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'De wolf klopte op het huis van stro, klop, klop.\n"Biggetje, biggetje, laat me erin."\n"Nee, nee, ik doe niet open. Bij de haartjes, haartjes, haartjes op mijn kin, echt niet!"\n"Dan blaas ik en puf ik, tot je hele huis wegwaait!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'Woeoeoesj!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'Het huis van stro wervelde de lucht in en was weg.\nHet grote biggetje rolde naar buiten en rende weg,\nhet takkenhuis van het middelste biggetje in.', next:'p11'},

  p11:{art:'buta_eda', text:'De wolf kwam er meteen achteraan.\n"Biggetjes, biggetjes, laat me erin."\nDeze keer antwoordden de twee met één stem:\n"Nee, nee, we doen niet open. Bij de haartjes, haartjes, haartjes op onze kin, echt niet!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'Woesj, woeoeoesj!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'Ook het huis van takken vloog alle kanten op.\nDe twee renden zo hard als ze konden,\nhet bakstenen huis van het kleine biggetje in.', next:'p13'},

  p13:{art:'buta_naka', text:'"Hier zijn we veilig.\nAan dit huis heb ik lang gebouwd, daarom is het heel stevig."\nHet kleine biggetje deed de deur stevig op slot.', next:'p14'},

  p14:{art:'buta_renga', text:'"Biggetjes, biggetjes, laat me erin."\n"NEE, NEE, WE DOEN NIET OPEN. BIJ DE HAARTJES, HAARTJES, HAARTJES OP ONZE KIN, ECHT NIET!"\nDe wolf haalde diep, diep adem.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... Het verroert zich niet!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Hoe vaak de wolf ook blies, het bakstenen huis verroerde zich niet.';
    if(f.first) return t + '\nHijgend en puffend keek de wolf omhoog naar de schoorsteen op het dak.';
    return t + '\nDe hongerige wolf bedacht zijn volgende zet.';
  }, choices:[
    {t:'Door de schoorsteen naar binnen klimmen', go:'p16'},
    {t:'Met lieve woorden naar buiten lokken', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'De wolf klom op het dak en zette een poot in de schoorsteen.\nMaar binnen in het huis had men het allang zien aankomen.', next:'p17'},

  p17:{art:'buta_nabe', text:'Onder aan de schoorsteen, in de haard, stond een grote pot.\nPruttel, pruttel. Hij stond boordevol kokend water.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plomp, plons!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"Heet, heet, heet, heet!!"\nMet een verbrande achterkant rende de wolf\nregelrecht terug de berg op.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Vanaf die dag kwam de wolf niet meer langs.\nDe 3 biggetjes kwamen af en toe bij elkaar\nen lepelden vrolijk een warme soep.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Het echte Engelse verhaal (Jacobs 1890: de 3 listen) ---- */
  pg1:{art:'buta_renga', text:'De wolf maakte zijn stem heel zacht.\n"Zeg, biggetje. Aan de rand van het dorp ligt een veld met lekkere rapen.\nZullen we er morgenochtend om 6 uur samen heen gaan?"\nHet kleine biggetje had het meteen door. (Dit is een val.)\n"Goed. Dan om 6 uur."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Mooi zo, ik verheug me op 6 uur!'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'De volgende ochtend stond het biggetje al om 5 uur op,\nplukte vlug zijn rapen en was weer thuis.\nToen de wolf om 6 uur kwam, stond hij te kijken.\n"Ik ben er al geweest. Ik heb een hele pot vol rapen."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'Wat nou, al geweest?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Daarna vroeg de wolf hem mee naar de appelboom. "Om 5 uur haal ik je op."\nHet biggetje ging al om 4 uur weg. Maar terwijl het nog in de boom zat,\nkwam de wolf eraan.\n"Ik geef je de allerlekkerste appel!"\nHet biggetje gooide een appel ver, ver weg,\nen terwijl de wolf hem ging halen, klom het naar beneden en rende naar huis.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Als laatste vroeg de wolf hem mee naar de kermis in de stad. "We gaan om 3 uur \'s middags."\nHet biggetje ging al voor de middag weg en kocht een botervat.\nOp de terugweg zag het van boven aan de helling de wolf naar boven komen.\nToen kroop het biggetje in het vat.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Denderdedender! Denderdedender!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Met het biggetje erin denderde het vat de helling af!\nToen de wolf dat grote ronde ding op zich af zag komen,\nschrok hij vreselijk. Met de staart tussen de poten rende hij weg.', next:'pg6'},
  pg6:{art:'buta_renga', text:'Toen de wolf later hoorde hoe het zat, werd hij woedend.\n"Nu is het genoeg! Ik kom door de schoorsteen naar binnen!"\nMaar binnen in het huis had men het allang zien aankomen.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'In de haard pruttelde de grote pot ook vandaag.\nEr zat een hete soep in, boordevol de geplukte rapen.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plomp, plons!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"Heet, heet, heet, heet!!"\nErnstig verbrand vluchtte de wolf diep, diep de bergen in,\nen daarna liet hij zich nooit meer zien.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'Het rapenveld, de appelboom en het botervat.\nDit is de weg die het dichtst bij het oude verhaal uit Engeland komt.\nHet slimme kleine biggetje leefde daarna nog lang en tevreden.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Vanaf het begin met zijn drieën ---- */
  pk1:{art:'buta_renga', text:'"Laten we samen één huis bouwen, een heel stevig huis!"\nNa dat ene woord van het kleine biggetje begonnen de 3 bakstenen te sjouwen.\nMet zijn drieën zijn zelfs zware bakstenen geen probleem.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Onder één dak stonden drie bedden.\nHet werd een prachtig huis, met een haard en met ramen.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Daar kwam de hongerige wolf aan\nen hij haalde diep, diep adem.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... Het verroert zich niet!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'De wolf bleef blazen tot de zon onderging\nen ging toen doodmoe terug de berg op.\nEen huis dat je met vereende krachten bouwt, is steviger dan wat ook.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Waakzaam en voorbereid ---- */
  pn1:{art:'buta_michi', text:'"De wolf komt eraan!"\nHet kleine biggetje rende snel naar de huizen van de twee broers.\nDe 3 kwamen haastig samen in het bakstenen huis.', next:'pn2'},
  pn2:{art:'buta_naka', text:'Door het raam zagen ze hoe de wolf het huis van stro wegblies.\n"Niemand thuis?!"\nOok het huis van takken blies hij weg.\n"Hier is ook niets?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Als laatste blies hij op het bakstenen huis. Maar het verroerde zich niet.\nDe wolf was helemaal uitgeput\nen ging zitten, nog altijd hongerig.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Uit het raam kwam een stem.\n"Bezoek? Sorry hoor, voor vandaag zijn we al gesloten."\nDe wolf sjokte terug de berg op.\nWie voorbereid is, blijft rustig. De 3 dronken verder van hun thee.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de wolf ================= */

  pw1:{art:'pwolf_yama', text:'Dit is het verhaal van een wolf die op de berg woonde.\nDe laatste tijd vond hij bijna niets meer te eten,\nen zijn buik was altijd leeg.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Waar zoekt de wolf vandaag naar eten?', choices:[
    {t:'In de buurt van de rivier zoeken', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Diep in het bos zoeken', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Bij de bessen in het bos waren de vogels hem al voor geweest.\nZijn buik knorde luid.'
    : 'In de rivier was zelfs geen schaduw van een vis te zien.\nZijn buik knorde luid.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Onder aan de berg stonden 3 nieuwe huizen naast elkaar.\nEn van ergens kwam een heerlijke geur aandrijven.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'Dit ruikt naar een feestmaal!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Blazen was de bijzondere kunst van de wolf.\nHij blies het huis van stro en het huis van takken weg,\nmaar de biggetjes glipten hem elke keer door de poten.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Bleef nog het bakstenen huis over. En dat verroerde zich niet.\nDe hongerige wolf bedacht zijn volgende zet.', choices:[
    {t:'Met lieve woorden naar buiten lokken', go:'pw6'},
    {t:'Eerlijk met ze praten', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Vroeg hij hem mee naar het rapenveld, dan was het biggetje er al eerder.\nVroeg hij hem mee naar de appelboom, dan glipte het weg.\nToen hij op de terugweg van de kermis stond te wachten, gebeurde het.\nVan boven aan de helling kwam iets groots en ronds...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Denderdedender! Denderdedender!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Denderend en wel, met geweldige vaart kwam het aanrollen.\nEen groot rond gevaarte, zoals hij nog nooit had gezien.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'E-een monster!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'Met de staart tussen de poten rende de wolf tot boven op de berg.\n"Onder aan de berg woont een rond monster..."\nDit verhaal werd onder de wolven van de berg\nnog heel, heel lang doorverteld.\nEn ze leefden nog lang en gelukkig.'},

  pwh1:{art:'buta_renga', text:'De wolf ging voor de deur zitten\nen zei met een heel zacht stemmetje:\n"...Eerlijk gezegd heb ik al dagenlang niets meer gegeten."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Binnen in het huis keken de 3 biggetjes elkaar aan.\nDe deur deden ze niet open. Maar uit het raam kwam een stem.\n"Wacht daar even."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Door het raam werd voorzichtig een hete groentesoep aangereikt.\nEr dreven grote stukken raap en aardappel in.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'Hij is heet, blaas er eerst op.'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'Het beroemde blazen van de wolf\nwas nu geen kracht meer om huizen weg te blazen,\nmaar een kracht om hete soep precies goed af te koelen.\nEen bijzondere kunst heeft niet maar één nut.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van het bakstenen huis ================= */

  ps1:{art:'prenga_kamado', text:'Dit is het verhaal van een huis van bakstenen.\nElke baksteen wordt een voor een in het vuur van de oven langzaam gebakken.\nDaarom valt hij niet zomaar uit elkaar.', next:'ps2'},
  ps2:{art:'buta_renga', text:'Op een dag kwam het kleine biggetje\nen begon de bakstenen zorgvuldig op te stapelen.\nTok, tok. Beetje bij beetje werd het een huis.\nWat was er te zien door het eerste raam dat klaar was?', choices:[
    {t:'De wijde blauwe lucht', go:'ps2r', set:{slife:'sora'}},
    {t:'Het rapenveld aan de rand van het dorp', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Achter het raam strekte het rapenveld zich uit.\nHet huis keek er graag naar hoe het elke dag een beetje groeide.'
    : 'Over de blauwe lucht die het hele raam vulde, dreven witte wolken.\nEen huis zijn, dacht het huis, is toch iets moois.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Op een dag kwamen de twee oudere biggetjes\nhelemaal buiten adem naar binnen gestormd.\nBuiten was blijkbaar een wolf.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'Nu is het mijn beurt.'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'De wolf haalde diep adem en blies met al zijn kracht.\nEén keer, twee keer, drie keer.\nGeen enkele baksteen in de muur bewoog.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'Het verroert zich niet!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'Toen de stormachtige nacht voorbij was, dacht het huis na.\nWat wil ik van nu af aan het belangrijkste vinden?', choices:[
    {t:'Wind en regen weerstaan', go:'e_ps_mamoru'},
    {t:'Het haardvuur warm houden', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'In winderige nachten en op regenachtige ochtenden verroert het huis zich niet.\nHet huis weet precies waarom het zo stevig geboren is.\nOmdat er binnen 3 biggetjes zijn die het wil beschermen.\nEn ze leefden nog lang en gelukkig.'},
  pss1:{art:'buta_soup', text:'De winter kwam. In de haard brandde het vuur en de pot pruttelde zachtjes.\nOok de moeder van de biggetjes kwam op bezoek,\nen het hele huis zat vol gelach.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'De taak van een huis is wind en regen tegenhouden.\nMaar zijn allerbelangrijkste taak is\nhet gelach zorgvuldig binnen te bewaren.\nOok vandaag klinken er warme stemmen uit het bakstenen huis.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_NL);

  T.ZK_EN.push(
    {section:'De drie biggetjes'},
    {id:'pb_seishi',   n:'Het reddende bakstenen huis',   h:'Het vertrouwde verhaal van de allereerste keer'},
    {id:'pb_genten',   n:'Het echte Engelse verhaal',     h:'Als de wolf met lieve woorden lokt...'},
    {id:'pb_kyoryoku', n:'Vanaf het begin met zijn drieën', h:'Als je op de driesprong samen één weg kiest...'},
    {id:'pb_sonae',    n:'Waakzaam en voorbereid',        h:'Als je de wolf al van ver ziet aankomen...'},
    {id:'pw_taru',     n:'Een monster!',                  h:'In het verhaal van de hongerige wolf de lieve woorden kiezen...'},
    {id:'pw_fuufuu',   n:'Het echte nut van het blazen',  h:'In het verhaal van de hongerige wolf eerlijk praten...'},
    {id:'ps_mamoru',   n:'Het verroert zich niet',        h:'In het verhaal van het bakstenen huis wind en regen weerstaan...'},
    {id:'ps_waraigoe', n:'Een vat vol gelach',            h:'In het verhaal van het bakstenen huis het haardvuur aansteken...'}
  );

})();
