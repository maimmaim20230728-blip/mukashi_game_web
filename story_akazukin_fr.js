"use strict";
/* Le Petit Chaperon rouge - French scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Style : francais simple de livre d'images, en accord avec story_fr.js.
   Le celebre echange reprend la formule classique francaise ("C'est pour mieux te ..."). */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var AKZ_FR = {

  /* ================= Le Petit Chaperon rouge ================= */

  z1:{art:'akz_home', text:'Voici l\'histoire d\'une petite fille à qui un chaperon rouge allait à merveille.\nLe chaperon avait été cousu par sa grand-mère, et la petite fille le portait tous les jours.\nC\'est pourquoi tout le monde l\'appelait le Petit Chaperon rouge.', next:'z2'},

  z2:{art:'akz_home', text:'Un jour, sa maman lui dit :\n"Ta grand-mère, de l\'autre côté de la forêt, est malade. Peux-tu lui porter des gâteaux et du jus de raisin ?"\n"Ne traîne pas en chemin, et ne quitte pas le sentier."', next:'z3'},

  z3:{art:'akz_home', text:'Le Petit Chaperon rouge réfléchit un moment.\nMettons encore quelque chose dans le panier.', choices:[
    {t:'Mettre un pot de miel', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Mettre une pomme bien rouge', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'La pomme bien rouge roula dans le panier et y brilla doucement.\nGrand-mère sera-t-elle contente ?'
    : 'Elle posa tout doucement le pot de miel sucré dans le panier.\nGrand-mère sera-t-elle contente ?', next:'z4'},

  z4:{art:'akz_door', text:'"J\'y vais !"\nLe panier au bras, le Petit Chaperon rouge sortit d\'un bond joyeux.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'En route pour la course !!'}, then:'z5'},

  z5:{art:'akz_forest', text:'Dans la forêt de sapins, la lumière scintillait entre les branches.\nOn entendait le chant des petits oiseaux.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Alors, comment marcher aujourd\'hui ?', choices:[
    {t:'Marcher en chantant une chanson', go:'z5r', set:{walk:'uta'}},
    {t:'Marcher en cherchant des papillons', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'Un papillon jaune voltigeait devant elle sur le chemin.\nOn aurait dit qu\'il lui montrait la route.'
    : '"La la la, sur le petit chemin de la forêt."\nLes petits oiseaux chantèrent avec le Petit Chaperon rouge.', next:'z6'},

  z6:{art:'akz_meet', text:'Frou, frou.\nDe derrière un arbre surgit un grand Loup.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Bonjour, petite demoiselle. Où vas-tu donc ?"\ndemanda le Loup avec un grand sourire.';
    if(f.first) return t;
    return t + '\nQue va faire le Petit Chaperon rouge ?';
  }, choices:f=>{
    var c = [
      {t:'Répondre honnêtement', go:'z8'},
      {t:'"Je ne te le dirai pas !"', go:'zn1'},
      {t:'Rentrer vite à la maison en courant', go:'zh1'}
    ];
    if(f.item) c.push({t:'Demander : "Monsieur Loup, tu as faim ?"', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"Chez ma grand-mère. Elle est malade, alors je lui apporte des gâteaux et du jus de raisin."\nLe Petit Chaperon rouge répondit honnêtement.\nEt tout bas, le Loup se mit à préparer un plan rusé.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Regarde donc ces belles fleurs qui poussent là-bas.\nSi tu lui en apportes un bouquet, ta grand-mère sera sûrement contente."';
    if(f.first) return t;
    return t + '\nQue va faire le Petit Chaperon rouge ?';
  }, choices:[
    {t:'Cueillir des fleurs', go:'z10'},
    {t:'"Non, je vais tout droit"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'C\'est bien vrai, pensa le Petit Chaperon rouge, et elle quitta le sentier.\nUne fleur blanche, une fleur bleue. Et chaque fois qu\'elle en cueillait une, une plus belle encore brillait un peu plus loin.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Pendant ce temps, le Loup...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'Le Loup avait pris un raccourci et il était arrivé chez la grand-mère avant elle.\nToc, toc.\n"Grand-mère, c\'est moi, le Petit Chaperon rouge."\nIl imita sa voix et se glissa à l\'intérieur.', next:'z12'},

  z12:{art:'akz_bed', text:'En un clin d\'œil, la grand-mère fut avalée tout entière.\nLe Loup enfila sa chemise de nuit, mit son bonnet de nuit et se glissa dans le lit.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Enfin arriva le Petit Chaperon rouge, son bouquet dans les bras.\n"Tiens, la porte est ouverte..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Grand-mère, me voilà !"\nDans le lit, grand-mère avait un drôle d\'air.\nLe Petit Chaperon rouge s\'approcha doucement et regarda son visage.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'Que tu as de grandes oreilles !'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'C\'est pour mieux t\'entendre'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'Que tu as de grands yeux !'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'C\'est pour mieux te voir'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'Que tu as de grandes mains !'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'C\'est pour mieux t\'attraper'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'Que tu as une grande bouche !'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'C\'est pour mieux te manger !!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'Gloup !!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'Quand elle ouvrit les yeux, tout était noir. Elle était dans le ventre du Loup.\n"C\'est toi, Petit Chaperon rouge ? Tu as eu peur. Mais maintenant tout va bien."\nC\'était la voix de grand-mère, et une main chaude serra la sienne.';
    if(f.first) return t;
    return t + '\nQue vont-elles faire ?';
  }, choices:[
    {t:'Attendre les secours sans bouger', go:'z16'},
    {t:'Chanter très fort toutes les deux', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Main dans la main, toutes les deux attendirent sans bouger.\nLe Loup, le ventre plein, dormait à poings fermés dans le lit.\nSes ronflements résonnaient dans toute la maison.', next:'z17'},

  z17:{art:'akz_hunter', text:'C\'est alors que passa le chasseur qui faisait sa ronde dans la forêt.\n"Quels ronflements, chez la grand-mère... Il y a quelque chose qui cloche."\nIl jeta un coup d\'œil à l\'intérieur : dans le lit, un Loup au ventre tout rond !', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'Clic, clac !!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Avec ses ciseaux, le chasseur ouvrit doucement le ventre du Loup endormi.\n"Il faisait tout noir là-dedans !", dit le Petit Chaperon rouge.\nGrand-mère aussi allait bien. Aucune des deux n\'avait la moindre égratignure.';
    if(f.first) return t;
    return t + '\nQue vont-elles faire ?';
  }, choices:[
    {t:'Remplir son ventre de pierres', go:'z19'},
    {t:'Lui faire promettre : plus jamais', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Le Petit Chaperon rouge courut chercher de lourdes pierres dans le jardin.\nLe chasseur les mit dans le ventre et le recousit point par point.', next:'z20'},

  z20:{art:'akz_stone', text:'Le Loup se réveilla et bondit pour s\'enfuir.\nMais les pierres dans son ventre étaient lourdes, si lourdes.\nBoum ! Il tomba et ne bougea plus.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Tout le monde s\'assit dans l\'herbe et partagea les gâteaux et le jus de raisin.\nGrand-mère aussi semblait déjà aller mieux.\nEt le Petit Chaperon rouge se le promit :\n"Plus jamais je ne traînerai en chemin."\nEt ils vécurent heureux.'},

  /* ---- Ne rien dire / aller tout droit -> La sagesse de grand-mere ---- */
  zn1:{art:'akz_meet', text:'"Je ne te le dirai pas !"\nLe Petit Chaperon rouge releva le menton et repartit d\'un pas décidé.\nLe Loup eut un sourire en coin et disparut derrière les arbres.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Quelque chose la rendait inquiète.\nLe Petit Chaperon rouge pressa le pas et avança sans regarder ni à droite ni à gauche.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Le Petit Chaperon rouge arriva la première chez sa grand-mère.\n"Grand-mère, j\'ai rencontré un grand Loup dans la forêt."\n"Oh là là. Alors fermons la porte à clé."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Clic, fit la serrure.\nPeu après : toc, toc.\n"C\'est moi, le Petit Chaperon rouge, ouvre-moi."\nIl eut beau imiter la voix, toutes les deux restèrent muettes. La porte ne s\'ouvrit pas.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Alors on entendit : crac, crac.\nLe Loup monta sur le toit et se mit à guetter.\nGrand-mère dit tout bas :\n"Ce Loup adore l\'odeur des saucisses. Versons l\'eau de cuisson de la marmite dans l\'auge devant la maison."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'J\'ai une bonne idée'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'La bonne odeur de saucisse monta en nuages épais jusqu\'au toit.\nLe Loup renifla, glissa, glissa encore...\nPlouf !\nTombé dans l\'auge, le Loup s\'enfuit vers la forêt, trempé de la tête aux pattes.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"Grand-mère, tu es formidable !"\n"Hé hé. C\'est ce qu\'on appelle la sagesse des anciens."\nGrand-mère n\'est pas seulement quelqu\'un que l\'on protège.\nCe soir-là, toutes les deux mangèrent des saucisses bien chaudes.\nEt ils vécurent heureux.'},

  /* ---- S'enfuir -> Avec maman ---- */
  zh1:{art:'akz_forest', text:'Le Petit Chaperon rouge fit demi-tour et partit en courant à toutes jambes.\nLe Loup, tout étonné, la regarda s\'éloigner.', next:'zh2'},
  zh2:{art:'akz_home', text:'"Maman ! J\'ai rencontré un grand Loup dans la forêt !"\n"Tu as bien fait de me le dire tout de suite. C\'est très bien.\nAlors nous irons ensemble chez grand-mère."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'Main dans la main avec sa maman, elle reprit le chemin de la forêt.\nAu loin, entre les arbres, le Loup regardait, mais avec une grande personne à côté, il n\'osa pas se montrer.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'Bientôt, des rires résonnèrent dans la maison de grand-mère.\nQuand quelque chose t\'ennuie ou te fait peur, dis-le tout de suite à une grande personne.\nC\'est la meilleure magie du monde.\nEt ils vécurent heureux.'},

  /* ---- Tu as faim ? -> L'invite de la foret ---- */
  zt1:{art:'akz_meet', text:'"Monsieur Loup, tu as faim, peut-être ?"\nLe Loup, surpris, cligna des yeux.\n"...Cela fait trois jours que je n\'ai rien mangé."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Le Petit Chaperon rouge s\'assit au bord du chemin et partagea les gâteaux et la pomme bien rouge.\nLe Loup en prit une bouchée, et une larme roula sur son museau.'
    : 'Le Petit Chaperon rouge s\'assit au bord du chemin et partagea les gâteaux avec du miel dessus.\nLe Loup en prit une bouchée, et une larme roula sur son museau.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"Jamais personne n\'avait été aussi gentil avec moi."\nLe ventre plein, le Loup repartit vers la forêt profonde.\nQuand le Petit Chaperon rouge raconta cela chez sa grand-mère, celle-ci sourit.\n"Un enfant qui sait partager sa nourriture est le plus fort du monde."\nEt ils vécurent heureux.'},

  /* ---- Chanter -> Le choeur dans le ventre ---- */
  zu1:{art:'akz_onaka', text:'"Grand-mère, chantons toutes les deux !"\n"Quelle bonne idée. Même dans le noir, on peut chanter."\nElles prirent une grande inspiration, et...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'Le chœur dans le ventre !!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"La la la, sur le petit chemin de la forêt."\nDehors, le chasseur n\'en crut pas ses oreilles.\n"On chante dans la maison ? Et en plus... dans le ventre du Loup ?!"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'Clic, clac !!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Grâce à votre chanson, je vous ai trouvées tout de suite", dit le chasseur.\nLe Loup, surpris, s\'enfuit vers la forêt la queue entre les pattes.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Même dans l\'endroit le plus sombre, si tu élèves la voix, quelqu\'un t\'entendra."\nLe Petit Chaperon rouge n\'a jamais oublié ces mots de sa grand-mère.\nDepuis ce jour-là, toutes les deux chantent ensemble, comme un petit chœur.\nEt ils vécurent heureux.'},

  /* ---- Faire promettre -> Le matin de la promesse ---- */
  zy1:{art:'akz_rescue', text:'"Les pierres, ce serait trop cruel. À la place..."\nLe Petit Chaperon rouge regarda droit dans les yeux le Loup qui se réveillait.\n"Promets-moi de ne plus jamais manger personne."\nLe Loup baissa la tête et dit tout bas : "...Je ne le ferai plus."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'Dans la lumière du matin, le Loup repartit au fond de la forêt profonde.\nPersonne ne sait s\'il tiendra vraiment sa promesse.\nMais le chasseur dit :\n"Les rondes, c\'est moi qui m\'en charge."\nEt ils vécurent heureux.'},

  /* ================= L'histoire du Loup ================= */

  w1:{art:'w_fuyu', text:'Voici l\'histoire d\'un Loup qui vivait seul dans la forêt d\'hiver.\nLa neige était profonde, et il n\'y avait de gibier nulle part.\nCela faisait trois jours que le Loup n\'avait rien mangé.', next:'w2'},
  w2:{art:'w_fuyu', text:'Une nuit froide, très froide.\nComment le Loup va-t-il la passer ?', choices:[
    {t:'Se rouler en boule dans la grotte', go:'w2r', set:{wnight:'maru'}},
    {t:'Hurler en regardant les étoiles', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Vers le ciel bleu de la nuit : Houuu !\nAucun compagnon ne lui répondit, nulle part.'
    : 'Il cacha son museau sous sa queue et se roula tout en boule.\nMalgré tout, le courant d\'air restait glacé.', next:'w3'},
  w3:{art:'w_mura', text:'Au matin, du haut de la colline, il regarda le village, et l\'odeur du pain tout chaud monta jusqu\'à lui.\nSon ventre gargouilla très fort.\nQue faire ?', choices:[
    {t:'Prendre son courage et demander au boulanger', go:'wp1'},
    {t:'Attendre quelqu\'un sur le chemin de la forêt', go:'wm1'}
  ]},

  /* ---- Demander au boulanger ---- */
  wp1:{art:'w_panya', text:'Quand il descendit au village, tout le monde s\'enfuit de peur.\nSeul le boulanger ne s\'enfuit pas.\n"...Tu as faim ?"', next:'wp2'},
  wp2:{art:'w_panya', text:'Le Loup hocha la tête, tout doucement.\nLe boulanger lui donna une grosse brassée de croûtons de pain bien durs.\n"Tu es le premier loup qui demande au lieu de voler."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'Dès le lendemain, le Loup aida à fendre le bois et reçut du pain en échange.\nLes gens du village qui avaient peur s\'habituèrent peu à peu à lui.\nLe courage de demander était plus fort que n\'importe quel croc.\nEt ils vécurent heureux.'},

  /* ---- Attendre sur le chemin (l'autre cote de l'histoire) ---- */
  wm1:{art:'akz_meet', text:'Pendant qu\'il attendait sur le chemin de la forêt, une petite fille au chaperon rouge arriva.\nIl comptait la manger. Et pourtant, la petite fille s\'approcha en souriant.\n"Monsieur Loup, tu as faim, peut-être ?"', choices:[
    {t:'Dire honnêtement : "Oui, j\'ai faim"', go:'wt1'},
    {t:'Poursuivre le plan rusé', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Cela fait trois jours que je n\'ai rien mangé."\nÀ peine l\'avait-il dit qu\'il en fut lui-même étonné.\nLa petite fille ouvrit son panier et partagea ses gâteaux avec lui.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Je m\'appelle le Petit Chaperon rouge. Monsieur Loup, retrouvons-nous sur ce chemin."\nCelle qu\'il voulait manger était devenue son amie.\nLes jours de faim, il lui suffit d\'aller sur ce petit chemin.\nRien qu\'à cette idée, la forêt d\'hiver est un peu plus chaude.\nEt ils vécurent heureux.'},

  wz1:{art:'akz_gma_out', text:'Le Loup donna une réponse rusée et courut par le raccourci.\nEn courant, quelque chose lui piquait le fond de la poitrine.\n"Si je ne mange pas, je ne passerai pas l\'hiver", se dit-il.', next:'wz2'},
  wz2:{art:'akz_bed', text:'La suite, elle est racontée dans l\'histoire du Petit Chaperon rouge.\nIl avala la grand-mère, puis le Petit Chaperon rouge, et il s\'endormit.\nEt quand il se réveilla...', next:'wz3'},
  wz3:{art:'akz_stone', text:'Son ventre était plein de pierres.\nSi lourdes, si lourdes, qu\'il ne pouvait faire un seul pas.\n"Voilà donc ce qu\'était ce picotement dans ma poitrine..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'Le long hiver passa,\net le printemps arriva.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'Le chasseur, pendant sa ronde, retira les pierres du Loup qui ne pouvait plus bouger et soigna sa blessure.\n"As-tu compris la leçon ?"\nLe Loup hocha la tête encore et encore.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'Dans le vent du printemps, le Loup se remit en route.\nLa prochaine fois qu\'il aura faim, il dira : "Partagez avec moi, s\'il vous plaît."\nLe poids de ces pierres, le Loup ne l\'a pas oublié un seul jour.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la grand-mere ================= */

  g1:{art:'g_heya', text:'Voici l\'histoire de la grand-mère qui vit seule dans une maison au milieu de la forêt.\nC\'est elle aussi qui a tricoté le fameux chaperon rouge.\nAujourd\'hui, elle avait un peu de fièvre et tricotait dans son lit.', next:'g2'},
  g2:{art:'g_heya', text:'Il restait encore un peu de laine rouge.\nQue tricoter ensuite ?', choices:[
    {t:'De petites moufles', go:'g2r', set:{knit:'tebukuro'}},
    {t:'Une longue écharpe', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'Une longue, longue écharpe.\nAssez longue pour l\'enrouler à deux avec le Petit Chaperon rouge.'
    : 'De petites moufles rouges.\nJuste à la bonne taille pour ces petites mains.', next:'g3'},
  g3:{art:'g_heya', text:'À ce moment-là, une grande ombre passa devant la fenêtre.\nToc, toc.\n"Grand-mère, c\'est moi, le Petit Chaperon rouge."\n...Tiens donc. Cette voix n\'est pas comme d\'habitude.', choices:[
    {t:'Vérifier par la fenêtre avant de répondre', go:'gy1'},
    {t:'Répondre : "Entre !"', go:'go1'}
  ]},

  /* ---- Verifier -> L'invite sur le toit ---- */
  gy1:{art:'akz_machibuse', text:'Par la fente du rideau, elle jeta un coup d\'œil : un grand Loup !\nSans se presser ni s\'affoler, grand-mère tourna la clé. Clic.\n"Pour tromper une vieille femme, tu t\'y prends cent ans trop tôt."', next:'gy2'},
  gy2:{art:'akz_yane', text:'Le Loup monta sur le toit. Crac, crac.\nGrand-mère versa d\'un coup l\'eau de cuisson des saucisses dans l\'auge devant la maison.\nAttiré par la bonne odeur, le Loup glissa, glissa, et plouf !', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Trempé de la tête aux pattes, le Loup s\'enfuit vers la forêt.\nQuand grand-mère raconta cela au Petit Chaperon rouge arrivé plus tard, celle-ci ouvrit de grands yeux.\n"Grand-mère, on dirait une héroïne !"\n"Hé hé. Je ne suis pas seulement quelqu\'un que l\'on protège."\nEt ils vécurent heureux.'},

  /* ---- Entre ! -> Calme meme dans le ventre ---- */
  go1:{art:'akz_bed', text:'Celui qui entra, c\'était un grand Loup.\nEn un clin d\'œil, elle fut avalée tout entière.\nMais grand-mère ne s\'affola pas.\nElle avait traversé de longs hivers pendant des dizaines d\'années.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Tiens. Il fait plutôt chaud, dans ce ventre."\nUn peu plus tard, le Petit Chaperon rouge dégringola à l\'intérieur elle aussi.\nGrand-mère serra très fort sa petite main et dit :\n"Tout va bien. Chut, écoute bien. ...Tu entends ? Des pas."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'Clic, clac !!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'Le chasseur ouvrit le ventre tout doucement.\n"Incroyable. Vous êtes restée calme là-dedans tout ce temps ?"\n"Oui. Quand on s\'affole, les bonnes idées ne viennent pas."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Pour le remercier, grand-mère offrit au chasseur la longue écharpe qu\'elle avait commencée.\n"Les rondes d\'hiver, ça doit être bien froid."\nC\'était une journée effrayante, et pourtant tout le monde riait.\nEt ils vécurent heureux.'
    : 'Pour le remercier, grand-mère offrit au chasseur les petites moufles rouges qu\'elle avait commencées.\n"Les rondes d\'hiver, ça doit être bien froid."\nC\'était une journée effrayante, et pourtant tout le monde riait.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, AKZ_FR);

  T.ZK_EN.push(
    {section:'Le Petit Chaperon rouge'},
    {id:'za_seishi',   n:'Le chasseur à la rescousse',  h:'L\'histoire d\'origine, celle de la toute première fois'},
    {id:'za_chie',     n:'La sagesse de grand-mère',    h:'Si tu ne dis rien et vas tout droit...'},
    {id:'za_gassho',   n:'Le chœur dans le ventre',     h:'Si vous chantez ensemble dans le ventre tout noir...'},
    {id:'za_okyaku',   n:'L\'invité de la forêt',       h:'Si tu ajoutes quelque chose au panier et es gentille avec le Loup...'},
    {id:'za_yakusoku', n:'Le matin de la promesse',     h:'Si, une fois sauvée, tu choisis autre chose que les pierres...'},
    {id:'za_okaasan',  n:'Avec maman',                  h:'Si tu as peur, reviens vite et raconte-le...'},
    {id:'zw_pan',      n:'La première demande',         h:'Dans l\'histoire du Loup, descendre au village...'},
    {id:'zw_tomo',     n:'La première amie',            h:'Dans l\'histoire du Loup, répondre honnêtement...'},
    {id:'zw_hansei',   n:'Le vent du printemps',        h:'Où mène vraiment le plan rusé...'},
    {id:'zg_yane',     n:'L\'invité sur le toit',       h:'Dans l\'histoire de grand-mère, vérifier d\'abord...'},
    {id:'zg_onaka',    n:'Calme même dans le ventre',   h:'Dans l\'histoire de grand-mère, rester calme...'}
  );

})();
