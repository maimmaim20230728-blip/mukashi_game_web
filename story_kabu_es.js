"use strict";
/* El nabo gigante - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "¡¡Tira, tira!!" / "¡¡Plop, fuera!!" */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  /* sujeto (nominativo) / "a" + artículo contraído para "agarrarse a ..." */
  var NAMES_ES = { baa:'la abuela', mago:'la nieta', inu:'el perro', neko:'la gata', nezumi:'el ratón', jii:'el abuelo' };
  var A_ES = { baa:'a la abuela', mago:'a la nieta', inu:'al perro', neko:'a la gata', nezumi:'al ratón', jii:'al abuelo' };

  function chainEs(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return 'El abuelo agarró el nabo.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(NAMES_ES[order[i]]) : NAMES_ES[order[i]]) + ' se agarró ' + A_ES[order[i+1]] + ',\n';
    }
    t += 'y el abuelo se agarró bien fuerte al nabo.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_ES = {

  /* ================= El nabo gigante ================= */

  kb1:{art:'kabu_hata', text:'Esta es la historia de un campo muy, muy ancho.\nUna mañana de primavera, el abuelo sembró una semilla de nabo.\n"Sé un nabo dulce, muy dulce. Sé un nabo grande, muy grande."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Empiezan los cuidados de cada día del abuelo.\n¿Qué es lo que más va a cuidar?', choices:[
    {t:'Regarlo bien todos los días', go:'kb2r', set:{care:'mizu'}},
    {t:'Hablarle con amabilidad todos los días', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Crece grande, crece grande."\nCada vez que le hablaba, parecía que las hojas se mecían de alegría.'
    : 'Con la luz del sol y mucha agua,\nlas hojas crecían y crecían sin parar.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'El nabo creció y creció, hasta hacerse más alto que el abuelo.\nUn nabo así no lo había visto nadie en el pueblo.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Por fin llegó el día de la cosecha.';
    if(f.first) return t + '\nEl abuelo se remangó.';
    return t + '\n¿Qué hará?';
  }, choices:f=>{
    var c = [{t:'Sacarlo ahora mismo', go:'kb5'}];
    c.push({t:'Dejarlo crecer aún más', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Pedírselo al nabo', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'¡El abuelo agarró el nabo y tiró con todas sus fuerzas!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'¡¡Tira, tira!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'El nabo no se movió ni un poco.';
    if(f.first) return t + '\n"Abuela, ven a echarme una mano."';
    return t + '\n¿A quién va a buscar?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Ir a buscar '+A_ES[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_ES[f.c2])+' llegó y se puso al final de la fila.\n'+chainEs(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'¡¡Tira, tira!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'El nabo seguía sin moverse ni un poco.';
    if(f.first) return t + '\n"Ahora vamos a buscar a la nieta."';
    return t + '\n¿A quién buscan ahora?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Ir a buscar '+A_ES[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_ES[f.c3])+' llegó y se puso al final de la fila.\n'+chainEs(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'¡¡Tira, tira!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'Las hojas solo se movieron de un lado a otro.';
    if(f.first) return t + '\n"Bien, vamos a buscar también al perro."';
    return t + '\n¿A quién buscan ahora?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Ir a buscar '+A_ES[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_ES[f.c4])+' llegó y se puso al final de la fila.\n'+chainEs(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'¡¡Tira, tira!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Crac. Parece que se movió un poquito...';
    if(f.first) return t + '\n"¡Gata, ven tú también!"';
    return t + '\nVamos a buscar a la última ayuda.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Ir a buscar '+A_ES[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_ES[f.c5])+' llegó y se puso al final de la fila.\n'+chainEs(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'¡¡Tira, tira!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'Está a punto de salir, pero no sale. Falta muy poquito.\nPero ya no queda nadie a quien llamar.';
    if(f.first) return t;
    return t + '\n¿Qué hacen ahora?';
  }, choices:[
    {t:'No rendirse. ¡Una vez más!', go:'kb10', set:{nezumi:1}},
    {t:'Dejarlo por hoy', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Entonces la gata salió corriendo\ny trajo a un ratón pequeño, muy pequeño.\n"Necesitamos tu fuerza."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'¿Yo...? ¿De verdad yo?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'¡¡Tira, tira!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'El nabo salió volando hacia el cielo,\ny todos se cayeron sentados al suelo.\nAy, ay... pero en cada cara había una gran sonrisa.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Por fin, el nabo salió.\nEl último empujón lo dio el ratón más pequeño de todos.\nUna fuerza pequeña, unida a la de todos, es la más grande del mundo.\nY vivieron felices para siempre.'},

  /* ---- Let it grow → La fiesta de todo el pueblo ---- */
  km1:{art:'kabu_sodatsu', text:'"Ya que ha llegado hasta aquí, que se haga todo lo grande que pueda."\nLo regaba, le cantaba, y día tras día siguió cuidándolo.\nAl final, el nabo se hizo más grande que la casa del abuelo.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'Así de grande, la familia sola no podía con él.\nEl abuelo subió a la colina y gritó:\n"¡Eh! ¡Gente del pueblo! ¡Vengan a echar una mano!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'¡¡Todo el pueblo, a reunirse!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'Vino el panadero, vino el molinero y vinieron los niños.\nToda la gente del pueblo se puso en una sola fila.\nY al final del todo estaba, por supuesto, el ratón pequeño.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'¡¡Tira, tira!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'El nabo que salió fue a parar a una olla grande, muy grande.\nDetrás del vapor resonaban las risas de todos.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'El nabo más grande del mundo se convirtió en la fiesta más grande del mundo.\nLa sopa dulce de nabo calentó todas las barrigas del pueblo.\n"¡El año que viene, otro bien grande, por favor!"\nY vivieron felices para siempre.'},

  /* ---- Ask the turnip → El corazón del nabo ---- */
  ko1:{art:'kabu_talk', text:'El abuelo se sentó delante del nabo.\n"Le he hablado todos los días. Seguro que mi voz le llega."\n"Querido nabo. ¿No querrías salir ya?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'Las hojas se mecieron una vez.\nLa tierra se abultó poco a poco y...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'¿Me llamaste?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"Eras tú quien me hablaba todos los días, ¿verdad?\nTe reconozco muy bien por la voz.\nEstá bien. Entonces, allá voy. Uno, dos..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'El nabo salió de un salto por su propia voluntad.\nAunque no haya fuerza de por medio, el corazón llega igual.\nEl "crece grande" de cada día era una palabra mágica.\nY vivieron felices para siempre.'},

  /* ---- Call it a day → Mañana otra vez entre todos ---- */
  ka1:{art:'kabu_yuyake', text:'"Lo dejamos por hoy. Todos han trabajado mucho."\nEn el campo, bajo el atardecer, tomaron té caliente.\nY el nabo también descansó tranquilo hoy.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Mañana lo sacamos otra vez, entre todos."\nSe lo dijeron y volvieron cada uno a su casa.\nNo pasa nada si hay un día en que no sale.\nPorque ahora hay un mañana que esperar con ganas.\nY vivieron felices para siempre.'},

  /* ================= La historia del nabo ================= */

  kt1:{art:'kt_tsuchi', text:'Esta es la historia de lo que pasa bajo la tierra.\nYo soy el nabo. Crezco calentito en medio del ancho campo.\nCada día oigo desde arriba la voz del abuelo.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Bajo la tierra también hay muchas cosas divertidas.\n¿Qué hago hoy?', choices:[
    {t:'Charlar con la lombriz', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Saborear despacio el sabor del sol', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Otra vez has crecido", dice la lombriz.\n"Je, je. Es que todos los días oigo una voz buena."'
    : 'Desde las hojas baja despacito el sabor del sol.\nEs dulce, calentito, y da un poquito de sueño.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'Y entonces, un día.\n¡Tirón!\n"¡Ay, ay! ¿Qué pasa? ¿Qué pasa?"\nMi cuerpo sube tirado hacia arriba. Ha llegado el día de la cosecha.', next:'kt4'},
  kt4:{art:'kt_up', text:'Y ahora, ¿qué va a hacer el nabo?', choices:[
    {t:'¡Todavía no quiero salir! Aguantar', go:'kt5'},
    {t:'Muy bien, ver el mundo de fuera', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"¡Quiero quedarme aquí un poco más!"\nEl nabo apretó su raíz y aguantó con todas sus fuerzas.\nArriba: "¡Tira, tira!". Cada vez se oía más y más gente.', next:'kt6'},
  kt6:{art:'kt_up', text:'Dos, tres, cuatro...\nEl nabo siguió aguantando, y al final oyó una voz muy pequeña.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Por favor, señor nabo'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Contra la fuerza puedo aguantar todo lo que haga falta.\nPero si me lo pide una voz tan pequeña...\n"...Bueno, qué le voy a hacer."\nY el nabo aflojó su raíz, sin más.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'El cielo estaba alto y las sonrisas de todos brillaban.\n"Vaya. Aquí fuera tampoco se está mal."\nEl nabo, que no había cedido ante ninguna fuerza grande,\nno pudo con una petición pequeña.\nY vivieron felices para siempre.'},

  ktj1:{art:'kt_up', text:'"Por cierto, ¿de qué color será el cielo?"\nAl nabo le entró un cosquilleo por todo el cuerpo.\n"Está decidido, salgo yo solo. Uno, dos..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'Salió disparado con tanto impulso\nque todos se cayeron sentados a la vez.\n"¡Así que el cielo es así de ancho!"\nSalir porque uno mismo lo decide sienta de maravilla.\nY vivieron felices para siempre.'},

  /* ================= La historia del ratón ================= */

  kn1:{art:'kn_naya', text:'Esta es la historia de un ratón pequeño que vive en un rincón del granero.\nLos trabajos de fuerza no se le dan bien. No puede cargar cosas pesadas.\nPero hoy también corretea de aquí para allá muy animado.', next:'kn2'},
  kn2:{art:'kn_naya', text:'¿Qué hace hoy al mediodía?', choices:[
    {t:'Buscar un trocito de queso', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Tomar el sol junto a la ventana', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'El rayo de sol de la ventana es el mejor asiento del mundo.\nCon los bigotes bien estirados, cabecea y cabecea.'
    : 'Al fondo del granero huele muy bien.\nEncontró un trocito de queso y tiene los cachetes bien llenos.', next:'kn3'},
  kn3:{art:'kn_neko', text:'En eso llegó la gata.\nCualquier otro día habría salido corriendo. Pero hoy la gata agachó la cabeza con cortesía.\n"Vengo a pedirte un favor. Necesitamos tu fuerza."', choices:[
    {t:'Da miedo, pero ir con ella', go:'kn3a'},
    {t:'Preguntar: "¿De verdad valgo yo?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Con el corazón latiendo fuerte, el ratón siguió a la gata.\nAl llegar al campo, todos esperaban con cara de apuro.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"Justo porque eres pequeño", dijo la gata.\n"Dicen que al final de la fila va el más ligero."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'El ratón se puso al final de la fila.\nDelante, una hilera de espaldas grandes.\n¿Qué puede hacer un ratón pequeño?', choices:[
    {t:'Tirar fuerte con la cola', go:'kns1'},
    {t:'Marcar el ritmo con voz bien fuerte', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'El ratón enredó su cola en la cola de la gata\ny tiró con todo su cuerpecito. ¡Con todas sus fuerzas!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'¡¡Tira, tira!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"El último empujón fue tuyo", dijo el abuelo.\nUna cola pequeña y una hazaña grande.\nDesde ese día, el ratón ya no come en el rincón del granero,\nsino en medio de todos.\nY vivieron felices para siempre.'},

  kno1:{art:'kn_retsu', text:'¡Si la fuerza no sirve, queda la voz!\nEl ratón tomó aire hondo y gritó con todo lo que tenía.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'¡Uno, dos! ¡¡Tira!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'¡¡Plop, fuera!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Gracias a esa voz, la fuerza de todos se juntó en un solo momento.\n"Qué buen ritmo llevabas", dijo la abuela riendo.\nAunque la fuerza sea pequeña, hay una voz que pone a todos de acuerdo.\nEl ratón sacó pecho y dijo: iii, iii.\nY vivieron felices para siempre.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'La abuela llegó y se puso detrás del abuelo.\nLa abuela se agarró al abuelo, y el abuelo se agarró bien fuerte al nabo.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'¡¡Tira, tira!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'El nabo seguía sin moverse ni un poco.\nAhora llegó la nieta y se puso al final de la fila.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'¡¡Tira, tira!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'Las hojas solo se movieron de un lado a otro.\nAhora llegó el perro corriendo y se puso al final de la fila.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'¡¡Tira, tira!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Crac. Parece que se movió un poquito...\nAhora llegó la gata de un salto y se puso al final de la fila.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'¡¡Tira, tira!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'Está a punto de salir, pero no sale. Falta muy poquito.\nEntonces la gata trajo a un ratón pequeño, muy pequeño.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_ES);

  T.ZK_EN.push(
    {section:'El nabo gigante'},
    {id:'kb_seishi',  n:'Por fin salió',                     h:'La historia original, la del primer recorrido'},
    {id:'kb_matsuri', n:'La fiesta de todo el pueblo',       h:'Si esperas sin sacarlo y lo dejas crecer más...'},
    {id:'kb_onegai',  n:'El corazón del nabo',               h:'Si le hablas todos los días mientras crece...'},
    {id:'kb_ashita',  n:'Mañana otra vez entre todos',       h:'El día que no sale, si no fuerzas las cosas...'},
    {id:'kt_koe',     n:'Vencido por una voz pequeña',       h:'En la historia del nabo, si sigues aguantando...'},
    {id:'kt_jibun',   n:'Fuera de un salto, por sí mismo',   h:'En la historia del nabo, si te da curiosidad el exterior...'},
    {id:'kn_shippo',  n:'La hazaña de la cola pequeña',      h:'En la historia del ratón, si usas la cola...'},
    {id:'kn_ondo',    n:'El pequeño que marca el ritmo',     h:'En la historia del ratón, si usas la voz...'}
  );

})();
