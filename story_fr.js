"use strict";
/* French scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book French. */

var SCENES_FR = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Il était une fois un vieil homme et une vieille femme.\nLe grand-père partait à la montagne couper du bois, et la grand-mère partait à la rivière laver le linge.', next:'m2'},

m2:{art:'momo_river', text:'Pendant qu\'elle lavait le linge au bord de la rivière, une grosse pêche descendit le courant, flic flac, flic flac.', choices:[
  {t:'La rapporter à la maison', go:'m3a', set:{open:'home'}},
  {t:'L\'ouvrir sur place', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Hop là, hop là ! La grand-mère porta la pêche jusqu\'à la maison.\nAvec le grand-père, elle se mit tout de suite à l\'ouvrir, et alors...', next:'c_paka'},
m3b:{art:'momo_river', text:'La grand-mère ne pouvait plus attendre. Elle décida d\'ouvrir la pêche là, sur une pierre au bord de la rivière. Et alors...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'Crac !!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'Un petit garçon plein de vie en bondit !\nLa grand-mère prit le bébé dans ses bras et rentra vite à la maison.\nAvec le grand-père, tout heureux, ils le nommèrent "Momotaro".'
  : 'Un petit garçon plein de vie en bondit !\nTout heureux, tous les deux nommèrent "Momotaro" ce garçon né d\'une pêche.', next:'m5'},

m5:{art:'kids', text:'Momotaro adorait jouer avec les enfants du village.\nQue fait Momotaro aujourd\'hui ?', choices:[
  {t:'Faire du sumo', go:'m5a', set:{hobby:'sumo'}},
  {t:'Faire la course', go:'m5b', set:{hobby:'run'}},
  {t:'Aider aux travaux', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Même les plus grands enfants tombaient les uns après les autres.\n"Personne au village n\'est aussi fort !" s\'étonnaient-ils tous.', next:'m6'},
m5b:{art:'kids', text:'Aucun enfant ne courait plus vite que Momotaro.\nIl filait comme le vent, et tous en restaient bouche bée.', next:'m6'},
m5c:{art:'kids', text:'Même le bois lourd était tout léger dans les bras de Momotaro.\nC\'était une grande aide pour le grand-père et la grand-mère.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro grandit vite et devint un jeune homme fort et gentil.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'Cette nuit-là.\nIl arriva quelque chose de terrible au village.'}, then:'m7'},
m7:{art:'village_sad', text:'Le lendemain matin.\nOn apprit que les ogres de l\'île aux Ogres avaient emporté le trésor du village.\nLes gens du village ne savaient plus quoi faire.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro se leva.\n"J\'irai à l\'île aux Ogres et je rapporterai notre trésor !"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'La grand-mère lui prépara les meilleures boulettes de millet du Japon.\nIl les accrocha à sa ceinture : il était fin prêt pour le départ.'
  : 'La grand-mère propose de lui préparer les meilleures boulettes de millet du Japon.\nQue fait Momotaro ?', choices:[
  {t:'S\'en faire préparer beaucoup', go:'m10', set:{dango:'full'}},
  {t:'N\'en prendre que quelques-unes et voyager léger', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'Le matin du départ.\nLa grand-mère sortit deux bandeaux.\nLequel va-t-il mettre ?', choices:[
  {t:'Le bandeau blanc', go:'m10r', set:{band:'white'}},
  {t:'Le bandeau rouge', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Il noua bien serré le bandeau rouge, et tout au fond de sa poitrine, une chaleur monta.\n"Je pars !"'
  : 'Il noua bien serré le bandeau blanc, et son cœur devint calme et limpide.\n"Je pars !"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'En route contre les ogres !!'}, then:'m11'},

m11:{art:'michi', text:'Le chemin se séparait en deux.\nL\'un passait par la montagne, l\'autre longeait la mer.\nQuel chemin prendre ?', choices:[
  {t:'Prendre le chemin de la montagne', go:'m11a', set:{road:'yama'}},
  {t:'Prendre le chemin du bord de mer', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Du sommet de la montagne, il aperçut au loin une petite île noire, toute seule sur la mer.\nC\'est donc là, l\'île aux Ogres...\nMomotaro serra les poings.', next:'m12'},
m11b:{art:'umizoi', text:'Il marcha sur le sable en écoutant le bruit des vagues.\nÀ ses pieds, il trouva un joli coquillage rose pêche.\nCe sera un cadeau pour la grand-mère.', next:'m12'},

m12:{art:'dog', text:'Comme il marchait d\'un bon pas, un Chien arriva.\n"Momotaro, où vas-tu ? Donne-moi une boulette de millet, et je t\'accompagne !"', choices:[
  {t:'Lui donner une boulette', go:'c_dog_join', set:{dog:1}},
  {t:'"Désolé, je suis pressé"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'Le Chien rejoint l\'équipe !!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Je n\'en ai que quelques-unes, mais partageons."\nLe Chien remua la queue de joie !'
  : 'Le Chien remua la queue de joie !\n"Je t\'accompagnerai partout !"', next:'m13'},
m12n:{art:'dog', text:'L\'air un peu déçu, le Chien regarda Momotaro s\'éloigner.', next:'m13'},

m13:{art:'saru', text:'Ensuite, un Singe l\'appela du haut d\'un arbre.\n"Donne-moi une boulette de millet, et je te montrerai le chemin !"', choices:[
  {t:'Lui donner une boulette', go:'c_saru_join', set:{saru:1}},
  {t:'"Désolé, je dois me dépêcher"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'Le Singe rejoint l\'équipe !!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Même avec un petit morceau de boulette, le Singe était tout content.\nIl descendit vite de l\'arbre et se tapa la poitrine.'
  : 'Le Singe descendit vite de l\'arbre et se tapa la poitrine.\n"Compte sur moi !"', next:'m14'},
m13n:{art:'saru', text:'Du haut de l\'arbre, le Singe agita la main.', next:'m14'},

m14:{art:'kiji', text:'Un Faisan descendit du ciel en planant.\n"Donne-moi une boulette de millet, et j\'irai voir l\'île aux Ogres depuis le ciel !"', choices:[
  {t:'Lui donner une boulette', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Désolé, je dois vraiment y aller"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'Le Faisan rejoint l\'équipe !!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'Le Faisan mangea sa demi-boulette avec grand soin.\nPuis il ouvrit les ailes et fit un tour joyeux dans le ciel.'
  : 'Le Faisan ouvrit joyeusement les ailes et fit un tour dans le ciel.\n"Le ciel, c\'est mon affaire !"', next:'m15'},
m14n:{art:'kiji', text:'Le Faisan fit un grand tour et s\'envola vers les montagnes.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'Au port, il y avait un petit bateau.';
  if(n===0) t += '\nIl n\'avait aucun compagnon, mais sa décision était prise.';
  else if(n===1) t += '\nÀ deux, ils montèrent à bord en unissant leurs forces.';
  else t += '\nUne fois tout le monde à bord, le bateau était plein à craquer.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Larguez les amaaarres !!'}, then:'m16'},

m16:{art:'fune_night', text:'La mer était calme dans la nuit.\nSous le ciel étoilé, Momotaro réfléchissait.', choices:[
  {t:'Se rappeler le goût des boulettes de la grand-mère', go:'m17', set:{think:'dango'}},
  {t:'Penser au trésor du village', go:'m17', set:{think:'takara'}},
  {t:'Se demander comment sont les ogres', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'Le goût sucré des boulettes semblait lui donner du courage.\nDemain, tout ira bien, c\'est sûr.',
  takara:'Les visages des gens du village lui revinrent en mémoire.\nIl faut absolument rapporter le trésor.',
  oni:'Sont-ils forts ? Font-ils peur ?\n...Il ne le saura qu\'en les rencontrant.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'Dans la lumière du matin, l\'île se rapprochait à vue d\'œil.';
  if(f.first) t += '\nLe Faisan vola devant et montra à tous où se trouvait l\'île.';
  else if(f.kiji) t += '\nLe Faisan vola devant en éclaireur et revint aussitôt.\n"Il y a une grande porte ! Et un sentier rocheux par-derrière !"';
  else t += '\nÀ la proue du bateau, Momotaro regardait l\'île droit devant.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'La voilà, l\'île aux Ogres !'}, then:'m19'},

m19:{art:'onigashima', text:'Sur l\'île pleine de rochers se dressait une grande porte noire.\nPar où entrer ?', choices:f=>[
  {t:'Passer fièrement par la grande porte', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Prendre le sentier rocheux trouvé par le Faisan', go:'m20', set:{gate:'back'}}
    : {t:'Faire le tour de l\'île et chercher un passage', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro se planta devant la porte, la tête haute.\n"Ogres ! Je viens reprendre le trésor du village !"'
  : (f.kiji
    ? 'Guidés par le Faisan, ils montèrent sans bruit le sentier rocheux.\nLes ogres de garde n\'avaient encore rien remarqué.'
    : 'Entre les rochers, ils trouvèrent un sentier étroit.\nIls montèrent sans bruit, et les ogres de garde n\'avaient encore rien remarqué.'), next:'m21'},
m21:{art:'onigashima', text:'Son cœur se mit à battre très fort.\nVoilà, c\'est le moment.', choices:[
  {t:'Respirer un grand coup', go:'m21r', set:{calm:1}},
  {t:'Se lancer d\'un bond', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'On inspire, on expire.\nSon cœur se calma d\'un coup. Bien, allons-y.'
  : 'Avant même d\'avoir réfléchi, son corps s\'élançait déjà !', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'Dans un grondement sourd, le chef des ogres apparut !', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'Qui es-tu !!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Rends-nous le trésor !!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Je viens reprendre le trésor du village. Je suis Momotaro !"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(En repensant au goût des boulettes, il n\'eut curieusement plus peur.)',
    takara:'(Tout le village attend. Je ne peux pas perdre !)',
    oni:'(Il est grand. Il a l\'air fort. Mais... ses yeux ont quelque chose de triste.)'
  }[f.think] || '');
  t += '\nComment se battre ?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'Tous ensemble, maintenant !', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Se battre au sabre !', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Chien, à toi !', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Singe, à toi !', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Faisan, à toi !', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Rengainer le sabre et discuter', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'Tous ensemble, maintenant !!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'La morsure du Chien !!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Le coup de griffe du Singe !!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Le coup de bec du Faisan !!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'Le coup de sabre !!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'La charge du Chien !!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Le geste éclair du Singe !!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Le piqué du Faisan !!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'Quoi ?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'En plein dans le mille !!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'Le Chien mordit la jambe, le Singe griffa le dos, et le Faisan, à grands battements d\'ailes, frappa la tête de son bec.\nMême le chef ne pouvait rien contre l\'attaque des 3 compagnons à la fois.\n"J-je me rends !"\nQuand on unit ses forces, on ne craint plus rien.', next:'m24'},

rk:{art:'maitta', text:f=>'Le sabre de Momotaro fila comme l\'éclair !\nLa massue de fer du chef fut projetée haut dans le ciel.\n"J-je me rends !"\n' + HOBBY_LINE_FR(f), next:'m24'},
rd:{art:'maitta', text:'Le Chien s\'élança comme le vent et mordit le chef à la jambe !\nBadaboum ! Le chef tomba sur le derrière.\n"J-je me rends !"\nMomotaro, qui avait fait confiance au Chien, redressa la poitrine et rit.', next:'m24'},
rs:{art:'maitta', text:'Le Singe bondit de-ci de-là et arracha d\'un coup la massue des mains du chef.\n"J-je me rends !"\nDevant la vitesse du Singe, Momotaro applaudit sans même y penser !', next:'m24'},
rj:{art:'maitta', text:'Le Faisan piqua du haut du ciel ! À grands battements d\'ailes, il boucha la vue du chef !\nLa tête tournant, le chef cria : "J-je me rends !"\nOn peut vraiment compter sur un compagnon du ciel. Momotaro lui fit un grand signe de la main.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'Le chef se fit tout petit et demanda pardon.\n"Nous rendons le trésor. Alors pardonnez-nous..."';
  if(!f.first) t += '\nQue fait Momotaro ?';
  return t;
}, choices:[
  {t:'Rentrer au village avec le trésor', go:'e_gaisen'},
  {t:'Demander pourquoi ils l\'ont pris', go:'m25'}
]},
m25:{art:'talk', text:'Le chef se mit à parler, mot après mot.\n"L\'île aux Ogres n\'est que rochers, rien n\'y pousse. Nous ne voulions pas que nos enfants aient faim..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro ne porta pas la main à son sabre et regarda droit devant lui.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Je veux vous parler !!'}, then:'t2'},
t2:{art:'talk', text:'Le chef ouvrit de grands yeux, puis se mit à parler, mot après mot.\n"L\'île aux Ogres n\'est que rochers, rien n\'y pousse. Pour nos enfants, nous n\'avions d\'autre choix que d\'emprunter votre trésor..."\nMomotaro écouta le chef et réfléchit.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Partager les boulettes de millet avec tous', go:'e_kibi'});
  c.push({t:'Promettre de rendre le trésor et de devenir amis du village', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Momotaro revint au village avec la charrette chargée de trésor.\nTout le village était en joie !\n';
  t += ({
    minna:'Le Chien, le Singe et le Faisan ouvraient le grand défilé, la tête haute.\nOn parla longtemps au village de ce qu\'avaient fait les 3 compagnons.',
    katana:'Au village, on ne parlait plus que du magnifique coup de sabre de Momotaro.',
    dog:'C\'est le Chien, le héros du jour, qui tirait la charrette. La tête haute, il marchait en tête du défilé de la fête.',
    saru:'Le Singe portait sur l\'épaule la massue prise au chef, tout fier.',
    kiji:'Le Faisan fit un tour dans le ciel de la fête et laissa tomber une belle plume.'
  }[f.style] || '');
  if(f.shell) t += '\nIl donna aussi à la grand-mère le coquillage rose pêche.\n"On entend la mer dedans", dit-elle en riant.';
  t += '\nEt ils vécurent heureux.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro reprit le trésor et, en échange, envoya du riz et des pommes de terre de semence à l\'île aux Ogres.\nDès le printemps suivant, les ogres vinrent aider aux travaux des champs du village.\nEt à la fête du village, les tambours des ogres résonnaient.';
  if(f.shell) t += '\nLa grand-mère faisait sonner son coquillage en rythme avec les tambours.';
  t += '\nEt ils vécurent heureux.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"Nous rendons le trésor. C\'est promis."\nMomotaro et le chef scellèrent la promesse avec le petit doigt.\nDès lors, l\'île aux Ogres et le village se rendirent visite peu à peu.\nMomotaro était rentré sans se battre, et les gens du village le félicitèrent : "C\'est vraiment quelque chose."';
  if(f.shell) t += '\nQuand il montra le coquillage, la grand-mère eut un grand sourire.';
  t += '\nEt ils vécurent heureux.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Tenez, les meilleures boulettes de millet du Japon. Mangeons-les ensemble."\nLes ogres remplirent leur bouche de boulettes, et de grosses larmes coulèrent.\n"Nous n\'avons jamais rien mangé d\'aussi bon..."\nMomotaro et les ogres déplacèrent ensemble les rochers et firent un champ.\nC\'est la fin la plus étrange et la plus chaleureuse de toutes.\nEt ils vécurent heureux.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Voici l\'histoire d\'Aka, un jeune ogre qui vit sur l\'île aux Ogres.\nL\'île aux Ogres n\'est que rochers. Les ogres ont beau faire des champs, rien n\'y pousse.', next:'o2'},
o2:{art:'oni_village', text:'Quel travail Aka va-t-il faire aujourd\'hui ?', choices:[
  {t:'Aller chercher de l\'eau au pied de la falaise', go:'o2r', set:{owork:'mizu'}},
  {t:'Enlever les rochers du champ', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Le lourd seau sur l\'épaule, il remonta le chemin de la falaise encore et encore.\nEn haut, ses petits frères attendent, la gorge toute sèche.'
  : 'Il déplaça un gros rocher, mais la terre en dessous était dure comme la pierre.\nPourtant, Aka croit qu\'un jour, un champ poussera ici.', next:'o3'},
o3:{art:'oni_dinner', text:'Au dîner, il n\'y avait qu\'une bouillie de riz claire.\nMidori, son petit frère, dit :\n"Grand frère, j\'ai encore faim..."', choices:[
  {t:'Dire : "Au printemps, on mangera à notre faim"', go:'o3r', set:{care:'hagemasu'}},
  {t:'Lui donner la moitié de sa propre bouillie', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"La part de grand frère est bonne aussi !"\nMidori eut un grand sourire.\nLe ventre d\'Aka restait un peu vide, mais dans sa poitrine, il faisait chaud.'
  : 'Midori hocha doucement la tête et mangea le reste de sa bouillie avec grand soin.\nLe printemps est encore loin.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'Cette nuit-là.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'Le chef rassembla tout le monde et dit :\n"Nous allons emprunter le trésor du village. C\'est pour que les enfants passent l\'hiver."\nDans la poitrine d\'Aka, quelque chose s\'agita.\nQue fait Aka ?', choices:[
  {t:'Crier : "Mais c\'est du vol !"', go:'c_dorobo'},
  {t:'Se taire et suivre les autres', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'C\'est du vol !!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Tout autour devint parfaitement silencieux.\nLe chef se tut longtemps, longtemps...\n"Alors, que faut-il faire ?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka réfléchit de toutes ses forces.', choices:[
  {t:'Aller demander de l\'aide aux gens du village', go:'o7a'},
  {t:'Faire un champ de nos propres mains', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"Nous baissons la tête et nous leur demandons de partager leur nourriture. En échange, nous les remercions avec la force des ogres."\nLe chef croisa ses gros bras et hocha lentement la tête.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'Le lendemain, les ogres montèrent dans un bateau et partirent vers le village.\nIls n\'emportaient pas d\'armes, mais des paniers de raisin sauvage.\nCela demandait bien plus de courage que de voler un trésor.\nEt la réponse du village... c\'est une autre histoire.'},
o7b:{art:'oni_village', text:'"Enlevons tous les rochers et faisons un champ ! Avec la force des ogres, on peut le faire !"\nÀ partir de ce jour, tous les ogres de l\'île se mirent à porter des rochers.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Toute la force des ogres !!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'Les rochers étaient grands comme des montagnes, et le travail n\'en finissait pas.\nMais c\'est étrange : la sueur qu\'on verse ensemble n\'est pas pénible du tout.\nLe printemps arriva, et de petites pousses sortirent dans le champ.\nMidori sauta et bondit de joie.\nEt ils vécurent heureux.'},

o5b:{art:'oni_raid', text:'Aka monta dans le bateau avec le chef et les autres.\nArrivé au village, Aka ne put bouger du bateau.\nAu loin, des lumières vacillaient, et il crut entendre quelqu\'un pleurer.', next:'o6b'},
o6b:{art:'oni_takara', text:'De retour sur l\'île, la poitrine d\'Aka restait agitée.\nDevant le trésor entassé, Aka réfléchit.', choices:[
  {t:'Aller rendre en secret un objet du trésor', go:'o7c'},
  {t:'Ne rien faire, et laisser la nuit passer', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka prit un petit objet du trésor et poussa son bateau sur la mer de nuit.\nIl le posa doucement sur la plage du village, et au moment de repartir...\n"Monsieur l\'ogre, tu es venu le rendre ?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Découvert ?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'Une petite fille était là, regardant Aka sans bouger.\nLe cœur battant, Aka hocha la tête une fois.\nLa petite fille sourit et dit tout bas :\n"Merci. Ce sera notre secret."\nLa nuit était froide, et pourtant, dans la poitrine d\'Aka, il faisait tout doux et tout chaud.'},

o7d:{art:'oni_night', text:'Aka ne put rien faire, et bien des nuits passèrent.\nUn soir, sans sommeil, Aka regardait la mer du haut de la falaise quand un petit bateau approcha de loin.\nQui donc peut bien être à bord ?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'Le jour se leva.'}, then:'o8'},
o8:{art:'oni_village', text:'Toute l\'île fut en émoi.\n"Un humain ! Un humain avec un bandeau vient par ici !"\nLe cœur d\'Aka fit un bond.\nQue fait Aka ?', choices:[
  {t:'Cacher Midori derrière les rochers', go:'o9a', set:{guard:'midori'}},
  {t:'Courir auprès du chef', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Chut. Ici, tu ne risques rien."\nAka serra très fort la petite main de Midori.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'Le chef serrait sa massue de fer et fixait la porte du regard.\nSon dos paraissait plus grand que d\'habitude.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'Le combat fut fini en un clin d\'œil.\nLa massue du chef fut projetée au loin, et Aka regardait de sa cachette, le souffle coupé.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'J-je me rends !!'}, then:'o11'},
o11:{art:'oyabun', text:'Le jeune homme au bandeau rengaina son sabre et parlait de quelque chose.\nMaintenant, Aka pourrait peut-être lui adresser la parole.\nQue fait Aka ?', choices:[
  {t:'Prendre son courage et sortir de sa cachette', go:'e_o_asa'},
  {t:'Rester caché et les regarder partir', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"E-euh ! Je peux vous aider à porter le trésor !"\nEn voyant Aka bondir de sa cachette, le jeune homme ouvrit de grands yeux.\nPuis il sourit et dit :\n"Merci. Tu es un ogre courageux."\nLe soleil du matin les éclaira tous les deux avec chaleur.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'Le courage de lui parler ne vint pas.\nLe bateau chargé de trésor devenait tout petit au loin sur la mer.\nMais Aka prit une décision.\nLa prochaine fois, il dira "merci", et "pardon" aussi.\nEt cette "prochaine fois" viendra, dans un avenir pas si lointain.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Voici une autre histoire : celle d\'un Faisan qui vit dans les montagnes.\nLe Chien est fort. Le Singe grimpe aux arbres comme personne.\nÀ côté d\'eux, lui est petit, et il n\'a pas de force...\nLe Faisan manquait toujours un peu de confiance en lui.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Avec de si petites ailes,\nne peut-on vraiment rien faire ?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Aujourd\'hui encore, une promenade dans le ciel, tout seul.\nOù voler ?', choices:[
  {t:'Voler au-dessus des montagnes', go:'k2r', set:{kfly:'yama'}},
  {t:'Voler vers la mer', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Vu d\'au-dessus des montagnes, le village ressemble à une boîte à jouets.\nLa fumée des cheminées montait, petit nuage après petit nuage.'
  : 'Au-dessus de la mer, le vent souffle fort et les plumes claquent.\nAu loin, on apercevait une île noire, toute seule.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'Un jour, il aperçut sur le chemin en bas un curieux cortège.\nUn jeune homme au bandeau, un Chien et un Singe.\nOn dirait qu\'ils s\'amusent bien.', choices:[
  {t:'Oser leur adresser la parole', go:'k4a'},
  {t:'Les observer encore un peu depuis le ciel', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'Le Faisan descendit à grands battements d\'ailes et dit, de la voix la plus forte qu\'il put :\n"E-est-ce que je peux venir avec vous ?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Comme il les suivait sans bruit depuis le ciel, le jeune homme le remarqua et lui fit signe.\n"Ami du ciel, viens donc avec nous !"', next:'k5'},
k5:{art:'kiji_join', text:'"Tiens, une boulette de millet pour toi."\nElle était sucrée à en faire fondre les joues.\n"E-en échange, le ciel, laissez-le-moi !"\ndit le Faisan de la voix la plus forte qu\'il put.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'Le Faisan rejoint l\'équipe !!'}, then:'k6'},
k6:{art:'fune', text:'Sur le bateau, le Faisan se rendit compte d\'une chose.\nLui seul peut voler au-dessus de la mer.\nNi le Chien ni le Singe ne le peuvent.', choices:[
  {t:'Voler haut et voir l\'île tout entière', go:'k6r', set:{kscout:'high'}},
  {t:'Voler bas et examiner les abords de la porte', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Du haut du ciel, il vit toute la forme de l\'île.\nIl vit aussi un sentier rocheux étroit derrière la porte.\n"Tout le monde, il y a un passage par-derrière !"'
  : 'Il vola au ras des vagues jusque devant la porte.\nIl compta bien les ogres de garde et regarda la taille de leurs massues.\n"Tout le monde, je sais exactement ce qui nous attend !"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'Le combat contre le chef des ogres commença !\nDans un grand souffle, la massue du chef s\'abattit sur le Chien.\nLe cœur du Faisan fit un bond.\nQue fait le Faisan ?', choices:[
  {t:'Foncer lui boucher la vue !', go:'c_kwaza1'},
  {t:'Prévenir tout le monde en criant !', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Le piqué du Faisan !!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'Quoi ?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Sans réfléchir, le Faisan se jeta devant le visage du chef.\nÀ grands battements d\'ailes, il lui boucha la vue !\nPendant ce temps, le Chien s\'échappa d\'un bond et le Singe lui prit la massue.\n"J-je me rends !"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Chien, derrière toi !!'}, then:'k8b'},
k8b:{art:'maitta', text:'Une voix grande comme un écho de montagne retentit sur le champ de bataille.\nLe Chien esquiva d\'un bond, et le sabre de Momotaro brilla.\n"J-je me rends !"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Après le combat, Momotaro dit :\n"Le plus grand mérite d\'aujourd\'hui revient au Faisan."\nLe Chien et le Singe hochèrent tous deux vivement la tête.\nAu fond de sa petite poitrine, une chaleur monta d\'un coup.\nMême quand on est petit, on peut faire quelque chose.\nLe Faisan ne baisse plus la tête.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Sans ce cri, ça aurait mal fini", dit le Chien.\n"Surveiller le ciel, il n\'y a que le Faisan qui sache le faire", dit le Singe.\nLe Faisan, tout gêné, cacha son visage derrière une aile.\nMême quand on est petit, on peut faire quelque chose.\nLe Faisan ne baisse plus la tête.'}

};

function HOBBY_LINE_FR(f){
  return {
    sumo:'La force des hanches, travaillée au sumo, servit au bon moment.',
    run:'Ses jambes, entraînées à la course, ne cédaient devant personne.',
    help:'Ses bras, forgés par les travaux de chaque jour, n\'étaient pas là pour rien.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (FR) ================= */
var ZK_FR = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triomphe : tous ensemble', h:'Se battre avec les 3 compagnons à la fois...'},
  {id:'a_katana', n:'Triomphe : le sabre',      h:'Se battre au sabre et rapporter le trésor...'},
  {id:'a_dog',    n:'Triomphe : le Chien',      h:'Laisser le Chien se battre et rapporter le trésor...'},
  {id:'a_saru',   n:'Triomphe : le Singe',      h:'Laisser le Singe se battre et rapporter le trésor...'},
  {id:'a_kiji',   n:'Triomphe : le Faisan',     h:'Laisser le Faisan se battre et rapporter le trésor...'},
  {id:'b_naka',   n:'La paix avec les ogres',   h:'Après la victoire, écouter leur histoire...'},
  {id:'c_yaku',   n:'La promesse du dialogue',  h:'Partir sans compagnons et rengainer le sabre...'},
  {id:'d_kibi',   n:'Le miracle des boulettes', h:'Partir seul avec beaucoup de boulettes et rengainer le sabre...'},
  {id:'o_negai',  n:'Les paniers de raisin',    h:'Dans l\'histoire des ogres, intervenir et choisir de demander...'},
  {id:'o_hatake', n:'Le champ de l\'île aux Ogres', h:'Dans l\'histoire des ogres, intervenir et choisir le champ...'},
  {id:'o_kaesu',  n:'Le secret de la plage de nuit', h:'Suivre les autres en silence, puis aller rendre le trésor...'},
  {id:'o_asa',    n:'La promesse du soleil levant', h:'Le matin où rien n\'a été possible, trouver son courage...'},
  {id:'o_miokuri',n:'Un jour, les mots',        h:'Sans trouver le courage, regarder le bateau partir...'},
  {id:'k_hero',   n:'Le petit héros',           h:'Dans l\'histoire du Faisan, foncer...'},
  {id:'k_voice',  n:'La vigie du ciel',         h:'Dans l\'histoire du Faisan, crier de toutes ses forces...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_FR, ZK_FR };
