$(document).ready(function () {
  $("#main-menu .has-submenu > a").prepend(
    '<i class="fas fa-chevron-down submenu-toggle" style="display:none"></i>'
  );
  $('ul li a').click(function() {
    // console.log('Clicked:', $(this).text());
    if ($(this).hasClass('active')){
      $(this).removeClass("active")
    }else{
      $(this).addClass("active")
    }
  });
  // Tambahkan event click pada setiap elemen dengan class 'has-submenu'
  $("#main-menu .has-submenu").click(function (e) {
    e.stopPropagation(); // Mencegah event klik menyebar ke elemen lain

    // Tutup semua submenu kecuali yang sesuai dengan yang diklik
    $(this).siblings(".has-submenu").removeClass("active");
    $(this).siblings(".has-submenu").children("ul").removeClass("active");

    // Toggle kelas 'active' pada elemen yang diklik
    $(this).toggleClass("active");

    // Toggle kelas 'active' pada submenu
    var submenu = $(this).children("ul");
    // console.log(submenu);
    if (submenu.length > 0) {
      submenu.toggleClass("active");
    }
    // Toggle kelas 'active' pada tag <a>
    $(this).children("a").toggleClass("active");
  });

  // Tambahkan event click pada dokumen untuk menutup submenu ketika mengklik area di luar submenu
  $(document).click(function (e) {
    if (!$(e.target).closest(".has-submenu").length) {
      $("#main-menu .has-submenu").removeClass("active");
      $("#main-menu .has-submenu ul").removeClass("active");
    }
  });
});
