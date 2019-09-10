import { Rgba } from "../common/Rgba";
import MathUtil from "../common/MathUtil";
import { GEdge } from "./GEdge";

/**
 * 图形绘制类
 */
export default class GMyGraph {
    private _buffer: Array<Rgba>;
    private _width: number = 0;
    private _height: number = 0;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;

        this._buffer = [];
        this.clearBuffer();
    }

    public get buffer(): Array<Rgba> {
        return this._buffer;
    }

    public setPixel(x: number, y: number, color: Rgba) {
        if (x >= this._width || y >= this._height) {
            return;
        }
        x = Math.round(x);
        y = Math.round(y);
        this._buffer[y * this._width + x] = color;
    }

    public clearBuffer() {
        for (var i = 0; i < this._width; i++) {
            for (var j = 0; j < this._height; j++) {
                this.setPixel(i, j, Rgba.BLACK);
            }
        }
    }

    /**
     * 画点
     * @param x 
     * @param y 
     * @param color 
     * @param size 
     */
    public drawPoint(x: number, y: number, color: Rgba, size: number) {

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                this.setPixel(x + i, y + j, color);
            }
        }
    }


    /**
     *  画线
     * @param x1 
     * @param y1 
     * @param x2 
     * @param y2 
     * @param color 
     * @param size 
     */
    public drawHLine(x1: number, x2: number, y: number, color1: Rgba, color2: Rgba) {

        //画横线
        let _x1 = x1;
        let _x2 = x2;
        let _color1 = color1;
        let _color2 = color2;

        if (x1 > x2) {
            _x1 = x2;
            _x2 = x1;
            _color1 = color2;
            _color2 = color1;
        }
        for (var x = _x1; x < _x2; x += 1) {
            let scale = (x - _x1) / (_x2 - _x1);
            let color = MathUtil.colorLerp(_color1, _color2, scale);
            this.drawPoint(x, y, color, 1);
        }
    }

    /***
     * 画三角形
     */
    public drawTriangle(
        x1: number, y1: number,
        x2: number, y2: number,
        x3: number, y3: number,
        color1: Rgba,
        color2: Rgba,
        color3: Rgba
    ) {

        let edge1: GEdge = new GEdge(x1, y1, x2, y2, color1, color2);
        let edge2: GEdge = new GEdge(x2, y2, x3, y3, color2, color3);
        let edge3: GEdge = new GEdge(x3, y3, x1, y1, color3, color1);

        if (edge1.yDis > edge2.yDis && edge1.yDis > edge3.yDis) {
            //第一条边是长边

            // 画上半部分三角形
            this.drawEdge(edge2, edge1);
            // 画下半部分三角形
            this.drawEdge(edge3, edge1);

        } else if (edge2.yDis > edge1.yDis && edge2.yDis > edge3.yDis) {
            //第二条边是长边

            // 画上半部分三角形
            this.drawEdge(edge1, edge2);
            // 画下半部分三角形
            this.drawEdge(edge3, edge2);
        } else {
            //第三条边是长边

            // 画上半部分三角形
            this.drawEdge(edge1, edge3);
            // 画下半部分三角形
            this.drawEdge(edge2, edge3);
        }
    }

    /**
     * 
     * @param edge1 短的边
     * @param edge2 长的边
     * @param color 
     * @param size 
     */

    public drawEdge(edge1: GEdge, edge2: GEdge) {
        let step = 1 / (edge1.y2 - edge1.y1);

        let scale: number = 0;

        let midColorScale: number = (edge1.y2 - edge1.y1) / (edge2.y2 - edge2.y1);

        //上半边的三角形
        let isTop: boolean = edge1.y2 < edge2.y2;
        let e2Color: Rgba = Rgba.BLACK;
        if (isTop) {
            e2Color = MathUtil.colorLerp(edge2.color1, edge2.color2, midColorScale);
        } else {
            e2Color = MathUtil.colorLerp(edge2.color2, edge2.color1, midColorScale);
        }

        for (let y = edge1.y1; y < edge1.y2; y += 1) {

            scale += step;

            let x1 = edge1.getX(y);
            let x2 = edge2.getX(y);

            var color1, color2;
            color1 = MathUtil.colorLerp(edge1.color1, edge1.color2, scale);

            if (isTop) {
                color2 = MathUtil.colorLerp(edge2.color1, e2Color, scale);
            } else {
                color2 = MathUtil.colorLerp(e2Color, edge2.color2, scale);
            }
            this.drawHLine(x1, x2, y, color1, color2);
        }
    }
}