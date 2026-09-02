"use strict";
/* How the Twelve Animals Were Chosen - Modern Standard Arabic scenario, translated from the Japanese master;
   structure mirrors story_junishi_en.js.
   Style: simple, clear Modern Standard Arabic for readers 13+, matching story_ar.js.
   The page renders right-to-left, so the text carries no direction marks.
   Section comments are kept in English so the code stays readable in a mixed-direction file.
   Source: an anonymous folk tale (from China, told across Japan). Original wording; no published
   retelling (The Great Race / Cat and Rat etc.) is referenced. */
(function(){
  var T;
  if (typeof SCENES_AR !== 'undefined') {
    T = { SCENES_EN: SCENES_AR, ZK_EN: ZK_AR };
  } else {
    T = require('./story_ar.js');
  }

  var N12 = ['الفأر','الثور','النمر','الأرنب','التنين','الأفعى','الحصان','الخروف','القرد','الديك','الكلب','الخنزير'];

  var JUNISHI_AR = {

  /* ================= How the Twelve Animals Were Chosen ================= */

  ju1:{art:'ju_ofure', text:'هذه حكاية اثني عشر حيوانا صارت أسماؤها أسماء للسنوات.\nفي أواخر إحدى السنوات، أصدر الإله إعلانا.\n"في صباح رأس السنة، تعالوا إلى القصر. وأول اثني عشر يصلون، بحسب ترتيب وصولهم، تصير أسماؤهم أسماء للسنوات."', next:'ju2'},

  ju2:{art:'ju_ofure', text:f=>{
    var t = 'بدأت الحيوانات تستعد، كل واحد منها على طريقته.';
    if(f.first) return t;
    return t + '\nكيف تستعد؟';
  }, choices:[
    {t:'التدرب على الجري', go:'ju2r', set:{julife:'hashiru'}},
    {t:'إعداد وليمة والانتظار', go:'ju2r', set:{julife:'gochisou'}}
  ]},
  ju2r:{art:'ju_ofure', text:f=> f.julife==='gochisou'
    ? 'دق الخروف كعك الأرز، وجمع القرد ثمار الكستناء.\nوفي صباح رأس السنة سيأكلون منها جميعا.'
    : 'ركض النمر والحصان في الحقول مرة بعد مرة.\nوالأرنب يتدرب على القفز، قفزة بعد قفزة.', next:'ju3'},

  ju3:{art:'ju_nezuneko', text:f=>{
    var t = 'لم تسمع القطة يوم الإعلان.\n"قل لي يا فأر، متى نذهب إلى القصر؟"';
    if(f.first) return t + '\n"في صباح الثاني من يناير."\nهكذا أجاب الفأر.';
    return t + '\nبماذا يجيب الفأر؟';
  }, choices:[
    {t:'"في صباح الثاني من يناير"', go:'ju4'},
    {t:'"في صباح الأول من يناير"', go:'juu1'}
  ]},

  ju4:{art:'ju_ushi_yoru', text:'ليلة رأس السنة.\n"أنا بطيء الخطى، فلأنطلق من الآن."\nوبدأ الثور يمشي على الدرب المغطى بالثلج والظلام ما زال مخيما.', next:'juc_kao_ushi'},
  juc_kao_ushi:{cutin:{type:'kao', face:'jushi', text:'لنمش على مهل'}, then:'juc_shuppatsu'},
  juc_shuppatsu:{cutin:{type:'waza', theme:'gold', text:'الانطلاق مع أول المساء!!'}, then:'ju5'},

  ju5:{art:'ju_senaka', text:f=>{
    var t = 'وعلى ظهره قفز الفأر قفزة خفيفة.\nولم ينتبه الثور إلى ذلك.\nوعلى الدرب الثلجي، ببطء، ببطء شديد.';
    if(f.first) return t;
    return t + '\nماذا فعل الفأر في طريق الليل؟';
  }, choices:[
    {t:'النوم على الظهر', go:'ju5r', set:{jumichi:'nemuru'}},
    {t:'عد النجوم', go:'ju5r', set:{jumichi:'hoshi'}}
  ]},
  ju5r:{art:'ju_senaka', text:f=> f.jumichi==='hoshi'
    ? 'كانت سماء الليل فوق الثلج مليئة بالنجوم.\nوراح الفأر يعدها، واحدة، اثنتين، وينتظر الصباح.'
    : 'كان ظهر الثور دافئا، فنام الفأر دون أن يشعر.\nولم يبق على الدرب الثلجي إلا وقع خطوات الثور.', next:'ju6'},

  ju6:{art:'ju_mon', text:f=>{
    var t = 'وجاء الصباح.\nوصارت بوابة القصر أمام أعينهما.\nوظن الثور أنه وصل قبل الجميع.';
    if(f.first) return t;
    return t + '\nماذا يفعل الفأر؟';
  }, choices:[
    {t:'القفز إلى الأسفل والدخول أولا', go:'juc_tobiori'},
    {t:'البقاء على الظهر والدخول مع الثور', go:'jua1'}
  ]},
  juc_tobiori:{cutin:{type:'waza', theme:'orange', se:'tobiori', text:'قفز إلى الأسفل!!'}, then:'ju7'},

  ju7:{art:'ju_tobiori', text:'في تلك اللحظة قفز الفأر عن الظهر،\nودخل من البوابة قبل الثور.\nوسمع صوت الإله: "السنة الأولى هي الفأر."', next:'juc_n1'},
  juc_n1:{cutin:{type:'namae', list:N12.slice(0,1), text:'الفأر'}, then:'ju8'},

  ju8:{art:'ju_mon', text:'ثم عبر الثور البوابة.\n"والسنة التالية هي الثور."', next:'juc_n2'},
  juc_n2:{cutin:{type:'namae', list:N12.slice(0,2), text:'الفأر، الثور'}, then:'ju9'},

  ju9:{art:'ju_kake', text:'وجاء النمر راكضا.\nثم قفز الأرنب قفزة واحدة وعبر البوابة.', next:'ju10'},

  ju10:{art:'ju_tatsu_hebi', text:'ووصل التنين والأفعى إلى البوابة في اللحظة نفسها.\n"تفضل أنت أولا"، قالت الأفعى.\nفدخل التنين أولا، ودخلت الأفعى بعده.', next:'juc_n3'},
  juc_n3:{cutin:{type:'namae', list:N12.slice(0,6), text:'النمر، الأرنب، التنين، الأفعى'}, then:'ju11'},

  ju11:{art:'ju_uma_hitsuji', text:'وجاء الحصان يعدو، وتبعه الخروف.', next:'ju12'},

  ju12:{art:'ju_saru_inu_tori', text:'ودخل القرد والكلب في مشادة على الطريق، فلم يكادا يتقدمان.\nفدخل الديك بينهما.', next:'juc_kao_tori'},
  juc_kao_tori:{cutin:{type:'kao', face:'jutori', text:'إلى القصر أولا!'}, then:'ju12b'},
  ju12b:{art:'ju_saru_inu_tori', text:'وبإلحاح من الديك، توقف القرد والكلب عن المشادة.\nوعبروا البوابة بهذا الترتيب: القرد، ثم الديك، ثم الكلب.', next:'juc_n4'},
  juc_n4:{cutin:{type:'namae', list:N12.slice(0,11), text:'الحصان، الخروف، القرد، الديك، الكلب'}, then:'ju13'},

  ju13:{art:'ju_inoshishi', text:'وأخيرا جاء الخنزير البري.\nوهو لا يستطيع أن يجري إلا في خط مستقيم،\nفتجاوز البوابة ثم عاد إليها.', next:'juc_inoshishi'},
  juc_inoshishi:{cutin:{type:'waza', theme:'brown', text:'إلى الأمام مباشرة أيها الخنزير البري!!'}, then:'ju14'},

  ju14:{art:'ju_seizoroi', text:'والثاني عشر هو الخنزير.\nوبذلك تمت أسماء السنوات، اثنا عشر اسما.', next:'juc_n12'},
  juc_n12:{cutin:{type:'namae', list:N12, long:true, text:'الأسماء الاثنا عشر!!'}, then:'ju15'},

  ju15:{art:'ju_seizoroi', text:'وقال الإله للحيوانات الاثني عشر:\n"من الآن فصاعدا، أعطوا السنة اسمكم، سنة بعد سنة وبالترتيب."', next:'ju16'},

  ju16:{art:'ju_neko_asa', text:'وفي صباح اليوم التالي.\nجاءت القطة إلى بوابة القصر.\nكانت البوابة مغلقة.', next:'juc_kao_neko'},
  juc_kao_neko:{cutin:{type:'kao', face:'jneko', text:'...ماذا؟'}, then:'ju17'},

  ju17:{art:'ju_neko_asa', text:f=>{
    var t = 'وسمع صوت الإله.\n"يوم المجيء إلى القصر كان أمس. اغسلي وجهك وعودي في مرة أخرى."';
    if(f.first) return t;
    return t + '\nماذا تفعل القطة؟';
  }, choices:[
    {t:'غسل الوجه والعودة إلى البيت', go:'ju18'},
    {t:'غسل الوجه والذهاب إلى البوابة مرة أخرى', go:'jub1'}
  ]},

  ju18:{art:'ju_neko_kao', text:'غسلت القطة وجهها.\nومنذ ذلك الحين، كلما رأت فأرا جرت خلفه.', next:'e_ju_seishi'},

  e_ju_seishi:{art:'ju_seizoroi', ending:'ju_seishi', text:'الفأر، الثور، النمر، الأرنب، التنين، الأفعى، الحصان، الخروف، القرد، الديك، الكلب، الخنزير.\nوسنة بعد سنة وبالترتيب، أعطت الحيوانات الاثنا عشر السنة اسمها.\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- On the ox's back ---- */
  jua1:{art:'ju_mon', text:'لم يقفز الفأر إلى الأسفل.\nبقي على ظهر الثور، وعبرا البوابة معا.\n"اثنان في وقت واحد إذن"، قال صوت الإله.', next:'jua2'},
  jua2:{art:'ju_mon', text:'"ليكن الثور أولا"، قال الفأر.\n"بل ليكن الفأر أولا"، قال الثور.\nفضحك الإله.\n"إذن السنة الأولى هي الفأر، والتالية هي الثور.\nوفي المقابل، ليساعد كل منكما الآخر في سنته."', next:'e_ju_ushi'},
  e_ju_ushi:{art:'ju_seizoroi', ending:'ju_ushi', text:'ومنذ ذلك الحين، في سنة الفأر يساعد الثور، وفي سنة الثور يساعد الفأر،\nكل منهما الآخر في عمله.\nلم يتغير الترتيب. لكنه كان صباحا واحدا لاثنين.\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- A greeting every year ---- */
  jub1:{art:'ju_neko_kao', text:'غسلت القطة وجهها وذهبت إلى البوابة مرة أخرى.\n"لقد غسلت وجهي."', next:'jub2'},
  jub2:{art:'ju_maitoshi', text:'وسمع صوت الإله.\n"أسماء السنوات اثنا عشر فقط، لا أكثر.\nلكن تعالي في كل يوم رأس سنة لتلقي التحية."', next:'e_ju_kao'},
  e_ju_kao:{art:'ju_maitoshi', ending:'ju_kao', text:'ومنذ ذلك الحين، تذهب القطة في صباح كل رأس سنة إلى القصر لتلقي التحية.\nهي لا تصير اسما لسنة.\nلكن بوابة القصر تفتح من أجل القطة.\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- In the land across the sea ---- */
  juu1:{art:'ju_nezuneko', text:'"في صباح الأول من يناير."\nقالت القطة "شكرا لك"، ونامت تلك الليلة مبكرا.', next:'juu2'},
  juu2:{art:'ju_kake', text:'صباح رأس السنة.\nالفأر على ظهر الثور، والثور على مهل، والنمر بكل قوته.\nوأمام البوابة وصل الأرنب والقطة في اللحظة نفسها.', next:'juc_kao_neko2'},
  juc_kao_neko2:{cutin:{type:'kao', face:'jneko', text:'في اللحظة نفسها؟!'}, then:'juu3'},
  juu3:{art:'ju_umi', text:'فكر الإله قليلا ثم قال:\n"هنا تكون هذه السنة للأرنب.\nوفي البلاد التي خلف البحر، تكون هذه السنة للقطة."', next:'e_ju_umi'},
  e_ju_umi:{art:'ju_umi', ending:'ju_umi', text:'ولذلك ما زالت هناك، في البلاد التي خلف البحر،\nأماكن تكون فيها القطة اسما لسنة.\nهي الحكاية نفسها، لكن الأسماء تختلف باختلاف البلاد.\nوعاشوا في سعادة إلى الأبد.'},

  /* ================= The Cat's Tale ================= */

  jn1:{art:'jneko_hinata', text:'هذه حكاية قطة واحدة.\nسمعت أن هناك إعلانا من الإله، لكنها لم تسمع اليوم المحدد.', next:'jn2'},
  jn2:{art:'ju_nezuneko', text:'من تسأل يا ترى؟', choices:[
    {t:'سؤال الفأر', go:'jn2r', set:{jnlife:'nezumi'}},
    {t:'سؤال الكلب', go:'jn2r', set:{jnlife:'inu'}}
  ]},
  jn2r:{art:'ju_nezuneko', text:f=> f.jnlife==='inu'
    ? '"في يناير... اليوم الأول، على ما أظن. الفأر يعرف أكثر مني"، قال الكلب.\nفسألت القطة الفأر.\n"في صباح الثاني من يناير"، أجاب الفأر.'
    : '"في صباح الثاني من يناير"، أجاب الفأر.\nوقالت القطة "شكرا لك".', next:'jn3'},
  jn3:{art:'ju_neko_asa', text:'صباح الثاني من يناير.\nذهبت القطة إلى بوابة القصر.\nكانت البوابة مغلقة.', next:'jnc_1'},
  jnc_1:{cutin:{type:'kao', face:'jneko', text:'...أمس؟'}, then:'jn4'},
  jn4:{art:'ju_neko_kao', text:'"يوم المجيء إلى القصر كان أمس. اغسلي وجهك وعودي في مرة أخرى."\nهكذا سمع صوت الإله.\nماذا تفعل القطة؟', choices:[
    {t:'غسل الوجه والعودة إلى البيت', go:'jna1'},
    {t:'التكور في مكان مشمس', go:'jnh1'}
  ]},
  jna1:{art:'ju_neko_kao', text:'غسلت القطة وجهها.\nكان الماء باردا.', next:'e_jn_asa'},
  e_jn_asa:{art:'jneko_hinata', ending:'jn_asa', text:'أما ما فكرت فيه القطة بعد أن غسلت وجهها،\nفليس مكتوبا في هذه الحكاية.\nغسلت القطة وجهها. هذا كل شيء.\nالنهاية.'},
  jnh1:{art:'jneko_hinata', text:'ذهبت القطة إلى مكان مشمس.\nتكورت وأغمضت عينيها.', next:'e_jn_hinata'},
  e_jn_hinata:{art:'jneko_hinata', ending:'jn_hinata', text:'هناك قطط تجري خلف الفئران، وهناك قطط تنام في الشمس.\nأما ما تفكر فيه هذه القطة الآن، فلا تعرفه إلا هي.\nالنهاية.'},

  /* ================= The Rat's Tale ================= */

  jz1:{art:'jnezumi_ana', text:'هذه حكاية فأر واحد.\nلما سمع الفأر إعلان الإله، أخذ يفكر.\n(بقدمي هاتين، مهما جريت فلن ألحق بالآخرين.)', next:'jz2'},
  jz2:{art:'jnezumi_ana', text:'في الليل، داخل الجحر، ماذا يفعل؟', choices:[
    {t:'التفكير في الطريق إلى القصر', go:'jz2r', set:{jzlife:'michi'}},
    {t:'النوم مبكرا والاستعداد للصباح', go:'jz2r', set:{jzlife:'neru'}}
  ]},
  jz2r:{art:'jnezumi_ana', text:f=> f.jzlife==='neru'
    ? 'دس الفأر نفسه في القش ونام مبكرا.\nوحتى في حلمه كان يرى بوابة القصر.'
    : 'تتبع الفأر في رأسه الطريق إلى القصر مرة بعد مرة.\nإنه طريق بعيد. أحتاج إلى ظهر أحدهم، هكذا فكر.', next:'jz3'},
  jz3:{art:'ju_nezuneko', text:'"متى نذهب إلى القصر؟"، سألت القطة.\nفأجاب الفأر: "في صباح الثاني من يناير."', next:'jzc_1'},
  jzc_1:{cutin:{type:'kao', face:'jnezumi', text:'......'}, then:'jz4'},
  jz4:{art:'ju_senaka', text:'في ليلة رأس السنة، قفز الفأر على ظهر الثور.\nولم ينتبه الثور إلى ذلك.\nماذا يفعل الفأر؟', choices:[
    {t:'الركوب في صمت', go:'jzu1'},
    {t:'مخاطبة الثور', go:'jzs1'}
  ]},
  jzu1:{art:'ju_tobiori', text:'في الصباح، أمام البوابة، قفز الفأر إلى الأسفل.\nوكانت السنة الأولى هي الفأر.', next:'e_jz_uso'},
  e_jz_uso:{art:'jnezumi_ana', ending:'jz_uso', text:'لم يقل الفأر للقطة اليوم الحقيقي.\nأما السبب، فلا يعرفه إلا الفأر.\nوصار الفأر اسما للسنة الأولى.\nالنهاية.'},
  jzs1:{art:'ju_senaka', text:'"شكرا لك أيها الثور على حملي."\nالتفت الثور مندهشا.\n"آه، أنت أيها الفأر. لست ثقيلا، فابق على ظهري كما أنت."', next:'jzs2'},
  jzs2:{art:'ju_mon', text:'وأمام البوابة قال الثور:\n"أسرع واذهب لتنال اسمك."\nفقفز الفأر إلى الأسفل وعبر البوابة.', next:'e_jz_senaka'},
  e_jz_senaka:{art:'ju_seizoroi', ending:'jz_senaka', text:'السنة الأولى هي الفأر. والتالية هي الثور.\nولم ينس الفأر أبدا الثور الذي أعاره ظهره.\nوعاشوا في سعادة إلى الأبد.'}

  };

  Object.assign(T.SCENES_EN, JUNISHI_AR);

  T.ZK_EN.push(
    {section:'كيف اختيرت الحيوانات الاثنا عشر', note:'في بعض البلاد التي خلف البحر، تكون القطة واحدة من الاثني عشر. وفي اليابان تروى أيضا حكايات تلاعب بالألفاظ عن حيوان ثالث عشر، مثل ابن عرس أو ضفدع.'},
    {id:'ju_seishi',  n:'الأسماء الاثنا عشر',      h:'الحكاية كما تروى، من المرة الأولى'},
    {id:'ju_ushi',    n:'على ظهر الثور',           h:'إذا بقيت على الظهر أمام البوابة بدل أن تقفز...'},
    {id:'ju_kao',     n:'تحية كل سنة',             h:'إذا غسلت وجهك وذهبت إلى البوابة مرة أخرى...'},
    {id:'ju_umi',     n:'خلف البحر',               h:'إذا قال الفأر اليوم الحقيقي...'},
    {id:'jn_asa',     n:'صباح اليوم التالي',       h:'في حكاية القطة، غسل الوجه والعودة إلى البيت...'},
    {id:'jn_hinata',  n:'القطة في الشمس',          h:'في حكاية القطة، التكور في مكان مشمس...'},
    {id:'jz_uso',     n:'يوم الكذبة',              h:'في حكاية الفأر، الركوب في صمت...'},
    {id:'jz_senaka',  n:'يوم الظهر المستعار',      h:'في حكاية الفأر، مخاطبة الثور...'}
  );

})();
