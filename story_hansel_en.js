"use strict";
/* Hansel and Gretel - English scenario (same structure as story_hansel.js)
   The classic rhyme is quoted verbatim from Margaret Hunt's translation (1884, PD):
   "Nibble, nibble, gnaw, / Who is nibbling at my little house?" / "The wind, the wind, / The heaven-born wind."
   Character names use the common modern spelling (Gretel), not Hunt's "Grethel". */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var HANSEL_EN = {

  /* ================= Hansel and Gretel ================= */

  hg1:{art:'hg_ie', text:'This is the tale of a woodcutter\'s family who lived at the edge of a great forest.\nHansel and his little sister Gretel\nlived with their father and their stepmother, the four of them together.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'That year, a famine spread across the land.\nBread grew dear, and the food in the woodcutter\'s house dwindled day by day.';
    if(f.first) return t;
    return t + '\nToday there is just one small loaf. How shall they share it?';
  }, choices:[
    {t:'Split it evenly, all four', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel gives his sister the bigger piece', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"I\'m not hungry anyway."\nHansel quietly slid his share onto Gretel\'s plate.'
    : 'They broke the little loaf into four and ate together.\n"Maybe tomorrow we can buy a bigger one."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'That night, the children heard their stepmother\'s voice.\n"Tomorrow morning we will take the children deep into the forest and leave them there.\nOtherwise all four of us will starve."\nTheir father said no, again and again.\nBut in the end, he nodded without a word.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel began to cry.\n"Don\'t worry. I have a plan."\nHansel slipped outside and gathered white pebbles in the moonlight.';
    if(f.first) return t + '\nHe filled his pockets to the brim.';
    return t + '\nWhich pebbles should he gather?';
  }, choices:[
    {t:'The round, white ones', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'The ones that shine brightest in the moon', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'He tested pebble after pebble, choosing the ones that gleamed like silver.\nHe filled his pockets to the brim.'
    : 'He filled his pockets to the brim with perfectly round white pebbles.\nBack inside, he whispered to Gretel, "It\'s all right now."', next:'hg5'},

  hg5:{art:'hg_mori', text:'The next morning, the family set off into the forest.\nAs he walked, Hansel dropped the pebbles one by one.\nDeep in the woods, their father built a fire.\n"Rest here. We\'ll come back for you later."\nBefore long, the two children fell asleep.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'When they woke, it was pitch dark.\nGretel began to cry.\n"Let\'s wait for the moon," said Hansel.\nAnd when at last the moon rose over the forest...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'The pebbles shine!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'Pebbles gleaming like silver stretched all the way home, one after another.\nHand in hand, the two walked through the night until morning.', next:'hg8'},

  hg8:{art:'hg_ie', text:'Their father wept and held them tight.\nTheir stepmother said nothing at all.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'But the famine went on.\nOne night, they heard that voice again.\nThis time the door was locked, and they could not get out.';
    if(f.first) return t + '\nHansel decided to crumble the bread he would be given in the morning, and mark the way with it.';
    return t + '\nWhat should he do?';
  }, choices:[
    {t:'Mark the way with breadcrumbs in the morning', go:'hg10'},
    {t:'Slip out the window and gather pebbles', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'On the way into the forest, Hansel let the crumbs fall, bit by bit.\nOnce again, the two fell asleep beside the fire.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'When the moon rose, not a single crumb was left.\nThe birds of the forest had eaten every one.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'They walked and walked.\nOne night, two nights, and then the third morning.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'Their tummies were empty, their legs worn out.\nJust then, up on a branch, a bird as white as snow was singing.', next:'hg13'},

  hg13:{art:'hg_tori', text:'The bird flew on ahead, leading them deeper and deeper into the forest.\nAnd when they came out into a clearing...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'A house made of sweets!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Walls of bread, a roof of cake, and windows of clear sugar.\nThe whole house was food.';
    if(f.first) return t + '\nHansel bit into the roof, Gretel into a window, and they ate and ate.';
    return t + '\nWhere shall they start?';
  }, choices:[
    {t:'The cake on the roof', go:'hg14r', set:{hokashi:'yane'}},
    {t:'The sugar windows', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'The sugar window broke with a crack and melted on their tongues.\n"I\'ve never tasted anything so good."'
    : 'The cake on the roof tasted of honey.\n"I\'ve never tasted anything so good."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Nibble, nibble, crunch.\nThen a thin voice came from inside the house.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Nibble, nibble, gnaw, who is nibbling at my little house?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'The children answered:\n"The wind, the wind, the heaven-born wind."\nAnd they went right on eating.', next:'hg17'},

  hg17:{art:'hg_majo', text:'The door opened, and out came an old woman leaning on a stick.\n"Oh my, what dear little guests. Do come in."\nMilk and pancakes, apples and nuts.\nIn little white beds, the two slept soundly.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'But that old woman...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...was a witch.\nThe witch had red eyes and could not see far.\nBut she had a keen sense of smell, like the beasts.\nWhen a child came near, she knew it by the scent.', next:'hg19'},

  hg19:{art:'hg_ori', text:'In the morning, Hansel was shut in a cage.\n"I\'ll fatten you up, and then I\'ll eat you."\nGretel was made to fetch water and cook.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Every morning the witch said,\n"Stick out your finger. Are you getting fat?"\nAnd instead of a finger, Hansel held out a little bone.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'It\'s a bone!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'The dim-eyed witch was fooled again and again.\nFour weeks went by, and at last she lost all patience.\n"Fat or thin, I\'ll eat you tomorrow morning."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'The witch lit the oven.\n"Climb in and see whether it is hot enough yet."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel VS the Witch!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel saw what the witch had in mind.';
    if(f.first) return t + '\n"I don\'t know how. How do I get in?"';
    return t + '\nWhat should she do?';
  }, choices:[
    {t:'Say "I don\'t know how"', go:'hg24'},
    {t:'Grab the cage key and run', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Silly child. Just watch me, like this!"\nAnd the witch put her own head into the oven. At that very moment...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'SLAM!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel gave the witch a push into the oven and slammed the iron door shut.\nAnd that was the end of the witch.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel opened the cage.\n"Hansel, we\'re safe!"\nInside the house stood chests full of pearls and jewels.';
    if(f.first) return t + '\nThe two filled their pockets with jewels.';
    return t + '\nWhat should they take home?';
  }, choices:[
    {t:'Fill their pockets with jewels', go:'hg27'},
    {t:'Fill a sack with food from the shelves', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'Walking through the forest, they came to a wide stretch of water.\nNo bridge, no boat.\nThen a white duck came swimming toward them.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Little duck, please!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Little duck, little duck, here stand Gretel and Hansel.\nNo bridge, no boat. Please carry us on your white back."\n"Both at once would be too heavy. Let\'s go one at a time," said Gretel.\nAnd the duck carried them across, one after the other.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Beyond a forest they knew, they saw their dear old home.\nTheir father saw them and wept.\nTheir stepmother was no longer there.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'Pearls and jewels tumbled from their pockets, and their father\'s eyes went wide.\nFrom that day on, they never wanted for food again.\nAnd the three of them lived together, happily ever after.'},

  /* ---- Pebbles once more ---- */
  hk1:{art:'hg_koishi', text:'Hansel slipped quietly out through the window\nand filled his pockets with white pebbles in the moonlight.', next:'hk2'},
  hk2:{art:'hg_mori', text:'The next day, left deep in the forest, the two did not panic.\nWhen the moon rose, the pebbles shone all the way home.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Never again. I promise."\nTheir father made his vow before the two of them.\nTheir stepmother, that night, sat silent with her head bowed.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'That winter, the house stayed poor.\nBut they shared each loaf four ways, and waited for spring.\nAnd the witch of the sweet house they never met at all.\nAnd they lived happily ever after.'},

  /* ---- Across the river ---- */
  hkw1:{art:'hg_kamado', text:'Gretel grabbed the key and let Hansel out of the cage.\n"Run!"\nThe dim-eyed witch came after them, sniffing the air.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'At the water\'s edge waited a white duck.\n"One at a time! Two would sink me."\nThe duck carried Gretel across, and then Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'The witch reached the bank too.\n"Duck, duck, carry me as well!"\nBut the witch was far too heavy, and the duck would not budge.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'On the far bank, the witch could only stamp her feet.\nHand in hand, the two walked home.\nNo one went into the oven, and no one was eaten.\nAnd they lived happily ever after.'},

  /* ---- The village's winter ---- */
  hgm1:{art:'hg_takara', text:'Gretel looked at the shelves.\nFlour, honey, walnuts, apples.\n"This is better than jewels."\nThe two stuffed a sack full of food.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Hugging the heavy sack, they reached the water.\nThe white duck carried them and their sack across, one at a time.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'Back in the village, the famine had not ended.\nThe two shared everything they had brought, all through the village.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'That winter, the flour from the sweet house became the village\'s bread.\nUntil spring came and the fields sprouted green, no one went hungry.\nAnd they lived happily ever after.'},

  /* ================= The Witch's Tale ================= */

  hw1:{art:'majo_daidokoro', text:'This is the tale of a witch who lived deep in the forest.\nEvery day she baked bread and made sweets,\nand built them into walls and a roof, house-building without end.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'What shall she bake today?', choices:[
    {t:'Sweet cookies', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Walnut bread', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'The walnut bread came out golden brown.\nBut there was no one to eat it.\nThe witch stacked it into the wall.'
    : 'The sweet cookies came out crisp and golden.\nBut there was no one to eat them.\nThe witch laid them along the roof.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'One day, she heard a nibbling sound.\nSomeone was eating her house.\nThe witch\'s red eyes could not see far.\nBut her nose caught the scent of children.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Who is nibbling at my little house?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"The wind, the heaven-born wind,"\nanswered two sweet little voices.\nThe witch opened the door. And then...', choices:[
    {t:'Fatten them up and eat them', go:'hwm1'},
    {t:'Cook them a feast', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'On the table: fresh-baked bread and milk.\n"Delicious!" "Delicious!" the two said, again and again.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...Delicious?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'It had been so very long since the witch had heard that word.\nSomeone was eating what she had made.\nThe witch cried, quietly, where no one could see.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'From then on, guests came now and then to the house of sweets.\nThe witch still bakes bread and makes sweets today.\nBut now, for the people who will eat them.\nAnd they lived happily ever after.'},

  hwm1:{art:'hg_ori', text:'She put Hansel in a cage. Every morning: "Stick out your finger."\nBut the witch\'s eyes could not tell a bone from a finger.\n"Still so thin..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Why won\'t you get FAT?!'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'Out of patience, the witch lit the oven.\n"See whether it is hot enough yet."\n"I don\'t know how," said Gretel.\nSo the witch stuck her own head in.\n...She could not see a thing.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"It\'s pitch black in here! Somebody hold the door!"\nWhile the witch wriggled about, the two children ran away.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'The witch crawled out of the oven and made up her mind.\n"I shall buy spectacles."\nThe next morning, stick in hand, she set off for town.\nWhat the witch saw through her new spectacles is another story altogether.\nAnd they lived happily ever after.'},

  /* ================= The White Bird's Tale ================= */

  hb1:{art:'tori_sora', text:'This is the tale of a bird as white as snow, who lived in the forest.\nOne morning, on the forest path, there lay a trail of breadcrumbs.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Such tasty-looking crumbs. What to do?', choices:[
    {t:'Eat just one', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Eat until full', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'Just one, she meant.\nBut the other birds came too, and soon every crumb was gone.'
    : 'The other birds came too, and in no time every crumb was gone.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'That night, the bird saw them:\ntwo children wandering the forest, searching for something.\n"They\'re looking for... the crumbs we ate."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'It\'s my fault'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'The bird thought hard.\nWhat could she do, right now?', choices:[
    {t:'Find the way home from the sky and lead them', go:'hbp1'},
    {t:'Warn them about the sweet house with a song', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'The bird flew high.\nFrom up there, the woodcutter\'s house was just over the way.\nShe flew low ahead of the children, showing them the path.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"That bird... it\'s like she\'s saying \'follow me.\'"\nThe two walked after the bird.\nAnd when they came out of the forest, there was the smoke of their own dear chimney.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'The bird who ate the breadcrumbs\ngave the children back their way home instead.\nMaking amends begins with what you can do.\nAnd they lived happily ever after.'},

  hbu1:{art:'hg_tori', text:'The bird knew.\nThe house of sweets deep in the forest, and its mistress too.\nShe perched on a branch and sang:\n"Nibble the walls, but never go in."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'Don\'t go inside!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'The children understood the song.\nThey nibbled a little of the wall to fill their tummies,\nand when the door opened, they did not go in, but slipped back to the forest path.\nThe white bird flew off toward home.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'The bird who knew about the house of sweets\nkept singing from her branch, ever after:\na song of warning, for any child lost in the forest.\nAnd they lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_EN);

  T.ZK_EN.push(
    {section:'Hansel and Gretel'},
    {id:'hg_seishi',  n:"The White Duck's Way Home",  h:'The original tale, from your very first read'},
    {id:'hg_koishi',  n:'Pebbles Once More',           h:'On the second night, slip out the window...'},
    {id:'hg_kawa',    n:'Across the River',            h:'At the oven, choose to run...'},
    {id:'hg_mura',    n:"The Village's Winter",        h:'Bring home food instead of jewels...'},
    {id:'hw_okyaku',  n:'The Very First Guests',       h:"In the Witch's Tale, cook them a feast..."},
    {id:'hw_megane',  n:'Red Eyes and Spectacles',     h:"In the Witch's Tale, try to fatten them up..."},
    {id:'hb_pankuzu', n:'Who Ate the Breadcrumbs',     h:"In the White Bird's Tale, lead them from the sky..."},
    {id:'hb_uta',     n:'A Song of Warning',           h:"In the White Bird's Tale, warn them with a song..."}
  );

})();
