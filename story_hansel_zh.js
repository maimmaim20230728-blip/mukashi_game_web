"use strict";
/* 汉赛尔与格蕾特 - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_hansel_en.js
   文体：简单的绘本中文，与 story_akazukin_zh.js 等一致。
   有名的对答（“咔嚓咔嚓，是谁在啃我的小房子？”“是风呀，是天上的孩子，风呀。”）按 PD 的格林原文自行译出。 */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var HANSEL_ZH = {

  /* ================= 汉赛尔与格蕾特 ================= */

  hg1:{art:'hg_ie', text:'这是一个住在大森林旁边的樵夫一家的故事。\n汉赛尔和格蕾特兄妹俩，\n和爸爸、继母一起，四个人生活在一起。', next:'hg2'},

  hg2:{art:'hg_ie', text:f=>{
    var t = '那一年，全国闹起了饥荒。\n面包很贵，樵夫家里的食物也一天比一天少。';
    if(f.first) return t;
    return t + '\n今天只有一个小小的面包。要怎么分呢？';
  }, choices:[
    {t:'四个人平分', go:'hg2r', set:{hpan:'minna'}},
    {t:'汉赛尔多分给妹妹一些', go:'hg2r', set:{hpan:'imouto'}}
  ]},
  hg2r:{art:'hg_ie', text:f=> f.hpan==='imouto'
    ? '“我不太饿。”\n汉赛尔悄悄把自己的那一份，放到了格蕾特的盘子里。'
    : '他们把小面包分成四份，一起吃了。\n“要是明天能买到更大的就好了。”', next:'hg3'},

  hg3:{art:'hg_yoru', text:'那天晚上，兄妹俩听见了继母的声音。\n“明天早上，把孩子们带到森林深处，就留在那里吧。\n不然的话，我们四个人都会饿死。”\n爸爸一次又一次地说不行。\n可是最后，他一句话也没说，点了点头。', next:'hg4'},

  hg4:{art:'hg_yoru', text:f=>{
    var t = '格蕾特哭了起来。\n“没事的。我有办法。”\n汉赛尔悄悄走到外面，在月光下捡起了白色的小石子。';
    if(f.first) return t + '\n一直捡到口袋满满的。';
    return t + '\n要捡哪些小石子呢？';
  }, choices:[
    {t:'圆圆的白色小石子', go:'hg4r', set:{hkoishi:'shiro'}},
    {t:'在月光下最亮的小石子', go:'hg4r', set:{hkoishi:'hikaru'}}
  ]},
  hg4r:{art:'hg_yoru', text:f=> f.hkoishi==='hikaru'
    ? '他一颗一颗地试着挑，选出会闪出银光的小石子。\n一直捡到口袋满满的。'
    : '圆圆的白色小石子，一直捡到口袋满满的。\n回到家里，他小声对格蕾特说：“已经没事了。”', next:'hg5'},

  hg5:{art:'hg_mori', text:'第二天早上，一家人往森林里走去。\n汉赛尔一边走，一边把小石子一颗一颗地丢在路上。\n在森林深处，爸爸生起了一堆火。\n“在这里休息吧。等一会儿我们来接你们。”\n不知不觉，兄妹俩睡着了。', next:'hg6'},

  hg6:{art:'hg_koishi', text:'醒过来的时候，四周一片漆黑。\n格蕾特哭了起来。\n“等月亮升起来吧。”汉赛尔说。\n过了一会儿，月亮升到了森林的上方……', next:'hgc_koishi'},
  hgc_koishi:{cutin:{type:'waza', theme:'gold', se:'koishi', text:'小石子发光了！！'}, then:'hg7'},

  hg7:{art:'hg_koishi', text:'像银子一样发亮的小石子，一颗接一颗，一直连到家门口。\n兄妹俩手拉着手，走了一整夜，天亮的时候回到了家。', next:'hg8'},

  hg8:{art:'hg_ie', text:'爸爸一边哭，一边紧紧抱住了他们两个。\n继母什么也没有说。', next:'hg9'},

  hg9:{art:'hg_yoru', text:f=>{
    var t = '可是饥荒还在继续。\n有一天晚上，那个声音又响了起来。\n这一次门上了锁，出不去了。';
    if(f.first) return t + '\n汉赛尔决定把早上分到的面包掰碎，用来做记号。';
    return t + '\n该怎么办呢？';
  }, choices:[
    {t:'早上把面包掰碎，做成记号', go:'hg10'},
    {t:'悄悄从窗口溜出去捡小石子', go:'hk1'}
  ]},

  hg10:{art:'hg_mori', text:'在去森林的路上，汉赛尔把面包屑一点一点地撒了下去。\n这一次，兄妹俩也在火堆旁边睡着了。', next:'hg11'},

  hg11:{art:'hg_pankuzu', text:'月亮升起来了，可是面包屑一粒也不剩。\n森林里的鸟儿，把它们全都吃掉了。', next:'hgc_dark1'},
  hgc_dark1:{cutin:{type:'dark', text:'兄妹俩一直走啊走。\n一个晚上，两个晚上，然后是第三天的早上。'}, then:'hg12'},

  hg12:{art:'hg_mayou', text:'肚子饿得咕咕叫，腿也累得走不动了。\n就在这时，树枝上有一只雪一样白的小鸟在唱歌。', next:'hg13'},

  hg13:{art:'hg_tori', text:'小鸟飞在兄妹俩前面，带着他们往森林深处走。\n然后，走到一片开阔的地方……', next:'hgc_okashi'},
  hgc_okashi:{cutin:{type:'okashi', text:'糖果屋！！'}, then:'hg14'},

  hg14:{art:'hg_okashi', text:f=>{
    var t = '面包做的墙，点心做的屋顶，透明的糖做的窗户。\n整座房子都是吃的。';
    if(f.first) return t + '\n汉赛尔啃屋顶，格蕾特啃窗户，两个人吃得停不下来。';
    return t + '\n先从哪里吃起呢？';
  }, choices:[
    {t:'屋顶上的点心', go:'hg14r', set:{hokashi:'yane'}},
    {t:'糖做的窗户', go:'hg14r', set:{hokashi:'mado'}}
  ]},
  hg14r:{art:'hg_kajiru', text:f=> f.hokashi==='mado'
    ? '糖做的窗户啪的一声碎了，在嘴里慢慢化开。\n“这么好吃的东西，还是第一次吃到。”'
    : '屋顶上的点心，有蜂蜜的味道。\n“这么好吃的东西，还是第一次吃到。”', next:'hg15'},

  hg15:{art:'hg_kajiru', text:'咔嚓，咔嚓。\n就在这时，屋子里传出一个细细的声音。', next:'hgc_uta'},
  hgc_uta:{cutin:{type:'kao', face:'majo', text:'咔嚓咔嚓，是谁在啃我的小房子？'}, then:'hg16'},

  hg16:{art:'hg_kajiru', text:'兄妹俩回答说：\n“是风呀，是风呀。是天上的孩子，风呀。”\n然后又接着吃了起来。', next:'hg17'},

  hg17:{art:'hg_majo', text:'门开了，一位拄着拐杖的老奶奶走了出来。\n“哎呀哎呀，多可爱的小客人。快请进吧。”\n牛奶和薄饼，苹果和核桃。\n在白色的小床上，兄妹俩睡得很香。', next:'hgc_dark2'},
  hgc_dark2:{cutin:{type:'dark', text:'可是，那位老奶奶……'}, then:'hg18'},

  hg18:{art:'hg_majo', text:'是一个女巫。\n女巫的眼睛是红的，看不见远处。\n可是她的鼻子像野兽一样灵。\n只要有孩子靠近，她一闻就知道。', next:'hg19'},

  hg19:{art:'hg_ori', text:'早上，汉赛尔被关进了笼子里。\n“先把你养胖，再吃掉。”\n格蕾特被叫去打水和做饭。', next:'hg20'},

  hg20:{art:'hg_hone', text:'每天早上，女巫都会说：\n“把手指伸出来给我看看。胖了没有？”\n汉赛尔没有伸手指，而是伸出了一根小骨头。', next:'hgc_hone'},
  hgc_hone:{cutin:{type:'waza', theme:'brown', text:'是骨头！！'}, then:'hg21'},

  hg21:{art:'hg_ori', text:'眼睛不好的女巫，一次又一次地被骗了过去。\n过了四个星期，女巫终于等不下去了。\n“胖不胖都一样，明天早上就吃掉你。”', next:'hg22'},

  hg22:{art:'hg_kamado', text:'女巫在烤炉里生起了火。\n“你钻进去，看看里面够不够热。”', next:'hgc_vs'},
  hgc_vs:{cutin:{type:'vs', faces:['gretel','majo'], text:'格蕾特 对 女巫！！'}, then:'hg23'},

  hg23:{art:'hg_kamado', text:f=>{
    var t = '格蕾特看出了女巫的打算。';
    if(f.first) return t + '\n“我不会做。要怎么钻进去呢？”';
    return t + '\n该怎么办呢？';
  }, choices:[
    {t:'回答说“我不会做”', go:'hg24'},
    {t:'抓起笼子的钥匙逃走', go:'hkw1'}
  ]},

  hg24:{art:'hg_kamado', text:'“真是个笨孩子。你看，要这样做。”\n女巫自己把头伸进烤炉的那一刻。', next:'hgc_kamado'},
  hgc_kamado:{cutin:{type:'waza', theme:'red', se:'kamado', text:'砰！！'}, then:'hg25'},

  hg25:{art:'hg_kamado', text:'格蕾特把女巫推进烤炉，砰的一声关上了铁门。\n女巫，就到此为止了。', next:'hg26'},

  hg26:{art:'hg_takara', text:f=>{
    var t = '格蕾特打开了笼子。\n“汉赛尔，已经没事了！”\n屋子里放着满满的珍珠和宝石的箱子。';
    if(f.first) return t + '\n两个人把口袋塞满了宝石。';
    return t + '\n要带什么回家呢？';
  }, choices:[
    {t:'把宝石塞进口袋', go:'hg27'},
    {t:'把架子上的食物装进袋子', go:'hgm1'}
  ]},

  hg27:{art:'hg_ahiru', text:'在森林里走着走着，来到了一大片水边。\n没有桥，也没有船。\n这时，一只白色的鸭子游了过来。', next:'hgc_ahiru'},
  hgc_ahiru:{cutin:{type:'waza', theme:'blue', se:'nami', text:'小鸭子，拜托你了！！'}, then:'hg28'},

  hg28:{art:'hg_ahiru', text:'“小鸭子，小鸭子。这里是格蕾特和汉赛尔。\n没有桥，也没有船。让我们坐到你白白的背上吧。”\n“两个人一起太重了。还是一个一个地过去吧。”\n鸭子把他们两个，一个一个地送到了对岸。', next:'hg29'},

  hg29:{art:'hg_saikai', text:'穿过认得的那片森林，就看见了久违的家。\n爸爸看见他们两个，哭了。\n继母已经不在了。', next:'e_hg_seishi'},

  e_hg_seishi:{art:'hg_saikai', ending:'hg_seishi', text:'看见从口袋里掉出来的珍珠和宝石，爸爸睁圆了眼睛。\n从那以后，他们再也没有为吃的发过愁。\n三个人一直和和睦睦地生活着。\n从此，他们过上了幸福的生活。'},

  /* ---- 再一次的小石子 ---- */
  hk1:{art:'hg_koishi', text:'汉赛尔悄悄从窗口溜了出去，\n在月光下捡了满满一口袋白色的小石子。', next:'hk2'},
  hk2:{art:'hg_mori', text:'第二天，就算被留在森林深处，兄妹俩也一点都不慌。\n月亮一升起来，小石子就发出光，一直连到家门口。', next:'hk3'},
  hk3:{art:'hg_ie', text:'“再也不会做这样的事了。”\n爸爸在他们两个面前，这样保证。\n那天晚上，继母也一直低着头，一句话也没说。', next:'e_hg_koishi'},
  e_hg_koishi:{art:'hg_ie', ending:'hg_koishi', text:'那个冬天，家里还是很穷。\n不过他们把一个面包分成四份，一起等着春天。\n糖果屋里的女巫，他们一次也没有遇见过。\n从此，他们过上了幸福的生活。'},

  /* ---- 到河的对岸去 ---- */
  hkw1:{art:'hg_kamado', text:'格蕾特抓起笼子的钥匙，把汉赛尔放了出来。\n“快逃！”\n眼睛不好的女巫，一边用鼻子嗅着，一边追了上来。', next:'hkw2'},
  hkw2:{art:'hg_ahiru', text:'跑到水边，那只白色的鸭子正在那里。\n“一个一个来！太重了会沉下去的。”\n鸭子先把格蕾特送了过去，接着又送了汉赛尔。', next:'hkw3'},
  hkw3:{art:'hg_ahiru', text:'女巫也追到了岸边。\n“鸭子呀，也让我坐上去吧。”\n可是女巫太重了，鸭子一动也不动。', next:'e_hg_kawa'},
  e_hg_kawa:{art:'hg_saikai', ending:'hg_kawa', text:'在河的那一边，女巫只能不停地跺脚。\n兄妹俩手拉着手，回到了家里。\n谁也没有钻进烤炉，谁也没有被吃掉。\n从此，他们过上了幸福的生活。'},

  /* ---- 村子的冬天 ---- */
  hgm1:{art:'hg_takara', text:'格蕾特看了看架子。\n面粉、蜂蜜、核桃、苹果。\n“比起宝石，还是这些好。”\n两个人把食物塞满了袋子。', next:'hgm2'},
  hgm2:{art:'hg_ahiru', text:'抱着沉甸甸的袋子，他们来到了水边。\n白色的鸭子把两个人和袋子，一个一个地送到了对岸。', next:'hgm3'},
  hgm3:{art:'hg_saikai', text:'村子里的饥荒，还没有过去。\n兄妹俩把带回来的食物，分给了全村的人。', next:'e_hg_mura'},
  e_hg_mura:{art:'hg_ie', ending:'hg_mura', text:'糖果屋里的面粉，那个冬天变成了村子里的面包。\n一直到春天来临、田里冒出新芽，谁也没有挨过饿。\n从此，他们过上了幸福的生活。'},

  /* ================= 女巫的故事 ================= */

  hw1:{art:'majo_daidokoro', text:'这是一个住在森林深处的女巫的故事。\n女巫每天烤面包、做点心，\n再用它们做成墙和屋顶，一直不停地盖着自己的房子。', next:'hw2'},
  hw2:{art:'majo_daidokoro', text:'今天要烤点什么呢？', choices:[
    {t:'甜甜的饼干', go:'hw2r', set:{wmenu:'cookie'}},
    {t:'核桃面包', go:'hw2r', set:{wmenu:'pan'}}
  ]},
  hw2r:{art:'majo_daidokoro', text:f=> f.wmenu==='pan'
    ? '核桃面包烤得金黄金黄的。\n可是，没有一个人来吃。\n女巫就把它们，垒到了墙上。'
    : '甜甜的饼干烤得又香又脆。\n可是，没有一个人来吃。\n女巫就把它们，排到了屋顶上。', next:'hw3'},
  hw3:{art:'hg_okashi', text:'有一天，传来了咔嚓咔嚓的声音。\n有人在啃她的房子。\n女巫红红的眼睛，看不见远处。\n只有鼻子，闻到了孩子的味道。', next:'hwc_1'},
  hwc_1:{cutin:{type:'kao', face:'majo', text:'咔嚓咔嚓，是谁在啃我的房子？'}, then:'hw4'},
  hw4:{art:'hg_majo', text:'“是风呀，是天上的孩子，风呀。”\n可爱的声音这样回答。\n女巫打开了门。那么……', choices:[
    {t:'把他们养胖，再吃掉', go:'hwm1'},
    {t:'请他们吃一顿', go:'hwo1'}
  ]},

  hwo1:{art:'majo_daidokoro', text:'桌子上，是刚烤好的面包和牛奶。\n两个孩子一次又一次地说“好吃”“好吃”。', next:'hwc_2'},
  hwc_2:{cutin:{type:'kao', face:'majo', text:'……好吃？'}, then:'hwo2'},
  hwo2:{art:'majo_daidokoro', text:'这句话，女巫已经很久很久没有听到过了。\n自己做的东西，有人愿意吃。\n女巫悄悄地哭了。', next:'e_hw_okyaku'},
  e_hw_okyaku:{art:'hg_okashi', ending:'hw_okyaku', text:'从那以后，糖果屋里时不时会有客人来。\n女巫现在也还在烤面包、做点心。\n这一次，是为了愿意吃的人。\n从此，他们过上了幸福的生活。'},

  hwm1:{art:'hg_ori', text:'她把汉赛尔关进笼子，每天早上都说“把手指伸出来给我看看”。\n可是女巫的眼睛，分不出骨头和手指。\n“还是这么细……”', next:'hwc_3'},
  hwc_3:{cutin:{type:'kao', face:'majo', text:'为什么就是不长胖呢！？'}, then:'hwm2'},
  hwm2:{art:'hg_kamado', text:'等不下去的女巫，在烤炉里生起了火。\n“看看里面够不够热。”\n“我不会做。”格蕾特说。\n女巫就自己把头伸了进去。\n……什么也看不见。', next:'hwm3'},
  hwm3:{art:'hg_kamado', text:'“里面黑漆漆的！谁来帮我扶着门！”\n趁女巫在里面扭来扭去的时候，兄妹俩逃走了。', next:'e_hw_megane'},
  e_hw_megane:{art:'hg_okashi', ending:'hw_megane', text:'从烤炉里爬出来的女巫，下定了决心。\n“我要去买一副眼镜。”\n第二天早上，女巫拄着拐杖，往镇上去了。\n戴上眼镜的女巫看见了什么，那就是另一个故事了。\n从此，他们过上了幸福的生活。'},

  /* ================= 白鸟的故事 ================= */

  hb1:{art:'tori_sora', text:'这是一只住在森林里、雪一样白的小鸟的故事。\n有一天早上，森林的小路上撒着一路的面包屑。', next:'hb2'},
  hb2:{art:'hg_pankuzu', text:'看起来很好吃的面包屑。该怎么办呢？', choices:[
    {t:'只吃一粒', go:'hb2r', set:{bpan:'hitotsu'}},
    {t:'吃个饱', go:'hb2r', set:{bpan:'zenbu'}}
  ]},
  hb2r:{art:'hg_pankuzu', text:f=> f.bpan==='hitotsu'
    ? '本来只打算吃一粒的。\n可是同伴们也飞了过来，面包屑全都没有了。'
    : '同伴们也飞了过来，面包屑一转眼就全都没有了。', next:'hb3'},
  hb3:{art:'hg_mayou', text:'那天晚上，小鸟看见了。\n两个孩子在森林里转来转去，好像在找什么东西。\n“他们找的……是我们吃掉的面包屑。”', next:'hbc_1'},
  hbc_1:{cutin:{type:'kao', face:'tori', text:'都是我不好'}, then:'hb4'},
  hb4:{art:'hg_mayou', text:'小鸟想了想。\n现在，自己能做的是什么呢。', choices:[
    {t:'从天上找到回家的路，给他们带路', go:'hbp1'},
    {t:'用歌声告诉他们糖果屋的事', go:'hbu1'}
  ]},

  hbp1:{art:'tori_sora', text:'小鸟高高地飞了起来。\n从上面看，樵夫的家就在不远的地方。\n小鸟低低地飞在两个孩子前面，给他们带路。', next:'hbp2'},
  hbp2:{art:'hg_koishi', text:'“那只小鸟，好像在说‘跟我来’。”\n兄妹俩跟在小鸟后面走。\n走出森林，就看见了自己家熟悉的炊烟。', next:'e_hb_pankuzu'},
  e_hb_pankuzu:{art:'hg_saikai', ending:'hb_pankuzu', text:'吃掉了面包屑的小鸟，\n作为补偿，把回家的路还给了他们两个。\n补偿，就从自己做得到的事开始。\n从此，他们过上了幸福的生活。'},

  hbu1:{art:'hg_tori', text:'小鸟是知道的。\n森林深处的糖果屋，还有住在里面的主人。\n小鸟停在树枝上，唱了起来。\n“墙可以啃，屋里不要进。”', next:'hbc_2'},
  hbc_2:{cutin:{type:'kao', face:'tori', text:'不可以进屋里去！'}, then:'hbu2'},
  hbu2:{art:'hg_okashi', text:'兄妹俩听懂了歌里的意思。\n他们啃了一点墙，填饱了肚子，\n门开了也没有进去，回到了森林的小路上。\n白色的小鸟朝着家的方向飞了过去。', next:'e_hb_uta'},
  e_hb_uta:{art:'tori_sora', ending:'hb_uta', text:'知道糖果屋的那只小鸟，\n从那以后也一直在树枝上唱着。\n那是唱给在森林里迷路的孩子听的、报信的歌。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, HANSEL_ZH);

  T.ZK_EN.push(
    {section:'汉赛尔与格蕾特'},
    {id:'hg_seishi',  n:'白鸭子的归途',     h:'第一次玩的时候，原本的故事'},
    {id:'hg_koishi',  n:'再一次的小石子',   h:'第二个晚上，从窗口溜出去的话……'},
    {id:'hg_kawa',    n:'到河的对岸去',     h:'在烤炉前面，选择逃走的话……'},
    {id:'hg_mura',    n:'村子的冬天',       h:'不拿宝石，而是带食物回去的话……'},
    {id:'hw_okyaku',  n:'第一次来的客人',   h:'在女巫的故事里，请他们吃一顿的话……'},
    {id:'hw_megane',  n:'红眼睛和眼镜',     h:'在女巫的故事里，想把他养胖的话……'},
    {id:'hb_pankuzu', n:'吃掉面包屑的是谁', h:'在白鸟的故事里，从天上带路的话……'},
    {id:'hb_uta',     n:'用歌声报信',       h:'在白鸟的故事里，用歌声报信的话……'}
  );

})();
