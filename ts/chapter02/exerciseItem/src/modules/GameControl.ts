// 游戏控制器，控制其所有类

import Food from './food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl{
    //定义三个属性

    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;

    // 创建一个属性来存储蛇的移动方向
    direction:string = 'Right';

    // 创建一个属性用来
    isLive:boolean = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }
    // 游戏初始化
    init(){
      
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        
        // 调用run方法
       
        this.run();
    }

    // 创建一个键盘按下的响应函数
    /**
     * 
     * @param event 
     * 
     */
    keydownHandler(event:KeyboardEvent){
        console.log("event",event.key)
        // 需要检查event.key的值是否合法
        
        this.direction = event.key
    }
    // 创建一个控制蛇移动的方法
    run(){
        /**
         * 向上 top 减少
         * 向下 top 增加
         * 向左 left 减少
         * 向右 left 增加
         */

        // 获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction){
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                 // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        this.snake.X = X
        this.snake.Y = Y

        // 开启一个定时器
        this.isLive && setTimeout(this.run.bind(this),300 * (this.scorePanel.level-1)*30)

    }
}

export default GameControl