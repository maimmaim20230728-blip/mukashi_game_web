"use strict";
/* Le gros navet - French scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "Oh hisse, oh hisse !!" / "Et hop, dehors !!" */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  /* sujet (avec article) / complement de "s'accrocher a" (a + article contracte) */
  var NAMES_FR = { baa:'la grand-mère', mago:'la petite-fille', inu:'le chien', neko:'le chat', nezumi:'la souris', jii:'le grand-père' };
  var A_FR = { baa:'à la grand-mère', mago:'à la petite-fille', inu:'au chien', neko:'au chat', nezumi:'à la souris', jii:'au grand-père' };

  function chainFr(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return 'Le grand-père saisit le navet.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(NAMES_FR[order[i]]) : NAMES_FR[order[i]]) + ' s\'accrocha ' + A_FR[order[i+1]] + ',\n';
    }
    t += 'et le grand-père s\'accrocha bien fort au navet.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_FR = {

  /* ================= Le gros navet ================= */

  kb1:{art:'kabu_hata', text:'Voici l\'histoire d\'un grand, grand champ.\nUn matin de printemps, le grand-père sema une graine de navet.\n"Deviens un navet doux, bien doux. Deviens un navet gros, bien gros."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Chaque jour, le grand-père prenait soin de son navet.\nQu\'est-ce qui compte le plus ?', choices:[
    {t:'L\'arroser abondamment chaque jour', go:'kb2r', set:{care:'mizu'}},
    {t:'Lui parler gentiment chaque jour', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Deviens grand, deviens grand."\nÀ chaque fois qu\'il parlait, les feuilles semblaient se balancer de joie.'
    : 'Avec la lumière du soleil et beaucoup d\'eau,\nles feuilles poussaient de plus en plus haut.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'Le navet grandit et grandit, jusqu\'à devenir plus grand que le grand-père lui-même.\nUn navet pareil, personne au village n\'en avait jamais vu.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Le jour de la récolte était arrivé.';
    if(f.first) return t + '\nLe grand-père retroussa ses manches.';
    return t + '\nQue faire ?';
  }, choices:f=>{
    var c = [{t:'L\'arracher tout de suite', go:'kb5'}];
    c.push({t:'Le faire grandir encore plus', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Demander gentiment au navet', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'Le grand-père saisit le navet et tira de toutes ses forces !', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Oh hisse, oh hisse !!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'Le navet ne bougea pas d\'un poil.';
    if(f.first) return t + '\n"Grand-mère, viens donc me donner un coup de main !"';
    return t + '\nQui aller chercher ?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Aller chercher ' + NAMES_FR[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_FR[f.c2])+' arriva et se plaça au bout de la file.\n'+chainFr(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Oh hisse, oh hisse !!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'Le navet ne bougeait toujours pas du tout.';
    if(f.first) return t + '\n"Cette fois, allons chercher la petite-fille."';
    return t + '\nQui appeler ensuite ?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Aller chercher ' + NAMES_FR[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_FR[f.c3])+' arriva et se plaça au bout de la file.\n'+chainFr(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Oh hisse, oh hisse !!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'Les feuilles se balancèrent, et rien de plus.';
    if(f.first) return t + '\n"Bien, allons chercher le chien aussi."';
    return t + '\nQui appeler ensuite ?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Aller chercher ' + NAMES_FR[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_FR[f.c4])+' arriva et se plaça au bout de la file.\n'+chainFr(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Oh hisse, oh hisse !!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Crrr. Il bougea un tout petit peu... peut-être.';
    if(f.first) return t + '\n"Le chat, viens toi aussi !"';
    return t + '\nAppelons le dernier renfort.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Aller chercher ' + NAMES_FR[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_FR[f.c5])+' arriva et se plaça au bout de la file.\n'+chainFr(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Oh hisse, oh hisse !!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'Il allait sortir, mais il ne sortait pas. Encore un tout petit effort.\nMais il n\'y avait plus personne à appeler.';
    if(f.first) return t;
    return t + '\nQue faire ?';
  }, choices:[
    {t:'Ne pas abandonner. Encore une fois !', go:'kb10', set:{nezumi:1}},
    {t:'S\'arrêter là pour aujourd\'hui', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Alors le chat partit en courant\net ramena une toute petite souris.\n"Nous avons besoin de ta force."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Moi ? Vraiment moi ?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Oh hisse, oh hisse !!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'Le navet s\'envola très haut dans le ciel,\net tout le monde tomba assis par terre.\nAïe... mais sur chaque visage, il y avait un grand sourire.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Enfin, le navet était sorti.\nLe dernier coup de pouce vint de la plus petite souris.\nMême une petite force, réunie à celle de tous, devient la plus grande du monde.\nEt ils vécurent heureux.'},

  /* ---- Let it grow → La fête de tout le village ---- */
  km1:{art:'kabu_sodatsu', text:'"Puisqu\'on en est là, autant le faire grandir jusqu\'au bout."\nIl l\'arrosa, il lui chanta des chansons, il en prit soin jour après jour.\nÀ la fin, le navet devint plus grand que la maison du grand-père.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'Un navet pareil, la famille seule n\'y arriverait jamais.\nLe grand-père monta sur la colline et cria :\n"Ohé ! Tout le village ! Venez nous donner un coup de main !"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'Tout le village, rassemblement !!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'Le boulanger vint, le meunier vint, et les enfants aussi.\nTout le village se mit en une seule longue file.\nEt tout au bout, bien sûr, la petite souris.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Oh hisse, oh hisse !!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'Le navet arraché partit dans une immense marmite.\nDerrière la vapeur résonnaient les rires de tout le monde.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'Le plus gros navet du monde devint la plus grande fête du monde.\nLa douce soupe de navet réchauffa tous les ventres du village.\n"L\'année prochaine, refais-nous en un aussi gros !"\nEt ils vécurent heureux.'},

  /* ---- Ask the turnip → Le cœur du navet ---- */
  ko1:{art:'kabu_talk', text:'Le grand-père s\'assit devant le navet.\n"Je lui ai parlé chaque jour. Ma voix lui parviendra sûrement."\n"Cher navet. Voudrais-tu sortir, maintenant ?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'Les feuilles se balancèrent une fois.\nLa terre se souleva, se gonfla, et alors...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'Tu m\'as appelé ?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"C\'est toi qui me parlais chaque jour, grand-père.\nJe te reconnais bien à ta voix.\nD\'accord. Alors j\'y vais. Un, deux..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'Le navet sortit tout seul d\'un bond.\nMême sans la force, un cœur peut en toucher un autre.\nLe "deviens grand" de chaque jour était un mot magique.\nEt ils vécurent heureux.'},

  /* ---- Call it a day → Demain encore, tous ensemble ---- */
  ka1:{art:'kabu_yuyake', text:'"On s\'arrête là pour aujourd\'hui. Vous avez tous bien travaillé."\nDans le champ au soleil couchant, ils burent du thé chaud.\nEt le navet, lui aussi, se reposa tranquillement.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Demain, on recommencera tous ensemble."\nSur ces mots, chacun rentra chez soi.\nCe n\'est pas grave, un jour où il ne sort pas.\nCar maintenant, il y a un demain qu\'on attend avec plaisir.\nEt ils vécurent heureux.'},

  /* ================= L'histoire du navet ================= */

  kt1:{art:'kt_tsuchi', text:'Voici l\'histoire de ce qui se passe sous la terre.\nJe suis le navet. Au milieu du grand champ, je pousse bien au chaud.\nChaque jour, d\'en haut, j\'entends la voix du grand-père.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Sous la terre aussi, il y a plein de bons moments.\nQue faire aujourd\'hui ?', choices:[
    {t:'Bavarder avec le ver de terre', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Savourer tranquillement le goût du soleil', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Dis donc, tu as encore grandi", dit le ver de terre.\n"Hé hé. C\'est parce que j\'entends une gentille voix chaque jour."'
    : 'Depuis les feuilles, le goût du soleil descend tout doucement.\nUn goût sucré, tout chaud, qui donne un peu envie de dormir.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'Et puis, un jour.\nHoup !\n"Ouah, qu\'est-ce qui se passe ?"\nMon corps est tiré vers le haut. Le jour de la récolte est arrivé.', next:'kt4'},
  kt4:{art:'kt_up', text:'Alors, que faire ?', choices:[
    {t:'Je ne veux pas sortir ! Tenir bon', go:'kt5'},
    {t:'Allez, voir le monde du dehors', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"Je veux rester encore ici !"\nLe navet mit toute sa force dans ses racines et tint bon.\nEn haut : "Oh hisse, oh hisse." Et cela devenait de plus en plus animé.', next:'kt6'},
  kt6:{art:'kt_up', text:'Deux, trois, quatre...\nLe navet tenait bon quand même, et tout à la fin, il entendit une toute petite voix.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'S\'il te plaît, cher navet'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Contre la force, je peux tenir bon aussi longtemps que je veux.\nMais quand une si petite voix me le demande...\n"... Bon, d\'accord alors."\nEt le navet relâcha doucement ses racines.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'Le ciel était haut, et les sourires de tous étaient éblouissants.\n"Tiens donc. Dehors, ce n\'est pas si mal."\nLe navet qui n\'avait pas cédé à la grande force\nn\'avait rien pu contre une petite demande.\nEt ils vécurent heureux.'},

  ktj1:{art:'kt_up', text:'"Au fait, de quelle couleur est le ciel ?"\nLe navet commença à se sentir tout impatient.\n"Allez, je sors de moi-même. Un, deux..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'Il jaillit avec tant d\'élan\nque tout le monde tomba assis par terre en même temps.\n"Le ciel est donc si vaste !"\nSortir quand on l\'a décidé soi-même, c\'était le meilleur des sentiments.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la souris ================= */

  kn1:{art:'kn_naya', text:'Voici l\'histoire d\'une petite souris qui habite dans un coin de la grange.\nLes travaux de force, ce n\'est pas pour elle. Elle ne peut pas porter les choses lourdes.\nMais aujourd\'hui encore, elle trottine partout, pleine d\'entrain.', next:'kn2'},
  kn2:{art:'kn_naya', text:'Que faire ce midi ?', choices:[
    {t:'Chercher un bout de fromage', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Se chauffer au soleil près de la fenêtre', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'Le coin de soleil près de la fenêtre est la meilleure place du monde.\nLes moustaches bien tendues, et on somnole, on somnole.'
    : 'Au fond de la grange, une bonne odeur.\nUn petit bout de fromage trouvé, et les joues sont toutes pleines.', next:'kn3'},
  kn3:{art:'kn_neko', text:'Alors, le chat arriva.\nD\'habitude, la souris se serait enfuie. Mais aujourd\'hui, le chat baissa poliment la tête.\n"J\'ai un service à te demander. Nous avons besoin de ta force."', choices:[
    {t:'Le suivre, même si c\'est effrayant', go:'kn3a'},
    {t:'Demander : "Vraiment, c\'est moi ?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Le cœur battant, la souris suivit le chat.\nDans le champ, tout le monde attendait avec des mines embarrassées.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"C\'est justement parce que tu es petite", dit le chat.\n"On dit que le plus léger doit se placer tout au bout."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'La souris se plaça tout au bout de la file.\nDevant elle, de grands dos, alignés les uns derrière les autres.\nQue peut faire une toute petite souris ?', choices:[
    {t:'Tirer fort avec sa queue', go:'kns1'},
    {t:'Donner la cadence à voix haute', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'La souris enroula sa queue autour de la queue du chat,\net tira de toutes ses forces avec son petit corps !', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Oh hisse, oh hisse !!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"Le dernier coup de pouce, c\'était toi", dit le grand-père.\nUne petite queue, un grand exploit.\nDepuis ce jour, la souris ne mange plus dans un coin de la grange,\nmais au milieu de tout le monde.\nEt ils vécurent heureux.'},

  kno1:{art:'kn_retsu', text:'Si la force ne suffit pas, il reste la voix !\nLa souris prit une grande inspiration et cria de toutes ses forces.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Un, deux ! Oh hisse !!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'Et hop, dehors !!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Grâce à cette voix, toutes les forces tirèrent en même temps.\n"C\'était une bonne cadence", dit la grand-mère en riant.\nMême avec peu de force, on a une voix qui met tout le monde ensemble.\nLa souris bomba le torse et fit "couic".\nEt ils vécurent heureux.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'La grand-mère arriva et se plaça derrière le grand-père.\nLa grand-mère s\'accrocha au grand-père, et le grand-père s\'accrocha bien fort au navet.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Oh hisse, oh hisse !!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'Le navet ne bougeait toujours pas du tout.\nCette fois, la petite-fille arriva et se plaça au bout de la file.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Oh hisse, oh hisse !!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'Les feuilles se balancèrent, et rien de plus.\nCette fois, le chien arriva en courant et se plaça au bout de la file.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Oh hisse, oh hisse !!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Crrr. Il bougea un tout petit peu... peut-être.\nCette fois, le chat arriva d\'un bond et se plaça au bout de la file.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Oh hisse, oh hisse !!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'Il allait sortir, mais il ne sortait pas. Encore un tout petit effort.\nAlors le chat partit et ramena une toute petite souris.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_FR);

  T.ZK_EN.push(
    {section:'Le gros navet'},
    {id:'kb_seishi',  n:'Enfin sorti',                        h:'L\'histoire d\'origine, celle du premier passage'},
    {id:'kb_matsuri', n:'La fête de tout le village',         h:'Ne pas l\'arracher et le faire grandir encore...'},
    {id:'kb_onegai',  n:'Le cœur du navet',                   h:'Lui parler chaque jour pendant qu\'il pousse...'},
    {id:'kb_ashita',  n:'Demain encore, tous ensemble',       h:'Le jour où il ne sort pas, ne pas forcer...'},
    {id:'kt_koe',     n:'Vaincu par une petite voix',         h:'Dans l\'histoire du navet, tenir bon jusqu\'au bout...'},
    {id:'kt_jibun',   n:'Sorti tout seul d\'un bond',         h:'Dans l\'histoire du navet, être curieux du dehors...'},
    {id:'kn_shippo',  n:'Le grand exploit de la petite queue', h:'Dans l\'histoire de la souris, se servir de sa queue...'},
    {id:'kn_ondo',    n:'La petite meneuse de cadence',       h:'Dans l\'histoire de la souris, se servir de sa voix...'}
  );

})();
