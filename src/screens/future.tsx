import React from "react";
import { Screen, IScreenProperties, IScreenState } from "src/components/screen";

interface IProperties extends IScreenProperties {

}

interface IState extends IScreenState {

}

export class FutureScreen extends Screen<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            loading: false,
            message: { show: false }
        };
    }

    public render(): JSX.Element {
        return super.render(
            
        );
    }
}