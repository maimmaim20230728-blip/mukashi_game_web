"use strict";
/* 不来梅的音乐家 - Simplified Chinese scenario, translated from the Japanese master;
   structure mirrors story_bremen_en.js (scene ids, flags, transitions, cutins).
   底本=グリム童話 KHM27 決定版(1857, PD)。自前訳で、既存の中国語訳はなぞらない。
   動物に固有名は付けない。主人を断罪する地の文を足さない。 */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var BREMEN_ZH = {

  /* ================= 不来梅的音乐家 ================= */

  br1:{art:'br_koya', text:'这是一头驴的故事，它在一位主人那里干了很多年的活。\n在磨坊里，驴一直背着一袋又一袋的面粉。\n可是它上了年纪，力气一天比一天小了。', next:'br2'},

  br2:{art:'br_koya', text:'有一天，驴察觉到了一件事。\n（主人正在盘算，不再给我饲料了。）\n于是，驴离开了磨坊。', next:'brc_tabi'},
  brc_tabi:{cutin:{type:'waza', theme:'gold', text:'去不来梅！！'}, then:'br3'},

  br3:{art:'br_roba', text:f=>{
    var t = '“我要去不来梅，当城里的乐师。”\n驴这样决定了，就沿着大路走了起来。';
    if(f.first) return t;
    return t + '\n走哪条路呢？';
  }, choices:[
    {t:'沿着河边的路', go:'br3r', set:{brmichi:'kawa'}},
    {t:'田地中间的路', go:'br3r', set:{brmichi:'hatake'}}
  ]},
  br3r:{art:'br_roba', text:f=> f.brmichi==='hatake'
    ? '麦田中间的路上，风一直吹得很畅快。\n驴好久没有像这样，什么都不背地走过路了。'
    : '沿着河边的路上，水声听着很舒服。\n驴好久没有像这样，什么都不背地走过路了。', next:'br4'},

  br4:{art:'br_inu', text:'路边躺着一只猎狗。\n呼哧，呼哧，它喘得很难受。\n“你怎么了，喘成这个样子？”', next:'br5'},

  br5:{art:'br_inu', text:'“我上了年纪，跟不上打猎了。\n结果主人差一点就把我杀了。\n我跑了出来，可是往后该怎么活呢？”\n“我要去不来梅当乐师。跟我一起来吧。\n我弹琉特琴，你敲鼓就行。”', next:'brc_join'},
  brc_join:{cutin:{type:'join', chara:'inu', text:'狗加入乐队！！'}, then:'br6'},

  br6:{art:'br_neko', text:'再往前走了一段，墙头上坐着一只猫。\n那张脸阴沉沉的，像下了3天雨以后的天。', next:'br7'},

  br7:{art:'br_neko', text:'“我上了年纪，牙也不中用了，\n比起追老鼠，更想待在壁炉前面。\n结果女主人差一点就把我沉到河里去了。”\n“那就一起去不来梅吧。\n要说夜里的歌，你谁都不会输的。”', next:'brc_neko'},
  brc_neko:{cutin:{type:'kao', face:'neko', text:'要说夜里的歌……'}, then:'br8'},

  br8:{art:'br_ondori', text:'农家的大门上头，一只公鸡正拼命地叫着。\n“嗓门可真大呀。”\n“明天是星期天，家里要来客人。\n我是要被做成汤的。\n所以趁着还叫得出声，先叫个够。”', next:'br9'},

  br9:{art:'br_ondori', text:'“不管做什么，都比死了强。你的嗓子很好。\n跟我们一起做音乐吧。总会成点什么的。”\n公鸡从大门上跳了下来。', next:'brc_ondori'},
  brc_ondori:{cutin:{type:'waza', theme:'red', se:'kokekokko', text:'喔喔喔！！'}, then:'br10'},

  br10:{art:'br_mori', text:f=>{
    var t = '不来梅，一天是到不了的。\n天黑了，4只决定在林子里歇一晚。';
    if(f.first) return t + '\n驴和狗在树底下。猫在树枝上。公鸡在最高的地方。';
    return t + '\n在哪里歇呢？';
  }, choices:[
    {t:'在树底下，大家在一起', go:'br10r', set:{brmori:'shita'}},
    {t:'在高高的树枝上，一边望风', go:'br10r', set:{brmori:'eda'}}
  ]},
  br10r:{art:'br_mori', text:f=> f.brmori==='eda'
    ? '猫和公鸡爬到了高高的树枝上。\n下面，驴和狗背靠着背睡了。'
    : '4只在一棵大树底下缩成一团睡了。\n只有公鸡，睡前爬到了最高的地方。', next:'br11'},

  br11:{art:'br_akari', text:f=>{
    var t = '待在最高处的公鸡，看见远处有一点灯光。\n“那边有一座房子。里面点着灯。”';
    if(f.first) return t + '\n“过去吧。这里的住处不怎么好。”驴说。';
    return t + '\n怎么办？';
  }, choices:[
    {t:'到有灯光的房子那边去', go:'br12'},
    {t:'不靠近，在林子里过夜', go:'brm1'}
  ]},

  br12:{art:'br_ie_soto', text:'到了有灯光的房子，驴从窗户往里看。\n“看见什么了？”公鸡问。\n“一张摆满了好吃的桌子，\n还有围着桌子在吃东西的强盗们。”', next:'br13'},

  br13:{art:'br_ie_soto', text:'“那些东西，我们也正需要。”公鸡说。\n4只凑到一起，商量了起来。', next:'br14'},

  br14:{art:'br_mado', text:'驴把前腿搭在了窗台上。\n狗跳到了驴的背上，\n猫又爬到了狗的身上，\n最上面停着公鸡。', next:'brc_kasane'},
  brc_kasane:{cutin:{type:'kasane', text:'大合唱！！'}, then:'br15'},

  br15:{art:'br_tobikomi', text:'接着，它们一齐从窗户跳了进去。\n玻璃哗啦一声碎了！\n强盗们喊着“有怪物！”，逃进了林子里。', next:'br16'},

  br16:{art:'br_gochisou', text:'4只坐到了桌边。\n它们吃得像是把40天的份都吃完了，然后吹灭了灯，\n各自找了喜欢的地方睡下。\n驴在院子里，狗在门口，猫在壁炉边，公鸡在屋顶的梁上。', next:'brc_dark'},
  brc_dark:{cutin:{type:'dark', text:'半夜。'}, then:'br17'},

  br17:{art:'br_yoru', text:'一个强盗回来看看情况。\n房子里静悄悄的。走进厨房，壁炉深处有什么东西在发亮。\n（是没烧完的炭。）\n他这样想着，把火柴凑了过去。就在这时候。', next:'brc_hikkaki'},
  brc_hikkaki:{cutin:{type:'waza', theme:'orange', se:'hikkaki', text:'挠一爪！！'}, then:'br18'},

  br18:{art:'br_yoru', text:'猫扑到他脸上，挠了他一下。\n强盗往后门跑去。那里有狗等着。', next:'brc_kamitsuki'},
  brc_kamitsuki:{cutin:{type:'waza', theme:'brown', se:'kamitsuki', text:'咬一口！！'}, then:'br19'},

  br19:{art:'br_niwa', text:'他冲到院子里，驴用后腿踢了他一脚。', next:'brc_zushin'},
  brc_zushin:{cutin:{type:'waza', theme:'red', se:'zushin', text:'踢一脚！！'}, then:'br20'},

  br20:{art:'br_niwa', text:'屋顶上，醒过来的公鸡大声叫了起来。\n“喔喔喔！”\n强盗听成了这样。\n“把那家伙给我带过来！”', next:'brc_kao_dorobou'},
  brc_kao_dorobou:{cutin:{type:'kao', face:'dorobou', text:'有女巫！有法官！'}, then:'br21'},

  br21:{art:'br_houkoku', text:'强盗逃回林子里，对同伙说：\n“那座房子里有一个可怕的女巫。\n她朝我吐口水，用长长的指甲挠我的脸。\n门口有个拿刀的男人，扎了我的腿。\n院子里有个黑色的怪物，用棍子打了我。\n屋顶上还有个法官，喊着‘把那家伙给我带过来’。”', next:'br22'},

  br22:{art:'br_ie_asa', text:f=>{
    var t = '从那以后，强盗们再也没有回来过。';
    if(f.first) return t;
    return t + '\n早上，4只商量了起来。怎么办？';
  }, choices:[
    {t:'就住在这座房子里', go:'e_br_seishi'},
    {t:'还是去不来梅', go:'brb1'},
    {t:'在这座房子里，决定早上做什么', go:'bra1'}
  ]},

  e_br_seishi:{art:'br_ie_asa', ending:'br_seishi', text:'4只组成的乐队，太喜欢这座房子了，\n再也不想从这里出去。\n最后讲这个故事的人，嘴还是热的呢。\n从此，他们过上了幸福的生活。'},

  /* ---- 在不来梅城里 ---- */
  brb1:{art:'br_roba', text:'“这是座好房子。可是，我们是乐队呀。”\n4只锁上了房门，又走上了大路。', next:'brb2'},
  brb2:{art:'br_bremen', text:'不来梅的城很大，也很热闹。\n广场上，城里的乐队已经在那里了。\n喇叭也好，鼓也好，都亮闪闪的。', next:'brc_kao_roba'},
  brc_kao_roba:{cutin:{type:'kao', face:'roba', text:'……那，就在这边'}, then:'brb3'},
  brb3:{art:'br_bremen', text:'4只在广场的角落里，合起声音来。\n咴儿咴儿，汪，喵，喔喔喔。\n孩子们一个，两个地围了过来。', next:'e_br_bremen'},
  e_br_bremen:{art:'br_bremen', ending:'br_bremen', text:'亮闪闪的乐器，它们没有。\n可是广场的角落里，每天都有孩子来。\n在城里的一个角落，4只成了乐队。\n从此，他们过上了幸福的生活。'},

  /* ---- 林子里的早晨 ---- */
  brm1:{art:'br_mori', text:'“夜里的房子，还是不要靠近的好。”驴说。\n4只在林子里过了一夜。', next:'brm2'},
  brm2:{art:'br_mori', text:'早上，公鸡一叫，大家都醒了。\n“难得聚在一起。来，合一次看看。”\n咴儿咴儿，汪，喵，喔喔喔。', next:'brm3'},
  brm3:{art:'br_roba', text:'这时，一辆装着面粉袋子的货车从旁边经过。\n磨坊主听见驴的声音，说道：\n“好嗓子。来我的磨坊干活怎么样？饲料管够。”', next:'brc_kao_roba2'},
  brc_kao_roba2:{cutin:{type:'kao', face:'roba', text:'我是乐师'}, then:'e_br_mori'},
  e_br_mori:{art:'br_roba', ending:'br_mori', text:'驴很有礼貌地谢绝了，和伙伴们接着往前走。\n会走到哪里去，现在还不知道。\n4只的歌声，在林子的早晨里传得很远。\n从此，他们过上了幸福的生活。'},

  /* ---- 各自的早晨 ---- */
  bra1:{art:'br_ie_asa', text:'早上，在这座房子里做什么呢？', choices:[
    {t:'公鸡在屋顶上报时', go:'bra1r', set:{brasa:'ondori'}},
    {t:'狗在门口睡午觉', go:'bra1r', set:{brasa:'inu'}},
    {t:'猫在壁炉前缩成一团', go:'bra1r', set:{brasa:'neko'}},
    {t:'驴在太阳底下晃耳朵', go:'bra1r', set:{brasa:'roba'}}
  ]},
  bra1r:{art:'br_ie_asa', text:f=>{
    if(f.brasa==='inu') return '狗在门口躺了下来。\n已经不用再去追赶谁了。';
    if(f.brasa==='neko') return '猫在壁炉前缩成了一团。\n追老鼠的日子，已经结束了。';
    if(f.brasa==='roba') return '驴站在太阳底下，晃了晃长长的耳朵。\n面粉的袋子，已经不在它的背上了。';
    return '公鸡爬上屋顶，朝着东边的天空叫了起来。\n没有谁拜托过它。';
  }, next:'e_br_asa'},
  e_br_asa:{art:'br_ie_asa', ending:'br_asa', text:'没有谁对它们说过什么。\n每一只，都是自己决定的。\n今天也是，公鸡报时，狗在门口睡觉，\n猫在壁炉前缩成一团，驴在太阳底下晃着长长的耳朵。\n从此，他们过上了幸福的生活。'},

  /* ================= 强盗的故事 ================= */

  bd1:{art:'dorobou_mori', text:'这是住在林子里那座房子中的3个强盗的故事。\n那天晚上，桌上也一样摆满了好吃的。', next:'bd2'},
  bd2:{art:'dorobou_mori', text:'今天的大餐是什么？', choices:[
    {t:'香肠和葡萄酒', go:'bd2r', set:{bdlife:'sausage'}},
    {t:'面包、奶酪和苹果', go:'bd2r', set:{bdlife:'pan'}}
  ]},
  bd2r:{art:'dorobou_mori', text:f=> f.bdlife==='pan'
    ? '面包、奶酪和苹果，摆满了整张桌子。\n3个人心情很好地吃了起来。'
    : '烤好了香肠，倒上了葡萄酒。\n3个人心情很好地吃了起来。', next:'bd3'},
  bd3:{art:'br_tobikomi', text:'突然，窗户外面响起了从来没听过的声音。\n咴儿咴儿，汪，喵，喔喔喔。全都一起来了。\n接着玻璃哗啦一声碎了！\n“有怪物！”\n3个人逃进了林子里。', next:'bd4'},
  bd4:{art:'dorobou_mori', text:'在林子深处，3个人喘匀了气。\n“那座房子，怎么办？”', choices:[
    {t:'回去看看情况', go:'bdg1'},
    {t:'那座房子，就放弃吧', go:'bdm1'}
  ]},

  bdg1:{art:'br_yoru', text:'漆黑一片的厨房。\n壁炉深处，亮着两点火光。\n（是没烧完的炭。）\n把火柴凑过去……', next:'bdc_1'},
  bdc_1:{cutin:{type:'kao', face:'dorobou', text:'有女巫！！'}, then:'bdg2'},
  bdg2:{art:'br_houkoku', text:'脸被挠了，腿被扎了，还挨了棍子，\n屋顶上又传来“把那家伙给我带过来！”\n强盗逃回了林子里。', next:'e_bd_gokai'},
  e_bd_gokai:{art:'dorobou_mori', ending:'bd_gokai', text:'“那里有女巫，有拿刀的男人，有黑色的怪物，还有法官。”\n同伙们谁也不肯再靠近那座房子了。\n真正的情形，谁也不知道。\n从此，他们过上了幸福的生活。'},

  bdm1:{art:'dorobou_mori', text:'“那座房子，已经是它们的了。”\n3个人朝着林子的出口走去。', next:'bdm2'},
  bdm2:{art:'br_bremen', text:'城里正开着早市。\n有块牌子写着“招搬运工”。\n3个人互相看了看。', next:'e_bd_machi'},
  e_bd_machi:{art:'br_bremen', ending:'bd_machi', text:'从那天起，3个人靠什么过日子，\n这个故事里没有写。\n林子里的那座房子中，回响着4只的歌声。\n完。'},

  /* ================= 公鸡的故事 ================= */

  bo1:{art:'ondori_yane', text:'这是一只在农家大门上叫着的公鸡的故事。\n明天是星期天。客人要来，我要被做成汤。', next:'bo2'},
  bo2:{art:'ondori_yane', text:'最后的一天，做什么呢？', choices:[
    {t:'放开嗓子叫个够', go:'bo2r', set:{bolife:'naku'}},
    {t:'在院子里慢慢走一圈', go:'bo2r', set:{bolife:'aruku'}}
  ]},
  bo2r:{art:'ondori_yane', text:f=> f.bolife==='aruku'
    ? '从院子的这头到那头，慢慢地走了一遍。\n心里想着，这是最后看一眼了。'
    : '在大门上，一直叫到嗓子哑了。\n也有人捂住了耳朵，不过没关系。', next:'bo3'},
  bo3:{art:'br_ondori', text:'这时，驴、狗和猫从旁边经过。\n“不管做什么，都比死了强。你的嗓子很好。”\n公鸡从大门上跳了下来。', next:'boc_1'},
  boc_1:{cutin:{type:'kao', face:'ondori', text:'我的声音，也可以吗'}, then:'bo4'},
  bo4:{art:'br_mado', text:'在林子里的房子那边，公鸡停在了最上面。\n接下来的事，由公鸡自己决定。', choices:[
    {t:'半夜，在屋顶上叫', go:'bok1'},
    {t:'住在这座房子里，每天报晓', go:'boa1'}
  ]},

  bok1:{art:'br_niwa', text:'半夜，它在屋顶的梁上醒了过来。\n下面有个强盗在闹腾。\n公鸡拼命地叫了起来。', next:'boc_2'},
  boc_2:{cutin:{type:'kao', face:'ondori', text:'喔喔喔！！'}, then:'bok2'},
  bok2:{art:'br_houkoku', text:'强盗听成了“把那家伙给我带过来”。\n本来要被做成汤的这个声音，守住了这座房子。', next:'e_bo_koe'},
  e_bo_koe:{art:'ondori_yane', ending:'bo_koe', text:'声音用在哪里，由自己决定。\n从那以后，公鸡也总是想叫的时候，就照自己想的那样叫。\n从此，他们过上了幸福的生活。'},

  boa1:{art:'br_ie_asa', text:'住进这座房子以后，公鸡爬上了屋顶。\n没有谁拜托过它。\n早上，东边的天空一发白，公鸡就叫了起来。', next:'boa2'},
  boa2:{art:'br_ie_asa', text:'狗醒了，猫伸了个懒腰，驴甩了甩耳朵。\n“我不会再变成汤了。每天早上，我就在这里叫。”', next:'e_bo_asa'},
  e_bo_asa:{art:'ondori_yane', ending:'bo_asa', text:'因为公鸡的声音，有谁醒了过来。\n仅仅是这样一件事，就让公鸡很高兴。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, BREMEN_ZH);

  T.ZK_EN.push(
    {section:'不来梅的音乐家'},
    {id:'br_seishi', n:'喜欢上的房子',     h:'第一次游玩时看到的原本的故事'},
    {id:'br_bremen', n:'在不来梅城里',     h:'早上，还是决定去不来梅的话……'},
    {id:'br_mori',   n:'林子里的早晨',     h:'不靠近有灯光的房子的话……'},
    {id:'br_asa',    n:'各自的早晨',       h:'在这座房子里，决定早上做什么的话……'},
    {id:'bd_gokai',  n:'女巫和法官',       h:'在强盗的故事里，回去看看情况的话……'},
    {id:'bd_machi',  n:'走出林子',         h:'在强盗的故事里，放弃那座房子的话……'},
    {id:'bo_koe',    n:'声音传到了',       h:'在公鸡的故事里，半夜叫起来的话……'},
    {id:'bo_asa',    n:'报晓',             h:'在公鸡的故事里，每天报晓的话……'}
  );

})();
