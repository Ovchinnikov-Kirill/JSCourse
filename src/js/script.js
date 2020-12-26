"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const porsonalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотреных фильмов?', ''),
            b = +prompt('На скольо оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            porsonalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }    
    }
}
rememberMyFilms();
// Разные варианты циклов


//  let i = 0;

// while (i < 2) {
//     const a = prompt('Один из просмотреных фильмов?', ''),
//         b = +prompt('На скольо оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//         porsonalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
//     i++;  
// }

// do {
//     const a = prompt('Один из просмотреных фильмов?', ''),
//           b = +prompt('На скольо оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//         porsonalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }  
//     i++;  
// } while (i < 2);

function detectPersonalLevel() {
    if (porsonalMovieDB.count < 10) {
        alert('Просмотренно дольно мало фильмов');
    } else if (porsonalMovieDB.count >= 10 && porsonalMovieDB.count <= 30) {
        alert('Вы класический зритель');
    } else if (porsonalMovieDB.count > 30) {
        alert('Да вы настоящий киноман');
    } else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(porsonalMovieDB);
    }
}
showMyDB(porsonalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        porsonalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();