"use strict";
/* Ali Baba and the Forty Thieves - English scenario (same structure as story_alibaba.js)
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var ALIBABA_EN = {

  /* ================= Ali Baba and the Forty Thieves ================= */

  ab1:{art:'ab_mori', text:'This is the tale of Ali Baba, who lived in a town in Persia.\nAli Baba was a poor woodcutter.\nEvery day he took his two donkeys to the forest to gather firewood.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Today, too, Ali Baba was gathering firewood in the forest.';
    if(f.first) return t;
    return t + '\nHow much firewood does he gather?';
  }, choices:[
    {t:'Two bundles, and head home early', go:'ab2r', set:{ablife:'futa'}},
    {t:'Four bundles, and take his time', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'He loaded four bundles of firewood onto the donkeys\' backs.\nToday he meant to take his time going home.'
    : 'He loaded two bundles of firewood onto the donkeys\' backs.\nToday he meant to head home early.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'Just then, he heard the sound of horses\' hooves.\nAli Baba hid up in a tree.\nForty men gathered before a great rock.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'Forty of them...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'The man at the front spoke to the rock.\n"Open, Sesame!"\nAnd with a rumble, the rock opened.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Open, Sesame!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'The men went inside.\nAfter a while they came out again. "Shut, Sesame!"\nThe rock closed, and the men rode away.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba climbed down and stood before the rock.\n"Open, Sesame!"\nThe rock opened, and inside it was full of gold coins and treasure.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'The glow of treasure'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba filled some sacks with gold coins and loaded them onto the donkeys.\nOnly as much as he could carry home.\n"Shut, Sesame!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'When he got home, Ali Baba told his wife everything.\nThe two of them tried to count the coins, but there were far too many to count.\n"Let\'s borrow a measure from my brother\'s house."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'His brother Cassim was a wealthy merchant.\nCassim\'s wife secretly smeared a little grease on the bottom of the measure.\nWhen it came back, one gold coin was stuck to the bottom.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim asked Ali Baba about it.\nAli Baba told him everything: the rock, and the magic words.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'The next morning, Cassim took ten donkeys to the rock.\n"Open, Sesame!"\nThe rock opened.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Open, Sesame!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim filled his sacks with gold.\nBut when he tried to leave, he found he had forgotten the magic words.\n"Open, Barley!" "Open, Beans!"\nThe rock did not open.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'That night, Cassim did not come home.\nCassim\'s wife came to Ali Baba\'s house in tears.';
    if(f.first) return t;
    return t + '\nWhat does Ali Baba do?';
  }, choices:[
    {t:'Wait until morning', go:'ab14'},
    {t:'Go to the rock that very night', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'In the morning, Ali Baba went to the rock.\n"Open, Sesame!"\nInside, all was still. The thieves had returned first.\nCassim would never move again.\nAli Baba laid his brother on a donkey and quietly carried him home.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'In Ali Baba\'s house there was a servant named Morgiana.\nShe was a person who noticed things.\nTo prepare for the funeral, Morgiana fetched an old cobbler from the town.\nSo that he could not remember the way, she blindfolded him and led him to the house.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'The blindfold, if you please'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'When the thieves returned to the rock, they saw that Cassim was gone.\n"Someone else knows."\nThe captain sent one of his men into the town.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'The thief found the old cobbler.\nBlindfolded once more, the old man remembered the way with his feet.\nAnd the thief made a white mark on the door of Ali Baba\'s house.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana noticed the mark.\nSo she made the same mark on the next door, and on the next.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Marks on every door!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'When the thieves came, they could not tell which house it was.\nThe captain decided to go himself.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'The captain disguised himself as an oil merchant.\nNineteen donkeys, carrying thirty-eight great jars.\nOnly one held oil. In each of the others, a thief lay hidden.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"I am a traveling oil merchant. May I stay the night?"\nAli Baba kindly took him in.\nThe jars were lined up in the courtyard.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'...When night falls'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'That night, Morgiana ran out of lamp oil, and went to take some from the jars in the courtyard.\nThen a voice came from inside a jar.\n"Is it time?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'...There is someone inside the jar'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana answered in a low voice.\n"Not yet."\nAnd she checked all thirty-seven jars.';
    if(f.first) return t;
    return t + '\nWhat does Morgiana do?';
  }, choices:[
    {t:'Boil the oil', go:'ab24'},
    {t:'Fetch ropes, and call the magistrate', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana boiled the oil in a great pot.\nThen she poured the boiling oil into each jar, one after another.\nInside the jars, all fell silent.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'In the middle of the night, the captain came out to the courtyard and tapped on the jars.\nThere was no answer.\nThe captain fled, alone.', next:'ab26'},

  ab26:{art:'ab_ie', text:'In the morning, Morgiana told Ali Baba everything.\nAli Baba said to her,\n"From this day, you are free."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Some days later, the captain came again, disguised as a merchant.\nHe had befriended Ali Baba\'s son, and been invited to the house.\nMorgiana remembered that face.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'I remember that face'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'After the meal, Morgiana danced for them.\nA dagger was tucked in her sash.';
    if(f.first) return t;
    return t + '\nWhat does Morgiana do?';
  }, choices:[
    {t:'Dance to the very end', go:'ab29'},
    {t:'Stop the dance, and speak of the marks', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'At the end of the dance, Morgiana stopped before the merchant.\nThe captain fell.\nTo the astonished Ali Baba, Morgiana said quietly,\n"This man was the captain."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba said to Morgiana,\n"You are free now. What you do from here is yours to decide."\nMorgiana thought for a while, and answered,\n"I will stay. I will be part of this family."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'And so Morgiana and Ali Baba\'s son were joined, and she became part of the family.\nThey used the treasure from the rock modestly.\nAnd they lived happily ever after.'},

  /* ---- Going back for my brother ---- */
  abn1:{art:'ab_yoru_hakobu', text:'That very night, Ali Baba led a donkey to the rock.\n"Open, Sesame!"\nDeep inside, Cassim sat trembling.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"I forgot the words... Sesame. It was Sesame."\nAli Baba put his brother on the donkey and brought him home.\nHe took only one sack of gold.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'His brother was safe.\nThe magic words became a secret between the two of them.\nThe thieves noticed that some gold was missing, but they never learned whose doing it was.\nAnd they lived happily ever after.'},

  /* ---- Ropes and the magistrate ---- */
  abr1:{art:'ab_abura', text:'Morgiana fetched ropes.\nShe tied the lid of each jar shut from the outside, one after another.\nThen she ran to call the town magistrate.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'The magistrate\'s men came and opened the thirty-seven jars.\nThe thieves were led away, one by one, bound with rope.\nThe captain slipped away in the confusion.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'The captain never showed his face in the town again.\nAli Baba said to Morgiana, "You are free now."\nThey used the treasure from the rock modestly.\nAnd they lived happily ever after.'},

  /* ---- The captain fled ---- */
  abg1:{art:'ab_odori', text:'Morgiana stopped her dance and stood before the merchant.\n"It was I who added to the mark you made."\nThe merchant\'s face changed color.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Without a word, the captain rose and fled into the night.\nHe never came back to the town in Persia.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba said to Morgiana,\n"You are free now. What you do from here is yours to decide."\n"I will stay," Morgiana answered.\nAnd they lived happily ever after.'},

  /* ================= Morgiana's Tale ================= */

  am1:{art:'am_daidokoro', text:'This is the tale of a servant named Morgiana.\nShe worked in Ali Baba\'s house.\nPeople said she was one who noticed things.', next:'am2'},
  am2:{art:'am_daidokoro', text:'Morning. What does she start with?', choices:[
    {t:'Bake the bread', go:'am2r', set:{amlife:'pan'}},
    {t:'Draw the water', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana drew water from the well and filled the jar to the brim.\nThere was nothing about the house she did not know.'
    : 'Morgiana lit the oven and baked the bread.\nThere was nothing about the house she did not know.', next:'am3'},
  am3:{art:'ab_shirushi', text:'One morning, she found a white mark on the door.\n(Someone is trying to remember this house.)\nMorgiana made the same mark on the door next door.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'If there are marks, make more'}, then:'am4'},
  am4:{art:'ab_abura', text:'The night of the oil merchant. A voice came from inside a jar.\nWhat does Morgiana do?', choices:[
    {t:'Boil the oil', go:'am4r', set:{amhow:'abura'}},
    {t:'Tie the jars shut and call the magistrate', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana tied the lids shut and called the magistrate.\nThe thieves were led away.'
    : 'Morgiana boiled the oil and poured it into the jars.\nInside the jars, all fell silent.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'On the morning after it was all over, Ali Baba said,\n"You are free now. What you do is yours to decide."\nWhat does Morgiana do?', choices:[
    {t:'Stay in this house', go:'ami1'},
    {t:'Set out on a journey', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana went out through the gate, once.\nShe walked through the town, looked at the market, looked at the river.\nAnd then, on her own two feet, she came back to the house.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"This is the home I chose."\nNot as a servant, but as part of the family.\nAnd they lived happily ever after.'},
  amt1:{art:'am_michi', text:'Morgiana went out through the gate with a single bag.\nAli Baba did not stop her.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Where Morgiana went is not written in this tale.\nOnly Morgiana knows where the road led.\nThe end.'},

  /* ================= The Captain's Tale ================= */

  at1:{art:'at_dokutsu_kara', text:'This is the tale of the captain of the thieves.\nForty of them had been storing treasure inside the rock.\nOne day, he noticed that some of it was gone.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'What does the captain look for?', choices:[
    {t:'Footprints before the rock', go:'at2r', set:{atlife:'ashi'}},
    {t:'Donkey tracks', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Before the rock were the tracks of a donkey.\nSomeone from the town.'
    : 'Before the rock were small footprints.\nNot one of his own men.', next:'at3'},
  at3:{art:'ab_iwa', text:'(It was not the stolen treasure that frightened him. It was that someone knew the secret of the rock.)\nThe captain sent a man into the town.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'One secret is enough'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'The plan with the jars had failed.\nNot one of his men was left.\nWhat does the captain do?', choices:[
    {t:'Leave the treasure and go far away', go:'ato1'},
    {t:'Go back to that house once more', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'The captain stood before the rock.\n"Shut, Sesame."\nAnd without looking back, he walked away.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'The treasure stayed inside the rock.\nWhere the captain went, no one knows.\nThe end.'},
  ath1:{art:'ab_odori', text:'Disguised as a merchant, the captain went back to that house.\nAt the end of the dance, the servant stood before him.\n(She knew. She had known from the start.)\nThe captain did nothing, and left the house.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'The secret was a secret no longer.\nThe captain accepted it, and left the town.\nWhat he had feared was not losing the treasure. It was being known.\nThe end.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_EN);

  T.ZK_EN.push(
    {section:'Ali Baba and the Forty Thieves', note:'This tale is not found in the old Arabic manuscripts. About three hundred years ago, a Frenchman wrote it down from a storyteller from Syria. It is a different tale from "Aladdin." In the original, Morgiana is a slave, and at the end she is given her freedom.'},
    {id:'ab_seishi',  n:'Open, Sesame',                  h:'The tale as it is told, from your very first read'},
    {id:'ab_ani',     n:'Going Back for My Brother',     h:'On the night Cassim does not return, go to the rock...'},
    {id:'ab_rouya',   n:'Ropes and the Magistrate',      h:'On the night of the jars, do not boil the oil...'},
    {id:'ab_nigeta',  n:'The Captain Fled',              h:'Stop the dance and speak of the marks...'},
    {id:'am_ie',      n:'The Home I Chose',              h:"In Morgiana's Tale, stay in the house..."},
    {id:'am_tabi',    n:'Beyond the Gate',               h:"In Morgiana's Tale, set out on a journey..."},
    {id:'at_oite',    n:'Leaving the Treasure',          h:"In the Captain's Tale, go far away..."},
    {id:'at_himitsu', n:'One Secret',                    h:"In the Captain's Tale, go back to that house once more..."}
  );

})();
