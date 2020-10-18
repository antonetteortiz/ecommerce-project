// Show menu
let showMenu = (toggleID, navID) => {
    let toggle = document.getElementById(toggleID);
    nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// Remove menu mobile
let navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    // Active Link
    newLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    // Remove menu mobile
    let navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))