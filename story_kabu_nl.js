"use strict";
/* De grote raap - Dutch scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "Hè hup, he hup!!" / "Floep, eruit!!" */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  /* Nederlands verbuigt de zelfstandige naamwoorden niet: een lijst volstaat ("zich vasthouden aan" + naam) */
  var NAMES_NL = { baa:'de grootmoeder', mago:'de kleindochter', inu:'de hond', neko:'de kat', nezumi:'de muis', jii:'de grootvader' };

  function chainNl(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return 'De grootvader pakte de raap beet.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(NAMES_NL[order[i]]) : NAMES_NL[order[i]]) + ' hield zich vast aan ' + NAMES_NL[order[i+1]] + ',\n';
    }
    t += 'en de grootvader hield zich stevig vast aan de raap.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_NL = {

  /* ================= De grote raap ================= */

  kb1:{art:'kabu_hata', text:'Dit is het verhaal van een wijd, wijd veld.\nOp een lentemorgen zaaide de grootvader een raapzaadje.\n"Word een zoete, zoete raap. Word een grote, grote raap."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'De dagelijkse zorg van de grootvader begon.\nWaar zou hij het meeste op letten?', choices:[
    {t:'Elke dag rijkelijk water geven', go:'kb2r', set:{care:'mizu'}},
    {t:'Elke dag vriendelijk tegen de raap praten', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Word groot, word groot."\nElke keer als hij praatte, wiegden de blaadjes alsof ze blij waren.'
    : 'Met het licht van de zon en volop water\ngroeiden de blaadjes hoger en hoger.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'De raap groeide en groeide, tot ze groter was dan de grootvader zelf.\nZo\'n raap had niemand in het dorp ooit gezien.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Nu was de dag van de oogst gekomen.';
    if(f.first) return t + '\nDe grootvader stroopte zijn mouwen op.';
    return t + '\nWat zal hij doen?';
  }, choices:f=>{
    var c = [{t:'De raap meteen uittrekken', go:'kb5'}];
    c.push({t:'De raap nog groter laten worden', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Het de raap vriendelijk vragen', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'De grootvader pakte de raap beet en trok uit alle macht!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Hè hup, he hup!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'De raap verroerde zich niet.';
    if(f.first) return t + '\n"Grootmoeder, kom me even helpen!"';
    return t + '\nWie zal hij roepen?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_NL[k])+' gaan roepen', go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_NL[f.c2])+' kwam eraan en ging achteraan staan.\n'+chainNl(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Hè hup, he hup!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'De raap bewoog nog steeds helemaal niet.';
    if(f.first) return t + '\n"Nu gaan we de kleindochter roepen."';
    return t + '\nWie roepen ze nu?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_NL[k])+' gaan roepen', go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_NL[f.c3])+' kwam eraan en ging achteraan staan.\n'+chainNl(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Hè hup, he hup!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'De blaadjes wiegden heen en weer. Meer niet.';
    if(f.first) return t + '\n"Goed, dan roepen we ook de hond."';
    return t + '\nWie roepen ze nu?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_NL[k])+' gaan roepen', go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_NL[f.c4])+' kwam eraan en ging achteraan staan.\n'+chainNl(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Hè hup, he hup!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Sjorr. De raap bewoog een klein beetje... misschien.';
    if(f.first) return t + '\n"Kat, kom jij ook!"';
    return t + '\nNu nog de laatste helper roepen.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:capital(NAMES_NL[k])+' gaan roepen', go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_NL[f.c5])+' kwam eraan en ging achteraan staan.\n'+chainNl(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Hè hup, he hup!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'De raap kwam er bijna uit, maar net niet. Nog een klein zetje.\nMaar er was niemand meer om te roepen.';
    if(f.first) return t;
    return t + '\nWat nu?';
  }, choices:[
    {t:'Niet opgeven. Nog een keer!', go:'kb10', set:{nezumi:1}},
    {t:'Er voor vandaag mee stoppen', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Toen liep de kat snel weg\nen bracht een kleine, kleine muis mee.\n"We hebben jouw kracht nodig."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Ik...? Echt ik?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Hè hup, he hup!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'De raap vloog hoog de lucht in,\nen iedereen plofte op de grond.\nAu... maar op elk gezicht stond een grote glimlach.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Eindelijk was de raap eruit.\nHet laatste zetje kwam van de allerkleinste muis.\nOok een kleine kracht wordt samen met iedereen de grootste ter wereld.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Let it grow → Het feest van het hele dorp ---- */
  km1:{art:'kabu_sodatsu', text:'"Nu ze zo ver is, laat ze dan zo groot worden als het maar kan."\nHij gaf water en zong liedjes, en dag na dag bleef hij voor haar zorgen.\nUiteindelijk werd de raap groter dan het huis van de grootvader.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'Zo groot was ze veel te veel voor het gezin alleen.\nDe grootvader ging op de heuvel staan en riep:\n"Hallooo! Iedereen in het dorp! Kom ons helpen!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'Het hele dorp, verzamelen!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'De bakker kwam, de molenaar kwam, en de kinderen kwamen ook.\nHet hele dorp sloot aan in een lange, lange rij.\nEn helemaal achteraan stond natuurlijk de kleine muis.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Hè hup, he hup!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'De uitgetrokken raap ging in een grote, grote pan.\nAchter de damp klonk het lachen van iedereen.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'De grootste raap ter wereld werd het grootste feest ter wereld.\nDe zoete raapsoep verwarmde in het hele dorp elke buik.\n"Volgend jaar graag weer zo\'n grote!"\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Ask the turnip → Het hart van de raap ---- */
  ko1:{art:'kabu_talk', text:'De grootvader ging voor de raap zitten.\n"Ik heb elke dag tegen haar gepraat. Mijn stem zal haar wel bereiken."\n"Lieve raap. Wil je er nu misschien uit komen?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'De blaadjes wiegden een keer heen en weer.\nDe aarde kwam omhoog en bolde op, en toen...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'Riep je mij?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"Jij was het die elke dag tegen me praatte.\nAan je stem herken ik je meteen.\nGoed dan. Daar kom ik. Eén, twee..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'De raap sprong helemaal uit zichzelf naar buiten, floep.\nOok zonder kracht kan het ene hart het andere bereiken.\nHet dagelijkse "word groot" was een toverwoord.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Call it a day → Morgen weer met zijn allen ---- */
  ka1:{art:'kabu_yuyake', text:'"Voor vandaag is het genoeg. Jullie hebben allemaal goed meegeholpen."\nOp het veld in het avondrood dronken ze warme thee.\nOok de raap kon vandaag rustig uitrusten.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Morgen trekken we weer, met zijn allen."\nDat zeiden ze tegen elkaar, en ieder ging naar zijn eigen huis.\nHet geeft niet als ze op een dag niet loskomt.\nWant nu is er een morgen om naar uit te kijken.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de raap ================= */

  kt1:{art:'kt_tsuchi', text:'Dit is het verhaal van diep onder de grond.\nIk ben de raap. Midden op het wijde veld groei ik lekker warm.\nElke dag hoor ik van boven de stem van de grootvader.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Ook onder de grond is er van alles leuks.\nWat zal ik vandaag doen?', choices:[
    {t:'Met de regenworm kletsen', go:'kt2r', set:{klife:'mimizu'}},
    {t:'De smaak van de zon rustig proeven', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Zeg, jij bent weer gegroeid", zegt de regenworm.\n"Hehe. Omdat ik elke dag een fijne stem hoor."'
    : 'Vanuit de blaadjes druppelt langzaam de smaak van de zon naar beneden.\nZoet, warm en een beetje slaapverwekkend is die smaak.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'En toen, op een dag.\nRuk!\n"Wa... wat gebeurt er?"\nMijn lijf wordt naar boven getrokken. De dag van de oogst is gekomen.', next:'kt4'},
  kt4:{art:'kt_up', text:'En nu, wat zal de raap doen?', choices:[
    {t:'Nog niet naar buiten! Stevig vasthouden', go:'kt5'},
    {t:'Goed, de wereld daarbuiten bekijken', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"Ik wil hier nog blijven!"\nDe raap spande haar wortel en zette zich stevig schrap.\nVan boven: "Hè hup, he hup." Het werd steeds drukker.', next:'kt6'},
  kt6:{art:'kt_up', text:'Twee, drie, vier...\nDe raap hield vol, en helemaal op het laatst hoorde ze een heel klein stemmetje.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Alsjeblieft, lieve raap'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Tegen kracht kan ik me eindeloos schrap zetten.\nMaar als zo\'n klein stemmetje het mij vraagt...\n"...Nou goed dan."\nDe raap liet haar wortel zachtjes los.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'De hemel was hoog en de glimlachen van iedereen straalden.\n"Kijk eens aan. Buiten is het nog niet zo slecht."\nTegen grote kracht had de raap het niet verloren,\nmaar tegen een klein verzoek kon ze niet op.\nEn ze leefden nog lang en gelukkig.'},

  ktj1:{art:'kt_up', text:'"Trouwens, welke kleur heeft de hemel eigenlijk?"\nDe raap begon te kriebelen van ongeduld.\n"Goed, dan ga ik gewoon zelf. Eén, twee..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'De raap sprong er met zo\'n vaart uit\ndat iedereen tegelijk op de grond plofte.\n"Wat is de hemel wijd!"\nZelf besluiten om eruit te springen voelde het allerbeste.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de muis ================= */

  kn1:{art:'kn_naya', text:'Dit is het verhaal van een kleine muis die in de hoek van de schuur woont.\nZwaar werk ligt haar niet. Zware dingen kan ze niet dragen.\nMaar ook vandaag scharrelt ze vrolijk rond.', next:'kn2'},
  kn2:{art:'kn_naya', text:'Wat zal de muis vanmiddag doen?', choices:[
    {t:'Een stukje kaas zoeken', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Bij het raam in de zon liggen', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'Het zonnige plekje bij het raam is de beste plaats ter wereld.\nDe snorharen recht vooruit, en dan soezen, soezen.'
    : 'Achter in de schuur ruikt het lekker.\nEen klein stukje kaas gevonden, en de wangen zitten bomvol.', next:'kn3'},
  kn3:{art:'kn_neko', text:'Toen kwam de kat eraan.\nAnders zou de muis weggerend zijn. Maar vandaag boog de kat netjes haar hoofd.\n"Ik heb een verzoek. We hebben jouw kracht nodig."', choices:[
    {t:'Het is eng, maar toch meegaan', go:'kn3a'},
    {t:'Vragen: "Bedoel je echt mij?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Met bonzend hart liep de muis achter de kat aan.\nOp het veld stond iedereen met een radeloos gezicht te wachten.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"Juist omdat jij klein bent", zei de kat.\n"Helemaal achteraan hoort de lichtste te staan, zeggen ze."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'De muis ging helemaal achteraan in de rij staan.\nVoor haar: grote ruggen, de een na de ander.\nWat kan een kleine muis nu doen?', choices:[
    {t:'Met de staart stevig trekken', go:'kns1'},
    {t:'Met luide stem de maat aangeven', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'De muis wond haar staart om de staart van de kat\nen trok met haar kleine lijf uit alle macht!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Hè hup, he hup!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"Het laatste zetje kwam van jou", zei de grootvader.\nEen kleine staart, een grote daad.\nVanaf die dag eet de muis niet meer in de hoek van de schuur,\nmaar midden tussen iedereen.\nEn ze leefden nog lang en gelukkig.'},

  kno1:{art:'kn_retsu', text:'Als kracht niet helpt, dan is er nog de stem!\nDe muis haalde diep adem en riep zo hard ze kon.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Eén, twee! Hè hup!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'Floep, eruit!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Dankzij die ene stem trok iedereen op precies hetzelfde moment.\n"Je gaf goed de maat aan", lacht de grootmoeder.\nOok met kleine kracht is er een stem die iedereen samenbrengt.\nDe muis stak haar borst vooruit en piepte: piep.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'De grootmoeder kwam eraan en ging achter de grootvader staan.\nDe grootmoeder hield zich vast aan de grootvader, en de grootvader hield zich stevig vast aan de raap.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Hè hup, he hup!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'De raap bewoog nog steeds helemaal niet.\nNu kwam de kleindochter eraan en ging achteraan staan.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Hè hup, he hup!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'De blaadjes wiegden heen en weer. Meer niet.\nNu kwam de hond aangerend en ging achteraan staan.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Hè hup, he hup!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Sjorr. De raap bewoog een klein beetje... misschien.\nNu kwam de kat aangesprongen en ging achteraan staan.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Hè hup, he hup!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'De raap kwam er bijna uit, maar net niet. Nog een klein zetje.\nToen liep de kat weg en bracht een kleine, kleine muis mee.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_NL);

  T.ZK_EN.push(
    {section:'De grote raap'},
    {id:'kb_seishi',  n:'Eindelijk eruit',                    h:'Het oorspronkelijke verhaal uit de eerste keer'},
    {id:'kb_matsuri', n:'Het feest van het hele dorp',        h:'Niet trekken, maar de raap nog groter laten worden...'},
    {id:'kb_onegai',  n:'Het hart van de raap',               h:'Tijdens het groeien elke dag vriendelijk tegen de raap praten...'},
    {id:'kb_ashita',  n:'Morgen weer met zijn allen',         h:'Op een dag dat ze niet loskomt, niet doordrukken...'},
    {id:'kt_koe',     n:'Verslagen door een klein stemmetje', h:'In het verhaal van de raap steeds blijven volhouden...'},
    {id:'kt_jibun',   n:'Floep, helemaal uit zichzelf',       h:'In het verhaal van de raap nieuwsgierig worden naar buiten...'},
    {id:'kn_shippo',  n:'De grote daad van de kleine staart', h:'In het verhaal van de muis de staart gebruiken...'},
    {id:'kn_ondo',    n:'Het kleinste voorzangertje',         h:'In het verhaal van de muis de stem gebruiken...'}
  );

})();
