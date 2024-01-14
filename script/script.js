function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var text_logo = document.getElementById("text-logo");
  var burgerIcon = document.querySelector(".burger-icon");
  var submenutoggle = document.querySelectorAll(".submenu-toggle");
  var spans = document.querySelectorAll("ul li span");
  var ul_li = document.querySelectorAll("ul li");
  var main_menu = document.querySelector("#main_menu");
  // console.log(main_menu.style.height);

  if (sidebar.style.width === "270px") {
    sidebar.style.width = "75px";
    burgerIcon.classList.remove("active");
    text_logo.classList.remove("active");
    submenutoggle.forEach(function (e) {
      e.style.display = "none";
      e.classList.remove("active");
    });
    ul_li.forEach(function (e) {
      e.style.padding = "0px 0px";
    });
    spans.forEach(function (span) {
      span.classList.remove("active");
    });
  } else {
    sidebar.style.width = "270px";
    burgerIcon.classList.add("active"); // Tambahkan class active
    text_logo.classList.add("active");
    ul_li.forEach(function (e) {
      e.style.padding = "4px 8px";
    });
    spans.forEach(function (span) {
      span.classList.add("active");
    });
    submenutoggle.forEach(function (e) {
      e.style.display = "flex";
      e.classList.add("active");
    });
  }
}
