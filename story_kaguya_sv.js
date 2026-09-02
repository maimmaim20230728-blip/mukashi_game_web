"use strict";
/* Prinsessan Kaguya - Swedish scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   Källa: Taketori Monogatari (1000-talet, PD). Inga inslag från filmen från 2013. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var KAGUYA_SV = {

  /* ================= Prinsessan Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Det här är en saga från för länge, länge sedan.\nDet fanns en gammal man som levde på att skörda bambu.\nFolk kallade honom bambusamlaren.\nEn dag, djupt inne i bambulunden, fann han ett bambustrå vars rot lyste av guld.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'Bambun lyser!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'När han skar upp strået satt det en liten flicka därinne, knappt en handsbredd hög.\nDen gamle mannen bar hem henne i sin handflata.\nHan och hans hustru bestämde sig för att fostra upp henne i en liten korg.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'Vad ska de göra för den lilla prinsessan varje dag?', choices:[
    {t:'Sjunga en vaggvisa för henne', go:'kg3r', set:{takeko:'uta'}},
    {t:'Göra leksaker av bambu åt henne', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'Den gamle mannen täljde små flöjter och vagnar av bambu.\nNär prinsessan skrattade skrattade den gamla kvinnan med.'
    : 'När den gamla kvinnan sjöng en vaggvisa somnade prinsessan lugnt in.\nDe två satt vid korgen och såg på henne länge.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'Från den dagen fanns det guld inuti varje bambustrå han skar.\nFlickan växte fort, och efter ungefär 3 månader var hon en vacker ung kvinna.\nDe gav henne namnet "Kaguya, den smala bambuns prinsessa".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'Ryktet om prinsessan Kaguyas skönhet spred sig över hela landet.\nRunt huset samlades folk som hoppades på en enda skymt av henne.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Bland dem kom 5 unga adelsmän som mer än något annat ville ha henne till hustru.\nPrins Ishitsukuri, prins Kuramochi, minister Abe,\nstorrådgivaren Otomo och mellanrådgivaren Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'Prinsessan Kaguya sade:\n"Jag går till den som hämtar hit den skatt jag vill se."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'Buddhas skål av sten!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'Juvelgrenen från Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'Eldråttans päls!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'Juvelen från drakens hals!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'Svalans kaurisnäcka!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Ingen av skatterna verkade kunna finnas i den här världen.\nDe 5 gav sig av, var och en på sin egen resa.';
    if(f.first) return t;
    return t + '\nVems berättelse ska vi höra?';
  }, choices:[
    {t:'Prins Ishitsukuri', go:'kgk1'},
    {t:'Prins Kuramochi', go:'kgk2'},
    {t:'Minister Abe', go:'kgk3'},
    {t:'Storrådgivaren Otomo', go:'kgk4'},
    {t:'Mellanrådgivaren Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'Prins Ishitsukuri tyckte att den långa resan ända till Indien var alltför besvärlig,\noch tog med sig en gammal skål från ett tempel i närheten.\nMen Buddhas skål borde ju lysa.\nEn skål utan ljus i sig genomskådades genast.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'Prins Kuramochi lät hantverkare tillverka en juvelgren.\nBåde prinsessan och den gamle mannen spärrade upp ögonen inför den praktfulla grenen.\nMen just då kom hantverkarna och sade:\n"Vi har ännu inte fått betalt för den."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'Minister Abe lät hämta en päls från ett fjärran land.\nPrinsessan sade: "Eldråttans päls ska inte brinna upp, inte ens i eld."\nDe lade den i elden, och pälsen brann upp med sprakande lågor.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'Storrådgivaren Otomo gav sig ut med båt för att leta efter en drake.\nEn svår storm kom, och båten snurrade runt och runt.\nNär han till slut nådde stranden kom han hem med röda, svullna ögon.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'Mellanrådgivaren Isonokami stack in handen i ett svalbo,\noch när han fick tag i något föll han ner från taket.\nDet han höll i handen var gammal svalspillning.\nHan skadade sig och blev liggande i sängen.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'Till slut var det inte en enda som kom tillbaka med en riktig skatt.';
    if(f.first) return t;
    return t + '\nOch nu, vad ska hon göra?';
  }, choices:[
    {t:'Låta ryktena vara och leva stilla vidare', go:'kg10'},
    {t:'Berätta sanningen för den gamle mannen och den gamla kvinnan', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'Ryktena nådde också kejsarens öron.\nHan låtsades ge sig ut på jakt och besökte bambusamlarens hus.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'Kejsarens bärstol!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'När kejsaren ville lyfta upp henne i bärstolen\nblev prinsessan Kaguyas gestalt sakta till ljus och försvann.\n"Jag tar henne inte med mig."\nDet sade kejsaren, och han vände tillbaka till huvudstaden.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'Från den dagen skickade kejsaren och prinsessan Kaguya brev och dikter till varandra.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'Och så gick 3 år.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'När våren kom började prinsessan Kaguya se upp mot månen och fälla tårar.\nNär den gamle mannen frågade varför svarade hon inte.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'I slutet av sommaren berättade prinsessan Kaguya det till sist.\n"Jag hör hemma i månens huvudstad.\nFullmånsnatten i den 8:e månaden kommer de och hämtar mig. Jag måste tillbaka."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'Jag lämnar inte tillbaka henne!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'Den gamle mannen bad kejsaren om hjälp, och många soldater kom.\nPå taket och i trädgården stod män med bågar.\nDen gamla kvinnan gömde prinsessan i det innersta rummet och stängde dörren ordentligt.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'Fullmånsnatten. En bit efter midnatt\nblev det ljusare runt huset än mitt på dagen.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'Månljuset kommer ner!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Från himlen kom människor ner, ridande på moln.\nSoldaterna tappade all kraft och ingen kunde spänna sin båge.\nDörren gick upp av sig själv, och ur den gamla kvinnans armar steg prinsessan fram.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'Månens sändebud sade:\n"Gamle man. Prinsessan drog på sig en skuld på månen, och som gottgörelse har hon varit här nere en tid.\nTiden för gottgörelsen är över.\nDet var också ett tack för en liten god gärning av dig."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'Prinsessan Kaguya skrev ett brev till den gamle mannen.\n"Tänk på dräkten jag lämnar efter mig som om den vore jag.\nDe nätter då månen syns, se upp mot den."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'Månens sändebud räckte fram en kruka med livselixiret.';
    if(f.first) return t + '\nPrinsessan smakade en enda gång, lade resten till sitt brev till kejsaren\noch gav alltihop till kejsarens budbärare.';
    return t + '\nVem ska få det här elixiret?';
  }, choices:[
    {t:'Lägga det till brevet till kejsaren', go:'kg21'},
    {t:'Lämna det till den gamle mannen och den gamla kvinnan', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'Månens sändebud räckte fram fjäderdräkten.\n"Tar man på sig den, försvinner alla hjärtats bekymmer."';
    if(f.first) return t + '\nPrinsessan tog på sig fjäderdräkten.';
    return t + '\nVad ska hon göra?';
  }, choices:[
    {t:'Ta på sig fjäderdräkten', go:'kg22'},
    {t:'Se sig om en gång till innan hon tar på den', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'När hjärtats bekymmer var borta kände prinsessan varken ömhet eller saknad för den gamle mannen.\nHon steg upp på ett moln och for upp mot månen.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Till månen ...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'Den gamle mannen och den gamla kvinnan kunde inte hålla tillbaka tårarna.\nDe höll dräkten som prinsessan lämnat i famnen och såg upp mot himlen länge, länge.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'Kejsaren lät bränna prinsessans brev och livselixiret\npå toppen av det berg i Suruga som ligger himlen närmast.\nEftersom så många krigare hade stigit upp på det berget\nkom berget att kallas "Fuji", berget rikt på krigare.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'De nätter då månen syns, se upp mot den.\nDen gamle mannen och den gamla kvinnan gjorde som prinsessan hade skrivit och såg upp mot himlen om månnätterna.\nDräkten hon tagit av sig och lämnat kvar blev kvar hos dem.\nSlut.'},

  /* ---- De dagar som återstod ---- */
  kgn1:{art:'kg_uchiake', text:'Redan innan kejsaren kom talade prinsessan Kaguya med de två.\n"Jag hör hemma i månens huvudstad. I höst måste jag tillbaka."\nDen gamle mannen och den gamla kvinnan var tysta länge.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'Från den dagen tog de 3 vara på varje dag.\nDe gick i bambulunden och gick också till strået där hon en gång hittades.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'De nätter då månen var vacker satt de 3 tillsammans på verandan.\n"Sätt er här om månnätterna. Jag ser också hit från månen."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'Fullmånsnatten kom de för att hämta prinsessan.\nDen gamle mannen slogs inte.\nDe 3 höll varandra i händerna och väntade på ljuset.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'Avskedet kom, precis likadant.\nMen innan det kom hade de 3 haft en hel höst tillsammans.\nPå verandan ligger de 3 sittdynorna kvar där de lämnades.\nSlut.'},

  /* ---- Före fjäderdräkten ---- */
  kgm1:{art:'kg_shouten', text:'Innan hon tog på sig fjäderdräkten såg prinsessan sig om.\nDen gamle mannen och den gamla kvinnan såg mot henne.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Tack för att ni uppfostrade mig'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'Den gamla kvinnan grät, log och vinkade.\nDen gamle mannen vinkade också, så mycket han förmådde.\nPrinsessan fäste de två ansiktena i sitt minne och tog sedan på sig fjäderdräkten.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Även när hjärtats bekymmer var borta blev de två ansiktena hon såg sist\nkvar hos henne i ljuset, hela tiden.\nSlut.'},

  /* ---- Livselixiret ---- */
  kgu1:{art:'kg_tegami', text:'Prinsessan gav livselixiret till den gamle mannen och den gamla kvinnan.\n"Dricker ni det här, får ni leva hur länge som helst."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Sedan prinsessan hade återvänt till månen såg de två på krukan.\n"En värld utan prinsessan behöver vi inte leva i för alltid."\nDen gamle mannen sade det stilla.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'Nästa månnatt ställde de två ut krukan på verandan.\nSom om de sakta räckte fram den mot månen.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'Elixiret dracks aldrig; det stod där och badade i månljuset.\nKejsaren brände sitt på berget Fuji, den gamle mannen räckte fram sitt mot månen från verandan.\nBåda var sätt att inte glömma prinsessan, vart och ett på sitt vis.\nSlut.'},

  /* ================= Sagan om bambusamlaren ================= */

  kj1:{art:'okina_take', text:'Det här är sagan om bambusamlaren och hans hustru, och om hur det gick sedan.\nEn månad har gått sedan prinsessan återvände till månen.', next:'kj2'},
  kj2:{art:'kg_ato', text:'Vad ska de göra i dag?', choices:[
    {t:'Vika ihop prinsessans dräkt', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Gå genom bambulunden', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'Bambulunden svajade i vinden, precis som den dagen.\nDen gamle mannen blev stående en stund och lyssnade på bambun.'
    : 'Den gamla kvinnan vek ihop prinsessans dräkt med omsorg.\nHon vek ihop den, vecklade ut den och vek ihop den igen.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'En månnatt. De två läste prinsessans brev en gång till.\n"De nätter då månen syns, se upp mot den."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Ska vi se upp?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'Den gamla kvinnan sade det till den gamle mannen.\nVad ska de två göra?', choices:[
    {t:'Se upp mot månen från verandan', go:'kjt1'},
    {t:'Gå till bambulunden på morgonen', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'De två satt bredvid varandra på verandan och såg upp mot månen.\nSorgen försvann inte.\nMen månljuset nådde ända fram till verandan.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Från den dagen sitter de två på verandan om månnätterna.\nDet finns nätter då de gråter, nätter då de talar och nätter då de tiger.\nMånljuset nådde fram lika långt varenda en av de nätterna.\nSlut.'},
  kjk1:{art:'okina_take', text:'En vårmorgon gick den gamle mannen tillbaka till bambulunden.\nNågot lysande bambustrå fanns inte längre.\nI stället stack bambuskott upp sina huvuden här och där.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'... Vi gräver upp dem.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'Den gamle mannen grävde upp bambuskotten, ett efter ett.\nUtan brådska, utan att någon sagt åt honom, av eget beslut.\nNär korgen höll på att bli full kom den gamla kvinnan med matsäck.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Sagan om månens sändebud ================= */

  ku1:{art:'tsuki_miyako', text:'Det här är sagan om ett sändebud som bor i månens huvudstad.\nI månens huvudstad finns inga tårar. Och inga bekymmer i hjärtat.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'I dag är dagen då det bär ner till jorden. Vad ska sändebudet ta med sig?', choices:[
    {t:'Bara fjäderdräkten', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'Livselixiret också', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'I lådan lades fjäderdräkten och en kruka med livselixiret.\nMänniskorna på jorden lär vilja ha sådant.'
    : 'I lådan lades fjäderdräkten.\nMed bara den blir prinsessan genast en människa från månen igen.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'När sändebudet kom ner på ett moln stod det många människor runt huset.\nDe höll bågar i händerna och blängde hitåt.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'Den gamle mannen ropade något.\nSändebudet förstod inte vad orden betydde.\nPå månen finns inget ord för att inte lämna tillbaka någon.', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'... Tårar?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'Prinsessan steg fram.\nVad ska sändebudet göra?', choices:[
    {t:'Följa regeln och klä henne i fjäderdräkten', go:'kun1'},
    {t:'Lyssna på prinsessans önskan', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'Sändebudet följde regeln och klädde prinsessan i fjäderdräkten.\nMen det gick inte att låtsas som om den gamle mannens våta ansikte inte fanns.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'Även tillbaka på månen kom sändebudet ihåg det ansiktet gång på gång.\nI ett land utan tårar fick sändebudet för första gången veta vad tårar betyder.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'Sedan dess ser månens sändebud då och då ner mot jorden.\nI landet som inte känner tårar finns nu en som känner dem.\nSlut.'},
  kut1:{art:'kg_tegami', text:'"Ge mitt brev och min dräkt till den gamle mannen."\nPå prinsessans önskan nickade sändebudet.\nNågot sådant står inte i månens regler. Men det är väl jordens sed.', next:'kut2'},
  kut2:{art:'kg_ato', text:'Sändebudet steg ner framför den gamle mannen och räckte över brevet och dräkten med omsorg.\nDen gamle mannen tryckte dem till sig.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'Tillbaka i månens huvudstad lade sändebudet till en rad i reglerna.\n"Den som återvänder från jorden får lämna kvar en enda sak."\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_SV);

  T.ZK_EN.push(
    {section:'Prinsessan Kaguya'},
    {id:'kg_seishi',  n:'Se upp om månnätterna',           h:'Den ursprungliga sagan från den 1:a genomspelningen'},
    {id:'kg_nokori',  n:'De dagar som återstod',           h:'Om du berättar sanningen innan kejsaren kommer ...'},
    {id:'kg_koromo',  n:'Före fjäderdräkten',              h:'Om du ser dig om en gång till innan fjäderdräkten ...'},
    {id:'kg_kusuri',  n:'Livselixiret',                    h:'Om du lämnar elixiret till den gamle mannen och den gamla kvinnan ...'},
    {id:'kj_tsukiyo', n:'Dit månljuset når',               h:'I sagan om det gamla paret: om du ser upp från verandan ...'},
    {id:'kj_take',    n:'Att gräva bambuskott igen',       h:'I sagan om det gamla paret: om du går till bambulunden på morgonen ...'},
    {id:'ku_namida',  n:'Landet utan tårar',               h:'I sagan om månens sändebud: om du följer regeln ...'},
    {id:'ku_tegami',  n:'Meddelandet',                     h:'I sagan om månens sändebud: om du uppfyller prinsessans önskan ...'}
  );

})();
