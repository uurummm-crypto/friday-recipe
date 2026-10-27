/* ===================================================
   金曜レシピ手帳 (Weekly Friday Recipe Notebook)
   Core Application Logic
   =================================================== */

// ==========================================
// 1. Data Store: Friday Recipe Selections
// ==========================================

const FRIDAY_WEEK_SELECTIONS = [
  // 第1週セレクション
  {
    weekTitle: '【毎週金曜朝 更新】第1週の30分レシピセレクション',
    recipes: [
      {
        id: 'pork-moyashi-ponzu',
        title: '15分でトロトロ風！豚バラともやしの極上ぽん酢蒸し',
        leadIcon: '🥓',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: true,
        time: 15,
        summary: 'フライパンに入れてフタをするだけ！15分で作れる超時短＆激ウマのおかずです。',
        materialPreview: '豚バラ薄切り肉・もやし・長ねぎなど',
        ingredients: [
          { name: '豚バラ薄切り肉', amount: '200g' },
          { name: 'もやし', amount: '1袋 (200g)' },
          { name: '長ねぎ (斜め薄切り)', amount: '1/2本' },
          { name: '酒', amount: '大さじ2' },
          { name: 'ぽん酢', amount: '適量' },
          { name: 'ごま油・小ねぎ・白ごま', amount: '各少々' }
        ],
        steps: [
          'フライパンにもやしを広げ、斜め薄切りにした長ねぎを散らします。',
          'その上に豚バラ肉を重ならないように広げてのせ、全体に酒大さじ2を回しかけます。',
          'フタをして中火にかけ、蒸気が上がったら弱火にして約6〜7分蒸し煮にします。',
          '豚肉に火が通ったら火を止め、仕上げにごま油をひと回しして小ねぎと白ごまを振ります。',
          'フライパンのまま食卓へ！熱々のところをお好みのぽん酢につけていただきます。'
        ],
        chefTip: '肉の余分な脂をもやしが吸って旨味倍増！フタを開けずにじっくり蒸すのが柔らかく仕上げるコツです。'
      },
      {
        id: 'onepan-cream-pasta',
        title: '20分で本格！ワンパン濃厚生クリームクリームパスタ',
        leadIcon: '🍝',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: false,
        time: 20,
        summary: 'パスタを別茹でしない別鍋いらず！フライパンひとつでトロッとした本格パスタが完成。',
        materialPreview: 'パスタ(7分茹で)・ベーコン・しめじなど',
        ingredients: [
          { name: 'スパゲッティ (7分茹で)', amount: '160g (半分に折る)' },
          { name: 'ハーフベーコン', amount: '4枚 (1cm幅)' },
          { name: 'しめじ', amount: '1/2株 (ほぐす)' },
          { name: '水', amount: '400ml' },
          { name: '牛乳または生クリーム', amount: '150ml' },
          { name: 'コンソメ顆粒', amount: '小さじ2' },
          { name: '粉チーズ・粗挽き黒胡椒', amount: '適量' }
        ],
        steps: [
          'フライパンにオリーブオイル少々を熱し、ベーコンとしめじを中火で炒めます。',
          '水400mlとコンソメを加え、沸騰したら半分に折ったパスタを入れます。',
          '時々混ぜながら、中火〜弱火でパスタの袋の表示時間（約7分）煮ます。',
          '水分が少なくなってきたら牛乳（または生クリーム）を加え、弱火でひと煮立ちさせ、とろみをつけます。',
          '器に盛り付け、粉チーズと黒胡椒をたっぷり振って完成！'
        ],
        chefTip: 'パスタから溶け出たデンプンが自然なとろみになって、まるでお店の濃厚クリームパスタになります！'
      },
      {
        id: 'fluffy-pancake-20m',
        title: 'フライパンで極厚！20分スフレ風パンケーキ',
        leadIcon: '🥞',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: false,
        time: 20,
        summary: '特別な型は不要！弱火で蒸し焼きにするだけでカフェみたいな極厚ふわしゅわ食感。',
        materialPreview: 'ホットケーキミックス・卵・牛乳・砂糖など',
        ingredients: [
          { name: 'ホットケーキミックス', amount: '100g' },
          { name: '卵 (卵黄と白身に分ける)', amount: '1個' },
          { name: '牛乳', amount: '70ml' },
          { name: '砂糖', amount: '大さじ1' },
          { name: 'マヨネーズ (ふんわり隠し味)', amount: '大さじ1/2' },
          { name: 'バター・メープルシロップ', amount: '適量' }
        ],
        steps: [
          '卵黄、牛乳、マヨネーズをボウルでよく混ぜ、ホットケーキミックスを加えてさっくり混ぜます。',
          '別のボウルで卵白に砂糖を加え、ツノが立つまで泡立ててメレンゲを作ります。',
          '生地にメレンゲを2回に分けて加え、泡を潰さないように優しくヘラで切るように混ぜます。',
          'ごく弱火で温めたフライパンに油を引き、生地をこんもり高く落とします。水小さじ1を垂らしてフタをし5分。',
          '裏返して再度水小さじ1を入れフタをして4分。お皿に盛り、バターとシロップをかけて完成！'
        ],
        chefTip: '生地に少量のマヨネーズを入れるとグルテンの結合が和らぎ、冷めても驚くほどふわふわになります。'
      },
      {
        id: 'quick-basque-cheesecake',
        title: '材料4つでトースター15分！濃厚バスク風チーズケーキ',
        leadIcon: '🧀',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: true,
        time: 15,
        summary: 'ワンボウルで混ぜてトースターで焼くだけ！とろける舌触りとほろ苦い焼き目が絶品。',
        materialPreview: 'クリームチーズ・砂糖・卵・生クリーム',
        ingredients: [
          { name: 'クリームチーズ', amount: '150g (室温で柔らかく)' },
          { name: '砂糖', amount: '40g' },
          { name: '卵', amount: '1個' },
          { name: '生クリーム (または牛乳+バター)', amount: '80ml' }
        ],
        steps: [
          '柔らかくしたクリームチーズと砂糖をボウルでなめらかになるまで混ぜます。',
          '溶き卵を少しずつ加えて混ぜ、生クリームを加えてダマがなくなるまでよく混ぜます。',
          'クシャクシャにしたクッキングシートを敷いた耐熱皿やアルミ型に生地を流します。',
          'トースター（1000W / 高温）で表面にしっかり濃い焼き色がつくまで12〜15分焼きます。',
          '粗熱をとって冷蔵庫で冷やすと、中心がとろ〜り濃厚な本格バスクチーズケーキの完成！'
        ],
        chefTip: '焼き色がつきにくい場合は、砂糖を表面にほんの少しパラパラ振ってから焼くと綺麗な焦げ目がつきます。'
      },
      {
        id: 'range-teriyaki-chicken',
        title: 'レンジで8分！鶏むね肉のしっとり甘辛照り焼きチキン',
        leadIcon: '🍗',
        tag: '⚡ 15分超時短',
        category: 'meal',
        isSuperFast: true,
        time: 10,
        summary: 'フォークで刺してレンジ加熱するだけ。パサつきがちな胸肉がジューシーに仕上がります。',
        materialPreview: '鶏むね肉・醤油・みりん・片栗粉など',
        ingredients: [
          { name: '鶏むね肉', amount: '1枚 (約250g)' },
          { name: '片栗粉', amount: '小さじ1' },
          { name: '醤油・みりん・酒', amount: '各大さじ1.5' },
          { name: '砂糖', amount: '小さじ2' },
          { name: '白ごま・七味唐辛子', amount: 'お好みで' }
        ],
        steps: [
          '鶏むね肉全体をフォークで両面ブスブスと刺し、厚みを均等に開きます。',
          '耐熱ボウルに醤油・みりん・酒・砂糖・片栗粉を混ぜ、鶏肉を入れてタレをしっかり絡めます。',
          'ふんわりラップをかけ、電子レンジ（600W）で3分30秒加熱します。',
          '取り出して裏返し、再度ラップをして2分30秒加熱。そのままレンジの中で3分蒸らします。',
          '食べやすい厚さにスライスし、ボウルに残った甘辛タレをかけて白ごまを振ります。'
        ],
        chefTip: '片栗粉をタレに混ぜておくことで肉の水分を閉じ込め、しっとり柔らかい仕上がりになります！'
      }
    ]
  },

  // 第2週セレクション
  {
    weekTitle: '【毎週金曜朝 更新】第2週の30分レシピセレクション',
    recipes: [
      {
        id: 'teriyaki-avocado-don',
        title: '香ばし甘辛！照り焼きチキンとアボカドの温玉カフェ丼',
        leadIcon: '🥑',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: false,
        time: 18,
        summary: 'ジューシーな鶏肉と濃厚なアボカド、とろ〜り温玉が絶妙にマッチするカフェ風ごちそう丼。',
        materialPreview: '鶏もも肉・アボカド・温泉卵・ごはんなど',
        ingredients: [
          { name: '鶏もも肉', amount: '250g' },
          { name: 'アボカド', amount: '1/2個' },
          { name: '温泉卵', amount: '1個' },
          { name: '醤油・みりん・酒', amount: '各大さじ2' },
          { name: '砂糖', amount: '大さじ1' },
          { name: '刻み海苔・白ごま', amount: '各適量' }
        ],
        steps: [
          '鶏肉をひと口大に切り、フライパンで皮目から香ばしく焼きます。',
          '調味料（醤油・みりん・酒・砂糖）を入れて中火で照りが出るまで煮絡めます。',
          '丼にごはんを盛り、スライスしたアボカド、照り焼きチキン、温玉をのせてタレをかけます。'
        ],
        chefTip: '肉の脂をキッチンペーパーで吸い取ってからタレを入れると、味がボケずに絡みます。'
      },
      {
        id: 'berry-french-toast',
        title: '週末の贅沢！じゅわっと染み込む極上フレンチトースト',
        leadIcon: '🍞',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: true,
        time: 15,
        summary: 'レンジで30秒温める裏技で、短時間でも中まで液がしっかり染み込みます。',
        materialPreview: '食パン(4枚切)・卵・牛乳・バターなど',
        ingredients: [
          { name: '食パン (厚切り)', amount: '1枚' },
          { name: '卵', amount: '1個' },
          { name: '牛乳', amount: '100ml' },
          { name: '砂糖', amount: '大さじ1' },
          { name: 'バター', amount: '10g' },
          { name: 'メープルシロップ・粉糖', amount: '適量' }
        ],
        steps: [
          '深めの皿に卵、牛乳、砂糖をよく混ぜ、パンを浸してレンジ（600W）で両面各15秒温めます。',
          'フライパンにバターを弱火で溶かし、パンを入れて弱火でじっくり両面3分ずつ焼きます。',
          '焼き色がついたらお皿に盛り、メープルシロップをかけて完成！'
        ],
        chefTip: 'パンを浸した状態でレンジ加熱すると、あっという間に中まで卵液が染み込みます！'
      },
      {
        id: 'garlic-shrimp-rice',
        title: 'フライパン1つで！ぷりぷりエビのガーリックピラフ',
        leadIcon: '🦐',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: false,
        time: 20,
        summary: '炊飯器不要！冷やごはんを使ってフライパンで炒めるだけの絶品カフェピラフ。',
        materialPreview: 'むきエビ・温かいごはん・ニンニク・コーンなど',
        ingredients: [
          { name: 'むきエビ', amount: '100g' },
          { name: '温かいごはん', amount: '茶碗2杯分' },
          { name: 'ニンニク (みじん切り)', amount: '1片' },
          { name: 'コーン缶', amount: '大さじ3' },
          { name: 'バター', amount: '15g' },
          { name: '醤油・コンソメ顆粒', amount: '各小さじ1' }
        ],
        steps: [
          'フライパンにバター半量とニンニクを弱火で熱し、エビを炒めます。',
          'ごはんを加えてほぐしながら強火で手早く炒め、コーンとコンソメを加えます。',
          '仕上げに鍋肌から醤油を回し入れ、残りのバターを絡めて黒胡椒を振ります。'
        ],
        chefTip: '温かいごはんにあらかじめ少量の油を混ぜておくとパラパラに仕上がります。'
      },
      {
        id: 'choco-mug-cake',
        title: 'マグカップで混ぜてレンジ2分！濃厚フォンダンショコラ',
        leadIcon: '☕',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: true,
        time: 10,
        summary: 'ボウルも型も使わずマグカップ1つで完成！中からチョコがとろけ出します。',
        materialPreview: '板チョコ・ホットケーキミックス・牛乳・ココアなど',
        ingredients: [
          { name: '板チョコ', amount: '1/2枚 (25g)' },
          { name: 'ホットケーキミックス', amount: '大さじ3' },
          { name: '牛乳', amount: '大さじ2' },
          { name: 'サラダ油または溶かしバター', amount: '大さじ1' },
          { name: '純ココア (あれば)', amount: '小さじ1' }
        ],
        steps: [
          'マグカップに粉類、牛乳、油を入れてスプーンでよく混ぜます。',
          '中央に板チョコをギュッと沈めます。',
          'ラップをかけずに電子レンジ（600W）で約1分10秒加熱して完成！'
        ],
        chefTip: '加熱しすぎるとパサつくので、表面が固まったらすぐ取り出すのがトロトロのコツです。'
      },
      {
        id: 'foil-salmon-mushrooms',
        title: '包んでほったらかし！秋鮭とキノコのホイルバター焼き',
        leadIcon: '🐟',
        tag: '⚡ 15分超時短',
        category: 'meal',
        isSuperFast: true,
        time: 15,
        summary: 'ホイルに包んでフライパンかトースターに入れるだけ。洗い物ゼロの満足おかず。',
        materialPreview: '生鮭・しめじ・バター・醤油など',
        ingredients: [
          { name: '生鮭切り身', amount: '2切れ' },
          { name: 'しめじ・舞茸', amount: '1パック' },
          { name: '有塩バター', amount: '20g' },
          { name: '醤油・酒', amount: '各大さじ1' }
        ],
        steps: [
          'ホイルに鮭とほぐしたキノコをのせ、酒とバターをのせて口を閉じます。',
          'フライパンに水100mlを入れてフタをし、中火で10分蒸し焼きにします。',
          'ホイルを開いて醤油を回しかけ、熱々をいただきます。'
        ],
        chefTip: 'フライパンの底に水を入れることで焦げ付かずにふっくら仕上がります。'
      }
    ]
  },

  // 第3週セレクション
  {
    weekTitle: '【毎週金曜朝 更新】第3週の30分レシピセレクション',
    recipes: [
      {
        id: 'demi-boiled-hamburg',
        title: 'フライパン1つで20分！ふっくら煮込みデミグラスハンバーグ',
        leadIcon: '🍳',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: false,
        time: 20,
        summary: 'タネをこねて焼いたらソースで煮込むだけ！生焼けの心配ゼロでふっくらジューシー。',
        materialPreview: '合挽き肉・玉ねぎ・ケチャップ・中濃ソースなど',
        ingredients: [
          { name: '合いびき肉', amount: '250g' },
          { name: '玉ねぎ (みじん切り)', amount: '1/2個' },
          { name: 'パン粉・牛乳', amount: '各大さじ3' },
          { name: '塩・こしょう', amount: '各少々' },
          { name: '水・ケチャップ・中濃ソース', amount: '各大さじ3' },
          { name: '有塩バター', amount: '10g' }
        ],
        steps: [
          'ボウルにひき肉、玉ねぎ、パン粉、牛乳、塩こしょうを入れて粘りが出るまでよく混ぜ、2等分に丸めます。',
          'フライパンに油を熱し、強めの中火で両面に焼き色がつくまで各2分焼きます。',
          '水、ケチャップ、中濃ソース、バターを加え、フタをして弱火で約8分煮込みます。',
          'フタを取ってソースにとろみがつくまで少し煮詰めて完成！'
        ],
        chefTip: '煮込みにすることで火の通りが早く、肉汁を閉じ込めてパサつきません！'
      },
      {
        id: 'cafe-retro-pudding',
        title: 'レンジとマグカップで5分！喫茶店風かためレトロプリン',
        leadIcon: '🍮',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: true,
        time: 15,
        summary: '特別な蒸し器もゼラチンも不要！卵と牛乳のコクが広がるクラシックなカフェプリン。',
        materialPreview: '卵・牛乳・砂糖・バニラエッセンス',
        ingredients: [
          { name: '卵', amount: '1個' },
          { name: '牛乳', amount: '120ml' },
          { name: '砂糖 (プリン用)', amount: '大さじ2' },
          { name: '砂糖 (カラメル用)', amount: '大さじ1' },
          { name: '水 (カラメル用)', amount: '小さじ1/2 + 仕上げ小さじ1/2' }
        ],
        steps: [
          'マグカップに砂糖大さじ1と水小さじ1/2を入れ、レンジ（600W）で1分〜1分20秒加熱しカラメルを作ります（茶色くなったら水小さじ1/2を注ぐ）。',
          'ボウルに卵、牛乳、砂糖大さじ2を優しく混ぜ、茶こしでこしながらマグカップに注ぎます。',
          'ふんわりラップをし、弱出力（200Wまたは解凍モード）で約4分加熱します。',
          '粗熱をとって冷蔵庫で冷やせば、ツルンと美味しいかためプリンの完成！'
        ],
        chefTip: '弱出力でじっくり温めることで「す」が入らず、絹のようになめらかな口溶けになります。'
      },
      {
        id: 'tomato-tuna-capellini',
        title: '和えるだけ15分！角切りトマトとツナの大葉パスタ',
        leadIcon: '🍝',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: true,
        time: 15,
        summary: '火を使うのはパスタを茹でる時だけ！ツナの旨味とトマトの酸味が最高のカフェパスタ。',
        materialPreview: 'スパゲッティ・トマト・ツナ缶・大葉・オリーブ油',
        ingredients: [
          { name: 'スパゲッティ', amount: '160g' },
          { name: 'トマト', amount: '1個 (1cm角切り)' },
          { name: 'ツナ缶 (オイル漬け)', amount: '1缶 (70g)' },
          { name: '大葉 (千切り)', amount: '5枚' },
          { name: 'めんつゆ (3倍濃縮)', amount: '大さじ2' },
          { name: 'オリーブオイル', amount: '大さじ1.5' },
          { name: 'おろしニンニク', amount: 'チューブ2cm' }
        ],
        steps: [
          'パスタを袋の表示通りに茹でます。',
          'ボウルにトマト、ツナ（油ごと）、めんつゆ、オリーブオイル、ニンニクを混ぜ合わせます。',
          '茹で上がったパスタの水気をしっかり切り、ボウルのソースと手早く和えます。',
          'お皿に盛り付け、刻んだ大葉をたっぷりトッピングして完成！'
        ],
        chefTip: 'めんつゆとオリーブオイルの黄金比で、和洋折衷のレストラン風の味付けになります。'
      },
      {
        id: 'quick-nama-choco-tart',
        title: '材料3つ・オーブン不要！20分濃厚とろける生チョコタルト',
        leadIcon: '🍫',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: false,
        time: 20,
        summary: 'ビスケットを砕いて敷き詰め、温めたチョコクリームを流すだけ。専門店級の味わい。',
        materialPreview: '板チョコ・生クリーム・市販ビスケット・バター',
        ingredients: [
          { name: 'ブラック板チョコ', amount: '2枚 (100g)' },
          { name: '生クリーム', amount: '70ml' },
          { name: '市販ビスケット', amount: '60g' },
          { name: '溶かしバター', amount: '30g' },
          { name: '純ココアパウダー', amount: '適量' }
        ],
        steps: [
          'ジッパー袋にビスケットを入れ、麺棒などで細かく砕き、溶かしバターを加えて揉み込みます。',
          'タルト型や耐熱皿の底にスプーンの背でギュッと敷き詰めます。',
          '耐熱容器に生クリームを入れレンジで30秒温め、刻んだチョコを入れて余熱で溶かします。',
          'ビスケットの上にチョコを流し入れ、冷蔵庫で冷やし固めます。仕上げにココアを振って完成！'
        ],
        chefTip: '冷やす時間を待てない時は、冷凍庫で15分冷やすとすぐに切り分けられます！'
      },
      {
        id: 'miso-nasu-pork',
        title: 'フライパン10分！豚こまと秋ナスのこっくり甘味噌炒め',
        leadIcon: '🍆',
        tag: '⚡ 15分超時短',
        category: 'meal',
        isSuperFast: true,
        time: 12,
        summary: 'ナスが油を吸ってトロッと美味！甘辛い味噌だれで白ごはんが止まらない絶品おかず。',
        materialPreview: '豚こま肉・ナス・味噌・みりん・ごま油など',
        ingredients: [
          { name: '豚こま切れ肉', amount: '180g' },
          { name: 'ナス', amount: '2本 (乱切り)' },
          { name: 'ごま油', amount: '大さじ1.5' },
          { name: '味噌・みりん・酒', amount: '各大さじ1.5' },
          { name: '砂糖', amount: '小さじ2' },
          { name: '小ねぎ・白ごま', amount: '各適量' }
        ],
        steps: [
          'ナスは乱切りにして水に2分さらし、水気をペーパーで拭き取ります。',
          'フライパンにごま油を熱し、豚肉を炒めます。色が変わったらナスを加えて強火で炒めます。',
          'ナスがしんなりしてきたら、混ぜ合わせた調味料（味噌・みりん・酒・砂糖）を加えます。',
          '全体にタレがこってり絡まるまで中火で1〜2分炒め合わせ、小ねぎを散らして完成！'
        ],
        chefTip: 'ナスを強火で手早く炒めることで、色鮮やかでジューシーな食感が残ります。'
      }
    ]
  },

  // 第4週セレクション
  {
    weekTitle: '【毎週金曜朝 更新】第4週の30分レシピセレクション',
    recipes: [
      {
        id: 'crispy-chicken-nanban',
        title: '揚げずに絶品！サクサク鶏むねチキン南蛮〜特製タルタル',
        leadIcon: '🍗',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: false,
        time: 20,
        summary: '少量の油で揚げ焼きにするから後片付けラクラク！甘酢と具だくさんタルタルが絡みます。',
        materialPreview: '鶏むね肉・ゆで卵・マヨネーズ・甘酢タレなど',
        ingredients: [
          { name: '鶏むね肉', amount: '1枚 (約250g)' },
          { name: '片栗粉・薄力粉', amount: '各大さじ1.5' },
          { name: 'ゆで卵', amount: '1個 (フォークで潰す)' },
          { name: 'マヨネーズ', amount: '大さじ3' },
          { name: '砂糖・酢・醤油 (甘酢用)', amount: '各大さじ2' },
          { name: '塩・こしょう', amount: '各少々' }
        ],
        steps: [
          '鶏肉をそぎ切りにして塩こしょうを振り、片栗粉・薄力粉を全体にまぶします。',
          'フライパンに油大さじ3を熱し、鶏肉を並べて中火で両面こんがり揚げ焼きにします。',
          '耐熱容器に甘酢の調味料（砂糖・酢・醤油）を混ぜ、焼きたての熱い鶏肉をくぐらせます。',
          '潰したゆで卵とマヨネーズ、塩少々を混ぜたタルタルソースをたっぷりかけて完成！'
        ],
        chefTip: 'そぎ切りにすることで火通りが早く、お肉が驚くほど柔らかく仕上がります。'
      },
      {
        id: 'skillet-apple-pie',
        title: 'フライパンで香ばしい！キャラメルりんごのサクサクパイ',
        leadIcon: '🍎',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: false,
        time: 20,
        summary: '冷凍パイシートをフライパンで焼くだけ！甘酸っぱいりんごとバターの香りが広がります。',
        materialPreview: '冷凍パイシート・りんご・砂糖・バター・シナモン',
        ingredients: [
          { name: '冷凍パイシート', amount: '1枚 (常温で半解凍)' },
          { name: 'りんご', amount: '1/2個 (薄切り)' },
          { name: '有塩バター', amount: '15g' },
          { name: '砂糖', amount: '大さじ2' },
          { name: 'シナモンパウダー・アイスクリーム', amount: 'お好みで' }
        ],
        steps: [
          'フライパンにバターと砂糖を熱し、薄切りにしたりんごを中火でしんなりキャラメル色になるまで炒めます。',
          '一度取り出し、フライパンをサッと拭いてフォークで穴を開けたパイシートを敷きます。',
          '弱火でフタをして両面各6〜7分、きつね色にパリッと焼き上げます。',
          '焼き上がったパイの上に炒めたりんごをのせ、お好みでバニラアイスを添えて完成！'
        ],
        chefTip: '弱火でじっくり蒸し焼きにすることで、オーブンがなくてもパイがサクサクに膨らみます！'
      },
      {
        id: 'onepan-creamy-carbonara',
        title: '失敗知らず！生クリーム不使用の濃厚ワンパンカルボナーラ',
        leadIcon: '🧀',
        tag: '🔍 主菜・おかず',
        category: 'meal',
        isSuperFast: true,
        time: 15,
        summary: '卵がダマにならないプロの裏技！フライパン1つでトロッと乳化した本場の味に。',
        materialPreview: 'パスタ・ベーコン・卵・粉チーズ・黒胡椒',
        ingredients: [
          { name: 'スパゲッティ', amount: '160g' },
          { name: 'ブロックベーコン', amount: '60g (拍子木切り)' },
          { name: '卵 (全卵1個 + 卵黄1個)', amount: '計2個' },
          { name: '粉チーズ', amount: '大さじ3' },
          { name: '水', amount: '450ml' },
          { name: 'コンソメ顆粒', amount: '小さじ1' },
          { name: '粗挽き黒胡椒', amount: 'たっぷり' }
        ],
        steps: [
          'ボウルに卵、粉チーズ、黒胡椒を混ぜ合わせておきます。',
          'フライパンでベーコンをカリッと炒め、水450mlとコンソメを加えて沸騰させます。',
          '半分に折ったパスタを入れ、水分がほぼなくなるまで袋の表示時間煮詰めます。',
          '必ず【火を止めて】少し落ち着かせたら、卵液を一気に加えてゴムベラで手早く余熱で混ぜ合わせます。'
        ],
        chefTip: '火を止めてから卵を入れることで、スクランブルエッグにならず滑らかなクリーム状になります。'
      },
      {
        id: 'taiwan-douhua',
        title: '豆乳でふるふる！15分台湾カフェ風 豆花（トウファ）',
        leadIcon: '🥣',
        tag: '🍰 カフェスイーツ',
        category: 'sweet',
        isSuperFast: true,
        time: 15,
        summary: 'ヘルシーで優しい甘さ。温かいシロップでも冷やしても美味しい台湾の定番スイーツ。',
        materialPreview: '無調整豆乳・粉ゼラチン・黒糖・きな粉など',
        ingredients: [
          { name: '無調整豆乳', amount: '300ml' },
          { name: '粉ゼラチン', amount: '5g' },
          { name: '水 (ゼラチン用)', amount: '大さじ2' },
          { name: '黒糖 (または砂糖)', amount: '大さじ2' },
          { name: 'お湯 (シロップ用)', amount: '80ml' },
          { name: 'きな粉・ゆで小豆など', amount: 'お好みで' }
        ],
        steps: [
          '耐熱容器に水大さじ2とゼラチンを入れ、レンジで20秒温めて溶かします。',
          '鍋に豆乳を入れて人肌程度に温め、溶かしたゼラチンを加えてよく混ぜます。',
          '容器に流し入れ、氷水に当てるか冷蔵庫で冷やし固めます。',
          '黒糖をお湯で溶かしたシロップを冷まし、固まった豆花をスプーンですくって盛り付け、シロップを注ぎます。'
        ],
        chefTip: '豆乳を沸騰させないのが滑らかな喉越しにする最大のポイントです。'
      },
      {
        id: 'daikon-pork-range',
        title: 'レンジで味しみ！豚バラ大根のこっくり旨煮',
        leadIcon: '🍲',
        tag: '⚡ 15分超時短',
        category: 'meal',
        isSuperFast: true,
        time: 12,
        summary: 'じっくり煮込んだような大根がレンジですぐ完成！豚肉の旨味が染み渡る癒やしおかず。',
        materialPreview: '大根・豚バラ肉・醤油・みりん・生姜など',
        ingredients: [
          { name: '大根', amount: '200g (薄いいちょう切り)' },
          { name: '豚バラ薄切り肉', amount: '120g (3cm幅)' },
          { name: '醤油・みりん・酒', amount: '各大さじ1.5' },
          { name: '砂糖', amount: '小さじ2' },
          { name: 'おろし生姜', amount: '小さじ1/2' }
        ],
        steps: [
          '大根は火が通りやすいように5mm厚さのいちょう切りにします。',
          '耐熱ボウルに大根を入れ、その上に豚肉を広げてのせます。',
          '調味料（醤油・みりん・酒・砂糖・生姜）を回しかけ、ふんわりラップをします。',
          '電子レンジ（600W）で8分加熱し、取り出して全体を底からよく混ぜ、そのまま3分置いて味を馴染ませます。'
        ],
        chefTip: 'レンジ加熱後の余熱の3分間で、大根の芯まで一気にタレが染み込みます！'
      }
    ]
  }
];

// 外部レシピサイトまとめデータ
const EXTERNAL_SITES = [
  {
    name: 'クラシル (Kurashiru)',
    icon: '🥕',
    features: '全品1分動画つき・管理栄養士監修',
    desc: '「30分以内」「ワンパンパスタ」の動画が豊富。手順が見えるから失敗なし！',
    url: 'https://www.kurashiru.com/search?query=',
    quickLinks: [
      { text: '⚡ 15分以内の主菜', q: '15分 時短 主菜' },
      { text: '🥞 20分簡単おやつ', q: '簡単 おやつ 20分' },
      { text: '🍳 フライパンひとつ', q: 'ワンパン レシピ' }
    ]
  },
  {
    name: 'クックパッド (Cookpad)',
    icon: '📖',
    features: '日本最大級のレシピ数・つくれぽ1000超殿堂入り',
    desc: '一般家庭のリアルな「早い・ウマい」時短アイデアが凝縮されています。',
    url: 'https://cookpad.com/search/',
    quickLinks: [
      { text: '👑 殿堂入り時短おかず', q: '時短 30分 殿堂入り' },
      { text: '🍫 HMで作るお菓子', q: 'ホットケーキミックス お菓子 簡単' },
      { text: '🥩 豚肉×キャベツ', q: '豚肉 キャベツ 時短' }
    ]
  },
  {
    name: 'DELISH KITCHEN',
    icon: '🍳',
    features: '手軽な食材でレンジ＆フライパン調理が得意',
    desc: '洗い物を減らしたい週末にぴったりの、火を使わないレシピが盛りだくさん。',
    url: 'https://delishkitchen.tv/search?q=',
    quickLinks: [
      { text: '⚡ レンジだけで完成', q: 'レンジ 時短 簡単' },
      { text: '🍮 マグカッププリン', q: 'マグカップ プリン ケーキ' },
      { text: '🍗 鶏むね肉の時短おかず', q: '鶏むね肉 時短' }
    ]
  },
  {
    name: 'レタスクラブ',
    icon: '🥬',
    features: 'プロの料理研究家が教える時短ワザ',
    desc: '食材2つだけで作れるおかずなど、買い物も調理もラクになるアイデア満載。',
    url: 'https://www.lettuceclub.net/recipe/search/',
    quickLinks: [
      { text: '🥘 食材2つで作るおかず', q: '食材2つ 時短' },
      { text: '🥧 フライパンスイーツ', q: 'フライパン お菓子' }
    ]
  },
  {
    name: 'Nadia (ナディア)',
    icon: '✨',
    features: '料理家による失敗しないおしゃれレシピ',
    desc: 'おうちカフェ気分を味わえる見栄え抜群の30分レシピが集まっています。',
    url: 'https://oceans-nadia.com/search?q=',
    quickLinks: [
      { text: '🍷 週末のおうちバル', q: 'おうちバル 時短' },
      { text: '🍓 カフェ風スコーン', q: 'スコーン 簡単' }
    ]
  }
];

// ==========================================
// 1.5 Automatic Friday Calculation Engine
// ==========================================

function getAutoFridayWeekInfo(targetDate = new Date()) {
  // 日本時間 (JST: UTC+9) で算出
  const jstNow = new Date(targetDate.getTime() + (targetDate.getTimezoneOffset() * 60000) + (9 * 60 * 60 * 1000));

  // 基準日時: 2026年10月23日(金) 07:00:00 JST (第1週)
  // 毎週金曜日の朝7:00に自動で次週へ切り替わります
  const baseFriday = new Date('2026-10-23T07:00:00+09:00');
  const oneWeekMs = 7 * 24 * 60 * 60 * 1000;

  const diffMs = jstNow.getTime() - baseFriday.getTime();
  let weekDiff = Math.floor(diffMs / oneWeekMs);
  if (weekDiff < 0) weekDiff = 0;

  // 今週のセレクションIndex (0〜3のサイクル)
  const autoIndex = weekDiff % FRIDAY_WEEK_SELECTIONS.length;

  // 今週の金曜日日付
  const thisFridayDate = new Date(baseFriday.getTime() + (weekDiff * oneWeekMs));
  // 次回更新の金曜日日付
  const nextFridayDate = new Date(thisFridayDate.getTime() + oneWeekMs);

  const msUntilNext = nextFridayDate.getTime() - jstNow.getTime();
  const daysUntilNext = Math.max(0, Math.floor(msUntilNext / (24 * 60 * 60 * 1000)));
  const hoursUntilNext = Math.max(0, Math.floor((msUntilNext % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)));

  return {
    autoIndex,
    weekNumber: autoIndex + 1,
    thisFridayStr: `${thisFridayDate.getMonth() + 1}月${thisFridayDate.getDate()}日(金)`,
    nextFridayStr: `${nextFridayDate.getMonth() + 1}月${nextFridayDate.getDate()}日(金) 07:00`,
    daysUntilNext,
    hoursUntilNext
  };
}

// ==========================================
// 2. Application State & Storage
// ==========================================

const initialWeekInfo = getAutoFridayWeekInfo();

const AppState = {
  currentSelectionIndex: initialWeekInfo.autoIndex,
  activeFilter: 'all',
  favorites: JSON.parse(localStorage.getItem('friday_favorites') || '[]'),
  shoppingList: JSON.parse(localStorage.getItem('friday_shopping') || '[{"id":1,"text":"豚バラ薄切り肉 (200g)","checked":false},{"id":2,"text":"もやし (1袋)","checked":false}]'),
  cookingLogs: JSON.parse(localStorage.getItem('friday_logs') || '[{"id":1,"dish":"豚バラともやしの極上ぽん酢蒸し","date":"2026-10-24","rating":"⭐⭐⭐⭐⭐","comment":"フタをして放っておくだけで完成！ぽん酢にごま油を足したら最高でした。"}]'),
  activeDetailRecipe: null,
  timerSeconds: 30 * 60,
  timerInitialSeconds: 30 * 60,
  timerInterval: null,
  isTimerRunning: false
};

function saveFavorites() {
  localStorage.setItem('friday_favorites', JSON.stringify(AppState.favorites));
  renderFavoritesList();
  updateCardFavIcons();
}

function saveShoppingList() {
  localStorage.setItem('friday_shopping', JSON.stringify(AppState.shoppingList));
  renderShoppingSheet();
}

function saveCookingLogs() {
  localStorage.setItem('friday_logs', JSON.stringify(AppState.cookingLogs));
  renderCookingLogs();
}

// ==========================================
// 3. Render Recipe Cards (Matching Reference Image)
// ==========================================

function getCurrentRecipes() {
  const currentSet = FRIDAY_WEEK_SELECTIONS[AppState.currentSelectionIndex] || FRIDAY_WEEK_SELECTIONS[0];
  return currentSet.recipes;
}

function renderRecipeCards() {
  const container = document.getElementById('recipe-list-container');
  const bannerTitle = document.getElementById('banner-week-title');
  const bannerNext = document.getElementById('banner-next-update');
  const countAll = document.getElementById('count-all');
  if (!container) return;

  const weekInfo = getAutoFridayWeekInfo();
  const currentSet = FRIDAY_WEEK_SELECTIONS[AppState.currentSelectionIndex] || FRIDAY_WEEK_SELECTIONS[0];
  const isAutoWeek = (AppState.currentSelectionIndex === weekInfo.autoIndex);

  if (bannerTitle) {
    if (isAutoWeek) {
      bannerTitle.innerHTML = `【毎週金曜朝 自動更新】第${weekInfo.weekNumber}週の30分レシピセレクション (${weekInfo.thisFridayStr}更新)`;
    } else {
      bannerTitle.innerHTML = `【手動確認中】第${AppState.currentSelectionIndex + 1}週のレシピ <button id="return-auto-week-btn" class="banner-return-btn">📌 今週の金曜に戻る</button>`;
    }
  }

  if (bannerNext) {
    if (isAutoWeek) {
      const dayText = weekInfo.daysUntilNext === 0 ? '本日まもなく更新！' : `あと${weekInfo.daysUntilNext}日`;
      bannerNext.textContent = `次回更新: ${weekInfo.nextFridayStr} (${dayText})`;
    } else {
      bannerNext.textContent = `※別の週をプレビュー中`;
    }
  }

  // 「📌 今週の金曜に戻る」ボタンイベント
  document.getElementById('return-auto-week-btn')?.addEventListener('click', () => {
    AppState.currentSelectionIndex = weekInfo.autoIndex;
    renderRecipeCards();
    showToast('📌 今週の金曜日セレクションに戻りました！');
  });

  const allRecipes = currentSet.recipes;
  if (countAll) countAll.textContent = allRecipes.length;

  // フィルタリング
  const filtered = allRecipes.filter(r => {
    if (AppState.activeFilter === 'all') return true;
    if (AppState.activeFilter === 'meal') return r.category === 'meal' && !r.isSuperFast;
    if (AppState.activeFilter === 'sweet') return r.category === 'sweet';
    if (AppState.activeFilter === 'super-fast') return r.isSuperFast || r.time <= 15;
    return true;
  });

  container.innerHTML = filtered.map(recipe => createCleanCardHtml(recipe)).join('');
  attachCleanCardEvents(container);
}

function createCleanCardHtml(recipe) {
  const isFav = AppState.favorites.some(f => f.id === recipe.id);

  return `
    <article class="clean-recipe-card" data-id="${recipe.id}">
      <div class="card-top-tags">
        <span class="pill-tag">${recipe.tag}</span>
        <span class="time-tag">⏱️ ${recipe.time}分</span>
      </div>

      <div class="card-title-row">
        <span class="recipe-lead-icon">${recipe.leadIcon}</span>
        <h3 class="recipe-main-title">${recipe.title}</h3>
      </div>

      <p class="recipe-intro-text">${recipe.summary}</p>

      <div class="recipe-ingredients-preview">
        <strong>【材料例】</strong>${recipe.materialPreview}
      </div>

      <button class="card-fav-btn-corner" data-fav-id="${recipe.id}" aria-label="お気に入り保存">
        ${isFav ? '💗' : '🤍'}
      </button>
    </article>
  `;
}

function attachCleanCardEvents(parent) {
  // カード全体クリックでモーダルオープン
  parent.querySelectorAll('.clean-recipe-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-fav-btn-corner')) return;
      const id = card.getAttribute('data-id');
      openDetailModal(id);
    });
  });

  // お気に入りボタンクリック
  parent.querySelectorAll('.card-fav-btn-corner').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-fav-id');
      toggleFavorite(id);
    });
  });
}

function updateCardFavIcons() {
  document.querySelectorAll('.card-fav-btn-corner').forEach(btn => {
    const id = btn.getAttribute('data-fav-id');
    const isFav = AppState.favorites.some(f => f.id === id);
    btn.textContent = isFav ? '💗' : '🤍';
  });
}

function toggleFavorite(id) {
  let recipe = null;
  for (const set of FRIDAY_WEEK_SELECTIONS) {
    recipe = set.recipes.find(r => r.id === id);
    if (recipe) break;
  }
  if (!recipe && AppState.lastAiRecipe && AppState.lastAiRecipe.id === id) {
    recipe = AppState.lastAiRecipe;
  }
  if (!recipe) return;

  const idx = AppState.favorites.findIndex(f => f.id === id);
  if (idx >= 0) {
    AppState.favorites.splice(idx, 1);
    showToast('お気に入りから解除しました');
  } else {
    AppState.favorites.push(recipe);
    showToast('💗 お気に入りに保存しました！');
  }
  saveFavorites();
}

// ==========================================
// 4. Detail Modal View
// ==========================================

function openDetailModal(id) {
  let recipe = null;
  for (const set of FRIDAY_WEEK_SELECTIONS) {
    recipe = set.recipes.find(r => r.id === id);
    if (recipe) break;
  }
  if (!recipe && AppState.lastAiRecipe && AppState.lastAiRecipe.id === id) {
    recipe = AppState.lastAiRecipe;
  }
  if (!recipe) {
    recipe = AppState.favorites.find(r => r.id === id);
  }
  if (!recipe) return;

  AppState.activeDetailRecipe = recipe;
  const modal = document.getElementById('recipe-detail-modal');
  const area = document.getElementById('modal-content-area');
  if (!modal || !area) return;

  const isFav = AppState.favorites.some(f => f.id === recipe.id);

  area.innerHTML = `
    <div class="detail-recipe-hero">
      <div class="detail-recipe-lead-icon">${recipe.leadIcon}</div>
      <div>
        <div style="display:flex; gap:6px; margin-bottom:6px;">
          <span class="pill-tag">${recipe.tag}</span>
          <span class="time-tag">⏱️ 調理時間 ${recipe.time}分</span>
        </div>
        <h2 style="font-size:1.35rem; font-weight:800; line-height:1.35;">${recipe.title}</h2>
      </div>
    </div>

    <p style="font-size:0.9rem; color:#6f655b; margin-bottom:20px; line-height:1.55;">
      ${recipe.summary}
    </p>

    <div class="detail-section-title">
      <span>🥗 必要な材料と分量</span>
      <button id="modal-bulk-add-btn" class="btn-orange" style="font-size:0.8rem; padding:4px 12px;">
        🛒 買い物リストに全追加
      </button>
    </div>

    <table class="detail-ingredients-table">
      <tbody>
        ${recipe.ingredients.map(ing => `
          <tr>
            <td>${ing.name}</td>
            <td class="qty">${ing.amount}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="detail-section-title">
      <span>🍳 作り方の手順（約${recipe.time}分）</span>
    </div>

    <div class="detail-step-list">
      ${recipe.steps.map((st, i) => `
        <div class="detail-step-item">
          <div class="detail-step-badge">${i + 1}</div>
          <div class="detail-step-text">${st}</div>
        </div>
      `).join('')}
    </div>

    ${recipe.chefTip ? `
      <div class="chef-pro-tip">
        <strong>💡 週末シェフの時短ワンポイント:</strong>
        <p style="margin-top:4px;">${recipe.chefTip}</p>
      </div>
    ` : ''}

    <div style="display:flex; gap:10px; margin-top:20px;">
      <button id="modal-toggle-fav-btn" class="btn-subtle" style="flex:1;">
        ${isFav ? '💗 お気に入り解除' : '🤍 お気に入りに保存'}
      </button>
      <button id="modal-timer-start-btn" class="btn-orange" style="flex:2;">
        ⏱️ ${recipe.time}分タイマーを開始
      </button>
    </div>
  `;

  // イベント設定
  document.getElementById('modal-bulk-add-btn')?.addEventListener('click', () => {
    let added = 0;
    recipe.ingredients.forEach(item => {
      const text = `${item.name} (${item.amount})`;
      if (!AppState.shoppingList.some(s => s.text === text)) {
        AppState.shoppingList.push({ id: Date.now() + Math.random(), text, checked: false });
        added++;
      }
    });
    saveShoppingList();
    showToast(`${added}個の材料を買い物リストに追加しました！`);
  });

  document.getElementById('modal-toggle-fav-btn')?.addEventListener('click', () => {
    toggleFavorite(recipe.id);
    openDetailModal(recipe.id);
  });

  document.getElementById('modal-timer-start-btn')?.addEventListener('click', () => {
    modal.classList.add('hidden');
    openTimerModal(recipe.time);
  });

  modal.classList.remove('hidden');
}

// ==========================================
// 5. Shopping Sheet Logic
// ==========================================

function renderShoppingSheet() {
  const listEl = document.getElementById('sheet-shopping-list');
  const badgeEl = document.getElementById('tab-cart-badge');
  if (!listEl) return;

  const uncheckedCount = AppState.shoppingList.filter(s => !s.checked).length;
  if (badgeEl) badgeEl.textContent = uncheckedCount;

  if (AppState.shoppingList.length === 0) {
    listEl.innerHTML = `
      <li style="text-align:center; padding:24px 0; color:#968c83; font-size:0.88rem;">
        買い物メモは空です。<br>レシピから「買い物リストに追加」を押してみましょう！
      </li>
    `;
    return;
  }

  listEl.innerHTML = AppState.shoppingList.map(item => `
    <li class="sheet-item ${item.checked ? 'done' : ''}">
      <label class="sheet-item-label">
        <input type="checkbox" ${item.checked ? 'checked' : ''} data-id="${item.id}">
        <span>${item.text}</span>
      </label>
      <button class="sheet-item-del" data-del-id="${item.id}" title="削除">✕</button>
    </li>
  `).join('');

  listEl.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', () => {
      const id = parseFloat(chk.getAttribute('data-id'));
      const found = AppState.shoppingList.find(s => s.id === id);
      if (found) {
        found.checked = chk.checked;
        saveShoppingList();
      }
    });
  });

  listEl.querySelectorAll('.sheet-item-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseFloat(btn.getAttribute('data-del-id'));
      AppState.shoppingList = AppState.shoppingList.filter(s => s.id !== id);
      saveShoppingList();
    });
  });
}

function handleAddCustomShoppingItem() {
  const input = document.getElementById('sheet-custom-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  AppState.shoppingList.push({ id: Date.now(), text: val, checked: false });
  input.value = '';
  saveShoppingList();
}

function handleClearCheckedShopping() {
  AppState.shoppingList = AppState.shoppingList.filter(s => !s.checked);
  saveShoppingList();
  showToast('購入済みの食材を整理しました！');
}

function handleCopyShoppingSheet() {
  if (AppState.shoppingList.length === 0) {
    showToast('コピーするアイテムがありません');
    return;
  }
  const text = '🛒 【金曜レシピ手帳】週末の買い物リスト\n' +
    AppState.shoppingList.map(s => `${s.checked ? '☑' : '□'} ${s.text}`).join('\n');
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 LINEやメモ帳に貼れる形式でコピーしました！');
  }).catch(() => {
    showToast('コピーに失敗しました');
  });
}

// ==========================================
// 6. Favorites Tab Logic
// ==========================================

function renderFavoritesList() {
  const container = document.getElementById('favorites-list-container');
  const emptyBox = document.getElementById('fav-empty-box');
  if (!container || !emptyBox) return;

  if (AppState.favorites.length === 0) {
    container.innerHTML = '';
    emptyBox.classList.remove('hidden');
  } else {
    emptyBox.classList.add('hidden');
    container.innerHTML = AppState.favorites.map(f => createCleanCardHtml(f)).join('');
    attachCleanCardEvents(container);
  }
}

// ==========================================
// 7. Cooking Logs (Made records)
// ==========================================

function renderCookingLogs() {
  const container = document.getElementById('logs-container');
  if (!container) return;

  if (AppState.cookingLogs.length === 0) {
    container.innerHTML = `
      <p style="text-align:center; padding:24px 0; color:#968c83; font-size:0.88rem; grid-column: 1/-1;">
        まだ記録がありません。「✏️ 記録をつける」から美味しかった料理の感想を残してみましょう！
      </p>
    `;
    return;
  }

  container.innerHTML = AppState.cookingLogs.map(log => `
    <div class="log-item-card">
      <div class="log-date-row">
        <span>📅 ${log.date}</span>
        <span>${log.rating}</span>
      </div>
      <h4 class="log-dish-title">${log.dish}</h4>
      <p class="log-comment">${log.comment || 'メモなし'}</p>
    </div>
  `).join('');
}

function handleSaveNewLog(e) {
  e.preventDefault();
  const dish = document.getElementById('log-in-title')?.value.trim();
  const date = document.getElementById('log-in-date')?.value || new Date().toISOString().split('T')[0];
  const rating = document.getElementById('log-in-rating')?.value || '⭐⭐⭐⭐⭐';
  const comment = document.getElementById('log-in-comment')?.value.trim();

  if (!dish) return;

  AppState.cookingLogs.unshift({ id: Date.now(), dish, date, rating, comment });
  saveCookingLogs();
  document.getElementById('new-log-modal')?.classList.add('hidden');
  document.getElementById('new-log-form')?.reset();
  showToast('📖 料理ノートに保存しました！');
}

// ==========================================
// 8. AI Recipe Generator
// ==========================================

function handleAiGenerateRecipe(e) {
  e.preventDefault();
  const category = document.getElementById('ai-in-category').value;
  const ingredients = document.getElementById('ai-in-ingredients').value.trim() || '身近な食材';
  const time = parseInt(document.getElementById('ai-in-time').value, 10) || 20;
  const taste = document.getElementById('ai-in-taste').value;

  const submitBtn = document.getElementById('ai-generate-submit');
  const resultArea = document.getElementById('ai-generated-result');
  if (!submitBtn || !resultArea) return;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '✦ AIが30分レシピを考案中...';

  setTimeout(() => {
    const isSweet = category === 'sweet';
    const leadIcon = isSweet ? '🥞' : '🥘';
    const title = isSweet 
      ? `フライパンで簡単！${ingredients}の${taste}スフレパンケーキ`
      : `15分でパパッと！${ingredients}の${taste}時短ソテー`;

    const recipe = {
      id: 'ai-recipe-' + Date.now(),
      title,
      leadIcon,
      tag: isSweet ? '🍰 AI考案スイーツ' : '🔍 AI時短おかず',
      category,
      time,
      summary: `家にある【${ingredients}】を使って、サッと${time}分で作れる週末の時短メニューです。`,
      materialPreview: `${ingredients}・調味料各種`,
      ingredients: [
        { name: ingredients, amount: '主役分 (約200g)' },
        { name: `${taste}ベースの調味料（醤油、みりん、酒など）`, amount: '各大さじ1〜2' },
        { name: 'サラダ油またはバター', amount: '大さじ1' },
        { name: '塩・こしょう', amount: '少々' }
      ],
      steps: [
        `${ingredients}を食べやすいひと口大に手早くカットします。`,
        'フライパンを温めて油を熱し、火の通りにくい食材から中火で香ばしく炒めます。',
        'フタをして弱火で3分蒸し焼きにし、中までふっくら火を通します。',
        `${taste}調味料を回し入れ、中火で照りが出るまで一気に煮絡めて完成！`
      ],
      chefTip: '厚みを均等に切ることで、短い調理時間でも均一に火が通りジューシーに仕上がります！'
    };

    AppState.lastAiRecipe = recipe;

    resultArea.innerHTML = `
      <div style="background:#faf6ef; border:1.5px solid #f0e4d0; border-radius:18px; padding:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span class="pill-tag">${recipe.tag}</span>
          <span class="time-tag">⏱️ ${recipe.time}分</span>
        </div>
        <h3 style="font-size:1.25rem; font-weight:800; margin-bottom:8px;">${recipe.leadIcon} ${recipe.title}</h3>
        <p style="font-size:0.86rem; color:#6f655b; margin-bottom:14px;">${recipe.summary}</p>
        
        <div style="display:flex; gap:8px;">
          <button id="ai-add-cart-btn" class="btn-subtle" style="flex:1; font-size:0.82rem;">🛒 買い物メモに追加</button>
          <button id="ai-save-fav-btn" class="btn-subtle" style="flex:1; font-size:0.82rem;">💗 お気に入りに保存</button>
          <button id="ai-timer-btn" class="btn-orange" style="flex:1; font-size:0.82rem;">⏱️ タイマー始動</button>
        </div>
      </div>
    `;

    resultArea.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.innerHTML = '✦ 別の組み合わせで再考案';

    document.getElementById('ai-add-cart-btn')?.addEventListener('click', () => {
      recipe.ingredients.forEach(i => AppState.shoppingList.push({ id: Date.now()+Math.random(), text: i.name, checked: false }));
      saveShoppingList();
      showToast('材料を買い物リストに追加しました！');
    });

    document.getElementById('ai-save-fav-btn')?.addEventListener('click', () => {
      toggleFavorite(recipe.id);
    });

    document.getElementById('ai-timer-btn')?.addEventListener('click', () => {
      document.getElementById('ai-modal')?.classList.add('hidden');
      openTimerModal(time);
    });
  }, 600);
}

// ==========================================
// 9. Kitchen Timer Logic
// ==========================================

function formatTimeDigits(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const digits = document.getElementById('timer-dial-digits');
  if (digits) digits.textContent = formatTimeDigits(AppState.timerSeconds);
}

function toggleTimer() {
  const btn = document.getElementById('timer-btn-toggle');
  const status = document.getElementById('timer-dial-status');

  if (AppState.isTimerRunning) {
    clearInterval(AppState.timerInterval);
    AppState.isTimerRunning = false;
    if (btn) btn.textContent = '再開';
    if (status) status.textContent = '一時停止中';
  } else {
    if (AppState.timerSeconds <= 0) AppState.timerSeconds = AppState.timerInitialSeconds;
    AppState.isTimerRunning = true;
    if (btn) btn.textContent = '一時停止';
    if (status) status.textContent = 'カウントダウン中...';

    AppState.timerInterval = setInterval(() => {
      if (AppState.timerSeconds > 0) {
        AppState.timerSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(AppState.timerInterval);
        AppState.isTimerRunning = false;
        if (btn) btn.textContent = 'スタート';
        if (status) status.textContent = '🎉 料理の完成です！';
        playTimerSound();
        showToast('⏰ タイマーの時間になりました！');
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(AppState.timerInterval);
  AppState.isTimerRunning = false;
  AppState.timerSeconds = AppState.timerInitialSeconds;
  updateTimerDisplay();

  const btn = document.getElementById('timer-btn-toggle');
  const status = document.getElementById('timer-dial-status');
  if (btn) btn.textContent = 'スタート';
  if (status) status.textContent = '待機中';
}

function openTimerModal(minutes) {
  const modal = document.getElementById('timer-modal');
  if (!modal) return;
  resetTimer();
  AppState.timerSeconds = minutes * 60;
  AppState.timerInitialSeconds = minutes * 60;
  updateTimerDisplay();

  document.querySelectorAll('.t-chip').forEach(c => {
    c.classList.toggle('active', parseInt(c.getAttribute('data-m'), 10) === minutes);
  });

  modal.classList.remove('hidden');
  toggleTimer();
}

function playTimerSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const beep = (freq, start, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + start);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime + start);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + start);
      osc.stop(audioCtx.currentTime + start + duration);
    };
    beep(523.25, 0, 0.3);
    beep(659.25, 0.2, 0.3);
    beep(783.99, 0.4, 0.5);
  } catch (e) {
    console.log('AudioContext notification', e);
  }
}

// ==========================================
// 10. Curated Sites Tab
// ==========================================

function renderCuratedSitesList() {
  const container = document.getElementById('curated-sites-list');
  if (!container) return;

  container.innerHTML = EXTERNAL_SITES.map(s => `
    <div class="ext-site-card">
      <div class="ext-site-header">
        <span class="ext-site-icon">${s.icon}</span>
        <div>
          <h3 class="ext-site-title">${s.name}</h3>
          <span style="font-size:0.75rem; color:#85796f;">${s.features}</span>
        </div>
      </div>
      <p style="font-size:0.84rem; color:#6f655b; line-height:1.45; margin-bottom:12px;">${s.desc}</p>
      
      <div class="ext-site-links">
        ${s.quickLinks.map(ql => `
          <a href="${s.url}${encodeURIComponent(ql.q)}" target="_blank" rel="noopener noreferrer" class="ext-direct-link">
            <span>${ql.text}</span>
            <span>↗</span>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function handleCuratedSearch() {
  const q = document.getElementById('curated-search-keyword')?.value.trim();
  if (!q) {
    showToast('食材や料理名を入力してください');
    return;
  }
  window.open(`https://cookpad.com/search/${encodeURIComponent(q + ' 時短 30分')}`, '_blank');
  window.open(`https://www.kurashiru.com/search?query=${encodeURIComponent(q + ' 30分')}`, '_blank');
  showToast(`「${q}」のレシピをまとめて検索しました！`);
}

// ==========================================
// 11. Toast
// ==========================================

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast-bubble');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ==========================================
// 12. App Initialization & Event Listeners
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderRecipeCards();
  renderShoppingSheet();
  renderFavoritesList();
  renderCookingLogs();
  renderCuratedSitesList();
  updateTimerDisplay();

  // 今日の日付をログ入力にセット
  const logDateInput = document.getElementById('log-in-date');
  if (logDateInput) logDateInput.value = new Date().toISOString().split('T')[0];

  // タブ切り替え
  document.querySelectorAll('.nav-tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.nav-tab-btn').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const tabKey = tab.getAttribute('data-tab');
      const targetPane = document.getElementById('pane-' + tabKey);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // フィルターチップ（すべて、主菜、お菓子、15分超時短）
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.activeFilter = pill.getAttribute('data-filter');
      renderRecipeCards();
    });
  });

  // 「🔄 次の金曜」ボタン（セレクション切り替え）
  document.getElementById('next-friday-btn')?.addEventListener('click', () => {
    AppState.currentSelectionIndex = (AppState.currentSelectionIndex + 1) % FRIDAY_WEEK_SELECTIONS.length;
    renderRecipeCards();
    showToast(`🔄 次の金曜日のセレクションに切り替えました！`);
  });

  // 「✦ AI提案 / アップグレード」ボタン
  document.getElementById('ai-upgrade-btn')?.addEventListener('click', () => {
    document.getElementById('ai-modal')?.classList.remove('hidden');
  });

  // モーダル閉じるボタン
  document.getElementById('modal-close-x')?.addEventListener('click', () => {
    document.getElementById('recipe-detail-modal')?.classList.add('hidden');
  });
  document.getElementById('ai-modal-close')?.addEventListener('click', () => {
    document.getElementById('ai-modal')?.classList.add('hidden');
  });
  document.getElementById('timer-modal-close')?.addEventListener('click', () => {
    document.getElementById('timer-modal')?.classList.add('hidden');
  });
  document.getElementById('new-log-close')?.addEventListener('click', () => {
    document.getElementById('new-log-modal')?.classList.add('hidden');
  });

  // 背景クリックで閉じる
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // 買い物シート操作
  document.getElementById('sheet-add-btn')?.addEventListener('click', handleAddCustomShoppingItem);
  document.getElementById('sheet-custom-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAddCustomShoppingItem();
  });
  document.getElementById('sheet-clear-checked-btn')?.addEventListener('click', handleClearCheckedShopping);
  document.getElementById('copy-shopping-sheet-btn')?.addEventListener('click', handleCopyShoppingSheet);

  // 料理ログ記録
  document.getElementById('open-new-log-modal-btn')?.addEventListener('click', () => {
    document.getElementById('new-log-modal')?.classList.remove('hidden');
  });
  document.getElementById('new-log-form')?.addEventListener('submit', handleSaveNewLog);

  // AIフォーム
  document.getElementById('ai-quick-form')?.addEventListener('submit', handleAiGenerateRecipe);

  // タイマー操作
  document.getElementById('timer-btn-toggle')?.addEventListener('click', toggleTimer);
  document.getElementById('timer-btn-reset')?.addEventListener('click', resetTimer);
  document.querySelectorAll('.t-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const min = parseInt(chip.getAttribute('data-m'), 10);
      document.querySelectorAll('.t-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      resetTimer();
      AppState.timerSeconds = min * 60;
      AppState.timerInitialSeconds = min * 60;
      updateTimerDisplay();
    });
  });

  // 外部サイト検索
  document.getElementById('curated-search-submit')?.addEventListener('click', handleCuratedSearch);
  document.getElementById('curated-search-keyword')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleCuratedSearch();
  });
  document.querySelectorAll('.tag-quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-q');
      const input = document.getElementById('curated-search-keyword');
      if (input) input.value = q;
      handleCuratedSearch();
    });
  });

  // 下スクロールボタン
  document.getElementById('scroll-bottom-btn')?.addEventListener('click', () => {
    window.scrollBy({ top: 400, behavior: 'smooth' });
  });
});
