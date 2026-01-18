const calculate = (expression) => {
    try {
        return eval(expression);
    } catch (e) {
        return "Ошибка в выражении";
    }
};

console.log(calculate("10 + 5 * 2"));
