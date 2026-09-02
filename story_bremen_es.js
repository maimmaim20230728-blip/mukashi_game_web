"use strict";
/* Los músicos de Bremen - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_bremen_en.js
   Fórmulas fijas (músico de la ciudad / cualquier cosa es mejor que la muerte / el canto del gallo /
   la boca aún caliente del último que contó la historia) traducidas de nuevo, sin copiar
   ninguna versión ajena. Los animales no llevan nombre propio. */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var BREMEN_ES = {

  /* ================= Los músicos de Bremen ================= */

  br1:{art:'br_koya', text:'Esta es la historia de un burro que trabajó muchos años para un mismo amo.\nEn el molino, el burro llevaba y llevaba sacos de harina.\nPero se hizo viejo, y sus fuerzas se fueron acabando.', next:'br2'},

  br2:{art:'br_koya', text:'Un día, el burro se dio cuenta de algo.\n(Mi amo está pensando en dejar de darme de comer.)\nAsí que el burro se fue del molino.', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'¡¡A Bremen!!'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '"Iré a Bremen y allí seré músico de la ciudad."\nAsí lo decidió el burro, y se puso en camino.';
    if(f.first) return t;
    return t + '\n¿Qué camino toma?';
  }, choices:[
    {t:'El camino junto al río', go:'br3r', set:{brmichi:'kawa'}},
    {t:'El camino entre los campos', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? 'Por el camino entre los trigales corría bien el viento.\nPor primera vez en mucho tiempo, el burro caminó sin llevar nada.'
    : 'Por el camino junto al río sonaba muy agradable el agua.\nPor primera vez en mucho tiempo, el burro caminó sin llevar nada.', next:'br4'},

  br4:{art:'br_inu', text:'Al borde del camino estaba tumbado un perro de caza.\nJadeaba y jadeaba, como si le costara respirar.\n"¿Qué te pasa, que estás tan sin aliento?"', next:'br5'},

  br5:{art:'br_inu', text:'"Me hice viejo y ya no puedo ir de caza.\nEntonces mi amo quiso matarme.\nMe escapé, pero ¿de qué voy a vivir ahora?"\n"Yo voy a Bremen a ser músico de la ciudad. Vente conmigo.\nYo tocaré el laúd, y tú puedes llevar el ritmo con el tambor."', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'¡¡El perro se une a la banda!!'}, then:'br6'},

  br6:{art:'br_neko', text:'Un poco más allá, sobre una tapia, estaba sentada una gata.\nTenía la cara apagada, como tres días seguidos de lluvia.', next:'br7'},

  br7:{art:'br_neko', text:'"Me hice vieja, se me gastaron los dientes,\ny prefiero estar junto a la chimenea antes que perseguir ratones.\nEntonces mi ama quiso ahogarme en el río."\n"Pues vente con nosotros a Bremen.\nEn música de noche seguro que nadie te gana."', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'En música de noche...'}, then:'br8'},

  br8:{art:'br_ondori', text:'Sobre el portón de una granja, un gallo cantaba con todas sus fuerzas.\n"Vaya voz más fuerte."\n"Mañana es domingo y vienen invitados.\nA mí me van a convertir en sopa.\nPor eso canto mientras todavía me queda voz."', next:'br9'},

  br9:{art:'br_ondori', text:'"Cualquier cosa es mejor que la muerte. Tú tienes buena voz.\nHaz música con nosotros. Seguro que sale algo de ello."\nEl gallo saltó del portón.', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'¡¡Quiquiriquí!!'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = 'A Bremen no se podía llegar en un solo día.\nAl caer la noche, los 4 decidieron descansar en el bosque.';
    if(f.first) return t + '\nEl burro y el perro bajo un árbol. La gata en una rama. El gallo en lo más alto.';
    return t + '\n¿Dónde descansan?';
  }, choices:[
    {t:'Bajo el árbol, todos juntos', go:'br10r', set:{brmori:'shita'}},
    {t:'En una rama alta, haciendo guardia', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? 'La gata y el gallo subieron a una rama alta.\nAbajo, el burro y el perro durmieron espalda contra espalda.'
    : 'Los 4 se acurrucaron bajo un árbol grande y se durmieron.\nSolo el gallo subió a lo más alto antes de dormir.', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = 'Desde lo más alto, el gallo vio una luz a lo lejos.\n"Allí hay una casa. Hay una luz encendida."';
    if(f.first) return t + '\n"Vamos. Esta posada no es muy buena", dijo el burro.';
    return t + '\n¿Qué hacen?';
  }, choices:[
    {t:'Ir hacia la casa de la luz', go:'br12'},
    {t:'No acercarse y pasar la noche en el bosque', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'Al llegar a la casa de la luz, el burro se asomó por la ventana.\n"¿Qué ves?", preguntó el gallo.\n"Una mesa llena de cosas ricas,\ny unos ladrones sentados alrededor, comiendo."', next:'br13'},

  br13:{art:'br_ie_soto', text:'"Eso también nos hace falta a nosotros", dijo el gallo.\nLos 4 juntaron las cabezas y se pusieron de acuerdo.', next:'br14'},

  br14:{art:'br_mado', text:'El burro apoyó las patas delanteras en la ventana.\nEl perro saltó sobre su lomo,\nla gata trepó encima del perro,\ny en lo más alto se posó el gallo.', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'¡¡Todos a coro!!'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'Y entonces saltaron todos a la vez por la ventana.\n¡Los cristales se hicieron pedazos!\nLos ladrones gritaron "¡Un monstruo!" y huyeron al bosque.', next:'br16'},

  br16:{art:'br_gochisou', text:'Los 4 se sentaron a la mesa.\nComieron como si fuera para cuarenta días, apagaron la luz\ny cada uno se durmió en el sitio que más le gustaba.\nEl burro en el patio, el perro junto a la puerta, la gata junto a la chimenea, el gallo en la viga del tejado.', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'Medianoche.'}, then:'br17'},

  br17:{art:'br_yoru', text:'Uno de los ladrones volvió para ver qué pasaba.\nLa casa estaba en silencio. Al entrar en la cocina, algo brillaba en el fondo de la chimenea.\n(Son brasas que aún quedan encendidas.)\nEso pensó, y acercó un fósforo. Justo en ese momento.', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'¡¡Zarpazo!!'}, then:'br18'},

  br18:{art:'br_yoru', text:'La gata le saltó a la cara y lo arañó.\nEl ladrón huyó hacia la puerta trasera. Allí estaba el perro.', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'¡¡Mordisco!!'}, then:'br19'},

  br19:{art:'br_niwa', text:'Cuando salió corriendo al patio, el burro le dio una coz con las patas traseras.', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'¡¡Coz!!'}, then:'br20'},

  br20:{art:'br_niwa', text:'Arriba, en el tejado, el gallo se despertó y cantó muy fuerte.\n"¡Quiquiriquí!"\nAl ladrón le sonó así:\n"¡Que me lo traigan aquí!"', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'¡Una bruja! ¡Un juez!'}, then:'br21'},

  br21:{art:'br_houkoku', text:'El ladrón huyó de vuelta al bosque y les dijo a sus compañeros:\n"En esa casa hay una bruja terrible.\nMe escupió y me arañó la cara con sus uñas largas.\nJunto a la puerta había un hombre con un cuchillo y me pinchó en la pierna.\nEn el patio había un monstruo negro que me golpeó con un garrote.\nY en el tejado había un juez que gritaba: ¡Que me lo traigan aquí!"', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = 'Desde entonces, los ladrones no volvieron nunca más.';
    if(f.first) return t;
    return t + '\nPor la mañana, los 4 lo hablaron. ¿Qué hacen?';
  }, choices:[
    {t:'Vivir en esta casa', go:'e_br_seishi'},
    {t:'Ir a Bremen después de todo', go:'brb1'},
    {t:'Decidir en esta casa qué hacer por la mañana', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'A los 4 músicos les gustó tanto aquella casa\nque ya no quisieron marcharse.\nY el último que contó esta historia todavía tiene la boca caliente.\nY vivieron felices para siempre.'},

  /* ---- En la ciudad de Bremen ---- */
  brb1:{art:'br_roba', text:'"Esta es una buena casa. Pero nosotros somos músicos."\nLos 4 cerraron la casa con llave y volvieron al camino.', next:'brb2'},
  brb2:{art:'br_bremen', text:'La ciudad de Bremen era grande y estaba llena de gente.\nY en la plaza ya había músicos de la ciudad.\nSus trompetas y sus tambores brillaban.', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'... Pues entonces aquí.'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'En una esquina de la plaza, los 4 juntaron sus voces.\nIaaa, guau, miau, quiquiriquí.\nLos niños fueron llegando, primero uno, luego otro.', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'Instrumentos brillantes no tenían.\nPero cada día venían niños a aquella esquina de la plaza.\nEn una esquina de la ciudad, los 4 se hicieron músicos.\nY vivieron felices para siempre.'},

  /* ---- La mañana en el bosque ---- */
  brm1:{art:'br_mori', text:'"Es mejor no acercarse de noche a una casa", dijo el burro.\nLos 4 pasaron la noche en el bosque.', next:'brm2'},
  brm2:{art:'br_mori', text:'Por la mañana cantó el gallo, y todos se despertaron.\n"Ya que estamos, probemos una vez todos juntos."\nIaaa, guau, miau, quiquiriquí.', next:'brm3'},
  brm3:{art:'br_roba', text:'Justo entonces pasó por allí un carro cargado de sacos de harina.\nEl molinero oyó la voz del burro y dijo:\n"Qué buena voz. ¿No quieres trabajar en mi molino? Comida te daré de sobra."', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'Yo soy músico.'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'El burro dijo que no con buenos modos y siguió caminando con sus compañeros.\nAdónde llegarían, todavía no se sabía.\nLa canción de los 4 sonó muy bien en la mañana del bosque.\nY vivieron felices para siempre.'},

  /* ---- La mañana de cada uno ---- */
  bra1:{art:'br_ie_asa', text:'Por la mañana, ¿qué hacen en esta casa?', choices:[
    {t:'El gallo canta la hora desde el tejado', go:'bra1r', set:{brasa:'ondori'}},
    {t:'El perro duerme la siesta junto a la puerta', go:'bra1r', set:{brasa:'inu'}},
    {t:'La gata se acurruca junto a la chimenea', go:'bra1r', set:{brasa:'neko'}},
    {t:'El burro mueve las orejas al sol', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return 'El perro se tumbó junto a la puerta.\nYa no tenía que perseguir a nadie.';
    if(f.brasa==='neko') return 'La gata se acurrucó junto a la chimenea.\nLos días de perseguir ratones ya se habían acabado.';
    if(f.brasa==='roba') return 'El burro se puso al sol y movió sus largas orejas.\nYa no llevaba sacos de harina en el lomo.';
    return 'El gallo subió al tejado y cantó hacia el cielo del este.\nNadie se lo había pedido.';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'Nadie se lo dijo.\nCada uno lo decidió por sí mismo.\nTambién hoy el gallo canta la hora, el perro duerme junto a la puerta,\nla gata se acurruca junto a la chimenea y el burro mueve sus largas orejas al sol.\nY vivieron felices para siempre.'},

  /* ================= La historia de los ladrones ================= */

  bd1:{art:'dorobou_mori', text:'Esta es la historia de 3 ladrones que vivían en una casa del bosque.\nAquella noche, como siempre, la mesa estaba llena de cosas ricas.', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'¿Qué hay hoy de comer?', choices:[
    {t:'Salchichas y vino', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'Pan, queso y manzanas', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? 'Llenaron toda la mesa de pan, queso y manzanas.\nLos 3 empezaron a comer de muy buen humor.'
    : 'Asaron las salchichas y sirvieron el vino.\nLos 3 empezaron a comer de muy buen humor.', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'De pronto, fuera de la ventana, se oyó una voz como nunca habían oído.\nIaaa, guau, miau, quiquiriquí. Todo a la vez.\nY entonces, ¡los cristales se hicieron pedazos!\n"¡Un monstruo!"\nLos 3 salieron huyendo al bosque.', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'En lo hondo del bosque, los 3 recobraron el aliento.\n"¿Qué hacemos con esa casa?"', choices:[
    {t:'Volver a ver qué pasa', go:'bdg1'},
    {t:'Renunciar a esa casa', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'La cocina estaba a oscuras.\nEn el fondo de la chimenea brillaban dos lucecitas.\n(Son brasas que aún quedan encendidas.)\nAcercó un fósforo, y...', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'¡¡Una bruja!!'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'Le arañaron la cara, le pincharon la pierna, lo golpearon con un garrote,\ny desde el tejado: "¡Que me lo traigan aquí!"\nEl ladrón huyó de vuelta al bosque.', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'"Hay una bruja, un hombre con un cuchillo, un monstruo negro y un juez."\nNinguno de sus compañeros quiso acercarse a aquella casa.\nLo que había de verdad allí, nadie llegó a saberlo.\nY vivieron felices para siempre.'},

  bdm1:{art:'dorobou_mori', text:'"Esa casa ya es de ellos."\nLos 3 caminaron hacia la salida del bosque.', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'En la ciudad había mercado por la mañana.\nUn cartel decía: "Se buscan cargadores".\nLos 3 se miraron a la cara.', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'De qué vivieron los 3 a partir de aquel día,\nesta historia no lo cuenta.\nEn la casa del bosque suena la canción de los 4.\nFin.'},

  /* ================= La historia del gallo ================= */

  bo1:{art:'ondori_yane', text:'Esta es la historia de un gallo que cantaba sobre el portón de una granja.\nMañana es domingo. Vienen invitados, y a mí me van a convertir en sopa.', next:'bo2'},
  bo2:{art:'ondori_yane', text:'¿Qué hace en su último día?', choices:[
    {t:'Cantar con todas sus fuerzas', go:'bo2r', set:{bolife:'naku'}},
    {t:'Pasear despacio por el patio', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? 'Recorrió despacio el patio, de un extremo al otro.\nPensaba que era la última vez que lo veía.'
    : 'Sobre el portón cantó hasta quedarse ronco.\nAlgunos se taparon los oídos, pero a él no le importó.', next:'bo3'},
  bo3:{art:'br_ondori', text:'Justo entonces pasaron por allí un burro, un perro y una gata.\n"Cualquier cosa es mejor que la muerte. Tú tienes buena voz."\nEl gallo saltó del portón.', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'¿Basta con mi voz?'}, then:'bo4'},
  bo4:{art:'br_mado', text:'En la casa del bosque, el gallo se posó en lo más alto.\nLo que viniera después, lo decidiría el gallo.', choices:[
    {t:'Cantar a medianoche desde el tejado', go:'bok1'},
    {t:'Vivir en esta casa y anunciar la mañana', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'A medianoche se despertó en la viga del tejado.\nAbajo, un ladrón armaba alboroto.\nEl gallo cantó con todas sus fuerzas.', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'¡¡Quiquiriquí!!'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'Al ladrón le sonó como "Que me lo traigan aquí".\nLa voz que iba a acabar en la sopa protegió la casa.', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'Para qué usar su voz, lo decide él mismo.\nDesde entonces el gallo cantó cuando quiso y como quiso.\nY vivieron felices para siempre.'},

  boa1:{art:'br_ie_asa', text:'Cuando empezaron a vivir en la casa, el gallo subió al tejado.\nNadie se lo había pedido.\nPor la mañana, cuando el cielo del este clareaba, el gallo cantaba.', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'El perro se despertaba, la gata se estiraba y el burro sacudía las orejas.\n"Ya no voy a acabar en la sopa. Cada mañana canto aquí."', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'Con la voz del gallo, alguien se despierta.\nSolo eso ya alegraba al gallo.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, BREMEN_ES);

  T.ZK_EN.push(
    {section:'Los músicos de Bremen'},
    {id:'br_seishi', n:'La casa que les gustó',      h:'La historia original, la del primer recorrido'},
    {id:'br_bremen', n:'En la ciudad de Bremen',     h:'Si por la mañana vas a Bremen después de todo...'},
    {id:'br_mori',   n:'La mañana en el bosque',     h:'Si no te acercas a la casa de la luz...'},
    {id:'br_asa',    n:'La mañana de cada uno',      h:'Si decides en la casa qué hacer por la mañana...'},
    {id:'bd_gokai',  n:'La bruja y el juez',         h:'En la historia de los ladrones, si vuelves a ver qué pasa...'},
    {id:'bd_machi',  n:'Salir del bosque',           h:'En la historia de los ladrones, si renuncias a la casa...'},
    {id:'bo_koe',    n:'Una voz que llegó',          h:'En la historia del gallo, si cantas a medianoche...'},
    {id:'bo_asa',    n:'Anunciar la mañana',         h:'En la historia del gallo, si anuncias la mañana...'}
  );

})();
