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
            <div key="ambitions">
                <p>My current ambitions are to expand my knowledge of server development and the range of technologies I am familiar with.</p>
                <p>In the near future I expect to learn more about the implications of using Typescript as the main programming language for server development, as well as optimisation techniques and best practises.</p>
                <p>In addition to furthering my knowledge on server development, I will also be continuing my interest in Continuous Integration, streamlined deployment and how automation can help improve the development flow.</p>
            </div>,
            <br key="break" />
        );
    }
}