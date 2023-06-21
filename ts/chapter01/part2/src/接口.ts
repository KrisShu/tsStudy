(function(){
    /**
     * 接口用来定义一个类结构,用来定义一个类中应该包含哪些属性和方法
     * 同时，接口也可以当成类型声明去使用
     *  
     */

    interface myInterface{
        name:string,
        age:number
    }

    // 可以重复，注意使用类型是就要加上
    interface myInterface{
        gender:string 
    }

    // 多写少写属性，都会报错
    const obj:myInterface ={
        name:'小美',
        age:18,
        gender:'女'
    }


    /***
     * 接口可以在定义类的时候去限制类的结构
     *  接口中的所有属性都不能有实际值
     *  接口定义对象的结构，而不考虑实际值
     *  在接口中所有的方法都是抽象方法
     */
    interface myInter{
        name:string,
        sayHello():void;
    }

    /**
     * 定义类时，可以使类去实现一个接口
     *  实现接口就是使类满足接口的要求
     */
    class myClass implements myInter{
        name:string;
        constructor(name:string){
            this.name = name
        }
        sayHello(){
            console.log("大家好")
        }
    }

    
})();