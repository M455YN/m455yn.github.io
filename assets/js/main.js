/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
const workContainer = document.querySelector('.work__container')

if (workContainer && typeof mixitup !== 'undefined') {
    mixitup('.work__container', {
        selectors: {
            target: '.work__card'
        },
        animation: {
            duration: 350,
            nudge: false,
            reverseOut: false,
            effects: 'fade scale(0.92)'
        }
    })
}

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach((l) => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach((l) => l.addEventListener('click', activeWork))

/*===== Work Popup =====*/
const portfolioPopup = document.querySelector('.portfolio__popup')
const portfolioPopupClose = document.querySelector('.portfolio__popup-close')

document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.work__button')
    if (!trigger || !portfolioPopup) return

    const card = trigger.closest('.work__card')
    if (!card) return

    togglePortfolioPopup()
    portfolioItemDetails(card)
})

function togglePortfolioPopup() {
    if (!portfolioPopup) return
    portfolioPopup.classList.toggle('open')
}

if (portfolioPopupClose) {
    portfolioPopupClose.addEventListener('click', togglePortfolioPopup)
}

function portfolioItemDetails(portfolioItem) {
    if (!portfolioPopup) return

    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const isSubPage = document.body.classList.contains('page-sub') || document.body.classList.contains('page-career')
const sections = document.querySelectorAll('section[id]')

if (!isSubPage && sections.length) {
    window.addEventListener('scroll', navHighlighter)

    function navHighlighter() {
        const scrollY = window.pageYOffset

        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50
            const sectionId = current.getAttribute('id')
            const link = document.querySelector('.nav__menu a[href*="#' + sectionId + '"]')

            if (!link) return

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link')
            } else {
                link.classList.remove('active-link')
            }
        })
    }
}

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up')
    if (!scrollUpBtn) return
    if (this.scrollY >= 350) scrollUpBtn.classList.add('show-scroll')
    else scrollUpBtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== REVEAL ON SCROLL ===============*/
const revealElements = document.querySelectorAll('.reveal')

if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible')
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    })

    revealElements.forEach((el) => revealObserver.observe(el))
} else {
    revealElements.forEach((el) => el.classList.add('is-visible'))
}
