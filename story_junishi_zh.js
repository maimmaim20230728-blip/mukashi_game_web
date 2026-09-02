"use strict";
/* 十二生肖的由来 - Simplified Chinese scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   底本: 作者未详的口传民间故事(自中国传入, 日本各地采录)。文字为自行撰写,
   不参照任何已出版的再述本(The Great Race / Cat and Rat 等)。 */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var N12 = ['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'];

  var JUNISHI_ZH = {

  /* ================= 十二生肖的由来 ================= */

  ju1:{art:'ju_ofure', text:'这是12种动物成为年的名字的故事。\n在某一年的年末，神发出了一道告示。\n“元旦的早上，到宫殿来。按到达的先后，前12个，就成为那一年的名字。”', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = '动物们各自开始做准备。';
    if(f.first) return t;
    return t + '\n要准备什么呢？';
  }, choices:[
    {t:'练习跑步', go:'ju2r', set:{julife:'hashiru'}},
    {t:'做好吃的等着', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? '羊捣年糕，猴子捡栗子。\n元旦的早上，大家一起吃。'
    : '老虎和马在原野上跑了一趟又一趟。\n兔子在练习一蹦一蹦地跳。', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = '猫没有听清告示上的日子。\n“喂，老鼠，去宫殿是哪天来着？”';
    if(f.first) return t + '\n“1月2日的早上哦。”\n老鼠这样回答。';
    return t + '\n老鼠会怎么回答呢？';
  }, choices:[
    {t:'“1月2日的早上”', go:'ju4'},
    {t:'“1月1日的早上”', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'除夕的夜里。\n“我脚步慢，现在就动身吧。”\n牛在天还黑着的时候，就走上了雪路。', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'慢慢走吧'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'天刚黑就出发！！'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = '一只老鼠轻轻一跳，上了它的背。\n牛没有发觉。\n雪路上，慢慢地，慢慢地走着。';
    if(f.first) return t;
    return t + '\n夜路上，老鼠做了什么呢？';
  }, choices:[
    {t:'在背上睡觉', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'数星星', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? '雪夜的天上，满是星星。\n老鼠一颗、两颗地数着，等着早上到来。'
    : '牛的背上很暖和，老鼠不知不觉就睡着了。\n雪路上，只有牛的脚步声一直响着。', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = '早上到了。\n宫殿的大门就在眼前。\n牛以为自己是最先到的。';
    if(f.first) return t;
    return t + '\n老鼠会怎么做呢？';
  }, choices:[
    {t:'跳下去，先进门', go:'juc_tobiori'},
    {t:'不跳下去，和牛一起进门', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'跳下去了！！'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'就在那时，老鼠从背上一跳而下，\n先一步进了大门。\n神的声音响了起来。“第一年，是鼠。”', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'鼠'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'接着，牛穿过了大门。\n“下一年，是牛。”', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'鼠、牛'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'老虎冲了进来。\n接着兔子一跳，穿过了大门。', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'龙和蛇同时到了大门前。\n“您先请。”蛇说。\n龙先进去，蛇跟着进去。', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'虎、兔、龙、蛇'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'马跑了过来，羊跟在后面。', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'猴子和狗在路上争了起来，怎么也走不动。\n公鸡走到了两个中间。', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'先去宫殿！'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'被公鸡一催，猴子和狗停下了争吵。\n按猴子、公鸡、狗的顺序，穿过了大门。', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'马、羊、猴、鸡、狗'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'最后是野猪。\n因为它只会直着往前跑，\n所以冲过了大门前，又折了回来。', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'一直往前的野猪！！'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'第12个，是猪。\n这样，12个年的名字就凑齐了。', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'12个名字！！'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'神对这12个说：\n“从今往后，每一年按顺序，成为那一年的名字吧。”', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'第二天早上。\n猫来到了宫殿的大门前。\n大门关着。', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'……咦？'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = '神的声音响了起来。\n“来宫殿的日子是昨天。洗把脸，重新再来吧。”';
    if(f.first) return t;
    return t + '\n猫会怎么做呢？';
  }, choices:[
    {t:'洗把脸，回家去', go:'ju18'},
    {t:'洗把脸，再去一次大门', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'猫洗了脸。\n从那以后，一看见老鼠，猫就会追上去。', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'鼠、牛、虎、兔、龙、蛇、马、羊、猴、鸡、狗、猪。\n12种动物每一年按顺序，成为那一年的名字。\n从此，他们过上了幸福的生活。'},

  /* ---- 在牛背上 ---- */
  jua1:{art:'ju_mon', text:'老鼠没有跳下去。\n就那样趴在牛背上，和牛一起穿过了大门。\n“两个一起来的吗。”神的声音说。', next:'jua2'},
  jua2:{art:'ju_mon', text:'“牛先就好。”老鼠说。\n“老鼠先就好。”牛说。\n神笑了。\n“那么，第一年是鼠，下一年是牛。\n作为交换，你们两个要在对方的年里互相帮忙。”', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'从那以后，鼠年里有牛，牛年里有老鼠，\n互相帮着对方干活。\n顺序没有变。不过，那是两个一起度过的一个早上。\n从此，他们过上了幸福的生活。'},

  /* ---- 每年的问候 ---- */
  jub1:{art:'ju_neko_kao', text:'猫洗了脸，又去了一次大门。\n“我洗过脸来了。”', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'神的声音响了起来。\n“年的名字，只有12个。\n不过，每年元旦，你都来打个招呼吧。”', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'从那以后，每年元旦的早上，猫都会去宫殿打招呼。\n它不会成为年的名字。\n不过，宫殿的大门会为猫打开。\n从此，他们过上了幸福的生活。'},

  /* ---- 在海那边的国家 ---- */
  juu1:{art:'ju_nezuneko', text:'“1月1日的早上哦。”\n猫说了声“谢谢”，那天晚上早早就睡了。', next:'juu2'},
  juu2:{art:'ju_kake', text:'元旦的早上。\n老鼠在牛背上，牛慢慢地走，老虎跑得飞快。\n然后在大门前，兔子和猫同时到了。', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'同时到！？'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'神想了一会儿，说：\n“在这里，这一年交给兔子。\n在海那边的国家，这一年就交给猫吧。”', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'所以直到今天，在海那边的国家里，\n还有猫成为年的名字的地方。\n同样的故事，国家不同，名字也会不同。\n从此，他们过上了幸福的生活。'},

  /* ================= 猫的故事 ================= */

  jn1:{art:'jneko_hinata', text:'这是一只猫的故事。\n它听说神发了告示，可是日子没有听清。', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'问谁好呢？', choices:[
    {t:'问老鼠', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'问狗', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '“1月……1日吧，大概。老鼠更清楚。”狗说。\n猫又去问了老鼠。\n“1月2日的早上哦。”老鼠回答。'
    : '“1月2日的早上哦。”老鼠回答。\n猫说了声“谢谢”。', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'1月2日的早上。\n猫去了宫殿的大门。\n大门关着。', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'……昨天？'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'“来宫殿的日子是昨天。洗把脸，重新再来吧。”\n神的声音响了起来。\n猫会怎么做呢？', choices:[
    {t:'洗把脸，回家去', go:'jna1'},
    {t:'在太阳底下蜷起来', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'猫洗了脸。\n水是凉的。', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'洗过脸的猫，后来想了些什么，\n这个故事里没有写。\n猫洗了脸。就是这样。\n完。'},
  jnh1:{art:'jneko_hinata', text:'猫走到了太阳底下。\n蜷成一团，闭上了眼睛。', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'有追老鼠的猫，也有在太阳底下睡觉的猫。\n猫现在在想什么，只有猫自己知道。\n完。'},

  /* ================= 老鼠的故事 ================= */

  jz1:{art:'jnezumi_ana', text:'这是一只老鼠的故事。\n听到神的告示，老鼠想了想。\n（凭我这双腿，跑也跑不过别人。）', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'夜里，在洞里做什么呢？', choices:[
    {t:'想想去宫殿的路', go:'jz2r', set:{jzlife:'michi'}},
    {t:'早点睡，为早上做准备', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? '老鼠钻进稻草里，早早就睡了。\n连梦里，也看见了宫殿的大门。'
    : '老鼠在心里把去宫殿的路走了一遍又一遍。\n路很远。它想，得有一个谁的背才行。', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'“去宫殿是哪天来着？”猫问。\n老鼠回答说：“1月2日的早上哦。”', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'……'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'除夕的夜里，老鼠跳上了牛的背。\n牛没有发觉。\n老鼠会怎么做呢？', choices:[
    {t:'一声不响地坐着走', go:'jzu1'},
    {t:'跟牛打声招呼', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'早上，在大门前，老鼠跳了下去。\n第一年，是鼠。', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'老鼠没有把真的日子告诉猫。\n为什么，只有老鼠自己知道。\n后来，老鼠成了第一年的名字。\n完。'},
  jzs1:{art:'ju_senaka', text:'“牛，谢谢你让我坐。”\n牛吃了一惊，回过头来。\n“原来是老鼠啊。也不重，就那么坐着吧。”', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'到了大门前，牛说：\n“快去吧，去把名字领回来。”\n老鼠跳下去，穿过了大门。', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'第一年是鼠，下一年是牛。\n老鼠一直没有忘记那头把背借给它的牛。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_ZH);

  T.ZK_EN.push(
    {section:'十二生肖的由来', note:'在海那边的国家，也有把猫算进十二生肖的地方。关于第13种动物，还流传着黄鼠狼和青蛙的文字游戏。'},
    {id:'ju_seishi',  n:'12个名字',           h:'第一次游玩时看到的原本的故事'},
    {id:'ju_ushi',    n:'在牛背上',           h:'在大门前不跳下去的话……'},
    {id:'ju_kao',     n:'每年的问候',         h:'洗把脸，再去一次大门的话……'},
    {id:'ju_umi',     n:'在海那边的国家',     h:'老鼠回答真的日子的话……'},
    {id:'jn_asa',     n:'第二天早上',         h:'在猫的故事里，洗把脸回家的话……'},
    {id:'jn_hinata',  n:'太阳底下的猫',       h:'在猫的故事里，在太阳底下蜷起来的话……'},
    {id:'jz_uso',     n:'说了谎的那天',       h:'在老鼠的故事里，一声不响地坐着走的话……'},
    {id:'jz_senaka',  n:'借了背的那天',       h:'在老鼠的故事里，跟牛打声招呼的话……'}
  );

})();
