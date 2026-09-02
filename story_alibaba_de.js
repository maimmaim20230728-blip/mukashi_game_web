"use strict";
/* Ali Baba und die 40 Räuber - German scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var ALIBABA_DE = {

  /* ================= Ali Baba und die 40 Raeuber ================= */

  ab1:{art:'ab_mori', text:'Dies ist die Geschichte von Ali Baba, der in einer Stadt in Persien lebte.\nAli Baba war ein armer Holzfäller.\nJeden Tag nahm er seine 2 Esel mit in den Wald, um Brennholz zu holen.', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = 'Auch heute sammelte Ali Baba Brennholz im Wald.';
    if(f.first) return t;
    return t + '\nWie viel Brennholz sammelt er?';
  }, choices:[
    {t:'2 Bündel, und früh nach Hause', go:'ab2r', set:{ablife:'futa'}},
    {t:'4 Bündel, und in Ruhe nach Hause', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? 'Er lud 4 Bündel Brennholz auf die Rücken der Esel.\nHeute wollte er in Ruhe nach Hause gehen.'
    : 'Er lud 2 Bündel Brennholz auf die Rücken der Esel.\nHeute wollte er früh nach Hause gehen.', next:'ab3'},

  ab3:{art:'ab_iwa', text:'Da hörte er den Hufschlag von Pferden.\nAli Baba versteckte sich oben in einem Baum.\n40 Männer versammelten sich vor einem großen Felsen.', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40 Männer ...'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'Der vorderste Mann sprach zu dem Felsen.\n"Sesam, öffne dich!"\nDa öffnete sich der Felsen mit einem Grollen.', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'Sesam, öffne dich!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'Die Männer gingen hinein.\nNach einer Weile kamen sie wieder heraus. "Sesam, schließe dich!"\nDer Felsen schloss sich, und die Männer ritten davon.', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'Ali Baba stieg vom Baum herunter und stellte sich vor den Felsen.\n"Sesam, öffne dich!"\nDer Felsen öffnete sich, und drinnen war alles voller Goldmünzen und Schätze.', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'Der Glanz des Schatzes'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'Ali Baba füllte Goldmünzen in Säcke und lud sie auf die Esel.\nNur so viel, wie er nach Hause tragen konnte.\n"Sesam, schließe dich!"', next:'ab8'},

  ab8:{art:'ab_ie', text:'Zu Hause erzählte Ali Baba alles seiner Frau.\nDie beiden wollten die Goldmünzen zählen, aber es waren viel zu viele.\n"Holen wir uns ein Messgefäß aus dem Haus meines Bruders."', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'Sein Bruder Cassim war ein reicher Kaufmann.\nCassims Frau strich heimlich etwas Fett auf den Boden des Messgefäßes.\nAls es zurückkam, klebte 1 Goldmünze am Boden.', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'Cassim fragte Ali Baba danach.\nAli Baba erzählte ihm alles: von dem Felsen und von den Zauberworten.', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'Am nächsten Morgen nahm Cassim 10 Esel mit zu dem Felsen.\n"Sesam, öffne dich!"\nDer Felsen öffnete sich.', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'Sesam, öffne dich!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'Cassim füllte seine Säcke mit Gold.\nDoch als er hinausgehen wollte, hatte er die Zauberworte vergessen.\n"Gerste, öffne dich!" "Bohne, öffne dich!"\nDer Felsen öffnete sich nicht.', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = 'In dieser Nacht kam Cassim nicht nach Hause.\nCassims Frau kam weinend zu Ali Baba ins Haus.';
    if(f.first) return t;
    return t + '\nWas tut Ali Baba?';
  }, choices:[
    {t:'Bis zum Morgen warten', go:'ab14'},
    {t:'Noch in der Nacht zum Felsen gehen', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'Am Morgen ging Ali Baba zu dem Felsen.\n"Sesam, öffne dich!"\nDrinnen war es still. Die Räuber waren vor ihm zurückgekommen.\nCassim bewegte sich nicht mehr.\nAli Baba legte seinen Bruder auf einen Esel und brachte ihn still nach Hause.', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'In Ali Babas Haus lebte eine Dienerin namens Morgiana.\nSie war ein Mensch, dem nichts entging.\nFür die Vorbereitung der Beerdigung holte Morgiana einen alten Schuhflicker aus der Stadt.\nDamit er sich den Weg nicht merken konnte, verband sie ihm die Augen und führte ihn zum Haus.', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'Die Augenbinde, bitte'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'Als die Räuber zum Felsen zurückkamen, merkten sie, dass Cassim fort war.\n"Noch jemand weiß davon."\nDer Anführer schickte einen seiner Männer in die Stadt.', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'Der Räuber fand den alten Schuhflicker.\nMit verbundenen Augen fand der alte Mann den Weg mit seinen Füßen wieder.\nUnd der Räuber machte ein weißes Zeichen an die Tür von Ali Babas Haus.', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'Morgiana bemerkte das Zeichen.\nUnd sie machte das gleiche Zeichen an das Nachbarhaus und an das Haus daneben.', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'Überall Zeichen!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'Als die Räuber kamen, wussten sie nicht, welches Haus es war.\nDer Anführer beschloss, selbst zu gehen.', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'Der Anführer verkleidete sich als Ölhändler.\n19 Esel, dazu 38 große Krüge.\nNur in einem war Öl, in allen anderen versteckte sich je ein Räuber.', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'"Ich bin ein reisender Ölhändler. Darf ich eine Nacht bleiben?"\nAli Baba nahm ihn freundlich auf.\nDie Krüge wurden im Innenhof aufgereiht.', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'... Wenn die Nacht kommt'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'In der Nacht ging Morgiana das Lampenöl aus, und sie wollte sich welches aus den Krügen im Innenhof holen.\nDa kam eine Stimme aus einem Krug.\n"Ist es schon Zeit?"', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'... In dem Krug ist jemand'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = 'Morgiana antwortete mit tiefer Stimme.\n"Noch nicht."\nDann prüfte sie alle 37 Krüge.';
    if(f.first) return t;
    return t + '\nWas tut Morgiana?';
  }, choices:[
    {t:'Das Öl kochen', go:'ab24'},
    {t:'Seile holen und die Stadtwache rufen', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'Morgiana kochte das Öl in einem großen Topf.\nDann goss sie das kochende Öl in einen Krug nach dem anderen.\nIn den Krügen wurde es still.', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'Mitten in der Nacht kam der Anführer in den Innenhof und klopfte an die Krüge.\nEs kam keine Antwort.\nDer Anführer floh allein.', next:'ab26'},

  ab26:{art:'ab_ie', text:'Am Morgen erzählte Morgiana Ali Baba alles.\nAli Baba sagte zu ihr:\n"Von heute an bist du frei."', next:'ab27'},

  ab27:{art:'ab_odori', text:'Einige Tage später kam der Anführer wieder, verkleidet als Kaufmann.\nEr hatte sich mit Ali Babas Sohn angefreundet und war ins Haus eingeladen worden.\nMorgiana erinnerte sich an dieses Gesicht.', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'Dieses Gesicht kenne ich'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = 'Nach dem Essen tanzte Morgiana für sie.\nIn ihrem Gürtel steckte ein Dolch.';
    if(f.first) return t;
    return t + '\nWas tut Morgiana?';
  }, choices:[
    {t:'Bis zum Ende des Tanzes tanzen', go:'ab29'},
    {t:'Den Tanz abbrechen und von den Zeichen sprechen', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'Am Ende des Tanzes blieb Morgiana vor dem Kaufmann stehen.\nDer Anführer fiel zu Boden.\nZu dem erstaunten Ali Baba sagte Morgiana ruhig:\n"Dieser Mann war der Anführer."', next:'ab30'},

  ab30:{art:'ab_owari', text:'Ali Baba sagte zu Morgiana:\n"Du bist jetzt frei. Was du von nun an tust, darfst du selbst entscheiden."\nMorgiana dachte eine Weile nach und antwortete:\n"Ich bleibe hier. Ich gehöre zu diesem Haus."', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'Danach wurden Morgiana und Ali Babas Sohn ein Paar, und sie gehörte zu diesem Haus.\nDen Schatz aus dem Felsen nutzten sie bescheiden.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Den Bruder holen ---- */
  abn1:{art:'ab_yoru_hakobu', text:'Noch in der Nacht führte Ali Baba einen Esel zu dem Felsen.\n"Sesam, öffne dich!"\nTief drinnen saß Cassim und zitterte.', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'"Ich hatte die Zauberworte vergessen ... Sesam, es war Sesam."\nAli Baba setzte seinen Bruder auf den Esel und brachte ihn nach Hause.\nGoldmünzen nahm er nur einen Sack voll mit.', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'Der Bruder war wohlbehalten.\nDie Zauberworte wurden zum Geheimnis der beiden.\nDie Räuber merkten, dass Goldmünzen fehlten, aber wer es getan hatte, erfuhren sie nie.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Seile und die Stadtwache ---- */
  abr1:{art:'ab_abura', text:'Morgiana holte Seile.\nEinen Deckel nach dem anderen band sie von außen zu.\nDann lief sie los, um die Stadtwache zu rufen.', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'Die Stadtwache kam und öffnete die 37 Krüge.\nDie Räuber wurden einer nach dem anderen mit Seilen abgeführt.\nDer Anführer nutzte den Augenblick und floh.', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'Der Anführer zeigte sich nie wieder in der Stadt.\nAli Baba sagte zu Morgiana: "Du bist jetzt frei."\nDen Schatz aus dem Felsen nutzten sie bescheiden.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Der Anführer floh ---- */
  abg1:{art:'ab_odori', text:'Morgiana brach den Tanz ab und stellte sich vor den Kaufmann.\n"Das Zeichen, das Sie gemacht haben, habe ich vermehrt."\nDem Kaufmann wich die Farbe aus dem Gesicht.', next:'abg2'},
  abg2:{art:'ab_odori', text:'Ohne ein Wort stand der Anführer auf und floh hinaus in die nächtliche Stadt.\nIn die Stadt in Persien kam er nie wieder zurück.', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'Ali Baba sagte zu Morgiana:\n"Du bist jetzt frei. Was du von nun an tust, darfst du selbst entscheiden."\n"Ich bleibe hier", antwortete Morgiana.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Morgianas Geschichte ================= */

  am1:{art:'am_daidokoro', text:'Dies ist die Geschichte einer Dienerin namens Morgiana.\nSie arbeitete in Ali Babas Haus.\nMan sagte, ihr entgehe nichts.', next:'am2'},
  am2:{art:'am_daidokoro', text:'Am Morgen. Womit fängt sie an?', choices:[
    {t:'Brot backen', go:'am2r', set:{amlife:'pan'}},
    {t:'Wasser schöpfen', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? 'Morgiana schöpfte Wasser aus dem Brunnen und füllte den Krug bis zum Rand.\nÜber das Haus wusste sie alles.'
    : 'Morgiana machte Feuer im Ofen und backte Brot.\nÜber das Haus wusste sie alles.', next:'am3'},
  am3:{art:'ab_shirushi', text:'Eines Morgens fand sie ein weißes Zeichen an der Tür.\n(Jemand will sich dieses Haus merken.)\nMorgiana machte das Zeichen auch an das Nachbarhaus.', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'Zeichen kann man vermehren'}, then:'am4'},
  am4:{art:'ab_abura', text:'Die Nacht des Ölhändlers. Aus einem Krug kam eine Stimme.\nWas tut Morgiana?', choices:[
    {t:'Das Öl kochen', go:'am4r', set:{amhow:'abura'}},
    {t:'Die Krüge zubinden und die Stadtwache rufen', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? 'Morgiana band die Deckel der Krüge zu und rief die Stadtwache.\nDie Räuber wurden abgeführt.'
    : 'Morgiana kochte das Öl und goss es in die Krüge.\nIn den Krügen wurde es still.', next:'am5'},
  am5:{art:'ab_jiyuu', text:'Am Morgen, als alles vorbei war, sagte Ali Baba:\n"Du bist jetzt frei. Was du tust, darfst du selbst entscheiden."\nWas tut Morgiana?', choices:[
    {t:'In diesem Haus bleiben', go:'ami1'},
    {t:'Auf eine Reise gehen', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'Morgiana ging einmal durch das Tor hinaus.\nSie ging durch die Stadt, sah den Markt, sah den Fluss.\nDann kam sie auf ihren eigenen Füßen zum Haus zurück.', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'"Das ist das Haus, das ich gewählt habe."\nNicht als Dienerin, sondern als ein Mensch, der zu diesem Haus gehört.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},
  amt1:{art:'am_michi', text:'Morgiana nahm einen Beutel und ging durch das Tor hinaus.\nAli Baba hielt sie nicht auf.', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'Wohin Morgiana ging, steht in dieser Geschichte nicht.\nWohin der Weg führte, weiß nur Morgiana.\nEnde.'},

  /* ================= Die Geschichte des Anführers ================= */

  at1:{art:'at_dokutsu_kara', text:'Dies ist die Geschichte des Anführers der Räuber.\nZu 40 sammelten sie ihren Schatz im Felsen.\nEines Tages merkte er, dass etwas davon fehlte.', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'Was untersucht der Anführer?', choices:[
    {t:'Die Fußspuren vor dem Felsen', go:'at2r', set:{atlife:'ashi'}},
    {t:'Die Spuren eines Esels', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? 'Vor dem Felsen waren die Spuren eines Esels zurückgeblieben.\nJemand aus der Stadt.'
    : 'Vor dem Felsen waren kleine Fußspuren zurückgeblieben.\nSie gehörten keinem seiner Männer.', next:'at3'},
  at3:{art:'ab_iwa', text:'(Nicht der genommene Schatz machte ihm Angst, sondern dass jemand das Geheimnis des Felsens kannte.)\nDer Anführer schickte einen Mann in die Stadt.', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'Ein Geheimnis genügt'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'Der Plan mit den Krügen war gescheitert.\nVon seinen Männern war keiner mehr da.\nWas tut der Anführer?', choices:[
    {t:'Den Schatz zurücklassen und weit fortgehen', go:'ato1'},
    {t:'Noch einmal zu jenem Haus', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'Der Anführer stellte sich vor den Felsen.\n"Sesam, schließe dich."\nDann ging er los, ohne sich umzusehen.', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'Der Schatz blieb im Felsen zurück.\nWohin der Anführer ging, weiß niemand.\nEnde.'},
  ath1:{art:'ab_odori', text:'Als Kaufmann verkleidet ging der Anführer zu jenem Haus.\nAm Ende des Tanzes stellte sich die Dienerin vor ihn.\n(Sie hat es von Anfang an gewusst.)\nDer Anführer tat nichts und verließ das Haus.', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'Das Geheimnis war kein Geheimnis mehr.\nDer Anführer nahm es an und verließ die Stadt.\nWas ihm Angst machte, war nicht der Verlust des Schatzes, sondern dass jemand davon wusste.\nEnde.'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_DE);

  T.ZK_EN.push(
    {section:'Ali Baba und die 40 Räuber', note:'In den alten Büchern in arabischer Sprache steht diese Geschichte nicht. Vor etwa 300 Jahren schrieb ein Franzose sie auf, nachdem er sie von einem Erzähler aus Syrien gehört hatte. Sie ist eine andere Geschichte als "Aladin". In der ursprünglichen Geschichte ist Morgiana eine Sklavin, und am Ende wird sie frei.'},
    {id:'ab_seishi',  n:'Sesam, öffne dich',            h:'Die überlieferte Geschichte, beim allerersten Mal'},
    {id:'ab_ani',     n:'Den Bruder holen',             h:'In der Nacht, in der Cassim nicht heimkommt, zum Felsen gehen ...'},
    {id:'ab_rouya',   n:'Seile und die Stadtwache',     h:'In der Nacht der Krüge das Öl nicht kochen ...'},
    {id:'ab_nigeta',  n:'Der Anführer floh',            h:'Den Tanz abbrechen und von den Zeichen sprechen ...'},
    {id:'am_ie',      n:'Das Haus, das ich wählte',     h:'In Morgianas Geschichte im Haus bleiben ...'},
    {id:'am_tabi',    n:'Jenseits der Tür',             h:'In Morgianas Geschichte auf eine Reise gehen ...'},
    {id:'at_oite',    n:'Den Schatz zurücklassen',      h:'In der Geschichte des Anführers weit fortgehen ...'},
    {id:'at_himitsu', n:'Ein Geheimnis',                h:'In der Geschichte des Anführers noch einmal zu jenem Haus gehen ...'}
  );

})();
