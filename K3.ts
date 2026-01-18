function introduce(name: string, age?: number): string {
    if (age !== undefined) {
        return `Меня зовут ${name}, мне ${age} лет`;
    }
    return `Меня зовут ${name}`;
}

interface Product {
    id: number;
    title: string;
    price: number;
}

const products: Product[] = [
    {id: 1, title: "Ноутбук", price: 80000},
    {id: 2, title: "Смартфон", price: 50000},
    {id: 3, title: "Наушники", price: 7000}
];