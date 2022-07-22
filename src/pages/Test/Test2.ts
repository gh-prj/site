export function f7() {
    {
        const fn = <T>(x: T): T => {
            return x
        }
        console.log(fn<number>(7), fn([1, 2, 3]))
    }

    {
        const fn = <T>(x: T[]): number => {
            return x.length
        }
        console.log(fn([1, 2, 3]))
    }

    {
        interface ILength {
            length: number
        }
        const fn = <T extends ILength>(x: T) => {
            return x.length
        }
        console.log(fn([1, 2, 3, 5]))
        // TS2345: Argument of type '{ a: number; b: number; }' is not assignable to parameter of type 'ILength'.
        // Object literal may only specify known properties, and 'a' does not exist in type 'ILength'.
        // console.log(fn({a:1, b:2})) 
        console.log(fn({ a: 1, b: 2, length: 5 }))
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

    {
        // @ts-ignore
        const iAmBeautiful = () => (![] + [])[+[]] + (![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]];
        console.log(iAmBeautiful())
    }

    {
        const arr = [1, 2, 3, 4, 5]
        console.log(
            arr,
            [...arr].sort((a, b) => Math.random() < .5 ? -1 : 1),
            arr.filter(_ => Math.random() < .5)
        )

    }

    {
        const p = new Promise(resolve => {
            setTimeout(() => { resolve("777") }, 2000)
        })
        console.log('Promise created')
        const p2 = p.then(data => console.log('Promise resolved: ' + data))
        p2.then(data => console.log('data: ' + data))
        console.log('After "then"')
    }

    {
        console.log(Array.from(new Set([1, 4, 3, 1, 1, 2, 7, 5, 1, 3])).sort())
        const set = new Set([1, 4, 3, 1, 1, 2, 7, 5, 1, 3])
        console.log(set)
        // console.log([...set])
        console.log([[1, 2, 5], [3, 4]].flat())
    }
}
