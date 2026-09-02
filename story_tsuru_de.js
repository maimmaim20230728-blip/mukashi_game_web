"use strict";
/* Der Kranich, der die Freundlichkeit erwiderte - German scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var TSURU_DE = {

  /* ================= Der Kranich, der die Freundlichkeit erwiderte ================= */

  ts1:{art:'ts_yuki_wana', text:'Dies ist die Geschichte von einem Kranich, der an einem Schneetag gerettet wurde.\nAn einem Wintertag ging ein alter Mann in die Stadt, um Brennholz zu verkaufen.\nUnterwegs fand er einen Kranich, der in einer Falle saß.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Falle gelöst!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'Der alte Mann löste die Falle und ließ den Kranich frei.\nMit großen Flügelschlägen flog der Kranich in den verschneiten Himmel.';
    if(f.first) return t;
    return t + '\nWas kauft er in der Stadt, bevor er nach Hause geht?';
  }, choices:[
    {t:'Reis kaufen', go:'ts2r', set:{tslife:'kome'}},
    {t:'Ein Bonbon kaufen', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'Von dem Geld für das Brennholz kaufte der alte Mann ein kleines Bonbon.\nEin Mitbringsel für die alte Frau.'
    : 'Von dem Geld für das Brennholz kaufte der alte Mann ein wenig Reis.\nGenug für das Abendessen an diesem Tag.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'In dieser Nacht schneite es weiter.\nKlopf, klopf. Jemand klopfte an die Tür.\nEin Mädchen in einem weißen Kimono stand im Schnee.\n"Ich habe mich verirrt. Darf ich eine Nacht bleiben?"', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Bitte lasst mich bleiben'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'Der alte Mann und die alte Frau setzten das Mädchen an die Feuerstelle.\nDas Mädchen arbeitete fleißig, und viele Tage lebten sie zusammen.\n"Bitte lasst mich hier bleiben."\nDie beiden begannen, das Mädchen wie ihre eigene Tochter anzusehen.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'Eines Tages sagte das Mädchen:\n"Bitte kauft mir Garn. Ich werde am Webstuhl weben.\nSolange ich webe, öffnet bitte die Papiertür nicht."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Klipp-klapp, klapper-klapp'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'3 Tage und 3 Nächte klang der Webstuhl aus der Kammer.\nAm Morgen des 4. Tages kam das Mädchen mit einem weißen Tuch heraus.\nEs war weiß wie Schnee und glänzte.', next:'ts7'},

  ts7:{art:'ts_machi', text:'Der alte Mann brachte es in die Stadt, und das Tuch wurde teuer verkauft.\nIn diesem Winter wurde es warm im Haus.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Wir sind dankbar...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Ich webe noch ein Tuch", sagte das Mädchen.\nWieder 3 Tage und 3 Nächte klang der Webstuhl aus der Kammer.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Klipp-klapp, klapper-klapp'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'Auch das 2. Tuch wurde teuer verkauft.\nAber das Gesicht des Mädchens war blasser als zuvor.\n"Ich webe noch ein Tuch", sagte das Mädchen.';
    if(f.first) return t;
    return t + '\nWas tut der alte Mann?';
  }, choices:[
    {t:'Sagen: "Bitte, webe es"', go:'ts10'},
    {t:'Sagen: "Du musst nicht mehr weben"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'Das 3. Tuch.\nDer Webstuhl klang langsamer als zuvor.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Klipp... klapper...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'Die alte Frau blieb vor der Kammer stehen.\n(Ob es dem Mädchen gut geht?)\n(Es hat kein Garn. Was webt es da nur?)';
    if(f.first) return t + '\nDie alte Frau öffnete die Papiertür ein kleines Stück.';
    return t + '\nWas tut die alte Frau?';
  }, choices:[
    {t:'Die Papiertür ein wenig öffnen', go:'ts12'},
    {t:'Nur etwas rufen und weggehen', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Hinter der Papiertür saß ein Kranich.\nMit den eigenen Federn webte der Kranich am Webstuhl.\nDie Federn waren ein wenig weniger geworden.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'In dieser Nacht setzte sich das Mädchen vor die beiden.\n"Ich bin der Kranich, der an einem Schneetag gerettet wurde.\nMeine wahre Gestalt ist gesehen worden.\nIch kann nicht mehr in der Gestalt eines Mädchens bleiben."';
    if(f.first) return t;
    return t + '\nWas tun die beiden?';
  }, choices:[
    {t:'Schweigend Abschied nehmen', go:'ts14'},
    {t:'Die Tür öffnen und zum Himmel schauen', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'Das Mädchen nahm wieder die Gestalt eines Kranichs an und flog in den verschneiten Himmel.\nDer alte Mann und die alte Frau schauten noch lange, lange in den Himmel.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'Der Kranich, in den Himmel'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'Der Kranich, der an einem Schneetag gerettet wurde, kehrte in den Himmel zurück.\nIm Haus blieben 2 weiße Tücher und ein Webstuhl mit unfertiger Arbeit.\nEnde.'},

  /* ---- Du musst nicht mehr weben ---- */
  tsm1:{art:'ts_kaoiro', text:'"Du musst nicht mehr weben. 2 Tücher sind genug."\nSo sagte der alte Mann.\nDas Mädchen schwieg eine Weile und antwortete dann: "Ja."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'Der Winter ging zu Ende, und der Frühling kam.\nAm Himmel riefen Kraniche.\n"Ich bin der Kranich, der an einem Schneetag gerettet wurde. Meine Schar ruft mich."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'Das Mädchen nahm wieder die Gestalt eines Kranichs an und flog zu seiner Schar.\nIm Haus blieben 2 weiße Tücher.\nDer alte Mann und die alte Frau schauten dem Frühlingshimmel nach.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Ein Winter ohne Blick ---- */
  tsn1:{art:'ts_nozoku', text:'"Streng dich nicht zu sehr an."\nDie alte Frau rief es von außen durch die Papiertür und ging von der Kammer weg.\nVon drinnen kam ein "Ja".', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'Das 3. Tuch wurde fertig.\nEs war das schönste von allen.\nDas Gesicht des Mädchens war immer noch blass.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Der Frühling kam, und am Himmel riefen Kraniche.\n"Ich bin der Kranich, der an einem Schneetag gerettet wurde.\nFedern habe ich keine mehr. Meine Schar ruft mich."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'Der alte Mann und die alte Frau nahmen an der Tür Abschied von dem Mädchen.\nAuch ohne einen Blick kam der Abschied.\nAber in diesem Abschied gab es kein einziges Geheimnis.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Das Fenster öffnen ---- */
  tsd1:{art:'ts_mado', text:'Am nächsten Morgen öffnete der alte Mann die Tür.\nAm klaren Himmel ein einzelner Kranich.\nDer Kranich zog einmal einen Kreis über dem Haus und flog in die Ferne.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'Die beiden winkten.\nOb der Kranich sich noch einmal umgesehen hat, weiß niemand.\nAber dass er einen Kreis über dem Haus zog, haben die beiden immer behalten.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte des Kranichs ================= */

  tz1:{art:'ts_yuki_wana', text:'Dies ist die Geschichte von einem Kranich.\nAn einem Schneetag saß er in einer Falle und konnte sich nicht bewegen.\nEin alter Mann kam vorbei und löste die Falle.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'Der Kranich wollte die Freundlichkeit erwidern.\nIn welcher Gestalt soll er gehen?', choices:[
    {t:'Als Mädchen im weißen Kimono', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Als Mädchen auf der Reise', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'Der Kranich nahm die Gestalt eines reisenden Mädchens mit einem Strohhut an\nund klopfte in einer Schneenacht an die Tür des Hauses.'
    : 'Der Kranich nahm die Gestalt eines Mädchens im weißen Kimono an\nund klopfte in einer Schneenacht an die Tür des Hauses.', next:'tz3'},
  tz3:{art:'tz_hane', text:'Um am Webstuhl zu weben, braucht man die eigenen Federn.\nFedern gibt es nicht unbegrenzt.\nDer Kranich webte und zählte dabei die Federn.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Nur noch so viele'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Während das 3. Tuch entstand, öffnete sich die Papiertür ein wenig.\nWas tut der Kranich?', choices:[
    {t:'Weiterweben', go:'tzh1'},
    {t:'Den Webstuhl anhalten und zum Himmel schauen', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'Der Kranich webte bis zum Ende.\nDie Federn waren deutlich weniger geworden.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'Die wahre Gestalt war gesehen worden, und so verließ der Kranich das Haus.\nWarum er bis zum Ende webte, steht in dieser Geschichte nicht.\nEnde.'},
  tzs1:{art:'tz_sora_ie', text:'Der Kranich hielt den Webstuhl an und sah durch das Fenster in den Himmel.\nEs war ein Frühlingshimmel.\nIn dieser Nacht verließ der Kranich das Haus.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Vom Himmel aus war das Haus klein, und ein einziges Licht brannte darin.\nDer Kranich sah dieses Licht eine Weile lang an.\nEnde.'},

  /* ================= Der Winter der alten Frau ================= */

  tb1:{art:'ts_irori', text:'Dies ist die Geschichte von einer alten Frau.\nDas Mädchen, das in einer Schneenacht kam, arbeitete viel und lachte viel.\nDie alte Frau konnte gar nicht anders, als das Mädchen zu lieben.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Was tut die alte Frau, während das Mädchen webt?', choices:[
    {t:'Eine warme Suppe kochen', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Das Feuer nicht ausgehen lassen', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'Die alte Frau legte immer wieder Holz nach, damit das Feuer nicht ausging.\nDamit die Kammer nicht kalt wurde.'
    : 'Die alte Frau kochte eine warme Suppe und stellte sie vor die Papiertür.\nAm Morgen war die Schale leer.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Nach dem 2. Tuch war das Gesicht des Mädchens blass geworden.\nDie alte Frau ging immer wieder vor der Kammer auf und ab.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'Ich soll nicht hinsehen, aber...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'Wenn jemand sagt "sieh nicht hin", will man hinsehen.\nUnd erst recht, wenn man sich Sorgen macht.\nWas tut die alte Frau?', choices:[
    {t:'Die Papiertür öffnen', go:'tbk1'},
    {t:'Sich vor die Kammer setzen und warten', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Hinter der Papiertür saß ein Kranich.\nDie alte Frau schob die Papiertür leise wieder zu.\nAber was sie gesehen hatte, ließ sich nicht mehr zurücknehmen.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'Das Mädchen wurde wieder zum Kranich und flog davon.\nDen Wunsch hinzusehen hat jeder Mensch.\nNiemand in dieser Geschichte nennt das falsch.\nEnde.'},
  tbh1:{art:'tb_hata_nokori', text:'Die alte Frau setzte sich vor die Kammer und hörte dem Webstuhl zu.\nKlipp-klapp. Klapper-klapp.\nSo blieb sie bis zum Frühling.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Nachdem das Mädchen im Frühling gegangen war, blieb der Webstuhl in der Kammer.\nDie alte Frau ließ den Webstuhl, wie er war, und öffnete die Kammer jeden Tag.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, TSURU_DE);

  T.ZK_EN.push(
    {section:'Der Kranich, der die Freundlichkeit erwiderte', note:'In japanischen Märchen gibt es viele Geschichten, in denen jemand fortgeht, sobald die wahre Gestalt bekannt ist: ein Kranich, eine Schlange, eine Nachtigall. Es sind keine Geschichten von Strafe.'},
    {id:'ts_seishi',    n:'Der Kranich im Schnee',        h:'Die Geschichte, wie sie erzählt wird, schon beim ersten Mal'},
    {id:'ts_mou',       n:'Du musst nicht mehr weben',    h:'Wenn der alte Mann vor dem 3. Tuch etwas sagt...'},
    {id:'ts_nozokanai', n:'Ein Winter ohne Blick',        h:'Wenn die alte Frau nur ruft und weggeht...'},
    {id:'ts_mado',      n:'Das Fenster öffnen',           h:'Wenn man in der Abschiedsnacht die Tür öffnet und zum Himmel schaut...'},
    {id:'tz_hane',      n:'Die Zahl der Federn',          h:'Wenn man in der Geschichte des Kranichs bis zum Ende weiterwebt...'},
    {id:'tz_sora',      n:'Das Haus vom Himmel aus',      h:'Wenn man in der Geschichte des Kranichs den Webstuhl anhält und zum Himmel schaut...'},
    {id:'tb_kokoro',    n:'Der Wunsch hinzusehen',        h:'Wenn man in der Geschichte der alten Frau die Papiertür öffnet...'},
    {id:'tb_hata',      n:'Der unfertige Webstuhl',       h:'Wenn man in der Geschichte der alten Frau vor der Kammer wartet...'}
  );

})();
