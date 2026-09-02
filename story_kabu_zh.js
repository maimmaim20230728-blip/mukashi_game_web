"use strict";
/* 大萝卜 - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "嘿哟，嘿哟！！" / "嗖！拔出来啦！！" */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var NAMES_ZH = { baa:'老奶奶', mago:'孙女', inu:'小狗', neko:'小猫' };

  function chainZh(f){
    var order = [];
    if(f.nezumi) order.push('小老鼠');
    if(f.c5) order.push(NAMES_ZH[f.c5]);
    if(f.c4) order.push(NAMES_ZH[f.c4]);
    if(f.c3) order.push(NAMES_ZH[f.c3]);
    if(f.c2) order.push(NAMES_ZH[f.c2]);
    order.push('老爷爷');
    if(order.length === 1) return '老爷爷抓住了萝卜。';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += order[i] + '拉着' + order[i+1] + '，\n';
    }
    t += '老爷爷紧紧抓住了萝卜。';
    return t;
  }

  var KABU_ZH = {

  /* ================= 大萝卜 ================= */

  kb1:{art:'kabu_hata', text:'这是发生在一片很大很大的田地里的故事。\n春天的早晨，老爷爷种下了一颗萝卜种子。\n“要长成又甜又甜的萝卜哦。要长成又大又大的萝卜哦。”', next:'kb2'},

  kb2:{art:'kabu_hata', text:'老爷爷每天的照料开始了。\n该把什么看得最要紧呢？', choices:[
    {t:'每天浇足足的水', go:'kb2r', set:{care:'mizu'}},
    {t:'每天温柔地和它说话', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '“快长大吧，快长大吧。”\n每次这样说，叶子好像都会高兴地摇一摇。'
    : '有太阳的光，也有足足的水，\n叶子一个劲儿地、一个劲儿地往上长。', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'萝卜长啊长，最后长得比老爷爷的个子还高。\n这样的萝卜，村里谁也没有见过。', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = '收获的日子到了。';
    if(f.first) return t + '\n老爷爷卷起了袖子。';
    return t + '\n怎么办呢？';
  }, choices:f=>{
    var c = [{t:'马上试着拔拔看', go:'kb5'}];
    c.push({t:'再让它长得更大些', go:'km1'});
    if(f.care==='hanashi') c.push({t:'试着拜托萝卜', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'老爷爷抓住萝卜，使出全身的力气！', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'嘿哟，嘿哟！！'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = '萝卜一动也不动。';
    if(f.first) return t + '\n“老伴儿，来搭把手吧。”';
    return t + '\n去叫谁来呢？';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'去叫'+NAMES_ZH[k]+'来', go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> NAMES_ZH[f.c2]+'来了，站在了后面。\n'+chainZh(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'嘿哟，嘿哟！！'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = '萝卜还是一点儿也不动。';
    if(f.first) return t + '\n“这回去叫孙女来吧。”';
    return t + '\n接下来叫谁呢？';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'去叫'+NAMES_ZH[k]+'来', go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> NAMES_ZH[f.c3]+'来了，站在了后面。\n'+chainZh(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'嘿哟，嘿哟！！'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = '只有叶子摇了摇。';
    if(f.first) return t + '\n“好，把小狗也叫来吧。”';
    return t + '\n接下来叫谁呢？';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'去叫'+NAMES_ZH[k]+'来', go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> NAMES_ZH[f.c4]+'来了，站在了后面。\n'+chainZh(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'嘿哟，嘿哟！！'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = '咯吱。好像稍微动了那么一点点……';
    if(f.first) return t + '\n“小猫也过来！”';
    return t + '\n去叫最后一个来吧。';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'去叫'+NAMES_ZH[k]+'来', go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> NAMES_ZH[f.c5]+'来了，站在了后面。\n'+chainZh(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'嘿哟，嘿哟！！'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = '眼看就要拔出来，可就是拔不出来。只差那么一口气。\n可是，已经没有人可以叫了。';
    if(f.first) return t;
    return t + '\n怎么办？';
  }, choices:[
    {t:'不放弃，再来一次', go:'kb10', set:{nezumi:1}},
    {t:'今天就到这里', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'这时，小猫嗖地跑了出去，\n带回来一只小小的小老鼠。\n“我们需要你的力气。”', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'我……可以吗？'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'嘿哟，嘿哟！！'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'萝卜高高地飞到了天上，\n大家都一屁股坐在了地上。\n哎哟……不过，每个人的脸上都是大大的笑容。', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'萝卜终于拔出来了。\n最后那一下，是最小的小老鼠使的劲儿。\n再小的力气，和大家合在一起，就是世界第一。\n从此，他们过上了幸福的生活。'},

  /* ---- Let it grow → 全村的节日 ---- */
  km1:{art:'kabu_sodatsu', text:'“都到这一步了，就让它长到不能再大吧。”\n浇水，唱歌，每天每天都继续照料着。\n萝卜最后长得比老爷爷的房子还大。', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'到了这个地步，光靠一家人是怎么也不行了。\n老爷爷站在山坡上大声喊：\n“喂！村里的各位！都来帮把手吧！”', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'全村集合！！'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'面包师傅也来了，磨面师傅也来了，孩子们也来了。\n全村的人连成了长长的一列。\n排在最后面的，还是那只小小的小老鼠。', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'嘿哟，嘿哟！！'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'拔出来的萝卜，进了一口很大很大的锅。\n热气的那一头，响着大家的笑声。', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'世界第一大的萝卜，变成了世界第一大的节日。\n甜甜的萝卜汤，把全村人的肚子都暖热了。\n“明年也拜托你长个大的！”\n从此，他们过上了幸福的生活。'},

  /* ---- Ask the turnip → 萝卜的心意 ---- */
  ko1:{art:'kabu_talk', text:'老爷爷在萝卜前面坐了下来。\n“每天对它说话的声音，一定能传到吧。”\n“萝卜啊，差不多该出来了吧？”', next:'ko2'},
  ko2:{art:'kabu_talk', text:'叶子晃了一下。\n泥土一鼓一鼓地隆了起来……', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'你叫我？'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'“每天跟我说话的，是老爷爷吧。\n听声音我就知道。\n好吧。那我出来了。一、二……”', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'萝卜自己嘣的一下跳了出来。\n就算不使劲儿，心意也能传到。\n每天的那句“快长大吧”，原来是句魔法的话。\n从此，他们过上了幸福的生活。'},

  /* ---- Call it a day → 明天大家再一起来 ---- */
  ka1:{art:'kabu_yuyake', text:'“今天就到这里吧。大家都出了很大的力。”\n在晚霞里的田地上，大家喝了热热的茶。\n萝卜今天也好好地歇一歇。', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'“明天再一起来拔吧。”\n大家这样说着，各自回了家。\n就算有拔不出来的日子，也没关系。\n因为明天，不知怎么就让人有些期待。\n从此，他们过上了幸福的生活。'},

  /* ================= 萝卜的故事 ================= */

  kt1:{art:'kt_tsuchi', text:'这是泥土里面的故事。\n我是萝卜。在宽宽的田地正中间，暖暖和和地长着。\n每天从上面，都能听见老爷爷的声音。', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'泥土里面，也有好多好玩的事。\n今天做什么呢？', choices:[
    {t:'和蚯蚓聊聊天', go:'kt2r', set:{klife:'mimizu'}},
    {t:'慢慢品一品太阳的味道', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '“你又长大了呢。”蚯蚓说。\n“嘿嘿。因为我每天都听着好听的声音呀。”'
    : '从叶子那里，太阳的味道慢慢地流下来。\n甜甜的，暖暖的，是让人有点儿犯困的味道。', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'然后有一天。\n猛地一拽！\n“哇，怎么了怎么了？”\n身体被往上拉。收获的日子到了。', next:'kt4'},
  kt4:{art:'kt_up', text:'那么，怎么办呢？', choices:[
    {t:'还不想出去！撑住', go:'kt5'},
    {t:'好，去看看外面的世界', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'“我还想待在这里！”\n萝卜把力气使到根上，牢牢地撑住。\n上面传来“嘿哟，嘿哟”。声音越来越热闹了。', next:'kt6'},
  kt6:{art:'kt_up', text:'两个人，三个人，四个人……\n就这样一直撑着不放，最后听见了一个很小很小的声音。', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'拜托了，萝卜'}, then:'kt7'},
  kt7:{art:'kt_up', text:'要是硬来，我能撑多久都行。\n可是被那么小的声音拜托了的话……\n“……真拿你们没办法。”\n萝卜轻轻地松开了根。', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'天空好高，大家的笑脸好亮。\n“原来这样。外面也不坏嘛。”\n再大的力气也没能让萝卜松手，\n可小小的一句拜托，它却怎么也扛不住。\n从此，他们过上了幸福的生活。'},

  ktj1:{art:'kt_up', text:'“说起来，天空是什么颜色的呢？”\n萝卜心里痒痒起来。\n“好，那我自己出去吧。一、二……”', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'因为跳出来的劲头太大，\n大家一起一屁股坐在了地上。\n“天空原来这么宽啊！”\n自己决定的那一跳，感觉好得不能再好。\n从此，他们过上了幸福的生活。'},

  /* ================= 小老鼠的故事 ================= */

  kn1:{art:'kn_naya', text:'这是住在谷仓角落里的一只小老鼠的故事。\n力气活它不擅长。重的东西它搬不动。\n可是今天，它还是精精神神地跑来跑去。', next:'kn2'},
  kn2:{art:'kn_naya', text:'今天中午做什么呢？', choices:[
    {t:'去找一小块奶酪', go:'kn2r', set:{nlife:'cheese'}},
    {t:'在窗边晒太阳', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? '窗边的那块阳光，是世界第一的特等座。\n胡须直直地伸开，迷迷糊糊，迷迷糊糊。'
    : '谷仓深处，有一股香味。\n找到一小块奶酪，两边脸颊塞得鼓鼓的。', next:'kn3'},
  kn3:{art:'kn_neko', text:'这时，小猫来了。\n换作平时早就逃走了。可今天的小猫，却低下头行了个礼。\n“我有件事想拜托你。想请你借点力气。”', choices:[
    {t:'虽然害怕，还是跟着去', go:'kn3a'},
    {t:'问一句“真的找我行吗？”', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'心怦怦跳着，跟在小猫后面走。\n到了田里，大家正一脸为难地等着。', next:'kn4'},
  kn3b:{art:'kn_neko', text:'“就是因为你小才行呀。”小猫说。\n“听说最后面要站最轻的那一个。”', next:'kn4'},
  kn4:{art:'kn_retsu', text:'小老鼠站到了队伍的最后面。\n前面是一个接一个的大后背。\n小小的老鼠，能做的是什么呢？', choices:[
    {t:'用尾巴使劲拉', go:'kns1'},
    {t:'用大声喊号子', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'小老鼠把自己的尾巴缠在小猫的尾巴上，\n用小小的身体使出了全部的力气！', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'嘿哟，嘿哟！！'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'“最后那一下，是你使的劲儿啊。”老爷爷说。\n小小的尾巴，立了大大的功劳。\n从那天起，小老鼠不再在谷仓的角落里，\n而是在大家中间吃饭。\n从此，他们过上了幸福的生活。'},

  kno1:{art:'kn_retsu', text:'力气不行，还有声音！\n小老鼠深深吸了一口气，使出全身的劲儿喊了起来。', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'一、二！嘿哟！！'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'嗖！拔出来啦！！'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'因为这个声音，大家的力气一下子合到了一处。\n“号子喊得真好。”老奶奶笑着说。\n力气小也没关系，还有能让大家一齐使劲的声音。\n小老鼠挺起胸膛，“吱”地叫了一声。\n从此，他们过上了幸福的生活。'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'老奶奶来了，站在了老爷爷的后面。\n老奶奶拉着老爷爷，老爷爷紧紧抓住了萝卜。', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'嘿哟，嘿哟！！'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'萝卜还是一点儿也不动。\n这回孙女来了，站在了后面。', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'嘿哟，嘿哟！！'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'只有叶子摇了摇。\n这回小狗跑了过来，站在了后面。', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'嘿哟，嘿哟！！'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'咯吱。好像稍微动了那么一点点……\n这回小猫飞奔过来，站在了后面。', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'嘿哟，嘿哟！！'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'眼看就要拔出来，可就是拔不出来。只差那么一口气。\n这时小猫带来了一只小小的小老鼠。', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_ZH);

  T.ZK_EN.push(
    {section:'大萝卜'},
    {id:'kb_seishi',  n:'终于拔出来了',        h:'第一次游玩时的原本故事'},
    {id:'kb_matsuri', n:'全村的节日',          h:'忍住不拔，让它长得更大……'},
    {id:'kb_onegai',  n:'萝卜的心意',          h:'每天一边说话一边照料它……'},
    {id:'kb_ashita',  n:'明天大家再一起来',    h:'拔不出来的日子，不要勉强……'},
    {id:'kt_koe',     n:'输给了小小的声音',    h:'在萝卜的故事里一直撑住不放……'},
    {id:'kt_jibun',   n:'自己嗖地跳出来',      h:'在萝卜的故事里对外面好奇起来……'},
    {id:'kn_shippo',  n:'小尾巴的大功劳',      h:'在小老鼠的故事里用尾巴……'},
    {id:'kn_ondo',    n:'小小的领喊者',        h:'在小老鼠的故事里用声音……'}
  );

})();
