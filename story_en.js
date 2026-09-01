"use strict";
/* English scenario - same structure as story.js (scene ids, flags, transitions)
   Only the text differs. Style: simple picture-book English. */

const SCENES_EN = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Once upon a time, there lived an old man and an old woman.\nEvery day, the old man went to the hills to gather firewood, and the old woman went to the river to wash clothes.', next:'m2'},

m2:{art:'momo_river', text:'One day, as she was washing by the river, a great big peach came floating down the stream. Bobbing and rolling, closer and closer!', choices:[
  {t:'Carry it home', go:'m3a', set:{open:'home'}},
  {t:'Open it right here', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Heave-ho, heave-ho! Grandma carried the peach all the way home.\nTogether with Grandpa, she started to cut it open, and then...', next:'c_paka'},
m3b:{art:'momo_river', text:'Grandma just could not wait. She decided to open the peach right there on a river stone. And then...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'POP!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'Out jumped a healthy baby boy!\nGrandma hugged the baby and hurried home.\nFull of joy, she and Grandpa named him Momotaro, the Peach Boy.'
  : 'Out jumped a healthy baby boy!\nFull of joy, Grandma and Grandpa named the boy, who was born from a peach, Momotaro the Peach Boy.', next:'m5'},

m5:{art:'kids', text:'Momotaro loved playing with the children of the village.\nWhat shall we do today?', choices:[
  {t:'Sumo wrestling', go:'m5a', set:{hobby:'sumo'}},
  {t:'Running races', go:'m5b', set:{hobby:'run'}},
  {t:'Helping with chores', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Even the biggest kids went tumbling down, one after another.\n"He must be the strongest in the village!" everyone gasped.', next:'m6'},
m5b:{art:'kids', text:'Nobody anywhere could run faster than Momotaro.\nHe dashed like the wind and amazed them all.', next:'m6'},
m5c:{art:'kids', text:'Even the heaviest firewood was light as a feather in Momotaro\'s arms.\nGrandma and Grandpa were ever so grateful.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro grew up quickly, strong and kind.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'That night,\nsomething terrible happened in the village.'}, then:'m7'},
m7:{art:'village_sad', text:'The next morning, everyone learned the truth.\nThe ogres of Ogre Island had stolen the village treasure.\nThe villagers did not know what to do.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro stood up tall.\n"I will go to Ogre Island and bring back our treasure!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'Grandma made him the finest millet dumplings in all Japan.\nWith the dumplings at his belt, he was ready to go.'
  : 'Grandma offered to make him the finest millet dumplings in all Japan.\nNow, what should he do?', choices:[
  {t:'Ask for lots of dumplings', go:'m10', set:{dango:'full'}},
  {t:'Take just a few and travel light', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'On the morning of the journey,\nGrandma brought out two headbands.\nWhich one will you wear?', choices:[
  {t:'The white headband', go:'m10r', set:{band:'white'}},
  {t:'The red headband', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'He tied the red headband tight, and his heart burned bright and brave.\n"Off I go!"'
  : 'He tied the white headband tight, and his mind grew calm and clear.\n"Off I go!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'Ogres, here we come!!'}, then:'m11'},

m11:{art:'michi', text:'The road split in two.\nOne path went over the mountain. The other followed the sea.\nWhich way will you go?', choices:[
  {t:'Take the mountain path', go:'m11a', set:{road:'yama'}},
  {t:'Take the seaside path', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'From the top of the mountain, he saw a small black island far out at sea.\nThat must be Ogre Island...\nMomotaro clenched his fists.', next:'m12'},
m11b:{art:'umizoi', text:'He walked along the sandy beach, listening to the waves.\nAt his feet, he found a lovely peach-pink seashell.\nA perfect present for Grandma!', next:'m12'},

m12:{art:'dog', text:'As he walked along, a Dog came trotting up.\n"Momotaro, where are you going? Give me a millet dumpling, and I will come with you!"', choices:[
  {t:'Give him a dumpling', go:'c_dog_join', set:{dog:1}},
  {t:'"Sorry, friend, I\'m in a hurry"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'The Dog joins the team!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"I only have a few, but let\'s share half."\nThe Dog wagged his tail with joy!'
  : 'The Dog wagged his tail with joy!\n"I will follow you anywhere!"', next:'m13'},
m12n:{art:'dog', text:'The Dog looked a little sad as he watched Momotaro walk away.', next:'m13'},

m13:{art:'saru', text:'Next, a Monkey called down from a tree.\n"Give me a millet dumpling, and I will guide you on your way!"', choices:[
  {t:'Give him a dumpling', go:'c_saru_join', set:{saru:1}},
  {t:'"Sorry, friend, I must hurry on"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'The Monkey joins the team!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Even a little piece of dumpling made the Monkey jump for joy.\nHe slid down the tree and thumped his chest.'
  : 'The Monkey slid down the tree and thumped his chest.\n"Leave the path to me!"', next:'m14'},
m13n:{art:'saru', text:'The Monkey waved from the treetop as Momotaro walked on.', next:'m14'},

m14:{art:'kiji', text:'Then a Pheasant swooped down from the sky.\n"Give me a millet dumpling, and I will scout Ogre Island from above!"', choices:[
  {t:'Give him a dumpling', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Sorry, friend, I really must go"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'The Pheasant joins the team!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'The Pheasant ate his half-dumpling like it was a treasure.\nThen he spread his wings and circled happily in the sky.'
  : 'The Pheasant happily spread his wings and made a big circle in the sky.\n"Leave the sky to me!"', next:'m15'},
m14n:{art:'kiji', text:'The Pheasant made one big circle and flew away toward the mountains.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'At the harbor, they found a little boat.';
  if(n===0) t += '\nMomotaro had no friends with him, but his heart was set.';
  else if(n===1) t += '\nThe two of them climbed aboard together.';
  else t += '\nWith everyone aboard, the little boat was packed full!';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Set saaail!!'}, then:'m16'},

m16:{art:'fune_night', text:'The night sea was calm and quiet.\nUnder the starry sky, Momotaro thought to himself.', choices:[
  {t:'Remember the taste of Grandma\'s dumplings', go:'m17', set:{think:'dango'}},
  {t:'Think about the village treasure', go:'m17', set:{think:'takara'}},
  {t:'Wonder what ogres are really like', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'The sweet taste of the dumplings seemed to fill him with courage.\nTomorrow would surely go well.',
  takara:'He pictured the faces of everyone in the village.\nHe simply had to bring the treasure back.',
  oni:'Are they strong? Are they scary?\n...He would not know until he met them.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'In the morning light, the island grew closer and closer.';
  if(f.first) t += '\nThe Pheasant flew ahead and showed everyone the way.';
  else if(f.kiji) t += '\nThe Pheasant flew ahead to scout, and soon came back.\n"There is one big gate! And a hidden rocky path around the back!"';
  else t += '\nAt the bow of the boat, Momotaro looked straight at the island.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'There it is! Ogre Island!'}, then:'m19'},

m19:{art:'onigashima', text:'On the rocky island stood a huge black gate.\nNow, which way in?', choices:f=>[
  {t:'March in through the front gate', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Take the rocky path the Pheasant found', go:'m20', set:{gate:'back'}}
    : {t:'Circle the island and look for a way in', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro stood tall before the gate.\n"Ogres! I have come to take back the village treasure!"'
  : (f.kiji
    ? 'Following the Pheasant, they quietly climbed the rocky path.\nThe ogre guards had not noticed a thing.'
    : 'They found a narrow path between the rocks.\nClimbing quietly, they slipped inside. The guards had not noticed a thing.'), next:'m21'},
m21:{art:'onigashima', text:'Momotaro\'s heart went thump, thump.\nThis was it.', choices:[
  {t:'Take one deep breath', go:'m21r', set:{calm:1}},
  {t:'Charge right in', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'Breathe in... breathe out.\nHis heart grew calm and steady. All right. Let\'s go.'
  : 'Before he could even think, his legs were already running!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'The ground shook, and out came the Ogre Boss!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'WHO ARE YOU?!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Give back our treasure!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"I have come for the village treasure. My name is Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(Remembering the taste of those dumplings, he was not afraid at all.)',
    takara:'(The whole village is waiting. I cannot lose!)',
    oni:'(He is big. He looks strong. But... his eyes look a little sad.)'
  }[f.think] || '');
  t += '\nHow will you fight?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'All together, now!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Fight with the sword!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Dog, go!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Monkey, go!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Pheasant, go!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Put away the sword and talk', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'All together, NOW!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Dog\'s Big Bite!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Monkey\'s Scratch!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Pheasant\'s Peck!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'One Mighty Slash!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Dog\'s Charge!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Monkey\'s Quick Moves!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Pheasant\'s Dive!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'WHAT?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'Got him!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'The Dog bit his leg, the Monkey scratched his back, and the Pheasant pecked his head, flap-flap-flap!\nEven the mighty Ogre Boss could not stand against all three at once.\n"I give up! I give up!"\nTogether, they were unbeatable.', next:'m24'},
rk:{art:'maitta', text:f=>'Momotaro\'s sword flashed like lightning!\nThe Boss\'s iron club went flying high into the sky.\n"I-I give up!"\n' + HOBBY_LINE_EN(f), next:'m24'},
rd:{art:'maitta', text:'The Dog dashed in like the wind and CHOMP! He bit the Boss right on the leg!\nDown went the Boss with a great big thump.\n"I-I give up!"\nMomotaro smiled proudly. He had known he could count on the Dog.', next:'m24'},
rs:{art:'maitta', text:'The Monkey leaped and flipped and snatched the iron club right out of the Boss\'s hands!\n"I-I give up!"\nMomotaro clapped and cheered at the Monkey\'s amazing moves.', next:'m24'},
rj:{art:'maitta', text:'The Pheasant dove down from the sky! Flap-flap! He covered the Boss\'s eyes with his wings!\nThe Boss spun around dizzily. "I-I give up!"\nFriends from the sky are mighty friends indeed. Momotaro waved up high.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'The Ogre Boss hung his head and said he was sorry.\n"I will give the treasure back. Please forgive us..."';
  if(!f.first) t += '\nNow, what should Momotaro do?';
  return t;
}, choices:[
  {t:'Take the treasure home to the village', go:'e_gaisen'},
  {t:'Ask why the ogres stole it', go:'m25'}
]},
m25:{art:'talk', text:'The Ogre Boss spoke slowly, bit by bit.\n"Ogre Island is nothing but rock. Nothing grows here. We just could not let our children go hungry..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro did not draw his sword. He looked the Boss straight in the eye.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Let\'s talk first!!'}, then:'t2'},
t2:{art:'talk', text:'The Boss\'s eyes went wide. Then he spoke slowly, bit by bit.\n"Ogre Island is nothing but rock. Nothing grows here. We had no way to feed our children but to borrow your treasure..."\nMomotaro listened, and thought hard.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Share the millet dumplings with everyone', go:'e_kibi'});
  c.push({t:'Make a promise: return the treasure, and be friends', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Momotaro came home with a cart full of treasure.\nThe whole village cheered!\n';
  t += ({
    minna:'The Dog, the Monkey, and the Pheasant marched proudly at the front.\nThe tale of the three brave friends was told in the village for years and years.',
    katana:'The whole village talked and talked about Momotaro\'s mighty sword.',
    dog:'And who pulled the cart? The hero Dog, marching proudly at the front of the parade.',
    saru:'The Monkey carried the captured iron club on his shoulder, looking very pleased.',
    kiji:'The Pheasant circled the sky in celebration and let one beautiful feather drift down.'
  }[f.style] || '');
  if(f.shell) t += '\nMomotaro also gave Grandma the peach-pink seashell.\n"I can hear the sea!" she laughed.';
  t += '\nAnd they all lived happily ever after.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro took the treasure home, and in return, he sent rice and seed potatoes to Ogre Island.\nFrom the next spring on, the ogres came to help in the village fields.\nAnd at the village festival, ogre drums boomed merrily.';
  if(f.shell) t += '\nGrandma tapped her seashell along with the drums.';
  t += '\nAnd they all lived happily ever after.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"The treasure goes back. That is a promise."\nMomotaro and the Ogre Boss linked pinky fingers to seal the promise.\nFrom then on, Ogre Island and the village slowly became friends.\nAnd the villagers praised Momotaro, who had won without a single fight.';
  if(f.shell) t += '\nWhen he showed Grandma the seashell, she smiled from ear to ear.';
  t += '\nAnd they all lived happily ever after.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Here. The finest millet dumplings in all Japan. Let\'s share them."\nThe ogres ate the dumplings, and big tears rolled down their cheeks.\n"We have never tasted anything so good..."\nSo Momotaro and the ogres moved the rocks together and made a field.\nOf all the endings, this one is the strangest and the warmest.\nAnd they all lived happily ever after.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'This is the tale of Aka, a young ogre who lived on Ogre Island.\nOgre Island was nothing but rock. No matter how they tried, nothing would grow.', next:'o2'},
o2:{art:'oni_village', text:'Which chore should Aka do today?', choices:[
  {t:'Carry water up from below the cliff', go:'o2r', set:{owork:'mizu'}},
  {t:'Haul rocks out of the field', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Up and down the cliff path he went, again and again, hauling a heavy bucket.\nThe little ones were waiting at the top, their throats dry as sand.'
  : 'He heaved one rock aside, but the ground below was hard as stone.\nStill, Aka believed that someday, a field would grow right here.', next:'o3'},
o3:{art:'oni_dinner', text:'Dinner was nothing but thin rice porridge.\nAka\'s little brother Midori whispered,\n"Big brother... I\'m still hungry..."', choices:[
  {t:'"When spring comes, we\'ll eat plenty!"', go:'o3r', set:{care:'hagemasu'}},
  {t:'Share half of your own porridge', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"Your share tastes extra good, big brother!"\nMidori smiled a big smile.\nAka\'s tummy felt a little empty, but his heart felt warm.'
  : 'Midori gave a small nod and ate the rest of his porridge slowly, treasuring every bite.\nSpring was still a long way off.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'That night.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'The Ogre Boss gathered everyone and said,\n"We will borrow treasure from the village. Our children must survive the winter."\nAka\'s heart began to pound.\nWhat should he do?', choices:[
  {t:'"But that\'s stealing!"', go:'c_dorobo'},
  {t:'Stay quiet and follow along', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'That\'s stealing!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Everything went very, very quiet.\nThe Boss said nothing for a long, long time. Then...\n"Then what do you think we should do?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka thought as hard as he could.', choices:[
  {t:'Let\'s go and ask the village for help', go:'o7a'},
  {t:'Let\'s build a field with our own hands', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"We bow our heads and ask them to share their food. And in return, we help them with our ogre strength."\nThe Boss folded his big arms, and slowly, he nodded.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'The next day, the ogres sailed for the village.\nThey carried no weapons. Instead, they carried baskets of wild mountain grapes.\nIt took far more courage than stealing ever would.\nAnd what did the village say...?\nWell, that is another story.'},
o7b:{art:'oni_village', text:'"Let\'s move every last rock and make a field! We are ogres! We are strong enough!"\nFrom that day on, every ogre on the island hauled rocks.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Full Ogre Power!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'The rocks were as big as mountains, and the work never seemed to end.\nBut here is a strange thing: sweating together, side by side, did not feel hard at all.\nWhen spring came, tiny green sprouts appeared in the field.\nMidori jumped and hopped for joy.\nAnd they all lived happily ever after.'},

o5b:{art:'oni_raid', text:'That night, Aka rode in the boat with the Boss and the others.\nWhen they reached the village, he could not move from the boat.\nFar away, lanterns flickered. He thought he heard someone crying.', next:'o6b'},
o6b:{art:'oni_takara', text:'Even back on the island, Aka\'s heart would not stop pounding.\nStanding before the pile of treasure, he thought and thought.', choices:[
  {t:'Secretly return one piece of treasure', go:'o7c'},
  {t:'Do nothing, as the night goes by', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka took one small treasure and rowed out into the night sea.\nHe set it gently on the village beach, and just as he turned to go...\n"Mr. Ogre... did you come to give that back?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Spotted?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'A little girl stood there, watching him quietly.\nHeart pounding, Aka gave a tiny nod.\nThe girl smiled and whispered,\n"Thank you. It will be our secret."\nThe night was cold, but Aka\'s heart was toasty warm.'},

o7d:{art:'oni_night', text:'Aka could do nothing at all, and many nights went by.\nThen one evening, as he sat sleepless on the cliff, he saw a little boat far out at sea, coming closer and closer.\nWho could be aboard?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'Morning came.'}, then:'o8'},
o8:{art:'oni_village', text:'The whole island was in an uproar!\n"A human! A human with a headband is coming!"\nAka\'s heart gave a great thump.\nWhat should he do?', choices:[
  {t:'Hide Midori behind the rocks', go:'o9a', set:{guard:'midori'}},
  {t:'Run to the Boss\'s side', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Shhh. You\'ll be safe here."\nAka held Midori\'s little hand tight.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'The Boss gripped his iron club, glaring at the gate.\nSomehow, his back looked bigger than ever before.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'The battle was over in the blink of an eye.\nThe Boss\'s iron club went flying, and Aka watched from the shadows, holding his breath.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'I give up!!'}, then:'o11'},
o11:{art:'oyabun', text:'The young human in the headband put away his sword and began to talk with the Boss.\nMaybe, just maybe, now was the moment to speak up.\nWhat should Aka do?', choices:[
  {t:'Be brave. Step out of the shadows', go:'e_o_asa'},
  {t:'Stay hidden and watch them go', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"U-um! I can help carry the treasure back!"\nThe young human stared in surprise at the little ogre who had jumped out of the shadows.\nThen he broke into a great big smile.\n"Thank you. You are one brave ogre."\nThe morning sun shone warmly on them both.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'The courage to speak just would not come.\nThe boat full of treasure grew smaller and smaller across the sea.\nBut Aka made a promise to himself:\nnext time, he would say "thank you," and "I\'m sorry," too.\nAnd that "next time" was coming, sooner than he knew.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'This is one more tale: the tale of a single Pheasant who lived in the mountains.\nThe Dog was strong. The Monkey was a champion tree-climber.\nBut the Pheasant was small, and not strong at all...\nHe never had much confidence in himself.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Can these little wings\ndo anything at all?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Today, like always, a lonely stroll through the sky.\nWhere shall we fly?', choices:[
  {t:'Fly over the mountains', go:'k2r', set:{kfly:'yama'}},
  {t:'Fly out toward the sea', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'From high above, the village looked like a little toy box.\nPuffs of smoke rose gently from the chimneys, pop, pop.'
  : 'Over the sea, the wind blew hard, and his feathers rattled and shook.\nFar away, he spotted a small black island, all alone.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'One day, he spotted a curious parade walking down the road below.\nA young man in a headband, a Dog, and a Monkey.\nThey looked like they were having fun.', choices:[
  {t:'Be bold and call out to them', go:'k4a'},
  {t:'Watch a little longer from the sky', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'The Pheasant fluttered down, flap-flap, and called out with all his might.\n"P-please, may I come with you too?!"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'As he quietly followed from the sky, the young man noticed him and waved.\n"Hey, friend of the sky! Why not join us?"', next:'k5'},
k5:{art:'kiji_join', text:'"Here, have a millet dumpling."\nIt was so sweet, it nearly melted his beak.\n"I-in return, leave the sky to me!"\nsaid the Pheasant, in the biggest voice he could make.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'The Pheasant joins the team!!'}, then:'k6'},
k6:{art:'fune', text:'On the boat, the Pheasant realized something.\nHe was the only one who could fly over the sea.\nNot the Dog. Not the Monkey. Only him.', choices:[
  {t:'Fly high and see the whole island', go:'k6r', set:{kscout:'high'}},
  {t:'Fly low and scout the gate up close', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'From high in the sky, he could see the whole shape of the island.\nBehind the gate, he even spotted a narrow rocky path.\n"Everyone! There\'s a back way in!"'
  : 'He skimmed just above the waves, right up to the gate.\nHe counted the guards and checked how big their iron clubs were, every one.\n"Everyone! I know exactly what we\'re up against!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'The battle with the Ogre Boss began!\nThe Boss swung his iron club down at the Dog. WHOOSH!\nThe Pheasant\'s heart went THUMP.\nWhat should he do?', choices:[
  {t:'Dive at his eyes!', go:'c_kwaza1'},
  {t:'Shout a warning, loud as thunder!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Pheasant\'s Dive!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'WHAT?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Without thinking, the Pheasant dove right at the Boss\'s face.\nFlap-flap-flap! He covered the Boss\'s eyes with his wings!\nIn that moment, the Dog slipped free, and the Monkey snatched the club away.\n"I-I give up!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Dog, behind you!!'}, then:'k8b'},
k8b:{art:'maitta', text:'A voice as big as a mountain echo rang across the battlefield.\nThe Dog leaped aside just in time, and Momotaro\'s sword flashed bright.\n"I-I give up!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'When the battle was over, Momotaro said,\n"Today\'s greatest hero was the Pheasant."\nThe Dog and the Monkey nodded and nodded.\nDeep in his small chest, something glowed warm.\nEven the smallest one has something only he can do.\nThe Pheasant never hung his head again.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Without that warning, I would have been done for," said the Dog.\n"Nobody can watch the sky like you," said the Monkey.\nThe Pheasant blushed and hid his face behind a wing.\nEven the smallest one has something only he can do.\nThe Pheasant never hung his head again.'}

};

function HOBBY_LINE_EN(f){
  return {
    sumo:'All that sumo wrestling had made him strong just when it mattered most.',
    run:'All those running races had made him faster than anyone.',
    help:'All those chores had given him arms that never let him down.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (EN) ================= */
const ZK_EN = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triumph: All Together',   h:'Fight with all three friends at once...'},
  {id:'a_katana', n:'Triumph: The Sword',      h:'Win with the sword and take the treasure home...'},
  {id:'a_dog',    n:'Triumph: The Dog',        h:'Let the Dog fight, then take the treasure home...'},
  {id:'a_saru',   n:'Triumph: The Monkey',     h:'Let the Monkey fight, then take the treasure home...'},
  {id:'a_kiji',   n:'Triumph: The Pheasant',   h:'Let the Pheasant fight, then take the treasure home...'},
  {id:'b_naka',   n:'Friends with the Ogres',  h:'After winning, ask the ogres why...'},
  {id:'c_yaku',   n:'The Pinky Promise',       h:'Go alone, and put away your sword...'},
  {id:'d_kibi',   n:'The Dumpling Miracle',    h:'Bring lots of dumplings, go alone, and put away your sword...'},
  {id:'o_negai',  n:'Baskets of Wild Grapes',  h:'In the Ogre\'s Tale, speak up, then choose to ask...'},
  {id:'o_hatake', n:'The Field on Ogre Island', h:'In the Ogre\'s Tale, speak up, then choose the field...'},
  {id:'o_kaesu',  n:'Secret on the Night Beach', h:'Follow along quietly, then sneak the treasure back...'},
  {id:'o_asa',    n:'Promise of the Morning Sun', h:'On the morning you could do nothing, find your courage...'},
  {id:'o_miokuri',n:'Someday, the Words',      h:'If courage does not come, and the boat sails away...'},
  {id:'k_hero',   n:'The Littlest Hero',       h:'In the Pheasant\'s Tale, dive right in...'},
  {id:'k_voice',  n:'Lookout of the Skies',    h:'In the Pheasant\'s Tale, shout with all your might...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_EN, ZK_EN };
