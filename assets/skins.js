/* =================================================================
   ملف السكنات  —  HAYKIL
   =================================================================
   هذا هو الملف الوحيد الذي تعدّله لإضافة سكن جديد.

   كل سكن = طقم (Set) كامل له اسم، وبداخله صور 7 أسلحة:
   AWP, AK47, KNIFE, Deagle, M16, B44, B42

   ---------- قالب فارغ (انسخه والصقه في أول القائمة) ----------
   {
     name:   "اسم السكن",
     rarity: "أسطوري",              // عادي / نادر / أسطوري / حصري
     price:  "25$",
     cover:  "assets/skins/اسم-المجلد/cover.jpg",   // صورة غلاف السكن
     weapons: {
       AWP:    "assets/skins/اسم-المجلد/awp.jpg",
       AK47:   "assets/skins/اسم-المجلد/ak47.jpg",
       KNIFE:  "assets/skins/اسم-المجلد/knife.jpg",
       Deagle: "assets/skins/اسم-المجلد/deagle.jpg",
       M16:    "assets/skins/اسم-المجلد/m16.jpg",
       B44:    "assets/skins/اسم-المجلد/b44.jpg",
       B42:    "assets/skins/اسم-المجلد/b42.jpg"
     },
     date:   "2026-06-20"
   },
   -------------------------------------------------------------

   خطوات إضافة سكن:
   1) أنشئ مجلداً باسم السكن داخل assets/skins/ (مثال: assets/skins/dragon/)
   2) ضع فيه صور الأسلحة السبعة + صورة الغلاف cover.jpg
   3) انسخ القالب أعلاه، الصقه في أول القائمة، وغيّر القيم
*/

const SKINS = [
   {
     name:   "SaKaLaMpO",
     rarity: "أسطوري",              // عادي / نادر / أسطوري / حصري
     price:  "25$",
     cover:  "assets/skins/اسم-المجلد/cover.jpg",   // صورة غلاف السكن
     weapons: {
       AWP:    "assets/skins/SaKaLaMpO/awp.jpg",
       AK47:   "assets/skins/اسم-المجلد/ak47.jpg",
       KNIFE:  "assets/skins/اسم-المجلد/knife.jpg",
       Deagle: "assets/skins/اسم-المجلد/deagle.jpg",
       M16:    "assets/skins/اسم-المجلد/m16.jpg",
       B44:    "assets/skins/اسم-المجلد/b44.jpg",
       B42:    "assets/skins/اسم-المجلد/b42.jpg"
     },
     date:   "2026-06-20"
   },


  // ضع السكن الجديد هنا (الأحدث في الأعلى)
  {
    name:   "Dragon Fire",
    rarity: "أسطوري",
    price:  "25$",
    cover:  "assets/skins/sample.jpg",
    weapons: {
      AWP:    "assets/skins/sample.jpg",
      AK47:   "assets/skins/sample.jpg",
      KNIFE:  "assets/skins/sample.jpg",
      Deagle: "assets/skins/sample.jpg",
      M16:    "assets/skins/sample.jpg",
      B44:    "assets/skins/sample.jpg",
      B42:    "assets/skins/sample.jpg"
    },
    date:   "2026-06-20"
  },

  {
    name:   "Neon Strike",
    rarity: "حصري",
    price:  "20$",
    cover:  "assets/skins/sample.jpg",
    weapons: {
      AWP:    "assets/skins/sample.jpg",
      AK47:   "assets/skins/sample.jpg",
      KNIFE:  "assets/skins/sample.jpg",
      Deagle: "assets/skins/sample.jpg",
      M16:    "assets/skins/sample.jpg",
      B44:    "assets/skins/sample.jpg",
      B42:    "assets/skins/sample.jpg"
    },
    date:   "2026-06-19"
  },

  {
    name:   "Blood Shadow",
    rarity: "نادر",
    price:  "15$",
    cover:  "assets/skins/sample.jpg",
    weapons: {
      AWP:    "assets/skins/sample.jpg",
      AK47:   "assets/skins/sample.jpg",
      KNIFE:  "assets/skins/sample.jpg",
      Deagle: "assets/skins/sample.jpg",
      M16:    "assets/skins/sample.jpg",
      B44:    "assets/skins/sample.jpg",
      B42:    "assets/skins/sample.jpg"
    },
    date:   "2026-06-18"
  }

];

/* رقم واتساب للطلب (نفس رقم الموقع) */
const SKIN_WHATSAPP = "31614373033";
