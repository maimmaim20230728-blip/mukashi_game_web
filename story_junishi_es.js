"use strict";
/* Como se eligieron los 12 animales - Spanish (neutral, understood in both Spain and Latin America)
   scenario, translated from the Japanese master; structure mirrors story_junishi_en.js.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var N12 = ['Rata','Buey','Tigre','Conejo','Dragón','Serpiente','Caballo','Oveja','Mono','Gallo','Perro','Jabalí'];

  var JUNISHI_ES = {

  /* ================= Cómo se eligieron los 12 animales ================= */

  ju1:{art:'ju_ofure', text:'Esta es la historia de los 12 animales que llegaron a ser los nombres de los años.\nAl final de cierto año, el dios hizo un anuncio.\n"La mañana de Año Nuevo, según el orden en que lleguen al palacio, los 12 primeros serán el nombre de un año."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'Cada animal empezó a prepararse a su manera.';
    if(f.first) return t;
    return t + '\n¿Qué preparan?';
  }, choices:[
    {t:'Practicar la carrera', go:'ju2r', set:{julife:'hashiru'}},
    {t:'Preparar un banquete y esperar', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'La oveja machacó pasteles de arroz y el mono recogió castañas.\nLa mañana de Año Nuevo iban a comerlos todos juntos.'
    : 'El tigre y el caballo cruzaron el campo corriendo una y otra vez.\nEl conejo practicaba dar saltos, brinco tras brinco.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'El gato no había oído bien el día del anuncio.\n"Oye, rata, ¿cuándo era que vamos al palacio?"';
    if(f.first) return t + '\n"La mañana del 2 de enero."\nEso fue lo que respondió la rata.';
    return t + '\n¿Qué responde la rata?';
  }, choices:[
    {t:'"La mañana del 2 de enero"', go:'ju4'},
    {t:'"La mañana del 1 de enero"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'La noche de fin de año.\n"Yo soy lento de patas; será mejor salir ya."\nY el buey echó a andar por el camino nevado, cuando aún estaba oscuro.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'Vamos despacio'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'¡¡En marcha al anochecer!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'A su lomo saltó la rata con toda ligereza.\nEl buey no se dio cuenta.\nPor el camino nevado, despacio, despacio.';
    if(f.first) return t;
    return t + '\n¿Qué hizo la rata durante el camino de noche?';
  }, choices:[
    {t:'Durmió sobre el lomo', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'Contó las estrellas', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'Sobre la nieve, el cielo de la noche estaba lleno de estrellas.\nLa rata las contó, una, dos, y así esperó la mañana.'
    : 'El lomo del buey estaba tibio y, sin darse cuenta, la rata se quedó dormida.\nSolo los pasos del buey seguían por el camino nevado.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'Llegó la mañana.\nLa puerta del palacio estaba ahí delante.\nEl buey pensó que había llegado el primero.';
    if(f.first) return t;
    return t + '\n¿Qué hace la rata?';
  }, choices:[
    {t:'Bajar de un salto y entrar primero', go:'juc_tobiori'},
    {t:'No bajar y entrar junto con el buey', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'¡¡Bajó de un salto!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'En ese momento la rata saltó del lomo del buey\ny entró por la puerta antes que él.\nSe oyó la voz del dios: "El primer año será la Rata."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'Rata'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'Después pasó el buey por la puerta.\n"El año siguiente será el Buey."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'Rata, Buey'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'El tigre llegó corriendo.\nDespués el conejo pasó la puerta de un salto.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'El dragón y la serpiente llegaron a la puerta en el mismo momento.\n"Pasa tú primero", dijo la serpiente.\nEntró primero el dragón y después la serpiente.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'Tigre, Conejo, Dragón, Serpiente'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'Llegó el caballo al galope, y detrás de él la oveja.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'El mono y el perro se pusieron a discutir en el camino y casi no avanzaban.\nEl gallo se metió entre los dos.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'¡Primero al palacio!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'Animados por el gallo, el mono y el perro dejaron la discusión.\nPasaron la puerta en este orden: el mono, el gallo y el perro.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'Caballo, Oveja, Mono, Gallo, Perro'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'El último fue el jabalí.\nComo solo sabía correr en línea recta,\npasó de largo delante de la puerta y tuvo que volver.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'¡¡Todo recto, Jabalí!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'El número 12 fue el Jabalí.\nAsí quedaron completos los 12 nombres de los años.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'¡¡Los 12 nombres!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'El dios les dijo a los 12 animales:\n"De ahora en adelante, cada año y por turno, serán el nombre de ese año."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'A la mañana siguiente.\nEl gato llegó a la puerta del palacio.\nLa puerta estaba cerrada.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'... ¿Eh?'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'Se oyó la voz del dios.\n"El día de venir al palacio era ayer. Lávate la cara y vuelve otro día."';
    if(f.first) return t;
    return t + '\n¿Qué hace el gato?';
  }, choices:[
    {t:'Lavarse la cara y volver a casa', go:'ju18'},
    {t:'Lavarse la cara e ir otra vez a la puerta', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'El gato se lavó la cara.\nY desde entonces, cada vez que veía una rata, la perseguía.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Oveja, Mono, Gallo, Perro, Jabalí.\nCada año y por turno, los 12 animales fueron el nombre de ese año.\nY vivieron felices para siempre.'},

  /* ---- Sobre el lomo del buey ---- */
  jua1:{art:'ju_mon', text:'La rata no bajó de un salto.\nSubida al lomo del buey, pasaron juntos por la puerta.\n"Conque los dos a la vez", dijo la voz del dios.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"Que vaya primero el buey", dijo la rata.\n"Que vaya primera la rata", dijo el buey.\nEl dios se rio.\n"Entonces, el primer año será la Rata y el siguiente el Buey.\nA cambio, ayúdense el uno al otro en el año del otro."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'Desde entonces, en el año de la Rata ayuda el buey, y en el año del Buey ayuda la rata,\ncada uno en el trabajo del otro.\nEl orden no cambió. Pero fue una mañana para dos.\nY vivieron felices para siempre.'},

  /* ---- El saludo de cada año ---- */
  jub1:{art:'ju_neko_kao', text:'El gato se lavó la cara y fue otra vez a la puerta.\n"Ya me lavé la cara."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'Se oyó la voz del dios.\n"Solo hay 12 nombres para los años.\nPero ven a saludar cada año, el día de Año Nuevo."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'Desde entonces el gato va cada año, la mañana de Año Nuevo, a saludar al palacio.\nNo es el nombre de ningún año.\nPero la puerta del palacio se abre para el gato.\nY vivieron felices para siempre.'},

  /* ---- Al otro lado del mar ---- */
  juu1:{art:'ju_nezuneko', text:'"La mañana del 1 de enero."\nEl gato dijo "gracias" y esa noche se acostó temprano.', next:'juu2'},
  juu2:{art:'ju_kake', text:'La mañana de Año Nuevo.\nLa rata sobre el lomo del buey, el buey despacio, el tigre a toda velocidad.\nY ante la puerta, el conejo y el gato llegaron en el mismo momento.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'¡¿En el mismo momento?!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'El dios pensó un rato y luego dijo:\n"Aquí, este año será para el conejo.\nEn los países del otro lado del mar, dejaré este año al gato."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'Por eso, todavía hoy, en los países del otro lado del mar\nhay lugares donde el gato es el nombre de un año.\nEs la misma historia, pero si cambia el país, cambian también los nombres.\nY vivieron felices para siempre.'},

  /* ================= La historia del gato ================= */

  jn1:{art:'jneko_hinata', text:'Esta es la historia de un gato.\nOyó que el dios había hecho un anuncio, pero no alcanzó a oír la fecha.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'¿A quién le pregunta?', choices:[
    {t:'Preguntarle a la rata', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'Preguntarle al perro', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"Enero... el día 1, ¿no era? La rata lo sabe mejor", dijo el perro.\nEl gato le preguntó a la rata.\n"La mañana del 2 de enero", respondió la rata.'
    : '"La mañana del 2 de enero", respondió la rata.\n"Gracias", dijo el gato.', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'La mañana del 2 de enero.\nEl gato fue a la puerta del palacio.\nLa puerta estaba cerrada.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'... ¿Ayer?'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"El día de venir al palacio era ayer. Lávate la cara y vuelve otro día."\nAsí habló la voz del dios.\n¿Qué hace el gato?', choices:[
    {t:'Lavarse la cara y volver a casa', go:'jna1'},
    {t:'Hacerse un ovillo al sol', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'El gato se lavó la cara.\nEl agua estaba fría.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'Lo que pensó el gato después de lavarse la cara\nno está escrito en esta historia.\nEl gato se lavó la cara. Nada más.\nFin.'},
  jnh1:{art:'jneko_hinata', text:'El gato fue a un lugar soleado.\nSe hizo un ovillo y cerró los ojos.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'Hay gatos que persiguen ratas y hay gatos que duermen al sol.\nLo que este gato piensa ahora, solo el gato lo sabe.\nFin.'},

  /* ================= La historia de la rata ================= */

  jz1:{art:'jnezumi_ana', text:'Esta es la historia de una rata.\nAl oír el anuncio del dios, la rata se puso a pensar.\n(Con mis patas, por mucho que corra, no voy a llegar a tiempo.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'De noche, dentro de su madriguera, ¿qué hace?', choices:[
    {t:'Pensar en el camino hasta el palacio', go:'jz2r', set:{jzlife:'michi'}},
    {t:'Dormirse temprano y prepararse para la mañana', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'La rata se metió dentro de la paja y se durmió temprano.\nHasta en sueños veía la puerta del palacio.'
    : 'La rata repasó en su cabeza, una y otra vez, el camino hasta el palacio.\nEs un camino largo. Hace falta el lomo de alguien, pensó.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"¿Cuándo era que vamos al palacio?", preguntó el gato.\nLa rata respondió: "La mañana del 2 de enero."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'La noche de fin de año, la rata saltó al lomo del buey.\nEl buey no se dio cuenta.\n¿Qué hace la rata?', choices:[
    {t:'Ir montada en silencio', go:'jzu1'},
    {t:'Hablarle al buey', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'Por la mañana, ante la puerta, la rata bajó de un salto.\nEl primer año fue la Rata.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'La rata no le dijo al gato el día verdadero.\nPor qué, solo la rata lo sabe.\nY la rata fue el nombre del primer año.\nFin.'},
  jzs1:{art:'ju_senaka', text:'"Buey, gracias por llevarme."\nEl buey se dio vuelta, sorprendido.\n"Ah, eres tú, rata. No pesas nada; quédate ahí montada."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'Ante la puerta, el buey dijo:\n"Ve rápido y consigue tu nombre."\nLa rata bajó de un salto y pasó por la puerta.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'El primer año fue la Rata. El siguiente, el Buey.\nLa rata nunca olvidó al buey que le prestó su lomo.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_ES);

  T.ZK_EN.push(
    {section:'Cómo se eligieron los 12 animales', note:'En algunos países del otro lado del mar, el gato sí está entre los 12 animales. En Japón también se cuentan juegos de palabras sobre un animal número 13, como la comadreja o la rana.'},
    {id:'ju_seishi',  n:'Los 12 nombres',              h:'La historia tal como se cuenta, ya en el primer recorrido'},
    {id:'ju_ushi',    n:'Sobre el lomo del buey',      h:'Si ante la puerta te quedas sin bajar de un salto...'},
    {id:'ju_kao',     n:'El saludo de cada año',       h:'Si te lavas la cara y vas otra vez a la puerta...'},
    {id:'ju_umi',     n:'Al otro lado del mar',        h:'Si la rata responde el día verdadero...'},
    {id:'jn_asa',     n:'La mañana siguiente',         h:'En la historia del gato, si te lavas la cara y vuelves a casa...'},
    {id:'jn_hinata',  n:'El gato al sol',              h:'En la historia del gato, si te haces un ovillo al sol...'},
    {id:'jz_uso',     n:'El día de la mentira',        h:'En la historia de la rata, si vas montada en silencio...'},
    {id:'jz_senaka',  n:'El día del lomo prestado',    h:'En la historia de la rata, si le hablas al buey...'}
  );

})();
