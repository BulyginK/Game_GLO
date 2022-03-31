'use strict';

const isNamber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function question() {
    const a = 11;
    let number = prompt("Угадай число от 1 до 100");
        
    function more() {
        alert("Загаданное число меньше");
        question();
    }

    function less() {
        alert("Загаданное число больше");
        question();
    }

    function end() {
        alert("Игра окончена");
    }

    if (number === null) {
        end();
    } else {
        while (!isNamber(number)) {
            number = prompt("Введи число!");
            console.log(number);
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
question();
