$(document).ready(function () {
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
      console.log(submenu);
      if (submenu.length > 0) {
        submenu.toggleClass("active");
        console.log("hit2");
      } else {
        // Jika tidak ada submenu, tambahkan class "menu-selected"
        console.log("hit");
        submenu.toggleClass("menu-selected");
        // $(this).addClass('menu-selected');
      }
    });

    // Tambahkan event click pada dokumen untuk menutup submenu ketika mengklik area di luar submenu
    $(document).click(function () {
      $("#main-menu .has-submenu").removeClass("active");
      $("#main-menu .has-submenu ul").removeClass("active");
    });
  });