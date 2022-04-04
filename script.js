'use strict';

let attempt = 0;

const isNamber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const game = function() {
    const randomNamber = Math.ceil(Math.random() * 99 + 1);
    console.log(randomNamber);
    return randomNamber;
}

const counter = function() {
    attempt = attempt + 1;
    return;
}

function question(a) {
    let number = prompt("Угадай число от 1 до 100");
    
    function check() {
        if (attempt < 10) {
            return
        } else {
            beOver();
        }
    }

    function more() {
        alert("Загаданное число меньше, осталось попыток " + (10 - attempt));
        question(a);
    }

    function less() {
        alert("Загаданное число больше, осталось попыток " + (10 - attempt));
        question(a);
    }

    function beOver() {
        if (confirm("Попытки закончились, хотите сыграть еще?")) {
            attempt = 0;
            question(game());
        }
    }

    function end() {
        alert("Игра окончена");
    }

    if (number === null) {
        end();
    } else {
        while (!isNamber(number)) {
            number = prompt("Введи число!");
            while (number === null) {
                end();
                return
            }
        }

        counter();
        check();

        if (attempt == 10) {
            end();
        } else if (number > a) {
            more();
        } else if (number < a) {
            less();
        } else if (number == a){
            if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                attempt = 0;
                question(game());
            } else {
                end();
            }
        }
    }
}

isNamber();
question(game());
