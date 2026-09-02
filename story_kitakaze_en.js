"use strict";
/* The North Wind and the Sun - English scenario (same structure as story_kitakaze.js)
   Source: Aesop, Perry 46, from the Greek text (PD). English wording is original;
   only Townsend (1867) and Jacobs (1894) were consulted. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var KITAKAZE_EN = {

  /* ================= The North Wind and the Sun ================= */

  kz1:{art:'kz_sora', text:'This is the tale of the North Wind and the Sun.\nOne day, high in the sky, the North Wind and the Sun were quarreling.\n"I am the stronger." "No, I am."', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Which is stronger?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'That morning, a traveler left the village and set out along the road.\nWearing a coat, with a bag over one shoulder.';
    if(f.first) return t;
    return t + '\nWhat goes in the bag?';
  }, choices:[
    {t:'A flask of water', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Bread and an apple', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'In the bag: bread, an apple, and one more coat.\nIt looked like being a long road.'
    : 'In the bag: a flask of water, and one more coat.\nIt looked like being a long road.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'The North Wind and the Sun spotted the traveler.\n"Whoever makes that traveler take off the coat shall be the stronger."';
    if(f.first) return t + '\nThe North Wind went first.';
    return t + '\nWhat happens?';
  }, choices:[
    {t:'Compete. The North Wind goes first', go:'kz4'},
    {t:'Stop competing, and try working together', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'The North Wind blew hard from the very start.\nWhoosh!\nThe traveler held the collar of the coat.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Whoosh!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'The North Wind blew harder.\nWhoosh, whoosh!\nThe traveler gripped the coat tight with both hands.\n"So cold. I\'ll put on one more."\nOut of the bag came the second coat, and on it went, over the first.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Whoosh, whoosh!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'So cold...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'The North Wind blew with all its might.\nLeaves flew, and the sand of the road whirled up.\nStill the traveler did not let go of the coat.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Whooooosh!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'The North Wind grew tired.';
    if(f.first) return t + '\n"Sun, it\'s your turn now."\nAnd the North Wind handed the traveler over to the Sun.';
    return t + '\nWhat does the North Wind do?';
  }, choices:[
    {t:'"Sun, it\'s your turn now"', go:'kzc_kao_kk'},
    {t:'Go and fetch the clouds', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Your turn now'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'At first, the Sun shone only moderately.\nWarm and mild.\nThe traveler took off the extra coat and put it back in the bag.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Warm and mild...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'The Sun shone harder.\nBright and blazing.\nThe traveler began to sweat.';
    if(f.first) return t;
    return t + '\nWhat does the traveler do?';
  }, choices:[
    {t:'Keep walking', go:'kzc_poka2'},
    {t:'Step into the shade', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Blazing!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'The Sun shone harder still.\n"Hot. Too hot to bear."\nThe traveler took off the coat altogether and slung it over one shoulder.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Beside the road ran a river.\nThe traveler left the coat on the bank and jumped into the water.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Splash!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'The traveler bathed, and it looked wonderful.\nHigh in the sky, the North Wind and the Sun watched.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'The traveler never knew there had been a contest.\nThe coat dried on the bank, and the traveler walked on.\nThe end.'},

  /* ---- A fine day for laundry ---- */
  kzf1:{art:'kz_sentaku', text:'"Let\'s stop competing and try it together."\nThe North Wind blew, and the Sun shone.\nAll the laundry in the village was dry before noon.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'The traveler walked on comfortably, coat and all.\nThe wind was cool, and the sunshine warm.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'The villagers called that day "a fine day for laundry."\nWhich of the two was stronger, no one ever decided.\nAnd they lived happily ever after.'},

  /* ---- A rest in the shade ---- */
  kzk1:{art:'kz_kokage', text:'The traveler stepped into the shade of a big tree and sat down.\nThe coat stayed on.\nA drink of water, and a rest.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'The sun sank lower, and the air grew cool.\nThe traveler set off again, coat and all.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'High in the sky, the North Wind and the Sun looked at each other.\nThe contest was never settled.\nThe end.'},

  /* ---- When the clouds came ---- */
  kzu1:{art:'kz_kumo', text:'The North Wind went and fetched the clouds.\nThe sky darkened, and rain began to fall.\nThe traveler sheltered under a tree.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'When the rain stopped, the traveler set off again.\nThe coat stayed on.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'"Let\'s leave it there for today," said the Sun.\n"Another time," said the North Wind.\nThe end.'},

  /* ================= The North Wind's Tale ================= */

  kk1:{art:'kz_sora', text:'This is the tale of the North Wind.\nThe North Wind blows in from the northern sea.\nBlowing hard is the North Wind\'s work.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Where to blow today?', choices:[
    {t:'Over the sea', go:'kk2r', set:{kklife:'umi'}},
    {t:'Over the fields', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'The North Wind blew once across the fields.\nAll the grass turned the same way at once.'
    : 'The North Wind blew once across the sea.\nWhite waves rose up all at once.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'The contest to make the traveler take off the coat had not gone well.\nA little tired, the North Wind rested high up in the sky.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Blowing is what I do best'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'From the sky, you can see all sorts of things below.\nWhere does the North Wind go?', choices:[
    {t:'To the ships in the harbor', go:'kkh1'},
    {t:'To the flowers in the fields', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'In the harbor was a ship that could not move.\nThere was no wind, and its sails hung limp.\nThe North Wind blew gently into the sails.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'The sails filled, and the ship put out to sea.\nThe sailors waved up at the sky.\nAnd they lived happily ever after.'},
  kkt1:{art:'kk_nohara', text:'The flowers in the fields had gone to seed.\nThe North Wind lifted the seeds and carried them far away.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'The next spring, the same flowers bloomed on a faraway hill.\nSeeds the North Wind had carried.\nAnd they lived happily ever after.'},

  /* ================= The Sun's Tale ================= */

  kh1:{art:'kz_sora', text:'This is the tale of the Sun.\nThe Sun rises in the east in the morning and sets in the west in the evening.\nShining is the Sun\'s work.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'What to shine on first this morning?', choices:[
    {t:'The fields', go:'kh2r', set:{khlife:'hatake'}},
    {t:'The village roofs', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'The Sun shone on the village roofs.\nA cat on a roof stretched.'
    : 'The Sun shone on the fields.\nThe dew sparkled, and the sprouts grew.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'On the day of the contest, the Sun shone harder than usual.\nThe traveler jumped into the river, but the soil in the fields dried and cracked.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Perhaps I shone too hard'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'What does the Sun do?', choices:[
    {t:'Ask the clouds for some shade', go:'khk1'},
    {t:'Keep shining until sunset', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'The Sun asked a passing cloud.\n"Could you make a little shade over the fields?"\nThe cloud stopped above the fields.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'In the shade, the fields could breathe again.\nThere are things even the Sun cannot do.\nThe Sun never forgot the day it asked the clouds.\nAnd they lived happily ever after.'},
  khy1:{art:'kh_yuuhi', text:'The Sun kept shining until it sank behind the western hills.\nIt could see the traveler\'s back going over a distant rise.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Whether the traveler wore the coat or not, the Sun could no longer see.\nTomorrow, the Sun will rise again.\nThe end.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_EN);

  T.ZK_EN.push(
    {section:'The North Wind and the Sun', note:'In the old Greek text, this tale ends with the traveler bathing in a river. Which of the two won, the book does not say. The line "persuasion often works better than force" was added later by copyists. There is more than one way to read it.'},
    {id:'kz_seishi', n:'A Dip in the River',        h:'The tale as it is told, from your very first read'},
    {id:'kz_kokage', n:'A Rest in the Shade',       h:"On the Sun's turn, step into the shade..."},
    {id:'kz_futari', n:'A Fine Day for Laundry',    h:'Stop competing and try working together...'},
    {id:'kz_kumo',   n:'When the Clouds Came',      h:'When the North Wind fetches the clouds...'},
    {id:'kk_ho',     n:'Filling the Sails',         h:"In the North Wind's Tale, go to the harbor..."},
    {id:'kk_tane',   n:'Carrying the Seeds',        h:"In the North Wind's Tale, go to the fields..."},
    {id:'kh_kumo',   n:'Asking the Clouds',         h:"In the Sun's Tale, ask the clouds..."},
    {id:'kh_yuuhi',  n:'Until Sunset',              h:"In the Sun's Tale, keep shining until sunset..."}
  );

})();
