"use strict";
/* Urashima Taro - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_urashima_en.js */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var URA_ZH = {

  /* ================= 浦岛太郎 ================= */

  u1:{art:'ura_hama', text:'这是一个住在海边村子里的年轻渔夫的故事。\n他的名字叫浦岛太郎。\n他和年迈的父亲、母亲三个人一起生活。', next:'u2'},

  u2:{art:'ura_hama', text:'今天的浪声也很好听。\n出海打鱼之前，做点什么呢？', choices:[
    {t:'修补渔网', go:'u2r', set:{ulife:'ami'}},
    {t:'看一会儿大海', go:'u2r', set:{ulife:'umi'}}
  ]},
  u2r:{art:'ura_hama', text:f=> f.ulife==='umi'
    ? '看着闪闪发光的海浪，心里一下子安静下来。\n大海是太郎最好的朋友。'
    : '仔细补好的渔网，绷得又直又紧。\n爱惜自己的工具，这就是太郎的做法。', next:'u3'},

  u3:{art:'ura_ijime', text:'他忽然看见，沙滩上有几个孩子围着一只大海龟，吵吵闹闹。\n海龟不知道该怎么办，把头缩了进去。', next:'uc_kora'},
  uc_kora:{cutin:{type:'kao', face:'urashima', text:'不可以欺负海龟！'}, then:'u4'},

  u4:{art:'ura_tasuke', text:'孩子们回家以后，太郎轻轻地把海龟送回了大海。\n“别再被抓住了哦。”\n海龟一次又一次地回过头来，消失在浪花的那一边。', next:'u5'},

  u5:{art:'ura_kame_mukae', text:'过了几天之后的一天。\n那只海龟来到了海浪拍岸的地方。\n“太郎，前些天真是谢谢你。\n为了报答你，让我带你去龙宫吧。”', next:'u6'},

  u6:{art:'ura_kame_mukae', text:'坐上海龟的背，向海里出发。\n那么，要怎么去呢？', choices:[
    {t:'紧紧抓住龟壳', go:'uc_umi', set:{uride:'tsukamaru'}},
    {t:'东张西望，欣赏风景', go:'uc_umi', set:{uride:'kyoro'}}
  ]},
  uc_umi:{cutin:{type:'waza', theme:'blue', se:'nami', text:'前往龙宫！！'}, then:'u6r'},
  u6r:{art:'ura_umi_naka', text:f=> f.uride==='kyoro'
    ? '成群的鱼儿闪闪发亮，一道道光柱轻轻摇晃。\n这是从没见过的景色，太郎看得入了迷。'
    : (f.uride==='tsukamaru'
      ? '紧紧抓住龟壳，海龟的背暖暖的，\n奇怪的是，一点也不害怕。'
      : '在蓝色的光里，海龟越潜越深。'), next:'u7'},

  u7:{art:'ura_ryugu', text:'海底出现了一座非常非常气派的城堡。\n那就是龙宫。\n那份美丽，真是连画也画不出来。', next:'u8'},

  u8:{art:'ura_otohime', text:'“欢迎你，太郎。你就是救了海龟的那位好心人吧。”\n乙姬公主笑盈盈地出来迎接他。', next:'uc_mai'},
  uc_mai:{cutin:{type:'waza', theme:'gold', text:'鲷鱼和比目鱼的舞蹈！！'}, then:'u9'},

  u9:{art:'ura_utage', text:'在摆得满满一排的美味佳肴前，鲷鱼和比目鱼快活地跳起舞来。\n太郎瞪圆了眼睛，拍起手来。', next:'u10'},

  u10:{art:'ura_shiki', text:f=>{
    var t = '城堡里有一间“四季厅”。\n从四扇窗子里，可以同时看到春、夏、秋、冬的景色。';
    if(f.first) return t;
    return t + '\n你最喜欢哪一扇窗子？';
  }, choices:[
    {t:'樱花飘落的春之窗', go:'u10r', set:{umado:'haru'}},
    {t:'白雪纷飞的冬之窗', go:'u10r', set:{umado:'fuyu'}}
  ]},
  u10r:{art:'ura_shiki', text:f=> f.umado==='fuyu'
    ? '从海底看到的雪，静悄悄的，怎么看也看不厌。\n“真不可思议啊。这里什么都有啊。”'
    : '窗子的那一边，樱花的花瓣轻轻飘舞。\n“真不可思议啊。这里什么都有啊。”', next:'uc_dark1'},

  uc_dark1:{cutin:{type:'dark', text:'快乐的日子像梦一样过去……\n回过神来，已经过了3年。'}, then:'u12'},

  u12:{art:'ura_otohime', text:f=>{
    var t = '一天晚上，太郎忽然想起了留在村里的父亲和母亲。\n他们身体还好吗。会不会觉得寂寞呢。';
    if(f.first) return t + '\n“乙姬，请让我回去吧。”';
    return t + '\n怎么办？';
  }, choices:[
    {t:'说“请让我回去吧”', go:'u13'},
    {t:'再在这里待一会儿', go:'un1'}
  ]},

  u13:{art:'ura_tama', text:'乙姬有些寂寞似的点了点头，\n拿出一个黑得发亮的、漂亮的盒子。\n“这叫做玉手箱。”', next:'uc_tama'},
  uc_tama:{cutin:{type:'kao', face:'otohime', text:'千万不可以打开哦'}, then:'u14'},

  u14:{art:'ura_kame_kaeri', text:'坐在海龟的背上，穿过大海往回走。\n回过头去，龙宫的灯光越来越远，越来越小。', next:'u15'},

  u15:{art:'ura_hama700', text:'一到沙滩，总觉得样子不一样了。\n家不见了。看惯的那棵松树也不见了。\n路上遇到的人，全是不认识的面孔。', next:'uc_700'},
  uc_700:{cutin:{type:'dark', text:'在龙宫的3年之间，\n地上已经过去了700年。'}, then:'u16'},

  u16:{art:'ura_hama700', text:f=>{
    var t = '父亲和母亲，早就成了很久很久以前的人。\n太郎孤零零的一个人。';
    if(f.first) return t + '\n心里发空，他把手放在了玉手箱的盖子上。';
    return t + '\n怎么办？';
  }, choices:[
    {t:'打开玉手箱', go:'uc_kemuri'},
    {t:'不打开，在沙滩上一直等下去', go:'ua1'},
    {t:'把它送回大海', go:'uu1'}
  ]},

  uc_kemuri:{cutin:{type:'kemuri', text:'白色的烟……'}, then:'u17'},

  u17:{art:'ura_oldman', text:f=>{
    var t = '烟散去的时候，太郎变成了白发苍苍的老爷爷。\n在龙宫里停住的时间，一下子全都回来了。';
    if(f.first) return t;
    return t + '\n怎么办？';
  }, choices:[
    {t:'望着大海，静静地站着', go:'e_u_seishi'},
    {t:'朝着龙宫的方向走去', go:'ut1'}
  ]},

  e_u_seishi:{art:'ura_oldman', ending:'u_seishi', text:'打开之后，只剩下懊悔的玉手箱。\n可是在太郎的心里，那段连画也画不出来的美丽岁月，\n像宝物一样留了下来。\n只有海浪的声音，静静地回响着。\n完。'},

  /* ---- 鹤（御伽草子的正统结局） ---- */
  ut1:{art:'ura_oldman', text:'朝着海浪拍岸的地方，走了一步，两步。\n像是被有龙宫的那片海吸过去一样，他一直往前走，\n太郎的身体轻飘飘地变轻了。', next:'uc_tsuru'},
  uc_tsuru:{cutin:{type:'waza', theme:'gold', text:'变成了一只鹤！！'}, then:'e_u_tsuru'},
  e_u_tsuru:{art:'ura_tsuru', text:'变成白鹤的太郎，飞过朝霞映红的大海。\n这时，浪花之间忽然探出了一只绿色海龟的头。\n那是变成海龟模样的乙姬。\n鹤和龟，是长寿和幸福的象征。\n两个人一直在闪光的海面上飞舞着。\n从此，他们过上了幸福的生活。', ending:'u_tsuru'},

  /* ---- 不打开（风土记的约定） ---- */
  ua1:{art:'ura_hama700', text:'太郎没有打开盒子。\n“因为约好了，不可以打开。”\n从那天起，太郎每天早上和傍晚，都在沙滩上望着大海过日子。', next:'ua2'},
  ua2:{art:'ura_fune', text:'过了几天的一个早上。大海泛起了金色的光，\n一艘船像滑过来一样驶了过来。\n“太郎，你把约定守住了呢。”\n那是乙姬的声音。', next:'e_u_akenai'},
  e_u_akenai:{art:'ura_fune', ending:'u_akenai', text:'“我一直相信，只要不打开盒子，我们就能再见面。”\n太郎坐上了船，这一次踏上了没有告别的旅程。\n玉手箱，原来是把两个人连在一起的约定的信物。\n从此，他们过上了幸福的生活。'},

  /* ---- 送回大海 ---- */
  uu1:{art:'ura_hama', text:'太郎借了一条小船，划到了海面上。\n“重要的东西，就送回重要的地方去吧。”\n他轻轻地把玉手箱放到浪上，让它漂着。', next:'uu2'},
  uu2:{art:'ura_kame_mukae', text:'这时，那只海龟从浪下面出现了，\n把盒子放到了自己的背上。\n“太郎，这也许就是最好的答案吧。”', next:'e_u_umi'},
  e_u_umi:{art:'ura_hama', ending:'u_umi', text:'回忆就算不打开盒子，也在心里。\n太郎决定在新的村子里，重新当一个渔夫生活下去。\n大海今天也闪闪发亮。\n从此，他们过上了幸福的生活。'},

  /* ---- 留下 ---- */
  un1:{art:'ura_otohime', text:'“请让我再在这里待一会儿。可是……”\n像是看穿了他的心底一样，乙姬静静地点了点头，\n把太郎带到了水镜前面。', next:'un2'},
  un2:{art:'hime_ryugu', text:'水镜里映出了令人怀念的村子和家。\n父亲和母亲，都精神地笑着。\n“我们时常从这里守望他们吧。\n你想见他们的时候，海龟随时都会送你过去。”', next:'e_u_nokoru'},
  e_u_nokoru:{art:'ura_ryugu', ending:'u_nokoru', text:'太郎放下心来，决定继续在龙宫生活。\n就算离得远，只要彼此挂念，家人就还是家人。\n龙宫的岁月，今天也很平静。\n从此，他们过上了幸福的生活。'},

  /* ================= 乙姬公主的故事 ================= */

  h1:{art:'hime_ryugu', text:'这是龙宫的乙姬公主的故事。\n漂亮的城堡，好吃的美食，还有歌和舞。\n什么都有，可是乙姬还是觉得有一点无聊。', next:'h2'},
  h2:{art:'hime_ryugu', text:'今天做点什么好呢。', choices:[
    {t:'在珊瑚园里散步', go:'h2r', set:{hlife:'sango'}},
    {t:'去听鲸鱼唱歌', go:'h2r', set:{hlife:'kujira'}}
  ]},
  h2r:{art:'hime_ryugu', text:f=> f.hlife==='kujira'
    ? '从远处的海上，传来了鲸鱼低沉的歌声。\n那是又大、又温柔、又有点寂寞的歌。'
    : '红色和粉色的珊瑚，在园子里到处摇曳。\n明明这么漂亮，却没有想给他看的人，真可惜。', next:'h3'},
  h3:{art:'hime_ryugu', text:'有一天，海龟急急忙忙地回来了。\n它的龟壳擦得亮闪闪，眼睛也在发光。', next:'hc_kiite'},
  hc_kiite:{cutin:{type:'kao', face:'kamec', text:'公主，请听我说！'}, then:'h4'},
  h4:{art:'ura_otohime', text:'“有个人救了在沙滩上被抓住的我。”\n被请到城堡里来的太郎，是个很爱笑的人。\n龙宫里多了从前没有过的笑声，\n原本无聊的每一天，看上去都有了颜色。', next:'h5'},
  h5:{art:'ura_otohime', text:'可是，第3年的一个晚上。\n“请让我回去吧。”\n乙姬的心里一紧。\n想留住他。可是，想着家人的心，是不可以拦住的。', next:'hc_kokoro'},
  hc_kokoro:{cutin:{type:'dark', text:'想留住他。\n可是……。'}, then:'h6'},
  h6:{art:'ura_tama', text:'乙姬准备了一个黑得发亮的盒子。\n要在这个盒子里放进什么，再送给他呢。', choices:[
    {t:'把太郎快乐的那段岁月放进去', go:'e_h_himitsu'},
    {t:'把“还能再见”的魔法放进去', go:'hm1'}
  ]},
  e_h_himitsu:{art:'ura_tama', ending:'uh_himitsu', text:'龙宫的3年，是地上的700年。\n就这样回去的话，太郎一下子就会变老。\n所以她把流走的时间，轻轻地关进了盒子里。\n“只要不打开，太郎就一直是太郎。\n寂寞的夜里，就抱着这个盒子睡吧。”\n这就是谁也不知道的玉手箱的秘密。\n从此，他们过上了幸福的生活。'},
  hm1:{art:'hime_ryugu', text:'“只要你不打开盒子，我们就一定还能再见。”\n乙姬把这个心愿放进盒子，交给了太郎。\n从那天起，她每天都去看水镜。', next:'hm2'},
  hm2:{art:'ura_fune', text:'水镜里的太郎，今天也没有打开盒子，\n只是一直望着大海。\n“……已经够了。去接他吧。”\n乙姬派出了最快的船。', next:'e_h_mukae'},
  e_h_mukae:{art:'ura_fune', ending:'uh_mukae', text:'船在金色的清晨的海上滑行。\n笔直地，朝着那个一直等着的人。\n约定要有守约的人和相信的人，两个人都在，\n才第一次变成魔法。\n从此，他们过上了幸福的生活。'},

  /* ================= 海龟的故事 ================= */

  v1:{art:'kame_hama', text:'这是一只海龟的故事。\n它最喜欢晒太阳，那天也在沙滩上打着瞌睡。\n回过神来，它已经被孩子们围住了。', next:'v2'},
  v2:{art:'kame_hama', text:'“不可以欺负海龟！”\n一位声音温和的渔夫来救了它，\n把它轻轻地送回了大海。\n在浪里摇晃着，海龟下定了决心。', next:'vc_goon'},
  vc_goon:{cutin:{type:'kao', face:'kamec', text:'这份恩情我一定要报答！'}, then:'v3'},
  v3:{art:'ura_ryugu', text:'回到龙宫的海龟，马上开始准备。\n先做什么好呢？', choices:[
    {t:'把龟壳擦得亮闪闪', go:'v3r', set:{vlife:'migaku'}},
    {t:'马上向公主报告', go:'v3r', set:{vlife:'houkoku'}}
  ]},
  v3r:{art:'ura_ryugu', text:f=> f.vlife==='migaku'
    ? '这可是要载客人的背，得擦得亮闪闪才行。\n擦好的龟壳，像镜子一样亮。'
    : '“那真是一位好心人呢。”公主微微一笑。\n“一定要请他来，好好谢谢他。”', next:'v4'},
  v4:{art:'ura_kame_mukae', text:'得到公主的许可，海龟去沙滩接人了。\n“太郎，为了报答你，让我带你去龙宫吧。”\n在背上载客人，这是它出生以来的第一次。', next:'vc_senaka'},
  vc_senaka:{cutin:{type:'waza', theme:'blue', se:'nami', text:'请上我的背！！'}, then:'v5'},
  v5:{art:'ura_umi_naka', text:'好了，接下来是去龙宫的一段路。\n走哪条路呢？', choices:[
    {t:'走那条秘密的近路', go:'v5r', set:{vmichi:'chika'}},
    {t:'走最漂亮的那条路', go:'v5r', set:{vmichi:'kirei'}}
  ]},
  v5r:{art:'ura_umi_naka', text:f=> f.vmichi==='chika'
    ? '嗖的一下，从大鲸鱼的旁边穿了过去。\n“哇！”背上的太郎叫出了声。\n这是它有点得意的近路。'
    : '慢慢地穿过珊瑚的森林。\n“真漂亮啊。”背上的太郎叹了一口气。\n这是它有点得意的景色。', next:'v6'},
  v6:{art:'ura_ryugu', text:'平安地把客人送到了，大任务完成。\n那么，接下来做什么呢？', choices:[
    {t:'留在龙宫照顾他', go:'e_v_senaka'},
    {t:'回到沙滩，等他回来', go:'vm1'}
  ]},
  e_v_senaka:{art:'ura_umi_naka', ending:'uv_senaka', text:'从那以后的3年，海龟一直是太郎专用的坐骑。\n它的背随时都是特等座。\n“还是海龟的背上最让人安心啊。”\n每次听到这句话，龟壳都会有点儿骄傲。\n从此，他们过上了幸福的生活。'},
  vm1:{art:'kame_hama', text:'海龟回到沙滩，决定每天都在海浪拍岸的地方等着。\n海龟活得很长很长。\n不管过去多久，重要的约定它都不会忘。', next:'vc_toki'},
  vc_toki:{cutin:{type:'dark', text:'时间流过，700年。'}, then:'e_v_matsu'},
  e_v_matsu:{art:'kame_hama', ending:'uv_matsu', text:'一天早上，那个令人怀念的人站在沙滩上。\n“欢迎回来，太郎。”\n在完全变了样的沙滩上，只有一只，\n只有海龟，还记得太郎。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, URA_ZH);

  T.ZK_EN.push(
    {section:'浦岛太郎'},
    {id:'u_seishi',   n:'打开后懊悔的玉手箱', h:'第一次游玩时看到的原本的故事'},
    {id:'u_tsuru',    n:'变成鹤的太郎',       h:'打开盒子以后，朝着大海走去的话……'},
    {id:'u_akenai',   n:'没有打开的玉手箱',   h:'守住约定，在沙滩上一直等下去的话……'},
    {id:'u_umi',      n:'还给大海的宝物',     h:'不打开盒子，把它送回大海的话……'},
    {id:'u_nokoru',   n:'龙宫的岁月',         h:'不回去，再多留一会儿的话……'},
    {id:'uh_himitsu', n:'玉手箱的秘密',       h:'在乙姬的故事里，把岁月放进去的话……'},
    {id:'uh_mukae',   n:'来接他的船',         h:'在乙姬的故事里，把魔法放进去的话……'},
    {id:'uv_senaka',  n:'背上的客人',         h:'在海龟的故事里，留在龙宫的话……'},
    {id:'uv_matsu',   n:'海边的约定',         h:'在海龟的故事里，在沙滩上一直等下去的话……'}
  );

})();
