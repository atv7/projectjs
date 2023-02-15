"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const resultFilm = prompt("Один из последних просмотренных фильмов?", "");
const resultRating = prompt("На сколько его оцените?", "");

personalMovieDB.movies[resultFilm] = resultRating;

console.log(personalMovieDB)