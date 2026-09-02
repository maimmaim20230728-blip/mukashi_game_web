"use strict";
/* Urashima Taro - French scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var URA_FR = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Voici l\'histoire d\'un jeune pêcheur qui vivait dans un village au bord de la mer.\nIl s\'appelait Urashima Taro.\nIl vivait avec son vieux père et sa vieille mère, tous les trois ensemble.', next:'u2'},

  u2:{art:'ura_hama', text:'Aujourd\'hui encore, les vagues font un joli bruit.\nQue faire avant de partir à la pêche ?', choices:[
    {t:'Réparer les filets', go:'u2r', set:{ulife:'ami'}},
    {t:'Regarder la mer un moment', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'En regardant les vagues qui scintillent, son cœur devenait tout calme.\nLa mer était la meilleure amie de Taro.'
    : 'Le filet soigneusement réparé était bien tendu.\nPrendre soin de ses outils, c\'était la façon de faire de Taro.', next:'u3'},

  u3:{art:'ura_ijime', text:'Soudain, il vit des enfants sur la plage, qui entouraient une grande tortue en criant.\nLa tortue ne savait plus quoi faire et rentrait la tête.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'Ne faites pas de mal à la tortue !'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'Quand les enfants furent rentrés chez eux, Taro remit doucement la tortue à la mer.\n"Ne te fais plus attraper."\nLa tortue se retourna plusieurs fois, puis disparut derrière les vagues.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Quelques jours plus tard.\nAu bord de l\'eau, la même tortue arriva.\n"Taro, merci pour l\'autre jour.\nPour te remercier, je vais te conduire au Palais du Dragon."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'Sur le dos de la tortue, et hop, au fond de la mer.\nAlors, comment faire le voyage ?', choices:[
    {t:'Bien s\'accrocher à la carapace', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Regarder partout et profiter du paysage', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Vers le Palais du Dragon !!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Des bancs de poissons scintillaient, des colonnes de lumière ondulaient.\nDevant ce paysage inconnu, Taro ne pouvait plus détacher les yeux.'
    : (f.uride==='tsukamaru'
      ? 'Quand il s\'accrocha fort à la carapace, le dos de la tortue était tout chaud,\net, chose étrange, il n\'avait pas peur du tout.'
      : 'Dans la lumière bleue, la tortue plongeait de plus en plus profond.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'Au fond de la mer apparut un château vraiment magnifique.\nC\'était le Palais du Dragon.\nUne beauté qu\'aucun tableau ne pourrait peindre.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Bienvenue, cher Taro. C\'est donc toi, la personne si gentille qui a sauvé notre tortue."\nLa princesse Otohime l\'accueillit avec un sourire.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'La danse de la dorade et du flet !!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Devant une longue table pleine de bons plats, les dorades et les flets dansaient joyeusement.\nTaro ouvrit de grands yeux et battit des mains.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'Dans le château, il y avait la "Salle des quatre saisons".\nPar ses quatre fenêtres, on voyait d\'un seul coup le printemps, l\'été, l\'automne et l\'hiver.';
    if(f.first) return t;
    return t + '\nQuelle fenêtre te plaît le plus ?';
  }, choices:[
    {t:'La fenêtre du printemps, avec les fleurs de cerisier qui tombent', go:'u10r', set:{umado:'haru'}},
    {t:'La fenêtre de l\'hiver, avec la neige qui tombe', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'Vue du fond de la mer, la neige tombait sans un bruit, et on pouvait la regarder sans fin.\n"C\'est étonnant. Ici, il y a vraiment de tout."'
    : 'De l\'autre côté de la fenêtre, les pétales de cerisier voltigeaient doucement.\n"C\'est étonnant. Ici, il y a vraiment de tout."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'Les jours heureux passèrent comme un rêve...\net sans qu\'il s\'en aperçoive, trois ans s\'étaient écoulés.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Un soir, Taro pensa soudain à son père et à sa mère restés au village.\nVont-ils bien ? Ne se sentent-ils pas seuls ?';
    if(f.first) return t + '\n"Princesse Otohime. Je voudrais rentrer chez moi maintenant."';
    return t + '\nQue va-t-il faire ?';
  }, choices:[
    {t:'Dire "je voudrais rentrer chez moi"', go:'u13'},
    {t:'Rester encore un peu ici', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'La princesse Otohime hocha la tête, l\'air un peu triste,\net lui tendit une belle boîte de laque noire et brillante.\n"Cela s\'appelle un tamatebako, une boîte au trésor."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Tu ne dois jamais l\'ouvrir'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'Sur le dos de la tortue, il refit le chemin à travers la mer.\nQuand il se retourna, les lumières du Palais du Dragon devenaient lointaines et petites.', next:'u15'},

  u15:{art:'ura_hama700', text:'Arrivé sur la plage, il trouva que tout était différent.\nSa maison n\'était plus là. Le vieux pin familier non plus.\nSur le chemin, il ne croisait que des visages inconnus.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Pendant les trois ans passés au Palais du Dragon,\nsept cents ans s\'étaient écoulés sur la terre.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'Son père et sa mère appartenaient depuis longtemps à un temps lointain.\nTaro était tout seul.';
    if(f.first) return t + '\nDans sa solitude, il posa la main sur le couvercle du tamatebako.';
    return t + '\nQue va-t-il faire ?';
  }, choices:[
    {t:'Ouvrir le tamatebako', go:'uc_kemuri'},
    {t:'Ne pas l\'ouvrir et continuer d\'attendre sur la plage', go:'ua1'},
    {t:'Aller le rendre à la mer', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Une fumée blanche...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'Quand la fumée se dissipa, Taro était devenu un vieil homme aux cheveux blancs.\nLe temps qui s\'était arrêté au Palais du Dragon revenait d\'un seul coup.';
    if(f.first) return t;
    return t + '\nQue va-t-il faire ?';
  }, choices:[
    {t:'Rester debout, les yeux sur la mer', go:'e_u_seishi'},
    {t:'Se mettre à marcher vers le Palais du Dragon', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Ouvert, et voilà le regret : le tamatebako.\nEt pourtant, dans le cœur de Taro, ces beaux jours qu\'aucun tableau ne pourrait peindre\nrestaient là, comme un trésor.\nSeul le bruit des vagues résonnait doucement.\nFin.'},

  /* ---- La grue (la fin ancienne de l'Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'Vers le bord de l\'eau, un pas, puis un autre.\nComme aspiré par la mer où se trouve le Palais du Dragon, il avança,\net le corps de Taro devint tout léger.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'Il est devenu une grue !!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Devenu une grue blanche, Taro s\'envola au-dessus de la mer au petit matin.\nAlors, entre les vagues, une tortue verte sortit la tête.\nC\'était la princesse Otohime, changée en tortue.\nLa grue et la tortue sont les signes d\'une longue vie et du bonheur.\nTous deux dansèrent pour toujours au-dessus de la mer qui brillait.\nEt ils vécurent heureux.', ending:'u_tsuru'},

  /* ---- Ne pas ouvrir (la promesse du Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro n\'ouvrit pas la boîte.\n"J\'ai promis de ne pas l\'ouvrir."\nÀ partir de ce jour, matin et soir, il regarda la mer depuis la plage.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Un matin, quelques jours plus tard, la mer brillait comme de l\'or,\net un bateau vint en glissant sur l\'eau.\n"Cher Taro. Tu as tenu ta promesse."\nC\'était la voix de la princesse Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Je croyais que, tant que la boîte resterait fermée, nous nous reverrions."\nTaro monta dans le bateau et partit cette fois pour un voyage sans adieux.\nLe tamatebako était le signe de la promesse qui les reliait tous les deux.\nEt ils vécurent heureux.'},

  /* ---- Rendre à la mer ---- */
  uu1:{art:'ura_hama', text:'Taro emprunta un petit bateau et rama vers le large.\n"Ce qui est précieux doit retourner à sa place."\nDoucement, il posa le tamatebako sur les vagues.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Alors, de sous les vagues, la même tortue apparut\net prit la boîte sur son dos.\n"Taro. C\'est peut-être la meilleure réponse de toutes."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'Les souvenirs restent dans le cœur, même si la boîte ne s\'ouvre pas.\nTaro décida de vivre de nouveau comme pêcheur dans le nouveau village.\nAujourd\'hui encore, la mer scintille.\nEt ils vécurent heureux.'},

  /* ---- Rester ---- */
  un1:{art:'ura_otohime', text:'"Laisse-moi rester encore un peu ici. Mais..."\nComme si elle voyait jusqu\'au fond de son cœur, la princesse Otohime hocha doucement la tête\net conduisit Taro devant le miroir d\'eau.', next:'un2'},
  un2:{art:'hime_ryugu', text:'Dans le miroir d\'eau apparaissait la maison familière du village.\nSon père et sa mère riaient, en pleine forme.\n"De temps en temps, nous veillerons sur eux d\'ici.\nEt si tu veux les voir, la tortue t\'y conduira quand tu voudras."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Rassuré, Taro décida de continuer à vivre au Palais du Dragon.\nMême loin les uns des autres, tant qu\'on pense les uns aux autres, une famille reste une famille.\nAu Palais du Dragon, les jours sont paisibles aujourd\'hui encore.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la princesse Otohime ================= */

  h1:{art:'hime_ryugu', text:'Voici l\'histoire de la princesse Otohime du Palais du Dragon.\nUn beau château, de bons plats, des chants et des danses.\nElle avait tout, et pourtant Otohime s\'ennuyait un peu.', next:'h2'},
  h2:{art:'hime_ryugu', text:'Que faire aujourd\'hui ?', choices:[
    {t:'Se promener dans le jardin de corail', go:'h2r', set:{hlife:'sango'}},
    {t:'Aller écouter le chant des baleines', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'De la mer lointaine venait le chant grave des baleines.\nUn chant grand, doux, et un peu solitaire.'
    : 'Des coraux rouges et roses ondulaient dans tout le jardin.\nC\'était beau, mais dommage : il n\'y avait personne à qui les montrer.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Un jour, la tortue revint en toute hâte.\nSa carapace brillait comme un miroir et ses yeux pétillaient.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'Princesse, écoutez-moi !'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"Quelqu\'un m\'a sauvée, alors que j\'étais prise sur la plage."\nTaro, invité au château, était quelqu\'un qui riait beaucoup.\nAu Palais du Dragon, des rires que l\'on n\'avait jamais entendus se multiplièrent,\net les journées ennuyeuses se mirent à prendre des couleurs.', next:'h5'},
  h5:{art:'ura_otohime', text:'Mais un soir de la troisième année.\n"Je voudrais rentrer chez moi maintenant."\nLe cœur d\'Otohime se serra.\nElle voulait le retenir. Mais on ne doit pas arrêter un cœur qui pense à sa famille.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Je voudrais le retenir.\nMais...'}, then:'h6'},
  h6:{art:'ura_tama', text:'La princesse Otohime prépara une boîte de laque noire et brillante.\nQue mettre dans cette boîte avant de la lui offrir ?', choices:[
    {t:'Y enfermer les jours heureux de Taro', go:'e_h_himitsu'},
    {t:'Y enfermer la magie du "nous nous reverrons"', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Trois ans au Palais du Dragon, c\'est sept cents ans sur la terre.\nAinsi, Taro vieillirait d\'un seul coup.\nAlors elle enferma doucement dans la boîte le temps qui avait passé.\n"Tant qu\'elle reste fermée, Taro reste tout à fait Taro.\nLes nuits de solitude, serre cette boîte contre toi et dors."\nC\'était le secret du tamatebako, que personne ne connaissait.\nEt ils vécurent heureux.'},
  hm1:{art:'hime_ryugu', text:'"Si tu n\'ouvres pas la boîte, nous nous reverrons à coup sûr."\nAvec ce vœu à l\'intérieur, la princesse Otohime lui remit la boîte.\nEt à partir de ce jour, elle regarda chaque jour dans le miroir d\'eau.', next:'hm2'},
  hm2:{art:'ura_fune', text:'Dans le miroir d\'eau, aujourd\'hui encore, Taro n\'avait pas ouvert la boîte\net regardait la mer sans bouger.\n"...C\'est assez. Allons le chercher."\nLa princesse Otohime fit sortir son bateau le plus rapide.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Sur la mer dorée du matin, le bateau glissait.\nTout droit vers celui qui attendait.\nUne promesse ne devient magie que lorsque\nquelqu\'un la tient et que quelqu\'un y croit.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la tortue ================= */

  v1:{art:'kame_hama', text:'Voici l\'histoire d\'une tortue de mer.\nElle adorait se chauffer au soleil, et ce jour-là encore elle somnolait sur la plage.\nQuand elle se réveilla, elle était entourée d\'enfants.', next:'v2'},
  v2:{art:'kame_hama', text:'"Ne faites pas de mal à la tortue !"\nUn pêcheur à la voix douce vint à son secours\net la remit doucement à la mer.\nBercée par les vagues, la tortue prit une ferme décision.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'Je rendrai cette bonté à coup sûr !'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'De retour au Palais du Dragon, la tortue se mit tout de suite aux préparatifs.\nQue faire d\'abord ?', choices:[
    {t:'Polir sa carapace jusqu\'à ce qu\'elle brille', go:'v3r', set:{vlife:'migaku'}},
    {t:'Aller tout de suite le raconter à la princesse', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'Un invité allait monter sur ce dos, il fallait donc qu\'il brille.\nUne fois polie, la carapace brillait comme un miroir.'
    : '"Quelle personne merveilleuse", dit la princesse avec un sourire.\n"Invitons-le, pour le remercier comme il faut."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Avec la permission de la princesse, la tortue alla chercher Taro sur la plage.\n"Taro, pour te remercier, je vais te conduire au Palais du Dragon."\nC\'était la première fois de sa vie qu\'elle portait un invité sur son dos.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Monte sur mon dos !!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'Voilà le chemin jusqu\'au Palais du Dragon.\nQuel chemin prendre ?', choices:[
    {t:'Prendre le raccourci secret', go:'v5r', set:{vmichi:'chika'}},
    {t:'Prendre le plus beau chemin', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Hop, elle passa tout près d\'une énorme baleine.\n"Ouah !" s\'écria Taro sur son dos.\nCe raccourci, elle en était un peu fière.'
    : 'Elle traversa lentement la forêt de coraux.\n"Que c\'est beau", soupira Taro sur son dos.\nCe paysage, elle en était un peu fière.', next:'v6'},
  v6:{art:'ura_ryugu', text:'L\'invité est bien arrivé, la grande mission est accomplie.\nEt maintenant, que faire ?', choices:[
    {t:'Rester au Palais du Dragon et s\'occuper de lui', go:'e_v_senaka'},
    {t:'Retourner à la plage et attendre son retour', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'Pendant trois ans, la tortue fut la monture attitrée de Taro.\nSon dos était toujours la meilleure place de la mer.\n"C\'est sur ton dos que je me sens le mieux."\nChaque fois qu\'il le disait, sa carapace se sentait un peu fière.\nEt ils vécurent heureux.'},
  vm1:{art:'kame_hama', text:'La tortue retourna à la plage et décida d\'attendre chaque jour au bord de l\'eau.\nLes tortues vivent très, très longtemps.\nEt quel que soit le temps qui passe, elles n\'oublient jamais une promesse importante.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'Le temps passa : sept cents ans.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Un matin, une personne bien connue se tenait sur la plage.\n"Bon retour, Taro."\nSur cette plage tout changée, une seule,\nla tortue, se souvenait encore de Taro.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, URA_FR);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'La boîte des regrets',          h:'L\'histoire d\'origine, celle du tout premier passage'},
    {id:'u_tsuru',    n:'Taro devenu grue',              h:'Après avoir ouvert la boîte, marcher vers la mer...'},
    {id:'u_akenai',   n:'Le tamatebako jamais ouvert',   h:'Tenir la promesse et attendre sur la plage...'},
    {id:'u_umi',      n:'Le trésor rendu à la mer',      h:'Sans l\'ouvrir, aller la rendre à la mer...'},
    {id:'u_nokoru',   n:'Les jours au Palais du Dragon', h:'Ne pas rentrer et rester encore un peu...'},
    {id:'uh_himitsu', n:'Le secret du tamatebako',       h:'Dans l\'histoire d\'Otohime, y enfermer les jours...'},
    {id:'uh_mukae',   n:'Le bateau venu le chercher',    h:'Dans l\'histoire d\'Otohime, y enfermer la magie...'},
    {id:'uv_senaka',  n:'L\'invité sur le dos',          h:'Dans l\'histoire de la tortue, rester au palais...'},
    {id:'uv_matsu',   n:'La promesse sur la plage',      h:'Dans l\'histoire de la tortue, attendre sur la plage...'}
  );

})();
