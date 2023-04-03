import { Application } from "pixi.js";

export default class GameEngine {    
    private app!: Application;
    private static _instance?: GameEngine;
    private tickerFn?: (delta: number) => void;

    public get width() {
        return this.app.view.width;
    }
    public get height() {
        return this.app.view.height;
    }

    public static get instance() {
        if (this._instance) {
            return this._instance;
        }
        throw new Error("Engine is not initted.");
    }

    static create(app: Application) {
        this._instance = new this();
        this._instance.app = app;
        this._instance.init();
        return this._instance;    
    }

    private init() {
        this.tickerFn = this.update.bind(this);
        this.app.ticker.add(this.tickerFn);
    }

    private update(delta: number) {

    }

    public destroy() {
        if (this.tickerFn) {
            this.app.ticker.remove(this.tickerFn);
        }
    }
}