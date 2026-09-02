"use strict";
/* The Crane Who Returned a Kindness - English scenario (same structure as story_tsuru.js)
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var TSURU_EN = {

  /* ================= The Crane Who Returned a Kindness ================= */

  ts1:{art:'ts_yuki_wana', text:'This is the tale of a crane who was saved on a snowy day.\nOne winter day, an old man was on his way to town to sell firewood\nwhen he found a crane caught in a trap.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Trap undone!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'The old man undid the trap and set the crane free.\nWith a great beat of her wings, the crane flew off into the snowy sky.';
    if(f.first) return t;
    return t + '\nWhat does he buy in town before heading home?';
  }, choices:[
    {t:'Buy some rice', go:'ts2r', set:{tslife:'kome'}},
    {t:'Buy a piece of candy', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'With the money from the firewood, the old man bought one small piece of candy.\nA present for the old woman.'
    : 'With the money from the firewood, the old man bought a little rice.\nEnough for tonight\'s supper.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'That night, the snow kept on falling.\nKnock, knock. Someone was at the door.\nA girl in a white kimono stood in the snow.\n"I have lost my way. Please, may I stay just one night?"', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Please let me stay'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'The old man and the old woman sat the girl down beside the hearth.\nShe worked hard, and the days went by with the three of them together.\n"Please let me stay here with you."\nAnd the two came to think of her as their own daughter.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'One day the girl said,\n"Please buy me some thread. I will weave on the loom.\nWhile I am weaving, please do not open the paper door."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Clack-clack, clatter-clack'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'For three days and three nights, the sound of the loom went on behind the door.\nOn the fourth morning, the girl came out with a bolt of white cloth.\nIt was as white as snow, and it shone.', next:'ts7'},

  ts7:{art:'ts_machi', text:'The old man took it to town, and it sold for a fine price.\nThat winter, the house was warm.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'We are blessed...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Let me weave one more," said the girl.\nAgain, for three days and three nights, the loom sounded behind the door.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Clack-clack, clatter-clack'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'The second cloth, too, sold for a fine price.\nBut the girl\'s face had grown paler than before.\n"I will weave one more," she said.';
    if(f.first) return t;
    return t + '\nWhat does the old man do?';
  }, choices:[
    {t:'Say "Thank you, please do"', go:'ts10'},
    {t:'Say "You need not weave any more"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'The third cloth.\nThe sound of the loom was slower than before.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Clack... clatter... clack...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'The old woman stopped outside the room.\n(Is that child all right?)\n(She has no thread. What can she be weaving?)';
    if(f.first) return t + '\nThe old woman slid the paper door open, just a little.';
    return t + '\nWhat does the old woman do?';
  }, choices:[
    {t:'Slide the door open, just a little', go:'ts12'},
    {t:'Call out to her, and step away', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Beyond the door sat a crane.\nShe was weaving with her own feathers.\nHer feathers had grown a little fewer.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'That night, the girl sat down before the two of them.\n"I am the crane you saved on that snowy day.\nYou have seen what I truly am.\nI can no longer stay in the form of a girl."';
    if(f.first) return t;
    return t + '\nWhat do the two of them do?';
  }, choices:[
    {t:'See her off in silence', go:'ts14'},
    {t:'Open the door and look up at the sky', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'The girl became a crane once more, and flew off into the snowy sky.\nThe old man and the old woman watched the sky for a long, long time.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'Into the sky'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'The crane saved on a snowy day returned to the sky.\nIn the house remained two white cloths, and a loom with its weaving unfinished.\nThe end.'},

  /* ---- You need not weave any more ---- */
  tsm1:{art:'ts_kaoiro', text:'"You need not weave any more. Two cloths are plenty."\nSo said the old man.\nThe girl was quiet for a while, and then she answered, "Yes."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'Winter ended, and spring came.\nFrom the sky came the cry of cranes.\n"I am the crane you saved on that snowy day. My flock is calling me."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'The girl became a crane once more, and flew off to join her flock.\nIn the house remained two white cloths.\nThe old man and the old woman watched her go into the spring sky.\nAnd they lived happily ever after.'},

  /* ---- A winter without looking ---- */
  tsn1:{art:'ts_nozoku', text:'"Don\'t push yourself too hard, now."\nThe old woman called through the paper door, and stepped away from the room.\nFrom inside came a small "Yes."', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'The third cloth was finished.\nIt was the most beautiful of the three.\nThe girl\'s face was still pale.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Spring came, and from the sky came the cry of cranes.\n"I am the crane you saved on that snowy day.\nI have no feathers left to weave with. My flock is calling me."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'The old man and the old woman saw the girl off at the door.\nEven without looking, the parting came.\nBut in that parting, there was not a single secret.\nAnd they lived happily ever after.'},

  /* ---- Open the window ---- */
  tsd1:{art:'ts_mado', text:'The next morning, the old man opened the door.\nIn the clear sky, a single crane.\nShe circled once above the house, and flew away into the distance.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'The two of them waved.\nWhether the crane looked back, no one can say.\nBut that she circled once above the house, they remembered always.\nAnd they lived happily ever after.'},

  /* ================= The Crane's Tale ================= */

  tz1:{art:'ts_yuki_wana', text:'This is the tale of one crane.\nOn a snowy day, she was caught in a trap and could not move.\nAn old man passing by undid the trap for her.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'The crane wished to return the kindness.\nIn what form should she go?', choices:[
    {t:'A girl in a white kimono', go:'tz2r', set:{tzlife:'musume'}},
    {t:'A girl on a journey', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'The crane took the form of a traveling girl in a wide straw hat,\nand on a snowy night, she knocked at the door of the house.'
    : 'The crane took the form of a girl in a white kimono,\nand on a snowy night, she knocked at the door of the house.', next:'tz3'},
  tz3:{art:'tz_hane', text:'To weave on the loom, she used her own feathers.\nFeathers do not last forever.\nThe crane counted them as she wove.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Only this many left'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'While she was weaving the third cloth, the paper door slid open a little.\nWhat does the crane do?', choices:[
    {t:'Keep weaving', go:'tzh1'},
    {t:'Stop the loom and look at the sky', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'The crane wove to the very end.\nHer feathers had grown much fewer.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'Her true form had been seen, so the crane left the house.\nWhy she wove to the very end is not written in this tale.\nThe end.'},
  tzs1:{art:'tz_sora_ie', text:'The crane stopped the loom and looked out the window at the sky.\nIt was a spring sky.\nThat night, she left the house.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Seen from the sky, the house was small, with a single light burning.\nThe crane watched that light for a while.\nThe end.'},

  /* ================= The Old Woman's Winter ================= */

  tb1:{art:'ts_irori', text:'This is the tale of one old woman.\nThe girl who came on a snowy night worked hard and laughed often.\nThe old woman could not help but love her.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'While the girl is weaving, what does the old woman do?', choices:[
    {t:'Make a warm soup', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Keep the hearth fire burning', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'The old woman kept adding wood so the hearth fire would not go out.\nSo that the room would not grow cold.'
    : 'The old woman made a warm soup and set it outside the paper door.\nBy morning, the bowl was empty.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'After the second cloth, the girl\'s face had grown pale.\nThe old woman walked back and forth outside the room, again and again.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'She said not to look, but...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'When someone says "don\'t look," you want to look.\nAll the more when you are worried.\nWhat does the old woman do?', choices:[
    {t:'Open the paper door', go:'tbk1'},
    {t:'Sit outside the room and wait', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Beyond the door sat a crane.\nThe old woman slid the door quietly shut.\nBut what she had seen could not be unseen.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'The girl became a crane once more, and flew away.\nEveryone has a heart that wants to look.\nNo one in this tale calls that wrong.\nThe end.'},
  tbh1:{art:'tb_hata_nokori', text:'The old woman sat down outside the room and listened to the loom.\nClack-clack. Clatter-clack.\nShe stayed there until spring.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'After the girl left in spring, the loom remained in the room.\nThe old woman left it just as it was, and opened the room every day.\nAnd they lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, TSURU_EN);

  T.ZK_EN.push(
    {section:'The Crane Who Returned a Kindness', note:'Many Japanese folk tales end with someone leaving once their true form has been seen: a crane, a snake, a nightingale. These are not tales of punishment.'},
    {id:'ts_seishi',    n:'The Crane on a Snowy Day',      h:'The tale as it is told, from your very first read'},
    {id:'ts_mou',       n:'You Need Not Weave Any More',   h:'Before the third cloth, the old man says something...'},
    {id:'ts_nozokanai', n:'A Winter Without Looking',      h:'When the old woman only calls out, and steps away...'},
    {id:'ts_mado',      n:'Open the Window',               h:'On the night of parting, open the door and look up...'},
    {id:'tz_hane',      n:'Counting Feathers',             h:"In the Crane's Tale, keep weaving to the end..."},
    {id:'tz_sora',      n:'The House Seen from the Sky',   h:"In the Crane's Tale, stop the loom and look at the sky..."},
    {id:'tb_kokoro',    n:'The Heart That Wants to Look',  h:"In the Old Woman's Winter, open the paper door..."},
    {id:'tb_hata',      n:'The Unfinished Loom',           h:"In the Old Woman's Winter, wait outside the room..."}
  );

})();
