"use strict";
/* The Bremen Town Musicians - English scenario (same structure as story_bremen.js)
   Classic lines quoted from Margaret Hunt's translation (1884, PD, Gutenberg #5314):
   "I am going to Bremen, and shall be town-musician there" /
   "you can find something better than death everywhere" (to the rooster) /
   "And the mouth of him who last told this story is still warm." */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var BREMEN_EN = {

  /* ================= The Bremen Town Musicians ================= */

  br1:{art:'br_koya', text:'This is the tale of a donkey who worked for one master for many long years.\nAt the mill, he carried sacks of flour, day in and day out.\nBut he grew old, and his strength began to fail.', next:'br2'},

  br2:{art:'br_koya', text:'One day, the donkey realized something.\n(My master is thinking of how to stop feeding me.)\nSo the donkey left the mill.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'To Bremen!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"I am going to Bremen, and shall be town-musician there."\nSo the donkey decided, and set off along the road.';
    if(f.first) return t;
    return t + '\nWhich road shall he take?';
  }, choices:[
    {t:'The road along the river', go:'br3r', set:{brmichi:'kawa'}},
    {t:'The road between the fields', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'The wind blew freely along the road between the wheat fields.\nFor the first time in ages, the donkey walked carrying nothing at all.'
    : 'The sound of water followed the road along the river.\nFor the first time in ages, the donkey walked carrying nothing at all.', next:'br4'},

  br4:{art:'br_inu', text:'By the roadside lay a hunting dog,\npanting hard, as if he had run a very long way.\n"What\'s the matter? Why are you panting so?"', next:'br5'},

  br5:{art:'br_inu', text:'"I\'m old, and I can\'t keep up with the hunt anymore.\nSo my master meant to kill me.\nI ran away, but how am I to live now?"\n"I am going to Bremen to be a town-musician. Come along with me.\nI\'ll be the one on the lute, and you can keep the beat on the drum."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'The dog joins the band!!'}, then:'br6'},

  br6:{art:'br_neko', text:'A little farther on, a cat sat on a wall,\nwith a face as gloomy as three days of rain.', next:'br7'},

  br7:{art:'br_neko', text:'"I\'m old, and my teeth are worn,\nand I\'d rather sit by the fire than chase mice.\nSo my mistress meant to drown me in the river."\n"Then come to Bremen with us.\nWhen it comes to night music, no one can beat you."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'Night music...'}, then:'br8'},

  br8:{art:'br_ondori', text:'On a farmyard gate, a rooster was crowing with all his might.\n"That\'s quite a voice."\n"Tomorrow is Sunday, and guests are coming.\nI am to be made into soup.\nSo I\'m crowing while I still have a voice to crow with."', next:'br9'},

  br9:{art:'br_ondori', text:'"You can find something better than death everywhere. You have a good voice.\nMake music with us, and it is sure to come to something."\nThe rooster hopped down from the gate.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Cock-a-doodle-doo!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'Bremen could not be reached in a single day.\nWhen night fell, the four decided to rest in the forest.';
    if(f.first) return t + '\nThe donkey and the dog under a tree. The cat up on a branch. The rooster at the very top.';
    return t + '\nWhere shall they rest?';
  }, choices:[
    {t:'All together under the tree', go:'br10r', set:{brmori:'shita'}},
    {t:'Up on a high branch, keeping watch', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'The cat and the rooster climbed to a high branch.\nBelow, the donkey and the dog slept back to back.'
    : 'The four curled up together under a great tree.\nOnly the rooster climbed to the top before he slept.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'From the treetop, the rooster spotted a light far away.\n"There\'s a house over there. A light is burning."';
    if(f.first) return t + '\n"Let\'s go. The lodging here is none too good," said the donkey.';
    return t + '\nWhat should they do?';
  }, choices:[
    {t:'Go toward the house with the light', go:'br12'},
    {t:'Stay away, and spend the night in the forest', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'When they reached the house, the donkey peered in at the window.\n"What do you see?" asked the rooster.\n"A table laid with good things to eat,\nand robbers sitting around it, feasting."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"That is just what we need," said the rooster.\nThe four put their heads together and made a plan.', next:'br14'},

  br14:{art:'br_mado', text:'The donkey set his forefeet on the windowsill.\nThe dog jumped onto the donkey\'s back,\nthe cat climbed onto the dog,\nand at the very top perched the rooster.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'All together!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'And with that, they all burst in through the window at once.\nThe glass went crash!\n"A monster!" cried the robbers, and fled into the forest.', next:'br16'},

  br16:{art:'br_gochisou', text:'The four sat down at the table.\nThey ate as if they would not eat again for forty days, put out the light,\nand each found a place to sleep.\nThe donkey in the yard, the dog by the door, the cat by the hearth, the rooster on a beam.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Midnight.'}, then:'br17'},

  br17:{art:'br_yoru', text:'One of the robbers came back to see what had happened.\nThe house was quiet. In the kitchen, something glowed deep in the hearth.\n(Live coals, still burning.)\nSo he thought, and held out a match. And at that moment...', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'SCRATCH!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'The cat flew at his face and scratched him.\nThe robber ran for the back door. There waited the dog.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'CHOMP!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'As he dashed into the yard, the donkey gave him a kick with his hind legs.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'KICK!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Up on the roof, the rooster woke and crowed with all his might.\n"Cock-a-doodle-doo!"\nBut to the robber it sounded like:\n"Bring the rascal here to me!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'A witch! A judge!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'The robber fled back to the forest and told the others:\n"Don\'t go near that house. A witch lives there.\nShe spat in my face and raked it with her claws.\nSomeone was waiting by the door with a knife and got me in the leg.\nOut in the yard a great black thing clubbed me,\nand from the roof a judge kept yelling, \'Bring the rascal here to me!\'"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'From that day on, the robbers never came back.';
    if(f.first) return t;
    return t + '\nIn the morning, the four talked it over. What should they do?';
  }, choices:[
    {t:'Live in this house', go:'e_br_seishi'},
    {t:'Go on to Bremen after all', go:'brb1'},
    {t:'Decide what to do each morning in this house', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'The four musicians liked the house so well\nthat they never wanted to leave it.\nAnd the mouth of him who last told this story is still warm.\nAnd they lived happily ever after.'},

  /* ---- In the town of Bremen ---- */
  brb1:{art:'br_roba', text:'"This is a fine house. But we are musicians."\nThe four locked the door and took to the road once more.', next:'brb2'},
  brb2:{art:'br_bremen', text:'Bremen was big and bustling.\nAnd in the square, the town already had its musicians.\nTheir trumpets and drums gleamed.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'...Then, over here.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'In a corner of the square, the four raised their voices together.\nHee-haw, woof, meow, cock-a-doodle-doo.\nOne by one, the children gathered round.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'They had no gleaming instruments.\nBut every day, the children came to that corner of the square.\nIn a corner of the town, the four became musicians.\nAnd they lived happily ever after.'},

  /* ---- Morning in the forest ---- */
  brm1:{art:'br_mori', text:'"Best not to go near a house at night," said the donkey.\nThe four spent the night in the forest.', next:'brm2'},
  brm2:{art:'br_mori', text:'In the morning the rooster crowed, and everyone woke.\n"While we\'re at it, let\'s try one together."\nHee-haw, woof, meow, cock-a-doodle-doo.', next:'brm3'},
  brm3:{art:'br_roba', text:'Just then, a cart loaded with sacks of flour came rolling by.\nThe miller heard the donkey\'s voice and said,\n"What a fine voice. Come work at my mill. I\'ll feed you well."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'I am a musician.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'The donkey declined politely, and walked on with his friends.\nWhere they would end up, no one yet knew.\nThe song of the four rang out beautifully in the forest morning.\nAnd they lived happily ever after.'},

  /* ---- Each their own morning ---- */
  bra1:{art:'br_ie_asa', text:'Morning. What shall they do in this house?', choices:[
    {t:'The rooster crows the hour from the roof', go:'bra1r', set:{brasa:'ondori'}},
    {t:'The dog naps by the door', go:'bra1r', set:{brasa:'inu'}},
    {t:'The cat curls up by the hearth', go:'bra1r', set:{brasa:'neko'}},
    {t:'The donkey flicks his ears in the sun', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'The dog stretched out by the door.\nHe no longer had to chase anything at all.';
    if(f.brasa==='neko') return 'The cat curled up by the hearth.\nHer mouse-chasing days were over.';
    if(f.brasa==='roba') return 'The donkey stood in the sun and flicked his long ears.\nThere were no more sacks of flour on his back.';
    return 'The rooster climbed to the roof and crowed toward the eastern sky.\nNo one had asked him to.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'No one told them to.\nEach of them decided for themselves.\nToday too, the rooster crows the hour, the dog sleeps by the door,\nthe cat curls up by the hearth, and the donkey flicks his long ears in the sun.\nAnd they lived happily ever after.'},

  /* ================= The Robbers' Tale ================= */

  bd1:{art:'dorobou_mori', text:'This is the tale of three robbers who lived in a house in the forest.\nThat evening, as always, the table was laid with good things.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'What\'s for supper tonight?', choices:[
    {t:'Sausages and wine', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Bread, cheese and apples', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'They spread bread, cheese and apples across the whole table.\nThe three dug in, in fine spirits.'
    : 'They grilled sausages and poured the wine.\nThe three dug in, in fine spirits.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'Suddenly, outside the window, came a sound like nothing they had ever heard.\nHee-haw, woof, meow, cock-a-doodle-doo. All at once.\nAnd then the glass went crash!\n"A monster!"\nThe three fled into the forest.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'Deep in the forest, the three caught their breath.\n"What about the house?"', choices:[
    {t:'Go back and take a look', go:'bdg1'},
    {t:'Give the house up', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'One of them slipped back alone.\nThe kitchen was pitch dark.\nDeep in the hearth glowed two little fires.\n(Live coals, still burning.)\nHe held out a match, and...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'A witch!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'His face scratched, his leg stabbed, his back beaten with a club,\nand from the roof: "Bring the rascal here to me!"\nThe robber fled back to the forest.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"There\'s a witch, and a man with a knife, and a black monster, and a judge."\nNot one of them ever went near that house again.\nAnd what was really there, none of them ever knew.\nAnd they lived happily ever after.'},

  bdm1:{art:'dorobou_mori', text:'"That house belongs to them now."\nThe three walked toward the edge of the forest.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'In the town, the morning market was open.\nA sign read: "Porters wanted."\nThe three looked at one another.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'What the three did for a living from that day on\nis not written in this tale.\nIn the house in the forest, the song of the four rings on.\nThe end.'},

  /* ================= The Rooster's Tale ================= */

  bo1:{art:'ondori_yane', text:'This is the tale of a rooster who crowed on a farmyard gate.\nTomorrow is Sunday. Guests are coming, and I am to be made into soup.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'What to do on the last day?', choices:[
    {t:'Crow with all his might', go:'bo2r', set:{bolife:'naku'}},
    {t:'Take a slow walk around the yard', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'He walked slowly from one end of the yard to the other.\nA last look, he thought.'
    : 'On the gate, he crowed until his voice went hoarse.\nSome people covered their ears. He did not mind.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Just then, a donkey, a dog and a cat came along the road.\n"You can find something better than death everywhere. You have a good voice."\nThe rooster hopped down from the gate.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Is my voice really enough?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'At the house in the forest, the rooster perched at the very top.\nWhat came next was for the rooster to decide.', choices:[
    {t:'Crow from the roof at midnight', go:'bok1'},
    {t:'Live in this house and crow every morning', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'At midnight, he woke on the roof beam.\nBelow, a robber was thrashing about.\nThe rooster crowed with all his might.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Cock-a-doodle-doo!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'To the robber it sounded like "Bring the rascal here to me!"\nThe voice that was meant for the soup pot had guarded the house.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'How to use his voice, the rooster decides for himself.\nFrom then on, he crowed whenever he liked, however he liked.\nAnd they lived happily ever after.'},

  boa1:{art:'br_ie_asa', text:'Once they had settled into the house, the rooster climbed to the roof.\nNo one had asked him to.\nWhen the eastern sky turned pale, the rooster crowed.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'The dog woke, the cat stretched, and the donkey flicked his ears.\n"No soup pot for me. Every morning, I crow right here."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'At the rooster\'s voice, someone wakes.\nThat alone made the rooster glad.\nAnd they lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_EN);

  T.ZK_EN.push(
    {section:'The Bremen Town Musicians'},
    {id:'br_seishi', n:'The House They Liked',       h:'The original tale, from your very first read'},
    {id:'br_bremen', n:'In the Town of Bremen',      h:'In the morning, go on to Bremen after all...'},
    {id:'br_mori',   n:'Morning in the Forest',      h:'Stay away from the house with the light...'},
    {id:'br_asa',    n:'Each Their Own Morning',     h:'Decide what to do each morning in the house...'},
    {id:'bd_gokai',  n:'The Witch and the Judge',    h:"In the Robbers' Tale, go back for a look..."},
    {id:'bd_machi',  n:'Leaving the Forest',         h:"In the Robbers' Tale, give the house up..."},
    {id:'bo_koe',    n:'A Voice That Carried',       h:"In the Rooster's Tale, crow at midnight..."},
    {id:'bo_asa',    n:'Crowing in the Morning',     h:"In the Rooster's Tale, crow every morning..."}
  );

})();
