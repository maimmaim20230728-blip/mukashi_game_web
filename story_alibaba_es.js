"use strict";
/* Ali Baba and the Forty Thieves - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var ALIBABA_ES = {

  /* ================= Ali Baba y los 40 ladrones ================= */

  ab1:{art:'ab_mori', text:'Esta es la historia de Ali Baba, que vivía en una ciudad de Persia.\nAli Baba era un leñador pobre.\nCada día llevaba sus 2 burros al bosque a recoger leña.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Hoy también Ali Baba estaba recogiendo leña en el bosque.';
    if(f.first) return t;
    return t + '\n¿Cuánta leña recoge?';
  }, choices:[
    {t:'2 haces, y volver pronto a casa', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 haces, y volver con calma', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Cargó 4 haces de leña sobre los lomos de los burros.\nHoy pensaba volver a casa con calma.'
    : 'Cargó 2 haces de leña sobre los lomos de los burros.\nHoy pensaba volver pronto a casa.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'En ese momento oyó el ruido de los cascos de unos caballos.\nAli Baba se escondió arriba de un árbol.\n40 hombres se reunieron delante de una roca grande.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 hombres...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'El hombre que iba delante le habló a la roca.\n"¡Ábrete, Sésamo!"\nEntonces la roca se abrió con un ruido sordo.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'¡¡Ábrete, Sésamo!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'Los hombres entraron.\nAl cabo de un rato salieron: "¡Ciérrate, Sésamo!"\nLa roca se cerró y los hombres se marcharon.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba bajó del árbol y se puso delante de la roca.\n"¡Ábrete, Sésamo!"\nLa roca se abrió, y dentro estaba todo lleno de monedas de oro y tesoros.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'El brillo del tesoro'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba llenó unos sacos de monedas de oro y los cargó en los burros.\nSolo lo que podía llevarse a casa.\n"¡Ciérrate, Sésamo!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'Al llegar a casa, Ali Baba se lo contó a su esposa.\nLos dos quisieron contar las monedas de oro, pero eran demasiadas para contarlas.\n"Vamos a pedir prestada una medida en la casa de mi hermano."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Su hermano Cassim era un mercader rico.\nLa esposa de Cassim untó a escondidas un poco de grasa en el fondo de la medida.\nCuando la medida volvió, había 1 moneda de oro pegada en el fondo.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim le preguntó a Ali Baba por ello.\nAli Baba se lo contó todo: lo de la roca y lo de las palabras mágicas.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'A la mañana siguiente, Cassim fue a la roca con 10 burros.\n"¡Ábrete, Sésamo!"\nLa roca se abrió.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'¡¡Ábrete, Sésamo!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim llenó sus sacos de monedas de oro.\nPero cuando quiso salir, se le habían olvidado las palabras mágicas.\n"¡Ábrete, Cebada!" "¡Ábrete, Haba!"\nLa roca no se abría.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'Esa noche, Cassim no volvió a casa.\nLa esposa de Cassim llegó llorando a la casa de Ali Baba.';
    if(f.first) return t;
    return t + '\n¿Qué hace Ali Baba?';
  }, choices:[
    {t:'Esperar hasta la mañana', go:'ab14'},
    {t:'Ir a la roca esa misma noche', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'Por la mañana, Ali Baba fue a la roca.\n"¡Ábrete, Sésamo!"\nDentro había silencio. Los ladrones habían vuelto antes que él.\nCassim ya no se movía.\nAli Baba puso a su hermano sobre un burro y lo llevó a casa en silencio.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'En la casa de Ali Baba había una sirvienta llamada Morgiana.\nEra una persona a la que no se le escapaba nada.\nPara preparar el funeral, Morgiana llamó a un zapatero anciano de la ciudad.\nPara que no pudiera aprenderse el camino, le vendó los ojos y lo guio hasta la casa.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'La venda, por favor'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'Cuando los ladrones volvieron a la roca, se dieron cuenta de que Cassim ya no estaba.\n"Alguien más lo sabe."\nEl jefe mandó a uno de sus hombres a la ciudad.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'El ladrón encontró al zapatero anciano.\nCon los ojos vendados, el anciano recordó el camino con los pies.\nY el ladrón hizo una marca blanca en la puerta de la casa de Ali Baba.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana se dio cuenta de la marca.\nY puso la misma marca en la casa de al lado, y en la siguiente.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'¡¡Marcas por todas partes!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'Cuando los ladrones llegaron, no sabían cuál era la casa.\nEl jefe decidió ir él mismo.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'El jefe se disfrazó de mercader de aceite.\n19 burros, y 38 tinajas grandes.\nSolo 1 tenía aceite dentro; en las demás se escondía un ladrón en cada una.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Soy un mercader de aceite de paso. ¿Me deja pasar aquí la noche?"\nAli Baba lo acogió con amabilidad.\nLas tinajas se colocaron en fila en el patio.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'... Cuando llegue la noche'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'Por la noche, a Morgiana se le acabó el aceite de la lámpara y fue a sacar un poco de las tinajas del patio.\nEntonces, de dentro de una tinaja salió una voz.\n"¿Ya es la hora?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'... Dentro de la tinaja hay alguien'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana respondió con voz grave.\n"Todavía no."\nY después revisó las 37 tinajas, una por una.';
    if(f.first) return t;
    return t + '\n¿Qué hace Morgiana?';
  }, choices:[
    {t:'Hervir el aceite', go:'ab24'},
    {t:'Traer cuerdas y llamar a la guardia', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana hirvió el aceite en una olla grande.\nY después echó el aceite hirviendo en cada una de las tinajas.\nDentro de las tinajas se hizo el silencio.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'En mitad de la noche, el jefe salió al patio y golpeó las tinajas.\nNo hubo respuesta.\nEl jefe huyó solo.', next:'ab26'},

  ab26:{art:'ab_ie', text:'Por la mañana, Morgiana se lo contó todo a Ali Baba.\nAli Baba le dijo a Morgiana:\n"Desde hoy eres libre."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Unos días después, el jefe volvió, disfrazado de mercader.\nSe había hecho amigo del hijo de Ali Baba y lo habían invitado a la casa.\nMorgiana se acordaba de esa cara.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Esa cara la recuerdo'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Después de la comida, Morgiana bailó para ellos.\nEn el cinturón llevaba un puñal.';
    if(f.first) return t;
    return t + '\n¿Qué hace Morgiana?';
  }, choices:[
    {t:'Bailar hasta el final del baile', go:'ab29'},
    {t:'Detener el baile y hablar de las marcas', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'Al final del baile, Morgiana se detuvo delante del mercader.\nEl jefe cayó.\nA Ali Baba, que estaba asombrado, Morgiana le dijo con calma:\n"Este hombre era aquel jefe."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba le dijo a Morgiana:\n"Ya eres libre. Lo que hagas a partir de ahora lo decides tú."\nMorgiana lo pensó un rato y respondió:\n"Me quedo aquí. Seré parte de esta casa."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Después de aquello, Morgiana y el hijo de Ali Baba se unieron, y ella pasó a ser de esta casa.\nEl tesoro de la roca lo usaron con modestia.\nY vivieron felices para siempre.'},

  /* ---- Ir a buscar al hermano ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Esa misma noche, Ali Baba llevó un burro hasta la roca.\n"¡Ábrete, Sésamo!"\nAl fondo, Cassim estaba sentado y temblando.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"Se me habían olvidado las palabras mágicas... Sésamo. Era Sésamo."\nAli Baba puso a su hermano sobre el burro y se lo llevó a casa.\nDe monedas de oro se llevó solo un saco.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'El hermano estaba sano y salvo.\nLas palabras mágicas quedaron como un secreto entre los dos.\nLos ladrones se dieron cuenta de que faltaban monedas de oro, pero nunca supieron quién lo había hecho.\nY vivieron felices para siempre.'},

  /* ---- Cuerdas y la guardia ---- */
  abr1:{art:'ab_abura', text:'Morgiana trajo cuerdas.\nAtó desde fuera las tapas de las tinajas, una por una.\nDespués salió corriendo a llamar a la guardia de la ciudad.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'La guardia llegó y abrió las 37 tinajas.\nSe llevaron a los ladrones uno por uno, atados con cuerdas.\nEl jefe aprovechó ese momento y huyó.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'El jefe no volvió a aparecer nunca más por la ciudad.\nAli Baba le dijo a Morgiana: "Ya eres libre."\nEl tesoro de la roca lo usaron con modestia.\nY vivieron felices para siempre.'},

  /* ---- El jefe huyó ---- */
  abg1:{art:'ab_odori', text:'Morgiana detuvo el baile y se puso delante del mercader.\n"La marca que usted hizo la multipliqué yo."\nAl mercader le cambió el color de la cara.', next:'abg2'},
  abg2:{art:'ab_odori', text:'El jefe se levantó sin decir nada y huyó hacia la ciudad de noche.\nDesde entonces no volvió nunca a la ciudad de Persia.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba le dijo a Morgiana:\n"Ya eres libre. Lo que hagas a partir de ahora lo decides tú."\n"Me quedo aquí", respondió Morgiana.\nY vivieron felices para siempre.'},

  /* ================= La historia de Morgiana ================= */

  am1:{art:'am_daidokoro', text:'Esta es la historia de una sirvienta llamada Morgiana.\nTrabajaba en la casa de Ali Baba.\nDecían de ella que era una persona a la que no se le escapaba nada.', next:'am2'},
  am2:{art:'am_daidokoro', text:'Por la mañana. ¿Por dónde empieza?', choices:[
    {t:'Hornear el pan', go:'am2r', set:{amlife:'pan'}},
    {t:'Sacar agua del pozo', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana sacó agua del pozo y llenó la vasija hasta arriba.\nDe esta casa lo sabe todo.'
    : 'Morgiana encendió el fuego del horno y horneó el pan.\nDe esta casa lo sabe todo.', next:'am3'},
  am3:{art:'ab_shirushi', text:'Una mañana encontró una marca blanca en la puerta.\n(Alguien quiere acordarse de esta casa.)\nMorgiana puso la marca también en la casa de al lado.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'Las marcas se pueden multiplicar'}, then:'am4'},
  am4:{art:'ab_abura', text:'La noche del mercader de aceite. De dentro de una tinaja salió una voz.\n¿Qué hace Morgiana?', choices:[
    {t:'Hervir el aceite', go:'am4r', set:{amhow:'abura'}},
    {t:'Atar las tinajas con cuerdas y llamar a la guardia', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana ató las tapas de las tinajas y llamó a la guardia.\nSe llevaron a los ladrones.'
    : 'Morgiana hirvió el aceite y lo echó en las tinajas.\nDentro de las tinajas se hizo el silencio.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'La mañana en que todo terminó, Ali Baba dijo:\n"Ya eres libre. Lo que hagas lo decides tú."\n¿Qué hace Morgiana?', choices:[
    {t:'Quedarse en esta casa', go:'ami1'},
    {t:'Salir de viaje', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana salió una vez por el portón.\nCaminó por la ciudad, vio el mercado, vio el río.\nY después, con sus propios pies, volvió a la casa.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Esta es la casa que yo elegí."\nNo como sirvienta, sino como una persona de esta casa.\nY vivieron felices para siempre.'},
  amt1:{art:'am_michi', text:'Morgiana tomó un solo saco y salió por el portón.\nAli Baba no la detuvo.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Adónde fue Morgiana no está escrito en esta historia.\nAdónde llevaba el camino solo lo sabe Morgiana.\nFin.'},

  /* ================= La historia del jefe de los ladrones ================= */

  at1:{art:'at_dokutsu_kara', text:'Esta es la historia del jefe de los ladrones.\nEntre 40 guardaban su tesoro dentro de la roca.\nUn día se dio cuenta de que faltaba parte del tesoro.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'¿Qué examina el jefe?', choices:[
    {t:'Las huellas delante de la roca', go:'at2r', set:{atlife:'ashi'}},
    {t:'Las huellas de un burro', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Delante de la roca habían quedado las huellas de un burro.\nAlguien de la ciudad.'
    : 'Delante de la roca habían quedado unas huellas pequeñas.\nNo eran de ninguno de sus hombres.', next:'at3'},
  at3:{art:'ab_iwa', text:'(Más que el tesoro que le habían quitado, le daba miedo que alguien conociera el secreto de la roca.)\nEl jefe mandó a un hombre a la ciudad.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'Con un solo secreto basta'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'El plan de las tinajas había fracasado.\nDe sus hombres ya no quedaba ninguno.\n¿Qué hace el jefe?', choices:[
    {t:'Dejar el tesoro e irse lejos', go:'ato1'},
    {t:'Ir una vez más a aquella casa', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'El jefe se puso delante de la roca.\n"Ciérrate, Sésamo."\nY después echó a andar sin mirar atrás.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'El tesoro se quedó dentro de la roca.\nAdónde fue el jefe no lo sabe nadie.\nFin.'},
  ath1:{art:'ab_odori', text:'Disfrazado de mercader, el jefe fue a aquella casa.\nAl final del baile, la sirvienta se puso delante de él.\n(Esta persona lo sabía desde el principio.)\nEl jefe no hizo nada y salió de la casa.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'El secreto ya no era un secreto.\nEl jefe lo aceptó y se fue de la ciudad.\nLo que le daba miedo no era perder el tesoro, sino que alguien lo supiera.\nFin.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_ES);

  T.ZK_EN.push(
    {section:'Ali Baba y los 40 ladrones', note:'En los libros antiguos escritos en árabe no aparece esta historia. Hace unos 300 años, una persona de Francia la escribió después de oírla de un narrador de Siria. Es una historia distinta de "Aladino". En la historia original, Morgiana es una esclava y al final obtiene su libertad.'},
    {id:'ab_seishi',  n:'Ábrete, Sésamo',            h:'La historia tal como se cuenta, en el primer recorrido'},
    {id:'ab_ani',     n:'Ir a buscar al hermano',    h:'Si la noche en que Cassim no vuelve vas a la roca...'},
    {id:'ab_rouya',   n:'Cuerdas y la guardia',      h:'Si en la noche de las tinajas no hierves el aceite...'},
    {id:'ab_nigeta',  n:'El jefe huyó',              h:'Si detienes el baile y hablas de las marcas...'},
    {id:'am_ie',      n:'La casa que yo elegí',      h:'En la historia de Morgiana, si te quedas en la casa...'},
    {id:'am_tabi',    n:'Más allá de la puerta',     h:'En la historia de Morgiana, si sales de viaje...'},
    {id:'at_oite',    n:'Dejar el tesoro',           h:'En la historia del jefe, si te vas lejos...'},
    {id:'at_himitsu', n:'Un solo secreto',           h:'En la historia del jefe, si vuelves una vez más a aquella casa...'}
  );

})();
