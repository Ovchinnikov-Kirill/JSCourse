"use strict";

// const porsonalMovieDB = {
//     count : 0,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false,
//     start: function() {
//         porsonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (porsonalMovieDB.count == '' || porsonalMovieDB.count == null || isNaN(porsonalMovieDB.count)) {
//             porsonalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из просмотреных фильмов?', ''),
//                 b = +prompt('На скольо оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//                 porsonalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }    
//         }
//     },
//     detectPersonalLevel: function() {
//         if (porsonalMovieDB.count < 10) {
//             console.log('Просмотренно дольно мало фильмов');
//         } else if (porsonalMovieDB.count >= 10 && porsonalMovieDB.count <= 30) {
//             console.log('Вы класический зритель');
//         } else if (porsonalMovieDB.count > 30) {
//             console.log('Да вы настоящий киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(porsonalMovieDB);
//         }
//     },
//     toggleVisbleMyDB: function() {
//         if (porsonalMovieDB.privat) {
//             porsonalMovieDB.privat = false;
//         } else {
//             porsonalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             if (genre === "" || genre == null ) {
//                 console.log('Вы ввели некоректные данные или не ввели их вообще');
//                 i--;
//             } else {
//                 porsonalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         porsonalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 function rememberMyFilms () {
     for (let i = 0; i < 2; i++) {
         const a = prompt('Один из просмотренный вами фильмов?'),
               b = +prompt('На сколько вы бы оценили этот фильм?');
//Провека на пустую строку и отмену действия
        if (a != null && b != null && a != '' && b!= '' &&  a.length <= 50 ) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
//Если в if false, то возвращаем итерацию на шаг назад
            console.log('error');
            i--;
        }
     }
 }

 function detectPersonalLevel() {
     if (personalMovieDB.count < 10) {
         console.log('Вы посмотрели довольно таки мало фильмов');
     } else if (personalMovieDB.count > 30) {
         console.log('Да вы настоящий киноман');
     } else {
         console.log('Вы среднестатистичный зритель');
     }
 }

 rememberMyFilms();
 detectPersonalLevel();

 console.log(personalMovieDB);
