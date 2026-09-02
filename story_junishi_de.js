"use strict";
/* Wie die zwoelf Tiere gewaehlt wurden - German scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var N12 = ['Ratte','Ochse','Tiger','Hase','Drache','Schlange','Pferd','Schaf','Affe','Hahn','Hund','Eber'];

  var JUNISHI_DE = {

  /* ================= Wie die zwoelf Tiere gewaehlt wurden ================= */

  ju1:{art:'ju_ofure', text:'Dies ist die Geschichte von den zwölf Tieren, die den Jahren ihre Namen gaben.\nAm Ende eines Jahres ließ der Gott eine Botschaft verkünden.\n"Am Morgen des Neujahrstages kommt zu meinem Palast. Die ersten zwölf, die ankommen, werden der Reihe nach zu den Namen der Jahre."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'Die Tiere begannen, sich vorzubereiten, jedes auf seine Weise.';
    if(f.first) return t;
    return t + '\nWas bereiten sie vor?';
  }, choices:[
    {t:'Das Laufen üben', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Ein Festessen kochen und warten', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'Das Schaf stampfte Reiskuchen, und der Affe sammelte Kastanien.\nAm Neujahrsmorgen wollten alle zusammen davon essen.'
    : 'Der Tiger und das Pferd liefen wieder und wieder über die Felder.\nDer Hase übte das Springen, hopp, hopp, hopp.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'Die Katze hatte den Tag in der Botschaft überhört.\n"Sag, Ratte, wann gehen wir noch mal zum Palast?"';
    if(f.first) return t + '\n"Am Morgen des zweiten Januar."\nSo antwortete die Ratte.';
    return t + '\nWas antwortet die Ratte?';
  }, choices:[
    {t:'"Am Morgen des zweiten Januar"', go:'ju4'},
    {t:'"Am Morgen des ersten Januar"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'Die Nacht vor Neujahr.\n"Ich bin langsam auf den Beinen. Ich mache mich lieber jetzt schon auf."\nUnd der Ochse machte sich auf den verschneiten Weg, als es noch dunkel war.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Immer langsam'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Aufbruch am Abend!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Auf seinen Rücken sprang die Ratte, leicht wie ein Blatt.\nDer Ochse merkte nichts davon.\nDen verschneiten Weg entlang, ganz langsam, ganz langsam.';
    if(f.first) return t;
    return t + '\nWas tat die Ratte unterwegs in der Nacht?';
  }, choices:[
    {t:'Auf dem Rücken schlafen', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Die Sterne zählen', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'Über dem Schnee stand der Nachthimmel voller Sterne.\nDie Ratte zählte sie, eins, zwei, drei, und wartete auf den Morgen.'
    : 'Der Rücken des Ochsen war warm, und ehe sie es merkte, war die Ratte eingeschlafen.\nNur die Schritte des Ochsen gingen weiter über den verschneiten Weg.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Der Morgen kam.\nDas Tor des Palastes stand vor ihnen.\nDer Ochse dachte, er sei als Erster angekommen.';
    if(f.first) return t;
    return t + '\nWas tut die Ratte?';
  }, choices:[
    {t:'Hinunterspringen und zuerst hineingehen', go:'juc_tobiori'},
    {t:'Oben bleiben und zusammen mit dem Ochsen hineingehen', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Hinuntergesprungen!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'In diesem Augenblick sprang die Ratte vom Rücken des Ochsen\nund ging vor ihm durch das Tor.\nDie Stimme des Gottes sprach: "Das erste Jahr soll die Ratte sein."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Ratte'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Danach ging der Ochse durch das Tor.\n"Das nächste Jahr soll der Ochse sein."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Ratte, Ochse'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'Der Tiger kam herangerannt.\nDann sprang der Hase mit einem Satz durch das Tor.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'Der Drache und die Schlange kamen im selben Augenblick am Tor an.\n"Geh du zuerst", sagte die Schlange.\nDer Drache ging zuerst hinein, die Schlange danach.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tiger, Hase, Drache, Schlange'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'Das Pferd kam im Galopp, und das Schaf folgte ihm.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'Der Affe und der Hund gerieten unterwegs in einen Streit und kamen kaum voran.\nDer Hahn trat zwischen die beiden.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'Erst zum Palast!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Auf Drängen des Hahns hörten der Affe und der Hund mit dem Streit auf.\nDer Affe, der Hahn und der Hund gingen in dieser Reihenfolge durch das Tor.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Pferd, Schaf, Affe, Hahn, Hund'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'Zuletzt kam der Eber.\nEr konnte nur geradeaus laufen,\nund so lief er am Tor vorbei und musste wieder zurückkommen.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Geradeaus, Eber!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'Das zwölfte Jahr war der Eber.\nDamit waren die zwölf Namen der Jahre beisammen.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'Die zwölf Namen!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'Der Gott sprach zu den zwölf Tieren.\n"Von nun an gebt ihr, Jahr für Jahr und der Reihe nach, dem Jahr euren Namen."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'Am nächsten Morgen.\nDie Katze kam zum Tor des Palastes.\nDas Tor war geschlossen.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... Hm?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'Die Stimme des Gottes sprach.\n"Der Tag, an dem man kommen sollte, war gestern. Wasch dir das Gesicht und komm ein andermal wieder."';
    if(f.first) return t;
    return t + '\nWas tut die Katze?';
  }, choices:[
    {t:'Sich das Gesicht waschen und nach Hause gehen', go:'ju18'},
    {t:'Sich das Gesicht waschen und noch einmal zum Tor gehen', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'Die Katze wusch sich das Gesicht.\nUnd von da an, wann immer sie eine Ratte erblickte, lief sie ihr nach.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Ratte, Ochse, Tiger, Hase, Drache, Schlange, Pferd, Schaf, Affe, Hahn, Hund, Eber.\nJahr für Jahr, der Reihe nach, gaben die zwölf Tiere dem Jahr ihren Namen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Auf dem Ruecken des Ochsen ---- */
  jua1:{art:'ju_mon', text:'Die Ratte sprang nicht hinunter.\nSie blieb auf dem Rücken des Ochsen sitzen, und so gingen beide zusammen durch das Tor.\n"Also zwei auf einmal", sagte die Stimme des Gottes.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"Der Ochse soll zuerst kommen", sagte die Ratte.\n"Die Ratte soll zuerst kommen", sagte der Ochse.\nDer Gott lachte.\n"Dann sei das erste Jahr die Ratte und das nächste der Ochse.\nDafür helft ihr beide einander in euren Jahren."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Seitdem hilft im Jahr der Ratte der Ochse, und im Jahr des Ochsen die Ratte,\neines dem anderen bei der Arbeit.\nAn der Reihenfolge änderte sich nichts. Aber es war ein Morgen für zwei.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Der Gruss in jedem Jahr ---- */
  jub1:{art:'ju_neko_kao', text:'Die Katze wusch sich das Gesicht und ging noch einmal zum Tor.\n"Ich habe mir das Gesicht gewaschen."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'Die Stimme des Gottes sprach.\n"Es gibt nur zwölf Namen für die Jahre.\nAber komm an jedem Neujahrstag zu mir und grüße mich."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Seitdem geht die Katze an jedem Neujahrsmorgen zum Palast und grüßt.\nSie gibt keinem Jahr ihren Namen.\nAber das Tor des Palastes öffnet sich für die Katze.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Jenseits des Meeres ---- */
  juu1:{art:'ju_nezuneko', text:'"Am Morgen des ersten Januar."\nDie Katze sagte "Danke" und ging in dieser Nacht früh schlafen.', next:'juu2'},
  juu2:{art:'ju_kake', text:'Der Neujahrsmorgen.\nDie Ratte auf dem Rücken des Ochsen, der Ochse langsam, der Tiger in vollem Lauf.\nUnd am Tor kamen der Hase und die Katze im selben Augenblick an.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'Im selben Augenblick?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'Der Gott dachte eine Weile nach und sprach dann.\n"Hier soll dieses Jahr dem Hasen gehören.\nIn den Ländern jenseits des Meeres soll dieses Jahr der Katze gehören."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'Darum gibt es noch heute in den Ländern jenseits des Meeres\nOrte, an denen die Katze einem Jahr ihren Namen gibt.\nDieselbe Geschichte, doch in einem anderen Land sind auch die Namen andere.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Katze ================= */

  jn1:{art:'jneko_hinata', text:'Dies ist die Geschichte von einer Katze.\nSie hörte, dass es eine Botschaft des Gottes gab, aber den Tag hatte sie überhört.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'Wen soll sie fragen?', choices:[
    {t:'Die Ratte fragen', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Den Hund fragen', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"Im Januar ... am ersten, glaube ich? Die Ratte weiß es genauer", sagte der Hund.\nAlso fragte die Katze die Ratte.\n"Am Morgen des zweiten Januar", antwortete die Ratte.'
    : '"Am Morgen des zweiten Januar", antwortete die Ratte.\n"Danke", sagte die Katze.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'Der Morgen des zweiten Januar.\nDie Katze ging zum Tor des Palastes.\nDas Tor war geschlossen.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... Gestern?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"Der Tag, an dem man kommen sollte, war gestern. Wasch dir das Gesicht und komm ein andermal wieder."\nSo sprach die Stimme des Gottes.\nWas tut die Katze?', choices:[
    {t:'Sich das Gesicht waschen und nach Hause gehen', go:'jna1'},
    {t:'Sich in der Sonne zusammenrollen', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'Die Katze wusch sich das Gesicht.\nDas Wasser war kalt.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'Was die Katze dachte, nachdem sie sich das Gesicht gewaschen hatte,\nsteht in dieser Geschichte nicht.\nDie Katze wusch sich das Gesicht. Mehr nicht.\nEnde.'},
  jnh1:{art:'jneko_hinata', text:'Die Katze ging an einen sonnigen Platz.\nSie rollte sich zusammen und schloss die Augen.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Es gibt Katzen, die Ratten nachlaufen, und es gibt Katzen, die in der Sonne schlafen.\nWas diese Katze gerade denkt, weiß nur die Katze selbst.\nEnde.'},

  /* ================= Die Geschichte der Ratte ================= */

  jz1:{art:'jnezumi_ana', text:'Dies ist die Geschichte von einer Ratte.\nAls sie die Botschaft des Gottes hörte, dachte die Ratte nach.\n(Mit meinen Beinen komme ich nicht mit, so schnell ich auch laufe.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'Was tut sie nachts in ihrem Bau?', choices:[
    {t:'Über den Weg zum Palast nachdenken', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Früh schlafen gehen und für den Morgen bereit sein', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'Die Ratte kroch tief ins Stroh und schlief früh ein.\nSogar in ihren Träumen sah sie das Tor des Palastes.'
    : 'Die Ratte ging den Weg zum Palast in Gedanken wieder und wieder ab.\nEs war ein weiter Weg. Ich brauche jemandes Rücken, dachte sie.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"Wann gehen wir noch mal zum Palast?", fragte die Katze.\nDie Ratte antwortete: "Am Morgen des zweiten Januar."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'In der Nacht vor Neujahr sprang die Ratte auf den Rücken des Ochsen.\nDer Ochse merkte nichts davon.\nWas tut die Ratte?', choices:[
    {t:'Schweigend mitfahren', go:'jzu1'},
    {t:'Den Ochsen ansprechen', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'Am Morgen, vor dem Tor, sprang die Ratte hinunter.\nDas erste Jahr war die Ratte.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'Die Ratte nannte der Katze nicht den richtigen Tag.\nWarum, das weiß nur die Ratte.\nUnd die Ratte gab dem allerersten Jahr ihren Namen.\nEnde.'},
  jzs1:{art:'ju_senaka', text:'"Ochse, danke, dass du mich trägst."\nDer Ochse drehte sich überrascht um.\n"Ach, du bist es, Ratte. Du wiegst ja nichts. Bleib nur sitzen."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Vor dem Tor sagte der Ochse:\n"Lauf schnell und hol dir deinen Namen."\nDie Ratte sprang hinunter und ging durch das Tor.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'Das erste Jahr war die Ratte. Das nächste der Ochse.\nDie Ratte vergaß den Ochsen nie, der ihr seinen Rücken geliehen hatte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_DE);

  T.ZK_EN.push(
    {section:'Wie die zwölf Tiere gewählt wurden', note:'In manchen Ländern jenseits des Meeres gehört die Katze zu den zwölf Tieren. In Japan erzählt man außerdem Wortspiel-Geschichten über ein dreizehntes Tier, etwa ein Wiesel oder einen Frosch.'},
    {id:'ju_seishi',  n:'Die zwölf Namen',                h:'Die Geschichte, wie sie erzählt wird, gleich beim ersten Mal'},
    {id:'ju_ushi',    n:'Auf dem Rücken des Ochsen',      h:'Wenn du am Tor oben bleibst, statt hinunterzuspringen ...'},
    {id:'ju_kao',     n:'Der Gruß in jedem Jahr',         h:'Wenn du dir das Gesicht wäschst und noch einmal zum Tor gehst ...'},
    {id:'ju_umi',     n:'Jenseits des Meeres',            h:'Wenn die Ratte den richtigen Tag nennt ...'},
    {id:'jn_asa',     n:'Der nächste Morgen',             h:'In der Geschichte der Katze: sich das Gesicht waschen und heimgehen ...'},
    {id:'jn_hinata',  n:'Die Katze in der Sonne',         h:'In der Geschichte der Katze: sich in der Sonne zusammenrollen ...'},
    {id:'jz_uso',     n:'Der Tag der Lüge',               h:'In der Geschichte der Ratte: schweigend mitfahren ...'},
    {id:'jz_senaka',  n:'Der Tag mit dem geliehenen Rücken', h:'In der Geschichte der Ratte: den Ochsen ansprechen ...'}
  );

})();
