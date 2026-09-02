"use strict";
/* Der Nordwind und die Sonne - German scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). German wording is original;
   no existing German translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var KITAKAZE_DE = {

  /* ================= Der Nordwind und die Sonne ================= */

  kz1:{art:'kz_sora', text:'Dies ist die Geschichte vom Nordwind und der Sonne.\nEines Tages stritten der Nordwind und die Sonne hoch oben am Himmel.\n„Ich bin stärker.“ „Nein, ich bin es.“', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'Wer ist stärker?'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = 'An jenem Morgen verließ ein Wanderer das Dorf und ging los, den Weg entlang.\nIm Mantel, den Beutel über der Schulter.';
    if(f.first) return t;
    return t + '\nWas kommt in den Beutel?';
  }, choices:[
    {t:'Eine Flasche Wasser', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'Brot und ein Apfel', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? 'Im Beutel: Brot, ein Apfel und noch ein Mantel.\nEs sah nach einem langen Weg aus.'
    : 'Im Beutel: eine Flasche Wasser und noch ein Mantel.\nEs sah nach einem langen Weg aus.', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = 'Der Nordwind und die Sonne entdeckten den Wanderer.\n„Wer den Wanderer dazu bringt, den Mantel auszuziehen, ist stärker.“';
    if(f.first) return t + '\nZuerst war der Nordwind an der Reihe.';
    return t + '\nWas nun?';
  }, choices:[
    {t:'Sich messen. Der Nordwind beginnt', go:'kz4'},
    {t:'Nicht mehr messen, sondern es zusammen versuchen', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'Der Nordwind blies gleich von Anfang an kräftig.\nWusch!\nDer Wanderer hielt den Kragen des Mantels fest.', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'Wusch!!'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'Der Nordwind blies noch kräftiger.\nWusch, wusch!\nDer Wanderer hielt den Mantel mit beiden Händen ganz fest.\n„Kalt. Ich ziehe noch einen an.“\nAus dem Beutel kam noch ein Mantel, und der Wanderer zog ihn über den ersten.', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'Wusch, wusch!!'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'Kalt...'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'Der Nordwind blies mit aller Kraft.\nBlätter flogen, und der Sand auf dem Weg wirbelte auf.\nDoch der Wanderer ließ den Mantel nicht los.', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'Wuuuusch!!'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = 'Der Nordwind wurde müde.';
    if(f.first) return t + '\n„Sonne, jetzt bist du dran.“\nUnd der Nordwind übergab den Wanderer der Sonne.';
    return t + '\nWas macht der Nordwind?';
  }, choices:[
    {t:'„Sonne, jetzt bist du dran“', go:'kzc_kao_kk'},
    {t:'Die Wolken holen', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'Jetzt bist du dran'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'Die Sonne schien zuerst nur mäßig.\nWarm und mild.\nDer Wanderer zog den zweiten Mantel aus und steckte ihn zurück in den Beutel.', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'Warm und mild...'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = 'Die Sonne schien stärker.\nHell und heiß.\nDer Wanderer begann zu schwitzen.';
    if(f.first) return t;
    return t + '\nWas macht der Wanderer?';
  }, choices:[
    {t:'Einfach weitergehen', go:'kzc_poka2'},
    {t:'In den Schatten treten', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'Hell und heiß!!'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'Die Sonne schien noch stärker.\n„Heiß. Nicht mehr auszuhalten.“\nDer Wanderer zog den Mantel ganz aus und legte ihn über die Schulter.', next:'kz11'},

  kz11:{art:'kz_kawa', text:'Neben dem Weg floss ein Fluss.\nDer Wanderer legte den Mantel ans Ufer und sprang ins Wasser.', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'Platsch!!'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'Der Wanderer badete, und es sah angenehm aus.\nHoch oben am Himmel sahen der Nordwind und die Sonne zu.', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'Der Wanderer weiß nichts von dem Wettstreit.\nDer Mantel trocknete am Ufer, und der Wanderer ging weiter.\nEnde.'},

  /* ---- Waschwetter zu zweit ---- */
  kzf1:{art:'kz_sentaku', text:'„Hören wir auf, uns zu messen, und versuchen wir es zusammen.“\nDer Nordwind blies, und die Sonne schien.\nDie ganze Wäsche im Dorf war schon vor Mittag trocken.', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'Der Wanderer ging angenehm weiter, den Mantel noch an.\nDer Wind war kühl, das Sonnenlicht warm.', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'Die Leute im Dorf nannten diesen Tag „das schönste Waschwetter“.\nWer von beiden stärker ist, hat niemand entschieden.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Eine Rast im Schatten ---- */
  kzk1:{art:'kz_kokage', text:'Der Wanderer trat in den Schatten eines großen Baumes und setzte sich.\nDer Mantel blieb an.\nEtwas Wasser trinken und ausruhen.', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'Die Sonne sank tiefer, und es wurde kühl.\nDer Wanderer ging weiter, den Mantel noch an.', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'Hoch oben am Himmel sahen der Nordwind und die Sonne einander an.\nDer Wettstreit blieb offen.\nEnde.'},

  /* ---- Als die Wolken kamen ---- */
  kzu1:{art:'kz_kumo', text:'Der Nordwind holte die Wolken herbei.\nDer Himmel wurde dunkel, und es begann zu regnen.\nDer Wanderer stellte sich unter einen Baum.', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'Als der Regen aufhörte, ging der Wanderer weiter.\nDer Mantel blieb an.', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'„Für heute soll es genug sein“, sagte die Sonne.\n„Ein andermal“, sagte der Nordwind.\nEnde.'},

  /* ================= Die Geschichte vom Nordwind ================= */

  kk1:{art:'kz_sora', text:'Dies ist die Geschichte vom Nordwind.\nDer Nordwind kommt vom Meer im Norden herüber.\nKräftig zu blasen, das ist die Arbeit des Nordwinds.', next:'kk2'},
  kk2:{art:'kk_umi', text:'Wohin soll der Nordwind heute blasen?', choices:[
    {t:'Aufs Meer', go:'kk2r', set:{kklife:'umi'}},
    {t:'Auf die Wiesen', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? 'Der Nordwind blies einmal über die Wiesen.\nDas Gras zeigte auf einmal in dieselbe Richtung.'
    : 'Der Nordwind blies einmal über das Meer.\nWeiße Wellen stiegen auf einmal überall auf.', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'Der Wettstreit, den Wanderer dazu zu bringen, den Mantel auszuziehen, ging nicht gut aus.\nEin wenig müde ruhte sich der Nordwind hoch oben am Himmel aus.', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'Dabei kann ich doch gut blasen'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'Vom Himmel aus sieht man unten allerlei Dinge.\nWohin geht der Nordwind?', choices:[
    {t:'Zu den Schiffen im Hafen', go:'kkh1'},
    {t:'Zu den Blumen auf der Wiese', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'Im Hafen lag ein Schiff, das sich nicht bewegen konnte.\nEs gab keinen Wind, und die Segel hingen schlaff herunter.\nDer Nordwind blies sanft in die Segel.', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'Die Segel blähten sich, und das Schiff fuhr hinaus aufs Meer.\nDie Seeleute winkten zum Himmel hinauf.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},
  kkt1:{art:'kk_nohara', text:'Die Blumen auf der Wiese trugen Samen.\nDer Nordwind nahm die Samen mit und trug sie weit fort.', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'Im nächsten Frühling blühten dieselben Blumen auf einem fernen Hügel.\nEs waren die Samen, die der Nordwind getragen hatte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte von der Sonne ================= */

  kh1:{art:'kz_sora', text:'Dies ist die Geschichte von der Sonne.\nDie Sonne geht am Morgen im Osten auf und am Abend im Westen unter.\nZu scheinen, das ist die Arbeit der Sonne.', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'Worauf scheint die Sonne heute Morgen zuerst?', choices:[
    {t:'Auf die Felder', go:'kh2r', set:{khlife:'hatake'}},
    {t:'Auf die Dächer im Dorf', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? 'Die Sonne schien auf die Dächer im Dorf.\nEine Katze auf einem Dach streckte sich.'
    : 'Die Sonne schien auf die Felder.\nDer Tau glitzerte, und die jungen Triebe wuchsen.', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'Am Tag des Wettstreits schien die Sonne stärker als sonst.\nDer Wanderer sprang in den Fluss, doch die Erde auf den Feldern trocknete aus und bekam Risse.', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'Vielleicht habe ich zu stark geschienen'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'Was macht die Sonne?', choices:[
    {t:'Die Wolke um Schatten bitten', go:'khk1'},
    {t:'Weiterscheinen bis zum Untergang', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'Die Sonne bat eine Wolke, die vorbeizog.\n„Machst du ein wenig Schatten über den Feldern?“\nDie Wolke blieb über den Feldern stehen.', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'Im Schatten konnten die Felder aufatmen.\nAuch die Sonne kann nicht alles.\nDen Tag, an dem sie die Wolke gebeten hat, hat die Sonne nicht vergessen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},
  khy1:{art:'kh_yuuhi', text:'Die Sonne schien weiter, bis sie hinter den Bergen im Westen unterging.\nSie sah den Rücken des Wanderers über einen fernen Hügel ziehen.', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'Ob der Wanderer den Mantel anzog oder auszog, das sieht die Sonne nicht mehr.\nMorgen geht die Sonne wieder auf.\nEnde.'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_DE);

  T.ZK_EN.push(
    {section:'Der Nordwind und die Sonne', note:'Im alten griechischen Text endet diese Geschichte damit, dass der Wanderer in einem Fluss badet. Wer von beiden gewonnen hat, steht nicht im Buch. Der Satz „In vielen Fällen wirkt Überzeugen besser als Gewalt“ wurde erst später hinzugeschrieben. Es gibt mehr als eine Art, die Geschichte zu lesen.'},
    {id:'kz_seishi', n:'Ein Bad im Fluss',          h:'Die überlieferte Geschichte, gleich beim ersten Mal'},
    {id:'kz_kokage', n:'Eine Rast im Schatten',     h:'Wenn der Wanderer bei der Sonne in den Schatten tritt...'},
    {id:'kz_futari', n:'Waschwetter zu zweit',      h:'Wenn die beiden aufhören, sich zu messen, und es zusammen versuchen...'},
    {id:'kz_kumo',   n:'Als die Wolken kamen',      h:'Wenn der Nordwind die Wolken herbeiholt...'},
    {id:'kk_ho',     n:'Die Segel blähen',          h:'Wenn man in der Geschichte vom Nordwind zum Hafen geht...'},
    {id:'kk_tane',   n:'Die Samen tragen',          h:'Wenn man in der Geschichte vom Nordwind zur Wiese geht...'},
    {id:'kh_kumo',   n:'Die Wolke bitten',          h:'Wenn man in der Geschichte von der Sonne die Wolke bittet...'},
    {id:'kh_yuuhi',  n:'Bis zum Untergang',         h:'Wenn man in der Geschichte von der Sonne bis zum Untergang scheint...'}
  );

})();
