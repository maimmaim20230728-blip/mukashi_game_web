"use strict";
/* Urashima Taro - German scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var URA_DE = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Dies ist die Geschichte von einem jungen Fischer aus einem Dorf am Meer.\nSein Name war Urashima Taro.\nEr lebte mit seinem alten Vater und seiner alten Mutter, zu dritt.', next:'u2'},

  u2:{art:'ura_hama', text:'Auch heute klingen die Wellen schön und ruhig.\nWas tun wir, bevor wir zum Fischen hinausfahren?', choices:[
    {t:'Die Netze ausbessern', go:'u2r', set:{ulife:'ami'}},
    {t:'Eine Weile aufs Meer schauen', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'Beim Blick auf die funkelnden Wellen wurde sein Herz ganz still.\nDas Meer war Taros bester Freund.'
    : 'Das sorgfältig geflickte Netz spannte sich schön straff.\nSein Werkzeug gut zu pflegen, das war Taros Art.', next:'u3'},

  u3:{art:'ura_ijime', text:'Da sah er am Strand ein paar Kinder, die eine große Schildkröte umringten und lärmten.\nDie Schildkröte wusste sich nicht mehr zu helfen und zog den Kopf ein.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Ihr dürft die Schildkröte nicht quälen!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'Als die Kinder nach Hause gegangen waren, trug Taro die Schildkröte behutsam zurück ins Meer.\n"Lass dich nicht wieder fangen."\nDie Schildkröte drehte sich immer wieder um und verschwand hinter den Wellen.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Einige Tage später.\nAm Wassersaum erschien dieselbe Schildkröte.\n"Taro, hab Dank für neulich.\nZum Dank führe ich dich zum Drachenpalast."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Auf den Rücken der Schildkröte, und hinab ins Meer.\nNun, wie soll die Reise gehen?', choices:[
    {t:'Sich am Panzer gut festhalten', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Sich umsehen und die Aussicht genießen', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Zum Drachenpalast!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Fischschwärme funkelten vorbei, Lichtsäulen schwankten im Blau.\nSo etwas hatte Taro noch nie gesehen, und er konnte den Blick nicht abwenden.'
    : (f.uride==='tsukamaru'
      ? 'Er hielt sich fest am Panzer, und der Rücken der Schildkröte war warm,\nund seltsam: Angst hatte er gar keine.'
      : 'Durch das blaue Licht tauchte die Schildkröte immer tiefer hinab.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'Auf dem Grund des Meeres tauchte ein überaus prächtiges Schloss auf.\nDas war der Drachenpalast.\nSo schön, dass kein Bild es je malen könnte.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Willkommen, lieber Taro. Du bist also der gütige Mensch, der unsere Schildkröte gerettet hat."\nPrinzessin Otohime empfing ihn mit einem freundlichen Lächeln.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'Der Tanz von Meerbrasse und Flunder!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Vor einer langen Tafel voller Köstlichkeiten tanzten Meerbrassen und Flundern fröhlich.\nTaro machte große Augen und klatschte in die Hände.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'Im Schloss gab es den "Saal der vier Jahreszeiten".\nDurch vier Fenster sah man Frühling, Sommer, Herbst und Winter auf einmal.';
    if(f.first) return t;
    return t + '\nWelches Fenster gefällt dir am besten?';
  }, choices:[
    {t:'Das Fenster des Frühlings mit fallenden Kirschblüten', go:'u10r', set:{umado:'haru'}},
    {t:'Das Fenster des Winters mit fallendem Schnee', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'Vom Meeresgrund aus gesehen fiel der Schnee ganz still, und man konnte ihm ewig zusehen.\n"Wie wunderbar. Hier gibt es wirklich alles."'
    : 'Hinter dem Fenster tanzten Kirschblüten sacht zu Boden.\n"Wie wunderbar. Hier gibt es wirklich alles."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'Die schönen Tage vergingen wie ein Traum...\nund ehe er sich versah, waren drei Jahre um.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Eines Abends dachte Taro plötzlich an seinen Vater und seine Mutter im Dorf.\nOb es ihnen gut geht? Ob sie einsam sind?';
    if(f.first) return t + '\n"Prinzessin Otohime. Ich möchte nun nach Hause zurückkehren."';
    return t + '\nWas soll er tun?';
  }, choices:[
    {t:'"Bitte lass mich nach Hause" sagen', go:'u13'},
    {t:'Noch ein wenig länger hierbleiben', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'Prinzessin Otohime nickte, ein wenig traurig,\nund reichte ihm ein schönes Kästchen aus glänzendem schwarzem Lack.\n"Dies nennt man ein Tamatebako, ein Schatzkästchen."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Du darfst es niemals öffnen'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'Auf dem Rücken der Schildkröte ging es zurück durch das Meer.\nAls er sich umdrehte, wurden die Lichter des Drachenpalasts fern und klein.', next:'u15'},

  u15:{art:'ura_hama700', text:'Am Strand angekommen, war alles irgendwie anders.\nSein Haus war fort. Auch die vertraute Kiefer war fort.\nAuf dem Weg begegneten ihm nur fremde Gesichter.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Während der drei Jahre im Drachenpalast\nwaren an Land siebenhundert Jahre vergangen.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'Sein Vater und seine Mutter gehörten längst in eine ferne Zeit.\nTaro war ganz allein.';
    if(f.first) return t + '\nIn seiner Verlassenheit legte er die Hand auf den Deckel des Tamatebako.';
    return t + '\nWas soll er tun?';
  }, choices:[
    {t:'Das Tamatebako öffnen', go:'uc_kemuri'},
    {t:'Es geschlossen lassen und am Strand warten', go:'ua1'},
    {t:'Es dem Meer zurückgeben', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Weißer Rauch...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'Als der Rauch sich verzog, war Taro ein weißhaariger alter Mann.\nDie Zeit, die im Drachenpalast stillgestanden hatte, kehrte auf einmal zurück.';
    if(f.first) return t;
    return t + '\nWas soll er tun?';
  }, choices:[
    {t:'Stehen bleiben und aufs Meer blicken', go:'e_u_seishi'},
    {t:'Losgehen, dem Drachenpalast entgegen', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Geöffnet, und nun die Reue: das Tamatebako.\nUnd doch trug Taro jene Tage in seiner Brust, schöner als jedes Bild,\nund sie blieben dort wie ein Schatz.\nNur das Rauschen der Wellen klang leise weiter.\nEnde.'},

  /* ---- Der Kranich (das wahre alte Ende aus dem Otogi-zōshi) ---- */
  ut1:{art:'ura_oldman', text:'Zum Wassersaum, ein Schritt, noch ein Schritt.\nWie von dem Meer mit dem Drachenpalast angezogen ging er weiter,\nund Taros Körper wurde auf einmal ganz leicht.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'Er wurde zum Kranich!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Als weißer Kranich flog Taro über das Meer im Morgenrot.\nDa tauchte zwischen den Wellen der Kopf einer grünen Schildkröte auf.\nEs war Prinzessin Otohime in Gestalt einer Schildkröte.\nKranich und Schildkröte sind Zeichen für langes Leben und Glück.\nUnd die beiden tanzten für immer über dem leuchtenden Meer.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.', ending:'u_tsuru'},

  /* ---- Nicht öffnen (das Versprechen aus dem Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro öffnete das Kästchen nicht.\n"Ich habe versprochen, es nicht zu öffnen."\nVon jenem Tag an blickte er morgens und abends vom Strand aufs Meer.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Eines Morgens, einige Tage später, glänzte das Meer golden,\nund ein einzelnes Boot kam über das Wasser geglitten.\n"Lieber Taro. Du hast dein Versprechen gehalten."\nEs war die Stimme von Prinzessin Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Ich habe geglaubt: Solange das Kästchen zu bleibt, sehen wir uns wieder."\nTaro stieg in das Boot und brach zu einer Reise ohne Abschied auf.\nDas Tamatebako war das Zeichen eines Versprechens, das die beiden verband.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Dem Meer zurückgeben ---- */
  uu1:{art:'ura_hama', text:'Taro lieh sich ein kleines Boot und ruderte hinaus aufs offene Meer.\n"Was kostbar ist, gehört an einen kostbaren Ort."\nSacht setzte er das Tamatebako auf die Wellen.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Da kam unter den Wellen jene Schildkröte hervor\nund nahm das Kästchen auf ihren Rücken.\n"Taro. Vielleicht ist das die beste Antwort von allen."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'Erinnerungen bleiben in der Brust, auch wenn das Kästchen zu bleibt.\nTaro beschloss, im neuen Dorf wieder als Fischer zu leben.\nUnd das Meer funkelt auch heute noch.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Bleiben ---- */
  un1:{art:'ura_otohime', text:'"Lass mich noch ein wenig hierbleiben. Aber..."\nAls hätte sie bis auf den Grund seines Herzens gesehen, nickte Prinzessin Otohime still\nund führte Taro vor den Wasserspiegel.', next:'un2'},
  un2:{art:'hime_ryugu', text:'Im Wasserspiegel erschien das vertraute Haus im Dorf.\nVater und Mutter lachten, munter und wohlauf.\n"Von hier aus wachen wir ab und zu über sie.\nUnd wenn du sie sehen möchtest, bringt dich die Schildkröte jederzeit hin."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Beruhigt beschloss Taro, im Drachenpalast zu bleiben.\nAuch weit voneinander entfernt bleibt eine Familie eine Familie, solange sie aneinander denkt.\nDie Tage im Drachenpalast sind auch heute ruhig.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte von Prinzessin Otohime ================= */

  h1:{art:'hime_ryugu', text:'Dies ist die Geschichte von Prinzessin Otohime aus dem Drachenpalast.\nEin schönes Schloss, köstliche Speisen, Lieder und Tänze.\nSie hatte alles, und doch langweilte sich Otohime ein wenig.', next:'h2'},
  h2:{art:'hime_ryugu', text:'Was sollen wir heute tun?', choices:[
    {t:'Im Korallengarten spazieren gehen', go:'h2r', set:{hlife:'sango'}},
    {t:'Dem Gesang der Wale lauschen', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'Von weit draußen im Meer klang der tiefe Gesang der Wale herüber.\nEin großes, sanftes und ein wenig einsames Lied.'
    : 'Rote und rosafarbene Korallen schwankten überall im Garten.\nSo schön, und doch schade: Es gab niemanden, dem sie sie zeigen konnte.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Eines Tages kam die Schildkröte in großer Eile zurück.\nIhr Panzer glänzte blitzblank, und ihre Augen leuchteten.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Prinzessin, das müsst Ihr hören!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Am Strand war ich gefangen, und da hat mich jemand gerettet!"\nTaro, den man in das Schloss einlud, war ein Mensch, der viel lachte.\nIm Drachenpalast wurde ein Lachen laut, das es dort nie gegeben hatte,\nund die langweiligen Tage bekamen auf einmal Farbe.', next:'h5'},
  h5:{art:'ura_otohime', text:'Doch eines Abends im dritten Jahr:\n"Ich möchte nun nach Hause zurückkehren."\nOtohime wurde es eng ums Herz.\nSie wollte ihn halten. Aber ein Herz, das an die Familie denkt, darf man nicht aufhalten.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Ich möchte ihn halten.\nAber...'}, then:'h6'},
  h6:{art:'ura_tama', text:'Otohime bereitete ein Kästchen aus glänzendem schwarzem Lack vor.\nWas soll sie in dieses Kästchen legen?', choices:[
    {t:'Taros glücklich verbrachte Tage hineinlegen', go:'e_h_himitsu'},
    {t:'Den Zauber "wir sehen uns wieder" hineinlegen', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Drei Jahre im Drachenpalast sind siebenhundert Jahre an Land.\nSo wie es war, würde Taro auf einen Schlag alt werden.\nDarum schloss sie die verflossene Zeit sacht in dem Kästchen ein.\n"Solange es zu bleibt, bleibt Taro ganz er selbst.\nIn einsamen Nächten halte dieses Kästchen im Arm und schlafe."\nDas war das Geheimnis des Tamatebako, das niemand kannte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},
  hm1:{art:'hime_ryugu', text:'"Wenn du das Kästchen nicht öffnest, sehen wir uns ganz gewiss wieder."\nMit diesem Wunsch darin reichte Otohime ihm das Kästchen.\nUnd von jenem Tag an schaute sie jeden Tag in den Wasserspiegel.', next:'hm2'},
  hm2:{art:'ura_fune', text:'Im Wasserspiegel hatte Taro das Kästchen auch heute nicht geöffnet,\nsondern blickte still auf das Meer.\n"...Das ist genug. Ich hole ihn ab."\nOtohime ließ ihr schnellstes Boot bereitmachen.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Über das goldene Morgenmeer glitt das Boot dahin.\nGeradewegs zu dem, der auf sie wartete.\nEin Versprechen wird erst dann zu einem Zauber,\nwenn einer es hält und einer daran glaubt.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Schildkröte ================= */

  v1:{art:'kame_hama', text:'Dies ist die Geschichte von einer Meeresschildkröte.\nSie sonnte sich für ihr Leben gern und döste auch an jenem Tag am Strand.\nAls sie aufwachte, war sie von Kindern umringt.', next:'v2'},
  v2:{art:'kame_hama', text:'"Ihr dürft die Schildkröte nicht quälen!"\nEin Fischer mit einer freundlichen Stimme kam ihr zu Hilfe\nund trug sie behutsam zurück ins Meer.\nIn den Wellen schaukelnd fasste die Schildkröte einen festen Entschluss.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'Diese Güte vergelte ich ganz gewiss!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'Zurück im Drachenpalast begann die Schildkröte sofort mit den Vorbereitungen.\nWas soll sie zuerst tun?', choices:[
    {t:'Den Panzer blitzblank polieren', go:'v3r', set:{vlife:'migaku'}},
    {t:'Sofort der Prinzessin berichten', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'Auf diesem Rücken sollte ein Gast reiten, also musste er blitzblank sein.\nBlank poliert glänzte der Panzer wie ein Spiegel.'
    : '"Was für ein wunderbarer Mensch", sagte die Prinzessin mit einem Lächeln.\n"Wir laden ihn unbedingt ein, um ihm zu danken."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Mit der Erlaubnis der Prinzessin schwamm die Schildkröte zum Strand.\n"Taro, zum Dank führe ich dich zum Drachenpalast."\nZum ersten Mal in ihrem Leben trug sie einen Gast auf dem Rücken.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Steig auf meinen Rücken!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'Nun beginnt der Weg zum Drachenpalast.\nWelchen Weg sollen wir nehmen?', choices:[
    {t:'Die geheime Abkürzung nehmen', go:'v5r', set:{vmichi:'chika'}},
    {t:'Den allerschönsten Weg nehmen', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Schwupp, ging es dicht an einem riesigen Wal vorbei.\n"Oh!", rief Taro auf ihrem Rücken.\nAuf diese Abkürzung war sie ein wenig stolz.'
    : 'Langsam ging es durch den Korallenwald hindurch.\n"Wie schön", seufzte Taro auf ihrem Rücken.\nAuf diese Aussicht war sie ein wenig stolz.', next:'v6'},
  v6:{art:'ura_ryugu', text:'Der Gast ist wohlbehalten angekommen, die große Aufgabe ist erledigt.\nUnd nun, was tun wir jetzt?', choices:[
    {t:'Im Drachenpalast bleiben und für ihn sorgen', go:'e_v_senaka'},
    {t:'Zum Strand zurückkehren und auf ihn warten', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'Drei Jahre lang war die Schildkröte Taros ganz persönliches Reittier.\nIhr Rücken war immer der beste Platz im Meer.\n"Auf deinem Rücken sitzt es sich am schönsten."\nJedes Mal, wenn er das sagte, wurde ihr Panzer ein bisschen stolz.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},
  vm1:{art:'kame_hama', text:'Die Schildkröte kehrte zum Strand zurück und wartete jeden Tag am Wassersaum.\nSchildkröten leben sehr, sehr lange.\nUnd wie viel Zeit auch vergeht, ein wichtiges Versprechen vergessen sie nie.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'Die Zeit floss dahin, siebenhundert Jahre.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Eines Morgens stand ein vertrauter Mensch am Strand.\n"Willkommen zu Hause, Taro."\nAn dem ganz veränderten Strand war es eine Einzige,\ndie Schildkröte, die sich noch an Taro erinnerte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, URA_DE);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'Das Kästchen der Reue',        h:'Die ursprüngliche Geschichte aus dem allerersten Durchgang'},
    {id:'u_tsuru',    n:'Taro als Kranich',             h:'Wenn du nach dem Öffnen des Kästchens zum Meer gehst ...'},
    {id:'u_akenai',   n:'Das ungeöffnete Tamatebako',   h:'Wenn du das Versprechen hältst und am Strand wartest ...'},
    {id:'u_umi',      n:'Der Schatz im Meer',           h:'Wenn du es ungeöffnet dem Meer zurückgibst ...'},
    {id:'u_nokoru',   n:'Tage im Drachenpalast',        h:'Wenn du nicht heimkehrst und noch etwas bleibst ...'},
    {id:'uh_himitsu', n:'Das Geheimnis des Tamatebako', h:'Wenn du in Otohimes Geschichte die Tage einschließt ...'},
    {id:'uh_mukae',   n:'Das Boot, das ihn holt',       h:'Wenn du in Otohimes Geschichte den Zauber einschließt ...'},
    {id:'uv_senaka',  n:'Der Gast auf dem Rücken',      h:'Wenn du in der Geschichte der Schildkröte im Palast bleibst ...'},
    {id:'uv_matsu',   n:'Das Versprechen am Strand',    h:'Wenn du in der Geschichte der Schildkröte am Strand wartest ...'}
  );

})();
