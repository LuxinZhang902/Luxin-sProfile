//===================== DARK HEME ========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//PREVIOUSLY SELECTED TOPIC(checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dart theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivete the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or Remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTINIG IS WORKING!")

//===================== MENU SHOW Y HIDDEN ========================
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

//===================== MENU SHOW =================================
/* Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//===================== MENU HIDE =================================
/* Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



console.log("MENU Y SETTING IS WORKING!")
//===================== REMOVE MENU PROFILE =================================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on nav__link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("REMOVE MENU PROFILE IS WORKING!")


//===================== TYPEWRITER EFFECT =================================

new Typewriter('#typewriter', {
  strings: ['Luxin Zhang', 'Java-developer', 'Software-Engineer', 'Data-Analyst', 'College Tutor'],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("TYPEWRITER EFFECT IS WORKING!")