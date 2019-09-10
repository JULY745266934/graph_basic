/**
 * background canvas
 */
export default class BCanvas {
    private _canvas: any = null;
    private _ctx: any = null;
    public get ctx() {
        return this._ctx;
    }

    private static _instance: BCanvas;
    public static get I(): BCanvas {
        if (!BCanvas._instance) {
            BCanvas._instance = new BCanvas();
        }
        return this._instance;
    }

    constructor() {
        this._canvas = document.getElementById("myCanvas");
        this._ctx = this._canvas.getContext("2d");
    }
}