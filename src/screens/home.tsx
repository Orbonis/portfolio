import React from "react";
import { Screen, IScreenProperties, IScreenState } from "src/components/screen";

interface IProperties extends IScreenProperties {

}

interface IState extends IScreenState {

}

export class HomeScreen extends Screen<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            loading: false,
            message: { show: false }
        };
    }

    public componentDidMount(): void {
        this.setMessage("Rendered", false);
    }

    public render(): JSX.Element {
        return super.render(
            <p key="intro">
                I am a professional software engineer, with extensive experience within the gambling industry, 
                utilising my skills to build and maintain games frameworks, as well as creating various tools 
                for streamlining development, devops and client collaboration.
            </p>,
            <p key="more">
                For more specific information on my experience, please see the links below.
            </p>,
            <p key="intro">
                I am a professional software engineer, with extensive experience within the gambling industry, 
                utilising my skills to build and maintain games frameworks, as well as creating various tools 
                for streamlining development, devops and client collaboration.
            </p>,
        );
    }
}