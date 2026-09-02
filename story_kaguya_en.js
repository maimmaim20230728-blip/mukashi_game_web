"use strict";
/* Princess Kaguya - English scenario (same structure as story_kaguya.js)
   Source: Taketori Monogatari (10th c., PD). Reference translation: F. Victor Dickins (1888/1906, PD).
   Not "The Tale of the Princess Kaguya" (the 2013 film title); no film-specific elements. */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var KAGUYA_EN = {

  /* ================= Princess Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'This is a tale from long, long ago.\nThere lived an old man who made his living cutting bamboo.\nPeople called him the Bamboo Cutter.\nOne day, deep in the grove, he found a stalk of bamboo glowing gold at its root.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'The bamboo glows!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'He cut it open, and inside sat a tiny girl, no bigger than his thumb.\nThe old man carried her home in the palm of his hand.\nHe and his wife decided to raise her, cradled in a little basket.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'What shall they do for the tiny princess each day?', choices:[
    {t:'Sing her a lullaby', go:'kg3r', set:{takeko:'uta'}},
    {t:'Make her toys out of bamboo', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'The old man carved little flutes and carts from bamboo.\nWhen the princess laughed, the old woman laughed too.'
    : 'When the old woman sang, the princess fell fast asleep.\nThe two of them sat by the basket, watching and watching.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'From then on, every stalk of bamboo he cut held gold inside.\nThe girl grew and grew, and in about three months she was a beautiful young woman.\nThey named her Kaguya, Princess of the Slender Bamboo.', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'Word of Princess Kaguya\'s beauty spread across the whole land.\nPeople gathered around the house, hoping for a single glimpse.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Among them were five noblemen who wanted her for a wife more than anything.\nPrince Ishitsukuri, Prince Kuramochi, Minister Abe,\nGrand Counselor Otomo, and Middle Counselor Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'Princess Kaguya said:\n"I will go to whichever of you brings me the treasure I wish to see."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'The Buddha\'s stone begging bowl!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'The jeweled branch of Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'The fire-rat\'s robe!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'The jewel from a dragon\'s neck!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'The swallow\'s cowrie shell!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Not one of them was a treasure anyone believed could exist in this world.\nThe five set out, each on his own journey.';
    if(f.first) return t;
    return t + '\nWhose story shall we hear?';
  }, choices:[
    {t:'Prince Ishitsukuri', go:'kgk1'},
    {t:'Prince Kuramochi', go:'kgk2'},
    {t:'Minister Abe', go:'kgk3'},
    {t:'Grand Counselor Otomo', go:'kgk4'},
    {t:'Middle Counselor Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'Prince Ishitsukuri thought the distant journey to India far too much trouble,\nso he brought an old bowl from a temple nearby.\nBut the Buddha\'s own bowl would surely shine.\nA bowl with no light in it was found out at once.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'Prince Kuramochi had craftsmen make a jeweled branch.\nThe princess and the old man gazed at it in wonder.\nBut just then the craftsmen arrived, saying,\n"We still haven\'t been paid for this."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'Minister Abe had a fur robe sent from a distant land.\nThe princess said, "A true fire-rat\'s robe will not burn, even in flames."\nInto the fire it went, and up it burned, crackling away.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'Grand Counselor Otomo set sail in search of a dragon.\nA great storm caught him, and his ship spun round and round.\nWhen at last he reached the shore, he came home with his eyes red and swollen.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'Middle Counselor Isonokami reached into a swallow\'s nest,\ngrabbed hold of something, and tumbled right off the roof.\nWhat he held was an old swallow dropping.\nHurt in the fall, the Counselor took to his bed.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'In the end, not one of them brought back a real treasure.';
    if(f.first) return t;
    return t + '\nNow, what should she do?';
  }, choices:[
    {t:'Live quietly, and let the rumors be', go:'kg10'},
    {t:'Tell the old couple the truth', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'The rumors reached the ears of the Emperor himself.\nPretending to go hunting, the Emperor paid a visit to the bamboo cutter\'s house.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'The Emperor\'s palanquin!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'When the Emperor tried to lift her into his palanquin,\nPrincess Kaguya melted into light and vanished.\n"I will not take her away," said the Emperor,\nand he returned to the capital.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'From then on, the Emperor and Princess Kaguya exchanged letters and poems.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'And so three years went by.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'When spring came, Princess Kaguya began to gaze up at the moon and weep.\nWhen the old man asked why, she would not answer.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'At the end of summer, Princess Kaguya finally told them.\n"I come from the Capital of the Moon.\nOn the night of the full moon in August, they will come for me. I must go home."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'I will NOT give her up!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'The old man begged the Emperor, and many soldiers came.\nArchers lined the roof and filled the garden.\nThe old woman hid the princess in the innermost room and shut the door tight.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'The night of the full moon. Past midnight,\nthe whole house was suddenly bathed in a light brighter than day.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'Moonlight comes down!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Down from the sky came people riding on clouds.\nThe soldiers\' strength drained away, and not one could draw his bow.\nThe door opened by itself, and out from the old woman\'s arms stepped the princess.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'The envoy from the Moon spoke.\n"Old man. The princess committed a fault on the Moon, and to atone for it, she was sent to stay with you for a while.\nHer time of atonement is over.\nIt was also a reward for a small good deed of your own."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'Princess Kaguya wrote the old man a letter.\n"Please think of the robe I leave behind as me.\nOn nights when the moon comes out, look up."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'The envoy held out a jar of the elixir of life.';
    if(f.first) return t + '\nThe princess took a single taste, then wrapped the rest with a letter to the Emperor\nand handed it to the Emperor\'s messenger.';
    return t + '\nWho should have this elixir?';
  }, choices:[
    {t:'Send it with her letter to the Emperor', go:'kg21'},
    {t:'Leave it for the old couple', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'The envoy held out the feathered robe.\n"Once you wear this, all the cares of the human heart fade away."';
    if(f.first) return t + '\nThe princess put on the robe.';
    return t + '\nWhat should she do?';
  }, choices:[
    {t:'Put on the feathered robe', go:'kg22'},
    {t:'Look back one more time before putting it on', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'With the cares of her heart gone, the princess no longer felt tenderness for the old man, nor longing.\nRiding a cloud, she rose toward the moon.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'To the moon...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'The old man and the old woman could not stop their tears.\nHolding the robe she had left, they gazed up at the sky for a long, long time.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'The Emperor had her letter and the elixir of life burned\non the peak of the mountain in Suruga that stands closest to heaven.\nBecause so many warriors climbed it, the mountain came to be called Fuji,\n"the mountain rich in warriors."', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'On nights when the moon comes out, look up.\nJust as the princess had written, the old man and the old woman looked up at the sky on moonlit nights.\nThe robe she left behind stayed with them, in their own two hands.\nThe end.'},

  /* ---- The days that remained ---- */
  kgn1:{art:'kg_uchiake', text:'Before the Emperor ever came, Princess Kaguya told the old couple.\n"I come from the Capital of the Moon. This autumn, I must go home."\nThe old man and the old woman were silent for a long, long time.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'From that day on, the three of them treasured every day.\nThey walked in the bamboo grove, and went to the very stalk where she was found.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'On nights when the moon was lovely, the three sat together on the veranda.\n"On moonlit nights, please sit here. I will look down on this place from the moon."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'On the night of the full moon, they came for her.\nThe old man did not fight.\nThe three of them held hands and waited for the light.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'The parting came, just the same.\nBut before it came, the three of them had shared one whole autumn together.\nOn the veranda, three cushions still lie where they were left.\nThe end.'},

  /* ---- Before the feathered robe ---- */
  kgm1:{art:'kg_shouten', text:'Before putting on the feathered robe, the princess looked back.\nThe old man and the old woman were watching her.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Thank you for raising me'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'The old woman wept, and smiled, and waved.\nThe old man waved with all his might.\nThe princess fixed their faces in her eyes, and then put on the robe.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Though the cares of her heart faded away,\nthe last two faces she saw stayed with her, there in the light, forever.\nThe end.'},

  /* ---- The elixir of life ---- */
  kgu1:{art:'kg_tegami', text:'The princess handed the elixir of life to the old man and the old woman.\n"If you drink this, you will live forever."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'After the princess had returned to the moon, the two of them gazed at the jar.\n"A world without the princess... we need not live in it forever."\nThe old man said it quietly.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'On the next moonlit night, they set the jar out on the veranda,\nas if gently offering it up to the moon.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'The elixir was never drunk. It simply lay there, bathed in moonlight.\nThe Emperor burned his on Mount Fuji; the old man offered his to the moon from the veranda.\nEach was a way of never forgetting the princess. Each was their own.\nThe end.'},

  /* ================= The Bamboo Cutter's Tale ================= */

  kj1:{art:'okina_take', text:'This is the tale of the bamboo cutter and his wife, and what came after.\nA month had passed since the princess returned to the moon.', next:'kj2'},
  kj2:{art:'kg_ato', text:'What shall they do today?', choices:[
    {t:'Fold the princess\'s robe', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Walk in the bamboo grove', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'The bamboo grove swayed in the wind, just as it had on that day.\nThe old man stood a while, listening to the sound of the bamboo.'
    : 'The old woman folded the princess\'s robe with care.\nShe folded it, and unfolded it, and folded it again.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'A moonlit night. The two of them read the princess\'s letter once more.\n"On nights when the moon comes out, look up."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Shall we look up?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'The old woman said it to the old man.\nWhat should the two of them do?', choices:[
    {t:'Look up at the moon from the veranda', go:'kjt1'},
    {t:'Go to the bamboo grove in the morning', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'The two sat side by side on the veranda and looked up at the moon.\nThe sorrow did not go away.\nBut the moonlight reached all the way to the veranda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'From then on, on moonlit nights, the two of them sit on the veranda.\nSome nights they cry. Some nights they talk. Some nights they say nothing at all.\nAnd the moonlight reaches them on every one of those nights, just the same.\nThe end.'},
  kjk1:{art:'okina_take', text:'One spring morning, the old man went back to the bamboo grove.\nThere was no glowing bamboo anymore.\nInstead, here and there, bamboo shoots were poking up their heads.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'...I\'ll dig some up.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'One by one, the old man dug up the bamboo shoots.\nUnhurried, told by no one, deciding for himself.\nBy the time his basket was full, the old woman came with lunch.\nAnd they lived on, together.'},

  /* ================= The Moon Envoy's Tale ================= */

  ku1:{art:'tsuki_miyako', text:'This is the tale of an envoy who lived in the Capital of the Moon.\nIn the Capital of the Moon there are no tears. There are no cares of the heart.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Today is the day to descend to the earth. What to bring?', choices:[
    {t:'Only the feathered robe', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'The elixir of life as well', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'Into the box went the feathered robe and a jar of the elixir of life.\nThe people of the earth are said to want it.'
    : 'Into the box went the feathered robe.\nWith this alone, the princess would become a person of the Moon again at once.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'Riding down on a cloud, the envoy found a crowd around the house.\nThey held bows, and glared this way.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'The old man was shouting something.\nThe envoy could not understand the meaning of the words.\nOn the Moon, there is no such phrase as "I won\'t give her back."', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'...Tears?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'The princess stepped forward.\nWhat should the envoy do?', choices:[
    {t:'Follow the rule and put the robe on her', go:'kun1'},
    {t:'Listen to the princess\'s request', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'The envoy followed the rule and placed the robe on the princess.\nBut the envoy could not pretend not to see the old man\'s wet face.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'Even back on the Moon, the envoy kept remembering that face.\nIn a land without tears, the envoy learned, for the first time, what tears mean.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'From then on, now and again, the envoy looks down upon the earth.\nIn the land that knows no tears, there is now one who knows them.\nThe end.'},
  kut1:{art:'kg_tegami', text:'"Please give my letter and my robe to the old man."\nAt the princess\'s request, the envoy nodded.\nThere is no such thing in the rules of the Moon. But this, it seems, is the custom of the earth.', next:'kut2'},
  kut2:{art:'kg_ato', text:'The envoy came down before the old man and handed over the letter and the robe, with care.\nThe old man held them close.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'Back in the Capital of the Moon, the envoy added one line to the rules:\n"One who returns from the earth may leave one thing behind."\nAnd so it has been, ever since.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_EN);

  T.ZK_EN.push(
    {section:'Princess Kaguya'},
    {id:'kg_seishi',  n:'On Moonlit Nights, Look Up',     h:'The original tale, from your very first read'},
    {id:'kg_nokori',  n:'The Days That Remained',         h:'Tell the old couple the truth before the Emperor comes...'},
    {id:'kg_koromo',  n:'Before the Feathered Robe',      h:'Look back once more before putting on the robe...'},
    {id:'kg_kusuri',  n:'The Elixir of Life',             h:'Leave the elixir for the old couple...'},
    {id:'kj_tsukiyo', n:'Where the Moonlight Reaches',    h:"In the Bamboo Cutter's Tale, look up from the veranda..."},
    {id:'kj_take',    n:'Back to the Bamboo Grove',       h:"In the Bamboo Cutter's Tale, go to the grove in the morning..."},
    {id:'ku_namida',  n:'The Land That Knows No Tears',   h:"In the Moon Envoy's Tale, follow the rule..."},
    {id:'ku_tegami',  n:'The Message Left Behind',        h:"In the Moon Envoy's Tale, listen to the princess..."}
  );

})();
