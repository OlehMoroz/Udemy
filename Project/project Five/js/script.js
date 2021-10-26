/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
    movieList = document.querySelector('.promo__interactive-list');

// 1)

adv.forEach(item => {
    item.remove();
});

// 2)

genre.textContent = 'Драма';

// 3)

poster.style.backgroundImage = 'url(./img/bg.jpg)';

// 4), 5)

movieList.innerHTML = "";

movieDB.movies.sort();

//const filmsList = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film} 
            <div class="delete"></div>
        </li>
    `;
});


/* for (let i = 0; i < filmsList.length; i++) {
    filmsList[i].textContent = `${i + 1}.  ${movieDB.movies[i]}`;
}*/