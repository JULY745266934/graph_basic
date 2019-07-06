import { Rgba } from "./common/Rgba";

export default class DemoPoint {
    private _buffer: Array<Rgba>;
    private _width: number = 0;
    private _height: number = 0;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;

        this._buffer = [];
        this.clear();
    }

    public get buffer(): Rgba[] {
        return this._buffer;
    }

    public clear() {
        for (var i = 0; i < this._width; i++) {
            for (var j = 0; j < this._height; j++) {
                this.setPixel(i, j, Rgba.BLACK);
            }
        }
    }

    public drawPoint(x: number, y: number, color: Rgba, size: number) {

        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                this.setPixel(x + i, y + j, color);
            }
        }
    }

    public setPixel(x: number, y: number, color: Rgba) {
        if (x >= this._width || y >= this._height) {
            return;
        }
        this._buffer[y * this._width + x] = color;
    }


}