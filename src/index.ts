import DemoPoint from "./DemoPoint";
import MyCanvas from "./MyCanvas";
import { Rgba } from "./common/Rgba";

class Demo {
    private _demoPoint: DemoPoint;

    private _myCanvas: MyCanvas;

    constructor() {
        this._myCanvas = new MyCanvas();
    }

    /**
     * 画点
     */
    private _drawPoint() {
        this._demoPoint = new DemoPoint(this._myCanvas.width, this._myCanvas.height);
        this._demoPoint.drawPoint(0, 0, new Rgba(255, 0, 0, 255), 128);

        this._myCanvas.fillBuffer(this._demoPoint.buffer);
    }

    public showDemo() {
        this._drawPoint();
    }
}

new Demo().showDemo();