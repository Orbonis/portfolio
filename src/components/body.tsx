import React, { ReactNode } from "react";

interface IProperties extends React.HTMLProps<HTMLDivElement> {

}

export class Body extends React.Component<IProperties, {}> {
    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        const classes: string[] = [ "main" ];
        classes.push(...(this.props.className?.split(" ") ?? []));
        return (
            <div className={ classes.join(" ") }>
                { this.props.children }
            </div>
        )
    }
}
