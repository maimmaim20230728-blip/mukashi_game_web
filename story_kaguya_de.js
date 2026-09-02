"use strict";
/* Prinzessin Kaguya - German scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   Quelle: Taketori Monogatari (10. Jh., PD). Keine Elemente aus dem Film von 2013. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var KAGUYA_DE = {

  /* ================= Prinzessin Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Dies ist die Geschichte von vor langer, langer Zeit.\nEs lebte einmal ein alter Mann, der vom Bambusschneiden lebte.\nDie Leute nannten ihn den Bambussammler.\nEines Tages fand er tief im Bambushain einen Halm, dessen Wurzel golden leuchtete.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'Der Bambus leuchtet!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'Als er den Halm aufschnitt, saß darin ein winziges Mädchen, kaum eine Handbreit groß.\nDer alte Mann trug es auf der Handfläche nach Hause.\nZusammen mit seiner Frau beschloss er, das Mädchen in einem Körbchen großzuziehen.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'Was sollen sie jeden Tag für die kleine Prinzessin tun?', choices:[
    {t:'Ihr ein Schlaflied singen', go:'kg3r', set:{takeko:'uta'}},
    {t:'Ihr Spielzeug aus Bambus machen', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'Der alte Mann schnitzte kleine Flöten und Wagen aus Bambus.\nWenn die Prinzessin lachte, lachte die alte Frau mit.'
    : 'Wenn die alte Frau ein Schlaflied sang, schlief die Prinzessin ruhig ein.\nDie beiden saßen am Körbchen und schauten ihr lange zu.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'Von da an fand er in jedem Halm, den er schnitt, Gold.\nDas Mädchen wuchs zusehends und war nach etwa 3 Monaten eine schöne junge Frau.\nSie gaben ihr den Namen "Kaguya, Prinzessin des schlanken Bambus".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'Von der Schönheit der Prinzessin Kaguya sprach bald das ganze Land.\nUm das Haus herum sammelten sich die Leute, um einen einzigen Blick zu erhaschen.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Unter ihnen kamen 5 junge Edelleute, die sie unbedingt zur Frau nehmen wollten.\nPrinz Ishitsukuri, Prinz Kuramochi, Minister Abe,\nder Große Rat Otomo und der Mittlere Rat Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'Prinzessin Kaguya sagte:\n"Ich gehe zu dem, der mir den Schatz bringt, den ich sehen möchte."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'Die steinerne Schale des Buddha!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'Der Juwelenzweig von Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'Das Fell der Feuerratte!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'Das Juwel vom Hals des Drachen!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'Die Kaurimuschel der Schwalbe!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Keiner dieser Schätze schien es auf dieser Welt zu geben.\nDie 5 machten sich auf, jeder für sich, auf die Reise.';
    if(f.first) return t;
    return t + '\nWessen Geschichte hören wir?';
  }, choices:[
    {t:'Prinz Ishitsukuri', go:'kgk1'},
    {t:'Prinz Kuramochi', go:'kgk2'},
    {t:'Minister Abe', go:'kgk3'},
    {t:'Der Große Rat Otomo', go:'kgk4'},
    {t:'Der Mittlere Rat Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'Prinz Ishitsukuri fand den weiten Weg bis nach Indien viel zu beschwerlich\nund brachte eine alte Schale aus einem Tempel in der Nähe.\nDoch die Schale des Buddha müsste leuchten.\nDass diese Schale nicht leuchtete, sah man sofort.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'Prinz Kuramochi ließ den Juwelenzweig von Handwerkern anfertigen.\nDie Prinzessin und der alte Mann staunten über den prächtigen Zweig.\nDoch da kamen die Handwerker und sagten:\n"Wir haben unseren Lohn dafür noch nicht bekommen."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'Minister Abe ließ sich aus einem fernen Land ein Fellgewand kommen.\nDie Prinzessin sagte: "Das Fell der Feuerratte darf im Feuer nicht verbrennen."\nSie legten es ins Feuer, und das Fell verbrannte lodernd.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'Der Große Rat Otomo fuhr mit einem Schiff aus, um einen Drachen zu suchen.\nEin schwerer Sturm kam auf, und das Schiff drehte sich im Kreis.\nAls er endlich das Ufer erreichte, kehrte er mit roten, verweinten Augen heim.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'Der Mittlere Rat Isonokami griff in ein Schwalbennest,\nund als er etwas zu fassen bekam, fiel er vom Dach.\nWas er in der Hand hielt, war alter Schwalbenkot.\nEr verletzte sich und musste im Bett bleiben.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'Am Ende brachte kein Einziger einen echten Schatz herbei.';
    if(f.first) return t;
    return t + '\nUnd nun, was soll sie tun?';
  }, choices:[
    {t:'Die Gerüchte lassen und still weiterleben', go:'kg10'},
    {t:'Dem alten Mann und der alten Frau die Wahrheit sagen', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'Die Gerüchte drangen auch dem Kaiser zu Ohren.\nEr tat, als ginge er auf die Jagd, und besuchte das Haus des Bambussammlers.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'Die Sänfte des Kaisers!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'Als der Kaiser sie in die Sänfte heben wollte,\nwurde die Gestalt der Prinzessin Kaguya sacht zu Licht und verschwand.\n"Ich nehme sie nicht mit."\nDas sagte der Kaiser und kehrte in die Hauptstadt zurück.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'Von da an schickten sich der Kaiser und Prinzessin Kaguya Briefe und Gedichte.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'Und so vergingen 3 Jahre.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'Als der Frühling kam, blickte Prinzessin Kaguya zum Mond hinauf und weinte.\nWenn der alte Mann nach dem Grund fragte, antwortete sie nicht.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'Am Ende des Sommers sagte Prinzessin Kaguya es ihnen endlich.\n"Ich gehöre zur Hauptstadt des Mondes.\nIn der Vollmondnacht des 8. Monats holen sie mich. Ich muss zurück."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'Ich gebe sie nicht her!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'Der alte Mann bat den Kaiser um Hilfe, und viele Soldaten kamen.\nAuf dem Dach und im Garten standen Männer mit Bogen.\nDie alte Frau versteckte die Prinzessin im hintersten Zimmer und schloss die Tür fest.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'Die Nacht des Vollmonds. Kurz nach Mitternacht\nwurde es rings um das Haus heller als am Tag.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'Das Mondlicht kommt herab!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Vom Himmel kamen Menschen herab, die auf Wolken standen.\nDen Soldaten wich die Kraft aus den Armen, keiner konnte den Bogen spannen.\nDie Tür ging von selbst auf, und aus den Armen der alten Frau trat die Prinzessin hervor.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'Der Mondbote sprach:\n"Alter Mann. Die Prinzessin hat auf dem Mond eine Schuld auf sich geladen und war zur Sühne eine Weile hier unten.\nDie Zeit der Sühne ist vorbei.\nEs war auch ein Dank für eine kleine gute Tat von dir."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'Prinzessin Kaguya schrieb dem alten Mann einen Brief.\n"Denkt an das Gewand, das ich zurücklasse, als wäre ich es selbst.\nIn Nächten, in denen der Mond scheint, schaut bitte hinauf."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'Der Mondbote hielt ihr ein Gefäß mit dem Lebenselixier hin.';
    if(f.first) return t + '\nDie Prinzessin kostete einen Schluck, legte den Rest zu ihrem Brief an den Kaiser\nund gab beides dem Boten des Kaisers.';
    return t + '\nWem soll dieses Elixier gehören?';
  }, choices:[
    {t:'Es dem Brief an den Kaiser beilegen', go:'kg21'},
    {t:'Es dem alten Mann und der alten Frau lassen', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'Der Mondbote hielt ihr das Federgewand hin.\n"Wer dies anlegt, dem vergehen alle Sorgen des Herzens."';
    if(f.first) return t + '\nDie Prinzessin legte das Federgewand an.';
    return t + '\nWas soll sie tun?';
  }, choices:[
    {t:'Das Federgewand anlegen', go:'kg22'},
    {t:'Vorher noch einmal zurückblicken', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'Als die Sorgen des Herzens vergangen waren, empfand die Prinzessin für den alten Mann weder Zuneigung noch Sehnsucht.\nAuf einer Wolke stieg sie zum Mond hinauf.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Zum Mond ...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'Der alte Mann und die alte Frau konnten nicht aufhören zu weinen.\nSie hielten das Gewand der Prinzessin im Arm und blickten lange, lange zum Himmel.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'Der Kaiser ließ den Brief der Prinzessin und das Lebenselixier\nauf dem Gipfel des Berges in Suruga verbrennen, der dem Himmel am nächsten steht.\nWeil so viele Krieger auf diesen Berg gestiegen waren,\nnannte man ihn von da an "Fuji", den Berg voller Krieger.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'In Nächten, in denen der Mond scheint, schaut bitte hinauf.\nDer alte Mann und die alte Frau taten, wie die Prinzessin geschrieben hatte, und blickten in Mondnächten zum Himmel.\nDas Gewand, das sie zurückgelassen hatte, blieb bei ihnen.\nEnde.'},

  /* ---- Die verbleibenden Tage ---- */
  kgn1:{art:'kg_uchiake', text:'Noch bevor der Kaiser kam, sprach Prinzessin Kaguya mit den beiden.\n"Ich gehöre zur Hauptstadt des Mondes. In diesem Herbst muss ich zurück."\nDer alte Mann und die alte Frau schwiegen lange.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'Von diesem Tag an war den 3 jeder Tag kostbar.\nSie gingen im Bambushain spazieren und auch zu der Stelle, wo er sie damals gefunden hatte.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'In Nächten mit schönem Mond saßen die 3 zusammen auf der Veranda.\n"In Mondnächten setzt euch bitte hierher. Auch ich schaue vom Mond auf diesen Platz."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'In der Nacht des Vollmonds kamen sie, um die Prinzessin zu holen.\nDer alte Mann kämpfte nicht.\nDie 3 hielten sich an den Händen und warteten auf das Licht.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'Der Abschied kam, genau wie sonst auch.\nAber davor hatten die 3 einen ganzen Herbst miteinander.\nAuf der Veranda liegen noch immer 3 Sitzkissen.\nEnde.'},

  /* ---- Vor dem Federgewand ---- */
  kgm1:{art:'kg_shouten', text:'Bevor sie das Federgewand anlegte, blickte die Prinzessin zurück.\nDer alte Mann und die alte Frau sahen zu ihr her.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Danke, dass ihr mich großgezogen habt'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'Die alte Frau weinte, lächelte und winkte.\nAuch der alte Mann winkte, so weit er konnte.\nDie Prinzessin prägte sich die beiden Gesichter ein und legte dann das Federgewand an.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Auch als die Sorgen des Herzens vergangen waren, blieben die beiden Gesichter, die sie zuletzt gesehen hatte,\nim Licht bei ihr, die ganze Zeit.\nEnde.'},

  /* ---- Das Lebenselixier ---- */
  kgu1:{art:'kg_tegami', text:'Die Prinzessin gab das Lebenselixier dem alten Mann und der alten Frau.\n"Wer davon trinkt, lebt für immer."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Nachdem die Prinzessin zum Mond zurückgekehrt war, sahen die beiden auf das Gefäß.\n"Eine Welt ohne die Prinzessin müssen wir nicht für immer leben."\nDer alte Mann sagte es leise.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'In der nächsten Mondnacht stellten die beiden das Gefäß auf die Veranda.\nSo, als hielten sie es dem Mond ganz sacht entgegen.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'Das Elixier wurde nie getrunken; es stand da und badete im Mondlicht.\nDer Kaiser ließ seines auf dem Berg Fuji verbrennen, der alte Mann hielt seines auf der Veranda dem Mond hin.\nBeides war eine Art, die Prinzessin nicht zu vergessen, jeder auf seine Weise.\nEnde.'},

  /* ================= Die Geschichte vom Bambussammler ================= */

  kj1:{art:'okina_take', text:'Dies ist die Geschichte vom Bambussammler und seiner Frau, und davon, wie es weiterging.\nSeit die Prinzessin zum Mond zurückgekehrt ist, ist ein Monat vergangen.', next:'kj2'},
  kj2:{art:'kg_ato', text:'Was sollen sie heute tun?', choices:[
    {t:'Das Gewand der Prinzessin zusammenlegen', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Durch den Bambushain gehen', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'Der Bambushain schwankte im Wind, genau wie an jenem Tag.\nDer alte Mann blieb eine Weile stehen und hörte dem Bambus zu.'
    : 'Die alte Frau legte das Gewand der Prinzessin sorgsam zusammen.\nSie legte es zusammen, faltete es wieder auseinander und legte es noch einmal zusammen.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'Eine Mondnacht. Die beiden lasen den Brief der Prinzessin noch einmal.\n"In Nächten, in denen der Mond scheint, schaut bitte hinauf."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Wollen wir hinaufschauen?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'Die alte Frau sagte es zum alten Mann.\nWas sollen die beiden tun?', choices:[
    {t:'Von der Veranda aus zum Mond hinaufschauen', go:'kjt1'},
    {t:'Am Morgen in den Bambushain gehen', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'Die beiden saßen nebeneinander auf der Veranda und schauten zum Mond hinauf.\nDie Trauer ging nicht weg.\nAber das Mondlicht reichte bis auf die Veranda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Von da an sitzen die beiden in Mondnächten auf der Veranda.\nEs gibt Nächte, in denen sie weinen, Nächte, in denen sie reden, und Nächte, in denen sie schweigen.\nDas Mondlicht reichte in jeder dieser Nächte gleich weit.\nEnde.'},
  kjk1:{art:'okina_take', text:'An einem Frühlingsmorgen ging der alte Mann wieder in den Bambushain.\nLeuchtenden Bambus gab es nicht mehr.\nDafür streckten überall Bambussprossen ihre Köpfe heraus.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'... Graben wir sie aus.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'Der alte Mann grub die Bambussprossen aus, eine nach der anderen.\nOhne Eile, von niemandem geheißen, aus eigenem Entschluss.\nAls der Korb voll war, kam die alte Frau mit dem Mittagessen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte des Mondboten ================= */

  ku1:{art:'tsuki_miyako', text:'Dies ist die Geschichte eines Boten, der in der Hauptstadt des Mondes lebt.\nIn der Hauptstadt des Mondes gibt es keine Tränen. Und keine Sorgen des Herzens.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Heute ist der Tag, an dem es zur Erde hinabgeht. Was soll der Bote mitnehmen?', choices:[
    {t:'Nur das Federgewand', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'Auch das Lebenselixier', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'In die Kiste kamen das Federgewand und ein Gefäß mit dem Lebenselixier.\nDie Menschen auf der Erde sollen sich so etwas sehr wünschen.'
    : 'In die Kiste kam das Federgewand.\nAllein damit wird die Prinzessin sofort wieder ein Mensch des Mondes.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'Als der Bote auf einer Wolke herabkam, standen viele Menschen rings um das Haus.\nSie hielten Bogen in den Händen und blickten grimmig herüber.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'Der alte Mann rief etwas.\nDer Bote verstand die Bedeutung dieser Worte nicht.\nDas Wort "nicht hergeben" kennt man auf dem Mond nicht.', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'... Tränen?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'Die Prinzessin trat hervor.\nWas soll der Bote tun?', choices:[
    {t:'Ihr nach der Regel das Federgewand anlegen', go:'kun1'},
    {t:'Die Bitte der Prinzessin erfüllen', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'Der Bote legte der Prinzessin nach der Regel das Federgewand an.\nDoch er konnte nicht so tun, als sähe er das nasse Gesicht des alten Mannes nicht.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'Auch zurück auf dem Mond musste der Bote immer wieder an dieses Gesicht denken.\nIn einem Land ohne Tränen erfuhr er zum ersten Mal, was Tränen bedeuten.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'Seitdem blickt der Mondbote hin und wieder zur Erde hinab.\nIn dem Land, das keine Tränen kennt, gibt es nun einen, der sie kennt.\nEnde.'},
  kut1:{art:'kg_tegami', text:'"Bitte gib dem alten Mann meinen Brief und mein Gewand."\nAuf die Bitte der Prinzessin nickte der Bote.\nIn den Regeln des Mondes steht so etwas nicht. Aber es wird wohl die Sitte der Erde sein.', next:'kut2'},
  kut2:{art:'kg_ato', text:'Der Bote stieg vor dem alten Mann herab und überreichte ihm Brief und Gewand ganz sorgsam.\nDer alte Mann drückte beides an sich.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'Zurück in der Hauptstadt des Mondes fügte der Bote den Regeln eine Zeile hinzu.\n"Wer von der Erde zurückkehrt, darf eine einzige Sache zurücklassen."\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_DE);

  T.ZK_EN.push(
    {section:'Prinzessin Kaguya'},
    {id:'kg_seishi',  n:'In Mondnächten hinaufschauen',    h:'Die ursprüngliche Geschichte aus dem 1. Durchgang'},
    {id:'kg_nokori',  n:'Die verbleibenden Tage',          h:'Wenn du vor dem Besuch des Kaisers die Wahrheit sagst ...'},
    {id:'kg_koromo',  n:'Vor dem Federgewand',             h:'Wenn du vor dem Federgewand noch einmal zurückblickst ...'},
    {id:'kg_kusuri',  n:'Das Lebenselixier',               h:'Wenn du das Elixier dem alten Mann und der alten Frau lässt ...'},
    {id:'kj_tsukiyo', n:'Wohin das Mondlicht reicht',      h:'In der Geschichte vom alten Paar: wenn du von der Veranda hinaufschaust ...'},
    {id:'kj_take',    n:'Wieder Bambussprossen graben',     h:'In der Geschichte vom alten Paar: wenn du am Morgen in den Bambushain gehst ...'},
    {id:'ku_namida',  n:'Das Land ohne Tränen',            h:'In der Geschichte des Mondboten: wenn du dich an die Regel hältst ...'},
    {id:'ku_tegami',  n:'Die Nachricht',                   h:'In der Geschichte des Mondboten: wenn du die Bitte der Prinzessin erfüllst ...'}
  );

})();
