"use strict";
/* Ali Baba och de 40 rövarna - Swedish scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var ALIBABA_SV = {

  /* ================= Ali Baba och de 40 rövarna ================= */

  ab1:{art:'ab_mori', text:'Det här är sagan om Ali Baba, som bodde i en stad i Persien.\nAli Baba var en fattig vedhuggare.\nVarje dag tog han med sina 2 åsnor till skogen för att hämta ved.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Även i dag samlade Ali Baba ved i skogen.';
    if(f.first) return t;
    return t + '\nHur mycket ved samlar han?';
  }, choices:[
    {t:'2 knippen, och hem tidigt', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 knippen, och hem i lugn och ro', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Han lastade 4 knippen ved på åsnornas ryggar.\nI dag tänkte han gå hem i lugn och ro.'
    : 'Han lastade 2 knippen ved på åsnornas ryggar.\nI dag tänkte han gå hem tidigt.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'Just då hörde han hovslag av hästar.\nAli Baba gömde sig uppe i ett träd.\n40 män samlades framför en stor klippa.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 män ...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'Mannen längst fram talade till klippan.\n"Sesam, öppna dig!"\nDå öppnade sig klippan med ett dån.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Sesam, öppna dig!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'Männen gick in.\nEfter en stund kom de ut igen. "Sesam, stäng dig!"\nKlippan slöt sig, och männen red bort.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba klättrade ner från trädet och ställde sig framför klippan.\n"Sesam, öppna dig!"\nKlippan öppnade sig, och därinne var det fullt av guldmynt och skatter.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'Skattens glans'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba fyllde säckar med guldmynt och lastade dem på åsnorna.\nBara så mycket som han kunde bära hem.\n"Sesam, stäng dig!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'Hemma berättade Ali Baba allt för sin hustru.\nDe två försökte räkna guldmynten, men det var alldeles för många.\n"Vi lånar ett mått hemma hos min bror."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Hans bror Cassim var en rik köpman.\nCassims hustru strök i hemlighet lite fett på måttets botten.\nNär måttet kom tillbaka satt 1 guldmynt fast i botten.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim frågade Ali Baba om det.\nAli Baba berättade allt: om klippan och om trollorden.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'Nästa morgon tog Cassim med sig 10 åsnor till klippan.\n"Sesam, öppna dig!"\nKlippan öppnade sig.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Sesam, öppna dig!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim fyllde sina säckar med guld.\nMen när han skulle gå ut hade han glömt trollorden.\n"Korn, öppna dig!" "Böna, öppna dig!"\nKlippan öppnade sig inte.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'Den natten kom Cassim inte hem.\nCassims hustru kom gråtande hem till Ali Baba.';
    if(f.first) return t;
    return t + '\nVad gör Ali Baba?';
  }, choices:[
    {t:'Vänta till morgonen', go:'ab14'},
    {t:'Gå till klippan redan i natt', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'På morgonen gick Ali Baba till klippan.\n"Sesam, öppna dig!"\nDärinne var det tyst. Rövarna hade kommit tillbaka före honom.\nCassim rörde sig inte längre.\nAli Baba lade sin bror på en åsna och förde honom stilla hem.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'I Ali Babas hus fanns en tjänarinna som hette Morgiana.\nHon var en människa som lade märke till allt.\nInför begravningen hämtade Morgiana en gammal skomakare från staden.\nFör att han inte skulle minnas vägen band hon för hans ögon och ledde honom till huset.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'Ögonbindeln, var så god'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'När rövarna kom tillbaka till klippan märkte de att Cassim var borta.\n"Någon annan vet om det."\nHövdingen skickade en av sina män till staden.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'Rövaren hittade den gamle skomakaren.\nMed bindeln för ögonen mindes den gamle vägen med sina fötter.\nOch rövaren satte ett vitt märke på dörren till Ali Babas hus.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana upptäckte märket.\nOch hon satte samma märke på grannhuset, och på huset därbredvid.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Märken överallt!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'När rövarna kom visste de inte vilket hus det var.\nHövdingen bestämde sig för att gå själv.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'Hövdingen förklädde sig till oljehandlare.\n19 åsnor, och 38 stora krukor.\nBara i en fanns olja, i alla de andra gömde sig var sin rövare.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Jag är en kringresande oljehandlare. Får jag stanna över natten?"\nAli Baba tog vänligt emot honom.\nKrukorna ställdes på rad på innergården.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'... När natten kommer'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'På natten tog lampoljan slut för Morgiana, och hon gick för att hämta lite ur krukorna på innergården.\nDå kom en röst inifrån en kruka.\n"Är det dags nu?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'... Det sitter någon i krukan'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana svarade med låg röst.\n"Inte än."\nSedan kontrollerade hon alla 37 krukorna.';
    if(f.first) return t;
    return t + '\nVad gör Morgiana?';
  }, choices:[
    {t:'Koka oljan', go:'ab24'},
    {t:'Hämta rep och kalla på stadsvakten', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana kokade oljan i en stor gryta.\nSedan hällde hon den kokande oljan i den ena krukan efter den andra.\nInne i krukorna blev det tyst.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'Mitt i natten kom hövdingen ut på innergården och knackade på krukorna.\nInget svar kom.\nHövdingen flydde ensam.', next:'ab26'},

  ab26:{art:'ab_ie', text:'På morgonen berättade Morgiana allt för Ali Baba.\nAli Baba sade till henne:\n"Från och med i dag är du fri."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Några dagar senare kom hövdingen tillbaka, förklädd till köpman.\nHan hade blivit vän med Ali Babas son och blivit bjuden hem till huset.\nMorgiana kom ihåg det ansiktet.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Det ansiktet minns jag'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Efter måltiden dansade Morgiana för dem.\nI skärpet satt en dolk.';
    if(f.first) return t;
    return t + '\nVad gör Morgiana?';
  }, choices:[
    {t:'Dansa dansen ända till slutet', go:'ab29'},
    {t:'Avbryta dansen och tala om märkena', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'I slutet av dansen stannade Morgiana framför köpmannen.\nHövdingen föll till marken.\nTill den förvånade Ali Baba sade Morgiana lugnt:\n"Den här mannen var hövdingen."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba sade till Morgiana:\n"Du är fri nu. Vad du gör härefter får du bestämma själv."\nMorgiana tänkte efter en stund och svarade:\n"Jag stannar här. Jag blir en av dem som hör till huset."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Sedan blev Morgiana och Ali Babas son ett par, och hon hörde till huset.\nSkatten ur klippan använde de med måtta.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Hämta hem brodern ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Redan samma natt ledde Ali Baba en åsna till klippan.\n"Sesam, öppna dig!"\nLångt därinne satt Cassim och darrade.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"Jag hade glömt trollorden ... Sesam, det var Sesam."\nAli Baba satte sin bror på åsnan och tog med honom hem.\nAv guldmynten tog han bara en säck.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'Brodern var oskadd.\nTrollorden blev en hemlighet mellan de två.\nRövarna märkte att guldmynt fattades, men vem som hade gjort det fick de aldrig veta.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Rep och stadsvakten ---- */
  abr1:{art:'ab_abura', text:'Morgiana hämtade rep.\nHon band igen krukornas lock utifrån, det ena efter det andra.\nSedan sprang hon för att kalla på stadsvakten.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'Stadsvakten kom och öppnade de 37 krukorna.\nRövarna fördes bort en och en, bundna med rep.\nHövdingen passade på och flydde.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'Hövdingen visade sig aldrig mer i staden.\nAli Baba sade till Morgiana: "Du är fri nu."\nSkatten ur klippan använde de med måtta.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Hövdingen flydde ---- */
  abg1:{art:'ab_odori', text:'Morgiana avbröt dansen och ställde sig framför köpmannen.\n"Det var jag som gjorde fler av märket ni satte."\nKöpmannen skiftade färg i ansiktet.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Utan ett ord reste sig hövdingen och flydde ut i den nattliga staden.\nTill staden i Persien kom han aldrig tillbaka.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba sade till Morgiana:\n"Du är fri nu. Vad du gör härefter får du bestämma själv."\n"Jag stannar här", svarade Morgiana.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Morgianas saga ================= */

  am1:{art:'am_daidokoro', text:'Det här är sagan om en tjänarinna som hette Morgiana.\nHon arbetade i Ali Babas hus.\nMan sade att hon lade märke till allt.', next:'am2'},
  am2:{art:'am_daidokoro', text:'På morgonen. Vad börjar hon med?', choices:[
    {t:'Baka brödet', go:'am2r', set:{amlife:'pan'}},
    {t:'Hämta vatten', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana hämtade vatten ur brunnen och fyllde krukan till brädden.\nOm huset visste hon allt.'
    : 'Morgiana gjorde upp eld i ugnen och bakade bröd.\nOm huset visste hon allt.', next:'am3'},
  am3:{art:'ab_shirushi', text:'En morgon fann hon ett vitt märke på dörren.\n(Någon försöker lägga det här huset på minnet.)\nMorgiana satte samma märke på grannhuset också.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'Märken kan man göra fler av'}, then:'am4'},
  am4:{art:'ab_abura', text:'Oljehandlarens natt. Inifrån en kruka kom en röst.\nVad gör Morgiana?', choices:[
    {t:'Koka oljan', go:'am4r', set:{amhow:'abura'}},
    {t:'Binda igen krukorna och kalla på stadsvakten', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana band igen krukornas lock och kallade på stadsvakten.\nRövarna fördes bort.'
    : 'Morgiana kokade oljan och hällde den i krukorna.\nInne i krukorna blev det tyst.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'På morgonen när allt var över sade Ali Baba:\n"Du är fri nu. Vad du gör får du bestämma själv."\nVad gör Morgiana?', choices:[
    {t:'Stanna i det här huset', go:'ami1'},
    {t:'Ge sig ut på en resa', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana gick ut genom porten en gång.\nHon gick genom staden, såg torget, såg floden.\nSedan kom hon tillbaka till huset på sina egna ben.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Det här är huset jag har valt."\nInte som tjänarinna, utan som en av dem som hör till huset.\nOch så levde de lyckliga i alla sina dagar.'},
  amt1:{art:'am_michi', text:'Morgiana tog ett knyte och gick ut genom porten.\nAli Baba hindrade henne inte.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Vart Morgiana tog vägen står inte i den här sagan.\nVart vägen ledde vet bara Morgiana.\nSlut.'},

  /* ================= Rövarhövdingens saga ================= */

  at1:{art:'at_dokutsu_kara', text:'Det här är sagan om rövarnas hövding.\nDe var 40 som samlade sin skatt inne i klippan.\nEn dag märkte han att något av den fattades.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'Vad undersöker hövdingen?', choices:[
    {t:'Fotspåren framför klippan', go:'at2r', set:{atlife:'ashi'}},
    {t:'Spåren efter en åsna', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Framför klippan fanns spår efter en åsna.\nNågon från staden.'
    : 'Framför klippan fanns små fotspår.\nDe tillhörde ingen av hans män.', next:'at3'},
  at3:{art:'ab_iwa', text:'(Det var inte den tagna skatten som skrämde honom, utan att någon kände till klippans hemlighet.)\nHövdingen skickade en man till staden.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'En hemlighet räcker'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'Planen med krukorna hade misslyckats.\nAv hans män fanns ingen kvar.\nVad gör hövdingen?', choices:[
    {t:'Lämna skatten och gå långt bort', go:'ato1'},
    {t:'Gå till det huset en gång till', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'Hövdingen ställde sig framför klippan.\n"Sesam, stäng dig."\nSedan gick han därifrån utan att se sig om.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'Skatten blev kvar inne i klippan.\nVart hövdingen tog vägen vet ingen.\nSlut.'},
  ath1:{art:'ab_odori', text:'Förklädd till köpman gick hövdingen till det huset.\nI slutet av dansen ställde sig tjänarinnan framför honom.\n(Hon hade vetat det från början.)\nHövdingen gjorde ingenting och lämnade huset.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'Hemligheten var inte längre någon hemlighet.\nHövdingen tog emot det och lämnade staden.\nDet han var rädd för var inte att förlora skatten, utan att någon visste om den.\nSlut.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_SV);

  T.ZK_EN.push(
    {section:'Ali Baba och de 40 rövarna', note:'I de gamla böckerna på arabiska finns inte den här sagan. För omkring 300 år sedan skrev en fransman ner den, efter att ha hört den av en berättare från Syrien. Det är en annan saga än "Aladdin". I den ursprungliga sagan är Morgiana slav, och till slut blir hon fri.'},
    {id:'ab_seishi',  n:'Sesam, öppna dig',          h:'Sagan så som den berättas, allra första gången'},
    {id:'ab_ani',     n:'Hämta hem brodern',         h:'Gå till klippan natten då Cassim inte kommer hem ...'},
    {id:'ab_rouya',   n:'Rep och stadsvakten',       h:'Låt bli att koka oljan natten med krukorna ...'},
    {id:'ab_nigeta',  n:'Hövdingen flydde',          h:'Avbryt dansen och tala om märkena ...'},
    {id:'am_ie',      n:'Huset jag valde',           h:'Stanna i huset i Morgianas saga ...'},
    {id:'am_tabi',    n:'Bortom dörren',             h:'Ge dig ut på en resa i Morgianas saga ...'},
    {id:'at_oite',    n:'Lämna skatten kvar',        h:'Gå långt bort i hövdingens saga ...'},
    {id:'at_himitsu', n:'En hemlighet',              h:'Gå till det huset en gång till i hövdingens saga ...'}
  );

})();
