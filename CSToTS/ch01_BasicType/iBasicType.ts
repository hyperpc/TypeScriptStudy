
//number
let num = 20;
console.info(num);//20
num = 0xa4;
console.info(num);//164
num = 0b10010;
console.info(num);//18
num = 0o24;
console.info(num);//20

//boolean
let isCheck: boolean = true;
console.info(isCheck);//true

//enum
enum Action {
    add = 1,
    edit = 2,
    del = 4,
    all = add | edit | del
}
console.info(Action.add);//1
console.info(Action.add.toString());//1
console.info(Action[1]);//add
console.info(Action[3]);//undefined
console.info(Action.all);//7
console.info(Action.all && Action.add);//1

//string
let iBlog: string = 'Robert';
let note: string = `this is ${iBlog}'s blog`;
console.info(iBlog);
console.info(note);

//symbol
let key1 = Symbol('iKey');
let key2 = Symbol('iKey');
console.info(key1 === key2);

//any
let test: any = 'test';
test = false;
//test.test();//compiled ok
let arr: any[] = ['test', false];
console.info(test);
console.info(arr);

//void
function itest(): void { }
console.info(itest);

//null
let a: string = null;
let b: null = null;
console.info(a);
console.info(b);

// undefined
let c: string = undefined;
let d: undefined = undefined;
console.info(c);
console.info(d);

//never
function ierror(): never {
    throw new Error('ierror');
}
console.info(ierror);


//Array
let iarray: string[] = ['a', 'b', 'c'];
console.info(iarray);
let ilist: Array<string> = ['a', 'b', 'c'];
console.info(ilist);

let iarray1: number[] = [1, 2, 3];
let iarray2: number[] = [...iarray1, 4, 5];
console.info(iarray1);
console.info(iarray2);

//Tuple
let ituple: [number, string] = [123, '456'];
let iNum = ituple[0];
let iStr = ituple[1];
//ituple[2] is undefined
ituple[3] = '789';
//ituple[4]=true;
console.info(ituple);