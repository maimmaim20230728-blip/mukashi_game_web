"use strict";
/* Hur de tolv djuren valdes - Swedish scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var N12 = ['Råtta','Oxe','Tiger','Kanin','Drake','Orm','Häst','Får','Apa','Tupp','Hund','Vildsvin'];

  var JUNISHI_SV = {

  /* ================= Hur de tolv djuren valdes ================= */

  ju1:{art:'ju_ofure', text:'Det här är sagan om de tolv djuren som fick ge åren sina namn.\nI slutet av ett år lät guden sända ut ett budskap.\n"På nyårsdagens morgon ska ni komma till mitt palats. De tolv första som kommer fram får, i tur och ordning, ge åren sina namn."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'Djuren började göra sig i ordning, vart och ett på sitt sätt.';
    if(f.first) return t;
    return t + '\nVad förbereder de?';
  }, choices:[
    {t:'Träna på att springa', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Laga en festmåltid och vänta', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'Fåret stampade riskakor, och apan samlade kastanjer.\nPå nyårsmorgonen skulle alla äta av dem tillsammans.'
    : 'Tigern och hästen sprang över fälten gång på gång.\nKaninen tränade på att hoppa, hopp, hopp, hopp.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'Katten hade missat vilken dag som stod i budskapet.\n"Du råtta, när var det vi skulle gå till palatset?"';
    if(f.first) return t + '\n"På morgonen den andra januari."\nSå svarade råttan.';
    return t + '\nVad svarar råttan?';
  }, choices:[
    {t:'"På morgonen den andra januari"', go:'ju4'},
    {t:'"På morgonen den första januari"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'Natten före nyår.\n"Jag är långsam till fots, så jag ger mig av redan nu."\nOch oxen började gå längs den snöiga vägen medan det ännu var mörkt.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Sakta men säkert'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Avfärd i skymningen!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Upp på ryggen hoppade råttan, lätt som ett löv.\nOxen märkte ingenting.\nSakta, sakta, längs den snöiga vägen.';
    if(f.first) return t;
    return t + '\nVad gjorde råttan under natten på vägen?';
  }, choices:[
    {t:'Sov på oxens rygg', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Räknade stjärnorna', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'Över snön stod natthimlen full av stjärnor.\nRåttan räknade dem, en, två, tre, och väntade på morgonen.'
    : 'Oxens rygg var varm, och innan råttan visste ordet av hade den somnat.\nBara oxens steg fortsatte längs den snöiga vägen.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Morgonen kom.\nPalatsets port stod rakt framför dem.\nOxen trodde att den hade kommit först.';
    if(f.first) return t;
    return t + '\nVad gör råttan?';
  }, choices:[
    {t:'Hoppa ner och gå in först', go:'juc_tobiori'},
    {t:'Stanna kvar och gå in tillsammans med oxen', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Hoppade ner!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'I samma stund hoppade råttan ner från oxens rygg\noch gick in genom porten före den.\nGudens röst hördes: "Det första året ska vara Råttan."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Råtta'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Därefter gick oxen genom porten.\n"Nästa år ska vara Oxen."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Råtta, Oxe'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'Tigern kom rusande.\nSedan hoppade kaninen med ett skutt genom porten.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'Draken och ormen kom fram till porten i exakt samma stund.\n"Varsågod, gå du först", sade ormen.\nDraken gick in först, och ormen därefter.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tiger, Kanin, Drake, Orm'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'Hästen kom i galopp, och fåret följde efter.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'Apan och hunden började gräla på vägen och kom knappt framåt.\nTuppen ställde sig emellan dem.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'Till palatset först!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'På tuppens uppmaning slutade apan och hunden att gräla.\nApan, tuppen och hunden gick genom porten i den ordningen.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Häst, Får, Apa, Tupp, Hund'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'Sist kom vildsvinet.\nDet kunde bara springa rakt fram,\nså det sprang förbi porten och fick vända tillbaka.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Rakt fram, vildsvin!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'Det tolfte året var Vildsvinet.\nDärmed var årens tolv namn samlade.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'De tolv namnen!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'Guden talade till de tolv djuren.\n"Från och med nu ska ni, år efter år och i tur och ordning, ge året ert namn."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'Nästa morgon.\nKatten kom till palatsets port.\nPorten var stängd.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... Hm?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'Gudens röst hördes.\n"Dagen då man skulle komma var i går. Gå och tvätta ansiktet och kom en annan gång."';
    if(f.first) return t;
    return t + '\nVad gör katten?';
  }, choices:[
    {t:'Tvätta ansiktet och gå hem', go:'ju18'},
    {t:'Tvätta ansiktet och gå till porten en gång till', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'Katten tvättade ansiktet.\nOch från den dagen sprang den efter varje råtta den fick syn på.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Råtta, Oxe, Tiger, Kanin, Drake, Orm, Häst, Får, Apa, Tupp, Hund, Vildsvin.\nÅr efter år, i tur och ordning, gav de tolv djuren året sitt namn.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Pa oxens rygg ---- */
  jua1:{art:'ju_mon', text:'Råttan hoppade inte ner.\nDen satt kvar på oxens rygg, och så gick de båda genom porten tillsammans.\n"Två på en gång, alltså", sade gudens röst.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"Oxen får gå först", sade råttan.\n"Råttan får gå först", sade oxen.\nGuden skrattade.\n"Då ska det första året vara Råttan och det nästa Oxen.\nI gengäld ska ni två hjälpa varandra under era år."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Sedan dess hjälper oxen till under Råttans år, och råttan under Oxens år,\nvar och en med den andres arbete.\nOrdningen ändrades inte. Men det var en morgon för två.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Halsningen varje ar ---- */
  jub1:{art:'ju_neko_kao', text:'Katten tvättade ansiktet och gick till porten en gång till.\n"Jag har tvättat ansiktet."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'Gudens röst hördes.\n"Det finns bara tolv namn för åren.\nMen kom till mig varje nyårsdag och hälsa."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Sedan dess går katten varje nyårsmorgon till palatset för att hälsa.\nDen ger inte något år sitt namn.\nMen palatsets port öppnas för katten.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Pa andra sidan havet ---- */
  juu1:{art:'ju_nezuneko', text:'"På morgonen den första januari."\nKatten sade "tack" och gick och lade sig tidigt den kvällen.', next:'juu2'},
  juu2:{art:'ju_kake', text:'Nyårsdagens morgon.\nRåttan på oxens rygg, oxen i sakta mak, tigern i full fart.\nOch vid porten kom kaninen och katten fram i exakt samma stund.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'Samma stund?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'Guden tänkte en stund och sade sedan.\n"Här ska det här året tillhöra Kaninen.\nI länderna på andra sidan havet ska det här året tillhöra Katten."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'Därför finns det än i dag, i länderna på andra sidan havet,\nplatser där katten ger ett år sitt namn.\nSamma saga, men i ett annat land är också namnen andra.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Sagan om katten ================= */

  jn1:{art:'jneko_hinata', text:'Det här är sagan om en katt.\nDen hörde att guden hade sänt ut ett budskap, men missade vilken dag det gällde.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'Vem ska den fråga?', choices:[
    {t:'Fråga råttan', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Fråga hunden', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"I januari ... den första, tror jag? Råttan vet det bättre", sade hunden.\nSå katten frågade råttan.\n"På morgonen den andra januari", svarade råttan.'
    : '"På morgonen den andra januari", svarade råttan.\n"Tack", sade katten.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'Morgonen den andra januari.\nKatten gick till palatsets port.\nPorten var stängd.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... I går?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"Dagen då man skulle komma var i går. Gå och tvätta ansiktet och kom en annan gång."\nSå sade gudens röst.\nVad gör katten?', choices:[
    {t:'Tvätta ansiktet och gå hem', go:'jna1'},
    {t:'Rulla ihop sig i solen', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'Katten tvättade ansiktet.\nVattnet var kallt.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'Vad katten tänkte efter att ha tvättat ansiktet\nstår inte i den här sagan.\nKatten tvättade ansiktet. Mer än så är det inte.\nSlut.'},
  jnh1:{art:'jneko_hinata', text:'Katten gick till en solig plats.\nDen rullade ihop sig och slöt ögonen.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Det finns katter som springer efter råttor, och det finns katter som sover i solen.\nVad den här katten tänker just nu vet bara katten själv.\nSlut.'},

  /* ================= Sagan om rattan ================= */

  jz1:{art:'jnezumi_ana', text:'Det här är sagan om en råtta.\nNär den hörde gudens budskap tänkte råttan efter.\n(Med mina ben hinner jag inte fram, hur fort jag än springer.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'Vad gör den på natten i sitt hål?', choices:[
    {t:'Fundera på vägen till palatset', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Sova tidigt och vara redo till morgonen', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'Råttan grävde ner sig i halmen och somnade tidigt.\nÄven i drömmen såg den palatsets port.'
    : 'Råttan följde vägen till palatset i tankarna, gång på gång.\nDet var långt dit. Jag behöver någons rygg, tänkte den.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"När var det vi skulle gå till palatset?", frågade katten.\nRåttan svarade: "På morgonen den andra januari."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'Natten före nyår hoppade råttan upp på oxens rygg.\nOxen märkte ingenting.\nVad gör råttan?', choices:[
    {t:'Åka med under tystnad', go:'jzu1'},
    {t:'Tilltala oxen', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'På morgonen, vid porten, hoppade råttan ner.\nDet första året var Råttan.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'Råttan sade inte den rätta dagen till katten.\nVarför, det vet bara råttan.\nOch råttan gav det allra första året sitt namn.\nSlut.'},
  jzs1:{art:'ju_senaka', text:'"Oxe, tack för att du bär mig."\nOxen vände sig om, överraskad.\n"Jaså, det är du, råtta. Du väger ju ingenting. Sitt kvar, du."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Vid porten sade oxen:\n"Skynda dig in och hämta ditt namn."\nRåttan hoppade ner och gick genom porten.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'Det första året var Råttan. Det nästa Oxen.\nRåttan glömde aldrig oxen som lånade ut sin rygg.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_SV);

  T.ZK_EN.push(
    {section:'Hur de tolv djuren valdes', note:'I några länder på andra sidan havet hör katten till de tolv djuren. I Japan berättas det också ordlekssagor om ett trettonde djur, till exempel en vessla eller en groda.'},
    {id:'ju_seishi',  n:'De tolv namnen',              h:'Sagan så som den berättas, redan första gången'},
    {id:'ju_ushi',    n:'På oxens rygg',               h:'Om du stannar kvar vid porten i stället för att hoppa ner ...'},
    {id:'ju_kao',     n:'Hälsningen varje år',         h:'Om du tvättar ansiktet och går till porten en gång till ...'},
    {id:'ju_umi',     n:'På andra sidan havet',        h:'Om råttan säger den rätta dagen ...'},
    {id:'jn_asa',     n:'Nästa morgon',                h:'I sagan om katten: tvätta ansiktet och gå hem ...'},
    {id:'jn_hinata',  n:'Katten i solen',              h:'I sagan om katten: rulla ihop sig i solen ...'},
    {id:'jz_uso',     n:'Dagen med lögnen',            h:'I sagan om råttan: åka med under tystnad ...'},
    {id:'jz_senaka',  n:'Dagen med den lånade ryggen', h:'I sagan om råttan: tilltala oxen ...'}
  );

})();
