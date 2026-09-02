"use strict";
/* Prinses Kaguya - Dutch scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   Bron: Taketori Monogatari (10e eeuw, PD). Geen elementen uit de film uit 2013. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var KAGUYA_NL = {

  /* ================= Prinses Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Dit is het verhaal van heel lang geleden.\nEr was eens een oude man die leefde van het snijden van bamboe.\nDe mensen noemden hem de bamboesnijder.\nOp een dag vond hij diep in het bamboebos een stengel waarvan de voet goudkleurig oplichtte.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'De bamboe licht op!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'Toen hij de stengel opensneed, zat daarin een klein meisje, nog geen handbreed groot.\nDe oude man nam haar op zijn handpalm en droeg haar mee naar huis.\nSamen met zijn vrouw besloot hij haar in een mandje groot te brengen.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'Wat zullen ze elke dag voor de kleine prinses doen?', choices:[
    {t:'Een slaapliedje voor haar zingen', go:'kg3r', set:{takeko:'uta'}},
    {t:'Speelgoed van bamboe voor haar maken', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'De oude man maakte kleine fluitjes en wagentjes van bamboe.\nAls de prinses lachte, lachte de oude vrouw mee.'
    : 'Als de oude vrouw een slaapliedje zong, sliep de prinses rustig in.\nDe twee zaten bij het mandje en keken lang naar haar.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'Vanaf toen kwam er goud uit elke stengel bamboe die hij sneed.\nHet meisje groeide zienderogen en was na ongeveer 3 maanden een mooie jonge vrouw.\nZe gaven haar de naam "Kaguya, prinses van het slanke bamboe".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'Over de schoonheid van prinses Kaguya sprak al gauw het hele land.\nRond het huis verzamelden zich mensen die een glimp van haar wilden opvangen.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Onder hen kwamen 5 jonge edellieden die haar per se tot vrouw wilden nemen.\nPrins Ishitsukuri, prins Kuramochi, minister Abe,\nde grote raadsheer Otomo en de middelste raadsheer Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'Prinses Kaguya zei:\n"Ik ga naar degene die mij de schat brengt die ik graag wil zien."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'De stenen schaal van Boeddha!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'De juwelentak van Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'De pels van de vuurrat!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'Het juweel uit de nek van een draak!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'De kaurischelp van de zwaluw!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Geen van deze schatten leek in deze wereld te bestaan.\nDe 5 gingen ieder voor zich op reis.';
    if(f.first) return t;
    return t + '\nNaar wiens verhaal luisteren we?';
  }, choices:[
    {t:'Prins Ishitsukuri', go:'kgk1'},
    {t:'Prins Kuramochi', go:'kgk2'},
    {t:'Minister Abe', go:'kgk3'},
    {t:'De grote raadsheer Otomo', go:'kgk4'},
    {t:'De middelste raadsheer Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'Prins Ishitsukuri vond de verre reis naar Indië veel te lastig\nen nam een oude schaal mee uit een tempel in de buurt.\nMaar de schaal van Boeddha hoort te stralen.\nDat deze schaal geen licht gaf, zag men meteen.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'Prins Kuramochi liet de juwelentak door ambachtslieden maken.\nDe prinses en de oude man keken vol verbazing naar de prachtige tak.\nMaar toen kwamen de ambachtslieden erbij en zeiden:\n"Wij hebben ons loon hiervoor nog niet gekregen."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'Minister Abe liet uit een ver land een bontkleed komen.\nDe prinses zei: "De pels van de vuurrat hoort in het vuur niet te verbranden."\nIn het vuur gelegd, verbrandde het bontkleed met laaiende vlammen.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'De grote raadsheer Otomo voer met een schip uit om een draak te zoeken.\nEr kwam een zware storm en het schip tolde maar rond.\nToen hij eindelijk de kust bereikte, ging de raadsheer met opgezwollen ogen naar huis.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'De middelste raadsheer Isonokami stak zijn hand in een zwaluwnest,\nen op het moment dat hij iets te pakken kreeg, viel hij van het dak.\nWat hij vasthield, was oude zwaluwenpoep.\nDe raadsheer raakte gewond en moest in bed blijven.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'Uiteindelijk bracht niemand een echte schat mee.';
    if(f.first) return t;
    return t + '\nEn nu, wat zal ze doen?';
  }, choices:[
    {t:'De praatjes laten en rustig verder leven', go:'kg10'},
    {t:'De oude man en de oude vrouw de waarheid vertellen', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'De praatjes bereikten ook de oren van de keizer.\nDe keizer deed alsof hij ging jagen en bezocht het huis van de bamboesnijder.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'De draagstoel van de keizer!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'Toen de keizer haar in de draagstoel wilde tillen,\nwerd de gestalte van prinses Kaguya zachtjes licht en verdween.\n"Ik neem haar niet mee."\nDat zei de keizer, en hij keerde terug naar de hoofdstad.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'Vanaf toen stuurden de keizer en prinses Kaguya elkaar brieven en gedichten.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'En zo gingen 3 jaar voorbij.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'Toen het lente werd, keek prinses Kaguya omhoog naar de maan en huilde.\nAls de oude man naar de reden vroeg, gaf ze geen antwoord.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'Aan het eind van de zomer vertelde prinses Kaguya het hun eindelijk.\n"Ik hoor bij de hoofdstad van de maan.\nIn de nacht van de volle maan van de 8e maand komen ze mij halen. Ik moet terug."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'Ik geef haar niet terug!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'De oude man vroeg de keizer om hulp, en er kwamen veel soldaten.\nOp het dak en in de tuin stonden mannen met bogen op een rij.\nDe oude vrouw verstopte de prinses achter in de kamer en deed de deur stevig dicht.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'De nacht van de volle maan. Even na middernacht\nwerd het rond het huis lichter dan overdag.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'Het maanlicht daalt neer!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Uit de hemel daalden mensen neer die op wolken stonden.\nDe kracht vloeide uit de soldaten weg, en niemand kon zijn boog spannen.\nDe deur ging vanzelf open, en uit de armen van de oude vrouw trad de prinses naar voren.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'De maanbode sprak:\n"Oude man. De prinses had op de maan een schuld op zich geladen en was hier een tijd beneden om die goed te maken.\nDe tijd van goedmaken is voorbij.\nHet was ook een dank voor een kleine goede daad van jou."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'Prinses Kaguya schreef de oude man een brief.\n"Zie het gewaad dat ik uittrek en achterlaat als mijzelf.\nKijk omhoog in de nachten waarin de maan schijnt."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'De maanbode hield haar een kruik met het levenselixer voor.';
    if(f.first) return t + '\nDe prinses nam één slokje, legde de rest bij haar brief aan de keizer\nen gaf beide aan de bode van de keizer.';
    return t + '\nAan wie moet dit elixer?';
  }, choices:[
    {t:'Bij de brief aan de keizer leggen', go:'kg21'},
    {t:'Voor de oude man en de oude vrouw achterlaten', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'De maanbode houdt haar het verenkleed voor.\n"Wie dit aantrekt, bij die verdwijnen alle zorgen van het mensenhart."';
    if(f.first) return t + '\nDe prinses trok het verenkleed aan.';
    return t + '\nWat zal ze doen?';
  }, choices:[
    {t:'Het verenkleed aantrekken', go:'kg22'},
    {t:'Nog één keer omkijken voordat ze het aantrekt', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'Nu de zorgen van haar hart verdwenen waren, voelde de prinses voor de oude man geen tederheid meer en geen verlangen.\nOp een wolk steeg ze op naar de maan.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Naar de maan...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'De oude man en de oude vrouw konden hun tranen niet stoppen.\nZe hielden het gewaad van de prinses in hun armen en keken eindeloos omhoog naar de hemel.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'De keizer liet de brief van de prinses en het levenselixer\nverbranden op de top van de berg in Suruga die het dichtst bij de hemel staat.\nOmdat er zo veel krijgers op die berg zijn geklommen,\nwordt die berg sindsdien "Fuji" genoemd, de berg vol krijgers.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'Kijk omhoog in de nachten waarin de maan schijnt.\nDe oude man en de oude vrouw deden wat de prinses had geschreven en keken in maannachten omhoog naar de hemel.\nHet gewaad dat ze had uitgetrokken en achtergelaten, bleef bij hen.\nEinde.'},

  /* ---- De dagen die overbleven ---- */
  kgn1:{art:'kg_uchiake', text:'Nog voordat de keizer kwam, sprak prinses Kaguya met hen beiden.\n"Ik hoor bij de hoofdstad van de maan. Deze herfst moet ik terug."\nDe oude man en de oude vrouw zwegen een lange tijd.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'Vanaf die dag gingen de 3 zorgvuldig met elke dag om.\nZe wandelden door het bamboebos en gingen ook naar de plek van de stengel waar ze gevonden was.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'In nachten met een mooie maan zaten ze met z\'n drieën op de veranda.\n"Ga in maannachten hier zitten. Ook ik kijk vanaf de maan naar deze plek."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'In de nacht van de volle maan kwamen ze haar halen.\nDe oude man vocht niet.\nDe 3 hielden elkaars hand vast en wachtten op het licht.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'Het afscheid kwam, net als anders.\nMaar daarvoor hadden de 3 een hele herfst samen doorgebracht.\nOp de veranda liggen nog steeds 3 zitkussens.\nEinde.'},

  /* ---- Voor het verenkleed ---- */
  kgm1:{art:'kg_shouten', text:'Voordat ze het verenkleed aantrok, keek de prinses om.\nDe oude man en de oude vrouw keken haar kant op.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Dank jullie wel dat jullie mij hebben grootgebracht'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'De oude vrouw huilde, lachte en zwaaide.\nOok de oude man zwaaide, met een grote zwaai.\nDe prinses prentte hun gezichten in haar ogen en trok toen het verenkleed aan.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Ook al verdwenen de zorgen van haar hart, de twee gezichten die ze als laatste zag,\nbleven in het licht, al die tijd, bij haar.\nEinde.'},

  /* ---- Het levenselixer ---- */
  kgu1:{art:'kg_tegami', text:'De prinses gaf het levenselixer aan de oude man en de oude vrouw.\n"Wie hiervan drinkt, kan eeuwig leven."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Nadat de prinses naar de maan was teruggekeerd, keken de twee naar de kruik met het elixer.\n"In een wereld zonder de prinses hoeven wij niet eeuwig te leven."\nDe oude man zei het rustig.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'In de volgende maannacht zetten de twee de kruik op de veranda.\nAlsof ze hem zachtjes naar de maan toe hielden.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'Het elixer werd nooit gedronken en baadde almaar in het maanlicht.\nDe keizer liet het zijne verbranden op de berg Fuji, de oude man hield het zijne op de veranda de maan voor.\nBeide waren een manier om de prinses niet te vergeten, ieder op zijn eigen wijze.\nEinde.'},

  /* ================= Het verhaal van de bamboesnijder ================= */

  kj1:{art:'okina_take', text:'Dit is het verhaal van de bamboesnijder en zijn vrouw, en van hoe het verder ging.\nSinds de prinses naar de maan is teruggekeerd, is er een maand voorbij.', next:'kj2'},
  kj2:{art:'kg_ato', text:'Wat zullen ze vandaag doen?', choices:[
    {t:'Het gewaad van de prinses opvouwen', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Door het bamboebos lopen', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'Het bamboebos wiegde in de wind, net als op die dag.\nDe oude man luisterde een tijd naar het geluid van de bamboe.'
    : 'De oude vrouw vouwde het gewaad van de prinses zorgvuldig op.\nZe vouwde het op, vouwde het weer open en vouwde het nog eens op.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'Een maannacht. De twee lazen de brief van de prinses nog een keer.\n"Kijk omhoog in de nachten waarin de maan schijnt."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Zullen we omhoogkijken?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'De oude vrouw zei het tegen de oude man.\nWat zullen die twee doen?', choices:[
    {t:'Vanaf de veranda naar de maan kijken', go:'kjt1'},
    {t:'Als het ochtend wordt naar het bamboebos gaan', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'De twee zaten naast elkaar op de veranda en keken omhoog naar de maan.\nHet verdriet ging niet weg.\nMaar het maanlicht reikte tot op de veranda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Sindsdien zitten de twee in maannachten op de veranda.\nEr zijn nachten waarin ze huilen, nachten waarin ze praten en nachten waarin ze zwijgen.\nHet maanlicht reikte in elk van die nachten even ver.\nEinde.'},
  kjk1:{art:'okina_take', text:'Op een ochtend in de lente ging de oude man weer naar het bamboebos.\nLichtgevende bamboe was er niet meer.\nIn plaats daarvan staken overal bamboescheuten hun kop omhoog.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'...Zal ik ze uitgraven.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'De oude man groef de bamboescheuten uit, een voor een.\nZonder haast, door niemand gevraagd, uit eigen keuze.\nToen de mand vol raakte, kwam de oude vrouw met het middageten.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de maanbode ================= */

  ku1:{art:'tsuki_miyako', text:'Dit is het verhaal van een bode die in de hoofdstad van de maan woont.\nIn de hoofdstad van de maan zijn geen tranen. En ook geen zorgen van het hart.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Vandaag is de dag om naar de aarde af te dalen. Wat zal de bode meenemen?', choices:[
    {t:'Alleen het verenkleed', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'Ook het levenselixer', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'In de kist gingen het verenkleed en een kruik met het levenselixer.\nDe mensen op aarde zouden hier erg naar verlangen.'
    : 'In de kist ging het verenkleed.\nAlleen daarmee al wordt de prinses meteen weer een mens van de maan.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'Toen de bode op een wolk neerdaalde, stonden er veel mensen rond het huis.\nZe hielden bogen vast en keken met grimmige blik deze kant op.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'De oude man roept iets.\nDe bode begreep de betekenis van die woorden niet.\nOp de maan bestaat het woord "niet teruggeven" niet.', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'...Tranen?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'De prinses trad naar voren.\nWat zal de bode doen?', choices:[
    {t:'Haar volgens de regel het verenkleed aantrekken', go:'kun1'},
    {t:'Naar het verzoek van de prinses luisteren', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'De bode trok de prinses volgens de regel het verenkleed aan.\nMaar hij kon niet doen alsof hij het natte gezicht van de oude man niet zag.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'Ook terug op de maan moest de bode steeds aan dat gezicht denken.\nIn een land zonder tranen wist hij voor het eerst wat tranen betekenen.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'De maanbode kijkt sindsdien af en toe neer op de aarde.\nIn het land dat geen tranen kent, is er nu één die ze kent.\nEinde.'},
  kut1:{art:'kg_tegami', text:'"Geef mijn brief en mijn gewaad alsjeblieft aan de oude man."\nOp het verzoek van de prinses knikte de bode.\nIn de regels van de maan staat zoiets niet. Maar het zal wel het gebruik van de aarde zijn.', next:'kut2'},
  kut2:{art:'kg_ato', text:'De bode daalde neer voor de oude man en overhandigde hem de brief en het gewaad, heel zorgvuldig.\nDe oude man drukte ze tegen zich aan.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'Terug in de hoofdstad van de maan voegde de bode één regel aan de voorschriften toe.\n"Wie van de aarde terugkeert, mag één ding achterlaten."\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_NL);

  T.ZK_EN.push(
    {section:'Prinses Kaguya'},
    {id:'kg_seishi',  n:'In maannachten omhoogkijken',    h:'Het oorspronkelijke verhaal uit de allereerste ronde'},
    {id:'kg_nokori',  n:'De dagen die overbleven',        h:'Als je de waarheid vertelt voordat de keizer komt...'},
    {id:'kg_koromo',  n:'Voor het verenkleed',            h:'Als je omkijkt voordat je het verenkleed aantrekt...'},
    {id:'kg_kusuri',  n:'Het levenselixer',               h:'Als je het elixer voor het oude paar achterlaat...'},
    {id:'kj_tsukiyo', n:'Waar het maanlicht reikt',       h:'Als je in het verhaal van het oude paar vanaf de veranda omhoogkijkt...'},
    {id:'kj_take',    n:'Weer bamboescheuten halen',      h:'Als je in het verhaal van het oude paar \'s ochtends naar het bamboebos gaat...'},
    {id:'ku_namida',  n:'Het land zonder tranen',         h:'Als je je in het verhaal van de maanbode aan de regel houdt...'},
    {id:'ku_tegami',  n:'De boodschap',                   h:'Als je in het verhaal van de maanbode naar de prinses luistert...'}
  );

})();
