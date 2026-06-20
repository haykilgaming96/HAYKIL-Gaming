/* محرّك عرض السكنات والنافذة المنبثقة — لا تحتاج تعديله */
(function () {
  var WEAPON_ORDER = ["AWP","AK47","KNIFE","Deagle","M16","B44","B42"];

  function rarityColor(r){
    switch(r){
      case "أسطوري": return "#f5a623";
      case "حصري":   return "#b537f2";
      case "نادر":   return "#3b82f6";
      default:       return "#9ca3af";
    }
  }

  function ph(label, w, h){
    return "https://placehold.co/"+w+"x"+h+"/0a0a0a/8b0000?text="+encodeURIComponent(label);
  }

  // بناء بطاقة سكن في الشبكة
  function buildCard(s, i){
    var clr = rarityColor(s.rarity);
    return '' +
      '<div class="skin-card" onclick="openSkinModal('+i+')">' +
        '<div class="skin-card-img">' +
          '<img src="'+s.cover+'" alt="'+s.name+'" loading="lazy" onerror="this.src=\''+ph(s.name,300,200)+'\'">' +
          '<span class="skin-rarity float" style="color:'+clr+';border-color:'+clr+'66;background:'+clr+'22">'+s.rarity+'</span>' +
          '<div class="skin-card-overlay"><i class="fas fa-layer-group"></i> عرض الطقم</div>' +
        '</div>' +
        '<div class="skin-card-body">' +
          '<h3 class="skin-name sm">'+s.name+'</h3>' +
          '<div class="skin-foot">' +
            '<span class="skin-price sm">'+s.price+'</span>' +
            '<span class="skin-set-count"><i class="fas fa-gun"></i> 7 أسلحة</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  // بناء محتوى النافذة المنبثقة (الطقم كامل)
  function buildModal(s){
    var clr = rarityColor(s.rarity);
    var msg = encodeURIComponent("أهلاً هيكل، أريد طقم السكن: "+s.name+" بسعر "+s.price);
    var weaponsHtml = WEAPON_ORDER.map(function(w){
      var src = (s.weapons && s.weapons[w]) ? s.weapons[w] : ph(w,200,140);
      return '' +
        '<div class="weapon-item">' +
          '<div class="weapon-img"><img src="'+src+'" alt="'+w+'" loading="lazy" onerror="this.src=\''+ph(w,200,140)+'\'"></div>' +
          '<span class="weapon-label">'+w+'</span>' +
        '</div>';
    }).join("");

    return '' +
      '<div class="modal-head">' +
        '<span class="skin-rarity" style="color:'+clr+';border-color:'+clr+'66;background:'+clr+'14">'+s.rarity+'</span>' +
        '<h3 class="skin-name">'+s.name+'</h3>' +
        '<div class="modal-set-tag"><i class="fas fa-layer-group"></i> طقم كامل · 7 أسلحة</div>' +
      '</div>' +
      '<div class="weapons-grid">'+weaponsHtml+'</div>' +
      '<div class="modal-foot">' +
        '<span class="skin-price">'+s.price+'</span>' +
        '<a class="btn" target="_blank" href="https://wa.me/'+SKIN_WHATSAPP+'?text='+msg+'">' +
          '<i class="fab fa-whatsapp"></i> اطلب الطقم الآن</a>' +
      '</div>';
  }

  // فتح/إغلاق النافذة (دوال عامة)
  window.openSkinModal = function(i){
    var s = SKINS[i];
    if(!s) return;
    var modal = document.getElementById("skin-modal");
    var content = document.getElementById("skin-modal-content");
    content.innerHTML = buildModal(s);
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  window.closeSkinModal = function(){
    var modal = document.getElementById("skin-modal");
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  // إغلاق بزر ESC
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") window.closeSkinModal();
  });

  function render(){
    if(typeof SKINS === "undefined" || !SKINS.length) return;
    var grid = document.getElementById("skins-grid");
    if(grid) grid.innerHTML = SKINS.map(buildCard).join("");
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
