

//let : var的替代者
//for (let i = 0; i < 10; i++) {
//    setTimeout(function () {
//        console.info(i);
//    }, 100);
//}



//const:常量
const const_str = 'string';



//解构
let [first, second, third] = [1, '2', false];
console.info(`first: ${first}`);
console.info(`second: ${second}`);
console.info(`third: ${third}`);
//交换元素位置
//let [first, second] = [second, first];

let arrN = [1, 2, 3];
let newArrN = [...arrN, 4, 5];
console.info(newArrN);

class Test {
    istr = 'string';
    iint = 1;
    ibool = false;

    func() {
        console.info('func');
    }
}
//let { str, bool, func } = new Test();
let iTest = new Test();
let { istr: newStr } = new Test();
console.info(`${iTest.istr}, ${iTest.iint}, ${iTest.ibool}`);
iTest.func();


let { istr, ...other } = new Test();
console.info(other.iint);
//console.info(other.func());

class NewTest {
    empty;
    newistr = '';
}
let { empty = 'empty', newistr = 'str' } = new NewTest();
console.info(`${empty}, ${istr}`);