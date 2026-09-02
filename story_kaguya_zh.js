"use strict";
/* 辉夜姬 - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_kaguya_en.js.
   底本: 竹取物语(10世纪, PD)。不使用2013年电影的固有元素。 */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var KAGUYA_ZH = {

  /* ================= 辉夜姬 ================= */

  kg1:{art:'kg_takebayashi', text:'这是很久很久以前的故事。\n从前有一位靠砍竹子过日子的老爷爷。\n人们都叫他“竹取翁”。\n有一天，在竹林深处，他发现了一根根部闪着金光的竹子。', next:'kgc_take'},
  kgc_take:{cutin:{type:'hikari', text:'竹子发光了！！'}, then:'kg2'},

  kg2:{art:'kg_akachan', text:'他把竹子剖开一看，里面坐着一个只有3寸高的小女孩。\n老爷爷把她放在手掌上，带回了家。\n他和妻子老奶奶一起，把她放进小篮子里养了起来。', next:'kg3'},

  kg3:{art:'kg_akachan', text:'每天为这位小公主做点什么好呢？', choices:[
    {t:'唱摇篮曲', go:'kg3r', set:{takeko:'uta'}},
    {t:'用竹子做玩具', go:'kg3r', set:{takeko:'omocha'}}
  ]},
  kg3r:{art:'kg_akachan', text:f=> f.takeko==='omocha'
    ? '老爷爷用竹子做了小笛子和小车。\n公主一笑，老奶奶也跟着笑了。'
    : '老奶奶一唱摇篮曲，公主就香香地睡着了。\n两个人守在篮子旁边，一直看着她。', next:'kg4'},

  kg4:{art:'kg_seichou', text:'从那以后，每次砍开竹子，里面都会出现黄金。\n女孩一天天长大，大约3个月，就长成了一位美丽的姑娘。\n他们给她取名叫“细竹的辉夜姬”。', next:'kg5'},

  kg5:{art:'kg_hyouban', text:'辉夜姬的美貌，传遍了整个国家。\n宅子四周，围满了想看她一眼的人。', next:'kg6'},

  kg6:{art:'kg_kikoshi', text:'其中有5位贵公子，说什么也想娶她为妻，找上门来。\n石作皇子、车持皇子、阿倍大臣，\n大伴大纳言、石上中纳言。', next:'kg7'},

  kg7:{art:'kg_takara', text:'辉夜姬说：\n“谁能把我想看的宝物带来，我就到谁那里去。”', next:'kgc_t1'},
  kgc_t1:{cutin:{type:'waza', theme:'gold', text:'佛的石钵！！'}, then:'kgc_t2'},
  kgc_t2:{cutin:{type:'waza', theme:'green', text:'蓬莱的玉枝！！'}, then:'kgc_t3'},
  kgc_t3:{cutin:{type:'waza', theme:'red', text:'火鼠的皮衣！！'}, then:'kgc_t4'},
  kgc_t4:{cutin:{type:'waza', theme:'blue', text:'龙脖子上的宝珠！！'}, then:'kgc_t5'},
  kgc_t5:{cutin:{type:'waza', theme:'orange', text:'燕子的子安贝！！'}, then:'kg8'},

  kg8:{art:'kg_takara', text:f=>{
    var t = '每一样，都不像是这世上会有的宝物。\n5个人各自踏上了旅途。';
    if(f.first) return t;
    return t + '\n听谁的故事呢？';
  }, choices:[
    {t:'石作皇子', go:'kgk1'},
    {t:'车持皇子', go:'kgk2'},
    {t:'阿倍大臣', go:'kgk3'},
    {t:'大伴大纳言', go:'kgk4'},
    {t:'石上中纳言', go:'kgk5'}
  ]},
  kgk1:{art:'kg_takara', text:'石作皇子觉得去遥远的天竺太辛苦，\n就从附近的寺庙里拿了一只旧钵去。\n可是，佛的钵应该会发光才对。\n一只不发光的钵，马上就被看穿了。', next:'kg9'},
  kgk2:{art:'kg_takara', text:'车持皇子让工匠们做了一根玉枝。\n公主和老爷爷，都被这根精美的玉枝看呆了。\n可是就在这时，工匠们找上门来说：\n“我们的工钱还没拿到呢。”', next:'kg9'},
  kgk3:{art:'kg_takara', text:'阿倍大臣从遥远的国家订来了一件皮衣。\n公主说：“火鼠的皮衣，放进火里也不应该会烧起来。”\n一放进火里，皮衣就呼呼地烧光了。', next:'kg9'},
  kgk4:{art:'kg_takara', text:'大伴大纳言坐船出海去找龙。\n遇上了大风暴，船在海上打转。\n好不容易回到岸上，大纳言肿着眼睛回了家。', next:'kg9'},
  kgk5:{art:'kg_takara', text:'石上中纳言把手伸进燕子窝里，\n刚抓住什么东西，就从屋顶上摔了下来。\n他抓着的，是燕子的旧粪。\n中纳言受了伤，只好躺在床上。', next:'kg9'},

  kg9:{art:'kg_hyouban', text:f=>{
    var t = '结果，没有一个人能把真正的宝物带回来。';
    if(f.first) return t;
    return t + '\n那么，怎么办呢？';
  }, choices:[
    {t:'不去理会传闻，安静地过日子', go:'kg10'},
    {t:'把真话告诉老爷爷和老奶奶', go:'kgn1'}
  ]},

  kg10:{art:'kg_mikado', text:'这些传闻，也传到了皇帝的耳朵里。\n皇帝装作出去打猎的样子，来到了竹取翁的家。', next:'kgc_mikado'},
  kgc_mikado:{cutin:{type:'waza', theme:'gold', text:'皇帝的轿子！！'}, then:'kg11'},

  kg11:{art:'kg_hikari', text:'皇帝正要把她抱上轿子的时候，\n辉夜姬的身影一下子变成了光，消失了。\n“还是不带她走了吧。”\n皇帝这样说着，回了京城。', next:'kg12'},

  kg12:{art:'kg_mikado', text:'从那以后，皇帝和辉夜姬开始互相寄信、互赠诗歌。', next:'kgc_dark1'},
  kgc_dark1:{cutin:{type:'dark', text:'就这样，过了3年。'}, then:'kg13'},

  kg13:{art:'kg_tsukimi', text:'到了春天，辉夜姬常常抬头望着月亮掉眼泪。\n老爷爷问她原因，她也不回答。', next:'kg14'},

  kg14:{art:'kg_uchiake', text:'夏天快结束的时候，辉夜姬终于说了出来。\n“我是月亮都城里的人。\n8月15日的月圆之夜，会有人来接我。我必须回去。”', next:'kgc_kao1'},
  kgc_kao1:{cutin:{type:'kao', face:'okina', text:'我绝不放她走！'}, then:'kg15'},

  kg15:{art:'kg_mamori', text:'老爷爷求皇帝派人，来了许多兵士。\n屋顶上、院子里，都站满了拿着弓的人。\n老奶奶把公主藏在里屋，把门关得紧紧的。', next:'kg16'},

  kg16:{art:'kg_juugoya', text:'月圆之夜。过了半夜的时候，\n屋子四周，变得比白天还要亮。', next:'kgc_hikari'},
  kgc_hikari:{cutin:{type:'hikari', text:'月光降下来了！！'}, then:'kg17'},

  kg17:{art:'kg_juugoya', text:'天上，乘着云的人们降了下来。\n兵士们浑身没了力气，连弓也拉不开。\n门自己开了，公主从老奶奶的怀里走了出来。', next:'kg18'},

  kg18:{art:'kg_juugoya', text:'月亮的使者说：\n“老人家。公主在月亮上犯了过错，为了赎罪，才在这里住了一段时间。\n赎罪的日子已经结束了。\n这也是对你做过的一件小小善事的回报。”', next:'kg19'},

  kg19:{art:'kg_tegami', text:'辉夜姬给老爷爷写了一封信。\n“请把我脱下来留在这里的衣裳，当作是我。\n有月亮的夜里，请抬头看看天上。”', next:'kg20'},

  kg20:{art:'kg_tegami', text:f=>{
    var t = '月亮的使者递上了一个装着不死药的小罐。';
    if(f.first) return t + '\n公主尝了一口，把剩下的和给皇帝的信放在一起，\n交给了皇帝派来的人。';
    return t + '\n这药，给谁呢？';
  }, choices:[
    {t:'和给皇帝的信放在一起', go:'kg21'},
    {t:'留给老爷爷和老奶奶', go:'kgu1'}
  ]},

  kg21:{art:'kg_shouten', text:f=>{
    var t = '月亮的使者递上了羽衣。\n“穿上这个，人心里的牵挂就都会消失。”';
    if(f.first) return t + '\n公主穿上了羽衣。';
    return t + '\n怎么办呢？';
  }, choices:[
    {t:'穿上羽衣', go:'kg22'},
    {t:'穿之前，再回头看一次', go:'kgm1'}
  ]},

  kg22:{art:'kg_shouten', text:'牵挂消失了的公主，对老爷爷再也没有疼惜，也没有怀念。\n她乘上云，向着月亮升了上去。', next:'kgc_shouten'},
  kgc_shouten:{cutin:{type:'hikari', text:'向着月亮……'}, then:'kg23'},

  kg23:{art:'kg_ato', text:'老爷爷和老奶奶，眼泪怎么也止不住。\n抱着公主留下的衣裳，一直一直抬头望着天空。', next:'kg24'},

  kg24:{art:'kg_fuji', text:'皇帝把公主的信和不死药，\n拿到离天最近的骏河的那座山顶上，烧掉了。\n因为有很多武士登上过那座山，\n那座山就被叫作“富士山”了。', next:'e_kg_seishi'},

  e_kg_seishi:{art:'kg_ato', ending:'kg_seishi', text:'有月亮的夜里，请抬头看看天上。\n老爷爷和老奶奶就照着公主的话，在有月亮的夜里抬头望着天空。\n她脱下来留下的衣裳，一直留在两个人手边。\n完。'},

  /* ---- 剩下的日子 ---- */
  kgn1:{art:'kg_uchiake', text:'在皇帝来之前，辉夜姬就把事情告诉了两位老人。\n“我是月亮都城里的人。今年秋天，我必须回去。”\n老爷爷和老奶奶，很久很久都没有说话。', next:'kgn2'},
  kgn2:{art:'kg_takebayashi', text:'从那一天起，3个人都很珍惜每一天。\n他们在竹林里散步，也去了当初发现她的那根竹子那里。', next:'kgn3'},
  kgn3:{art:'kg_tsukimi', text:'月色好看的夜里，3个人一起坐在檐廊上。\n“有月亮的夜里，请坐在这里。我也会从月亮上看着这里。”', next:'kgn4'},
  kgn4:{art:'kg_juugoya', text:'月圆之夜，来接她的人到了。\n老爷爷没有反抗。\n3个人手拉着手，等着那道光。', next:'e_kg_nokori'},
  e_kg_nokori:{art:'kg_ato', ending:'kg_nokori', text:'离别，还是一样地来了。\n但是在那之前，3个人有过一起度过的一个秋天。\n檐廊上，3个坐垫还照原样放着。\n完。'},

  /* ---- 穿羽衣之前 ---- */
  kgm1:{art:'kg_shouten', text:'穿上羽衣之前，公主回过头去。\n老爷爷和老奶奶，正望着这边。', next:'kgc_kao2'},
  kgc_kao2:{cutin:{type:'kao', face:'kaguya', text:'谢谢你们把我养大'}, then:'kgm2'},
  kgm2:{art:'kg_juugoya', text:'老奶奶一边哭，一边笑着挥手。\n老爷爷也大大地挥着手。\n公主把那两张脸牢牢记在眼里，然后穿上了羽衣。', next:'e_kg_koromo'},
  e_kg_koromo:{art:'kg_shouten', ending:'kg_koromo', text:'就算牵挂消失了，最后看到的那两张脸，\n也一直留在光里。\n完。'},

  /* ---- 不死药 ---- */
  kgu1:{art:'kg_tegami', text:'公主把不死药交给了老爷爷和老奶奶。\n“喝了这个，就能一直活下去。”', next:'kgu2'},
  kgu2:{art:'kg_ato', text:'公主回到月亮以后，两个人望着那个药罐。\n“没有公主的世上，不用一直活下去也没关系。”\n老爷爷轻轻地说。', next:'kgu3'},
  kgu3:{art:'kg_tsukimi', text:'下一个有月亮的夜里，两个人把药罐放在了檐廊上。\n就像朝着月亮，轻轻地递上去一样。', next:'e_kg_kusuri'},
  e_kg_kusuri:{art:'kg_ato', ending:'kg_kusuri', text:'药一直没有被喝掉，就那样一直沐浴着月光。\n皇帝在富士山上烧掉了药，老爷爷在檐廊上把药献给了月亮。\n两个人都是为了不忘记公主，各有各的做法。\n完。'},

  /* ================= 老爷爷和老奶奶的故事 ================= */

  kj1:{art:'okina_take', text:'这是老爷爷和老奶奶后来的故事。\n公主回到月亮以后，过了一个月。', next:'kj2'},
  kj2:{art:'kg_ato', text:'今天做点什么呢？', choices:[
    {t:'叠公主的衣裳', go:'kj2r', set:{takelife:'kimono'}},
    {t:'在竹林里走走', go:'kj2r', set:{takelife:'take'}}
  ]},
  kj2r:{art:'kg_ato', text:f=> f.takelife==='take'
    ? '竹林和那一天一样，在风里摇着。\n老爷爷站了一会儿，听着竹子的声音。'
    : '老奶奶把公主的衣裳仔细地叠好。\n叠好了又打开，然后再叠一次。', next:'kj3'},
  kj3:{art:'kg_tsukimi', text:'有月亮的夜里。两个人又把公主的信读了一遍。\n“有月亮的夜里，请抬头看看天上。”', next:'kjc_1'},
  kjc_1:{cutin:{type:'kao', face:'ouna', text:'我们抬头看看吧'}, then:'kj4'},
  kj4:{art:'kg_ato', text:'老奶奶对老爷爷说。\n两个人，接下来怎么办呢。', choices:[
    {t:'在檐廊上抬头看月亮', go:'kjt1'},
    {t:'等到早上，去竹林', go:'kjk1'}
  ]},
  kjt1:{art:'kg_tsukimi', text:'两个人并排坐在檐廊上，抬头看着月亮。\n悲伤，并没有消失。\n可是月光，一直照到了檐廊上。', next:'e_kj_tsukiyo'},
  e_kj_tsukiyo:{art:'kg_tsukimi', ending:'kj_tsukiyo', text:'从那以后，有月亮的夜里，两个人就坐在檐廊上。\n有哭的夜晚，有说话的夜晚，也有一句话都不说的夜晚。\n月光在每一个夜晚，都一样地照到了这里。\n完。'},
  kjk1:{art:'okina_take', text:'春天的早上，老爷爷又去了竹林。\n发光的竹子，已经没有了。\n不过，到处都有竹笋冒出了头。', next:'kjc_2'},
  kjc_2:{cutin:{type:'kao', face:'okina', text:'……挖一些吧'}, then:'e_kj_take'},
  e_kj_take:{art:'okina_take', ending:'kj_take', text:'老爷爷一个一个地，把竹笋挖了出来。\n不着急，也不是谁叫他做的，是他自己决定的。\n篮子快装满的时候，老奶奶带着便当来了。\n从此，他们过上了幸福的生活。'},

  /* ================= 月亮使者的故事 ================= */

  ku1:{art:'tsuki_miyako', text:'这是住在月亮都城里的一位使者的故事。\n月亮的都城里，没有眼泪。也没有心里的牵挂。', next:'ku2'},
  ku2:{art:'tsuki_miyako', text:'今天是下到地上去的日子。带什么去呢？', choices:[
    {t:'只带羽衣', go:'ku2r', set:{tsukimochi:'koromo'}},
    {t:'连不死药也带上', go:'ku2r', set:{tsukimochi:'kusuri'}}
  ]},
  ku2r:{art:'tsuki_miyako', text:f=> f.tsukimochi==='kusuri'
    ? '盒子里放进了羽衣，还有装着不死药的小罐。\n听说地上的人，都很想要这个。'
    : '盒子里放进了羽衣。\n只要有这个，公主马上就能变回月亮上的人。', next:'ku3'},
  ku3:{art:'kg_juugoya', text:'乘着云降下去，屋子四周站着许多人。\n他们拿着弓，瞪着这边。', next:'ku4'},
  ku4:{art:'kg_juugoya', text:'老爷爷正在喊着什么。\n使者听不懂那句话的意思。\n因为在月亮上，没有“不还给你”这样的话。', next:'kuc_1'},
  kuc_1:{cutin:{type:'kao', face:'shisha', text:'……眼泪？'}, then:'ku5'},
  ku5:{art:'kg_juugoya', text:'公主走了出来。\n使者，该怎么办呢。', choices:[
    {t:'照规矩，给她穿上羽衣', go:'kun1'},
    {t:'听公主的请求', go:'kut1'}
  ]},
  kun1:{art:'kg_shouten', text:'使者照规矩，给公主穿上了羽衣。\n可是，老爷爷那张被泪水打湿的脸，使者没法装作没看见。', next:'kun2'},
  kun2:{art:'tsuki_miyako', text:'回到月亮上以后，使者还是会想起那张脸。\n在没有眼泪的国度里，使者第一次知道了眼泪的意思。', next:'e_ku_namida'},
  e_ku_namida:{art:'tsuki_miyako', ending:'ku_namida', text:'从那以后，月亮的使者也常常低头望向地上。\n在不知道眼泪的国度里，多了一个知道眼泪的人。\n完。'},
  kut1:{art:'kg_tegami', text:'“请把这封信和这件衣裳，交给老爷爷。”\n对公主的请求，使者点了点头。\n月亮的规矩里，没有这样的事。不过，这大概是地上的礼数吧。', next:'kut2'},
  kut2:{art:'kg_ato', text:'使者降到老爷爷面前，把信和衣裳仔仔细细地交给了他。\n老爷爷把它们紧紧抱在怀里。', next:'e_ku_tegami'},
  e_ku_tegami:{art:'tsuki_miyako', ending:'ku_tegami', text:'回到月亮都城的使者，在规矩上添了一条。\n“从地上回来的人，可以留下一样东西。”\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, KAGUYA_ZH);

  T.ZK_EN.push(
    {section:'辉夜姬'},
    {id:'kg_seishi',  n:'有月亮的夜里，抬头看',   h:'第一次游玩时看到的原本的故事'},
    {id:'kg_nokori',  n:'剩下的日子',             h:'在皇帝来之前，把真话说出来的话……'},
    {id:'kg_koromo',  n:'穿羽衣之前',             h:'穿上羽衣之前，回过头去的话……'},
    {id:'kg_kusuri',  n:'不死药',                 h:'把药留给老爷爷和老奶奶的话……'},
    {id:'kj_tsukiyo', n:'月光照到的家',           h:'在老爷爷和老奶奶的故事里，在檐廊上抬头看的话……'},
    {id:'kj_take',    n:'再去取竹子',             h:'在老爷爷和老奶奶的故事里，早上去竹林的话……'},
    {id:'ku_namida',  n:'不知道眼泪的国度',       h:'在月亮使者的故事里，照规矩做的话……'},
    {id:'ku_tegami',  n:'捎去的话',               h:'在月亮使者的故事里，听公主的请求的话……'}
  );

})();
