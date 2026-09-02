"use strict";
/* Urashima Taro - Swedish scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_SV !== 'undefined') {
    T = { SCENES_EN: SCENES_SV, ZK_EN: ZK_SV };
  } else {
    T = require('./story_sv.js');
  }

  var URA_SV = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Det här är sagan om en ung fiskare som bodde i en by vid havet.\nHan hette Urashima Taro.\nHan bodde tillsammans med sin gamla far och sin gamla mor, alla tre.', next:'u2'},

  u2:{art:'ura_hama', text:'Vågorna låter fint i dag också.\nVad ska vi göra innan vi far ut och fiskar?', choices:[
    {t:'Laga näten', go:'u2r', set:{ulife:'ami'}},
    {t:'Se ut över havet en stund', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'När han såg på de glittrande vågorna blev det alldeles stilla i hans hjärta.\nHavet var Taros allra bästa vän.'
    : 'Det omsorgsfullt lagade nätet spände sig skönt och rakt.\nAtt vara rädd om sina redskap, det var Taros sätt.', next:'u3'},

  u3:{art:'ura_ijime', text:'Då fick han syn på några barn på stranden som stod runt en stor sköldpadda och stojade.\nSköldpaddan visste inte vad den skulle ta sig till och drog in huvudet.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Ni får inte plåga sköldpaddan!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'När barnen hade gått hem bar Taro varsamt tillbaka sköldpaddan till havet.\n"Låt dig inte fångas igen."\nSköldpaddan vände sig om gång på gång och försvann bortom vågorna.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Några dagar senare.\nVid vattenbrynet kom samma sköldpadda.\n"Taro, tack för häromdagen.\nSom tack ska jag visa dig vägen till Drakpalatset."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Upp på sköldpaddans rygg, och så ner i havet.\nNå, hur ska vi färdas?', choices:[
    {t:'Hålla sig fast ordentligt i skalet', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Se sig omkring och njuta av utsikten', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Till Drakpalatset!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Fiskstim glittrade förbi, och ljuspelare vajade i det blå.\nTaro hade aldrig sett något liknande och kunde inte slita blicken därifrån.'
    : (f.uride==='tsukamaru'
      ? 'När han höll sig hårt i skalet kändes sköldpaddans rygg varm,\noch märkligt nog var han inte rädd alls.'
      : 'Genom det blå ljuset dök sköldpaddan djupare och djupare.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'På havets botten kom ett alldeles praktfullt slott i sikte.\nDet var Drakpalatset.\nSå vackert att ingen tavla skulle kunna måla det.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Välkommen, käre Taro. Du är alltså den gode människa som räddade vår sköldpadda."\nPrinsessan Otohime tog emot honom med ett vänligt leende.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'Havsrudor och flundror dansar!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Framför långa rader av läckerheter dansade havsrudor och flundror muntert.\nTaro spärrade upp ögonen och klappade i händerna.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'I slottet fanns "de fyra årstidernas sal".\nGenom fyra fönster såg man vår, sommar, höst och vinter på en gång.';
    if(f.first) return t;
    return t + '\nVilket fönster tycker du bäst om?';
  }, choices:[
    {t:'Vårens fönster med fallande körsbärsblom', go:'u10r', set:{umado:'haru'}},
    {t:'Vinterns fönster med fallande snö', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'Snön sedd från havets botten föll alldeles tyst, och man kunde se på den hur länge som helst.\n"Så underligt. Här finns verkligen allt."'
    : 'Bortom fönstret dansade körsbärsblommans kronblad sakta ner.\n"Så underligt. Här finns verkligen allt."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'De glada dagarna gick förbi som en dröm...\noch innan han visste ordet av hade tre år gått.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'En kväll kom Taro plötsligt att tänka på sin far och sin mor kvar i byn.\nMår de bra? Är de ensamma?';
    if(f.first) return t + '\n"Prinsessan Otohime. Nu vill jag gärna få resa hem."';
    return t + '\nVad ska han göra?';
  }, choices:[
    {t:'Säga "låt mig få resa hem"', go:'u13'},
    {t:'Stanna kvar här en liten stund till', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'Prinsessan Otohime nickade, lite vemodigt,\noch räckte fram en vacker ask av blank svart lack.\n"Den här kallas ett tamatebako, ett skattskrin."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Du får aldrig någonsin öppna den'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'På sköldpaddans rygg bar det tillbaka genom havet.\nNär han såg sig om blev Drakpalatsets ljus mindre och mindre, långt där borta.', next:'u15'},

  u15:{art:'ura_hama700', text:'När han kom fram till stranden var allt på något vis annorlunda.\nHans hus var borta. Den välbekanta tallen var också borta.\nAlla han mötte på vägen hade främmande ansikten.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Under de tre åren i Drakpalatset\nhade sjuhundra år gått på land.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'Både hans far och hans mor hörde sedan länge till en svunnen tid.\nTaro var alldeles ensam.';
    if(f.first) return t + '\nI sin ensamhet lade han handen på locket till sitt tamatebako.';
    return t + '\nVad ska han göra?';
  }, choices:[
    {t:'Öppna sitt tamatebako', go:'uc_kemuri'},
    {t:'Låta den vara stängd och vänta på stranden', go:'ua1'},
    {t:'Lämna tillbaka den till havet', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Vit rök...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'När röken försvann hade Taro blivit en vithårig gammal man.\nTiden som stått stilla i Drakpalatset kom tillbaka på en gång.';
    if(f.first) return t;
    return t + '\nVad ska han göra?';
  }, choices:[
    {t:'Stå kvar och se ut över havet', go:'e_u_seishi'},
    {t:'Börja gå mot Drakpalatset', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Öppnad, och sedan ångern: tamatebako.\nÄndå bar Taro i sitt bröst de vackra dagar som ingen tavla kan måla,\noch de låg kvar där som en skatt.\nBara vågornas brus ljöd stilla vidare.\nSlut.'},

  /* ---- Tranan (det gamla slutet ur Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'Mot vattenbrynet, ett steg, två steg.\nNär han gick vidare, som dragen mot havet där Drakpalatset låg,\nblev Taros kropp helt plötsligt alldeles lätt.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'Han blev en trana!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Som vit trana flög Taro ut över havet i morgonrodnaden.\nDå stack en grön sköldpadda upp huvudet mellan vågorna.\nDet var prinsessan Otohime i sköldpaddans skepnad.\nTranan och sköldpaddan är tecken för långt liv och lycka.\nOch de två dansade för alltid över det lysande havet.\nOch så levde de lyckliga i alla sina dagar.', ending:'u_tsuru'},

  /* ---- Inte öppna den (löftet ur Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro öppnade inte asken.\n"Jag har lovat att inte öppna den."\nFrån den dagen såg han ut över havet från stranden, morgon och kväll.', next:'ua2'},
  ua2:{art:'ura_fune', text:'En morgon, efter några dagar, lyste havet gyllene,\noch en enda båt kom glidande över vattnet.\n"Käre Taro. Du höll ditt löfte."\nDet var prinsessan Otohimes röst.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Jag trodde att vi skulle ses igen, så länge asken förblev stängd."\nTaro steg i båten och gav sig av på en resa utan avsked.\nTamatebako var tecknet på ett löfte som band dem samman.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Ge den tillbaka till havet ---- */
  uu1:{art:'ura_hama', text:'Taro lånade en liten båt och rodde ut på öppet hav.\n"Det som är dyrbart hör hemma på en dyrbar plats."\nVarsamt lade han sitt tamatebako på vågorna.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Då kom samma sköldpadda fram under vågorna\noch tog asken på sin rygg.\n"Taro. Det är kanske det allra bästa svaret."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'Minnen finns kvar i bröstet, även om asken förblir stängd.\nTaro bestämde sig för att leva som fiskare igen, i den nya byn.\nHavet glittrar än i dag.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ---- Stanna kvar ---- */
  un1:{art:'ura_otohime', text:'"Låt mig stanna här en liten stund till. Men..."\nSom om hon såg ända in i hans hjärta nickade prinsessan Otohime stilla\noch förde Taro fram till vattenspegeln.', next:'un2'},
  un2:{art:'hime_ryugu', text:'I vattenspegeln syntes det kära huset i byn.\nBåde far och mor skrattade och såg friska ut.\n"Vi kan vaka över dem härifrån ibland.\nOch när du vill träffa dem tar sköldpaddan dig dit när som helst."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Lugnad bestämde sig Taro för att stanna kvar i Drakpalatset.\nÄven långt ifrån varandra är en familj en familj, så länge man tänker på varandra.\nDagarna i Drakpalatset är lugna än i dag.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Prinsessan Otohimes saga ================= */

  h1:{art:'hime_ryugu', text:'Det här är sagan om prinsessan Otohime i Drakpalatset.\nEtt vackert slott, läcker mat, sång och dans.\nHon hade allt, och ändå hade Otohime lite tråkigt.', next:'h2'},
  h2:{art:'hime_ryugu', text:'Vad ska vi göra i dag?', choices:[
    {t:'Gå en promenad i korallträdgården', go:'h2r', set:{hlife:'sango'}},
    {t:'Gå och lyssna på valarnas sång', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'Från havet långt borta hördes valarnas djupa sång.\nEn stor, mild och lite ensam sång.'
    : 'Röda och skära koraller vajade över hela trädgården.\nSå vackert, men synd att det inte fanns någon att visa dem för.', next:'h3'},
  h3:{art:'hime_ryugu', text:'En dag kom sköldpaddan tillbaka i stor hast.\nSkalet blänkte blankt, och ögonen lyste.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Prinsessan, lyssna på mig!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Jag blev fångad på stranden, och då kom någon och räddade mig!"\nTaro, som bjöds in till slottet, var en människa som skrattade mycket.\nI Drakpalatset hördes skratt som aldrig hade hörts där förut,\noch de tråkiga dagarna fick färg.', next:'h5'},
  h5:{art:'ura_otohime', text:'Men en kväll under det tredje året:\n"Nu vill jag gärna få resa hem."\nDet snördes till i Otohimes bröst.\nHon ville hålla honom kvar. Men ett hjärta som tänker på sin familj får man inte hejda.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Jag vill hålla honom kvar.\nMen...'}, then:'h6'},
  h6:{art:'ura_tama', text:'Otohime gjorde i ordning en ask av blank svart lack.\nVad ska hon lägga i asken innan hon ger honom den?', choices:[
    {t:'Lägga in Taros glada dagar', go:'e_h_himitsu'},
    {t:'Lägga in magin "vi ses igen"', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Tre år i Drakpalatset är sjuhundra år på land.\nSom det var skulle Taro åldras på ett ögonblick.\nDärför stängde hon varsamt in den tid som runnit iväg i asken.\n"Så länge den är stängd förblir Taro precis den han är.\nHåll om asken när du sover, de ensamma nätterna."\nDet var hemligheten med tamatebako, som ingen kände till.\nOch så levde de lyckliga i alla sina dagar.'},
  hm1:{art:'hime_ryugu', text:'"Om du låter asken vara stängd, så ses vi helt säkert igen."\nMed den önskan inlagd räckte Otohime honom asken.\nOch från den dagen såg hon ner i vattenspegeln varje dag.', next:'hm2'},
  hm2:{art:'ura_fune', text:'Taro i vattenspegeln hade inte öppnat asken i dag heller,\nutan såg stilla ut över havet.\n"...Nu räcker det. Jag hämtar honom."\nOtohime lät sätta ut sin snabbaste båt.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Över det gyllene morgonhavet gled båten fram.\nRakt mot den som väntade.\nEtt löfte blir magi först när det finns både någon som håller det\noch någon som tror på det.\nOch så levde de lyckliga i alla sina dagar.'},

  /* ================= Sköldpaddans saga ================= */

  v1:{art:'kame_hama', text:'Det här är sagan om en havssköldpadda.\nDen älskade att sola sig, och den dagen låg den och halvsov på stranden.\nNär den vaknade var den omringad av barn.', next:'v2'},
  v2:{art:'kame_hama', text:'"Ni får inte plåga sköldpaddan!"\nEn fiskare med vänlig röst kom till undsättning\noch bar den varsamt tillbaka till havet.\nMedan den vaggade på vågorna fattade sköldpaddan ett fast beslut.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'Den här godheten ska jag gengälda!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'Tillbaka i Drakpalatset började sköldpaddan genast förbereda sig.\nVad ska den göra först?', choices:[
    {t:'Polera skalet tills det blänker', go:'v3r', set:{vlife:'migaku'}},
    {t:'Genast berätta för prinsessan', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'En gäst skulle rida på ryggen, så den måste blänka.\nDet färdigpolerade skalet lyste som en spegel.'
    : '"Vilken fin människa", sa prinsessan med ett leende.\n"Vi bjuder hit honom för att tacka honom."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Med prinsessans tillåtelse simmade sköldpaddan till stranden för att hämta honom.\n"Taro, som tack ska jag visa dig vägen till Drakpalatset."\nDet var första gången i dess liv som den bar en gäst på ryggen.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Stig upp på min rygg!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'Nu börjar färden till Drakpalatset.\nVilken väg ska vi ta?', choices:[
    {t:'Ta den hemliga genvägen', go:'v5r', set:{vmichi:'chika'}},
    {t:'Ta den allra vackraste vägen', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Vips gled den förbi tätt intill en väldig val.\n"Oj!" ropade Taro på ryggen.\nDen var lite stolt över sin genväg.'
    : 'Långsamt tog den sig genom korallskogen.\n"Så vackert", suckade Taro på ryggen.\nDen var lite stolt över utsikten.', next:'v6'},
  v6:{art:'ura_ryugu', text:'Gästen är välbehållet framme, och det stora uppdraget är slutfört.\nNå, vad ska vi göra nu?', choices:[
    {t:'Stanna i Drakpalatset och ta hand om honom', go:'e_v_senaka'},
    {t:'Återvända till stranden och vänta på honom', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'I tre år var sköldpaddan Taros alldeles egna riddjur.\nRyggen var alltid den bästa platsen i havet.\n"På din rygg sitter jag allra skönast."\nVarje gång han sa det blev skalet lite stolt.\nOch så levde de lyckliga i alla sina dagar.'},
  vm1:{art:'kame_hama', text:'Sköldpaddan återvände till stranden och väntade vid vattenbrynet varje dag.\nSköldpaddor lever mycket, mycket länge.\nOch hur lång tid som än går glömmer de aldrig ett viktigt löfte.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'Tiden gick, sjuhundra år.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'En morgon stod en välbekant människa på stranden.\n"Välkommen hem, Taro."\nPå den helt förändrade stranden var det bara en enda,\nbara sköldpaddan, som fortfarande mindes Taro.\nOch så levde de lyckliga i alla sina dagar.'}

  };

  Object.assign(T.SCENES_EN, URA_SV);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'Ångerns skrin',              h:'Den ursprungliga sagan från allra första genomspelningen'},
    {id:'u_tsuru',    n:'Taro som trana',             h:'När du går mot havet efter att ha öppnat asken ...'},
    {id:'u_akenai',   n:'Det oöppnade tamatebako',    h:'När du håller löftet och väntar på stranden ...'},
    {id:'u_umi',      n:'Skatten som gavs till havet', h:'När du ger tillbaka asken oöppnad till havet ...'},
    {id:'u_nokoru',   n:'Dagar i Drakpalatset',       h:'När du inte reser hem utan stannar lite till ...'},
    {id:'uh_himitsu', n:'Tamatebakos hemlighet',      h:'När du i Otohimes saga lägger in dagarna ...'},
    {id:'uh_mukae',   n:'Båten som hämtar',           h:'När du i Otohimes saga lägger in magin ...'},
    {id:'uv_senaka',  n:'Gästen på ryggen',           h:'När du i sköldpaddans saga stannar i palatset ...'},
    {id:'uv_matsu',   n:'Löftet på stranden',         h:'När du i sköldpaddans saga väntar på stranden ...'}
  );

})();
