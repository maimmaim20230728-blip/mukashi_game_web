"use strict";
/* La grulla que devolvió el favor - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var TSURU_ES = {

  /* ================= La grulla que devolvió el favor ================= */

  ts1:{art:'ts_yuki_wana', text:'Esta es la historia de una grulla a la que salvaron en un día de nieve.\nUn día de invierno, un anciano iba camino del pueblo a vender leña\ny encontró una grulla atrapada en una trampa.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'¡¡Trampa abierta!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'El anciano abrió la trampa y dejó libre a la grulla.\nCon un gran aleteo, la grulla se fue volando al cielo de nieve.';
    if(f.first) return t;
    return t + '\n¿Qué compra en el pueblo antes de volver a casa?';
  }, choices:[
    {t:'Comprar arroz', go:'ts2r', set:{tslife:'kome'}},
    {t:'Comprar un caramelo', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'Con el dinero de la leña, el anciano compró un caramelo pequeño.\nUn regalo para la anciana.'
    : 'Con el dinero de la leña, el anciano compró un poco de arroz.\nLo justo para la cena de ese día.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'Esa noche seguía nevando.\nToc, toc. Alguien llamaba a la puerta.\nUna muchacha con un kimono blanco estaba de pie en la nieve.\n"Me he perdido. Por favor, déjenme pasar aquí una noche."', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Por favor, déjenme quedarme'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'El anciano y la anciana sentaron a la muchacha junto al fuego del hogar.\nLa muchacha trabajaba mucho, y pasaron muchos días viviendo juntos.\n"Por favor, déjenme quedarme aquí."\nLos dos llegaron a ver a la muchacha como a una hija propia.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'Un día, la muchacha dijo:\n"Cómprenme hilo, por favor. Voy a tejer en el telar.\nMientras teja, por favor no abran la puerta de papel."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Tracatrac, tracatrac'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'Durante 3 días y 3 noches, el sonido del telar siguió saliendo del cuarto.\nLa mañana del día 4, la muchacha salió con una tela blanca.\nEra una tela blanca como la nieve, y brillaba.', next:'ts7'},

  ts7:{art:'ts_machi', text:'El anciano la llevó al pueblo, y la tela se vendió muy cara.\nEse invierno, en la casa hizo calor.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Qué agradecidos estamos...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Voy a tejer una tela más", dijo la muchacha.\nDe nuevo, durante 3 días y 3 noches, se oyó el telar en el cuarto.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Tracatrac, tracatrac'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'La segunda tela también se vendió muy cara.\nPero la cara de la muchacha estaba más pálida que antes.\n"Voy a tejer una más", dijo la muchacha.';
    if(f.first) return t;
    return t + '\n¿Qué hace el anciano?';
  }, choices:[
    {t:'Decir: "Por favor, teje"', go:'ts10'},
    {t:'Decir: "Ya no hace falta que tejas"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'La tercera tela.\nEl sonido del telar era más lento que antes.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Traca... trac...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'La anciana se detuvo delante del cuarto.\n(¿Estará bien esa muchacha?)\n(No tiene hilo. ¿Qué estará tejiendo?)';
    if(f.first) return t + '\nLa anciana abrió la puerta de papel solo un poco.';
    return t + '\n¿Qué hace la anciana?';
  }, choices:[
    {t:'Abrir la puerta de papel un poco', go:'ts12'},
    {t:'Llamarla desde fuera y alejarse', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Al otro lado de la puerta de papel había una grulla.\nCon sus propias plumas estaba tejiendo en el telar.\nLas plumas se habían reducido un poco.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'Esa noche, la muchacha se sentó delante de los dos.\n"Yo soy la grulla a la que salvaron en un día de nieve.\nHan visto mi verdadera forma.\nYa no puedo seguir con forma de muchacha."';
    if(f.first) return t;
    return t + '\n¿Qué hacen los dos?';
  }, choices:[
    {t:'Despedirla en silencio', go:'ts14'},
    {t:'Abrir la puerta y mirar al cielo', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'La muchacha volvió a tomar forma de grulla y se fue volando al cielo de nieve.\nEl anciano y la anciana miraron el cielo durante mucho, mucho tiempo.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'La grulla, hacia el cielo'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'La grulla a la que salvaron en un día de nieve volvió al cielo.\nEn la casa quedaron 2 telas blancas y un telar con el tejido a medias.\nFin.'},

  /* ---- Ya no hace falta que tejas ---- */
  tsm1:{art:'ts_kaoiro', text:'"Ya no hace falta que tejas. Con 2 telas es suficiente."\nEso dijo el anciano.\nLa muchacha se quedó callada un rato y luego contestó: "Sí."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'El invierno terminó y llegó la primavera.\nEn el cielo se oyeron voces de grullas.\n"Yo soy la grulla a la que salvaron en un día de nieve. Mis compañeras me llaman."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'La muchacha volvió a tomar forma de grulla y se fue volando con sus compañeras.\nEn la casa quedaron 2 telas blancas.\nEl anciano y la anciana se despidieron mirando el cielo de primavera.\nY vivieron felices para siempre.'},

  /* ---- Un invierno sin mirar ---- */
  tsn1:{art:'ts_nozoku', text:'"No te esfuerces demasiado."\nLa anciana la llamó desde fuera de la puerta de papel y se alejó del cuarto.\nDesde dentro se oyó un "Sí."', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'La tercera tela quedó terminada.\nEra la más hermosa de todas.\nLa cara de la muchacha seguía pálida.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Llegó la primavera y en el cielo se oyeron voces de grullas.\n"Yo soy la grulla a la que salvaron en un día de nieve.\nYa no me quedan plumas. Mis compañeras me llaman."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'El anciano y la anciana despidieron a la muchacha en la puerta.\nAunque no miraron, la despedida llegó igual.\nPero en esa despedida no quedó ni un solo secreto.\nY vivieron felices para siempre.'},

  /* ---- Abrir la ventana ---- */
  tsd1:{art:'ts_mado', text:'A la mañana siguiente, el anciano abrió la puerta.\nEn el cielo despejado, una grulla.\nLa grulla dio una vuelta por encima de la casa y se fue volando a lo lejos.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'Los dos dijeron adiós con la mano.\nSi la grulla miró atrás o no, no se sabe.\nPero que dio una vuelta por encima de la casa, eso lo recordaron siempre.\nY vivieron felices para siempre.'},

  /* ================= La historia de la grulla ================= */

  tz1:{art:'ts_yuki_wana', text:'Esta es la historia de una grulla.\nUn día de nieve quedó atrapada en una trampa y no podía moverse.\nUn anciano que pasaba por allí le abrió la trampa.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'La grulla quiso devolver el favor.\n¿Con qué forma va a ir?', choices:[
    {t:'Una muchacha con kimono blanco', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Una muchacha de viaje', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'La grulla tomó la forma de una muchacha de viaje con un sombrero de paja\ny, en una noche de nieve, llamó a la puerta de la casa.'
    : 'La grulla tomó la forma de una muchacha con kimono blanco\ny, en una noche de nieve, llamó a la puerta de la casa.', next:'tz3'},
  tz3:{art:'tz_hane', text:'Para tejer en el telar hacen falta las propias plumas.\nLas plumas no son infinitas.\nLa grulla tejía y a la vez contaba las plumas.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Solo quedan estas'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Mientras tejía la tercera tela, la puerta de papel se abrió un poco.\n¿Qué hace la grulla?', choices:[
    {t:'Seguir tejiendo', go:'tzh1'},
    {t:'Parar el telar y mirar el cielo', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'La grulla tejió hasta el final.\nLas plumas se habían reducido bastante.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'Como habían visto su forma, la grulla salió de la casa.\nPor qué tejió hasta el final no está escrito en esta historia.\nFin.'},
  tzs1:{art:'tz_sora_ie', text:'La grulla paró el telar y miró el cielo por la ventana.\nEra un cielo de primavera.\nEsa misma noche, la grulla salió de la casa.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Desde el cielo, la casa era pequeña, y en ella brillaba una sola luz.\nLa grulla estuvo mirando esa luz un rato.\nFin.'},

  /* ================= El invierno de la anciana ================= */

  tb1:{art:'ts_irori', text:'Esta es la historia de una anciana.\nLa muchacha que llegó en una noche de nieve trabajaba mucho y reía mucho.\nLa anciana no podía evitar querer a la muchacha.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Mientras la muchacha teje en el telar, ¿qué hace la anciana?', choices:[
    {t:'Preparar una sopa caliente', go:'tb2r', set:{tblife:'shiru'}},
    {t:'No dejar que se apague el fuego', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'La anciana siguió echando leña para que el fuego no se apagara.\nPara que el cuarto no se quedara frío.'
    : 'La anciana preparó una sopa caliente y la dejó fuera de la puerta de papel.\nPor la mañana, el cuenco estaba vacío.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Después de la segunda tela, la cara de la muchacha estaba pálida.\nLa anciana pasó una y otra vez por delante del cuarto, de un lado a otro.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'Me dijo que no mirara, pero...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'Cuando te dicen que no mires, dan ganas de mirar.\nY más aún cuando uno está preocupado.\n¿Qué hace la anciana?', choices:[
    {t:'Abrir la puerta de papel', go:'tbk1'},
    {t:'Sentarse delante del cuarto y esperar', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Al otro lado de la puerta de papel había una grulla.\nLa anciana cerró la puerta de papel con cuidado.\nPero lo que había visto ya no se podía deshacer.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'La muchacha volvió a ser grulla y se fue volando.\nLas ganas de mirar las tiene cualquiera.\nEn esta historia no aparece nadie que diga que eso está mal.\nFin.'},
  tbh1:{art:'tb_hata_nokori', text:'La anciana se sentó delante del cuarto y escuchó el sonido del telar.\nTracatrac. Tracatrac.\nAsí estuvo hasta la primavera.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Después de que la muchacha se fuera en primavera, el telar quedó en el cuarto.\nLa anciana dejó el telar tal como estaba y abría el cuarto todos los días.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, TSURU_ES);

  T.ZK_EN.push(
    {section:'La grulla que devolvió el favor', note:'En los cuentos populares de Japón hay muchas historias en las que alguien se marcha cuando se conoce su verdadera forma: la grulla, la serpiente, el ruiseñor. No son historias de castigo.'},
    {id:'ts_seishi',    n:'La grulla del día de nieve',   h:'La historia tal como se cuenta, desde la primera vez'},
    {id:'ts_mou',       n:'Ya no hace falta tejer',       h:'Si antes de la tercera tela el anciano dice algo...'},
    {id:'ts_nozokanai', n:'Un invierno sin mirar',        h:'Si la anciana solo la llama y se aleja...'},
    {id:'ts_mado',      n:'Abrir la ventana',             h:'Si en la noche de la despedida abres la puerta y miras al cielo...'},
    {id:'tz_hane',      n:'El número de plumas',          h:'En la historia de la grulla, si sigues tejiendo hasta el final...'},
    {id:'tz_sora',      n:'La casa vista desde el cielo', h:'En la historia de la grulla, si paras el telar y miras el cielo...'},
    {id:'tb_kokoro',    n:'Las ganas de mirar',           h:'En la historia de la anciana, si abres la puerta de papel...'},
    {id:'tb_hata',      n:'El telar a medias',            h:'En la historia de la anciana, si esperas delante del cuarto...'}
  );

})();
