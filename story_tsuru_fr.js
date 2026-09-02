"use strict";
/* La grue qui rendit le bienfait - French scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var TSURU_FR = {

  /* ================= La grue qui rendit le bienfait ================= */

  ts1:{art:'ts_yuki_wana', text:'Voici l\'histoire d\'une grue sauvée un jour de neige.\nUn jour d\'hiver, un vieil homme partit vendre du bois à la ville.\nEn chemin, il trouva une grue prise dans un piège.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Piège défait !!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'Le vieil homme défit le piège et laissa la grue partir.\nÀ grands coups d\'ailes, la grue s\'envola dans le ciel neigeux.';
    if(f.first) return t;
    return t + '\nQu\'achète-t-il à la ville avant de rentrer ?';
  }, choices:[
    {t:'Acheter du riz', go:'ts2r', set:{tslife:'kome'}},
    {t:'Acheter un bonbon', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'Avec l\'argent du bois vendu, le vieil homme acheta un petit bonbon.\nC\'était un cadeau pour la vieille femme.'
    : 'Avec l\'argent du bois vendu, le vieil homme acheta un peu de riz.\nDe quoi faire le repas de ce soir.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'Cette nuit-là, la neige continuait de tomber.\nToc, toc. On frappait à la porte.\nUne jeune fille en kimono blanc se tenait dans la neige.\n« Je me suis perdue. Laissez-moi passer la nuit ici, s\'il vous plaît. »', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Laissez-moi rester'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'Le vieil homme et la vieille femme firent asseoir la jeune fille près de l\'âtre.\nElle travaillait bien, et ils vécurent ensemble bien des jours.\n« Laissez-moi rester ici, avec vous. »\nTous deux se mirent à la voir comme leur propre fille.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'Un jour, la jeune fille dit :\n« Achetez-moi du fil, s\'il vous plaît. Je vais tisser au métier.\nTant que je tisse, n\'ouvrez pas la porte de papier. »', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Clic-clac, clic-clac'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'Pendant 3 jours et 3 nuits, le bruit du métier sortit de la chambre.\nLe matin du 4e jour, la jeune fille sortit avec une étoffe blanche.\nElle était blanche comme la neige, et elle brillait.', next:'ts7'},

  ts7:{art:'ts_machi', text:'Le vieil homme la porta à la ville, et l\'étoffe se vendit très cher.\nCet hiver-là, la maison fut chaude.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Nous sommes reconnaissants...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'« Je vais en tisser encore une », dit la jeune fille.\nDe nouveau, pendant 3 jours et 3 nuits, le métier résonna dans la chambre.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Clic-clac, clic-clac'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'La 2e étoffe aussi se vendit très cher.\nMais le visage de la jeune fille était plus pâle qu\'avant.\n« Je vais en tisser encore une », dit la jeune fille.';
    if(f.first) return t;
    return t + '\nQue fait le vieil homme ?';
  }, choices:[
    {t:'Dire : « S\'il te plaît, tisse-la »', go:'ts10'},
    {t:'Dire : « Tu n\'as plus besoin de tisser »', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'La 3e étoffe.\nLe bruit du métier était plus lent qu\'avant.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Clic... clac...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'La vieille femme s\'arrêta devant la chambre.\n(Est-ce que cette enfant va bien ?)\n(Elle n\'a plus de fil. Que peut-elle bien tisser ?)';
    if(f.first) return t + '\nLa vieille femme entrouvrit la porte de papier.';
    return t + '\nQue fait la vieille femme ?';
  }, choices:[
    {t:'Entrouvrir la porte de papier', go:'ts12'},
    {t:'Lui parler seulement, et s\'éloigner', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'De l\'autre côté de la porte, il y avait une grue.\nElle tissait au métier avec ses propres plumes.\nSes plumes avaient un peu diminué.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'Ce soir-là, la jeune fille s\'assit devant eux deux.\n« Je suis la grue qui fut sauvée un jour de neige.\nMa vraie forme a été vue.\nJe ne peux plus rester sous la forme d\'une jeune fille. »';
    if(f.first) return t;
    return t + '\nQue font-ils, tous les deux ?';
  }, choices:[
    {t:'La regarder partir en silence', go:'ts14'},
    {t:'Ouvrir la porte et regarder le ciel', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'La jeune fille reprit sa forme de grue et s\'envola dans le ciel neigeux.\nLe vieil homme et la vieille femme regardèrent le ciel très longtemps.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'La grue, vers le ciel'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'La grue sauvée un jour de neige retourna vers le ciel.\nDans la maison restèrent 2 étoffes blanches et un métier au travail inachevé.\nFin.'},

  /* ---- Tu n'as plus besoin de tisser ---- */
  tsm1:{art:'ts_kaoiro', text:'« Tu n\'as plus besoin de tisser. 2 étoffes, cela suffit. »\nAinsi parla le vieil homme.\nLa jeune fille se tut un moment, puis répondit : « Oui. »', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'L\'hiver s\'acheva, et le printemps arriva.\nDans le ciel, on entendit des cris de grues.\n« Je suis la grue qui fut sauvée un jour de neige. Mes compagnes m\'appellent. »', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'La jeune fille reprit sa forme de grue et s\'envola vers ses compagnes.\nDans la maison restèrent 2 étoffes blanches.\nLe vieil homme et la vieille femme suivirent des yeux le ciel de printemps.\nEt ils vécurent heureux.'},

  /* ---- Un hiver sans regarder ---- */
  tsn1:{art:'ts_nozoku', text:'« Ne te fatigue pas trop. »\nLa vieille femme parla depuis l\'autre côté de la porte de papier, puis s\'éloigna de la chambre.\nDe l\'intérieur vint un « Oui ».', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'La 3e étoffe fut achevée.\nC\'était la plus belle des trois.\nLe visage de la jeune fille était toujours aussi pâle.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Le printemps arriva, et dans le ciel on entendit des cris de grues.\n« Je suis la grue qui fut sauvée un jour de neige.\nJe n\'ai plus de plumes. Mes compagnes m\'appellent. »', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'Le vieil homme et la vieille femme dirent au revoir à la jeune fille sur le pas de la porte.\nMême sans avoir regardé, la séparation vint.\nMais dans cette séparation, il n\'y avait pas un seul secret.\nEt ils vécurent heureux.'},

  /* ---- Ouvrir la fenêtre ---- */
  tsd1:{art:'ts_mado', text:'Le lendemain matin, le vieil homme ouvrit la porte.\nDans le ciel clair, une grue.\nLa grue fit un tour au-dessus de la maison, puis s\'envola au loin.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'Tous deux firent un signe de la main.\nSi la grue s\'est retournée, personne ne le sait.\nMais qu\'elle ait fait un tour au-dessus de la maison, ils s\'en souvinrent toujours.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de la grue ================= */

  tz1:{art:'ts_yuki_wana', text:'Voici l\'histoire d\'une grue.\nUn jour de neige, elle fut prise dans un piège et ne put plus bouger.\nUn vieil homme qui passait par là défit le piège.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'La grue voulut rendre le bienfait.\nSous quelle forme y aller ?', choices:[
    {t:'Une jeune fille en kimono blanc', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Une jeune fille en voyage', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'La grue prit la forme d\'une jeune fille en voyage, coiffée d\'un chapeau de paille,\net par une nuit de neige, elle frappa à la porte de la maison.'
    : 'La grue prit la forme d\'une jeune fille en kimono blanc,\net par une nuit de neige, elle frappa à la porte de la maison.', next:'tz3'},
  tz3:{art:'tz_hane', text:'Pour tisser au métier, il faut ses propres plumes.\nLes plumes ne sont pas sans fin.\nLa grue tissait en comptant ses plumes.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Plus que celles-ci'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Pendant qu\'elle tissait la 3e étoffe, la porte de papier s\'entrouvrit.\nQue fait la grue ?', choices:[
    {t:'Continuer à tisser', go:'tzh1'},
    {t:'Arrêter le métier et regarder le ciel', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'La grue tissa jusqu\'au bout.\nSes plumes avaient beaucoup diminué.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'Sa forme ayant été vue, la grue quitta la maison.\nPourquoi elle a tissé jusqu\'au bout n\'est pas écrit dans cette histoire.\nFin.'},
  tzs1:{art:'tz_sora_ie', text:'La grue arrêta le métier et regarda le ciel par la fenêtre.\nC\'était un ciel de printemps.\nCette nuit-là, la grue quitta la maison.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Vue du ciel, la maison était petite, et une seule lumière y brillait.\nLa grue regarda cette lumière un moment.\nFin.'},

  /* ================= L'hiver de la vieille femme ================= */

  tb1:{art:'ts_irori', text:'Voici l\'histoire d\'une vieille femme.\nLa jeune fille venue par une nuit de neige travaillait bien et riait beaucoup.\nLa vieille femme ne pouvait s\'empêcher de l\'aimer.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Pendant que la jeune fille tisse, que fait la vieille femme ?', choices:[
    {t:'Préparer une soupe chaude', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Entretenir le feu de l\'âtre', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'La vieille femme ajoutait sans cesse du bois pour que le feu de l\'âtre ne s\'éteigne pas.\nPour que la chambre ne devienne pas froide.'
    : 'La vieille femme prépara une soupe chaude et la posa devant la porte de papier.\nAu matin, le bol était vide.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Après la 2e étoffe, le visage de la jeune fille était devenu pâle.\nLa vieille femme allait et venait devant la chambre, encore et encore.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'On m\'a dit de ne pas regarder, mais...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'Quand on vous dit de ne pas regarder, on a envie de regarder.\nEt plus encore quand on s\'inquiète.\nQue fait la vieille femme ?', choices:[
    {t:'Ouvrir la porte de papier', go:'tbk1'},
    {t:'S\'asseoir devant la chambre et attendre', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'De l\'autre côté de la porte, il y avait une grue.\nLa vieille femme referma doucement la porte de papier.\nMais ce qu\'elle avait vu, on ne pouvait plus le reprendre.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'La jeune fille redevint grue et s\'envola.\nL\'envie de regarder, tout le monde l\'a.\nPersonne, dans cette histoire, ne dit que c\'est mal.\nFin.'},
  tbh1:{art:'tb_hata_nokori', text:'La vieille femme s\'assit devant la chambre et écouta le bruit du métier.\nClic-clac. Clic-clac.\nElle resta ainsi jusqu\'au printemps.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Après le départ de la jeune fille au printemps, le métier resta dans la chambre.\nLa vieille femme laissa le métier tel quel et ouvrit la chambre chaque jour.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, TSURU_FR);

  T.ZK_EN.push(
    {section:'La grue qui rendit le bienfait', note:'Dans les contes japonais, beaucoup d\'histoires se terminent par le départ de celle ou celui dont la vraie forme a été vue : une grue, un serpent, un rossignol. Ce ne sont pas des histoires de punition.'},
    {id:'ts_seishi',    n:'La grue du jour de neige',    h:'L\'histoire telle qu\'on la raconte, dès la 1re fois'},
    {id:'ts_mou',       n:'Tu n\'as plus besoin de tisser', h:'Quand le vieil homme dit quelque chose avant la 3e étoffe...'},
    {id:'ts_nozokanai', n:'Un hiver sans regarder',      h:'Quand la vieille femme parle seulement, puis s\'éloigne...'},
    {id:'ts_mado',      n:'Ouvrir la fenêtre',           h:'Quand, le soir de la séparation, on ouvre la porte et regarde le ciel...'},
    {id:'tz_hane',      n:'Le nombre de plumes',         h:'Dans l\'histoire de la grue, quand on tisse jusqu\'au bout...'},
    {id:'tz_sora',      n:'La maison vue du ciel',       h:'Dans l\'histoire de la grue, quand on arrête le métier et regarde le ciel...'},
    {id:'tb_kokoro',    n:'L\'envie de regarder',        h:'Dans l\'histoire de la vieille femme, quand on ouvre la porte de papier...'},
    {id:'tb_hata',      n:'Le métier inachevé',          h:'Dans l\'histoire de la vieille femme, quand on attend devant la chambre...'}
  );

})();
