let a:number
// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10

let b:string
b = 'hello' 

// let c:boolean
// c = true 

let c = false
// c = 'a' // 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
c = true

// eslint-disable-next-line no-undef
let d:object
d = {}

function sum(a:number,b:number){
    return a+b
}
// sum('1',2) //会报错
sum(1,2)


console.log("a",a)
console.log("b",b)
console.log("c",c)
console.log("d",d)