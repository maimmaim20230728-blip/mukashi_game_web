"use strict";
/* Tranan som gav tillbaka för vänligheten - Swedish scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var TSURU_SV = {

  /* ================= Tranan som gav tillbaka för vänligheten ================= */

  ts1:{art:'ts_yuki_wana', text:'Det här är sagan om en trana som blev räddad en snöig dag.\nEn vinterdag gick en gammal man till staden för att sälja ved.\nPå vägen hittade han en trana som satt fast i en fälla.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Fällan lossad!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'Den gamle mannen lossade fällan och släppte tranan fri.\nMed stora vingslag flög tranan upp mot den snöiga himlen.';
    if(f.first) return t;
    return t + '\nVad köper han i staden innan han går hem?';
  }, choices:[
    {t:'Köpa ris', go:'ts2r', set:{tslife:'kome'}},
    {t:'Köpa en karamell', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'För pengarna från veden köpte den gamle mannen en liten karamell.\nEn present till den gamla kvinnan.'
    : 'För pengarna från veden köpte den gamle mannen lite ris.\nDet räckte till kvällens mat.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'Den natten fortsatte snön att falla.\nKnack, knack. Någon knackade på dörren.\nEn flicka i vit kimono stod ute i snön.\n"Jag har gått vilse. Får jag stanna en natt?"', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Låt mig få stanna'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'Den gamle mannen och den gamla kvinnan satte flickan vid eldstaden.\nFlickan arbetade flitigt, och de levde tillsammans i många dagar.\n"Låt mig få stanna här."\nDe två började se flickan som sin egen dotter.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'En dag sa flickan:\n"Köp garn åt mig. Jag ska väva i vävstolen.\nMedan jag väver, öppna inte pappersdörren."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Klipp-klapp, klapper-klapp'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'I 3 dagar och 3 nätter hördes vävstolen från kammaren.\nPå den 4:e morgonen kom flickan ut med ett vitt tyg.\nDet var vitt som snö, och det lyste.', next:'ts7'},

  ts7:{art:'ts_machi', text:'Den gamle mannen tog det till staden, och tyget såldes dyrt.\nDen vintern blev det varmt i huset.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Vi är tacksamma...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Jag väver ett tyg till", sa flickan.\nÅterigen hördes vävstolen från kammaren i 3 dagar och 3 nätter.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Klipp-klapp, klapper-klapp'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'Även det 2:a tyget såldes dyrt.\nMen flickans ansikte hade blivit blekare än förut.\n"Jag väver ett tyg till", sa flickan.';
    if(f.first) return t;
    return t + '\nVad gör den gamle mannen?';
  }, choices:[
    {t:'Säga: "Ja tack, väv det"', go:'ts10'},
    {t:'Säga: "Du behöver inte väva mer"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'Det 3:e tyget.\nVävstolen lät långsammare än förut.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Klipp... klapper...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'Den gamla kvinnan stannade utanför kammaren.\n(Mår flickan bra?)\n(Hon har inget garn. Vad är det hon väver?)';
    if(f.first) return t + '\nDen gamla kvinnan öppnade pappersdörren en liten bit.';
    return t + '\nVad gör den gamla kvinnan?';
  }, choices:[
    {t:'Öppna pappersdörren en liten bit', go:'ts12'},
    {t:'Ropa något och gå därifrån', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Bakom pappersdörren satt en trana.\nTranan vävde med sina egna fjädrar.\nFjädrarna hade blivit lite färre.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'Den natten satte sig flickan framför de två.\n"Jag är tranan som blev räddad en snöig dag.\nNi har sett min sanna gestalt.\nJag kan inte längre stanna i en flickas gestalt."';
    if(f.first) return t;
    return t + '\nVad gör de två?';
  }, choices:[
    {t:'Ta farväl under tystnad', go:'ts14'},
    {t:'Öppna dörren och se upp mot himlen', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'Flickan blev en trana igen och flög upp mot den snöiga himlen.\nDen gamle mannen och den gamla kvinnan såg länge, länge mot himlen.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'Tranan, mot himlen'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'Tranan som blev räddad en snöig dag återvände till himlen.\nI huset blev 2 vita tyger kvar, och en vävstol med ofärdig väv.\nSlut.'},

  /* ---- Du behöver inte väva mer ---- */
  tsm1:{art:'ts_kaoiro', text:'"Du behöver inte väva mer. 2 tyger räcker."\nSå sa den gamle mannen.\nFlickan var tyst en stund och svarade sedan: "Ja."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'Vintern tog slut, och våren kom.\nUppe i himlen ropade tranor.\n"Jag är tranan som blev räddad en snöig dag. Min flock kallar på mig."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'Flickan blev en trana igen och flög i väg till sin flock.\nI huset blev 2 vita tyger kvar.\nDen gamle mannen och den gamla kvinnan såg efter den i vårhimlen.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- En vinter utan blick ---- */
  tsn1:{art:'ts_nozoku', text:'"Slit inte ut dig, nu."\nDen gamla kvinnan ropade utanför pappersdörren och gick från kammaren.\nInifrån hördes ett "Ja".', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'Det 3:e tyget blev färdigt.\nDet var det vackraste av alla.\nFlickans ansikte var fortfarande blekt.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Våren kom, och uppe i himlen ropade tranor.\n"Jag är tranan som blev räddad en snöig dag.\nJag har inga fjädrar kvar. Min flock kallar på mig."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'Den gamle mannen och den gamla kvinnan tog farväl av flickan vid dörren.\nÄven utan att titta kom avskedet.\nMen i det avskedet fanns inte en enda hemlighet.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Öppna fönstret ---- */
  tsd1:{art:'ts_mado', text:'Nästa morgon öppnade den gamle mannen dörren.\nPå den klara himlen syntes en enda trana.\nTranan drog ett varv över huset och flög bort i fjärran.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'De två vinkade.\nOm tranan såg sig om vet ingen.\nMen att den drog ett varv över huset kom de alltid ihåg.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Tranans saga ================= */

  tz1:{art:'ts_yuki_wana', text:'Det här är sagan om en trana.\nEn snöig dag satt den fast i en fälla och kunde inte röra sig.\nEn gammal man kom förbi och lossade fällan.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'Tranan ville ge tillbaka för vänligheten.\nI vilken gestalt ska den gå?', choices:[
    {t:'Som en flicka i vit kimono', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Som en flicka på resa', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'Tranan tog gestalten av en resande flicka med bred halmhatt\noch knackade en snönatt på husets dörr.'
    : 'Tranan tog gestalten av en flicka i vit kimono\noch knackade en snönatt på husets dörr.', next:'tz3'},
  tz3:{art:'tz_hane', text:'För att väva i vävstolen behövs de egna fjädrarna.\nFjädrar finns inte hur många som helst.\nTranan vävde och räknade fjädrarna.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Bara så här många kvar'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Medan det 3:e tyget vävdes, gled pappersdörren upp en liten bit.\nVad gör tranan?', choices:[
    {t:'Fortsätta väva', go:'tzh1'},
    {t:'Stanna vävstolen och se mot himlen', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'Tranan vävde ända till slutet.\nFjädrarna hade blivit mycket färre.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'Den sanna gestalten hade blivit sedd, och så lämnade tranan huset.\nVarför den vävde ända till slutet står inte i den här sagan.\nSlut.'},
  tzs1:{art:'tz_sora_ie', text:'Tranan stannade vävstolen och såg ut genom fönstret mot himlen.\nDet var en vårhimmel.\nDen natten lämnade tranan huset.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Uppifrån himlen var huset litet, och ett enda ljus lyste i det.\nTranan såg på det ljuset en stund.\nSlut.'},

  /* ================= Den gamla kvinnans vinter ================= */

  tb1:{art:'ts_irori', text:'Det här är sagan om en gammal kvinna.\nFlickan som kom en snönatt arbetade mycket och skrattade mycket.\nDen gamla kvinnan kunde inte annat än hålla av flickan.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Vad gör den gamla kvinnan medan flickan väver?', choices:[
    {t:'Laga en varm soppa', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Låta elden i eldstaden brinna', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'Den gamla kvinnan lade på ved gång på gång, så att elden inte skulle slockna.\nFör att kammaren inte skulle bli kall.'
    : 'Den gamla kvinnan lagade en varm soppa och ställde den utanför pappersdörren.\nPå morgonen var skålen tom.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Efter det 2:a tyget hade flickans ansikte blivit blekt.\nDen gamla kvinnan gick fram och tillbaka utanför kammaren, gång på gång.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'Jag ska inte titta, men...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'När någon säger "titta inte" vill man titta.\nÄnnu mer när man är orolig.\nVad gör den gamla kvinnan?', choices:[
    {t:'Öppna pappersdörren', go:'tbk1'},
    {t:'Sätta sig utanför kammaren och vänta', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Bakom pappersdörren satt en trana.\nDen gamla kvinnan sköt försiktigt igen pappersdörren.\nMen det hon hade sett gick inte att ta tillbaka.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'Flickan blev en trana igen och flög bort.\nLusten att titta finns hos alla.\nIngen i den här sagan kallar det fel.\nSlut.'},
  tbh1:{art:'tb_hata_nokori', text:'Den gamla kvinnan satte sig utanför kammaren och lyssnade på vävstolen.\nKlipp-klapp. Klapper-klapp.\nSå satt hon ända till våren.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Efter att flickan gått på våren blev vävstolen kvar i kammaren.\nDen gamla kvinnan lät vävstolen stå som den var och öppnade kammaren varje dag.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, TSURU_SV);

  T.ZK_EN.push(
    {section:'Tranan som gav tillbaka för vänligheten', note:'I japanska folksagor finns många berättelser där någon går sin väg så snart den sanna gestalten har blivit sedd: en trana, en orm, en näktergal. Det är inte berättelser om straff.'},
    {id:'ts_seishi',    n:'Tranan i snön',              h:'Sagan som den berättas, redan från första gången'},
    {id:'ts_mou',       n:'Du behöver inte väva mer',   h:'När den gamle mannen säger något före det 3:e tyget...'},
    {id:'ts_nozokanai', n:'En vinter utan blick',       h:'När den gamla kvinnan bara ropar och går därifrån...'},
    {id:'ts_mado',      n:'Öppna fönstret',             h:'När man avskedsnatten öppnar dörren och ser upp mot himlen...'},
    {id:'tz_hane',      n:'Antalet fjädrar',            h:'När man i tranans saga fortsätter väva ända till slutet...'},
    {id:'tz_sora',      n:'Huset sett från himlen',     h:'När man i tranans saga stannar vävstolen och ser mot himlen...'},
    {id:'tb_kokoro',    n:'Lusten att titta',           h:'När man i den gamla kvinnans saga öppnar pappersdörren...'},
    {id:'tb_hata',      n:'Den ofärdiga väven',         h:'När man i den gamla kvinnans saga väntar utanför kammaren...'}
  );

})();
