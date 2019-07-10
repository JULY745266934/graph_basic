import { Rgba } from "../common/Rgba";


export class GEdge {
    private _x1: number = 0;
    private _y1: number = 0;

    private _x2: number = 0;
    private _y2: number = 0;

    private _color1: Rgba;
    private _color2: Rgba

    public get x1(): number {
        return this._x1;
    }

    public get y1(): number {
        return this._y1;
    }

    public get x2(): number {
        return this._x2;
    }

    public get y2(): number {
        return this._y2;
    }

    public get color1(): Rgba {
        return this._color1;
    }

    public get color2(): Rgba {
        return this._color2;
    }

    constructor(x1: number, y1: number, x2: number, y2: number, color1: Rgba, color2: Rgba) {

        if (y1 <= y2) {
            this._x1 = x1;
            this._y1 = y1;
            this._color1 = color1;

            this._x2 = x2;
            this._y2 = y2;
            this._color2 = color2;

        } else {
            this._x1 = x2;
            this._y1 = y2;
            this._color1 = color2;

            this._x2 = x1;
            this._y2 = y1;
            this._color2 = color1;
        }
    }

    /**
     * 根据Y轴获取边上的x值
     */
    public getX(y: number) {
        return ((this._x1 - this.x2) / (this._y1 - this._y2)) * (y - this._y1) + this._x1;
    }

    public get yDis() {
        return this._y2 - this._y1;
    }
}