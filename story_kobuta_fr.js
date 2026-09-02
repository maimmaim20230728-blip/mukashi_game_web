"use strict";
/* Les trois petits cochons - French scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Traduction propre,
   aucune traduction francaise existante n'a ete reprise. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var KOBUTA_FR = {

  /* ================= Les trois petits cochons ================= */

  p1:{art:'buta_hajimari', text:'Voici l\'histoire de 3 petits cochons qui étaient frères.\nLe grand petit cochon, le petit cochon du milieu et le plus petit cochon.\nIls avaient tous grandi, et chacun décida de bâtir sa propre maison.', next:'p2'},

  p2:{art:'buta_hajimari', text:'Le matin du départ. Que disent les petits cochons à leur maman ?', choices:[
    {t:'Dire gaiement "Nous partons !"', go:'p2r', set:{plife:'genki'}},
    {t:'"On te rapportera quelque chose de bon !"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"J\'attends cela avec impatience", dit la maman en souriant.\nSa main leur fit signe, longtemps, longtemps encore.'
    : '"Bon voyage !", dit la maman, tout aussi gaiement.\nPortés par sa voix claire, ils avaient le pas léger.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'La route se séparait en trois.';
    if(f.first) return t + '\nLes 3 petits cochons se firent signe de la main et prirent chacun sa route.';
    return t + '\nAlors, que font les petits cochons ?';
  }, choices:[
    {t:'Prendre chacun sa route', go:'p4'},
    {t:'Bâtir une seule maison à 3', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'Le grand petit cochon rencontra un homme qui portait une grosse botte de paille sur le dos.\n"S\'il vous plaît, donnez-moi un peu de cette paille."\nUne maison de paille est finie le jour même.\nÊtre prête si vite, voilà sa plus grande qualité.', next:'p5'},

  p5:{art:'buta_eda', text:'Le petit cochon du milieu rencontra un homme avec une brassée de branches.\n"S\'il vous plaît, donnez-moi un peu de ces branches."\nDans une maison de branches, le vent passe et il fait bon.\nVoilà sa plus grande qualité.', next:'p6'},

  p6:{art:'buta_renga', text:'Le plus petit cochon rencontra un homme qui tirait une charrette chargée de briques.\n"S\'il vous plaît, donnez-moi un peu de ces briques."\nUne maison de briques demande du temps, mais elle est très solide.\nVoilà sa plus grande qualité.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'Toc, tac ! Toc, tac !!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Trois maisons étaient prêtes.\nLa maison de paille, la maison de branches et la maison de briques.\nChacune était une maison dont on pouvait être fier.';
    if(f.first) return t;
    return t + '\nQue font les petits cochons en premier dans leurs maisons neuves ?';
  }, choices:[
    {t:'Se montrer les maisons les uns aux autres', go:'p7r', set:{plife2:'miseai'}},
    {t:'Faire une pause et boire le thé', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'Le thé après le travail a un goût tout particulier.\n"Demain, allons nous voir les uns chez les autres !"'
    : '"La tienne a été vite finie !" "Chez toi, le vent est agréable !" "La tienne est solide !"\nChaque maison avait bien sa qualité à elle.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'À ce moment-là.\nUn loup affamé descendit de la montagne\net s\'arrêta devant la maison de paille.';
    return 'À ce moment-là.\nLe plus petit cochon aperçut au loin un loup qui descendait le chemin de la montagne.\nQue font les petits cochons ?';
  }, choices:[
    {t:'Attendre et observer', go:'pc_vs'},
    {t:'Prévenir les autres et se réunir dans la maison de briques', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'Les petits cochons contre le loup !!'}, then:'p9'},

  p9:{art:'buta_wara', text:'Le loup frappa à la maison de paille, toc toc.\n"Petit cochon, petit cochon, laisse-moi entrer."\n"Non, non, je n\'ouvre pas. Par les poils, les poils, les poils de mon menton, jamais de la vie !"\n"Alors je vais souffler et souffler, et faire envoler ta maison tout entière !"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'Pfffouuuu !!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'La maison de paille tourbillonna dans les airs et disparut.\nLe grand petit cochon détala en roulant presque\net se jeta dans la maison de branches du petit cochon du milieu.', next:'p11'},

  p11:{art:'buta_eda', text:'Le loup arriva aussitôt derrière lui.\n"Petits cochons, petits cochons, laissez-moi entrer."\nCette fois, les deux frères répondirent d\'une seule voix :\n"Non, non, nous n\'ouvrons pas. Par les poils, les poils, les poils de notre menton, jamais de la vie !"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'Pfffou, pfffouuuu !!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'La maison de branches s\'envola elle aussi, en mille morceaux.\nLes deux frères coururent à toutes jambes\net se jetèrent dans la maison de briques du plus petit cochon.', next:'p13'},

  p13:{art:'buta_naka', text:'"Ici, nous ne risquons rien.\nCette maison, je l\'ai bâtie lentement, et elle est très solide."\nLe plus petit cochon ferma bien la porte à clé.', next:'p14'},

  p14:{art:'buta_renga', text:'"Petits cochons, petits cochons, laissez-moi entrer."\n"NON, NON, NOUS N\'OUVRONS PAS. PAR LES POILS, LES POILS, LES POILS DE NOTRE MENTON, JAMAIS DE LA VIE !"\nLe loup prit une grande, une profonde inspiration.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... Elle ne bouge pas d\'un pouce !!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Le loup eut beau souffler encore et encore, la maison de briques ne bougeait pas.';
    if(f.first) return t + '\nHaletant et soufflant, le loup leva les yeux vers la cheminée sur le toit.';
    return t + '\nLe loup affamé réfléchit à son prochain coup.';
  }, choices:[
    {t:'Essayer d\'entrer par la cheminée', go:'p16'},
    {t:'Attirer un petit cochon dehors avec de belles paroles', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'Le loup grimpa sur le toit et posa une patte dans la cheminée.\nMais dans la maison, on avait tout prévu depuis longtemps.', next:'p17'},

  p17:{art:'buta_nabe', text:'Au bas de la cheminée, dans l\'âtre, il y avait une grande marmite.\nGlouglou, glouglou. Elle était pleine d\'eau bouillante.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plouuuf !!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"Aïe, aïe, aïe, ça brûle !!"\nLe loup, l\'arrière-train tout brûlé,\nremonta en courant tout droit vers la montagne.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Depuis ce jour, le loup ne revint plus jamais.\nDe temps en temps, les 3 petits cochons se réunissaient\net buvaient ensemble une soupe bien chaude.\nEt ils vécurent heureux.'},

  /* ---- La vraie histoire anglaise (Jacobs 1890 : les 3 ruses) ---- */
  pg1:{art:'buta_renga', text:'Le loup adoucit sa voix.\n"Dis donc, petit cochon. Au bout du village, il y a un beau champ de navets.\nSi on y allait ensemble demain matin, à 6 heures ?"\nLe plus petit cochon comprit tout de suite. (C\'est un piège.)\n"D\'accord. À 6 heures, alors."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Parfait, vivement 6 heures !'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'Le lendemain matin, le petit cochon se leva à 5 heures,\nramassa vite ses navets et rentra chez lui.\nQuand le loup arriva à 6 heures, il fut bien étonné.\n"J\'y suis déjà allé. J\'ai rapporté une pleine marmite de navets."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'Quoiii ? Déjà allé là-bas ?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Cette fois, le loup l\'invita au pommier. "Je viendrai te chercher à 5 heures du matin."\nLe petit cochon partit à 4 heures. Mais pendant qu\'il était encore dans l\'arbre,\nle loup arriva.\n"Je vais te donner la plus belle des pommes !"\nLe petit cochon lança une pomme très loin,\net pendant que le loup allait la chercher, il descendit vite et rentra chez lui.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'Enfin, le loup l\'invita à la foire de la ville. "Allons-y à 3 heures de l\'après-midi."\nLe petit cochon partit avant midi et acheta une baratte à beurre.\nSur le chemin du retour, du haut de la côte, il vit le loup qui montait.\nLe petit cochon se glissa dans la baratte.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Badaboum ! Badaboum !!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Avec le petit cochon dedans, la baratte dévala la côte, badaboum, badaboum !\nEn voyant cette grosse chose ronde foncer sur lui,\nle loup eut la peur de sa vie. Il rentra la queue et s\'enfuit.', next:'pg6'},
  pg6:{art:'buta_renga', text:'Quand le loup apprit plus tard ce qui s\'était passé, il était furieux.\n"Puisque c\'est ainsi, j\'entrerai par la cheminée !"\nMais dans la maison, on avait tout prévu depuis longtemps.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'Dans l\'âtre, la grande marmite faisait glouglou, comme chaque jour.\nC\'était une soupe brûlante, pleine des navets rapportés du champ.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'Plouuuf !!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"Aïe, aïe, aïe, ça brûle !!"\nGravement brûlé, le loup s\'enfuit tout au fond des montagnes,\net on ne le revit plus jamais.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'Le champ de navets, le pommier et la baratte à beurre.\nVoilà le chemin le plus proche de l\'histoire ancienne telle qu\'on la raconte en Angleterre.\nLe plus petit cochon, si malin, vécut ensuite longtemps et heureux.\nEt ils vécurent heureux.'},

  /* ---- À 3 dès le début ---- */
  pk1:{art:'buta_renga', text:'"Bâtissons ensemble une seule maison, une maison bien solide !"\nSur ces mots du plus petit cochon, les 3 frères se mirent à porter des briques.\nÀ 3, même les briques lourdes ne sont rien du tout.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Sous un même toit, trois lits.\nCe fut une belle maison, avec un âtre et des fenêtres.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Le loup affamé arriva\net prit une grande, une profonde inspiration.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... Elle ne bouge pas d\'un pouce !!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'Le loup souffla jusqu\'au coucher du soleil,\npuis repartit vers la montagne, épuisé.\nUne maison bâtie en unissant ses forces est plus solide que tout.\nEt ils vécurent heureux.'},

  /* ---- Aux aguets et prêts ---- */
  pn1:{art:'buta_michi', text:'"Le loup arrive !"\nLe plus petit cochon courut jusqu\'aux maisons de ses deux frères.\nLes 3 petits cochons se réunirent en hâte dans la maison de briques.', next:'pn2'},
  pn2:{art:'buta_naka', text:'En regardant doucement par la fenêtre, ils virent le loup souffler sur la maison de paille.\n"Il n\'y a personne ?!"\nIl souffla aussi sur la maison de branches.\n"Vide ici aussi ?!"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Enfin, il souffla sur la maison de briques. Mais elle ne bougea pas.\nLe loup était tout épuisé\net il s\'assit par terre, le ventre toujours vide.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Une voix sortit de la fenêtre.\n"Un visiteur ? Désolé, c\'est fermé pour aujourd\'hui."\nLe loup repartit vers la montagne à pas lents.\nQuand on est prêt, on ne s\'affole pas. Les 3 frères reprirent leur thé.\nEt ils vécurent heureux.'},

  /* ================= L'histoire du loup ================= */

  pw1:{art:'pwolf_yama', text:'Voici l\'histoire d\'un loup qui vivait dans la montagne.\nCes derniers temps, il ne trouvait presque plus rien à manger,\net son ventre était toujours, toujours vide.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'Où le loup va-t-il chercher à manger aujourd\'hui ?', choices:[
    {t:'Chercher près de la rivière', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Chercher au fond du bois', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Dans le bois, les oiseaux étaient passés avant lui pour les baies.\nSon ventre gargouilla bruyamment.'
    : 'Dans la rivière, il n\'y avait pas même l\'ombre d\'un poisson.\nSon ventre gargouilla bruyamment.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Au pied de la montagne, 3 maisons neuves se dressaient côte à côte.\nEt de quelque part venait une bonne odeur.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'Ça sent le festin !'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Souffler, c\'était le grand talent du loup.\nIl avait fait envoler la maison de paille et la maison de branches,\nmais les petits cochons lui échappaient chaque fois.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Restait la maison de briques. Et celle-là ne bougeait pas.\nLe loup affamé réfléchit à son prochain coup.', choices:[
    {t:'Les attirer dehors avec de belles paroles', go:'pw6'},
    {t:'Essayer de leur parler franchement', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Il les invita au champ de navets : le cochon y était déjà allé.\nIl les invita au pommier : le cochon lui échappa encore.\nIl guettait le retour de la foire, et à ce moment-là,\ndu haut de la côte arriva quelque chose de gros et de rond...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'Badaboum ! Badaboum !!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Badaboum, badaboum, cela roulait sur lui à toute vitesse.\nUne grosse masse ronde comme il n\'en avait jamais vu.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'U-un monstre !!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'Le loup rentra la queue et courut jusqu\'au sommet de la montagne.\n"En bas, au pied de la montagne, il y a un monstre tout rond..."\nCette histoire, on se la raconta longtemps, très longtemps,\nchez les loups de la montagne.\nEt ils vécurent heureux.'},

  pwh1:{art:'buta_renga', text:'Le loup s\'assit devant la porte\net dit d\'une toute petite voix :\n"...En vérité, cela fait des jours et des jours que je n\'ai rien mangé."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Dans la maison, les 3 petits cochons se regardèrent.\nIls n\'ouvrirent pas la porte. Mais une voix sortit de la fenêtre :\n"Attends là un instant."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Par la fenêtre, on tendit doucement une soupe de légumes bien chaude.\nElle était pleine de gros morceaux de navets et de pommes de terre.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'C\'est chaud, souffle dessus !'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'Le fameux souffle du loup\nn\'était plus une force qui fait envoler les maisons,\nmais une force qui refroidit la soupe brûlante juste comme il faut.\nUn talent n\'a jamais un seul usage.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la maison de briques ================= */

  ps1:{art:'prenga_kamado', text:'Voici l\'histoire d\'une maison de briques.\nChaque brique naît cuite lentement, une à une, dans le feu du four.\nC\'est pourquoi elle ne s\'écroule pas au premier choc venu.', next:'ps2'},
  ps2:{art:'buta_renga', text:'Un jour, le plus petit cochon arriva\net se mit à empiler les briques avec soin.\nToc, tac. Toc, tac. Peu à peu, cela devenait une maison.\nQue voyait-on par la première fenêtre achevée ?', choices:[
    {t:'Le grand ciel bleu', go:'ps2r', set:{slife:'sora'}},
    {t:'Le champ de navets au bout du village', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Derrière la fenêtre s\'étendait le champ de navets.\nLa maison aimait le regarder pousser un peu plus chaque jour.'
    : 'Des nuages blancs passaient sur le ciel bleu qui remplissait la fenêtre.\nÊtre une maison, pensa la maison, c\'est vraiment une belle chose.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Un jour, les deux grands frères cochons\nentrèrent en trombe, tout essoufflés.\nDehors, il y avait un loup, semblait-il.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'C\'est mon tour.'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'Le loup prit une profonde inspiration et souffla de toutes ses forces.\nUne fois, deux fois, trois fois.\nPas une seule brique du mur ne bougea.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'Elle ne bouge pas d\'un pouce !!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'Quand la nuit de tempête fut passée, la maison réfléchit.\nDésormais, qu\'est-ce que je vais chérir le plus ?', choices:[
    {t:'Tenir bon contre le vent et la pluie', go:'e_ps_mamoru'},
    {t:'Garder le feu allumé dans l\'âtre', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'Les nuits de vent et les matins de pluie, la maison ne bouge pas d\'un pouce.\nElle sait très bien pourquoi elle est née si solide.\nParce qu\'à l\'intérieur, il y a 3 petits cochons qu\'elle veut protéger.\nEt ils vécurent heureux.'},
  pss1:{art:'buta_soup', text:'L\'hiver arriva. Le feu brûlait dans l\'âtre et la marmite mijotait doucement.\nLa maman cochon vint elle aussi en visite,\net toute la maison était pleine de rires.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'Le travail d\'une maison, c\'est d\'arrêter le vent et la pluie.\nMais son travail le plus important,\nc\'est de garder précieusement les rires à l\'intérieur.\nAujourd\'hui encore, des voix chaleureuses sortent de la maison de briques.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_FR);

  T.ZK_EN.push(
    {section:'Les trois petits cochons'},
    {id:'pb_seishi',   n:'Le refuge de briques',                h:'L\'histoire familière, celle du tout premier passage'},
    {id:'pb_genten',   n:'La vraie histoire anglaise',          h:'Quand le loup vient avec de belles paroles...'},
    {id:'pb_kyoryoku', n:'À 3 dès le début',                    h:'Au carrefour, choisir la même route ensemble...'},
    {id:'pb_sonae',    n:'Aux aguets et prêts',                 h:'Repérer le loup alors qu\'il est encore loin...'},
    {id:'pw_taru',     n:'Un monstre !',                        h:'Dans l\'histoire du loup affamé, choisir les belles paroles...'},
    {id:'pw_fuufuu',   n:'Le vrai usage du souffle',            h:'Dans l\'histoire du loup affamé, parler franchement...'},
    {id:'ps_mamoru',   n:'Elle ne bouge pas',                   h:'Dans l\'histoire de la maison de briques, tenir contre le vent et la pluie...'},
    {id:'ps_waraigoe', n:'Un écrin pour les rires',             h:'Dans l\'histoire de la maison de briques, allumer le feu dans l\'âtre...'}
  );

})();
