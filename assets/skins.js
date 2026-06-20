/* =================================================================
   ملف السكنات  —  HAYKIL
   =================================================================
   كل سكن = طقم (Set) كامل بداخله صور 7 أسلحة:
   AWP, AK47, KNIFE, Deagle, M16, B44, B42

   طريقة الاستخدام:
   1) انسخ مجلد (Skin1) وأعد تسميته باسم سكنك (مثال: DragonFire)
   2) استبدل الصور بداخله بصورك (احتفظ بنفس الأسماء: awp.jpg, ak47.jpg ...)
   3) انسخ كتلة سكن من الأسفل، الصقها في أول القائمة، وغيّر:
      - الاسم name
      - الندرة rarity  (عادي / نادر / حصري / أسطوري)
      - السعر price
      - استبدل كلمة Skin1 باسم مجلدك الجديد في كل المسارات
*/

const SKINS = [

  {
    name:   "SaKaLaMpO",
    rarity: "أسطوري",
    price:  "25$",
    cover:  "assets/skins/SaKaLaMpO/cover.jpg",
    weapons: {
      AWP:    "assets/skins/SaKaLaMpO/awp.jpg",
      AK47:   "assets/skins/Skin1/ak47.jpg",
      KNIFE:  "assets/skins/Skin1/knife.jpg",
      Deagle: "assets/skins/Skin1/deagle.jpg",
      M16:    "assets/skins/Skin1/m16.jpg",
      B44:    "assets/skins/Skin1/b44.jpg",
      B42:    "assets/skins/Skin1/b42.jpg"
    },
    date:   "2026-06-20"
  },

  {
    name:   "HaYKIL",
    rarity: "حصري",
    price:  "20$",
    cover:  "assets/skins/Skin2/cover.jpg",
    weapons: {
      AWP:    "assets/skins/Skin2/awp.jpg",
      AK47:   "assets/skins/Skin2/ak47.jpg",
      KNIFE:  "assets/skins/Skin2/knife.jpg",
      Deagle: "assets/skins/Skin2/deagle.jpg",
      M16:    "assets/skins/Skin2/m16.jpg",
      B44:    "assets/skins/Skin2/b44.jpg",
      B42:    "assets/skins/Skin2/b42.jpg"
    },
    date:   "2026-06-19"
  },

  {
    name:   "اسم السكن الثالث",
    rarity: "نادر",
    price:  "15$",
    cover:  "assets/skins/Skin3/cover.jpg",
    weapons: {
      AWP:    "assets/skins/Skin3/awp.jpg",
      AK47:   "assets/skins/Skin3/ak47.jpg",
      KNIFE:  "assets/skins/Skin3/knife.jpg",
      Deagle: "assets/skins/Skin3/deagle.jpg",
      M16:    "assets/skins/Skin3/m16.jpg",
      B44:    "assets/skins/Skin3/b44.jpg",
      B42:    "assets/skins/Skin3/b42.jpg"
    },
    date:   "2026-06-18"
  }

];

/* رقم واتساب للطلب */
const SKIN_WHATSAPP = "31614373033";
