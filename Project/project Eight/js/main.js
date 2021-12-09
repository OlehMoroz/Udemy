'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // Tabs 

    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = tabsParent.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('active', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('active', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;

        if (target && target.matches('.tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();


    // Set TimeOut 

    // const timerId = setTimeout(function() {
    //     console.log('timer');
    // }, 3000);


    // Timer

    const deadLine = '2021-12-28';

    // Добавлення 0 до чсла якщо воно менше 10

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // Функція яка визначає скільки часу залищилось у Загальному в мілесекундах, днях, годиннах, хвилинах, секундах

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // Рендеринг таймера на сторінці

    function updateTimer(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);

                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
        }
    }

    updateTimer('.timer', deadLine);



    // Modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalCloseBtn = document.querySelectorAll('[data-close]'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.toggle('active');
        modal.classList.toggle('fade');
        //modal.classList.toggle('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(setTimerId);
    }

    function closeModal() {
        modal.classList.toggle('active');
        modal.classList.toggle('fade');
        // modal.classList.toggle('hide');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // event (подія) = e

    // Клік за межі блока з модальним вікном для закриття модального вікна

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Клік на "ESC" для закриття модального вікна

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Поява вікна через 5 секунд

    const setTimerId = setTimeout(openModal, 5000);

    // Поява вікна при скроллі до самого кінцяя сторінки

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


    // Динамічний вивід блоків за допомогою класів

    const menuWrap = document.querySelector('.menu__field .container');

    class MenuCard {

        constructor(src, alt, title, desc, price, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.classes.lenght === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>`;
            menuWrap.append(element);
        }
    }

    const menuCardItems = [{
            src: 'img/tabs/vegy.jpg',
            alt: 'vegy',
            title: 'Меню "Фитнес"',
            desc: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            price: 9,
            classes: 'menu__item',
        },
        {
            src: 'img/tabs/elite.jpg',
            alt: 'elite',
            title: 'Меню “Премиум”',
            desc: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            price: 5
        },
        {
            src: 'img/tabs/post.jpg',
            alt: 'post',
            title: 'Меню "Постное"',
            desc: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
            price: 8
        }
    ];

    for (let i = 0; i < menuCardItems.length; i++) {
        new MenuCard(
            menuCardItems[i].src,
            menuCardItems[i].alt,
            menuCardItems[i].title,
            menuCardItems[i].desc,
            menuCardItems[i].price
        ).render();
    }

});