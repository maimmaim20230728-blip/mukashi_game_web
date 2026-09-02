"use strict";
/* Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_en.js
   (scene ids, flags and transitions are identical - only the text differs).
   Style: simple picture-book Chinese (mainland standard). */

var SCENES_ZH = {

/* ================= 桃太郎 ================= */

m1:{art:'yama', text:'很久很久以前，在某个地方，住着一位老爷爷和一位老奶奶。\n老爷爷到山上去砍柴，老奶奶到河边去洗衣服。', next:'m2'},

m2:{art:'momo_river', text:'老奶奶正在河边洗衣服，从上游漂来了一个大桃子，咕咚咕咚，咕咚咕咚。', choices:[
  {t:'带回家去', go:'m3a', set:{open:'home'}},
  {t:'就在这里切开看看', go:'m3b', set:{open:'river'}}
]},
m3a:{art:'momo_home', text:'老奶奶嘿咻、嘿咻地把桃子搬回了家。\n和老爷爷两个人马上切开一看……', next:'c_paka'},
m3b:{art:'momo_river', text:'老奶奶等不及了，决定就在河滩的石头上把桃子切开看看。于是……', next:'c_paka'},
c_paka:{cutin:{type:'paka', text:'咔嚓！！'}, then:'m4'},

m4:{art:'baby', text:f=> f.open==='river'
  ? '从里面跳出一个健康的小男孩！\n老奶奶抱起婴儿，急急忙忙赶回家。\n她和老爷爷高兴极了，给他取名叫“桃太郎”。'
  : '从里面跳出一个健康的小男孩！\n两位老人高兴极了，给这个从桃子里生出来的男孩取名叫“桃太郎”。', next:'m5'},

m5:{art:'kids', text:'桃太郎最喜欢和村里的孩子们一起玩。\n今天做什么呢？', choices:[
  {t:'摔跤', go:'m5a', set:{hobby:'sumo'}},
  {t:'赛跑', go:'m5b', set:{hobby:'run'}},
  {t:'帮忙干活', go:'m5c', set:{hobby:'help'}}
]},
m5a:{art:'kids', text:'连大孩子们也一个接一个地被摔倒了。\n“这力气，是村里第一！”大家都吃了一惊。', next:'m6'},
m5b:{art:'kids', text:'跑得比桃太郎快的孩子，哪里也找不到。\n他像风一样跑起来，让大家都看呆了。', next:'m6'},
m5c:{art:'kids', text:'再重的柴火，桃太郎拿起来也轻轻松松。\n老爷爷和老奶奶都省了不少力气。', next:'m6'},

m6:{art:'momotaro', text:'桃太郎一天天长大，成了一个又强壮又温柔的年轻人。', next:'c_shirase'},
c_shirase:{cutin:{type:'dark', text:'那天夜里。\n村子里出了一件大事。'}, then:'m7'},
m7:{art:'village_sad', text:'第二天早上。\n大家才知道，是鬼岛的鬼把村子的宝物抢走了。\n村里的人不知道该怎么办才好。', next:'m8'},
m8:{art:'momotaro', text:'桃太郎站了起来。\n“我去鬼岛，把宝物拿回来！”', next:'m9'},

m9:{art:'kibidango', text:f=> f.first
  ? '老奶奶给他做了日本第一的黍团子。\n把团子挂在腰间，出发的准备就绪了。'
  : '老奶奶说，要给他做日本第一的黍团子。\n那么，怎么办呢？', choices:[
  {t:'请她多做一些黍团子', go:'m10', set:{dango:'full'}},
  {t:'只要一点，轻装上路', go:'m10', set:{dango:'light'}}
]},

m10:{art:'hachimaki', text:'出发的早上。\n老奶奶拿出了两条头巾。\n系哪一条去呢？', choices:[
  {t:'白色的头巾', go:'m10r', set:{band:'white'}},
  {t:'红色的头巾', go:'m10r', set:{band:'red'}}
]},
m10r:{art:'momotaro', text:f=> f.band==='red'
  ? '把红色的头巾紧紧系上，胸口深处热了起来。\n“我出发了！”'
  : '把白色的头巾紧紧系上，心里一下子安静清澈了。\n“我出发了！”', next:'c_iza'},
c_iza:{cutin:{type:'waza', theme:'gold', icon:'banner', text:'出发，去打鬼！！'}, then:'m11'},

m11:{art:'michi', text:'路分成了两条。\n一条翻过山，一条沿着海。\n从哪一条走呢？', choices:[
  {t:'走山路', go:'m11a', set:{road:'yama'}},
  {t:'走海边的路', go:'m11b', set:{road:'umi', shell:1}}
]},
m11a:{art:'yamamichi', text:'从山顶望去，远处的海上孤零零地浮着一座黑色的岛。\n那就是鬼岛……\n桃太郎用力握紧了拳头。', next:'m12'},
m11b:{art:'umizoi', text:'一边听着浪声，一边在沙滩上走。\n在脚边，他发现了一只桃红色的漂亮贝壳。\n就带回去送给老奶奶吧。', next:'m12'},

m12:{art:'dog', text:'他一路走着，一只狗跑了过来。\n“桃太郎，你要去哪里？给我一个黍团子，我就陪你一起去！”', choices:[
  {t:'给它一个黍团子', go:'c_dog_join', set:{dog:1}},
  {t:'“对不起，我赶时间”', go:'m12n'}
]},
c_dog_join:{cutin:{type:'join', chara:'dog', text:'狗加入了队伍！！'}, then:'m12y'},
m12y:{art:'dog', text:f=> f.dango==='light'
  ? '“虽然只有一点点，我们一人一半吧。”\n狗高兴得直摇尾巴！'
  : '狗高兴得直摇尾巴！\n“不管去哪里，我都跟着你！”', next:'m13'},
m12n:{art:'dog', text:'狗看上去有点遗憾，目送着桃太郎走远。', next:'m13'},

m13:{art:'saru', text:'这一次，一只猴子从树上招呼他。\n“给我黍团子的话，带路就交给我！”', choices:[
  {t:'给它一个黍团子', go:'c_saru_join', set:{saru:1}},
  {t:'“对不起，我要赶路”', go:'m13n'}
]},
c_saru_join:{cutin:{type:'join', chara:'saru', text:'猴子加入了队伍！！'}, then:'m13y'},
m13y:{art:'saru', text:f=> f.dango==='light'
  ? '就算只分到一小块黍团子，猴子也高兴得不得了。\n它顺着树干溜下来，拍了拍胸脯。'
  : '猴子顺着树干溜下来，拍了拍胸脯。\n“交给我吧！”', next:'m14'},
m13n:{art:'saru', text:'猴子在树上摆了摆手。', next:'m14'},

m14:{art:'kiji', text:'一只雉鸡从天上飞了下来。\n“给我黍团子的话，我就从空中去看看鬼岛的样子！”', choices:[
  {t:'给它一个黍团子', go:'c_kiji_join', set:{kiji:1}},
  {t:'“对不起，我该走了”', go:'m14n'}
]},
c_kiji_join:{cutin:{type:'join', chara:'kiji', text:'雉鸡加入了队伍！！'}, then:'m14y'},
m14y:{art:'kiji', text:f=> f.dango==='light'
  ? '雉鸡把分到的半个黍团子珍惜地吃完了。\n它高兴地张开翅膀，在天上绕了一圈。'
  : '雉鸡高兴地张开翅膀，在天上绕了一圈。\n“天上的事就交给我！”', next:'m15'},
m14n:{art:'kiji', text:'雉鸡绕了一大圈，朝着山的方向飞走了。', next:'m15'},

m15:{art:'fune', text:f=>{
  const n = nakama(f);
  let t = '来到港口，那里有一条小船。';
  if(n===0) t += '\n虽然没有同伴，桃太郎的心意已经定了。';
  else if(n===1) t += '\n他和同伴两个，合力上了船。';
  else t += '\n大家都上了船，小船挤得满满的。';
  return t;
}, next:'c_shuppatsu'},
c_shuppatsu:{cutin:{type:'waza', theme:'blue', icon:'boat', se:'nami', text:'出发喽！！'}, then:'m16'},

m16:{art:'fune_night', text:'夜里的海很安静。\n在星空下，桃太郎想着心事。', choices:[
  {t:'想起老奶奶的黍团子的味道', go:'m17', set:{think:'dango'}},
  {t:'想村子的宝物的事', go:'m17', set:{think:'takara'}},
  {t:'想鬼到底是什么样的', go:'m17', set:{think:'oni'}}
]},
m17:{art:'fune_night', text:f=>({
  dango:'甜甜的黍团子的味道，好像给了他勇气。\n明天一定没问题。',
  takara:'村里大家的脸一张张浮现出来。\n一定要把宝物拿回来。',
  oni:'会很强吗。会很可怕吗。\n……不见一面，就不会知道。'
}[f.think]), next:'m18'},

m18:{art:'fune_asa', text:f=>{
  let t = '在朝阳里，岛越来越近了。';
  if(f.first) t += '\n雉鸡先飞了一步，告诉大家岛在哪里。';
  else if(f.kiji) t += '\n雉鸡先飞了一步，很快就回来了。\n“大门只有一个，很大！后面还有一条石头路！”';
  else t += '\n站在船头，桃太郎笔直地望着岛。';
  return t;
}, next:'c_mieta'},
c_mieta:{cutin:{type:'kao', face:'momo', text:'看见了，鬼岛！'}, then:'m19'},

m19:{art:'onigashima', text:'在满是岩石的岛上，耸立着一扇又大又黑的门。\n那么，从哪里进去呢？', choices:f=>[
  {t:'堂堂正正从正面进去', go:'m20', set:{gate:'front'}},
  f.kiji
    ? {t:'走雉鸡找到的后面的石头路', go:'m20', set:{gate:'back'}}
    : {t:'绕岛走一圈，找一条后路', go:'m20', set:{gate:'back'}}
]},
m20:{art:'onigashima', text:f=> f.gate==='front'
  ? '桃太郎挺起胸膛，站在门前。\n“鬼们！我是来把村子的宝物要回去的！”'
  : (f.kiji
    ? '在雉鸡的带路下，他们悄悄爬上后面的石头路。\n守门的鬼还没有发现。'
    : '在岩石之间，他们找到了一条窄路。\n悄悄爬上去，守门的鬼还没有发现。'), next:'m21'},
m21:{art:'onigashima', text:'心怦怦地跳了起来。\n好，就是现在了。', choices:[
  {t:'深深地吸一口气', go:'m21r', set:{calm:1}},
  {t:'一鼓作气冲进去', go:'m21r', set:{calm:0}}
]},
m21r:{art:'onigashima', text:f=> f.calm
  ? '吸气，呼气。\n心一下子静了下来。好，走吧。'
  : '还没来得及想，身体已经动起来了！', next:'c_vs'},
c_vs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'m22'},

m22:{art:'oyabun', text:'随着地面一阵震动，鬼头目出现了！', next:'c_nanimono'},
c_nanimono:{cutin:{type:'kao', face:'oyabun', text:'你是什么人！！'}, then:'c_sengen'},
c_sengen:{cutin:{type:'kao', face:'momo', text:'把宝物还回来！！'}, then:'m23'},

m23:{art:'oyabun', text:f=>{
  let t = '“我是来把村子的宝物要回去的。我叫桃太郎！”';
  if(f.first) return t;
  t += '\n' + ({
    dango:'（一想起黍团子的味道，奇怪，就不害怕了）',
    takara:'（村里的大家都在等着。不能输！）',
    oni:'（好大。看上去很强。可是……那眼睛里，好像有点难过）'
  }[f.think] || '');
  t += '\n怎么打呢？';
  return t;
}, choices:f=>{
  const c = [];
  if(f.dog && f.saru && f.kiji) c.push({t:'大家一起上！', go:'cw_minna', set:{style:'minna'}});
  c.push({t:'用刀来决胜负！', go:'cw_kat', set:{style:'katana'}});
  if(f.dog)  c.push({t:'狗，拜托了！', go:'cw_dog', set:{style:'dog'}});
  if(f.saru) c.push({t:'猴子，拜托了！', go:'cw_saru', set:{style:'saru'}});
  if(f.kiji) c.push({t:'雉鸡，拜托了！', go:'cw_kiji', set:{style:'kiji'}});
  if(nakama(f)===0) c.push({t:'把刀收起来，好好谈一谈', go:'t1', set:{style:'talk'}});
  return c;
}},

cw_minna:{cutin:{type:'waza', theme:'orange', text:'大家一起上！！'}, then:'c_m_dog'},
c_m_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'狗的一口咬！！'}, then:'c_m_saru'},
c_m_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'猴子的一把抓！！'}, then:'c_m_kiji'},
c_m_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'雉鸡的一顿啄！！'}, then:'c_nani'},
cw_kat:{cutin:{type:'flash', text:'刀的一击！！'}, then:'c_nani'},
cw_dog:{cutin:{type:'waza', theme:'brown', icon:'dog', se:'kamitsuki', text:'狗的猛冲！！'}, then:'c_nani'},
cw_saru:{cutin:{type:'waza', theme:'gold', icon:'saru', se:'hikkaki', text:'猴子的快手！！'}, then:'c_nani'},
cw_kiji:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'雉鸡的俯冲！！'}, then:'c_nani'},
c_nani:{cutin:{type:'kao', face:'oyabun', text:'什么！？'}, then:'c_kimari'},
c_kimari:{cutin:{type:'waza', theme:'gold', text:'打中了！！'}, then:f=>({katana:'rk', dog:'rd', saru:'rs', kiji:'rj', minna:'rm'}[f.style])},

rm:{art:'maitta', text:'狗一口咬住腿，猴子抓挠后背，雉鸡扑棱扑棱地啄头。\n就算是头目，也挡不住3只一起进攻。\n“我、我认输了！”\n只要合起力来，就没有什么可怕的了。', next:'m24'},

rk:{art:'maitta', text:f=>'桃太郎的刀法快如闪电！\n头目的铁棒被高高地弹到了天上。\n“我、我认输了！”\n' + HOBBY_LINE_ZH(f), next:'m24'},
rd:{art:'maitta', text:'狗像风一样冲出去，一口咬住了头目的腿！\n头目咚的一声坐倒在地上。\n“我、我认输了！”\n把事情交给狗、也相信狗的桃太郎，也挺起胸膛笑了。', next:'m24'},
rs:{art:'maitta', text:'猴子轻巧地跳来跳去，一下子夺走了头目的铁棒。\n“我、我认输了！”\n看到猴子这么利落的身手，桃太郎也忍不住鼓起掌来！', next:'m24'},
rj:{art:'maitta', text:'雉鸡从空中俯冲下来！翅膀扑棱扑棱，把头目的眼睛挡住了！\n头目转得头晕眼花，说：“我、我认输了！”\n天上的同伴，果然靠得住。桃太郎用力地挥了挥手。', next:'m24'},

m24:{art:'maitta', text:f=>{
  let t = '头目缩成一团，道了歉。\n“宝物我们还。所以，请原谅我们……”';
  if(!f.first) t += '\n那么，怎么办呢？';
  return t;
}, choices:[
  {t:'带着宝物回村子', go:'e_gaisen'},
  {t:'听听他们为什么要抢', go:'m25'}
]},
m25:{art:'talk', text:'头目一句一句地说了起来。\n“鬼岛上到处是岩石，庄稼长不起来。我们不想让孩子们挨饿……”', next:'e_naka'},

t1:{art:'oyabun', text:'桃太郎没有把手放到刀上，只是笔直地看着前方。', next:'c_hanashi'},
c_hanashi:{cutin:{type:'kao', face:'momo', text:'我想谈一谈！！'}, then:'t2'},
t2:{art:'talk', text:'头目瞪圆了眼睛，然后一句一句地说了起来。\n“鬼岛上到处是岩石，庄稼长不起来。为了孩子们，我们只能来借你们的宝物……”\n听完头目的话，桃太郎想了想。', choices:f=>{
  const c = [];
  if(f.dango==='full') c.push({t:'把黍团子分给大家', go:'e_kibi'});
  c.push({t:'约定“把宝物还回去，和村子好好相处”', go:'e_yaku'});
  return c;
}},

e_gaisen:{art:'festival', ending:f=>'a_'+f.style, text:f=>{
  let t = '推着装满宝物的车，桃太郎回到了村子。\n全村都高兴坏了！\n';
  t += ({
    minna:'狗、猴子和雉鸡都挺着胸膛，走在大队伍的前面。\n3只的功劳，在村子里传了很久很久。',
    katana:'村里的人聚在一起，说的都是桃太郎那漂亮的刀法。',
    dog:'拉车的，是立了大功的狗。它挺着胸膛，走在庆祝队伍的最前面。',
    saru:'猴子把夺来的铁棒扛在肩上，得意得很。',
    kiji:'雉鸡在庆祝的天空上绕了一圈，落下了一片漂亮的羽毛。'
  }[f.style] || '');
  if(f.shell) t += '\n他还把那只桃红色的贝壳送给了老奶奶。\n“能听见海的声音呢。”老奶奶笑着说。';
  t += '\n从此，他们过上了幸福的生活。';
  return t;
}},
e_naka:{art:'nakanaori', ending:'b_naka', text:f=>{
  let t = '桃太郎收下宝物，作为回礼，决定把米和种薯送到鬼岛去。\n从第二年春天起，鬼们开始来村里帮着干农活。\n村子过节的时候，鬼的太鼓咚咚地响了起来。';
  if(f.shell) t += '\n老奶奶拿着带回来的贝壳，跟着太鼓的节奏敲了起来。';
  t += '\n从此，他们过上了幸福的生活。';
  return t;
}},
e_yaku:{art:'talk', ending:'c_yaku', text:f=>{
  let t = '“宝物我们还。说定了。”\n桃太郎和头目拉了钩。\n从那以后，鬼岛和村子慢慢地开始来往了。\n没有动手就回来的桃太郎，村里的人都夸他“真了不起”。';
  if(f.shell) t += '\n他把带回来的贝壳拿给老奶奶看，老奶奶笑得眯起了眼睛。';
  t += '\n从此，他们过上了幸福的生活。';
  return t;
}},
e_kibi:{art:'talk', ending:'d_kibi', text:'“这个，是日本第一的黍团子。大家一起吃吧。”\n鬼们把黍团子塞满嘴，眼泪一颗一颗地掉了下来。\n“这么好吃的东西，我们出生以来还是头一回吃到……”\n桃太郎和鬼们一起把岩石搬开，决定在那里开一片田。\n这是最不可思议、也最温暖的一个结局。\n从此，他们过上了幸福的生活。'},

/* ================= The Ogre's Tale (Aka) ================= */

o1:{art:'oni_village', text:'这是住在鬼岛上的一个年轻的鬼，阿赤的故事。\n鬼岛上到处是岩石。就算开出田来，庄稼也长不起来。', next:'o2'},
o2:{art:'oni_village', text:'阿赤今天的活儿，做哪一样呢？', choices:[
  {t:'从崖下打水', go:'o2r', set:{owork:'mizu'}},
  {t:'把田里的岩石搬走', go:'o2r', set:{owork:'iwa'}}
]},
o2r:{art:'oni_village', text:f=> f.owork==='mizu'
  ? '他扛着沉甸甸的水桶，一次又一次地爬上崖边的路。\n小弟弟们渴得嗓子发干，正在上面等着。'
  : '搬开一块大石头，下面的土还是硬邦邦的。\n就算这样，阿赤也相信总有一天这里会长出一片田。', next:'o3'},
o3:{art:'oni_dinner', text:'晚饭只有一碗稀稀的粥。\n弟弟阿绿说：\n“哥哥，我肚子饿……”', choices:[
  {t:'说“等到春天，我们就吃个饱”', go:'o3r', set:{care:'hagemasu'}},
  {t:'把自己的粥分一半给他', go:'o3r', set:{care:'wakeru'}}
]},
o3r:{art:'oni_dinner', text:f=> f.care==='wakeru'
  ? '“哥哥的那一份也很好吃呢。”\n阿绿笑得眯起了眼睛。\n阿赤的肚子还有点空，胸口却暖暖的。'
  : '阿绿轻轻点了点头，把剩下的粥珍惜地吃完了。\n春天，还很远。', next:'c_sonoyoru'},
c_sonoyoru:{cutin:{type:'dark', text:'那天夜里。'}, then:'o4'},
o4:{art:'oni_kaigi', text:'头目把大家叫到一起，说：\n“我们去村子里借宝物来。为了让孩子们过冬。”\n阿赤心里一阵不安。\n怎么办呢？', choices:[
  {t:'喊一声“那是偷东西！”，把大家拦住', go:'c_dorobo'},
  {t:'不作声，跟着去', go:'o5b'}
]},
c_dorobo:{cutin:{type:'kao', face:'aka', text:'那是偷东西！！'}, then:'o5a'},
o5a:{art:'oni_kaigi', text:'四周一下子安静了下来。\n头目沉默了很久很久……\n“那么，我们该怎么办才好。”', next:'o6a'},
o6a:{art:'oni_kaigi', text:'阿赤拼命地想。', choices:[
  {t:'去求村里的人帮忙', go:'o7a'},
  {t:'用自己的手开出一片田', go:'o7b'}
]},
o7a:{art:'oni_kaigi', text:'“我们低下头，请他们分一点吃的给我们。作为回报，就用鬼的力气来道谢。”\n头目抱着粗壮的胳膊，慢慢地点了点头。', next:'e_o_negai'},
e_o_negai:{art:'oni_ship', ending:'o_negai', text:'第二天，鬼们坐上船，朝村子去了。\n他们没有带打仗的武器，抱着的是一筐一筐的山葡萄。\n这件事，比抢宝物需要多得多的勇气。\n村子的回答是什么呢……那就是另一个故事了。'},
o7b:{art:'oni_village', text:'“我们把岩石全都搬开，开一片田吧！用鬼的力气，一定做得到！”\n从那天起，全岛的鬼都开始搬起了岩石。', next:'c_onipower'},
c_onipower:{cutin:{type:'waza', theme:'red', icon:'club', se:'zushin', text:'鬼的力气，全开！！'}, then:'e_o_hatake'},
e_o_hatake:{art:'oni_hatake', ending:'o_hatake', text:'岩石大得像山一样，活儿怎么也干不完。\n可是很奇怪，大家一起流的汗，一点也不觉得苦。\n春天来了，田里冒出了小小的嫩芽。\n阿绿又蹦又跳，高兴极了。\n从此，他们过上了幸福的生活。'},

o5b:{art:'oni_raid', text:'阿赤上了头目他们的船。\n到了村子，阿赤还是没能从船上走下去。\n远处的灯火在晃，他好像听见了谁的哭声。', next:'o6b'},
o6b:{art:'oni_takara', text:'回到岛上，阿赤心里还是一阵一阵地不安。\n站在堆得高高的宝物前面，阿赤想了很久。', choices:[
  {t:'偷偷地把一件宝物送回去', go:'o7c'},
  {t:'什么也做不了，夜就这样过去', go:'o7d'}
]},
o7c:{art:'oni_hama', text:'阿赤拿了一件小小的宝物，把船划进了夜里的海。\n他把宝物轻轻放在村子的沙滩上，正要回去的时候。\n“鬼先生，你是来把它还回来的吗？”', next:'c_mitsu'},
c_mitsu:{cutin:{type:'kao', face:'aka', text:'被发现了！？'}, then:'e_o_kaesu'},
e_o_kaesu:{art:'oni_hama', ending:'o_kaesu', text:'一个小女孩，正一动不动地看着阿赤。\n阿赤心怦怦地跳着，用力点了点头。\n小女孩笑了起来，小声说：\n“谢谢你。我替你保密。”\n明明是很冷的夜里，阿赤的胸口却暖洋洋的。'},

o7d:{art:'oni_night', text:'什么也做不了，就这样过去了好多个夜晚。\n有一天晚上，睡不着的阿赤在崖上看海，一条小船从远处慢慢驶了过来。\n坐在那条船上的，会是谁呢。', next:'c_yoake'},
c_yoake:{cutin:{type:'dark', text:'天亮了。'}, then:'o8'},
o8:{art:'oni_village', text:'全岛都乱成了一团。\n“是人！系着头巾的人，朝这边来了！”\n阿赤的心咚地跳了一下。\n怎么办呢？', choices:[
  {t:'把阿绿藏到岩石后面', go:'o9a', set:{guard:'midori'}},
  {t:'朝头目身边跑过去', go:'o9b', set:{guard:'oyabun'}}
]},
o9a:{art:'oni_village', text:'“嘘。待在这里就没事。”\n阿赤紧紧握住了阿绿的小手。', next:'c_ovs'},
o9b:{art:'oni_kaigi', text:'头目握着铁棒，瞪着大门的方向。\n他的背影，看上去比平时更大。', next:'c_ovs'},
c_ovs:{cutin:{type:'vs', faces:['momo','oyabun'], text:'VS'}, then:'o10'},
o10:{art:'oyabun', text:'这一仗，一转眼就结束了。\n头目的铁棒被弹飞了，阿赤躲在暗处，屏住呼吸看着。', next:'c_omaitta'},
c_omaitta:{cutin:{type:'kao', face:'oyabun', text:'我、我认输了！！'}, then:'o11'},
o11:{art:'oyabun', text:'系着头巾的年轻人收起了刀，正在说着什么。\n现在的话，也许能上去搭句话。\n怎么办呢？', choices:[
  {t:'鼓起勇气，从暗处走出去', go:'e_o_asa'},
  {t:'一直没能走出去，只是目送', go:'e_o_miokuri'}
]},
e_o_asa:{art:'oni_asa', ending:'o_asa', text:'“那、那个！搬宝物，我来帮忙吧。”\n看到从暗处跳出来的阿赤，年轻人瞪圆了眼睛。\n然后，他笑着说：\n“谢谢你。你是个有勇气的鬼。”\n朝阳暖暖地照在他们两个身上。'},
e_o_miokuri:{art:'miokuri', ending:'o_miokuri', text:'上去搭话的勇气，终究没有出来。\n装着宝物的船，在海的那一边越来越小。\n可是，阿赤下定了决心。\n下次再见到的时候，一定要说“谢谢”，也要说“对不起”。\n那个“下次”，在不太远的将来，一定会到来。'},

/* ================= The Pheasant's Tale ================= */

k1:{art:'kiji_yama', text:'这是住在山里的一只雉鸡的，另外一个故事。\n狗力气大。猴子是爬树的高手。\n和它们比起来，自己又小，又没有力气……\n雉鸡总是有那么一点没有自信。', next:'c_kdark'},
c_kdark:{cutin:{type:'dark', text:'这么小的翅膀，\n是不是什么也做不到呢。'}, then:'k2'},
k2:{art:'kiji_yama', text:'今天也是一个人在天上散步。\n往哪里飞呢？', choices:[
  {t:'往山上飞', go:'k2r', set:{kfly:'yama'}},
  {t:'往海的方向飞', go:'k2r', set:{kfly:'umi'}}
]},
k2r:{art:'kiji_sora', text:f=> f.kfly==='yama'
  ? '从山上往下看，村子像一个玩具盒子。\n烟囱里的烟，一团一团地往上升。'
  : '海上的风很大，翅膀被吹得扑棱扑棱响。\n远处，孤零零地能看见一座黑色的岛。', next:'k3'},
k3:{art:'kiji_gyoretsu', text:'有一天，它看见下面的路上走着一支奇怪的队伍。\n系着头巾的年轻人，还有狗和猴子。\n看上去好像很开心。', choices:[
  {t:'鼓起勇气上去搭话', go:'k4a'},
  {t:'再从天上看一会儿', go:'k4b'}
]},
k4a:{art:'kiji_gyoretsu', text:'雉鸡扑棱扑棱地飞了下来，用尽全力大声说：\n“我、我也想跟你们一起去，可以吗！”', next:'k5'},
k4b:{art:'kiji_gyoretsu', text:'它悄悄从天上跟着走，年轻人发现了它，挥了挥手。\n“天上的朋友，也一起来吧！”', next:'k5'},
k5:{art:'kiji_join', text:'“来，给你一个黍团子。”\n真甜，甜得腮帮子都要掉下来了。\n“那、那么，天上的事就交给我吧！”\n雉鸡用尽全力，大声地说。', next:'c_kjoin'},
c_kjoin:{cutin:{type:'join', chara:'kiji', text:'雉鸡加入了队伍！！'}, then:'k6'},
k6:{art:'fune', text:'在船上，雉鸡发现了一件事。\n能飞过海面的，只有自己。\n这是狗和猴子都做不到的事。', choices:[
  {t:'飞得高高的，看整座岛', go:'k6r', set:{kscout:'high'}},
  {t:'飞得低低的，去大门附近看看', go:'k6r', set:{kscout:'low'}}
]},
k6r:{art:'kiji_scout', text:f=> f.kscout==='high'
  ? '从高高的天上，整座岛的样子都看得清清楚楚。\n大门的后面，还有一条窄窄的石头路。\n“大家，后面有路！”'
  : '它贴着浪尖飞，一直飞到大门前面。\n守门的鬼有几个，铁棒有多大，它都看得清清楚楚。\n“大家，对面的情况我全都摸清了！”', next:'c_kvs'},
c_kvs:{cutin:{type:'vs', faces:['kiji','oyabun'], text:'VS'}, then:'k7'},
k7:{art:'oyabun', text:'和鬼头目的战斗开始了！\n头目的铁棒呼的一声朝狗砸了下去。\n雉鸡的心咚地跳了一下。\n怎么办呢？', choices:[
  {t:'飞过去挡住它的眼睛！', go:'c_kwaza1'},
  {t:'大声告诉大家！', go:'c_kwaza2'}
]},
c_kwaza1:{cutin:{type:'waza', theme:'green', icon:'kiji', se:'tsutsuki', text:'雉鸡的俯冲！！'}, then:'c_knani'},
c_knani:{cutin:{type:'kao', face:'oyabun', text:'什么！？'}, then:'k8a'},
k8a:{art:'maitta', text:'雉鸡什么也顾不上了，一下子飞到了头目的脸前面。\n翅膀扑棱扑棱，把它的眼睛挡住了！\n就在这时候，狗轻巧地闪开了，猴子夺走了铁棒。\n“我、我认输了！”', next:'e_k_hero'},
c_kwaza2:{cutin:{type:'kao', face:'kiji', text:'狗，后面！！'}, then:'k8b'},
k8b:{art:'maitta', text:'像山谷的回声一样大的喊声，响遍了整个战场。\n狗轻巧地躲开了，桃太郎的刀闪出一道光。\n“我、我认输了！”', next:'e_k_voice'},
e_k_hero:{art:'kiji_hero', ending:'k_hero', text:'战斗结束以后，桃太郎说：\n“今天最大的功劳，是雉鸡的。”\n狗和猴子都用力地点了点头。\n小小的胸口里面，一下子热了起来。\n就算个子小，也有做得到的事。\n雉鸡再也不低头了。'},
e_k_voice:{art:'kiji_hero', ending:'k_voice', text:'“要是没有那一声，就危险了。”狗说。\n“天上的瞭望，只有雉鸡做得到。”猴子说。\n雉鸡不好意思了，用翅膀遮住了脸。\n就算个子小，也有做得到的事。\n雉鸡再也不低头了。'}

};

function HOBBY_LINE_ZH(f){
  return {
    sumo:'摔跤练出来的腰劲，在关键的时候派上了用场。',
    run:'赛跑练出来的腿脚，谁也比不过。',
    help:'每天帮忙干活练出来的胳膊，可不是白练的。'
  }[f.hobby] || '';
}

/* ================= Ending Collection (ZH) ================= */
var ZK_ZH = [
  {section:'桃太郎'},
  {id:'a_minna',  n:'凯旋·大家一起',     h:'和同伴们一起进攻的话……'},
  {id:'a_katana', n:'凯旋·刀',           h:'用刀取胜，把宝物带回去的话……'},
  {id:'a_dog',    n:'凯旋·狗',           h:'让狗上阵，把宝物带回去的话……'},
  {id:'a_saru',   n:'凯旋·猴子',         h:'让猴子上阵，把宝物带回去的话……'},
  {id:'a_kiji',   n:'凯旋·雉鸡',         h:'让雉鸡上阵，把宝物带回去的话……'},
  {id:'b_naka',   n:'和鬼和好',          h:'打赢以后，再听听他们的话……'},
  {id:'c_yaku',   n:'谈出来的约定',      h:'一个同伴也不带，再把刀收起来……'},
  {id:'d_kibi',   n:'黍团子的奇迹',      h:'带很多黍团子一个人去，再把刀收起来……'},
  {id:'o_negai',  n:'山葡萄的筐',        h:'在鬼的故事里出声拦住，再选去求人……'},
  {id:'o_hatake', n:'鬼岛上的田',        h:'在鬼的故事里出声拦住，再选开田……'},
  {id:'o_kaesu',  n:'夜里沙滩上的秘密',  h:'不作声跟着去以后，再把宝物送回去……'},
  {id:'o_asa',    n:'朝阳里的约定',      h:'在什么也做不了的那个早上，鼓起勇气……'},
  {id:'o_miokuri',n:'总有一天说出口',    h:'勇气没有出来，只是目送小船……'},
  {id:'k_hero',   n:'小小的英雄',        h:'在雉鸡的故事里，飞过去挡……'},
  {id:'k_voice',  n:'天空的瞭望员',      h:'在雉鸡的故事里，大声喊出来……'}
];

if (typeof module !== 'undefined') module.exports = { SCENES_ZH, ZK_ZH };
