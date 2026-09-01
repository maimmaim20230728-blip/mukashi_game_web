"use strict";
/* The Three Little Pigs - English scenario (same structure as story_kobuta.js)
   The classic lines are quoted verbatim from Joseph Jacobs, "English Fairy Tales" (1890, PD):
   "Little pig, little pig, let me come in." / "No, no, by the hair of my chiny chin chin." /
   "Then I'll huff, and I'll puff, and I'll blow your house in." */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var KOBUTA_EN = {

  /* ================= The Three Little Pigs ================= */

  p1:{art:'buta_hajimari', text:'This is the tale of three little pig brothers.\nThe big little pig, the middle little pig, and the small little pig.\nThey had all grown up, so each decided to build a house of his own.', next:'p2'},

  p2:{art:'buta_hajimari', text:'The morning of the big send-off. What shall we say to Mother?', choices:[
    {t:'A cheerful "Off we go!"', go:'p2r', set:{plife:'genki'}},
    {t:'"We\'ll bring you something tasty!"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"I\'ll be looking forward to it," said Mother with a smile.\nHer waving hand went on waving for a long, long time.'
    : '"Off you go!" said Mother, just as cheerfully.\nSent off by her bright voice, their steps felt light as feathers.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'The road split into three.';
    if(f.first) return t + '\nThe three brothers waved to each other, and each walked his own way.';
    return t + '\nNow, what shall they do?';
  }, choices:[
    {t:'Each takes his own road', go:'p4'},
    {t:'Build one house, all three together', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'The big little pig met a man carrying a great bundle of straw.\n"Please, may I have that straw?"\nA straw house can be finished in a single day.\nBeing quick to build... that is its very best point.', next:'p5'},

  p5:{art:'buta_eda', text:'The middle little pig met a man with an armful of sticks.\n"Please, may I have those sticks?"\nA stick house lets the breeze blow through, nice and cool.\nThat is its very best point.', next:'p6'},

  p6:{art:'buta_renga', text:'The small little pig met a man pulling a cart of bricks.\n"Please, may I have those bricks?"\nA brick house takes time, but it is wonderfully sturdy.\nThat is its very best point.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Bang! Clang! Bang! Clang!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Three houses stood finished.\nA house of straw, a house of sticks, and a house of bricks.\nEach one, a house to be proud of.';
    if(f.first) return t;
    return t + '\nWhat shall they do first in their brand-new houses?';
  }, choices:[
    {t:'Show off the houses to each other', go:'p7r', set:{plife2:'miseai'}},
    {t:'Take a break and have some tea', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'Tea after a hard day\'s work tastes extra special.\n"Tomorrow, let\'s visit each other\'s houses!"'
    : '"Yours went up so fast!" "Yours is so breezy!" "Yours is so sturdy!"\nEvery house had its own best point, sure enough.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'Just then...\ndown from the mountain came a very hungry wolf,\nand stopped right in front of the house of straw.';
    return 'Just then...\nthe small little pig spotted a wolf far away, coming down the mountain path.\nWhat should they do?';
  }, choices:[
    {t:'Stay put and keep watching', go:'pc_vs'},
    {t:'Warn the others and gather in the brick house', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Pigs VS Wolf!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'The wolf knocked on the house of straw.\n"Little pig, little pig, let me come in."\n"No, no, by the hair of my chiny chin chin."\n"Then I\'ll huff, and I\'ll puff, and I\'ll blow your house in."', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'HUFF... PUFF!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'The house of straw went whirling up into the air!\nThe big little pig tumbled out and ran for his life,\nstraight into his brother\'s house of sticks.', next:'p11'},

  p11:{art:'buta_eda', text:'The wolf came chasing right behind.\n"Little pig, little pig, let me come in."\nThis time two voices answered together:\n"No, no, by the hair of my chiny chin chin."', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'HUFF HUFF... PUFF!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'The house of sticks went flying every which way!\nThe two pigs ran as fast as their legs could carry them,\nstraight into the small little pig\'s house of bricks.', next:'p13'},

  p13:{art:'buta_naka', text:'"We\'re safe in here.\nThis house took time to build, and it\'s wonderfully sturdy."\nThe small little pig turned the key in the door, click.', next:'p14'},

  p14:{art:'buta_renga', text:'"Little pig, little pig, let me come in."\n"NO, NO, BY THE HAIR OF MY CHINY CHIN CHIN!" cried all three together.\nThe wolf took a great, deep breath.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'...It will not budge!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Huff and puff as he might, the brick house would not budge.';
    if(f.first) return t + '\nPanting and wheezing, the wolf looked up at the chimney on the roof.';
    return t + '\nThe hungry wolf thought up his next move.';
  }, choices:[
    {t:'Try to climb down the chimney', go:'p16'},
    {t:'Try to lure a pig out with sweet words', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'The wolf climbed onto the roof and swung a leg into the chimney.\nBut inside the house, the pigs saw it all coming.', next:'p17'},

  p17:{art:'buta_nabe', text:'At the bottom of the chimney, on the hearth, sat a great big pot.\nBubble, bubble, bubble. Full to the brim with boiling water.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'SPLASH!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"HOT HOT HOT HOT!!"\nWith a scalded bottom, the wolf ran off\nto the mountain as fast as he could go.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'The wolf never came calling again.\nAnd from time to time the three brothers gathered together\nover a pot of warm soup.\nAnd they lived happily ever after.'},

  /* ---- The true English tale (Jacobs 1890: the three tricks) ---- */
  pg1:{art:'buta_renga', text:'The wolf made his voice soft and sweet.\n"Say, little pig. There\'s a lovely turnip field just outside the village.\nShall we go together tomorrow morning, at six o\'clock?"\nThe small little pig knew at once. (This is a trick.)\n"All right. Six o\'clock it is."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Heh heh... six o\'clock!'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'The next morning the small little pig got up at five,\nand came home with his turnips before the wolf ever arrived.\nWhen the wolf came at six, he could not believe it.\n"I\'ve already been! I picked a whole pot\'s worth of turnips."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'WHAT?! Already been?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Next came an invitation to an apple tree. "I\'ll come for you at five."\nThe small little pig set out at four. But while he was still up in the tree,\nthe wolf arrived below.\n"I\'ll toss you the very best one!"\nThe small little pig threw an apple far, far away,\nand while the wolf ran to fetch it, slipped down and scampered home.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Last came an invitation to the town fair. "Let\'s go at three."\nThe small little pig went before noon, and bought a butter churn.\nOn the way home, he looked down the hill... and there was the wolf, climbing up.\nSo the small little pig climbed into the churn.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'ROLL ROLL ROLL!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Down the hill rolled the churn, pig and all, faster and faster!\nThe wolf saw a great round something come thundering at him,\nand was so frightened he turned tail and ran.', next:'pg6'},
  pg6:{art:'buta_renga', text:'When the wolf later learned the truth, he was furious.\n"That does it! I\'ll come down the chimney!"\nBut inside the house, the pigs saw it all coming.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'On the hearth, the great pot was bubbling away as always.\nA piping-hot soup, chock-full of those very turnips.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'SPLASH!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"HOT HOT HOT HOT!!"\nBadly scalded, the wolf fled deep, deep into the mountains,\nand was never, ever seen again.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'The turnip field, the apple tree, and the butter churn.\nThis is the path closest to the old tale as England tells it.\nAnd the clever small little pig lived long and happily ever after.'},

  /* ---- Three together from the start ---- */
  pk1:{art:'buta_renga', text:'"Let\'s build one house together... a really, really sturdy one!"\nAt the small little pig\'s suggestion, the three began hauling bricks.\nEven heavy bricks are easy when there are three of you.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Three little beds under one roof.\nA fine house it was, with a hearth and windows and all.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Along came the hungry wolf,\nand took a great, deep breath.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'...It will not budge!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'The wolf huffed and puffed until the sun went down,\nthen dragged himself back to the mountain, worn to a frazzle.\nA house built with all your strength together is the sturdiest house of all.\nAnd they lived happily ever after.'},

  /* ---- Watchful and ready ---- */
  pn1:{art:'buta_michi', text:'"The wolf is coming!"\nThe small little pig dashed to his brothers\' houses,\nand the three hurried into the brick house together.', next:'pn2'},
  pn2:{art:'buta_naka', text:'Peeking out the window, they watched the wolf blow down the house of straw.\n"Nobody home?!"\nThen he blew down the house of sticks.\n"Empty here too?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Last he huffed and puffed at the brick house. It would not budge.\nThe wolf was so worn out that he plopped down on the ground,\nas hungry as ever.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'A voice came from the window.\n"A visitor? Sorry, friend... we\'re closed for today."\nThe wolf trudged back to the mountain.\nBe ready, and you\'ll never be rattled. The three went back to their tea.\nAnd they lived happily ever after.'},

  /* ================= The Wolf's Tale ================= */

  pw1:{art:'pwolf_yama', text:'This is the tale of one wolf who lived in the mountains.\nFood had been terribly hard to find of late,\nand his tummy was always, always rumbling.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Where shall he look for food today?', choices:[
    {t:'Search near the river', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Search deep in the woods', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'The birds had beaten him to every berry in the woods.\nHis tummy went grrrumble.'
    : 'Not so much as a fish\'s shadow in the river.\nHis tummy went grrrumble.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Down at the foot of the mountain stood three brand-new houses.\nAnd from somewhere drifted a most delicious smell.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'I smell a feast coming!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Huffing and puffing was the wolf\'s special talent.\nHe blew down the straw house AND the stick house...\nbut the pigs slipped away every single time.', next:'pw5'},
  pw5:{art:'buta_renga', text:'That left the brick house. And it would not budge one bit.\nThe hungry wolf thought hard about his next move.', choices:[
    {t:'Lure them out with sweet words', go:'pw6'},
    {t:'Try being honest with them', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Invite them to the turnip field... beaten there first.\nInvite them to the apple tree... given the slip again.\nHe lay in wait on the road home from the fair, and just then...\nfrom the top of the hill came something big and round and...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'ROLL ROLL ROLL!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Rolling, thundering, faster and faster it came...\na great round something the wolf had never seen in all his life.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'A M-M-MONSTER!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'The wolf turned tail and ran all the way to the mountaintop.\n"Down there... there lives a great round monster..."\nAnd that story was told among the mountain wolves\nfor years and years and years to come.\nAnd they lived happily ever after.'},

  pwh1:{art:'buta_renga', text:'The wolf sat down in front of the door,\nand said in a very small voice:\n"...The truth is... I haven\'t eaten anything for days and days."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Inside the house, the three pigs looked at one another.\nThey did not open the door. But from the window came a voice:\n"Wait right there a minute."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Out through the window came a steaming bowl of vegetable soup,\nchock-full of turnips and potatoes.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'It\'s hot... huff on it first!'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'And so the wolf\'s famous huff and puff\nbecame not a power for blowing houses down,\nbut a power for cooling hot soup to just the right warmth.\nA special talent never has only one use.\nAnd they lived happily ever after.'},

  /* ================= The Brick House's Tale ================= */

  ps1:{art:'prenga_kamado', text:'This is the tale of one brick house.\nEvery brick is born in a kiln, baked slowly in the fire.\nThat is why a brick never crumbles at just a huff or a puff.', next:'ps2'},
  ps2:{art:'buta_renga', text:'One day, the small little pig came along\nand began laying the bricks, one careful row at a time.\nBang, clang. Little by little, the bricks became a house.\nWhat could be seen from its very first window?', choices:[
    {t:'The wide blue sky', go:'ps2r', set:{slife:'sora'}},
    {t:'The turnip field outside the village', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Beyond the window stretched the turnip field.\nWatching it grow a little every day became the house\'s quiet joy.'
    : 'White clouds drifted across a windowful of blue sky.\nBeing a house, thought the house, is a rather fine thing.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Then one day, the two big brothers came tumbling in,\nquite out of breath.\nOutside, it seemed, there was a wolf.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'This is MY moment'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'The wolf took a great, deep breath and blew with all his might.\nOnce. Twice. Three times.\nNot one brick in the walls so much as trembled.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'It will NOT budge!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'When the storm of a night had passed, the house thought to itself:\nfrom now on, what shall I treasure most of all?', choices:[
    {t:'Standing strong against wind and rain', go:'e_ps_mamoru'},
    {t:'Keeping the hearth lit and warm', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'On windy nights and rainy mornings, the house never budges an inch.\nIt knows exactly why it was born so sturdy.\nBecause inside, there are three little pigs worth protecting.\nAnd they lived happily ever after.'},
  pss1:{art:'buta_soup', text:'Winter came. Fire crackled in the hearth, and the pot simmered away.\nMother Pig came visiting too,\nand the whole house filled up with laughter.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'A house\'s job is to keep out the wind and the rain.\nBut its most important job of all\nis to keep the laughter safe and sound inside.\nListen... warm voices ring from the brick house today as well.\nAnd they lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_EN);

  T.ZK_EN.push(
    {section:'The Three Little Pigs'},
    {id:'pb_seishi',   n:'The Little Brick House',            h:'The familiar tale, from your very first read'},
    {id:'pb_genten',   n:'The True English Tale',             h:'When the wolf tries his sweet words...'},
    {id:'pb_kyoryoku', n:'Three Together from the Start',     h:'At the fork, choose to walk one road together...'},
    {id:'pb_sonae',    n:'Watchful and Ready',                h:'Spot the wolf while he is still far away...'},
    {id:'pw_taru',     n:'The Rolling Monster',               h:"In the Hungry Wolf's Tale, choose the sweet words..."},
    {id:'pw_fuufuu',   n:'The True Use of Huff and Puff',     h:"In the Hungry Wolf's Tale, choose honesty..."},
    {id:'ps_mamoru',   n:'Not Budging an Inch',               h:"In the Brick House's Tale, stand against the storm..."},
    {id:'ps_waraigoe', n:'A Vessel for Laughter',             h:"In the Brick House's Tale, light the hearth..."}
  );

})();
