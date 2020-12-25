"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const porsonalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

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


if (porsonalMovieDB.count < 10) {
    alert('Просмотренно дольно мало фильмов');
} else if (porsonalMovieDB.count >= 10 && porsonalMovieDB.count <= 30) {
    alert('Вы класический зритель');
} else if (porsonalMovieDB.count > 30) {
    alert('Да вы настоящий киноман');
} else {
    alert('Произошла ошибка');
}

console.log(porsonalMovieDB);