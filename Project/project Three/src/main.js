'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один з останніх фільмів, що переглянули?', ''),
            b = prompt('Яку поставите йому оцінку?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50 && b.length < 50 ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    
    }  
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Переглянуто мало фільмів');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
        alert('Переглянуто достатньо фільмів');
    } else {
        alert('Ви кіноман');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        /*let c = prompt(`Ваш юлюблений жанр під номером ${i++}`);*/
        personalMovieDB.genres[i - 1] = prompt(`Ваш юлюблений жанр під номером ${i++}`)
    }
}

writeYourGeners();

console.log(personalMovieDB);

