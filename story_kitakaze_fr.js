"use strict";
/* Le Vent du Nord et le Soleil - French scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). French wording is original;
   no existing French translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var KITAKAZE_FR = {

  /* ================= Le Vent du Nord et le Soleil ================= */

  kz1:{art:'kz_sora', text:'Voici l\'histoire du Vent du Nord et du Soleil.\nUn jour, tout en haut dans le ciel, le Vent du Nord et le Soleil se disputaient.\n« C\'est moi le plus fort. » « Non, c\'est moi. »', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Lequel est le plus fort ?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'Ce matin-là, un voyageur quitta le village et prit la route.\nLe manteau sur le dos, le sac à l\'épaule.';
    if(f.first) return t;
    return t + '\nQue mettre dans le sac ?';
  }, choices:[
    {t:'Une gourde d\'eau', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Du pain et une pomme', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'Dans le sac : du pain, une pomme et un deuxième manteau.\nLa route allait être longue.'
    : 'Dans le sac : une gourde d\'eau et un deuxième manteau.\nLa route allait être longue.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'Le Vent du Nord et le Soleil aperçurent le voyageur.\n« Celui qui fera enlever le manteau à ce voyageur sera le plus fort. »';
    if(f.first) return t + '\nCe fut d\'abord au tour du Vent du Nord.';
    return t + '\nEt maintenant ?';
  }, choices:[
    {t:'Se mesurer. D\'abord le Vent du Nord', go:'kz4'},
    {t:'Arrêter de se mesurer et essayer ensemble', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'Le Vent du Nord souffla fort dès le début.\nFffou !\nLe voyageur retint le col de son manteau.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Fffou !!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'Le Vent du Nord souffla plus fort encore.\nFffou, fffou !\nLe voyageur serra son manteau des deux mains.\n« Quel froid. Je vais en mettre un autre. »\nDu sac sortit un deuxième manteau, et le voyageur l\'enfila par-dessus le premier.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Fffou, fffou !!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Quel froid...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'Le Vent du Nord souffla de toutes ses forces.\nLes feuilles s\'envolèrent, et le sable du chemin tourbillonna.\nPourtant le voyageur ne lâcha pas son manteau.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Fffouuuuu !!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'Le Vent du Nord se fatigua.';
    if(f.first) return t + '\n« Soleil, à toi maintenant. »\nEt le Vent du Nord confia le voyageur au Soleil.';
    return t + '\nQue fait le Vent du Nord ?';
  }, choices:[
    {t:'« Soleil, à toi maintenant »', go:'kzc_kao_kk'},
    {t:'Aller chercher les nuages', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'À toi maintenant'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'Le Soleil brilla d\'abord tout doucement.\nDoux et tiède.\nLe voyageur enleva le deuxième manteau et le rangea dans le sac.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Doux et tiède...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'Le Soleil brilla plus fort.\nÉclatant et brûlant.\nLe voyageur commença à transpirer.';
    if(f.first) return t;
    return t + '\nQue fait le voyageur ?';
  }, choices:[
    {t:'Continuer à marcher', go:'kzc_poka2'},
    {t:'Se mettre à l\'ombre', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Éclatant et brûlant !!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'Le Soleil brilla plus fort encore.\n« Quelle chaleur. C\'est insupportable. »\nLe voyageur enleva complètement son manteau et le posa sur son épaule.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Au bord du chemin coulait une rivière.\nLe voyageur posa son manteau sur la berge et sauta dans l\'eau.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Plouf !!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'Le voyageur se baigna, et cela avait l\'air très agréable.\nTout en haut dans le ciel, le Vent du Nord et le Soleil regardaient.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'Le voyageur ne sait rien de ce concours.\nLe manteau sécha sur la berge, et le voyageur reprit la route.\nFin.'},

  /* ---- Un temps de lessive à deux ---- */
  kzf1:{art:'kz_sentaku', text:'« Arrêtons de nous mesurer et essayons ensemble. »\nLe Vent du Nord souffla, et le Soleil brilla.\nTout le linge du village fut sec avant midi.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'Le voyageur marcha agréablement, le manteau sur le dos.\nLe vent était frais et le soleil était doux.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'Les gens du village appelèrent ce jour « le beau temps de lessive ».\nLequel des deux est le plus fort, personne ne l\'a décidé.\nEt ils vécurent heureux.'},

  /* ---- Une pause à l'ombre ---- */
  kzk1:{art:'kz_kokage', text:'Le voyageur entra dans l\'ombre d\'un grand arbre et s\'assit.\nLe manteau resta sur le dos.\nUn peu d\'eau, et un moment de repos.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'Le soleil descendit, et l\'air devint frais.\nLe voyageur reprit la route, le manteau sur le dos.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'Tout en haut dans le ciel, le Vent du Nord et le Soleil se regardèrent.\nLe concours resta indécis.\nFin.'},

  /* ---- Quand les nuages arrivent ---- */
  kzu1:{art:'kz_kumo', text:'Le Vent du Nord alla chercher les nuages.\nLe ciel s\'assombrit, et la pluie se mit à tomber.\nLe voyageur s\'abrita sous un arbre.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'Quand la pluie cessa, le voyageur reprit la route.\nLe manteau resta sur le dos.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'« Arrêtons-nous là pour aujourd\'hui », dit le Soleil.\n« Une autre fois », dit le Vent du Nord.\nFin.'},

  /* ================= L'histoire du Vent du Nord ================= */

  kk1:{art:'kz_sora', text:'Voici l\'histoire du Vent du Nord.\nLe Vent du Nord arrive de la mer du nord.\nSouffler fort, c\'est le travail du Vent du Nord.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Où souffler aujourd\'hui ?', choices:[
    {t:'Sur la mer', go:'kk2r', set:{kklife:'umi'}},
    {t:'Sur les prés', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'Le Vent du Nord souffla un coup sur les prés.\nToute l\'herbe se coucha d\'un coup dans le même sens.'
    : 'Le Vent du Nord souffla un coup sur la mer.\nDes vagues blanches se levèrent toutes en même temps.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'Le concours pour faire enlever le manteau au voyageur n\'avait pas bien marché.\nUn peu fatigué, le Vent du Nord se reposa tout en haut dans le ciel.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Pourtant, souffler, je sais faire'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Du haut du ciel, on voit toutes sortes de choses en bas.\nOù va le Vent du Nord ?', choices:[
    {t:'Vers les bateaux du port', go:'kkh1'},
    {t:'Vers les fleurs des prés', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'Dans le port, un bateau ne pouvait pas partir.\nIl n\'y avait pas de vent, et les voiles pendaient.\nLe Vent du Nord souffla doucement dans les voiles.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'Les voiles se gonflèrent, et le bateau partit vers le large.\nLes marins firent signe de la main vers le ciel.\nEt ils vécurent heureux.'},
  kkt1:{art:'kk_nohara', text:'Les fleurs des prés portaient des graines.\nLe Vent du Nord souleva les graines et les emporta très loin.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'Au printemps suivant, les mêmes fleurs fleurirent sur une colline lointaine.\nC\'étaient les graines que le Vent du Nord avait portées.\nEt ils vécurent heureux.'},

  /* ================= L'histoire du Soleil ================= */

  kh1:{art:'kz_sora', text:'Voici l\'histoire du Soleil.\nLe Soleil se lève le matin à l\'est et se couche le soir à l\'ouest.\nBriller, c\'est le travail du Soleil.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'Sur quoi briller en premier ce matin ?', choices:[
    {t:'Sur les champs', go:'kh2r', set:{khlife:'hatake'}},
    {t:'Sur les toits du village', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'Le Soleil brilla sur les toits du village.\nUn chat sur un toit s\'étira.'
    : 'Le Soleil brilla sur les champs.\nLa rosée scintilla, et les jeunes pousses grandirent.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'Le jour du concours avec le voyageur, le Soleil brilla plus fort que d\'habitude.\nLe voyageur sauta dans la rivière, mais la terre des champs sécha et se craquela.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'J\'ai peut-être trop brillé'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'Que fait le Soleil ?', choices:[
    {t:'Demander de l\'ombre au nuage', go:'khk1'},
    {t:'Continuer à briller jusqu\'au coucher', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'Le Soleil demanda à un nuage qui passait par là.\n« Peux-tu faire un peu d\'ombre au-dessus des champs ? »\nLe nuage s\'arrêta au-dessus des champs.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'À l\'ombre, les champs purent souffler un peu.\nIl y a des choses que même le Soleil ne peut pas faire.\nLe Soleil n\'oublia jamais le jour où il avait demandé au nuage.\nEt ils vécurent heureux.'},
  khy1:{art:'kh_yuuhi', text:'Le Soleil brilla jusqu\'à se coucher derrière les montagnes de l\'ouest.\nIl voyait le dos du voyageur passer une colline lointaine.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Si le voyageur a remis le manteau ou l\'a enlevé, le Soleil ne le voit plus.\nDemain aussi, le Soleil se lèvera.\nFin.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_FR);

  T.ZK_EN.push(
    {section:'Le Vent du Nord et le Soleil', note:'Dans le vieux texte grec, cette histoire se termine par le bain du voyageur dans une rivière. Lequel des deux a gagné, le livre ne le dit pas. La phrase « bien souvent, convaincre marche mieux que la force » a été ajoutée plus tard. Il y a plus d\'une façon de lire cette histoire.'},
    {id:'kz_seishi', n:'Un bain dans la rivière',   h:'L\'histoire telle qu\'on la raconte, dès la première fois'},
    {id:'kz_kokage', n:'Une pause à l\'ombre',       h:'Quand le voyageur se met à l\'ombre pendant le tour du Soleil...'},
    {id:'kz_futari', n:'Un temps de lessive à deux', h:'Quand les deux arrêtent de se mesurer et essaient ensemble...'},
    {id:'kz_kumo',   n:'Quand les nuages arrivent',  h:'Quand le Vent du Nord va chercher les nuages...'},
    {id:'kk_ho',     n:'Gonfler les voiles',         h:'Quand on va au port dans l\'histoire du Vent du Nord...'},
    {id:'kk_tane',   n:'Porter les graines',         h:'Quand on va dans les prés dans l\'histoire du Vent du Nord...'},
    {id:'kh_kumo',   n:'Demander au nuage',          h:'Quand on demande au nuage dans l\'histoire du Soleil...'},
    {id:'kh_yuuhi',  n:'Jusqu\'au coucher',          h:'Quand on brille jusqu\'au coucher dans l\'histoire du Soleil...'}
  );

})();
