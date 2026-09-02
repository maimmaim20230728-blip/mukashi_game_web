"use strict";
/* اللفتة الكبيرة - Modern Standard Arabic scenario, translated from the Japanese master; structure mirrors story_kabu_en.js
   Refrains: "هيّا شدّ، هيّا شدّ!!" / "هوب! خرجت!!" */
(function(){
  var T;
  if (typeof SCENES_AR !== 'undefined') {
    T = { SCENES_EN: SCENES_AR, ZK_EN: ZK_AR };
  } else {
    T = require('./story_ar.js');
  }

  /* الأسماء + علامة التأنيث (الفعل الماضي يأخذ التاء مع المؤنث) */
  var NAMES_AR = { baa:'الجدة', mago:'الحفيدة', inu:'الكلب', neko:'القطة', nezumi:'الفأر', jii:'الجد' };
  var FEM_AR   = { baa:1, mago:1, neko:1 };
  function vb(k, stem){ return stem + (FEM_AR[k] ? 'ت' : ''); }

  function chainAr(f){
    var order = [];
    if(f.nezumi) order.push('nezumi');
    if(f.c5) order.push(f.c5);
    if(f.c4) order.push(f.c4);
    if(f.c3) order.push(f.c3);
    if(f.c2) order.push(f.c2);
    order.push('jii');
    if(order.length === 1) return 'أمسك الجد باللفتة.';
    var t = '';
    for(var i = 0; i < order.length - 1; i++){
      t += vb(order[i],'أمسك') + ' ' + NAMES_AR[order[i]] + ' ب' + NAMES_AR[order[i+1]] + '،\n';
    }
    t += 'وأمسك الجد باللفتة بقوة.';
    return t;
  }

  var KABU_AR = {

  /* ================= اللفتة الكبيرة ================= */

  kb1:{art:'kabu_hata', text:'هذه حكاية حقل واسع واسع.\nفي صباح ربيعي، بذر الجد بذرة لفت.\n"كوني لفتة حلوة حلوة. كوني لفتة كبيرة كبيرة."', next:'kb2'},

  kb2:{art:'kabu_hata', text:'وبدأت عناية الجد بها كل يوم.\nبأي شيء يهتم أكثر من غيره؟', choices:[
    {t:'سقيها بماء وفير كل يوم', go:'kb2r', set:{care:'mizu'}},
    {t:'التحدث إليها بلطف كل يوم', go:'kb2r', set:{care:'hanashi'}}
  ]},
  kb2r:{art:'kabu_hata', text:f=> f.care==='hanashi'
    ? '"اكبري، اكبري."\nكلما تحدث إليها، بدا أن الأوراق تتمايل فرحة.'
    : 'مع ضوء الشمس والماء الوفير،\nصارت الأوراق تطول وتطول أكثر فأكثر.', next:'kb3'},

  kb3:{art:'kabu_sodatsu', text:'نمت اللفتة ونمت، حتى صارت أطول من الجد نفسه.\nلم ير أحد في القرية لفتة مثلها من قبل.', next:'kc_vs'},
  kc_vs:{cutin:{type:'vs', faces:['jii','kabu'], text:'VS'}, then:'kb4'},

  kb4:{art:'kabu_sodatsu', text:f=>{
    var t = 'وأخيرًا جاء يوم الحصاد.';
    if(f.first) return t + '\nشمّر الجد عن ساعديه.';
    return t + '\nماذا يفعل؟';
  }, choices:f=>{
    var c = [{t:'اقتلاعها في الحال', go:'kb5'}];
    c.push({t:'تركها تكبر أكثر', go:'km1'});
    if(f.care==='hanashi') c.push({t:'الطلب من اللفتة برفق', go:'ko1'});
    return c;
  }},

  kb5:{art:'kabu_hiku', text:'أمسك الجد باللفتة وشدّ بكل قوته!', next:'kc_p1'},
  kc_p1:{cutin:{type:'waza', theme:'gold', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kb5f'},

  kb5f:{art:'kabu_hiku', text:f=>{
    var t = 'لكن اللفتة لم تتحرك أبدًا.';
    if(f.first) return t + '\n"يا جدة، تعالي وساعديني قليلًا."';
    return t + '\nمن نُحضر؟';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'إحضار ' + NAMES_AR[k], go:'kb6r', set:{c2:k}});
    });
    return c;
  }},
  kb6r:{art:'kabu_hiku', text:f=> vb(f.c2,'جاء')+' '+NAMES_AR[f.c2]+' و'+vb(f.c2,'وقف')+' في نهاية الصف.\n'+chainAr(f), next:'kc_p2'},
  kc_p2:{cutin:{type:'waza', theme:'orange', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kb6f'},

  kb6f:{art:'kabu_hiku', text:f=>{
    var t = 'ما زالت اللفتة لا تتحرك ولو قليلًا.';
    if(f.first) return t + '\n"والآن نُحضر الحفيدة."';
    return t + '\nمن نُحضر بعد ذلك؟';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'إحضار ' + NAMES_AR[k], go:'kb7r', set:{c3:k}});
    });
    return c;
  }},
  kb7r:{art:'kabu_hiku', text:f=> vb(f.c3,'جاء')+' '+NAMES_AR[f.c3]+' و'+vb(f.c3,'وقف')+' في نهاية الصف.\n'+chainAr(f), next:'kc_p3'},
  kc_p3:{cutin:{type:'waza', theme:'green', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kb7f'},

  kb7f:{art:'kabu_hiku', text:f=>{
    var t = 'تمايلت الأوراق يمنة ويسرة، لا أكثر.';
    if(f.first) return t + '\n"حسنًا، نُحضر الكلب أيضًا."';
    return t + '\nمن نُحضر بعد ذلك؟';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'إحضار ' + NAMES_AR[k], go:'kb8r', set:{c4:k}});
    });
    return c;
  }},
  kb8r:{art:'kabu_hiku', text:f=> vb(f.c4,'جاء')+' '+NAMES_AR[f.c4]+' و'+vb(f.c4,'وقف')+' في نهاية الصف.\n'+chainAr(f), next:'kc_p4'},
  kc_p4:{cutin:{type:'waza', theme:'blue', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kb8f'},

  kb8f:{art:'kabu_hiku', text:f=>{
    var t = 'زحّ. تحركت قليلًا... هكذا بدا لهم.';
    if(f.first) return t + '\n"تعالي أنتِ أيضًا يا قطة!"';
    return t + '\nنُحضر آخر من بقي.';
  }, choices:f=>{
    var c = [];
    ['baa','mago','inu','neko'].forEach(function(k){
      if(f.c2!==k && f.c3!==k && f.c4!==k && f.c5!==k) c.push({t:'إحضار ' + NAMES_AR[k], go:'kb9r', set:{c5:k}});
    });
    return c;
  }},
  kb9r:{art:'kabu_hiku', text:f=> vb(f.c5,'جاء')+' '+NAMES_AR[f.c5]+' و'+vb(f.c5,'وقف')+' في نهاية الصف.\n'+chainAr(f), next:'kc_p5'},
  kc_p5:{cutin:{type:'waza', theme:'brown', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kb9f'},

  kb9f:{art:'kabu_hiku', text:f=>{
    var t = 'كادت تخرج ولم تخرج. لم يبق إلا القليل.\nلكن لم يبق أحد يمكن إحضاره.';
    if(f.first) return t;
    return t + '\nماذا يفعلون؟';
  }, choices:[
    {t:'عدم الاستسلام والمحاولة مرة أخرى', go:'kb10', set:{nezumi:1}},
    {t:'الاكتفاء بهذا القدر اليوم', go:'ka1'}
  ]},

  kb10:{art:'kabu_hiku', text:'عندها انطلقت القطة مسرعة،\nوعادت ومعها فأر صغير صغير.\n"نحن بحاجة إلى قوتك."', next:'kc_nezu'},
  kc_nezu:{cutin:{type:'kao', face:'nezumi', text:'أنا...؟ أنا حقًّا؟'}, then:'kc_p6'},
  kc_p6:{cutin:{type:'waza', theme:'red', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kc_suppon'},
  kc_suppon:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'kb11'},

  kb11:{art:'kabu_nuketa', text:'طارت اللفتة عاليًا في السماء،\nوسقط الجميع على الأرض.\nآخ... لكن على كل وجه ابتسامة كبيرة.', next:'e_kb_seishi'},
  e_kb_seishi:{art:'kabu_nuketa', ending:'kb_seishi', text:'وأخيرًا خرجت اللفتة.\nوالدفعة الأخيرة كانت من أصغر فأر.\nحتى القوة الصغيرة، إذا اجتمعت مع الجميع، صارت أكبر قوة في العالم.\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- Let it grow → احتفال القرية كلها ---- */
  km1:{art:'kabu_sodatsu', text:'"ما دمنا وصلنا إلى هنا، فلتكبر إلى أقصى حد."\nسقاها وغنّى لها، وواصل العناية بها يومًا بعد يوم.\nوفي النهاية صارت اللفتة أكبر من بيت الجد.', next:'km2'},
  km2:{art:'kabu_sodatsu', text:'وهكذا لم تعد العائلة وحدها تكفي أبدًا.\nوقف الجد على التل ونادى:\n"يا أهل القرية جميعًا! تعالوا وأعينونا!"', next:'kc_mura'},
  kc_mura:{cutin:{type:'waza', theme:'red', text:'القرية كلها، اجتمعوا!!'}, then:'km3'},
  km3:{art:'kabu_matsuri', text:'جاء الخبّاز، وجاء الطحّان، وجاء الأطفال أيضًا.\nاصطف أهل القرية كلهم في صف واحد طويل.\nوفي آخر الصف، كالعادة، الفأر الصغير.', next:'kc_pM'},
  kc_pM:{cutin:{type:'waza', theme:'gold', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kc_supponM'},
  kc_supponM:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'km4'},
  km4:{art:'kabu_matsuri', text:'وذهبت اللفتة التي خرجت إلى قدر كبير كبير.\nومن خلف البخار تردد ضحك الجميع.', next:'e_kb_matsuri'},
  e_kb_matsuri:{art:'kabu_matsuri', ending:'kb_matsuri', text:'أكبر لفتة في العالم صارت أكبر احتفال في العالم.\nوحساء اللفت الحلو أدفأ بطون أهل القرية كلهم.\n"وفي العام المقبل نريد واحدة كبيرة أيضًا!"\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- Ask the turnip → قلب اللفتة ---- */
  ko1:{art:'kabu_talk', text:'جلس الجد أمام اللفتة.\n"هذا صوت كلمها به كل يوم. لا بد أن يصل إليها."\n"يا لفتة عزيزتي. هلّا خرجتِ الآن؟"', next:'ko2'},
  ko2:{art:'kabu_talk', text:'تمايلت الأوراق مرة واحدة.\nوانتفخ التراب وارتفع شيئًا فشيئًا...', next:'kc_kao_kabu'},
  kc_kao_kabu:{cutin:{type:'kao', face:'kabu', text:'هل ناديتني؟'}, then:'ko3'},
  ko3:{art:'kabu_talk', text:'"أنت الذي كنت تكلمني كل يوم، أليس كذلك؟\nأعرفك من صوتك جيدًا.\nحسنًا. سأخرج إذًا. واحد، اثنان..."', next:'kc_supponO'},
  kc_supponO:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'e_kb_onegai'},
  e_kb_onegai:{art:'kabu_nuketa', ending:'kb_onegai', text:'خرجت اللفتة من تلقاء نفسها، هوب!\nحتى بغير قوة، يصل القلب إلى القلب.\nوكلمة "اكبري" التي قيلت كل يوم كانت كلمة سحرية.\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- Call it a day → وغدًا أيضًا معًا ---- */
  ka1:{art:'kabu_yuyake', text:'"نكتفي بهذا القدر اليوم. لقد بذلتم جميعًا جهدًا كبيرًا."\nوفي الحقل تحت شفق الغروب شربوا شايًا دافئًا.\nواللفتة أيضًا نامت اليوم في هدوء.', next:'e_kb_ashita'},
  e_kb_ashita:{art:'kabu_yuyake', ending:'kb_ashita', text:'"وغدًا نشدّها من جديد، كلنا معًا."\nقالوا ذلك، وعاد كل واحد إلى بيته.\nلا بأس إن جاء يوم لا تخرج فيه.\nلأن هناك غدًا صار يُنتظر بشوق.\nوعاشوا في سعادة إلى الأبد.'},

  /* ================= حكاية اللفتة ================= */

  kt1:{art:'kt_tsuchi', text:'هذه حكاية من تحت التراب.\nأنا اللفتة. أنمو دافئة ومرتاحة في وسط الحقل الواسع.\nومن فوق أسمع كل يوم صوت الجد.', next:'kt2'},
  kt2:{art:'kt_tsuchi', text:'حتى تحت التراب هناك أشياء ممتعة كثيرة.\nماذا أفعل اليوم؟', choices:[
    {t:'الدردشة مع دودة الأرض', go:'kt2r', set:{klife:'mimizu'}},
    {t:'تذوق طعم الشمس على مهل', go:'kt2r', set:{klife:'ohisama'}}
  ]},
  kt2r:{art:'kt_tsuchi', text:f=> f.klife==='mimizu'
    ? '"لقد كبرتِ من جديد" قالت دودة الأرض.\n"هيهي. لأني أسمع صوتًا طيبًا كل يوم."'
    : 'من الأوراق ينزل طعم الشمس ببطء ولين.\nطعم حلو ودافئ، ويجلب شيئًا من النعاس.', next:'kt3'},
  kt3:{art:'kt_tsuchi', text:'ثم في أحد الأيام.\nشدّة قوية!\n"واو، ما هذا؟ ما الذي يحدث؟"\nجسمي يُشدّ إلى أعلى. لقد جاء يوم الحصاد.', next:'kt4'},
  kt4:{art:'kt_up', text:'والآن، ماذا أفعل؟', choices:[
    {t:'لا أريد الخروج بعد! التشبث بالأرض', go:'kt5'},
    {t:'حسنًا، لنرَ العالم في الخارج', go:'ktj1'}
  ]},

  kt5:{art:'kt_up', text:'"أريد البقاء هنا أكثر!"\nجمعت اللفتة قوتها في جذورها وتشبثت بالأرض بشدة.\nومن فوق: "هيّا شدّ، هيّا شدّ." والأصوات تزداد ضجيجًا شيئًا فشيئًا.', next:'kt6'},
  kt6:{art:'kt_up', text:'اثنان، ثلاثة، أربعة...\nومع ذلك ظلت متشبثة، وفي النهاية سمعت صوتًا صغيرًا جدًّا.', next:'kc_kt1'},
  kc_kt1:{cutin:{type:'kao', face:'nezumi', text:'أرجوكِ يا لفتة'}, then:'kt7'},
  kt7:{art:'kt_up', text:'أمام القوة أستطيع أن أتشبث كما أشاء.\nلكن حين يطلب مني صوت صغير هكذا...\n"...حسنًا، لا حيلة لي."\nوأرخت اللفتة جذورها في هدوء.', next:'ktc_sup1'},
  ktc_sup1:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'e_kt_koe'},
  e_kt_koe:{art:'kt_sora', ending:'kt_koe', text:'كانت السماء عالية، وابتسامات الجميع ساطعة.\n"عجبًا. الخارج ليس سيئًا أيضًا."\nاللفتة التي لم تغلبها القوة الكبيرة،\nلم تقو على مقاومة طلب صغير.\nوعاشوا في سعادة إلى الأبد.'},

  ktj1:{art:'kt_up', text:'"على فكرة، ما لون السماء يا تُرى؟"\nأخذت اللفتة تتململ في مكانها.\n"حسنًا، سأخرج بنفسي. واحد، اثنان..."', next:'ktc_sup2'},
  ktc_sup2:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'e_kt_jibun'},
  e_kt_jibun:{art:'kt_sora', ending:'kt_jibun', text:'خرجت بقوة شديدة حتى\nسقط الجميع معًا على الأرض.\n"إذن السماء واسعة إلى هذا الحد!"\nوالخروج الذي قررته بنفسها كان أجمل شعور.\nوعاشوا في سعادة إلى الأبد.'},

  /* ================= حكاية الفأر ================= */

  kn1:{art:'kn_naya', text:'هذه حكاية فأر صغير يسكن في زاوية المخزن.\nالأعمال الشاقة ليست من قدرته. ولا يستطيع حمل الأشياء الثقيلة.\nلكنه اليوم أيضًا يجري هنا وهناك بنشاط.', next:'kn2'},
  kn2:{art:'kn_naya', text:'ماذا يفعل الفأر ظهر اليوم؟', choices:[
    {t:'البحث عن قطعة جبن', go:'kn2r', set:{nlife:'cheese'}},
    {t:'التشمس عند النافذة', go:'kn2r', set:{nlife:'hinata'}}
  ]},
  kn2r:{art:'kn_naya', text:f=> f.nlife==='hinata'
    ? 'بقعة الشمس عند النافذة هي أفضل مقعد في العالم.\nيمد شواربه مستقيمة، ثم ينعس وينعس.'
    : 'في عمق المخزن رائحة طيبة.\nوجد قطعة جبن صغيرة، فامتلأ خداه حتى انتفخا.', next:'kn3'},
  kn3:{art:'kn_neko', text:'وفي تلك اللحظة جاءت القطة.\nفي أي يوم آخر كان سيهرب. لكن القطة اليوم أحنت رأسها انحناءة صغيرة.\n"عندي طلب. أريد أن تعيرني قوتك."', choices:[
    {t:'الذهاب معها رغم الخوف', go:'kn3a'},
    {t:'السؤال: "هل أنا حقًّا المناسب؟"', go:'kn3b'}
  ]},
  kn3a:{art:'kn_neko', text:'سار الفأر خلف القطة وقلبه يخفق.\nوحين وصل إلى الحقل، كان الجميع ينتظرون بوجوه حائرة.', next:'kn4'},
  kn3b:{art:'kn_neko', text:'"لأنك صغير، لهذا أنت المناسب" قالت القطة.\n"يقولون إن الأخف وزنًا هو من يقف في آخر الصف."', next:'kn4'},
  kn4:{art:'kn_retsu', text:'وقف الفأر في آخر الصف.\nوأمامه ظهور كبيرة، واحد خلف الآخر.\nماذا يستطيع فأر صغير أن يفعل؟', choices:[
    {t:'الشدّ بقوة بالذيل', go:'kns1'},
    {t:'ضبط الإيقاع بصوت عالٍ', go:'kno1'}
  ]},

  kns1:{art:'kn_retsu', text:'لفّ الفأر ذيله حول ذيل القطة،\nوشدّ بكل ما في جسمه الصغير من قوة!', next:'knc_p1'},
  knc_p1:{cutin:{type:'waza', theme:'red', text:'هيّا شدّ، هيّا شدّ!!'}, then:'knc_sup1'},
  knc_sup1:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'e_kn_shippo'},
  e_kn_shippo:{art:'kabu_nuketa', ending:'kn_shippo', text:'"الدفعة الأخيرة كانت منك أنت" قال الجد.\nذيل صغير، وعمل كبير.\nومن ذلك اليوم صار الفأر يأكل طعامه لا في زاوية المخزن،\nبل في وسط الجميع.\nوعاشوا في سعادة إلى الأبد.'},

  kno1:{art:'kn_retsu', text:'إن لم تنفع القوة، فهناك الصوت!\nأخذ الفأر نفسًا عميقًا، وصاح بكل ما يستطيع.', next:'knc_k1'},
  knc_k1:{cutin:{type:'kao', face:'nezumi', text:'واحد، اثنان! هيّا شدّ!!'}, then:'knc_sup2'},
  knc_sup2:{cutin:{type:'suppon', text:'هوب! خرجت!!'}, then:'e_kn_ondo'},
  e_kn_ondo:{art:'kabu_nuketa', ending:'kn_ondo', text:'بفضل ذلك الصوت اجتمعت قوى الجميع في لحظة واحدة.\n"كان إيقاعًا جميلًا" قالت الجدة ضاحكة.\nقد تكون القوة صغيرة، لكن هناك صوت يجمع الجميع.\nرفع الفأر صدره وقال: "بيب".\nوعاشوا في سعادة إلى الأبد.'},

  /* ---- First read only (canonical Tolstoy order, line grows via enter) ---- */
  kbf2:{art:'kabu_hiku', enter:{c2:'baa'}, text:'جاءت الجدة ووقفت خلف الجد.\nأمسكت الجدة بالجد، وأمسك الجد باللفتة بقوة.', next:'kc_f2'},
  kc_f2:{cutin:{type:'waza', theme:'orange', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kbf3'},
  kbf3:{art:'kabu_hiku', enter:{c3:'mago'}, text:'ما زالت اللفتة لا تتحرك ولو قليلًا.\nوالآن جاءت الحفيدة ووقفت في نهاية الصف.', next:'kc_f3'},
  kc_f3:{cutin:{type:'waza', theme:'green', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kbf4'},
  kbf4:{art:'kabu_hiku', enter:{c4:'inu'}, text:'تمايلت الأوراق يمنة ويسرة، لا أكثر.\nوالآن جاء الكلب راكضًا ووقف في نهاية الصف.', next:'kc_f4'},
  kc_f4:{cutin:{type:'waza', theme:'blue', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kbf5'},
  kbf5:{art:'kabu_hiku', enter:{c5:'neko'}, text:'زحّ. تحركت قليلًا... هكذا بدا لهم.\nوالآن جاءت القطة قافزة ووقفت في نهاية الصف.', next:'kc_f5'},
  kc_f5:{cutin:{type:'waza', theme:'brown', text:'هيّا شدّ، هيّا شدّ!!'}, then:'kbf6'},
  kbf6:{art:'kabu_hiku', enter:{nezumi:1}, text:'كادت تخرج ولم تخرج. لم يبق إلا القليل.\nعندها انطلقت القطة وعادت ومعها فأر صغير صغير.', next:'kc_nezu'}

  };

  Object.assign(T.SCENES_EN, KABU_AR);

  T.ZK_EN.push(
    {section:'اللفتة الكبيرة'},
    {id:'kb_seishi',  n:'وأخيرًا خرجت',                h:'الحكاية الأصلية من الجولة الأولى'},
    {id:'kb_matsuri', n:'احتفال القرية كلها',          h:'الصبر عن الاقتلاع وتركها تكبر أكثر...'},
    {id:'kb_onegai',  n:'قلب اللفتة',                  h:'التحدث إليها بلطف كل يوم وهي تنمو...'},
    {id:'kb_ashita',  n:'وغدًا أيضًا معًا',             h:'في يوم لا تخرج فيه، عدم الإلحاح...'},
    {id:'kt_koe',     n:'غلبها صوت صغير',              h:'في حكاية اللفتة، مواصلة التشبث بالأرض...'},
    {id:'kt_jibun',   n:'خرجت بنفسها، هوب',            h:'في حكاية اللفتة، الفضول لما في الخارج...'},
    {id:'kn_shippo',  n:'العمل الكبير للذيل الصغير',   h:'في حكاية الفأر، استعمال الذيل...'},
    {id:'kn_ondo',    n:'أصغر ضابط إيقاع',             h:'في حكاية الفأر، استعمال الصوت...'}
  );

})();
