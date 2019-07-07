import { Rgba } from "./Rgba";

export default class MyCanvas {

    private _canvas: any = null;
    private _ctx: any = null;
    private _imgData: any = null;

    constructor() {
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");

        this._imgData = this._ctx.createImageData(this.width, this.height);
    }

    public get width(): number {
        return this._canvas.width;
    }

    public get height(): number {
        return this._canvas.height;
    }

    public fillBuffer(buffer: Rgba[]) {
        let imgData = this._imgData;
        for (var i = 0, j = 0; i < imgData.data.length && j < buffer.length; i += 4, j++) {
            imgData.data[i + 0] = buffer[j].r;
            imgData.data[i + 1] = buffer[j].g;
            imgData.data[i + 2] = buffer[j].b;
            imgData.data[i + 3] = buffer[j].a;
        }
        this._ctx.putImageData(imgData, 0, 0);
    }
}