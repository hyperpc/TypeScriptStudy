//联合类型
let sn = 'string,number';
function snFunc() {
    return 'string, number';
}
console.info(sn);
console.info(snFunc);
//交叉类型
class Person {
    talk() {
        return "一个人";
    }
}
class Dog {
    bark() {
        return "汪汪汪";
    }
}
function extend(first, second) {
    let result = {};
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(first))) {
        result[func] = first[func];
    }
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(second))) {
        result[func] = second[func];
    }
    return result;
}
let personDog = extend(new Person(), new Dog());
console.info(personDog.talk());
console.info(personDog.bark());
//类型转换
let testToConvert = '123';
let str1 = testToConvert;
let str2 = testToConvert;
let num1 = testToConvert;
let num2 = testToConvert;
console.info(str1);
console.info(str2);
console.info(num1);
console.info(num2);
//类型保护
function get() {
    return 'test';
}
let testtype = get();
if (typeof testtype === 'string') {
    console.info(testtype.length);
}
if (testtype instanceof String) {
    console.info(testtype.length);
}
function isStr(p) {
    return p.sub !== undefined;
}
if (isStr(testtype)) {
    console.info(testtype.length);
}
else {
    console.info(testtype + 1);
}
let str = 'aaa';
console.info(str.length);
class Chicken {
}
class Duck {
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
let iSquare;
//iSquare.kind = "square";
iSquare.size = 10;
let iRectangle;
//iRectangle.kind = "rectangle";
iRectangle.width = 10;
iRectangle.height = 10;
let iCircle;
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
//# sourceMappingURL=iAdvanceType.js.map