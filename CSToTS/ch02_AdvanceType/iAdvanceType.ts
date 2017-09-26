
//联合类型
let sn: string | number = 'string,number';
function snFunc(): string | number {
    return 'string, number';
}
console.info(sn);
console.info(snFunc);

//交叉类型
class Person {
    talk(): string {
        return "一个人";
    }
}

class Dog {
    bark(): string {
        return "汪汪汪";
    }
}

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(first))) {
        (<any>result)[func] = (<any>first)[func];
    }
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(second))) {
        (<any>result)[func] = (<any>second)[func];
    }
    return result;
}

let personDog = extend(new Person(), new Dog());
console.info(personDog.talk());
console.info(personDog.bark());

//类型转换
let testToConvert: any = '123';
let str1: string = <string>testToConvert;
let str2: string = testToConvert as string;
let num1: number = <number>testToConvert;
let num2: number = testToConvert as number;
console.info(str1);
console.info(str2);
console.info(num1);
console.info(num2);


//类型保护
function get(): number | string {
    return 'test';
}
let testtype = get();
if (typeof testtype === 'string') {
    console.info(testtype.length);
}
if (testtype instanceof String) {
    console.info(testtype.length);
}
function isStr(p: number | string): p is string {
    return (<string>p).sub !== undefined;
}
if (isStr(testtype)) {
    console.info(testtype.length);
} else {
    console.info(testtype + 1);
}


//类型别名
type newstring = string;
let str: newstring = 'aaa';
console.info(str.length);

class Chicken { }
class Duck { }
type Fowl = Chicken | Duck;

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}



//字面量类型
//function test(param1: 'test1' | 'test2' | 'test3') {
//}
//test('test');

//可辨识联合
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

let iSquare: Square;
//iSquare.kind = "square";
iSquare.size = 10;
let iRectangle: Rectangle;
//iRectangle.kind = "rectangle";
iRectangle.width = 10;
iRectangle.height = 10;
let iCircle: Circle;
//iCircle.kind = "circle";
iCircle.radius = 10;

console.info(area(iSquare));
console.info(area(iRectangle));
console.info(area(iCircle));

//类型推论
let x = 123;
function getType1() {
    return [1, 2, 3];
}
let arrType1 = getType1();
function getType2() {
    return [1, '2', 3];
}
let arrType2 = getType2();


