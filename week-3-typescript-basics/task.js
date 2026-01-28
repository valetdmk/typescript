function introduceYourself(name, age) {
    if (age !== undefined) {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(name, " \u0438 \u043C\u043D\u0435 ").concat(age, " \u043B\u0435\u0442.");
    }
    return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(name);
}
console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна'));
var myLibrary = [
    { title: 'Дюна', author: 'Фрэнк Герберт', year: 1965 },
    { title: 'Унесённые ветром', author: 'Маргарет Митчелл', year: 1936 }
];
