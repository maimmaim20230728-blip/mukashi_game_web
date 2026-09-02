"use strict";
/* Les musiciens de Breme - French scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js.
   Les formules (musicien de la ville / mieux que la mort / le cri du coq /
   la bouche encore chaude du dernier conteur) sont traduites librement,
   sans reprendre le texte d'une traduction francaise existante.
   Pas de noms propres pour les animaux. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var BREMEN_FR = {

  /* ================= Les musiciens de Brême ================= */

  br1:{art:'br_koya', text:'Voici l\'histoire d\'un âne qui a travaillé de longues années chez un maître.\nAu moulin, il portait sans cesse des sacs de farine.\nMais il a vieilli, et ses forces ont faibli.', next:'br2'},

  br2:{art:'br_koya', text:'Un jour, l\'âne a compris quelque chose.\n(Mon maître pense à ne plus me donner à manger.)\nAlors l\'âne a quitté le moulin.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'À Brême !!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Je vais aller à Brême et devenir musicien de la ville."\nL\'âne en a décidé ainsi et il a pris la grand-route.';
    if(f.first) return t;
    return t + '\nQuel chemin prend-il ?';
  }, choices:[
    {t:'Le chemin le long de la rivière', go:'br3r', set:{brmichi:'kawa'}},
    {t:'Le chemin entre les champs', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'Sur le chemin entre les champs de blé, le vent passait librement.\nPour la première fois depuis longtemps, l\'âne marchait sans rien porter.'
    : 'Sur le chemin le long de la rivière, le bruit de l\'eau résonnait agréablement.\nPour la première fois depuis longtemps, l\'âne marchait sans rien porter.', next:'br4'},

  br4:{art:'br_inu', text:'Au bord du chemin était couché un chien de chasse.\nHan, han, il respirait avec peine.\n"Qu\'est-ce qui t\'arrive, à souffler comme ça ?"', next:'br5'},

  br5:{art:'br_inu', text:'"J\'ai vieilli, je ne peux plus aller à la chasse.\nAlors mon maître a voulu me tuer.\nJe me suis enfui, mais comment vivre maintenant ?"\n"Moi, je vais à Brême pour devenir musicien. Viens avec moi.\nJe jouerai du luth, et toi, tu battras le tambour."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'Le chien rejoint les musiciens !!'}, then:'br6'},

  br6:{art:'br_neko', text:'Un peu plus loin, un chat était assis sur un mur.\nIl faisait une tête comme après trois jours de pluie.', next:'br7'},

  br7:{art:'br_neko', text:'"J\'ai vieilli, mes dents se sont usées,\net je préfère rester près de la cheminée plutôt que courir après les souris.\nAlors ma maîtresse a voulu me noyer dans la rivière."\n"Alors viens avec nous à Brême.\nPour la musique de nuit, personne ne te vaut."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'Pour la musique de nuit...'}, then:'br8'},

  br8:{art:'br_ondori', text:'Sur le portail d\'une ferme, un coq chantait de toutes ses forces.\n"Quelle voix forte."\n"Demain c\'est dimanche, et des invités viennent.\nMoi, je dois finir en soupe.\nAlors je chante tant que j\'ai encore de la voix."', next:'br9'},

  br9:{art:'br_ondori', text:'"N\'importe quoi vaut mieux que la mort. Tu as une belle voix.\nFais de la musique avec nous. Il en sortira sûrement quelque chose."\nLe coq a sauté du portail.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'Cocorico !!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'On ne pouvait pas atteindre Brême en un seul jour.\nÀ la nuit tombée, les 4 ont décidé de se reposer dans la forêt.';
    if(f.first) return t + '\nL\'âne et le chien sous un arbre. Le chat sur une branche. Le coq tout en haut.';
    return t + '\nOù se reposent-ils ?';
  }, choices:[
    {t:'Sous l\'arbre, tous ensemble', go:'br10r', set:{brmori:'shita'}},
    {t:'Sur une haute branche, en montant la garde', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'Le chat et le coq sont montés sur une haute branche.\nEn dessous, l\'âne et le chien ont dormi dos à dos.'
    : 'Les 4 se sont couchés en rond sous un grand arbre.\nSeul le coq est monté tout en haut avant de dormir.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Du haut de l\'arbre, le coq a vu une lumière au loin.\n"Il y a une maison là-bas. Une lumière y brûle."';
    if(f.first) return t + '\n"Allons-y. Le gîte n\'est pas très bon ici", a dit l\'âne.';
    return t + '\nQue font-ils ?';
  }, choices:[
    {t:'Aller vers la maison éclairée', go:'br12'},
    {t:'Ne pas approcher et passer la nuit dans la forêt', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'Arrivé à la maison éclairée, l\'âne a regardé par la fenêtre.\n"Que vois-tu ?", a demandé le coq.\n"Une table couverte de bonnes choses,\net des brigands assis autour qui mangent."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"Nous aussi, nous avons besoin de cela", a dit le coq.\nLes 4 ont mis leurs têtes ensemble et ont discuté.', next:'br14'},

  br14:{art:'br_mado', text:'L\'âne a posé ses pattes avant sur le rebord de la fenêtre.\nLe chien a sauté sur son dos,\nle chat est monté sur le chien,\net tout en haut s\'est perché le coq.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'Tous ensemble !!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'Et tous ensemble, ils ont sauté par la fenêtre.\nEt crac, la vitre a volé en éclats !\nLes brigands ont crié "Un monstre !" et se sont enfuis dans la forêt.', next:'br16'},

  br16:{art:'br_gochisou', text:'Les 4 se sont mis à table.\nIls ont mangé comme pour se rassasier 40 jours durant, ont éteint la lumière\net chacun s\'est endormi à sa place préférée.\nL\'âne dans la cour, le chien près de la porte, le chat près de la cheminée, le coq sur la poutre du toit.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Minuit.'}, then:'br17'},

  br17:{art:'br_yoru', text:'L\'un des brigands est revenu voir ce qui se passait.\nLa maison était silencieuse. Dans la cuisine, quelque chose brillait au fond de la cheminée.\n(Ce sont des braises encore rouges.)\nIl l\'a cru et a approché une allumette. À cet instant précis.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'Coup de griffe !!'}, then:'br18'},

  br18:{art:'br_yoru', text:'Le chat lui a sauté au visage et l\'a griffé.\nLe brigand s\'est enfui vers la porte de derrière. Là attendait le chien.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'Coup de dents !!'}, then:'br19'},

  br19:{art:'br_niwa', text:'Quand il s\'est précipité dans la cour, l\'âne lui a donné un coup de ses pattes arrière.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'Ruade !!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Sur le toit, le coq s\'est réveillé et a chanté très fort.\n"Cocorico !"\nPour le brigand, cela a sonné ainsi :\n"Amenez-moi celui-là !"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'Une sorcière ! Un juge !'}, then:'br21'},

  br21:{art:'br_houkoku', text:'Le brigand s\'est enfui dans la forêt et a dit aux autres :\n"Dans cette maison, il y a une sorcière terrible.\nElle m\'a craché dessus et m\'a griffé le visage de ses longues griffes.\nPrès de la porte, un homme avec un couteau m\'a piqué la jambe.\nDans la cour, un monstre noir m\'a frappé avec une massue.\nEt sur le toit, un juge criait : Amenez-moi celui-là !"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'À partir de ce jour, les brigands ne sont jamais revenus.';
    if(f.first) return t;
    return t + '\nAu matin, les 4 ont discuté. Que font-ils ?';
  }, choices:[
    {t:'Habiter dans cette maison', go:'e_br_seishi'},
    {t:'Aller quand même à Brême', go:'brb1'},
    {t:'Décider dans cette maison ce qu\'on fait le matin', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'La maison a tellement plu aux 4 musiciens\nqu\'ils n\'ont plus voulu la quitter.\nEt celui qui a raconté cette histoire en dernier a encore la bouche chaude.\nEt ils vécurent heureux.'},

  /* ---- Dans la ville de Brême ---- */
  brb1:{art:'br_roba', text:'"C\'est une bonne maison. Mais nous sommes des musiciens."\nLes 4 ont fermé la maison à clé et ont repris la grand-route.', next:'brb2'},
  brb2:{art:'br_bremen', text:'La ville de Brême était grande et animée.\nEt sur la place, il y avait déjà les musiciens de la ville.\nLeurs trompettes et leurs tambours brillaient.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'... Alors, ce sera ici.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'Dans un coin de la place, les 4 ont accordé leurs voix.\nHi-han, ouaf, miaou, cocorico.\nUn enfant, puis un autre, se sont approchés.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Ils n\'avaient pas d\'instruments brillants.\nMais chaque jour, des enfants venaient dans ce coin de la place.\nDans un coin de la ville, les 4 sont devenus des musiciens.\nEt ils vécurent heureux.'},

  /* ---- Le matin dans la forêt ---- */
  brm1:{art:'br_mori', text:'"Mieux vaut ne pas approcher d\'une maison la nuit", a dit l\'âne.\nLes 4 ont passé la nuit dans la forêt.', next:'brm2'},
  brm2:{art:'br_mori', text:'Au matin, le coq a chanté et tout le monde s\'est réveillé.\n"Tant qu\'à faire, essayons une fois ensemble."\nHi-han, ouaf, miaou, cocorico.', next:'brm3'},
  brm3:{art:'br_roba', text:'Alors est passée une charrette chargée de sacs de farine.\nLe meunier a entendu la voix de l\'âne et a dit :\n"Quelle belle voix. Viens travailler à mon moulin. Tu auras à manger tant que tu veux."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Je suis musicien.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'L\'âne a refusé poliment et a continué à marcher avec ses compagnons.\nOù ils arriveraient, on ne le savait pas encore.\nLe chant des 4 résonnait bien dans le matin de la forêt.\nEt ils vécurent heureux.'},

  /* ---- Le matin de chacun ---- */
  bra1:{art:'br_ie_asa', text:'Au matin, que font-ils dans cette maison ?', choices:[
    {t:'Le coq annonce l\'heure sur le toit', go:'bra1r', set:{brasa:'ondori'}},
    {t:'Le chien fait la sieste près de la porte', go:'bra1r', set:{brasa:'inu'}},
    {t:'Le chat se met en rond devant la cheminée', go:'bra1r', set:{brasa:'neko'}},
    {t:'L\'âne remue les oreilles au soleil', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'Le chien s\'est allongé près de la porte.\nIl n\'a plus besoin de courir après qui que ce soit.';
    if(f.brasa==='neko') return 'Le chat s\'est mis en rond devant la cheminée.\nLes jours à courir après les souris sont finis.';
    if(f.brasa==='roba') return 'L\'âne s\'est mis au soleil et a remué ses longues oreilles.\nIl n\'y a plus de sacs de farine sur son dos.';
    return 'Le coq est monté sur le toit et a chanté vers le ciel de l\'est.\nPersonne ne le lui avait demandé.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Personne ne le leur avait dit.\nChacun a décidé par lui-même.\nAujourd\'hui encore, le coq annonce l\'heure, le chien dort près de la porte,\nle chat se met en rond devant la cheminée, et l\'âne remue ses longues oreilles au soleil.\nEt ils vécurent heureux.'},

  /* ================= L'histoire des brigands ================= */

  bd1:{art:'dorobou_mori', text:'Voici l\'histoire de 3 brigands qui habitaient une maison dans la forêt.\nCe soir-là aussi, la table était couverte de bonnes choses.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'Que mangent-ils ce soir ?', choices:[
    {t:'Des saucisses et du vin', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Du pain, du fromage et des pommes', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'Ils ont couvert toute la table de pain, de fromage et de pommes.\nLes 3 se sont mis à manger de bonne humeur.'
    : 'Ils ont fait griller des saucisses et ont versé le vin.\nLes 3 se sont mis à manger de bonne humeur.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'Soudain, devant la fenêtre, il y a eu une voix comme personne n\'en avait jamais entendu.\nHi-han, ouaf, miaou, cocorico. Tout en même temps.\nEt puis, crac, la vitre a volé en éclats !\n"Un monstre !"\nLes 3 se sont enfuis dans la forêt.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'Au fond de la forêt, les 3 ont repris leur souffle.\n"Qu\'est-ce qu\'on fait de cette maison ?"', choices:[
    {t:'Retourner voir ce qui se passe', go:'bdg1'},
    {t:'Renoncer à cette maison', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'La cuisine était plongée dans le noir.\nAu fond de la cheminée brillaient deux petites lumières.\n(Ce sont des braises encore rouges.)\nIl a approché une allumette...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'Une sorcière !!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'Le visage griffé, la jambe piquée, frappé à coups de massue,\net du toit : "Amenez-moi celui-là !"\nLe brigand s\'est enfui dans la forêt.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"Il y a une sorcière, un homme avec un couteau, un monstre noir et un juge."\nAucun des autres n\'a plus jamais approché cette maison.\nCe qu\'il y avait vraiment, personne ne l\'a su.\nEt ils vécurent heureux.'},

  bdm1:{art:'dorobou_mori', text:'"Cette maison est à eux maintenant."\nLes 3 ont marché vers la sortie de la forêt.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'En ville, le marché du matin était installé.\nUne pancarte annonçait : "On cherche des porteurs."\nLes 3 se sont regardés.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'Ce que les 3 ont fait pour vivre à partir de ce jour,\ncette histoire ne le dit pas.\nDans la maison de la forêt résonne le chant des 4.\nFin.'},

  /* ================= L'histoire du coq ================= */

  bo1:{art:'ondori_yane', text:'Voici l\'histoire d\'un coq qui chantait sur le portail d\'une ferme.\nDemain c\'est dimanche. Des invités viennent, et moi, je dois finir en soupe.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'Que fait-il en ce dernier jour ?', choices:[
    {t:'Chanter de toutes ses forces', go:'bo2r', set:{bolife:'naku'}},
    {t:'Marcher lentement dans la cour', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Il a marché lentement dans la cour, d\'un bout à l\'autre.\nC\'était pour tout regarder une dernière fois.'
    : 'Sur le portail, il a chanté jusqu\'à s\'enrouer.\nCertains se bouchaient les oreilles. Cela lui était égal.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Alors sont passés un âne, un chien et un chat.\n"N\'importe quoi vaut mieux que la mort. Tu as une belle voix."\nLe coq a sauté du portail.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'Ma voix suffit-elle ?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'À la maison de la forêt, le coq s\'est perché tout en haut.\nCe qui allait suivre, c\'est le coq qui le décide.', choices:[
    {t:'Chanter du haut du toit à minuit', go:'bok1'},
    {t:'Habiter cette maison et annoncer le matin', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'À minuit, il s\'est réveillé sur la poutre du toit.\nEn bas, un brigand se débattait.\nLe coq a chanté de toutes ses forces.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'Cocorico !!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'Pour le brigand, cela a sonné comme : "Amenez-moi celui-là !"\nLa voix qui devait finir en soupe a protégé la maison.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'À quoi sert sa voix, c\'est lui qui le décide.\nDepuis, le coq a chanté quand il voulait et comme il voulait.\nEt ils vécurent heureux.'},

  boa1:{art:'br_ie_asa', text:'Une fois installé dans la maison, le coq est monté sur le toit.\nPersonne ne le lui avait demandé.\nLe matin, quand le ciel de l\'est pâlissait, le coq chantait.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'Le chien se réveillait, le chat s\'étirait, et l\'âne secouait les oreilles.\n"Je ne finirai plus en soupe. Chaque matin, je chante ici."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'À la voix du coq, quelqu\'un se réveille.\nCela seul suffisait à réjouir le coq.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_FR);

  T.ZK_EN.push(
    {section:'Les musiciens de Brême'},
    {id:'br_seishi', n:'La maison qui leur plaisait', h:'L\'histoire d\'origine, celle du 1er passage'},
    {id:'br_bremen', n:'Dans la ville de Brême',     h:'Le matin, aller quand même à Brême...'},
    {id:'br_mori',   n:'Le matin dans la forêt',     h:'Ne pas approcher la maison éclairée...'},
    {id:'br_asa',    n:'Le matin de chacun',         h:'Décider dans la maison ce qu\'on fait le matin...'},
    {id:'bd_gokai',  n:'La sorcière et le juge',     h:'Dans l\'histoire des brigands, retourner voir...'},
    {id:'bd_machi',  n:'Sortir de la forêt',         h:'Dans l\'histoire des brigands, renoncer à la maison...'},
    {id:'bo_koe',    n:'Une voix qui a porté',       h:'Dans l\'histoire du coq, chanter à minuit...'},
    {id:'bo_asa',    n:'Annoncer le matin',          h:'Dans l\'histoire du coq, annoncer le matin...'}
  );

})();
