"use strict";
/* El Viento del Norte y el Sol - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Spanish wording is original;
   no existing Spanish translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var KITAKAZE_ES = {

  /* ================= El Viento del Norte y el Sol ================= */

  kz1:{art:'kz_sora', text:'Esta es la historia del Viento del Norte y el Sol.\nUn día, allá arriba en el cielo, el Viento del Norte y el Sol discutían.\n"Yo soy más fuerte." "No, yo lo soy."', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'¿Quién es más fuerte?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'Esa mañana, un viajero salió del pueblo y echó a andar por el camino.\nCon el abrigo puesto y la bolsa al hombro.';
    if(f.first) return t;
    return t + '\n¿Qué va en la bolsa?';
  }, choices:[
    {t:'Una botella de agua', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Pan y una manzana', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'En la bolsa: pan, una manzana y otro abrigo.\nParecía que el camino iba a ser largo.'
    : 'En la bolsa: una botella de agua y otro abrigo.\nParecía que el camino iba a ser largo.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'El Viento del Norte y el Sol vieron al viajero.\n"Quien consiga que el viajero se quite el abrigo, será el más fuerte."';
    if(f.first) return t + '\nPrimero le tocaba al Viento del Norte.';
    return t + '\n¿Qué pasa ahora?';
  }, choices:[
    {t:'Competir. Empieza el Viento del Norte', go:'kz4'},
    {t:'Dejar de competir y probar juntos', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'El Viento del Norte sopló fuerte desde el principio.\n¡Fuuu!\nEl viajero se sujetó el cuello del abrigo.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Fuuu!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'El Viento del Norte sopló más fuerte.\n¡Fuuu, fuuu!\nEl viajero apretó el abrigo con las dos manos.\n"Qué frío. Me pondré otro."\nSacó de la bolsa el otro abrigo y se lo puso encima del primero.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Fuuu, fuuu!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Qué frío...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'El Viento del Norte sopló con todas sus fuerzas.\nVolaron las hojas de los árboles y se levantó la arena del camino.\nAun así, el viajero no soltó el abrigo.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Fuuuuuu!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'El Viento del Norte se cansó.';
    if(f.first) return t + '\n"Sol, ahora te toca a ti."\nY el Viento del Norte le dejó el viajero al Sol.';
    return t + '\n¿Qué hace el Viento del Norte?';
  }, choices:[
    {t:'"Sol, ahora te toca a ti"', go:'kzc_kao_kk'},
    {t:'Ir a buscar las nubes', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Ahora te toca a ti'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'El Sol brilló al principio con calma.\nUn calorcito agradable.\nEl viajero se quitó el abrigo de encima y lo guardó en la bolsa.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Un calorcito agradable...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'El Sol brilló con más fuerza.\nUn sol radiante.\nEl viajero empezó a sudar.';
    if(f.first) return t;
    return t + '\n¿Qué hace el viajero?';
  }, choices:[
    {t:'Seguir caminando igual', go:'kzc_poka2'},
    {t:'Ponerse a la sombra', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Un sol radiante!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'El Sol brilló todavía con más fuerza.\n"Qué calor. No se aguanta."\nEl viajero se quitó el abrigo del todo y se lo puso al hombro.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Al lado del camino corría un río.\nEl viajero dejó el abrigo en la orilla y se tiró al agua.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Chof!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'El viajero se dio un baño en el río, y se veía muy a gusto.\nDesde el cielo, el Viento del Norte y el Sol lo miraban.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'El viajero no sabe que hubo una prueba entre los dos.\nSecó el abrigo en la orilla y siguió su camino.\nFin.'},

  /* ---- Día de lavar entre los dos ---- */
  kzf1:{art:'kz_sentaku', text:'"Dejemos de competir y probemos juntos."\nEl Viento del Norte sopló y el Sol brilló.\nToda la ropa tendida del pueblo se secó antes del mediodía.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'El viajero siguió caminando a gusto, con el abrigo puesto.\nEl viento era fresco, y el sol, tibio.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'La gente del pueblo llamó a ese día "el mejor día para lavar la ropa".\nCuál de los dos era más fuerte, nadie lo decidió.\nY vivieron felices para siempre.'},

  /* ---- Un descanso a la sombra ---- */
  kzk1:{art:'kz_kokage', text:'El viajero se metió a la sombra de un árbol grande y se sentó.\nEl abrigo, puesto.\nBeber un poco de agua y descansar un rato.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'El sol bajó y refrescó.\nEl viajero echó a andar otra vez, con el abrigo puesto.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'Allá arriba en el cielo, el Viento del Norte y el Sol se miraron.\nNo se decidió quién era más fuerte.\nFin.'},

  /* ---- Cuando llegaron las nubes ---- */
  kzu1:{art:'kz_kumo', text:'El Viento del Norte fue a buscar las nubes.\nEl cielo se puso oscuro y empezó a llover.\nEl viajero se resguardó de la lluvia debajo de un árbol.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'Cuando dejó de llover, el viajero echó a andar otra vez.\nEl abrigo, puesto.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'"Por hoy lo dejamos aquí", dijo el Sol.\n"Otro día", dijo el Viento del Norte.\nFin.'},

  /* ================= La historia del Viento del Norte ================= */

  kk1:{art:'kz_sora', text:'Esta es la historia del Viento del Norte.\nEl Viento del Norte llega soplando desde el mar del norte.\nSoplar fuerte es el trabajo del Viento del Norte.', next:'kk2'},
  kk2:{art:'kk_umi', text:'¿Adónde va a soplar hoy el Viento del Norte?', choices:[
    {t:'Al mar', go:'kk2r', set:{kklife:'umi'}},
    {t:'A la pradera', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'El Viento del Norte dio un soplo sobre la pradera.\nToda la hierba se inclinó a la vez hacia el mismo lado.'
    : 'El Viento del Norte dio un soplo sobre el mar.\nLas olas blancas se levantaron todas a la vez.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'La prueba de hacer que el viajero se quitara el abrigo no salió bien.\nUn poco cansado, el Viento del Norte descansó allá arriba en el cielo.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Con lo bien que se me da soplar'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Desde el cielo se ven muchas cosas allá abajo.\n¿Adónde va el Viento del Norte?', choices:[
    {t:'Con los barcos del puerto', go:'kkh1'},
    {t:'Con las flores de la pradera', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'En el puerto había un barco que no podía moverse.\nNo había viento y las velas colgaban flojas.\nEl Viento del Norte sopló suavemente hacia las velas.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'Las velas se hincharon y el barco salió al mar.\nLos marineros saludaron con la mano hacia el cielo.\nY vivieron felices para siempre.'},
  kkt1:{art:'kk_nohara', text:'Las flores de la pradera ya tenían semillas.\nEl Viento del Norte levantó las semillas y las llevó muy lejos.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'A la primavera siguiente, en una colina lejana, florecieron las mismas flores.\nEran las semillas que había llevado el Viento del Norte.\nY vivieron felices para siempre.'},

  /* ================= La historia del Sol ================= */

  kh1:{art:'kz_sora', text:'Esta es la historia del Sol.\nEl Sol sale por el este por la mañana y se pone por el oeste al atardecer.\nBrillar es el trabajo del Sol.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'¿Sobre qué brilla el Sol primero esta mañana?', choices:[
    {t:'La huerta', go:'kh2r', set:{khlife:'hatake'}},
    {t:'Los techos del pueblo', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'El Sol brilló sobre los techos del pueblo.\nUn gato que estaba en un techo se estiró.'
    : 'El Sol brilló sobre la huerta.\nEl rocío brillaba y los brotes crecieron.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'El día de la prueba con el viajero, el Sol brilló más fuerte que de costumbre.\nEl viajero se tiró al río, pero la tierra de la huerta se secó y se agrietó.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Quizá brillé demasiado'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'¿Qué hace el Sol?', choices:[
    {t:'Pedirle sombra a la nube', go:'khk1'},
    {t:'Seguir brillando hasta ponerse', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'El Sol le pidió un favor a una nube que pasaba por allí.\n"¿Puedes hacer un poco de sombra sobre la huerta?"\nLa nube se detuvo encima de la huerta.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'A la sombra, la huerta pudo respirar.\nTambién hay cosas que el Sol no puede hacer.\nEl Sol no olvidó el día en que le pidió ayuda a la nube.\nY vivieron felices para siempre.'},
  khy1:{art:'kh_yuuhi', text:'El Sol siguió brillando hasta ponerse detrás de las montañas del oeste.\nVio la espalda del viajero pasar por encima de una colina lejana.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Si el viajero se puso el abrigo o se lo quitó, el Sol ya no lo ve.\nMañana el Sol volverá a salir.\nFin.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_ES);

  T.ZK_EN.push(
    {section:'El Viento del Norte y el Sol', note:'En el libro griego antiguo, esta historia termina con el viajero bañándose en un río. Cuál de los dos ganó, el libro no lo dice. La frase "en muchos casos, convencer funciona mejor que la fuerza" se añadió después. Hay más de una manera de leerla.'},
    {id:'kz_seishi', n:'Un baño en el río',           h:'La historia como se cuenta, desde tu primera vez'},
    {id:'kz_kokage', n:'Un descanso a la sombra',     h:'Si en el turno del Sol te pones a la sombra...'},
    {id:'kz_futari', n:'Día de lavar entre los dos',  h:'Si dejan de competir y lo hacen juntos...'},
    {id:'kz_kumo',   n:'Cuando llegaron las nubes',   h:'Si el Viento del Norte va a buscar las nubes...'},
    {id:'kk_ho',     n:'Hinchar las velas',           h:'Si en la historia del Viento del Norte vas al puerto...'},
    {id:'kk_tane',   n:'Llevar las semillas',         h:'Si en la historia del Viento del Norte vas a la pradera...'},
    {id:'kh_kumo',   n:'Pedirle a la nube',           h:'Si en la historia del Sol le pides a la nube...'},
    {id:'kh_yuuhi',  n:'Hasta ponerse',               h:'Si en la historia del Sol brillas hasta ponerte...'}
  );

})();
