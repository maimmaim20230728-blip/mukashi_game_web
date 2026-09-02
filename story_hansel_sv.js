"use strict";
/* Hansel och Gretel - Swedish scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   The rhymes are our own Swedish rendering of the PD Grimm original (KHM 15, 1857):
   "Knusper, knusper, Knäuschen, wer knuspert an meinem Häuschen?" / "Der Wind, der Wind, das himmlische Kind."
   / "Entchen, Entchen, ... nimm uns auf deinen weißen Rücken." No existing Swedish translation is followed.
   The names Hansel and Gretel are kept as in the other language versions (not "Hans och Greta"). */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var HANSEL_SV = {

  /* ================= Hansel och Gretel ================= */

  hg1:{art:'hg_ie', text:'Det här är sagan om en skogshuggarfamilj som bodde vid kanten av en stor skog.\nHansel och Gretel, de två syskonen,\nbodde där med sin pappa och sin styvmamma, alla fyra tillsammans.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'Det året kom en stor hungersnöd över landet.\nBrödet blev dyrt, och maten i skogshuggarens hus blev mindre för varje dag.';
    if(f.first) return t;
    return t + '\nI dag finns bara ett enda litet bröd. Hur delar de på det?';
  }, choices:[
    {t:'Dela lika på alla fyra', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel ger sin syster mer', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"Jag är ändå inte hungrig."\nHansel lade tyst sin egen bit på Gretels tallrik.'
    : 'De delade det lilla brödet i fyra bitar och åt tillsammans.\n"I morgon kan vi kanske köpa ett större."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'Den natten hörde de två styvmammans röst.\n"I morgon bitti tar vi barnen djupt in i skogen och lämnar dem där.\nAnnars svälter vi alla fyra."\nPappan sa nej, gång på gång.\nMen till slut nickade han, utan ett ord.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel började gråta.\n"Var lugn. Jag har en plan."\nHansel smög ut och samlade vita småstenar i månskenet.';
    if(f.first) return t + '\nÄnda tills fickorna var alldeles fulla.';
    return t + '\nVilka småstenar ska han samla?';
  }, choices:[
    {t:'De runda vita stenarna', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'De stenar som lyser mest i månskenet', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'En efter en prövade han dem och valde ut de som lyste som silver.\nÄnda tills fickorna var alldeles fulla.'
    : 'Alldeles runda vita småstenar, ända tills fickorna var fulla.\nHemma igen viskade han till Gretel: "Nu är allt bra."', next:'hg5'},

  hg5:{art:'hg_mori', text:'Nästa morgon gick familjen in i skogen.\nMedan de gick släppte Hansel en småsten i taget.\nDjupt inne i skogen gjorde pappan upp en eld.\n"Vila här. Vi kommer och hämtar er sedan."\nInnan de visste ordet av hade de två somnat.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'När de vaknade var det kolmörkt.\nGretel började gråta.\n"Vi väntar tills månen går upp", sa Hansel.\nOch när månen till slut steg upp över skogen...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'Småstenarna lyser!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'Småstenar som lyste som silver låg utströdda hela vägen hem.\nHand i hand gick de två hela natten, ända till morgonen.', next:'hg8'},

  hg8:{art:'hg_ie', text:'Pappan grät och kramade om dem båda.\nStyvmamman sa ingenting alls.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Men hungersnöden fortsatte.\nEn natt hördes den där rösten igen.\nDen här gången var dörren låst, och de kom inte ut.';
    if(f.first) return t + '\nHansel bestämde sig för att smula sönder morgonens bröd och märka ut vägen med det.';
    return t + '\nVad ska han göra?';
  }, choices:[
    {t:'Märka ut vägen med brödsmulor på morgonen', go:'hg10'},
    {t:'Smyga ut genom fönstret och samla småstenar', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'På vägen in i skogen lät Hansel smula efter smula falla.\nOch återigen somnade de två vid elden.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'När månen gick upp fanns inte en enda smula kvar.\nSkogens fåglar hade ätit upp allihop.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'De två gick och gick.\nEn natt, två nätter, och så den tredje morgonen.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'Magarna var tomma och benen alldeles trötta.\nJust då satt en fågel, vit som snö, på en gren och sjöng.', next:'hg13'},

  hg13:{art:'hg_tori', text:'Fågeln flög framför de två och ledde dem längre och längre in i skogen.\nOch när de kom ut på en öppen plats...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'Ett hus av sötsaker!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Väggar av bröd, ett tak av kaka, fönster av genomskinligt socker.\nHela huset var mat.';
    if(f.first) return t + '\nHansel knaprade på taket och Gretel på fönstret, och de kunde inte sluta.';
    return t + '\nVar ska de börja?';
  }, choices:[
    {t:'Kakan på taket', go:'hg14r', set:{hokashi:'yane'}},
    {t:'Fönstret av socker', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'Sockerfönstret gick sönder med ett knäpp och smälte i munnen.\n"Något så gott har jag aldrig ätit."'
    : 'Kakan på taket smakade honung.\n"Något så gott har jag aldrig ätit."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Knapra, knapra.\nJust då hördes en tunn röst inifrån huset.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Knapra, knapra, vem är det som knaprar på mitt lilla hus?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'De två svarade:\n"Det är vinden, det är vinden, himlens lilla barn."\nOch så åt de vidare.', next:'hg17'},

  hg17:{art:'hg_majo', text:'Dörren öppnades, och ut kom en gammal kvinna som stödde sig på en käpp.\n"Kära nån, vilka söta små gäster. Stig på."\nMjölk och pannkakor, äpplen och nötter.\nI vita sängar sov de två djupt och gott.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Men den gamla kvinnan...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...var en häxa.\nHäxan hade röda ögon och kunde inte se långt.\nI stället hade hon ett fint luktsinne, som ett djur.\nKom ett barn i närheten kände hon lukten.', next:'hg19'},

  hg19:{art:'hg_ori', text:'På morgonen sattes Hansel in i en bur.\n"Först göder jag dig, sedan äter jag dig."\nGretel fick hämta vatten och laga mat.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Varje morgon sa häxan:\n"Räck ut fingret. Har du blivit fet?"\nOch i stället för fingret räckte Hansel fram ett litet ben.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'Det är ett ben!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'Häxan med de svaga ögonen blev lurad gång på gång.\nFyra veckor gick, och till slut tappade hon tålamodet.\n"Fet eller mager, i morgon bitti äter jag dig."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'Häxan gjorde upp eld i bakugnen.\n"Kryp in och se efter om den är varm nog."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel mot häxan!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel förstod vad häxan hade i tankarna.';
    if(f.first) return t + '\n"Jag vet inte hur man gör. Hur ska jag komma in?"';
    return t + '\nVad ska hon göra?';
  }, choices:[
    {t:'Svara: "Jag vet inte hur man gör"', go:'hg24'},
    {t:'Ta nyckeln till buren och fly', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Vilket dumt barn. Titta här, så här gör man!"\nOch just när häxan stack in sitt eget huvud i ugnen...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'Pang!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel knuffade in häxan i ugnen och slog igen järndörren.\nOch därmed var det slut med häxan.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel öppnade buren.\n"Hansel, nu är vi fria!"\nInne i huset stod kistor fulla av pärlor och ädelstenar.';
    if(f.first) return t + '\nDe två fyllde fickorna med ädelstenar.';
    return t + '\nVad ska de ta med sig hem?';
  }, choices:[
    {t:'Fylla fickorna med ädelstenar', go:'hg27'},
    {t:'Fylla en säck med maten från hyllorna', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'När de gick genom skogen kom de fram till ett stort vatten.\nIngen bro, ingen båt.\nDå kom en vit and simmande.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Snälla lilla and!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Lilla and, lilla and, här står Gretel och Hansel.\nIngen bro och ingen båt. Ta oss på din vita rygg."\n"Båda på en gång blir för tungt. Vi åker en i taget."\nOch anden bar dem över till andra stranden, en i taget.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Bortom en skog de kände igen såg de sitt gamla hem.\nPappan såg de två och grät.\nStyvmamman var inte längre där.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'Pärlor och ädelstenar rullade ur fickorna, och pappan spärrade upp ögonen.\nFrån den dagen saknade de aldrig mat.\nOch de tre levde tillsammans i lugn och ro.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Småstenar en gång till ---- */
  hk1:{art:'hg_koishi', text:'Hansel smög ut genom fönstret\noch fyllde fickorna med vita småstenar i månskenet.', next:'hk2'},
  hk2:{art:'hg_mori', text:'Nästa dag lämnades de djupt inne i skogen, men de två blev inte oroliga.\nNär månen gick upp lyste småstenarna hela vägen hem.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Aldrig mer. Det lovar jag."\nDet löftet gav pappan inför dem båda.\nOch styvmamman satt den natten tyst med sänkt huvud.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'Den vintern förblev huset fattigt.\nMen de delade varje bröd på fyra och väntade på våren.\nHäxan i huset av sötsaker mötte de inte en enda gång.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Till andra stranden ---- */
  hkw1:{art:'hg_kamado', text:'Gretel tog nyckeln och släppte ut Hansel ur buren.\n"Spring!"\nHäxan med de svaga ögonen kom efter dem och nosade i luften.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Vid vattnet väntade en vit and.\n"En i taget! Blir det tungt sjunker jag."\nAnden bar först Gretel över, sedan Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'Också häxan kom fram till stranden.\n"Lilla and, ta mig också över."\nMen häxan var alldeles för tung, och anden rörde sig inte ur fläcken.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'På andra stranden kunde häxan bara stampa med fötterna.\nHand i hand gick de två hem.\nIngen kröp in i ugnen, och ingen blev uppäten.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Byns vinter ---- */
  hgm1:{art:'hg_takara', text:'Gretel tittade på hyllorna.\nMjöl, honung, valnötter, äpplen.\n"Det här är bättre än ädelstenar."\nDe två stoppade en säck full med mat.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Med den tunga säcken i famnen gick de ner till vattnet.\nDen vita anden bar de två och säcken över till andra stranden, en i taget.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'I byn pågick hungersnöden fortfarande.\nDe två delade ut all mat de hade med sig i hela byn.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Mjölet från huset av sötsaker blev den vintern byns bröd.\nTills våren kom och det grönskade på åkrarna behövde ingen gå hungrig.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Häxans saga ================= */

  hw1:{art:'majo_daidokoro', text:'Det här är sagan om en häxa som bodde djupt inne i skogen.\nVarje dag bakade hon bröd och gjorde sötsaker,\noch av dem gjorde hon väggar och tak och byggde vidare på sitt hus.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'Vad ska hon baka i dag?', choices:[
    {t:'Söta kakor', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Valnötsbröd', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'Valnötsbrödet blev gyllenbrunt.\nMen det fanns ingen som ville äta det.\nHäxan staplade det i väggen.'
    : 'De söta kakorna blev frasiga.\nMen det fanns ingen som ville äta dem.\nHäxan lade dem på taket.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'En dag hördes ett knaprande.\nNågon gnagde på huset.\nHäxans röda ögon kunde inte se långt.\nBara näsan kände lukten av barn.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Vem är det som knaprar på mitt lilla hus?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"Det är vinden, himlens lilla barn."\nTvå ljusa barnröster svarade.\nHäxan öppnade dörren. Och nu...', choices:[
    {t:'Göda dem och sedan äta dem', go:'hwm1'},
    {t:'Bjuda dem på ett festmål', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'På bordet: nybakat bröd och mjölk.\n"Så gott!" "Så gott!" sa de två gång på gång.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...Så gott?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Det ordet hade häxan inte hört på mycket länge.\nNågon åt det som hon själv hade gjort.\nHäxan grät, helt i smyg.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Sedan dess kommer det då och då gäster till huset av sötsaker.\nHäxan bakar bröd och gör sötsaker än i dag.\nDen här gången för dem som äter dem.\nOch så levde de lyckliga i alla sina dagar.'},

  hwm1:{art:'hg_ori', text:'Hon satte Hansel i buren och sa varje morgon: "Räck ut fingret."\nMen häxans ögon kunde inte skilja ett ben från ett finger.\n"Fortfarande så mager..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Varför blir du inte fet!?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'Häxan tappade tålamodet och gjorde upp eld i bakugnen.\n"Se efter om den är varm nog."\n"Jag vet inte hur man gör", sa Gretel.\nSå häxan stack in huvudet själv.\n...Hon såg ingenting alls.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"Det är kolmörkt här inne! Håll dörren åt mig, någon!"\nMedan häxan bökade omkring sprang de två sin väg.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'Häxan kröp ut ur bakugnen och bestämde sig.\n"Jag köper mig ett par glasögon."\nNästa morgon gick hon till stan med sin käpp.\nVad häxan såg med sina glasögon är en helt annan saga.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Den vita fågelns saga ================= */

  hb1:{art:'tori_sora', text:'Det här är sagan om en fågel, vit som snö, som bodde i skogen.\nEn morgon låg det brödsmulor utströdda längs skogsstigen.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Vilka goda brödsmulor. Vad ska fågeln göra?', choices:[
    {t:'Äta bara en enda', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Äta sig alldeles mätt', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'Bara en enda, det var tanken.\nMen de andra fåglarna kom också, och snart var alla smulor borta.'
    : 'De andra fåglarna kom också, och på ett ögonblick var alla smulor borta.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'Den natten såg fågeln det:\ntvå barn som letade efter något och irrade omkring i skogen.\n"De letar efter... smulorna som vi åt upp."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'Det är mitt fel'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'Fågeln tänkte efter.\nVad kunde den göra just nu?', choices:[
    {t:'Leta rätt på hemvägen från luften och visa dem', go:'hbp1'},
    {t:'Varna för huset av sötsaker med en sång', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'Fågeln flög högt upp.\nUppifrån låg skogshuggarens hus alldeles nära.\nFågeln flög lågt framför de två och visade dem vägen.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"Fågeln där verkar säga: följ med mig."\nDe två gick efter fågeln.\nNär de kom ut ur skogen såg de röken från sitt eget hem.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'Fågeln som hade ätit upp brödsmulorna\ngav i stället de två deras hemväg tillbaka.\nAtt gottgöra börjar med det man kan.\nOch så levde de lyckliga i alla sina dagar.'},

  hbu1:{art:'hg_tori', text:'Fågeln visste besked.\nOm huset av sötsaker djupt inne i skogen, och om den som bodde där.\nFågeln satte sig på en gren och sjöng:\n"Gnag gärna på väggen, men gå inte in."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'Gå inte in!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'De två förstod vad sången betydde.\nDe knaprade lite på väggen tills de var mätta,\noch när dörren öppnades gick de inte in, utan tillbaka till skogsstigen.\nDen vita fågeln flög före, mot deras hem.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'Fågeln som visste om huset av sötsaker\nfortsatte att sjunga på sin gren också därefter.\nEn varningssång för varje barn som går vilse i skogen.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_SV);

  T.ZK_EN.push(
    {section:'Hansel och Gretel'},
    {id:'hg_seishi',  n:'Den vita andens hemväg',    h:'Ursprungssagan, från din allra första genomspelning'},
    {id:'hg_koishi',  n:'Småstenar en gång till',    h:'Smyg ut genom fönstret den andra natten...'},
    {id:'hg_kawa',    n:'Till andra stranden',       h:'Välj att fly framför bakugnen...'},
    {id:'hg_mura',    n:'Byns vinter',               h:'Ta med mat hem i stället för ädelstenar...'},
    {id:'hw_okyaku',  n:'De första gästerna',        h:'Bjud på ett festmål i häxans saga...'},
    {id:'hw_megane',  n:'Röda ögon och glasögon',    h:'Försök göda dem i häxans saga...'},
    {id:'hb_pankuzu', n:'Vem åt brödsmulorna',       h:'Visa vägen från luften i den vita fågelns saga...'},
    {id:'hb_uta',     n:'En varningssång',           h:'Varna med en sång i den vita fågelns saga...'}
  );

})();
