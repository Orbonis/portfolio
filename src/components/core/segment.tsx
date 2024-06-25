import React, { HTMLProps, ReactNode } from "react";

interface IProperties extends HTMLProps<HTMLDivElement> {

}

interface IState {

}

export class Segment extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        const className: string = "segment " + (this.props.className ?? "");

        return (
            <div className={className} style={this.props.style}>
                { this.props.children }
            </div>
        );
    }
}
