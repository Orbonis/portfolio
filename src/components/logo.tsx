import React from "react";
import { Easing, Tween, update as TweenUpdate } from "@tweenjs/tween.js";

interface ITextData {
    text: string;
    x: number;
    y: number;
}

interface IFontData {
    size: number;
    minSize: number;
    family: string;
    colour: string;
}

interface ICanvasData {
    width: number;
    height: number;
    timeToCross: number;
}

interface IProperties {
    
}

export class Logo extends React.Component<IProperties, {}> {
    protected ctx?: CanvasRenderingContext2D;
    protected animationFrame?: number;
    protected font: IFontData = { size: 70, family: "consolas", minSize: 0, colour: "#666666" };
    protected canvas: ICanvasData = { width: 1000, height: 1000, timeToCross: 10000 };
    protected text: string[] = [
        "typescript",
        "javascript",
        "html",
        "css",
        "node.js",
        "react",
        "aws",
        "jira",
        "git",
        "bitbucket",
        "c#",
        "java",
        "unity"
    ];
    protected textData: ITextData[] = [];

    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public componentDidMount(): void {
        this.updateColour();

        const canvas = document.getElementById("logo-canvas") as HTMLCanvasElement | null;
        if (canvas && !this.ctx) {
            this.setupCanvas(canvas);
        }
    }

    public componentDidUpdate(): void {
        this.updateColour();
    }

    public render(): JSX.Element {
        return (
            <canvas id="logo-canvas" className="logo-canvas" width={this.canvas.width} height={this.canvas.height} title="This serves no purpose and has no meaning. I was bored."></canvas>
        );
    }

    protected updateColour(): void {
        this.font.colour = "#CCCCCC";
    }

    protected setupCanvas(canvas: HTMLCanvasElement): void {
        try {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                this.ctx = ctx;
                
                this.textData = this.text.map(this.getTextData);

                this.textData.forEach((data) => {
                    new Tween(data)
                        .to({ x: -data.x, y: -data.y }, ((this.getDistance(data) * 2) / this.canvas.width) * this.canvas.timeToCross)
                        .repeat(Infinity)
                        .yoyo(true)
                        .start();
                });

                this.animationFrame = requestAnimationFrame(this.update);
            } else {
                throw new Error("Context 2d is null.");
            }
        } catch (e) {
            if (this.animationFrame !== undefined) {
                cancelAnimationFrame(this.animationFrame);
            }
            console.error(e);
            console.log("Failed to get 2d context from the canvas. No fancy logo for you!");
        }
    }

    protected update = (time: number): void => {
        if (this.ctx) {
            TweenUpdate(time);

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.textData.forEach(this.drawText);

            this.animationFrame = requestAnimationFrame(this.update);
        } else {
            if (this.animationFrame !== undefined) {
                cancelAnimationFrame(this.animationFrame);
            }
        }
    }

    protected getTextData = (text: string): ITextData => {
        if (this.ctx) {
            this.ctx.fillStyle = this.font.colour;
            this.ctx.font = `${this.font.size}px ${this.font.family}`;
            this.ctx.textAlign = "center";
        }
        const metrics = this.ctx?.measureText(text) ?? { width: 0 };
        const x: number = ((Math.random() * (this.canvas.width - (metrics.width * 2))) + metrics.width) - (this.canvas.width / 2);
        const y: number = ((Math.random() * (this.canvas.height - (this.font.size * 2))) + this.font.size) - (this.canvas.height / 2);

        return { text, x, y };
    }

    protected drawText = (data: ITextData): void => {
        if (this.ctx) {
            const distance = this.getDistance(data);
            const scale: number = Math.max(1 - (distance / (this.canvas.width / 2)), this.font.minSize / this.font.size);
            this.ctx.fillStyle = this.font.colour;
            this.ctx.font = `${Easing.Quadratic.InOut(scale) * this.font.size}px ${this.font.family}`;
            this.ctx.fillText(data.text, (this.canvas.width / 2) + data.x, (this.canvas.height / 2) + data.y);
        }
    }

    protected getDistance(data: ITextData): number {
        if (this.ctx) {
            const center = { x: data.x + this.ctx.measureText(data.text).width / 2, y: data.y };
            return Math.abs(Math.sqrt(Math.pow(center.x, 2) + Math.pow(center.y, 2)));
        } else {
            return 0;
        }
    }
}
