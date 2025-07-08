interface Product {
  id: number;
  imageUrl: string;
  detailImageUrl: string; // New image for the product details page
  title: string;
  description: string;
  extraDescription?: string; // Add the new field
  category: string;
  benefits?: string[];
  technicalCharacteristics?: { [key: string]: string };
  attachments?: { name: string; url: string }[];
}

export const productsData: Product[] = [
  {
    id: 1,
    imageUrl: "/images/somfyProsucts/Altus-40-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Altus-40-RTS.png", // New detailed image
    title: "Somfy",
    description: "Altus 40 RTS",
    extraDescription:
      "Experience the Altus 40 RTS motor for motorized blinds from Somfy. With a proofed diameter of 40 mm, effortlessly control your blinds and screens, transforming your space with ease. Motorize your blinds and enhance your interior decor.",
    category: "Roll Motors",
    benefits: [
      "An accessible motorization to move your blinds or screens",
      "Move your blinds effortless and remotely thanks the radio control",
      "Move in one click your blind to your favorite “my” position",
      "Access to RTS product rane for more benefits",
      "Solar protection functions compatibility",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "	AC – RGE 6 – 220V/60HZ",
      "Radio Frequency": "RTS 433.42 MHz",
      "Cable type": "VVF",
      "Thermal time": "5 mn",
      "Protection Index": "IP 44",
      "Type of limit switch unit": "Electronic RTS",
      "Insulation class": "	II",
    },
    attachments: [],
  },
  {
    id: 2,
    imageUrl: "/images/somfyProsucts/Altus-50-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Altus-50-RTS.png", // New detailed image
    title: "Somfy",
    description: "Altus 50 RTS",
    extraDescription:
      "The trusted 50mm motor for automating interior blinds and screens. With a proven performance, Altus 50 RTS motor from Somfy can be seamlessly integrated and effortlessly controlled.",
    category: "Roll Motors",
    benefits: [
      "An accessible motorization to move your blinds or screens",
      "Move your blinds effortless and remotely thanks the radio control",
      "Move in one click your blind to your favorite “my” position",
      "Access to RTS product rane for more benefits",
      "Solar protection functions compatibility",
    ],
    technicalCharacteristics: {
      "End product type":
        "Roller blinds, Roman blinds, Projection screen, Zebra blinds",
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Cable type": "VVF",
      "Radio Frequency": "RTS 433.42 MHz",
      "Thermal time": "5 mn",
      "Protection Index": "IP 44",
      "Type of limit switch unit": "Electronic RTS",
      "Insulation class": "	I",
    },
    attachments: [
      {
        name: "5156366B_Altus 50 60 RTS-AR",
        url: "/attachments/Altus-50-RTS/5156366B_Altus 50 60 RTS-AR.pdf",
      },
      {
        name: "Safety instructions for installation",
        url: "/attachments/Altus-50-RTS/Safety-instructions-for-installation.pdf",
      },
      {
        name: "900242C_LT50 60 AR",
        url: "/attachments/Altus-50-RTS/900242C_LT50 60 AR.pdf",
      },
      {
        name: "LT 50/60 Installation guide",
        url: "/attachments/Altus-50-RTS/LT 5060 Installation guide.pdf",
      },
      {
        name: "5013572C_ALTUS RTS",
        url: "/attachments/Altus-50-RTS/5013572C_ALTUS RTS.pdf",
      },
      {
        name: "Safety instructions for installation",
        url: "/attachments/Altus-50-RTS/Safety instructions for installation.pdf",
      },
    ],
  },
  {
    id: 3,
    imageUrl: "/images/somfyProsucts/GLYDEA-ULTRA.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA.png", // New detailed image
    title: "Somfy",
    description: "GLYDEA ULTRA",
    extraDescription:
      "Upgrade your curtains with the reliable, adaptable, robust, and discreet Glydea™ Ultra 35e WT motor. A premium solution to motorize all types of curtains in any residential or commercial space. Experience seamless integration and advanced automation in the UAE and KSA with Somfy.",
    category: "GLYDEA Motors",
    benefits: [
      "Reduce glare or enjoy privacy using the quietest motor solution available",
      "Strong traversing capacity offers light, fluid movement for heavier curtains",
      "Control RTS motorized solutions with your remote control, your smartphone or voice control.",
      "Energy Saving",
      "Reduce energy costs automatically by adding sensors or timers",
      "Protect valuable furnishings from the sun’s damaging UV rays",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 8 – 90-240V/50-60HZ",
      "Cable type": "VVF",
      "Insulation class": "	I",
    },
    attachments: [
      {
        name: "Glydea Ultra DCT instruction guide",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra DCT instruction guide.pdf",
      },
      {
        name: "Safety instructions for installation",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra technical sheet.pdf",
      },
      {
        name: "900242C_LT50 60 AR",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra RTS instruction guide.pdf",
      },
      {
        name: "LT 50/60 Installation guide",
        url: "/attachments/GLYDEA-ULTRA/Glydea Ultra WT instruction guide.pdf",
      },
    ],
  },
  {
    id: 4,
    imageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    title: "Somfy",
    description: "GLYDEA ULTRA 35e RTS",
    extraDescription:
      "Upgrade your curtains with the home automation-ready Glydea™ Ultra 35e RTS MIC SA motor. Experience advanced control and automation in the UAE and KSA with Somfy.",
    category: "GLYDEA Motors",
    benefits: [
      "Quiet and smooth operation",
      "Wireless control",
      "Compact design",
      "Silence in motion",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC - RGE 8 - 90-240V/50-60HZ",
      "Radio Frequency": "433 MHz",
      "Cable type": "VVF",
      "Protection Index": "IP 30",
      "Insulation class": "Class I",
    },
    attachments: [
      {
        name: "Glydea Ultra B2C Brochure",
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
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    title: "Somfy",
    description: "GLYDEA ULTRA 60e RTS",
    extraDescription:
      "Transform your curtains with the smart home-compatible Glydea™ Ultra 60e RTS motor. Experience remote control operation and enhanced automation in the UAE and KSA with Somfy. Glydea™ Ultra is a new premium and silent curtain track motorisation which blends seamlessly into every décor.",
    category: "GLYDEA Motors",
    benefits: [
      "Powerful motor for large curtains",
      "Quiet operation",
      "Easy integration",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC - RGE 8 - 90-240V/50-60HZ",
      "Radio Frequency": "433 MHz",
      "Cable type": "VVF",
      "Protection Index": "IP 30",
      "Insulation class": "Class I",
    },
    attachments: [
      {
        name: "Glydea Ultra B2C Brochure",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra B2C Brochure.pdf",
      },
      {
        name: "Glydea Ultra RTS",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra RTS.pdf",
      },
    ],
  },
  {
    id: 6,
    imageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    title: "Somfy",
    description: "GLYDEA ULTRA 60e WT",
    extraDescription:
      "Upgrade your curtains with the smart home-compatible Glydea™ Ultra 60e WT motor. Enjoy seamless integration and advanced automation in the UAE and KSA with Somfy. Glydea™ Ultra is a new premium and silent curtain track motorisation which blends seamlessly into every décor.",
    category: "GLYDEA Motors",
    benefits: ["Wired control", "High torque", "Reliable performance"],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC - RGE 8 - 90-240V/50-60HZ",
      "Cable type": "VVF",
      "Insulation class": "Class I",
    },
    attachments: [
      {
        name: "Glydea Ultra B2C Brochure",
        url: "/attachments/GLYDEA-ULTRA-35e-RTS/Glydea Ultra B2C Brochure.pdf",
      },
    ],
  },
  {
    id: 7,
    imageUrl: "/images/somfyProsucts/Movelite-35-RTS.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    title: "Somfy",
    description: "Movelite 35 RTS",
    extraDescription:
      "Somfy’s new Movelite™ motorization for curtains makes this life-enhancing technology available to everyone. Combining French style with state-of-the-art engineering, it is quiet, discreet, and easy to install.",
    category: "GLYDEA Motors",
    benefits: [
      "Control your curtains with wall switch: Smoove, remote control: Telis or Situo, or app control: Connexoon Window RTS",
      "Movelite™ is suitable for all curtain types: classic, ripple fold, pinch pleated, accordion fold. It can operate curtains up to 35kg in weight with a track lenght of 10 metres. Movelite™ fits to straight and curved track.",
      "Movelite™ comes with a 5-year warranty and complies with international certifications and safety standards.",
    ],
    technicalCharacteristics: {
      Null: "Null",
    },
    attachments: [
      {
        name: "Leaflet_MOVELITE-BtoB_180621",
        url: "/attachments/Movelite-35-RTS/Leaflet_MOVELITE-BtoB_180621.pdf.pdf",
      },
      {
        name: "Movelite RTS manual",
        url: "/attachments/Movelite-35-RTS/Movelite RTS manual.pdf",
      },
    ],
  },
  {
    id: 8,
    imageUrl: "/images/somfyProsucts/Movelite-35-RTS.png",
    detailImageUrl: "/images/somfyProsucts/GLYDEA-ULTRA-35e-RTS.png", // New detailed image
    title: "Somfy",
    description: "Movelite 35 WT",
    extraDescription:
      "Automate your curtains with Movelite 35 WT motorization. Somfy’s Wired Technology for smart home automation. Effortlessly operate curtains up to 35kg. Combining French style with state-of-the-art engineering, it is quiet, discreet, and easy to install.",
    category: "GLYDEA Motors",
    benefits: ["Wirless control", "Quiet and smooth", "Durable motor"],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 8 – 90-240V/50-60HZ",
      "Cable type": "VVF",
      "Protection Index": "IP 30",
      "Insulation class": "Class I",
    },
    attachments: [
      {
        name: "Leaflet_MOVELITE-BtoB_180621",
        url: "/attachments/Movelite-35-RTS/Leaflet_MOVELITE-BtoB_180621.pdf.pdf",
      },
    ],
  },
  {
    id: 9,
    imageUrl: "/images/somfyProsucts/RS485-RTS-TRANSMITTER.png",
    detailImageUrl: "/images/somfyProsucts/RS485-RTS-TRANSMITTER.png", // New detailed image
    title: "Somfy",
    description: "RS485 RTS TRANSMITTER",
    extraDescription:
      "The RS485 RTS transmitter is a motor controller which allows to manage all your Somfy. RTS applications with the same centralized home control system",
    category: "Smart Home",
    benefits: [
      "Length (L3) : 175 mm",
      "Width : 100 mm",
      "Height : 175 mm",
      "Depth : 46 mm",
    ],
    technicalCharacteristics: {
      "Radio Frequency": "433.42 MHz",
      "Capacity of memory": "16",
      "Color / Finish": "	Black",
      "Protection Index": "IP 20",
    },
    attachments: [
      {
        name: "RS485 RTS Transmitter 433 Technical data sheet",
        url: "/attachments/RS485-RTS-TRANSMITTER/RS485 RTS Transmitter 433 Technical data sheet.pdf",
      },
      {
        name: "RS485 RTS transmitter 433 Mhz Instruction Manual",
        url: "/attachments/RS485-RTS-TRANSMITTER/RS485 RTS transmitter 433 Mhz Instruction Manual.pdf",
      },
    ],
  },
  {
    id: 10,
    imageUrl: "/images/somfyProsucts/SITUO-2-RTS-PURE.png",
    detailImageUrl: "/images/somfyProsucts/SITUO-2-RTS-PURE.png", // New detailed image
    title: "Somfy",
    description: "SITUO 2 RTS PURE",
    extraDescription: "Ideal to control double curtains (sheer and blackout)",
    category: "Remotes",
    benefits: [
      "Wireless remote control",
      "Simple and intuitive",
      "Stylish design",
    ],
    technicalCharacteristics: {
      Width: "42 mm",
      Height: "135 mm",
      Depth: "14 mm",
    },
    attachments: [
      {
        name: "Situo RTS brochure",
        url: "/attachments/SITUO-2-RTS-PURE/Situo RTS brochure.pdf",
      },
      {
        name: "Situo RTS",
        url: "/attachments/SITUO-2-RTS-PURE/Situo RTS.pdf",
      },
    ],
  },
  {
    id: 11,
    imageUrl: "/images/somfyProsucts/Situo-5-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Situo-5-RTS.png", // New detailed image
    title: "Somfy",
    description: "Situo 5 RTS",
    extraDescription:
      "Control all Radio Technology Somfy® (RTS) products such as curtains, interior blinds, awnings and lights with an elegant Situo® RTS control. Sporting a sleek modern look, it’s sure to add a touch of elegance to any decor.",
    category: "Remotes",
    benefits: [
      "Control up to 5 devices",
      "The choice of 4 colours for each type of décor, for each way of life",
      "Wireless functionality",
      "Modern soft touch finish, confortable in the hand",
      "3 buttons: Up, Down, Stop and My (favorite position)",
    ],
    technicalCharacteristics: {
      Width: "42 mm",
      Height: "135 mm",
      Depth: "14 mm",
    },
    attachments: [
      {
        name: "Situo RTS",
        url: "/attachments/SITUO-5-RTS-PURE/Situo RTS.pdf",
      },
      {
        name: "Situo RTS 434MHZ Technical data sheet",
        url: "/attachments/SITUO-5-RTS-PURE/Situo RTS 434MHZ Technical data sheet.pdf",
      },
      {
        name: "Situo brochure new",
        url: "/attachments/SITUO-5-RTS-PURE/Situo brochure new.pdf",
      },
    ],
  },
  {
    id: 12,
    imageUrl: "/images/somfyProsucts/Situo-5-RTS.png",
    detailImageUrl: "/images/somfyProsucts/Situo-5-RTS.png", // New detailed image
    title: "Somfy",
    description: "Situo 5 RTS",
    extraDescription:
      "Control all Radio Technology Somfy® (RTS) products such as curtains, interior blinds, awnings and lights with an elegant Situo® RTS control. Sporting a sleek modern look, it’s sure to add a touch of elegance to any decor.",
    category: "Remotes",
    benefits: [
      "Control up to 5 devices",
      "The choice of 4 colours for each type of décor, for each way of life",
      "Wireless functionality",
      "Modern soft touch finish, confortable in the hand",
      "3 buttons: Up, Down, Stop and My (favorite position)",
    ],
    technicalCharacteristics: {
      Width: "42 mm",
      Height: "135 mm",
      Depth: "14 mm",
    },
    attachments: [
      {
        name: "Situo RTS",
        url: "/attachments/SITUO-5-RTS-PURE/Situo RTS.pdf",
      },
      {
        name: "Situo RTS 434MHZ Technical data sheet",
        url: "/attachments/SITUO-5-RTS-PURE/Situo RTS 434MHZ Technical data sheet.pdf",
      },
      {
        name: "Situo brochure new",
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
      "Motorize your blinds effortlessly with Sonesse 40 RTS motor for interior blinds from Somfy. Quiet operation, preset positions, Modulis compatibility, discreet integration for home harmony.",
    category: "Roll Motors",
    benefits: [
      "Quiet operation",
      "Move your blinds effortless and remotely thanks to the radio control",
      "Move in one click your blind to your favorite “my” position",
      "Modulis compatibility",
      "Solar protection functions compatibility",
      "Black and thin round head for discreet blending",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Radio Frequency": "RTS 433.42 MHz",
      "Cable type": "VVF",
      "Thermal time": "2 mn",
      "Protection Index": "	IP 44",
      "Type of limit switch unit": "Electronic RTS",
      "Insulation class": "Class II",
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
      "Experience simplicity, effortless control, and comfort for interior blinds and projection screens with Sonesse 50 RTS motor from Somfy. Enjoy quiet operation, remote control convenience, preset positions, RTS compatibility, and solar protection functions.",
    category: "Roll Motors",
    benefits: [
      "Move your blinds effortlessly and remotely thanks to the radio control",
      "Silent operation",
      "Move in one click your blind to your favorite “my” position",
      "Solar protection functions compatibility",
    ],
    technicalCharacteristics: {
      "End product type":
        "Roller blinds, Roman blinds, Pleated and cellular blinds, Venetian blinds, Projection screens, Zebra blinds",
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Radio Frequency": "RTS 433.42 MHz",
      "Cable type": "VVF",
      "Thermal time": "2 mn",
      "Protection Index": "	IP 44",
      "Insulation class": "Class I",
      "Type of limit switch unit": "Electronic RTS",
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
      "Experience the simplicity, effortlessness, and comfort of Somfy’s Sonesse 50 WT (Wired Technology) motor for interior blinds and curtains. Enjoy the quiet operation as you effortlessly move your shades, enhancing your space with ease. Upgrade to Somfy’s motorized blinds and curtains for a seamless and convenient window covering solution.",
    category: "Roll Motors",
    benefits: [
      "Simple, effortless and comfort",
      "Move your shades effortlessly",
      "Quiet operation",
    ],
    technicalCharacteristics: {
      "End product type":
        "Roller blinds, Roman blinds, Pleated and cellular blinds, Venetian blinds, Projection screens, Zebra blinds",
      "Nominal Voltage / Frequency": "AC – RGE 6 – 220V/60HZ",
      "Cable type": "VVF",
      "Thermal time": "2 mn",
      "Protection Index": "	IP 44",
      "Insulation class": "Class I",
      "Type of limit switch unit": "Rapid mechanical",
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
    extraDescription: "Switch your home in one touch",
    category: "Smart Home",
    benefits: [
      "The product is small and discrete.",
      "TaHoma switch works with WiFi (no wire needed)",
      "WHATEVER THE NEED: Whatever level of home equipment and technological maturity.",
      "From one equipment to a fully equipped house.",
      "From simple usage of the buttons to app and voice control.",
      "You can use app, voice or local control according to your preferences.",
      "The customization of the buttons allows you to play the scenarios of your choice.",
      "You can activate the equipment of your choice the way you want.",
      "SIMPLE & EVOLUTIVE:Start with one or two pieces of equipment and add new equipment at your own pace.",
    ],
    technicalCharacteristics: {
      "Nominal Voltage / Frequency": "AC – RGE 1 – 230V/50HZ",
      "Color / Finish": "	White",
      Width: "35 mm",
      Height: "68 mm",
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
    category: "Remotes",
    benefits: [
      "Control up to 16 devices",
      "Wireless operation",
      "Compact and portable",
    ],
    technicalCharacteristics: {
      "Radio Frequency": "433.42 MHz",
      "Range in house": "20 m",
      "Range in open field": "200 m",
      "Capacity of memory": "16",
      "Color / Finish": "Pure",
      "Protection Index": "IP 30",
    },
    attachments: [
      {
        name: "Telis 16 RTS Installation guide ZH",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide ZH.pdf",
      },
      {
        name: "Telis 16 RTS Installation guide PT ES EL EN",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide PT ES EL EN.pdf",
      },
      {
        name: "5065933B_Telis 16 RTS",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/5065933B_Telis 16 RTS.pdf",
      },
      {
        name: "Telis 16 RTS Installation guide SV DA FI NO",
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
        name: "Telis 16 RTS Installation guide LV",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide LV.pdf",
      },
      {
        name: "Telis 16 RTS Installation guide PL HU CS RO",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide PL HU CS RO.pdf",
      },
      {
        name: "Telis 16 RTS Installation guide KO",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide KO.pdf",
      },
      {
        name: "Telis 16 RTS Installation guide LT",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Installation guide LT.pdf",
      },
      {
        name: "Telis 16 RTS Technical data sheet",
        url: "/attachments/TELIS-16-RTS-PURE-EU-OTHER/Telis 16 RTS Technical data sheet.pdf",
      },
    ],
  },
];
