import MyCanvas from "./common/MyCanvas";
import MyGraph from "./common/MyGraph";
import { Rgba } from "./common/Rgba";
import GMyGraph from "./gradient/GMyGraph";

class Demo {

    constructor() {
        let myCanvas = new MyCanvas();

        let myGraph: MyGraph = new MyGraph(myCanvas.width, myCanvas.height);

        //画点

        //  myGraph.drawPoint(10, 10, new Rgba(255, 0, 0, 255), 2);

        //画线
        // myGraph.drawLine(0, 0, 10, 20, new Rgba(255, 0, 0, 255), 2);

        //画三角形
        // myGraph.drawTriangle(0, 0, 10, 30, 30, 20, new Rgba(255, 0, 0, 255));

        // myCanvas.fillBuffer(myGraph.buffer);

        let gMyGraph: GMyGraph = new GMyGraph(myCanvas.width, myCanvas.height);

        // 渐变斜三角形
        // gMyGraph.drawTriangle(
        //     0, 0,
        //     10, 30,
        //     30, 20,
        //     new Rgba(255, 0, 0, 255),
        //     new Rgba(0, 255, 0, 255),
        //     new Rgba(0, 0, 255, 255)
        // );

        // 渐变
        gMyGraph.drawTriangle(
            64, 10,
            14, 70,
            114, 70,
            new Rgba(255, 0, 0, 255),
            new Rgba(0, 255, 0, 255),
            new Rgba(0, 0, 255, 255)
        );

        myCanvas.fillBuffer(gMyGraph.buffer);
    }
}

new Demo();