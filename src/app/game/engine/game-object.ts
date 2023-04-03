import * as PIXI from 'pixi.js';
import GameEngine from './game-engine';

export default abstract class GameObject {
    public abstract container: PIXI.Container;
    protected get engine() {
        return GameEngine.instance;
    }

    get x() {
        return this.container.x;
    }
    set x(val: number) {
        this.container.x = val;
    }
    get y() {
        return this.container.y;
    }
    set y(val: number) {
        this.container.y = val;
    }
    get pivot() {
        return this.container.pivot;
    }
    set pivot(val: PIXI.IPointData) {
        this.container.pivot = val;
    }
    get rotation() {
        return this.container.rotation;
    }
    set rotation(val: number) {
        this.container.rotation = val;
    }

    abstract init(): void;
    abstract update(delta: number): void;
}