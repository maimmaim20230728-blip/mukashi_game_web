"use strict";
/* Hänsel und Gretel - German scenario, translated from the Japanese master; structure mirrors story_hansel_en.js.
   The classic rhymes come from the PD Grimm original (KHM 15, 1857):
   "Knusper, knusper, Knäuschen, wer knuspert an meinem Häuschen?" / "Der Wind, der Wind, das himmlische Kind."
   / "Entchen, Entchen, ... nimm uns auf deinen weißen Rücken." */
(function(){
  var T;
  if (typeof SCENES_DE !== 'undefined') {
    T = { SCENES_EN: SCENES_DE, ZK_EN: ZK_DE };
  } else {
    T = require('./story_de.js');
  }

  var HANSEL_DE = {

  /* ================= Hänsel und Gretel ================= */

  hg1:{art:'hg_ie', text:'Dies ist die Geschichte einer Holzfällerfamilie am Rand eines großen Waldes.\nHänsel und Gretel, die beiden Geschwister,\nlebten dort mit ihrem Vater und ihrer Stiefmutter, zu viert.', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = 'In jenem Jahr kam eine große Hungersnot über das Land.\nDas Brot wurde teuer, und auch im Haus des Holzfällers wurde das Essen jeden Tag weniger.';
    if(f.first) return t;
    return t + '\nHeute gibt es nur ein kleines Brot. Wie teilen sie es?';
  }, choices:[
    {t:'Zu viert gleich teilen', go:'hg2r', set:{hpan:'minna'}},
    {t:'Hänsel gibt der Schwester mehr', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '"Ich habe sowieso keinen Hunger."\nHänsel legte seinen Teil ganz leise auf Gretels Teller.'
    : 'Sie teilten das kleine Brot in vier Stücke und aßen zusammen.\n"Morgen können wir hoffentlich ein größeres kaufen."', next:'hg3'},

  hg3:{art:'hg_yoru', text:'In dieser Nacht hörten die beiden die Stimme der Stiefmutter.\n"Morgen früh bringen wir die Kinder tief in den Wald und lassen sie dort zurück.\nSonst verhungern wir alle vier."\nDer Vater sagte immer wieder nein.\nAber am Ende nickte er, ohne ein Wort.', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = 'Gretel fing an zu weinen.\n"Sei ruhig. Ich habe einen Plan."\nHänsel ging leise hinaus und sammelte im Mondlicht weiße Kieselsteine.';
    if(f.first) return t + '\nSo lange, bis seine Taschen ganz voll waren.';
    return t + '\nWelche Kieselsteine sammelt er?';
  }, choices:[
    {t:'Die runden weißen Steine', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'Die Steine, die im Mond am hellsten glänzen', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? 'Einen nach dem anderen prüfte er und wählte die, die silbern glänzten.\nSo lange, bis seine Taschen ganz voll waren.'
    : 'Ganz runde weiße Kieselsteine, bis seine Taschen voll waren.\nZurück im Haus flüsterte er Gretel zu: "Jetzt ist alles gut."', next:'hg5'},

  hg5:{art:'hg_mori', text:'Am nächsten Morgen ging die Familie in den Wald.\nBeim Gehen ließ Hänsel einen Kieselstein nach dem anderen fallen.\nTief im Wald machte der Vater ein Feuer.\n"Ruht euch hier aus. Wir holen euch später ab."\nEhe sie es merkten, waren die beiden eingeschlafen.', next:'hg6'},

  hg6:{art:'hg_koishi', text:'Als sie aufwachten, war es stockdunkel.\nGretel fing an zu weinen.\n"Warten wir, bis der Mond aufgeht", sagte Hänsel.\nUnd als der Mond über dem Wald aufstieg...', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'Die Kieselsteine leuchten!!'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'Wie Silber glänzten die Steine, einer nach dem anderen, bis nach Hause.\nHand in Hand gingen die beiden die ganze Nacht bis zum Morgen zurück.', next:'hg8'},

  hg8:{art:'hg_ie', text:'Der Vater weinte und schloss die beiden fest in die Arme.\nDie Stiefmutter sagte gar nichts.', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = 'Aber die Hungersnot ging weiter.\nEines Nachts hörten sie wieder diese Stimme.\nDiesmal war die Tür verschlossen, und sie kamen nicht hinaus.';
    if(f.first) return t + '\nHänsel wollte das Brot vom Morgen zerkrümeln und damit den Weg kennzeichnen.';
    return t + '\nWas soll er tun?';
  }, choices:[
    {t:'Am Morgen den Weg mit Brotkrumen kennzeichnen', go:'hg10'},
    {t:'Leise durchs Fenster steigen und Kieselsteine sammeln', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'Auf dem Weg in den Wald ließ Hänsel Krümel um Krümel fallen.\nUnd wieder schliefen die beiden am Feuer ein.', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'Als der Mond aufging, war kein einziger Krümel mehr da.\nDie Vögel des Waldes hatten sie alle aufgepickt.', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'Die beiden gingen und gingen.\nEine Nacht, zwei Nächte, und dann der dritte Morgen.'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'Die Bäuche waren leer, die Beine ganz müde.\nDa saß auf einem Ast ein Vogel, weiß wie Schnee, und sang.', next:'hg13'},

  hg13:{art:'hg_tori', text:'Der Vogel flog vor den beiden her, immer tiefer in den Wald hinein.\nUnd als sie auf eine offene Stelle kamen...', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'Ein Haus aus Süßigkeiten!!'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = 'Wände aus Brot, ein Dach aus Kuchen, Fenster aus klarem Zucker.\nDas ganze Haus war zum Essen da.';
    if(f.first) return t + '\nHänsel knabberte am Dach, Gretel am Fenster, und beide aßen und aßen.';
    return t + '\nWo fangen sie an?';
  }, choices:[
    {t:'Der Kuchen auf dem Dach', go:'hg14r', set:{hokashi:'yane'}},
    {t:'Die Fenster aus Zucker', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? 'Das Zuckerfenster brach mit einem Knacken und zerging auf der Zunge.\n"So etwas Gutes habe ich noch nie gegessen."'
    : 'Der Kuchen auf dem Dach schmeckte nach Honig.\n"So etwas Gutes habe ich noch nie gegessen."', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'Knusper, knusper.\nDa kam eine dünne Stimme aus dem Haus.', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'Knusper, knusper, Knäuschen, wer knuspert an meinem Häuschen?'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'Die beiden antworteten:\n"Der Wind, der Wind, das himmlische Kind."\nUnd sie aßen einfach weiter.', next:'hg17'},

  hg17:{art:'hg_majo', text:'Die Tür ging auf, und eine alte Frau mit einem Stock kam heraus.\n"Ei, was für liebe kleine Gäste. Kommt nur herein."\nMilch und Pfannkuchen, Äpfel und Nüsse.\nIn weißen Betten schliefen die beiden tief und fest.', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'Aber diese alte Frau...'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'...war eine Hexe.\nDie Hexe hatte rote Augen und konnte nicht weit sehen.\nDafür hatte sie eine feine Nase wie ein Tier.\nKam ein Kind in die Nähe, so roch sie es.', next:'hg19'},

  hg19:{art:'hg_ori', text:'Am Morgen wurde Hänsel in einen Käfig gesperrt.\n"Erst mästen, dann essen."\nGretel musste Wasser holen und kochen.', next:'hg20'},

  hg20:{art:'hg_hone', text:'Jeden Morgen sagte die Hexe:\n"Streck den Finger heraus. Bist du schon dick?"\nUnd statt des Fingers hielt Hänsel ihr einen kleinen Knochen hin.', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'Es ist ein Knochen!!'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'Die Hexe mit den schwachen Augen ließ sich immer wieder täuschen.\nVier Wochen vergingen, und endlich verlor sie die Geduld.\n"Dick oder dünn, morgen früh esse ich dich."', next:'hg22'},

  hg22:{art:'hg_kamado', text:'Die Hexe machte Feuer im Backofen.\n"Kriech hinein und sieh nach, ob er heiß genug ist."', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'Gretel gegen die Hexe!!'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = 'Gretel merkte, was die Hexe vorhatte.';
    if(f.first) return t + '\n"Ich weiß nicht, wie. Wie soll ich denn hinein?"';
    return t + '\nWas soll sie tun?';
  }, choices:[
    {t:'Sagen: "Ich weiß nicht, wie"', go:'hg24'},
    {t:'Den Schlüssel vom Käfig greifen und weglaufen', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'"Was für ein dummes Kind. Sieh her, so macht man das!"\nUnd als die Hexe selbst den Kopf in den Backofen steckte, in dem Augenblick...', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'Rumms!!'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'Gretel schob die Hexe in den Backofen und schlug die eiserne Tür zu.\nUnd damit war es mit der Hexe vorbei.', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = 'Gretel öffnete den Käfig.\n"Hänsel, wir sind frei!"\nIm Haus standen Kisten voller Perlen und Edelsteine.';
    if(f.first) return t + '\nDie beiden füllten sich die Taschen mit Edelsteinen.';
    return t + '\nWas nehmen sie mit nach Hause?';
  }, choices:[
    {t:'Die Taschen mit Edelsteinen füllen', go:'hg27'},
    {t:'Einen Sack mit dem Essen aus dem Regal füllen', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'Als sie durch den Wald gingen, kamen sie an ein großes Wasser.\nKeine Brücke, kein Boot.\nDa kam eine weiße Ente herangeschwommen.', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'Liebes Entchen, bitte!!'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'"Entchen, Entchen, hier stehen Gretel und Hänsel.\nKein Steg und keine Brücke. Nimm uns auf deinen weißen Rücken."\n"Zu zweit sind wir zu schwer. Lass uns einzeln hinüber."\nUnd die Ente trug die beiden einzeln ans andere Ufer.', next:'hg29'},

  hg29:{art:'hg_saikai', text:'Hinter einem Wald, den sie kannten, sahen sie ihr altes Haus wieder.\nDer Vater sah die beiden und weinte.\nDie Stiefmutter war nicht mehr da.', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'Perlen und Edelsteine fielen aus den Taschen, und der Vater machte große Augen.\nVon da an fehlte es ihnen nie mehr am Essen.\nZu dritt lebten sie friedlich beieinander.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Noch einmal Kieselsteine ---- */
  hk1:{art:'hg_koishi', text:'Hänsel stieg ganz leise durch das Fenster hinaus\nund sammelte im Mondlicht die Taschen voller weißer Kieselsteine.', next:'hk2'},
  hk2:{art:'hg_mori', text:'Am nächsten Tag ließ man sie tief im Wald zurück, doch die beiden blieben ruhig.\nAls der Mond aufging, leuchteten die Kieselsteine bis nach Hause.', next:'hk3'},
  hk3:{art:'hg_ie', text:'"So etwas tue ich nie wieder."\nDas versprach der Vater vor den beiden Kindern.\nAuch die Stiefmutter saß in dieser Nacht schweigend da, den Kopf gesenkt.', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'In jenem Winter blieb das Haus arm.\nAber sie teilten jedes Brot zu viert und warteten auf den Frühling.\nDer Hexe im Haus aus Süßigkeiten begegneten sie kein einziges Mal.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Ans andere Ufer ---- */
  hkw1:{art:'hg_kamado', text:'Gretel griff den Schlüssel und ließ Hänsel aus dem Käfig.\n"Schnell, weg hier!"\nDie Hexe mit den schwachen Augen kam schnuppernd hinterher.', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'Am Wasser wartete eine weiße Ente.\n"Einzeln! Zu schwer, und ich gehe unter."\nDie Ente trug erst Gretel hinüber, dann Hänsel.', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'Auch die Hexe kam ans Ufer.\n"Entchen, nimm mich auch mit."\nAber die Hexe war viel zu schwer, und die Ente rührte sich nicht.', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'Am anderen Ufer stampfte die Hexe nur mit den Füßen.\nHand in Hand gingen die beiden nach Hause.\nNiemand kam in den Backofen, und niemand wurde gegessen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ---- Der Winter des Dorfes ---- */
  hgm1:{art:'hg_takara', text:'Gretel sah sich die Regale an.\nMehl, Honig, Nüsse, Äpfel.\n"Das ist besser als Edelsteine."\nDie beiden stopften einen Sack voll mit Essen.', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'Mit dem schweren Sack im Arm kamen sie ans Wasser.\nDie weiße Ente trug die beiden und den Sack einzeln ans andere Ufer.', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'Im Dorf dauerte die Hungersnot noch an.\nDie beiden teilten alles, was sie mitgebracht hatten, im ganzen Dorf.', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'Das Mehl aus dem Haus aus Süßigkeiten wurde in jenem Winter zum Brot des Dorfes.\nBis der Frühling kam und auf den Feldern das Grün aufging, hungerte niemand.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte der Hexe ================= */

  hw1:{art:'majo_daidokoro', text:'Dies ist die Geschichte einer Hexe, die tief im Wald wohnte.\nJeden Tag buk sie Brot und machte Süßigkeiten,\nund daraus machte sie Wände und Dächer und baute immer weiter an ihrem Haus.', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'Was soll sie heute backen?', choices:[
    {t:'Süße Plätzchen', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'Nussbrot', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? 'Das Nussbrot wurde goldbraun gebacken.\nAber es war niemand da, der es essen wollte.\nDie Hexe schichtete es an die Wand.'
    : 'Die süßen Plätzchen wurden knusprig gebacken.\nAber es war niemand da, der sie essen wollte.\nDie Hexe legte sie auf das Dach.', next:'hw3'},
  hw3:{art:'hg_okashi', text:'Eines Tages hörte sie ein Knuspern.\nJemand knabberte an ihrem Haus.\nDie roten Augen der Hexe konnten nicht weit sehen.\nNur ihre Nase roch die Kinder.', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'Wer knuspert an meinem Häuschen?'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'"Der Wind, der Wind, das himmlische Kind."\nZwei helle Kinderstimmen antworteten.\nDie Hexe öffnete die Tür. Und nun...', choices:[
    {t:'Sie mästen und dann essen', go:'hwm1'},
    {t:'Ihnen ein Festessen machen', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'Auf dem Tisch: frisch gebackenes Brot und Milch.\n"Lecker!" "Lecker!", sagten die beiden immer wieder.', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'...Lecker?'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'Dieses Wort hatte die Hexe lange, lange nicht mehr gehört.\nJemand aß, was sie selbst gemacht hatte.\nDie Hexe weinte, ganz heimlich.', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'Seitdem kommen ab und zu Gäste in das Haus aus Süßigkeiten.\nDie Hexe backt auch heute noch Brot und macht Süßigkeiten.\nDiesmal für die Leute, die sie essen.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  hwm1:{art:'hg_ori', text:'Sie sperrte Hänsel in den Käfig und sagte jeden Morgen: "Streck den Finger heraus."\nAber die Augen der Hexe konnten Knochen und Finger nicht unterscheiden.\n"Immer noch so dünn..."', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'Warum wirst du nicht dick!?'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'Die Hexe verlor die Geduld und machte Feuer im Backofen.\n"Sieh nach, ob er heiß genug ist."\n"Ich weiß nicht, wie", sagte Gretel.\nAlso steckte die Hexe selbst den Kopf hinein.\n...Sie sah gar nichts.', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'"Hier ist es stockdunkel! Halte mir jemand die Tür!"\nWährend die Hexe noch zappelte, liefen die beiden davon.', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'Die Hexe kroch aus dem Backofen und fasste einen Entschluss.\n"Ich kaufe mir eine Brille."\nAm nächsten Morgen ging sie mit ihrem Stock in die Stadt.\nWas die Hexe mit der Brille dann sah, ist eine ganz andere Geschichte.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  /* ================= Die Geschichte des weißen Vogels ================= */

  hb1:{art:'tori_sora', text:'Dies ist die Geschichte eines Vogels, weiß wie Schnee, der im Wald wohnte.\nEines Morgens lagen auf dem Waldweg lauter Brotkrumen.', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'Lauter leckere Brotkrumen. Was nun?', choices:[
    {t:'Nur eine essen', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'Sich ganz satt essen', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? 'Nur eine, das war der Plan.\nAber die anderen Vögel kamen auch, und bald war keine Krume mehr da.'
    : 'Die anderen Vögel kamen auch, und im Nu war keine Krume mehr da.', next:'hb3'},
  hb3:{art:'hg_mayou', text:'In dieser Nacht sah es der Vogel:\nZwei Kinder suchten etwas und irrten durch den Wald.\n"Sie suchen... die Krumen, die wir gefressen haben."', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'Ich bin schuld'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'Der Vogel dachte nach.\nWas konnte er jetzt selbst tun?', choices:[
    {t:'Von oben den Heimweg suchen und sie führen', go:'hbp1'},
    {t:'Mit einem Lied vor dem Haus aus Süßigkeiten warnen', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'Der Vogel flog hoch hinauf.\nVon oben war das Haus des Holzfällers ganz nah.\nEr flog tief vor den beiden her und zeigte ihnen den Weg.', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'"Der Vogel da sagt wohl: Kommt mit."\nDie beiden gingen hinter dem Vogel her.\nAls sie aus dem Wald kamen, sahen sie den Rauch ihres eigenen Hauses.', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'Der Vogel, der die Brotkrumen gefressen hatte,\ngab den beiden dafür den Heimweg zurück.\nWiedergutmachen fängt bei dem an, was man kann.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

  hbu1:{art:'hg_tori', text:'Der Vogel wusste Bescheid.\nVon dem Haus aus Süßigkeiten tief im Wald, und auch von seiner Herrin.\nEr setzte sich auf einen Ast und sang:\n"Knuspert die Wand, doch geht nicht hinein."', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'Geht nicht hinein!'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'Die beiden verstanden das Lied.\nSie knabberten ein wenig von der Wand, bis sie satt waren,\nund als die Tür aufging, gingen sie nicht hinein, sondern zurück auf den Waldweg.\nDer weiße Vogel flog voraus, in Richtung ihres Hauses.', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'Der Vogel, der von dem Haus aus Süßigkeiten wusste,\nsang auch danach weiter auf seinem Ast.\nEin Lied der Warnung für jedes Kind, das sich im Wald verirrt.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'}

  };

  Object.assign(T.SCENES_EN, HANSEL_DE);

  T.ZK_EN.push(
    {section:'Hänsel und Gretel'},
    {id:'hg_seishi',  n:'Der Heimweg der weißen Ente', h:'Die Urfassung, aus deinem allerersten Durchgang'},
    {id:'hg_koishi',  n:'Noch einmal Kieselsteine',    h:'In der zweiten Nacht durchs Fenster steigen...'},
    {id:'hg_kawa',    n:'Ans andere Ufer',             h:'Vor dem Backofen die Flucht wählen...'},
    {id:'hg_mura',    n:'Der Winter des Dorfes',       h:'Statt der Edelsteine das Essen mitnehmen...'},
    {id:'hw_okyaku',  n:'Die ersten Gäste',            h:'In der Geschichte der Hexe ein Festessen machen...'},
    {id:'hw_megane',  n:'Rote Augen und eine Brille',  h:'In der Geschichte der Hexe mästen wollen...'},
    {id:'hb_pankuzu', n:'Wer die Brotkrumen fraß',     h:'In der Geschichte des weißen Vogels von oben führen...'},
    {id:'hb_uta',     n:'Ein Lied der Warnung',        h:'In der Geschichte des weißen Vogels mit einem Lied warnen...'}
  );

})();
