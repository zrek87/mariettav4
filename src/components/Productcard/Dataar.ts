interface Product {
  id: number;
  imageUrl: string;
  detailImageUrl: string;
  title: string;
  description: string;
  extraDescription?: string;
  category: string;
  benefits?: string[];
  technicalCharacteristics?: { [key: string]: string };
  attachments?: { name: string; url: string }[];
}

export const Dataar: Product[] = [
  {
    id: 1,
    imageUrl: "/images/somfyProsucts/Altus-40-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Altus-40-RTS.png", // صورة تفصيلية جديدة
    title: "سومفي",
    description: "Altus 40 RTS",
    extraDescription:
      "جرب محرك ألترس 40 RTS للستائر الكهربائية من سومفي. مع قطر مثبت 40 مم، يمكنك التحكم بسهولة في ستائرك وشاشاتك، مما يحول مساحتك بكل سهولة. حرك ستائرك وأضف لمسة جمالية لديكور داخلي مميز.",
    category: "محركات الستائر",
    benefits: [
      "توفير إمكانية تحريك الستائر أو الشاشات باستخدام المحرك",
      "تحريك الستائر بسهولة عن بعد باستخدام جهاز التحكم بالراديو",
      "تحريك الستائر إلى وضعك المفضل بنقرة واحدة",
      "إمكانية الوصول إلى مجموعة منتجات RTS لمزيد من الفوائد",
      "التوافق مع وظائف الحماية الشمسية",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Radio Frequency": "RTS 433.42 MHz",
      "Cable type": "VVF",
      "Thermal time": "5 دقائق",
      "Protection Index": "IP 44",
      "Type of limit switch unit": "إلكتروني RTS",
      "Insulation class": "II",
    },
    attachments: [],
  },
  {
    id: 2,
    imageUrl: "/images/somfyProsucts/Altus-50-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Altus-50-RTS.png", // صورة تفصيلية جديدة
    title: "سومفي",
    description: "ALTUS 50 RTS",
    extraDescription:
      "المحرك الموثوق 50 مم لأتمتة الستائر الداخلية والشاشات. مع أداء مثبت، يمكن دمج محرك ألترس 50 RTS من سومفي بسهولة والتحكم فيه بكل يسر.",
    category: "محركات الستائر",
    benefits: [
      "توفير إمكانية تحريك الستائر أو الشاشات باستخدام المحرك",
      "تحريك الستائر بسهولة عن بعد باستخدام جهاز التحكم بالراديو",
      "تحريك الستائر إلى وضعك المفضل بنقرة واحدة",
      "إمكانية الوصول إلى مجموعة منتجات RTS لمزيد من الفوائد",
      "التوافق مع وظائف الحماية الشمسية",
    ],
    technicalCharacteristics: {
      "End product type":
        "الستائر الدوارة، الستائر الرومانية، شاشات العرض، الستائر الشفافة",
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Cable type": "VVF",
      "Radio Frequency": "RTS 433.42 MHz",
      "Thermal time": "5 دقائق",
      "Protection Index": "IP 44",
      "Type of limit switch unit": "إلكتروني RTS",
      "Insulation class": "I",
    },
    attachments: [
      {
        name: "5156366B_Altus 50 60 RTS-AR",
        url: "/attachments/Altus-50-RTS/5156366B_Altus 50 60 RTS-AR.pdf",
      },
      {
        name: "تعليمات السلامة للتركيب",
        url: "/attachments/Altus-50-RTS/Safety-instructions-for-installation.pdf",
      },
      {
        name: "900242C_LT50 60 AR",
        url: "/attachments/Altus-50-RTS/900242C_LT50 60 AR.pdf",
      },
      {
        name: "دليل تركيب LT 50/60",
        url: "/attachments/Altus-50-RTS/LT 5060 Installation guide.pdf",
      },
      {
        name: "5013572C_ALTUS RTS",
        url: "/attachments/Altus-50-RTS/5013572C_ALTUS RTS.pdf",
      },
      {
        name: "تعليمات السلامة للتركيب",
        url: "/attachments/Altus-50-RTS/Safety instructions for installation.pdf",
      },
    ],
  },
  {
    id: 3,
    imageUrl: "/images/somfyProsucts/GLYDEA-ULTRA.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA.png", // صورة تفصيلية جديدة
    title: "سومفي",
    description: "GLYDEA ULTRA",
    extraDescription:
      "قم بتحديث ستائرك باستخدام محرك Glydea™ Ultra 35e WT الموثوق، والمتكيف، والقوي، والهادئ. حل متميز لتحريك جميع أنواع الستائر في أي مساحة سكنية أو تجارية. استمتع بالدمج السلس والأتمتة المتقدمة في الإمارات والسعودية مع سومفي.",
    category: "محركات GLYDEA",
    benefits: [
      "تقليل الوهج أو الاستمتاع بالخصوصية باستخدام أهدأ محرك متاح",
      "قدرة تجوال قوية توفر حركة سلسة وسهلة للستائر الثقيلة",
      "التحكم في حلول المحركات RTS باستخدام جهاز التحكم عن بعد أو الهاتف الذكي أو التحكم الصوتي",
      "توفير الطاقة",
      "تقليل التكاليف الطاقية تلقائيًا باستخدام أجهزة الاستشعار أو المؤقتات",
      "حماية الأثاث الثمين من الأشعة فوق البنفسجية الضارة",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 8 – 90-240V/50-60HZ",
      "Cable type": "VVF",
      "Insulation class": "I",
    },
    attachments: [
      {
        name: "دليل تعليمات Glydea Ultra DCT",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra DCT instruction guide.pdf",
      },
      {
        name: "تعليمات السلامة للتركيب",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra technical sheet.pdf",
      },
      {
        name: "900242C_LT50 60 AR",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra RTS instruction guide.pdf",
      },
      {
        name: "دليل تركيب LT 50/60",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra WT instruction guide.pdf",
      },
    ],
  },
  {
    id: 4,
    imageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // صورة تفصيلية جديدة
    title: "سومفي",
    description: "GLYDEA ULTRA 35e RTS",
    extraDescription:
      "قم بتحديث ستائرك باستخدام محرك Glydea™ Ultra 35e RTS MIC SA الجاهز للأتمتة المنزلية. استمتع بالتحكم المتقدم والأتمتة في الإمارات والسعودية مع سومفي.",
    category: "محركات GLYDEA",
    benefits: ["تشغيل هادئ وسلس", "تحكم لاسلكي", "تصميم مدمج", "صمت في الحركة"],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC - RGE 8 - 90-240V/50-60HZ",
      "Radio Frequency": "433 MHz",
      "Cable type": "VVF",
      "Protection Index": "IP 30",
      "Insulation class": "Class I",
    },
    attachments: [
      {
        name: "كتيب Glydea Ultra B2C",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra B2C Brochure.pdf",
      },
      {
        name: "Glydea Ultra RTS",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra RTS.pdf",
      },
    ],
  },
  {
    id: 5,
    imageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // صورة تفصيلية جديدة
    title: "سومفي",
    description: "GLYDEA ULTRA 60e RTS",
    extraDescription:
      "حول ستائرك باستخدام محرك Glydea™ Ultra 60e RTS المتوافق مع المنزل الذكي. استمتع بالتحكم عن بعد والأتمتة المحسنة في الإمارات والسعودية مع سومفي. محرك Glydea™ Ultra هو حل متميز وصامت لتحريك الستائر ويتناغم بسلاسة مع أي ديكور.",
    category: "محركات GLYDEA",
    benefits: ["محرك قوي للستائر الكبيرة", "تشغيل هادئ", "تكامل سهل"],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC - RGE 8 - 90-240V/50-60HZ",
      "Radio Frequency": "433 MHz",
      "Cable type": "VVF",
      "Protection Index": "IP 30",
      "Insulation class": "Class I",
    },
    attachments: [
      {
        name: "كتيب Glydea Ultra B2C",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra B2C Brochure.pdf",
      },
      {
        name: "Glydea Ultra RTS",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra RTS.pdf",
      },
    ],
  },
  {
    "id": 6,
    "imageUrl": "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png",
    "detailImageUrl": "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    "title": "Somfy",
    "description": "GLYDEA ULTRA 60e WT",
    "extraDescription": "ترقية ستائرك مع محرك Glydea™ Ultra 60e WT المتوافق مع المنزل الذكي. استمتع بالتكامل السلس والأتمتة المتقدمة في الإمارات والسعودية مع Somfy. Glydea™ Ultra هو محرك جديد عالي الجودة وهادئ لتشغيل مسارات الستائر الذي يمتزج بسلاسة مع أي ديكور.",
    "category": "محركات GLYDEA",
    "benefits": ["التحكم السلكي", "عزم دوران مرتفع", "أداء موثوق"],
    "technicalCharacteristics": {
      "Nominal Voltage / Frequency": "AC - RGE 8 - 90-240V/50-60HZ",
      "Cable type": "VVF",
      "Insulation class": "الفئة I"
    },
    "attachments": [
      {
        "name": "كتيب Glydea Ultra B2C",
        "url": "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra B2C Brochure.pdf"
      }
    ]
  },
  {
    "id": 7,
    "imageUrl": "/images/somfyProsucts/Movelite-35-RTS.png",
    "detailImageUrl": "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    "title": "Somfy",
    "description": "Movelite 35 RTS",
    "extraDescription": "محرك Movelite™ الجديد من Somfy يجعل هذه التقنية المحسنة للحياة متاحة للجميع. يجمع بين الأناقة الفرنسية والهندسة المتطورة، فهو هادئ، مخفي وسهل التركيب.",
    "category": "محركات GLYDEA",
    "benefits": [
      "التحكم في ستائرك عبر مفتاح الجدار: Smoove، جهاز التحكم عن بُعد: Telis أو Situo، أو التحكم عبر التطبيق: Connexoon Window RTS",
      "Movelite™ مناسب لجميع أنواع الستائر: الكلاسيكية، الطي المتموج، الطي العميق، الطي على شكل أكورديون. يمكنه تشغيل الستائر بوزن يصل إلى 35 كجم وبطول مسار يصل إلى 10 متر. Movelite™ يناسب المسارات المستقيمة والمنحنية.",
      "Movelite™ يأتي مع ضمان 5 سنوات ويمتثل للمعايير الدولية والشهادات الخاصة بالسلامة."
    ],
    "technicalCharacteristics": {
      "Null": "Null"
    },
    "attachments": [
      {
        "name": "كتيب Movelite BtoB",
        "url": "/attachments/Movelite-35-RTS/Leaflet_MOVELITE-BtoB_180621.pdf.pdf"
      },
      {
        "name": "دليل Movelite RTS",
        "url": "/attachments/Movelite-35-RTS/Movelite RTS manual.pdf"
      }
    ]
  },
  {
    "id": 8,
    "imageUrl": "/images/somfyProsucts/Movelite-35-RTS.png",
    "detailImageUrl": "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    "title": "Somfy",
    "description": "Movelite 35 WT",
    "extraDescription": "قم بأتمتة ستائرك مع محرك Movelite 35 WT. تكنولوجيا Somfy السلكية لأتمتة المنزل الذكي. قم بتشغيل الستائر بوزن يصل إلى 35 كجم بكل سهولة. يجمع بين الأناقة الفرنسية والهندسة المتطورة، فهو هادئ، مخفي وسهل التركيب.",
    "category": "محركات GLYDEA",
    "benefits": ["التحكم اللاسلكي", "هادئ وسلس", "محرك متين"],
    "technicalCharacteristics": {
      "Nominal Voltage / Frequency": "AC – RGE 8 – 90-240V/50-60HZ",
      "Cable type": "VVF",
      "Protection Index": "IP 30",
      "Insulation class": "الفئة I"
    },
    "attachments": [
      {
        "name": "كتيب Movelite BtoB",
        "url": "/attachments/Movelite-35-RTS/Leaflet_MOVELITE-BtoB_180621.pdf.pdf"
      }
    ]
  },
  {
    "id": 9,
    "imageUrl": "/images/somfyProsucts/RS485-RTS-TRANSMITTER.png",
    "detailImageUrl": "/images/somfyProsucts/RS485-RTS-TRANSMITTER.png", // New detailed image
    "title": "Somfy",
    "description": "RS485 RTS TRANSMITTER",
    "extraDescription": "جهاز إرسال RS485 RTS هو جهاز تحكم في المحركات يتيح إدارة جميع تطبيقات Somfy RTS الخاصة بك باستخدام نفس النظام المركزي للتحكم في المنزل.",
    "category": "المنزل الذكي",
    "benefits": [
      "الطول (L3): 175 مم",
      "العرض: 100 مم",
      "الارتفاع: 175 مم",
      "العمق: 46 مم"
    ],
    "technicalCharacteristics": {
      "Radio Frequency": "433.42 MHz",
      "Capacity of memory": "16",
      "Color / Finish": "أسود",
      "Protection Index": "IP 20"
    },
    "attachments": [
      {
        "name": "ورقة البيانات الفنية لجهاز إرسال RS485 RTS 433",
        "url": "/attachments/RS485-RTS-TRANSMITTER/RS485 RTS Transmitter 433 Technical data sheet.pdf"
      },
      {
        "name": "دليل المستخدم لجهاز إرسال RS485 RTS 433 ميجاهرتز",
        "url": "/attachments/RS485-RTS-TRANSMITTER/RS485 RTS transmitter 433 Mhz Instruction Manual.pdf"
      }
    ]
  },
  {
    "id": 10,
    "imageUrl": "/images/somfyProsucts/SITUO-2-RTS-PURE.png",
    "detailImageUrl": "/images/somfyProsucts/SITUO-2-RTS-PURE.png", // New detailed image
    "title": "Somfy",
    "description": "SITUO 2 RTS PURE",
    "extraDescription": "مثالي للتحكم في الستائر المزدوجة (شفافة ومعتمة)",
    "category": "أجهزة التحكم عن بُعد",
    "benefits": [
      "جهاز تحكم عن بُعد لاسلكي",
      "بسيط وسهل الاستخدام",
      "تصميم عصري"
    ],
    "technicalCharacteristics": {
      "Width": "42 مم",
      "Height": "135 مم",
      "Depth": "14 مم"
    },
    "attachments": [
      {
        "name": "كتيب Situo RTS",
        "url": "/attachments/SITUO-2-RTS-PURE/Situo RTS brochure.pdf"
      },
      {
        "name": "Situo RTS",
        "url": "/attachments/SITUO-2-RTS-PURE/Situo RTS.pdf"
      }
    ]
  },
  {
    "id": 11,
    "imageUrl": "/images/somfyProsucts/Situo-5-RTS.png",
    "detailImageUrl": "/images/somfyProsucts/Situo-5-RTS.png", // New detailed image
    "title": "Somfy",
    "description": "Situo 5 RTS",
    "extraDescription": "تحكم في جميع منتجات Somfy® (RTS) مثل الستائر، الستائر الداخلية، المظلات والإضاءة باستخدام جهاز تحكم Situo® RTS الأنيق. يتميز بتصميم عصري، سيضيف لمسة من الأناقة إلى أي ديكور.",
    "category": "أجهزة التحكم عن بُعد",
    "benefits": [
      "التحكم في ما يصل إلى 5 أجهزة",
      "اختيار 4 ألوان لكل نوع من الديكورات، لكل أسلوب حياة",
      "وظائف لاسلكية",
      "تصميم عصري مع لمسة ناعمة، مريح في اليد",
      "3 أزرار: للأعلى، للأسفل، توقف و My (الوضع المفضل)"
    ],
    "technicalCharacteristics": {
      "Width": "42 مم",
      "Height": "135 مم",
      "Depth": "14 مم"
    },
    "attachments": [
      {
        "name": "كتيب Situo RTS",
        "url": "/attachments/SITUO-5-RTS-PURE/Situo RTS.pdf"
      },
      {
        "name": "ورقة البيانات الفنية لـ Situo RTS 434MHZ",
        "url": "/attachments/SITUO-5-RTS-PURE/Situo RTS 434MHZ Technical data sheet.pdf"
      },
      {
        "name": "كتيب Situo الجديد",
        "url": "/attachments/SITUO-5-RTS-PURE/Situo brochure new.pdf"
      }
    ]
  },
  {
    id: 12,
    imageUrl: "/images/somfyProsucts/Situo-5-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Situo-5-RTS.png", // New detailed image
    title: "Somfy",
    description: "Situo 5 RTS",
    extraDescription:
      "تحكم في جميع منتجات تكنولوجيا Somfy® (RTS) مثل الستائر، الستائر الداخلية، المظلات والإضاءة باستخدام جهاز تحكم Situo® RTS الأنيق. يتميز بتصميم عصري، سيضيف لمسة من الأناقة إلى أي ديكور.",
    category: "جهاز التحكم عن بُعد",
    benefits: [
      "التحكم في ما يصل إلى 5 أجهزة",
      "اختيار 4 ألوان لكل نوع من الديكورات، لكل أسلوب حياة",
      "وظائف لاسلكية",
      "تصميم عصري مع لمسة ناعمة، مريح في اليد",
      "3 أزرار: للأعلى، للأسفل، توقف و My (الوضع المفضل)",
    ],
    technicalCharacteristics: {
      Width: "42 مم",
      Height: "135 مم",
      Depth: "14 مم",
    },
    attachments: [
      {
        name: "كتيب Situo RTS",
        url: "/attachments/SITUO-5-RTS-PURE/Situo RTS.pdf",
      },
      {
        name: "ورقة البيانات الفنية لـ Situo RTS 434MHZ",
        url: "/attachments/SITUO-5-RTS-PURE/Situo RTS 434MHZ Technical data sheet.pdf",
      },
      {
        name: "كتيب Situo الجديد",
        url: "/attachments/SITUO-5-RTS-PURE/Situo brochure new.pdf",
      },
    ],
  },
  {
    id: 13,
    imageUrl: "/images/somfyProsucts/Sonesse-40-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Sonesse-40-RTS.png", // New detailed image
    title: "Somfy",
    description: "Sonesse 40 RTS",
    extraDescription:
      "حرك ستائرك بسهولة مع محرك Sonesse 40 RTS للستائر الداخلية من Somfy. عملية هادئة، أوضاع مسبقة، توافق مع Modulis، ودمج خفي لانسجام المنزل.",
    category: "محركات رول",
    benefits: [
      "عملية هادئة",
      "تحرك ستائرك بسهولة وباستخدام التحكم اللاسلكي",
      "تحرك الستارة إلى وضعك المفضل بنقرة واحدة",
      "توافق مع Modulis",
      "توافق مع وظائف حماية شمسية",
      "رأس دائري أسود ورقيق للاندماج بشكل خفي",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Radio Frequency": "RTS 433.42 MHz",
      "Cable type": "VVF",
      "Thermal time": "2 دقيقة",
      "Protection Index": "IP 44",
      "Type of limit switch unit": "إلكتروني RTS",
      "Insulation class": "الفئة II",
      Approval: "SASO",
    },
    attachments: [
      {
        name: "5064829B_Sonesse 40 RTS",
        url: "/attachments/Sonesse-40-RTS/5064829B_Sonesse 40 RTS.pdf",
      },
    ],
  },
  {
    id: 14,
    imageUrl: "/images/somfyProsucts/Sonesse-50-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Sonesse-50-RTS.png", // New detailed image
    title: "Somfy",
    description: "Sonesse 50 RTS",
    extraDescription:
      "استمتع بالبساطة، والتحكم السهل، والراحة مع محرك Sonesse 50 RTS للستائر الداخلية والشاشات العاكسة من Somfy. استمتع بالتشغيل الهادئ، والراحة عن بُعد، وأوضاع مسبقة، والتوافق مع RTS، ووظائف حماية شمسية.",
    category: "محركات رول",
    benefits: [
      "تحرك ستائرك بسهولة وباستخدام التحكم اللاسلكي",
      "عملية هادئة",
      "تحرك الستارة إلى وضعك المفضل بنقرة واحدة",
      "توافق مع وظائف حماية شمسية",
    ],
    technicalCharacteristics: {
      "End product type":
        "ستائر رولر، ستائر رومانية، ستائر مطوية وخلوية، ستائر فينيتية، شاشات عرض، ستائر زيبرا",
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Radio Frequency": "RTS 433.42 MHz",
      "Cable type": "VVF",
      "Thermal time": "2 دقيقة",
      "Protection Index": "IP 44",
      "Insulation class": "الفئة I",
      "Type of limit switch unit": "إلكتروني RTS",
    },
    attachments: [
      {
        name: "5106213B_Sonesse 50 RTS",
        url: "/attachments/Sonesse-50-WT/5106203B_Sonesse 50 RA.pdf",
      },
    ],
  },
  {
    id: 15,
    imageUrl: "/images/somfyProsucts/Sonesse-50-WT.png",
    detailImageUrl: "/images/somfyProsucts/Sonesse-50-WT.png", // New detailed image
    title: "Somfy",
    description: "Sonesse 50 WT",
    extraDescription:
      "استمتع بالبساطة، والتحكم السهل، والراحة مع محرك Sonesse 50 WT (تكنولوجيا سلكية) للستائر الداخلية من Somfy. استمتع بالتشغيل الهادئ أثناء تحريك الستائر بكل سهولة، مما يعزز مكانك بسهولة. قم بالترقية إلى ستائر Somfy المحركة لتوفير حل ستائر مريح وسهل.",
    category: "محركات رول",
    benefits: ["بسيط وسهل وراحة", "تحرك الستائر بكل سهولة", "تشغيل هادئ"],
    technicalCharacteristics: {
      "End product type":
        "ستائر رولر، ستائر رومانية، ستائر مطوية وخلوية، ستائر فينيتية، شاشات عرض، ستائر زيبرا",
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Cable type": "VVF",
      "Thermal time": "2 دقيقة",
      "Protection Index": "IP 44",
      "Insulation class": "الفئة I",
      "Type of limit switch unit": "ميكانيكي سريع",
    },
    attachments: [
      {
        name: "5106213B_Sonesse 50 RTS",
        url: "/attachments/Sonesse-50-WT/5106203B_Sonesse 50 RA.pdf",
      },
    ],
  },
  {
    id: 16,
    imageUrl: "/images/somfyProsucts/TaHoma-switch.png",
    detailImageUrl: "/images/somfyProsucts/TaHoma-switch.png", // New detailed image
    title: "Somfy",
    description: "TaHoma switch",
    extraDescription: "قم بتبديل منزلك بنقرة واحدة",
    category: "المنزل الذكي",
    benefits: [
      "المنتج صغير وغير ملحوظ.",
      "يعمل مع WiFi (لا حاجة للأسلاك)",
      "أيًا كان المستوى: مهما كان مستوى تجهيز المنزل أو التكنولوجيا.",
      "من جهاز واحد إلى منزل مجهز بالكامل.",
      "من الاستخدام البسيط للأزرار إلى التحكم بالتطبيق أو الصوت.",
      "يمكنك استخدام التطبيق، الصوت أو التحكم المحلي حسب تفضيلاتك.",
      "تتيح لك تخصيص الأزرار لتشغيل السيناريوهات التي تختارها.",
      "يمكنك تفعيل الأجهزة التي تختارها بالطريقة التي تريدها.",
      "بسيط وقابل للتطوير: ابدأ بجهاز أو جهازين وأضف معدات جديدة حسب وتيرتك.",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 1 – 230V/50HZ",
      "Color / Finish": "أبيض",
      Width: "35 مم",
      Height: "68 مم",
    },
    attachments: [
      {
        name: "TaHoma switch press kit EN",
        url: "/attachments/TaHoma-switch/TaHoma switch press kit EN.pdf",
      },
      {
        name: "PEP ecopassport – TaHoma switch - EN",
        url: "/attachments/TaHoma-switch/PEP ecopassport – TaHoma switch - EN.pdf",
      },
      {
        name: "ACT FOR GREEN – TaHoma switch - EN",
        url: "/attachments/TaHoma-switch/ACT FOR GREEN – TaHoma switch - EN.pdf",
      },
    ],
  },
  {
    id: 17,
    imageUrl: "/images/somfyProsucts/TELIS-16-RTS-PURE-EU-OTHER.png",
    detailImageUrl: "/images/somfyProsucts/TELIS-16-RTS-PURE-EU-OTHER.png", // New detailed image
    title: "Somfy",
    description: "TELIS 16 RTS PURE EU OTHER",
    category: "جهاز التحكم عن بُعد",
    benefits: [
      "التحكم في ما يصل إلى 16 جهازًا",
      "التشغيل اللاسلكي",
      "صغير وقابل للحمل",
    ],
    technicalCharacteristics: {
      "Radio Frequency": "433.42 MHz",
      "Range in house": "20 م",
      "Range in open field": "200 م",
      "Capacity of memory": "16",
      "Color / Finish": "نقي",
      "Protection Index": "IP 30",
    },
    attachments: [
      {
        name: "دليل تركيب TELIS 16 RTS ZH",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide ZH.pdf",
      },
      {
        name: "دليل تركيب TELIS 16 RTS PT ES EL EN",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide PT ES EL EN.pdf",
      },
      {
        name: "5065933B_Telis 16 RTS",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/5065933B_Telis 16 RTS.pdf",
      },
      {
        name: "دليل تركيب TELIS 16 RTS SV DA FI NO",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide SV DA FI NO.pdf",
      },
      {
        name: "5066607B_Telis 16 RTS",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/5066607B_Telis 16 RTS.pdf",
      },
      {
        name: "5065931_Telis 16 RTS",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/5065931_Telis 16 RTS.pdf",
      },
      {
        name: "دليل تركيب TELIS 16 RTS LV",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide LV.pdf",
      },
      {
        name: "دليل تركيب TELIS 16 RTS PL HU CS RO",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide PL HU CS RO.pdf",
      },
      {
        name: "دليل تركيب TELIS 16 RTS KO",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide KO.pdf",
      },
      {
        name: "دليل تركيب TELIS 16 RTS LT",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide LT.pdf",
      },
      {
        name: "ورقة البيانات الفنية لـ Telis 16 RTS",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Technical data sheet.pdf",
      },
    ],
  },
];