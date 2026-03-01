export type Language = 'TC' | 'SC' | 'EN' | 'JP';

export const translations = {
  TC: {
    nav: {
      book: '預約諮詢',
    },
    hero: {
      title: '駕馭財富秩序，擁抱世代自由。',
      subtitle: '在複雜的全球環境中，您的資產需要一位「首席指揮官」與「跨界翻譯官」。從 Intel 晶圓工程師到管理 10 億美金的家族 CFO，我以工程師的極致精度與 CFA 的金融宏觀，為您的家族資產編寫底層代碼，構築傳世基業。',
      badges: [
        'CFA 特許金融分析師', 
        'MDRT 百萬圓桌會員', 
        '前 Intel 工程師',
        '前全球頭部中介風險管理事務所創始人',
        '中日港三碩士學位 🇨🇳🇯🇵🇭🇰',
        '香港恒生大學知識交流學院 IKE',
        '香港華人家族財富傳承研究中心',
        '胤源全球家族治理研究院',
        '80後太陽：金牛座 & 上升：天蠍座 AB 血型',
        '上海福州成都三地「混血」族'
      ],
    },
    why: {
      title: '您的資產是在「裸奔」，還是在「精密運轉」？',
      pain: {
        title: '碎片化產品銷售 (痛點)',
        desc: '銀行家只懂理財，律師只懂條款，會計師只看稅單。他們各掃門前雪，導致您的資產像散落的拼圖，甚至互相衝突；往往等到稅務稽查或健康危機時才倉促應對，代價高昂。',
      },
      solution: {
        title: 'Francis 的系統結構工程 (方案)',
        points: [
          {
            label: '從「碎片化」到「系統性一致」',
            desc: '作為您的全職 CFO，我將 Intel 的「良率管理」引入財富架構。將銀行、保險、信託無縫對接，確保每一個金融動作都絕對服從於家族的終極目標。',
          },
          {
            label: '從「被動防禦」到「主動隔離」',
            desc: '預演未來 30 年「人、財、事」的變遷，提前設立防火牆，讓您在不確定性中掌握絕對主動權。',
          },
          {
            label: '從「利益博弈」到「買方守門人」',
            desc: '我與單一產品解綁，只與您的家族利益綁定。為您在全球市場中篩選最優資產，做您最忠誠的「首席採購官」。',
          },
        ],
      },
    },
    diagnosis: {
      title: 'The Wealth MRI —— 國際家族財富精密透視',
      intro: '如同頂級的醫療體檢，沒有精密的診斷，絕不輕易開具處方。請與我的虛擬助理 Sophia 一起，完成這場 15 問的財富核磁共振。',
      dimensions: [
        {
          name: 'Dimension (廣度)',
          desc: '基於獨家 "4+1 資產全景模型"，打破法稅信息孤島，掃描您的資產負債表是否存在「隱形裂紋」。',
        },
        {
          name: 'Duration (長度)',
          desc: '30 年未來現金流壓力測試。模擬子女教育、長輩醫療、家族傳承等關鍵節點，測試資產生命週期。',
        },
        {
          name: 'Dynamic (力度)',
          desc: '評估資產在通脹與稅務磨損下的真實增長力，診斷是否需要引入機構級的動態管理。',
        },
      ],
      btn: '啟動我的 3D 財富 X 光掃描 | 獲取專屬分析報告',
    },
    pillars: {
      title: '四大核心板塊',
      items: [
        {
          icon: '🌐',
          title: '創富 | 全球資產配置與稅務優化',
          desc: '鏈接全球頂尖私行與外部資管 (EAM)，以機構級費率佈局美元與離岸資產，合法優化全球稅務結構。',
        },
        {
          icon: '⚖️',
          title: '守富 | 家族信託與跨境法律框架',
          desc: '設立海外控股公司與離岸信託，打造企業與個人資產的終極防火牆，防範婚姻與債務風險。',
        },
        {
          icon: '🛡️',
          title: '傳富 | 高階保險與流動性管理',
          desc: '靈活運用保費融資槓桿，將「免稅傳承」與「投資遞延」完美結合，解決跨代流動性難題。',
        },
        {
          icon: '🎓',
          title: '享富 | 後代教育與家族辦公室治理',
          desc: '從香港/海外身份規劃、頂尖名校留學，到家族憲章制定與二代接班人培養。',
        },
      ],
    },
    offers: {
      title: '三大特色服務 (稀缺資源)',
      items: [
        {
          title: 'The Legacy Shield (保單信託)',
          desc: '攜手 Solid Rock 灜盛託管，一張保單即可啟動的迷你家族辦公室。極低門檻實現身故理賠金的定向傳承與絕對債務隔離。',
        },
        {
          title: 'The Global Growth Engine (VUL + EAM 雙核驅動)',
          desc: '利用 VUL 強大的稅務遞延優勢作為「容器」，內核搭載 EAM 的全球主動管理能力。實現「資產隔離」與「超額增值」。',
        },
        {
          title: 'The Elite Health (日本頂級大健康)',
          desc: '直通馬雲、劉強東同級別的日本 VIP 醫療資源。由池老師團隊提供專屬通道，涵蓋精密癌篩與幹細胞抗衰。',
        },
      ],
    },
    pricing: {
      title: 'The Francis Chi Privilege —— 您的專屬 CFO 服務級別協議 (SLA)',
      intro: '為了保證工程師級別的交付質量，我每月僅接受 5 位 高淨值家族的深度戰略諮詢。支付 1,680 元預約問診，即可解鎖這套價值 16,800 HKD 的家族 CFO 級別底層梳理服務。',
      original: '總價值 16,800 HKD',
      current: '限時預約 ¥1,680',
      privileges: [
        {
          icon: '🧬',
          title: '家族全景圖譜 (Family Mapping)',
          value: '以人為本的頂層架構起點。',
          detail: '建立並長期更新家族系圖，明確家庭每一位成員的健康狀況、現有保障缺口、隱憂以及未來的傳承心願掃描。'
        },
        {
          icon: '📊',
          title: '4+1 資產全景盤點 (Asset Audit)',
          value: '家族資產負債表的「核磁共振」。',
          detail: '基於獨創的「4+1 模型」，對您現有的資產狀況進行短、中、長期的結構性盤點與風險壓力測試，提供深度的資產負債表分析。'
        },
        {
          icon: '⏳',
          title: '未來 30 年現金流沙盤 (Cash Flow Simulation)',
          value: '確保現金流與家族生命等長。',
          detail: '繪製家庭未來藍圖，針對子女教育、醫療、婚姻、創業，以及父母養老與財富傳承，進行精準的未來現金流規劃、分析與設計。'
        },
        {
          icon: '🛡️',
          title: '家族保單全託管 (Policy Stewardship)',
          value: '拒絕「孤兒單」，建立全球保障防禦網。',
          detail: '全面分析全家族目前已有的保障（涵蓋中國大陸、香港及海外保單），為您建立專屬電子檔案，提供一站式的保單權益查詢、管理與理賠閉環服務。[單項價值 ¥8,000]'
        },
        {
          icon: '🌐',
          title: '全球架構與投資方案定制 2.0 (Global Architecture)',
          value: '跨越司法管轄區的財富佈局。',
          detail: '覆蓋中國大陸、香港、澳門、新加坡、百慕大及美國等多地資源，提供高端保險、離岸信託以及全球投資組合方案的專業諮詢與 DIY 定制服務。'
        },
        {
          icon: '💳',
          title: '流動性解決方案 (Liquidity Access)',
          value: '打通資金出海與使用的「最後一公里」。',
          detail: '協助開立香港主流銀行賬戶（可綁定微信支付，限非香港居民），完美解決家族中短期的資金流動性與規劃難題。[單項價值 ¥2,000]'
        },
        {
          icon: '📈',
          title: '多元投資賬戶開通 (Diversified Accounts)',
          value: '鏈接傳統金融與 Web3.0 數字資產。',
          detail: '協助開立香港證券賬戶及合規的數字貨幣賬戶，尊享海外博主特權（視政策調整），並提供專業的 CRS 申報及投資風險指導。[單項價值 ¥2,000+]'
        },
        {
          icon: '🏥',
          title: '頂層醫療與家辦生態圈 (Elite Health & FO System)',
          value: '直通頂豪圈層的稀缺資源。',
          detail: '健康管理：承諾親自陪伴赴日進行 VIP 醫療（直通馬雲、劉強東同級別的精密體檢與幹細胞等項目）。家辦智庫：對接跨境稅務、全球投資、香港身份規劃、CRS 規劃、企業出海及國際教育等領域的家族辦公室專家諮詢。'
        }
      ],
      cta: '支付 ¥1,680 預約池老 C：20 分鐘 1:1 線上戰略對話',
    },
    brandStory: {
      nav: '為什麼是我？',
      title: '品牌故事：從芯片精度到財富維度',
      quote: '「在財富的世界裡，0.1% 的誤差，經過時間的複利，就是一代人的遺憾。」',
      content: [
        '我是池望青 Francis，您的國際家庭 CFO。 我的職業生涯起步於全球科技巨頭 Intel，作為一名晶圓預處理工程師，我的工作是確保納米級芯片的良率。那段經歷將「工程師思維 (Engineer Mindset)」刻入了我的骨髓——嚴密的邏輯、對風險的零容忍，以及對系統穩定性的極致追求。',
        '恰逢 2008 年汶川地震期間，受到電子科技大學博士生導師鮑景富教授的引薦，我負笈東瀛，在早稻田大學攻讀信息生產系統碩士；又在香港恒生大學深造創業管理。從理工科的精密計算，到商學院的宏觀視野，我發現家族財富管理與芯片製造驚人地相似：它們都需要頂層設計，都恐懼「隱形裂紋」，都需要在複雜的全球環境中保持運行的「良率」。',
        '現在，作為 CFA（特許金融分析師）協會會員與 RFP（美國註冊財務策劃師），我不再設計與製造芯片，而是為高淨值家族設計「財富芯片」。利用精通中、英、日、粵四語的優勢，我穿梭於香港、新加坡、日本與祖國大陸之間，消除信息不對稱，用工程師的嚴謹與金融家的遠見，為您的家族基業構築最堅固的底層代碼。',
      ],
      gallery: [
        { title: '過去', desc: '根基與傳承', seed: 'heritage' },
        { title: '現在', desc: '全球領導力', seed: 'executive' },
        { title: '未來', desc: '願景與傳承', seed: 'visionary' }
      ]
    },
    coreValues: {
      title: '為什麼您需要一位「全職」的國際家庭 CFO？',
      subtitle: '在複雜的全球環境中，您的資產需要一位「首席指揮官」和「跨界翻譯官」，而非一群各自為戰的「產品推銷員」。',
      transformations: [
        {
          title: '從「碎片化」到「系統化」',
          pain: '私人銀行家只懂理財，律師只懂法律，會計師只懂稅務。不同機構間的信息孤島與溝通斷層，導致您的資產像散落的拼圖，缺乏統一的頂層設計，甚至因架構衝突導致風險外溢。',
          solution: '「我是您資產的系統架構師。」 我將 Intel 晶圓製造的良率管理思維引入財富管理。作為您的全職 CFO，我負責協調銀行、保險、信託與法務團隊，運用 4+1 資產全景模型，確保每一個金融動作都服務於同一個終極目標，實現結構性的一致。',
        },
        {
          title: '從「被動應對」到「主動佈局」',
          pain: '大多數家庭往往等到稅務稽查、CRS 申報、子女婚變或長輩突發健康危機時，才倉促尋找解決方案。這種「打補丁」式的應對，往往成本高昂且為時已晚。',
          solution: '「我是您未來的風險預警機。」 基於跨學科前瞻視角，我為您預演未來 10-30 年的「人、財、事」變遷。利用「現金流沙盤推演」，我們提前預見流動性缺口與法律風險，在問題發生前完成風險隔離與主動佈局。',
        },
        {
          title: '從「利益博弈」到「買方立場」',
          pain: '傳統顧問往往受機構佣金驅動，推薦的是「利潤最高」的產品，而非「最適合您」的方案。您與顧問之間存在天然的利益衝突。',
          solution: '「我是您家族利益的守門人。」 作為全職 CFO，我與單一產品解綁，與您的家族命運綁定。無論是篩選 EAM、談判保險費率，還是對接日本 VIP 醫療資源，我都堅定地站在買方立場。我的 KPI 只有一個：在安全、省心、高效的前提下，追求家族利益的最大化。',
        },
      ],
      factor: {
        title: '我的獨特價值：跨學科融合的稀缺性',
        intro: '在金融圈，懂投資的人很多，但同時具備工程師精度與跨文化深度的人極少。',
        items: [
          {
            label: '跨學科融合 (Interdisciplinary Fusion)',
            desc: '我將 Intel 的製程工藝引入財富管理，結合 CFA 的投資邏輯與 RFP 的規劃視角。這確保您的資產配置方案不僅在理論上完美，更在執行層面無懈可擊。',
          },
          {
            label: '四語文化橋樑 (Quad-Lingual Bridge)',
            desc: '精通中、英、日、粵。這不僅是語言的翻譯，更是法律與商業慣例的翻譯。我能為您消除所有的信息噪音，直達全球核心資源。',
          },
          {
            label: '三地學術背景 (Tri-Regional Wisdom)',
            desc: '從大陸的成長背景，到日本早稻田的科研歷練，再到香港恒生大學的金融深造。我深諳東亞家族的文化羈絆與西方金融的契約精神，守護家族財富永續。',
          },
        ],
      },
    },
  },
  SC: {
    nav: {
      book: '预约咨询',
    },
    hero: {
      title: '驾驭财富秩序，拥抱世代自由。',
      subtitle: '在复杂的全球环境中，您的资产需要一位「首席指挥官」与「跨界翻译官」。从 Intel 晶圆工程师到管理 10 亿美金的家族 CFO，我以工程师的极致精度与 CFA 的金融宏观，为您的家族资产编写底层代码，构筑传世基业。',
      badges: [
        'CFA 特许金融分析师', 
        'MDRT 百万圆桌会员', 
        '前 Intel 工程师',
        '前全球头部中介风险管理事务所创始人',
        '中日港三硕士学位 🇨🇳🇯🇵🇭🇰',
        '香港恒生大学知识交流学院 IKE',
        '香港华人家族财富传承研究中心',
        '胤源全球家族治理研究院',
        '80后太阳：金牛座 & 上升：天蝎座 AB 血型',
        '上海福州成都三地“混血”族'
      ],
    },
    why: {
      title: '您的资产是在「裸奔」，还是在「精密运转」？',
      pain: {
        title: '碎片化产品销售 (痛点)',
        desc: '银行家只懂理财，律师只懂条款，会计师只看税单。他们各扫门前雪，导致您的资产像散落的拼图，甚至互相冲突；往往等到税务稽查或健康危机时才仓促应对，代价高昂。',
      },
      solution: {
        title: 'Francis 的系统结构工程 (方案)',
        points: [
          {
            label: '从「碎片化」到「系统性一致」',
            desc: '作为您的全职 CFO，我将 Intel 的「良率管理」引入财富架构。将银行、保险、信托无缝对接，确保每一个金融动作都绝对服从于家族的终极目标。',
          },
          {
            label: '从「主动防御」到「主动隔离」',
            desc: '预演未来 30 年「人、财、事」的变迁，提前设立防火墙，让您在不确定性中掌握绝对主动权。',
          },
          {
            label: '从「利益博弈」到「买方守门人」',
            desc: '我与单一产品解绑，只与您的家族利益绑定。为您在全球市场中筛选最优资产，做您最忠诚的「首席采购官」。',
          },
        ],
      },
    },
    diagnosis: {
      title: 'The Wealth MRI —— 国际家族财富精密透视',
      intro: '如同顶级的医疗体检，没有精密的诊断，绝不轻易开具处方。请与我的虚拟助理 Sophia 一起，完成这场 15 问的财富核磁共振。',
      dimensions: [
        {
          name: 'Dimension (广度)',
          desc: '基于独家 "4+1 资产全景模型"，打破法税信息孤岛，扫描您的资产负债表是否存在「隐形裂纹」。',
        },
        {
          name: 'Duration (长度)',
          desc: '30 年未来现金流压力测试。模拟子女教育、长辈医疗、家族传承等关键节点，测试资产生命周期。',
        },
        {
          name: 'Dynamic (力度)',
          desc: '评估资产在通胀与税务磨损下的真实增长力，诊断是否需要引入机构级的动态管理。',
        },
      ],
      btn: '启动我的 3D 财富 X 光扫描 | 获取专属分析报告',
    },
    pillars: {
      title: '四大核心板块',
      items: [
        {
          icon: '🌐',
          title: '创富 | 全球资产配置与税务优化',
          desc: '链接全球顶尖私行与外部资管 (EAM)，以机构级费率布局美元与离岸资产，合法优化全球税务结构。',
        },
        {
          icon: '⚖️',
          title: '守富 | 家族信托与跨境法律框架',
          desc: '设立海外控股公司与离岸信託，打造企业与个人资产的终极防火墙，防范婚姻与债务风险。',
        },
        {
          icon: '🛡️',
          title: '传富 | 高阶保险与流动性管理',
          desc: '灵活运用保费融资杠杆，将「免税传承」与「投资递延」完美结合，解决跨代流动性难题。',
        },
        {
          icon: '🎓',
          title: '享富 | 后代教育与家族办公室治理',
          desc: '从香港/海外身份规划、顶尖名校留学，到家族宪章制定与二代接班人培养。',
        },
      ],
    },
    offers: {
      title: '三大特色服务 (稀缺资源)',
      items: [
        {
          title: 'The Legacy Shield (保单信托)',
          desc: '携手 Solid Rock 灜盛托管，一张保单即可启动的迷你家族办公室。极低门槛实现身故理赔金的定向传承与绝对债务隔离。',
        },
        {
          title: 'The Global Growth Engine (VUL + EAM 双核驱动)',
          desc: '利用 VUL 强大的税务递延优势作为「容器」，内核搭载 EAM 的全球主动管理能力。实现「资产隔离」与「超额增值」。',
        },
        {
          title: 'The Elite Health (日本顶级大健康)',
          desc: '直通马云、刘强东同级别的日本 VIP 医疗资源。由池老师团队提供专属通道，涵盖精密癌筛与干细胞抗衰。',
        },
      ],
    },
    pricing: {
      title: 'The Francis Chi Privilege —— 您的专属 CFO 服务级别协议 (SLA)',
      intro: '为了保证工程师级别的交付质量，我每月仅接受 5 位 高净值家族的深度战略咨询。支付 1,680 元预约问诊，即可解锁这套价值 16,800 HKD 的家族 CFO 级别底层梳理服务。',
      original: '总价值 16,800 HKD',
      current: '限时预约 ¥1,680',
      privileges: [
        {
          icon: '🧬',
          title: '家族全景图谱 (Family Mapping)',
          value: '以人为本的顶层架构起点。',
          detail: '建立并长期更新家族系图，明确家庭每一位成员的健康状况、现有保障缺口、隐忧以及未来的传承心愿扫描。'
        },
        {
          icon: '📊',
          title: '4+1 资产全景盘点 (Asset Audit)',
          value: '家族资产负债表的「核磁共振」。',
          detail: '基于独创的「4+1 模型」，对您现有的资产状况进行短、中、长期的结构性盘点与风险压力测试，提供深度的资产负债表分析。'
        },
        {
          icon: '⏳',
          title: '未来 30 年现金流沙盘 (Cash Flow Simulation)',
          value: '确保现金流与家族生命等长。',
          detail: '绘制家庭未来蓝图，针对子女教育、医疗、婚姻、创业，以及父母养老与财富传承，进行精准的未来现金流规划、分析与设计。'
        },
        {
          icon: '🛡️',
          title: '家族保单全托管 (Policy Stewardship)',
          value: '拒绝「孤儿单」，建立全球保障防御网。',
          detail: '全面分析全家族目前已有的保障（涵盖中国大陆、香港及海外保单），为您建立专属电子档案，提供一站式的保单权益查询、管理与理赔闭环服务。[单项价值 ¥8,000]'
        },
        {
          icon: '🌐',
          title: '全球架构与投资方案定制 2.0 (Global Architecture)',
          value: '跨越司法管辖区的财富布局。',
          detail: '覆盖中国大陆、香港、澳门、新加坡、百慕大及美国等多地资源，提供高端保险、离岸信托以及全球投资组合方案的专业咨询与 DIY 定制服务。'
        },
        {
          icon: '💳',
          title: '流动性解决方案 (Liquidity Access)',
          value: '打通资金出海与使用的「最后一公里」。',
          detail: '协助开立香港主流银行账户（可绑定微信支付，限非香港居民），完美解决家族中短期的资金流动性与规划难题。[单项价值 ¥2,000]'
        },
        {
          icon: '📈',
          title: '多元投资账户开通 (Diversified Accounts)',
          value: '链接传统金融与 Web3.0 数字资产。',
          detail: '协助开立香港证券账户及合规的数字货币账户，尊享海外博主特权（视政策调整），并提供专业的 CRS 申报及投资风险指导。[单项价值 ¥2,000+]'
        },
        {
          icon: '🏥',
          title: '顶层医疗与家办生态圈 (Elite Health & FO System)',
          value: '直通顶豪圈层的稀缺资源。',
          detail: '健康管理：承诺亲自陪伴赴日进行 VIP 医疗（直通马云、刘强东同级别的精密体检与干细胞等项目）。家办智库：对接跨境税务、全球投资、香港身份规划、CRS 规划、企业出海及国际教育等领域的家族办公室专家咨询。'
        }
      ],
      cta: '支付 ¥1,680 预约池老 C：20 分钟 1:1 线上战略对话',
    },
    brandStory: {
      nav: '为什么是我？',
      title: '品牌故事：从芯片精度到财富维度',
      quote: '「在财富的世界里，0.1% 的误差，经过时间的复利，就是一代人的遗憾。」',
      content: [
        '我是池望青 Francis，您的国际家庭 CFO。 我的职业生涯起步于全球科技巨头 Intel，作为一名晶圆预处理工程师，我的工作是确保纳米级芯片的良率。那段经历将「工程师思维 (Engineer Mindset)」刻入了我的骨髓——严密的逻辑、对风险的零容忍，以及对系统稳定性的极致追求。',
        '恰逢 2008 年汶川地震期间，受到电子科技大学博士生导师鲍景富教授的引荐，我负笈东瀛，在早稻田大学攻读信息生产系统硕士；又在香港恒生大学深造创业管理。从理工科的精密计算，到商学院的宏观视野，我发现家族财富管理与芯片制造惊人地相似：它们都需要顶层设计，都恐惧「隐形裂纹」，都需要在复杂的全球环境中保持运行的「良率」。',
        '现在，作为 CFA（特许金融分析师）协会会员与 RFP（美国注册财务策划师），我不再设计与制造芯片，而是为高净值家族设计「财富芯片」。利用精通中、英、日、粤四语的优势，我穿梭于香港、新加坡、日本与祖国大陆之间，消除信息不对称，用工程师的严谨与金融家的远见，为您的家族基业构建最坚固的底层代码。',
      ],
      gallery: [
        { title: '过去', desc: '根基与传承', seed: 'heritage' },
        { title: '现在', desc: '全球领导力', seed: 'executive' },
        { title: '未来', desc: '愿景与传承', seed: 'visionary' }
      ]
    },
    coreValues: {
      title: '为什么您需要一位「全职」国际家庭 CFO？',
      subtitle: '在复杂的全球环境中，您的资产需要一位「首席指挥官」和「跨界翻译官」，而非一群各自为战的「产品推销员」。',
      transformations: [
        {
          title: '从「碎片化」到「系统化」',
          pain: '私人银行家只懂理财，律师只懂法律，会计师只懂税务。不同机构间的信息孤岛与沟通断層，导致您的资产像散落的拼图，缺乏统一的顶层设计，甚至因架构冲突导致风险外溢。',
          solution: '「我是您资产的系统架构师。」 我将 Intel 晶圆制造的良率管理思维引入财富管理。作为您的全职 CFO，我负责协调银行、保险、信托与法务团队，运用 4+1 资产全景模型，确保每一个金融动作都服务于同一个终极目标，实现结构性的一致。',
        },
        {
          title: '从「被动应对」到「主动布局」',
          pain: '大多数家庭往往等到税务稽查、CRS 申报、子女婚变或长辈突发健康危机时，才仓促寻找解决方案。这种「打补丁」式的应对，往往成本高昂且为时已晚。',
          solution: '「我是您未来的风险预警机。」 基于跨学科前瞻视角，我为您预演未来 10-30 年的「人、财、事」变迁。利用「现金流沙盘推演」，我们提前预见流动性缺口与法律风险，在问题发生前完成风险隔离与主动布局。',
        },
        {
          title: '从「利益博弈」到「买方立场」',
          pain: '传统顾问往往受机构佣金驱动，推荐的是「利润最高」的产品，而非「最适合您」的方案。您与顾问之间存在天然的利益冲突。',
          solution: '「我是您家族利益的守门人。」 作为全职 CFO，我与单一产品解绑，与您的家族命运绑定。无论是筛选 EAM、谈判保险费率，还是对接日本 VIP 医疗资源，我都坚定地站在买方立场。我的 KPI 只有一个：在安全、省心、高效的前提下，追求家族利益的最大化。',
        },
      ],
      factor: {
        title: '我的独特价值：跨学科融合的稀缺性',
        intro: '在金融圈，懂投资的人很多，但同时具备工程师精度与跨文化深度的人极少。',
        items: [
          {
            label: '跨学科融合 (Interdisciplinary Fusion)',
            desc: '我将 Intel 的制程工艺引入财富管理，结合 CFA 的投资逻辑与 RFP 的规划视角。这确保您的资产配置方案不仅在理论上完美，更在执行层面无懈可击。',
          },
          {
            label: '四语文化桥樑 (Quad-Lingual Bridge)',
            desc: '精通中、英、日、粤。这不仅是语言的翻译，更是法律与商业惯例的翻译。我能为您消除所有的信息噪音，直达全球核心资源。',
          },
          {
            label: '三地学术背景 (Tri-Regional Wisdom)',
            desc: '从大陆的成长背景，到日本早稻田的科研历练，再到香港恒生大学的金融深造。我深谙东亚家族的文化羁绊与西方金融的契约精神，守护家族财富永续。',
          },
        ],
      },
    },
  },
  EN: {
    nav: {
      book: 'Book Consultation',
    },
    hero: {
      title: 'Master the Order of Wealth. Embrace Generational Freedom.',
      subtitle: 'In a fragmented global landscape, your legacy demands Strategic Alignment. Bridging Intel’s engineering precision with a CFA’s multi-generational vision, I act as your dedicated Family CFO—architecting the underlying code for your family’s ultimate freedom.',
      badges: [
        'CFA Charterholder', 
        'MDRT Member', 
        'Ex-Intel Engineer',
        'Founder of Global Risk Management Firm',
        'Triple Master\'s (CN/JP/HK) 🇨🇳🇯🇵🇭🇰',
        'HSUHK Institute of Knowledge Exchange',
        'HK Chinese Family Wealth Research Center',
        'Yinyuan Global Family Governance Institute',
        '80s Gen | Sun: Taurus & Rising: Scorpio | Type AB',
        '"Mixed" Heritage: Shanghai, Fuzhou & Chengdu'
      ],
    },
    why: {
      title: 'Is your wealth exposed, or operating with precision?',
      pain: {
        title: 'Fragmented Product Selling (Pain)',
        desc: 'Bankers know products, lawyers know terms, accountants know tax. They work in silos, leaving your assets like scattered puzzle pieces, often conflicting and costly during crises.',
      },
      solution: {
        title: "Francis's Structural Engineering (Solution)",
        points: [
          {
            label: 'From "Fragmented" to "Systematically Aligned"',
            desc: 'As your Family CFO, I bring Intel’s "Yield Management" to wealth architecture, ensuring every financial move serves the family’s ultimate goal.',
          },
          {
            label: 'From "Passive Defense" to "Active Isolation"',
            desc: 'Simulating 30 years of changes in people, wealth, and affairs to establish firewalls and maintain absolute control.',
          },
          {
            label: 'From "Interest Conflict" to "Buy-side Gatekeeper"',
            desc: 'Unbound from single products, I align solely with your family interests, acting as your loyal Chief Procurement Officer.',
          },
        ],
      },
    },
    diagnosis: {
      title: 'The Wealth MRI —— Precision Wealth Diagnosis',
      intro: 'Like a top-tier medical checkup, no prescription is given without precise diagnosis. Complete this 15-question Wealth MRI with my virtual assistant, Sophia.',
      dimensions: [
        {
          name: 'Dimension (Breadth)',
          desc: 'Based on the "4+1 Asset Panorama Model", scanning your balance sheet for "invisible cracks" across legal and tax silos.',
        },
        {
          name: 'Duration (Length)',
          desc: '30-year cash flow stress test. Simulating education, medical, and succession milestones to test asset longevity.',
        },
        {
          name: 'Dynamic (Power)',
          desc: 'Evaluating real growth against inflation and tax attrition, diagnosing the need for institutional-grade dynamic management.',
        },
      ],
      btn: 'Start My 3D Wealth X-Ray | Get Exclusive Report',
    },
    pillars: {
      title: 'Core Service Pillars',
      items: [
        {
          icon: '🌐',
          title: 'Global Asset Allocation & Tax Optimization',
          desc: 'Connecting top private banks and EAMs to deploy offshore assets with institutional rates and optimized tax structures.',
        },
        {
          icon: '⚖️',
          title: 'Trust & Cross-Border Legal Shield',
          desc: 'Establishing offshore holdings and trusts to create the ultimate firewall for corporate and personal assets.',
        },
        {
          icon: '🛡️',
          title: 'High-End Insurance & Liquidity',
          desc: 'Leveraging premium financing to combine tax-free succession with investment deferral for cross-generational liquidity.',
        },
        {
          icon: '🎓',
          title: 'Next-Gen Education & FO Governance',
          desc: 'From residency planning and elite schooling to family constitutions and successor cultivation.',
        },
      ],
    },
    offers: {
      title: 'Specialized Solutions',
      items: [
        {
          title: 'The Legacy Shield (Policy Trust)',
          desc: 'A mini-family office started with a single policy. Low threshold for directed succession and absolute debt isolation.',
        },
        {
          title: 'The Global Growth Engine (VUL + EAM)',
          desc: 'Using VUL’s tax deferral as a "container" for EAM’s active global management. Achieving isolation and alpha.',
        },
        {
          title: 'The Elite Health (Japan Premium Medical)',
          desc: 'Direct access to Japan’s VIP medical resources. Exclusive channels for precision cancer screening and stem cell anti-aging.',
        },
      ],
    },
    pricing: {
      title: 'The Francis Chi Privilege —— Your Dedicated CFO SLA',
      intro: 'To ensure engineer-level delivery, I only accept 5 high-net-worth families for deep strategic consulting each month. Pay ¥1,680 to book a consultation and unlock this set of Family CFO-level underlying sorting services worth 16,800 HKD.',
      original: 'Total Value 16,800 HKD',
      current: 'Limited Offer ¥1,680',
      privileges: [
        {
          icon: '🧬',
          title: 'Family Mapping',
          value: 'A people-oriented starting point for top-level architecture.',
          detail: 'Establish and long-term update family trees, clarify health status, existing protection gaps, hidden concerns, and future succession wishes for every family member.'
        },
        {
          icon: '📊',
          title: '4+1 Asset Audit',
          value: 'An "MRI" of the family balance sheet.',
          detail: 'Based on the original "4+1 model", conduct structural inventory and risk stress tests on your existing assets for short, medium, and long terms, providing deep balance sheet analysis.'
        },
        {
          icon: '⏳',
          title: '30-Year Cash Flow Simulation',
          value: 'Ensuring cash flow lasts as long as the family life.',
          detail: 'Draw a future blueprint for the family, conducting precise future cash flow planning, analysis, and design for children\'s education, medical, marriage, entrepreneurship, and parents\' retirement and wealth succession.'
        },
        {
          icon: '🛡️',
          title: 'Policy Stewardship',
          value: 'Reject "orphan policies" and build a global protection defense network.',
          detail: 'Comprehensively analyze all existing protections of the whole family (covering Mainland China, Hong Kong, and overseas policies), establish exclusive electronic files, and provide one-stop policy rights inquiry, management, and claims closed-loop services. [Single item value ¥8,000]'
        },
        {
          icon: '🌐',
          title: 'Global Architecture 2.0',
          value: 'Wealth layout across jurisdictions.',
          detail: 'Covering resources in Mainland China, Hong Kong, Macau, Singapore, Bermuda, and the US, providing professional consulting and DIY customization services for high-end insurance, offshore trusts, and global investment portfolio schemes.'
        },
        {
          icon: '💳',
          title: 'Liquidity Access',
          value: 'Opening the "last mile" of capital outflow and use.',
          detail: 'Assist in opening major Hong Kong bank accounts (can be bound to WeChat Pay, limited to non-HK residents), perfectly solving the family\'s short-to-medium-term capital liquidity and planning problems. [Single item value ¥2,000]'
        },
        {
          icon: '📈',
          title: 'Diversified Accounts',
          value: 'Linking traditional finance with Web3.0 digital assets.',
          detail: 'Assist in opening Hong Kong securities accounts and compliant digital currency accounts, enjoy exclusive privileges for overseas bloggers (subject to policy adjustments), and provide professional CRS reporting and investment risk guidance. [Single item value ¥2,000+]'
        },
        {
          icon: '🏥',
          title: 'Elite Health & FO System',
          value: 'Direct access to rare resources in the top luxury circle.',
          detail: 'Health Management: Commitment to personally accompany you to Japan for VIP medical (direct access to precision physical examination and stem cells at the same level as Jack Ma and Richard Liu). FO Think Tank: Connect with family office expert consulting in cross-border tax, global investment, Hong Kong residency planning, CRS planning, corporate expansion, and international education.'
        }
      ],
      cta: 'Pay ¥1,680 to Book Francis: 20-min 1:1 Strategic Session',
    },
    brandStory: {
      nav: 'Why Me?',
      title: 'Brand Story: From Chip Precision to Wealth Dimension',
      quote: '"In the world of wealth, a 0.1% margin of error, compounded over time, becomes a generational regret."',
      content: [
        'I am Francis Chi, your International Family CFO. My journey began at the tech giant Intel as a Process Engineer, ensuring the yield rate of nanometer-grade chips. That experience etched the "Engineer\'s Mindset" into my DNA—rigorous logic, zero tolerance for risk, and an obsessive pursuit of structural stability.',
        'In 2008, amidst the upheaval of the Wenchuan Earthquake, a pivotal recommendation from my mentor, Professor Bao Jingfu of UESTC, led me to Japan. I earned my Master\'s in Information Production Systems at Waseda University, followed by an MSc in Entrepreneurial Management at Hang Seng University of Hong Kong. Bridging engineering precision with strategic vision, I realized that managing family wealth mirrors chip manufacturing: both demand robust architecture, fear invisible cracks, and require consistent "yield" in a complex global environment.',
        'Today, as a CFA Institute Member and RFP, I no longer manufacture silicon chips. Instead, I engineer "Wealth Chips" for elite families. Fluent in Mandarin, English, Japanese, and Cantonese, I dissolve borders between Hong Kong, Singapore, Japan, and the Mainland. I use the rigor of an engineer and the foresight of a financier to build the most solid underlying code for your family\'s legacy.',
      ],
      gallery: [
        { title: 'PAST', desc: 'Foundation & Heritage', seed: 'heritage' },
        { title: 'PRESENT', desc: 'Global Leadership', seed: 'executive' },
        { title: 'FUTURE', desc: 'Legacy & Vision', seed: 'visionary' }
      ]
    },
    coreValues: {
      title: 'Why Do You Need a Dedicated International Family CFO?',
      subtitle: 'In a complex global landscape, your assets demand a Chief Commander and Cross-border Interpreter, not a disjointed group of product salespeople.',
      transformations: [
        {
          title: 'From Fragmented to Systematic',
          pain: 'Bankers know products, lawyers know terms, accountants know tax. They work in silos, leaving your assets like scattered puzzle pieces, often conflicting and costly during crises.',
          solution: '"I am your asset’s system architect." I bring Intel’s Yield Management to wealth architecture. As your Family CFO, I coordinate banking, insurance, trust, and legal teams to ensure every financial move serves the same ultimate goal.',
        },
        {
          title: 'From Reactive to Proactive',
          pain: 'Most families wait for tax audits, CRS filings, or health crises before seeking solutions. This "patchwork" approach is often expensive and too late.',
          solution: '"I am your future risk early warning system." Based on a cross-disciplinary forward-looking perspective, I simulate 10-30 years of changes in people, wealth, and affairs to complete risk isolation and proactive layout before problems occur.',
        },
        {
          title: 'From Sales-Driven to Client-Aligned',
          pain: 'Traditional advisors are often driven by commissions, recommending high-profit products rather than the best solution for you. There is a natural conflict of interest.',
          solution: '"I am the gatekeeper of your family interests." As a dedicated CFO, I am unbound from single products and aligned with your family’s destiny. I firmly stand on the buy-side to maximize family interests under safety and efficiency.',
        },
      ],
      factor: {
        title: 'The Francis Factor: My Unique Edge',
        intro: 'In the financial world, many understand investment, but few possess both engineering precision and cross-cultural depth.',
        items: [
          {
            label: 'Interdisciplinary Fusion',
            desc: 'I bring Intel’s process engineering to wealth management, combined with CFA investment logic and RFP planning perspective. This ensures your asset allocation is flawless in execution.',
          },
          {
            label: 'Quad-Lingual Bridge',
            desc: 'Fluent in Mandarin, English, Japanese, and Cantonese. This is not just language translation, but translation of legal and business practices to eliminate information noise.',
          },
          {
            label: 'Tri-Regional Wisdom',
            desc: 'From growth in Mainland China to research in Waseda and finance in Hong Kong. I understand East Asian family culture and Western financial contracts to find the best balance.',
          },
        ],
      },
    },
  },
  JP: {
    nav: {
      book: '相談を予約する',
    },
    hero: {
      title: '秩序ある富の管理が、世代を超える自由を約束する。',
      subtitle: '複雑化する国際情勢の中、資産を守るには各分野を統括する「指揮官」が必要です。Intelのエンジニアリング精度とCFAの金融ビジョンを融合し、専属の国際ファミリーCFOとして、貴家の資産に揺るぎない基盤（コード）を構築いたします。',
      badges: [
        'CFA 証券アナリスト', 
        'MDRT 会員', 
        '元 Intel エンジニア',
        'グローバルリスク管理事務所創設者',
        '中日港三修士号 🇨🇳🇯🇵🇭🇰',
        '香港恒生大学知識交流学院 IKE',
        '香港華人家族財産継承研究センター',
        '胤源グローバル家族統治研究院',
        '80年代生まれ | 太陽：牡牛座 & 上昇：蠍座 | AB型',
        '上海・福州・成都の「ハイブリッド」ルーツ'
      ],
    },
    why: {
      title: 'あなたの資産は「無防備」ですか、それとも「精密に運用」されていますか？',
      pain: {
        title: '断片的な商品販売 (悩み)',
        desc: '銀行家は運用、弁護士は条項、会計士は税務しか見ません。縦割り管理により資産はバラバラになり、危機の際に高額な代償を払うことになります。',
      },
      solution: {
        title: 'フランシスの構造エンジニアリング (解決策)',
        points: [
          {
            label: '「断片的」から「体系的な一致」へ',
            desc: 'ファミリーCFOとして、Intelの「歩留まり管理」を富の構造に導入し、すべての金融アクションが家族の目標に直結するようにします。',
          },
          {
            label: '「受動的防御」から「能動的隔離」へ',
            desc: '人・財・事の30年間の変化をシミュレーションし、不確実性の中でも主導権を握るためのファイアウォールを構築します。',
          },
          {
            label: '「利益相反」から「バイサイドの門番」へ',
            desc: '特定の商品に縛られず、家族の利益のみにコミットします。グローバル市場から最適な資産を選別する忠実な「最高調達責任者」となります。',
          },
        ],
      },
    },
    diagnosis: {
      title: 'The Wealth MRI —— 国際家族財富精密透視',
      intro: '一流の健康診断と同様に、精密な診断なしに処方箋は出せません。バーチャルアシスタントのソフィアと共に、15問の診断を完了してください。',
      dimensions: [
        {
          name: 'Dimension (広さ)',
          desc: '独自の「4+1資産パノラマモデル」に基づき、法務・税務の壁を越えてバランスシートの「隠れた亀裂」をスキャンします。',
        },
        {
          name: 'Duration (長さ)',
          desc: '30年間のキャッシュフロー・ストレステスト。教育、医療、継承などの節目をシミュレーションし、資産の寿命をテストします。',
        },
        {
          name: 'Dynamic (力強さ)',
          desc: 'インフレや税務による摩耗に対する真の成長力を評価し、機関投資家レベルの動的管理の必要性を診断します。',
        },
      ],
      btn: '3D富のX線スキャンを開始 | 専属レポートを取得',
    },
    pillars: {
      title: '4つのコアセクション',
      items: [
        {
          icon: '🌐',
          title: 'グローバル資産配分と税務最適化',
          desc: '世界のプライベートバンクやEAMと連携し、機関投資家レートでオフショア資産を配置し、税務構造を最適化します。',
        },
        {
          icon: '⚖️',
          title: '家族信託と国境を越えた法的シールド',
          desc: 'オフショア持株会社や信託を設立し、企業と個人の資産に究極のファイアウォールを構築し、リスクを防ぎます。',
        },
        {
          icon: '🛡️',
          title: '高級保険と流動性管理',
          desc: '保険料ファイナンスを活用し、「非課税継承」と「投資繰延」を組み合わせて、世代間の流動性問題を解決します。',
        },
        {
          icon: '🎓',
          title: '次世代教育とファミリーオフィス・ガバナンス',
          desc: '居住権プランニングから名門校留学、家族憲章の策定、後継者の育成までサポートします。',
        },
      ],
    },
    offers: {
      title: '3つの特別サービス',
      items: [
        {
          title: 'The Legacy Shield (保険信託)',
          desc: '保険証券1枚から始められるミニ・ファミリーオフィス。低ハードルで確実な継承と資産隔離を実現します。',
        },
        {
          title: 'The Global Growth Engine (VUL + EAM)',
          desc: 'VULの税繰延効果を「器」として活用し、EAMによるグローバルな動的運用を組み合わせ、隔離と増益を両立します。',
        },
        {
          title: 'The Elite Health (日本トップクラスの医療)',
          desc: '日本のVIP医療リソースへのダイレクトアクセス。精密がん検診や幹細胞アンチエイジングの専属ルートを提供します。',
        },
      ],
    },
    pricing: {
      title: 'The Francis Chi Privilege —— 専属CFOサービスレベル合意 (SLA)',
      intro: 'エンジニア品質の提供を保証するため、深い戦略コンサルティングは毎月5家族限定でお受けしています。1,680元を支払って予約問診を受けることで、16,800 HKD相当のファミリーCFO級の基盤整理サービスをアンロックできます。',
      original: '総価値 16,800 HKD',
      current: '期間限定予約 ¥1,680',
      privileges: [
        {
          icon: '🧬',
          title: '家族パノラママッピング (Family Mapping)',
          value: '人間本位のトップレベルアーキテクチャの起点。',
          detail: '家族の系図を構築・長期更新し、各メンバーの健康状態、保障の欠落、懸念事項、将来の継承の意思を明確にします。'
        },
        {
          icon: '📊',
          title: '4+1 資産パノラマ監査 (Asset Audit)',
          value: 'バランスシートの「MRI」。',
          detail: '独自の「4+1モデル」に基づき、既存の資産状況を短・中・長期で構造的に点検し、リスクストレステストを実施。詳細なバランスシート分析を提供します。'
        },
        {
          icon: '⏳',
          title: '将来30年間のキャッシュフロー・シミュレーション (Cash Flow Simulation)',
          value: 'キャッシュフローを家族の寿命に合わせる。',
          detail: '家族の将来の青写真を描き、子供の教育、医療、結婚、起業、そして親の老後と資産継承に向けた精密なキャッシュフロー設計・分析を行います。'
        },
        {
          icon: '🛡️',
          title: '保険証券一括管理 (Policy Stewardship)',
          value: '「孤児契約」を拒否し、グローバルな保障防衛網を構築。',
          detail: '家族全員の既存の保障（中国本土、香港、海外）を包括的に分析し、専用の電子ファイルを作成。権利照会、管理、請求までワンストップで対応します。[単体価値 ¥8,000]'
        },
        {
          icon: '🌐',
          title: 'グローバル構造と投資プランのカスタマイズ 2.0 (Global Architecture)',
          value: '法域を超えた富の配置。',
          detail: '中国本土、香港、マカオ、シンガポール、バミューダ、米国などのリソースを網羅し、高級保険、オフショア信託、グローバル投資ポートフォリオの専門コンサルティングを提供します。'
        },
        {
          icon: '💳',
          title: '流動性ソリューション (Liquidity Access)',
          value: '資金の海外送金と活用の「ラストワンマイル」を解決。',
          detail: '香港の主要銀行口座開設をサポート（WeChat Pay連携可、非香港居住者限定）。家族の中長期的な資金流動性とプランニングの課題を解決します。[単体価値 ¥2,000]'
        },
        {
          icon: '📈',
          title: '多角的投資口座の開設 (Diversified Accounts)',
          value: '伝統的金融とWeb3.0デジタル資産を繋ぐ。',
          detail: '香港の証券口座および合法的暗号資産口座の開設をサポート。海外ブロガー特典（政策による）の享受や、専門的なCRS申告・投資リスク指導を提供します。[単体価値 ¥2,000+]'
        },
        {
          icon: '🏥',
          title: 'エリート医療と家辦エコシステム (Elite Health & FO System)',
          value: '超富裕層向けの希少リソースへのダイレクトアクセス。',
          detail: '健康管理：日本のVIP医療（ジャック・マー氏らと同等の精密検診や幹細胞治療）への同行を約束。家辦シンクタンク：国境を越えた税務、投資、香港居住権、CRS、海外進出、国際教育の専門家コンサルティングを接続。'
        }
      ],
      cta: '¥1,680を支払って予約：20分間の1:1オンライン戦略対話',
    },
    brandStory: {
      nav: 'なぜ私なのか？',
      title: 'ブランドストーリー：チップの精度から富の次元へ',
      quote: '「資産管理における0.1%の誤差は、時の複利を経て、世代を超えた後悔となり得ます。」',
      content: [
        '国際ファミリーCFOの池望青（Francis Chi）と申します。 私のキャリアは、Intel (インテル) のエンジニアとして始まりました。ナノレベルの半導体製造において求められるのは、極限の精度とリスクゼロへの執念です。この「エンジニア思考」こそが、私の原点です。',
        '転機は2008年、汶川大地震の混乱の中で訪れました。電子科技大学の恩師、鮑景富教授の推薦を受け、私は海を渡り、早稲田大学大学院にて情報生産システムを専攻しました。その後、香港恒生大学にて起業管理を修め、理系の精密さと文系のマクロな視点を融合させました。そこで私は気づいたのです。資産管理も半導体と同じく、堅牢な「設計図」と「歩留まり（Yield）」の管理が命であると。',
        '現在、CFA協会会員およびRFPとして、私はもうシリコンチップを製造することはありません。その代わりにお客様のために「資産のチップ」を設計しています。日・中・英・広東語を駆使し、香港・シンガポール・日本・中国本土を繋ぐ架け橋として、エンジニアの緻密さと金融家の先見性で、御一族の繁栄の基盤を盤石なものにいたします。',
      ],
      gallery: [
        { title: '過去', desc: '基盤と継承', seed: 'heritage' },
        { title: '現在', desc: 'グローバルリーダーシップ', seed: 'executive' },
        { title: '未来', desc: 'ビジョンと継承', seed: 'visionary' }
      ]
    },
    coreValues: {
      title: 'なぜ、「専属」の国際ファミリーCFOが必要なのか？',
      subtitle: '複雑化する国際情勢の中、資産を守るには単なる「セールスマン」ではなく、全体を統括する「指揮官」と「通訳」が必要です。',
      transformations: [
        {
          title: '「断片的」から「体系的」へ',
          pain: 'プライベートバンカーは運用、弁護士は法務、会計士は税務しか見ません。縦割り管理により資産はバラバラになり、構造的な衝突によるリスクが生じます。',
          solution: '「私は資産のシステムアーキテクトです。」 Intelの歩留まり管理思考を富の管理に導入。専属CFOとして各専門家チームを調整し、すべての金融アクションが家族の目標に直結するようにします。',
        },
        {
          title: '「受動的」から「能動的」へ',
          pain: '多くの家庭は、税務調査や健康危機が起きてから対策を講じます。このような「その場しのぎ」の対応は、コストが高く手遅れになることが多いです。',
          solution: '「私は未来のリスク予報機です。」 学際的な視点に基づき、今後10〜30年の変化をシミュレーション。キャッシュフローの推演により、問題が発生する前にリスクを隔離し、能動的に配置します。',
        },
        {
          title: '「販売主導」から「クライアント本位」へ',
          pain: '従来の顧問は手数料に左右され、あなたに最適ではなく「利益率の高い」商品を勧めがちです。そこには構造的な利益相反が存在します。',
          solution: '「私は家族の利益の門番です。」 専属CFOとして特定の商品から独立し、家族の運命にコミットします。バイサイドの立場を貫き、安全・安心・効率を前提に家族の利益を最大化します。',
        },
      ],
      factor: {
        title: 'フランシス・ファクター：独自の強み',
        intro: '金融界において、投資に精通し、かつエンジニアの精度と異文化の深みを兼ね備えた人材は極めて稀です。',
        items: [
          {
            label: '学際的融合 (Interdisciplinary Fusion)',
            desc: 'Intelのプロセスエンジニアリングを富の管理に導入し、CFAの投資ロジックとRFPの視点を融合。理論だけでなく実行レベルでの完璧さを追求します。',
          },
          {
            label: '四ヶ国語の架け橋 (Quad-Lingual Bridge)',
            desc: '日・中・英・広東語に精通。単なる言葉の翻訳ではなく、法務やビジネス慣習の翻訳を行い、グローバルな核心リソースへ繋ぎます。',
          },
          {
            label: '三地域の知恵 (Tri-Regional Wisdom)',
            desc: '中国での成長、早稲田での研究、香港での金融。東アジア家族の絆と西洋金融の契約精神を深く理解し、富の永続を守ります。',
          },
        ],
      },
    },
  },
};
