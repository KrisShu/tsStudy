(function(){
   
    class Animal{
        name:string;
      
        constructor(name:string){
            this.name = name
        }
        sayHello(){
            console.log("动物叫")
        }
    }
    class Dog extends Animal{
        age:number;
        constructor(name:string,age:number) {
            super(name)
            this.age = age
        }
        sayHello(){
            // 在类的方法中super就表示当前的父类
          super.sayHello();
        }
    }   

    const dog = new Dog('小黑',10);
    dog.sayHello();//动物叫

})(); //可以解决类名重复报错的问题

