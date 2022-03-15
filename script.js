/* Задание на урок 1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок 2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* Задание на урок 3:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Скільки фільмів Ви вже переглянули?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів Ви вже переглянули?", "");
    }
}

start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// Спосіб 1

function rememberMyFilms(circles){
    for (let i = 0; i < circles; i++){

    let recentFilm = prompt("Назвіть один з недавно переглянутих фільмів", '');
    
                while(recentFilm == '' || recentFilm == null){
                    recentFilm = prompt("Назвіть один з недавно переглянутих фільмів", '');
                }
    
                if (recentFilm && recentFilm.length < 50){
                   let markOfFilm = +prompt("Як Ви його оціните від 1 до 10?", '');
    
                    while(markOfFilm == '' || markOfFilm == null || isNaN(markOfFilm)){
                        markOfFilm = +prompt("Як Ви його оціните від 1 до 10?", '');
                    }

                    personalMovieDB.movies[recentFilm] = markOfFilm;
    
            // if (question && question.length < 50){
    
            //     for (let i = 0; i < 1; i++){
            //         let answer = +prompt("Як Ви його оціните від 1 до 10?", '');
            //         if (answer && answer < 1 && answer > 10) {
            //             answer = +prompt("Як Ви його оціните від 1 до 10?", '');
            //             i = 0;
            //         }else {
            //             personalMovieDB.movies[question] = answer;
            //         }
            //     }
    
            }else {
                i--;
                console.log(i);
            }
        }
}
rememberMyFilms(numberOfFilms);


 //Спосіб 2
 
//  while(numberOfFilms > 0){
//     const question = prompt("Назвіть один з недавно переглянутих фільмів");

//             if (question && question.length < 50){
//                 const answer = prompt("Як Ви його оціните?");
//                 personalMovieDB.movies[question] = answer;
//                 numberOfFilms--;
//             }
//  }
 

function detectPersonalLevel(films){
    if (films < 10){
        alert("Переглянуто доволі мало фільмів.");
    } else if (films <= 30){
        alert("Ви класичний глядач.");
    } else if (films > 30){
        alert("Ви кіноман.");
    } else {
        alert("Відбулась помилка.");
    }
    console.log (personalMovieDB);
}

detectPersonalLevel(personalMovieDB.count);


function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        let favoriteGeners = prompt(`"Ваш улюблений жанр під номером ${i}"`);
        while(favoriteGeners == '' || favoriteGeners == null){
            favoriteGeners = prompt(`"Ваш улюблений жанр під номером ${i}"`);
        }
        personalMovieDB.genres[i - 1] = favoriteGeners;
    }
}

writeYourGenres();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
