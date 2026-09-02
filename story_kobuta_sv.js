"use strict";
/* De tre små grisarna - Swedish scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Egen översättning,
   ingen befintlig svensk översättning har följts. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var KOBUTA_SV = {

  /* ================= De tre små grisarna ================= */

  p1:{art:'buta_hajimari', text:'Det här är sagan om 3 små grisar som var bröder.\nDen stora grisen, den mellersta grisen och den lilla grisen.\nAlla hade blivit stora, så var och en bestämde sig för att bygga ett eget hus.', next:'p2'},

  p2:{art:'buta_hajimari', text:'Morgonen för avfärden. Vad säger grisarna till sin mamma?', choices:[
    {t:'Glatt "Nu ger vi oss av!"', go:'p2r', set:{plife:'genki'}},
    {t:'"Vi tar med oss något gott till dig!"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"Det ser jag fram emot", sa mamman och log.\nHennes hand vinkade och vinkade, länge, länge.'
    : '"Ha det så bra!", ropade mamman, lika glatt.\nDen ljusa rösten följde dem, och stegen kändes lätta.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'Vägen delade sig i tre.';
    if(f.first) return t + '\nDe 3 grisarna vinkade till varandra och gick var sin väg.';
    return t + '\nNå, vad gör grisarna?';
  }, choices:[
    {t:'Var och en går sin egen väg', go:'p4'},
    {t:'Bygga ett hus tillsammans, alla 3', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'Den stora grisen mötte en man med en stor bunt halm på ryggen.\n"Snälla, kan jag få lite av halmen?"\nEtt hus av halm blir färdigt redan samma dag.\nAtt det går så fort, det är det allra bästa med det.', next:'p5'},

  p5:{art:'buta_eda', text:'Den mellersta grisen mötte en man med famnen full av grenar.\n"Snälla, kan jag få några av grenarna?"\nGenom ett hus av grenar blåser vinden, skönt och svalt.\nDet är det allra bästa med det.', next:'p6'},

  p6:{art:'buta_renga', text:'Den lilla grisen mötte en man som drog en kärra full med tegel.\n"Snälla, kan jag få lite av teglet?"\nEtt hus av tegel tar tid, men det blir mycket stadigt.\nDet är det allra bästa med det.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Bank, bank! Bank, bank!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Tre hus stod färdiga.\nHuset av halm, huset av grenar och huset av tegel.\nVarje hus var något att vara stolt över.';
    if(f.first) return t;
    return t + '\nVad gör grisarna först i sina nya hus?';
  }, choices:[
    {t:'Visa upp husen för varandra', go:'p7r', set:{plife2:'miseai'}},
    {t:'Ta en paus och dricka te', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'Te efter en dag med hårt arbete smakar alldeles extra bra.\n"I morgon hälsar vi på i varandras hus!"'
    : '"Ditt blev fort färdigt!" "Hos dig blåser det skönt!" "Ditt är så stadigt!"\nVarje hus hade verkligen sin goda sida.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'I samma stund.\nEn hungrig varg kom ner från berget\noch ställde sig framför huset av halm.';
    return 'I samma stund.\nDen lilla grisen fick syn på en varg långt borta, på väg ner för bergsstigen.\nVad gör grisarna?';
  }, choices:[
    {t:'Vänta och se vad som händer', go:'pc_vs'},
    {t:'Varna de andra och samlas i tegelhuset', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Grisarna mot vargen!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'Vargen knackade på huset av halm, knack, knack.\n"Lilla gris, lilla gris, släpp in mig."\n"Nej, nej, jag öppnar inte. Vid hårstråna, hårstråna, hårstråna på min haka, aldrig i livet!"\n"Då frustar jag och pustar jag tills hela ditt hus blåser bort!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'Puuuust!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'Huset av halm virvlade upp i luften och var borta.\nDen stora grisen rullade ut och sprang för livet,\nrakt in i den mellersta grisens hus av grenar.', next:'p11'},

  p11:{art:'buta_eda', text:'Vargen kom genast efter.\n"Små grisar, små grisar, släpp in mig."\nDen här gången svarade de två med en mun:\n"Nej, nej, vi öppnar inte. Vid hårstråna, hårstråna, hårstråna på våra hakor, aldrig i livet!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'Pust, puuuust!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'Även huset av grenar flög i väg åt alla håll.\nDe två sprang så fort de kunde,\nrakt in i den lilla grisens hus av tegel.', next:'p13'},

  p13:{art:'buta_naka', text:'"Här är vi trygga.\nJag har byggt det här huset i lugn och ro, därför är det mycket stadigt."\nDen lilla grisen låste dörren ordentligt.', next:'p14'},

  p14:{art:'buta_renga', text:'"Små grisar, små grisar, släpp in mig."\n"NEJ, NEJ, VI ÖPPNAR INTE. VID HÅRSTRÅNA, HÅRSTRÅNA, HÅRSTRÅNA PÅ VÅRA HAKOR, ALDRIG I LIVET!"\nVargen drog in ett djupt, djupt andetag.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... Det rör sig inte det minsta!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Hur mycket vargen än pustade rörde sig tegelhuset inte.';
    if(f.first) return t + '\nFlåsande och flämtande såg vargen upp mot skorstenen på taket.';
    return t + '\nDen hungriga vargen funderade på sitt nästa drag.';
  }, choices:[
    {t:'Klättra in genom skorstenen', go:'p16'},
    {t:'Locka ut någon med söta ord', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'Vargen klättrade upp på taket och satte foten i skorstenen.\nMen inne i huset hade man sett det komma för länge sedan.', next:'p17'},

  p17:{art:'buta_nabe', text:'Nere vid skorstenens fot, i spisen, stod en stor gryta.\nBubbel, bubbel. Den var full med kokande vatten.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plask, plums!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"Hett, hett, hett, hett!!"\nMed svedd bakdel sprang vargen\nraka vägen tillbaka upp på berget.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Från den dagen kom vargen aldrig mer på besök.\nDe 3 grisarna samlades då och då allihop\noch åt varm soppa tillsammans, glada och nöjda.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Den äkta engelska sagan (Jacobs 1890: de 3 knepen) ---- */
  pg1:{art:'buta_renga', text:'Vargen gjorde rösten alldeles mjuk.\n"Hör du, lilla gris. Utanför byn finns ett fält med fina rovor.\nSka vi gå dit tillsammans i morgon bitti klockan 6?"\nDen lilla grisen förstod genast. (Det är en fälla.)\n"Gärna. Klockan 6, då."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Så bra, jag ser fram emot klockan 6!'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'Nästa morgon steg grisen upp redan klockan 5,\nplockade rovorna raskt och var hemma igen.\nNär vargen kom klockan 6 blev han förvånad.\n"Jag har redan varit där. Jag fick en hel gryta full med rovor."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'Vaaad? Har du redan varit där?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Sedan kom en inbjudan till äppelträdet. "Jag hämtar dig klockan 5 på morgonen."\nGrisen gav sig av redan klockan 4. Men medan han satt uppe i trädet\nkom vargen dit.\n"Jag ger dig det allra godaste äpplet!"\nHan kastade ett äpple långt, långt bort,\noch medan vargen hämtade det klättrade han ner och sprang hem.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Sist kom en inbjudan till marknaden i staden. "Vi går klockan 3 på eftermiddagen."\nGrisen gav sig av före klockan 12 och köpte en tunna för att kärna smör i.\nPå vägen hem, uppifrån backen, såg han vargen komma uppför.\nDå kröp grisen in i tunnan.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rull, rull! Rull, rull!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Med grisen inuti rullade tunnan utför backen, rull, rull!\nNär vargen såg något stort och runt komma farande mot sig\nblev han alldeles förskräckt. Han lade svansen mellan benen och sprang sin väg.', next:'pg6'},
  pg6:{art:'buta_renga', text:'När vargen efteråt fick veta hur det låg till blev han rasande.\n"Nu får det vara nog! Jag går in genom skorstenen!"\nMen inne i huset hade man sett det komma för länge sedan.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'I spisen bubblade den stora grytan som vanligt.\nI den fanns en rykande het soppa, full av rovorna som grisen hämtat.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plask, plums!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"Hett, hett, hett, hett!!"\nSvårt bränd sprang vargen djupt, djupt in i bergen,\noch sedan visade han sig aldrig mer.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'Rovfältet, äppelträdet och smörtunnan.\nDet här är den väg som ligger närmast den gamla sagan från England.\nDen kloka lilla grisen levde därefter länge och lyckligt.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Alla 3 från början ---- */
  pk1:{art:'buta_renga', text:'"Vi bygger ett enda hus tillsammans, ett riktigt stadigt!"\nPå den lilla grisens ord började de 3 bära tegelstenar.\nTunga tegelstenar är ingen konst när man är 3.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Under samma tak stod tre sängar.\nDet blev ett ståtligt hus, med både spis och fönster.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Dit kom den hungriga vargen\noch drog in ett djupt andetag.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... Det rör sig inte det minsta!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'Vargen pustade ända tills solen gick ner\noch gick sedan alldeles utmattad tillbaka upp på berget.\nEtt hus som byggts med gemensamma krafter är stadigare än allt annat.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Vaksam och förberedd ---- */
  pn1:{art:'buta_michi', text:'"Vargen kommer!"\nDen lilla grisen sprang snabbt till brödernas hus.\nDe 3 samlades i all hast i tegelhuset.', next:'pn2'},
  pn2:{art:'buta_naka', text:'När de tittade försiktigt ut genom fönstret blåste vargen ner huset av halm.\n"Är det ingen hemma?!"\nSedan blåste han ner huset av grenar också.\n"Tomt här också?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Till sist pustade han på tegelhuset. Men det rörde sig inte.\nVargen blev alldeles utmattad\noch satte sig ner, lika hungrig som förut.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Från fönstret hördes en röst.\n"Är det en gäst? Tyvärr, i dag har vi redan stängt."\nVargen lufsade tillbaka upp på berget.\nDen som är förberedd blir inte stressad. De 3 fortsatte med sitt te.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Vargens saga ================= */

  pw1:{art:'pwolf_yama', text:'Det här är sagan om en varg som bodde uppe på berget.\nPå sistone hittade han knappt någon mat alls,\noch magen var alltid alldeles tom.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Var ska vargen leta efter mat i dag?', choices:[
    {t:'Leta i närheten av floden', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Leta djupt inne i skogen', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Fåglarna hade hunnit före till alla bär i skogen.\nMagen kurrade högt.'
    : 'I floden fanns inte skymten av en fisk.\nMagen kurrade högt.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Nere vid bergets fot stod 3 nya hus i rad.\nOch någonstans ifrån kom en god doft.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'Det här luktar festmåltid!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Att pusta var vargens speciella konst.\nHan blåste bort både huset av halm och huset av grenar,\nmen grisarna slank undan varje gång.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Kvar fanns tegelhuset. Och det rörde sig inte det minsta.\nDen hungriga vargen funderade på sitt nästa drag.', choices:[
    {t:'Locka ut dem med söta ord', go:'pw6'},
    {t:'Försöka tala ärligt med dem', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Bjöd han till rovfältet var grisen redan där före honom.\nBjöd han till äppelträdet slank grisen undan.\nNär han låg i bakhåll på vägen hem från marknaden hände det.\nUppifrån backen kom något stort och runt...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Rull, rull! Rull, rull!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Rull, rull, med väldig fart kom det rullande.\nEn stor rund klump som han aldrig hade sett förut.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'E-ett odjur!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'Vargen lade svansen mellan benen och sprang ända upp till bergets topp.\n"Nere vid foten finns ett runt odjur..."\nDen historien berättades vidare bland bergets vargar\ni långa, långa tider.\nOch så levde de lyckliga i alla sina dagar.'},

  pwh1:{art:'buta_renga', text:'Vargen satte sig ner framför dörren\noch sa med mycket låg röst:\n"...Sanningen är att jag inte har ätit något på flera dagar."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Inne i huset såg de 3 grisarna på varandra.\nDe öppnade inte dörren. Men från fönstret hördes en röst.\n"Vänta där en liten stund."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Ut genom fönstret räcktes försiktigt en rykande het grönsakssoppa.\nDen var full med stora bitar av rovor och potatis.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'Den är het, så pusta på den först.'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'Vargens berömda pustande\nvar nu inte längre en kraft som blåste bort hus,\nutan en kraft som kylde het soppa lagom mycket.\nEn speciell konst har inte bara en enda användning.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Tegelhusets saga ================= */

  ps1:{art:'prenga_kamado', text:'Det här är sagan om ett hus av tegel.\nVarje tegelsten föds en och en, långsamt bränd i ugnens eld.\nDärför faller den inte sönder hur som helst.', next:'ps2'},
  ps2:{art:'buta_renga', text:'En dag kom den lilla grisen\noch började omsorgsfullt lägga tegelsten på tegelsten.\nBank, bank. Så småningom blev det ett hus.\nVad syntes genom det allra första fönstret?', choices:[
    {t:'Den vida blå himlen', go:'ps2r', set:{slife:'sora'}},
    {t:'Rovfältet utanför byn', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Utanför fönstret bredde rovfältet ut sig.\nHuset såg gärna på hur det växte lite varje dag.'
    : 'Över den blå himlen som fyllde hela fönstret drev vita moln.\nAtt vara ett hus, tänkte huset, är något fint.', next:'ps3'},
  ps3:{art:'buta_naka', text:'En dag kom de två äldre grisarna\ninrusande, alldeles andfådda.\nUtanför fanns visst en varg.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'Nu är det min tur.'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'Vargen drog in ett djupt andetag och pustade av alla krafter.\nEn gång, två gånger, tre gånger.\nInte en enda tegelsten i väggen rörde sig.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'Det rör sig inte det minsta!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'När den stormiga natten var över tänkte huset efter.\nVad ska vara viktigast för mig härefter?', choices:[
    {t:'Att stå emot vind och regn', go:'e_ps_mamoru'},
    {t:'Att hålla elden i spisen varm', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'Blåsiga nätter och regniga morgnar rör sig huset inte det minsta.\nHuset vet mycket väl varför det föddes så stadigt.\nDärför att det finns 3 grisar därinne som det vill skydda.\nOch så levde de lyckliga i alla sina dagar.'},
  pss1:{art:'buta_soup', text:'Vintern kom. Elden brann i spisen och grytan puttrade.\nGrisarnas mamma kom också på besök,\noch hela huset var fullt av skratt.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'Husets uppgift är att hålla ute vind och regn.\nMen dess allra viktigaste uppgift är\natt förvara skratten väl därinne.\nÄven i dag hörs varma röster från huset av tegel.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_SV);

  T.ZK_EN.push(
    {section:'De tre små grisarna'},
    {id:'pb_seishi',   n:'Det räddande tegelhuset',            h:'Den välbekanta sagan från den allra första genomgången'},
    {id:'pb_genten',   n:'Den äkta engelska sagan',            h:'När vargen lockar med söta ord...'},
    {id:'pb_kyoryoku', n:'Alla 3 från början',                 h:'Att välja samma väg vid vägskälet...'},
    {id:'pb_sonae',    n:'Vaksam och förberedd',               h:'Att få syn på vargen redan på långt håll...'},
    {id:'pw_taru',     n:'Ett odjur!',                         h:'Att välja de söta orden i den hungriga vargens saga...'},
    {id:'pw_fuufuu',   n:'Pustandets verkliga nytta',          h:'Att tala ärligt i den hungriga vargens saga...'},
    {id:'ps_mamoru',   n:'Det rör sig inte',                   h:'Att stå emot vind och regn i tegelhusets saga...'},
    {id:'ps_waraigoe', n:'Ett kärl för skratt',                h:'Att tända elden i spisen i tegelhusets saga...'}
  );

})();
