"use strict";
/* Den stora rovan - Swedish scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "Å hej, å hå!!" / "Vips, upp kom den!!" */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  /* bestämd form (samma form som subjekt och efter "hålla fast i") */
  var NAMES_SV = { baa:'gumman', mago:'barnbarnet', inu:'hunden', neko:'katten' };

  function chainSv(f){
    var order = [];
    if(f.nezumi) order.push('musen');
    if(f.c5) order.push(NAMES_SV[f.c5]);
    if(f.c4) order.push(NAMES_SV[f.c4]);
    if(f.c3) order.push(NAMES_SV[f.c3]);
    if(f.c2) order.push(NAMES_SV[f.c2]);
    order.push('gubben');
    if(order.length === 1) return 'Gubben tog tag i rovan.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(order[i]) : order[i]) + ' höll fast i ' + order[i+1] + ',\n';
    }
    t += 'och gubben höll fast i rovan så hårt han kunde.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_SV = {

  /* ================= Den stora rovan ================= */

  kb1:{art:'kabu_hata', text:'Det här är sagan från en vid, vid åker.\nEn vårmorgon sådde gubben ett rovfrö.\n"Bli en söt, söt rova. Bli en stor, stor rova."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Varje dag skötte gubben om rovan.\nVad ska han tänka mest på?', choices:[
    {t:'Vattna den rikligt varje dag', go:'kb2r', set:{care:'mizu'}},
    {t:'Prata vänligt med den varje dag', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Bli stor, bli stor."\nVarje gång han pratade såg det ut som om bladen vajade av glädje.'
    : 'Med solens ljus och gott om vatten\nsträckte sig bladen högre och högre.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'Rovan växte och växte, tills den till slut blev större än gubben själv.\nEn sådan rova hade ingen i byn någonsin sett.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Nu var skördedagen här.';
    if(f.first) return t + '\nGubben kavlade upp ärmarna.';
    return t + '\nVad ska han göra?';
  }, choices:f=>{
    var c = [{t:'Dra upp den på en gång', go:'kb5'}];
    c.push({t:'Låta den växa sig ännu större', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Be rovan snällt', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'Gubben tog tag i rovan och drog av alla krafter!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Å hej, å hå!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'Rovan rörde sig inte det minsta.';
    if(f.first) return t + '\n"Gumman, kom och hjälp mig lite!"';
    return t + '\nVem ska han hämta?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Hämta ' + NAMES_SV[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_SV[f.c2])+' kom dit och ställde sig sist i raden.\n'+chainSv(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Å hej, å hå!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'Rovan rörde sig fortfarande inte alls.';
    if(f.first) return t + '\n"Nu hämtar vi barnbarnet."';
    return t + '\nVem ska de hämta härnäst?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Hämta ' + NAMES_SV[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_SV[f.c3])+' kom dit och ställde sig sist i raden.\n'+chainSv(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Å hej, å hå!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'Bladen bara vajade fram och tillbaka.';
    if(f.first) return t + '\n"Bra, då hämtar vi hunden också."';
    return t + '\nVem ska de hämta härnäst?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Hämta ' + NAMES_SV[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_SV[f.c4])+' kom dit och ställde sig sist i raden.\n'+chainSv(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Å hej, å hå!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Knyck. Den rörde sig kanske en liten aning...';
    if(f.first) return t + '\n"Katten, kom du också!"';
    return t + '\nNu hämtar vi den sista.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Hämta ' + NAMES_SV[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_SV[f.c5])+' kom dit och ställde sig sist i raden.\n'+chainSv(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Å hej, å hå!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'Rovan var nästan uppe, men kom inte loss. Det fattades bara en liten aning.\nOch nu fanns det ingen kvar att hämta.';
    if(f.first) return t;
    return t + '\nVad ska de göra?';
  }, choices:[
    {t:'Ge inte upp. En gång till!', go:'kb10', set:{nezumi:1}},
    {t:'Sluta för i dag', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Då sprang katten snabbt i väg\noch kom tillbaka med en pytteliten mus.\n"Vi behöver din kraft."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Jag...? Duger jag?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Å hej, å hå!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'Rovan flög högt upp i luften,\noch alla ramlade baklänges.\nAj då... men i varje ansikte lyste ett stort leende.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Äntligen kom rovan upp.\nDet sista rycket kom från den allra minsta musen.\nÄven en liten kraft blir störst i världen tillsammans med alla andra.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Let it grow → Hela byns fest ---- */
  km1:{art:'kabu_sodatsu', text:'"Har den kommit så här långt får den bli så stor det bara går."\nHan vattnade och sjöng, och skötte om den dag efter dag.\nTill slut blev rovan större än gubbens hus.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'Nu var den alldeles för stor för familjen ensam.\nGubben ställde sig uppe på kullen och ropade:\n"Halloooj! Alla i byn! Kom och hjälp till!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'Hela byn, samling!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'Bagaren kom, mjölnaren kom, och barnen kom också.\nHela byn ställde sig i en enda lång rad.\nOch sist av alla stod förstås den lilla musen.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Å hej, å hå!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'Den uppdragna rovan hamnade i en stor, stor gryta.\nBakom ångan hördes skratten från alla.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'Världens största rova blev till världens största fest.\nDen söta rovsoppan värmde varje mage i byn.\n"Ge oss en lika stor nästa år också!"\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Ask the turnip → Rovans hjärta ---- */
  ko1:{art:'kabu_talk', text:'Gubben satte sig ner framför rovan.\n"Jag har pratat med den varje dag. Min röst når nog fram."\n"Kära rova. Vill du komma upp nu?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'Bladen vajade till en gång.\nJorden buktade och höjde sig, och sedan...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'Ropade du?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"Det var du som pratade med mig varje dag, eller hur?\nJag känner igen dig på rösten.\nDet är bra. Då kommer jag. Ett, två..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'Rovan hoppade upp alldeles av sig själv, vips.\nÄven utan kraft kan ett hjärta nå fram till ett annat.\nDet dagliga "bli stor" var ett trollord.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Call it a day → I morgon igen, allihop ---- */
  ka1:{art:'kabu_yuyake', text:'"Nu slutar vi för i dag. Ni har alla hjälpts åt så bra."\nPå åkern i kvällsrodnaden drack de varmt te.\nOch rovan fick vila i lugn och ro i dag.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"I morgon drar vi igen, allihop."\nSå sa de till varandra och gick hem, var och en till sitt.\nDet gör inget om den inte kommer upp en dag.\nFör nu finns det en morgondag att se fram emot.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Rovans egen saga ================= */

  kt1:{art:'kt_tsuchi', text:'Det här är sagan från djupt nere i jorden.\nJag är rovan. Mitt på den vida åkern växer jag varm och skön.\nVarje dag hör jag gubbens röst uppifrån.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Också nere i jorden finns det mycket roligt.\nVad ska jag göra i dag?', choices:[
    {t:'Prata med daggmasken', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Smaka lugnt på solens smak', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Du har blivit större igen", säger daggmasken.\n"Hehe. Det är för att jag hör en snäll röst varje dag."'
    : 'Från bladen sipprar solens smak långsamt ner.\nDen är söt och varm och gör en lite sömnig.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'Och så en dag.\nRyck!\n"Ojoj, vad är det som händer?"\nKroppen dras uppåt. Skördedagen har kommit.', next:'kt4'},
  kt4:{art:'kt_up', text:'Nå, vad ska rovan göra?', choices:[
    {t:'Inte än! Hålla emot', go:'kt5'},
    {t:'Ja, gå ut och se världen', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"Jag vill vara kvar här ett tag till!"\nRovan spände roten och höll emot av alla krafter.\nUppifrån hördes "å hej, å hå". Det blev livligare och livligare.', next:'kt6'},
  kt6:{art:'kt_up', text:'Två, tre, fyra...\nRovan höll emot ändå, och allra sist hördes en mycket liten röst.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Snälla, kära rova'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Mot ren kraft kan jag hålla emot hur länge som helst.\nMen när någon ber mig med en så liten röst...\n"...Nå ja, då får det bli så."\nRovan lossade sakta på roten.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'Himlen var hög, och allas leenden lyste.\n"Jaså. Det är inte så illa här ute."\nRovan som inte förlorade mot en stor kraft\nkunde inte stå emot en liten bön.\nOch så levde de lyckliga i alla sina dagar.'},

  ktj1:{art:'kt_up', text:'"Förresten, vilken färg har himlen egentligen?"\nDet började pirra i hela rovan.\n"Nå, då går jag ut själv. Ett, två..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'Rovan hoppade ut med sådan fart\natt alla ramlade baklänges på en gång.\n"Så vid himlen är!"\nAtt hoppa ut när man själv bestämt det kändes allra bäst.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Musens egen saga ================= */

  kn1:{art:'kn_naya', text:'Det här är sagan om en liten mus som bor i ett hörn av ladan.\nTungt arbete är den inte bra på. Tunga saker kan den inte bära.\nMen också i dag pilar den omkring, pigg och glad.', next:'kn2'},
  kn2:{art:'kn_naya', text:'Vad ska musen hitta på i dag vid middagstid?', choices:[
    {t:'Leta efter en bit ost', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Sola vid fönstret', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'Solfläcken vid fönstret är världens bästa plats.\nMorrhåren rakt utsträckta, och så slumra, slumra.'
    : 'Längst inne i ladan luktar det gott.\nEn liten bit ost hittad, och kinderna är alldeles fulla.', next:'kn3'},
  kn3:{art:'kn_neko', text:'Då kom katten dit.\nAnnars skulle musen ha sprungit sin väg. Men i dag böjde katten artigt på huvudet.\n"Jag har en bön. Vi behöver din kraft."', choices:[
    {t:'Det är läskigt, men följa med', go:'kn3a'},
    {t:'Fråga: "Är det verkligen jag ni vill ha?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Med bultande hjärta följde musen efter katten.\nUte på åkern väntade alla med bekymrade miner.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"Det är just för att du är liten", sade katten.\n"Sist i raden ska den lättaste stå, sägs det."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'Musen ställde sig allra sist i raden.\nFramför den stod stora ryggar på rad.\nVad kan en liten mus göra?', choices:[
    {t:'Dra hårt med svansen', go:'kns1'},
    {t:'Ta takten med hög röst', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'Musen snodde sin svans om kattens svans\noch drog av alla krafter med sin lilla kropp!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Å hej, å hå!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"Det sista rycket var ditt", sade gubben.\nEn liten svans, en stor bragd.\nFrån den dagen äter musen inte längre i ett hörn av ladan,\nutan mitt bland alla andra.\nOch så levde de lyckliga i alla sina dagar.'},

  kno1:{art:'kn_retsu', text:'Räcker inte kraften, så finns rösten!\nMusen drog djupt efter andan och ropade så högt den bara kunde.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Ett, två! Å hej!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'Vips, upp kom den!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Tack vare rösten drog allas krafter i samma ögonblick.\n"Det var en bra takt", skrattade gumman.\nÄven med liten kraft finns en röst som får alla att dra samtidigt.\nMusen puffade ut bröstet och sade "pip".\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'Gumman kom dit och ställde sig bakom gubben.\nGumman höll fast i gubben, och gubben höll fast i rovan så hårt han kunde.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Å hej, å hå!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'Rovan rörde sig fortfarande inte alls.\nNu kom barnbarnet dit och ställde sig sist i raden.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Å hej, å hå!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'Bladen bara vajade fram och tillbaka.\nNu kom hunden springande och ställde sig sist i raden.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Å hej, å hå!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Knyck. Den rörde sig kanske en liten aning...\nNu kom katten flygande och ställde sig sist i raden.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Å hej, å hå!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'Rovan var nästan uppe, men kom inte loss. Det fattades bara en liten aning.\nDå sprang katten i väg och kom tillbaka med en pytteliten mus.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_SV);

  T.ZK_EN.push(
    {section:'Den stora rovan'},
    {id:'kb_seishi',  n:'Äntligen uppe',                    h:'Den ursprungliga sagan från första genomgången'},
    {id:'kb_matsuri', n:'Hela byns fest',                   h:'Vänta med att dra och låt den växa sig ännu större...'},
    {id:'kb_onegai',  n:'Rovans hjärta',                    h:'Prata med den varje dag medan den växer...'},
    {id:'kb_ashita',  n:'I morgon igen, allihop',           h:'En dag den inte kommer upp, pressa inte på...'},
    {id:'kt_koe',     n:'Besegrad av en liten röst',        h:'Håll emot hela tiden i rovans egen saga...'},
    {id:'kt_jibun',   n:'Vips, alldeles själv',             h:'Bli nyfiken på världen ute i rovans egen saga...'},
    {id:'kn_shippo',  n:'Den lilla svansens stora bragd',   h:'Använd svansen i musens egen saga...'},
    {id:'kn_ondo',    n:'Den minsta taktgivaren',           h:'Använd rösten i musens egen saga...'}
  );

})();
