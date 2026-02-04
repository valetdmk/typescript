function toArray<T>(...args: T[]): T[] {
    return args;
}

const num = toArray(1, 2, 3);
const str = toArray('a', 'b', 'c');


function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number {
    return parseInt(input, radix);
}

const a = parseInput("123");
const c = parseInput("077");

const e = parseInput("101010", 2);
const f = parseInput("777", 8);