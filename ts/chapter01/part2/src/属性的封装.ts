(function(){
    class Person{
        /**Ts中可以在属性前，添加修饰符
         * public 修饰的属性可以在任意位置访问（修改） 默认值
         * private 私有属性，私有属性只能在类内部进行访问（修改）
         *  -通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性，只能在当前类和当前类的子类中访问（使用）
         * 
         */


        private username:string;
        private age:number;
        // username:string;
        // age:number;
        constructor(username: string,age:number){
            this.username = username;
            this.age = age;
        }


        // 定义方法，用来获取name
        // getName(){
        //     return this.username
        // }

        // setName(val:string){
        //     this.username = val
        // }

        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         */

        //TS中设置getter方法的方式
        get name (){
            return this.username
        }
        set name(val:string){
            this.username = val
        }

    }

    const per = new Person('哈哈',18)

    // private -1
    // per.setName('小帅')
    // console.log(per.getName());//小帅

    // private -2
    per.name = '小西';
    console.log(per.name ) //小西




    /**
     * 现在的属性是在对象中设置的，属性可以任意的被修改
     */
    // public写法
    // per.username = '小帅'
    // per.age = 19


    class A{
        protected num:number
        constructor(num:number){
            this.num = num
        }
    }
    class B extends A{
        test(){
            console.log(this.num) //
        }
    }

    const b = new B(10)
    console.log(b.test()) //10 


    

    /**
     * 语法糖
     */

    // class Test{
    //     name:string;
    //     age:Number;
    //     constructor(name:string,age:number){
    //         this.name = name
    //         this.age = age
    //     }
    // }

    // 等价  简写
    class Test{
        constructor(public name:string, publicage:number){}
    }

    let test = new Test('小风',18)




})();