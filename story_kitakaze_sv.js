"use strict";
/* Nordanvinden och solen - Swedish scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Swedish wording is original;
   no existing Swedish translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var KITAKAZE_SV = {

  /* ================= Nordanvinden och solen ================= */

  kz1:{art:'kz_sora', text:'Det här är sagan om nordanvinden och solen.\nEn dag högt uppe på himlen grälade nordanvinden och solen.\n”Jag är starkast.” ”Nej, det är jag.”', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Vem är starkast?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'Den morgonen lämnade en vandrare byn och började gå längs vägen.\nMed kappan på och väskan över axeln.';
    if(f.first) return t;
    return t + '\nVad ska med i väskan?';
  }, choices:[
    {t:'En flaska vatten', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Bröd och ett äpple', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'I väskan: bröd, ett äpple och en kappa till.\nDet såg ut att bli en lång väg.'
    : 'I väskan: en flaska vatten och en kappa till.\nDet såg ut att bli en lång väg.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'Nordanvinden och solen fick syn på vandraren.\n”Den som får vandraren att ta av sig kappan är starkast.”';
    if(f.first) return t + '\nFörst var det nordanvindens tur.';
    return t + '\nVad händer nu?';
  }, choices:[
    {t:'Tävla. Nordanvinden börjar', go:'kz4'},
    {t:'Sluta tävla och försöka tillsammans', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'Nordanvinden blåste hårt redan från början.\nVusch!\nVandraren höll fast kappans krage.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Vusch!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'Nordanvinden blåste ännu hårdare.\nVusch, vusch!\nVandraren höll kappan hårt med båda händerna.\n”Kallt. Jag tar på mig en till.”\nUr väskan kom kappan till, och vandraren drog på sig den över den första.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Vusch, vusch!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Kallt...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'Nordanvinden blåste av all kraft.\nLöven flög, och sanden på vägen virvlade upp.\nÄndå släppte vandraren inte kappan.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Vuuuusch!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'Nordanvinden blev trött.';
    if(f.first) return t + '\n”Solen, nu är det din tur.”\nOch nordanvinden lämnade över vandraren till solen.';
    return t + '\nVad gör nordanvinden?';
  }, choices:[
    {t:'”Solen, nu är det din tur”', go:'kzc_kao_kk'},
    {t:'Hämta molnen', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Nu är det din tur'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'Solen sken först bara lagom.\nMilt och varmt.\nVandraren tog av sig den extra kappan och lade tillbaka den i väskan.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Milt och varmt...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'Solen sken starkare.\nSkarpt och hett.\nVandraren började svettas.';
    if(f.first) return t;
    return t + '\nVad gör vandraren?';
  }, choices:[
    {t:'Gå vidare som förut', go:'kzc_poka2'},
    {t:'Gå in i skuggan', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Skarpt och hett!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'Solen sken ännu starkare.\n”Hett. Det går inte att stå ut.”\nVandraren tog av sig kappan helt och hängde den över axeln.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Vid sidan av vägen rann en flod.\nVandraren lade kappan på stranden och hoppade i vattnet.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Plask!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'Vandraren badade, och det såg skönt ut.\nHögt uppe på himlen såg nordanvinden och solen på.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'Vandraren vet ingenting om tävlingen.\nKappan torkade på stranden, och vandraren gick vidare.\nSlut.'},

  /* ---- Tvättväder tillsammans ---- */
  kzf1:{art:'kz_sentaku', text:'”Vi slutar tävla och försöker tillsammans i stället.”\nNordanvinden blåste, och solen sken.\nAll tvätt i byn var torr redan före middagstid.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'Vandraren gick vidare med kappan på, och det kändes skönt.\nVinden var sval, och solskenet varmt.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'Byborna kallade den dagen ”det bästa tvättvädret”.\nVem av de två som var starkast bestämde ingen.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- En vila i skuggan ---- */
  kzk1:{art:'kz_kokage', text:'Vandraren gick in i skuggan under ett stort träd och satte sig ner.\nKappan var kvar på.\nLite vatten att dricka, och en vila.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'Solen sjönk lägre, och det blev svalt.\nVandraren gick vidare igen, med kappan på.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'Högt uppe på himlen såg nordanvinden och solen på varandra.\nTävlingen blev inte avgjord.\nSlut.'},

  /* ---- När molnen kom ---- */
  kzu1:{art:'kz_kumo', text:'Nordanvinden hämtade molnen.\nHimlen blev mörk, och det började regna.\nVandraren ställde sig under ett träd.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'När regnet slutade gick vandraren vidare.\nKappan var kvar på.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'”Vi får låta det räcka för i dag”, sa solen.\n”En annan gång”, sa nordanvinden.\nSlut.'},

  /* ================= Sagan om nordanvinden ================= */

  kk1:{art:'kz_sora', text:'Det här är sagan om nordanvinden.\nNordanvinden kommer blåsande från havet i norr.\nAtt blåsa hårt är nordanvindens arbete.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Vart ska nordanvinden blåsa i dag?', choices:[
    {t:'Ut över havet', go:'kk2r', set:{kklife:'umi'}},
    {t:'Ut över ängarna', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'Nordanvinden blåste en gång över ängarna.\nAllt gräset vände sig åt samma håll på en gång.'
    : 'Nordanvinden blåste en gång över havet.\nVita vågor reste sig på en gång.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'Tävlingen om att få vandraren att ta av sig kappan gick inte bra.\nLite trött vilade nordanvinden högt uppe på himlen.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Att blåsa är ju det jag kan bäst'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Från himlen syns allt möjligt där nere.\nVart går nordanvinden?', choices:[
    {t:'Till skeppen i hamnen', go:'kkh1'},
    {t:'Till blommorna på ängen', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'I hamnen låg ett skepp som inte kunde röra sig.\nDet fanns ingen vind, och seglen hängde slappa.\nNordanvinden blåste försiktigt in i seglen.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'Seglen fylldes, och skeppet gick ut på havet.\nSjömännen vinkade upp mot himlen.\nOch så levde de lyckliga i alla sina dagar.'},
  kkt1:{art:'kk_nohara', text:'Blommorna på ängen hade satt frön.\nNordanvinden lyfte fröna och bar dem långt bort.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'Nästa vår blommade samma blommor på en avlägsen kulle.\nDet var fröna som nordanvinden hade burit.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Sagan om solen ================= */

  kh1:{art:'kz_sora', text:'Det här är sagan om solen.\nSolen går upp i öster på morgonen och ner i väster på kvällen.\nAtt lysa är solens arbete.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'Vad ska solen lysa på först den här morgonen?', choices:[
    {t:'Åkrarna', go:'kh2r', set:{khlife:'hatake'}},
    {t:'Byns tak', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'Solen lyste på byns tak.\nEn katt på ett tak sträckte på sig.'
    : 'Solen lyste på åkrarna.\nDaggen glittrade, och de små skotten växte.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'Den dag tävlingen om vandraren stod lyste solen starkare än vanligt.\nVandraren hoppade i floden, men jorden på åkrarna torkade och sprack.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Jag lyste kanske för starkt'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'Vad gör solen?', choices:[
    {t:'Be molnet om skugga', go:'khk1'},
    {t:'Lysa vidare tills solen går ner', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'Solen bad ett moln som drog förbi.\n”Kan du göra lite skugga över åkrarna?”\nMolnet stannade över åkrarna.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'I skuggan fick åkrarna pusta ut.\nDet finns saker som inte ens solen kan.\nDagen då solen bad molnet om skugga glömde solen aldrig.\nOch så levde de lyckliga i alla sina dagar.'},
  khy1:{art:'kh_yuuhi', text:'Solen lyste vidare tills den gick ner bakom bergen i väster.\nDen såg vandrarens rygg gå över en avlägsen kulle.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Om vandraren tog på sig kappan eller av sig den ser solen inte längre.\nI morgon går solen upp igen.\nSlut.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_SV);

  T.ZK_EN.push(
    {section:'Nordanvinden och solen', note:'I den gamla grekiska texten slutar den här sagan med att vandraren badar i en flod. Vem av de två som vann står inte i boken. Meningen ”i många fall fungerar övertalning bättre än våld” skrevs till långt senare. Det finns mer än ett sätt att läsa sagan.'},
    {id:'kz_seishi', n:'Ett bad i floden',          h:'Sagan så som den berättas, redan första gången'},
    {id:'kz_kokage', n:'En vila i skuggan',         h:'Om vandraren går in i skuggan när solen lyser...'},
    {id:'kz_futari', n:'Tvättväder tillsammans',    h:'Om de slutar tävla och gör det tillsammans...'},
    {id:'kz_kumo',   n:'När molnen kom',            h:'Om nordanvinden hämtar molnen...'},
    {id:'kk_ho',     n:'Segel som fylls',           h:'Om man går till hamnen i sagan om nordanvinden...'},
    {id:'kk_tane',   n:'Att bära fröna',            h:'Om man går till ängen i sagan om nordanvinden...'},
    {id:'kh_kumo',   n:'Att be molnet',             h:'Om man ber molnet i sagan om solen...'},
    {id:'kh_yuuhi',  n:'Ända till solnedgången',    h:'Om man lyser ända till solnedgången i sagan om solen...'}
  );

})();
