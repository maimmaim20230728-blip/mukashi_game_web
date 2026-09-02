"use strict";
/* Caperucita Roja - Spanish (neutral, understood in both Spain and Latin America) scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   Estilo: español sencillo de libro ilustrado, igual que story_es.js.
   El famoso diálogo repetido usa la fórmula clásica en español ("Para ...te mejor"). */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var AKZ_ES = {

  /* ================= Caperucita Roja ================= */

  z1:{art:'akz_home', text:'Esta es la historia de una niña a la que le quedaba muy bien una caperuza roja.\nLa caperuza la había hecho su abuela, y la niña la llevaba puesta todos los días.\nPor eso todos la llamaban Caperucita Roja.', next:'z2'},

  z2:{art:'akz_home', text:'Un día, su mamá le dijo:\n"La abuela, que vive al otro lado del bosque, está enferma. ¿Le llevas unos dulces y jugo de uva?"\n"No te entretengas por el camino y no te salgas del sendero."', next:'z3'},

  z3:{art:'akz_home', text:'Caperucita se quedó pensando.\nVamos a poner una cosa más en la canasta.', choices:[
    {t:'Poner un frasco de miel', go:'z3r', set:{item:'hachimitsu'}},
    {t:'Poner una manzana bien roja', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? 'La manzana bien roja rodó dentro de la canasta y brilló allí.\n¿Se pondrá contenta la abuela?'
    : 'Con cuidado puso el frasco de miel dulce en la canasta.\n¿Se pondrá contenta la abuela?', next:'z4'},

  z4:{art:'akz_door', text:'"¡Ya me voy!"\nCon la canasta en el brazo, Caperucita salió de un salto por la puerta.', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'¡¡En marcha con el encargo!!'}, then:'z5'},

  z5:{art:'akz_forest', text:'En el bosque de abetos, la luz brillaba entre las ramas.\nSe oía el canto de los pajaritos.', next:'z5b'},
  z5b:{art:'akz_forest', text:'Y ahora, ¿cómo vamos a caminar?', choices:[
    {t:'Caminar cantando una canción', go:'z5r', set:{walk:'uta'}},
    {t:'Caminar buscando mariposas', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? 'Una mariposa amarilla revoloteaba más adelante, por el sendero.\nComo si le fuera mostrando el camino.'
    : '"La, la, la, por el sendero del bosque."\nLos pajaritos cantaron junto con Caperucita.', next:'z6'},

  z6:{art:'akz_meet', text:'Crac, crac.\nDe detrás de un árbol salió un Lobo enorme.', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '"Buenos días, señorita. ¿Adónde vas?"\npreguntó el Lobo con una gran sonrisa.';
    if(f.first) return t;
    return t + '\n¿Qué debe hacer Caperucita?';
  }, choices:f=>{
    var c = [
      {t:'Responder con sinceridad', go:'z8'},
      {t:'"No te lo voy a decir"', go:'zn1'},
      {t:'Volver corriendo a casa', go:'zh1'}
    ];
    if(f.item) c.push({t:'Preguntarle: "¿Tienes hambre?"', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'"A casa de mi abuela. Está enferma, y le llevo unos dulces y jugo de uva."\nCaperucita respondió con toda sinceridad.\nY por dentro, el Lobo empezó a pensar un plan astuto.', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '"Mira, mira. Qué flores tan bonitas hay allá.\nSi le llevas un ramo, seguro que la abuela se pone contenta."';
    if(f.first) return t;
    return t + '\n¿Qué debe hacer Caperucita?';
  }, choices:[
    {t:'Cortar unas flores', go:'z10'},
    {t:'"No, voy derecho para allá"', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'Es verdad, pensó Caperucita, y se salió del sendero.\nUna flor blanca, una flor azul. Y cada vez que cortaba una, más allá se veía otra todavía más bonita.', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'Mientras tanto, el Lobo...'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'El Lobo corrió por un atajo y llegó antes que ella a la casa de la abuela.\nToc, toc.\n"Abuela, soy Caperucita."\nImitó su voz y se metió dentro.', next:'z12'},

  z12:{art:'akz_bed', text:'En un abrir y cerrar de ojos, la abuela fue tragada de un bocado.\nEl Lobo se puso su camisón, se colocó su gorro de dormir y se metió en la cama.', next:'z13'},

  z13:{art:'akz_gma_out', text:'Por fin llegó Caperucita, con el ramo de flores en los brazos.\n"Ay, la puerta está abierta..."', next:'z14'},

  z14:{art:'akz_bed', text:'"Abuela, ya estoy aquí."\nLa abuela que estaba en la cama se veía un poco rara.\nCaperucita se acercó despacito y le miró la cara.', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'¡Qué orejas tan grandes!'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'Para oírte mejor'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'¡Qué ojos tan grandes!'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'Para verte mejor'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'¡Qué manos tan grandes!'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'Para agarrarte mejor'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'¡Qué boca tan grande!'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'¡¡Para comerte mejor!!'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'¡¡Ñam!!'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = 'Cuando abrió los ojos, todo estaba oscuro: era la barriga del Lobo.\n"¿Eres tú, Caperucita? Qué susto, ¿verdad? Pero ya todo va a estar bien."\nEra la voz de la abuela, y una mano tibia le apretó la suya.';
    if(f.first) return t;
    return t + '\n¿Qué deben hacer las dos?';
  }, choices:[
    {t:'Esperar quietas a que llegue ayuda', go:'z16'},
    {t:'Cantar las dos bien fuerte', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'Las dos se tomaron de la mano y esperaron sin moverse.\nEl Lobo, con la barriga llena, se quedó dormido en la cama.\nSus ronquidos retumbaban por toda la casa.', next:'z17'},

  z17:{art:'akz_hunter', text:'En eso pasó por allí el cazador, que hacía su ronda por el bosque.\n"Qué ronquidos salen de la casa de la abuela... Aquí hay algo raro."\n¡Se asomó con cuidado, y en la cama había un Lobo con la barriga hinchada!', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'¡¡Ris, ras!!'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = 'Con unas tijeras, el cazador abrió con cuidado la barriga del Lobo dormido.\n"¡Estaba todo oscuro ahí dentro!", dijo Caperucita.\nLa abuela también estaba bien. Ninguna de las dos tenía ni un rasguño.';
    if(f.first) return t;
    return t + '\n¿Qué deben hacer las dos?';
  }, choices:[
    {t:'Llenarle la barriga de piedras', go:'z19'},
    {t:'Hacerle prometer: "Nunca más"', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'Caperucita fue deprisa al jardín y trajo piedras pesadas.\nEl cazador se las metió en la barriga y la cosió puntada a puntada.', next:'z20'},

  z20:{art:'akz_stone', text:'El Lobo despertó y dio un salto para escaparse.\nPero las piedras de la barriga pesaban mucho, muchísimo.\n¡Pum! Se cayó allí mismo y ya no se movió.', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'Se sentaron en la hierba y compartieron los dulces y el jugo de uva.\nHasta la abuela parecía estar ya mejor de su enfermedad.\nY Caperucita se prometió a sí misma:\n"Nunca más me voy a entretener fuera del sendero."\nY vivieron felices para siempre.'},

  /* ---- No decir nada / ir derecho -> La sabiduría de la abuela ---- */
  zn1:{art:'akz_meet', text:'"¡No te lo voy a decir!"\nCaperucita levantó la barbilla y siguió su camino a paso ligero.\nEl Lobo sonrió de lado y desapareció detrás de los árboles.', next:'zn2'},
  zn2:{art:'akz_forest', text:'Por dentro se le movía algo, como una inquietud.\nCaperucita apuró el paso y siguió sin mirar a los lados.', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'Caperucita llegó primero a la casa de la abuela.\n"Abuela, en el bosque me encontré con un Lobo enorme."\n"Vaya. Entonces vamos a cerrar con llave."', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'Clic, hizo la cerradura.\nAl rato: toc, toc.\n"Soy Caperucita, ábreme."\nPor más que imitaba la voz, las dos se quedaron calladas. La puerta no se abrió.', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'Entonces se oyó: cric, crac.\nEl Lobo subió al tejado y se puso a esperar allí escondido.\nLa abuela dijo en voz bajita:\n"A ese Lobo le encanta el olor de las salchichas. Vamos a echar el agua de la olla en la tina que está delante de la casa."', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'Se me ocurre una buena idea'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'El rico olor de las salchichas subió en nubes de vapor hasta el tejado.\nEl Lobo olfateó, se fue resbalando, resbalando y resbalando...\n¡Chof!\nEl Lobo cayó en la tina y salió corriendo al bosque, empapado.', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'"¡Abuela, eres increíble!"\n"Je, je. A esto se le llama la sabiduría de los años."\nLa abuela no es solo alguien a quien hay que proteger.\nEsa noche las dos comieron salchichas bien calientes.\nY vivieron felices para siempre.'},

  /* ---- Volver corriendo -> Junto con mamá ---- */
  zh1:{art:'akz_forest', text:'Caperucita dio media vuelta y echó a correr a toda prisa hacia su casa.\nEl Lobo se quedó desconcertado, viendo cómo se alejaba.', next:'zh2'},
  zh2:{art:'akz_home', text:'"¡Mamá! ¡En el bosque me encontré con un Lobo enorme!"\n"Qué bien que me lo cuentas enseguida. Hiciste bien.\nEntonces voy contigo a casa de la abuela."', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'De la mano de su mamá, Caperucita recorrió otra vez el sendero del bosque.\nA lo lejos, entre los árboles, el Lobo miraba, pero con una persona adulta al lado no se atrevió a salir.', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'En la casa de la abuela pronto se oyeron las risas de todos.\nCuando algo te preocupa o te da miedo, cuéntaselo enseguida a una persona adulta.\nEsa es la mejor magia de todas.\nY vivieron felices para siempre.'},

  /* ---- ¿Tienes hambre? -> El invitado del bosque ---- */
  zt1:{art:'akz_meet', text:'"Señor Lobo, ¿será que tienes hambre?"\nEl Lobo se sorprendió tanto que solo parpadeaba.\n"...Hace tres días que no como nada."', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? 'Caperucita se sentó a la orilla del sendero y compartió los dulces y la manzana bien roja.\nEl Lobo dio un bocado y se le escapó una lágrima.'
    : 'Caperucita se sentó a la orilla del sendero y compartió los dulces con miel por encima.\nEl Lobo dio un bocado y se le escapó una lágrima.', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'"Nunca nadie me había tratado con tanta amabilidad."\nCon la barriga llena, el Lobo volvió al bosque profundo.\nCuando Caperucita contó esto en casa de la abuela, la abuela sonrió.\n"Una niña que sabe compartir su comida es la más fuerte del mundo."\nY vivieron felices para siempre.'},

  /* ---- Cantar -> El coro de la barriga ---- */
  zu1:{art:'akz_onaka', text:'"¡Abuela, cantemos las dos!"\n"Buena idea. Aunque esté todo oscuro, cantar sí se puede."\nTomaron aire muy hondo y...', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'¡¡El coro de la barriga!!'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'"La, la, la, por el sendero del bosque."\nEl cazador, que pasaba por fuera de la casa, no daba crédito a sus oídos.\n"¿Se oye cantar dentro de la casa? Y además... ¿desde la barriga del Lobo?"', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'¡¡Ris, ras!!'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'"Gracias a la canción los encontré enseguida", dijo el cazador.\nEl Lobo, asustado, metió la cola entre las patas y huyó al bosque.', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'"Aunque el lugar esté muy oscuro, si levantas la voz, alguien la escucha."\nCaperucita nunca olvidó esas palabras de la abuela.\nDesde ese día las dos cantan juntas, como un pequeño coro de amigas.\nY vivieron felices para siempre.'},

  /* ---- Hacerle prometer -> La mañana de la promesa ---- */
  zy1:{art:'akz_rescue', text:'"Llenarle la barriga de piedras me da lástima. En vez de eso..."\nCaperucita miró de frente al Lobo, que ya había despertado.\n"Prométeme que nunca más te vas a comer a nadie."\nEl Lobo bajó la cabeza y dijo en voz bajita: "...Nunca más."', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'Con la luz del amanecer, el Lobo volvió a lo profundo del bosque.\nNadie sabe si de verdad va a cumplir su promesa.\nPero el cazador dijo:\n"De la ronda me encargo yo."\nY vivieron felices para siempre.'},

  /* ================= La historia del Lobo ================= */

  w1:{art:'w_fuyu', text:'Esta es la historia de un Lobo que vivía solo en el bosque de invierno.\nLa nieve estaba muy honda y no había presas por ninguna parte.\nHacía tres días que el Lobo no comía nada.', next:'w2'},
  w2:{art:'w_fuyu', text:'Una noche muy, muy fría.\n¿Cómo va a pasarla el Lobo?', choices:[
    {t:'Hacerse un ovillo en la cueva', go:'w2r', set:{wnight:'maru'}},
    {t:'Aullar mirando las estrellas', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? 'Hacia el cielo azul de la noche: ¡Auuuu!\nPero ningún compañero le respondió desde ninguna parte.'
    : 'Se tapó la nariz con la cola y se hizo un ovillo, muy pequeñito.\nAun así, el aire que se colaba estaba helado.', next:'w3'},
  w3:{art:'w_mura', text:'Por la mañana, desde lo alto de la colina miró el pueblo, y le llegó el olor del pan recién horneado.\nLa barriga le rugió.\n¿Qué hace el Lobo?', choices:[
    {t:'Sacar valor y pedirle al panadero', go:'wp1'},
    {t:'Esperar a alguien en el sendero del bosque', go:'wm1'}
  ]},

  /* ---- Pedirle al panadero ---- */
  wp1:{art:'w_panya', text:'Cuando bajó al pueblo, todos huyeron asustados.\nSolo el panadero no huyó.\n"...¿Quieres comer?"', next:'wp2'},
  wp2:{art:'w_panya', text:'El Lobo asintió con la cabeza, bajito.\nEl panadero le dio un montón de cortezas de pan duras.\n"Eres el primer lobo que pide en vez de robar."', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'Desde el día siguiente, el Lobo ayudaba a cortar leña y a cambio recibía pan.\nLa gente del pueblo, que le tenía miedo, se fue acostumbrando poco a poco.\nEl valor de pedir era más fuerte que los colmillos.\nY vivieron felices para siempre.'},

  /* ---- Esperar en el sendero (el otro lado de la historia) ---- */
  wm1:{art:'akz_meet', text:'Mientras esperaba en el sendero del bosque, llegó caminando una niña con una caperuza roja.\nPensaba comérsela. Y sin embargo, la niña se acercó sonriendo.\n"Señor Lobo, ¿será que tienes hambre?"', choices:[
    {t:'Decir la verdad: "Sí, tengo hambre"', go:'wt1'},
    {t:'Seguir con el plan astuto', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'"...Hace tres días que no como nada."\nEn cuanto lo dijo, el Lobo se sorprendió de sí mismo.\nLa niña abrió la canasta y compartió los dulces con él.', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'"Yo me llamo Caperucita. Señor Lobo, volvamos a vernos en este sendero."\nLa persona a la que pensaba comerse se convirtió en su amiga.\nLos días de mucha hambre, basta con ir a ese sendero.\nSolo con pensarlo, el bosque de invierno se siente un poco más tibio.\nY vivieron felices para siempre.'},

  wz1:{art:'akz_gma_out', text:'El Lobo respondió con astucia y corrió por el atajo.\nMientras corría, por dentro del pecho le punzaba algo, sin saber por qué.\n"Si no como, no paso el invierno", se dijo a sí mismo.', next:'wz2'},
  wz2:{art:'akz_bed', text:'Lo que pasó después está en la historia de Caperucita.\nSe tragó de un bocado a la abuela y también a Caperucita, y se quedó dormido.\nY cuando despertó...', next:'wz3'},
  wz3:{art:'akz_stone', text:'La barriga se le había llenado de piedras.\nPesaba tanto, tanto, que no podía dar ni un paso.\n"Así que esto era aquella punzada en el pecho..."', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'Pasó el largo invierno\ny llegó la primavera.'}, then:'wz4'},
  wz4:{art:'w_haru', text:'El cazador, en su ronda, le sacó las piedras al Lobo que no podía moverse y le curó la herida.\n"¿Aprendiste la lección?"\nEl Lobo asintió una y otra vez.', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'Con el viento de primavera, el Lobo se pone en camino.\nLa próxima vez que tenga hambre, va a decir: "¿Me compartes un poco?"\nEl peso de las piedras, el Lobo no lo ha olvidado ni un solo día.\nY vivieron felices para siempre.'},

  /* ================= La historia de la abuela ================= */

  g1:{art:'g_heya', text:'Esta es la historia de la abuela que vive sola en una casa del bosque.\nFue ella quien tejió aquella caperuza roja.\nHoy tenía un poco de fiebre y estaba tejiendo en la cama.', next:'g2'},
  g2:{art:'g_heya', text:'Todavía queda un poco de lana roja.\n¿Qué tejerá ahora?', choices:[
    {t:'Unos guantes pequeños', go:'g2r', set:{knit:'tebukuro'}},
    {t:'Una bufanda larga', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? 'Una bufanda larga, muy larga.\nTan larga que Caperucita y ella puedan envolverse las dos.'
    : 'Unos guantes rojos pequeños.\nDel tamaño justo para aquellas manos pequeñas.', next:'g3'},
  g3:{art:'g_heya', text:'En ese momento, una sombra grande pasó por delante de la ventana.\nToc, toc.\n"Abuela, soy Caperucita."\n...Vaya. Hoy esa voz suena distinta.', choices:[
    {t:'Mirar por la ventana antes de contestar', go:'gy1'},
    {t:'Decir "Pasa, pasa"', go:'go1'}
  ]},

  /* ---- Comprobar primero -> El invitado del tejado ---- */
  gy1:{art:'akz_machibuse', text:'Se asomó por la rendija de la cortina y vio un Lobo enorme.\nSin prisa y sin alboroto, la abuela cerró con llave. Clic.\n"Para engañar a una anciana te faltan cien años."', next:'gy2'},
  gy2:{art:'akz_yane', text:'El Lobo subió al tejado: cric, crac.\nLa abuela echó de golpe el agua de cocer las salchichas en la tina que está delante de la casa.\nAtraído por el rico olor, el Lobo se fue resbalando y... ¡chof!', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'Empapado, el Lobo salió corriendo hacia el bosque.\nCuando la abuela le contó esto a Caperucita, que llegó después, la niña abrió mucho los ojos y dijo:\n"¡Abuela, pareces una heroína!"\n"Je, je. Es que no soy solo alguien a quien hay que proteger."\nY vivieron felices para siempre.'},

  /* ---- Decir que pase -> Tranquila hasta en la barriga ---- */
  go1:{art:'akz_bed', text:'Quien entró fue un Lobo enorme.\nEn un abrir y cerrar de ojos, la tragó de un bocado.\nPero la abuela no se puso nerviosa.\nEs una abuela que ha pasado inviernos largos durante muchas décadas.', next:'go2'},
  go2:{art:'akz_onaka', text:'"Vaya. Dentro de la barriga hace bastante calorcito."\nAl rato, Caperucita también cayó rodando allí dentro.\nLa abuela le apretó fuerte la mano pequeña y le dijo:\n"Todo va a estar bien. Shh, escucha con atención. ...Mira, se oyen pasos."', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'¡¡Ris, ras!!'}, then:'go3'},
  go3:{art:'akz_rescue', text:'El cazador abrió la barriga con mucho cuidado.\n"Qué sorpresa. ¿Estuvo tranquila ahí dentro todo el tiempo?"\n"Sí. Cuando uno se pone nervioso, no se le ocurre nada bueno."', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? 'Para darle las gracias, la abuela le regaló al cazador la bufanda larga que estaba tejiendo.\n"Las rondas de invierno son frías, ¿verdad?"\nAunque es la historia de un día de miedo, no se sabe por qué, todos están riendo.\nY vivieron felices para siempre.'
    : 'Para darle las gracias, la abuela le regaló al cazador los guantes rojos que estaba tejiendo.\n"Las rondas de invierno son frías, ¿verdad?"\nAunque es la historia de un día de miedo, no se sabe por qué, todos están riendo.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, AKZ_ES);

  T.ZK_EN.push(
    {section:'Caperucita Roja'},
    {id:'za_seishi',   n:'El cazador al rescate',        h:'La historia original, la de tu primera vez'},
    {id:'za_chie',     n:'La sabiduría de la abuela',    h:'Si no dices nada y vas derecho...'},
    {id:'za_gassho',   n:'El coro de la barriga',        h:'Si en la barriga oscura cantan juntas...'},
    {id:'za_okyaku',   n:'El invitado del bosque',       h:'Si pones algo más en la canasta y eres amable con el Lobo...'},
    {id:'za_yakusoku', n:'La mañana de la promesa',      h:'Si después del rescate eliges algo en vez de las piedras...'},
    {id:'za_okaasan',  n:'Junto con mamá',               h:'Si tienes miedo, vuelve enseguida y cuéntalo...'},
    {id:'zw_pan',      n:'La primera petición',          h:'En la historia del Lobo, bajar al pueblo...'},
    {id:'zw_tomo',     n:'La primera amiga',             h:'En la historia del Lobo, decir la verdad...'},
    {id:'zw_hansei',   n:'El viento de primavera',       h:'Adónde lleva al final el plan astuto...'},
    {id:'zg_yane',     n:'El invitado del tejado',       h:'En la historia de la abuela, comprobar primero...'},
    {id:'zg_onaka',    n:'Tranquila hasta en la barriga', h:'En la historia de la abuela, quedarse tranquila...'}
  );

})();
