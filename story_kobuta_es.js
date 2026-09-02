"use strict";
/* Los tres cerditos - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_kobuta_en.js
   (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD). Traducción propia,
   sin calcar ninguna traducción española ajena.
   Refranes: "Cerdito, cerdito, déjame entrar." /
   "No, no, no te abro. Por los pelos, pelos, pelos de mi barbilla." */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var KOBUTA_ES = {

  /* ================= Los tres cerditos ================= */

  p1:{art:'buta_hajimari', text:'Esta es la historia de 3 cerditos que eran hermanos.\nEl cerdito grande, el cerdito mediano y el cerdito pequeño.\nLos tres ya habían crecido, así que cada uno decidió construir su propia casa.', next:'p2'},

  p2:{art:'buta_hajimari', text:'La mañana de la partida. ¿Qué le dicen los cerditos a su mamá?', choices:[
    {t:'Con mucho ánimo: "¡Ya nos vamos!"', go:'p2r', set:{plife:'genki'}},
    {t:'"Cuando tengamos algo rico, te lo traemos"', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '"Lo estaré esperando", dijo la mamá con una sonrisa.\nSu mano se quedó diciendo adiós durante mucho, mucho rato.'
    : '"¡Buen viaje!", dijo la mamá, igual de animada.\nDespedidos por esa voz alegre, los pasos se volvieron ligeros.', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = 'El camino se dividía en tres.';
    if(f.first) return t + '\nLos 3 cerditos se dijeron adiós con la mano y cada uno tomó su propio camino.';
    return t + '\nY ahora, ¿qué hacen los cerditos?';
  }, choices:[
    {t:'Cada uno toma su propio camino', go:'p4'},
    {t:'Construir una sola casa entre los 3', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'El cerdito grande se encontró con un señor que cargaba un gran fardo de paja.\n"Por favor, ¿me da un poco de esa paja?"\nUna casa de paja queda lista ese mismo día.\nSer rápida de construir: eso es lo mejor que tiene.', next:'p5'},

  p5:{art:'buta_eda', text:'El cerdito mediano se encontró con un señor que llevaba un montón de ramas en los brazos.\n"Por favor, ¿me da unas cuantas ramas?"\nPor una casa de ramas pasa el viento y se está muy fresco.\nEso es lo mejor que tiene.', next:'p6'},

  p6:{art:'buta_renga', text:'El cerdito pequeño se encontró con un señor que tiraba de un carro cargado de ladrillos.\n"Por favor, ¿me da unos cuantos ladrillos?"\nUna casa de ladrillos lleva tiempo, pero queda muy firme.\nEso es lo mejor que tiene.', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'¡¡Tac, tac, tac, tac!!'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = 'Las tres casas quedaron terminadas.\nLa casa de paja, la casa de ramas y la casa de ladrillos.\nCada una era una casa para estar orgulloso.';
    if(f.first) return t;
    return t + '\n¿Qué hacen primero en sus casas recién terminadas?';
  }, choices:[
    {t:'Enseñarse las casas unos a otros', go:'p7r', set:{plife2:'miseai'}},
    {t:'Descansar un rato y tomar el té', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? 'El té después del trabajo sabe especialmente bien.\n"¡Mañana vamos a visitarnos de casa en casa!"'
    : '"¡Qué rápido quedó la tuya!" "¡Qué fresco entra aquí!" "¡Qué firme es la tuya!"\nCada casa tenía su propia cosa buena.', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return 'En ese momento.\nUn lobo hambriento bajó de la montaña\ny se plantó delante de la casa de paja.';
    return 'En ese momento.\nEl cerdito pequeño vio a lo lejos un lobo que bajaba por el camino de la montaña.\n¿Qué hacen los cerditos?';
  }, choices:[
    {t:'Quedarse quietos y observar', go:'pc_vs'},
    {t:'Avisar a todos y reunirse en la casa de ladrillos', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'¡¡Cerditos contra Lobo!!'}, then:'p9'},

  p9:{art:'buta_wara', text:'El lobo llamó a la casa de paja, toc, toc.\n"Cerdito, cerdito, déjame entrar."\n"No, no, no te abro. Por los pelos, pelos, pelos de mi barbilla, ¡de ninguna manera!"\n"¡Pues voy a soplar y soplar hasta que tu casa entera salga volando!"', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'¡¡Fuuuuu!!'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'La casa de paja salió volando por los aires dando vueltas.\nEl cerdito grande escapó a todo correr\ny se metió en la casa de ramas del cerdito mediano.', next:'p11'},

  p11:{art:'buta_eda', text:'El lobo llegó detrás enseguida.\n"Cerditos, cerditos, déjenme entrar."\nEsta vez los dos contestaron a la vez:\n"No, no, no te abrimos. Por los pelos, pelos, pelos de nuestra barbilla, ¡de ninguna manera!"', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'¡¡Fu, fuuuuu!!'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'La casa de ramas también salió volando en pedazos.\nLos dos corrieron sin parar\ny se metieron en la casa de ladrillos del cerdito pequeño.', next:'p13'},

  p13:{art:'buta_naka', text:'"Aquí estamos a salvo.\nEsta casa la construí con calma, y por eso es muy firme."\nEl cerdito pequeño cerró bien la puerta con llave.', next:'p14'},

  p14:{art:'buta_renga', text:'"Cerditos, cerditos, déjenme entrar."\n"NO, NO, NO TE ABRIMOS. POR LOS PELOS, PELOS, PELOS DE NUESTRA BARBILLA, ¡DE NINGUNA MANERA!"\nEl lobo tomó aire muy hondo.', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'... ¡¡No se mueve ni un poquito!!'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = 'Por mucho que soplara, la casa de ladrillos no se movía ni un poquito.';
    if(f.first) return t + '\nJadeando y resoplando, el lobo miró hacia la chimenea del tejado.';
    return t + '\nEl lobo hambriento pensó en su siguiente idea.';
  }, choices:[
    {t:'Intentar entrar por la chimenea', go:'p16'},
    {t:'Intentar sacarlos con palabras dulces', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'El lobo se subió al tejado y metió una pata en la chimenea.\nPero dentro de la casa ya lo habían visto venir hacía rato.', next:'p17'},

  p17:{art:'buta_nabe', text:'Al pie de la chimenea, sobre el fuego, había una olla muy grande.\nGlu, glu, glu. Estaba llena hasta el borde de agua hirviendo.', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'¡¡Plaf, chooof!!'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'"¡¡Ay, ay, ay, quema, quema!!"\nCon el trasero quemado, el lobo\nvolvió corriendo a la montaña sin parar.', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'Desde entonces, el lobo no volvió a aparecer.\nLos 3 cerditos se reunían de vez en cuando\ny vivían contentos tomando una sopa calentita.\nY vivieron felices para siempre.'},

  /* ---- El verdadero cuento inglés (Jacobs 1890: las 3 tretas) ---- */
  pg1:{art:'buta_renga', text:'El lobo puso una voz muy suave y dijo:\n"Oye, cerdito. A las afueras del pueblo hay un campo de nabos riquísimos.\n¿Vamos juntos mañana a las 6 de la mañana?"\nEl cerdito pequeño lo entendió al instante. (Esto es una trampa.)\n"De acuerdo. Entonces a las 6."', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'Je, je... qué ganas de que sean las 6'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'A la mañana siguiente el cerdito se levantó a las 5,\nrecogió los nabos deprisa y volvió a casa.\nCuando el lobo llegó a las 6, se quedó de piedra.\n"Ya fui y volví. Traje una olla entera de nabos."', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'¿Cóoomo? ¡¿Que ya fue y volvió?!'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'Después vino la invitación al manzano. "Paso por ti a las 5 de la mañana."\nEl cerdito salió a las 4. Pero, mientras estaba subido al árbol,\nel lobo apareció abajo.\n"¡Te doy la manzana más rica de todas!"\nEl cerdito lanzó una manzana bien lejos\ny, mientras el lobo iba a buscarla, bajó y volvió corriendo a casa.', next:'pg4'},
  pg4:{art:'buta_ichi', text:'La última fue la invitación a la feria del pueblo. "Vamos a las 3 de la tarde."\nEl cerdito salió antes del mediodía y compró un barril para hacer mantequilla.\nDe vuelta, desde lo alto de la cuesta, vio al lobo que subía.\nEntonces el cerdito se metió dentro del barril.', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'¡¡Rueda que rueda, rueda que rueda!!'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'Con el cerdito dentro, el barril bajó la cuesta rodando y rodando.\nAl ver aquella cosa grande y redonda que venía hacia él,\nel lobo se llevó un susto enorme. Metió el rabo entre las patas y salió corriendo.', next:'pg6'},
  pg6:{art:'buta_renga', text:'Cuando después supo lo que había pasado, el lobo se puso furioso.\n"¡Se acabó! ¡Voy a entrar por la chimenea!"\nPero dentro de la casa ya lo habían visto venir hacía rato.', next:'pg7'},
  pg7:{art:'buta_nabe', text:'La olla grande del fuego borboteaba como todos los días.\nDentro había una sopa bien caliente, llena de aquellos nabos.', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'¡¡Plaf, chooof!!'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'"¡¡Ay, ay, ay, quema, quema!!"\nCon una quemadura enorme, el lobo huyó a lo más hondo de la montaña\ny nunca jamás volvió a aparecer.', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'El campo de nabos, el manzano y el barril de mantequilla.\nEste es el camino que más se parece al cuento antiguo que se cuenta en Inglaterra.\nEl listo cerdito pequeño vivió mucho tiempo feliz después de aquello.\nY vivieron felices para siempre.'},

  /* ---- Los 3 juntos desde el principio ---- */
  pk1:{art:'buta_renga', text:'"Construyamos una sola casa entre todos, ¡bien firme!"\nCon esas palabras del cerdito pequeño, los 3 empezaron a acarrear ladrillos.\nEntre los 3, hasta los ladrillos pesados eran cosa fácil.', next:'pk2'},
  pk2:{art:'buta_naka', text:'Bajo un mismo tejado había tres camas.\nQuedó una casa estupenda, con chimenea y con ventanas.', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'Entonces llegó el lobo hambriento\ny tomó aire muy hondo.', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'... ¡¡No se mueve ni un poquito!!'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'El lobo estuvo soplando hasta que se puso el sol\ny volvió a la montaña hecho polvo.\nUna casa construida uniendo fuerzas es la más firme de todas.\nY vivieron felices para siempre.'},

  /* ---- Vigilar y prepararse ---- */
  pn1:{art:'buta_michi', text:'"¡Que viene el lobo!"\nEl cerdito pequeño corrió de un tirón a las casas de sus dos hermanos.\nLos 3 se reunieron a toda prisa en la casa de ladrillos.', next:'pn2'},
  pn2:{art:'buta_naka', text:'Al mirar con cuidado por la ventana, vieron al lobo soplando la casa de paja.\n"¿¡No hay nadie!?"\nDespués sopló también la casa de ramas.\n"¿¡Aquí también está vacía!?"', next:'pn3'},
  pn3:{art:'buta_renga', text:'Por último sopló y sopló la casa de ladrillos. Pero no se movió ni un poquito.\nEl lobo acabó agotado\ny se sentó en el suelo, con el hambre de siempre.', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'Por la ventana salió una voz.\n"¿Una visita? Lo siento, por hoy ya hemos cerrado."\nEl lobo volvió a la montaña arrastrando los pies.\nSi uno está preparado, no se pone nervioso. Los 3 siguieron con su té.\nY vivieron felices para siempre.'},

  /* ================= La historia del lobo ================= */

  pw1:{art:'pwolf_yama', text:'Esta es la historia de un lobo que vivía en la montaña.\nÚltimamente casi no encontraba nada que comer\ny siempre, siempre tenía la barriga vacía.', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'¿Dónde va a buscar comida el lobo hoy?', choices:[
    {t:'Buscar cerca del río', go:'pw2r', set:{wlife:'kawa'}},
    {t:'Buscar en lo hondo del bosque', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? 'Los pájaros se le habían adelantado a todos los frutos del bosque.\nLa barriga le hizo gruuu.'
    : 'En el río no había ni la sombra de un pez.\nLa barriga le hizo gruuu.', next:'pw3'},
  pw3:{art:'buta_wara', text:'Al bajar al pie de la montaña, había 3 casas nuevas, una al lado de la otra.\nY de algún sitio llegaba un olor riquísimo.', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'¡Esto huele a banquete!'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'Soplar era la especialidad del lobo.\nDerribó la casa de paja y también la casa de ramas,\npero los cerditos se le escapaban una y otra vez.', next:'pw5'},
  pw5:{art:'buta_renga', text:'Quedaba la casa de ladrillos. Y esa no se movía ni un poquito.\nEl lobo hambriento pensó en su siguiente idea.', choices:[
    {t:'Sacarlos con palabras dulces', go:'pw6'},
    {t:'Probar a hablar con sinceridad', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'Los invitó al campo de nabos y el cerdito llegó antes.\nLos invitó al manzano y el cerdito se le escapó.\nEsperó escondido a la vuelta de la feria, y justo entonces,\ndesde lo alto de la cuesta, algo grande y redondo...', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'¡¡Rueda que rueda, rueda que rueda!!'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'Rueda que rueda, venía bajando con una fuerza tremenda.\nEra un bulto grande y redondo como no había visto nunca.', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'¡¡U-un monstruo!!'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'El lobo metió el rabo entre las patas y huyó hasta la cima de la montaña.\n"Al pie de la montaña vive un monstruo redondo..."\nY dicen que esa historia se contó entre los lobos de la montaña\ndurante mucho, mucho tiempo.\nY vivieron felices para siempre.'},

  pwh1:{art:'buta_renga', text:'El lobo se sentó delante de la puerta\ny dijo con una voz muy bajita:\n"...La verdad es que llevo muchos días sin comer nada."', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'Dentro de la casa, los 3 cerditos se miraron.\nNo abrieron la puerta. Pero por la ventana salió una voz.\n"Espera ahí un momento."', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'Por la ventana asomó con cuidado una sopa de verduras bien caliente.\nDentro había nabos y papas en trozos grandes.', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'Está caliente, sopla un poco antes'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'El famoso soplido del lobo\nya no fue una fuerza para derribar casas,\nsino una fuerza para enfriar la sopa caliente justo a punto.\nUna especialidad no sirve para una sola cosa.\nY vivieron felices para siempre.'},

  /* ================= La historia de la casa de ladrillos ================= */

  ps1:{art:'prenga_kamado', text:'Esta es la historia de una casa de ladrillos.\nCada ladrillo nace cocido despacio, uno a uno, en el fuego del horno.\nPor eso no se deshace a la primera de cambio.', next:'ps2'},
  ps2:{art:'buta_renga', text:'Un día llegó el cerdito pequeño\ny empezó a colocar los ladrillos con mucho cuidado.\nTac, tac. Poco a poco se iban convirtiendo en una casa.\n¿Qué se veía por la primera ventana terminada?', choices:[
    {t:'El cielo azul y ancho', go:'ps2r', set:{slife:'sora'}},
    {t:'El campo de nabos a las afueras del pueblo', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? 'Al otro lado de la ventana se extendía el campo de nabos.\nLa casa miraba con gusto cómo crecía un poquito cada día.'
    : 'Por el cielo azul que llenaba la ventana pasaban nubes blancas.\nSer una casa, pensó la casa, es algo bonito.', next:'ps3'},
  ps3:{art:'buta_naka', text:'Un día, los dos cerditos mayores\nentraron corriendo, sin aliento.\nPor lo visto, fuera había un lobo.', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'Ahora me toca a mí'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'El lobo tomó aire muy hondo y sopló con todas sus fuerzas.\nUna vez, dos veces, tres veces.\nNi un solo ladrillo de la pared se movió.', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'¡¡No se mueve ni un poquito!!'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'Cuando pasó aquella noche de tormenta, la casa se puso a pensar.\nDe ahora en adelante, ¿qué es lo que más quiero cuidar?', choices:[
    {t:'Resistir al viento y a la lluvia', go:'e_ps_mamoru'},
    {t:'Encender el fuego y mantener el calor', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'En las noches de viento y en las mañanas de lluvia, la casa no se mueve ni un poquito.\nLa casa sabe muy bien por qué nació tan firme.\nPorque dentro hay 3 cerditos a los que quiere proteger.\nY vivieron felices para siempre.'},
  pss1:{art:'buta_soup', text:'Llegó el invierno. Se encendió el fuego y la olla hervía a fuego lento.\nLa mamá cerdita vino también de visita\ny la casa entera se llenó de risas.', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'El trabajo de una casa es parar el viento y la lluvia.\nPero su trabajo más importante de todos\nes guardar bien las risas dentro.\nTambién hoy, de la casa de ladrillos salen voces cálidas.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_ES);

  T.ZK_EN.push(
    {section:'Los tres cerditos'},
    {id:'pb_seishi',   n:'La casita de ladrillos salvadora',   h:'El cuento conocido, desde la primera partida'},
    {id:'pb_genten',   n:'El verdadero cuento inglés',         h:'Cuando el lobo invita con palabras dulces...'},
    {id:'pb_kyoryoku', n:'Los 3 juntos desde el principio',    h:'En el cruce de caminos, elegir un mismo camino...'},
    {id:'pb_sonae',    n:'Vigilar y prepararse',               h:'Descubrir al lobo cuando aún está lejos...'},
    {id:'pw_taru',     n:'¡Un monstruo!',                      h:'En la historia del lobo hambriento, elegir las palabras dulces...'},
    {id:'pw_fuufuu',   n:'El verdadero uso del soplido',       h:'En la historia del lobo hambriento, hablar con sinceridad...'},
    {id:'ps_mamoru',   n:'No se mueve ni un poquito',          h:'En la historia de la casa de ladrillos, resistir al viento y la lluvia...'},
    {id:'ps_waraigoe', n:'Un recipiente para las risas',       h:'En la historia de la casa de ladrillos, encender el fuego...'}
  );

})();
