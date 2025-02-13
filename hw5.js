function randInt(start,end){
    return (Math.floor(Math.random()*(end-start+1))+start);
}

//初始化球球的屬性
class Ball {
    constructor(){
        this.radius = randInt(10,20);
        this.coor = {x:randInt(100,700), y:randInt(150,550)};
        this.speed = {x:randInt(3,8), y:randInt(3,8)};
        this.node = document.createElement("div");
        this.node.setAttribute("class","ball");
        this.node.style.width =  (2*this.radius) + "px";
        this.node.style.height = this.node.style.width;
        this.node.style.backgroundColor= "rgb("+randInt(0,255)+","+randInt(0,255)+","+randInt(0,255)+")";
        this.node.style.left = this.coor.x+ "px";
        this.node.style.top = this.coor.y+ "px";
    }
    move(){
        var _2r = 2*this.radius;
        this.coor.x += this.speed.x;
        if (this.coor.x > 800 - _2r || this.coor.x < 5){
            this.speed.x = -this.speed.x/Math.abs(this.speed.x)*(randInt(3,8));
            this.coor.x += this.speed.x;
        }

        this.coor.y += this.speed.y;
        if (this.coor.y > 700 - _2r || this.coor.y < 5){
            this.speed.y = -this.speed.y/Math.abs(this.speed.y)*(randInt(3,8));
            this.coor.y += this.speed.y;
        }
        this.node.style.left = this.coor.x+ "px";
        this.node.style.top = this.coor.y+ "px";
    }
}

var container = document.createElement("div");
container.setAttribute("id","container"); //裡面的container 是配css的 不是變數名
/*container.style.width = "800px";
container.style.height = "700px";*/
document.body.appendChild(container);

var aBall=[]
var balls = randInt(3,10); //3~10
for(let i = 0; i<balls; i++){
    aBall.push(new Ball());
    container.appendChild(aBall[i].node);
}

let timer = setInterval(function(){
    var p = document.getElementsByTagName("p")[0];
    p.innerText = "現在球的數量 ： "+ aBall.length;
    for(let i = 0; i<aBall.length; i++)
        aBall[i].move()
},45);

setTimeout(clearInterval, 15000, timer);
//setTimeout("clearInterval(timer), 15000);

//新增球球數量
function add(aBall){ 
    aBall.push(new Ball());
    container.appendChild(aBall[aBall.length-1].node);
}

//刪除球球
function del(aBall){
    container.removeChild(aBall[aBall.length-1].node);
    aBall.pop();
}