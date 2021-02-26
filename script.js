document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector("#hamburger");
    const sidebar = document.querySelector("#sidebar");
    const links = document.getElementsByClassName("sidebar__link");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            sidebar.classList.toggle("sidebar_active");
        }
    }

    hamburger.addEventListener("click", function() {
        sidebar.classList.toggle("sidebar_active")
    })
});
