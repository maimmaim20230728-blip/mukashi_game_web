"use strict";
/* Bremens stadsmusikanter - Swedish scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   Fasta uttryck (stadsmusikant / nagot battre an doden / tuppens rop /
   den siste berattarens mun ar annu varm) ar fritt aterdiktade, inte ordagrant
   hamtade ur Grimms original. Djuren har inga egennamn. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var BREMEN_SV = {

  /* ================= Bremens stadsmusikanter ================= */

  br1:{art:'br_koya', text:'Det här är berättelsen om en åsna som arbetade hos samma husbonde i många långa år.\nPå kvarnen bar han säck efter säck med mjöl.\nMen han blev gammal, och krafterna började tryta.', next:'br2'},

  br2:{art:'br_koya', text:'En dag märkte åsnan något.\n(Min husbonde tänker sluta ge mig foder.)\nDå lämnade åsnan kvarnen.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'Till Bremen!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Jag ska till Bremen och bli stadsmusikant där."\nSå bestämde åsnan, och gav sig ut på vägen.';
    if(f.first) return t;
    return t + '\nVilken väg tar han?';
  }, choices:[
    {t:'Vägen längs floden', go:'br3r', set:{brmichi:'kawa'}},
    {t:'Vägen mellan åkrarna', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'På vägen mellan sädesfälten blåste vinden fritt.\nFör första gången på länge gick åsnan utan att bära något alls.'
    : 'På vägen längs floden klingade vattnet skönt.\nFör första gången på länge gick åsnan utan att bära något alls.', next:'br4'},

  br4:{art:'br_inu', text:'Vid vägkanten låg en jakthund.\nHan flåsade tungt och andades med möda.\n"Vad står på, som gör dig så andfådd?"', next:'br5'},

  br5:{art:'br_inu', text:'"Jag har blivit gammal och kan inte följa med på jakten längre.\nDå tänkte min husbonde döda mig.\nJag sprang min väg, men vad ska jag leva av nu?"\n"Jag ska till Bremen och bli musikant. Följ med du.\nJag spelar luta, och du kan slå på trumman."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'Hunden går med!!'}, then:'br6'},

  br6:{art:'br_neko', text:'Lite längre fram satt en katt på en mur.\nHon såg lika dyster ut som efter tre dagars ihållande regn.', next:'br7'},

  br7:{art:'br_neko', text:'"Jag har blivit gammal, och mina tänder har blivit dåliga,\noch jag sitter hellre framför spisen än jagar möss.\nDå tänkte min matmor dränka mig i floden."\n"Följ då med oss till Bremen.\nNär det gäller nattmusik lär ingen gå upp mot dig."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'När det gäller nattmusik ...'}, then:'br8'},

  br8:{art:'br_ondori', text:'Uppe på grinden till en bondgård gol en tupp av alla krafter.\n"Det var en hög röst."\n"I morgon är det söndag, och det kommer gäster.\nJag ska bli soppa.\nDärför gal jag så länge jag har en röst kvar."', next:'br9'},

  br9:{art:'br_ondori', text:'"Vad som helst är bättre än döden. Du har en fin röst.\nSpela musik med oss. Det blir säkert något av det."\nTuppen hoppade ner från grinden.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Kuckeliku!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'Bremen gick inte att nå på en enda dag.\nNär natten kom ville de 4 vila i skogen.';
    if(f.first) return t + '\nÅsnan och hunden under ett träd. Katten uppe på en gren. Tuppen allra överst.';
    return t + '\nVar vilar de?';
  }, choices:[
    {t:'Under trädet, alla tillsammans', go:'br10r', set:{brmori:'shita'}},
    {t:'Uppe på en hög gren, och hålla vakt', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'Katten och tuppen klättrade upp på en hög gren.\nNere sov åsnan och hunden rygg mot rygg.'
    : 'De 4 rullade ihop sig under ett stort träd och sov.\nBara tuppen klättrade högst upp innan han somnade.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Från toppen såg tuppen ett ljus långt borta.\n"Där borta står ett hus. Det brinner ett ljus."';
    if(f.first) return t + '\n"Vi går dit. Härbärget här är inte särskilt bra", sade åsnan.';
    return t + '\nVad gör de?';
  }, choices:[
    {t:'Gå till huset med ljuset', go:'br12'},
    {t:'Hålla sig borta och tillbringa natten i skogen', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'När de kom fram till huset med ljuset tittade åsnan in genom fönstret.\n"Vad ser du?" frågade tuppen.\n"Ett bord fullt av goda saker,\noch rövare som sitter runt om och äter."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"Sådant behöver vi också", sade tuppen.\nDe 4 stack ihop huvudena och rådslog.', next:'br14'},

  br14:{art:'br_mado', text:'Åsnan satte framfötterna på fönsterbrädan.\nHunden hoppade upp på hans rygg,\nkatten klättrade upp på hunden,\noch allra överst satte sig tuppen.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'Alla tillsammans!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'Och så hoppade de alla in genom fönstret på en gång.\nKrasch, glaset gick sönder!\nRövarna skrek "Ett odjur!" och flydde in i skogen.', next:'br16'},

  br16:{art:'br_gochisou', text:'De 4 satte sig vid bordet.\nDe åt som om de ätit sig mätta för fyrtio dagar, släckte ljuset\noch lade sig var och en på sin egen plats.\nÅsnan på gården, hunden vid dörren, katten vid spisen, tuppen på takbjälken.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Midnatt.'}, then:'br17'},

  br17:{art:'br_yoru', text:'En av rövarna kom tillbaka för att se efter.\nI huset var det tyst. I köket glimmade något djupt inne i spisen.\n(Det är glöd som ligger kvar.)\nDet trodde han och höll en tändsticka mot den. Just i det ögonblicket.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'Klös!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'Katten flög i ansiktet på honom och klöste honom.\nRövaren flydde mot bakdörren. Där väntade hunden.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'Nafs!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'När han sprang ut på gården sparkade åsnan honom med bakbenen.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'Spark!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Uppe på taket vaknade tuppen och gol högt.\n"Kuckeliku!"\nFör rövaren lät det så här:\n"För hit skälmen till mig!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'En häxa! En domare!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'Rövaren flydde tillbaka till skogen och sade till de andra:\n"I det där huset sitter en förfärlig häxa.\nHon spottade på mig och rev mig i ansiktet med långa klor.\nVid dörren stod en man med kniv och stack mig i benet.\nPå gården fanns ett svart odjur som slog mig med en påk.\nOch uppe på taket satt en domare och skrek: För hit skälmen till mig!"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'Från den dagen kom rövarna aldrig tillbaka.';
    if(f.first) return t;
    return t + '\nOm morgonen rådslog de 4. Vad gör de?';
  }, choices:[
    {t:'Bo i det här huset', go:'e_br_seishi'},
    {t:'Ändå gå vidare till Bremen', go:'brb1'},
    {t:'Bestämma i huset vad som sker på morgonen', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'De 4 musikanterna trivdes så bra i huset\natt de aldrig ville därifrån mer.\nOch den som sist berättade den här historien har ännu munnen varm.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- I staden Bremen ---- */
  brb1:{art:'br_roba', text:'"Det är ett bra hus. Men vi är musikanter."\nDe 4 låste huset och gav sig ut på vägen igen.', next:'brb2'},
  brb2:{art:'br_bremen', text:'Staden Bremen var stor och full av liv.\nOch på torget fanns stadsmusikanterna redan.\nDeras trumpeter och trummor glänste.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'... Då får det bli här.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'I ett hörn av torget stämde de 4 upp tillsammans.\nI-a, voff, mjau, kuckeliku.\nFörst kom ett barn, sedan ett till, och så samlades allt fler.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Några glänsande instrument hade de inte.\nMen till hörnet av torget kom det barn varje dag.\nI ett hörn av staden blev de 4 musikanter.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Morgon i skogen ---- */
  brm1:{art:'br_mori', text:'"Det är bäst att inte gå nära ett hus om natten", sade åsnan.\nDe 4 tillbringade natten i skogen.', next:'brm2'},
  brm2:{art:'br_mori', text:'Om morgonen gol tuppen, och alla vaknade.\n"När vi ändå är här, låt oss stämma upp en gång."\nI-a, voff, mjau, kuckeliku.', next:'brm3'},
  brm3:{art:'br_roba', text:'Då kom en kärra förbi, lastad med mjölsäckar.\nMjölnaren hörde åsnans röst och sade:\n"Vilken röst. Vill du inte arbeta i min kvarn? Foder får du så det räcker."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Jag är musikant.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'Åsnan tackade artigt nej och gick vidare med sina följeslagare.\nVart de skulle komma visste ännu ingen.\nSången från de 4 klingade vida i skogens morgon.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Var och en sin morgon ---- */
  bra1:{art:'br_ie_asa', text:'Morgon. Vad gör de i det här huset?', choices:[
    {t:'Tuppen gal timmen från taket', go:'bra1r', set:{brasa:'ondori'}},
    {t:'Hunden tar en lur vid dörren', go:'bra1r', set:{brasa:'inu'}},
    {t:'Katten rullar ihop sig vid spisen', go:'bra1r', set:{brasa:'neko'}},
    {t:'Åsnan vickar på öronen i solen', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'Hunden sträckte ut sig vid dörren.\nHan behövde inte springa efter någon mer.';
    if(f.brasa==='neko') return 'Katten rullade ihop sig vid spisen.\nDagarna då hon jagade möss var förbi.';
    if(f.brasa==='roba') return 'Åsnan stod i solen och vickade på de långa öronen.\nPå hans rygg låg inga mjölsäckar mer.';
    return 'Tuppen steg upp på taket och gol mot himlen i öster.\nIngen hade bett honom om det.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Ingen hade sagt åt dem.\nVar och en bestämde själv.\nÄven i dag gal tuppen timmen, sover hunden vid dörren,\nrullar katten ihop sig vid spisen, och åsnan vickar på de långa öronen i solen.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Rövarnas berättelse ================= */

  bd1:{art:'dorobou_mori', text:'Det här är berättelsen om 3 rövare som bodde i ett hus i skogen.\nÄven den kvällen stod bordet fullt av goda saker.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'Vad blir det att äta i dag?', choices:[
    {t:'Korv och vin', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Bröd, ost och äpplen', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'De dukade hela bordet med bröd, ost och äpplen.\nDe 3 började äta på bästa humör.'
    : 'De stekte korv och slog upp vin.\nDe 3 började äta på bästa humör.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'Plötsligt hördes utanför fönstret en röst som ingen någonsin hört.\nI-a, voff, mjau, kuckeliku. Allt på en gång.\nOch sedan: Krasch, glaset gick sönder!\n"Ett odjur!"\nDe 3 flydde in i skogen.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'Djupt inne i skogen hämtade de 3 andan.\n"Vad gör vi med huset?"', choices:[
    {t:'Gå tillbaka och se efter', go:'bdg1'},
    {t:'Ge upp huset', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'Köket var kolmörkt.\nDjupt inne i spisen glimmade två små ljus.\n(Det är glöd som ligger kvar.)\nHan höll en tändsticka mot dem ...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'En häxa!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'Ansiktet sönderklöst, ett stick i benet, ett slag med en påk,\noch från taket: "För hit skälmen till mig!"\nRövaren flydde tillbaka till skogen.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"Där finns en häxa, en man med kniv, ett svart odjur och en domare."\nIngen av de andra gick någonsin nära det huset igen.\nVad som verkligen fanns där fick ingen veta.\nOch så levde de lyckliga i alla sina dagar.'},

  bdm1:{art:'dorobou_mori', text:'"Det huset är deras nu."\nDe 3 gick mot skogens utkant.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'I staden var det morgonmarknad.\nPå en skylt stod det: "Bärare sökes."\nDe 3 såg på varandra.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'Vad de 3 levde av från den dagen\nstår inte i den här berättelsen.\nI huset i skogen klingar sången från de 4.\nSlut.'},

  /* ================= Tuppens berättelse ================= */

  bo1:{art:'ondori_yane', text:'Det här är berättelsen om en tupp som gol uppe på grinden till en bondgård.\nI morgon är det söndag. Det kommer gäster, och jag ska bli soppa.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'Vad gör han på sin sista dag?', choices:[
    {t:'Gala av alla krafter', go:'bo2r', set:{bolife:'naku'}},
    {t:'Gå långsamt runt på gården', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Han gick långsamt över gården, från ena änden till den andra.\nDet skulle vara en sista blick.'
    : 'På grinden gol han tills rösten var hes.\nNågra höll för öronen. Det brydde han sig inte om.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Då kom en åsna, en hund och en katt förbi.\n"Vad som helst är bättre än döden. Du har en fin röst."\nTuppen hoppade ner från grinden.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Räcker min röst då?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'Vid huset i skogen satt tuppen allra överst.\nVad som sedan hände bestämde tuppen själv.', choices:[
    {t:'Gala från taket vid midnatt', go:'bok1'},
    {t:'Bo i det här huset och förkunna morgonen', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'Vid midnatt vaknade han på takbjälken.\nNere väsnades en rövare.\nTuppen gol av alla krafter.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Kuckeliku!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'För rövaren lät det som: "För hit skälmen till mig!"\nRösten som skulle ha blivit soppa hade skyddat huset.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'Vad han ska ha sin röst till bestämmer han själv.\nTuppen gol från den dagen när han ville och hur han ville.\nOch så levde de lyckliga i alla sina dagar.'},

  boa1:{art:'br_ie_asa', text:'När de bodde i huset steg tuppen upp på taket.\nIngen hade bett honom om det.\nOm morgonen, när himlen i öster ljusnade, gol tuppen.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'Hunden vaknade, katten sträckte på sig, och åsnan skakade på öronen.\n"Jag blir ingen soppa mer. Varje morgon gal jag här."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'Vid tuppens röst vaknar någon.\nRedan det gjorde tuppen glad.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_SV);

  T.ZK_EN.push(
    {section:'Bremens stadsmusikanter'},
    {id:'br_seishi', n:'Huset de trivdes i',        h:'Den ursprungliga berättelsen från 1:a genomgången'},
    {id:'br_bremen', n:'I staden Bremen',           h:'Att ändå gå vidare till Bremen på morgonen ...'},
    {id:'br_mori',   n:'Morgon i skogen',           h:'Att hålla sig borta från huset med ljuset ...'},
    {id:'br_asa',    n:'Var och en sin morgon',     h:'Att i huset bestämma vad som sker på morgonen ...'},
    {id:'bd_gokai',  n:'Häxan och domaren',         h:'Att i rövarnas berättelse gå tillbaka och se efter ...'},
    {id:'bd_machi',  n:'Ut ur skogen',              h:'Att i rövarnas berättelse ge upp huset ...'},
    {id:'bo_koe',    n:'En röst som nådde fram',    h:'Att i tuppens berättelse gala vid midnatt ...'},
    {id:'bo_asa',    n:'Förkunna morgonen',         h:'Att i tuppens berättelse förkunna morgonen ...'}
  );

})();
