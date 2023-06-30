class Snake{
    //表示蛇头元素
    head:HTMLElement;
    // 蛇的身体(包括舌头)
    bodies:HTMLCollection;

    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');

    }
    // 获取蛇头的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        this.head.style.left = value + 'px'
    }
    set Y(value:number){
        this.head.style.top = value + 'px'
    }

    // 蛇增加身体的方法
    addBody(){
        // 向element添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}

export default Snake