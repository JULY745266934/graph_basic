import { Rgba } from "./Rgba";
import { Point } from "./Point";
import { Edge } from "./Edge";

export default class MyGraph {
    private _buffer: Array<Rgba>;
    private _width: number = 0;
    private _height: number = 0;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;

        this._buffer = [];
        this.clearBuffer();
    }

    public get buffer(): Rgba[] {
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
    public drawLine(x1: number, y1: number, x2: number, y2: number, color: Rgba, size: number) {

        let xOffset = x1 - x2;
        let yOffset = y1 - y2;

        if (xOffset == 0 && yOffset == 0) {
            //点重合
            this.drawPoint(x1, y1, color, size);
        } else if (xOffset == 0) {
            //画竖线
            let yMax = y2;
            let yMin = y1;
            if (y1 > y2) {
                yMax = y1;
                yMin = y2;
            }

            for (var y = yMin; y < yMax; y += size) {
                this.drawPoint(x1, y, color, size);
            }

        } else if (yOffset == 0) {
            //画横线
            let xMax = x2;
            let xMin = x1;

            if (x1 > x2) {
                xMax = x1;
                xMin = x2;
            }
            for (var x = xMin; x < xMax; x += size) {
                this.drawPoint(x, y1, color, size);
            }
        } else {
            //画斜线
            let k = (y2 - y1) / (x2 - x1);

            if (x1 > x2) {
                for (var x = x2; x < x1; x += size) {
                    var y = k * (x - x2) + y2;
                    this.drawPoint(x, y, color, size);
                }
            } else {
                for (var x = x1; x < x2; x += size) {
                    var y = k * (x - x1) + y1;
                    this.drawPoint(x, y, color, size);
                }
            }
        }
    }

    /***
     * 画三角形
     */
    public drawTriangle(
        x1: number, y1: number,
        x2: number, y2: number,
        x3: number, y3: number,
        color: Rgba
    ) {

        let edge1: Edge = new Edge(x1, y1, x2, y2);
        let edge2: Edge = new Edge(x2, y2, x3, y3);
        let edge3: Edge = new Edge(x3, y3, x1, y1);

        let size = 1;
        if (edge1.yDis > edge2.yDis && edge1.yDis > edge3.yDis) {
            this.drawEdge(edge2, edge1, color, size);
            this.drawEdge(edge3, edge1, color, size);
        } else if (edge2.yDis > edge1.yDis && edge2.yDis > edge3.yDis) {
            this.drawEdge(edge1, edge2, color, size);
            this.drawEdge(edge3, edge2, color, size);
        } else {
            this.drawEdge(edge1, edge3, color, size);
            this.drawEdge(edge2, edge3, color, size);
        }
    }

    /**
     * 
     * @param edge1 短的边
     * @param edge2 长的边
     * @param color 
     * @param size 
     */
    public drawEdge(edge1: Edge, edge2: Edge, color: Rgba, size: number) {

        for (let y = edge1.y1; y < edge1.y2; y += 1) {
            let x1 = edge1.getX(y);
            let x2 = edge2.getX(y);
            this.drawLine(x1, y, x2, y, color, size);
        }
    }
}