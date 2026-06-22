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
    ourMomentsTitle: "Our Story",
    ourMomentsSub: "A journey of love",
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
        icon: "💻",
        year: "Where it began",
        title: "How We Met",
        desc: "A training program brought us together — two people who shared a love for programming and learning. That's where Basil first saw the girl of his dreams, and quietly decided he would do whatever it took to win her heart.",
      },
      {
        icon: "🌱",
        year: "Building something real",
        title: "Working Side by Side",
        desc: "Fate gave us a second chance to be close — the same company, the same days. Basil worked tirelessly to build himself from the ground up, all while holding on to one dream: to one day ask for her hand.",
      },
      {
        icon: "💍",
        year: "The proposal",
        title: "He Asked, and She Said Yes",
        desc: "By God's grace, that hard work bore fruit. When Basil finally asked, she said yes — with love, and with pride in everything he had become for her. Her family blessed their union with open hearts.",
      },
      {
        icon: "🌙",
        year: "24 October",
        title: "Our Engagement Night",
        desc: "The most beautiful beginning of our lives — a night of pride, love, and gratitude. Basil remembers his quiet prayers in the last hours before dawn, on a night when prayers are answered.",
      },
      {
        icon: "👰🏻‍♀️🤵🏼‍♂️",
        year: "29 July 2026",
        title: "Our Forever Begins",
        desc: "Now we step into marriage to crown this love — a home built on love, peace, and closeness to God. We ask Him to bless what comes next. Please keep us in your prayers, and wish us beautiful days ahead.",
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
    letterLine1: "يسعدنا دعوتكم",
    letterLine2: "لحضور حفل زفافنا",
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
      "يسعدنا دعوتكم لمشاركتنا ليلة زفافنا الاستثنائية في قصر هرير الفاخر. حضوركم هو أغلى هدية — نتطلع إلى مشاركتكم هذه اللحظات التي لن تُنسى.",
    ourMomentsTitle: "قصتنا",
    ourMomentsSub: "رحلة من الحب",
    detailsTitle: "تفاصيل الاحتفال",
    detailsTagline: "حيث تتحول الأحلام إلى ذكريات",
    detailsVenueName: "قصر هرير",
    detailsDay: "الأربعاء",
    detailsDate: "٢٩ يوليو ٢٠٢٦",
    detailsTime: "٧:٠٠ م — ١٢:٠٠ ص",
    detailsLocationBtn: "فتح الموقع على الخريطة",
    hallsTitle: "ابحث عن قاعتك",
    hallsTagline: "ليلة واحدة لا تُنسى",
    womenHall: "قاعة السيدات",
    womenFloor: "عبر المصعد · الطابق الثاني",
    womenNote: "صالون راقٍ مزيّن بالزهور وضوء الشمعدانات",
    menHall: "قاعة الرجال",
    menFloor: "عبر المصعد · الطابق السابع",
    menNote: "إطلالة بانورامية خلابة على أضواء المدينة ✨",
    menuTitle: "تجربة الليلة",
    menuTagline: "برنامج احتفالي مميز أُعدّ خصيصاً لكم",
    menuItems: [
      {
        icon: "🥂",
        title: "مشروب الترحيب",
        desc: "استقبال فاخر لدى وصولكم — مشروبات مميزة",
      },
      {
        icon: "🫒",
        title: "المقبلات الفاخرة",
        desc: "تشكيلة أنيقة من المقبلات اللذيذه والفاخرة",
      },
      {
        icon: "🎂",
        title: "الكيكة والعصائر الطازجة",
        desc: "كيكة لذيذة خصيصاً مع عصائر طازجة",
      },
      {
        icon: "🌿",
        title: "خدمة البخور وعطور ديور",
        desc: "تجربة عطور شخصية — ٦ روائح حصرية و منوعة من  ديور",
      },
      {
        icon: "🎁",
        title: "هدايا عطور فاخرة",
        desc: "هدية تذكارية من ابراهيم القرشي لكل ضيف عزيز",
      },
    ],
    storyItems: [
      {
        icon: "💻",
        year: "البداية",
        title: "كيف تعارفنا",
        desc: "جمعنا برنامج تدريبي، وكان شغفنا المشترك بالبرمجة والتعلّم هو ما قرّبنا. هناك رأى باسل فتاة أحلامه، وقرر في قلبه أن يفعل المستحيل ليكسب قلبها.",
      },
      {
        icon: "🌱",
        year: "بناء المستقبل",
        title: "معاً في رحلة العمل",
        desc: "جمعنا القدر مرة أخرى للعمل في نفس الشركة. كان باسل يعمل بلا كلل ليبني نفسه من الصفر، وفي قلبه حلم واحد: أن يتقدّم يوماً لخطبة من يحب.",
      },
      {
        icon: "💍",
        year: "لحظة الخطوبة",
        title: "طلب يدها فقالت نعم",
        desc: "وبفضل الله، تحقق ما سعى إليه. تقدّم باسل لخطبتها، فقالت نعم بكل حب وفخر بما أصبح من أجلها. وباركت أسرتها هذا الارتباط بقلوب مفتوحة.",
      },
      {
        icon: "🌙",
        year: "٢٤ أكتوبر",
        title: "ليلة خطوبتنا",
        desc: "كانت أجمل بداية لحياتنا — ليلة فخر وحب وامتنان. يتذكر باسل دعواته في ساعات السحر، في ليلة تُستجاب فيها الدعوات.",
      },
      {
        icon: "👰🏻‍♀️🤵🏼‍♂️",
        year: "٢٩ يوليو ٢٠٢٦",
        title: "بداية الأبد",
        desc: "والآن نخطو إلى الزواج لنُتمّم هذا الحب — في بيت يجمعه الحب والسكينة والقرب من الله. نسأله أن يبارك ما هو آتٍ. فلا تنسونا من دعائكم، ونسألكم دعوة بأيام جميلة.",
      },
    ],
    galleryTitle: "معرض الصور",
    galleryTagline: "لحظات نعتز بها للأبد",
    footerTagline: "قصر هرير  ·  ٢٩ يوليو ٢٠٢٦",
    footerThanks: "شكراً لتشريفنا بحضوركم",
    footerWish:
      "نتمنى أن تبقى هذه الليلة منسوجةً في أجمل ذكرياتكم. نحن ممتنون من أعماق قلوبنا لوجودكم معنا.",
    footerNames: "باسل & اسلام",
    footerDate: "٢٩ · ٠٧ · ٢٠٢٦",
    muteBtn: "كتم",
    unmuteBtn: "صوت",
    footerMadeWithLove: "صنع بحب بواسطة العروسين المبرمجين 👰🏻‍♀️🤵🏼‍♂️",
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
