"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');

const porsonalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Один из просмотреных фильмов?', ' '),
    b = +prompt('На скольо оцените его?', ' '),
    c = prompt('Один из просмотреных фильмов?', ' '),
    d = +prompt('На скольо оцените его?', ' ');

    porsonalMovieDB.movies[a] = b;
    porsonalMovieDB.movies[c] = d;

console.log(porsonalMovieDB);