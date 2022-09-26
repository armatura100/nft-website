// form opener
const form = document.querySelector('.header__form');
const formInput = form.querySelector('.header__search');
const resetBtn = form.querySelector('.header__form-button[type="reset"]');

// clear input button toggle
formInput.addEventListener('input', () => {
    if (formInput.value) {
        resetBtn.classList.add('show');
    } else {
        resetBtn.classList.remove('show');
    }
});

form.addEventListener('reset', () => {
    resetBtn.classList.remove('show');
});

// mobile search toggle
const mobileSearch = document.querySelector('.menu__search');
const headerForm = document.querySelector('.header__form');

mobileSearch.addEventListener('click', () => {
    headerForm.classList.toggle('active');
});


// burger menu
const menuBtn = document.querySelector('.menu__button');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__link');
const body = document.body;

const closeMenu = () => {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
    body.classList.remove('lock');
}

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('lock');
});

menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// header
const header = document.querySelector('.header');

const checkScroll = () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('DOMContentLoaded', checkScroll);


// faq accordion

const faqTriggers = document.querySelectorAll('.faq__item-title');

faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const activeTrigger = document.querySelector('.faq__item-title.active');
        if (activeTrigger && activeTrigger !== trigger) {
            activeTrigger.classList.remove('active');
            activeTrigger.nextElementSibling.style.maxHeight = 0;
        }

        trigger.classList.toggle('active');
        const content = trigger.nextElementSibling;

        if (trigger.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    });
});


// statistics value displays
const statisticsValues = document.querySelectorAll('.hero__statistics-value');
let interval = 2000;

statisticsValues.forEach(value => {
    let startValue = 0;
    let endValue = value.dataset.value;

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue += 1;
        value.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});