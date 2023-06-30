// 定义食物类food
class Food{
    element:HTMLElement;
    constructor(){
        // 获取页面中food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }
    // 定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft
    }
      // 定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop
    }

    // 修改食物的位置
    change(){
        //生成一个随机的位置
        // 食物位置最小是0 最大是304-10-边框4
        // 蛇移动一次就是一格，一格的大小就是10，所以要求食物的坐标必须是整10（10的倍数）

        let left = Math.round( Math.random()*29) * 10;
        let top = Math.round( Math.random()*29) * 10;
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food