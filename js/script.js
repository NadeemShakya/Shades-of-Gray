let headerNavigation = document.getElementById("header-navigator-id");
let hamburgerMenu = document.getElementById("hamburger-menu-id");
let headerNavigationHeight = null;



hamburgerMenu.addEventListener("click", function() {
    toggleClass();
    let headerNavigationActive = document.querySelector(".header-navigator.active");
    console.log("clicked");
    if(headerNavigationActive) {
        headerNavigationActive.style.maxHeight = `${100}vh`
    }else {
        headerNavigation.style.maxHeight = `${0}px`;
    }
})

function toggleClass() {
    if(headerNavigation.classList) {
        headerNavigation.classList.toggle("active");
    }else {
        let classlist = headerNavigation.className.split(" ");
        let index = classlist.indexOf("active");

        if(index >= 0) {
            classlist.splice(i, 1);
        }else {
            classlist.push("active")
            headerNavigation.className = classlist.join(" ");
        }
    }
}
