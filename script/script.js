function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var content = document.querySelector(".content");
  var burgerIcon = document.querySelector(".burger-icon");

  if (sidebar.style.width === "270px") {
    console.log("hit1")
    sidebar.style.width = "75px";
    content.style.marginLeft = "0";
    burgerIcon.classList.remove("active"); // Hapus class active
  } else {
    console.log("hit2")
    sidebar.style.width = "270px";
    content.style.marginLeft = "250px";
    burgerIcon.classList.add("active"); // Tambahkan class active
  }
}

