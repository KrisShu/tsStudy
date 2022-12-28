//也可以直接使用字面量进行类型声明
let a2:10
a2 = 10
console.log("a",a2)


let b2:'male' | "female"
b2 = 'male'
b2 = "female"
console.log("b2",b2)


let c2: boolean | string
c2 = 'hello'
c2 = true
console.log(c2)


//any 表示的任意类型  不建议使用
let d2: any
d2 = 'hello'
d2 = 1
d2 = true
console.log(d2)

//unknown 表示未知类型的值
// eslint-disable-next-line no-undef
let e2: unknown
e2 = 'hello'
e2 = 1
e2 = true
console.log(e2)

let e3:unknown
e3 = 'hello'
let s:string; 

//类型断言，可以用来告诉解析器
s = e3 as string;
s = <string> e3;


console.log(s,e3)

//void 用来表示空，以函数为例，就表示没有返回值的函数
function f():void{

}
