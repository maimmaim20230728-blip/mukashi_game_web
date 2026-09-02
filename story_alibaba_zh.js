"use strict";
/* Ali Baba and the Forty Thieves - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_alibaba_en.js
   Sources: Galland's French text (1704-17, PD) and Lang's "The Forty Thieves" (Blue Fairy Book, 1889, PD).
   Original wording throughout. No Disney / animation / modern retelling is referenced. */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var ALIBABA_ZH = {

  /* ================= 阿里巴巴和40个强盗 ================= */

  ab1:{art:'ab_mori', text:'这是住在波斯一座城里的阿里巴巴的故事。\n阿里巴巴是一个穷樵夫。\n他每天牵着2头驴，到森林里去打柴。', next:'ab2'},

  ab2:{art:'ab_mori', text:f=>{
    var t = '今天，阿里巴巴也在森林里捡柴。';
    if(f.first) return t;
    return t + '\n要捡多少柴呢？';
  }, choices:[
    {t:'捡2捆，早点回家', go:'ab2r', set:{ablife:'futa'}},
    {t:'捡4捆，慢慢回家', go:'ab2r', set:{ablife:'yon'}}
  ]},
  ab2r:{art:'ab_mori', text:f=> f.ablife==='yon'
    ? '他把4捆柴驮到了驴背上。\n今天他打算慢慢地回家。'
    : '他把2捆柴驮到了驴背上。\n今天他打算早点回家。', next:'ab3'},

  ab3:{art:'ab_iwa', text:'就在这时，传来了马蹄的声音。\n阿里巴巴躲到了树上。\n40个男人，聚到了一块大岩石前面。', next:'abc_kao_ab'},
  abc_kao_ab:{cutin:{type:'kao', face:'alibaba', text:'40个人……'}, then:'ab4'},

  ab4:{art:'ab_iwa', text:'走在最前面的那个人对着岩石说：\n“芝麻开门！”\n于是，岩石轰隆一声打开了。', next:'abc_goma'},
  abc_goma:{cutin:{type:'goma', text:'芝麻开门!!'}, then:'ab5'},

  ab5:{art:'ab_iwa', text:'那些人走了进去。\n过了一会儿出来，说：“芝麻关门！”\n岩石合上了，那些人也走了。', next:'ab6'},

  ab6:{art:'ab_dokutsu', text:'阿里巴巴从树上下来，站到了岩石前面。\n“芝麻开门！”\n岩石打开了，里面装满了金币和宝物。', next:'abc_hikari'},
  abc_hikari:{cutin:{type:'hikari', text:'宝物的光'}, then:'ab7'},

  ab7:{art:'ab_dokutsu', text:'阿里巴巴把金币装进袋子，驮到驴背上。\n只装了能带回家的那些。\n“芝麻关门！”', next:'ab8'},

  ab8:{art:'ab_ie', text:'回到家里，阿里巴巴把这件事告诉了妻子。\n两个人想数一数金币，可是太多了，数不过来。\n“去哥哥家借个量斗来吧。”', next:'ab9'},

  ab9:{art:'ab_kashimu', text:'哥哥卡西姆是个有钱的商人。\n卡西姆的妻子在量斗的底上，悄悄抹了一层油。\n量斗还回来的时候，底上粘着1枚金币。', next:'ab10'},

  ab10:{art:'ab_kashimu', text:'卡西姆问了阿里巴巴。\n阿里巴巴把岩石的事，还有咒语的事，全都说了。', next:'ab11'},

  ab11:{art:'ab_kashimu_iwa', text:'第二天早上，卡西姆牵着10头驴，去了岩石那边。\n“芝麻开门！”\n岩石打开了。', next:'abc_goma2'},
  abc_goma2:{cutin:{type:'goma', text:'芝麻开门!!'}, then:'ab12'},

  ab12:{art:'ab_kashimu_iwa', text:'卡西姆把金币装进了袋子。\n可是，正要出去的时候，他把咒语忘了。\n“大麦开门！”“豆子开门！”\n岩石一直不开。', next:'ab13'},

  ab13:{art:'ab_ie', text:f=>{
    var t = '那天晚上，卡西姆没有回来。\n卡西姆的妻子来到阿里巴巴家，哭了起来。';
    if(f.first) return t;
    return t + '\n阿里巴巴要怎么做呢？';
  }, choices:[
    {t:'等到早上', go:'ab14'},
    {t:'趁着夜里，去岩石那边', go:'abn1'}
  ]},

  ab14:{art:'ab_kashimu_iwa', text:'早上，阿里巴巴去了岩石那边。\n“芝麻开门！”\n里面很安静。强盗们比他先回来过了。\n卡西姆已经不动了。\n阿里巴巴把哥哥放到驴背上，悄悄地运回了家。', next:'ab15'},

  ab15:{art:'ab_kutsunaoshi', text:'阿里巴巴家里，有一个名叫摩尔吉娜的佣人。\n她是个心细的人。\n为了准备葬礼，摩尔吉娜把城里修鞋的老爷爷请了来。\n为了不让他记住路，她给他蒙上眼睛，一路带到了家里。', next:'abc_kao_mo'},
  abc_kao_mo:{cutin:{type:'kao', face:'morgiana', text:'请把眼睛蒙上'}, then:'ab16'},

  ab16:{art:'ab_iwa', text:'回到岩石那边的强盗们，发现卡西姆不见了。\n“还有别人知道这里。”\n首领派了一个人去城里。', next:'ab17'},

  ab17:{art:'ab_kutsunaoshi', text:'强盗找到了修鞋的老爷爷。\n老爷爷蒙着眼睛，用脚一步一步想起了那条路。\n然后，强盗在阿里巴巴家的门上，做了一个白色的记号。', next:'ab18'},

  ab18:{art:'ab_shirushi', text:'摩尔吉娜发现了那个记号。\n于是，她在隔壁人家的门上，还有再隔壁人家的门上，也做了同样的记号。', next:'abc_waza_shirushi'},
  abc_waza_shirushi:{cutin:{type:'waza', theme:'orange', text:'记号有好多个!!'}, then:'ab19'},

  ab19:{art:'ab_shirushi', text:'强盗们来了，也分不出是哪一家。\n首领决定自己去。', next:'ab20'},

  ab20:{art:'ab_tsubo', text:'首领扮成了卖油的商人。\n19头驴，驮着38个大坛子。\n装着油的只有1个，其余的坛子里，各藏着1个强盗。', next:'ab21'},

  ab21:{art:'ab_tsubo', text:'“我是个赶路的卖油商人。请让我借住一晚。”\n阿里巴巴热情地留他住了下来。\n坛子被排在了院子里。', next:'abc_kao_kashira'},
  abc_kao_kashira:{cutin:{type:'kao', face:'kashira', text:'……等到了夜里'}, then:'ab22'},

  ab22:{art:'ab_abura', text:'夜里，摩尔吉娜的灯油用完了，就想到院子里的坛子那儿去取一点。\n这时，坛子里面传出了声音。\n“时间到了吗？”', next:'abc_dark'},
  abc_dark:{cutin:{type:'dark', text:'……坛子里面，有人'}, then:'ab23'},

  ab23:{art:'ab_abura', text:f=>{
    var t = '摩尔吉娜压低声音回答：\n“还没到。”\n然后，她把37个坛子全都查看了一遍。';
    if(f.first) return t;
    return t + '\n摩尔吉娜要怎么做呢？';
  }, choices:[
    {t:'把油烧开', go:'ab24'},
    {t:'拿绳子来，去叫官差', go:'abr1'}
  ]},

  ab24:{art:'ab_abura', text:'摩尔吉娜用一口大锅把油烧开了。\n然后，她把烧开的油，一个一个地倒进坛子里。\n坛子里面，安静了下来。', next:'ab25'},

  ab25:{art:'ab_tsubo', text:'半夜，首领来到院子里，敲了敲坛子。\n没有回应。\n首领一个人逃走了。', next:'ab26'},

  ab26:{art:'ab_ie', text:'早上，摩尔吉娜把事情全都告诉了阿里巴巴。\n阿里巴巴对摩尔吉娜说：\n“从今天起，你是自由之身了。”', next:'ab27'},

  ab27:{art:'ab_odori', text:'过了几天，首领又扮成商人来了。\n他和阿里巴巴的儿子成了朋友，被请到了家里。\n摩尔吉娜记得那张脸。', next:'abc_kao_mo2'},
  abc_kao_mo2:{cutin:{type:'kao', face:'morgiana', text:'这张脸，我记得'}, then:'ab28'},

  ab28:{art:'ab_odori', text:f=>{
    var t = '吃完饭以后，摩尔吉娜跳起了舞。\n腰带上插着一把短剑。';
    if(f.first) return t;
    return t + '\n摩尔吉娜要怎么做呢？';
  }, choices:[
    {t:'把舞跳到最后', go:'ab29'},
    {t:'停下舞，说出记号的事', go:'abg1'}
  ]},

  ab29:{art:'ab_odori', text:'舞跳到最后，摩尔吉娜在商人面前停了下来。\n首领倒了下去。\n对着吃惊的阿里巴巴，摩尔吉娜静静地说：\n“这个人，就是那个首领。”', next:'ab30'},

  ab30:{art:'ab_owari', text:'阿里巴巴对摩尔吉娜说：\n“你已经是自由之身了。今后要怎么做，由你自己决定。”\n摩尔吉娜想了一会儿，回答说：\n“我留在这里。我要做这个家的人。”', next:'e_ab_seishi'},

  e_ab_seishi:{art:'ab_owari', ending:'ab_seishi', text:'后来，摩尔吉娜和阿里巴巴的儿子在一起了，成了这个家里的人。\n岩石里的宝物，他们用得很俭省。\n从此，他们过上了幸福的生活。'},

  /* ---- 去接哥哥 ---- */
  abn1:{art:'ab_yoru_hakobu', text:'阿里巴巴趁着夜里，牵着驴去了岩石那边。\n“芝麻开门！”\n里面深处，卡西姆正发着抖坐在那里。', next:'abn2'},
  abn2:{art:'ab_yoru_hakobu', text:'“我把咒语忘了……原来是芝麻，是芝麻啊。”\n阿里巴巴把哥哥扶到驴背上，带回了家。\n金币，只带了一袋。', next:'e_ab_ani'},
  e_ab_ani:{art:'ab_ie', ending:'ab_ani', text:'哥哥平安无事。\n咒语的事，成了两个人之间的秘密。\n强盗们发现金币少了，可是不知道是谁做的。\n从此，他们过上了幸福的生活。'},

  /* ---- 绳子和官差 ---- */
  abr1:{art:'ab_abura', text:'摩尔吉娜拿来了绳子。\n她从外面把坛子的盖子一个一个绑了起来。\n然后，跑去叫城里的官差。', next:'abr2'},
  abr2:{art:'ab_tsubo', text:'官差们来了，打开了37个坛子。\n强盗们被绳子绑着，一个一个带走了。\n首领趁着这个空当逃走了。', next:'e_ab_rouya'},
  e_ab_rouya:{art:'ab_owari', ending:'ab_rouya', text:'从那以后，首领再也没有在城里出现过。\n阿里巴巴对摩尔吉娜说：“你已经是自由之身了。”\n岩石里的宝物，他们用得很俭省。\n从此，他们过上了幸福的生活。'},

  /* ---- 首领逃走了 ---- */
  abg1:{art:'ab_odori', text:'摩尔吉娜停下舞，站到了商人面前。\n“把您做的那个记号加多的，是我。”\n商人的脸色变了。', next:'abg2'},
  abg2:{art:'ab_odori', text:'首领一句话也没说就站了起来，逃进了夜色中的街道。\n从那以后，他再也没有回到波斯的那座城。', next:'e_ab_nigeta'},
  e_ab_nigeta:{art:'ab_owari', ending:'ab_nigeta', text:'阿里巴巴对摩尔吉娜说：\n“你已经是自由之身了。今后要怎么做，由你自己决定。”\n摩尔吉娜回答说：“我留在这里。”\n从此，他们过上了幸福的生活。'},

  /* ================= 摩尔吉娜的故事 ================= */

  am1:{art:'am_daidokoro', text:'这是一个名叫摩尔吉娜的佣人的故事。\n她在阿里巴巴家里干活。\n大家都说，她是个心细的人。', next:'am2'},
  am2:{art:'am_daidokoro', text:'早上，先从哪件事做起呢？', choices:[
    {t:'烤面包', go:'am2r', set:{amlife:'pan'}},
    {t:'打水', go:'am2r', set:{amlife:'mizu'}}
  ]},
  am2r:{art:'am_daidokoro', text:f=> f.amlife==='mizu'
    ? '摩尔吉娜从井里打上水来，把水缸装得满满的。\n这个家里的事，她什么都知道。'
    : '摩尔吉娜在灶里生起火，烤好了面包。\n这个家里的事，她什么都知道。', next:'am3'},
  am3:{art:'ab_shirushi', text:'有一天早上，她发现门上有一个白色的记号。\n（有人想把这个家记住。）\n摩尔吉娜在隔壁人家的门上，也做了记号。', next:'amc_1'},
  amc_1:{cutin:{type:'kao', face:'morgiana', text:'记号，多加几个就好'}, then:'am4'},
  am4:{art:'ab_abura', text:'卖油商人来的那个夜里。坛子里面传出了声音。\n摩尔吉娜要怎么做呢？', choices:[
    {t:'把油烧开', go:'am4r', set:{amhow:'abura'}},
    {t:'用绳子绑住，去叫官差', go:'am4r', set:{amhow:'nawa'}}
  ]},
  am4r:{art:'ab_tsubo', text:f=> f.amhow==='nawa'
    ? '摩尔吉娜把坛子的盖子绑了起来，叫来了官差。\n强盗们被带走了。'
    : '摩尔吉娜把油烧开，倒进了坛子里。\n坛子里面，安静了下来。', next:'am5'},
  am5:{art:'ab_jiyuu', text:'一切都结束了的那个早上，阿里巴巴说：\n“你已经是自由之身了。要怎么做，由你自己决定。”\n摩尔吉娜要怎么做呢？', choices:[
    {t:'留在这个家里', go:'ami1'},
    {t:'出门去旅行', go:'amt1'}
  ]},
  ami1:{art:'ab_jiyuu', text:'摩尔吉娜先出了一次大门。\n她在城里走了走，看了集市，看了河。\n然后，她用自己的脚，回到了这个家。', next:'e_am_ie'},
  e_am_ie:{art:'ab_owari', ending:'am_ie', text:'“这里，就是我自己选的家。”\n不是作为佣人，而是作为这个家里的人。\n从此，他们过上了幸福的生活。'},
  amt1:{art:'am_michi', text:'摩尔吉娜带着一个包袱，出了大门。\n阿里巴巴没有拦她。', next:'e_am_tabi'},
  e_am_tabi:{art:'am_michi', ending:'am_tabi', text:'摩尔吉娜去了哪里，这个故事里没有写。\n去了哪里，只有摩尔吉娜自己知道。\n完。'},

  /* ================= 强盗首领的故事 ================= */

  at1:{art:'at_dokutsu_kara', text:'这是强盗首领的故事。\n他们40个人，把宝物存在岩石里面。\n有一天，他发现宝物少了。', next:'at2'},
  at2:{art:'at_dokutsu_kara', text:'首领要查什么呢？', choices:[
    {t:'岩石前面的脚印', go:'at2r', set:{atlife:'ashi'}},
    {t:'驴留下的印子', go:'at2r', set:{atlife:'roba'}}
  ]},
  at2r:{art:'ab_iwa', text:f=> f.atlife==='roba'
    ? '岩石前面，留着驴的蹄印。\n是城里的什么人。'
    : '岩石前面，留着一串小小的脚印。\n不是自己人的。', next:'at3'},
  at3:{art:'ab_iwa', text:'（比起宝物被拿走，岩石的秘密被人知道，更让他害怕。）\n首领派人去了城里。', next:'atc_1'},
  atc_1:{cutin:{type:'kao', face:'kashira', text:'秘密，只要一个就够了'}, then:'at4'},
  at4:{art:'ab_tsubo', text:'坛子的计策失败了。\n同伴，已经一个也不剩了。\n首领要怎么做呢？', choices:[
    {t:'留下宝物，走到远方去', go:'ato1'},
    {t:'再去一次那个家', go:'ath1'}
  ]},
  ato1:{art:'at_sabaku', text:'首领站到了岩石前面。\n“芝麻关门。”\n然后，他头也不回地走了。', next:'e_at_oite'},
  e_at_oite:{art:'at_sabaku', ending:'at_oite', text:'宝物留在了岩石里面。\n首领去了哪里，谁也不知道。\n完。'},
  ath1:{art:'ab_odori', text:'首领扮成商人，去了那个家。\n舞跳到最后，那个佣人站到了他面前。\n（这个人，从一开始就知道。）\n首领什么也没做，离开了那个家。', next:'e_at_himitsu'},
  e_at_himitsu:{art:'at_dokutsu_kara', ending:'at_himitsu', text:'秘密，已经不是秘密了。\n首领接受了这一点，离开了这座城。\n让他害怕的，不是失去宝物，而是被人知道。\n完。'}

  };

  Object.assign(T.SCENES_EN, ALIBABA_ZH);

  T.ZK_EN.push(
    {section:'阿里巴巴和40个强盗', note:'用阿拉伯语写成的古书里，没有这个故事。大约300年前，一个法国人听叙利亚的说书人讲了这个故事，把它记了下来。它和《阿拉丁》是另一个故事。摩尔吉娜在原来的故事里是奴隶，最后获得了自由之身。'},
    {id:'ab_seishi',  n:'芝麻开门',       h:'第一次游玩时看到的、流传下来的故事'},
    {id:'ab_ani',     n:'去接哥哥',       h:'卡西姆没回来的那个夜里，去岩石那边的话……'},
    {id:'ab_rouya',   n:'绳子和官差',     h:'坛子的那个夜里，不把油烧开的话……'},
    {id:'ab_nigeta',  n:'首领逃走了',     h:'停下舞，说出记号的事的话……'},
    {id:'am_ie',      n:'自己选的家',     h:'在摩尔吉娜的故事里，留在家里的话……'},
    {id:'am_tabi',    n:'大门的外面',     h:'在摩尔吉娜的故事里，出门去旅行的话……'},
    {id:'at_oite',    n:'留下宝物',       h:'在首领的故事里，走到远方去的话……'},
    {id:'at_himitsu', n:'秘密只有一个',   h:'在首领的故事里，再去一次那个家的话……'}
  );

})();
