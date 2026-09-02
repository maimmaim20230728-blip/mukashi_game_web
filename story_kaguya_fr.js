"use strict";
/* Princesse Kaguya - French scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   Source : Taketori Monogatari (10e siecle, domaine public). Aucun element propre au film de 2013. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var KAGUYA_FR = {

  /* ================= Princesse Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Voici une histoire d\'il y a très, très longtemps.\nIl y avait un vieil homme qui vivait de la coupe du bambou.\nLes gens l\'appelaient le Coupeur de bambou.\nUn jour, au fond de la bambouseraie, il trouva un bambou dont le pied brillait comme de l\'or.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'Le bambou brille !!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'Quand il ouvrit le bambou, une toute petite fille, pas plus haute que la main, était assise à l\'intérieur.\nLe vieil homme la posa au creux de sa paume et la ramena chez lui.\nSa femme et lui décidèrent de l\'élever tous les deux, dans un petit panier.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'Que faire chaque jour pour la petite princesse ?', choices:[
    {t:'Lui chanter une berceuse', go:'kg3r', set:{takeko:'uta'}},
    {t:'Lui fabriquer des jouets en bambou', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'Le vieil homme fabriqua avec du bambou de petites flûtes et de petits chariots.\nQuand la princesse riait, la vieille femme riait aussi.'
    : 'Quand la vieille femme chantait une berceuse, la princesse s\'endormait paisiblement.\nTous les deux restaient près du panier, à la regarder longuement.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'À partir de ce jour, chaque bambou qu\'il coupait contenait de l\'or.\nLa petite fille grandit à vue d\'œil et, en 3 mois environ, devint une belle jeune fille.\nOn lui donna le nom de "Kaguya, princesse du bambou élancé".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'La beauté de la princesse Kaguya fit bientôt parler tout le pays.\nAutour de la maison, les gens se rassemblaient pour l\'apercevoir un instant.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Parmi eux vinrent 5 jeunes nobles qui voulaient absolument l\'épouser.\nLe prince Ishitsukuri, le prince Kuramochi, le ministre Abe,\nle Grand Conseiller Otomo et le Conseiller du Milieu Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'La princesse Kaguya dit :\n"J\'irai chez celui qui m\'apportera le trésor que je souhaite voir."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'Le bol de pierre du Bouddha !!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'La branche de joyaux de Horai !!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'La fourrure du rat de feu !!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'Le joyau du cou du dragon !!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'Le coquillage de l\'hirondelle !!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Aucun de ces trésors ne semblait exister en ce monde.\nLes 5 partirent en voyage, chacun de son côté.';
    if(f.first) return t;
    return t + '\nDe qui écoutons-nous l\'histoire ?';
  }, choices:[
    {t:'Le prince Ishitsukuri', go:'kgk1'},
    {t:'Le prince Kuramochi', go:'kgk2'},
    {t:'Le ministre Abe', go:'kgk3'},
    {t:'Le Grand Conseiller Otomo', go:'kgk4'},
    {t:'Le Conseiller du Milieu Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'Le prince Ishitsukuri trouva le voyage jusqu\'à la lointaine Inde bien trop pénible\net rapporta un vieux bol pris dans un temple voisin.\nMais le bol du Bouddha devait briller.\nUn bol sans lumière fut découvert tout de suite.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'Le prince Kuramochi fit fabriquer la branche de joyaux par des artisans.\nLa princesse comme le vieil homme ouvrirent de grands yeux devant cette branche magnifique.\nMais voilà que les artisans arrivèrent en disant :\n"Nous n\'avons pas encore été payés pour ce travail."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'Le ministre Abe fit venir une fourrure d\'un pays lointain.\nLa princesse dit : "La fourrure du rat de feu ne doit pas brûler, même dans le feu."\nOn la mit dans le feu, et la fourrure se consuma en crépitant.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'Le Grand Conseiller Otomo prit la mer pour chercher un dragon.\nUne grande tempête se leva et le bateau tourna, tourna.\nQuand il regagna enfin le rivage, il rentra chez lui les yeux rouges et gonflés.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'Le Conseiller du Milieu Isonokami glissa la main dans un nid d\'hirondelle\net, au moment où il attrapa quelque chose, il tomba du toit.\nCe qu\'il tenait, c\'était une vieille fiente d\'hirondelle.\nBlessé, le Conseiller dut rester au lit.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'Finalement, pas un seul ne rapporta un véritable trésor.';
    if(f.first) return t;
    return t + '\nEt maintenant, que faire ?';
  }, choices:[
    {t:'Laisser courir les rumeurs et vivre tranquillement', go:'kg10'},
    {t:'Dire la vérité au vieil homme et à la vieille femme', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'La rumeur parvint jusqu\'aux oreilles de l\'Empereur.\nFaisant mine de partir à la chasse, l\'Empereur se rendit chez le Coupeur de bambou.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'Le palanquin de l\'Empereur !!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'Quand l\'Empereur voulut la faire monter dans le palanquin,\nla silhouette de la princesse Kaguya devint doucement lumière et disparut.\n"Je ne l\'emmènerai pas."\nSur ces mots, l\'Empereur retourna à la capitale.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'À partir de ce jour, l\'Empereur et la princesse Kaguya échangèrent des lettres et des poèmes.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'Ainsi passèrent 3 années.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'Au printemps, la princesse Kaguya se mit à lever les yeux vers la lune et à pleurer.\nQuand le vieil homme lui en demandait la raison, elle ne répondait pas.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'À la fin de l\'été, la princesse Kaguya finit par tout leur dire.\n"Je suis de la Capitale de la Lune.\nLa nuit de la pleine lune du 8e mois, on viendra me chercher. Je dois rentrer."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'Je ne la rendrai pas !'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'Le vieil homme demanda de l\'aide à l\'Empereur, et de nombreux soldats vinrent.\nSur le toit comme dans le jardin s\'alignèrent des hommes armés d\'arcs.\nLa vieille femme cacha la princesse au fond de la chambre et ferma bien la porte.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'La nuit de la pleine lune. Un peu après minuit,\ntout autour de la maison devint plus clair qu\'en plein jour.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'La lumière de la lune descend !!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Du ciel descendirent des êtres portés par les nuages.\nLes soldats perdirent leurs forces et aucun ne put bander son arc.\nLa porte s\'ouvrit d\'elle-même et, des bras de la vieille femme, la princesse s\'avança.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'Le messager de la Lune dit :\n"Vieil homme. La princesse a commis une faute sur la Lune et, pour l\'expier, elle est descendue vivre ici quelque temps.\nLe temps de l\'expiation est fini.\nC\'était aussi un remerciement pour une petite bonne action de ta part."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'La princesse Kaguya écrivit une lettre au vieil homme.\n"Le vêtement que je laisse en partant, considérez-le comme si c\'était moi.\nLes nuits où la lune se montre, levez les yeux."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'Le messager de la Lune tendit un flacon de l\'élixir de vie.';
    if(f.first) return t + '\nLa princesse en goûta une gorgée, joignit le reste à sa lettre pour l\'Empereur\net remit le tout au messager de l\'Empereur.';
    return t + '\nÀ qui donner cet élixir ?';
  }, choices:[
    {t:'Le joindre à la lettre pour l\'Empereur', go:'kg21'},
    {t:'Le laisser au vieil homme et à la vieille femme', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'Le messager de la Lune tendit la robe de plumes.\n"Dès qu\'on la revêt, toutes les peines du cœur humain s\'effacent."';
    if(f.first) return t + '\nLa princesse revêtit la robe de plumes.';
    return t + '\nQue faire ?';
  }, choices:[
    {t:'Revêtir la robe de plumes', go:'kg22'},
    {t:'Se retourner une dernière fois avant de la revêtir', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'Les peines du cœur effacées, la princesse ne ressentit plus pour le vieil homme ni tendresse ni nostalgie.\nPortée par un nuage, elle monta vers la lune.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Vers la lune...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'Le vieil homme et la vieille femme ne pouvaient arrêter leurs larmes.\nSerrant contre eux le vêtement laissé par la princesse, ils regardèrent le ciel très, très longtemps.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'L\'Empereur fit brûler la lettre de la princesse et l\'élixir de vie\nau sommet de la montagne de Suruga, la plus proche du ciel.\nComme beaucoup de guerriers y étaient montés,\ncette montagne fut appelée le "mont Fuji", la montagne riche en guerriers.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'Les nuits où la lune se montre, levez les yeux.\nComme la princesse l\'avait écrit, le vieil homme et la vieille femme regardèrent le ciel les nuits de lune.\nLe vêtement qu\'elle avait laissé resta entre leurs mains.\nFin.'},

  /* ---- Les jours qui restaient ---- */
  kgn1:{art:'kg_uchiake', text:'Avant même la venue de l\'Empereur, la princesse Kaguya leur parla à tous les deux.\n"Je suis de la Capitale de la Lune. Cet automne, je dois rentrer."\nLe vieil homme et la vieille femme restèrent longtemps sans rien dire.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'À partir de ce jour, tous les 3 vécurent chaque journée comme un trésor.\nIls se promenèrent dans la bambouseraie et allèrent jusqu\'au bambou où on l\'avait trouvée la première fois.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'Les nuits de belle lune, tous les 3 s\'asseyaient sur la véranda.\n"Les nuits de lune, asseyez-vous ici. Moi aussi, depuis la lune, je regarderai cet endroit."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'La nuit de la pleine lune, on vint la chercher.\nLe vieil homme ne combattit pas.\nTous les 3 se tinrent la main et attendirent la lumière.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'La séparation vint, tout comme avant.\nMais avant elle, tous les 3 avaient eu un automne entier passé ensemble.\nSur la véranda, 3 coussins sont restés là où ils étaient.\nFin.'},

  /* ---- Avant la robe de plumes ---- */
  kgm1:{art:'kg_shouten', text:'Avant de revêtir la robe de plumes, la princesse se retourna.\nLe vieil homme et la vieille femme la regardaient.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Merci de m\'avoir élevée'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'La vieille femme pleurait, souriait et agitait la main.\nLe vieil homme aussi agitait la main, aussi haut qu\'il pouvait.\nLa princesse grava leurs visages dans ses yeux, puis revêtit la robe de plumes.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Même une fois les peines du cœur effacées, les deux visages qu\'elle avait vus en dernier\nsont restés avec elle, dans la lumière, tout ce temps.\nFin.'},

  /* ---- L'élixir de vie ---- */
  kgu1:{art:'kg_tegami', text:'La princesse remit l\'élixir de vie au vieil homme et à la vieille femme.\n"Si vous le buvez, vous vivrez à jamais."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Après le retour de la princesse sur la lune, tous les deux regardèrent le flacon.\n"Un monde sans la princesse, nous n\'avons pas besoin d\'y vivre à jamais."\nLe vieil homme le dit doucement.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'La nuit de lune suivante, tous les deux posèrent le flacon sur la véranda.\nComme pour le tendre doucement vers la lune.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'L\'élixir ne fut jamais bu ; il resta là, baigné de lumière lunaire.\nL\'Empereur brûla le sien sur le mont Fuji, le vieil homme offrit le sien à la lune depuis la véranda.\nDes deux côtés, c\'était une façon de ne pas oublier la princesse, chacun à sa manière.\nFin.'},

  /* ================= L'histoire du Coupeur de bambou ================= */

  kj1:{art:'okina_take', text:'Voici l\'histoire du Coupeur de bambou et de sa femme, et de ce qui vint ensuite.\nUn mois a passé depuis que la princesse est retournée sur la lune.', next:'kj2'},
  kj2:{art:'kg_ato', text:'Que faire aujourd\'hui ?', choices:[
    {t:'Plier le vêtement de la princesse', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Marcher dans la bambouseraie', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'La bambouseraie ondulait dans le vent, exactement comme ce jour-là.\nLe vieil homme resta un moment à écouter le bruit des bambous.'
    : 'La vieille femme plia soigneusement le vêtement de la princesse.\nElle le plia, le déplia, et le plia encore.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'Une nuit de lune. Tous les deux relurent la lettre de la princesse.\n"Les nuits où la lune se montre, levez les yeux."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'Et si nous levions les yeux ?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'La vieille femme le dit au vieil homme.\nQue vont-ils faire tous les deux ?', choices:[
    {t:'Regarder la lune depuis la véranda', go:'kjt1'},
    {t:'Aller à la bambouseraie au matin', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'Tous les deux s\'assirent côte à côte sur la véranda et levèrent les yeux vers la lune.\nLe chagrin ne s\'en allait pas.\nMais la lumière de la lune arrivait jusqu\'à la véranda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Depuis ce jour, les nuits de lune, tous les deux s\'assoient sur la véranda.\nIl y a des nuits où ils pleurent, des nuits où ils parlent, des nuits où ils se taisent.\nLa lumière de la lune leur arrivait de la même façon, chacune de ces nuits.\nFin.'},
  kjk1:{art:'okina_take', text:'Un matin de printemps, le vieil homme retourna à la bambouseraie.\nIl n\'y avait plus de bambou lumineux.\nÀ la place, un peu partout, des pousses de bambou sortaient la tête.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'... Déterrons-les.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'Le vieil homme déterra les pousses de bambou, une à une.\nSans se presser, sans que personne le lui demande, parce qu\'il l\'avait décidé lui-même.\nQuand le panier fut plein, la vieille femme arriva avec le repas.\nEt ils vécurent heureux.'},

  /* ================= L'histoire du messager de la Lune ================= */

  ku1:{art:'tsuki_miyako', text:'Voici l\'histoire d\'un messager qui vit dans la Capitale de la Lune.\nDans la Capitale de la Lune, il n\'y a pas de larmes. Il n\'y a pas non plus de peines du cœur.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Aujourd\'hui, c\'est le jour de la descente sur la terre. Que faut-il emporter ?', choices:[
    {t:'Seulement la robe de plumes', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'Aussi l\'élixir de vie', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'Dans la boîte, il mit la robe de plumes et un flacon de l\'élixir de vie.\nLes gens de la terre, dit-on, désirent beaucoup cela.'
    : 'Dans la boîte, il mit la robe de plumes.\nAvec elle seule, la princesse redeviendra aussitôt une personne de la Lune.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'En descendant sur un nuage, il vit beaucoup de monde autour de la maison.\nDes arcs à la main, ces gens regardaient dans sa direction d\'un œil dur.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'Le vieil homme criait quelque chose.\nLe messager ne comprenait pas le sens de ces mots.\nSur la Lune, les mots "ne pas rendre" n\'existent pas.', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'... Des larmes ?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'La princesse s\'avança.\nQue va faire le messager ?', choices:[
    {t:'Suivre la règle et lui mettre la robe de plumes', go:'kun1'},
    {t:'Écouter la demande de la princesse', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'Le messager suivit la règle et mit la robe de plumes à la princesse.\nMais il ne put faire semblant de ne pas voir le visage mouillé du vieil homme.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'De retour sur la Lune, le messager se souvenait encore de ce visage.\nDans un pays sans larmes, il apprit pour la première fois ce que veulent dire les larmes.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'Depuis, le messager de la Lune regarde de temps en temps la terre en contrebas.\nDans le pays qui ne connaît pas les larmes, il y a maintenant quelqu\'un qui les connaît.\nFin.'},
  kut1:{art:'kg_tegami', text:'"Remettez ma lettre et mon vêtement au vieil homme."\nÀ la demande de la princesse, le messager hocha la tête.\nRien de tel ne figure dans les règles de la Lune. Mais ce doit être l\'usage de la terre.', next:'kut2'},
  kut2:{art:'kg_ato', text:'Le messager descendit devant le vieil homme et lui remit la lettre et le vêtement avec soin.\nLe vieil homme les serra contre lui.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'De retour dans la Capitale de la Lune, le messager ajouta une ligne aux règles.\n"Celui qui revient de la terre peut laisser derrière lui une seule chose."\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_FR);

  T.ZK_EN.push(
    {section:'Princesse Kaguya'},
    {id:'kg_seishi',  n:'Les nuits de lune, lever les yeux',  h:'L\'histoire d\'origine, celle du 1er passage'},
    {id:'kg_nokori',  n:'Les jours qui restaient',            h:'Si tu dis la vérité avant la venue de l\'Empereur...'},
    {id:'kg_koromo',  n:'Avant la robe de plumes',            h:'Si tu te retournes encore une fois avant la robe de plumes...'},
    {id:'kg_kusuri',  n:'L\'élixir de vie',                   h:'Si tu laisses l\'élixir au vieil homme et à la vieille femme...'},
    {id:'kj_tsukiyo', n:'Là où arrive la lumière de la lune', h:'Dans l\'histoire du vieux couple : si tu lèves les yeux depuis la véranda...'},
    {id:'kj_take',    n:'De nouveau aux pousses de bambou',   h:'Dans l\'histoire du vieux couple : si tu vas à la bambouseraie au matin...'},
    {id:'ku_namida',  n:'Le pays sans larmes',                h:'Dans l\'histoire du messager de la Lune : si tu suis la règle...'},
    {id:'ku_tegami',  n:'Le message',                         h:'Dans l\'histoire du messager de la Lune : si tu écoutes la demande de la princesse...'}
  );

})();
