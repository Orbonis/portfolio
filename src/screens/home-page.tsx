import React from "react";

interface IProperties {

}

interface IState {

}

export class HomePage extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {

        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="portrait">
                    <img src="/media/me.png" />
                </div>
                <div className="summary">
                    <div className="tagline">
                        &lt;Full Stack Software Engineer &amp; DevOps Engineer&gt;
                    </div>
                    I am a professional software engineer, with extensive experience within the gambling industry, 
                    utilising my skills to build and maintain games frameworks, as well as creating various tools for 
                    streamlining development, devops and client collaboration.
                </div>
            </div>
        )
    }
}