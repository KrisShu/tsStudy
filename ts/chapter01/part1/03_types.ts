//也可以直接使用字面量进行类型声明
let a2:10
a2 = 10
// a2 =11 //就会报错 
console.log("a",a2)

//可以使用| 连接多个类型（联合类型）
let b2:'male' | "female"
b2 = 'male'
b2 = "female"
// b2 = 'hello'//
console.log("b2",b2)


let c2: boolean | string
c2 = 'hello'
c2 = true
console.log(c2)


//any 表示的任意类型  不建议使用；一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
let d2: any
d2 = 'hello'
d2 = 1
d2 = true
console.log(d2)

/*
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let d;
d = 10
d = 'hello'
d = true

//当
let s:string 
s = d //不会报错 d的类型是any,他可以赋值给任意变量，s也变了
*/

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
// s = e3 //报错 unknown类型的变量，不能直接赋值给其他变量

//类型断言（判断），可以用来告诉解析器变量的实际类型
/**
 * 语法：
 *  变量  as 类型
 * <类型>变量
 */
s = e3 as string; //当e3类型string
s = <string> e3;


console.log(s,e3)

//void 用来表示空，以函数为例，就表示没有返回值的函数
function f():void{

}
