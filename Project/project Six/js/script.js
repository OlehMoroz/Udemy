/* Задания на урок: */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv *'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        /*formButton = document.querySelector('.add button'),*/
        formInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');

    const removeAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = 'url(./img/bg.jpg)';
    }

    const sortArr = (arr) => {
        arr.sort();
    };

    function formatList(films, parent) {

        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
               <li class="promo__interactive-item">${i + 1}. ${film} 
                   <div class="delete"></div>
               </li>
           `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();

                films.splice(i, 1);

                formatList(films, parent);
            });
        });
    };

    /*formButton.setAttribute('type', 'button');

    formButton.addEventListener('click', () => {
        let formInputValue = formInput.value;

        if (formInputValue.length > 21) {
            formInputValue = formInputValue.slice(0, 21) + '...';
        }

        movieDB.movies.push(formInputValue);

        formatList(movieDB.movies, movieList);
    });*/

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let formInputValue = formInput.value,
            favorite = checkbox.checked;

        if (formInputValue) {
            if (formInputValue.length > 21) {
                formInputValue = `${formInputValue.slice(0, 22)}...`;
            }

            if (favorite) {
                console.log('Улюблений фільм');
            }

            movieDB.movies.push(formInputValue);

            formatList(movieDB.movies, movieList);
        }

        event.target.reset();

    });


    makeChanges();

    formatList(movieDB.movies, movieList);

    removeAdv(adv);
});