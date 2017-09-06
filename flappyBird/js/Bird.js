/**
 *
 * Created by wangyue on 2017/9/3.
 */
function Bird(info) {
    this.canvas = info.canvas;
    this.context = info.context;
    this.image  = info.image;
    this.x = 100;
    this.y = 100;
    this.w = info.image.width/3;
    this.h = info.image.height;
    this.index = 0;
    this.a = 0.3;
    this.speed = 0;
    this.gap_w = info.gap_w;
    //this.startTime=info.startTime;

}
Bird.prototype = {
    constructor : Bird,
    draw: function () {
        //var now = new Date();
        //var deltaTime = now - this.startTime;
        this.speed += this.a;
        //console.log(deltaTime);
        //var w = this.image.width/3;
        //var h = this.image.height;
        this.y +=this.speed;
        var xIndex = this.index%3;
        this.index++;
        this.context.save();
        this.context.translate(this.x,this.y);
        this.context.rotate(Math.atan(this.speed*60/1000/2));
        this.context.drawImage(this.image,xIndex*this.w,0,this.w,this.h,0,0,this.w,this.h);
        this.context.restore();
        //this.startTime = now;
    }
}
