//number
let num = 20;
console.info(num); //20
num = 0xa4;
console.info(num); //164
num = 0b10010;
console.info(num); //18
num = 0o24;
console.info(num); //20
//boolean
let isCheck = true;
console.info(isCheck); //true
//enum
var Action;
(function (Action) {
    Action[Action["add"] = 1] = "add";
    Action[Action["edit"] = 2] = "edit";
    Action[Action["del"] = 4] = "del";
    Action[Action["all"] = 7] = "all";
})(Action || (Action = {}));
console.info(Action.add); //1
console.info(Action.add.toString()); //1
console.info(Action[1]); //add
console.info(Action[3]); //undefined
console.info(Action.all); //7
console.info(Action.all && Action.add); //1
//string
let iBlog = 'Robert';
let note = `this is ${iBlog}'s blog`;
console.info(iBlog);
console.info(note);
//symbol
let key1 = Symbol('iKey');
let key2 = Symbol('iKey');
console.info(key1 === key2);
//any
let test = 'test';
test = false;
//test.test();//compiled ok
let arr = ['test', false];
console.info(test);
console.info(arr);
//void
function itest() { }
console.info(itest);
//null
let a = null;
let b = null;
console.info(a);
console.info(b);
// undefined
let c = undefined;
let d = undefined;
console.info(c);
console.info(d);
//never
function ierror() {
    throw new Error('ierror');
}
console.info(ierror);
//Array
let iarray = ['a', 'b', 'c'];
console.info(iarray);
let ilist = ['a', 'b', 'c'];
console.info(ilist);
let iarray1 = [1, 2, 3];
let iarray2 = [...iarray1, 4, 5];
console.info(iarray1);
console.info(iarray2);
//Tuple
let ituple = [123, '456'];
let iNum = ituple[0];
let iStr = ituple[1];
//ituple[2] is undefined
ituple[3] = '789';
//ituple[4]=true;
console.info(ituple);
//# sourceMappingURL=iBasicType.js.map