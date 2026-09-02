"use strict";
/* 小红帽 - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_akazukin_en.js
   文体：简单的绘本中文，与 story_zh.js 一致。
   那段有名的对答沿用中文里常见的问答句式（“为了更好地……呀”）。 */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var AKZ_ZH = {

  /* ================= 小红帽 ================= */

  z1:{art:'akz_home', text:'这是一个很适合戴红帽子的女孩的故事。\n帽子是奶奶亲手做的，女孩每天都戴着它。\n所以大家都叫这个孩子“小红帽”。', next:'z2'},

  z2:{art:'akz_home', text:'有一天，妈妈说：\n“住在森林那边的奶奶生病了。你能把点心和葡萄汁送过去吗？”\n“路上不要贪玩，也不要离开小路哦。”', next:'z3'},

  z3:{art:'akz_home', text:'小红帽想了想。\n往篮子里再放一样东西吧。', choices:[
    {t:'放一瓶蜂蜜', go:'z3r', set:{item:'hachimitsu'}},
    {t:'放一个红苹果', go:'z3r', set:{item:'ringo'}}
  ]},
  z3r:{art:'akz_home', text:f=> f.item==='ringo'
    ? '红红的苹果咕噜一下滚进篮子里，亮亮的。\n奶奶会不会高兴呢。'
    : '她把一瓶甜甜的蜂蜜轻轻放进篮子里。\n奶奶会不会高兴呢。', next:'z4'},

  z4:{art:'akz_door', text:'“我出发啦！”\n小红帽提着篮子，精神十足地跑出了家门。', next:'zc_iza'},
  zc_iza:{cutin:{type:'waza', theme:'gold', text:'出发去送东西！！'}, then:'z5'},

  z5:{art:'akz_forest', text:'冷杉林里，阳光从树叶间洒下来，闪闪发亮。\n还能听见小鸟的叫声。', next:'z5b'},
  z5b:{art:'akz_forest', text:'那么，今天要怎么走呢？', choices:[
    {t:'一边唱歌一边走', go:'z5r', set:{walk:'uta'}},
    {t:'一边找蝴蝶一边走', go:'z5r', set:{walk:'chou'}}
  ]},
  z5r:{art:'akz_forest', text:f=> f.walk==='chou'
    ? '一只黄色的蝴蝶在前面的小路上翩翩地飞。\n就像在给她带路一样。'
    : '“啦啦啦，走在森林的小路上。”\n小鸟也跟着小红帽的歌声一起唱。', next:'z6'},

  z6:{art:'akz_meet', text:'沙沙。\n一只大狼从树后走了出来。', next:'zc_vs1'},
  zc_vs1:{cutin:{type:'vs', faces:['akazukin','ookami'], text:'VS'}, then:'z7'},

  z7:{art:'akz_meet', text:f=>{
    var t = '“你好呀，可爱的小姑娘。你要去哪里呢？”\n狼笑眯眯地问。';
    if(f.first) return t;
    return t + '\n那么，该怎么办呢？';
  }, choices:f=>{
    var c = [
      {t:'老老实实地回答', go:'z8'},
      {t:'“我不告诉你”', go:'zn1'},
      {t:'跑回家里去', go:'zh1'}
    ];
    if(f.item) c.push({t:'问“你是不是饿了？”', go:'zt1'});
    return c;
  }},

  z8:{art:'akz_meet', text:'“去奶奶家。她生病了，所以我要送点心和葡萄汁给她。”\n小红帽老老实实地回答了。\n狼在心里悄悄想起了一个狡猾的主意。', next:'z9'},

  z9:{art:'akz_flowers', text:f=>{
    var t = '“你看那边，开着那么漂亮的花。\n要是摘一些带过去，奶奶一定会很高兴的。”';
    if(f.first) return t;
    return t + '\n那么，该怎么办呢？';
  }, choices:[
    {t:'去摘一些花', go:'z10'},
    {t:'“不，我要直接过去”', go:'zn2'}
  ]},

  z10:{art:'akz_flowers', text:'真的很漂亮呢，小红帽想着，就离开了小路。\n白色的花，蓝色的花。每摘下一朵，前面好像又开着更漂亮的一朵。', next:'zc_sonokoro'},
  zc_sonokoro:{cutin:{type:'dark', text:'就在这时候，狼……'}, then:'z11'},

  z11:{art:'akz_gma_out', text:'狼抄近路跑过去，比小红帽先到了奶奶家。\n咚咚。\n“奶奶，我是小红帽。”\n它学着小红帽的声音，钻进了屋里。', next:'z12'},

  z12:{art:'akz_bed', text:'一眨眼的工夫，奶奶就被整个吞了下去。\n狼穿上奶奶的睡衣，戴上睡帽，钻进了被窝。', next:'z13'},

  z13:{art:'akz_gma_out', text:'抱着一大束花的小红帽，终于到了。\n“咦，门开着……”', next:'z14'},

  z14:{art:'akz_bed', text:'“奶奶，我来啦。”\n床上的奶奶，看上去有点奇怪。\n小红帽轻轻走近，凑过去看她的脸。', next:'zc_q1'},

  zc_q1:{cutin:{type:'kao', face:'akazukin', text:'你的耳朵好大呀！'}, then:'zc_a1'},
  zc_a1:{cutin:{type:'kao', face:'ookami', text:'为了更好地听见你呀'}, then:'zc_q2'},
  zc_q2:{cutin:{type:'kao', face:'akazukin', text:'你的眼睛好大呀！'}, then:'zc_a2'},
  zc_a2:{cutin:{type:'kao', face:'ookami', text:'为了更好地看见你呀'}, then:'zc_q3'},
  zc_q3:{cutin:{type:'kao', face:'akazukin', text:'你的手好大呀！'}, then:'zc_a3'},
  zc_a3:{cutin:{type:'kao', face:'ookami', text:'为了更好地抓住你呀'}, then:'zc_q4'},
  zc_q4:{cutin:{type:'kao', face:'akazukin', text:'你的嘴巴好大呀！'}, then:'zc_a4'},
  zc_a4:{cutin:{type:'kao', face:'ookami', text:'为了一口吃掉你呀！！'}, then:'zc_pakuri'},
  zc_pakuri:{cutin:{type:'pakuri', text:'啊呜！！'}, then:'z15'},

  z15:{art:'akz_onaka', text:f=>{
    var t = '等她回过神来，四周一片漆黑，这里是狼的肚子里。\n“是小红帽吗。刚才吓坏了吧。不过没事了。”\n奶奶的声音响了起来，一只温暖的手紧紧握住了她的手。';
    if(f.first) return t;
    return t + '\n那么，两个人该怎么办呢？';
  }, choices:[
    {t:'静静地等人来救', go:'z16'},
    {t:'两个人大声唱歌', go:'zu1'}
  ]},

  z16:{art:'akz_onaka', text:'两个人手拉着手，静静地等着。\n吃得饱饱的狼，在床上呼噜呼噜地睡着了。\n那是响遍整座房子的、很大很大的鼾声。', next:'z17'},

  z17:{art:'akz_hunter', text:'这时候，在森林里巡查的猎人正好路过。\n“奶奶家里传出好大的鼾声。……有点不对劲。”\n他悄悄往里一看，床上躺着一只肚子鼓鼓的狼！', next:'zc_vs2'},
  zc_vs2:{cutin:{type:'vs', faces:['ryoushi','ookami'], text:'VS'}, then:'zc_chokkin'},
  zc_chokkin:{cutin:{type:'chokkin', text:'咔嚓，咔嚓！！'}, then:'z18'},

  z18:{art:'akz_rescue', text:f=>{
    var t = '猎人用剪刀，轻轻剪开了熟睡的狼的肚子。\n“里面黑漆漆的！”小红帽说。\n奶奶也平安无事。两个人身上连一点擦伤都没有。';
    if(f.first) return t;
    return t + '\n那么，两个人该怎么办呢？';
  }, choices:[
    {t:'往肚子里塞石头', go:'z19'},
    {t:'让它保证“再也不做了”', go:'zy1'}
  ]},

  z19:{art:'akz_stone', text:'小红帽赶紧从院子里搬来沉甸甸的石头。\n猎人把石头塞进肚子里，一针一针地缝了起来。', next:'z20'},

  z20:{art:'akz_stone', text:'醒过来的狼想要逃走，一下子跳了起来。\n可是肚子里的石头太重太重了。\n咚！它就那样倒了下去，再也没有动。', next:'e_za_seishi'},

  e_za_seishi:{art:'akz_end', ending:'za_seishi', text:'大家坐在草地上，一起吃了点心，喝了葡萄汁。\n奶奶的病，好像也好了一些。\n小红帽在心里下定了决心。\n“以后再也不在路上贪玩了。”\n从此，他们过上了幸福的生活。'},

  /* ---- 什么都不说／一直往前走 -> 奶奶的智慧 ---- */
  zn1:{art:'akz_meet', text:'“我不告诉你！”\n小红帽把头一扬，快步往前走了。\n狼咧嘴一笑，消失在树后。', next:'zn2'},
  zn2:{art:'akz_forest', text:'她心里有点不安。\n小红帽加快脚步，目不斜视地往前走。', next:'zn3'},
  zn3:{art:'akz_gma_out', text:'小红帽先到了奶奶家。\n“奶奶，我在森林里遇见了一只大狼。”\n“哎呀。那我们把门锁上吧。”', next:'zn4'},
  zn4:{art:'akz_machibuse', text:'咔哒一声，门锁上了。\n过了一会儿，咚咚。\n“我是小红帽，快开门。”\n就算学得再像，屋里的两个人也一声不吭。门没有开。', next:'zn5'},
  zn5:{art:'akz_machibuse', text:'接着，咯吱，咯吱。\n狼爬上了屋顶，在那里守着。\n奶奶小声说：\n“那只狼最喜欢香肠的味道。我们把锅里煮香肠的水，倒进屋前的大木桶吧。”', next:'zc_chie'},
  zc_chie:{cutin:{type:'kao', face:'obaasan', text:'我想到一个好办法'}, then:'zn6'},
  zn6:{art:'akz_yane', text:'香肠的香味，一股一股地飘到了屋顶上。\n狼闻了闻，身子一点一点往下滑，滑呀滑……\n扑通！\n掉进木桶的狼，浑身湿透，逃回森林里去了。', next:'e_za_chie'},
  e_za_chie:{art:'akz_yane', ending:'za_chie', text:'“奶奶，你好厉害！”\n“呵呵。这就叫老人家的智慧。”\n奶奶可不是只能被人保护的。\n那天晚上，两个人吃了热腾腾的香肠。\n从此，他们过上了幸福的生活。'},

  /* ---- 跑回家 -> 和妈妈一起 ---- */
  zh1:{art:'akz_forest', text:'小红帽转过身，一口气跑了起来。\n狼愣在那里，只能看着她跑远。', next:'zh2'},
  zh2:{art:'akz_home', text:'“妈妈！我在森林里遇见了一只大狼！”\n“你马上告诉我，做得对。\n那妈妈也和你一起去吧。”', next:'zh3'},
  zh3:{art:'akz_haha_road', text:'牵着妈妈的手，她又一次走上森林的小路。\n远处的树后，狼一直看着，可是有大人在，它不敢出来。', next:'e_za_okaasan'},
  e_za_okaasan:{art:'akz_end', ending:'za_okaasan', text:'奶奶家里，很快响起了大家的笑声。\n遇到麻烦的时候，害怕的时候，马上告诉大人。\n那就是最厉害的魔法。\n从此，他们过上了幸福的生活。'},

  /* ---- 你是不是饿了？ -> 森林的客人 ---- */
  zt1:{art:'akz_meet', text:'“狼先生，你是不是饿了？”\n狼吃了一惊，眼睛眨了又眨。\n“……我已经3天没吃过东西了。”', next:'zt2'},
  zt2:{art:'akz_talk', text:f=> f.item==='ringo'
    ? '小红帽在路边坐下，把点心和红苹果分给了它。\n狼吃了一口，掉下了一颗眼泪。'
    : '小红帽在路边坐下，把蘸了蜂蜜的点心分给了它。\n狼吃了一口，掉下了一颗眼泪。', next:'e_za_okyaku'},
  e_za_okyaku:{art:'akz_talk', ending:'za_okyaku', text:'“还是第一次有人对我这么好。”\n吃饱了的狼，回到了森林深处。\n小红帽在奶奶家说起这件事，奶奶笑了。\n“能把食物分给别人的孩子，是世界上最强的。”\n从此，他们过上了幸福的生活。'},

  /* ---- 唱歌 -> 肚子里的合唱 ---- */
  zu1:{art:'akz_onaka', text:'“奶奶，我们两个一起唱歌吧！”\n“好主意。就算在黑漆漆的地方，歌也是唱得出来的。”\n两个人深深吸了一口气……', next:'zc_uta'},
  zc_uta:{cutin:{type:'waza', theme:'gold', text:'肚子里的合唱！！'}, then:'zu2'},
  zu2:{art:'akz_hunter', text:'“啦啦啦，走在森林的小路上。”\n正在屋外走过的猎人，不敢相信自己的耳朵。\n“屋子里传出歌声？而且……是从狼的肚子里传出来的！？”', next:'zc_chokkin2'},
  zc_chokkin2:{cutin:{type:'chokkin', text:'咔嚓，咔嚓！！'}, then:'zu3'},
  zu3:{art:'akz_rescue', text:'“多亏了你们的歌，我一下子就找到了。”猎人说。\n吓了一跳的狼，夹着尾巴逃回森林里去了。', next:'e_za_gassho'},
  e_za_gassho:{art:'akz_rescue', ending:'za_gassho', text:'“就算在黑漆漆的地方，只要出声，也会有人听见。”\n奶奶的这句话，小红帽一直没有忘记。\n从那天起，两个人就成了一起唱歌的合唱队。\n从此，他们过上了幸福的生活。'},

  /* ---- 让它保证 -> 约定的早晨 ---- */
  zy1:{art:'akz_rescue', text:'“往肚子里塞石头太可怜了。不如……”\n小红帽直直地看着醒过来的狼。\n“你要保证，以后再也不吃人了。”\n狼低下了头，小声说：“……我再也不做了。”', next:'e_za_yakusoku'},
  e_za_yakusoku:{art:'akz_end', ending:'za_yakusoku', text:'在早晨的阳光里，狼回到了森林深处。\n这个约定会不会真的守住，谁也不知道。\n不过猎人说：\n“巡查的事，就交给我吧。”\n从此，他们过上了幸福的生活。'},

  /* ================= 狼的故事 ================= */

  w1:{art:'w_fuyu', text:'这是一只住在冬天森林里的狼的故事。\n雪很深，哪里都找不到猎物。\n狼已经3天没吃过东西了。', next:'w2'},
  w2:{art:'w_fuyu', text:'又冷又冷的夜晚。\n狼要怎么过这一夜呢？', choices:[
    {t:'在山洞里蜷成一团', go:'w2r', set:{wnight:'maru'}},
    {t:'看着星星长嚎一声', go:'w2r', set:{wnight:'hoshi'}}
  ]},
  w2r:{art:'w_fuyu', text:f=> f.wnight==='hoshi'
    ? '对着深蓝色的夜空，嗷呜。\n没有一个同伴回应它。'
    : '用尾巴盖住鼻子，蜷得圆圆的。\n可是从缝里吹进来的风还是很冷。', next:'w3'},
  w3:{art:'w_mura', text:'早上，从山坡上望下去，村子里飘来刚烤好的面包的香味。\n肚子咕地叫了一声。\n该怎么办呢？', choices:[
    {t:'鼓起勇气，去面包店开口求人', go:'wp1'},
    {t:'在森林的小路上等人经过', go:'wm1'}
  ]},

  /* ---- 去面包店开口 ---- */
  wp1:{art:'w_panya', text:'它走进村子，大家都害怕地跑开了。\n只有面包店的大叔没有跑。\n“……你想吃点东西吗？”', next:'wp2'},
  wp2:{art:'w_panya', text:'狼小小地点了点头。\n大叔一下子分给它一大堆硬硬的面包皮。\n“不偷东西、开口来求人的狼，你是第一个。”', next:'e_zw_pan'},
  e_zw_pan:{art:'w_panya', ending:'zw_pan', text:'从第二天起，狼开始帮忙劈柴，换来面包。\n原本害怕它的村里人，也一点一点地习惯了。\n开口请求的勇气，比牙齿更有力量。\n从此，他们过上了幸福的生活。'},

  /* ---- 在小路上等（故事的另一面） ---- */
  wm1:{art:'akz_meet', text:'它在森林的小路上等着，一个戴红帽子的女孩走了过来。\n它本来打算把她吃掉。可是女孩笑眯眯地走了过来。\n“狼先生，你是不是饿了？”', choices:[
    {t:'老实说“饿了”', go:'wt1'},
    {t:'继续那个狡猾的计划', go:'wz1'}
  ]},

  wt1:{art:'akz_talk', text:'“……我已经3天没吃过东西了。”\n话一出口，狼自己也吃了一惊。\n女孩打开篮子，把点心分给了它。', next:'e_zw_tomo'},
  e_zw_tomo:{art:'akz_talk', ending:'zw_tomo', text:'“我叫小红帽。狼先生，我们下次还在这条路上见吧。”\n本来想吃掉的对象，却成了朋友。\n肚子饿的日子，去那条小路就行了。\n光是这么一想，冬天的森林就暖和了一点。\n从此，他们过上了幸福的生活。'},

  wz1:{art:'akz_gma_out', text:'狼说了一句狡猾的回答，就沿着近路跑了起来。\n一边跑，胸口深处不知为什么一阵阵地刺痛。\n“不吃东西，就过不了冬天。”它这样对自己说。', next:'wz2'},
  wz2:{art:'akz_bed', text:'后面的事，就和小红帽的故事一样。\n它把奶奶和小红帽都整个吞了下去，然后睡着了。\n等它醒过来……', next:'wz3'},
  wz3:{art:'akz_stone', text:'肚子里装满了石头。\n重得不得了，一步也走不动。\n“胸口那阵刺痛，原来说的就是这个啊……”', next:'wc_haru'},
  wc_haru:{cutin:{type:'dark', text:'漫长的冬天过去了，\n春天来了。'}, then:'wz4'},
  wz4:{art:'w_haru', text:'巡查的猎人把动不了的狼肚子里的石头取了出来，还给它治好了伤。\n“知道错了吗。”\n狼一次又一次地点头。', next:'e_zw_hansei'},
  e_zw_hansei:{art:'w_haru', ending:'zw_hansei', text:'在春天的风里，狼迈开了脚步。\n下次肚子饿的时候，就说“请分我一点”吧。\n石头的重量，狼一天也没有忘记过。\n从此，他们过上了幸福的生活。'},

  /* ================= 奶奶的故事 ================= */

  g1:{art:'g_heya', text:'这是一位住在森林里那间独门小屋的奶奶的故事。\n那顶红帽子，也是这位奶奶织的。\n今天她有点发烧，正在床上织东西。', next:'g2'},
  g2:{art:'g_heya', text:'红色的毛线，还剩下一点。\n接下来织点什么好呢。', choices:[
    {t:'小小的手套', go:'g2r', set:{knit:'tebukuro'}},
    {t:'长长的围巾', go:'g2r', set:{knit:'mafura'}}
  ]},
  g2r:{art:'g_heya', text:f=> f.knit==='mafura'
    ? '长长的、长长的围巾。\n织得长一些，好和小红帽两个人一起围。'
    : '小小的红手套。\n给那孩子的手戴，正好合适。', next:'g3'},
  g3:{art:'g_heya', text:'就在这时，一个大大的影子从窗外走过。\n咚咚。\n“奶奶，我是小红帽。”\n……哎呀。这声音，好像和平时不一样呢。', choices:[
    {t:'先从窗口看清楚再回答', go:'gy1'},
    {t:'说了一句“进来吧”', go:'go1'}
  ]},

  /* ---- 先看清楚 -> 屋顶上的客人 ---- */
  gy1:{art:'akz_machibuse', text:'从窗帘的缝里悄悄一看，是一只大狼！\n奶奶不慌不忙，咔哒一声把门锁上。\n“想骗过一个老太婆，你还早了一百年呢。”', next:'gy2'},
  gy2:{art:'akz_yane', text:'狼爬上了屋顶，咯吱，咯吱。\n奶奶把锅里煮香肠的水，哗地倒进了屋前的大木桶。\n被香味引着，狼一点一点往下滑，扑通！', next:'e_zg_yane'},
  e_zg_yane:{art:'akz_yane', ending:'zg_yane', text:'浑身湿透的狼，逃回森林里去了。\n奶奶把这件事讲给后来到的小红帽听，小红帽睁圆了眼睛说：\n“奶奶，你就像个英雄！”\n“呵呵。我可不是只能被人保护的。”\n从此，他们过上了幸福的生活。'},

  /* ---- 说进来吧 -> 在肚子里也不慌 ---- */
  go1:{art:'akz_bed', text:'进来的是一只大狼。\n一眨眼的工夫，奶奶就被整个吞了下去。\n可是奶奶一点也不慌。\n她可是熬过了几十个漫长冬天的奶奶呀。', next:'go2'},
  go2:{art:'akz_onaka', text:'“哎呀。肚子里面，还挺暖和的呢。”\n过了一会儿，小红帽也咕噜一下掉了进来。\n奶奶紧紧握住那只小手，说：\n“没事的。嘘，仔细听。……你听，有脚步声。”', next:'gc_chokkin'},
  gc_chokkin:{cutin:{type:'chokkin', text:'咔嚓，咔嚓！！'}, then:'go3'},
  go3:{art:'akz_rescue', text:'猎人轻轻剪开了狼的肚子。\n“真让人吃惊。您在里面一直都这么镇定吗。”\n“是啊。一慌起来，好主意就出不来了。”', next:'e_zg_onaka'},
  e_zg_onaka:{art:'akz_rescue', ending:'zg_onaka', text:f=> f.knit==='mafura'
    ? '为了道谢，奶奶把织了一半的长围巾送给了猎人。\n“冬天巡查，很冷的吧。”\n明明是可怕的一天，大家却不知为什么都笑了。\n从此，他们过上了幸福的生活。'
    : '为了道谢，奶奶把织了一半的红手套送给了猎人。\n“冬天巡查，很冷的吧。”\n明明是可怕的一天，大家却不知为什么都笑了。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, AKZ_ZH);

  T.ZK_EN.push(
    {section:'小红帽'},
    {id:'za_seishi',   n:'猎人的功劳',       h:'第一次玩的时候，原本的故事'},
    {id:'za_chie',     n:'奶奶的智慧',       h:'什么都不告诉狼，一直往前走的话……'},
    {id:'za_gassho',   n:'肚子里的合唱',     h:'在黑漆漆的肚子里一起唱歌的话……'},
    {id:'za_okyaku',   n:'森林的客人',       h:'往篮子里多放一样东西，再对狼好一点的话……'},
    {id:'za_yakusoku', n:'约定的早晨',       h:'得救以后，不塞石头而是……'},
    {id:'za_okaasan',  n:'和妈妈一起',       h:'害怕的时候，马上回去告诉大人的话……'},
    {id:'zw_pan',      n:'第一次开口',       h:'在狼的故事里走进村子的话……'},
    {id:'zw_tomo',     n:'第一个朋友',       h:'在狼的故事里老实回答的话……'},
    {id:'zw_hansei',   n:'春天的风',         h:'狡猾的计划，尽头是什么呢……'},
    {id:'zg_yane',     n:'屋顶上的客人',     h:'在奶奶的故事里先看清楚的话……'},
    {id:'zg_onaka',    n:'在肚子里也不慌',   h:'在奶奶的故事里一直镇定的话……'}
  );

})();
