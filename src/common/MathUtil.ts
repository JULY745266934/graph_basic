import { Rgba } from "./Rgba";

export default class MathUtil {

    public static colorLerp(color1: Rgba, color2: Rgba, amount: number) {
        let r = color1.r * (1 - amount) + color2.r * amount;
        let g = color1.g * (1 - amount) + color2.g * amount;
        let b = color1.b * (1 - amount) + color2.b * amount;
        let a = color1.a * (1 - amount) + color2.a * amount;
        return new Rgba(r, g, b, a);
    }
}