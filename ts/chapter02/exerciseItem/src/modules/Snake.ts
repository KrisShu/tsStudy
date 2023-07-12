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
    //设置蛇头的位置 
    set X(value:number){
        // 如果新值和久值相同 就不修改
        if(this.X === value){
            return;
        }
        // X的值合法值范围0-290
        if(value <0 || value > 290){
            // 
            throw new Error('蛇撞墙了')
        }
        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            // 
            if(value > this.X){
                value = this.X -10;
            }else{
                value = this.X +10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value:number){
        if(this.Y === value){
            return;
        }
        if(value <0 || value > 290){
            // 
            throw new Error('蛇撞墙了')
        }

        // 修改y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            // 
            if(value > this.Y){
                value = this.Y -10;
            }else{
                value = this.Y +10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px'

        // 
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody(){
        // 向element添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    moveBody(){
        /**
         * 将后边的身体设置为前边身体的位置
         */

        // 遍历获取所有的身体
        for(let i = this.bodies.length-1;i>0;i--){
            //获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 
            (this.bodies[i] as HTMLElement).style.left = X+ 'px';
            (this.bodies[i] as HTMLElement).style.top = Y+ 'px';
        }

    }
    // 用来检查蛇头是否撞到自己
    checkHeadBody(){
        for(let i =1; i<this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('蛇撞死自己了~~')
            }
        }
    }
}

export default Snake