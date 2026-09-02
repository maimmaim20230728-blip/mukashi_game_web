"use strict";
/* Ali Baba et les 40 voleurs - French scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var ALIBABA_FR = {

  /* ================= Ali Baba et les 40 voleurs ================= */

  ab1:{art:'ab_mori', text:'Voici l\'histoire d\'Ali Baba, qui vivait dans une ville de Perse.\nAli Baba était un pauvre bûcheron.\nChaque jour, il emmenait ses 2 ânes dans la forêt pour ramasser du bois.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Aujourd\'hui encore, Ali Baba ramassait du bois dans la forêt.';
    if(f.first) return t;
    return t + '\nCombien de fagots ramasse-t-il ?';
  }, choices:[
    {t:'2 fagots, et rentrer tôt', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 fagots, et rentrer sans se presser', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Il chargea 4 fagots de bois sur le dos des ânes.\nAujourd\'hui, il comptait rentrer sans se presser.'
    : 'Il chargea 2 fagots de bois sur le dos des ânes.\nAujourd\'hui, il comptait rentrer tôt.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'À ce moment-là, il entendit un bruit de sabots.\nAli Baba se cacha en haut d\'un arbre.\n40 hommes se rassemblèrent devant un grand rocher.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 hommes...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'L\'homme de devant s\'adressa au rocher.\n"Sésame, ouvre-toi !"\nAlors, dans un grondement, le rocher s\'ouvrit.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Sésame, ouvre-toi !!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'Les hommes entrèrent à l\'intérieur.\nUn moment plus tard, ils ressortirent. "Sésame, ferme-toi !"\nLe rocher se referma, et les hommes s\'en allèrent.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba descendit de l\'arbre et se plaça devant le rocher.\n"Sésame, ouvre-toi !"\nLe rocher s\'ouvrit, et l\'intérieur était plein de pièces d\'or et de trésors.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'L\'éclat du trésor'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba remplit des sacs de pièces d\'or et les chargea sur les ânes.\nSeulement ce qu\'il pouvait rapporter chez lui.\n"Sésame, ferme-toi !"', next:'ab8'},

  ab8:{art:'ab_ie', text:'De retour chez lui, Ali Baba raconta tout à sa femme.\nTous deux voulurent compter les pièces d\'or, mais il y en avait bien trop.\n"Allons emprunter une mesure chez mon frère."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Son frère Cassim était un riche marchand.\nLa femme de Cassim enduisit en secret le fond de la mesure d\'un peu de graisse.\nQuand la mesure revint, 1 pièce d\'or était collée au fond.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim interrogea Ali Baba.\nAli Baba lui raconta tout : le rocher et les paroles magiques.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'Le lendemain matin, Cassim emmena 10 ânes jusqu\'au rocher.\n"Sésame, ouvre-toi !"\nLe rocher s\'ouvrit.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Sésame, ouvre-toi !!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim remplit ses sacs de pièces d\'or.\nMais au moment de ressortir, il avait oublié les paroles magiques.\n"Orge, ouvre-toi !" "Fève, ouvre-toi !"\nLe rocher ne s\'ouvrit pas.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'Cette nuit-là, Cassim ne rentra pas.\nLa femme de Cassim vint en pleurant chez Ali Baba.';
    if(f.first) return t;
    return t + '\nQue fait Ali Baba ?';
  }, choices:[
    {t:'Attendre jusqu\'au matin', go:'ab14'},
    {t:'Aller au rocher dans la nuit même', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'Au matin, Ali Baba se rendit au rocher.\n"Sésame, ouvre-toi !"\nÀ l\'intérieur, tout était silencieux. Les voleurs étaient revenus avant lui.\nCassim ne bougeait plus.\nAli Baba plaça son frère sur un âne et le ramena doucement à la maison.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'Dans la maison d\'Ali Baba vivait une servante nommée Morgiana.\nC\'était une personne à qui rien n\'échappait.\nPour préparer les funérailles, Morgiana fit venir un vieux savetier de la ville.\nPour qu\'il ne retienne pas le chemin, elle lui banda les yeux et le conduisit jusqu\'à la maison.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'Le bandeau, s\'il vous plaît'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'De retour au rocher, les voleurs remarquèrent que Cassim n\'était plus là.\n"Quelqu\'un d\'autre est au courant."\nLe chef envoya l\'un de ses hommes en ville.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'Le voleur trouva le vieux savetier.\nLes yeux bandés, le vieil homme retrouva le chemin avec ses pieds.\nEt le voleur fit une marque blanche sur la porte de la maison d\'Ali Baba.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana remarqua la marque.\nAlors elle fit la même marque sur la maison voisine, et sur celle d\'à côté.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Des marques partout !!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'Quand les voleurs vinrent, ils ne surent pas quelle maison c\'était.\nLe chef décida d\'y aller lui-même.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'Le chef se déguisa en marchand d\'huile.\n19 ânes, et 38 grandes jarres.\nUne seule contenait de l\'huile ; dans chacune des autres, un voleur était caché.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Je suis un marchand d\'huile de passage. Puis-je loger une nuit ?"\nAli Baba l\'accueillit avec bonté.\nLes jarres furent alignées dans la cour.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'... Quand la nuit viendra'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'La nuit, Morgiana n\'avait plus d\'huile pour la lampe et voulut en prendre dans les jarres de la cour.\nAlors une voix sortit d\'une jarre.\n"Est-ce déjà l\'heure ?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'... Il y a quelqu\'un dans la jarre'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana répondit d\'une voix grave.\n"Pas encore."\nPuis elle vérifia les 37 jarres, l\'une après l\'autre.';
    if(f.first) return t;
    return t + '\nQue fait Morgiana ?';
  }, choices:[
    {t:'Faire bouillir l\'huile', go:'ab24'},
    {t:'Apporter des cordes et appeler la garde', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana fit bouillir l\'huile dans un grand chaudron.\nPuis elle versa l\'huile bouillante dans chaque jarre, l\'une après l\'autre.\nDans les jarres, tout devint silencieux.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'Au milieu de la nuit, le chef sortit dans la cour et frappa sur les jarres.\nIl n\'y eut pas de réponse.\nLe chef s\'enfuit, seul.', next:'ab26'},

  ab26:{art:'ab_ie', text:'Au matin, Morgiana raconta tout à Ali Baba.\nAli Baba lui dit :\n"À partir d\'aujourd\'hui, tu es libre."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Quelques jours plus tard, le chef revint, déguisé en marchand.\nIl s\'était lié d\'amitié avec le fils d\'Ali Baba et avait été invité dans la maison.\nMorgiana se souvenait de ce visage.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Ce visage, je m\'en souviens'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Après le repas, Morgiana dansa pour eux.\nÀ sa ceinture était glissé un poignard.';
    if(f.first) return t;
    return t + '\nQue fait Morgiana ?';
  }, choices:[
    {t:'Danser jusqu\'à la fin de la danse', go:'ab29'},
    {t:'Arrêter la danse et parler des marques', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'À la fin de la danse, Morgiana s\'arrêta devant le marchand.\nLe chef tomba.\nÀ Ali Baba stupéfait, Morgiana dit calmement :\n"Cet homme était le chef."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba dit à Morgiana :\n"Tu es libre désormais. Ce que tu feras à partir de maintenant, c\'est à toi de le décider."\nMorgiana réfléchit un moment, puis répondit :\n"Je reste ici. Je serai de cette maison."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Ensuite, Morgiana et le fils d\'Ali Baba s\'unirent, et elle fut de cette maison.\nIls usèrent modestement du trésor du rocher.\nEt ils vécurent heureux.'},

  /* ---- Aller chercher son frère ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Dans la nuit même, Ali Baba conduisit un âne jusqu\'au rocher.\n"Sésame, ouvre-toi !"\nTout au fond, Cassim était assis, tremblant.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"J\'avais oublié les paroles magiques... Sésame, c\'était Sésame."\nAli Baba plaça son frère sur l\'âne et le ramena à la maison.\nDe pièces d\'or, il n\'emporta qu\'un seul sac.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'Le frère était sain et sauf.\nLes paroles magiques restèrent un secret entre eux deux.\nLes voleurs remarquèrent qu\'il manquait des pièces d\'or, mais ils ne surent jamais qui l\'avait fait.\nEt ils vécurent heureux.'},

  /* ---- Les cordes et la garde ---- */
  abr1:{art:'ab_abura', text:'Morgiana alla chercher des cordes.\nElle attacha les couvercles des jarres par l\'extérieur, l\'un après l\'autre.\nPuis elle courut appeler la garde de la ville.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'La garde arriva et ouvrit les 37 jarres.\nLes voleurs furent emmenés un à un, liés avec des cordes.\nLe chef en profita pour s\'enfuir.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'Le chef ne reparut plus jamais dans la ville.\nAli Baba dit à Morgiana : "Tu es libre désormais."\nIls usèrent modestement du trésor du rocher.\nEt ils vécurent heureux.'},

  /* ---- Le chef a pris la fuite ---- */
  abg1:{art:'ab_odori', text:'Morgiana arrêta sa danse et se plaça devant le marchand.\n"C\'est moi qui ai multiplié la marque que vous aviez faite."\nLe marchand changea de couleur.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Sans un mot, le chef se leva et s\'enfuit dans la ville, en pleine nuit.\nIl ne revint jamais dans la ville de Perse.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba dit à Morgiana :\n"Tu es libre désormais. Ce que tu feras à partir de maintenant, c\'est à toi de le décider."\n"Je reste ici", répondit Morgiana.\nEt ils vécurent heureux.'},

  /* ================= L'histoire de Morgiana ================= */

  am1:{art:'am_daidokoro', text:'Voici l\'histoire d\'une servante nommée Morgiana.\nElle travaillait dans la maison d\'Ali Baba.\nOn disait d\'elle que rien ne lui échappait.', next:'am2'},
  am2:{art:'am_daidokoro', text:'Le matin. Par quoi commence-t-elle ?', choices:[
    {t:'Cuire le pain', go:'am2r', set:{amlife:'pan'}},
    {t:'Puiser de l\'eau', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana puisa de l\'eau au puits et remplit la jarre à ras bord.\nDe cette maison, elle savait tout.'
    : 'Morgiana alluma le four et fit cuire le pain.\nDe cette maison, elle savait tout.', next:'am3'},
  am3:{art:'ab_shirushi', text:'Un matin, elle trouva une marque blanche sur la porte.\n(Quelqu\'un cherche à retenir cette maison.)\nMorgiana fit la même marque sur la maison voisine.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'Les marques, il suffit d\'en faire plus'}, then:'am4'},
  am4:{art:'ab_abura', text:'La nuit du marchand d\'huile. Une voix sortit d\'une jarre.\nQue fait Morgiana ?', choices:[
    {t:'Faire bouillir l\'huile', go:'am4r', set:{amhow:'abura'}},
    {t:'Attacher les jarres et appeler la garde', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana attacha les couvercles des jarres et appela la garde.\nLes voleurs furent emmenés.'
    : 'Morgiana fit bouillir l\'huile et la versa dans les jarres.\nDans les jarres, tout devint silencieux.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'Le matin où tout fut terminé, Ali Baba dit :\n"Tu es libre désormais. Ce que tu feras, c\'est à toi de le décider."\nQue fait Morgiana ?', choices:[
    {t:'Rester dans cette maison', go:'ami1'},
    {t:'Partir en voyage', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana franchit le portail, une fois.\nElle marcha dans la ville, regarda le marché, regarda le fleuve.\nPuis, de ses propres pieds, elle revint à la maison.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Voici la maison que j\'ai choisie."\nNon comme servante, mais comme une personne de cette maison.\nEt ils vécurent heureux.'},
  amt1:{art:'am_michi', text:'Morgiana prit un seul sac et franchit le portail.\nAli Baba ne la retint pas.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Où Morgiana est allée n\'est pas écrit dans cette histoire.\nOù menait le chemin, Morgiana seule le sait.\nFin.'},

  /* ================= L'histoire du chef des voleurs ================= */

  at1:{art:'at_dokutsu_kara', text:'Voici l\'histoire du chef des voleurs.\nÀ 40, ils amassaient leur trésor dans le rocher.\nUn jour, il remarqua qu\'il en manquait une partie.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'Qu\'examine le chef ?', choices:[
    {t:'Les traces de pas devant le rocher', go:'at2r', set:{atlife:'ashi'}},
    {t:'Les traces d\'un âne', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Devant le rocher, les traces d\'un âne étaient restées.\nQuelqu\'un de la ville.'
    : 'Devant le rocher, de petites traces de pas étaient restées.\nElles n\'étaient pas celles de ses hommes.', next:'at3'},
  at3:{art:'ab_iwa', text:'(Ce n\'était pas le trésor pris qui lui faisait peur, mais que le secret du rocher soit connu.)\nLe chef envoya un homme en ville.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'Un seul secret suffit'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'Le plan des jarres avait échoué.\nDe ses hommes, il ne restait plus personne.\nQue fait le chef ?', choices:[
    {t:'Laisser le trésor et partir loin', go:'ato1'},
    {t:'Retourner une fois encore à cette maison', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'Le chef se plaça devant le rocher.\n"Sésame, ferme-toi."\nPuis il se mit en marche sans se retourner.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'Le trésor resta à l\'intérieur du rocher.\nOù le chef est allé, personne ne le sait.\nFin.'},
  ath1:{art:'ab_odori', text:'Déguisé en marchand, le chef retourna à cette maison.\nÀ la fin de la danse, la servante se plaça devant lui.\n(Elle le savait depuis le début.)\nLe chef ne fit rien et quitta la maison.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'Le secret n\'était plus un secret.\nLe chef l\'accepta et quitta la ville.\nCe qui lui faisait peur n\'était pas de perdre le trésor, mais que quelqu\'un le sache.\nFin.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_FR);

  T.ZK_EN.push(
    {section:'Ali Baba et les 40 voleurs', note:'Cette histoire ne figure pas dans les anciens livres écrits en langue arabe. Il y a environ 300 ans, un Français l\'a mise par écrit après l\'avoir entendue d\'un conteur venu de Syrie. C\'est une autre histoire que "Aladin". Dans l\'histoire d\'origine, Morgiana est une esclave, et à la fin elle devient libre.'},
    {id:'ab_seishi',  n:'Sésame, ouvre-toi',              h:'L\'histoire telle qu\'elle est racontée, dès la toute première fois'},
    {id:'ab_ani',     n:'Aller chercher son frère',       h:'La nuit où Cassim ne rentre pas, aller au rocher...'},
    {id:'ab_rouya',   n:'Les cordes et la garde',         h:'La nuit des jarres, ne pas faire bouillir l\'huile...'},
    {id:'ab_nigeta',  n:'Le chef s\'est enfui',           h:'Arrêter la danse et parler des marques...'},
    {id:'am_ie',      n:'La maison que j\'ai choisie',    h:'Dans l\'histoire de Morgiana, rester dans la maison...'},
    {id:'am_tabi',    n:'Au-delà du portail',             h:'Dans l\'histoire de Morgiana, partir en voyage...'},
    {id:'at_oite',    n:'Laisser le trésor',              h:'Dans l\'histoire du chef, partir loin...'},
    {id:'at_himitsu', n:'Un seul secret',                 h:'Dans l\'histoire du chef, retourner une fois encore à cette maison...'}
  );

})();
