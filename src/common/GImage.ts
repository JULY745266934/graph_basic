import { Rgba } from "./Rgba";
import BCanvas from "../utils/BCanvas";

export class GImage {
    //宽
    public width: number = 100;
    //高
    public height: number = 100;
    //图片像素
    public pixels: Array<Rgba>;

    /**
     * 图片加载
     * @param url 
     */
    public loadImage(url: string) {
        let img = new Image();
        img.src = url;

        let ctx = BCanvas.I.ctx;
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            img.style.display = 'none';
        }
        console.log(img);
        // ctx.getImageData();
    }
}