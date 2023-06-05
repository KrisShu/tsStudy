//也可以直接使用字面量进行类型声明
var a2;
a2 = 10;
console.log("a", a2);
var b2;
b2 = 'male';
b2 = "female";
console.log("b2", b2);
var c2;
c2 = 'hello';
c2 = true;
console.log(c2);
//any 表示的任意类型  不建议使用
var d2;
d2 = 'hello';
d2 = 1;
d2 = true;
console.log(d2);
//unknown 表示未知类型的值
// eslint-disable-next-line no-undef
var e2;
e2 = 'hello';
e2 = 1;
e2 = true;
console.log(e2);
var e3;
e3 = 'hello';
var s;
//类型断言，可以用来告诉解析器
s = e3;
s = e3;
console.log(s, e3);
//void 用来表示空，以函数为例，就表示没有返回值的函数
function f() {
}
