"use strict";
/* 北风和太阳 - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_kitakaze_en.js.
   Source: Aesop, Perry 46, from the Greek text (PD). Chinese wording is original;
   no existing Chinese translation was copied. The traveler is never given a gender. */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var KITAKAZE_ZH = {

  /* ================= 北风和太阳 ================= */

  kz1:{art:'kz_sora', text:'这是北风和太阳的故事。\n有一天，在天空的上面，北风和太阳争论了起来。\n“我比较强。”“不，是我。”', next:'kzc_vs'},
  kzc_vs:{cutin:{type:'vs', faces:['kitakaze','taiyou'], text:'谁更强？'}, then:'kz2'},

  kz2:{art:'kz_asa', text:f=>{
    var t = '那天早上，一个旅人离开村子，沿着路走了起来。\n身上穿着外衣，肩上挂着袋子。';
    if(f.first) return t;
    return t + '\n袋子里要带什么呢？';
  }, choices:[
    {t:'水瓶', go:'kz2r', set:{kzlife:'mizu'}},
    {t:'面包和苹果', go:'kz2r', set:{kzlife:'pan'}}
  ]},
  kz2r:{art:'kz_asa', text:f=> f.kzlife==='pan'
    ? '袋子里装着面包、苹果，还有一件外衣。\n看样子是一段很长的路。'
    : '袋子里装着水瓶，还有一件外衣。\n看样子是一段很长的路。', next:'kz3'},

  kz3:{art:'kz_sora', text:f=>{
    var t = '北风和太阳看见了那个旅人。\n“谁能让那个旅人脱下外衣，就算谁更强。”';
    if(f.first) return t + '\n先轮到北风。';
    return t + '\n怎么办呢？';
  }, choices:[
    {t:'比一比。先轮到北风', go:'kz4'},
    {t:'不比了，一起试试看', go:'kzf1'}
  ]},

  kz4:{art:'kz_kaze1', text:'北风一开始就用力吹。\n呼！\n旅人按住了外衣的领子。', next:'kzc_fuu1'},
  kzc_fuu1:{cutin:{type:'fuu', still:true, text:'呼！！'}, then:'kz5'},

  kz5:{art:'kz_kaze2', text:'北风吹得更用力了。\n呼呼！\n旅人用双手紧紧按住外衣。\n“好冷。再穿一件吧。”\n旅人从袋子里拿出另一件，套在外面穿上了。', next:'kzc_fuu2'},
  kzc_fuu2:{cutin:{type:'fuu', debris:'ha', text:'呼呼！！'}, then:'kzc_kao_tabi'},
  kzc_kao_tabi:{cutin:{type:'kao', face:'tabibito', text:'好冷……'}, then:'kz6'},

  kz6:{art:'kz_kaze3', text:'北风使出全部的力气吹。\n树叶飞了起来，路上的沙子也扬了起来。\n可是旅人还是没有松开外衣。', next:'kzc_fuu3'},
  kzc_fuu3:{cutin:{type:'fuu', debris:'ha', text:'呼呼呼呼！！'}, then:'kz7'},

  kz7:{art:'kz_sora', text:f=>{
    var t = '北风累了。';
    if(f.first) return t + '\n“太阳，接下来交给你了。”\n北风把旅人交给了太阳。';
    return t + '\n北风怎么办呢？';
  }, choices:[
    {t:'“太阳，接下来交给你了”', go:'kzc_kao_kk'},
    {t:'去把云叫来', go:'kzu1'}
  ]},
  kzc_kao_kk:{cutin:{type:'kao', face:'kitakaze', text:'接下来交给你了'}, then:'kz8'},

  kz8:{art:'kz_hinata1', text:'太阳一开始只是不轻不重地照着。\n暖洋洋。\n旅人脱下套在外面的那件外衣，收进了袋子里。', next:'kzc_poka1'},
  kzc_poka1:{cutin:{type:'poka', text:'暖洋洋……'}, then:'kz9'},

  kz9:{art:'kz_hinata2', text:f=>{
    var t = '太阳照得更强了。\n明晃晃。\n旅人开始出汗了。';
    if(f.first) return t;
    return t + '\n旅人怎么办呢？';
  }, choices:[
    {t:'就这样继续走', go:'kzc_poka2'},
    {t:'走进树荫里', go:'kzk1'}
  ]},
  kzc_poka2:{cutin:{type:'poka', strong:true, text:'明晃晃！！'}, then:'kz10'},

  kz10:{art:'kz_hinata2', text:'太阳照得越来越强了。\n“好热。热得受不了了。”\n旅人把外衣全脱了下来，搭在肩上。', next:'kz11'},

  kz11:{art:'kz_kawa', text:'路边有一条河在流。\n旅人把外衣放在岸边，跳进了河里。', next:'kzc_zabun'},
  kzc_zabun:{cutin:{type:'waza', theme:'gold', text:'扑通！！'}, then:'kz12'},

  kz12:{art:'kz_kawa', text:'旅人洗了个澡，看上去很舒服。\n在天空的上面，北风和太阳看着这一切。', next:'e_kz_seishi'},
  e_kz_seishi:{art:'kz_sora', ending:'kz_seishi', text:'旅人不知道有过一场比试。\n外衣在岸边晾干后，旅人又接着往前走了。\n完。'},

  /* ---- 两个人的晒衣天 ---- */
  kzf1:{art:'kz_sentaku', text:'“别比了，我们一起来试试吧。”\n北风吹着，太阳照着。\n村里晾的衣服，中午之前就全干了。', next:'kzf2'},
  kzf2:{art:'kz_sentaku', text:'旅人穿着外衣，走得很舒服。\n风是凉的，阳光是暖的。', next:'e_kz_futari'},
  e_kz_futari:{art:'kz_sentaku', ending:'kz_futari', text:'村里的人把那一天叫作“晒衣服的好天气”。\n谁更强，谁也没有定下来。\n从此，他们过上了幸福的生活。'},

  /* ---- 在树荫里歇一歇 ---- */
  kzk1:{art:'kz_kokage', text:'旅人走进一棵大树的树荫里，坐了下来。\n外衣还穿在身上。\n喝口水，歇一歇。', next:'kzk2'},
  kzk2:{art:'kz_kokage', text:'太阳偏西了，天凉了下来。\n旅人穿着外衣，又走了起来。', next:'e_kz_kokage'},
  e_kz_kokage:{art:'kz_kokage', ending:'kz_kokage', text:'在天空的上面，北风和太阳互相看了看。\n比试没有分出结果。\n完。'},

  /* ---- 云来了 ---- */
  kzu1:{art:'kz_kumo', text:'北风把云叫了过来。\n天空暗了下来，下起了雨。\n旅人在树下躲雨。', next:'kzu2'},
  kzu2:{art:'kz_kumo', text:'雨停了，旅人又走了起来。\n外衣还穿在身上。', next:'e_kz_kumo'},
  e_kz_kumo:{art:'kz_kumo', ending:'kz_kumo', text:'“今天就到这里吧。”太阳说。\n“下次再来。”北风说。\n完。'},

  /* ================= 北风的故事 ================= */

  kk1:{art:'kz_sora', text:'这是北风的故事。\n北风是从北边的海上吹过来的。\n用力地吹，就是北风的工作。', next:'kk2'},
  kk2:{art:'kk_umi', text:'今天去哪里吹呢？', choices:[
    {t:'去海上', go:'kk2r', set:{kklife:'umi'}},
    {t:'去原野', go:'kk2r', set:{kklife:'nohara'}}
  ]},
  kk2r:{art:'kk_umi', text:f=> f.kklife==='nohara'
    ? '北风朝原野吹了一下。\n草一齐朝着同一个方向倒了过去。'
    : '北风朝海面吹了一下。\n白色的浪一齐立了起来。', next:'kk3'},
  kk3:{art:'kz_kaze1', text:'让旅人脱下外衣的那场比试，没有成功。\n北风有些累了，在天空很高的地方歇着。', next:'kkc_1'},
  kkc_1:{cutin:{type:'kao', face:'kitakaze', text:'吹风明明是我最拿手的'}, then:'kk4'},
  kk4:{art:'kz_sora', text:'从天空往下看，可以看见各种各样的东西。\n北风去哪里呢？', choices:[
    {t:'去港口的船那里', go:'kkh1'},
    {t:'去原野的花那里', go:'kkt1'}
  ]},
  kkh1:{art:'kk_umi', text:'港口里有一条动不了的船。\n因为没有风，船帆垂着。\n北风朝着船帆，轻轻地吹了一下。', next:'e_kk_ho'},
  e_kk_ho:{art:'kk_umi', ending:'kk_ho', text:'船帆鼓了起来，船开向了大海。\n船员们朝着天空挥了挥手。\n从此，他们过上了幸福的生活。'},
  kkt1:{art:'kk_nohara', text:'原野上的花已经结了种子。\n北风托起种子，把它们送到了很远的地方。', next:'e_kk_tane'},
  e_kk_tane:{art:'kk_nohara', ending:'kk_tane', text:'第二年春天，远处的山冈上开出了同样的花。\n那是北风送去的种子。\n从此，他们过上了幸福的生活。'},

  /* ================= 太阳的故事 ================= */

  kh1:{art:'kz_sora', text:'这是太阳的故事。\n太阳早上从东边升起，傍晚在西边落下。\n照亮大地，就是太阳的工作。', next:'kh2'},
  kh2:{art:'kz_hinata1', text:'今天早上先照哪里呢？', choices:[
    {t:'田地', go:'kh2r', set:{khlife:'hatake'}},
    {t:'村里的屋顶', go:'kh2r', set:{khlife:'yane'}}
  ]},
  kh2r:{art:'kz_hinata1', text:f=> f.khlife==='yane'
    ? '太阳照着村里的屋顶。\n屋顶上的猫伸了个懒腰。'
    : '太阳照着田地。\n露水闪闪发亮，嫩芽长高了。', next:'kh3'},
  kh3:{art:'kz_hinata2', text:'比试旅人的那一天，太阳照得比平时更强。\n旅人跳进了河里，可是田里的土干得裂开了。', next:'khc_1'},
  khc_1:{cutin:{type:'kao', face:'taiyou', text:'也许是照得太过了'}, then:'kh4'},
  kh4:{art:'kh_kumo', text:'太阳怎么办呢？', choices:[
    {t:'拜托云来遮点荫', go:'khk1'},
    {t:'一直照到落下去', go:'khy1'}
  ]},
  khk1:{art:'kh_kumo', text:'太阳拜托了一朵路过的云。\n“能不能在田地上面，遮出一点荫来？”\n云在田地上面停了下来。', next:'e_kh_kumo'},
  e_kh_kumo:{art:'kh_kumo', ending:'kh_kumo', text:'田地在荫下喘了口气。\n太阳也有做不到的事。\n拜托了云的那一天，太阳一直没有忘记。\n从此，他们过上了幸福的生活。'},
  khy1:{art:'kh_yuuhi', text:'太阳一直照到落在西边的山后面。\n能看见旅人的背影翻过远处的山冈。', next:'e_kh_yuuhi'},
  e_kh_yuuhi:{art:'kh_yuuhi', ending:'kh_yuuhi', text:'旅人是穿上了外衣还是脱了下来，太阳已经看不见了。\n明天，太阳还会升起来。\n完。'}

  };

  Object.assign(T.SCENES_EN, KITAKAZE_ZH);

  T.ZK_EN.push(
    {section:'北风和太阳', note:'在古老的希腊文本里，这个故事以旅人在河里洗澡结束。谁赢了，书上并没有写。“在很多时候，说服比力量更管用”这句话，是后来才添上去的。读法不止一种。'},
    {id:'kz_seishi', n:'在河里洗澡',        h:'第一次游玩时流传下来的故事'},
    {id:'kz_kokage', n:'在树荫里歇一歇',    h:'轮到太阳时，走进树荫……'},
    {id:'kz_futari', n:'两个人的晒衣天',    h:'不再比高低，一起来做……'},
    {id:'kz_kumo',   n:'云来了',            h:'北风把云叫来的话……'},
    {id:'kk_ho',     n:'让船帆鼓起来',      h:'在北风的故事里去港口……'},
    {id:'kk_tane',   n:'送种子',            h:'在北风的故事里去原野……'},
    {id:'kh_kumo',   n:'拜托云',            h:'在太阳的故事里拜托云……'},
    {id:'kh_yuuhi',  n:'直到落下',          h:'在太阳的故事里一直照到落下……'}
  );

})();
