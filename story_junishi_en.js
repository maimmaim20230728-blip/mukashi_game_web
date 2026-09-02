"use strict";
/* How the Twelve Animals Were Chosen - English scenario (same structure as story_junishi.js)
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published retelling
   (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var N12 = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Sheep','Monkey','Rooster','Dog','Boar'];

  var JUNISHI_EN = {

  /* ================= How the Twelve Animals Were Chosen ================= */

  ju1:{art:'ju_ofure', text:'This is the tale of how twelve animals came to give their names to the years.\nAt the end of a certain year, the god sent out a notice.\n"On the morning of New Year\'s Day, come to my palace. The first twelve to arrive, in order, shall give their names to the years."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'The animals each began to get ready.';
    if(f.first) return t;
    return t + '\nWhat shall they do to prepare?';
  }, choices:[
    {t:'Practice running', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Cook a feast and wait', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'The sheep pounded rice cakes, and the monkey gathered chestnuts.\nOn New Year\'s morning, everyone would share them.'
    : 'The tiger and the horse ran across the fields again and again.\nThe rabbit practiced hopping, hop, hop, hop.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'The cat had missed the date in the notice.\n"Say, Rat, when is it we go to the palace?"';
    if(f.first) return t + '\n"The morning of the second of January."\nThat is what the rat answered.';
    return t + '\nWhat does the rat answer?';
  }, choices:[
    {t:'"The morning of the second of January"', go:'ju4'},
    {t:'"The morning of the first of January"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'New Year\'s Eve.\n"I am slow on my feet. I had better set out now."\nAnd the ox began to walk the snowy road while it was still dark.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Slow and steady'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Off at nightfall!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Onto his back hopped the rat, light as a leaf.\nThe ox never noticed.\nSlowly, slowly, along the snowy road.';
    if(f.first) return t;
    return t + '\nWhat did the rat do on the way?';
  }, choices:[
    {t:'Slept on the ox\'s back', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Counted the stars', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'The winter sky was full of stars.\nThe rat counted them, one, two, three, and waited for morning.'
    : 'The ox\'s back was warm, and before long the rat was fast asleep.\nOnly the ox\'s footsteps went on along the snowy road.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Morning came.\nThe palace gate stood right before them.\nThe ox thought he had arrived first.';
    if(f.first) return t;
    return t + '\nWhat does the rat do?';
  }, choices:[
    {t:'Jump down and go in first', go:'juc_tobiori'},
    {t:'Stay on, and go in together with the ox', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Jumped down!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'At that moment the rat hopped down from the ox\'s back\nand slipped in through the gate ahead of him.\nThe god\'s voice spoke: "The first year shall be the Rat."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Rat'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Next, the ox passed through the gate.\n"The next year shall be the Ox."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Rat, Ox'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'The tiger came dashing in.\nThen the rabbit hopped through the gate.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'The dragon and the snake reached the gate at the very same moment.\n"After you," said the snake.\nThe dragon went in first, and the snake next.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tiger, Rabbit, Dragon, Snake'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'The horse came galloping, and the sheep followed.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'The monkey and the dog fell to quarreling on the road, and could hardly move forward.\nThe rooster stepped in between them.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'The palace first!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Urged on by the rooster, the monkey and the dog left off their quarrel.\nThe monkey, the rooster, and the dog passed through the gate, in that order.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Horse, Sheep, Monkey, Rooster, Dog'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'Last came the boar.\nHe could only run in a straight line,\nso he charged right past the gate, and had to come back.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Straight-ahead Boar!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'The twelfth was the Boar.\nAnd so the twelve names of the years were complete.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'The twelve names!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'The god spoke to the twelve.\n"From now on, each year in turn, you shall give the year your name."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'The next morning.\nThe cat arrived at the palace gate.\nThe gate was closed.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'...Hm?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'The god\'s voice spoke.\n"The day to come was yesterday. Go wash your face, and start again."';
    if(f.first) return t;
    return t + '\nWhat does the cat do?';
  }, choices:[
    {t:'Wash her face and go home', go:'ju18'},
    {t:'Wash her face and come to the gate once more', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'The cat washed her face.\nAnd from then on, whenever she saw the rat, she chased him.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, Boar.\nEach year in turn, the twelve animals gave the year their name.\nAnd they lived happily ever after.'},

  /* ---- On the ox's back ---- */
  jua1:{art:'ju_mon', text:'The rat did not jump down.\nStill riding on the ox\'s back, they passed through the gate together.\n"Two at once, is it?" said the god\'s voice.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"The ox should go first," said the rat.\n"The rat should go first," said the ox.\nThe god laughed.\n"Then the first year shall be the Rat, and the next the Ox.\nIn return, you two shall help each other with your years."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'And so in the year of the Rat the ox helps, and in the year of the Ox the rat helps,\neach with the other\'s work.\nThe order never changed. But it was one morning, shared by two.\nAnd they lived happily ever after.'},

  /* ---- A greeting every year ---- */
  jub1:{art:'ju_neko_kao', text:'The cat washed her face and went to the gate once more.\n"I have washed my face."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'The god\'s voice spoke.\n"There are only twelve names for the years.\nBut every New Year\'s Day, come and pay your greeting."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'From then on, every New Year\'s morning, the cat goes to the palace to pay her greeting.\nShe does not give her name to a year.\nBut the palace gate opens for her.\nAnd they lived happily ever after.'},

  /* ---- In the land across the sea ---- */
  juu1:{art:'ju_nezuneko', text:'"The morning of the first of January."\nThe cat said "Thank you," and went to bed early that night.', next:'juu2'},
  juu2:{art:'ju_kake', text:'New Year\'s morning.\nThe rat on the ox\'s back, the ox slow and steady, the tiger at full speed.\nAnd at the gate, the rabbit and the cat arrived at the very same moment.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'At the same time?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'The god thought for a while, and then spoke.\n"Here, this year shall belong to the Rabbit.\nIn the land across the sea, let this year belong to the Cat."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'And that is why, even today, in lands across the sea\nthere are places where the Cat gives her name to a year.\nThe same tale, but in a different land, the names are different too.\nAnd they lived happily ever after.'},

  /* ================= The Cat's Tale ================= */

  jn1:{art:'jneko_hinata', text:'This is the tale of one cat.\nShe heard there had been a notice from the god, but she missed the date.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'Who should she ask?', choices:[
    {t:'Ask the rat', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Ask the dog', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"January... the first, I think? The rat knows better," said the dog.\nSo the cat asked the rat.\n"The morning of the second of January," the rat answered.'
    : '"The morning of the second of January," the rat answered.\n"Thank you," said the cat.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'The morning of the second of January.\nThe cat went to the palace gate.\nThe gate was closed.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'...Yesterday?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"The day to come was yesterday. Go wash your face, and start again."\nSo spoke the god\'s voice.\nWhat does the cat do?', choices:[
    {t:'Wash her face and go home', go:'jna1'},
    {t:'Curl up in the sun', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'The cat washed her face.\nThe water was cold.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'What the cat thought after washing her face\nis not written in this tale.\nThe cat washed her face. That is all.\nThe end.'},
  jnh1:{art:'jneko_hinata', text:'The cat went to a sunny spot.\nShe curled up and closed her eyes.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'There are cats who chase rats, and there are cats who sleep in the sun.\nWhat this cat is thinking now, only the cat knows.\nThe end.'},

  /* ================= The Mouse's Tale ================= */

  jz1:{art:'jnezumi_ana', text:'This is the tale of one rat.\nWhen he heard the god\'s notice, the rat thought:\n(With my legs, I could never keep up, however fast I ran.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'Night, in his burrow. What should he do?', choices:[
    {t:'Think about the road to the palace', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Sleep early and be ready for morning', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'The rat burrowed into the straw and went to sleep early.\nEven in his dreams, he could see the palace gate.'
    : 'The rat traced the road to the palace in his head, again and again.\nIt was a long way. I need someone\'s back, he thought.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"When is it we go to the palace?" asked the cat.\n"The morning of the second of January," the rat answered.', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'On New Year\'s Eve, the rat hopped onto the ox\'s back.\nThe ox never noticed.\nWhat does the rat do?', choices:[
    {t:'Ride along in silence', go:'jzu1'},
    {t:'Speak to the ox', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'In the morning, at the gate, the rat jumped down.\nThe first year was the Rat.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'The rat did not tell the cat the true day.\nWhy, only the rat knows.\nAnd the rat gave his name to the very first year.\nThe end.'},
  jzs1:{art:'ju_senaka', text:'"Ox, thank you for carrying me."\nThe ox turned round in surprise.\n"Oh, it\'s you, Rat. You weigh nothing. Ride on, then."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'At the gate, the ox said,\n"Go on, quick. Go and get your name."\nThe rat jumped down and passed through the gate.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'The first year was the Rat. The next, the Ox.\nAnd the rat never forgot the ox who lent him his back.\nAnd they lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_EN);

  T.ZK_EN.push(
    {section:'How the Twelve Animals Were Chosen'},
    {id:'ju_seishi',  n:'The Twelve Names',              h:'The tale as it is told, from your very first read'},
    {id:'ju_ushi',    n:"On the Ox's Back",              h:'At the gate, stay on instead of jumping down...'},
    {id:'ju_kao',     n:'A Greeting Every Year',         h:'Wash your face and come to the gate once more...'},
    {id:'ju_umi',     n:'In the Land Across the Sea',    h:'When the rat tells the true day...'},
    {id:'jn_asa',     n:'The Next Morning',              h:"In the Cat's Tale, wash your face and go home..."},
    {id:'jn_hinata',  n:'The Cat in the Sun',            h:"In the Cat's Tale, curl up in the sun..."},
    {id:'jz_uso',     n:'The Day of the Lie',            h:"In the Rat's Tale, ride along in silence..."},
    {id:'jz_senaka',  n:'The Day I Borrowed a Back',     h:"In the Rat's Tale, speak to the ox..."}
  );

})();
