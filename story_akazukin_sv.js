"use strict";
/* Rödluvan - Swedish scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Stil: enkel bilderbokssvenska, som i story_sv.js.
   Den kända ordväxlingen följer den klassiska svenska formeln ("Så att jag ... dig bättre"). */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var AKZ_SV = {

  /* ================= Rödluvan ================= */

  z1:{art:'akz_home', text:'Det här är sagan om en liten flicka som såg så fin ut i sin röda luva.\nLuvan var stickad av mormor, och flickan hade den på sig varje dag.\nDärför kallade alla henne för Rödluvan.', next:'z2'},

  z2:{art:'akz_home', text:'En dag sa mamma:\n"Mormor på andra sidan skogen är sjuk. Kan du ta med kakor och druvsaft till henne?"\n"Söla inte på vägen, och gå inte av stigen."', next:'z3'},

  z3:{art:'akz_home', text:'Rödluvan funderade en stund.\nVi lägger ner en sak till i korgen.', choices:[
    {t:'Lägga ner en burk honung', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Lägga ner ett knallrött äpple', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'Det knallröda äpplet rullade ner i korgen och lyste där.\nUndrar om mormor blir glad?'
    : 'Hon lade försiktigt ner burken med söt honung i korgen.\nUndrar om mormor blir glad?', next:'z4'},

  z4:{art:'akz_door', text:'"Nu går jag!"\nMed korgen i handen skuttade Rödluvan glatt ut genom dörren.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'I väg på ärende!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'I granskogen glittrade solstrålarna mellan grenarna.\nNågonstans sjöng små fåglar.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Hur ska Rödluvan gå i dag?', choices:[
    {t:'Gå och sjunga en sång', go:'z5r', set:{walk:'uta'}},
    {t:'Gå och leta efter fjärilar', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'En gul fjäril fladdrade fram längs stigen.\nNästan som om den visade vägen.'
    : '"La la la, på stigen genom skogen."\nDe små fåglarna sjöng med i Rödluvans sång.', next:'z6'},

  z6:{art:'akz_meet', text:'Prassel, prassel.\nBakom ett träd steg en stor varg fram.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"God dag, lilla fröken. Vart ska du gå?"\nfrågade vargen med ett brett leende.';
    if(f.first) return t;
    return t + '\nVad ska Rödluvan göra?';
  }, choices:f=>{
    var c = [
      {t:'Svara ärligt', go:'z8'},
      {t:'"Det säger jag inte!"', go:'zn1'},
      {t:'Springa hem igen', go:'zh1'}
    ];
    if(f.item) c.push({t:'Fråga: "Herr Varg, är du hungrig?"', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"Till mormor. Hon är sjuk, så jag tar med kakor och druvsaft till henne."\nRödluvan svarade helt ärligt.\nOch i sitt stilla sinne tänkte vargen ut en listig plan.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Titta där, så fina blommor som blommar.\nOm du plockar en bukett blir mormor säkert glad."';
    if(f.first) return t;
    return t + '\nVad ska Rödluvan göra?';
  }, choices:[
    {t:'Plocka blommor', go:'z10'},
    {t:'"Nej, jag går raka vägen"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'Det är sant, tänkte Rödluvan och gick av stigen.\nEn vit blomma, en blå blomma. Och varje gång hon plockade en, lyste en ännu finare längre bort.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Under tiden var vargen...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'Vargen hade tagit genvägen och var framme hos mormor före Rödluvan.\nKnack, knack.\n"Mormor, det är jag, Rödluvan."\nHan härmade hennes röst och smet in.', next:'z12'},

  z12:{art:'akz_bed', text:'På ett ögonblick blev mormor uppslukad i en enda munsbit.\nVargen tog på sig hennes nattlinne, satte på sig nattmössan och kröp ner i hennes säng.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Till sist kom Rödluvan fram med blombuketten i famnen.\n"Åh, dörren står öppen..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Mormor, nu är jag här!"\nMormor i sängen såg på något vis konstig ut.\nRödluvan gick tyst närmare och tittade henne i ansiktet.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'Vilka stora öron du har!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'Så att jag hör dig bättre'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'Vilka stora ögon du har!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'Så att jag ser dig bättre'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'Vilka stora händer du har!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'Så att jag griper dig bättre'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'Vilken stor mun du har!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'Så att jag kan äta upp dig!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'Haps!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'När hon slog upp ögonen var allt kolmörkt. Hon var inne i vargens mage.\n"Är det du, Rödluvan? Vilken skräck. Men nu blir allt bra."\nDet var mormors röst, och en varm hand höll hennes hand hårt.';
    if(f.first) return t;
    return t + '\nVad ska de två göra?';
  }, choices:[
    {t:'Vänta stilla på hjälp', go:'z16'},
    {t:'Sjunga högt tillsammans', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Hand i hand väntade de två alldeles stilla.\nVargen med den fulla magen somnade djupt i sängen.\nSnarkningarna dånade genom hela huset.', next:'z17'},

  z17:{art:'akz_hunter', text:'Just då kom jägaren förbi på sin runda i skogen.\n"Vilket snarkande från mormors hus... Här stämmer något inte."\nHan tittade försiktigt in, och i sängen låg en varg med rund, tjock mage!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Klipp, klipp!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Med saxen öppnade jägaren försiktigt den sovande vargens mage.\n"Det var kolmörkt där inne!" sa Rödluvan.\nMormor var också oskadd. Ingen av dem hade så mycket som en skråma.';
    if(f.first) return t;
    return t + '\nVad ska de två göra?';
  }, choices:[
    {t:'Fylla magen med stenar', go:'z19'},
    {t:'Kräva ett löfte: aldrig mer', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Rödluvan sprang och hämtade tunga stenar från trädgården.\nJägaren fyllde magen med dem och sydde ihop den, stygn för stygn.', next:'z20'},

  z20:{art:'akz_stone', text:'Vargen vaknade och hoppade upp för att springa sin väg.\nMen stenarna i magen var tunga, så tunga.\nDuns! Han föll omkull och rörde sig inte mer.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Alla satte sig i gräset och delade på kakorna och druvsaften.\nMormor verkade redan må bättre.\nOch Rödluvan bestämde sig:\n"Aldrig mer sölar jag av stigen."\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Inget avslöja / raka vägen -> Mormors klokhet ---- */
  zn1:{art:'akz_meet', text:'"Det säger jag inte!"\nRödluvan lyfte hakan och gick raskt vidare.\nVargen flinade och försvann bakom träden.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Det kändes oroligt i bröstet.\nRödluvan gick fortare och tittade varken åt höger eller vänster.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Rödluvan kom fram till mormor först.\n"Mormor, jag mötte en stor varg i skogen."\n"Kära nån. Då låser vi dörren."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Klick, sa låset.\nStrax därefter: knack, knack.\n"Det är jag, Rödluvan, öppna dörren."\nHur mycket han än härmade rösten teg de två. Dörren öppnades inte.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Då hördes det knarr, knarr.\nVargen klättrade upp på taket och lade sig på lur.\nMormor sa alldeles tyst:\n"Den där vargen älskar doften av korv. Vi häller korvspadet ur grytan i tråget framför huset."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'Jag har fått en god idé'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'Den goda korvdoften steg i tjocka moln ända upp till taket.\nVargen nosade och gled, gled, gled allt längre...\nPlums!\nVargen ramlade ner i tråget och sprang genomvåt in i skogen.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Mormor, du är fantastisk!"\n"Hihi. Det kallas ålderns visdom."\nMormor är alltså inte bara någon som blir räddad.\nDen kvällen åt de två varm, god korv.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Springa hem -> Tillsammans med mamma ---- */
  zh1:{art:'akz_forest', text:'Rödluvan vände om och sprang hem så fort hon kunde.\nVargen bara stod där och såg förbluffad efter henne.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Mamma! Jag mötte en stor varg i skogen!"\n"Vad bra att du berättar det direkt. Det var rätt gjort.\nDå går vi till mormor tillsammans."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'Hand i hand med mamma gick Rödluvan skogsstigen en gång till.\nLångt borta bland träden stod vargen och tittade, men bredvid en vuxen vågade han sig inte fram.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'Snart fylldes mormors hus av glada skratt.\nNär något är svårt eller skrämmande, berätta genast för en vuxen.\nDet är den allra bästa trollformeln.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Är du hungrig? -> Gästen från skogen ---- */
  zt1:{art:'akz_meet', text:'"Herr Varg, är du kanske hungrig?"\nVargen blev så överraskad att han bara blinkade.\n"...Jag har inte ätit något på tre dagar."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Rödluvan satte sig vid stigkanten och delade kakorna och det knallröda äpplet.\nVargen tog en tugga, och en tår rullade nerför nosen.'
    : 'Rödluvan satte sig vid stigkanten och delade kakorna med honung på.\nVargen tog en tugga, och en tår rullade nerför nosen.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"Så snäll har ingen varit mot mig förut."\nMed mätt mage gick vargen tillbaka in i den djupa skogen.\nNär Rödluvan berättade det hemma hos mormor log mormor.\n"Ett barn som kan dela med sig av sin mat är det starkaste i världen."\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Sjunga -> Kören i magen ---- */
  zu1:{art:'akz_onaka', text:'"Mormor, nu sjunger vi tillsammans!"\n"Vilken god idé. Även i mörkret går det att sjunga."\nDe drog djupt efter andan, och sedan...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'Kören i magen!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"La la la, på stigen genom skogen."\nUtanför huset trodde jägaren inte sina öron.\n"Sång inne i huset? Och dessutom... ur vargens mage?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Klipp, klipp!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Tack vare sången hittade jag er direkt", sa jägaren.\nDen förskräckta vargen drog svansen mellan benen och sprang in i skogen.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Även på den mörkaste plats når din röst fram till någon, om du höjer den."\nDe orden från mormor glömde Rödluvan aldrig.\nFrån den dagen sjöng de två tillsammans, som en liten kör.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Kräva ett löfte -> Löftets morgon ---- */
  zy1:{art:'akz_rescue', text:'"Stenar vore för grymt. I stället..."\nRödluvan såg den vaknande vargen rakt i ögonen.\n"Lova att du aldrig mer äter upp någon."\nVargen sänkte huvudet och sa tyst: "...Jag gör det aldrig mer."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'I morgonsolens ljus gick vargen tillbaka djupt in i skogen.\nOm löftet verkligen hålls vet ingen.\nMen jägaren sa:\n"Bevakningen får ni överlåta till mig."\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Vargens saga ================= */

  w1:{art:'w_fuyu', text:'Det här är sagan om en ensam varg som bodde i vinterskogen.\nSnön låg djup, och det fanns inget byte någonstans.\nVargen hade inte ätit något på tre dagar.', next:'w2'},
  w2:{art:'w_fuyu', text:'En kall, kall natt.\nHur ska vargen ta sig igenom den?', choices:[
    {t:'Rulla ihop sig i grottan', go:'w2r', set:{wnight:'maru'}},
    {t:'Yla mot stjärnorna', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Upp mot den blå natthimlen: Ouuuu!\nMen ingen kamrat svarade någonstans.'
    : 'Han lade svansen över nosen och rullade ihop sig, liten och rund.\nÄndå var draget iskallt.', next:'w3'},
  w3:{art:'w_mura', text:'På morgonen såg han ner på byn från kullen, och doften av nybakat bröd kom svävande.\nMagen kurrade högt.\nVad ska han göra?', choices:[
    {t:'Ta mod till sig och be bagaren', go:'wp1'},
    {t:'Vänta på någon vid skogsstigen', go:'wm1'}
  ]},

  /* ---- Be bagaren ---- */
  wp1:{art:'w_panya', text:'När han kom ner till byn sprang alla rädda sin väg.\nBara bagaren sprang inte.\n"...Är du hungrig?"', next:'wp2'},
  wp2:{art:'w_panya', text:'Vargen nickade ett litet, litet nick.\nBagaren gav honom en stor famn hårda brödkanter.\n"Du är den första vargen som ber i stället för att stjäla."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'Från nästa dag hjälpte vargen till att hugga ved och fick bröd i utbyte.\nOch byborna som varit rädda vande sig så småningom vid honom.\nModet att be var starkare än vilken huggtand som helst.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Vänta vid stigen (sagans andra sida) ---- */
  wm1:{art:'akz_meet', text:'Medan han väntade vid skogsstigen kom en flicka i röd luva gående.\nHan tänkte äta upp henne. Ändå kom flickan leende fram till honom.\n"Herr Varg, är du kanske hungrig?"', choices:[
    {t:'Säga ärligt: "Ja, jag är hungrig"', go:'wt1'},
    {t:'Fortsätta med den listiga planen', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Jag har inte ätit något på tre dagar."\nNär orden väl var ute blev vargen förvånad över sig själv.\nFlickan öppnade korgen och delade sina kakor med honom.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Jag heter Rödluvan. Herr Varg, vi ses igen på den här stigen."\nDen han tänkt äta upp hade blivit hans vän.\nDe dagar han är hungrig behöver han bara gå till den lilla stigen.\nBara den tanken gör vinterskogen lite varmare.\nOch så levde de lyckliga i alla sina dagar.'},

  wz1:{art:'akz_gma_out', text:'Vargen gav ett listigt svar och sprang i väg längs genvägen.\nMedan han sprang stack det konstigt nog djupt inne i bröstet.\n"Äter jag inte klarar jag inte vintern", sa han till sig själv.', next:'wz2'},
  wz2:{art:'akz_bed', text:'Vad som hände sedan står i Rödluvans saga.\nHan slukade både mormor och Rödluvan hela, och sedan somnade han.\nOch när han vaknade...', next:'wz3'},
  wz3:{art:'akz_stone', text:'Magen var full av stenar.\nSå tung, så tung att han inte kunde ta ett enda steg.\n"Så det var det här stinget i bröstet handlade om..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'Den långa vintern tog slut,\noch våren kom.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'Jägaren på sin runda tog ut stenarna ur den orörliga vargen och lade om såret.\n"Har du lärt dig något?"\nVargen nickade om och om och om igen.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'I vårvinden ger sig vargen av.\nNästa gång han är hungrig ska han säga: "Kan du dela med dig?"\nStenarnas tyngd har vargen inte glömt en enda dag.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Mormors saga ================= */

  g1:{art:'g_heya', text:'Det här är sagan om mormor, som bor ensam i ett hus i skogen.\nDet var hon som stickade den röda luvan.\nI dag hade hon lite feber och satt och stickade i sängen.', next:'g2'},
  g2:{art:'g_heya', text:'Av det röda garnet fanns det fortfarande lite kvar.\nVad ska hon sticka härnäst?', choices:[
    {t:'Små vantar', go:'g2r', set:{knit:'tebukuro'}},
    {t:'En lång halsduk', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'En lång, lång halsduk.\nSå lång att hon och Rödluvan kan svepa in sig i den tillsammans.'
    : 'Små röda vantar.\nPrecis lagom för de där små händerna.', next:'g3'},
  g3:{art:'g_heya', text:'Just då gled en stor skugga förbi utanför fönstret.\nKnack, knack.\n"Mormor, det är jag, Rödluvan."\n...Nej men. Rösten låter annorlunda i dag.', choices:[
    {t:'Titta ut genom fönstret först', go:'gy1'},
    {t:'Ropa "Kom in!"', go:'go1'}
  ]},

  /* ---- Titta efter -> Gästen på taket ---- */
  gy1:{art:'akz_machibuse', text:'Genom springan i gardinen tittade hon försiktigt ut: en stor varg!\nUtan brådska och utan väsen vred mormor om nyckeln. Klick.\n"Att lura en gammal kvinna, det är du hundra år för tidig för."', next:'gy2'},
  gy2:{art:'akz_yane', text:'Vargen klättrade upp på taket. Knarr, knarr.\nMormor hällde korvspadet ur grytan i tråget framför huset.\nDen goda doften lockade honom, vargen gled och gled, och plums!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Genomvåt sprang vargen in i skogen.\nNär mormor berättade det för Rödluvan som kom senare spärrade hon upp ögonen.\n"Mormor, du är som en hjälte!"\n"Hihi. Jag är ju inte bara någon som blir räddad."\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Ropa kom in -> Lugn även i magen ---- */
  go1:{art:'akz_bed', text:'In kom en stor varg.\nPå ett ögonblick var mormor uppslukad.\nMen mormor tappade inte huvudet.\nHon hade ju klarat sig genom långa vintrar i många årtionden.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Nej men. Det är ju riktigt varmt här inne i magen."\nEfter en stund kom Rödluvan också rullande in.\nMormor höll den lilla handen hårt och sa:\n"Det blir bra. Tyst nu, lyssna noga. ...Där, hör du stegen?"', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Klipp, klipp!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'Jägaren öppnade magen alldeles försiktigt.\n"Otroligt. Var ni lugna där inne hela tiden?"\n"Ja då. Den som tappar huvudet kommer inte på något klokt."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Som tack gav mormor jägaren den långa halsduken hon hade stickat på.\n"Ronderna på vintern är säkert kalla."\nDet var en skrämmande dag, och ändå skrattade alla.\nOch så levde de lyckliga i alla sina dagar.'
    : 'Som tack gav mormor jägaren de röda vantarna hon hade stickat på.\n"Ronderna på vintern är säkert kalla."\nDet var en skrämmande dag, och ändå skrattade alla.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, AKZ_SV);

  T.ZK_EN.push(
    {section:'Rödluvan'},
    {id:'za_seishi',   n:'Jägarens bragd',          h:'Den ursprungliga sagan från allra första gången'},
    {id:'za_chie',     n:'Mormors klokhet',         h:'Om du inte avslöjar något och går raka vägen...'},
    {id:'za_gassho',   n:'Kören i magen',           h:'Om ni sjunger tillsammans i den mörka magen...'},
    {id:'za_okyaku',   n:'Gästen från skogen',      h:'Om du lägger något extra i korgen och är snäll mot vargen...'},
    {id:'za_yakusoku', n:'Löftets morgon',          h:'Om du efter räddningen väljer något annat än stenar...'},
    {id:'za_okaasan',  n:'Tillsammans med mamma',   h:'Om du blir rädd, springer tillbaka och berättar...'},
    {id:'zw_pan',      n:'Den första bönen',        h:'Att gå ner till byn i vargens saga...'},
    {id:'zw_tomo',     n:'Den första vännen',       h:'Att svara ärligt i vargens saga...'},
    {id:'zw_hansei',   n:'Vårvinden',               h:'Vart den listiga planen till slut leder...'},
    {id:'zg_yane',     n:'Gästen på taket',         h:'Att först titta efter i mormors saga...'},
    {id:'zg_onaka',    n:'Lugn även i magen',       h:'Att hålla huvudet kallt i mormors saga...'}
  );

})();
