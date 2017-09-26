//let : var的替代者
//for (let i = 0; i < 10; i++) {
//    setTimeout(function () {
//        console.info(i);
//    }, 100);
//}
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
//const:常量
var const_str = 'string';
//解构
var _a = [1, '2', false], first = _a[0], second = _a[1], third = _a[2];
console.info("first: " + first);
console.info("second: " + second);
console.info("third: " + third);
//交换元素位置
//let [first, second] = [second, first];
var arrN = [1, 2, 3];
var newArrN = arrN.concat([4, 5]);
console.info(newArrN);
var Test = /** @class */ (function () {
    function Test() {
        this.istr = 'string';
        this.iint = 1;
        this.ibool = false;
    }
    Test.prototype.func = function () {
        console.info('func');
    };
    return Test;
}());
//let { str, bool, func } = new Test();
var iTest = new Test();
var newStr = new Test().istr;
console.info(iTest.istr + ", " + iTest.iint + ", " + iTest.ibool);
iTest.func();
var _b = new Test(), istr = _b.istr, other = __rest(_b, ["istr"]);
console.info(other.iint);
//console.info(other.func());
var NewTest = /** @class */ (function () {
    function NewTest() {
        this.newistr = '';
    }
    return NewTest;
}());
var _c = new NewTest(), _d = _c.empty, empty = _d === void 0 ? 'empty' : _d, _e = _c.newistr, newistr = _e === void 0 ? 'str' : _e;
console.info(empty + ", " + istr);
