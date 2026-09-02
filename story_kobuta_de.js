"use strict";
/* Die drei kleinen Schweinchen - German scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Eigene Übersetzung,
   keine fremde deutsche Übersetzung nachgezeichnet. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var KOBUTA_DE = {

  /* ================= Die drei kleinen Schweinchen ================= */

  p1:{art:'buta_hajimari', text:'Dies ist die Geschichte von 3 kleinen Schweinchen, die Brüder waren.\nDas große Schweinchen, das mittlere Schweinchen und das kleine Schweinchen.\nAlle drei waren groß geworden, und jedes wollte nun sein eigenes Haus bauen.', next:'p2'},

  p2:{art:'buta_hajimari', text:'Der Morgen des Aufbruchs. Was sagen die Schweinchen zur Mutter?', choices:[
    {t:'Fröhlich "Wir gehen dann los!"', go:'p2r', set:{plife:'genki'}},
    {t:'"Wir bringen dir etwas Gutes mit!"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"Darauf freue ich mich", sagte die Mutter und lächelte.\nIhre Hand winkte und winkte, noch lange Zeit.'
    : '"Macht es gut!", rief die Mutter, genauso fröhlich.\nIhre helle Stimme begleitete sie, und die Schritte wurden leicht.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'Der Weg teilte sich in drei.';
    if(f.first) return t + '\nDie 3 Schweinchen winkten einander zu und gingen jedes seinen eigenen Weg.';
    return t + '\nNun, was tun die Schweinchen?';
  }, choices:[
    {t:'Jedes geht seinen eigenen Weg', go:'p4'},
    {t:'Zu dritt ein Haus bauen', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'Das große Schweinchen traf einen Mann mit einem dicken Bündel Stroh auf dem Rücken.\n"Bitte, darf ich etwas von dem Stroh haben?"\nEin Haus aus Stroh ist noch am selben Tag fertig.\nSo schnell fertig zu sein, das ist das Beste daran.', next:'p5'},

  p5:{art:'buta_eda', text:'Das mittlere Schweinchen traf einen Mann mit einem Arm voll Reisig.\n"Bitte, darf ich etwas von dem Reisig haben?"\nDurch ein Haus aus Reisig weht der Wind, schön kühl.\nDas ist das Beste daran.', next:'p6'},

  p6:{art:'buta_renga', text:'Das kleine Schweinchen traf einen Mann mit einem Karren voller Ziegel.\n"Bitte, darf ich etwas von den Ziegeln haben?"\nEin Haus aus Ziegeln dauert lange, aber es wird sehr fest.\nDas ist das Beste daran.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Klipp, klapp! Klipp, klapp!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Drei Häuser standen fertig da.\nDas Haus aus Stroh, das Haus aus Reisig und das Haus aus Ziegeln.\nAuf jedes konnte man stolz sein.';
    if(f.first) return t;
    return t + '\nWas tun die Schweinchen zuerst in ihren neuen Häusern?';
  }, choices:[
    {t:'Sich gegenseitig die Häuser zeigen', go:'p7r', set:{plife2:'miseai'}},
    {t:'Eine Pause machen und Tee trinken', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'Tee nach getaner Arbeit schmeckt ganz besonders gut.\n"Morgen besuchen wir uns gegenseitig in unseren Häusern!"'
    : '"Deins war so schnell fertig!" "Bei dir weht ein schöner Wind!" "Deins ist so fest!"\nJedes Haus hatte wirklich seine gute Seite.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'In diesem Augenblick.\nEin hungriger Wolf kam vom Berg herunter\nund blieb vor dem Haus aus Stroh stehen.';
    return 'In diesem Augenblick.\nDas kleine Schweinchen sah weit weg einen Wolf, der den Bergweg herunterkam.\nWas tun die Schweinchen?';
  }, choices:[
    {t:'Abwarten und zusehen', go:'pc_vs'},
    {t:'Alle warnen und sich im Ziegelhaus versammeln', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Schweinchen gegen Wolf!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'Der Wolf klopfte an das Haus aus Stroh, poch, poch.\n"Schweinchen, Schweinchen, lass mich herein."\n"Nein, nein, ich mache nicht auf. Bei den Härchen, Härchen, Härchen an meinem Kinn, ganz bestimmt nicht!"\n"Dann schnaube ich und puste ich, bis dein ganzes Haus davonfliegt!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'Puuuuust!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'Das Haus aus Stroh wirbelte in die Luft und war fort.\nDas große Schweinchen stolperte hinaus und rannte davon,\nhinein in das Reisighaus des mittleren Schweinchens.', next:'p11'},

  p11:{art:'buta_eda', text:'Der Wolf kam sofort hinterher.\n"Schweinchen, Schweinchen, lasst mich herein."\nDiesmal antworteten die beiden wie aus einem Mund:\n"Nein, nein, wir machen nicht auf. Bei den Härchen, Härchen, Härchen an unserem Kinn, ganz bestimmt nicht!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'Puust, puuuuust!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'Auch das Haus aus Reisig flog in alle Richtungen davon.\nDie beiden rannten, so schnell sie konnten,\nhinein in das Ziegelhaus des kleinen Schweinchens.', next:'p13'},

  p13:{art:'buta_naka', text:'"Hier sind wir sicher.\nAn diesem Haus habe ich lange gebaut, darum ist es sehr fest."\nDas kleine Schweinchen schloss die Tür fest ab.', next:'p14'},

  p14:{art:'buta_renga', text:'"Schweinchen, Schweinchen, lasst mich herein."\n"NEIN, NEIN, WIR MACHEN NICHT AUF. BEI DEN HÄRCHEN, HÄRCHEN, HÄRCHEN AN UNSEREM KINN, GANZ BESTIMMT NICHT!"\nDer Wolf holte tief, tief Luft.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... Es rührt sich kein bisschen!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'So oft der Wolf auch pustete, das Ziegelhaus rührte sich nicht.';
    if(f.first) return t + '\nSchnaufend und keuchend sah der Wolf zum Schornstein auf dem Dach hinauf.';
    return t + '\nDer hungrige Wolf überlegte sich seinen nächsten Schritt.';
  }, choices:[
    {t:'Durch den Schornstein hineinklettern', go:'p16'},
    {t:'Mit süßen Worten hinauslocken', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'Der Wolf kletterte auf das Dach und setzte einen Fuß in den Schornstein.\nDoch im Haus hatte man das längst kommen sehen.', next:'p17'},

  p17:{art:'buta_nabe', text:'Unten am Fuß des Schornsteins, im Kamin, stand ein großer Topf.\nBlubber, blubber. Er war randvoll mit kochendem Wasser.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plumps, platsch!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"Heiß, heiß, heiß, heiß!!"\nMit verbranntem Hinterteil rannte der Wolf\nschnurstracks zurück auf den Berg.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Von da an kam der Wolf nicht mehr vorbei.\nDie 3 Schweinchen kamen von Zeit zu Zeit zusammen\nund löffelten fröhlich eine warme Suppe.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Die echte englische Geschichte (Jacobs 1890: die 3 Listen) ---- */
  pg1:{art:'buta_renga', text:'Der Wolf machte seine Stimme ganz sanft.\n"Hör mal, Schweinchen. Am Rand des Dorfes gibt es ein Feld mit feinen Rüben.\nWollen wir morgen früh um 6 Uhr zusammen hingehen?"\nDas kleine Schweinchen merkte es sofort. (Das ist eine Falle.)\n"Gern. Dann also um 6 Uhr."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Na fein, auf 6 Uhr freue ich mich!'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'Am nächsten Morgen stand das Schweinchen schon um 5 Uhr auf,\nholte flink seine Rüben und war wieder zu Hause.\nAls der Wolf um 6 Uhr kam, staunte er.\n"Ich war schon dort. Ich habe einen ganzen Topf voll Rüben."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'Waaas? Schon dort gewesen?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Als Nächstes lud der Wolf zum Apfelbaum ein. "Um 5 Uhr früh hole ich dich ab."\nDas Schweinchen ging schon um 4 Uhr los. Doch während es oben im Baum saß,\nkam der Wolf herbei.\n"Ich gebe dir den allerbesten Apfel!"\nDas Schweinchen warf einen Apfel weit, weit fort,\nund während der Wolf ihn holte, kletterte es hinunter und lief nach Hause.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Zuletzt lud der Wolf zum Jahrmarkt in der Stadt ein. "Gehen wir um 3 Uhr nachmittags."\nDas Schweinchen ging schon vor Mittag und kaufte ein Butterfass.\nAuf dem Rückweg sah es von oben am Hang den Wolf heraufkommen.\nDa kroch das Schweinchen in das Fass hinein.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rumpel, rumpel! Rumpel, rumpel!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Mit dem Schweinchen darin rollte das Fass den Hang hinunter, rumpel, rumpel!\nAls der Wolf das große runde Ding auf sich zukommen sah,\nerschrak er sehr. Er klemmte den Schwanz ein und rannte davon.', next:'pg6'},
  pg6:{art:'buta_renga', text:'Als der Wolf später erfuhr, was geschehen war, wurde er zornig.\n"Jetzt reicht es! Ich komme durch den Schornstein!"\nDoch im Haus hatte man das längst kommen sehen.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'Im Kamin blubberte der große Topf wie an jedem Tag.\nDarin war eine heiße Suppe, randvoll mit den geholten Rüben.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plumps, platsch!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"Heiß, heiß, heiß, heiß!!"\nBöse verbrannt lief der Wolf tief, tief in die Berge hinein,\nund von da an ließ er sich nie wieder blicken.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'Das Rübenfeld, der Apfelbaum und das Butterfass.\nDas ist der Weg, der der alten Geschichte aus England am nächsten kommt.\nDas kluge kleine Schweinchen lebte danach noch lange und zufrieden.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Von Anfang an zu dritt ---- */
  pk1:{art:'buta_renga', text:'"Lasst uns zusammen ein Haus bauen, ein richtig festes!"\nAuf dieses Wort des kleinen Schweinchens hin begannen die 3, Ziegel herbeizutragen.\nZu dritt sind selbst schwere Ziegel kein Problem.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Unter einem Dach standen drei Betten.\nEs wurde ein stattliches Haus, mit Kamin und mit Fenstern.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Da kam der hungrige Wolf herbei\nund holte tief, tief Luft.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... Es rührt sich kein bisschen!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'Der Wolf pustete, bis die Sonne unterging,\nund ging dann müde zurück auf den Berg.\nEin Haus, das man mit vereinten Kräften baut, ist fester als alles andere.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Wachsam und vorbereitet ---- */
  pn1:{art:'buta_michi', text:'"Der Wolf kommt!"\nDas kleine Schweinchen lief schnell zu den Häusern der beiden Brüder.\nDie 3 versammelten sich eilig im Ziegelhaus.', next:'pn2'},
  pn2:{art:'buta_naka', text:'Durch das Fenster sahen sie, wie der Wolf das Haus aus Stroh wegpustete.\n"Niemand da?!"\nAuch das Haus aus Reisig pustete er weg.\n"Hier ist auch nichts?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Zuletzt pustete er am Ziegelhaus. Doch es rührte sich nicht.\nDer Wolf war ganz erschöpft\nund setzte sich hin, noch immer hungrig.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Aus dem Fenster kam eine Stimme.\n"Ein Besuch? Tut mir leid, für heute haben wir schon geschlossen."\nDer Wolf trottete zurück auf den Berg.\nWer vorbereitet ist, bleibt ruhig. Die 3 tranken ihren Tee weiter.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte des Wolfes ================= */

  pw1:{art:'pwolf_yama', text:'Dies ist die Geschichte von einem Wolf, der oben auf dem Berg lebte.\nIn letzter Zeit fand er kaum noch etwas zu fressen,\nund sein Bauch war immerzu leer.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Wo soll der Wolf heute nach Futter suchen?', choices:[
    {t:'In der Nähe des Flusses suchen', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Tief im Wald suchen', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Bei den Beeren im Wald waren die Vögel schon vor ihm da gewesen.\nSein Bauch knurrte laut.'
    : 'Im Fluss war nicht einmal der Schatten eines Fisches.\nSein Bauch knurrte laut.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Unten am Fuß des Berges standen 3 neue Häuser nebeneinander.\nUnd von irgendwoher zog ein guter Duft herüber.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'Das riecht nach einem Festmahl!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Pusten war die besondere Kunst des Wolfes.\nEr blies das Haus aus Stroh und das Haus aus Reisig weg,\ndoch die Schweinchen entwischten ihm jedes Mal.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Blieb noch das Ziegelhaus. Und das rührte sich nicht.\nDer hungrige Wolf überlegte sich seinen nächsten Schritt.', choices:[
    {t:'Mit süßen Worten hinauslocken', go:'pw6'},
    {t:'Ehrlich mit ihnen reden', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Lud er zum Rübenfeld ein, war das Schweinchen schon vorher dort.\nLud er zum Apfelbaum ein, entwischte es ihm.\nAls er ihm auf dem Rückweg vom Jahrmarkt auflauerte, da geschah es.\nVon oben am Hang kam etwas Großes und Rundes...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rumpel, rumpel! Rumpel, rumpel!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Rumpel, rumpel, mit gewaltigem Schwung rollte es heran.\nEin großer runder Klotz, wie er ihn noch nie gesehen hatte.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'E-ein Ungeheuer!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'Der Wolf klemmte den Schwanz ein und rannte bis auf den Gipfel des Berges.\n"Unten am Fuß des Berges lebt ein rundes Ungeheuer..."\nDiese Geschichte wurde unter den Wölfen des Berges\nnoch lange, lange weitererzählt.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  pwh1:{art:'buta_renga', text:'Der Wolf setzte sich vor die Tür\nund sagte mit ganz leiser Stimme:\n"...In Wahrheit habe ich seit vielen Tagen nichts mehr gegessen."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Im Haus sahen sich die 3 Schweinchen an.\nSie machten die Tür nicht auf. Doch aus dem Fenster kam eine Stimme.\n"Warte dort einen Augenblick."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Aus dem Fenster wurde vorsichtig eine heiße Gemüsesuppe gereicht.\nRüben und Kartoffeln schwammen in großen Stücken darin.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'Sie ist heiß, also puste erst darauf.'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'Das berühmte Pusten des Wolfes\nwar nun keine Kraft mehr, die Häuser wegblies,\nsondern eine Kraft, die heiße Suppe gerade richtig abkühlte.\nEine besondere Kunst hat nicht nur einen einzigen Nutzen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte des Ziegelhauses ================= */

  ps1:{art:'prenga_kamado', text:'Dies ist die Geschichte von einem Haus aus Ziegeln.\nJeder Ziegel wird einzeln im Feuer des Ofens langsam gebrannt.\nDarum fällt er nicht bei jedem kleinen Stoß auseinander.', next:'ps2'},
  ps2:{art:'buta_renga', text:'Eines Tages kam das kleine Schweinchen\nund begann, die Ziegel sorgfältig aufzuschichten.\nKlipp, klapp. Nach und nach wurde daraus ein Haus.\nWas war durch das erste fertige Fenster zu sehen?', choices:[
    {t:'Der weite blaue Himmel', go:'ps2r', set:{slife:'sora'}},
    {t:'Das Rübenfeld am Rand des Dorfes', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Vor dem Fenster breitete sich das Rübenfeld aus.\nWie es jeden Tag ein wenig wuchs, sah das Haus gern zu.'
    : 'Über den blauen Himmel, der das ganze Fenster füllte, zogen weiße Wolken.\nEin Haus zu sein, dachte das Haus, ist doch etwas Schönes.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Eines Tages kamen die beiden älteren Schweinchen\nganz außer Atem hereingestürzt.\nDraußen war wohl ein Wolf.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'Jetzt bin ich an der Reihe.'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'Der Wolf holte tief Luft und pustete mit aller Kraft.\nEinmal, zweimal, dreimal.\nKein einziger Ziegel in der Wand bewegte sich.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'Es rührt sich kein bisschen!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'Als die stürmische Nacht vorbei war, dachte das Haus nach.\nWas soll mir von nun an das Wichtigste sein?', choices:[
    {t:'Wind und Regen standhalten', go:'e_ps_mamoru'},
    {t:'Das Feuer im Kamin warm halten', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'In windigen Nächten und an regnerischen Morgen rührt sich das Haus nicht.\nDas Haus weiß genau, warum es so fest geboren wurde.\nWeil drinnen 3 Schweinchen sind, die es schützen möchte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},
  pss1:{art:'buta_soup', text:'Der Winter kam. Im Kamin brannte das Feuer, und der Topf köchelte leise.\nAuch die Mutter der Schweinchen kam zu Besuch,\nund das ganze Haus war voller Lachen.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'Die Aufgabe eines Hauses ist es, Wind und Regen abzuhalten.\nDoch seine allerwichtigste Aufgabe ist es,\ndas Lachen darin gut aufzubewahren.\nAuch heute klingen warme Stimmen aus dem Haus aus Ziegeln.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_DE);

  T.ZK_EN.push(
    {section:'Die drei kleinen Schweinchen'},
    {id:'pb_seishi',   n:'Das rettende Ziegelhaus',            h:'Die vertraute Geschichte aus dem allerersten Durchgang'},
    {id:'pb_genten',   n:'Die echte englische Geschichte',     h:'Wenn der Wolf mit süßen Worten lockt...'},
    {id:'pb_kyoryoku', n:'Von Anfang an zu dritt',             h:'An der Weggabelung gemeinsam einen Weg wählen...'},
    {id:'pb_sonae',    n:'Wachsam und vorbereitet',            h:'Den Wolf schon von Weitem entdecken...'},
    {id:'pw_taru',     n:'Ein Ungeheuer!',                     h:'In der Geschichte des hungrigen Wolfes die süßen Worte wählen...'},
    {id:'pw_fuufuu',   n:'Der wahre Nutzen des Pustens',       h:'In der Geschichte des hungrigen Wolfes ehrlich reden...'},
    {id:'ps_mamoru',   n:'Es rührt sich nicht',                h:'In der Geschichte des Ziegelhauses Wind und Regen standhalten...'},
    {id:'ps_waraigoe', n:'Ein Gefäß für das Lachen',           h:'In der Geschichte des Ziegelhauses das Feuer im Kamin entzünden...'}
  );

})();
