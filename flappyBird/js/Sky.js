/**
 * Created by wangyue on 2017/9/3.
 */
function Sky(info) {
    this.image = info.image;
    this.canvas = info.canvas;
    this.context = info.context;
    this.x = info.x;
    this.step = info.step;
}
Sky.prototype = {
    constructor : Sky,
    draw: function () {
        this.x +=this.step;
        if(this.x<=-this.image.width){
            this.x = this.image.width;
        }
        this.context.drawImage(this.image,this.x,0,this.canvas.width,this.canvas.height);
    }
}
