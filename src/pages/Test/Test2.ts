export function f7() {
    {
        const fn = <T>(x: T): T => {
            return x
        }
        console.log(fn<number>(7), fn([1,2,3]))
    }

    {
        const fn = <T>(x: T[]): number => {  
            return x.length
        }
        console.log(fn([1,2,3]))
    }   

    {
        interface ILength{
            length: number
        }
        const fn = <T extends ILength>(x: T) => { 
            return x.length
        }
        console.log(fn([1,2,3,5]))
        // TS2345: Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'ILength'.
        // Object literal may only specify known properties, and 'a' does not exist in type 'ILength'.
        // console.log(fn({a:1, b:2})) 
        console.log(fn({a:1, b:2, length: 5}))
    }

    {
        const getProperty = <T, K extends keyof T>(obj: T, key: K): number => {
            return obj[key] as unknown as number;
        }   
        const x = { a: 1, b: 2, c: 3 };
        console.log(getProperty(x, "a"))
        // TS2345: Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'
        // console.log(getProperty(x, "d"))
    }
}
