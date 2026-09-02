"use strict";
/* Spanish (neutral, understood in both Spain and Latin America) scenario, translated from the Japanese master;
   structure mirrors story_en.js (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Spanish. */

var SCENES_ES = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Había una vez, en cierto lugar, un anciano y una anciana.\nEl anciano iba al monte a recoger leña, y la anciana iba al río a lavar la ropa.', next:'m2'},

m2:{art:'momo_river', text:'Mientras lavaba la ropa en el río, desde río arriba llegó flotando un melocotón enorme, plas, plas, plas, plas.', choices:[
  {t:'Llevarlo a casa', go:'m3a', set:{open:'home'}},
  {t:'Abrirlo aquí mismo', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'"¡Upa, upa!", y la anciana llevó el melocotón hasta la casa.\nJunto con el anciano lo abrió enseguida, y entonces...', next:'c_paka'},
m3b:{art:'momo_river', text:'La anciana no podía esperar más. Decidió abrir el melocotón allí mismo, sobre una piedra de la orilla. Y entonces...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'¡¡CRAC!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? '¡De dentro saltó un niño lleno de vida!\nLa anciana tomó al bebé en brazos y corrió a casa.\nLlenos de alegría, el anciano y ella lo llamaron "Momotaro".'
  : '¡De dentro saltó un niño lleno de vida!\nLlenos de alegría, los dos llamaron "Momotaro" al niño nacido del melocotón.', next:'m5'},

m5:{art:'kids', text:'A Momotaro le encantaba jugar con los niños de la aldea.\n¿Qué hace hoy?', choices:[
  {t:'Luchar sumo', go:'m5a', set:{hobby:'sumo'}},
  {t:'Echar una carrera', go:'m5b', set:{hobby:'run'}},
  {t:'Ayudar en las tareas', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Hasta los niños más grandes rodaban por el suelo, uno tras otro.\n"¡Es el más fuerte de la aldea!", decían todos asombrados.', next:'m6'},
m5b:{art:'kids', text:'No había en ninguna parte un niño más rápido que Momotaro.\nCorría como el viento y a todos los dejaba boquiabiertos.', next:'m6'},
m5c:{art:'kids', text:'Hasta la leña más pesada era ligera en los brazos de Momotaro.\nAl anciano y a la anciana les era de gran ayuda.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro creció deprisa y se convirtió en un joven fuerte y amable.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'Aquella noche.\nEn la aldea ocurrió algo terrible.'}, then:'m7'},
m7:{art:'village_sad', text:'A la mañana siguiente.\nSe supo que los ogros de la Isla de los Ogros se habían llevado el tesoro de la aldea.\nLa gente de la aldea no sabía qué hacer.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro se puso de pie.\n"¡Yo iré a la Isla de los Ogros y traeré de vuelta el tesoro!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'La anciana le preparó las mejores bolitas de mijo de todo Japón.\nSe las colgó a la cintura y quedó listo para partir.'
  : 'La anciana dice que le preparará las mejores bolitas de mijo de todo Japón.\nY ahora, ¿qué hace?', choices:[
  {t:'Pedir que le prepare muchas bolitas', go:'m10', set:{dango:'full'}},
  {t:'Llevar solo unas pocas y viajar ligero', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'La mañana de la partida.\nLa anciana sacó dos cintas para la cabeza.\n¿Cuál se pone?', choices:[
  {t:'La cinta blanca', go:'m10r', set:{band:'white'}},
  {t:'La cinta roja', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Se ató bien la cinta roja, y en el fondo del pecho sintió un calor.\n"¡Me voy!"'
  : 'Se ató bien la cinta blanca, y su corazón quedó sereno y claro.\n"¡Me voy!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'¡¡Vamos por los ogros!!'}, then:'m11'},

m11:{art:'michi', text:'El camino se dividía en dos.\nUno cruzaba las montañas; el otro seguía la orilla del mar.\n¿Por cuál va?', choices:[
  {t:'Tomar el camino de la montaña', go:'m11a', set:{road:'yama'}},
  {t:'Tomar el camino junto al mar', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Desde lo alto de la montaña vio, muy lejos en el mar, una isla negra y solitaria.\nAsí que esa es la Isla de los Ogros...\nMomotaro apretó los puños.', next:'m12'},
m11b:{art:'umizoi', text:'Caminó por la playa de arena escuchando el sonido de las olas.\nA sus pies encontró una hermosa concha de color rosa melocotón.\nSerá un regalo para la anciana.', next:'m12'},

m12:{art:'dog', text:'Mientras caminaba con paso ligero, llegó un Perro.\n"Momotaro, ¿adónde vas? ¡Si me das una bolita de mijo, te acompaño!"', choices:[
  {t:'Darle una bolita', go:'c_dog_join', set:{dog:1}},
  {t:'"Lo siento, tengo prisa"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'¡¡El Perro se une al grupo!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Tengo pocas, pero vamos a partirla por la mitad."\n¡El Perro movió la cola de un lado a otro de pura alegría!'
  : '¡El Perro movió la cola de un lado a otro de pura alegría!\n"¡Te acompañaré hasta donde haga falta!"', next:'m13'},
m12n:{art:'dog', text:'Un poco desilusionado, el Perro se quedó mirando cómo Momotaro se alejaba.', next:'m13'},

m13:{art:'saru', text:'Luego, desde lo alto de un árbol, un Mono lo llamó.\n"¡Si me das una bolita de mijo, yo te guío por el camino!"', choices:[
  {t:'Darle una bolita', go:'c_saru_join', set:{saru:1}},
  {t:'"Lo siento, tengo que seguir"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'¡¡El Mono se une al grupo!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Aunque el trozo de bolita era pequeño, el Mono se puso muy contento.\nBajó del árbol de un salto y se dio un golpecito en el pecho.'
  : 'El Mono bajó del árbol de un salto y se dio un golpecito en el pecho.\n"¡Déjamelo a mí!"', next:'m14'},
m13n:{art:'saru', text:'El Mono agitó la mano desde lo alto del árbol.', next:'m14'},

m14:{art:'kiji', text:'Del cielo bajó volando un Faisán.\n"¡Si me das una bolita de mijo, iré a ver desde el aire cómo está la Isla de los Ogros!"', choices:[
  {t:'Darle una bolita', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Lo siento, ya tengo que irme"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'¡¡El Faisán se une al grupo!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'El Faisán comió su media bolita con mucho cuidado.\nLuego, contento, abrió las alas y dio una vuelta por el cielo.'
  : 'El Faisán, contento, abrió las alas y dio una vuelta por el cielo.\n"¡Del cielo me encargo yo!"', next:'m15'},
m14n:{art:'kiji', text:'El Faisán dio una gran vuelta y se alejó volando hacia las montañas.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'Al llegar al puerto había un barco pequeño.';
  if(n===0) t += '\nNo llevaba compañeros, pero Momotaro ya lo había decidido.';
  else if(n===1) t += '\nLos dos compañeros subieron a bordo y unieron sus fuerzas.';
  else t += '\nCon todos a bordo, el barco quedó lleno hasta el tope.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'¡¡A zarpaaar!!'}, then:'m16'},

m16:{art:'fune_night', text:'El mar estaba tranquilo de noche.\nBajo el cielo estrellado, Momotaro se puso a pensar.', choices:[
  {t:'Recordar el sabor de las bolitas de la anciana', go:'m17', set:{think:'dango'}},
  {t:'Pensar en el tesoro de la aldea', go:'m17', set:{think:'takara'}},
  {t:'Preguntarse cómo serán los ogros', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'El sabor dulce de las bolitas de mijo parecía darle valor.\nMañana todo saldrá bien, seguro.',
  takara:'Se le vinieron a la mente las caras de toda la aldea.\nTiene que recuperar el tesoro como sea.',
  oni:'¿Serán fuertes? ¿Darán miedo?\n...No lo sabrá hasta que los vea.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'Con la luz del amanecer, la isla se acercaba cada vez más.';
  if(f.first) t += '\nEl Faisán se adelantó volando y les mostró a todos dónde estaba la isla.';
  else if(f.kiji) t += '\nEl Faisán se adelantó volando y volvió enseguida.\n"¡Hay una sola puerta, muy grande! ¡Y por detrás hay un sendero entre las rocas!"';
  else t += '\nEn la proa del barco, Momotaro miraba la isla de frente.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'¡Ahí está, la Isla de los Ogros!'}, then:'m19'},

m19:{art:'onigashima', text:'En la isla llena de rocas se alzaba una enorme puerta negra.\nY ahora, ¿por dónde entra?', choices:f=>[
  {t:'Entrar de frente por la puerta principal', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Tomar el sendero de rocas que encontró el Faisán', go:'m20', set:{gate:'back'}}
    : {t:'Rodear la isla y buscar un camino por detrás', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro se plantó ante la puerta con la frente en alto.\n"¡Ogros! ¡Vengo a recuperar el tesoro de la aldea!"'
  : (f.kiji
    ? 'Guiados por el Faisán, subieron en silencio por el sendero de rocas de atrás.\nLos ogros que vigilaban aún no se habían dado cuenta.'
    : 'Entre las rocas encontraron un sendero estrecho.\nSubieron en silencio, y los ogros que vigilaban aún no se habían dado cuenta.'), next:'m21'},
m21:{art:'onigashima', text:'El corazón le empezó a latir con fuerza.\nBueno, ha llegado el momento.', choices:[
  {t:'Respirar hondo una vez', go:'m21r', set:{calm:1}},
  {t:'Lanzarse de golpe', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'Aire adentro, aire afuera.\nSu corazón se calmó de golpe. Muy bien, vamos.'
  : '¡Antes de poder pensarlo, su cuerpo ya se había puesto en marcha!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'¡Con un temblor de tierra apareció el jefe de los ogros!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'¡¡Dime quién eres!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'¡¡Devuélvenos el tesoro!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Vengo a recuperar el tesoro de la aldea. ¡Yo soy Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(Al recordar el sabor de las bolitas de mijo, el miedo se le fue sin saber por qué.)',
    takara:'(Toda la aldea está esperando. ¡No puedo perder!)',
    oni:'(Es grande. Parece fuerte. Pero... sus ojos parecen algo tristes.)'
  }[f.think] || '');
  t += '\n¿Cómo va a luchar?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'¡Todos juntos, ahora!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'¡Luchar con la espada!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'¡Perro, adelante!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'¡Mono, adelante!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'¡Faisán, adelante!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Guardar la espada y hablar', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'¡¡Todos juntos, ahora!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'¡¡El mordisco del Perro!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'¡¡El zarpazo del Mono!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'¡¡El picotazo del Faisán!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'¡¡El golpe de la espada!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'¡¡La embestida del Perro!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'¡¡El movimiento veloz del Mono!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'¡¡El picado del Faisán!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'¿¡Qué!?'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'¡¡Justo en el blanco!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'El Perro le mordió la pierna, el Mono le arañó la espalda y el Faisán le picoteó la cabeza a puro aleteo.\nNi siquiera el jefe pudo con el ataque de los 3 a la vez.\n"¡M-me rindo!"\nCuando unen sus fuerzas, no hay nada que temer.', next:'m24'},

rk:{art:'maitta', text:f=>'¡La espada de Momotaro fue rápida como un relámpago!\nLa maza de hierro del jefe salió despedida muy alto.\n"¡M-me rindo!"\n' + HOBBY_LINE_ES(f), next:'m24'},
rd:{art:'maitta', text:'¡El Perro salió corriendo como el viento y le dio un buen mordisco en la pierna al jefe!\n¡Pum! El jefe cayó sentado en el suelo.\n"¡M-me rindo!"\nMomotaro, que había confiado en el Perro, sacó pecho y sonrió.', next:'m24'},
rs:{art:'maitta', text:'El Mono saltaba de aquí para allá y, de repente, le quitó al jefe la maza de hierro.\n"¡M-me rindo!"\n¡Momotaro no pudo evitar aplaudir la rapidez del Mono!', next:'m24'},
rj:{art:'maitta', text:'¡El Faisán bajó del cielo en picado! ¡Aleteó y aleteó, y le tapó los ojos!\nAl jefe le dio vueltas la cabeza: "¡M-me rindo!"\nUn compañero del cielo siempre es de fiar. Momotaro agitó la mano bien alto.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'El jefe se encogió y pidió perdón.\n"Devolveremos el tesoro. Por favor, perdónanos..."';
  if(!f.first) t += '\nY ahora, ¿qué hace?';
  return t;
}, choices:[
  {t:'Volver a la aldea con el tesoro', go:'e_gaisen'},
  {t:'Preguntar por qué se lo llevaron', go:'m25'}
]},
m25:{art:'talk', text:'El jefe empezó a hablar poco a poco.\n"La Isla de los Ogros está llena de rocas y no crece nada. No queríamos que nuestros hijos pasaran hambre..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro no puso la mano en la espada y miró de frente.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'¡¡Quiero hablar!!'}, then:'t2'},
t2:{art:'talk', text:'El jefe abrió mucho los ojos y luego empezó a hablar poco a poco.\n"La Isla de los Ogros está llena de rocas y no crece nada. Por nuestros hijos, no nos quedó más remedio que tomar prestado el tesoro..."\nMomotaro escuchó al jefe y se puso a pensar.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Repartir las bolitas de mijo entre todos', go:'e_kibi'});
  c.push({t:'Prometer: devolver el tesoro y hacerse amigos de la aldea', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Momotaro volvió a la aldea con un carro cargado de tesoro.\n¡Toda la aldea estalló de alegría!\n';
  t += ({
    minna:'El Perro, el Mono y el Faisán encabezaron el desfile con la frente en alto.\nDe lo que hicieron los 3 se habló en la aldea durante mucho tiempo.',
    katana:'En la aldea no se hablaba de otra cosa que del magnífico manejo de la espada de Momotaro.',
    dog:'¿Y quién tiraba del carro? El Perro, que tanto había hecho ese día. Con la frente en alto, iba al frente del desfile.',
    saru:'El Mono llevaba al hombro la maza de hierro que había quitado, muy orgulloso.',
    kiji:'El Faisán dio una vuelta por el cielo de la fiesta y dejó caer una hermosa pluma.'
  }[f.style] || '');
  if(f.shell) t += '\nA la anciana le entregó también la concha de color rosa melocotón.\n"Se oye el mar dentro", dijo la anciana sonriendo.';
  t += '\nY vivieron felices para siempre.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro recibió el tesoro y, a cambio, decidió enviar arroz y papas para sembrar a la Isla de los Ogros.\nDesde la primavera siguiente, los ogros venían a ayudar en las labores del campo de la aldea.\nY en la fiesta de la aldea retumbaban los tambores de los ogros.';
  if(f.shell) t += '\nLa anciana hacía sonar la concha que le habían traído al ritmo de los tambores.';
  t += '\nY vivieron felices para siempre.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"Devolveremos el tesoro. Es una promesa."\nMomotaro y el jefe entrelazaron los meñiques.\nDesde entonces, la Isla de los Ogros y la aldea empezaron poco a poco a visitarse.\nMomotaro había vuelto sin pelear, y la gente de la aldea lo elogió: "Eso sí que tiene mérito".';
  if(f.shell) t += '\nCuando le mostró la concha que le traía, la anciana sonrió de oreja a oreja.';
  t += '\nY vivieron felices para siempre.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Toma, son las mejores bolitas de mijo de todo Japón. Vamos a comerlas entre todos."\nLos ogros se llenaron la boca de bolitas y se les cayeron lagrimones.\n"Nunca en la vida habíamos comido algo tan rico..."\nMomotaro y los ogros apartaron las rocas juntos y decidieron hacer un campo de cultivo.\nEs el final más extraño y el más cálido de todos.\nY vivieron felices para siempre.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Esta es la historia de Aka, un ogro joven que vive en la Isla de los Ogros.\nLa Isla de los Ogros está llena de rocas. Aunque hagan un campo, no crece nada.', next:'o2'},
o2:{art:'oni_village', text:'¿Qué trabajo hace Aka hoy?', choices:[
  {t:'Traer agua desde el pie del acantilado', go:'o2r', set:{owork:'mizu'}},
  {t:'Sacar las rocas del campo', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Con el balde pesado al hombro, sube una y otra vez por el camino del acantilado.\nArriba lo esperan sus hermanitos con la garganta seca.'
  : 'Aparta una roca enorme, pero la tierra de debajo está dura como piedra.\nAun así, Aka cree que algún día aquí habrá un campo de cultivo.', next:'o3'},
o3:{art:'oni_dinner', text:'Para la cena solo hay una sopa de arroz muy aguada.\nSu hermano pequeño Midori dijo:\n"Hermano, tengo hambre..."', choices:[
  {t:'Decirle: "Cuando llegue la primavera comeremos mucho"', go:'o3r', set:{care:'hagemasu'}},
  {t:'Darle la mitad de su propia sopa', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"La parte de mi hermano también está rica."\nMidori sonrió de oreja a oreja.\nA Aka le quedó la panza un poco vacía, pero por dentro sintió calor.'
  : 'Midori asintió despacio y se comió el resto de la sopa con mucho cuidado.\nAunque la primavera todavía queda lejos.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'Aquella noche.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'El jefe de los ogros reunió a todos y dijo:\n"Iremos a tomar prestado el tesoro de la aldea. Es para que los niños pasen el invierno."\nA Aka se le revolvió algo por dentro.\n¿Qué hace?', choices:[
  {t:'Detenerlo: "¡Eso es robar!"', go:'c_dorobo'},
  {t:'Callar e ir con ellos', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'¡¡Eso es robar!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Todo alrededor se quedó en completo silencio.\nEl jefe estuvo callado mucho, mucho tiempo...\n"¿Y entonces qué debemos hacer?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka pensó con todas sus fuerzas.', choices:[
  {t:'Ir a pedir ayuda a la gente de la aldea', go:'o7a'},
  {t:'Hacer un campo con nuestras propias manos', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"Bajamos la cabeza y les pedimos que compartan su comida. A cambio, se lo agradecemos con la fuerza de los ogros."\nEl jefe cruzó sus gruesos brazos y asintió despacio.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'Al día siguiente, los ogros subieron a un barco y se dirigieron a la aldea.\nNo llevaban armas para pelear, sino canastas de uvas silvestres en los brazos.\nEso pedía mucho, mucho más valor que llevarse un tesoro.\nY lo que respondió la aldea... eso ya es otra historia.'},
o7b:{art:'oni_village', text:'"¡Apartemos todas las rocas y hagamos un campo! ¡Con la fuerza de los ogros podemos!"\nDesde ese día, todos los ogros de la isla empezaron a acarrear rocas.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'¡¡Fuerza de ogro al máximo!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'Las rocas eran grandes como montañas y el trabajo no se terminaba nunca.\nPero es curioso: el sudor que derramaban todos juntos no pesaba nada.\nLlegó la primavera y en el campo salieron unos brotes pequeñitos.\nMidori saltaba y brincaba de alegría.\nY vivieron felices para siempre.'},

o5b:{art:'oni_raid', text:'Aka subió al barco con el jefe y los demás.\nAl llegar a la aldea, Aka no pudo moverse de la cubierta.\nA lo lejos temblaban unas luces, y le pareció oír a alguien llorando.', next:'o6b'},
o6b:{art:'oni_takara', text:'Ya de vuelta en la isla, a Aka le seguía dando vueltas todo por dentro.\nDelante del montón de tesoro, Aka se puso a pensar.', choices:[
  {t:'Ir a devolver a escondidas una pieza del tesoro', go:'o7c'},
  {t:'Dejar pasar la noche sin hacer nada', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka tomó una pieza pequeña del tesoro y sacó el barco al mar de noche.\nLa dejó con cuidado en la playa de la aldea y, justo cuando se iba a marchar...\n"Señor ogro, ¿viniste a devolver eso?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'¿¡Me descubrieron!?'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'Una niña pequeña lo miraba fijamente.\nCon el corazón acelerado, Aka asintió con la cabeza.\nLa niña sonrió y dijo en voz bajita:\n"Gracias. Será nuestro secreto."\nLa noche era fría, y aun así Aka sentía el pecho calentito.'},

o7d:{art:'oni_night', text:'Pasaron muchas noches sin que Aka pudiera hacer nada.\nUna noche en que no lograba dormir, mirando el mar desde lo alto del acantilado, vio que desde lejos se acercaba un barco pequeño.\n¿Quién irá en ese barco?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'Amaneció.'}, then:'o8'},
o8:{art:'oni_village', text:'En toda la isla se armó un gran alboroto.\n"¡Un humano! ¡Un humano con una cinta en la cabeza viene hacia aquí!"\nA Aka le dio un vuelco el corazón.\n¿Qué hace?', choices:[
  {t:'Esconder a Midori detrás de las rocas', go:'o9a', set:{guard:'midori'}},
  {t:'Correr junto al jefe', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Shhh. Aquí vas a estar bien."\nAka apretó con fuerza la manita de Midori.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'El jefe agarraba su maza de hierro y miraba fijamente hacia la puerta.\nSu espalda se veía más grande que de costumbre.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'La pelea duró un abrir y cerrar de ojos.\nLa maza del jefe salió despedida, y Aka miraba desde su escondite conteniendo la respiración.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'¡¡M-me rindo!!'}, then:'o11'},
o11:{art:'oyabun', text:'El joven de la cinta en la cabeza guardó la espada y está hablando de algo.\nQuizá ahora Aka pueda dirigirle la palabra.\n¿Qué hace?', choices:[
  {t:'Reunir valor y salir del escondite', go:'e_o_asa'},
  {t:'Quedarse escondido y verlos partir', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"E-esto... ¡Te ayudo a cargar el tesoro!"\nAl ver a Aka salir de un salto de su escondite, el joven abrió mucho los ojos.\nLuego sonrió y dijo:\n"Gracias. Eres un ogro valiente."\nEl sol de la mañana los iluminó a los dos con su calor.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'El valor para hablarle no llegó.\nEl barco cargado de tesoro se iba haciendo pequeño al otro lado del mar.\nPero Aka tomó una decisión.\nLa próxima vez que se vean, dirá "gracias" y también "perdón".\nY esa "próxima vez" llegará, seguro, en un futuro no muy lejano.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Esta es otra historia más: la historia de un Faisán que vive en las montañas.\nEl Perro es fuerte. El Mono es un maestro trepando árboles.\nÉl, en cambio, es pequeño y no tiene fuerza...\nAl Faisán siempre le faltaba un poquito de confianza en sí mismo.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'¿Con unas alas tan pequeñas\nno se podrá hacer nada?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Hoy también sale a pasear solo por el cielo.\n¿Por dónde vuela?', choices:[
  {t:'Volar por encima de las montañas', go:'k2r', set:{kfly:'yama'}},
  {t:'Volar hacia el mar', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Visto desde arriba de las montañas, la aldea parece una caja de juguetes.\nDe las chimeneas subía el humo, pof, pof.'
  : 'Sobre el mar el viento sopla fuerte y las plumas suenan a puro aleteo.\nA lo lejos se veía una isla negra, ella sola.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'Un día vio, por el camino de abajo, una comitiva curiosa.\nUn joven con una cinta en la cabeza, un Perro y un Mono.\nParecían estar muy contentos.', choices:[
  {t:'Animarse y hablarles', go:'k4a'},
  {t:'Mirar un poco más desde el cielo', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'El Faisán bajó aleteando y dijo con la voz más grande que pudo:\n"¿M-me pueden llevar a mí también?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Mientras los seguía en silencio desde el cielo, el joven se dio cuenta y lo saludó con la mano.\n"¡Amigo del cielo, ven con nosotros!"', next:'k5'},
k5:{art:'kiji_join', text:'"Toma, una bolita de mijo."\nEstaba tan dulce que era para chuparse los dedos.\n"A-a cambio, ¡del cielo me encargo yo!"\ndijo el Faisán con la voz más grande que pudo.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'¡¡El Faisán se une al grupo!!'}, then:'k6'},
k6:{art:'fune', text:'En el barco, el Faisán se dio cuenta de algo.\nEl único que puede volar sobre el mar es él.\nNi el Perro ni el Mono pueden hacerlo.', choices:[
  {t:'Volar alto y ver la isla entera', go:'k6r', set:{kscout:'high'}},
  {t:'Volar bajo y examinar la puerta de cerca', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Desde lo alto del cielo se veía la forma entera de la isla.\nTambién descubrió que detrás de la puerta había un sendero estrecho entre las rocas.\n"¡Amigos, hay un camino por detrás!"'
  : 'Voló rozando las olas hasta llegar delante de la puerta.\nSe fijó bien en cuántos ogros vigilaban y en lo grandes que eran sus mazas.\n"¡Amigos, ya sé perfectamente qué nos espera!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'¡Empezó la pelea con el jefe de los ogros!\nLa maza del jefe cayó silbando sobre el Perro.\nAl Faisán le dio un vuelco el corazón.\n¿Qué hace?', choices:[
  {t:'¡Lanzarse a taparle los ojos!', go:'c_kwaza1'},
  {t:'¡Avisar a todos a gritos!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'¡¡El picado del Faisán!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'¿¡Qué!?'}, then:'k8a'},
k8a:{art:'maitta', text:'Sin pensarlo, el Faisán se lanzó delante de la cara del jefe.\n¡Aleteó y aleteó, y le tapó los ojos!\nEn ese momento el Perro escapó de un salto y el Mono le quitó la maza.\n"¡M-me rindo!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'¡¡Perro, detrás de ti!!'}, then:'k8b'},
k8b:{art:'maitta', text:'Una voz enorme, como el eco de las montañas, resonó por todo el lugar de la pelea.\nEl Perro esquivó de un salto y la espada de Momotaro brilló.\n"¡M-me rindo!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Después de la pelea, Momotaro dijo:\n"El mayor mérito de hoy es del Faisán."\nEl Perro y el Mono asintieron con ganas.\nEn el fondo de su pequeño pecho sintió de pronto un calor.\nAunque uno sea pequeño, hay cosas que puede hacer.\nEl Faisán ya no baja la cabeza.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Sin ese aviso, la cosa habría acabado mal", dijo el Perro.\n"Vigilar el cielo solo lo puede hacer el Faisán", dijo el Mono.\nAl Faisán le dio vergüenza y se tapó la cara con un ala.\nAunque uno sea pequeño, hay cosas que puede hacer.\nEl Faisán ya no baja la cabeza.'}

};

function HOBBY_LINE_ES(f){
  return {
    sumo:'La fuerza de la cintura, entrenada en el sumo, le sirvió justo en el momento decisivo.',
    run:'Las piernas, entrenadas en las carreras, no se rinden ante nadie.',
    help:'Los brazos, entrenados con las tareas de cada día, no eran de adorno.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (ES) ================= */
var ZK_ES = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triunfo: todos juntos',    h:'Luchar con los 3 compañeros a la vez...'},
  {id:'a_katana', n:'Triunfo: la espada',       h:'Luchar con la espada y llevar el tesoro a casa...'},
  {id:'a_dog',    n:'Triunfo: el Perro',        h:'Dejar luchar al Perro y llevar el tesoro a casa...'},
  {id:'a_saru',   n:'Triunfo: el Mono',         h:'Dejar luchar al Mono y llevar el tesoro a casa...'},
  {id:'a_kiji',   n:'Triunfo: el Faisán',       h:'Dejar luchar al Faisán y llevar el tesoro a casa...'},
  {id:'b_naka',   n:'Paz con los ogros',        h:'Después de ganar, preguntar por el motivo...'},
  {id:'c_yaku',   n:'La promesa hablada',       h:'Ir sin compañeros y guardar la espada...'},
  {id:'d_kibi',   n:'El milagro de las bolitas', h:'Ir solo con muchas bolitas y guardar la espada...'},
  {id:'o_negai',  n:'Las canastas de uvas silvestres', h:'En la historia del ogro, intervenir y elegir pedir ayuda...'},
  {id:'o_hatake', n:'El campo de la Isla de los Ogros', h:'En la historia del ogro, intervenir y elegir el campo...'},
  {id:'o_kaesu',  n:'El secreto de la playa nocturna', h:'Ir en silencio y luego devolver el tesoro...'},
  {id:'o_asa',    n:'La promesa del amanecer',  h:'La mañana en que nada salió, reunir valor...'},
  {id:'o_miokuri',n:'Algún día, las palabras',  h:'Sin valor, ver partir el barco...'},
  {id:'k_hero',   n:'El pequeño héroe',         h:'En la historia del Faisán, lanzarse...'},
  {id:'k_voice',  n:'El vigía del cielo',       h:'En la historia del Faisán, gritar con todas las fuerzas...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_ES, ZK_ES };
