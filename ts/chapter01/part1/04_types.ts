//object表示一个js对象
let a4 : object
a4 = {}
a4 = function (){

}

//在属性名后边加上 ？表示属性是可选的
let b4 : {name : string,age ?: number}
b4 = {name:'名字',age:18}

//[propName : string]:any表示任意类型的属性
let c4 : {name : string ,[propName : string]:any};

c4 = {name:'名字',age:18,gender:'男'}


/* 
*设置函数结构声明
* 语法 ： (形参:类型,形参:类型,...) => 返回值
*/
let d4 :(a:number,b:number)=>number

d4 = function(n1,n2):number{
    return 3
}


/* 
*数组的声明方式
*  类型[]
*  Array<类型>
*/

let e:string[]
e = ['a','b','c']

let f4: Array<number>
f4 = [1,2,3]

/* 
* 元组，元组就是固定长度的数组
* 语法 [类型,类型]
*/
let h: [string,string ]
h = ['1','2']

/* 
* enum  枚举
* 
*/

enum Gender{
    Male,
    Female
}
let i :{name:string,gender:Gender}
i ={name:'小刚',gender:Gender.Male}

//类型的别名
type  mytype = string  //mytype等价于string
let j:mytype

