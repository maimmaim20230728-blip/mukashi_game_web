"use strict";
/* 三只小猪 - Simplified Chinese scenario, translated from the Japanese master;
   structure mirrors story_kobuta_en.js (scene ids, flags, transitions, cutins).
   底本=Joseph Jacobs "English Fairy Tales" (1890, PD)。自前訳で、既存の中国語訳はなぞらない。 */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var KOBUTA_ZH = {

  /* ================= 三只小猪 ================= */

  p1:{art:'buta_hajimari', text:'这是3只小猪兄弟的故事。\n大个儿的小猪，中间的小猪，最小的小猪。\n大家都长大了，就决定各自盖一座自己的房子。', next:'p2'},

  p2:{art:'buta_hajimari', text:'出发的早晨。跟妈妈说些什么好呢？', choices:[
    {t:'精精神神地说“我们走啦！”', go:'p2r', set:{plife:'genki'}},
    {t:'说“做了好吃的就给你带回来”', go:'p2r', set:{plife:'omiyage'}}
  ]},
  p2r:{art:'buta_hajimari', text:f=> f.plife==='omiyage'
    ? '“那我就等着啦。”妈妈笑眯眯地说。\n送别的手，一直一直挥个不停。'
    : '“路上小心！”妈妈也精精神神地说。\n被这明亮的声音送出门，脚步也变得轻快起来。', next:'p3'},

  p3:{art:'buta_michi', text:f=>{
    var t = '路分成了三条。';
    if(f.first) return t + '\n3只小猪互相挥了挥手，各自走上了自己的那条路。';
    return t + '\n那么，怎么办呢？';
  }, choices:[
    {t:'各走各的路', go:'p4'},
    {t:'3只一起盖1座房子', go:'pk1'}
  ]},

  p4:{art:'buta_wara', text:'大个儿的小猪，遇见了一位背着一大捆稻草的大叔。\n“那些稻草，能分我一些吗？”\n稻草的房子，今天之内就能盖好。\n盖得快，就是它最好的地方。', next:'p5'},

  p5:{art:'buta_eda', text:'中间的小猪，遇见了一位抱着一堆树枝的大叔。\n“那些树枝，能分我一些吗？”\n树枝的房子，风能穿过去，好像很舒服。\n这就是它最好的地方。', next:'p6'},

  p6:{art:'buta_renga', text:'最小的小猪，遇见了一位拉着一车砖头的大叔。\n“那些砖，能分我一些吗？”\n砖的房子要花时间，可是非常结实。\n这就是它最好的地方。', next:'pc_ton'},
  pc_ton:{cutin:{type:'waza', theme:'brown', se:'tonkan', text:'叮当，叮当！！'}, then:'p7'},

  p7:{art:'buta_michi', text:f=>{
    var t = '三座房子都盖好了。\n稻草的房子，树枝的房子，砖的房子。\n每一座都是值得自豪的房子。';
    if(f.first) return t;
    return t + '\n在盖好的房子里，先做什么好呢？';
  }, choices:[
    {t:'大家互相参观各自的房子', go:'p7r', set:{plife2:'miseai'}},
    {t:'歇一歇，喝杯茶', go:'p7r', set:{plife2:'ocha'}}
  ]},
  p7r:{art:'buta_michi', text:f=> f.plife2==='ocha'
    ? '干完活以后的茶，格外好喝。\n“明天到彼此的家里去玩吧。”'
    : '“盖得真快呀。”“风吹着真舒服。”“真结实呀。”\n每一座房子，都有它自己好的地方。', next:'p8'},

  p8:{art:'buta_wara', enter:{wolf:1}, text:f=>{
    if(f.first) return '就在这时。\n一只饿坏了的狼从山上下来，\n站在了稻草房子的前面。';
    return '就在这时。\n最小的小猪远远看见了一只沿着山路下来的狼。\n怎么办？';
  }, choices:[
    {t:'就这样先看看情形', go:'pc_vs'},
    {t:'通知大家，都到砖房子里集合', go:'pn1'}
  ]},
  pc_vs:{cutin:{type:'vs', faces:['kobuta','pwolf'], text:'小猪 对 狼！！'}, then:'p9'},

  p9:{art:'buta_wara', text:'狼敲了敲稻草的房子，咚咚。\n“小猪呀，小猪呀，让我进去吧。”\n“不行不行，我不开门。以我下巴上的胡子胡子胡子起誓，绝对不行！”\n“那我就呼呼地一吹，把你的房子整个吹跑！”', next:'pc_fuu1'},
  pc_fuu1:{cutin:{type:'fuu', debris:'wara', text:'呼呼呼！！'}, then:'p10'},

  p10:{art:'buta_fuki_wara', text:'稻草的房子打着转飞上了天。\n大个儿的小猪连滚带爬地逃了出来，\n一头钻进了中间的小猪的树枝房子里。', next:'p11'},

  p11:{art:'buta_eda', text:'狼马上就追了过来。\n“小猪呀，小猪呀，让我进去吧。”\n这回是两只小猪，一起齐声回答。\n“不行不行，我们不开门。以我们下巴上的胡子胡子胡子起誓，绝对不行！”', next:'pc_fuu2'},
  pc_fuu2:{cutin:{type:'fuu', debris:'eda', text:'呼呼，呼呼呼！！'}, then:'p12'},

  p12:{art:'buta_fuki_eda', text:'树枝的房子也七零八落地飞走了。\n两只小猪撒开腿就跑，\n一头钻进了最小的小猪的砖房子里。', next:'p13'},

  p13:{art:'buta_naka', text:'“在这里就没事了。\n这座房子是花了时间，盖得非常结实的。”\n最小的小猪把门牢牢地锁上了。', next:'p14'},

  p14:{art:'buta_renga', text:'“小猪呀，小猪呀，让我进去吧。”\n“不行不行，我们不开门。以我们下巴上的胡子胡子胡子起誓，绝对不行！”3只小猪一起大声喊道。\n狼深深地吸了一大口气。', next:'pc_fuu3'},
  pc_fuu3:{cutin:{type:'fuu', still:true, text:'……纹丝不动！！'}, then:'p15'},

  p15:{art:'buta_renga', text:f=>{
    var t = '不管吹多少次，砖的房子都纹丝不动。';
    if(f.first) return t + '\n狼呼哧呼哧地喘着气，抬头看向了屋顶上的烟囱。';
    return t + '\n饿坏了的狼，开始想下一个办法。';
  }, choices:[
    {t:'想从烟囱钻进去', go:'p16'},
    {t:'想用甜言蜜语把小猪引出来', go:'pg1'}
  ]},

  p16:{art:'buta_entotsu', text:'狼爬上屋顶，把脚伸进了烟囱。\n可是房子里面的小猪，早就看穿了。', next:'p17'},

  p17:{art:'buta_nabe', text:'烟囱下面的壁炉上，架着一口大锅。\n咕嘟，咕嘟。满满一锅水正烧得滚烫。', next:'pc_dobon'},
  pc_dobon:{cutin:{type:'waza', theme:'blue', se:'juu', text:'扑通！！'}, then:'p18'},

  p18:{art:'buta_nigeru', text:'“烫烫烫烫！！”\n屁股被烫伤的狼，\n一溜烟地逃回山上去了。', next:'e_pb_seishi'},

  e_pb_seishi:{art:'buta_owari', ending:'pb_seishi', text:'从那以后，狼再也没有来过。\n3只小猪时不时聚在一起，\n一边喝着热乎乎的汤，一边快快活活地过着日子。\n从此，他们过上了幸福的生活。'},

  /* ---- 英国真正的故事(Jacobs 1890 的3次斗智) ---- */
  pg1:{art:'buta_renga', text:'狼把声音放得温柔起来。\n“喂，小猪。村子外面有一片很好的萝卜地哦。\n明天早上6点，一起去怎么样？”\n最小的小猪立刻就明白了。（这是个圈套。）\n“好呀。那就6点。”', next:'pgc_1'},
  pgc_1:{cutin:{type:'kao', face:'pwolf', text:'嘿嘿，就等6点了'}, then:'pg2'},
  pg2:{art:'buta_kabubatake', text:'第二天早上，小猪5点就起来了，\n三下两下把萝卜拔回了家。\n6点才到的狼吃了一惊。\n“我已经去过啦。拔了满满一锅的萝卜。”', next:'pgc_2'},
  pgc_2:{cutin:{type:'kao', face:'pwolf', text:'什么，已经去过了！？'}, then:'pg3'},
  pg3:{art:'buta_ringo', text:'这回是苹果树的邀请。“早上5点我去接你。”\n小猪4点就出了门。可是还在树上的时候，\n狼就来了。\n“最好吃的那个给你！”\n小猪使劲把一个苹果扔到很远的地方，\n趁狼跑去捡的工夫，嗖地爬下树跑回了家。', next:'pg4'},
  pg4:{art:'buta_ichi', text:'最后是镇上集市的邀请。“下午3点去吧。”\n小猪中午之前就出了门，买了一只做黄油用的木桶。\n回来的路上，从坡顶往下一看，狼正往上爬。\n小猪钻进了木桶里面。', next:'pc_goro'},
  pc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'骨碌骨碌，骨碌骨碌！！'}, then:'pg5'},
  pg5:{art:'buta_taru', text:'木桶载着小猪，顺着坡骨碌骨碌地滚了下去！\n看见一个又圆又大的东西冲过来，\n狼吓得不得了。夹起尾巴就跑了。', next:'pg6'},
  pg6:{art:'buta_renga', text:'后来知道了原委的狼，气得不得了。\n“既然这样，我就从烟囱进去！”\n可是房子里面的小猪，早就看穿了。', next:'pg7'},
  pg7:{art:'buta_nabe', text:'壁炉上的大锅，今天也咕嘟咕嘟地响着。\n里面是放了满满的萝卜、热气腾腾的汤。', next:'pc_dobon2'},
  pc_dobon2:{cutin:{type:'waza', theme:'blue', se:'juu', text:'扑通！！'}, then:'pg8'},
  pg8:{art:'buta_nigeru', text:'“烫烫烫烫！！”\n烫得不轻的狼，逃进了大山的深处又深处，\n从此再也没有出现过。', next:'e_pb_genten'},
  e_pb_genten:{art:'buta_owari', ending:'pb_genten', text:'萝卜地，苹果树，还有黄油的木桶。\n这条路，最接近英国流传下来的那个原本的故事。\n聪明的最小的小猪，后来也长长久久地幸福地过着日子。\n从此，他们过上了幸福的生活。'},

  /* ---- 一开始就3只一起 ---- */
  pk1:{art:'buta_renga', text:'“我们一起盖1座，盖一座特别结实的吧。”\n最小的小猪一句话，3只小猪就开始搬砖了。\n再重的砖，3只一起也不算什么。', next:'pk2'},
  pk2:{art:'buta_naka', text:'同一个屋顶下面，摆了三张床。\n壁炉也有，窗户也有，一座气派的房子盖好了。', next:'pk3'},
  pk3:{art:'buta_renga', enter:{wolf:1}, text:'这时，饿坏了的狼来了，\n深深地吸了一大口气。', next:'pkc_fuu'},
  pkc_fuu:{cutin:{type:'fuu', still:true, text:'……纹丝不动！！'}, then:'e_pb_kyoryoku'},
  e_pb_kyoryoku:{art:'buta_owari', ending:'pb_kyoryoku', text:'狼一直吹到太阳落山，\n累得筋疲力尽，回山上去了。\n齐心协力盖起来的房子，比什么都结实。\n从此，他们过上了幸福的生活。'},

  /* ---- 望风和准备 ---- */
  pn1:{art:'buta_michi', text:'“狼来了！”\n最小的小猪一口气跑到了另外两只小猪的家。\n3只小猪急忙聚到了砖的房子里。', next:'pn2'},
  pn2:{art:'buta_naka', text:'从窗户悄悄往外看，狼正在吹稻草的房子。\n“一个人也没有！？”\n树枝的房子也吹倒了。\n“这里也是空的！？”', next:'pn3'},
  pn3:{art:'buta_renga', text:'最后对着砖的房子呼呼地吹。可是纹丝不动。\n狼累得一点力气也没有了，\n就那样饿着肚子一屁股坐了下来。', next:'e_pb_sonae'},
  e_pb_sonae:{art:'buta_naka', ending:'pb_sonae', text:'窗户里传来了声音。\n“是客人吗？不好意思，今天已经收摊啦。”\n狼耷拉着脑袋回山上去了。\n有准备，就不会慌。3只小猪又接着喝起了茶。\n从此，他们过上了幸福的生活。'},

  /* ================= 狼的故事 ================= */

  pw1:{art:'pwolf_yama', text:'这是一只住在山里的狼的故事。\n最近怎么也找不到吃的，\n肚子总是饿得咕咕直叫。', next:'pw2'},
  pw2:{art:'pwolf_yama', text:'今天去哪里找吃的呢？', choices:[
    {t:'到河边附近去找', go:'pw2r', set:{wlife:'kawa'}},
    {t:'到林子深处去找', go:'pw2r', set:{wlife:'hayashi'}}
  ]},
  pw2r:{art:'pwolf_yama', text:f=> f.wlife==='hayashi'
    ? '林子里的果子，早就被鸟儿们抢先摘走了。\n肚子咕的一声叫了起来。'
    : '河里连鱼的影子都没有。\n肚子咕的一声叫了起来。', next:'pw3'},
  pw3:{art:'buta_wara', text:'下到山脚，3座新房子并排立在那里。\n不知从哪里，还飘来了好闻的香味。', next:'pwc_1'},
  pwc_1:{cutin:{type:'kao', face:'pwolf', text:'有大餐的预感！'}, then:'pw4'},
  pw4:{art:'buta_fuki_eda', text:'呼呼地吹，是狼的拿手本领。\n稻草的房子和树枝的房子都吹跑了，\n可小猪们每次都溜得无影无踪。', next:'pw5'},
  pw5:{art:'buta_renga', text:'剩下的就是砖的房子了。这一座纹丝不动。\n饿坏了的狼，想起了下一个办法。', choices:[
    {t:'用甜言蜜语把小猪引出来', go:'pw6'},
    {t:'试着老老实实地说出来', go:'pwh1'}
  ]},
  pw6:{art:'buta_kabubatake', text:'约去萝卜地，被小猪抢在了前头。\n约去苹果树，又被溜掉了。\n在集市的回家路上守着等，就在这时。\n从坡顶上，一个又圆又大的东西……', next:'pwc_goro'},
  pwc_goro:{cutin:{type:'waza', theme:'brown', se:'goro', text:'骨碌骨碌，骨碌骨碌！！'}, then:'pw7'},
  pw7:{art:'buta_taru', text:'骨碌骨碌，骨碌骨碌，来势汹汹地滚了过来。\n那是从来没见过的、又圆又大的一个东西。', next:'pwc_taru'},
  pwc_taru:{cutin:{type:'kao', face:'pwolf', text:'怪、怪物啊！！'}, then:'e_pw_taru'},
  e_pw_taru:{art:'pwolf_yama', ending:'pw_taru', text:'狼夹起尾巴，一直逃回了山顶。\n“山脚下，有一个圆圆的怪物……”\n这个故事，在山里的狼们中间，\n据说被长长久久地传了下去。\n从此，他们过上了幸福的生活。'},

  pwh1:{art:'buta_renga', text:'狼在门前坐了下来，\n用很小的声音说：\n“……说实话，我已经好几天，什么都没吃了。”', next:'pwh2'},
  pwh2:{art:'buta_naka', text:'房子里面，3只小猪你看看我，我看看你。\n门没有开。可是窗户里传出了声音。\n“你在那儿等一会儿。”', next:'pwh3'},
  pwh3:{art:'buta_soup', text:'从窗户里轻轻递出来的，是热气腾腾的蔬菜汤。\n萝卜和土豆，一块一块地放了好多。', next:'pwc_fuu'},
  pwc_fuu:{cutin:{type:'kao', face:'kobuta', text:'很烫，要呼呼吹一吹哦'}, then:'e_pw_fuufuu'},
  e_pw_fuufuu:{art:'buta_soup', ending:'pw_fuufuu', text:'狼引以为傲的呼呼，\n不再是吹跑房子的力气，\n而变成了把烫汤吹到刚刚好的力气。\n拿手本领的用处，并不是只有一种。\n从此，他们过上了幸福的生活。'},

  /* ================= 砖房子的故事 ================= */

  ps1:{art:'prenga_kamado', text:'这是一座砖房子的故事。\n砖是一块一块，在窑的火里慢慢烧出来的。\n所以，一般的风吹雨打是弄不塌它的。', next:'ps2'},
  ps2:{art:'buta_renga', text:'有一天，最小的小猪来了，\n开始一块一块仔细地垒起砖来。\n叮当，叮当。一点一点地，变成了一座房子。\n从第一扇做好的窗户里，看见了什么？', choices:[
    {t:'宽宽的蓝天', go:'ps2r', set:{slife:'sora'}},
    {t:'村外的萝卜地', go:'ps2r', set:{slife:'hatake'}}
  ]},
  ps2r:{art:'buta_renga', text:f=> f.slife==='hatake'
    ? '窗户的那一头，铺开着一片萝卜地。\n看着它每天一点一点长大，成了房子的一件乐事。'
    : '窗户里满满的蓝天上，白云一朵一朵地飘过去。\n能变成一座房子，真是件好事啊。', next:'ps3'},
  ps3:{art:'buta_naka', text:'有一天，两只哥哥小猪，\n上气不接下气地冲了进来。\n外面好像有狼。', next:'psc_1'},
  psc_1:{cutin:{type:'kao', face:'prenga', text:'该我上场了'}, then:'ps4'},
  ps4:{art:'buta_renga', enter:{wolf:1}, text:'狼深深地吸了一大口气，用力吹了过来。\n一次，两次，三次。\n墙上的砖，一块也没有动。', next:'psc_fuu'},
  psc_fuu:{cutin:{type:'fuu', still:true, text:'纹丝不动！！'}, then:'ps5'},
  ps5:{art:'buta_naka', text:'像暴风雨一样的夜晚过去了，房子想了想。\n往后，把什么看得最重要好呢？', choices:[
    {t:'不怕风也不怕雨', go:'e_ps_mamoru'},
    {t:'在壁炉里生上火，让屋里暖和', go:'pss1'}
  ]},
  e_ps_mamoru:{art:'buta_renga', ending:'ps_mamoru', text:'刮风的夜晚，下雨的早晨，房子都纹丝不动。\n自己为什么生来就这么结实，房子心里很清楚。\n因为里面，有3只它想守护的小猪。\n从此，他们过上了幸福的生活。'},
  pss1:{art:'buta_soup', text:'冬天来了。壁炉里生起了火，锅在咕嘟咕嘟地响。\n猪妈妈也来做客，\n房子里面满是笑声。', next:'e_ps_waraigoe'},
  e_ps_waraigoe:{art:'buta_naka', ending:'ps_waraigoe', text:'房子的工作，是挡住风和雨。\n可是最要紧的工作，\n是把笑声好好地收藏起来。\n今天，砖的房子里也传出了暖暖的声音。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, KOBUTA_ZH);

  T.ZK_EN.push(
    {section:'三只小猪'},
    {id:'pb_seishi',   n:'躲进砖房子',            h:'第一次游玩时的那个熟悉的故事'},
    {id:'pb_genten',   n:'英国真正的故事',        h:'狼用甜言蜜语来相约的时候……'},
    {id:'pb_kyoryoku', n:'一开始就3只一起',       h:'在岔路口，选择走同一条路……'},
    {id:'pb_sonae',    n:'望风和准备',            h:'远远地就发现了狼……'},
    {id:'pw_taru',     n:'怪物啊！',              h:'在饿狼的故事里，选择把小猪引出来……'},
    {id:'pw_fuufuu',   n:'呼呼真正的用处',        h:'在饿狼的故事里，老老实实地说出来……'},
    {id:'ps_mamoru',   n:'纹丝不动',              h:'在砖房子的故事里，选不怕风也不怕雨……'},
    {id:'ps_waraigoe', n:'装笑声的容器',          h:'在砖房子的故事里，在壁炉里生上火……'}
  );

})();
