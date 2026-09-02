"use strict";
/* Hansel y Gretel - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_hansel_en.js
   Refrains: "Ris, ras, ris, ras, ¿quién roe mi casita?" / "Es el viento, el viento, el niño del cielo."
   / "Patito, patito, ... llévanos sobre tu lomo blanco." */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var HANSEL_ES = {

  /* ================= Hansel y Gretel ================= */

  hg1:{art:'hg_ie', text:'Esta es la historia de una familia de leñadores que vivía junto a un gran bosque.\nHansel y Gretel, los dos hermanos,\nvivían allí con su padre y su madrastra, los cuatro juntos.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'Aquel año hubo una gran hambruna en todo el país.\nEl pan se puso caro, y en la casa del leñador la comida iba menguando poco a poco.';
    if(f.first) return t;
    return t + '\nHoy solo hay un pan pequeño. ¿Cómo lo reparten?';
  }, choices:[
    {t:'Repartirlo entre los cuatro', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hansel le da más a su hermana', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"Yo no tengo hambre."\nHansel puso su parte, sin hacer ruido, en el plato de Gretel.'
    : 'Partieron el pan pequeño en cuatro y comieron juntos.\n"Ojalá mañana podamos comprar uno más grande."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'Esa noche, los dos oyeron la voz de la madrastra.\n"Mañana por la mañana llevaremos a los niños al fondo del bosque y los dejaremos allí.\nSi no, los cuatro nos moriremos de hambre."\nEl padre dijo que no muchas veces.\nPero al final asintió, sin decir nada.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel se puso a llorar.\n"Tranquila. Tengo un plan."\nHansel salió sin hacer ruido y recogió piedrecitas blancas a la luz de la luna.';
    if(f.first) return t + '\nHasta llenar los bolsillos.';
    return t + '\n¿Qué piedrecitas recoge?';
  }, choices:[
    {t:'Las piedrecitas redondas y blancas', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'Las que más brillan con la luna', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'Fue probando una por una y eligió las que brillaban como la plata.\nHasta llenar los bolsillos.'
    : 'Piedrecitas blancas y bien redondas, hasta llenar los bolsillos.\nAl volver a casa le susurró a Gretel: "Ya está todo bien."', next:'hg5'},

  hg5:{art:'hg_mori', text:'A la mañana siguiente, la familia salió hacia el bosque.\nMientras caminaba, Hansel iba dejando caer las piedrecitas una a una.\nEn el fondo del bosque, el padre encendió una fogata.\n"Aquí pueden descansar. Volveremos a buscarlos más tarde."\nSin darse cuenta, los dos se quedaron dormidos.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'Cuando despertaron, todo estaba oscurísimo.\nGretel se puso a llorar.\n"Esperemos a que salga la luna", dijo Hansel.\nY cuando por fin la luna salió sobre el bosque...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'¡¡Las piedrecitas brillan!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'Las piedrecitas brillaban como plata, una tras otra, hasta la casa.\nDe la mano, los dos caminaron toda la noche hasta la mañana.', next:'hg8'},

  hg8:{art:'hg_ie', text:'El padre lloró y abrazó a los dos muy fuerte.\nLa madrastra no dijo nada.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Pero la hambruna siguió.\nUna noche volvieron a oír aquella voz.\nEsta vez la puerta estaba cerrada con llave y no podían salir.';
    if(f.first) return t + '\nHansel decidió desmigajar el pan de la mañana y marcar con él el camino.';
    return t + '\n¿Qué hace?';
  }, choices:[
    {t:'Por la mañana, marcar el camino con migas de pan', go:'hg10'},
    {t:'Salir sin ruido por la ventana y recoger piedrecitas', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'Camino del bosque, Hansel fue dejando caer las migas, poquito a poco.\nY otra vez los dos se quedaron dormidos junto a la fogata.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'Cuando salió la luna, no quedaba ni una sola miga.\nLos pájaros del bosque se las habían comido todas.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'Los dos caminaron y caminaron.\nUna noche, dos noches, y luego la mañana del tercer día.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'La barriga vacía, las piernas agotadas.\nEntonces, en una rama, un pájaro blanco como la nieve estaba cantando.', next:'hg13'},

  hg13:{art:'hg_tori', text:'El pájaro voló delante de ellos y los guió cada vez más adentro del bosque.\nY cuando llegaron a un claro...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'¡¡Una casa de dulces!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Paredes de pan, un techo de pastel, ventanas de azúcar transparente.\nLa casa entera era comida.';
    if(f.first) return t + '\nHansel mordió el techo y Gretel la ventana, sin poder parar.';
    return t + '\n¿Por dónde empiezan?';
  }, choices:[
    {t:'El pastel del techo', go:'hg14r', set:{hokashi:'yane'}},
    {t:'La ventana de azúcar', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'La ventana de azúcar se rompió con un crac y se deshizo en la boca.\n"Nunca había probado nada tan rico."'
    : 'El pastel del techo sabía a miel.\n"Nunca había probado nada tan rico."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Ris, ras. Ris, ras.\nEntonces, desde dentro de la casa, se oyó una voz delgadita.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Ris, ras, ris, ras, ¿quién roe mi casita?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'Los dos contestaron:\n"Es el viento, es el viento. El viento, el niño del cielo."\nY siguieron comiendo.', next:'hg17'},

  hg17:{art:'hg_majo', text:'La puerta se abrió y salió una anciana apoyada en un bastón.\n"Vaya, vaya, qué visitas tan lindas. Pasen, pasen."\nLeche y crepes, manzanas y nueces.\nEn camas blancas, los dos durmieron profundamente.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Pero aquella anciana...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...era una bruja.\nLa bruja tenía los ojos rojos y no veía de lejos.\nEn cambio, tenía el olfato fino como el de una fiera.\nCuando un niño se acercaba, lo notaba por el olor.', next:'hg19'},

  hg19:{art:'hg_ori', text:'Por la mañana, encerraron a Hansel en una jaula.\n"Primero engordarte, y después comerte."\nA Gretel la pusieron a traer agua y a cocinar.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Cada mañana la bruja decía:\n"Saca el dedo. ¿Ya estás gordo?"\nY en lugar del dedo, Hansel le mostraba un huesito.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'¡¡Es un hueso!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'La bruja, con sus ojos débiles, se dejó engañar una y otra vez.\nPasaron cuatro semanas y por fin se le acabó la paciencia.\n"Gordo o flaco, mañana por la mañana te como."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'La bruja encendió el fuego del horno.\n"Métete dentro y mira si ya está bien caliente."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'¡¡Gretel contra la bruja!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel se dio cuenta de lo que la bruja pensaba hacer.';
    if(f.first) return t + '\n"No sé cómo se hace. ¿Cómo se entra?"';
    return t + '\n¿Qué hace?';
  }, choices:[
    {t:'Responder: "No sé cómo se hace"', go:'hg24'},
    {t:'Agarrar la llave de la jaula y huir', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Pero qué niña más tonta. Mira, se hace así."\nY en el momento en que la bruja metió ella misma la cabeza en el horno...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'¡¡Pum!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel empujó a la bruja dentro del horno y cerró de golpe la puerta de hierro.\nY ese fue el fin de la bruja.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel abrió la jaula.\n"¡Hansel, ya estamos a salvo!"\nDentro de la casa había cofres llenos de perlas y piedras preciosas.';
    if(f.first) return t + '\nLos dos se llenaron los bolsillos de piedras preciosas.';
    return t + '\n¿Qué se llevan a casa?';
  }, choices:[
    {t:'Llenarse los bolsillos de piedras preciosas', go:'hg27'},
    {t:'Llenar un saco con la comida de los estantes', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'Caminando por el bosque, llegaron a una gran extensión de agua.\nNo había puente ni barca.\nEntonces se acercó nadando un pato blanco.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'¡¡Patito, por favor!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Patito, patito, aquí están Gretel y Hansel.\nNo hay puente ni barca. Llévanos sobre tu lomo blanco."\n"Los dos juntos pesamos mucho. Vamos de uno en uno."\nY el pato los llevó a la otra orilla, primero a uno y después al otro.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Al salir de un bosque que ya conocían, vieron su casa de siempre.\nEl padre los vio y se echó a llorar.\nLa madrastra ya no estaba.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'De los bolsillos cayeron perlas y piedras preciosas, y el padre abrió mucho los ojos.\nDesde entonces nunca les faltó la comida.\nLos tres vivieron siempre juntos y en paz.\nY vivieron felices para siempre.'},

  /* ---- Otra vez las piedrecitas ---- */
  hk1:{art:'hg_koishi', text:'Hansel salió sin hacer ruido por la ventana\ny, a la luz de la luna, se llenó los bolsillos de piedrecitas blancas.', next:'hk2'},
  hk2:{art:'hg_mori', text:'Al día siguiente los dejaron en el fondo del bosque, pero los dos no se asustaron.\nCuando salió la luna, las piedrecitas brillaron hasta la casa.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"Nunca más volveré a hacer algo así."\nEl padre hizo esa promesa delante de los dos.\nLa madrastra, esa noche, también se quedó callada con la cabeza baja.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'Aquel invierno la casa siguió siendo pobre.\nPero repartían cada pan entre los cuatro y esperaron la primavera.\nA la bruja de la casa de dulces no la encontraron ni una sola vez.\nY vivieron felices para siempre.'},

  /* ---- A la otra orilla ---- */
  hkw1:{art:'hg_kamado', text:'Gretel agarró la llave de la jaula y sacó a Hansel.\n"¡Vámonos!"\nLa bruja de ojos débiles los persiguió olfateando el aire.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Al llegar al agua había un pato blanco.\n"¡De uno en uno! Con mucho peso me hundo."\nEl pato llevó primero a Gretel y después a Hansel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'La bruja también llegó a la orilla.\n"Patito, llévame a mí también."\nPero la bruja pesaba demasiado y el pato no se movió ni un poquito.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'Al otro lado del río, la bruja solo daba patadas en el suelo.\nDe la mano, los dos volvieron a casa.\nNadie entró en el horno y nadie fue comido.\nY vivieron felices para siempre.'},

  /* ---- El invierno del pueblo ---- */
  hgm1:{art:'hg_takara', text:'Gretel miró los estantes.\nHarina, miel, nueces, manzanas.\n"Esto es mejor que las piedras preciosas."\nLos dos llenaron un saco de comida.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Con el pesado saco en brazos, llegaron al agua.\nEl pato blanco llevó a la otra orilla a los dos y al saco, de uno en uno.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'En el pueblo la hambruna todavía seguía.\nLos dos repartieron por todo el pueblo la comida que habían traído.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Aquel invierno, la harina de la casa de dulces se convirtió en el pan del pueblo.\nHasta que llegó la primavera y brotó el verde en los campos, nadie pasó hambre.\nY vivieron felices para siempre.'},

  /* ================= La historia de la bruja ================= */

  hw1:{art:'majo_daidokoro', text:'Esta es la historia de una bruja que vivía en el fondo del bosque.\nCada día horneaba pan y hacía dulces,\ny con ellos hacía paredes y techos, y seguía construyendo su casa.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'¿Qué hornea hoy?', choices:[
    {t:'Galletas dulces', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Pan de nueces', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'El pan de nueces salió doradito.\nPero no había nadie que se lo comiera.\nLa bruja lo apiló en la pared.'
    : 'Las galletas dulces salieron crujientes.\nPero no había nadie que se las comiera.\nLa bruja las colocó en el techo.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'Un día se oyó un ris, ras.\nAlguien estaba mordisqueando la casa.\nLos ojos rojos de la bruja no veían de lejos.\nSolo su nariz captó el olor de unos niños.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Ris, ras, ¿quién roe mi casita?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"Es el viento, el viento, el niño del cielo."\nRespondieron dos vocecitas.\nLa bruja abrió la puerta. Y ahora...', choices:[
    {t:'Engordarlos y comérselos', go:'hwm1'},
    {t:'Prepararles un banquete', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'En la mesa: pan recién horneado y leche.\n"¡Qué rico!" "¡Qué rico!", decían los dos una y otra vez.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...¿Rico?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Hacía muchísimo tiempo que la bruja no oía esa palabra.\nAlguien se estaba comiendo lo que ella misma había hecho.\nLa bruja lloró, a escondidas.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Desde entonces, de vez en cuando llegan visitas a la casa de dulces.\nLa bruja sigue horneando pan y haciendo dulces hoy también.\nAhora, para las personas que se los comen.\nY vivieron felices para siempre.'},

  hwm1:{art:'hg_ori', text:'Encerró a Hansel en la jaula y cada mañana le decía: "Saca el dedo".\nPero los ojos de la bruja no distinguían un hueso de un dedo.\n"Todavía está flaco..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'¡¿Por qué no engordas?!'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'La bruja perdió la paciencia y encendió el fuego del horno.\n"Mira si ya está bien caliente."\n"No sé cómo se hace", dijo Gretel.\nY la bruja metió ella misma la cabeza.\n...No veía nada.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"¡Aquí está oscurísimo! ¡Que alguien me sujete la puerta!"\nMientras la bruja se removía, los dos niños se escaparon.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'La bruja salió a gatas del horno y tomó una decisión.\n"Me voy a comprar unas gafas."\nA la mañana siguiente, con su bastón, salió hacia el pueblo.\nLo que la bruja vio con las gafas puestas es ya otra historia.\nY vivieron felices para siempre.'},

  /* ================= La historia del pájaro blanco ================= */

  hb1:{art:'tori_sora', text:'Esta es la historia de un pájaro blanco como la nieve que vivía en el bosque.\nUna mañana, en el camino del bosque, había migas de pan por todas partes.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Unas migas de pan muy apetitosas. ¿Qué hace?', choices:[
    {t:'Comer solo una', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Comer hasta llenarse', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'Solo una, esa era la idea.\nPero llegaron también los otros pájaros y las migas desaparecieron todas.'
    : 'Llegaron también los otros pájaros y en un momento no quedó ni una miga.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'Esa noche, el pájaro los vio:\ndos niños que buscaban algo, perdidos por el bosque.\n"Eso que buscan... son las migas que nos comimos."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'Es culpa mía'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'El pájaro se puso a pensar.\n¿Qué podía hacer él ahora mismo?', choices:[
    {t:'Buscar el camino a casa desde el cielo y guiarlos', go:'hbp1'},
    {t:'Avisar de la casa de dulces con una canción', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'El pájaro voló muy alto.\nDesde arriba, la casa del leñador estaba ahí mismo.\nEl pájaro voló bajito delante de los dos y les mostró el camino.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"Ese pájaro parece que nos dice: vengan conmigo."\nLos dos caminaron detrás del pájaro.\nAl salir del bosque, vieron el humo de su casa de siempre.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'El pájaro que se comió las migas de pan\nles devolvió a cambio el camino a casa.\nReparar empieza por lo que uno puede hacer.\nY vivieron felices para siempre.'},

  hbu1:{art:'hg_tori', text:'El pájaro lo sabía.\nLa casa de dulces del fondo del bosque, y también quién vivía en ella.\nEl pájaro se posó en una rama y cantó:\n"Muerdan la pared, pero no entren dentro."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'¡No entren dentro!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'Los dos entendieron lo que decía la canción.\nMordieron un poco de la pared hasta quedar satisfechos\ny, aunque la puerta se abrió, no entraron: volvieron al camino del bosque.\nEl pájaro blanco voló delante, hacia la casa.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'El pájaro que sabía lo de la casa de dulces\nsiguió cantando desde su rama.\nUna canción de aviso para cualquier niño perdido en el bosque.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_ES);

  T.ZK_EN.push(
    {section:'Hansel y Gretel'},
    {id:'hg_seishi',  n:'El camino del pato blanco', h:'La historia original, la de tu primera partida'},
    {id:'hg_koishi',  n:'Otra vez las piedrecitas',  h:'La segunda noche, salir por la ventana...'},
    {id:'hg_kawa',    n:'A la otra orilla',          h:'Ante el horno, elegir huir...'},
    {id:'hg_mura',    n:'El invierno del pueblo',    h:'Llevarse la comida en vez de las piedras preciosas...'},
    {id:'hw_okyaku',  n:'Las primeras visitas',      h:'En la historia de la bruja, prepararles un banquete...'},
    {id:'hw_megane',  n:'Ojos rojos y unas gafas',   h:'En la historia de la bruja, querer engordarlos...'},
    {id:'hb_pankuzu', n:'Quién se comió las migas',  h:'En la historia del pájaro blanco, guiarlos desde el cielo...'},
    {id:'hb_uta',     n:'Un aviso cantado',          h:'En la historia del pájaro blanco, avisar con una canción...'}
  );

})();
