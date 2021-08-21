// Generics / reusables components

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['Brad', 'John'])