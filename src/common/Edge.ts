export class Edge {
    private _x1: number = 0;
    private _y1: number = 0;

    private _x2: number = 0;
    private _y2: number = 0;

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

    constructor(x1: number, y1: number, x2: number, y2: number) {

        if (y1 > y2) {
            this._x1 = x2;
            this._y1 = y2;

            this._x2 = x1;
            this._y2 = y1;
        } else {
            this._x1 = x1;
            this._y1 = y1;

            this._x2 = x2;
            this._y2 = y2;
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