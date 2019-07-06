

export class Rgba {
    private _r: number;
    private _g: number;
    private _b: number;
    private _a: number;

    public static BLACK: Rgba = new Rgba(0, 0, 0, 0);

    public get r(): number {
        return this._r;
    }

    public get g(): number {
        return this._g;
    }

    public get b(): number {
        return this._b;
    }

    public get a(): number {
        return this._a;
    }

    constructor(r: number = 255, g: number = 255, b: number = 255, a: number = 255) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
    }
}