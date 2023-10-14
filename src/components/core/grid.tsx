import React, { ReactNode } from "react";

interface IGridProperties extends React.HTMLProps<HTMLDivElement> {
    outline?: boolean;
}

interface IRowProperties extends React.HTMLProps<HTMLDivElement>  {
    fitted?: boolean;
    stretch?: boolean;
    horizontal?: "start" | "center" | "end";
    vertical?: "top" | "middle" | "bottom";
}

interface IColumnProperties extends React.HTMLProps<HTMLDivElement>  {
    fitted?: boolean;
    width?: string | number;
    horizontal?: "start" | "center" | "end";
    vertical?: "top" | "middle" | "bottom";
}

interface IContentProperties extends React.HTMLProps<HTMLDivElement>  {
    fitted?: boolean;
    flex?: boolean;
    horizontal?: "start" | "center" | "end";
    vertical?: "top" | "middle" | "bottom";
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

class Row extends React.Component<IRowProperties, {}> {
    constructor(props: IRowProperties) {
        super(props);

        this.state = {};
    }

    public render(): JSX.Element {
        const classes: string[] = [ "row" ];
        if (this.props.fitted) {
            classes.push("fitted");
        }
        if (this.props.stretch) {
            classes.push("stretch");
        }
        classes.push(this.props.horizontal ?? "start");
        classes.push(this.props.vertical ?? "top");
        classes.push(...(this.props.className?.split(" ") ?? []));

        return (
            <div className={ classes.join(" ") } style={ this.props.style }>
                { this.props.children }
            </div>
        );
    }
}

class Column extends React.Component<IColumnProperties, {}> {
    constructor(props: IColumnProperties) {
        super(props);

        this.state = {};
    }

    public render(): JSX.Element {
        const classes: string[] = [ "column" ];
        if (this.props.fitted || this.props.width !== undefined) {
            classes.push("fitted");
        }
        classes.push(this.props.horizontal ?? "start");
        classes.push(this.props.vertical ?? "top");
        classes.push(...(this.props.className?.split(" ") ?? []));

        return (
            <div className={ classes.join(" ") } style={{ minWidth: this.props.width, ...this.props.style }}>
                { this.props.children }
            </div>
        );
    }
}

class Content extends React.Component<IContentProperties, {}> {
    constructor(props: IContentProperties) {
        super(props);

        this.state = {};
    }

    public render(): JSX.Element {
        const classes: string[] = [ "content" ];
        classes.push(this.props.horizontal ?? "start");
        classes.push(this.props.vertical ?? "top");
        if (this.props.fitted) {
            classes.push("fitted");
        }
        if (this.props.flex) {
            classes.push("flex");
        }

        return (
            <div className={ classes.join(" ") } style={ { ...this.props.style, textAlign: this.props.textAlign } }>
                { this.props.children }
            </div>
        );
    }
}

export class Grid extends React.Component<IGridProperties, {}> {
    constructor(props: IGridProperties) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        const classes: string[] = [ "grid" ];
        if (this.props.outline) {
            classes.push("outline");
        }
        classes.push(...(this.props.className?.split(" ") ?? []));

        return (
            <div className={ classes.join(" ") } style={ this.props.style }>
                { this.props.children }
            </div>
        );
    }

    public static Row = Row;
    public static Column = Column;
    public static Content = Content;
}
