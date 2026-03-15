function introduceYourself(name: string, age?: number): string {
    if (age !== undefined) {
        return `Привет, меня зовут ${name} и мне ${age} лет.`;
    }
    return `Привет, меня зовут ${name}`;
}
console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна'));

interface Book {
    title: string;
    author: string;
    year?: number;
}

const myLibrary: Book[] = [
    { title: 'Дюна', author: 'Фрэнк Герберт', year: 1965 },
    { title: 'Унесённые ветром', author: 'Маргарет Митчелл', year: 1936 }
];