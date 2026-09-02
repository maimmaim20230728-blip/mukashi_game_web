"use strict";
/* 仙鹤报恩 - Simplified Chinese scenario, translated from the Japanese master; structure mirrors story_tsuru_en.js
   Source: the Japanese folk tale type "Crane Wife" (Inada IT153), retold in original wording.
   No published retelling or play (Yuzuru / The Crane Wife) is referenced. No proper names. */
(function(){
  var T;
  if (typeof SCENES_ZH !== 'undefined') {
    T = { SCENES_EN: SCENES_ZH, ZK_EN: ZK_ZH };
  } else {
    T = require('./story_zh.js');
  }

  var TSURU_ZH = {

  /* ================= 仙鹤报恩 ================= */

  ts1:{art:'ts_yuki_wana', text:'这是一只在下雪的日子里被救下的鹤的故事。\n一个冬天的日子，老爷爷带着柴火去镇上卖，走在半路上，\n看见了一只被套子套住的鹤。', next:'tsc_wana'},
  tsc_wana:{cutin:{type:'waza', theme:'gold', text:'解开了套子！！'}, then:'ts2'},

  ts2:{art:'ts_tasukeru', text:f=>{
    var t = '老爷爷解开套子，把鹤放走了。\n鹤大大地扇动翅膀，飞向了下雪的天空。';
    if(f.first) return t;
    return t + '\n去镇上买点什么回家呢？';
  }, choices:[
    {t:'买米', go:'ts2r', set:{tslife:'kome'}},
    {t:'买糖块', go:'ts2r', set:{tslife:'ame'}}
  ]},
  ts2r:{art:'ts_tasukeru', text:f=> f.tslife==='ame'
    ? '老爷爷用卖柴火的钱，买了一小块糖。\n这是给老奶奶的礼物。'
    : '老爷爷用卖柴火的钱，买了一点米。\n是今天晚饭的分量。', next:'ts3'},

  ts3:{art:'ts_yoru_to', text:'那天晚上，雪一直下个不停。\n咚咚。传来了敲门的声音。\n一个穿白色和服的姑娘，站在雪里。\n“我迷路了。请让我住一晚吧。”', next:'tsc_kao_musume'},
  tsc_kao_musume:{cutin:{type:'kao', face:'tsmusume', text:'请让我住一晚'}, then:'ts4'},

  ts4:{art:'ts_irori', text:'老爷爷和老奶奶让姑娘坐在了地炉旁边。\n姑娘很能干，就这样一起过了好些日子。\n“请让我留在这里吧。”\n两位老人渐渐把姑娘当成了自己的女儿。', next:'ts5'},

  ts5:{art:'ts_hata_shoji', text:'有一天，姑娘说：\n“请给我买些线来。我要织布。\n我织布的时候，请不要打开纸拉门。”', next:'tsc_hata1'},
  tsc_hata1:{cutin:{type:'hata', text:'咔嗒咔啦，咔嗒咔啦'}, then:'ts6'},

  ts6:{art:'ts_hata_shoji', text:'3天3夜，屋里一直传来织布机的声音。\n第4天早上，姑娘拿着一块白布走了出来。\n那是像雪一样白、还闪着光的布。', next:'ts7'},

  ts7:{art:'ts_machi', text:'老爷爷把布拿到镇上，卖了个好价钱。\n那个冬天，家里变得暖和了。', next:'tsc_kao_jii'},
  tsc_kao_jii:{cutin:{type:'kao', face:'tsjii', text:'真是太感谢了……'}, then:'ts8'},

  ts8:{art:'ts_nuno', text:'“再织一块吧。”姑娘说。\n又是3天3夜，屋里传来织布机的声音。', next:'tsc_hata2'},
  tsc_hata2:{cutin:{type:'hata', text:'咔嗒咔啦，咔嗒咔啦'}, then:'ts9'},

  ts9:{art:'ts_kaoiro', text:f=>{
    var t = '第2块布，也卖了个好价钱。\n可是，姑娘的脸色比以前更白了。\n“我再织一块。”姑娘说。';
    if(f.first) return t;
    return t + '\n老爷爷怎么办？';
  }, choices:[
    {t:'说“那就拜托你了”', go:'ts10'},
    {t:'说“不用再织了”', go:'tsm1'}
  ]},

  ts10:{art:'ts_hata_shoji', text:'第3块。\n织布机的声音，比以前慢了。', next:'tsc_hata3'},
  tsc_hata3:{cutin:{type:'hata', slow:true, text:'咔嗒……咔啦……'}, then:'ts11'},

  ts11:{art:'ts_nozoku', text:f=>{
    var t = '老奶奶在屋子前面停下了脚步。\n（那孩子，不要紧吧。）\n（线也没有了，她在织什么呢。）';
    if(f.first) return t + '\n老奶奶把纸拉门拉开了一点点。';
    return t + '\n老奶奶怎么办？';
  }, choices:[
    {t:'把纸拉门拉开一点', go:'ts12'},
    {t:'只在外面说一声，然后离开', go:'tsn1'}
  ]},

  ts12:{art:'ts_kage', text:'纸拉门的那一边，有一只鹤。\n它正在用自己的羽毛织布。\n羽毛，已经少了一些。', next:'tsc_kao_baa'},
  tsc_kao_baa:{cutin:{type:'kao', face:'tsbaa', text:'……'}, then:'ts13'},

  ts13:{art:'ts_wakare', text:f=>{
    var t = '那天晚上，姑娘坐到了两位老人面前。\n“我就是在下雪的日子里被救下的那只鹤。\n我真正的样子，已经被看见了。\n我不能再是姑娘的样子了。”';
    if(f.first) return t;
    return t + '\n两位老人怎么办？';
  }, choices:[
    {t:'默默地送她走', go:'ts14'},
    {t:'打开门，抬头看天空', go:'tsd1'}
  ]},

  ts14:{art:'ts_sora', text:'姑娘变回了鹤的样子，飞向了下雪的天空。\n老爷爷和老奶奶，一直一直望着天空。', next:'tsc_hikari'},
  tsc_hikari:{cutin:{type:'hikari', text:'鹤，飞向天空'}, then:'e_ts_seishi'},
  e_ts_seishi:{art:'ts_sora', ending:'ts_seishi', text:'在下雪的日子里被救下的鹤，回到了天空。\n家里留下了2块白布，还有一台织了一半的织布机。\n完。'},

  /* ---- 不用再织了 ---- */
  tsm1:{art:'ts_kaoiro', text:'“不用再织了。有2块布就够了。”\n老爷爷这样说。\n姑娘沉默了一会儿，回答说“好的”。', next:'tsm2'},
  tsm2:{art:'ts_haru', text:'冬天过去，春天来了。\n天上传来了鹤的叫声。\n“我就是在下雪的日子里被救下的那只鹤。同伴在叫我了。”', next:'e_ts_mou'},
  e_ts_mou:{art:'ts_haru', ending:'ts_mou', text:'姑娘变回了鹤的样子，飞到同伴那里去了。\n家里留下了2块白布。\n老爷爷和老奶奶，目送着她飞进春天的天空。\n从此，他们过上了幸福的生活。'},

  /* ---- 没有偷看的冬天 ---- */
  tsn1:{art:'ts_nozoku', text:'“别太勉强自己哦。”\n老奶奶在纸拉门外面说了一声，就离开了那间屋子。\n里面传来一声“好的”。', next:'tsn2'},
  tsn2:{art:'ts_nuno', text:'第3块布织好了。\n那是最漂亮的一块布。\n姑娘的脸色，还是那样白。', next:'tsn3'},
  tsn3:{art:'ts_haru', text:'春天来了，天上传来了鹤的叫声。\n“我就是在下雪的日子里被救下的那只鹤。\n羽毛，已经没有了。同伴在叫我了。”', next:'e_ts_nozokanai'},
  e_ts_nozokanai:{art:'ts_haru', ending:'ts_nozokanai', text:'老爷爷和老奶奶，在门口送走了姑娘。\n就算不去看，分别也一样会来。\n不过，那一次的分别里，没有一件瞒着的事。\n从此，他们过上了幸福的生活。'},

  /* ---- 打开窗子 ---- */
  tsd1:{art:'ts_mado', text:'第二天早上，老爷爷打开了门。\n晴朗的天空里，有一只鹤。\n鹤在房子上面绕了一圈，向远处飞去了。', next:'e_ts_mado'},
  e_ts_mado:{art:'ts_mado', ending:'ts_mado', text:'两位老人挥了挥手。\n鹤有没有回头，谁也不知道。\n不过，它在房子上面绕了一圈这件事，他们一直记着。\n从此，他们过上了幸福的生活。'},

  /* ================= 鹤的故事 ================= */

  tz1:{art:'ts_yuki_wana', text:'这是一只鹤的故事。\n下雪的那天，它被套子套住，动弹不得。\n路过的老爷爷，帮它解开了套子。', next:'tz2'},
  tz2:{art:'ts_yoru_to', text:'鹤想去报答这份恩情。\n变成什么样子去呢？', choices:[
    {t:'穿白色和服的姑娘', go:'tz2r', set:{tzlife:'musume'}},
    {t:'赶路的姑娘', go:'tz2r', set:{tzlife:'tabi'}}
  ]},
  tz2r:{art:'ts_yoru_to', text:f=> f.tzlife==='tabi'
    ? '鹤变成了戴着斗笠、赶路的姑娘的样子，\n在下雪的夜里，敲响了那户人家的门。'
    : '鹤变成了穿白色和服的姑娘的样子，\n在下雪的夜里，敲响了那户人家的门。', next:'tz3'},
  tz3:{art:'tz_hane', text:'要在织布机上织布，就要用自己的羽毛。\n羽毛是有限的。\n鹤一边数着羽毛，一边织。', next:'tzc_1'},
  tzc_1:{cutin:{type:'kao', face:'tstsuru', text:'……只剩这么多了'}, then:'tz4'},
  tz4:{art:'ts_hata_shoji', text:'织第3块布的时候，纸拉门开了一点。\n鹤怎么办？', choices:[
    {t:'继续织下去', go:'tzh1'},
    {t:'停下织布机，看看天空', go:'tzs1'}
  ]},
  tzh1:{art:'tz_hane', text:'鹤一直织到了最后。\n羽毛，少了很多。', next:'e_tz_hane'},
  e_tz_hane:{art:'tz_hane', ending:'tz_hane', text:'因为真正的样子被看见了，鹤离开了那户人家。\n它为什么织到了最后，这个故事里没有写。\n完。'},
  tzs1:{art:'tz_sora_ie', text:'鹤停下织布机，从窗子里看了看天空。\n那是春天的天空。\n那天晚上，鹤离开了那户人家。', next:'e_tz_sora'},
  e_tz_sora:{art:'tz_sora_ie', ending:'tz_sora', text:'从天上看下去，房子小小的，里面亮着一盏灯。\n鹤看了那盏灯好一会儿。\n完。'},

  /* ================= 老奶奶的冬天 ================= */

  tb1:{art:'ts_irori', text:'这是一位老奶奶的故事。\n在下雪的夜里来的那个姑娘，很能干，也很爱笑。\n老奶奶怎么看这个姑娘，都觉得可爱。', next:'tb2'},
  tb2:{art:'ts_hata_shoji', text:'姑娘织布的时候，老奶奶做点什么呢？', choices:[
    {t:'做一碗热汤', go:'tb2r', set:{tblife:'shiru'}},
    {t:'让地炉的火不灭', go:'tb2r', set:{tblife:'hi'}}
  ]},
  tb2r:{art:'ts_irori', text:f=> f.tblife==='hi'
    ? '老奶奶一直往地炉里添柴，不让火灭掉。\n为了让屋子不变冷。'
    : '老奶奶做了热汤，放在纸拉门外面。\n到了早上，碗已经空了。', next:'tb3'},
  tb3:{art:'ts_kaoiro', text:'第2块布之后，姑娘的脸色变白了。\n老奶奶在屋子前面来来回回走了好多次。', next:'tbc_1'},
  tbc_1:{cutin:{type:'kao', face:'tsbaa', text:'说了不要看，可是……'}, then:'tb4'},
  tb4:{art:'ts_nozoku', text:'越是被说不要看，就越想看。\n因为担心，就更是这样。\n老奶奶怎么办？', choices:[
    {t:'打开纸拉门', go:'tbk1'},
    {t:'坐在屋子前面等着', go:'tbh1'}
  ]},
  tbk1:{art:'ts_kage', text:'纸拉门的那一边，有一只鹤。\n老奶奶轻轻地把纸拉门关上了。\n可是，看见了的事，已经收不回来了。', next:'e_tb_kokoro'},
  e_tb_kokoro:{art:'tb_engawa', ending:'tb_kokoro', text:'姑娘变回了鹤，飞走了。\n想看一看的心情，谁都会有。\n说这样不对的人，这个故事里一个也没有。\n完。'},
  tbh1:{art:'tb_hata_nokori', text:'老奶奶坐在屋子前面，听着织布机的声音。\n咔嗒咔啦。咔嗒咔啦。\n就这样一直坐到了春天。', next:'e_tb_hata'},
  e_tb_hata:{art:'tb_hata_nokori', ending:'tb_hata', text:'春天姑娘走了以后，屋子里留下了织布机。\n老奶奶让织布机就那样放着，每天都把屋子打开。\n从此，他们过上了幸福的生活。'}

  };

  Object.assign(T.SCENES_EN, TSURU_ZH);

  T.ZK_EN.push(
    {section:'仙鹤报恩', note:'在日本的民间故事里，有很多这样的故事：真正的样子被人看见以后，那个人就离开了。鹤、蛇、黄莺。这些都不是讲惩罚的故事。'},
    {id:'ts_seishi',    n:'雪天的鹤',           h:'第一次游玩时看到的原本的故事'},
    {id:'ts_mou',       n:'不用再织了',         h:'在第3块布之前，老爷爷说了什么的话……'},
    {id:'ts_nozokanai', n:'没有偷看的冬天',     h:'老奶奶只在外面说一声就离开的话……'},
    {id:'ts_mado',      n:'打开窗子',           h:'在分别的那晚打开门，抬头看天空的话……'},
    {id:'tz_hane',      n:'羽毛的数目',         h:'在鹤的故事里，一直织到最后的话……'},
    {id:'tz_sora',      n:'从天上看到的家',     h:'在鹤的故事里，停下织布机去看天空的话……'},
    {id:'tb_kokoro',    n:'想看一看的心情',     h:'在老奶奶的故事里，打开纸拉门的话……'},
    {id:'tb_hata',      n:'织了一半的织布机',   h:'在老奶奶的故事里，在屋子前面等着的话……'}
  );

})();
