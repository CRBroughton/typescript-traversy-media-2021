// Interfaces

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number,
}

// Interface Functions

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;