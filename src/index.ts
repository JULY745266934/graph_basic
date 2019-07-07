import MyCanvas from "./common/MyCanvas";
import MyGraph from "./common/MyGraph";
import { Rgba } from "./common/Rgba";

class Demo {

    constructor() {
        let myCanvas = new MyCanvas();

        let myGraph: MyGraph = new MyGraph(myCanvas.width, myCanvas.height);

        //画点

        //  myGraph.drawPoint(10, 10, new Rgba(255, 0, 0, 255), 2);

        //画线
        // myGraph.drawLine(0, 0, 10, 20, new Rgba(255, 0, 0, 255), 2);

        //画三角形
        myGraph.drawTriangle(0, 0, 10, 30, 30, 20, new Rgba(255, 0, 0, 255));

        myCanvas.fillBuffer(myGraph.buffer);
    }
}

new Demo();