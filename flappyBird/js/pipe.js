/**
 * Created by wangyue on 2017/9/3.
 */
function Pipe(info) {
    this.imageTop = info.imageTop;
    this.imageBottom = info.imageBottom;
    this.canvas = info.canvas;
    this.context = info.context;
    this.x = info.x;
    this.step = info.step;
    this.gap_h = 150;
    this.gap_w = info.gap_w;
    this.position = Math.random()*150+120;
}
Pipe.prototype = {
    constructor : Pipe,
    draw: function () {
        this.x +=this.step;
        if(this.x<=-this.imageTop.width){
            this.x = (this.imageTop.width+this.gap_w)*5+this.gap_w;
        }
        var y_Top = this.position-this.imageTop.height;
        var y_Bottom = this.position+this.gap_h;
        this.context.drawImage(this.imageTop,this.x,y_Top,this.imageTop.width,this.imageTop.height);
        this.context.drawImage(this.imageBottom,this.x,y_Bottom,this.imageBottom.width,this.imageBottom.height);
        this.context.rect(this.x,y_Top,this.imageTop.width,this.imageTop.height);
        this.context.rect(this.x,y_Bottom,this.imageBottom.width,this.imageBottom.height);

    }
}
