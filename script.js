var money = +prompt('Your budget for month');
var time = prompt('Введите дату в формате YYYY-MM-DD');
var answer1 = prompt('Введите обязательную статью расходов в этом месяце');
var answer2 = prompt('Во сколько обойдется?');

var appData = {
    budget : money,
    dataTime : time,
    expenses : {
        answer1 : answer2
    },
    optionalExpenses : {},
    income : [],
    savings : false
};

alert(money / 30);