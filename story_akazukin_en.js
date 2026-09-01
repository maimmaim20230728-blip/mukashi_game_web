"use strict";
/* Little Red Riding Hood - English scenario (same structure as story_akazukin.js)
   Style: simple picture-book English, matching story_en.js.
   The famous refrain uses the classic English wording ("All the better to ... with!"). */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var AKZ_EN = {

  /* ================= Little Red Riding Hood ================= */

  z1:{art:'akz_home', text:'This is the tale of a little girl who looked just lovely in a red riding hood.\nGrandma had sewn it for her, and she wore it every single day.\nSo everyone called her Little Red Riding Hood.', next:'z2'},

  z2:{art:'akz_home', text:'One day, her mama said,\n"Grandma, who lives beyond the forest, is feeling poorly. Will you take her some sweets and grape juice?\nNo dawdling on the way, and do not leave the path!"', next:'z3'},

  z3:{art:'akz_home', text:'Little Red thought for a moment.\nLet\'s add one more thing to the basket.', choices:[
    {t:'A jar of honey', go:'z3r', set:{item:'hachimitsu'}},
    {t:'A bright red apple', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'A bright red apple rolled into the basket with a happy little thump.\nGrandma will love this!'
    : 'She tucked a jar of sweet honey gently into the basket.\nGrandma will love this!', next:'z4'},

  z4:{art:'akz_door', text:'"Off I go!"\nBasket in hand, Little Red skipped out the door.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'Off on an errand!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'The fir-tree forest sparkled with little spots of sunlight.\nBirds sang somewhere up above.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Now, how shall we walk today?', choices:[
    {t:'Walk along singing a song', go:'z5r', set:{walk:'uta'}},
    {t:'Walk along spotting butterflies', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'A yellow butterfly fluttered on ahead of her,\nalmost as if it were showing the way.'
    : '"La la la, down the forest path..."\nThe little birds sang right along with her.', next:'z6'},

  z6:{art:'akz_meet', text:'Rustle, rustle.\nOut from behind a tree stepped a great big Wolf.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Good day, little miss. And where might you be going?"\nasked the Wolf with a great big smile.';
    if(f.first) return t;
    return t + '\nWhat should she do?';
  }, choices:f=>{
    var c = [
      {t:'Answer honestly', go:'z8'},
      {t:'"I\'m not telling you!"', go:'zn1'},
      {t:'Run straight back home', go:'zh1'}
    ];
    if(f.item) c.push({t:'"Mr. Wolf, are you hungry?"', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"To Grandma\'s house. She is poorly, so I\'m bringing her sweets and grape juice."\nLittle Red answered honestly.\nAnd deep inside, the Wolf began to think a sneaky thought.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Look over there! What pretty flowers.\nWouldn\'t Grandma just love a bunch of those?"';
    if(f.first) return t;
    return t + '\nWhat should she do?';
  }, choices:[
    {t:'Pick some flowers', go:'z10'},
    {t:'"No, I\'ll go straight there"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'They really were pretty, so Little Red stepped off the path.\nA white flower, a blue flower... and every time she picked one, an even prettier one seemed to bloom a little farther on.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Meanwhile, the Wolf...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'The Wolf had taken a shortcut, and reached Grandma\'s house first.\nKnock, knock.\n"Grandma, it\'s Little Red!"\nHe copied her voice, and slipped inside.', next:'z12'},

  z12:{art:'akz_bed', text:'In one gulp, Grandma was swallowed whole.\nThen the Wolf put on her nightgown, pulled on her nightcap, and crawled into her bed.', next:'z13'},

  z13:{art:'akz_gma_out', text:'At last, Little Red arrived with her armful of flowers.\n"That\'s strange... the door is open..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Grandma, I\'m here!"\nBut Grandma looked... different, somehow.\nLittle Red tiptoed closer and peered at her face.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'What big ears you have!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'All the better to hear you with'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'What big eyes you have!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'All the better to see you with'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'What big hands you have!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'All the better to hug you with'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'What a big mouth you have!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'All the better to EAT you with!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'CHOMP!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'When she opened her eyes, everything was dark. She was inside the Wolf\'s tummy!\n"Little Red? Oh, you poor dear. But don\'t worry now."\nIt was Grandma\'s voice, and a warm hand gave hers a squeeze.';
    if(f.first) return t;
    return t + '\nWhat should they do?';
  }, choices:[
    {t:'Stay still and wait for help', go:'z16'},
    {t:'Sing together, loud as can be', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Hand in hand, the two of them waited quietly.\nThe Wolf, with his tummy so full, fell fast asleep on the bed.\nHis snores rumbled through the whole house.', next:'z17'},

  z17:{art:'akz_hunter', text:'Just then, the forest hunter came walking by on his rounds.\n"My, what a snore from Grandma\'s house... something is not right here."\nHe peeked inside, and there on the bed lay a Wolf with a great round tummy!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Snip, snip!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'With his scissors, the hunter gently opened the sleeping Wolf\'s tummy.\n"It was so dark in there!" said Little Red.\nGrandma was safe too. Neither of them had even a scratch.';
    if(f.first) return t;
    return t + '\nWhat should they do?';
  }, choices:[
    {t:'Fill his tummy with stones', go:'z19'},
    {t:'Make him promise "never again"', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Little Red hurried to the garden and carried back the heaviest stones she could find.\nThe hunter tucked them into the Wolf\'s tummy and stitched it neatly shut.', next:'z20'},

  z20:{art:'akz_stone', text:'When the Wolf woke up, he leaped up to run away.\nBut the stones were heavy, oh so heavy.\nTHUMP! Down he fell, and he did not get up again.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'They all sat down on the grass and shared the sweets and grape juice.\nEven Grandma seemed to feel better already.\nAnd Little Red made herself a promise:\n"Never, ever will I dawdle off the path again."\nAnd they all lived happily ever after.'},

  /* ---- Grandma's Clever Plan ---- */
  zn1:{art:'akz_meet', text:'"I\'m not telling you!"\nLittle Red stuck her nose in the air and marched right on.\nThe Wolf gave a sly grin and slipped away behind the trees.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Somehow, her heart began to thump, thump with worry.\nLittle Red walked faster and faster, looking neither left nor right.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Little Red reached Grandma\'s house first!\n"Grandma, I met a great big Wolf in the forest!"\n"My goodness. Then let\'s lock the door."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Click, went the lock.\nSoon after: knock, knock.\n"It\'s Little Red! Open the door!"\nBut no matter how he copied her voice, the two inside stayed still as mice. The door did not open.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Then, creak... creak...\nThe Wolf climbed up onto the roof, to lie in wait.\nGrandma whispered,\n"That rascal loves the smell of sausages. Let\'s pour the sausage water into the big trough outside."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'I have a clever idea'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'The delicious smell of sausages drifted up, up, up to the roof.\nThe Wolf sniffed and leaned, and slid, and slipped...\nSPLASH!\nRight into the trough! Soaked from ears to tail, he ran away into the forest.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Grandma, you\'re amazing!"\n"Ho ho. That is what you call the wisdom of the old."\nGrandma is not just someone to be rescued, you know.\nThat evening, the two of them ate hot, delicious sausages.\nAnd they all lived happily ever after.'},

  /* ---- Run home → Together with Mama ---- */
  zh1:{art:'akz_forest', text:'Little Red spun right around and ran home as fast as her legs would go.\nThe Wolf just blinked and watched her disappear.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Mama! I met a great big Wolf in the forest!"\n"Thank you for telling me right away. That was very brave.\nCome, we will go to Grandma\'s together."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'Hand in hand with Mama, she walked the forest path once more.\nFar off among the trees, the Wolf was watching.\nBut with a grown-up there, he did not dare come out.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'Grandma\'s house was soon full of happy voices.\nWhen something scares you, or troubles you, tell a grown-up right away.\nThat is the very best magic there is.\nAnd they all lived happily ever after.'},

  /* ---- "Are you hungry?" → A Guest from the Forest ---- */
  zt1:{art:'akz_meet', text:'"Mr. Wolf, are you hungry, by any chance?"\nThe Wolf\'s eyes went wide with surprise.\n"...I have not eaten a thing in three whole days."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Little Red sat down by the path and shared her sweets and the bright red apple.\nThe Wolf took one bite, and a big tear rolled down his nose.'
    : 'Little Red sat down by the path and shared her sweets, with honey drizzled on top.\nThe Wolf took one bite, and a big tear rolled down his nose.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"No one has ever been this kind to me."\nWith a full and happy tummy, the Wolf padded back into the deep forest.\nWhen Little Red told Grandma the story, Grandma smiled and said,\n"A child who can share her food is the strongest child in the world."\nAnd they all lived happily ever after.'},

  /* ---- Sing → The Tummy Chorus ---- */
  zu1:{art:'akz_onaka', text:'"Grandma, let\'s sing together!"\n"What a fine idea. Even in the dark, we can still sing!"\nThey took a deep, deep breath, and...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'The Tummy Chorus!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"La la la, down the forest path..."\nOutside, the hunter stopped. He could not believe his ears.\n"Singing? From inside the house? No... from inside the WOLF?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Snip, snip!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Thanks to your song, I found you right away," said the hunter.\nThe startled Wolf tucked his tail and dashed off into the forest.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Even in the darkest place, raise your voice, and someone will hear you."\nLittle Red never forgot Grandma\'s words.\nAnd from that day on, the two of them knitted and sang together, the forest\'s favorite little choir.\nAnd they all lived happily ever after.'},

  /* ---- Make him promise → The Morning Promise ---- */
  zy1:{art:'akz_rescue', text:'"Stones would be too cruel. Instead..."\nLittle Red looked the waking Wolf straight in the eye.\n"Promise you will never eat anyone again."\nThe Wolf hung his head and whispered, "...I promise."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'In the morning sun, the Wolf walked away into the deep, deep forest.\nWill he truly keep his promise? Nobody knows.\nBut the hunter tipped his hat and said,\n"Leave the watching to me."\nAnd they all lived happily ever after.'},

  /* ================= The Wolf's Tale ================= */

  w1:{art:'w_fuyu', text:'This is the tale of a lone Wolf who lived in the winter forest.\nThe snow lay deep, and there was nothing to hunt.\nThe Wolf had not eaten for three whole days.', next:'w2'},
  w2:{art:'w_fuyu', text:'The night was bitter cold.\nHow should the Wolf get through it?', choices:[
    {t:'Curl up tight in the den', go:'w2r', set:{wnight:'maru'}},
    {t:'Howl at the stars', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'He lifted his nose to the deep blue sky. Owoooo!\nBut no friend anywhere howled back.'
    : 'He wrapped his tail over his nose and curled up small, small, smaller.\nStill, the winter wind crept in.', next:'w3'},
  w3:{art:'w_mura', text:'In the morning, he looked down on the village from the hill.\nThe smell of fresh-baked bread drifted up. His tummy growled, loud as thunder.\nWhat should he do?', choices:[
    {t:'Be brave, and ask at the bakery', go:'wp1'},
    {t:'Wait for someone on the forest path', go:'wm1'}
  ]},

  /* ---- Ask at the bakery ---- */
  wp1:{art:'w_panya', text:'When he padded into the village, everyone ran away in fright.\nEveryone but the baker.\n"...Are you hungry, friend?"', next:'wp2'},
  wp2:{art:'w_panya', text:'The Wolf gave a small, small nod.\nThe baker shared a big armful of crusty bread ends.\n"You are the first wolf who ever asked instead of stealing."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'From the next day on, the Wolf chopped firewood for the baker, and was paid in bread.\nLittle by little, the village folk stopped being afraid.\nThe courage to ask is stronger than any fang.\nAnd they all lived happily ever after.'},

  /* ---- Wait on the path (the other side of the tale) ---- */
  wm1:{art:'akz_meet', text:'As he waited on the forest path, along came a girl in a red riding hood.\nHe meant to eat her. He truly did.\nBut the girl smiled at him and asked,\n"Mr. Wolf, are you hungry, by any chance?"', choices:[
    {t:'Tell the truth: "Yes, I am"', go:'wt1'},
    {t:'Go on with the sneaky plan', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...I have not eaten a thing in three whole days."\nThe Wolf surprised even himself by saying it.\nAnd the girl opened her basket and shared her sweets with him.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"My name is Little Red Riding Hood. Let\'s meet on this path again!"\nHe had meant to eat her. Instead, he had made a friend.\nOn hungry days, he need only go to that little path.\nJust knowing that made the winter forest feel a little warmer.\nAnd they all lived happily ever after.'},

  wz1:{art:'akz_gma_out', text:'The Wolf gave a sneaky answer, and dashed off down the shortcut.\nBut as he ran, a strange prickle scratched at his heart.\n"If I don\'t eat, I won\'t last the winter," he told himself.', next:'wz2'},
  wz2:{art:'akz_bed', text:'What happened next, you know from Little Red\'s tale.\nHe swallowed Grandma whole, then Little Red, and fell fast asleep.\nAnd when he woke up...', next:'wz3'},
  wz3:{art:'akz_stone', text:'His tummy was full of stones.\nSo heavy, so very heavy, he could not take a single step.\n"So this is what that prickle in my heart was trying to tell me..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'The long winter passed,\nand spring came.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'The hunter, on his rounds, took pity on the Wolf who could not move.\nHe took out the stones and patched him up.\n"Have you learned your lesson?"\nThe Wolf nodded and nodded and nodded.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'Through the spring breeze, the Wolf set off walking.\nNext time he is hungry, he will say: "Please, will you share?"\nThe weight of those stones, he has never forgotten.\nNot for a single day.\nAnd they all lived happily ever after.'},

  /* ================= Grandma's Tale ================= */

  g1:{art:'g_heya', text:'This is the tale of the grandmother who lived in the little house in the forest.\nThat red riding hood? She knitted it herself.\nToday she was a little feverish, and sat knitting in her bed.', next:'g2'},
  g2:{art:'g_heya', text:'There was still some red yarn left over.\nNow, what to knit next?', choices:[
    {t:'A pair of little mittens', go:'g2r', set:{knit:'tebukuro'}},
    {t:'A long, long scarf', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'A long, long scarf it is.\nLong enough for her and Little Red to share, wrapped up together.'
    : 'Little red mittens it is.\nJust the right size for those little hands.', next:'g3'},
  g3:{art:'g_heya', text:'Just then, a big shadow crossed the window.\nKnock, knock.\n"Grandma, it\'s Little Red!"\n...Oh my. That voice sounds different today.', choices:[
    {t:'Check the window before answering', go:'gy1'},
    {t:'Call out "Come in!"', go:'go1'}
  ]},

  /* ---- Check first → The Guest on the Roof ---- */
  gy1:{art:'akz_machibuse', text:'She peeked through the gap in the curtains. A Wolf! A great big Wolf!\nWithout any fuss at all, Grandma turned the lock. Click.\n"You\'ll need another hundred years to fool an old woman like me."', next:'gy2'},
  gy2:{art:'akz_yane', text:'Up onto the roof the Wolf climbed. Creak, creak.\nGrandma poured her sausage water into the big trough outside. Sploosh.\nThat delicious smell drifted up... and the Wolf leaned, and slid, and SPLASH!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Soaked from ears to tail, the Wolf ran away into the forest.\nWhen Little Red arrived and heard the story, her eyes went round as plates.\n"Grandma, you\'re like a hero!"\n"Ho ho. I am not just someone to be rescued, you know."\nAnd they all lived happily ever after.'},

  /* ---- "Come in!" → Calm Even in the Tummy ---- */
  go1:{art:'akz_bed', text:'In came a great big Wolf.\nAnd in one gulp, Grandma was swallowed whole.\nBut Grandma did not panic. Not one bit.\nShe had weathered many, many long winters, after all.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Well now. It is rather warm in here, isn\'t it."\nBefore long, Little Red came tumbling in too.\nGrandma took her little hand and held it tight.\n"There, there. Shh... listen closely now. ...Hear that? Footsteps."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Snip, snip!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'The hunter gently opened the Wolf\'s tummy.\n"Remarkable. You stayed calm in there the whole time?"\n"Of course. Good ideas never come to those who panic."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'As a thank-you, Grandma gave the hunter the long scarf she had been knitting.\n"Winter rounds are cold work, you know."\nIt was such a scary day. And yet, somehow, everyone was smiling.\nAnd they all lived happily ever after.'
    : 'As a thank-you, Grandma gave the hunter the little red mittens she had been knitting.\n"Winter rounds are cold work, you know."\nIt was such a scary day. And yet, somehow, everyone was smiling.\nAnd they all lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, AKZ_EN);

  T.ZK_EN.push(
    {section:'Little Red Riding Hood'},
    {id:'za_seishi',   n:'The Hunter to the Rescue',   h:'The original tale, from your very first read'},
    {id:'za_chie',     n:"Grandma's Clever Plan",      h:'Tell the Wolf nothing, and go straight there...'},
    {id:'za_gassho',   n:'The Tummy Chorus',           h:'In the dark tummy, sing out together...'},
    {id:'za_okyaku',   n:'A Guest from the Forest',    h:'Pack something extra, and be kind to the Wolf...'},
    {id:'za_yakusoku', n:'The Morning Promise',        h:'Once you are safe, choose something kinder than stones...'},
    {id:'za_okaasan',  n:'Together with Mama',         h:'If you are scared, run back and tell someone...'},
    {id:'zw_pan',      n:'The Magic Word',             h:"In the Wolf's Tale, go down to the village..."},
    {id:'zw_tomo',     n:'The First Friend',           h:"In the Wolf's Tale, tell the truth..."},
    {id:'zw_hansei',   n:'The Spring Breeze',          h:'Where does the sneaky plan really lead...?'},
    {id:'zg_yane',     n:'The Guest on the Roof',      h:"In Grandmother's Tale, check before you answer..."},
    {id:'zg_onaka',    n:'Calm Even in the Tummy',     h:"In Grandmother's Tale, keep your wits about you..."}
  );

})();
