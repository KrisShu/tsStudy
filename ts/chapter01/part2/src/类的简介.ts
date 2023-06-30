//定义类

// 语法
// class 类名{
//     属性名:类型;
//     constructor(参数:类型){
//         this.属性名 = 参数
//     }

//     方法名(){

//     }
// }


// 实例类
//  new 类名();




class Person{
    // 定义实例属性 new了类 才能看到的属性
    name:string = '小美';
    readonly age:number = 18 //readonly 只读属性  不可以修改

    // 定义类属性（静态属性） 使用static关键字可以定义 可以通过类直接访问
    static  job:string ='IT'

    // 定义方法
    sayHello(){
        console.log('hello')
    }
    // 定义类方法
    static sayHi(){
        console.log('hi')
    }
}
const per = new Person();
console.log(per.name);//小美

// 静态属性
console.log(Person.job) //IT

per.sayHello();//hello
Person.sayHi();//hi

