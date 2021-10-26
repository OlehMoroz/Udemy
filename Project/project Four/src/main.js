'use strict';

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один з останніх фільмів, що переглянули?', ''),
                b = prompt('Яку поставите йому оцінку?', '');
        
            if (a != null && b != null && a != '' && b !='' && a.length < 50 && b.length < 50 ) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        
        }  
    },
    start: function () {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
    
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Переглянуто мало фільмів');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
            alert('Переглянуто достатньо фільмів');
        } else {
            alert('Ви кіноман');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGeners: function () {
        for (let i = 1; i < 2; i++) {
            /*let genre = prompt(`Ваш юлюблений жанр під номером ${i++}`);
            if (genre == null || genre == '') {
                console.log('Ви ввели не коректні дані або не ввели їх взагалі');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }*/

            let genres = prompt('Ведіть ваш улюблений жанр через кому').toLowerCase();

            if (genres == null || genres == '') {
                console.log('Ви ввели не коректні дані або не ввели їх взагалі');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        });
    },
    toogleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    }
};

/*personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toogleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGeners();

console.log(personalMovieDB);*/

/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}*/

/*function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один з останніх фільмів, що переглянули?', ''),
            b = prompt('Яку поставите йому оцінку?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50 && b.length < 50 ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    
    }  
}*/

/*function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Переглянуто мало фільмів');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
        alert('Переглянуто достатньо фільмів');
    } else {
        alert('Ви кіноман');
    }
}*/

/*function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}*/

/*function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш юлюблений жанр під номером ${i++}`)
    }
}*/