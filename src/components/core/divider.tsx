import React, { HTMLProps, ReactNode } from "react";

interface IProperties extends HTMLProps<HTMLDivElement> {
    hidden?: boolean;
}

export class Divider extends React.Component<IProperties, {}> {
    constructor(props: IProperties) {
        super(props);
    }

    public render(): ReactNode {
        const classes: string[] = [ "divider" ];
        if (this.props.hidden) {
            classes.push("hidden");
        }
        classes.push(...(this.props.className?.split(" ") ?? []));

        return (
            <div className={ classes.join(" ") } style={ this.props.style }></div>
        );
    }
}