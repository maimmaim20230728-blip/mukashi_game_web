"use strict";
/* O nabo gigante - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both) scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "Puxa, puxa!!" / "Zás, saiu!!" */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  /* os nomes já trazem o artigo (sujeito e objeto direto de "agarrar") */
  var NAMES_PT = { baa:'a avó', mago:'a neta', inu:'o cão', neko:'o gato' };

  function chainPt(f){
    var order = [];
    if(f.nezumi) order.push('o rato');
    if(f.c5) order.push(NAMES_PT[f.c5]);
    if(f.c4) order.push(NAMES_PT[f.c4]);
    if(f.c3) order.push(NAMES_PT[f.c3]);
    if(f.c2) order.push(NAMES_PT[f.c2]);
    order.push('o avô');
    if(order.length === 1) return 'O avô agarrou o nabo.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += (i === 0 ? capital(order[i]) : order[i]) + ' agarrou ' + order[i+1] + ',\n';
    }
    t += 'e o avô agarrou o nabo com força.';
    return t;
  }
  function capital(s){ return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  var KABU_PT = {

  /* ================= O nabo gigante ================= */

  kb1:{art:'kabu_hata', text:'Esta é a história de um campo largo, muito largo.\nNuma manhã de primavera, o avô plantou uma semente de nabo.\n"Cresce um nabo doce, bem doce. Cresce um nabo grande, bem grande."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'Todos os dias, o avô cuidava do nabo.\nO que era mais importante de tudo?', choices:[
    {t:'Regar bem, todos os dias', go:'kb2r', set:{care:'mizu'}},
    {t:'Falar com carinho, todos os dias', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"Cresce bem grande, cresce bem grande."\nA cada vez que ele falava, as folhas pareciam balançar de alegria.'
    : 'Com a luz do sol e muita água,\nas folhas cresciam cada vez mais e mais.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'O nabo cresceu e cresceu, até ficar maior que o próprio avô.\nUm nabo assim, ninguém na aldeia tinha visto antes.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'Chegou o dia da colheita.';
    if(f.first) return t + '\nO avô arregaçou as mangas.';
    return t + '\nO que fazer?';
  }, choices:f=>{
    var c = [{t:'Puxar o nabo agora mesmo', go:'kb5'}];
    c.push({t:'Deixar crescer ainda mais', go:'km1'});
    if(f.care==='hanashi') c.push({t:'Pedir com jeito ao nabo', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'O avô agarrou o nabo e puxou com toda a força!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'Puxa, puxa!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'O nabo não se mexeu nem um pouco.';
    if(f.first) return t + '\n"Avó, preciso de uma mãozinha!"';
    return t + '\nQuem vamos chamar?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chamar '+NAMES_PT[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> capital(NAMES_PT[f.c2])+' chegou e entrou no fim da fila.\n'+chainPt(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'Puxa, puxa!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'O nabo continuou sem se mexer nem um pouquinho.';
    if(f.first) return t + '\n"Agora vamos chamar a neta."';
    return t + '\nQuem vamos chamar agora?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chamar '+NAMES_PT[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> capital(NAMES_PT[f.c3])+' chegou e entrou no fim da fila.\n'+chainPt(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'Puxa, puxa!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'As folhas só balançaram de um lado para o outro.';
    if(f.first) return t + '\n"Muito bem, vamos chamar o cão também."';
    return t + '\nQuem vamos chamar agora?';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chamar '+NAMES_PT[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> capital(NAMES_PT[f.c4])+' chegou e entrou no fim da fila.\n'+chainPt(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'Puxa, puxa!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'Cric. Pareceu que o nabo se mexeu um pouquinho...';
    if(f.first) return t + '\n"Gato, venha também!"';
    return t + '\nVamos chamar o último.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'Chamar '+NAMES_PT[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> capital(NAMES_PT[f.c5])+' chegou e entrou no fim da fila.\n'+chainPt(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'Puxa, puxa!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'Quase, quase, mas o nabo não sai. Falta só um pouquinho.\nMas já não há mais ninguém para chamar.';
    if(f.first) return t;
    return t + '\nO que fazer?';
  }, choices:[
    {t:'Não desistir e tentar mais uma vez', go:'kb10', set:{nezumi:1}},
    {t:'Parar por hoje', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'Então o gato saiu correndo depressa\ne trouxe um rato pequenininho, bem pequenininho.\n"Precisamos da sua força."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'Eu...? Eu mesmo?'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'Puxa, puxa!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'O nabo voou bem alto no céu,\ne todos caíram sentados no chão.\nAi, ai... mas em cada rosto havia um sorriso enorme.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'Enfim, o nabo saiu.\nO último puxão foi do menor de todos, o rato.\nUma força pequena, junto com a de todos, vira a maior do mundo.\nE viveram felizes para sempre.'},

  /* ---- Let it grow -> A festa de toda a aldeia ---- */
  km1:{art:'kabu_sodatsu', text:'"Já que chegou até aqui, vamos fazer o nabo crescer o máximo possível."\nRegava, cantava, e todos os dias cuidava dele sem parar.\nAté que o nabo ficou maior que a casa do avô.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'Assim, só com a família não dava mais jeito.\nO avô subiu na colina e gritou:\n"Eeei! Pessoal da aldeia! Venham ajudar!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'Aldeia inteira, todos aqui!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'Veio o padeiro, veio o moleiro, vieram as crianças.\nToda a aldeia formou uma fila só.\nE bem no fim da fila, claro, o pequeno rato.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'Puxa, puxa!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'O nabo arrancado foi para uma panela grande, bem grande.\nAtrás do vapor, ecoavam as risadas de todos.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'O maior nabo do mundo virou a maior festa do mundo.\nA sopa doce de nabo aqueceu a barriga de toda a aldeia.\n"No ano que vem, queremos outro bem grande!"\nE viveram felizes para sempre.'},

  /* ---- Ask the turnip -> O coração do nabo ---- */
  ko1:{art:'kabu_talk', text:'O avô sentou-se diante do nabo.\n"Falei com ele todos os dias. A minha voz vai chegar até ele."\n"Ó nabo. Não quer sair de uma vez?"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'As folhas balançaram de leve.\nA terra começou a subir e a inchar, e então...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'Chamou?'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"Foi você que falou comigo todos os dias, não foi?\nEu reconheço bem a sua voz.\nEstá bem. Então lá vou eu. Um, dois..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'O nabo saiu sozinho, num pulo.\nMesmo sem força, um coração chega ao outro.\nO "cresce bem grande" de todos os dias era uma palavra mágica.\nE viveram felizes para sempre.'},

  /* ---- Call it a day -> Amanhã, todos juntos ---- */
  ka1:{art:'kabu_yuyake', text:'"Por hoje chega. Todos ajudaram muito bem."\nNo campo ao pôr do sol, tomaram um chá quentinho.\nO nabo também descansou tranquilo por hoje.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"Amanhã puxamos de novo, todos juntos."\nDisseram isso uns aos outros e voltaram cada um para a sua casa.\nNão tem problema haver um dia em que o nabo não sai.\nPorque agora o amanhã é algo para esperar com alegria.\nE viveram felizes para sempre.'},

  /* ================= A história do nabo ================= */

  kt1:{art:'kt_tsuchi', text:'Esta é a história de dentro da terra.\nEu sou o nabo. No meio do campo largo, cresço bem quentinho.\nLá de cima, todos os dias, ouço a voz do avô.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'Dentro da terra também há muita coisa boa.\nO que fazer hoje?', choices:[
    {t:'Conversar com a minhoca', go:'kt2r', set:{klife:'mimizu'}},
    {t:'Saborear devagar o gosto do sol', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"Você cresceu de novo, hein?", diz a minhoca.\n"Ehehe. É porque todo dia eu ouço uma voz boa."'
    : 'Das folhas desce devagarinho o gosto do sol.\nUm gosto doce, morninho, que dá um pouco de sono.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'E então, um dia.\nPuxão!\n"Opa! O que é isso?"\nMeu corpo é puxado para cima. Chegou o dia da colheita.', next:'kt4'},
  kt4:{art:'kt_up', text:'E agora, o que fazer?', choices:[
    {t:'Ainda não quero sair! Segurar firme', go:'kt5'},
    {t:'Vamos lá, conhecer o mundo lá fora', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"Eu ainda quero ficar aqui!"\nO nabo fez força com a raiz e segurou com tudo.\nLá em cima: "Puxa, puxa". E ia ficando cada vez mais animado.', next:'kt6'},
  kt6:{art:'kt_up', text:'Duas pessoas, três, quatro...\nO nabo continuou segurando firme e, no fim, ouviu uma voz muito pequenina.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'Por favor, querido nabo'}, then:'kt7'},
  kt7:{art:'kt_up', text:'Contra a força, eu aguento o tempo que for.\nMas quando um pedido vem numa voz tão pequenina...\n"...Ah, não tem jeito."\nE o nabo soltou a raiz, devagarinho.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'O céu estava lá no alto, e os sorrisos de todos brilhavam.\n"Olha só. Aqui fora também não é ruim."\nO nabo, que não cedeu a nenhuma força grande,\nnão resistiu a um pedido pequenininho.\nE viveram felizes para sempre.'},

  ktj1:{art:'kt_up', text:'"Pensando bem, de que cor será o céu?"\nO nabo começou a ficar inquieto.\n"Certo, então eu mesmo vou sair. Um, dois..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'O nabo saltou para fora com tanta força\nque todos caíram sentados no chão ao mesmo tempo.\n"Então o céu é tão grande assim!"\nSair por vontade própria foi a melhor sensação do mundo.\nE viveram felizes para sempre.'},

  /* ================= A história do rato ================= */

  kn1:{art:'kn_naya', text:'Esta é a história de um pequeno rato que mora num canto do celeiro.\nTrabalho pesado não é com ele. Coisas pesadas ele não consegue carregar.\nMas hoje, como sempre, corre de um lado para o outro cheio de energia.', next:'kn2'},
  kn2:{art:'kn_naya', text:'O que o rato vai fazer hoje ao meio-dia?', choices:[
    {t:'Procurar um pedacinho de queijo', go:'kn2r', set:{nlife:'cheese'}},
    {t:'Tomar sol junto à janela', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'O lugar ensolarado junto à janela é o melhor assento do mundo.\nCom os bigodes bem esticados, cochila, cochila.'
    : 'No fundo do celeiro, um cheiro bom.\nEle acha um pedacinho de queijo, e as bochechas ficam bem cheias.', next:'kn3'},
  kn3:{art:'kn_neko', text:'Foi então que o gato apareceu.\nEm outro dia, o rato teria fugido. Mas hoje o gato abaixou a cabeça, bem educado.\n"Tenho um pedido. Precisamos da sua força."', choices:[
    {t:'Mesmo com medo, ir junto', go:'kn3a'},
    {t:'Perguntar: "É comigo mesmo?"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'Com o coração batendo forte, o rato seguiu o gato.\nAo chegar ao campo, todos esperavam com cara de preocupação.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"É porque você é pequeno mesmo", disse o gato.\n"Dizem que no fim da fila fica o mais leve de todos."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'O rato ficou no fim da fila.\nÀ frente, uma fileira de costas bem grandes.\nO que um rato pequenino pode fazer?', choices:[
    {t:'Puxar com força com o rabo', go:'kns1'},
    {t:'Marcar o ritmo com uma voz bem alta', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'O rato enrolou o próprio rabo no rabo do gato\ne puxou com todo o seu corpinho!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'Puxa, puxa!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"O último puxão foi seu", disse o avô.\nUm rabo pequeno, um feito bem grande.\nDesde aquele dia, o rato não come mais no canto do celeiro,\ne sim no meio de todo mundo.\nE viveram felizes para sempre.'},

  kno1:{art:'kn_retsu', text:'Se a força não dá, ainda existe a voz!\nO rato respirou fundo e gritou com toda a força que tinha.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'Um, dois! Puxa!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'Zás, saiu!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'Graças àquela voz, a força de todos veio junta num só puxão.\n"Foi um bom ritmo", riu a avó.\nMesmo com pouca força, existe uma voz que junta todo mundo.\nO rato estufou o peito e soltou um "cuic".\nE viveram felizes para sempre.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'A avó chegou e ficou atrás do avô.\nA avó agarrou o avô, e o avô agarrou o nabo com força.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'Puxa, puxa!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'O nabo continuou sem se mexer nem um pouquinho.\nAgora foi a neta que chegou e entrou no fim da fila.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'Puxa, puxa!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'As folhas só balançaram de um lado para o outro.\nAgora foi o cão que veio correndo e entrou no fim da fila.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'Puxa, puxa!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'Cric. Pareceu que o nabo se mexeu um pouquinho...\nAgora foi o gato que veio num pulo e entrou no fim da fila.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'Puxa, puxa!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'Quase, quase, mas o nabo não sai. Falta só um pouquinho.\nEntão o gato foi buscar um rato pequenininho, bem pequenininho.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_PT);

  T.ZK_EN.push(
    {section:'O nabo gigante'},
    {id:'kb_seishi',  n:'Enfim, saiu',                      h:'A história original, da sua primeira leitura'},
    {id:'kb_matsuri', n:'A festa de toda a aldeia',         h:'Esperar sem puxar e deixar crescer mais...'},
    {id:'kb_onegai',  n:'O coração do nabo',                h:'Falar com ele todos os dias enquanto cresce...'},
    {id:'kb_ashita',  n:'Amanhã, todos juntos',             h:'No dia em que ele não sai, não forçar...'},
    {id:'kt_koe',     n:'Vencido por uma voz pequenina',    h:'Na história do nabo, continuar segurando firme...'},
    {id:'kt_jibun',   n:'Zás, por conta própria',           h:'Na história do nabo, ficar curioso pelo lado de fora...'},
    {id:'kn_shippo',  n:'O grande feito do rabinho',        h:'Na história do rato, usar o rabo...'},
    {id:'kn_ondo',    n:'O maestro pequenino',              h:'Na história do rato, usar a voz...'}
  );

})();
