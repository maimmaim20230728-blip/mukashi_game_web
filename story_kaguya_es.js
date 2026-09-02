"use strict";
/* La princesa Kaguya - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_kaguya_en.js
   Fuente: Taketori Monogatari (siglo X, PD). Sin elementos propios de la pelicula de 2013. */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var KAGUYA_ES = {

  /* ================= La princesa Kaguya ================= */

  kg1:{art:'kg_takebayashi', text:'Esta es la historia de hace mucho, mucho tiempo.\nHabía un anciano que vivía de cortar bambú.\nLa gente lo llamaba el Cortador de Bambú.\nUn día, en lo hondo del bosque de bambú, encontró un bambú cuya raíz brillaba dorada.', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'¡¡El bambú brilla!!'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'Al cortar el bambú, dentro estaba sentada una niña diminuta, de apenas un palmo.\nEl anciano la llevó a casa en la palma de la mano.\nCon su esposa, la anciana, decidió criarla dentro de una cesta.', next:'kg3'},

  kg3:{art:'kg_akachan', text:'¿Qué hacer cada día por la pequeña princesa?', choices:[
    {t:'Cantarle una canción de cuna', go:'kg3r', set:{takeko:'uta'}},
    {t:'Hacerle juguetes de bambú', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? 'El anciano hacía flautitas y carritos de bambú.\nCuando la princesa reía, la anciana reía también.'
    : 'Cuando la anciana cantaba una canción de cuna, la princesa se dormía plácidamente.\nJunto a la cesta, los dos se quedaban mirándola.', next:'kg4'},

  kg4:{art:'kg_seichou', text:'Desde entonces, cada vez que cortaba un bambú, dentro aparecía oro.\nLa niña creció a ojos vistas y, en unos 3 meses, era una joven hermosa.\nLe pusieron el nombre de "Kaguya, princesa del bambú esbelto".', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'De la hermosura de la princesa Kaguya se hablaba en todo el país.\nAlrededor de la casa se juntaba la gente para verla aunque fuera un momento.', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'Entre ellos vinieron 5 jóvenes nobles que querían casarse con ella a toda costa.\nEl príncipe Ishitsukuri, el príncipe Kuramochi, el ministro Abe,\nel gran consejero Otomo y el consejero medio Isonokami.', next:'kg7'},

  kg7:{art:'kg_takara', text:'La princesa Kaguya dijo:\n"Iré con quien me traiga el tesoro que deseo ver."', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'¡¡El cuenco de piedra de Buda!!'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'¡¡La rama enjoyada de Horai!!'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'¡¡El manto de piel de la rata de fuego!!'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'¡¡La joya del cuello del dragón!!'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'¡¡La concha cauri de la golondrina!!'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = 'Ninguno de esos tesoros parecía existir en este mundo.\nLos 5 partieron de viaje, cada uno por su lado.';
    if(f.first) return t;
    return t + '\n¿De quién escuchamos la historia?';
  }, choices:[
    {t:'El príncipe Ishitsukuri', go:'kgk1'},
    {t:'El príncipe Kuramochi', go:'kgk2'},
    {t:'El ministro Abe', go:'kgk3'},
    {t:'El gran consejero Otomo', go:'kgk4'},
    {t:'El consejero medio Isonokami', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'El príncipe Ishitsukuri pensó que llegar hasta la lejana India era demasiado trabajo\ny llevó un cuenco viejo de un templo cercano.\nPero el cuenco de Buda tendría que brillar.\nUn cuenco sin luz quedó descubierto enseguida.', next:'kg9'},
  kgk2:{art:'kg_takara', text:'El príncipe Kuramochi mandó a unos artesanos hacer la rama enjoyada.\nLa princesa y el anciano se quedaron admirados ante la rama espléndida.\nPero entonces llegaron los artesanos diciendo:\n"Todavía no nos han pagado el trabajo."', next:'kg9'},
  kgk3:{art:'kg_takara', text:'El ministro Abe mandó traer un manto de piel de un país lejano.\nLa princesa dijo: "El manto de la rata de fuego no debe arder ni en el fuego."\nAl echarlo al fuego, el manto ardió con grandes llamas.', next:'kg9'},
  kgk4:{art:'kg_takara', text:'El gran consejero Otomo salió en barco a buscar un dragón.\nLo alcanzó una gran tormenta y el barco daba vueltas y vueltas.\nCuando por fin volvió a la orilla, regresó a casa con los ojos hinchados.', next:'kg9'},
  kgk5:{art:'kg_takara', text:'El consejero medio Isonokami metió la mano en un nido de golondrinas\ny, justo al agarrar algo, se cayó del tejado.\nLo que tenía agarrado era un excremento viejo de golondrina.\nEl consejero se hizo daño y tuvo que guardar cama.', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = 'Al final, ni una sola persona pudo traer un tesoro verdadero.';
    if(f.first) return t;
    return t + '\nY ahora, ¿qué hacer?';
  }, choices:[
    {t:'Dejar los rumores y vivir en calma', go:'kg10'},
    {t:'Contarles la verdad al anciano y a la anciana', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'Aquellos rumores llegaron también a oídos del Emperador.\nEl Emperador fingió salir de caza y visitó la casa del Cortador de Bambú.', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'¡¡El palanquín del Emperador!!'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'Cuando el Emperador quiso subirla al palanquín,\nla figura de la princesa Kaguya se volvió luz y desapareció.\n"No me la llevaré."\nEso dijo el Emperador, y volvió a la capital.', next:'kg12'},

  kg12:{art:'kg_mikado', text:'Desde entonces, el Emperador y la princesa Kaguya se enviaron cartas y poemas.', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'Y así pasaron 3 años.'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'Al llegar la primavera, la princesa Kaguya miraba la luna y se le caían las lágrimas.\nCuando el anciano le preguntaba el motivo, no respondía.', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'Al final del verano, la princesa Kaguya por fin se lo contó.\n"Yo soy de la Capital de la Luna.\nLa noche de luna llena del octavo mes vendrán a buscarme. Tengo que volver."', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'¡No pienso entregarla!'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'El anciano pidió ayuda al Emperador y vinieron muchos soldados.\nEn el tejado y en el jardín se alinearon hombres con arcos.\nLa anciana escondió a la princesa en el cuarto del fondo y cerró bien la puerta.', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'La noche de luna llena. Pasada la medianoche,\nalrededor de la casa se hizo más claro que de día.', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'¡¡La luz de la Luna baja!!'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'Del cielo bajaron unas personas montadas en nubes.\nA los soldados se les fue la fuerza y no podían ni tensar el arco.\nLa puerta se abrió sola y, de los brazos de la anciana, la princesa salió al frente.', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'El enviado de la Luna dijo:\n"Anciano. La princesa cometió una falta en la Luna y, para repararla, bajó a quedarse aquí un tiempo.\nEl tiempo de la reparación ha terminado.\nTambién fue el agradecimiento por una pequeña buena acción tuya."', next:'kg19'},

  kg19:{art:'kg_tegami', text:'La princesa Kaguya escribió una carta al anciano.\n"Piensen en el vestido que dejo aquí como si fuera yo.\nLas noches en que salga la luna, miren hacia arriba."', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = 'El enviado de la Luna le ofreció el frasco del elixir de la vida.';
    if(f.first) return t + '\nLa princesa probó un sorbo, puso el resto junto a su carta para el Emperador\ny se lo entregó al mensajero del Emperador.';
    return t + '\n¿A quién dar este elixir?';
  }, choices:[
    {t:'Ponerlo junto a la carta para el Emperador', go:'kg21'},
    {t:'Dejarlo para el anciano y la anciana', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = 'El enviado de la Luna le ofrece el manto de plumas.\n"Quien se lo pone, pierde todas las penas del corazón humano."';
    if(f.first) return t + '\nLa princesa se puso el manto de plumas.';
    return t + '\n¿Qué hacer?';
  }, choices:[
    {t:'Ponerse el manto de plumas', go:'kg22'},
    {t:'Antes de ponérselo, mirar atrás una vez más', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'Sin las penas del corazón, la princesa ya no sintió cariño ni añoranza por el anciano.\nMontada en una nube, subió hacia la Luna.', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'Hacia la Luna...'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'Al anciano y a la anciana no se les paraban las lágrimas.\nAbrazando el vestido que la princesa dejó, miraron el cielo largo, largo rato.', next:'kg24'},

  kg24:{art:'kg_fuji', text:'El Emperador mandó quemar la carta de la princesa y el elixir de la vida\nen la cima de la montaña de Suruga, la más cercana al cielo.\nComo a esa montaña subieron muchos guerreros,\npasó a llamarse "el monte Fuji", la montaña llena de guerreros.', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'Las noches en que salga la luna, miren hacia arriba.\nEl anciano y la anciana hicieron como decían las palabras de la princesa y, en las noches de luna, miraron al cielo.\nEl vestido que ella se quitó y dejó atrás quedó en manos de los dos.\nFin.'},

  /* ---- Los días que quedan ---- */
  kgn1:{art:'kg_uchiake', text:'Antes de que llegara el Emperador, la princesa Kaguya se lo contó a los dos.\n"Yo soy de la Capital de la Luna. Este otoño tengo que volver."\nEl anciano y la anciana callaron largo rato.', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'Desde ese día, los 3 vivieron cada jornada con cuidado.\nPasearon por el bosque de bambú y fueron hasta el bambú donde la encontró la primera vez.', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'En las noches de luna hermosa, los 3 se sentaban juntos en la veranda.\n"En las noches de luna, siéntense aquí. Yo también miraré este lugar desde la Luna."', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'La noche de luna llena vinieron a buscarla.\nEl anciano no luchó.\nLos 3 se tomaron de la mano y esperaron la luz.', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'La despedida llegó igual que antes.\nPero antes de eso, los 3 tuvieron un otoño entero juntos.\nEn la veranda siguen puestos 3 cojines.\nFin.'},

  /* ---- Antes del manto de plumas ---- */
  kgm1:{art:'kg_shouten', text:'Antes de ponerse el manto de plumas, la princesa miró atrás.\nEl anciano y la anciana la estaban mirando.', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'Gracias por criarme'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'La anciana, llorando, sonrió y agitó la mano.\nEl anciano también agitó la mano bien alto.\nLa princesa grabó esas caras en sus ojos y luego se puso el manto de plumas.', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'Aunque las penas del corazón desaparecieron, las dos caras que vio al final\nsiguieron con ella dentro de la luz, todo el tiempo.\nFin.'},

  /* ---- El elixir de la vida ---- */
  kgu1:{art:'kg_tegami', text:'La princesa entregó el elixir de la vida al anciano y a la anciana.\n"Si beben esto, podrán vivir para siempre."', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'Después de que la princesa volviera a la Luna, los dos miraron el frasco del elixir.\n"No hace falta vivir para siempre en un mundo sin la princesa."\nEl anciano lo dijo en voz baja.', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'La siguiente noche de luna, los dos pusieron el frasco del elixir en la veranda.\nComo si lo ofrecieran con suavidad hacia la Luna.', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'El elixir nunca se bebió y siguió bañado por la luz de la Luna.\nEl Emperador quemó el suyo en el monte Fuji; el anciano ofreció el suyo a la Luna desde la veranda.\nLas dos cosas eran maneras de no olvidar a la princesa, cada uno a su modo.\nFin.'},

  /* ================= La historia del Cortador de Bambú ================= */

  kj1:{art:'okina_take', text:'Esta es la historia del Cortador de Bambú y su esposa, y de lo que vino después.\nDesde que la princesa volvió a la Luna ha pasado un mes.', next:'kj2'},
  kj2:{art:'kg_ato', text:'¿Qué hacer hoy?', choices:[
    {t:'Doblar el vestido de la princesa', go:'kj2r', set:{takelife:'kimono'}},
    {t:'Caminar por el bosque de bambú', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? 'El bosque de bambú se mecía con el viento, igual que aquel día.\nEl anciano se quedó un rato escuchando el sonido del bambú.'
    : 'La anciana dobló con cuidado el vestido de la princesa.\nLo doblaba, lo extendía y lo volvía a doblar.', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'Una noche de luna. Los dos leyeron una vez más la carta de la princesa.\n"Las noches en que salga la luna, miren hacia arriba."', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'¿Miramos hacia arriba?'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'La anciana se lo dijo al anciano.\n¿Qué hacen los dos?', choices:[
    {t:'Mirar la luna desde la veranda', go:'kjt1'},
    {t:'Cuando amanezca, ir al bosque de bambú', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'Los dos se sentaron uno junto al otro en la veranda y miraron la luna.\nLa tristeza no se va.\nPero la luz de la luna llegaba hasta la veranda.', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'Desde entonces, en las noches de luna los dos se sientan en la veranda.\nHay noches en que lloran, noches en que hablan y noches en que callan.\nLa luz de la luna llegaba igual en todas esas noches.\nFin.'},
  kjk1:{art:'okina_take', text:'Una mañana de primavera, el anciano fue otra vez al bosque de bambú.\nYa no había bambú que brillara.\nEn cambio, por todas partes asomaban brotes de bambú.', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'... Voy a sacarlos.'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'El anciano fue sacando los brotes de bambú, uno a uno.\nSin prisa, sin que nadie se lo dijera, porque él lo decidió.\nCuando la cesta estaba casi llena, llegó la anciana con la comida.\nY vivieron felices para siempre.'},

  /* ================= La historia del enviado de la Luna ================= */

  ku1:{art:'tsuki_miyako', text:'Esta es la historia de un enviado que vive en la Capital de la Luna.\nEn la Capital de la Luna no hay lágrimas. Tampoco hay penas del corazón.', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'Hoy es el día de bajar a la tierra. ¿Qué llevar?', choices:[
    {t:'Solo el manto de plumas', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'También el elixir de la vida', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? 'En la caja puso el manto de plumas y el frasco del elixir de la vida.\nDicen que la gente de la tierra desea mucho esto.'
    : 'En la caja puso el manto de plumas.\nCon esto basta para que la princesa vuelva enseguida a ser una persona de la Luna.', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'Al bajar montado en una nube, alrededor de la casa había mucha gente.\nCon arcos en las manos, miraban fijamente hacia aquí.', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'El anciano está gritando algo.\nEl enviado no entendió el significado de esas palabras.\nEn la Luna no existe la palabra "no la entrego".', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'... ¿Lágrimas?'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'La princesa salió al frente.\n¿Qué hace el enviado?', choices:[
    {t:'Ponerle el manto de plumas, según la regla', go:'kun1'},
    {t:'Escuchar la petición de la princesa', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'El enviado, según la regla, le puso el manto de plumas a la princesa.\nPero no pudo hacer como que no veía la cara mojada del anciano.', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'Ya de vuelta en la Luna, el enviado sigue recordando aquella cara.\nEn un país sin lágrimas, supo por primera vez qué significan las lágrimas.', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'Desde entonces, el enviado de la Luna mira de vez en cuando hacia la tierra.\nEn el país que no conoce las lágrimas hay ahora alguien que las conoce.\nFin.'},
  kut1:{art:'kg_tegami', text:'"Por favor, entrega la carta y el vestido al anciano."\nAnte la petición de la princesa, el enviado asintió.\nEn las reglas de la Luna no hay nada así. Pero será la costumbre de la tierra.', next:'kut2'},
  kut2:{art:'kg_ato', text:'El enviado bajó ante el anciano y le entregó con cuidado la carta y el vestido.\nEl anciano los abrazó contra su pecho.', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'De vuelta en la Capital de la Luna, el enviado añadió una línea a las reglas.\n"Quien regrese de la tierra puede dejar atrás una sola cosa."\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_ES);

  T.ZK_EN.push(
    {section:'La princesa Kaguya'},
    {id:'kg_seishi',  n:'En las noches de luna, mirar arriba', h:'La historia original, la del primer recorrido'},
    {id:'kg_nokori',  n:'Los días que quedan',                h:'Si cuentas la verdad antes de que llegue el Emperador...'},
    {id:'kg_koromo',  n:'Antes del manto de plumas',          h:'Si miras atrás antes de ponerte el manto...'},
    {id:'kg_kusuri',  n:'El elixir de la vida',               h:'Si dejas el elixir al anciano y a la anciana...'},
    {id:'kj_tsukiyo', n:'Donde llega la luz de la luna',      h:'En la historia del anciano y la anciana, si miras arriba desde la veranda...'},
    {id:'kj_take',    n:'Otra vez a cortar bambú',            h:'En la historia del anciano y la anciana, si vas al bosque de bambú por la mañana...'},
    {id:'ku_namida',  n:'El país que no conoce las lágrimas', h:'En la historia del enviado de la Luna, si sigues la regla...'},
    {id:'ku_tegami',  n:'El recado',                          h:'En la historia del enviado de la Luna, si escuchas la petición de la princesa...'}
  );

})();
