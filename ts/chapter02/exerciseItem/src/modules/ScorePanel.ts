// 定义积分牌类
class ScorePanel{
    // 
    score = 0;
    level = 1;

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // 设置一个变量限制升级
    maxLevel:number;
    //设置一个变量表示多少分时升级
    upScore:number;

    constructor(maxLevel:number = 10,upScore:number = 10){//默认
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置一个加分的方法
    addScore(){
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if(this.score % this.upScore === 0){//当分数是upScore的倍数时就升级一级
            this.levelUp();
        }
    }

    levelUp(){
        this.level++;
        if( this.level < this.maxLevel){ //当level 小于最大限制level时才升级
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
export default ScorePanel