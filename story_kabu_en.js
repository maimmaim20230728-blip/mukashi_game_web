"use strict";
/* The Enormous Turnip - English scenario (same structure as story_kabu.js)
   Classic refrains: "They pulled and they pulled..." / "Heave-ho, heave-ho!!" */
(function(){
  var T;
  if (typeof SCENES_EN !== 'undefined') {
    T = { SCENES_EN: SCENES_EN, ZK_EN: ZK_EN };
  } else {
    T = require('./story_en.js');
  }

  var NAMES_EN = { baa:'the old woman', mago:'the granddaughter', inu:'the dog', neko:'the cat' };

  function chainEn(f){
    var order = [];
    if(f.nezumi) order.push('the mouse');
    if(f.c5) order.push(NAMES_EN[f.c5]);
    if(f.c4) order.push(NAMES_EN[f.c4]);
    if(f.c3) order.push(NAMES_EN[f.c3]);
    if(f.c2) order.push(NAMES_EN[f.c2]);
    order.push('the old man');
    if(order.length === 1) return 'The old man took hold of the turnip.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(order[i]) : order[i]) + ' held on to ' + order[i+1] + ',\n';
    }
    t += 'and the old man held on to the turnip.';
    return t;
  }
  function capital(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

  var KABU_EN = {

  /* ================= The Enormous Turnip ================= */

  kb1:{art:'kabu_hata', text:'This is a tale from a wide, wide field.\nOne spring morning, an old man planted a turnip seed.\n"Grow sweet, sweet turnip. Grow big, big turnip!"', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Every day, the old man cared for his turnip.\nWhat should he do most of all?', choices:[
    {t:'Water it well, every day', go:'kb2r', set:{care:'mizu'}},
    {t:'Talk to it kindly, every day', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Grow big, grow big, little turnip!"\nEvery time he spoke, the leaves seemed to wiggle with joy.'
    : 'With plenty of sunshine and plenty of water,\nthe leaves grew taller and taller and taller.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'The turnip grew and grew, until it stood taller than the old man himself.\nNobody in the village had ever seen such a turnip.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'At last, harvest day arrived.';
    if(f.first) return t + '\nThe old man rolled up his sleeves.';
    return t + '\nWhat should he do?';
  }, choices:f=>{
    var c = [{t:'Pull it up right away', go:'kb5'}];
    c.push({t:'Let it grow even bigger', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Try asking the turnip nicely', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'The old man took hold of the turnip and pulled with all his might!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Heave-ho, heave-ho!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'He pulled and he pulled, but the turnip would not come up.';
    if(f.first) return t + '\n"Wife! Come and lend me a hand!"';
    return t + '\nWho should he call?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Call ' + NAMES_EN[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_EN[f.c2])+' came running and joined the line.\n'+chainEn(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Heave-ho, heave-ho!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'They pulled and they pulled, but still the turnip would not budge.';
    if(f.first) return t + '\n"Let\'s call the granddaughter next!"';
    return t + '\nWho should they call next?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Call ' + NAMES_EN[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_EN[f.c3])+' came running and joined the line.\n'+chainEn(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Heave-ho, heave-ho!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'The leaves went swish, swish. And that was all.';
    if(f.first) return t + '\n"Let\'s call the dog, too!"';
    return t + '\nWho should they call next?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Call ' + NAMES_EN[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_EN[f.c4])+' came running and joined the line.\n'+chainEn(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Heave-ho, heave-ho!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Ooomph! It moved... just a tiny, tiny bit!';
    if(f.first) return t + '\n"Come along, cat!"';
    return t + '\nOne helper left to call.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Call ' + NAMES_EN[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_EN[f.c5])+' came running and joined the line.\n'+chainEn(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Heave-ho, heave-ho!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'So close! But still it would not come up.\nAnd there was nobody left to call.';
    if(f.first) return t;
    return t + '\nWhat should they do?';
  }, choices:[
    {t:'Don\'t give up. One more try!', go:'kb10', set:{nezumi:1}},
    {t:'Call it a day', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Then the cat slipped away, and came back\nwith a teeny, tiny mouse.\n"We need your strength, little friend."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Who... me?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Heave-ho, heave-ho!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'The turnip flew high into the air,\nand everyone tumbled down, plop, plop, plop!\nOuchie... but every single face wore a great big smile.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'At last, the turnip was out!\nAnd the very last push came from the very smallest mouse.\nEven the littlest strength, joined with everyone\'s, is the strongest in the world.\nAnd they all lived happily ever after.'},

  /* ---- Let it grow → The Whole-Village Festival ---- */
  km1:{art:'kabu_sodatsu', text:'"Well now. If it has come this far, let\'s see just how big it can get!"\nWater and songs, songs and water, day after day after day.\nAt last, the turnip grew bigger than the old man\'s house.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'A turnip like this was far too big for one family.\nSo the old man stood on the hill and shouted,\n"Hellooo! Everyone in the village! Come and lend a hand!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'The whole village, assemble!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'The baker came, and the miller came, and all the children came.\nThe whole village joined up in one long, long line.\nAnd at the very end, of course... one teeny, tiny mouse.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Heave-ho, heave-ho!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'Into a great big pot went the great big turnip.\nAnd through the rising steam rang the sound of everyone laughing.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'The biggest turnip in the world became the biggest festival in the world.\nSweet turnip soup warmed every tummy in the village.\n"Grow us another big one next year!"\nAnd they all lived happily ever after.'},

  /* ---- Ask the turnip → The Turnip's Feelings ---- */
  ko1:{art:'kabu_talk', text:'The old man sat himself down in front of the turnip.\n"I have talked to you every single day. Surely my voice will reach you."\n"Dear turnip. Would you kindly come on out?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'The leaves gave a little sway.\nThe soil began to wriggle and bulge, and then...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'You called?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"It was you who talked to me every day, wasn\'t it?\nI know your voice very well.\nAll right then. Here I come. Ready...?"', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'The turnip hopped out all by itself, boing!\nYou don\'t always need muscles. Sometimes a heart will do.\nAll those days of "grow big, grow big" were magic words after all.\nAnd they all lived happily ever after.'},

  /* ---- Call it a day → Tomorrow, All Together ---- */
  ka1:{art:'kabu_yuyake', text:'"That\'s enough for today. Everyone worked so very hard."\nIn the sunset field, they all shared warm cups of tea.\nAnd the turnip got to rest easy, one more night.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Tomorrow we\'ll pull again, all together!"\nAnd off they went, each to their own home.\nA day when the turnip won\'t come up is still a good day.\nBecause now, there is tomorrow to look forward to.\nAnd they all lived happily ever after.'},

  /* ================= The Turnip's Tale ================= */

  kt1:{art:'kt_tsuchi', text:'This is a tale from under the ground.\nI am the turnip. Right in the middle of the wide field, I am growing warm and cozy.\nAnd every day, from up above, I hear the old man\'s voice.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'There is plenty of fun down here in the soil.\nWhat shall we do today?', choices:[
    {t:'Chat with the earthworm', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Slowly taste the sunshine', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"My, you\'ve grown again!" says the earthworm.\n"Heh heh. That\'s because I hear a kind voice every day."'
    : 'Down from the leaves trickles the taste of the sun.\nSweet, and warm, and just a little bit sleepy.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'Then, one day...\nYANK!\n"Wh-whoa! What\'s happening?!"\nSomething was pulling me up. Harvest day had come.', next:'kt4'},
  kt4:{art:'kt_up', text:'Now, what should the turnip do?', choices:[
    {t:'Not yet! Hold on tight!', go:'kt5'},
    {t:'All right, let\'s see the world!', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"I want to stay a little longer!"\nThe turnip squeezed its root and held on tight, tight, tight.\nUp above: "Heave-ho, heave-ho!" It was getting livelier and livelier.', next:'kt6'},
  kt6:{art:'kt_up', text:'Two of them. Three of them. Four...\nThe turnip held on and on. And then, at the very end,\ncame one teeny, tiny voice.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Please, dear turnip'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Against big strong pulls, I could hold on forever.\nBut against a tiny little please like that...\n"...Oh, all right. You win."\nAnd the turnip gently, gently let go.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'The sky was so high, and everyone\'s smiles were so bright.\n"Well, well. It\'s not so bad out here."\nThe turnip that never lost to any mighty pull\nlost, in the end, to one tiny please.\nAnd they all lived happily ever after.'},

  ktj1:{art:'kt_up', text:'"Come to think of it... what color is the sky, anyway?"\nThe turnip began to feel wiggly and jiggly all over.\n"That settles it. I\'ll jump out myself! Ready...?"', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'Out it flew, with such a mighty leap\nthat everyone tumbled down on their bottoms, plop!\n"So THIS is the sky! Look how big it is!"\nJumping out on your own turns out to feel wonderful.\nAnd they all lived happily ever after.'},

  /* ================= The Mouse's Tale ================= */

  kn1:{art:'kn_naya', text:'This is the tale of a teeny, tiny mouse who lived in the corner of the barn.\nHeavy lifting? No good at it. Carrying big things? Not a chance.\nBut still, every day, off it scurried, happy as could be.', next:'kn2'},
  kn2:{art:'kn_naya', text:'What shall we do this afternoon?', choices:[
    {t:'Hunt for a crumb of cheese', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Sunbathe by the window', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'The sunny spot by the window is the best seat in the world.\nWhiskers stretched out straight... doze... doze...'
    : 'Deep in the barn, something smelled delicious.\nOne little crumb of cheese, and now both cheeks are stuffed full!', next:'kn3'},
  kn3:{art:'kn_neko', text:'Just then, the cat came along.\nAny other day, the mouse would have run.\nBut today, the cat bowed its head, ever so politely.\n"I have a favor to ask. We need your strength."', choices:[
    {t:'It\'s scary... but follow along', go:'kn3a'},
    {t:'Ask: "Are you sure you want ME?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Heart pounding, the mouse followed the cat.\nOut in the field, everyone stood waiting with worried faces.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"It\'s because you are small," said the cat.\n"They say the lightest one belongs at the very end of the line."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'The mouse took its place at the very end of the line.\nUp ahead: a row of great big backs, stretching away.\nWhat can one teeny, tiny mouse do?', choices:[
    {t:'Grab on tight with your tail!', go:'kns1'},
    {t:'Lead the pull with a great big shout!', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'The mouse wound its little tail around the cat\'s tail,\nand pulled with every bit of its tiny body!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Heave-ho, heave-ho!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"The very last push was yours, little one," said the old man.\nA tiny tail. A mighty deed.\nAnd from that day on, the mouse no longer ate in the corner of the barn,\nbut right in the middle of everyone.\nAnd they all lived happily ever after.'},

  kno1:{art:'kn_retsu', text:'If strength won\'t do it, a voice will!\nThe mouse took the deepest breath of its life, and shouted with all its might:', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Ready? HEAVE-HO!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'OUT IT CAME!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Thanks to that one voice, everyone pulled at exactly the same time.\n"What a fine little leader," laughed the old woman.\nSmall paws, but a voice that brings everyone together.\nThe mouse puffed out its chest and gave a proud little squeak.\nAnd they all lived happily ever after.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'The old woman came running and joined the line behind him.\nThe old woman held on to the old man, and the old man held on to the turnip.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Heave-ho, heave-ho!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'They pulled and they pulled, but still the turnip would not budge.\nNext came the granddaughter, and she joined the end of the line.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Heave-ho, heave-ho!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'The leaves went swish, swish. And that was all.\nNext came the dog, running fast, and joined the end of the line.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Heave-ho, heave-ho!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Ooomph! It moved... just a tiny, tiny bit!\nNext came the cat, flying like the wind, and joined the end of the line.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Heave-ho, heave-ho!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'So close! But still it would not come up.\nThen the cat slipped away, and came back with a teeny, tiny mouse.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_EN);

  T.ZK_EN.push(
    {section:'The Enormous Turnip'},
    {id:'kb_seishi',  n:'Out It Came at Last',        h:'The original tale, from your very first read'},
    {id:'kb_matsuri', n:'The Whole-Village Festival', h:'Wait, and let it grow even bigger...'},
    {id:'kb_onegai',  n:"The Turnip's Feelings",      h:'Talk to it kindly every day as it grows...'},
    {id:'kb_ashita',  n:'Tomorrow, All Together',     h:'On a day it will not budge, do not push too hard...'},
    {id:'kt_koe',     n:'Beaten by a Tiny Please',    h:"In the Turnip's Tale, hold on and on..."},
    {id:'kt_jibun',   n:'Out It Jumped, All By Itself', h:"In the Turnip's Tale, get curious about the sky..."},
    {id:'kn_shippo',  n:'The Mighty Little Tail',     h:"In the Mouse's Tale, use your tail..."},
    {id:'kn_ondo',    n:'The Littlest Leader',        h:"In the Mouse's Tale, use your voice..."}
  );

})();
