"use strict";
/* German scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book German. */

var SCENES_DE = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Es war einmal ein alter Mann und eine alte Frau.\nDer Großvater ging in die Berge, um Holz zu sammeln, und die Großmutter ging an den Fluss, um die Wäsche zu waschen.', next:'m2'},

m2:{art:'momo_river', text:'Als sie am Fluss die Wäsche wusch, kam von flussaufwärts ein großer Pfirsich angeschwommen, plitsch, platsch, plitsch, platsch.', choices:[
  {t:'Ihn mit nach Hause nehmen', go:'m3a', set:{open:'home'}},
  {t:'Ihn gleich hier aufmachen', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Hau ruck, hau ruck! Die Großmutter trug den Pfirsich bis nach Hause.\nZusammen mit dem Großvater machte sie ihn sofort auf, und da...', next:'c_paka'},
m3b:{art:'momo_river', text:'Die Großmutter konnte nicht länger warten. Sie beschloss, den Pfirsich gleich dort auf einem Stein am Fluss aufzumachen. Und da...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'Knack!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'Heraus sprang ein munterer kleiner Junge!\nDie Großmutter nahm das Kind auf den Arm und eilte nach Hause.\nVoller Freude nannten sie und der Großvater ihn "Momotaro".'
  : 'Heraus sprang ein munterer kleiner Junge!\nVoller Freude nannten die beiden den Jungen aus dem Pfirsich "Momotaro".', next:'m5'},

m5:{art:'kids', text:'Momotaro spielte für sein Leben gern mit den Kindern aus dem Dorf.\nWas macht Momotaro heute?', choices:[
  {t:'Sumo ringen', go:'m5a', set:{hobby:'sumo'}},
  {t:'Um die Wette laufen', go:'m5b', set:{hobby:'run'}},
  {t:'Bei der Arbeit helfen', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Auch die größten Kinder purzelten einer nach dem anderen um.\n"So stark ist niemand sonst im Dorf!", staunten alle.', next:'m6'},
m5b:{art:'kids', text:'Kein Kind war schneller als Momotaro.\nEr rannte wie der Wind, und allen blieb der Mund offen stehen.', next:'m6'},
m5c:{art:'kids', text:'Selbst schweres Brennholz war in Momotaros Armen federleicht.\nGroßvater und Großmutter waren sehr froh darüber.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro wuchs schnell heran und wurde ein starker und freundlicher junger Mann.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'In jener Nacht.\nIm Dorf geschah etwas Schreckliches.'}, then:'m7'},
m7:{art:'village_sad', text:'Am nächsten Morgen.\nDa wurde klar: Die Oger von der Ogerinsel hatten den Schatz des Dorfes geraubt.\nDie Leute im Dorf wussten nicht mehr weiter.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro stand auf.\n"Ich gehe zur Ogerinsel und hole unseren Schatz zurück!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'Die Großmutter machte ihm die besten Hirseklößchen von ganz Japan.\nEr band sie an den Gürtel, und schon war er bereit für die Reise.'
  : 'Die Großmutter will ihm die besten Hirseklößchen von ganz Japan machen.\nWas soll Momotaro tun?', choices:[
  {t:'Sich viele Klößchen machen lassen', go:'m10', set:{dango:'full'}},
  {t:'Nur wenige nehmen und leicht reisen', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'Am Morgen der Abreise.\nDie Großmutter holte zwei Stirnbänder hervor.\nWelches soll er sich umbinden?', choices:[
  {t:'Das weiße Stirnband', go:'m10r', set:{band:'white'}},
  {t:'Das rote Stirnband', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Er band das rote Stirnband fest um den Kopf, und tief in seiner Brust wurde es ganz warm.\n"Ich gehe los!"'
  : 'Er band das weiße Stirnband fest um den Kopf, und in seinem Herzen wurde es still und klar.\n"Ich gehe los!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'Auf zu den Ogern!!'}, then:'m11'},

m11:{art:'michi', text:'Der Weg teilte sich in zwei.\nEiner führte über die Berge, der andere am Meer entlang.\nWelchen Weg soll er nehmen?', choices:[
  {t:'Den Bergweg nehmen', go:'m11a', set:{road:'yama'}},
  {t:'Den Weg am Meer nehmen', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Vom Gipfel des Berges sah er weit draußen im Meer eine einsame schwarze Insel.\nDas ist also die Ogerinsel...\nMomotaro ballte die Fäuste.', next:'m12'},
m11b:{art:'umizoi', text:'Er ging über den Sandstrand und hörte dabei den Wellen zu.\nZu seinen Füßen fand er eine schöne pfirsichrosa Muschel.\nDaraus wird ein Mitbringsel für die Großmutter.', next:'m12'},

m12:{art:'dog', text:'Während er weiterwanderte, kam ein Hund herbeigetrottet.\n"Momotaro, wohin des Weges? Gib mir ein Hirseklößchen, dann begleite ich dich!"', choices:[
  {t:'Ihm ein Klößchen geben', go:'c_dog_join', set:{dog:1}},
  {t:'"Tut mir leid, ich habe es eilig"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'Der Hund schließt sich an!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Ich habe nur wenige, aber wir teilen sie uns."\nDer Hund wedelte vor Freude wild mit dem Schwanz!'
  : 'Der Hund wedelte vor Freude wild mit dem Schwanz!\n"Ich begleite dich, wohin du auch gehst!"', next:'m13'},
m12n:{art:'dog', text:'Ein wenig enttäuscht sah der Hund Momotaro nach.', next:'m13'},

m13:{art:'saru', text:'Als Nächstes rief ein Affe von einem Baum herunter.\n"Gib mir ein Hirseklößchen, dann zeige ich dir den Weg!"', choices:[
  {t:'Ihm ein Klößchen geben', go:'c_saru_join', set:{saru:1}},
  {t:'"Tut mir leid, ich muss weiter"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'Der Affe schließt sich an!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Auch über das kleine Stück Klößchen freute sich der Affe sehr.\nEr kletterte flink vom Baum und klopfte sich auf die Brust.'
  : 'Der Affe kletterte flink vom Baum und klopfte sich auf die Brust.\n"Verlass dich auf mich!"', next:'m14'},
m13n:{art:'saru', text:'Der Affe winkte oben vom Baum herunter.', next:'m14'},

m14:{art:'kiji', text:'Da kam ein Fasan vom Himmel herabgeflogen.\n"Gib mir ein Hirseklößchen, dann sehe ich mir die Ogerinsel von oben an!"', choices:[
  {t:'Ihm ein Klößchen geben', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Tut mir leid, ich muss jetzt los"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'Der Fasan schließt sich an!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'Der Fasan aß sein halbes Klößchen ganz sorgsam auf.\nDann breitete er froh die Flügel aus und drehte eine Runde am Himmel.'
  : 'Der Fasan breitete froh die Flügel aus und drehte eine Runde am Himmel.\n"Den Himmel überlasst ganz mir!"', next:'m15'},
m14n:{art:'kiji', text:'Der Fasan drehte eine große Runde und flog zu den Bergen davon.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'Am Hafen lag ein kleines Boot.';
  if(n===0) t += '\nEr hatte keine Gefährten dabei, doch sein Entschluss stand fest.';
  else if(n===1) t += '\nZu zweit stiegen sie ein und hielten zusammen.';
  else t += '\nAls alle eingestiegen waren, war das Boot randvoll.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Leinen loooos!!'}, then:'m16'},

m16:{art:'fune_night', text:'Das Meer war still in der Nacht.\nUnter dem Sternenhimmel dachte Momotaro nach.', choices:[
  {t:'An den Geschmack der Klößchen denken', go:'m17', set:{think:'dango'}},
  {t:'An den Schatz des Dorfes denken', go:'m17', set:{think:'takara'}},
  {t:'Sich fragen, wie die Oger wohl sind', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'Der süße Geschmack der Hirseklößchen schien ihm Mut zu geben.\nMorgen wird es bestimmt gut gehen.',
  takara:'Die Gesichter der Leute aus dem Dorf tauchten vor ihm auf.\nDen Schatz muss er unbedingt zurückholen.',
  oni:'Ob sie stark sind? Ob sie furchterregend sind?\n...Das weiß er erst, wenn er ihnen begegnet.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'Im Morgenlicht kam die Insel schnell näher.';
  if(f.first) t += '\nDer Fasan flog voraus und zeigte allen, wo die Insel lag.';
  else if(f.kiji) t += '\nDer Fasan flog voraus und kam bald zurück.\n"Es gibt ein großes Tor! Und hinten herum einen Felsenpfad!"';
  else t += '\nAm Bug des Bootes blickte Momotaro geradeaus zur Insel.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'Da ist sie, die Ogerinsel!'}, then:'m19'},

m19:{art:'onigashima', text:'Auf der felsigen Insel ragte ein großes schwarzes Tor auf.\nWo soll er hinein?', choices:f=>[
  {t:'Aufrecht durch das Haupttor gehen', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Den Felsenpfad nehmen, den der Fasan fand', go:'m20', set:{gate:'back'}}
    : {t:'Die Insel umrunden und einen Weg suchen', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro trat mit erhobenem Kopf vor das Tor.\n"Ihr Oger! Ich komme, um den Schatz des Dorfes zurückzuholen!"'
  : (f.kiji
    ? 'Der Fasan führte sie, und leise stiegen sie den Felsenpfad hinauf.\nDie Wachen der Oger hatten noch nichts bemerkt.'
    : 'Zwischen den Felsen fanden sie einen schmalen Pfad.\nSie stiegen leise hinauf, und die Wachen der Oger bemerkten noch nichts.'), next:'m21'},
m21:{art:'onigashima', text:'Sein Herz klopfte bis zum Hals.\nJetzt gilt es.', choices:[
  {t:'Einmal tief durchatmen', go:'m21r', set:{calm:1}},
  {t:'Mit Schwung hineinstürmen', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'Ein, aus.\nSein Herz wurde ganz ruhig. Gut, los geht es.'
  : 'Noch bevor er denken konnte, lief sein Körper schon los!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'Mit einem dumpfen Beben trat der Ogerhäuptling hervor!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'Wer bist du!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Gib den Schatz zurück!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Ich komme, um den Schatz des Dorfes zurückzuholen. Ich bin Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(Als er an den Geschmack der Klößchen dachte, war die Angst seltsamerweise fort.)',
    takara:'(Alle im Dorf warten. Verlieren kommt nicht in Frage!)',
    oni:'(Groß. Stark sieht er aus. Aber... seine Augen wirken irgendwie traurig.)'
  }[f.think] || '');
  t += '\nWie soll er kämpfen?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'Alle zusammen, jetzt!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Mit dem Schwert kämpfen!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Hund, los!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Affe, los!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Fasan, los!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Das Schwert einstecken und reden', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'Alle zusammen, jetzt!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Der Biss des Hundes!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Der Kratzer des Affen!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Der Schnabelhieb des Fasans!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'Der Schwertstreich!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'Der Ansturm des Hundes!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'Der Blitzgriff des Affen!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Der Sturzflug des Fasans!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'Was?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'Volltreffer!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'Der Hund biss ins Bein, der Affe kratzte den Rücken, und der Fasan hackte flatternd auf den Kopf.\nSelbst der Häuptling war gegen den Angriff aller 3 zugleich machtlos.\n"I-ich gebe auf!"\nWenn alle zusammenhalten, ist nichts zu fürchten.', next:'m24'},

rk:{art:'maitta', text:f=>'Momotaros Schwert fuhr schnell wie ein Blitz!\nDie Eisenkeule des Häuptlings flog hoch in die Luft.\n"I-ich gebe auf!"\n' + HOBBY_LINE_DE(f), next:'m24'},
rd:{art:'maitta', text:'Der Hund stürmte los wie der Wind und biss den Häuptling ins Bein!\nMit einem lauten Rumms landete der Häuptling auf dem Hintern.\n"I-ich gebe auf!"\nMomotaro, der dem Hund vertraut hatte, reckte die Brust und lachte.', next:'m24'},
rs:{art:'maitta', text:'Der Affe sprang leichtfüßig hin und her und schnappte dem Häuptling die Eisenkeule weg.\n"I-ich gebe auf!"\nÜber die Schnelligkeit des Affen klatschte Momotaro ganz von selbst Beifall!', next:'m24'},
rj:{art:'maitta', text:'Der Fasan stürzte vom Himmel herab! Flatter, flatter, und die Augen des Häuptlings waren verdeckt!\nDem Häuptling wurde schwindelig: "I-ich gebe auf!"\nAuf den Gefährten aus der Luft ist eben Verlass. Momotaro winkte weit hinauf.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'Ganz klein machte sich der Häuptling und bat um Verzeihung.\n"Den Schatz geben wir zurück. Bitte verzeiht uns..."';
  if(!f.first) t += '\nWas soll Momotaro tun?';
  return t;
}, choices:[
  {t:'Mit dem Schatz ins Dorf zurückkehren', go:'e_gaisen'},
  {t:'Fragen, warum sie ihn geraubt haben', go:'m25'}
]},
m25:{art:'talk', text:'Stockend begann der Häuptling zu erzählen.\n"Die Ogerinsel ist voller Felsen, hier wächst nichts. Wir wollten nicht, dass unsere Kinder hungern..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro legte die Hand nicht an sein Schwert und sah geradeaus.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Lass uns reden!!'}, then:'t2'},
t2:{art:'talk', text:'Der Häuptling machte große Augen und begann dann stockend zu erzählen.\n"Die Ogerinsel ist voller Felsen, hier wächst nichts. Für unsere Kinder blieb uns nichts übrig, als euren Schatz zu leihen..."\nMomotaro hörte dem Häuptling zu und dachte nach.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Die Hirseklößchen mit allen teilen', go:'e_kibi'});
  c.push({t:'Versprechen: den Schatz zurück und Freunde des Dorfes werden', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Mit einem Wagen voller Schatz kehrte Momotaro ins Dorf zurück.\nDas ganze Dorf jubelte!\n';
  t += ({
    minna:'Hund, Affe und Fasan gingen stolz im großen Zug voran.\nVon den Taten der 3 Gefährten erzählte man im Dorf noch lange.',
    katana:'Im Dorf sprach man von nichts anderem als von Momotaros Schwertkunst.',
    dog:'Den Wagen zog der Hund, der an diesem Tag am meisten geleistet hatte. Stolz ging er an der Spitze des Festzuges.',
    saru:'Der Affe trug die eroberte Eisenkeule auf der Schulter und war mächtig stolz.',
    kiji:'Der Fasan drehte eine Runde über dem Fest und ließ eine schöne Feder herabfallen.'
  }[f.style] || '');
  if(f.shell) t += '\nDer Großmutter gab er auch die pfirsichrosa Muschel.\n"Man hört das Meer darin", lachte die Großmutter.';
  t += '\nUnd sie lebten glücklich bis ans Ende ihrer Tage.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro nahm den Schatz an und schickte dafür Reis und Saatkartoffeln zur Ogerinsel.\nVom nächsten Frühling an kamen die Oger, um bei der Feldarbeit im Dorf zu helfen.\nUnd beim Dorffest dröhnten die Trommeln der Oger.';
  if(f.shell) t += '\nDie Großmutter ließ ihre Muschel im Takt der Trommeln klingen.';
  t += '\nUnd sie lebten glücklich bis ans Ende ihrer Tage.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"Den Schatz geben wir zurück. Das ist ein Versprechen."\nMomotaro und der Häuptling hakten die kleinen Finger ineinander.\nVon da an gingen die Ogerinsel und das Dorf nach und nach aufeinander zu.\nMomotaro war ohne Kampf zurückgekehrt, und die Leute im Dorf lobten ihn: "Das ist wirklich etwas!"';
  if(f.shell) t += '\nAls er die Muschel zeigte, lächelte die Großmutter glücklich.';
  t += '\nUnd sie lebten glücklich bis ans Ende ihrer Tage.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Hier, die besten Hirseklößchen von ganz Japan. Lasst sie uns zusammen essen."\nDie Oger stopften sich die Klößchen in den Mund, und dicke Tränen kullerten herunter.\n"So etwas Gutes haben wir noch nie gegessen..."\nMomotaro und die Oger räumten gemeinsam die Felsen weg und legten ein Feld an.\nDas ist das seltsamste und das wärmste aller Enden.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Dies ist die Geschichte von Aka, einem jungen Oger auf der Ogerinsel.\nDie Ogerinsel ist voller Felsen. Auch wenn die Oger ein Feld anlegen, wächst dort nichts.', next:'o2'},
o2:{art:'oni_village', text:'Welche Arbeit soll Aka heute tun?', choices:[
  {t:'Wasser vom Fuß der Klippe holen', go:'o2r', set:{owork:'mizu'}},
  {t:'Felsen vom Feld wegtragen', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Mit dem schweren Eimer auf der Schulter stieg er den Klippenweg wieder und wieder hinauf.\nOben warten die kleinen Brüder mit ganz trockener Kehle.'
  : 'Er wälzte einen dicken Felsen zur Seite, doch der Boden darunter war steinhart.\nTrotzdem glaubt Aka, dass hier eines Tages ein Feld wachsen wird.', next:'o3'},
o3:{art:'oni_dinner', text:'Zum Abendessen gab es nur dünnen Reisbrei.\nSein kleiner Bruder Midori sagte:\n"Großer Bruder, ich habe Hunger..."', choices:[
  {t:'"Im Frühling essen wir uns richtig satt", sagen', go:'o3r', set:{care:'hagemasu'}},
  {t:'Ihm die Hälfte des eigenen Breis geben', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"Deine Hälfte schmeckt auch gut!"\nMidori lächelte fröhlich.\nAkas Bauch blieb ein wenig leer, aber in seiner Brust wurde es warm.'
  : 'Midori nickte kurz und aß den Rest seines Breis ganz sorgsam auf.\nBis zum Frühling ist es noch weit.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'In jener Nacht.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'Der Häuptling rief alle zusammen und sagte:\n"Wir leihen uns den Schatz aus dem Dorf. Damit die Kinder den Winter überstehen."\nIn Akas Brust wurde es unruhig.\nWas soll er tun?', choices:[
  {t:'"Aber das ist Diebstahl!" rufen', go:'c_dorobo'},
  {t:'Schweigen und mitgehen', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'Das ist Diebstahl!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Alles ringsum wurde ganz still.\nLange, lange schwieg der Häuptling...\n"Und was sollen wir dann tun?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka dachte angestrengt nach.', choices:[
  {t:'Die Leute im Dorf um Hilfe bitten', go:'o7a'},
  {t:'Mit eigenen Händen ein Feld anlegen', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"Wir verneigen uns und bitten um etwas zu essen. Dafür danken wir ihnen mit der Kraft der Oger."\nDer Häuptling verschränkte die dicken Arme und nickte langsam.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'Am nächsten Tag stiegen die Oger in ein Boot und fuhren zum Dorf.\nWaffen hatten sie keine dabei, dafür Körbe voller wilder Weintrauben.\nDas brauchte viel, viel mehr Mut, als einen Schatz zu rauben.\nUnd was das Dorf antwortete... das ist eine andere Geschichte.'},
o7b:{art:'oni_village', text:'"Räumen wir alle Felsen weg und legen ein Feld an! Mit der Kraft der Oger schaffen wir das!"\nVon diesem Tag an trugen alle Oger der Insel Felsen fort.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Volle Ogerkraft!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'Die Felsen waren groß wie Berge, und die Arbeit wollte kein Ende nehmen.\nAber seltsam: Der Schweiß, den alle gemeinsam vergossen, fiel ihnen gar nicht schwer.\nDer Frühling kam, und im Feld zeigten sich kleine grüne Triebe.\nMidori hüpfte und sprang vor Freude.\nUnd sie lebten glücklich bis ans Ende ihrer Tage.'},

o5b:{art:'oni_raid', text:'Aka stieg mit dem Häuptling und den anderen ins Boot.\nAuch als sie das Dorf erreichten, konnte Aka sich nicht vom Boot rühren.\nIn der Ferne schwankten Lichter, und ihm war, als hörte er jemanden weinen.', next:'o6b'},
o6b:{art:'oni_takara', text:'Auch zurück auf der Insel blieb es unruhig in Akas Brust.\nVor dem aufgetürmten Schatz dachte Aka nach.', choices:[
  {t:'Heimlich ein Stück des Schatzes zurückbringen', go:'o7c'},
  {t:'Nichts tun, während die Nacht vergeht', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka nahm ein kleines Stück des Schatzes und fuhr hinaus auf das nächtliche Meer.\nEr legte es leise an den Strand des Dorfes, und als er zurückwollte...\n"Herr Oger, bringst du das zurück?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Entdeckt?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'Ein kleines Mädchen stand da und sah Aka ruhig an.\nMit klopfendem Herzen nickte Aka einmal.\nDas Mädchen lächelte und sagte leise:\n"Danke. Das bleibt unser Geheimnis."\nDie Nacht war kalt, und trotzdem wurde es Aka in der Brust ganz mollig warm.'},

o7d:{art:'oni_night', text:'Aka konnte nichts tun, und viele Nächte vergingen.\nEines Abends saß er schlaflos oben auf der Klippe und sah aufs Meer, da kam von weit draußen ein kleines Boot näher.\nWer wohl in diesem Boot sitzt?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'Der Morgen dämmerte.'}, then:'o8'},
o8:{art:'oni_village', text:'Auf der ganzen Insel brach ein großer Aufruhr aus.\n"Ein Mensch! Ein Mensch mit Stirnband kommt hierher!"\nAkas Herz machte einen Satz.\nWas soll er tun?', choices:[
  {t:'Midori hinter den Felsen verstecken', go:'o9a', set:{guard:'midori'}},
  {t:'Zum Häuptling laufen', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Pst. Hier bist du sicher."\nAka hielt Midoris kleine Hand ganz fest.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'Der Häuptling umklammerte seine Eisenkeule und starrte zum Tor.\nSein Rücken sah größer aus als sonst.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'Der Kampf war in einem Augenblick vorbei.\nDie Eisenkeule des Häuptlings flog davon, und Aka sah aus seinem Versteck mit angehaltenem Atem zu.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'I-ich gebe auf!!'}, then:'o11'},
o11:{art:'oyabun', text:'Der junge Mensch mit dem Stirnband steckte das Schwert weg und redete über irgendetwas.\nVielleicht könnte Aka ihn jetzt ansprechen.\nWas soll er tun?', choices:[
  {t:'Mut fassen und aus dem Versteck treten', go:'e_o_asa'},
  {t:'Im Versteck bleiben und ihnen nachsehen', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"Ä-ähm! Ich helfe euch, den Schatz zu tragen!"\nAls Aka aus dem Versteck sprang, machte der junge Mensch große Augen.\nDann lächelte er und sagte:\n"Danke. Du bist ein mutiger Oger."\nDie Morgensonne schien warm auf die beiden.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'Der Mut, ihn anzusprechen, kam nicht.\nDas Boot mit dem Schatz wurde draußen auf dem Meer immer kleiner.\nAber Aka fasste einen Entschluss.\nBeim nächsten Mal sagt er bestimmt "Danke" und auch "Es tut mir leid".\nUnd dieses "nächste Mal" kommt gewiss, und gar nicht so fern.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Dies ist noch eine Geschichte: die Geschichte eines Fasans, der in den Bergen lebt.\nDer Hund ist stark. Der Affe klettert meisterhaft.\nUnd er selbst ist klein und hat keine Kraft...\nDer Fasan hatte immer ein wenig zu wenig Zutrauen zu sich.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Kann man mit so kleinen Flügeln\nüberhaupt etwas ausrichten?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Auch heute ein Spaziergang am Himmel, ganz allein.\nWohin soll der Flug gehen?', choices:[
  {t:'Über die Berge fliegen', go:'k2r', set:{kfly:'yama'}},
  {t:'Hinaus zum Meer fliegen', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Von hoch über den Bergen sieht das Dorf aus wie eine Spielzeugkiste.\nAus den Schornsteinen stieg der Rauch, Wölkchen um Wölkchen.'
  : 'Über dem Meer weht der Wind stark, und die Federn flattern laut.\nWeit draußen war eine schwarze Insel ganz allein zu sehen.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'Eines Tages entdeckte er unten auf dem Weg einen seltsamen Zug.\nEin junger Mensch mit Stirnband, ein Hund und ein Affe.\nEs sieht aus, als hätten sie Freude daran.', choices:[
  {t:'Mutig sein und sie ansprechen', go:'k4a'},
  {t:'Noch ein wenig vom Himmel aus zusehen', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'Flatter, flatter, der Fasan flog herab und rief so laut er nur konnte:\n"D-darf ich auch mitkommen?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Während er ihnen leise vom Himmel aus folgte, bemerkte ihn der junge Mensch und winkte.\n"Freund aus der Luft, komm doch mit uns!"', next:'k5'},
k5:{art:'kiji_join', text:'"Hier, ein Hirseklößchen für dich."\nEs war so süß, wie er noch nie etwas geschmeckt hatte.\n"D-dafür überlasst mir alles am Himmel!"\nsagte der Fasan so laut er nur konnte.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'Der Fasan schließt sich an!!'}, then:'k6'},
k6:{art:'fune', text:'Auf dem Boot fiel dem Fasan etwas auf.\nÜber das Meer fliegen kann nur er allein.\nWeder der Hund noch der Affe können das.', choices:[
  {t:'Hoch fliegen und die ganze Insel ansehen', go:'k6r', set:{kscout:'high'}},
  {t:'Tief fliegen und das Tor aus der Nähe prüfen', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Vom hohen Himmel aus sah er die ganze Form der Insel.\nHinter dem Tor entdeckte er auch einen schmalen Felsenpfad.\n"Leute, es gibt einen Weg von hinten!"'
  : 'Dicht über den Wellen flog er bis vor das Tor.\nWie viele Wachen dort standen und wie groß ihre Eisenkeulen waren, sah er sich genau an.\n"Leute, ich weiß jetzt ganz genau, was uns erwartet!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'Der Kampf mit dem Ogerhäuptling begann!\nSausend fuhr die Eisenkeule des Häuptlings auf den Hund herab.\nDem Fasan machte das Herz einen Satz.\nWas soll er tun?', choices:[
  {t:'Ihm vor die Augen fliegen!', go:'c_kwaza1'},
  {t:'Laut alle warnen!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'Der Sturzflug des Fasans!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'Was?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Ohne nachzudenken flog der Fasan dem Häuptling vor das Gesicht.\nFlatter, flatter mit den Flügeln, und der Häuptling sah nichts mehr!\nIn diesem Augenblick sprang der Hund zur Seite, und der Affe nahm die Eisenkeule weg.\n"I-ich gebe auf!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Hund, hinter dir!!'}, then:'k8b'},
k8b:{art:'maitta', text:'Eine Stimme, laut wie ein Bergecho, hallte über den Kampfplatz.\nDer Hund wich leichtfüßig aus, und Momotaros Schwert blitzte auf.\n"I-ich gebe auf!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Nach dem Kampf sagte Momotaro:\n"Das größte Verdienst hat heute der Fasan."\nDer Hund und der Affe nickten beide kräftig.\nTief in der kleinen Brust wurde es mit einem Mal warm.\nAuch wer klein ist, kann etwas.\nDer Fasan senkt den Kopf nicht mehr.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Ohne diesen Ruf wäre es schlecht ausgegangen", sagte der Hund.\n"Den Himmel im Blick behalten kann nur der Fasan", sagte der Affe.\nDem Fasan wurde es peinlich, und er versteckte sein Gesicht hinter einem Flügel.\nAuch wer klein ist, kann etwas.\nDer Fasan senkt den Kopf nicht mehr.'}

};

function HOBBY_LINE_DE(f){
  return {
    sumo:'Die Kraft in den Hüften, im Sumo geübt, kam ihm im richtigen Moment zugute.',
    run:'Die Beine, beim Wettlaufen geübt, waren schneller als alle anderen.',
    help:'Die Arme, bei der täglichen Arbeit geübt, waren nicht umsonst so stark.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (DE) ================= */
var ZK_DE = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triumph: alle zusammen',   h:'Mit allen 3 Gefährten zugleich kämpfen...'},
  {id:'a_katana', n:'Triumph: das Schwert',     h:'Mit dem Schwert kämpfen und den Schatz heimbringen...'},
  {id:'a_dog',    n:'Triumph: der Hund',        h:'Den Hund kämpfen lassen und den Schatz heimbringen...'},
  {id:'a_saru',   n:'Triumph: der Affe',        h:'Den Affen kämpfen lassen und den Schatz heimbringen...'},
  {id:'a_kiji',   n:'Triumph: der Fasan',       h:'Den Fasan kämpfen lassen und den Schatz heimbringen...'},
  {id:'b_naka',   n:'Frieden mit den Ogern',    h:'Nach dem Sieg nach dem Grund fragen...'},
  {id:'c_yaku',   n:'Das Versprechen im Gespräch', h:'Ohne Gefährten gehen und das Schwert einstecken...'},
  {id:'d_kibi',   n:'Das Wunder der Klößchen',  h:'Mit vielen Klößchen allein gehen und das Schwert einstecken...'},
  {id:'o_negai',  n:'Die Körbe mit Wildtrauben', h:'In der Ogergeschichte einschreiten und das Bitten wählen...'},
  {id:'o_hatake', n:'Das Feld auf der Ogerinsel', h:'In der Ogergeschichte einschreiten und das Feld wählen...'},
  {id:'o_kaesu',  n:'Das Geheimnis am Nachtstrand', h:'Schweigend mitgehen und den Schatz zurückbringen...'},
  {id:'o_asa',    n:'Das Versprechen im Morgenlicht', h:'Am Morgen, an dem nichts gelang, Mut fassen...'},
  {id:'o_miokuri',n:'Eines Tages die Worte',    h:'Ohne Mut dem Boot nachsehen...'},
  {id:'k_hero',   n:'Der kleine Held',          h:'In der Fasangeschichte hineinfliegen...'},
  {id:'k_voice',  n:'Der Wächter des Himmels',  h:'In der Fasangeschichte laut rufen...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_DE, ZK_DE };
