"use strict";
/* Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both)
   scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Portuguese. */

var SCENES_PT = {

/* ================= Momotaro ================= */

m1:{art:'yama', text:'Era uma vez, em certo lugar, um velhinho e uma velhinha.\nO velhinho ia para a montanha juntar lenha, e a velhinha ia para o rio lavar a roupa.', next:'m2'},

m2:{art:'momo_river', text:'Enquanto lavava a roupa no rio, um pêssego bem grande veio boiando rio abaixo, plof, plof, plof.', choices:[
  {t:'Levar o pêssego para casa', go:'m3a', set:{open:'home'}},
  {t:'Abrir o pêssego ali mesmo', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'Upa, upa! A velhinha carregou o pêssego até a sua casa.\nJunto com o velhinho, ela logo tentou abrir o pêssego, e então...', next:'c_paka'},
m3b:{art:'momo_river', text:'A velhinha não conseguiu esperar mais. Decidiu abrir o pêssego ali mesmo, sobre uma pedra da beira do rio. E então...', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'Crac!!'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? 'De dentro saltou um menino cheio de saúde!\nA velhinha pegou a criança no colo e correu depressa para casa.\nCheios de alegria, ela e o velhinho deram a ele o nome de Momotaro.'
  : 'De dentro saltou um menino cheio de saúde!\nCheios de alegria, os dois deram ao menino nascido do pêssego o nome de Momotaro.', next:'m5'},

m5:{art:'kids', text:'Momotaro adorava brincar com as crianças da aldeia.\nO que Momotaro vai fazer hoje?', choices:[
  {t:'Lutar sumô', go:'m5a', set:{hobby:'sumo'}},
  {t:'Apostar corrida', go:'m5b', set:{hobby:'run'}},
  {t:'Ajudar nas tarefas', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'Até as crianças maiores rolavam no chão, uma atrás da outra.\n"Essa força é a maior da aldeia!", diziam todos, espantados.', next:'m6'},
m5b:{art:'kids', text:'Não havia em lugar nenhum uma criança mais rápida que Momotaro.\nEle corria como o vento, e todos ficavam de boca aberta.', next:'m6'},
m5c:{art:'kids', text:'Nos braços de Momotaro, até a lenha mais pesada ficava leve.\nPara o velhinho e a velhinha, era uma grande ajuda.', next:'m6'},

m6:{art:'momotaro', text:'Momotaro cresceu depressa e tornou-se um jovem forte e gentil.', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'Naquela noite.\nAconteceu uma coisa terrível na aldeia.'}, then:'m7'},
m7:{art:'village_sad', text:'Na manhã seguinte.\nDescobriram que os ogros da Ilha dos Ogros tinham levado o tesouro da aldeia.\nOs moradores não sabiam mais o que fazer.', next:'m8'},
m8:{art:'momotaro', text:'Momotaro levantou-se.\n"Eu vou até a Ilha dos Ogros e trago o tesouro de volta!"', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? 'A velhinha fez para ele os melhores bolinhos de painço de todo o Japão.\nCom os bolinhos na cintura, tudo estava pronto para a partida.'
  : 'A velhinha disse que ia fazer para ele os melhores bolinhos de painço de todo o Japão.\nE agora, o que Momotaro vai fazer?', choices:[
  {t:'Pedir muitos bolinhos', go:'m10', set:{dango:'full'}},
  {t:'Levar só alguns e viajar leve', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'Na manhã da partida.\nA velhinha trouxe duas faixas de cabeça.\nQual delas Momotaro vai amarrar?', choices:[
  {t:'A faixa branca', go:'m10r', set:{band:'white'}},
  {t:'A faixa vermelha', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? 'Ao amarrar bem firme a faixa vermelha, o fundo do peito ficou quente.\n"Já vou!"'
  : 'Ao amarrar bem firme a faixa branca, o coração ficou calmo e claro.\n"Já vou!"', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'Rumo aos ogros!!'}, then:'m11'},

m11:{art:'michi', text:'O caminho se dividia em dois.\nUm passava por cima da montanha, o outro seguia pela beira do mar.\nPor qual deles Momotaro vai?', choices:[
  {t:'Seguir pelo caminho da montanha', go:'m11a', set:{road:'yama'}},
  {t:'Seguir pelo caminho da beira do mar', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'Do alto da montanha, ele viu no mar distante uma ilha negra, sozinha.\nAquela é a Ilha dos Ogros...\nMomotaro apertou os punhos com força.', next:'m12'},
m11b:{art:'umizoi', text:'Momotaro andou pela praia de areia, ouvindo o som das ondas.\nA seus pés, encontrou uma linda concha cor de pêssego.\nVai ser um presente para a velhinha.', next:'m12'},

m12:{art:'dog', text:'Enquanto seguia o caminho, um Cão veio trotando.\n"Senhor Momotaro, para onde vai? Se me der um bolinho de painço, eu vou junto!"', choices:[
  {t:'Dar um bolinho ao Cão', go:'c_dog_join', set:{dog:1}},
  {t:'"Desculpe, estou com pressa"', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'O Cão entrou para o grupo!!'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '"Tenho poucos, mas vamos dividir na metade."\nO Cão abanou o rabo bem forte, de alegria!'
  : 'O Cão abanou o rabo bem forte, de alegria!\n"Eu sigo junto, para onde for!"', next:'m13'},
m12n:{art:'dog', text:'Um pouco desapontado, o Cão ficou olhando Momotaro se afastar.', next:'m13'},

m13:{art:'saru', text:'Depois, um Macaco chamou lá de cima de uma árvore.\n"Se me der um bolinho de painço, deixe o caminho comigo!"', choices:[
  {t:'Dar um bolinho ao Macaco', go:'c_saru_join', set:{saru:1}},
  {t:'"Desculpe, preciso seguir depressa"', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'O Macaco entrou para o grupo!!'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? 'Mesmo com um pedacinho de bolinho, o Macaco ficou muito contente.\nDesceu ligeiro da árvore e bateu no próprio peito.'
  : 'O Macaco desceu ligeiro da árvore e bateu no próprio peito.\n"Pode deixar comigo!"', next:'m14'},
m13n:{art:'saru', text:'Lá de cima da árvore, o Macaco acenou com a mão.', next:'m14'},

m14:{art:'kiji', text:'Do céu, um Faisão desceu voando.\n"Se me der um bolinho de painço, eu vou ver do alto como está a Ilha dos Ogros!"', choices:[
  {t:'Dar um bolinho ao Faisão', go:'c_kiji_join', set:{kiji:1}},
  {t:'"Desculpe, já preciso ir"', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'O Faisão entrou para o grupo!!'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? 'O Faisão comeu com todo o cuidado a metade do bolinho.\nContente, abriu as asas e deu uma volta pelo céu.'
  : 'Contente, o Faisão abriu as asas e deu uma volta pelo céu.\n"O céu pode deixar comigo!"', next:'m15'},
m14n:{art:'kiji', text:'O Faisão deu uma volta bem grande e foi voando na direção da montanha.', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = 'No porto, havia um barco pequeno.';
  if(n===0) t += '\nMomotaro não levava companheiros, mas já estava decidido.';
  else if(n===1) t += '\nOs dois embarcaram juntos, unindo as forças.';
  else t += '\nCom todos a bordo, o barco ficou lotado.';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'Zarpaaar!!'}, then:'m16'},

m16:{art:'fune_night', text:'O mar da noite estava calmo.\nSob o céu estrelado, Momotaro ficou pensando.', choices:[
  {t:'Lembrar o sabor dos bolinhos da velhinha', go:'m17', set:{think:'dango'}},
  {t:'Pensar no tesouro da aldeia', go:'m17', set:{think:'takara'}},
  {t:'Imaginar como serão os ogros', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'O sabor doce dos bolinhos parecia lhe dar coragem.\nAmanhã vai dar tudo certo.',
  takara:'Os rostos de todos da aldeia vieram à sua mente.\nPreciso trazer o tesouro de volta.',
  oni:'Será que são fortes? Será que dão medo?\n...Só vou saber quando encontrá-los.'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = 'Na luz da manhã, a ilha foi ficando cada vez mais perto.';
  if(f.first) t += '\nO Faisão voou na frente e mostrou a todos onde ficava a ilha.';
  else if(f.kiji) t += '\nO Faisão voou na frente e logo voltou.\n"Tem um portão grande só! E, por trás, um caminho de pedras!"';
  else t += '\nNa proa do barco, Momotaro olhou direto para a ilha.';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'Lá está ela, a Ilha dos Ogros!'}, then:'m19'},

m19:{art:'onigashima', text:'Na ilha cheia de pedras, erguia-se um portão preto bem grande.\nE agora, por onde entrar?', choices:f=>[
  {t:'Entrar de frente, pelo portão principal', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'Ir pelo caminho de pedras que o Faisão achou', go:'m20', set:{gate:'back'}}
    : {t:'Dar a volta na ilha e procurar outra entrada', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? 'Momotaro se pôs diante do portão, de cabeça erguida.\n"Ogros! Eu vim buscar o tesouro da aldeia!"'
  : (f.kiji
    ? 'Guiados pelo Faisão, subiram em silêncio pelo caminho de pedras dos fundos.\nOs ogros de guarda ainda não tinham percebido nada.'
    : 'Entre as pedras, encontraram um caminho estreito.\nSubiram em silêncio, e os ogros de guarda ainda não tinham percebido nada.'), next:'m21'},
m21:{art:'onigashima', text:'O coração começou a bater forte.\nChegou a hora.', choices:[
  {t:'Respirar fundo uma vez', go:'m21r', set:{calm:1}},
  {t:'Entrar de uma vez, com tudo', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? 'Inspira, expira.\nO coração se acalmou de vez. Muito bem, vamos.'
  : 'Antes mesmo de pensar, o corpo já estava em movimento!', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'Com um tremor no chão, apareceu o chefe dos ogros!', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'Quem vem lá!!'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'Devolvam o tesouro!!'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '"Vim buscar o tesouro da aldeia. Eu sou Momotaro!"';
  if(f.first) return t;
  t += '\n' + ({
    dango:'(Ao lembrar o sabor dos bolinhos, o medo sumiu, coisa estranha.)',
    takara:'(Todos na aldeia estão esperando. Não posso perder!)',
    oni:'(É grande. Parece forte. Mas... tem um olhar meio triste.)'
  }[f.think] || '');
  t += '\nComo Momotaro vai lutar?';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'Todos juntos, agora!', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'Lutar com a espada!', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'Cão, vai!', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'Macaco, vai!', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'Faisão, vai!', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'Guardar a espada e conversar', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'Todos juntos, agora!!'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'A mordida do Cão!!'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'O arranhão do Macaco!!'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'A bicada do Faisão!!'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'O golpe da espada!!'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'A investida do Cão!!'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'O golpe veloz do Macaco!!'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'O mergulho do Faisão!!'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'O quê?!'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'Acertou em cheio!!'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'O Cão mordeu a perna, o Macaco arranhou as costas, e o Faisão bicou a cabeça, batendo as asas.\nNem mesmo o chefe deu conta do ataque dos 3 ao mesmo tempo.\n"E-eu desisto!"\nQuando as forças se juntam, não há nada a temer.', next:'m24'},

rk:{art:'maitta', text:f=>'A espada de Momotaro foi rápida como um relâmpago!\nA clava de ferro do chefe voou bem alto no céu.\n"E-eu desisto!"\n' + HOBBY_LINE_PT(f), next:'m24'},
rd:{art:'maitta', text:'O Cão disparou como o vento e mordeu a perna do chefe!\nO chefe caiu sentado no chão com um baque.\n"E-eu desisto!"\nMomotaro, que tinha confiado no Cão, riu de cabeça erguida.', next:'m24'},
rs:{art:'maitta', text:'O Macaco saltou de um lado para outro e tomou num instante a clava de ferro do chefe.\n"E-eu desisto!"\nCom a rapidez do Macaco, Momotaro aplaudiu sem nem pensar!', next:'m24'},
rj:{art:'maitta', text:'O Faisão mergulhou do céu! Bateu as asas e tapou os olhos do chefe!\nO chefe ficou tonto e disse: "E-eu desisto!"\nCom um companheiro do céu dá para contar. Momotaro acenou bem alto.', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = 'O chefe encolheu-se e pediu desculpas.\n"Vamos devolver o tesouro. Por favor, nos perdoem..."';
  if(!f.first) t += '\nE agora, o que Momotaro vai fazer?';
  return t;
}, choices:[
  {t:'Voltar para a aldeia com o tesouro', go:'e_gaisen'},
  {t:'Perguntar por que levaram o tesouro', go:'m25'}
]},
m25:{art:'talk', text:'Aos poucos, o chefe começou a contar.\n"A Ilha dos Ogros é só pedra, nada cresce aqui. Nós não queríamos que as nossas crianças passassem fome..."', next:'e_naka'},

t1:{art:'oyabun', text:'Momotaro não levou a mão à espada e olhou direto para a frente.', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'Quero conversar!!'}, then:'t2'},
t2:{art:'talk', text:'O chefe arregalou os olhos e, aos poucos, começou a contar.\n"A Ilha dos Ogros é só pedra, nada cresce aqui. Pelas nossas crianças, não tinha outro jeito a não ser pegar o tesouro emprestado..."\nMomotaro ouviu o chefe e ficou pensando.', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'Dividir os bolinhos de painço com todos', go:'e_kibi'});
  c.push({t:'Prometer: devolver o tesouro e ser amigo da aldeia', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = 'Momotaro voltou para a aldeia com uma carroça cheia de tesouro.\nA aldeia inteira comemorou!\n';
  t += ({
    minna:'O Cão, o Macaco e o Faisão desfilaram na frente, de cabeça erguida.\nO feito dos 3 companheiros foi contado na aldeia por muito tempo.',
    katana:'Os moradores da aldeia só falavam do belo golpe de espada de Momotaro.',
    dog:'Quem puxou a carroça foi o Cão, que tanto ajudou. De cabeça erguida, ele foi na frente do cortejo da festa.',
    saru:'O Macaco carregava no ombro a clava de ferro que tomou, todo orgulhoso.',
    kiji:'O Faisão deu uma volta no céu da festa e deixou cair uma linda pena.'
  }[f.style] || '');
  if(f.shell) t += '\nPara a velhinha, ele entregou também a concha cor de pêssego.\n"Dá para ouvir o mar aqui dentro", riu a velhinha.';
  t += '\nE viveram felizes para sempre.';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = 'Momotaro recebeu o tesouro e, em troca, resolveu mandar arroz e batatas-semente para a Ilha dos Ogros.\nDa primavera seguinte em diante, os ogros passaram a vir ajudar na lavoura da aldeia.\nE, na festa da aldeia, os tambores dos ogros ressoavam.';
  if(f.shell) t += '\nA velhinha fez a concha soar no ritmo dos tambores.';
  t += '\nE viveram felizes para sempre.';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '"Vamos devolver o tesouro. É uma promessa."\nMomotaro e o chefe entrelaçaram os dedos mindinhos para selar a promessa.\nDepois disso, a Ilha dos Ogros e a aldeia foram aos poucos indo e vindo uma à outra.\nMomotaro voltou sem lutar, e os moradores da aldeia o elogiaram: "Isso é que é!"';
  if(f.shell) t += '\nQuando ele mostrou a concha, a velhinha abriu um sorriso.';
  t += '\nE viveram felizes para sempre.';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'"Aqui, os melhores bolinhos de painço de todo o Japão. Vamos comer juntos."\nOs ogros encheram a boca de bolinhos, e as lágrimas rolaram.\n"Nunca comemos nada tão gostoso na vida..."\nMomotaro e os ogros tiraram as pedras juntos e fizeram uma lavoura.\nEste é o final mais estranho e mais caloroso de todos.\nE viveram felizes para sempre.'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'Esta é a história de Aka, um jovem ogro que morava na Ilha dos Ogros.\nA Ilha dos Ogros é só pedra. Mesmo fazendo uma lavoura, nada cresce.', next:'o2'},
o2:{art:'oni_village', text:'Qual vai ser o trabalho de Aka hoje?', choices:[
  {t:'Buscar água lá embaixo do penhasco', go:'o2r', set:{owork:'mizu'}},
  {t:'Tirar as pedras da lavoura', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? 'Com o balde pesado no ombro, ele subiu o caminho do penhasco muitas e muitas vezes.\nLá em cima, os irmãos menores esperavam com a garganta seca.'
  : 'Ele tirou uma das pedras do lugar, mas a terra embaixo estava dura como pedra.\nMesmo assim, Aka acredita que um dia vai haver uma lavoura ali.', next:'o3'},
o3:{art:'oni_dinner', text:'No jantar, só havia uma papa de arroz rala.\nMidori, o irmão mais novo, disse:\n"Irmão, estou com fome..."', choices:[
  {t:'Dizer: "Quando chegar a primavera, vamos comer bastante"', go:'o3r', set:{care:'hagemasu'}},
  {t:'Dividir a metade da própria papa', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '"A parte do meu irmão é gostosa também!"\nMidori abriu um sorriso.\nA barriga de Aka ficou um pouco vazia, mas o peito ficou quentinho.'
  : 'Midori concordou com a cabeça e comeu o resto da papa com todo o cuidado.\nA primavera ainda está longe.', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'Naquela noite.'}, then:'o4'},
o4:{art:'oni_kaigi', text:'O chefe reuniu todos e disse:\n"Vamos pegar o tesouro da aldeia emprestado. É para as crianças passarem o inverno."\nO peito de Aka ficou inquieto.\nO que Aka vai fazer?', choices:[
  {t:'Dizer: "Mas isso é roubo!"', go:'c_dorobo'},
  {t:'Ficar calado e ir junto', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'Isso é roubo!!'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'Tudo em volta ficou em silêncio.\nO chefe ficou calado por muito, muito tempo...\n"Então, o que é que devemos fazer?"', next:'o6a'},
o6a:{art:'oni_kaigi', text:'Aka pensou com todas as forças.', choices:[
  {t:'Vamos pedir ajuda aos moradores da aldeia', go:'o7a'},
  {t:'Vamos fazer uma lavoura com as nossas próprias mãos', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'"Vamos baixar a cabeça e pedir que dividam a comida. Em troca, agradecemos com a força dos ogros."\nO chefe cruzou os braços grossos e concordou devagar com a cabeça.', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'No dia seguinte, os ogros embarcaram e seguiram para a aldeia.\nNão levaram armas de guerra, e sim cestos de uvas silvestres.\nIsso exigia muito, muito mais coragem do que roubar um tesouro.\nE a resposta da aldeia... isso já é outra história.'},
o7b:{art:'oni_village', text:'"Vamos tirar todas as pedras e fazer uma lavoura! Com a força dos ogros dá para conseguir!"\nDaquele dia em diante, todos os ogros da ilha começaram a carregar pedras.', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'Força total de ogro!!'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'As pedras eram grandes como montanhas, e o trabalho não terminava nunca.\nMas é estranho: o suor que todos derramavam juntos não pesava nada.\nA primavera chegou, e na lavoura apareceram pequenos brotos.\nMidori pulou e saltou de alegria.\nE viveram felizes para sempre.'},

o5b:{art:'oni_raid', text:'Aka embarcou no barco com o chefe e os outros.\nMesmo chegando à aldeia, Aka não conseguiu sair de cima do barco.\nAo longe, as luzes balançavam, e ele achou que ouviu alguém chorando.', next:'o6b'},
o6b:{art:'oni_takara', text:'Mesmo de volta à ilha, o peito de Aka continuou inquieto.\nDiante do tesouro empilhado, Aka ficou pensando.', choices:[
  {t:'Ir devolver um pedaço do tesouro, escondido', go:'o7c'},
  {t:'Ficar sem fazer nada, enquanto a noite passa', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'Aka pegou um pequeno tesouro e saiu de barco pelo mar da noite.\nDeixou o tesouro devagar na praia da aldeia e, quando ia voltar...\n"Senhor ogro, você veio devolver isso?"', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'Fui descoberto?!'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'Uma menina pequena estava ali, olhando bem para Aka.\nCom o coração batendo forte, Aka concordou com a cabeça.\nA menina abriu um sorriso e disse baixinho:\n"Obrigada. Vai ser o nosso segredo."\nA noite era fria, mas o peito de Aka estava quentinho.'},

o7d:{art:'oni_night', text:'Aka não conseguiu fazer nada, e muitas noites se passaram.\nUma noite, sem sono, Aka olhava o mar do alto do penhasco quando um barco pequeno veio se aproximando de longe.\nQuem será que está naquele barco?', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'O dia amanheceu.'}, then:'o8'},
o8:{art:'oni_village', text:'A ilha inteira virou um alvoroço.\n"É um humano! Um humano de faixa na cabeça está vindo para cá!"\nO coração de Aka deu um salto.\nO que Aka vai fazer?', choices:[
  {t:'Esconder Midori atrás das pedras', go:'o9a', set:{guard:'midori'}},
  {t:'Correr para perto do chefe', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'"Shhh. Aqui você fica seguro."\nAka apertou com força a mãozinha de Midori.', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'O chefe segurava a clava de ferro e encarava o portão.\nAquelas costas pareciam maiores do que de costume.', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'A luta acabou num piscar de olhos.\nA clava de ferro do chefe voou longe, e Aka observava tudo do esconderijo, prendendo a respiração.', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'E-eu desisto!!'}, then:'o11'},
o11:{art:'oyabun', text:'O jovem de faixa na cabeça guardou a espada e conversava alguma coisa.\nTalvez agora desse para falar com ele.\nO que Aka vai fazer?', choices:[
  {t:'Criar coragem e sair do esconderijo', go:'e_o_asa'},
  {t:'Ficar escondido e vê-los partir', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'"E-ei! Eu ajudo a carregar o tesouro!"\nAo ver Aka saltar do esconderijo, o jovem arregalou os olhos.\nDepois, abriu um sorriso e disse:\n"Obrigado. Você é um ogro corajoso."\nO sol da manhã iluminou os dois com calor.'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'A coragem de falar não veio.\nO barco carregado de tesouro foi ficando pequeno do outro lado do mar.\nMas Aka tomou uma decisão.\nNa próxima vez que se encontrarem, vai dizer "obrigado" e também "desculpe".\nEssa "próxima vez" vai chegar, e num futuro nem tão distante.'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'Esta é mais uma história: a história de um Faisão que morava na montanha.\nO Cão tem força. O Macaco é mestre em subir em árvores.\nComparado com eles, ele é pequeno e não tem força nenhuma...\nO Faisão sempre teve um pouco de falta de confiança em si mesmo.', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'Com asas tão pequenas,\nserá que dá para fazer alguma coisa?'}, then:'k2'},
k2:{art:'kiji_yama', text:'Hoje também, um passeio pelo céu, sozinho.\nPor onde voar?', choices:[
  {t:'Voar por cima da montanha', go:'k2r', set:{kfly:'yama'}},
  {t:'Voar na direção do mar', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? 'Visto do alto da montanha, a aldeia parece uma caixa de brinquedos.\nA fumaça das chaminés subia, pof, pof.'
  : 'Sobre o mar o vento é forte, e as penas batem com barulho.\nAo longe, dava para ver uma ilha negra, sozinha.', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'Um dia, ele viu um grupo curioso caminhando pela estrada lá embaixo.\nUm jovem de faixa na cabeça, um Cão e um Macaco.\nParecia que estavam se divertindo.', choices:[
  {t:'Criar coragem e falar com eles', go:'k4a'},
  {t:'Observar mais um pouco lá do céu', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'Batendo as asas, o Faisão desceu voando e falou com toda a voz que tinha:\n"E-eu também posso ir junto?"', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'Enquanto seguia o grupo em silêncio pelo céu, o jovem percebeu e acenou.\n"Amigo do céu, venha junto também!"', next:'k5'},
k5:{art:'kiji_join', text:'"Aqui, um bolinho de painço para você."\nEra tão doce que quase derretia na boca.\n"E-em troca, deixem o céu comigo!"\ndisse o Faisão com toda a voz que tinha.', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'O Faisão entrou para o grupo!!'}, then:'k6'},
k6:{art:'fune', text:'Em cima do barco, o Faisão percebeu uma coisa.\nQuem consegue voar sobre o mar é só ele.\nNem o Cão nem o Macaco conseguem fazer isso.', choices:[
  {t:'Voar alto e ver a ilha inteira', go:'k6r', set:{kscout:'high'}},
  {t:'Voar baixo e examinar de perto o portão', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? 'Do alto do céu, dava para ver toda a forma da ilha.\nPor trás do portão, ele viu também um caminho de pedras estreito.\n"Pessoal, tem um caminho pelos fundos!"'
  : 'Voou rente às ondas, até bem em frente ao portão.\nContou quantos ogros estavam de guarda e viu direitinho o tamanho das clavas de ferro.\n"Pessoal, sei tudo sobre o inimigo!"', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'A luta contra o chefe dos ogros começou!\nA clava de ferro do chefe desceu com força sobre o Cão.\nO peito do Faisão deu um salto.\nO que o Faisão vai fazer?', choices:[
  {t:'Voar na frente dos olhos dele!', go:'c_kwaza1'},
  {t:'Avisar todo mundo aos gritos!', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'O mergulho do Faisão!!'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'O quê?!'}, then:'k8a'},
k8a:{art:'maitta', text:'Sem pensar em nada, o Faisão voou bem na frente do rosto do chefe.\nBateu as asas e tapou os olhos dele!\nNaquele instante, o Cão escapou num salto e o Macaco tomou a clava de ferro.\n"E-eu desisto!"', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'Cão, atrás de você!!'}, then:'k8b'},
k8b:{art:'maitta', text:'Uma voz grande como um eco de montanha ressoou pelo campo de batalha.\nO Cão desviou num salto, e a espada de Momotaro brilhou.\n"E-eu desisto!"', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'Depois da luta, Momotaro disse:\n"O maior feito de hoje foi o do Faisão."\nO Cão e o Macaco concordaram com a cabeça, bem forte.\nNo fundo do pequeno peito, algo ficou quente de repente.\nMesmo sendo pequeno, há coisas que dá para fazer.\nO Faisão não abaixa mais a cabeça.'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'"Sem aquele grito, teria sido perigoso", disse o Cão.\n"Vigiar o céu, só o Faisão consegue", disse o Macaco.\nO Faisão ficou sem jeito e escondeu o rosto atrás de uma asa.\nMesmo sendo pequeno, há coisas que dá para fazer.\nO Faisão não abaixa mais a cabeça.'}

};

function HOBBY_LINE_PT(f){
  return {
    sumo:'A força do quadril, treinada no sumô, serviu bem na hora certa.',
    run:'As pernas, treinadas nas corridas, não perdem para ninguém.',
    help:'Os braços, treinados nas tarefas de todo dia, não são de brincadeira.'
  }[f.hobby] || '';
}

/* ================= Ending Collection (PT) ================= */
var ZK_PT = [
  {section:'Momotaro'},
  {id:'a_minna',  n:'Triunfo: todos juntos',    h:'Lutar com os 3 companheiros ao mesmo tempo...'},
  {id:'a_katana', n:'Triunfo: a espada',        h:'Lutar com a espada e levar o tesouro para casa...'},
  {id:'a_dog',    n:'Triunfo: o Cão',           h:'Deixar o Cão lutar e levar o tesouro para casa...'},
  {id:'a_saru',   n:'Triunfo: o Macaco',        h:'Deixar o Macaco lutar e levar o tesouro para casa...'},
  {id:'a_kiji',   n:'Triunfo: o Faisão',        h:'Deixar o Faisão lutar e levar o tesouro para casa...'},
  {id:'b_naka',   n:'As pazes com os ogros',    h:'Depois de vencer, ouvir a história deles...'},
  {id:'c_yaku',   n:'A promessa da conversa',   h:'Ir sem companheiros e guardar a espada...'},
  {id:'d_kibi',   n:'O milagre dos bolinhos',   h:'Ir sozinho com muitos bolinhos e guardar a espada...'},
  {id:'o_negai',  n:'Os cestos de uvas silvestres', h:'Na história do ogro, intervir e escolher pedir ajuda...'},
  {id:'o_hatake', n:'A lavoura da Ilha dos Ogros', h:'Na história do ogro, intervir e escolher a lavoura...'},
  {id:'o_kaesu',  n:'O segredo da praia noturna', h:'Ir junto em silêncio e depois devolver o tesouro...'},
  {id:'o_asa',    n:'A promessa do sol da manhã', h:'Na manhã em que nada deu certo, criar coragem...'},
  {id:'o_miokuri',n:'Um dia, as palavras',      h:'Sem coragem, ver o barco partir...'},
  {id:'k_hero',   n:'O pequeno herói',          h:'Na história do Faisão, voar para cima do chefe...'},
  {id:'k_voice',  n:'O vigia do céu',           h:'Na história do Faisão, gritar bem alto...'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_PT, ZK_PT };
