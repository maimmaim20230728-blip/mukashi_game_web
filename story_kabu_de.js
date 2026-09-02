"use strict";
/* Die große Rübe - German scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "Hau ruck, hau ruck!!" / "Schwupp, heraus!!" */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  /* nominative (subject) / accusative (object of "holen") / "an" + dative (sich festhalten an) */
  var NAMES_DE = { baa:'die Großmutter', mago:'die Enkelin', inu:'der Hund', neko:'die Katze', nezumi:'die Maus', jii:'der Großvater' };
  var NAMES_DE_AKK = { baa:'die Großmutter', mago:'die Enkelin', inu:'den Hund', neko:'die Katze' };
  var AN_DE = { baa:'an der Großmutter', mago:'an der Enkelin', inu:'am Hund', neko:'an der Katze', nezumi:'an der Maus', jii:'am Großvater' };

  function chainDe(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return 'Der Großvater packte die Rübe.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(NAMES_DE[order[i]]) : NAMES_DE[order[i]]) + ' hielt sich ' + AN_DE[order[i+1]] + ' fest,\n';
    }
    t += 'und der Großvater hielt sich ganz fest an der Rübe.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_DE = {

  /* ================= Die große Rübe ================= */

  kb1:{art:'kabu_hata', text:'Dies ist die Geschichte von einem weiten, weiten Feld.\nAn einem Frühlingsmorgen säte der Großvater einen Rübensamen.\n"Werde eine süße, süße Rübe. Werde eine große, große Rübe."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Jeden Tag kümmerte sich der Großvater um die Rübe.\nWorauf sollte er am meisten achten?', choices:[
    {t:'Jeden Tag reichlich gießen', go:'kb2r', set:{care:'mizu'}},
    {t:'Jeden Tag freundlich mit ihr reden', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Werde groß, werde groß."\nJedes Mal, wenn er redete, wiegten sich die Blätter wie vor Freude.'
    : 'Mit dem Licht der Sonne und viel Wasser\nwuchsen die Blätter immer höher und höher.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'Die Rübe wuchs und wuchs, bis sie größer war als der Großvater selbst.\nSo eine Rübe hatte im ganzen Dorf noch niemand gesehen.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Nun war der Tag der Ernte gekommen.';
    if(f.first) return t + '\nDer Großvater krempelte die Ärmel hoch.';
    return t + '\nWas soll er tun?';
  }, choices:f=>{
    var c = [{t:'Sie gleich herausziehen', go:'kb5'}];
    c.push({t:'Sie noch größer werden lassen', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Die Rübe freundlich bitten', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'Der Großvater packte die Rübe und zog mit aller Kraft!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Hau ruck, hau ruck!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'Die Rübe rührte sich nicht.';
    if(f.first) return t + '\n"Großmutter, komm und hilf mir ein wenig!"';
    return t + '\nWen soll er holen?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_DE_AKK[k])+' holen', go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_DE[f.c2])+' kam herbei und stellte sich hinten an.\n'+chainDe(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Hau ruck, hau ruck!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'Die Rübe bewegte sich noch immer kein bisschen.';
    if(f.first) return t + '\n"Jetzt holen wir die Enkelin."';
    return t + '\nWen holen sie als Nächstes?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_DE_AKK[k])+' holen', go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_DE[f.c3])+' kam herbei und stellte sich hinten an.\n'+chainDe(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Hau ruck, hau ruck!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'Die Blätter wackelten hin und her. Mehr nicht.';
    if(f.first) return t + '\n"Gut, holen wir auch den Hund."';
    return t + '\nWen holen sie als Nächstes?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_DE_AKK[k])+' holen', go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_DE[f.c4])+' kam herbei und stellte sich hinten an.\n'+chainDe(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Hau ruck, hau ruck!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Ruck. Ein klein wenig bewegte sie sich... vielleicht.';
    if(f.first) return t + '\n"Katze, komm auch her!"';
    return t + '\nHolen wir die letzte Hilfe.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_DE_AKK[k])+' holen', go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_DE[f.c5])+' kam herbei und stellte sich hinten an.\n'+chainDe(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Hau ruck, hau ruck!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'So nah dran! Aber die Rübe kam nicht heraus.\nUnd es war niemand mehr da, den sie holen konnten.';
    if(f.first) return t;
    return t + '\nWas nun?';
  }, choices:[
    {t:'Nicht aufgeben. Noch einmal!', go:'kb10', set:{nezumi:1}},
    {t:'Für heute Schluss machen', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Da lief die Katze schnell davon\nund brachte eine ganz kleine, kleine Maus mit.\n"Wir brauchen deine Kraft."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Ich...? Wirklich ich?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Hau ruck, hau ruck!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'Die Rübe flog hoch in die Luft,\nund alle plumpsten auf den Boden.\nAutsch... aber auf jedem Gesicht lag ein großes Lächeln.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Endlich war die Rübe heraus.\nDen letzten Ruck gab die allerkleinste Maus.\nAuch eine kleine Kraft wird zusammen mit allen die größte der Welt.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Let it grow → Das Fest des ganzen Dorfes ---- */
  km1:{art:'kabu_sodatsu', text:'"Wenn sie schon so weit ist, soll sie so groß werden, wie es nur geht."\nEr goss und sang, Tag für Tag pflegte er sie weiter.\nAm Ende wurde die Rübe größer als das Haus des Großvaters.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'So eine Rübe war für die Familie allein viel zu groß.\nDer Großvater stellte sich auf den Hügel und rief:\n"Hallooo! Alle im Dorf! Kommt und helft mit!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'Das ganze Dorf, herbei!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'Der Bäcker kam, der Müller kam, und die Kinder kamen auch.\nDas ganze Dorf reihte sich zu einer einzigen Reihe auf.\nUnd ganz hinten stand natürlich die kleine Maus.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Hau ruck, hau ruck!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'Die herausgezogene Rübe kam in einen großen, großen Topf.\nHinter dem Dampf klang das Lachen von allen.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'Aus der größten Rübe der Welt wurde das größte Fest der Welt.\nDie süße Rübensuppe wärmte im ganzen Dorf jeden Bauch.\n"Nächstes Jahr bitte wieder so eine große!"\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Ask the turnip → Das Herz der Rübe ---- */
  ko1:{art:'kabu_talk', text:'Der Großvater setzte sich vor die Rübe.\n"Jeden Tag habe ich mit ihr geredet. Meine Stimme wird sie erreichen."\n"Liebe Rübe. Kommst du jetzt vielleicht heraus?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'Die Blätter wiegten sich einmal hin und her.\nDie Erde hob sich und wölbte sich, und dann...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'Hast du gerufen?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"Du hast jeden Tag mit mir gesprochen, nicht wahr?\nAn der Stimme erkenne ich dich genau.\nGut. Dann komme ich. Eins, zwei..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'Die Rübe sprang von ganz allein heraus, schwupp.\nAuch ohne Kraft kann ein Herz das andere erreichen.\nDas tägliche "Werde groß" war ein Zauberwort.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Call it a day → Morgen wieder alle zusammen ---- */
  ka1:{art:'kabu_yuyake', text:'"Für heute ist Schluss. Ihr habt alle gut mitgeholfen."\nAuf dem Feld im Abendrot tranken sie warmen Tee.\nAuch die Rübe ruhte sich heute in Ruhe aus.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Morgen ziehen wir wieder, alle zusammen."\nSo sagten sie und gingen, jeder in sein Haus.\nEs macht nichts, wenn sie an einem Tag nicht herauskommt.\nDenn nun gibt es ein Morgen, auf das sie sich freuen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Rübe ================= */

  kt1:{art:'kt_tsuchi', text:'Dies ist die Geschichte von tief unten in der Erde.\nIch bin die Rübe. Mitten auf dem weiten Feld wachse ich warm und behaglich.\nJeden Tag höre ich von oben die Stimme des Großvaters.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Auch unten in der Erde gibt es viel Schönes.\nWas soll ich heute tun?', choices:[
    {t:'Mit dem Regenwurm plaudern', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Den Geschmack der Sonne in Ruhe kosten', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Du bist schon wieder größer geworden", sagt der Regenwurm.\n"Hehe. Weil ich jeden Tag eine gute Stimme höre."'
    : 'Von den Blättern rinnt langsam der Geschmack der Sonne herab.\nSüß, warm und ein wenig zum Einschlafen schmeckt er.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'Und dann, eines Tages.\nRuck!\n"Wa... was ist denn das?"\nMein Körper wird nach oben gezogen. Der Tag der Ernte ist gekommen.', next:'kt4'},
  kt4:{art:'kt_up', text:'Und nun, was soll die Rübe tun?', choices:[
    {t:'Noch nicht heraus! Festhalten', go:'kt5'},
    {t:'Gut, die Welt draußen ansehen', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"Ich will noch hierbleiben!"\nDie Rübe spannte ihre Wurzel an und stemmte sich fest dagegen.\nVon oben: "Hau ruck, hau ruck." Es wurde immer lebhafter.', next:'kt6'},
  kt6:{art:'kt_up', text:'Zwei, drei, vier...\nDie Rübe hielt weiter stand, und ganz zuletzt hörte sie eine sehr kleine Stimme.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Bitte, liebe Rübe'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Gegen Kraft kann ich mich beliebig lange stemmen.\nAber wenn eine so kleine Stimme mich bittet...\n"...Na gut, dann eben."\nDie Rübe löste ihre Wurzel ganz sanft.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'Der Himmel war hoch, und die Gesichter aller strahlten.\n"Na so was. Draußen ist es gar nicht schlecht."\nGegen große Kraft hatte die Rübe nicht verloren,\ngegen eine kleine Bitte aber kam sie nicht an.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  ktj1:{art:'kt_up', text:'"Übrigens, welche Farbe hat wohl der Himmel?"\nDie Rübe wurde ganz zappelig.\n"Gut, dann gehe ich eben selbst. Eins, zwei..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'Die Rübe sprang mit solchem Schwung heraus,\ndass alle zusammen auf den Boden plumpsten.\n"So weit ist der Himmel also!"\nSelbst zu springen fühlte sich am allerbesten an.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Maus ================= */

  kn1:{art:'kn_naya', text:'Dies ist die Geschichte von einer kleinen Maus, die in der Ecke der Scheune wohnt.\nSchwere Arbeit liegt ihr nicht. Schwere Sachen kann sie nicht tragen.\nAber auch heute huscht sie munter umher.', next:'kn2'},
  kn2:{art:'kn_naya', text:'Was soll die Maus heute Mittag tun?', choices:[
    {t:'Ein Stück Käse suchen', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Am Fenster in der Sonne liegen', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'Der Sonnenfleck am Fenster ist der beste Platz der Welt.\nDie Schnurrhaare gerade ausgestreckt, und dann dösen, dösen.'
    : 'Hinten in der Scheune riecht es gut.\nEin kleines Stück Käse gefunden, und die Backen sind prall voll.', next:'kn3'},
  kn3:{art:'kn_neko', text:'Da kam die Katze herbei.\nSonst wäre die Maus weggelaufen. Aber heute senkte die Katze höflich den Kopf.\n"Ich habe eine Bitte. Wir brauchen deine Kraft."', choices:[
    {t:'Es ist unheimlich, aber mitgehen', go:'kn3a'},
    {t:'Fragen: "Bin wirklich ich gemeint?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Mit klopfendem Herzen folgte die Maus der Katze.\nAuf dem Feld warteten alle mit ratlosen Gesichtern.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"Gerade weil du klein bist", sagte die Katze.\n"Ganz hinten soll der Leichteste stehen, heißt es."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'Die Maus stellte sich ganz hinten an die Reihe.\nVor ihr: große Rücken, einer nach dem anderen.\nWas kann eine kleine Maus wohl tun?', choices:[
    {t:'Mit dem Schwanz fest ziehen', go:'kns1'},
    {t:'Mit lauter Stimme den Takt angeben', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'Die Maus wickelte ihren Schwanz um den Schwanz der Katze\nund zog mit ihrem kleinen Körper aus aller Kraft!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Hau ruck, hau ruck!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"Den letzten Ruck hast du gegeben", sagte der Großvater.\nEin kleiner Schwanz, eine große Tat.\nSeit diesem Tag isst die Maus nicht mehr in der Ecke der Scheune,\nsondern mitten unter allen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  kno1:{art:'kn_retsu', text:'Wenn die Kraft nicht reicht, dann eben die Stimme!\nDie Maus holte tief Luft und rief, so laut sie konnte.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Eins, zwei! Hau ruck!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'Schwupp, heraus!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Dank dieser Stimme zogen alle Kräfte im selben Augenblick.\n"Das war ein guter Takt", lachte die Großmutter.\nAuch mit kleiner Kraft gibt es eine Stimme, die alle zusammenbringt.\nDie Maus reckte die Brust und machte "piep".\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'Die Großmutter kam herbei und stellte sich hinter den Großvater.\nDie Großmutter hielt sich am Großvater fest, und der Großvater hielt sich ganz fest an der Rübe.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Hau ruck, hau ruck!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'Die Rübe bewegte sich noch immer kein bisschen.\nJetzt kam die Enkelin herbei und stellte sich hinten an.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Hau ruck, hau ruck!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'Die Blätter wackelten hin und her. Mehr nicht.\nJetzt kam der Hund gelaufen und stellte sich hinten an.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Hau ruck, hau ruck!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Ruck. Ein klein wenig bewegte sie sich... vielleicht.\nJetzt kam die Katze gesprungen und stellte sich hinten an.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Hau ruck, hau ruck!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'So nah dran! Aber die Rübe kam nicht heraus.\nDa lief die Katze davon und brachte eine ganz kleine, kleine Maus mit.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_DE);

  T.ZK_EN.push(
    {section:'Die große Rübe'},
    {id:'kb_seishi',  n:'Endlich heraus',                 h:'Die ursprüngliche Geschichte aus dem ersten Durchgang'},
    {id:'kb_matsuri', n:'Das Fest des ganzen Dorfes',     h:'Nicht ziehen, sondern sie noch größer werden lassen...'},
    {id:'kb_onegai',  n:'Das Herz der Rübe',              h:'Beim Wachsen jeden Tag freundlich mit ihr reden...'},
    {id:'kb_ashita',  n:'Morgen wieder alle zusammen',    h:'An einem Tag, an dem sie nicht herauskommt, nicht drängen...'},
    {id:'kt_koe',     n:'Von einer kleinen Stimme besiegt', h:'In der Geschichte der Rübe immer weiter standhalten...'},
    {id:'kt_jibun',   n:'Schwupp, ganz von allein',       h:'In der Geschichte der Rübe neugierig auf draußen werden...'},
    {id:'kn_shippo',  n:'Die große Tat des kleinen Schwanzes', h:'In der Geschichte der Maus den Schwanz einsetzen...'},
    {id:'kn_ondo',    n:'Die kleinste Taktgeberin',       h:'In der Geschichte der Maus die Stimme einsetzen...'}
  );

})();
