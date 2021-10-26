'use strict';

/*const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Один з останніх фільмів, що переглянули?', ''),
      b = prompt('Яку поставите йому оцінку?', ''),
      c = prompt('Один з останніх фільмів, що переглянули?', ''),
      d = prompt('Яку поставите йому оцінку?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/


// Practic 2

const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один з останніх фільмів, що переглянули?', ''),
        b = prompt('Яку поставите йому оцінку?', '');

    if (a != null && b != null && a != '' && b !='' && a.length < 50 && b.length < 50 ) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }

}

if (personalMovieDB.count < 10) {
    alert('Переглянуто мало фільмів');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    alert('Переглянуто достатньо фільмів');
} else {
    alert('Ви кіноман');
}

console.log(personalMovieDB);

