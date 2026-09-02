"use strict";
/* Urashima Taro - Spanish (neutral, understood in both Spain and Latin America) scenario,
   translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_ES !== 'undefined') {
    T = { SCENES_EN: SCENES_ES, ZK_EN: ZK_ES };
  } else {
    T = require('./story_es.js');
  }

  var URA_ES = {

  /* ================= Urashima Taro ================= */

  u1:{art:'ura_hama', text:'Esta es la historia de un joven pescador que vivía en un pueblo junto al mar.\nSe llamaba Urashima Taro.\nVivía con su anciano padre y su anciana madre, los tres juntos.', next:'u2'},

  u2:{art:'ura_hama', text:'Hoy también el sonido de las olas es agradable.\n¿Qué hacemos antes de salir a pescar?', choices:[
    {t:'Arreglar las redes', go:'u2r', set:{ulife:'ami'}},
    {t:'Mirar el mar un rato', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? 'Al mirar las olas que brillan, su corazón se queda quieto y tranquilo.\nEl mar es el mejor amigo de Taro.'
    : 'La red, remendada con cuidado, queda tensa y bien estirada.\nCuidar bien sus herramientas: así es Taro.', next:'u3'},

  u3:{art:'ura_ijime', text:'De pronto ve que, en la playa, unos niños rodean a una tortuga grande y arman alboroto.\nLa tortuga, sin saber qué hacer, había escondido la cabeza.', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'¡No hay que maltratar a la tortuga!'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'Cuando los niños se fueron a casa, Taro devolvió la tortuga al mar con cuidado.\n"No te dejes atrapar otra vez."\nLa tortuga miró atrás una y otra vez y desapareció detrás de las olas.', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'Unos días después.\nAquella tortuga llegó a la orilla del agua.\n"Taro, muchas gracias por lo del otro día.\nPara agradecerte, te llevaré al Palacio del Dragón."', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'A la espalda de la tortuga, y hacia el fondo del mar.\nY bien, ¿cómo hacemos el viaje?', choices:[
    {t:'Agarrarse fuerte del caparazón', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'Mirar alrededor y disfrutar del paisaje', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'¡¡Al Palacio del Dragón!!'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? 'Bancos de peces que brillan, columnas de luz que se mecen.\nAnte aquel paisaje nunca visto, Taro quedó absorto.'
    : (f.uride==='tsukamaru'
      ? 'Se agarró fuerte del caparazón y la espalda de la tortuga estaba tibia,\ny, cosa extraña, no sintió ningún miedo.'
      : 'Entre la luz azul, la tortuga se hundía cada vez más hondo.'), next:'u7'},

  u7:{art:'ura_ryugu', text:'En el fondo del mar apareció un castillo espléndido, como ningún otro.\nEra el Palacio del Dragón.\nUna belleza que ningún cuadro podría pintar.', next:'u8'},

  u8:{art:'ura_otohime', text:'"Bienvenido, querido Taro. Tú eres la persona amable que salvó a la tortuga, ¿verdad?"\nLa princesa Otohime lo recibió con una sonrisa.', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'¡¡El baile de los pargos y los lenguados!!'}, then:'u9'},

  u9:{art:'ura_utage', text:'Ante una larga mesa llena de manjares, los pargos y los lenguados bailan alegres.\nTaro abrió mucho los ojos y aplaudió.', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = 'En el castillo había una "Sala de las Cuatro Estaciones".\nPor sus cuatro ventanas se veían a la vez la primavera, el verano, el otoño y el invierno.';
    if(f.first) return t;
    return t + '\n¿Qué ventana te gusta más?';
  }, choices:[
    {t:'La ventana de primavera, con pétalos de cerezo que caen', go:'u10r', set:{umado:'haru'}},
    {t:'La ventana de invierno, con la nieve que cae', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? 'La nieve, vista desde el fondo del mar, cae en silencio, y uno podría mirarla para siempre.\n"Qué curioso. Aquí hay de todo."'
    : 'Al otro lado de la ventana, los pétalos de cerezo bailan al caer.\n"Qué curioso. Aquí hay de todo."', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'Los días felices pasaron como un sueño...\ny, sin darse cuenta, habían pasado tres años.'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = 'Una noche, Taro se acordó de pronto de su padre y su madre, que habían quedado en el pueblo.\n¿Estarán bien? ¿Se sentirán solos?';
    if(f.first) return t + '\n"Princesa Otohime, ya es hora de que vuelva a casa."';
    return t + '\n¿Qué hará?';
  }, choices:[
    {t:'Decir "quiero volver a casa"', go:'u13'},
    {t:'Quedarse aquí un poco más', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'La princesa Otohime asintió, un poco triste,\ny le ofreció una caja hermosa, de laca negra y brillante.\n"Esto se llama tamatebako, la caja del tesoro."', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'Nunca, nunca la abras'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'A la espalda de la tortuga, Taro volvió cruzando el mar.\nAl mirar atrás, las luces del Palacio del Dragón se hacían lejanas y pequeñas.', next:'u15'},

  u15:{art:'ura_hama700', text:'Al llegar a la playa, algo era distinto.\nSu casa no estaba. El pino de siempre tampoco estaba.\nTodas las personas que encontraba en el camino tenían caras desconocidas.', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'Durante los tres años en el Palacio del Dragón,\nen la tierra habían pasado setecientos años.'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = 'Su padre y su madre eran ya personas de un tiempo muy lejano.\nTaro estaba completamente solo.';
    if(f.first) return t + '\nEn su soledad, puso la mano sobre la tapa del tamatebako.';
    return t + '\n¿Qué hará?';
  }, choices:[
    {t:'Abrir el tamatebako', go:'uc_kemuri'},
    {t:'No abrirlo y seguir esperando en la playa', go:'ua1'},
    {t:'Ir a devolverlo al mar', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'Humo blanco...'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = 'Cuando el humo se fue, Taro se había convertido en un anciano de cabello blanco.\nEl tiempo que se había detenido en el Palacio del Dragón volvió de golpe.';
    if(f.first) return t;
    return t + '\n¿Qué hará?';
  }, choices:[
    {t:'Quedarse quieto, mirando el mar', go:'e_u_seishi'},
    {t:'Echar a andar hacia el Palacio del Dragón', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'Abrió el tamatebako, y llegó el pesar.\nAun así, en el pecho de Taro quedaban aquellos días hermosos,\nque ningún cuadro podría pintar, guardados como un tesoro.\nSolo el sonido de las olas seguía sonando, en calma.\nFin.'},

  /* ---- La grulla (el final antiguo del Otogi-zoshi) ---- */
  ut1:{art:'ura_oldman', text:'Hacia la orilla del agua, un paso, y otro paso.\nCaminó como atraído hacia el mar donde está el Palacio del Dragón,\ny el cuerpo de Taro se volvió de pronto muy ligero.', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'¡¡Se convirtió en grulla!!'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'Convertido en una grulla blanca, Taro voló sobre el mar del amanecer.\nEntonces, entre las olas, una tortuga verde asomó la cabeza.\nEra la princesa Otohime, con forma de tortuga.\nLa grulla y la tortuga son señal de larga vida y de felicidad.\nLos dos siguieron danzando para siempre sobre el mar que brillaba.\nY vivieron felices para siempre.', ending:'u_tsuru'},

  /* ---- No abrirlo (la promesa del Fudoki) ---- */
  ua1:{art:'ura_hama700', text:'Taro no abrió la caja.\n"Porque prometí que no la abriría."\nDesde aquel día, mañana y tarde, Taro miraba el mar desde la playa.', next:'ua2'},
  ua2:{art:'ura_fune', text:'Una mañana, unos días después, el mar brilló dorado\ny una barca llegó deslizándose sobre el agua.\n"Querido Taro. Has cumplido tu promesa."\nEra la voz de la princesa Otohime.', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'"Creía que, si no abrías la caja, volveríamos a vernos."\nTaro subió a la barca y partió a un viaje sin despedidas.\nEl tamatebako era la señal de la promesa que unía a los dos.\nY vivieron felices para siempre.'},

  /* ---- Devolverlo al mar ---- */
  uu1:{art:'ura_hama', text:'Taro pidió prestada una barca pequeña y salió a mar abierto.\n"Las cosas importantes hay que devolverlas a su lugar importante."\nY dejó el tamatebako flotando suavemente sobre las olas.', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'Entonces, desde debajo de las olas, apareció aquella tortuga\ny puso la caja sobre su espalda.\n"Taro, quizá esa sea la mejor respuesta de todas."', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'Los recuerdos están en el pecho, aunque la caja siga cerrada.\nTaro decidió vivir otra vez como pescador en el nuevo pueblo.\nEl mar sigue brillando también hoy.\nY vivieron felices para siempre.'},

  /* ---- Quedarse ---- */
  un1:{art:'ura_otohime', text:'"Déjame quedarme aquí un poco más. Pero..."\nComo si hubiera visto el fondo de su corazón, la princesa Otohime asintió en silencio\ny llevó a Taro ante el espejo de agua.', next:'un2'},
  un2:{art:'hime_ryugu', text:'En el espejo de agua se veía la casa del pueblo, tan querida.\nSu padre y su madre reían, con buen aspecto.\n"Desde aquí los cuidaremos de vez en cuando.\nY cuando quieras verlos, la tortuga te llevará cuando sea."', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'Tranquilo, Taro decidió seguir viviendo en el Palacio del Dragón.\nAunque estén lejos, si se recuerdan, una familia sigue siendo una familia.\nLos días en el Palacio del Dragón siguen siendo apacibles también hoy.\nY vivieron felices para siempre.'},

  /* ================= La historia de la princesa Otohime ================= */

  h1:{art:'hime_ryugu', text:'Esta es la historia de la princesa Otohime, del Palacio del Dragón.\nUn castillo hermoso, comidas deliciosas, canciones y bailes.\nLo tenía todo y, aun así, Otohime se aburría un poco.', next:'h2'},
  h2:{art:'hime_ryugu', text:'¿Qué hacemos hoy?', choices:[
    {t:'Pasear por el jardín de corales', go:'h2r', set:{hlife:'sango'}},
    {t:'Ir a escuchar el canto de las ballenas', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? 'Desde el mar lejano llega el canto grave de las ballenas.\nUn canto grande, suave y un poco solitario.'
    : 'Corales rojos y rosados se mecen por todo el jardín.\nSon bonitos, pero no había nadie a quien mostrárselos, y eso era una lástima.', next:'h3'},
  h3:{art:'hime_ryugu', text:'Un día, la tortuga volvió a toda prisa.\nTraía el caparazón reluciente y los ojos brillantes.', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'¡Princesa, escuche esto!'}, then:'h4'},
  h4:{art:'ura_otohime', text:'"¡Alguien me salvó cuando me tenían atrapada en la playa!"\nTaro, invitado al castillo, era una persona que reía mucho.\nEn el Palacio del Dragón se oyeron risas que nunca antes se habían oído,\ny los días aburridos empezaron a tener color.', next:'h5'},
  h5:{art:'ura_otohime', text:'Pero una noche del tercer año:\n"Ya es hora de que vuelva a casa."\nA Otohime se le encogió el pecho.\nQuería retenerlo. Pero no se puede detener a un corazón que piensa en su familia.', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'Quiero retenerlo.\nPero...'}, then:'h6'},
  h6:{art:'ura_tama', text:'La princesa Otohime preparó una caja de laca negra y brillante.\n¿Qué guardará dentro de esta caja antes de entregarla?', choices:[
    {t:'Guardar dentro los días felices de Taro', go:'e_h_himitsu'},
    {t:'Guardar dentro el hechizo de "volveremos a vernos"', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'Tres años en el Palacio del Dragón son setecientos años en la tierra.\nAsí como estaba, Taro envejecería de golpe.\nPor eso encerró con cuidado en la caja el tiempo que había pasado.\n"Si no la abres, Taro seguirá siendo siempre Taro.\nEn las noches solitarias, abraza esta caja y duerme."\nEse era el secreto del tamatebako, que nadie conocía.\nY vivieron felices para siempre.'},
  hm1:{art:'hime_ryugu', text:'"Si no abres la caja, sin duda volveremos a vernos."\nCon ese deseo guardado dentro, la princesa Otohime le entregó la caja.\nY desde aquel día miró cada día en el espejo de agua.', next:'hm2'},
  hm2:{art:'ura_fune', text:'En el espejo de agua, Taro tampoco hoy había abierto la caja\ny miraba el mar sin moverse.\n"...Ya es suficiente. Voy a buscarlo."\nLa princesa Otohime mandó preparar su barca más rápida.', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'Por el mar dorado de la mañana, la barca se desliza.\nDerecho hacia la persona que la espera.\nUna promesa solo se vuelve magia cuando están los dos:\nquien la cumple y quien cree en ella.\nY vivieron felices para siempre.'},

  /* ================= La historia de la tortuga ================= */

  v1:{art:'kame_hama', text:'Esta es la historia de una tortuga marina.\nLe encantaba tomar el sol y ese día también dormitaba en la playa.\nCuando se dio cuenta, estaba rodeada de niños.', next:'v2'},
  v2:{art:'kame_hama', text:'"¡No hay que maltratar a la tortuga!"\nUn pescador de voz amable vino a ayudarla\ny la devolvió al mar con cuidado.\nMeciéndose en las olas, la tortuga tomó una decisión firme.', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'¡Este favor lo devolveré sin falta!'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'De vuelta en el Palacio del Dragón, la tortuga empezó enseguida con los preparativos.\n¿Qué hacemos primero?', choices:[
    {t:'Pulir el caparazón hasta dejarlo reluciente', go:'v3r', set:{vlife:'migaku'}},
    {t:'Contárselo enseguida a la princesa', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? 'En esa espalda iba a viajar un invitado, así que tenía que quedar reluciente.\nBien pulido, el caparazón brillaba como un espejo.'
    : '"Qué persona tan buena", dijo la princesa con una sonrisa.\n"Hay que invitarlo para agradecérselo."', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'Con el permiso de la princesa, la tortuga fue a la playa a buscarlo.\n"Taro, para agradecerte, te llevaré al Palacio del Dragón."\nEra la primera vez en su vida que llevaba a un invitado en la espalda.', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'¡¡Sube a mi espalda!!'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'Y ahora, el camino hasta el Palacio del Dragón.\n¿Por qué camino vamos?', choices:[
    {t:'Ir por el atajo secreto', go:'v5r', set:{vmichi:'chika'}},
    {t:'Ir por el camino más bonito', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? 'Pasaron deslizándose junto a una ballena enorme.\n"¡Uau!", exclamó Taro desde su espalda.\nEs un atajo del que está un poco orgullosa.'
    : 'Atravesaron despacio el bosque de corales.\n"Qué bonito", suspiró Taro desde su espalda.\nEs un paisaje del que está un poco orgullosa.', next:'v6'},
  v6:{art:'ura_ryugu', text:'Llegaron sanos y salvos: gran misión cumplida.\nY bien, ¿qué hacemos ahora?', choices:[
    {t:'Quedarse en el Palacio del Dragón y cuidar de él', go:'e_v_senaka'},
    {t:'Volver a la playa y esperar su regreso', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'Durante tres años, la tortuga fue el transporte personal de Taro.\nSu espalda era siempre el mejor asiento del mar.\n"En tu espalda es donde mejor me siento."\nCada vez que se lo decía, el caparazón se sentía un poquito orgulloso.\nY vivieron felices para siempre.'},
  vm1:{art:'kame_hama', text:'La tortuga volvió a la playa y decidió esperar cada día en la orilla del agua.\nLas tortugas viven muchísimos años.\nPor mucho tiempo que pase, no olvidan una promesa importante.', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'El tiempo pasó: setecientos años.'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'Una mañana, alguien muy querido estaba de pie en la playa.\n"Bienvenido a casa, Taro."\nEn aquella playa tan cambiada, una sola,\nla tortuga, era la única que se acordaba de Taro.\nY vivieron felices para siempre.'}

  };

  Object.assign(T.SCENES_EN, URA_ES);

  T.ZK_EN.push(
    {section:'Urashima Taro'},
    {id:'u_seishi',   n:'El tamatebako del pesar',      h:'La historia original, la del primer recorrido'},
    {id:'u_tsuru',    n:'Taro convertido en grulla',    h:'Si después de abrir la caja caminas hacia el mar...'},
    {id:'u_akenai',   n:'El tamatebako sin abrir',      h:'Si cumples la promesa y esperas en la playa...'},
    {id:'u_umi',      n:'El tesoro devuelto al mar',    h:'Si sin abrir la caja la devuelves al mar...'},
    {id:'u_nokoru',   n:'Días en el Palacio del Dragón', h:'Si no vuelves a casa y te quedas un poco más...'},
    {id:'uh_himitsu', n:'El secreto del tamatebako',    h:'En la historia de Otohime, si guardas dentro los días...'},
    {id:'uh_mukae',   n:'La barca que va a buscarlo',   h:'En la historia de Otohime, si guardas dentro el hechizo...'},
    {id:'uv_senaka',  n:'El invitado en la espalda',    h:'En la historia de la tortuga, si te quedas en el palacio...'},
    {id:'uv_matsu',   n:'La promesa en la playa',       h:'En la historia de la tortuga, si esperas en la playa...'}
  );

})();
