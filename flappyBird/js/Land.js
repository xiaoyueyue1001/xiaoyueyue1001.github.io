/**
 * Created by wangyue on 2017/9/3.
 */
function Land(info) {
    this.image = info.image;
    this.canvas = info.canvas;
    this.context = info.context;
    this.x = info.x;
    this.step = info.step;
}
Land.prototype = {
    constructor : Land,
    draw: function () {
        this.x +=this.step;
        if(this.x<=-this.image.width){
            this.x = this.image.width*3;
        }
        this.context.drawImage(this.image,this.x,this.canvas.height-this.image.height);
    }
}
