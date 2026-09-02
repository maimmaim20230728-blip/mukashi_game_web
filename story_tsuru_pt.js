"use strict";
/* O grou que retribuiu a bondade - Portuguese (neutral; avoid Europe-only or Brazil-only slang, prefer forms understood in both) scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_PT !== 'undefined') {
    T = { SCENES_EN: SCENES_PT, ZK_EN: ZK_PT };
  } else {
    T = require('./story_pt.js');
  }

  var TSURU_PT = {

  /* ================= O grou que retribuiu a bondade ================= */

  ts1:{art:'ts_yuki_wana', text:'Esta é a história de um grou que foi salvo num dia de neve.\nNum dia de inverno, o velho ia à cidade vender lenha\ne, no caminho, encontrou um grou preso numa armadilha.', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'Armadilha aberta!!'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = 'O velho abriu a armadilha e soltou o grou.\nCom um grande bater de asas, o grou voou para o céu de neve.';
    if(f.first) return t;
    return t + '\nO que ele compra na cidade antes de voltar?';
  }, choices:[
    {t:'Comprar arroz', go:'ts2r', set:{tslife:'kome'}},
    {t:'Comprar um doce', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? 'Com o dinheiro da lenha, o velho comprou um docinho.\nUm presente para a velha.'
    : 'Com o dinheiro da lenha, o velho comprou um pouco de arroz.\nO bastante para o jantar daquele dia.', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'Naquela noite, a neve continuava a cair.\nToc, toc. Alguém batia à porta.\nUma moça de quimono branco estava de pé na neve.\n"Perdi o caminho. Por favor, posso ficar só esta noite?"', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'Deixem-me ficar'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'O velho e a velha sentaram a moça junto à lareira.\nA moça trabalhava muito, e passaram muitos dias juntos.\n"Deixem-me ficar aqui, por favor."\nOs dois passaram a ver a moça como uma filha.', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'Um dia, a moça disse:\n"Comprem fio, por favor. Vou tecer no tear.\nEnquanto eu tecer, não abram a porta de papel."', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'Toc-traque, toc-traque'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'Durante 3 dias e 3 noites, o som do tear veio do quarto.\nNa manhã do 4.º dia, a moça saiu com um pano branco.\nEra um pano branco como a neve, e brilhava.', next:'ts7'},

  ts7:{art:'ts_machi', text:'O velho levou o pano à cidade, e ele foi vendido por bom preço.\nNaquele inverno, a casa ficou quente.', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'Somos gratos...'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'"Vou tecer mais um pano", disse a moça.\nDe novo, por 3 dias e 3 noites, o som do tear veio do quarto.', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'Toc-traque, toc-traque'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = 'O 2.º pano também foi vendido por bom preço.\nMas o rosto da moça estava mais pálido do que antes.\n"Vou tecer mais um", disse a moça.';
    if(f.first) return t;
    return t + '\nO que o velho faz?';
  }, choices:[
    {t:'Dizer: "Sim, por favor"', go:'ts10'},
    {t:'Dizer: "Não precisa tecer mais"', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'O 3.º pano.\nO som do tear estava mais lento do que antes.', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'Toc... traque...'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = 'A velha parou diante do quarto.\n(Será que ela está bem?)\n(Não tem fio nenhum. O que estará tecendo?)';
    if(f.first) return t + '\nA velha abriu a porta de papel só um pouco.';
    return t + '\nO que a velha faz?';
  }, choices:[
    {t:'Abrir a porta de papel um pouco', go:'ts12'},
    {t:'Falar só de fora e afastar-se', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'Do outro lado da porta de papel estava um grou.\nEra com as próprias penas que ele tecia no tear.\nAs penas tinham diminuído um pouco.', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'......'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = 'Naquela noite, a moça sentou-se diante dos dois.\n"Eu sou o grou que foi salvo num dia de neve.\nMinha verdadeira forma foi vista.\nNão posso mais ficar na forma de moça."';
    if(f.first) return t;
    return t + '\nO que os dois fazem?';
  }, choices:[
    {t:'Despedir-se em silêncio', go:'ts14'},
    {t:'Abrir a porta e olhar para o céu', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'A moça voltou à forma de grou e voou para o céu de neve.\nO velho e a velha ficaram muito tempo olhando o céu.', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'O grou, para o céu'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'O grou que foi salvo num dia de neve voltou para o céu.\nNa casa ficaram 2 panos brancos e um tear com o trabalho inacabado.\nFim.'},

  /* ---- Não precisa tecer mais ---- */
  tsm1:{art:'ts_kaoiro', text:'"Não precisa tecer mais. 2 panos são o bastante."\nFoi o que o velho disse.\nA moça ficou um tempo em silêncio e respondeu: "Sim."', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'O inverno acabou e chegou a primavera.\nNo céu, ouviram-se vozes de grous.\n"Eu sou o grou que foi salvo num dia de neve. Meu bando chama por mim."', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'A moça voltou à forma de grou e voou para junto do seu bando.\nNa casa ficaram 2 panos brancos.\nO velho e a velha seguiram com os olhos o céu da primavera.\nE viveram felizes para sempre.'},

  /* ---- Um inverno sem olhar ---- */
  tsn1:{art:'ts_nozoku', text:'"Não se esforce demais."\nA velha falou de fora da porta de papel e afastou-se do quarto.\nDe dentro veio um "Sim".', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'O 3.º pano ficou pronto.\nEra o mais belo dos três.\nO rosto da moça continuava pálido.', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'Chegou a primavera e, no céu, ouviram-se vozes de grous.\n"Eu sou o grou que foi salvo num dia de neve.\nNão tenho mais penas. Meu bando chama por mim."', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'O velho e a velha despediram-se da moça na porta.\nMesmo sem olhar, a despedida chegou.\nMas nessa despedida não havia nem um segredo.\nE viveram felizes para sempre.'},

  /* ---- Abrir a janela ---- */
  tsd1:{art:'ts_mado', text:'Na manhã seguinte, o velho abriu a porta.\nNo céu limpo, um grou.\nO grou deu uma volta por cima da casa e voou para longe.', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'Os dois acenaram.\nSe o grou olhou para trás, ninguém sabe.\nMas que ele deu uma volta por cima da casa, disso os dois nunca se esqueceram.\nE viveram felizes para sempre.'},

  /* ================= A história do grou ================= */

  tz1:{art:'ts_yuki_wana', text:'Esta é a história de um grou.\nNum dia de neve, ele ficou preso numa armadilha e não conseguia mover-se.\nUm velho que passava por ali abriu a armadilha.', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'O grou quis retribuir a bondade.\nEm que forma ele vai?', choices:[
    {t:'Como moça de quimono branco', go:'tz2r', set:{tzlife:'musume'}},
    {t:'Como moça em viagem', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? 'O grou tomou a forma de uma moça em viagem, com um chapéu de palha,\ne numa noite de neve bateu à porta da casa.'
    : 'O grou tomou a forma de uma moça de quimono branco\ne numa noite de neve bateu à porta da casa.', next:'tz3'},
  tz3:{art:'tz_hane', text:'Para tecer no tear, ele usa as próprias penas.\nAs penas não são infinitas.\nO grou tecia contando as penas.', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'...Só restam estas'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'Enquanto tecia o 3.º pano, a porta de papel abriu-se um pouco.\nO que o grou faz?', choices:[
    {t:'Continuar a tecer', go:'tzh1'},
    {t:'Parar o tear e olhar o céu', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'O grou teceu até o fim.\nAs penas tinham diminuído bastante.', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'Como sua forma foi vista, o grou saiu da casa.\nPor que teceu até o fim, esta história não conta.\nFim.'},
  tzs1:{art:'tz_sora_ie', text:'O grou parou o tear e olhou o céu pela janela.\nEra um céu de primavera.\nNaquela noite, o grou saiu da casa.', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'Visto do céu, a casa era pequena, com uma única luz acesa.\nO grou ficou um tempo olhando aquela luz.\nFim.'},

  /* ================= O inverno da velha ================= */

  tb1:{art:'ts_irori', text:'Esta é a história de uma velha.\nA moça que chegou numa noite de neve trabalhava muito e ria muito.\nA velha não conseguia deixar de gostar da moça.', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'Enquanto a moça tece, o que a velha faz?', choices:[
    {t:'Fazer uma sopa quente', go:'tb2r', set:{tblife:'shiru'}},
    {t:'Não deixar o fogo apagar', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? 'A velha foi pondo mais lenha para o fogo da lareira não se apagar.\nPara que o quarto não ficasse frio.'
    : 'A velha fez uma sopa quente e deixou-a diante da porta de papel.\nDe manhã, a tigela estava vazia.', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'Depois do 2.º pano, o rosto da moça estava pálido.\nA velha andou muitas vezes de um lado para o outro diante do quarto.', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'Pediram que eu não olhasse, mas...'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'Quando dizem "não olhe", dá vontade de olhar.\nE mais ainda quando se está preocupado.\nO que a velha faz?', choices:[
    {t:'Abrir a porta de papel', go:'tbk1'},
    {t:'Sentar-se diante do quarto e esperar', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'Do outro lado da porta de papel estava um grou.\nA velha fechou a porta de papel devagarinho.\nMas o que tinha visto já não podia ser desfeito.', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'A moça voltou a ser grou e voou para longe.\nA vontade de olhar existe em qualquer pessoa.\nNesta história, ninguém diz que isso é errado.\nFim.'},
  tbh1:{art:'tb_hata_nokori', text:'A velha sentou-se diante do quarto e ficou ouvindo o som do tear.\nToc-traque. Toc-traque.\nAssim ficou até a primavera.', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'Depois que a moça partiu na primavera, o tear ficou no quarto.\nA velha deixou o tear como estava e abria o quarto todos os dias.\nE viveram felizes para sempre.'}

  };

  Object.assign(T.SCENES_EN, TSURU_PT);

  T.ZK_EN.push(
    {section:'O grou que retribuiu a bondade', note:'Nos contos populares do Japão há muitas histórias em que alguém vai embora assim que sua verdadeira forma é conhecida: o grou, a serpente, o rouxinol. Não são histórias de castigo.'},
    {id:'ts_seishi',    n:'O grou do dia de neve',      h:'A história como é contada, já na primeira vez'},
    {id:'ts_mou',       n:'Não precisa tecer mais',     h:'Quando o velho diz algo antes do 3.º pano...'},
    {id:'ts_nozokanai', n:'Um inverno sem olhar',       h:'Quando a velha só fala de fora e vai embora...'},
    {id:'ts_mado',      n:'Abrir a janela',             h:'Quando, na noite da despedida, abrem a porta e olham o céu...'},
    {id:'tz_hane',      n:'O número de penas',          h:'Na história do grou, quando se tece até o fim...'},
    {id:'tz_sora',      n:'A casa vista do céu',        h:'Na história do grou, quando se para o tear e se olha o céu...'},
    {id:'tb_kokoro',    n:'A vontade de olhar',         h:'Na história da velha, quando se abre a porta de papel...'},
    {id:'tb_hata',      n:'O tear inacabado',           h:'Na história da velha, quando se espera diante do quarto...'}
  );

})();
