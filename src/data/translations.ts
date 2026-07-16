// ─────────────────────────────────────────────────────────────────
// translations.ts  –  All bilingual strings for the wedding site
// ─────────────────────────────────────────────────────────────────

import { ReactNode } from "react";

export type Lang = "en" | "ar";

export interface Translations {
  footerMadeWithLove: ReactNode;
  dir: "ltr" | "rtl";
  // Letter
  letterSeal: string;
  letterLine1: string;
  letterLine2: string;
  letterOpen: string;
  langToggle: string;
  // Hero
  gettingMarried: string;
  brideName: string;
  groomName: string;
  heroDate: string;
  heroScroll: string;
  // Countdown
  countdownTitle: string;
  countdownSub: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  // Welcome
  welcomeTitle: string;
  welcomeText: string;
  ourMomentsTitle: string;
  ourMomentsSub: string;
  // Details
  detailsTitle: string;
  detailsTagline: string;
  detailsVenueName: string;
  detailsDay: string;
  detailsDate: string;
  detailsTime: string;
  detailsLocationBtn: string;
  // Halls
  hallsTitle: string;
  hallsTagline: string;
  womenHall: string;
  womenFloor: string;
  womenNote: string;
  menHall: string;
  menFloor: string;
  menNote: string;
  // Menu
  menuTitle: string;
  menuTagline: string;
  menuItems: { icon: string; title: string; desc: string }[];
  // Our Story
  storyItems: { icon: string; year?: string; title: string; desc: string }[];
  // Gallery
  galleryTitle: string;
  galleryTagline: string;
  // Footer
  footerTagline: string;
  footerThanks: string;
  footerWish: string;
  footerNames: string;
  footerDate: string;
  // Music
  muteBtn: string;
  unmuteBtn: string;
}

export const translations: Record<Lang, Translations> = {
  en: {
    dir: "ltr",
    letterSeal: "H",
    letterLine1: "We are delighted to invite you",
    letterLine2: "to attend our wedding",
    letterOpen: "Open Invitation",
    langToggle: "عربي",
    gettingMarried: "We are celebrating our wedding",
    brideName: "Islam",
    groomName: "Basil",
    heroDate: "Wednesday  ·  29 July 2026",
    heroScroll: "Discover",
    countdownTitle: "Countdown",
    countdownSub: "Until 29 July 2026",
    days: "Day",
    hours: "Hour",
    minutes: "Minute",
    seconds: "Second",
    welcomeTitle: "Welcome!",
    welcomeText:
      "We are delighted to invite you to join us for our extraordinary wedding night at the luxurious Harir Palace. Your presence is the most precious gift — we look forward to sharing these unforgettable moments with you.",
    ourMomentsTitle: "A Letter From Us",
    ourMomentsSub: "To Our Beloved Guests",
    detailsTitle: "Celebration Details",
    detailsTagline: "Where dreams turn into memories",
    detailsVenueName: "Harir Palace",
    detailsDay: "Wednesday",
    detailsDate: "29 July 2026",
    detailsTime: "7:00 PM — 12:00 AM",
    detailsLocationBtn: "Open Location in Maps",
    hallsTitle: "Find Your Hall",
    hallsTagline: "One unforgettable night",
    womenHall: "Ladies' Hall",
    womenFloor: "Via Elevator · Second Floor",
    womenNote: "An elegant salon decorated with flowers and candlelight",
    menHall: "Men's Hall",
    menFloor: "Via Elevator · Seventh Floor",
    menNote: "A breathtaking panoramic view of the city lights ✨",
    menuTitle: "Evening Experience",
    menuTagline: "A special celebration program crafted just for you",
    menuItems: [
      {
        icon: "🥂",
        title: "Welcome Drink",
        desc: "A luxurious reception upon your arrival — signature drinks",
      },
      {
        icon: "🫒",
        title: "Gourmet Appetizers",
        desc: "An elegant selection of delicious and refined appetizers",
      },
      {
        icon: "🎂",
        title: "Cake & Fresh Juices",
        desc: "A specially crafted delicious cake with fresh juices",
      },
      {
        icon: "🌿",
        title: "Incense & Dior Perfume Service",
        desc: "A personal fragrance experience — 6 exclusive and diverse Dior scents",
      },
      {
        icon: "🎁",
        title: "Luxury Perfume Gifts",
        desc: "A memorable gift from Ibrahim Al-Qurashi for every dear guest",
      },
    ],
    storyItems: [
      {
        icon: "✨",
        year: "Once upon a time,",
        title: "A Love Story",
        desc: "This is the story of a young man and a young woman whose paths crossed, and whose hearts recognized each other before words ever could. He set out to win her heart, and did what seemed impossible to reach it — and today, that story arrives at its most beautiful chapter: marriage, and a lawful, blessed union.",
      },
      {
        icon: "💛",
        year: "Our motto,",
        title: "Love, Always",
        desc: "If you ask us how we live, the answer is simple: with love. We complete each other with love, we build with love, we grow with love, and we pray with love. It is the thread woven through every day we've shared, and every day still to come.",
      },
      {
        icon: "🤲",
        year: "Our advice,",
        title: "A Word From the Newlyweds",
        desc: "Let us live with love, and walk with God in every step — for when love leads and faith walks beside it, the result is exactly this beautiful.",
      },
      {
        icon: "🌷",
        year: "With gratitude,",
        title: "To Our Families",
        desc: "To the families who stood beside us and gave us all their love to bring us together and bless this marriage — thank you, from the bottom of our hearts.",
      },
      {
        icon: "🕊️",
        year: "To all of you,",
        title: "To Our Guests",
        desc: "And thank you to everyone who will share with us the most beautiful night of our lives — the close of one chapter, and the eternal beginning of a beautiful story.",
      },
      {
        icon: "👰🏻‍♀️🤵🏼‍♂️",
        year: "One last word,",
        title: "Enter With Love",
        desc: "This marriage was built with love, so we ask you to step into it with love too, and with your kindest wishes. And please — keep us in your prayers.",
      },
    ],
    galleryTitle: "Gallery",
    galleryTagline: "Moments we cherish forever",
    footerTagline: "Harir Palace  ·  29 July 2026",
    footerThanks: "Thank you for honoring us with your presence",
    footerWish:
      "May this night be woven into the fabric of your most beautiful memories. We are deeply grateful for having you with us.",
    footerNames: "Basil & Islam",
    footerDate: "29 · 07 · 2026",
    muteBtn: "Mute",
    unmuteBtn: "Sound",
    footerMadeWithLove: "Made with love by the programmer couple 👰🏻‍♀️🤵🏼‍♂️",
  },

  ar: {
    dir: "rtl",
    letterSeal: "ح",
    letterLine1: "قلوبنا تهفو لرؤياكم",
    letterLine2: "في ليلة عمرنا",
    letterOpen: "افتح الدعوة",
    langToggle: "English",
    gettingMarried: "نحتفل بزفافنا",
    brideName: "اسلام",
    groomName: "باسل",
    heroDate: "الأربعاء  ·  ٢٩ يوليو ٢٠٢٦",
    heroScroll: "اكتشف",
    countdownTitle: "العد التنازلي",
    countdownSub: "حتى ٢٩ يوليو ٢٠٢٦",
    days: "يوم",
    hours: "ساعة",
    minutes: "دقيقة",
    seconds: "ثانية",
    welcomeTitle: "أهلاً وسهلاً!",
    welcomeText:
      "تهفو قلوبنا لرؤياكم، ونحن نهمّ بأن نخطو خطوتنا الأولى نحو حياة جديدة، في ليلةٍ نستعير جمالها من قصر حرير الفاخر. حضوركم أغلى ما نحمله في هذه الليلة، وذكراكم أجمل ما سنرويه عنها.",
    ourMomentsTitle: "رسالة منا",
    ourMomentsSub: "إلى أحبتنا",
    detailsTitle: "تفاصيل الاحتفال",
    detailsTagline: "حيث يتحول الحلم إلى ذكرى تُروى",
    detailsVenueName: "قصر حرير",
    detailsDay: "الأربعاء",
    detailsDate: "٢٩ يوليو ٢٠٢٦",
    detailsTime: "٧:٠٠ م — ١٢:٠٠ ص",
    detailsLocationBtn: "فتح الموقع على الخريطة",
    hallsTitle: "ابحث عن قاعتك",
    hallsTagline: "ليلة واحدة، تكفي لتبقى عمراً في الذاكرة",
    womenHall: "قاعة السيدات",
    womenFloor: "عبر المصعد · الطابق الثاني",
    womenNote: "صالون تتراقص فيه الزهور مع أضواء الشموع",
    menHall: "قاعة الرجال",
    menFloor: "عبر المصعد · الطابق السابع",
    menNote:
      "إطلالة تسرق الأنفاس، حيث تتلألأ أضواء المدينة كنجوم هبطت من سمائها ✨",
    menuTitle: "تجربة الليلة",
    menuTagline: "لحظات نسجناها بعناية، لتكون جزءاً من ذكرى هذه الليلة",
    menuItems: [
      {
        icon: "🥂",
        title: "مشروب الترحيب",
        desc: "استقبال يليق بكم، ومشروبات تفتح الليلة على أجمل بدايتها",
      },
      {
        icon: "🫒",
        title: "المقبلات الفاخرة",
        desc: "تشكيلة أنيقة، صُنعت لتُبهج الحواس قبل أن تُشبع الذوق",
      },
      {
        icon: "🎂",
        title: "الكيكة والعصائر الطازجة",
        desc: "حلاوة تليق بحلاوة اللحظة، وعصائر طازجة تروي عطش الفرح",
      },
      {
        icon: "🌿",
        title: "خدمة البخور وعطور ديور",
        desc: "عبقٌ يعبق في الذاكرة — ست روائح حصرية من ديور، تُهدى لكل ضيف كجزء من هذه الليلة",
      },
      {
        icon: "🎁",
        title: "هدايا عطور فاخرة",
        desc: "هدية من ابراهيم القرشي، لتبقى عبقاً من هذه الليلة في جعبة كل ضيف عزيز",
      },
    ],
    storyItems: [
      {
        icon: "✨",
        year: "كان يا ما كان،",
        title: "حكاية حب",
        desc: "هذه حكاية شابٍ وفتاة التقت طريقاهما، وتعارفت قلوبهما قبل أن تنطق الكلمات. سعى ليظفر بقلبها، وفعل المستحيل ليصل إليها، واليوم تصل هذه الحكاية إلى أجمل فصولها: زواجٌ وعهدٌ حلال مبارك.",
      },
      {
        icon: "💛",
        year: "شعارنا،",
        title: "الحب دائماً",
        desc: "إن سألتمونا كيف نعيش، فالجواب بسيط: بالحب. نُكمل بعضنا بالحب، ونبني بالحب، ونكبر بالحب، وندعو الله بالحب. فهو الخيط الذي ينسج كل يومٍ عشناه، وكل يومٍ سيأتي.",
      },
      {
        icon: "🤲",
        year: "نصيحتنا،",
        title: "كلمة من العروسين",
        desc: "لنعش بالحب، ولنسر مع الله في كل خطوة، فحين يقود الحب وتمشي معه التقوى، تكون النتيجة بهذا الجمال.",
      },
      {
        icon: "🌷",
        year: "بامتنان،",
        title: "إلى عائلتينا",
        desc: "إلى الأهل الذين وقفوا إلى جانبنا، وأعطونا كل حبهم ليجمعونا ويباركوا هذا الزواج، لكم منا كل الشكر والامتنان.",
      },
      {
        icon: "🕊️",
        year: "إلى الجميع،",
        title: "إلى ضيوفنا",
        desc: "وشكراً لكل من سيشاركنا أجمل ليلة في حياتنا، ليلة تختتم فصلاً وتفتح بداية أبدية لحكاية جميلة.",
      },
      {
        icon: "👰🏻‍♀️🤵🏼‍♂️",
        year: "كلمة أخيرة،",
        title: "ادخلوها بالحب",
        desc: "بُني هذا الزواج بالحب، فادخلوه بالحب أنتم أيضاً، وبأطيب الأمنيات. وادعوا لنا بخير.",
      },
    ],
    galleryTitle: "معرض الصور",
    galleryTagline: "لحظات نقشناها في القلب قبل أن تُنقش في الصور",
    footerTagline: "قصر هرير  ·  ٢٩ يوليو ٢٠٢٦",
    footerThanks: "شكراً لكم، فحضوركم تاج هذه الليلة",
    footerWish:
      "نتمنى أن تُنسج هذه الليلة خيطاً ذهبياً في نسيج ذكرياتكم الجميلة. ومن أعماق قلبينا، شكراً لأنكم كنتم جزءاً من فرحتنا.",
    footerNames: "باسل & اسلام",
    footerDate: "٢٩ · ٠٧ · ٢٠٢٦",
    muteBtn: "كتم",
    unmuteBtn: "صوت",
    footerMadeWithLove:
      "صُنع بحب، بأيدي عروسين جمعتهما البرمجة قبل أن يجمعهما القدر 👰🏻‍♀️🤵🏼‍♂️",
  },
};

// ── Gallery Images ──────────────────────────────────────────────
export const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772405193/Gemini_Generated_Image_ip2xj3ip2xj3ip2x-removebg-preview_exgsy7.png",
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772404587/Gemini_Generated_Image_88cflc88cflc88cf-removebg-preview_1_fkzbgk.png",
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772405177/Gemini_Generated_Image_ctynb4ctynb4ctyn-removebg-preview_nm12qg.png",
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772405142/Gemini_Generated_Image_qg96hsqg96hsqg96-removebg-preview_1_u9z2tf.png",
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772404597/Gemini_Generated_Image_wskybwwskybwwsky-removebg-preview_1_snptda.png",
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772405130/Gemini_Generated_Image_z1lt00z1lt00z1lt-removebg-preview_gutfyx.png",
  "https://res.cloudinary.com/dfqpf2szg/image/upload/v1772404127/Gemini_Generated_Image_83ipy183ipy183ip__1_-removebg-preview_cxoihm.png",
];

// ── Wedding Date ────────────────────────────────────────────────
export const WEDDING_DATE = new Date("2026-07-29T19:00:00");
