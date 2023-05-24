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

//===================== PORTFOLIO SWIPER =================================
var swiper = new Swiper(".blog-slider", {
    // cssMode: true,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".bolg-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("PORTFOLIO SWIPER IS WORKING!")

//===================== SCROLL UP =================================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height, then the scroll up icon should appearane on clicking should come to the top of the page
    if(this.scrollY >= 560){
        scrollup.classList.add('show-scroll');
    } 
    else{
        scrollup.classList.remove('show-sroll');
    }
    console.log("SCROLL UP IS WORKING!")
}

window.addEventListener('scroll', scrollUp)


/* ============================= SCROLL SECTION ACTIVE HIGHLIGHT ================================ */
// const sections = document.querySelectorAll('selection[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         console.log("SCROLL HIGHLIGHT IS WORKING!!!!!")
//         const sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }
//         else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }
//     })

//     console.log("SCROLL HIGHLIGHT IS WORKING!")
// }
// window.addEventListener('scroll', scrollActive)