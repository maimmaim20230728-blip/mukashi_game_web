"use strict";
/* Rotkäppchen - German scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Stil: einfaches Bilderbuch-Deutsch, passend zu story_de.js.
   Der berühmte Wechselgesang folgt der klassischen deutschen Formel ("Damit ich dich besser ... kann"). */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var AKZ_DE = {

  /* ================= Rotkäppchen ================= */

  z1:{art:'akz_home', text:'Dies ist die Geschichte von einem Mädchen, dem ein rotes Käppchen wunderbar stand.\nDie Großmutter hatte es selbst gemacht, und das Mädchen trug es jeden Tag.\nDarum nannten alle das Kind nur Rotkäppchen.', next:'z2'},

  z2:{art:'akz_home', text:'Eines Tages sagte die Mutter:\n"Die Großmutter hinter dem Wald ist krank. Bringst du ihr Kuchen und Traubensaft?"\n"Trödle nicht und geh nicht vom Weg ab."', next:'z3'},

  z3:{art:'akz_home', text:'Rotkäppchen überlegte kurz.\nLegen wir noch etwas in den Korb.', choices:[
    {t:'Ein Glas Honig einpacken', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Einen knallroten Apfel einpacken', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'Der knallrote Apfel kullerte in den Korb und glänzte darin.\nOb sich die Großmutter freut?'
    : 'Vorsichtig legte sie das Glas mit dem süßen Honig in den Korb.\nOb sich die Großmutter freut?', next:'z4'},

  z4:{art:'akz_door', text:'"Ich gehe dann los!"\nMit dem Korb am Arm sprang Rotkäppchen fröhlich aus der Tür.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'Auf zum Botengang!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'Im Tannenwald glitzerte das Licht zwischen den Zweigen.\nIrgendwo sangen kleine Vögel.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Wie soll Rotkäppchen heute gehen?', choices:[
    {t:'Singend weitergehen', go:'z5r', set:{walk:'uta'}},
    {t:'Nach Schmetterlingen ausschauen', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'Ein gelber Schmetterling flatterte vor ihr her.\nFast so, als würde er ihr den Weg zeigen.'
    : '"La la la, auf dem Weg durch den Wald."\nDie kleinen Vögel sangen mit Rotkäppchens Lied mit.', next:'z6'},

  z6:{art:'akz_meet', text:'Raschel, raschel.\nHinter einem Baum trat ein großer Wolf hervor.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Guten Tag, kleines Fräulein. Wohin gehst du denn?"\nfragte der Wolf mit einem breiten Lächeln.';
    if(f.first) return t;
    return t + '\nWas soll Rotkäppchen tun?';
  }, choices:f=>{
    var c = [
      {t:'Ehrlich antworten', go:'z8'},
      {t:'"Das sage ich dir nicht!"', go:'zn1'},
      {t:'Schnell nach Hause zurücklaufen', go:'zh1'}
    ];
    if(f.item) c.push({t:'"Herr Wolf, hast du Hunger?" fragen', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"Zur Großmutter. Sie ist krank, darum bringe ich ihr Kuchen und Traubensaft."\nRotkäppchen antwortete ganz ehrlich.\nUnd im Stillen fasste der Wolf einen listigen Plan.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Schau doch nur, wie schön die Blumen dort blühen.\nWenn du ihr einen Strauß mitbringst, freut sich die Großmutter bestimmt."';
    if(f.first) return t;
    return t + '\nWas soll Rotkäppchen tun?';
  }, choices:[
    {t:'Blumen pflücken', go:'z10'},
    {t:'"Nein, ich gehe geradewegs hin"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'Das stimmt ja, dachte Rotkäppchen und verließ den Weg.\nEine weiße Blume, eine blaue Blume. Und immer wenn sie eine pflückte, leuchtete weiter hinten eine noch schönere.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Unterdessen der Wolf...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'Der Wolf war den kurzen Weg gelaufen und schon vor Rotkäppchen bei der Großmutter.\nKlopf, klopf.\n"Großmutter, ich bin es, Rotkäppchen."\nEr ahmte ihre Stimme nach und schlüpfte hinein.', next:'z12'},

  z12:{art:'akz_bed', text:'Im Nu wurde die Großmutter mit einem Bissen verschluckt.\nDer Wolf zog ihr Nachthemd an, setzte ihre Nachtmütze auf und legte sich in ihr Bett.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Endlich kam Rotkäppchen an, den Blumenstrauß im Arm.\n"Oh, die Tür steht offen..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Großmutter, ich bin da!"\nDie Großmutter im Bett sah irgendwie merkwürdig aus.\nRotkäppchen trat leise näher und schaute ihr ins Gesicht.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'Was hast du für große Ohren!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'Damit ich dich besser hören kann'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'Was hast du für große Augen!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'Damit ich dich besser sehen kann'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'Was hast du für große Hände!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'Damit ich dich besser packen kann'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'Was hast du für einen großen Mund!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'Damit ich dich fressen kann!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'Happs!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'Als sie die Augen aufschlug, war alles dunkel. Sie war im Bauch des Wolfes.\n"Bist du das, Rotkäppchen? Das war ein Schreck. Aber jetzt wird alles gut."\nEs war die Stimme der Großmutter, und eine warme Hand drückte ihre.';
    if(f.first) return t;
    return t + '\nWas sollen die beiden tun?';
  }, choices:[
    {t:'Ganz still auf Hilfe warten', go:'z16'},
    {t:'Zu zweit ganz laut singen', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Hand in Hand warteten die beiden ganz still.\nDer Wolf mit dem vollen Bauch schlief im Bett tief und fest.\nSein Schnarchen dröhnte durch das ganze Haus.', next:'z17'},

  z17:{art:'akz_hunter', text:'Da kam der Jäger vorbei, der im Wald seine Runde machte.\n"Was für ein Schnarchen aus dem Haus der Großmutter... Da stimmt etwas nicht."\nEr schaute leise hinein, und im Bett lag ein Wolf mit rundem, dickem Bauch!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Ritsch, ratsch!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Mit der Schere öffnete der Jäger vorsichtig den Bauch des schlafenden Wolfes.\n"Da drinnen war es stockdunkel!", sagte Rotkäppchen.\nAuch der Großmutter ging es gut. Keine von beiden hatte auch nur einen Kratzer.';
    if(f.first) return t;
    return t + '\nWas sollen die beiden tun?';
  }, choices:[
    {t:'Den Bauch mit Steinen füllen', go:'z19'},
    {t:'Ein Versprechen verlangen: nie wieder', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Rotkäppchen holte schnell schwere Steine aus dem Garten.\nDer Jäger füllte sie in den Bauch und nähte ihn Stich für Stich wieder zu.', next:'z20'},

  z20:{art:'akz_stone', text:'Der Wolf wachte auf und sprang hoch, um wegzulaufen.\nAber die Steine im Bauch waren schwer, so schwer.\nRumms! Er fiel um und bewegte sich nicht mehr.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Alle setzten sich ins Gras und teilten den Kuchen und den Traubensaft.\nAuch der Großmutter schien es schon wieder besser zu gehen.\nUnd Rotkäppchen nahm sich fest vor:\n"Nie wieder trödle ich vom Weg ab."\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Nichts verraten / geradewegs gehen -> Die Klugheit der Großmutter ---- */
  zn1:{art:'akz_meet', text:'"Das sage ich dir nicht!"\nRotkäppchen hob das Kinn und ging mit schnellen Schritten weiter.\nDer Wolf grinste und verschwand hinter den Bäumen.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Ihr wurde ganz unruhig zumute.\nRotkäppchen ging schneller und schaute weder nach links noch nach rechts.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Rotkäppchen kam als Erste bei der Großmutter an.\n"Großmutter, im Wald habe ich einen großen Wolf getroffen."\n"Ach du meine Güte. Dann schließen wir lieber ab."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Klick, machte das Schloss.\nKurz darauf: klopf, klopf.\n"Ich bin es, Rotkäppchen, mach auf."\nSo sehr er die Stimme auch nachahmte, die beiden blieben still. Die Tür blieb zu.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Dann knarrte es. Knarr, knarr.\nDer Wolf kletterte aufs Dach und lauerte dort.\nDie Großmutter sagte ganz leise:\n"Dieser Wolf liebt den Duft von Würsten. Gießen wir das Wurstwasser aus dem Topf in den Trog vor dem Haus."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'Mir fällt da etwas ein'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'Der gute Wurstduft stieg in dicken Schwaden bis zum Dach hinauf.\nDer Wolf schnupperte, rutschte, rutschte immer weiter...\nPlatsch!\nDer Wolf fiel in den Trog und lief klatschnass in den Wald davon.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Großmutter, du bist großartig!"\n"Hihi. Das nennt man die Klugheit des Alters."\nDie Großmutter ist eben nicht nur jemand, den man beschützt.\nAn diesem Abend aßen die beiden heiße Würste.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Weglaufen -> Zusammen mit der Mama ---- */
  zh1:{art:'akz_forest', text:'Rotkäppchen drehte sich um und rannte, so schnell es konnte, nach Hause.\nDer Wolf schaute ihr nur verdutzt hinterher.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Mama! Im Wald habe ich einen großen Wolf getroffen!"\n"Gut, dass du es mir gleich sagst. Das war richtig.\nDann gehen wir zusammen zur Großmutter."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'Hand in Hand mit der Mutter ging Rotkäppchen den Waldweg noch einmal entlang.\nWeit hinten zwischen den Bäumen schaute der Wolf zu, aber neben einer Erwachsenen traute er sich nicht hervor.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'Im Haus der Großmutter klang bald fröhliches Lachen.\nWenn dich etwas bedrückt oder erschreckt, sag es sofort einem Erwachsenen.\nDas ist der allerbeste Zauber.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Hast du Hunger? -> Der Gast aus dem Wald ---- */
  zt1:{art:'akz_meet', text:'"Herr Wolf, hast du vielleicht Hunger?"\nDer Wolf war so überrascht, dass er nur blinzelte.\n"...Seit drei Tagen habe ich nichts mehr gefressen."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Rotkäppchen setzte sich an den Wegrand und teilte den Kuchen und den knallroten Apfel.\nDer Wolf nahm einen Bissen, und eine Träne kullerte ihm herunter.'
    : 'Rotkäppchen setzte sich an den Wegrand und teilte den Kuchen mit Honig darauf.\nDer Wolf nahm einen Bissen, und eine Träne kullerte ihm herunter.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"So freundlich war noch nie jemand zu mir."\nMit vollem Bauch ging der Wolf zurück in den tiefen Wald.\nAls Rotkäppchen bei der Großmutter davon erzählte, lächelte die Großmutter.\n"Ein Kind, das sein Essen teilen kann, ist das stärkste auf der Welt."\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Singen -> Der Chor im Bauch ---- */
  zu1:{art:'akz_onaka', text:'"Großmutter, lass uns zusammen singen!"\n"Eine gute Idee. Auch im Dunkeln kann man singen."\nSie holten tief Luft, und dann...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'Der Chor im Bauch!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"La la la, auf dem Weg durch den Wald."\nDraußen vor dem Haus traute der Jäger seinen Ohren nicht.\n"Gesang aus dem Haus? Und noch dazu... aus dem Bauch des Wolfes?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Ritsch, ratsch!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Durch euer Lied habe ich euch sofort gefunden", sagte der Jäger.\nDer erschrockene Wolf klemmte den Schwanz ein und lief in den Wald davon.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Auch am dunkelsten Ort erreicht deine Stimme jemanden, wenn du sie erhebst."\nDiese Worte der Großmutter hat Rotkäppchen nie vergessen.\nVon dem Tag an sangen die beiden zusammen, wie ein kleiner Chor.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Versprechen verlangen -> Der Morgen des Versprechens ---- */
  zy1:{art:'akz_rescue', text:'"Steine wären zu grausam. Stattdessen..."\nRotkäppchen sah dem erwachten Wolf gerade in die Augen.\n"Versprich mir, dass du nie wieder jemanden frisst."\nDer Wolf senkte den Kopf und sagte leise: "...Ich tue es nie wieder."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'Im Licht der Morgensonne ging der Wolf tief in den Wald zurück.\nOb er sein Versprechen wirklich hält, weiß niemand.\nAber der Jäger sagte:\n"Das Aufpassen überlasst ihr mir."\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte des Wolfes ================= */

  w1:{art:'w_fuyu', text:'Dies ist die Geschichte von einem Wolf, der allein im Winterwald lebte.\nDer Schnee lag tief, und nirgends war Beute zu finden.\nSeit drei Tagen hatte der Wolf nichts mehr gefressen.', next:'w2'},
  w2:{art:'w_fuyu', text:'Eine kalte, kalte Nacht.\nWie soll der Wolf sie verbringen?', choices:[
    {t:'Sich in der Höhle zusammenrollen', go:'w2r', set:{wnight:'maru'}},
    {t:'Zu den Sternen hinaufheulen', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Zum blauen Nachthimmel hinauf: Auuuuh!\nAber nirgends antwortete ihm ein Gefährte.'
    : 'Er legte den Schwanz über die Nase und rollte sich klein zusammen.\nTrotzdem war der Zugwind eiskalt.', next:'w3'},
  w3:{art:'w_mura', text:'Am Morgen schaute er vom Hügel auf das Dorf hinab, und der Duft von frischem Brot wehte herauf.\nSein Bauch knurrte laut.\nWas soll er tun?', choices:[
    {t:'Mut fassen und den Bäcker bitten', go:'wp1'},
    {t:'Am Waldweg auf jemanden warten', go:'wm1'}
  ]},

  /* ---- Den Bäcker bitten ---- */
  wp1:{art:'w_panya', text:'Als er ins Dorf kam, liefen alle vor Angst davon.\nNur der Bäcker lief nicht weg.\n"...Hast du Hunger?"', next:'wp2'},
  wp2:{art:'w_panya', text:'Der Wolf nickte ganz kurz.\nDer Bäcker gab ihm einen großen Arm voll harter Brotkanten ab.\n"Du bist der erste Wolf, der bittet, statt zu stehlen."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'Vom nächsten Tag an half der Wolf beim Holzhacken und bekam dafür Brot.\nAuch die Leute im Dorf, die sich gefürchtet hatten, gewöhnten sich nach und nach an ihn.\nDer Mut zu bitten war stärker als jeder Reißzahn.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Am Weg warten (die andere Seite der Geschichte) ---- */
  wm1:{art:'akz_meet', text:'Während er am Waldweg wartete, kam ein Mädchen mit einem roten Käppchen daher.\nEr wollte es fressen. Und doch kam das Mädchen lächelnd auf ihn zu.\n"Herr Wolf, hast du vielleicht Hunger?"', choices:[
    {t:'Ehrlich sagen: "Ja, ich habe Hunger"', go:'wt1'},
    {t:'Den listigen Plan weiterverfolgen', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Seit drei Tagen habe ich nichts mehr gefressen."\nKaum war es heraus, war der Wolf über sich selbst erstaunt.\nDas Mädchen öffnete den Korb und teilte den Kuchen mit ihm.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Ich heiße Rotkäppchen. Herr Wolf, treffen wir uns wieder auf diesem Weg."\nEr hatte sie fressen wollen, und nun war sie seine Freundin.\nAn hungrigen Tagen muss er nur zu diesem kleinen Weg gehen.\nAllein dieser Gedanke macht den Winterwald ein wenig wärmer.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  wz1:{art:'akz_gma_out', text:'Der Wolf gab eine listige Antwort und rannte den kurzen Weg entlang.\nBeim Laufen stach es ihm seltsam in der Brust.\n"Wenn ich nicht fresse, überstehe ich den Winter nicht", sagte er sich.', next:'wz2'},
  wz2:{art:'akz_bed', text:'Was danach geschah, steht in Rotkäppchens Geschichte.\nEr verschluckte die Großmutter und auch Rotkäppchen und schlief ein.\nUnd als er aufwachte...', next:'wz3'},
  wz3:{art:'akz_stone', text:'Sein Bauch war voller Steine.\nSo schwer, so schwer, dass er keinen Schritt gehen konnte.\n"Das also war das Stechen in meiner Brust..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'Der lange Winter ging vorbei,\nund der Frühling kam.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'Der Jäger auf seiner Runde nahm dem bewegungslosen Wolf die Steine heraus und versorgte die Wunde.\n"Hast du daraus gelernt?"\nDer Wolf nickte immer und immer wieder.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'Im Frühlingswind machte sich der Wolf auf den Weg.\nWenn er Hunger hat, will er beim nächsten Mal sagen: "Teilst du mit mir?"\nDas Gewicht der Steine hat der Wolf keinen einzigen Tag vergessen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Großmutter ================= */

  g1:{art:'g_heya', text:'Dies ist die Geschichte von der Großmutter, die allein in einem Haus im Wald lebt.\nSie ist es auch, die das rote Käppchen gestrickt hat.\nHeute hatte sie etwas Fieber und strickte im Bett.', next:'g2'},
  g2:{art:'g_heya', text:'Von der roten Wolle war noch ein Rest übrig.\nWas soll sie als Nächstes stricken?', choices:[
    {t:'Kleine Handschuhe', go:'g2r', set:{knit:'tebukuro'}},
    {t:'Einen langen Schal', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'Ein langer, langer Schal.\nSo lang, dass sie ihn zusammen mit Rotkäppchen umlegen können.'
    : 'Kleine rote Handschuhe.\nGenau richtig für diese kleinen Hände.', next:'g3'},
  g3:{art:'g_heya', text:'Da huschte ein großer Schatten am Fenster vorbei.\nKlopf, klopf.\n"Großmutter, ich bin es, Rotkäppchen."\n...Nanu. Die Stimme klingt heute anders.', choices:[
    {t:'Erst am Fenster nachsehen', go:'gy1'},
    {t:'"Komm herein!" rufen', go:'go1'}
  ]},

  /* ---- Nachsehen -> Der Gast auf dem Dach ---- */
  gy1:{art:'akz_machibuse', text:'Durch den Spalt im Vorhang schaute sie hinaus: ein großer Wolf!\nOhne Eile und ohne Aufregung drehte die Großmutter den Schlüssel um. Klick.\n"Um eine alte Frau hereinzulegen, bist du hundert Jahre zu früh dran."', next:'gy2'},
  gy2:{art:'akz_yane', text:'Der Wolf kletterte aufs Dach. Knarr, knarr.\nDie Großmutter goss das Wurstwasser aus dem Topf in den Trog vor dem Haus.\nDer gute Duft lockte ihn, der Wolf rutschte und rutschte, und platsch!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Klatschnass lief der Wolf in den Wald davon.\nAls die Großmutter dem später eintreffenden Rotkäppchen davon erzählte, machte es große Augen.\n"Großmutter, du bist wie eine Heldin!"\n"Hihi. Ich bin eben nicht nur jemand, den man beschützt."\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Herein rufen -> Ruhe auch im Bauch ---- */
  go1:{art:'akz_bed', text:'Herein kam ein großer Wolf.\nIm Nu war die Großmutter verschluckt.\nAber die Großmutter geriet nicht in Panik.\nSie hatte schon viele Jahrzehnte lange Winter überstanden.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Nanu. Im Bauch ist es ja richtig warm."\nWenig später purzelte auch Rotkäppchen herein.\nDie Großmutter drückte die kleine Hand ganz fest und sagte:\n"Alles wird gut. Pst, hör genau hin. ...Da, Schritte."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Ritsch, ratsch!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'Der Jäger öffnete den Bauch ganz vorsichtig.\n"Erstaunlich. Sie sind da drinnen die ganze Zeit ruhig geblieben?"\n"Ja. Wer in Panik gerät, dem fällt nichts Kluges ein."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Zum Dank schenkte die Großmutter dem Jäger den langen Schal, an dem sie gestrickt hatte.\n"Die Runden im Winter sind bestimmt kalt."\nEs war ein Tag zum Fürchten, und trotzdem lachten alle.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'
    : 'Zum Dank schenkte die Großmutter dem Jäger die roten Handschuhe, an denen sie gestrickt hatte.\n"Die Runden im Winter sind bestimmt kalt."\nEs war ein Tag zum Fürchten, und trotzdem lachten alle.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, AKZ_DE);

  T.ZK_EN.push(
    {section:'Rotkäppchen'},
    {id:'za_seishi',   n:'Die Rettung durch den Jäger', h:'Die ursprüngliche Geschichte vom allerersten Mal'},
    {id:'za_chie',     n:'Die Klugheit der Großmutter', h:'Wenn du nichts verrätst und geradewegs gehst...'},
    {id:'za_gassho',   n:'Der Chor im Bauch',           h:'Wenn ihr im dunklen Bauch zusammen singt...'},
    {id:'za_okyaku',   n:'Der Gast aus dem Wald',       h:'Wenn du etwas in den Korb legst und freundlich zum Wolf bist...'},
    {id:'za_yakusoku', n:'Der Morgen des Versprechens', h:'Wenn du nach der Rettung statt der Steine etwas anderes wählst...'},
    {id:'za_okaasan',  n:'Zusammen mit der Mama',       h:'Wenn du bei Angst sofort zurückläufst und es erzählst...'},
    {id:'zw_pan',      n:'Die erste Bitte',             h:'In der Geschichte des Wolfes ins Dorf hinuntergehen...'},
    {id:'zw_tomo',     n:'Die erste Freundin',          h:'In der Geschichte des Wolfes ehrlich antworten...'},
    {id:'zw_hansei',   n:'Der Frühlingswind',           h:'Wohin der listige Plan am Ende führt...'},
    {id:'zg_yane',     n:'Der Gast auf dem Dach',       h:'In der Geschichte der Großmutter erst nachsehen...'},
    {id:'zg_onaka',    n:'Ruhe auch im Bauch',          h:'In der Geschichte der Großmutter ruhig bleiben...'}
  );

})();
