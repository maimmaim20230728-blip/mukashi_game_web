"use strict";
/* Urashima Taro - English scenario (same structure as story_urashima.js)
   Style follows the classic PD translations (Ozaki 1908): the Dragon Palace, Princess Otohime,
   "a treasure box called a tamatebako". */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var URA_EN = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'This is the tale of a young fisherman who lived in a village by the sea.\nHis name was Urashima Taro.\nHe lived with his old father and mother, just the three of them.', next:'u2'},

  u2:{art:'ura_hama', text:'The waves sound gentle today.\nWhat shall we do before heading out to fish?', choices:[
    {t:'Mend the fishing nets', go:'u2r', set:{ulife:'ami'}},
    {t:'Watch the sea for a while', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'Watching the sparkling waves made his heart go quiet and still.\nThe sea was Taro\'s very best friend.'
    : 'The freshly mended net stretched tight and true.\nTaking good care of his tools... that was simply Taro\'s way.', next:'u3'},

  u3:{art:'ura_ijime', text:'Then he noticed some children on the beach, crowded around a big turtle, making a racket.\nThe poor turtle had pulled in its head, not knowing what to do.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Don\'t be mean to the turtle!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'When the children had gone home, Taro gently carried the turtle back to the sea.\n"Don\'t get caught again, now."\nThe turtle looked back at him again and again as it disappeared into the waves.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'A few days later,\nthe very same turtle appeared at the water\'s edge.\n"Taro, thank you for the other day.\nTo repay your kindness, let me take you to the Dragon Palace!"', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Onto the turtle\'s back, and down into the sea!\nNow, how shall we ride?', choices:[
    {t:'Hold on tight to the shell', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Look around and enjoy the view', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'To the Dragon Palace!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Schools of fish glittered past. Pillars of light swayed in the blue.\nTaro had never seen anything like it, and he could not look away.'
    : (f.uride==='tsukamaru'
      ? 'He held on tight, and the turtle\'s shell felt warm beneath his hands.\nSomehow, he was not afraid at all.'
      : 'Down and down through the blue light the turtle swam, deeper and deeper.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'At the bottom of the sea stood a palace, grand beyond all telling.\nThe Dragon Palace!\nIt was more beautiful than any picture could ever paint.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Welcome, dear Taro. So you are the kind soul who saved our turtle."\nPrincess Otohime herself came out to greet him, smiling warmly.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'The dance of the sea bream and flounder!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Before a feast fit for a king, the sea bream and the flounder danced a merry dance.\nTaro\'s eyes went wide, and he clapped and clapped.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'In the palace there was a Room of Four Seasons.\nThrough its four windows you could see spring, summer, autumn and winter, all at once.';
    if(f.first) return t;
    return t + '\nWhich window do you like best?';
  }, choices:[
    {t:'The spring window, with falling cherry blossoms', go:'u10r', set:{umado:'haru'}},
    {t:'The winter window, with falling snow', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'Snow seen from the bottom of the sea falls silent and slow.\nHe could have watched it forever.\n"How strange and wonderful. This place has everything."'
    : 'Beyond the window, cherry blossom petals came fluttering down.\n"How strange and wonderful. This place has everything."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'The happy days slipped by like a dream...\nand before he knew it, three years had passed.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Then one evening, Taro suddenly thought of his old father and mother back in the village.\nWere they well? Were they lonely?';
    if(f.first) return t + '\n"Princess Otohime... it is time I went home."';
    return t + '\nWhat should he do?';
  }, choices:[
    {t:'Say "It is time I went home"', go:'u13'},
    {t:'Stay just a little longer', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'Princess Otohime nodded, looking just a little sad,\nand held out a beautiful box of glossy black lacquer.\n"This is a treasure box, called a tamatebako."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'You must never, ever open it'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'On the turtle\'s back, Taro crossed the sea once more.\nWhen he looked back, the lights of the Dragon Palace grew smaller and smaller, far away.', next:'u15'},

  u15:{art:'ura_hama700', text:'But when he reached the shore, something was wrong.\nHis house was gone. The old familiar pine tree was gone.\nEvery face he passed belonged to a stranger.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'In the three years he spent in the Dragon Palace,\nseven hundred years had gone by on land.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'His father and mother had lived long, long ago.\nTaro was all alone in the world.';
    if(f.first) return t + '\nIn his loneliness, his hands moved to the lid of the tamatebako.';
    return t + '\nWhat should he do?';
  }, choices:[
    {t:'Open the tamatebako', go:'uc_kemuri'},
    {t:'Keep it closed, and wait on the shore', go:'ua1'},
    {t:'Return it to the sea', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'White smoke...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'When the smoke cleared, Taro had become a white-haired old man.\nAll the years that had stood still in the Dragon Palace returned to him at once.';
    if(f.first) return t;
    return t + '\nWhat should he do?';
  }, choices:[
    {t:'Stand still, gazing at the sea', go:'e_u_seishi'},
    {t:'Walk on, toward the Dragon Palace', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'The box he never should have opened.\nAnd yet, in Taro\'s heart there remained those beautiful days,\nmore lovely than any picture, shining like treasure.\nOnly the sound of the waves whispered on, soft and low.\nThe end.'},

  /* ---- The crane (the true old ending from Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'One step, then another, toward the water\'s edge.\nDrawn toward the sea where the Dragon Palace lay,\nTaro\'s body suddenly felt light as a feather.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'He became a crane!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Taro, now a white crane, flew out over the sunrise sea.\nAnd there, among the waves, a green turtle raised its head.\nIt was Princess Otohime, in the shape of a turtle.\nThe crane and the turtle are signs of long life and happiness.\nAnd the two of them danced over the shining sea, forever and ever.\nAnd they lived happily ever after.', ending:'u_tsuru'},

  /* ---- Keep it closed (the promise from the ancient Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro did not open the box.\n"A promise is a promise. I must never open it."\nFrom that day on, morning and evening, he watched the sea from the shore.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Then one morning, some days later, the sea turned gold,\nand a single boat came gliding across the water.\n"Dear Taro. You kept your promise, didn\'t you."\nIt was the voice of Princess Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"I believed we would meet again, as long as the box stayed closed."\nTaro stepped into the boat, and set off on a journey with no goodbyes in it.\nThe tamatebako had been a promise, binding their two hearts together.\nAnd they lived happily ever after.'},

  /* ---- Return it to the sea ---- */
  uu1:{art:'ura_hama', text:'Taro borrowed a little boat and rowed out to sea.\n"Precious things belong in precious places."\nGently, he set the tamatebako afloat upon the waves.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Then, from beneath the waves, that same turtle appeared\nand took the box upon its back.\n"Taro... perhaps that is the finest answer of all."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'Memories stay in your heart, even with the box unopened.\nTaro settled in the new village, and became a fisherman once more.\nAnd the sea sparkled on, bright as ever.\nAnd they lived happily ever after.'},

  /* ---- Stay in the palace ---- */
  un1:{art:'ura_otohime', text:'"Just a little longer, please. And yet..."\nAs if she had seen straight into his heart, Princess Otohime nodded quietly,\nand led Taro to the water mirror.', next:'un2'},
  un2:{art:'hime_ryugu', text:'There in the water mirror was his dear old home.\nHis father and his mother, smiling, safe and well.\n"We shall watch over them from here, together.\nAnd whenever you wish to visit, the turtle will carry you home."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'And so, with his heart at ease, Taro stayed on in the Dragon Palace.\nEven far apart, a family that holds each other dear is a family still.\nAnd the days in the Dragon Palace flowed on, calm and bright.\nAnd they lived happily ever after.'},

  /* ================= Princess Otohime's Tale ================= */

  h1:{art:'hime_ryugu', text:'This is the tale of Princess Otohime of the Dragon Palace.\nA beautiful palace, delicious feasts, music and dancing.\nShe had everything... and yet, she was just a little bit bored.', next:'h2'},
  h2:{art:'hime_ryugu', text:'What shall we do today?', choices:[
    {t:'Stroll through the coral garden', go:'h2r', set:{hlife:'sango'}},
    {t:'Go and hear the whales sing', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'From far across the sea came the low song of the whales.\nBig, and gentle, and just a little bit lonely.'
    : 'Red and pink corals swayed all through the garden.\nSo lovely... and such a shame, she thought, to have no one to show them to.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Then one day, the turtle came hurrying home,\nshell polished bright, eyes shining.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Princess, you must hear this!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Someone saved me when I was caught on the beach!"\nAnd so Taro was invited to the palace. He laughed easily and often.\nA laughter the Dragon Palace had never known filled its halls,\nand her dull days began to glow with color.', next:'h5'},
  h5:{art:'ura_otohime', text:'But one evening, in the third year:\n"It is time I went home."\nOtohime\'s heart gave a painful little squeeze.\nShe longed to hold him back. But a heart that loves its family must never be stopped.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'I long to hold him back.\nAnd yet...'}, then:'h6'},
  h6:{art:'ura_tama', text:'Otohime prepared a box of glossy black lacquer.\nNow... what should she seal inside it?', choices:[
    {t:'Seal in his three happy years', go:'e_h_himitsu'},
    {t:'Seal in a charm that says "we\'ll meet again"', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Three years in the Dragon Palace are seven hundred on land.\nLeft as he was, Taro would age all at once.\nAnd so she gently sealed the flow of time inside the box.\n"As long as it stays closed, my dear Taro stays himself.\nOn lonely nights, hold this box close and sleep."\nThat was the secret of the tamatebako, known to no one at all.\nAnd they lived happily ever after.'},
  hm1:{art:'hime_ryugu', text:'"If the box stays closed, we shall surely meet again."\nWith that wish sealed inside, Otohime gave him the box.\nAnd from that day on, she looked into the water mirror every single day.', next:'hm2'},
  hm2:{art:'ura_fune', text:'In the water mirror, Taro still had not opened the box.\nHe simply watched the sea, and waited.\n"...That is quite enough waiting. Let us go and meet him."\nAnd Otohime called for her swiftest boat.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Across the golden morning sea, the boat went gliding,\nstraight toward the one who was waiting.\nA promise becomes magic only when someone keeps it\nand someone else believes in it.\nAnd they lived happily ever after.'},

  /* ================= The Turtle's Tale ================= */

  v1:{art:'kame_hama', text:'This is the tale of one sea turtle.\nIt loved to doze in the sun, and that day, as always, it was napping on the beach.\nWhen it woke, it was surrounded by children.', next:'v2'},
  v2:{art:'kame_hama', text:'"Don\'t be mean to the turtle!"\nA fisherman with a kind voice came to the rescue,\nand gently carried the turtle back to the sea.\nRocking on the waves, the turtle made up its mind.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'I WILL repay this kindness!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'Back at the Dragon Palace, the turtle got ready at once.\nWhat should it do first?', choices:[
    {t:'Polish its shell until it shines', go:'v3r', set:{vlife:'migaku'}},
    {t:'Report to the Princess right away', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'A guest would be riding on that shell, so it simply had to shine.\nPolished and buffed, it gleamed like a mirror.'
    : '"What a kind soul he must be," said the Princess with a smile.\n"We must invite him here, to thank him properly."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'With the Princess\'s blessing, the turtle swam to the beach.\n"Taro, to repay your kindness, let me take you to the Dragon Palace!"\nIt was the very first time the turtle had ever carried a guest.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Hop on my back!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'And now, the long ride to the Dragon Palace.\nWhich way shall we go?', choices:[
    {t:'Take the secret shortcut', go:'v5r', set:{vmichi:'chika'}},
    {t:'Take the most beautiful road', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'They glided right past an enormous whale. Swoosh!\n"Whoa!" cried Taro on its back.\nThe turtle was rather proud of its shortcut.'
    : 'They wove slowly through the coral forest.\n"How beautiful," sighed Taro on its back.\nThe turtle was rather proud of its scenery.', next:'v6'},
  v6:{art:'ura_ryugu', text:'The guest delivered, the great task complete.\nNow... what next?', choices:[
    {t:'Stay at the palace and take care of him', go:'e_v_senaka'},
    {t:'Go back to the beach and wait for his return', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'For three years, the turtle was Taro\'s very own ride.\nIts back was always the best seat in the sea.\n"Your back is the coziest place I know," Taro would say.\nAnd every time, the turtle\'s shell swelled just a little with pride.\nAnd they lived happily ever after.'},
  vm1:{art:'kame_hama', text:'The turtle returned to the beach, and waited at the water\'s edge every day.\nTurtles live a very, very long time.\nAnd no matter how much time goes by, a turtle never forgets a promise.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'Time flowed on...\nseven hundred years.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Then one morning, a familiar figure stood upon the beach.\n"Welcome home, Taro."\nOn that long-changed shore, one turtle, and one turtle only,\nstill remembered him.\nAnd they lived happily ever after.'}

  };

  Object.assign(T.SCENES_EN, URA_EN);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'The Box He Never Should Have Opened', h:'The original tale, from your very first read'},
    {id:'u_tsuru',    n:'Taro the Crane',                h:'After opening the box, walk toward the sea...'},
    {id:'u_akenai',   n:'The Box He Never Opened',       h:'Keep the promise, and wait upon the shore...'},
    {id:'u_umi',      n:'A Treasure Returned to the Sea', h:'Without opening it, give it back to the sea...'},
    {id:'u_nokoru',   n:'Days in the Dragon Palace',     h:'Choose to stay, just a little longer...'},
    {id:'uh_himitsu', n:'The Secret of the Tamatebako',  h:"In Otohime's Tale, seal in the happy years..."},
    {id:'uh_mukae',   n:'The Boat That Came to Meet Him', h:"In Otohime's Tale, seal in the charm..."},
    {id:'uv_senaka',  n:'The Guest on My Back',          h:"In the Turtle's Tale, stay at the palace..."},
    {id:'uv_matsu',   n:'The Promise on the Beach',      h:"In the Turtle's Tale, wait upon the shore..."}
  );

})();
