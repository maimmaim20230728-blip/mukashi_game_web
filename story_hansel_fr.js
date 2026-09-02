"use strict";
/* Hansel et Gretel - French scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   The rhymes are rendered directly from the PD Grimm original (KHM 15, 1857):
   "Knusper, knusper, Knäuschen..." / "Der Wind, der Wind, das himmlische Kind."
   No wording is taken from any existing French translation. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var HANSEL_FR = {

  /* ================= Hansel et Gretel ================= */

  hg1:{art:'hg_ie', text:'Voici l\'histoire d\'une famille de bûcherons qui vivait au bord d\'une grande forêt.\nHansel et Gretel, le frère et la sœur,\nvivaient là avec leur père et leur belle-mère, tous les quatre.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'Cette année-là, une grande famine s\'abattit sur tout le pays.\nLe pain devint cher, et la nourriture de la maison du bûcheron diminuait un peu chaque jour.';
    if(f.first) return t;
    return t + '\nAujourd\'hui, il ne reste qu\'un petit pain. Comment le partager ?';
  }, choices:[
    {t:'Le partager en quatre, à parts égales', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel en donne plus à sa sœur', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"De toute façon, je n\'ai pas faim."\nHansel posa doucement sa part dans l\'assiette de Gretel.'
    : 'Ils partagèrent le petit pain en quatre et le mangèrent ensemble.\n"Demain, on pourra peut-être en acheter un plus gros."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'Cette nuit-là, les deux enfants entendirent la voix de la belle-mère.\n"Demain matin, nous emmènerons les enfants au fond de la forêt et nous les y laisserons.\nSinon, nous mourrons de faim tous les quatre."\nLe père dit non, encore et encore.\nMais à la fin, il hocha la tête sans un mot.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel se mit à pleurer.\n"Ne t\'inquiète pas. J\'ai une idée."\nHansel sortit sans bruit et ramassa des cailloux blancs au clair de lune.';
    if(f.first) return t + '\nJusqu\'à ce que ses poches soient bien pleines.';
    return t + '\nQuels cailloux ramasser ?';
  }, choices:[
    {t:'Les cailloux ronds et blancs', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'Ceux qui brillent le plus sous la lune', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'Il les essaya un par un et choisit ceux qui brillaient comme de l\'argent.\nJusqu\'à ce que ses poches soient bien pleines.'
    : 'Des cailloux blancs tout ronds, jusqu\'à ce que ses poches soient pleines.\nDe retour dans la maison, il chuchota à Gretel : "Maintenant, tout va bien."', next:'hg5'},

  hg5:{art:'hg_mori', text:'Le lendemain matin, la famille partit vers la forêt.\nTout en marchant, Hansel laissait tomber ses cailloux un par un.\nAu fond des bois, le père alluma un feu.\n"Reposez-vous ici. Nous viendrons vous chercher plus tard."\nSans s\'en rendre compte, les deux enfants s\'endormirent.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'À leur réveil, il faisait nuit noire tout autour.\nGretel se mit à pleurer.\n"Attendons que la lune se lève", dit Hansel.\nEt quand la lune monta enfin au-dessus de la forêt...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'Les cailloux brillent !!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'Les cailloux, brillants comme de l\'argent, traçaient un chemin jusqu\'à la maison.\nMain dans la main, les deux enfants marchèrent jusqu\'au matin pour rentrer.', next:'hg8'},

  hg8:{art:'hg_ie', text:'Le père pleura et les serra tous les deux dans ses bras.\nLa belle-mère, elle, ne dit rien du tout.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Mais la famine continua.\nUne nuit, ils entendirent de nouveau cette voix.\nCette fois, la porte était fermée à clé, et ils ne pouvaient pas sortir.';
    if(f.first) return t + '\nHansel décida d\'émietter le pain du matin pour marquer le chemin.';
    return t + '\nQue faire ?';
  }, choices:[
    {t:'Le matin, marquer le chemin avec des miettes de pain', go:'hg10'},
    {t:'Sortir sans bruit par la fenêtre et ramasser des cailloux', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'Sur le chemin de la forêt, Hansel laissa tomber les miettes, une à une.\nEt de nouveau, les deux enfants s\'endormirent près du feu.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'Quand la lune se leva, il ne restait plus une seule miette.\nLes oiseaux de la forêt les avaient toutes mangées.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'Les deux enfants marchèrent, marchèrent.\nUne nuit, deux nuits, puis le troisième matin.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'Le ventre vide, les jambes épuisées.\nÀ cet instant, sur une branche, un oiseau blanc comme neige chantait.', next:'hg13'},

  hg13:{art:'hg_tori', text:'L\'oiseau volait devant eux et les menait toujours plus loin dans la forêt.\nEt quand ils arrivèrent dans une clairière...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'Une maison de friandises !!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Des murs de pain, un toit de gâteau, des fenêtres de sucre transparent.\nLa maison tout entière était bonne à manger.';
    if(f.first) return t + '\nHansel croqua le toit, Gretel une fenêtre, et ils mangèrent sans s\'arrêter.';
    return t + '\nPar où commencer ?';
  }, choices:[
    {t:'Le gâteau du toit', go:'hg14r', set:{hokashi:'yane'}},
    {t:'Les fenêtres de sucre', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'La fenêtre de sucre se brisa avec un craquement et fondit sur la langue.\n"Je n\'ai jamais rien mangé d\'aussi bon."'
    : 'Le gâteau du toit avait le goût du miel.\n"Je n\'ai jamais rien mangé d\'aussi bon."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Grignote, grignote.\nÀ cet instant, une voix fluette sortit de la maison.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Grignote, grignote, qui grignote ma petite maison ?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'Les deux enfants répondirent :\n"C\'est le vent, c\'est le vent. C\'est le vent, l\'enfant du ciel."\nEt ils continuèrent à manger.', next:'hg17'},

  hg17:{art:'hg_majo', text:'La porte s\'ouvrit, et une vieille femme appuyée sur un bâton parut.\n"Oh, mes chers petits invités. Entrez donc."\nDu lait et des crêpes, des pommes et des noix.\nDans des lits blancs, les deux enfants dormirent profondément.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Mais cette vieille femme...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...était une sorcière.\nLa sorcière avait les yeux rouges et ne voyait pas loin.\nEn revanche, elle avait le nez fin comme une bête.\nQuand un enfant approchait, elle le sentait.', next:'hg19'},

  hg19:{art:'hg_ori', text:'Au matin, Hansel fut enfermé dans une cage.\n"Je vais t\'engraisser, et ensuite je te mangerai."\nGretel dut aller chercher l\'eau et faire la cuisine.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Chaque matin, la sorcière disait :\n"Tends ton doigt. As-tu grossi ?"\nEt au lieu de son doigt, Hansel tendait un petit os.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'C\'est un os !!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'La sorcière aux yeux faibles se laissa tromper encore et encore.\nQuatre semaines passèrent, et elle finit par perdre patience.\n"Gras ou maigre, demain matin je te mangerai."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'La sorcière alluma le feu dans le four.\n"Entre là-dedans et regarde s\'il est bien chaud."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel contre la sorcière !!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel comprit ce que la sorcière avait en tête.';
    if(f.first) return t + '\n"Je ne sais pas comment faire. Comment est-ce qu\'on entre ?"';
    return t + '\nQue faire ?';
  }, choices:[
    {t:'Répondre : "Je ne sais pas comment faire"', go:'hg24'},
    {t:'Prendre la clé de la cage et s\'enfuir', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Quelle sotte enfant. Regarde, c\'est comme ça !"\nEt au moment où la sorcière mit elle-même la tête dans le four...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'Vlan !!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel poussa la sorcière dans le four et referma d\'un coup la porte de fer.\nEt ce fut fini de la sorcière.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel ouvrit la cage.\n"Hansel, c\'est fini !"\nDans la maison, il y avait des coffres pleins de perles et de pierres précieuses.';
    if(f.first) return t + '\nLes deux enfants remplirent leurs poches de pierres précieuses.';
    return t + '\nQue rapporter à la maison ?';
  }, choices:[
    {t:'Remplir ses poches de pierres précieuses', go:'hg27'},
    {t:'Remplir un sac avec la nourriture des étagères', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'En marchant dans la forêt, ils arrivèrent devant une grande étendue d\'eau.\nNi pont, ni bateau.\nAlors un canard blanc s\'approcha à la nage.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Petit canard, s\'il te plaît !!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Petit canard, petit canard, voici Gretel et Hansel.\nNi pont, ni bateau. Prends-nous sur ton dos blanc."\n"À deux, nous serons trop lourds. Passons l\'un après l\'autre."\nEt le canard les porta l\'un après l\'autre sur l\'autre rive.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Après une forêt qu\'ils connaissaient bien, ils revirent leur vieille maison.\nLe père les vit et pleura.\nLa belle-mère n\'était plus là.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'Les perles et les pierres précieuses roulèrent hors des poches, et le père ouvrit de grands yeux.\nÀ partir de ce jour, la nourriture ne leur manqua plus jamais.\nTous les trois vécurent longtemps en bonne entente.\nEt ils vécurent heureux.'},

  /* ---- Encore des cailloux ---- */
  hk1:{art:'hg_koishi', text:'Hansel se glissa sans bruit par la fenêtre\net remplit ses poches de cailloux blancs au clair de lune.', next:'hk2'},
  hk2:{art:'hg_mori', text:'Le lendemain, laissés au fond de la forêt, les deux enfants ne s\'affolèrent pas.\nQuand la lune se leva, les cailloux brillèrent et les menèrent jusqu\'à la maison.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Plus jamais je ne ferai une chose pareille."\nLe père fit cette promesse devant les deux enfants.\nCette nuit-là, la belle-mère aussi resta silencieuse, la tête baissée.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'Cet hiver-là, la maison resta pauvre.\nMais ils partagèrent chaque pain à quatre et attendirent le printemps.\nEt la sorcière de la maison de friandises, ils ne la rencontrèrent pas une seule fois.\nEt ils vécurent heureux.'},

  /* ---- Sur l'autre rive ---- */
  hkw1:{art:'hg_kamado', text:'Gretel prit la clé et fit sortir Hansel de la cage.\n"Sauvons-nous !"\nLa sorcière aux yeux faibles les poursuivit en reniflant l\'air.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Au bord de l\'eau les attendait un canard blanc.\n"Un par un ! Trop lourd, et je coule."\nLe canard porta d\'abord Gretel, puis Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'La sorcière arriva elle aussi sur la rive.\n"Canard, prends-moi aussi sur ton dos."\nMais la sorcière était bien trop lourde, et le canard ne bougea pas d\'un pouce.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'Sur l\'autre rive, la sorcière ne put que taper du pied.\nMain dans la main, les deux enfants rentrèrent à la maison.\nPersonne n\'entra dans le four, et personne ne fut mangé.\nEt ils vécurent heureux.'},

  /* ---- L'hiver du village ---- */
  hgm1:{art:'hg_takara', text:'Gretel regarda les étagères.\nDe la farine, du miel, des noix, des pommes.\n"Cela vaut mieux que des pierres précieuses."\nLes deux enfants remplirent un sac de nourriture.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Le lourd sac dans les bras, ils gagnèrent le bord de l\'eau.\nLe canard blanc porta les deux enfants et le sac un par un sur l\'autre rive.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'Au village, la famine durait encore.\nLes deux enfants partagèrent dans tout le village la nourriture qu\'ils avaient rapportée.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Cet hiver-là, la farine de la maison de friandises devint le pain du village.\nJusqu\'au printemps, quand les champs reverdirent, personne n\'eut faim.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la sorcière ================= */

  hw1:{art:'majo_daidokoro', text:'Voici l\'histoire d\'une sorcière qui vivait au fond de la forêt.\nChaque jour, elle faisait cuire du pain et préparait des friandises,\net elle en faisait des murs et des toits, et bâtissait sa maison sans fin.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'Que va-t-elle faire cuire aujourd\'hui ?', choices:[
    {t:'Des biscuits sucrés', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Du pain aux noix', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'Le pain aux noix sortit du four, bien doré.\nMais il n\'y avait personne pour le manger.\nLa sorcière l\'empila dans le mur.'
    : 'Les biscuits sucrés sortirent du four, bien croquants.\nMais il n\'y avait personne pour les manger.\nLa sorcière les rangea sur le toit.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'Un jour, elle entendit un bruit de grignotement.\nQuelqu\'un mangeait sa maison.\nLes yeux rouges de la sorcière ne voyaient pas loin.\nSeul son nez sentit l\'odeur des enfants.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Qui grignote ma petite maison ?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"C\'est le vent, c\'est le vent, l\'enfant du ciel."\nDeux petites voix répondirent.\nLa sorcière ouvrit la porte. Et maintenant...', choices:[
    {t:'Les engraisser et les manger', go:'hwm1'},
    {t:'Leur préparer un festin', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'Sur la table : du pain tout chaud et du lait.\n"C\'est bon !" "C\'est bon !" répétèrent les deux enfants.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...C\'est bon ?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Il y avait très longtemps que la sorcière n\'avait pas entendu ce mot.\nQuelqu\'un mangeait ce qu\'elle avait fait de ses mains.\nLa sorcière pleura, en cachette.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Depuis ce jour, des invités viennent de temps en temps à la maison de friandises.\nLa sorcière fait encore cuire du pain et prépare des friandises.\nCette fois, pour ceux qui vont les manger.\nEt ils vécurent heureux.'},

  hwm1:{art:'hg_ori', text:'Elle enferma Hansel dans la cage et disait chaque matin : "Tends ton doigt."\nMais les yeux de la sorcière ne distinguaient pas un os d\'un doigt.\n"Toujours aussi maigre..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Pourquoi ne grossis-tu pas !?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'La sorcière perdit patience et alluma le feu dans le four.\n"Regarde s\'il est bien chaud."\n"Je ne sais pas comment faire", dit Gretel.\nAlors la sorcière y fourra elle-même la tête.\n...Elle ne voyait rien du tout.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"Il fait tout noir ici ! Que quelqu\'un tienne la porte !"\nPendant que la sorcière se tortillait, les deux enfants s\'en allèrent.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'La sorcière sortit du four à quatre pattes et prit sa décision.\n"Je vais m\'acheter des lunettes."\nLe lendemain matin, appuyée sur son bâton, elle partit pour la ville.\nCe que la sorcière vit avec ses lunettes, c\'est une tout autre histoire.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de l'oiseau blanc ================= */

  hb1:{art:'tori_sora', text:'Voici l\'histoire d\'un oiseau blanc comme neige qui vivait dans la forêt.\nUn matin, sur le chemin de la forêt, des miettes de pain étaient éparpillées.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'De si bonnes miettes de pain. Que faire ?', choices:[
    {t:'N\'en manger qu\'une', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Manger jusqu\'à plus faim', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'Une seule, c\'était l\'intention.\nMais les autres oiseaux vinrent aussi, et toutes les miettes disparurent.'
    : 'Les autres oiseaux vinrent aussi, et en un instant, toutes les miettes disparurent.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'Cette nuit-là, l\'oiseau les vit :\ndeux enfants qui erraient dans la forêt, cherchant quelque chose.\n"Ce sont... les miettes que nous avons mangées."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'C\'est ma faute'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'L\'oiseau réfléchit.\nQue pouvait-il faire, maintenant ?', choices:[
    {t:'Chercher le chemin du retour depuis le ciel et les guider', go:'hbp1'},
    {t:'Les prévenir de la maison de friandises par une chanson', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'L\'oiseau s\'envola très haut.\nVu d\'en haut, la maison du bûcheron était toute proche.\nIl vola bas devant les deux enfants pour leur montrer le chemin.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"On dirait que cet oiseau nous dit de le suivre."\nLes deux enfants marchèrent derrière lui.\nÀ la sortie de la forêt, ils virent la fumée de leur propre maison.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'L\'oiseau qui avait mangé les miettes de pain\nleur rendit en échange le chemin du retour.\nRéparer, cela commence par ce que l\'on peut faire.\nEt ils vécurent heureux.'},

  hbu1:{art:'hg_tori', text:'L\'oiseau savait.\nLa maison de friandises au fond de la forêt, et celle qui y habitait aussi.\nIl se posa sur une branche et chanta :\n"Grignotez le mur, mais n\'entrez pas dedans."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'N\'entrez pas dedans !'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'Les deux enfants comprirent le sens de la chanson.\nIls grignotèrent un peu du mur pour se remplir le ventre,\net quand la porte s\'ouvrit, ils n\'entrèrent pas et revinrent sur le chemin de la forêt.\nL\'oiseau blanc s\'envola vers leur maison.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'L\'oiseau qui connaissait la maison de friandises\ncontinua de chanter sur sa branche.\nUne chanson d\'avertissement pour tout enfant perdu dans la forêt.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_FR);

  T.ZK_EN.push(
    {section:'Hansel et Gretel'},
    {id:'hg_seishi',  n:'Le retour du canard blanc',    h:'Le conte d\'origine, de ta toute première partie'},
    {id:'hg_koishi',  n:'Encore des cailloux',          h:'La deuxième nuit, sortir par la fenêtre...'},
    {id:'hg_kawa',    n:'Sur l\'autre rive',            h:'Devant le four, choisir de s\'enfuir...'},
    {id:'hg_mura',    n:'L\'hiver du village',          h:'Rapporter la nourriture au lieu des pierres précieuses...'},
    {id:'hw_okyaku',  n:'Les premiers invités',         h:'Dans l\'histoire de la sorcière, préparer un festin...'},
    {id:'hw_megane',  n:'Les yeux rouges et les lunettes', h:'Dans l\'histoire de la sorcière, vouloir les engraisser...'},
    {id:'hb_pankuzu', n:'Qui a mangé les miettes',      h:'Dans l\'histoire de l\'oiseau blanc, guider depuis le ciel...'},
    {id:'hb_uta',     n:'Prévenir par une chanson',     h:'Dans l\'histoire de l\'oiseau blanc, prévenir par une chanson...'}
  );

})();
