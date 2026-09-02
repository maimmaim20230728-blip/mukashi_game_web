"use strict";
/* Hansel en Gretel - Dutch scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   Stijl: eenvoudig prentenboek-Nederlands, passend bij story_nl.js.
   De rijmpjes zijn zelf gemaakt naar het PD-origineel van Grimm (KHM 15, 1857):
   "Knusper, knusper, Knaeuschen..." / "Der Wind, der Wind, das himmlische Kind."
   Er is geen zin overgenomen uit een bestaande Nederlandse vertaling.
   De namen Hansel en Gretel volgen de andere talen van deze app. */
(function(){
  var T;
  if (typeof SCENES_NL !== 'undefined') {
    T = { SCENES_EN: SCENES_NL, ZK_EN: ZK_NL };
  } else {
    T = require('./story_nl.js');
  }

  var HANSEL_NL = {

  /* ================= Hansel en Gretel ================= */

  hg1:{art:'hg_ie', text:'Dit is het verhaal van een houthakkersgezin dat vlak bij een groot bos woonde.\nHansel en Gretel, de broer en zijn zusje,\nwoonden daar met hun vader en hun stiefmoeder, alle vier samen.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'Dat jaar kwam er hongersnood over het hele land.\nBrood werd duur, en ook in het huis van de houthakker werd het eten elke dag minder.';
    if(f.first) return t;
    return t + '\nVandaag is er maar een klein brood. Hoe verdelen ze het?';
  }, choices:[
    {t:'Eerlijk delen, alle vier', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel geeft zijn zusje het grootste deel', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"Ik heb toch geen honger."\nHansel legde zijn eigen deel zachtjes op het bord van Gretel.'
    : 'Ze verdeelden het kleine brood in vieren en aten samen.\n"Morgen kunnen we hopelijk een groter brood kopen."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'Die nacht hoorden de twee de stem van hun stiefmoeder.\n"Morgenvroeg brengen we de kinderen diep het bos in en laten we ze daar achter.\nAnders komen we alle vier om van de honger."\nDe vader zei keer op keer nee.\nMaar op het laatst knikte hij, zonder een woord.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel begon te huilen.\n"Rustig maar. Ik heb een plan."\nHansel glipte naar buiten en raapte in het maanlicht witte kiezelstenen op.';
    if(f.first) return t + '\nNet zo lang tot zijn zakken helemaal vol waren.';
    return t + '\nWelke kiezelstenen raapt hij op?';
  }, choices:[
    {t:'De ronde witte steentjes', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'De steentjes die het helderst glanzen in de maan', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'Steentje voor steentje bekeek hij, en hij koos de kiezels die zilver glansden.\nNet zo lang tot zijn zakken helemaal vol waren.'
    : 'Kiezels, helemaal rond en wit, tot zijn zakken vol waren.\nTerug in huis fluisterde hij tegen Gretel: "Nu is het goed."', next:'hg5'},

  hg5:{art:'hg_mori', text:'De volgende ochtend ging het gezin het bos in.\nOnder het lopen liet Hansel de ene kiezelsteen na de andere vallen.\nDiep in het bos maakte de vader een vuur.\n"Rust hier maar uit. We komen jullie later halen."\nVoor ze het wisten waren de twee in slaap gevallen.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'Toen ze wakker werden, was het pikdonker.\nGretel begon te huilen.\n"We wachten tot de maan opkomt", zei Hansel.\nEn toen de maan boven het bos opkwam...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'De kiezelstenen glanzen!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'Als zilver glansden de kiezels, stip na stip, helemaal tot aan huis.\nHand in hand liepen de twee de hele nacht door tot de ochtend naar huis.', next:'hg8'},

  hg8:{art:'hg_ie', text:'De vader huilde en sloot de twee stevig in zijn armen.\nDe stiefmoeder zei helemaal niets.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Maar de hongersnood ging door.\nOp een nacht klonk die stem weer.\nDit keer zat de deur op slot, en ze konden er niet uit.';
    if(f.first) return t + '\nHansel besloot het brood van de ochtend te verkruimelen en daarmee de weg te merken.';
    return t + '\nWat moet hij doen?';
  }, choices:[
    {t:'In de ochtend de weg merken met broodkruimels', go:'hg10'},
    {t:'Zachtjes door het raam klimmen en kiezelstenen rapen', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'Op de weg het bos in liet Hansel kruimel na kruimel vallen.\nEn ook nu vielen de twee bij het vuur in slaap.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'Toen de maan opkwam, was er geen enkele kruimel meer.\nDe vogels van het bos hadden ze allemaal opgegeten.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'De twee liepen en liepen.\nEen nacht, twee nachten, en toen de derde ochtend.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'Hun buiken waren leeg, hun benen doodmoe.\nNet toen zat er op een tak een vogel te zingen, wit als sneeuw.', next:'hg13'},

  hg13:{art:'hg_tori', text:'De vogel vloog voor de twee uit en leidde ze dieper en dieper het bos in.\nEn toen ze op een open plek kwamen...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'Een huis van snoep!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Muren van brood, een dak van koek, ramen van doorzichtige suiker.\nHet hele huis was om op te eten.';
    if(f.first) return t + '\nHansel knabbelde aan het dak, Gretel aan een raam, en ze aten en aten.';
    return t + '\nWaar beginnen ze?';
  }, choices:[
    {t:'De koek van het dak', go:'hg14r', set:{hokashi:'yane'}},
    {t:'De ramen van suiker', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'Het suikerraam brak met een knak en smolt op hun tong.\n"Zoiets lekkers heb ik nog nooit gegeten."'
    : 'De koek van het dak smaakte naar honing.\n"Zoiets lekkers heb ik nog nooit gegeten."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Knabbel, knabbel, knabbel.\nNet toen klonk er een dun stemmetje uit het huis.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Knabbel, knabbel, wie knabbelt daar aan mijn huisje?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'De twee antwoordden:\n"De wind, de wind. De wind, het kind van de hemel."\nEn ze aten gewoon verder.', next:'hg17'},

  hg17:{art:'hg_majo', text:'De deur ging open, en er kwam een oude vrouw met een stok naar buiten.\n"Kijk eens aan, wat een lieve gastjes. Kom maar binnen."\nMelk en pannenkoeken, appels en noten.\nIn witte bedden sliepen de twee heerlijk diep.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Maar die oude vrouw...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...was een heks.\nDe heks had rode ogen en kon niet ver zien.\nMaar ze had een fijne neus, als een dier.\nKwam er een kind in de buurt, dan rook ze het.', next:'hg19'},

  hg19:{art:'hg_ori', text:'In de ochtend werd Hansel in een kooi gestopt.\n"Eerst vetmesten, dan opeten."\nGretel moest water halen en koken.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Elke ochtend zei de heks:\n"Steek je vinger eens uit. Word je al dik?"\nEn in plaats van zijn vinger stak Hansel haar een klein botje toe.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'Het is een botje!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'De heks met de zwakke ogen liet zich keer op keer beetnemen.\nEr gingen vier weken voorbij, en eindelijk verloor ze haar geduld.\n"Dik of dun, morgenvroeg eet ik je op."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'De heks maakte vuur in de bakoven.\n"Kruip erin en kijk of hij al heet genoeg is."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel tegen de heks!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel begreep wat de heks van plan was.';
    if(f.first) return t + '\n"Ik weet niet hoe. Hoe moet ik erin?"';
    return t + '\nWat moet ze doen?';
  }, choices:[
    {t:'Zeggen: "Ik weet niet hoe"', go:'hg24'},
    {t:'De sleutel van de kooi pakken en wegrennen', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Wat een dom kind. Kijk, zo doe je dat!"\nEn toen de heks zelf haar hoofd in de bakoven stak, op dat moment...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'Klap!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel duwde de heks in de bakoven en sloeg de ijzeren deur met een klap dicht.\nEn daarmee was het met de heks gedaan.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel maakte de kooi open.\n"Hansel, het is voorbij!"\nIn het huis stonden kisten vol parels en edelstenen.';
    if(f.first) return t + '\nDe twee stopten hun zakken vol met edelstenen.';
    return t + '\nWat nemen ze mee naar huis?';
  }, choices:[
    {t:'De zakken vullen met edelstenen', go:'hg27'},
    {t:'Een zak vullen met het eten van de planken', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'Toen ze door het bos liepen, kwamen ze bij een groot water.\nGeen brug en geen bootje.\nDaar kwam een witte eend aan zwemmen.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Lief eendje, alsjeblieft!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Eendje, eendje, hier staan Gretel en Hansel.\nGeen brug en geen bootje. Neem ons op je witte rug."\n"Samen zijn we te zwaar. Laten we om de beurt gaan."\nEn de eend bracht de twee, een voor een, naar de overkant.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Voorbij een bos dat ze kenden, zagen ze hun oude huis weer.\nDe vader zag de twee en huilde.\nDe stiefmoeder was er niet meer.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'Parels en edelstenen rolden uit hun zakken, en de vader zette grote ogen op.\nVanaf die dag kwamen ze nooit meer eten tekort.\nDe drie woonden voortaan altijd vredig bij elkaar.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Nog eens kiezelstenen ---- */
  hk1:{art:'hg_koishi', text:'Hansel klom zachtjes door het raam naar buiten\nen raapte in het maanlicht zijn zakken vol met witte kiezelstenen.', next:'hk2'},
  hk2:{art:'hg_mori', text:'De volgende dag lieten ze hen diep in het bos achter, maar de twee bleven rustig.\nToen de maan opkwam, glansden de kiezels tot aan huis.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Zoiets doe ik nooit meer."\nDat beloofde de vader waar de twee kinderen bij waren.\nOok de stiefmoeder zat die nacht zwijgend met gebogen hoofd.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'Die winter bleef het huis arm.\nMaar ze deelden elk brood in vieren en wachtten op de lente.\nDe heks van het huis van snoep kwamen ze geen enkele keer tegen.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- Naar de overkant ---- */
  hkw1:{art:'hg_kamado', text:'Gretel pakte de sleutel van de kooi en liet Hansel eruit.\n"Wegwezen!"\nDe heks met de zwakke ogen kwam snuffelend achter hen aan.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Bij het water wachtte een witte eend.\n"Om de beurt! Te zwaar en ik zink."\nDe eend bracht eerst Gretel over, en daarna Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'Ook de heks kwam bij de oever.\n"Eendje, neem mij er ook op."\nMaar de heks was veel te zwaar, en de eend verroerde zich niet.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'Aan de overkant kon de heks alleen maar met haar voeten stampen.\nHand in hand liepen de twee naar huis.\nNiemand ging de bakoven in, en niemand werd opgegeten.\nEn ze leefden nog lang en gelukkig.'},

  /* ---- De winter van het dorp ---- */
  hgm1:{art:'hg_takara', text:'Gretel keek naar de planken.\nMeel, honing, walnoten, appels.\n"Dit is beter dan edelstenen."\nDe twee propten een zak vol met eten.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Met de zware zak in hun armen kwamen ze bij het water.\nDe witte eend bracht de twee en de zak, een voor een, naar de overkant.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'In het dorp duurde de hongersnood nog voort.\nDe twee deelden het eten dat ze hadden meegebracht met het hele dorp.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Het meel uit het huis van snoep werd die winter het brood van het dorp.\nTot de lente kwam en het groen op de akkers opkwam, hoefde niemand honger te hebben.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de heks ================= */

  hw1:{art:'majo_daidokoro', text:'Dit is het verhaal van een heks die diep in het bos woonde.\nElke dag bakte ze brood en maakte ze snoepgoed,\nen daarvan maakte ze muren en daken, en zo bouwde ze almaar door aan haar huis.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'Wat zal ze vandaag bakken?', choices:[
    {t:'Zoete koekjes', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Notenbrood', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'Het notenbrood werd goudbruin gebakken.\nMaar er was niemand die het opat.\nDe heks stapelde het op tegen de muur.'
    : 'De zoete koekjes werden knapperig gebakken.\nMaar er was niemand die ze opat.\nDe heks legde ze op het dak.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'Op een dag klonk er een geknabbel.\nIemand was aan haar huis aan het eten.\nDe rode ogen van de heks konden niet ver zien.\nAlleen haar neus rook de geur van kinderen.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Knabbel, wie knabbelt daar aan mijn huisje?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"De wind, de wind, het kind van de hemel."\nEen lief stemmetje antwoordde.\nDe heks deed de deur open. En nu...', choices:[
    {t:'Ze vetmesten en dan opeten', go:'hwm1'},
    {t:'Ze op een feestmaal trakteren', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'Op tafel: versgebakken brood en melk.\n"Lekker!" "Lekker!", zeiden de twee keer op keer.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...Lekker?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Dat woord had de heks in heel lange tijd niet meer gehoord.\nIemand at op wat zij zelf had gemaakt.\nDe heks huilde, stiekem.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Sindsdien komen er af en toe gasten in het huis van snoep.\nDe heks bakt ook nu nog brood en maakt snoepgoed.\nDit keer voor de mensen die het opeten.\nEn ze leefden nog lang en gelukkig.'},

  hwm1:{art:'hg_ori', text:'Ze stopte Hansel in de kooi en zei elke ochtend: "Steek je vinger eens uit."\nMaar de ogen van de heks zagen het verschil tussen een botje en een vinger niet.\n"Nog steeds zo dun..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Waarom word je nou niet dik!?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'De heks verloor haar geduld en maakte vuur in de bakoven.\n"Kijk eens of hij al heet genoeg is."\n"Ik weet niet hoe", zei Gretel.\nDus stak de heks er zelf haar hoofd in.\n...Ze zag helemaal niets.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"Het is hier pikdonker! Laat iemand de deur vasthouden!"\nTerwijl de heks nog lag te wriemelen, renden de twee weg.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'De heks kroop uit de bakoven en nam een besluit.\n"Ik koop een bril."\nDe volgende ochtend ging de heks met haar stok naar de stad.\nWat de heks met haar bril op allemaal zag, is weer een heel ander verhaal.\nEn ze leefden nog lang en gelukkig.'},

  /* ================= Het verhaal van de witte vogel ================= */

  hb1:{art:'tori_sora', text:'Dit is het verhaal van een vogel, wit als sneeuw, die in het bos woonde.\nOp een ochtend lagen er op het bospad allemaal broodkruimels.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Van die lekkere broodkruimels. Wat nu?', choices:[
    {t:'Er maar een opeten', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Eten tot de buik vol is', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'De vogel wilde er maar één, dat was het plan.\nMaar de andere vogels kwamen ook, en alle broodkruimels waren op.'
    : 'De andere vogels kwamen ook, en in een oogwenk waren alle broodkruimels op.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'Die nacht zag de vogel het:\ntwee kinderen die iets zochten en door het bos dwaalden.\n"Dat zijn... de kruimels die wij hebben opgegeten."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'Het is mijn schuld'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'De vogel dacht na.\nWat kan ik nu zelf doen?', choices:[
    {t:'Vanuit de lucht de weg naar huis zoeken en ze leiden', go:'hbp1'},
    {t:'Met een lied over het huis van snoep waarschuwen', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'De vogel vloog hoog de lucht in.\nVan boven af was het huis van de houthakker vlakbij.\nDe vogel vloog laag voor de twee uit en wees ze de weg.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"Die vogel zegt volgens mij: kom maar mee."\nDe twee liepen achter de vogel aan.\nToen ze het bos uit kwamen, zagen ze de rook van hun eigen huis.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'De vogel die de broodkruimels had opgegeten,\ngaf de twee daarvoor in de plaats de weg naar huis terug.\nHet goedmaken begint bij wat je kunt.\nEn ze leefden nog lang en gelukkig.'},

  hbu1:{art:'hg_tori', text:'De vogel wist ervan.\nVan het huis van snoep diep in het bos, en ook van wie daar woonde.\nDe vogel ging op een tak zitten en zong:\n"Knabbel aan de muur, maar ga er niet naar binnen."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'Ga niet naar binnen!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'De twee begrepen wat het lied betekende.\nZe knabbelden een beetje van de muur tot hun buik vol was,\nen toen de deur openging, gingen ze niet naar binnen, maar terug naar het bospad.\nDe witte vogel vloog voor hen uit, richting hun huis.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'De vogel die van het huis van snoep wist,\nbleef ook daarna op haar tak zingen.\nEen lied van waarschuwing voor ieder kind dat in het bos verdwaalt.\nEn ze leefden nog lang en gelukkig.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_NL);

  T.ZK_EN.push(
    {section:'Hansel en Gretel'},
    {id:'hg_seishi',  n:'De thuisreis van de witte eend', h:'Het oorspronkelijke verhaal van de allereerste keer'},
    {id:'hg_koishi',  n:'Nog eens kiezelstenen',          h:'Als je in de tweede nacht door het raam klimt...'},
    {id:'hg_kawa',    n:'Naar de overkant',               h:'Als je bij de bakoven kiest om te vluchten...'},
    {id:'hg_mura',    n:'De winter van het dorp',         h:'Als je in plaats van edelstenen eten meeneemt...'},
    {id:'hw_okyaku',  n:'De allereerste gasten',          h:'Als je in het verhaal van de heks een feestmaal maakt...'},
    {id:'hw_megane',  n:'Rode ogen en een bril',          h:'Als je in het verhaal van de heks wilt vetmesten...'},
    {id:'hb_pankuzu', n:'Wie de broodkruimels opat',      h:'Als je in het verhaal van de witte vogel vanuit de lucht leidt...'},
    {id:'hb_uta',     n:'Waarschuwen met een lied',       h:'Als je in het verhaal van de witte vogel met een lied waarschuwt...'}
  );

})();
