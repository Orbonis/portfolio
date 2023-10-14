import React, { HTMLProps } from "react";
import { adjustBodyHeight } from "src/utils/auto-sizing";

export class Page extends React.Component<HTMLProps<HTMLDivElement>, {}> {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public componentDidUpdate(prevProps: Readonly<React.HTMLProps<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void {
        adjustBodyHeight();    
    }
}
