'use strict';

const isNamber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const game = function() {
    const randomNamber = Math.ceil(Math.random() * 100 + 1);
    return randomNamber;
}

function question(a) {
    let number = prompt("Угадай число от 1 до 100");
        
    function more() {
        alert("Загаданное число меньше");
        question(a);
    }

    function less() {
        alert("Загаданное число больше");
        question(a);
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
        if (number > a) {
            more();
        } else if (number < a) {
            less();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }
}

isNamber();
question(game());
