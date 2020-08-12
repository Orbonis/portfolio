import React from "react";
import { Screen, IScreenProperties, IScreenState } from "src/components/screen";
import { TableComponent } from "src/components/table";

interface IProperties extends IScreenProperties {

}

interface IState extends IScreenState {

}

export class PresentScreen extends Screen<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            loading: false,
            message: { show: false }
        };
    }

    public render(): JSX.Element {
        return super.render(
            <p key="summary">
                I am currently working at a gambling slots developer 
                called <b>Epic Industries</b> where I help to maintain their framework, 
                develop various casino games and build tools that allow for better 
                development flow and smoother devops.
            </p>,
            <TableComponent key="role" type="orientation" data={{
                "Company": "Epic Industries",
                "Role": "Senior Developer"
            }} />,
            <p key="duties">
                My work involves the use of <b>Typescript</b>, <b>NodeJS</b>, <b>PIXI</b>, <b>AWS</b> and many associated libraries.<br/>
                A typical day consists of continued development on games, including working on 
                improvements and fixes within a core games framework. Code must be written to be modular, so that 
                code can be used across games, clients or globally within the company, depending on the feature.
            </p>,
            <p key="additional">
                On top of games development I also create and maintain several tools used by the company to organise builds, 
                help improve deployment and streamline development. To do this I use various third party APIs, such 
                as <b>Git</b>, <b>JIRA</b>, <b>Bitbucket</b> and <b>AWS</b>.
            </p>,
            <br key="break"/>
        );
    }
}