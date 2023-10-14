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
        return (
            <div className="segment" style={this.props.style}>
                { this.props.children }
            </div>
        );
    }
}
