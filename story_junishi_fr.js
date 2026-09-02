"use strict";
/* Comment les 12 animaux furent choisis - French scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_FR !== 'undefined') {
    T = { SCENES_EN: SCENES_FR, ZK_EN: ZK_FR };
  } else {
    T = require('./story_fr.js');
  }

  var N12 = ['Rat','Bœuf','Tigre','Lapin','Dragon','Serpent','Cheval','Mouton','Singe','Coq','Chien','Sanglier'];

  var JUNISHI_FR = {

  /* ================= Comment les 12 animaux furent choisis ================= */

  ju1:{art:'ju_ofure', text:'Voici l\'histoire des 12 animaux qui ont donné leur nom aux années.\nÀ la fin d\'une année, le dieu fit publier un avis.\n"Le matin du jour de l\'An, venez à mon palais. Dans l\'ordre d\'arrivée, les 12 premiers donneront leur nom aux années."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'Les animaux commencèrent chacun leurs préparatifs.';
    if(f.first) return t;
    return t + '\nQue préparent-ils ?';
  }, choices:[
    {t:'S\'entraîner à courir', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Préparer un festin et attendre', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'Le mouton pila des gâteaux de riz, et le singe ramassa des châtaignes.\nLe matin du jour de l\'An, tous les mangeraient ensemble.'
    : 'Le tigre et le cheval traversèrent les champs en courant, encore et encore.\nLe lapin, lui, s\'entraîna à bondir, hop, hop, hop.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'Le chat n\'avait pas entendu la date de l\'avis.\n"Dis, Rat, c\'est quand déjà, le jour du palais ?"';
    if(f.first) return t + '\n"Le matin du 2 janvier."\nVoilà ce que répondit le rat.';
    return t + '\nQue répond le rat ?';
  }, choices:[
    {t:'"Le matin du 2 janvier"', go:'ju4'},
    {t:'"Le matin du 1er janvier"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'La nuit du dernier jour de l\'année.\n"Je marche lentement. Je ferais mieux de partir tout de suite."\nEt le bœuf se mit en route sur le chemin enneigé, alors qu\'il faisait encore nuit.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Allons-y doucement'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'Départ à la tombée de la nuit !!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'Sur ce dos, le rat sauta et se percha sans un bruit.\nLe bœuf ne remarqua rien.\nSur le chemin enneigé, tout doucement, tout doucement.';
    if(f.first) return t;
    return t + '\nQue fit le rat pendant le trajet de nuit ?';
  }, choices:[
    {t:'Dormir sur son dos', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Compter les étoiles', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'Au-dessus de la neige, le ciel de la nuit était plein d\'étoiles.\nLe rat les compta, une, deux, en attendant le matin.'
    : 'Le dos du bœuf était chaud, et sans s\'en rendre compte, le rat s\'endormit.\nSeul le bruit des pas du bœuf continuait sur le chemin enneigé.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Le matin arriva.\nLa porte du palais était devant eux.\nLe bœuf pensa qu\'il était arrivé le premier.';
    if(f.first) return t;
    return t + '\nQue fait le rat ?';
  }, choices:[
    {t:'Sauter à terre et entrer le premier', go:'juc_tobiori'},
    {t:'Rester sur le dos et entrer avec le bœuf', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'Un bond à terre !!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'À cet instant, le rat sauta du dos du bœuf\net franchit la porte avant lui.\nLa voix du dieu se fit entendre : "La première année sera le Rat."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Rat'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Ensuite, le bœuf franchit la porte.\n"L\'année suivante sera le Bœuf."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Rat, Bœuf'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'Le tigre arriva en courant.\nPuis le lapin franchit la porte d\'un bond.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'Le dragon et le serpent arrivèrent devant la porte au même moment.\n"Après vous", dit le serpent.\nLe dragon entra le premier, et le serpent ensuite.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tigre, Lapin, Dragon, Serpent'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'Le cheval arriva au galop, et le mouton le suivit.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'Le singe et le chien se disputèrent en chemin et n\'avançaient plus.\nLe coq se plaça entre les deux.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'Au palais d\'abord !'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Pressés par le coq, le singe et le chien cessèrent leur dispute.\nLe singe, le coq et le chien franchirent la porte, dans cet ordre.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Cheval, Mouton, Singe, Coq, Chien'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'En dernier vint le sanglier.\nComme il ne savait courir qu\'en ligne droite,\nil dépassa la porte et dut revenir sur ses pas.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'Tout droit, sanglier !!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'Le 12e fut le Sanglier.\nAinsi, les 12 noms des années furent au complet.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'Les 12 noms !!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'Le dieu dit aux 12 animaux :\n"Désormais, chaque année et à tour de rôle, vous donnerez votre nom à l\'année."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'Le lendemain matin.\nLe chat arriva devant la porte du palais.\nLa porte était fermée.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... Tiens ?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'La voix du dieu se fit entendre.\n"Le jour où il fallait venir, c\'était hier. Va te laver le visage et reviens une autre fois."';
    if(f.first) return t;
    return t + '\nQue fait le chat ?';
  }, choices:[
    {t:'Se laver le visage et rentrer', go:'ju18'},
    {t:'Se laver le visage et retourner à la porte', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'Le chat se lava le visage.\nEt depuis ce jour, dès qu\'il aperçoit un rat, il le poursuit.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Rat, Bœuf, Tigre, Lapin, Dragon, Serpent, Cheval, Mouton, Singe, Coq, Chien, Sanglier.\nChaque année et à tour de rôle, les 12 animaux donnèrent leur nom à l\'année.\nEt ils vécurent heureux.'},

  /* ---- Sur le dos du boeuf ---- */
  jua1:{art:'ju_mon', text:'Le rat ne sauta pas à terre.\nToujours sur le dos du bœuf, ils franchirent la porte ensemble.\n"Deux à la fois, donc", dit la voix du dieu.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"Que le bœuf passe le premier", dit le rat.\n"Que le rat passe le premier", dit le bœuf.\nLe dieu rit.\n"Alors la première année sera le Rat, et la suivante le Bœuf.\nEn échange, vous vous aiderez l\'un l\'autre pendant vos années."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Depuis, pendant l\'année du Rat, c\'est le bœuf qui aide, et pendant l\'année du Bœuf, c\'est le rat,\nchacun aidant l\'autre dans son travail.\nL\'ordre n\'a pas changé. Mais ce matin-là était un matin pour deux.\nEt ils vécurent heureux.'},

  /* ---- Le salut de chaque annee ---- */
  jub1:{art:'ju_neko_kao', text:'Le chat se lava le visage et retourna à la porte.\n"Je me suis lavé le visage."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'La voix du dieu se fit entendre.\n"Il n\'y a que 12 noms pour les années.\nMais chaque jour de l\'An, viens me saluer."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Depuis, chaque matin du jour de l\'An, le chat va saluer au palais.\nIl ne donne son nom à aucune année.\nMais la porte du palais s\'ouvre pour le chat.\nEt ils vécurent heureux.'},

  /* ---- Au-dela de la mer ---- */
  juu1:{art:'ju_nezuneko', text:'"Le matin du 1er janvier."\nLe chat dit "merci" et, cette nuit-là, se coucha de bonne heure.', next:'juu2'},
  juu2:{art:'ju_kake', text:'Le matin du jour de l\'An.\nLe rat sur le dos du bœuf, le bœuf à pas lents, le tigre à toute allure.\nEt devant la porte, le lapin et le chat arrivèrent au même moment.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'Au même moment ?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'Le dieu réfléchit un moment, puis dit :\n"Ici, cette année sera celle du Lapin.\nDans le pays au-delà de la mer, cette année sera confiée au Chat."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'C\'est pourquoi, aujourd\'hui encore, dans les pays au-delà de la mer,\nil y a des endroits où le chat donne son nom à une année.\nC\'est la même histoire, mais dans un autre pays, les noms sont différents.\nEt ils vécurent heureux.'},

  /* ================= L'histoire du chat ================= */

  jn1:{art:'jneko_hinata', text:'Voici l\'histoire d\'un chat.\nIl avait entendu parler d\'un avis du dieu, mais il n\'avait pas entendu la date.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'À qui demander ?', choices:[
    {t:'Demander au rat', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Demander au chien', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"En janvier... le 1er, je crois ? Le rat en sait plus", dit le chien.\nAlors le chat demanda au rat.\n"Le matin du 2 janvier", répondit le rat.'
    : '"Le matin du 2 janvier", répondit le rat.\n"Merci", dit le chat.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'Le matin du 2 janvier.\nLe chat alla à la porte du palais.\nLa porte était fermée.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... Hier ?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"Le jour où il fallait venir, c\'était hier. Va te laver le visage et reviens une autre fois."\nAinsi parla la voix du dieu.\nQue fait le chat ?', choices:[
    {t:'Se laver le visage et rentrer à la maison', go:'jna1'},
    {t:'Se rouler en boule au soleil', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'Le chat se lava le visage.\nL\'eau était froide.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'Ce que le chat pensa après s\'être lavé le visage\nn\'est pas écrit dans cette histoire.\nLe chat s\'est lavé le visage. C\'est tout.\nFin.'},
  jnh1:{art:'jneko_hinata', text:'Le chat alla dans un coin ensoleillé.\nIl se roula en boule et ferma les yeux.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Il y a des chats qui poursuivent les rats, et des chats qui dorment au soleil.\nCe que ce chat pense en ce moment, seul le chat le sait.\nFin.'},

  /* ================= L'histoire du rat ================= */

  jz1:{art:'jnezumi_ana', text:'Voici l\'histoire d\'un rat.\nEn entendant l\'avis du dieu, le rat réfléchit.\n(Avec mes pattes, même en courant, je n\'arriverai jamais à temps.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'La nuit, dans son terrier, que fait-il ?', choices:[
    {t:'Penser au chemin jusqu\'au palais', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Se coucher tôt et être prêt au matin', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'Le rat se glissa dans la paille et s\'endormit de bonne heure.\nMême dans ses rêves, il voyait la porte du palais.'
    : 'Le rat refit dans sa tête le chemin jusqu\'au palais, encore et encore.\nLe chemin était long. Il me faut le dos de quelqu\'un, pensa-t-il.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"C\'est quand déjà, le jour du palais ?", demanda le chat.\nLe rat répondit : "Le matin du 2 janvier."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'La nuit du dernier jour de l\'année, le rat sauta sur le dos du bœuf.\nLe bœuf ne remarqua rien.\nQue fait le rat ?', choices:[
    {t:'Se laisser porter en silence', go:'jzu1'},
    {t:'Parler au bœuf', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'Au matin, devant la porte, le rat sauta à terre.\nLa première année fut le Rat.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'Le rat ne dit pas au chat le vrai jour.\nPourquoi, seul le rat le sait.\nEt le rat donna son nom à la toute première année.\nFin.'},
  jzs1:{art:'ju_senaka', text:'"Bœuf, merci de me porter."\nSurpris, le bœuf se retourna.\n"Ah, c\'est toi, Rat. Tu ne pèses rien. Reste donc où tu es."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Devant la porte, le bœuf dit :\n"Vas-y vite, et va chercher ton nom."\nLe rat sauta à terre et franchit la porte.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'La première année fut le Rat. La suivante, le Bœuf.\nLe rat n\'oublia jamais le bœuf qui lui avait prêté son dos.\nEt ils vécurent heureux.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_FR);

  T.ZK_EN.push(
    {section:'Comment les 12 animaux furent choisis', note:'Dans certains pays au-delà de la mer, le chat fait partie des 12 animaux. Au Japon, on raconte aussi des jeux de mots sur un 13e animal, comme la belette ou la grenouille.'},
    {id:'ju_seishi',  n:'Les 12 noms',                  h:'L\'histoire telle qu\'on la raconte, dès la toute première fois'},
    {id:'ju_ushi',    n:'Sur le dos du bœuf',           h:'Devant la porte, rester sur le dos au lieu de sauter...'},
    {id:'ju_kao',     n:'Le salut de chaque année',     h:'Se laver le visage et retourner une fois de plus à la porte...'},
    {id:'ju_umi',     n:'Au-delà de la mer',            h:'Quand le rat donne le vrai jour...'},
    {id:'jn_asa',     n:'Le lendemain matin',           h:'Dans l\'histoire du chat : se laver le visage et rentrer...'},
    {id:'jn_hinata',  n:'Le chat au soleil',            h:'Dans l\'histoire du chat : se rouler en boule au soleil...'},
    {id:'jz_uso',     n:'Le jour du mensonge',          h:'Dans l\'histoire du rat : se laisser porter en silence...'},
    {id:'jz_senaka',  n:'Le dos emprunté',              h:'Dans l\'histoire du rat : parler au bœuf...'}
  );

})();
