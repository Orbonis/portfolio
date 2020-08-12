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
            <p>
                I am currently working at a gambling slots developer 
                called <b>Epic Industries</b> where I help to maintain their framework, 
                develop various casino games and build tools that allow for better 
                development flow and smoother devops.
            </p>,
            <TableComponent type="orientation" data={{
                "Company": "Epic Industries",
                "Role": "Senior Developer"
            }} />,
            <p>
                Testing
            </p>
        );
    }
}