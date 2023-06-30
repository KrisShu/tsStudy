(function(){
    /**
     * Animal被称为父类，Cat和Dog被称为子类
     * -使用继承后，子类将会拥有父类所有的方法和属性
     * -通过继承可以将多个类中共有的代码写在一个父类中
     *      这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
     *-如果希望在子类添加一些父类没有的属性或方法直接加在子类中即可
     * -如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类方法
     *   这种子类覆盖掉父类方法的形式，称为方法重写
     */  
    class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name = name
            this.age = age
        }
        sayHello(){
            console.log("动物叫")
        }
    }
    class Cat extends Animal{
        run(){
            console.log(`${this.name}在跑`)
        }
    }

    class Dog extends Animal{
        sayHello(){
            console.log("汪汪")
        }
    }


    const cat = new Cat('小花',10);
    cat.sayHello();// 动物叫
    cat.run();//小花在跑


    const dog = new Dog('小黑',10);
    cat.sayHello();// 汪汪

})(); //可以解决类名重复报错的问题

