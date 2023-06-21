/**
 * 在定义函数或类时，如果遇到类型不明确就可以使用泛型
 */

function fn<T>(a:T):T{
    return a
}

fn(10);//不指定泛型，ts可以自动对泛型进行推断
fn<string>('hello')//指定泛型
fn<string | number>('hello2')//指定泛型


/***
 * 泛型可以同时指定多个
 */
function fn2<A,B>(a:A,b:B):A{
    return a
}

fn2(123,'hello')
fn2<number,string>(456,'haha')

interface Inter{
    length:number
}

//  泛型必须
function f3<T extends Inter>(a:T):number{
    return a.length
}
f3({length:10})
