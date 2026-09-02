"use strict";
/* Urashima Taro - Dutch scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var URA_NL = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Dit is het verhaal van een jonge visser uit een dorp aan zee.\nZijn naam was Urashima Taro.\nHij woonde samen met zijn oude vader en moeder, met zijn drieën.', next:'u2'},

  u2:{art:'ura_hama', text:'Ook vandaag klinken de golven rustig en mooi.\nWat zullen we doen voordat we gaan vissen?', choices:[
    {t:'De netten repareren', go:'u2r', set:{ulife:'ami'}},
    {t:'Een tijdje naar de zee kijken', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'Terwijl hij naar de glinsterende golven keek, werd zijn hart heel stil.\nDe zee was Taro\'s allerbeste vriend.'
    : 'Het zorgvuldig gerepareerde net stond mooi strak gespannen.\nGoed zorgen voor zijn gereedschap, zo deed Taro dat.', next:'u3'},

  u3:{art:'ura_ijime', text:'Toen zag hij op het strand een paar kinderen die luidruchtig om een grote schildpad heen stonden.\nDe schildpad wist zich geen raad en trok zijn kop in.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Jullie mogen de schildpad niet plagen!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'Toen de kinderen naar huis waren gegaan, droeg Taro de schildpad voorzichtig terug naar zee.\n"Laat je niet weer vangen."\nDe schildpad keek steeds weer om en verdween achter de golven.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Een paar dagen later.\nAan de waterlijn verscheen diezelfde schildpad.\n"Taro, bedankt voor laatst.\nAls dank breng ik je naar het Drakenpaleis."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Op de rug van de schildpad, en dan de zee in.\nNu, hoe zullen we de reis maken?', choices:[
    {t:'Je stevig aan het schild vasthouden', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Rondkijken en van het uitzicht genieten', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Naar het Drakenpaleis!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Scholen vissen glinsterden voorbij, zuilen van licht wiegden in het blauw.\nZoiets had Taro nog nooit gezien, en hij kon zijn ogen er niet van afhouden.'
    : (f.uride==='tsukamaru'
      ? 'Hij hield zich stevig vast, en het schild van de schildpad voelde warm aan,\nen vreemd genoeg was hij helemaal niet bang.'
      : 'Door het blauwe licht dook de schildpad steeds dieper naar beneden.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'Op de bodem van de zee doemde een buitengewoon prachtig paleis op.\nDat was het Drakenpaleis.\nZo mooi dat geen enkel schilderij het ooit kon weergeven.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Welkom, beste Taro. Jij bent dus de vriendelijke mens die onze schildpad heeft gered."\nPrinses Otohime ontving hem met een warme glimlach.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'De dans van zeebrasem en schol!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Voor een lange tafel vol lekkernijen dansten zeebrasems en scholen vrolijk in het rond.\nTaro zette grote ogen op en klapte in zijn handen.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'In het paleis was de "zaal van de vier jaargetijden".\nDoor vier ramen zag je lente, zomer, herfst en winter tegelijk.';
    if(f.first) return t;
    return t + '\nWelk raam vind je het mooist?';
  }, choices:[
    {t:'Het lenteraam met vallende kersenbloesems', go:'u10r', set:{umado:'haru'}},
    {t:'Het winterraam met vallende sneeuw', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'Vanaf de bodem van de zee viel de sneeuw doodstil, en je kon er eindeloos naar kijken.\n"Wat wonderlijk. Hier is werkelijk alles."'
    : 'Achter het raam dwarrelden kersenbloesemblaadjes zachtjes omlaag.\n"Wat wonderlijk. Hier is werkelijk alles."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'De fijne dagen gingen voorbij als een droom...\nen voor hij het wist waren er drie jaar verstreken.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Op een avond dacht Taro opeens aan zijn vader en moeder in het dorp.\nZouden ze gezond zijn? Zouden ze zich eenzaam voelen?';
    if(f.first) return t + '\n"Prinses Otohime. Ik wil nu graag naar huis terugkeren."';
    return t + '\nWat moet hij doen?';
  }, choices:[
    {t:'"Laat me naar huis gaan" zeggen', go:'u13'},
    {t:'Nog een tijdje langer hier blijven', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'Prinses Otohime knikte, een beetje verdrietig,\nen reikte hem een prachtig kistje aan van glanzend zwart lakwerk.\n"Dit noemen we een tamatebako, een schatkistje."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Je mag het nooit openmaken'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'Op de rug van de schildpad ging het terug door de zee.\nToen hij omkeek, werden de lichten van het Drakenpaleis ver en klein.', next:'u15'},

  u15:{art:'ura_hama700', text:'Aangekomen op het strand was alles op de een of andere manier anders.\nZijn huis was weg. Ook de vertrouwde pijnboom was weg.\nOnderweg kwam hij alleen onbekende gezichten tegen.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Tijdens de drie jaar in het Drakenpaleis\nwaren op het land zevenhonderd jaar voorbijgegaan.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'Zijn vader en zijn moeder hoorden allang bij een ver verleden.\nTaro was helemaal alleen.';
    if(f.first) return t + '\nIn zijn eenzaamheid legde hij zijn hand op het deksel van het tamatebako.';
    return t + '\nWat moet hij doen?';
  }, choices:[
    {t:'Het tamatebako openmaken', go:'uc_kemuri'},
    {t:'Het dicht laten en op het strand blijven wachten', go:'ua1'},
    {t:'Het teruggeven aan de zee', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Witte rook...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'Toen de rook optrok, was Taro een oude man met wit haar.\nDe tijd die in het Drakenpaleis had stilgestaan, kwam in één keer terug.';
    if(f.first) return t;
    return t + '\nWat moet hij doen?';
  }, choices:[
    {t:'Blijven staan en naar de zee kijken', go:'e_u_seishi'},
    {t:'Op weg gaan, richting het Drakenpaleis', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Geopend, en dan de spijt: het tamatebako.\nEn toch droeg Taro die mooie tijd in zijn hart, mooier dan enig schilderij,\nen die bleef daar als een schat.\nAlleen het ruisen van de golven klonk zachtjes door.\nEinde.'},

  /* ---- De kraanvogel (het echte oude einde uit de Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'Naar de waterlijn, een stap, en nog een stap.\nAlsof de zee met het Drakenpaleis hem naar zich toe trok, liep hij verder,\nen Taro\'s lichaam werd opeens heel licht.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'Hij werd een kraanvogel!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Als witte kraanvogel vloog Taro over de zee in het morgenrood.\nToen stak tussen de golven de kop van een groene schildpad omhoog.\nHet was prinses Otohime in de gedaante van een schildpad.\nKraanvogel en schildpad zijn tekens van een lang leven en geluk.\nEn samen dansten ze voor altijd boven de glanzende zee.\nEn ze leefden nog lang en gelukkig.', ending:'u_tsuru'},

  /* ---- Niet openmaken (de belofte uit de Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro maakte het kistje niet open.\n"Ik heb beloofd het niet open te maken."\nVanaf die dag keek hij \'s ochtends en \'s avonds vanaf het strand naar de zee.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Op een ochtend, een paar dagen later, glansde de zee goudgeel,\nen kwam er één boot over het water aanglijden.\n"Beste Taro. Je hebt je belofte gehouden."\nHet was de stem van prinses Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Ik geloofde: zolang het kistje dicht blijft, zien we elkaar weer."\nTaro stapte in de boot en vertrok op een reis zonder afscheid.\nHet tamatebako was het teken van een belofte die hen samen verbond.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Teruggeven aan de zee ---- */
  uu1:{art:'ura_hama', text:'Taro leende een klein bootje en roeide de open zee op.\n"Wat kostbaar is, hoort op een kostbare plek."\nZachtjes zette hij het tamatebako op de golven.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Toen kwam van onder de golven diezelfde schildpad tevoorschijn\nen nam het kistje op zijn rug.\n"Taro. Misschien is dat wel het beste antwoord van allemaal."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'Herinneringen blijven in je hart, ook als het kistje dicht blijft.\nTaro besloot in het nieuwe dorp weer als visser te gaan leven.\nEn de zee glinstert ook vandaag nog.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Blijven ---- */
  un1:{art:'ura_otohime', text:'"Laat me nog een tijdje hier blijven. Maar..."\nAlsof ze tot op de bodem van zijn hart had gekeken, knikte prinses Otohime stil\nen bracht Taro naar de waterspiegel.', next:'un2'},
  un2:{art:'hime_ryugu', text:'In de waterspiegel verscheen het vertrouwde huis in het dorp.\nVader en moeder lachten, gezond en wel.\n"Van hieruit waken we af en toe over hen.\nEn wil je hen zien, dan brengt de schildpad je er altijd heen."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Gerustgesteld besloot Taro in het Drakenpaleis te blijven.\nOok ver van elkaar blijft een familie een familie, zolang ze aan elkaar denken.\nDe dagen in het Drakenpaleis zijn ook vandaag rustig.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van prinses Otohime ================= */

  h1:{art:'hime_ryugu', text:'Dit is het verhaal van prinses Otohime uit het Drakenpaleis.\nEen mooi paleis, heerlijke gerechten, liederen en dansen.\nZe had alles, en toch verveelde Otohime zich een beetje.', next:'h2'},
  h2:{art:'hime_ryugu', text:'Wat zullen we vandaag doen?', choices:[
    {t:'Een wandeling maken door de koraaltuin', go:'h2r', set:{hlife:'sango'}},
    {t:'Gaan luisteren naar de zang van de walvissen', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'Van ver in zee klonk de lage zang van de walvissen.\nEen groot, zacht en een beetje eenzaam lied.'
    : 'Rode en roze koralen wiegden overal in de tuin.\nZo mooi, en toch jammer: er was niemand aan wie ze het kon laten zien.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Op een dag kwam de schildpad in grote haast terug.\nZijn schild glansde spiegelglad en zijn ogen straalden.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Prinses, dit moet u horen!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Op het strand was ik gevangen, en toen heeft iemand mij gered!"\nTaro, die in het paleis werd uitgenodigd, was iemand die veel lachte.\nIn het Drakenpaleis klonk gelach dat er nooit eerder was geweest,\nen de saaie dagen kregen opeens kleur.', next:'h5'},
  h5:{art:'ura_otohime', text:'Maar op een avond in het derde jaar:\n"Ik wil nu graag naar huis terugkeren."\nOtohime kreeg een benauwd gevoel in haar borst.\nZe wilde hem tegenhouden. Maar een hart dat aan zijn familie denkt, mag je niet tegenhouden.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Ik wil hem tegenhouden.\nMaar...'}, then:'h6'},
  h6:{art:'ura_tama', text:'Otohime maakte een kistje van glanzend zwart lakwerk klaar.\nWat zal ze in dit kistje leggen?', choices:[
    {t:'Taro\'s gelukkige dagen erin leggen', go:'e_h_himitsu'},
    {t:'De toverkracht "we zien elkaar weer" erin leggen', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Drie jaar in het Drakenpaleis zijn zevenhonderd jaar op het land.\nZo zou Taro in één keer oud worden.\nDaarom sloot ze de verstreken tijd zachtjes op in het kistje.\n"Zolang het dicht blijft, blijft Taro helemaal zichzelf.\nHoud op eenzame nachten dit kistje in je armen en ga slapen."\nDat was het geheim van het tamatebako, dat niemand kende.\nEn ze leefden nog lang en gelukkig.'},
  hm1:{art:'hime_ryugu', text:'"Als je het kistje niet openmaakt, zien we elkaar heel zeker weer."\nMet die wens erin gaf Otohime hem het kistje.\nEn vanaf die dag keek ze elke dag in de waterspiegel.', next:'hm2'},
  hm2:{art:'ura_fune', text:'In de waterspiegel had Taro het kistje ook vandaag niet opengemaakt,\nmaar keek hij stil naar de zee.\n"...Dit is genoeg. Ik ga hem halen."\nOtohime liet haar snelste boot klaarmaken.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Over de gouden ochtendzee gleed de boot voort.\nRegelrecht naar degene die op haar wachtte.\nEen belofte wordt pas toverkracht\nals de een haar houdt en de ander erin gelooft.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de schildpad ================= */

  v1:{art:'kame_hama', text:'Dit is het verhaal van één zeeschildpad.\nHij lag dolgraag in de zon en dutte ook die dag op het strand.\nToen hij wakker werd, was hij omringd door kinderen.', next:'v2'},
  v2:{art:'kame_hama', text:'"Jullie mogen de schildpad niet plagen!"\nEen visser met een vriendelijke stem kwam hem te hulp\nen droeg hem voorzichtig terug naar zee.\nDeinend op de golven nam de schildpad een vast besluit.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'Deze vriendelijkheid vergeld ik heel zeker!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'Terug in het Drakenpaleis begon de schildpad meteen met de voorbereidingen.\nWat zal hij eerst doen?', choices:[
    {t:'Het schild spiegelglad poetsen', go:'v3r', set:{vlife:'migaku'}},
    {t:'Meteen verslag doen bij de prinses', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'Op deze rug zou een gast rijden, dus die moest spiegelglad zijn.\nBlinkend gepoetst glansde het schild als een spiegel.'
    : '"Wat een fijn mens is dat", zei de prinses met een glimlach.\n"We nodigen hem beslist uit om hem te bedanken."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Met toestemming van de prinses zwom de schildpad naar het strand.\n"Taro, als dank breng ik je naar het Drakenpaleis."\nVoor het eerst in zijn leven droeg hij een gast op zijn rug.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Stap op mijn rug!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'Nu begint de weg naar het Drakenpaleis.\nWelke weg zullen we nemen?', choices:[
    {t:'De geheime kortere weg nemen', go:'v5r', set:{vmichi:'chika'}},
    {t:'De allermooiste weg nemen', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Zoef, ging het vlak langs een reusachtige walvis.\n"Oh!" riep Taro op zijn rug.\nOp die kortere weg was hij een beetje trots.'
    : 'Langzaam ging het door het koraalbos heen.\n"Wat mooi", zuchtte Taro op zijn rug.\nOp dat uitzicht was hij een beetje trots.', next:'v6'},
  v6:{art:'ura_ryugu', text:'De gast is veilig aangekomen, de grote taak is volbracht.\nEn nu, wat zullen we doen?', choices:[
    {t:'In het Drakenpaleis blijven en voor hem zorgen', go:'e_v_senaka'},
    {t:'Terug naar het strand gaan en op hem wachten', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'Drie jaar lang was de schildpad Taro\'s eigen rijdier.\nZijn rug was altijd de beste plaats in de zee.\n"Op jouw rug zit ik het fijnst van al."\nElke keer als Taro dat zei, werd zijn schild een beetje trots.\nEn ze leefden nog lang en gelukkig.'},
  vm1:{art:'kame_hama', text:'De schildpad ging terug naar het strand en wachtte elke dag aan de waterlijn.\nSchildpadden leven heel, heel lang.\nEn hoeveel tijd er ook verstrijkt, een belangrijke belofte vergeten ze nooit.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'De tijd verstreek, zevenhonderd jaar.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Op een ochtend stond er een vertrouwd iemand op het strand.\n"Welkom thuis, Taro."\nOp het volkomen veranderde strand was er maar één,\nde schildpad, die zich Taro nog herinnerde.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, URA_NL);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'Het kistje van de spijt',      h:'Het oorspronkelijke verhaal uit de allereerste ronde'},
    {id:'u_tsuru',    n:'Taro als kraanvogel',          h:'Als je na het openen van het kistje naar de zee loopt...'},
    {id:'u_akenai',   n:'Het ongeopende tamatebako',    h:'Als je je belofte houdt en op het strand wacht...'},
    {id:'u_umi',      n:'De schat terug in zee',        h:'Als je het ongeopend teruggeeft aan de zee...'},
    {id:'u_nokoru',   n:'Dagen in het Drakenpaleis',    h:'Als je niet naar huis gaat en nog wat blijft...'},
    {id:'uh_himitsu', n:'Het geheim van het tamatebako', h:'Als je in Otohimes verhaal de dagen opsluit...'},
    {id:'uh_mukae',   n:'De boot die hem komt halen',   h:'Als je in Otohimes verhaal de toverkracht opsluit...'},
    {id:'uv_senaka',  n:'De gast op mijn rug',          h:'Als je in het verhaal van de schildpad in het paleis blijft...'},
    {id:'uv_matsu',   n:'De belofte op het strand',     h:'Als je in het verhaal van de schildpad op het strand wacht...'}
  );

})();
