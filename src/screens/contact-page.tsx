import React from "react";
import { Icon } from "semantic-ui-react";

interface IProperties {

}

interface IState {

}

export class ContactPage extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {

        };
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="contact">
                    <div className="contact-group">
                        <Icon name="linkedin" size="big" color="blue" />
                        <a href="https://www.linkedin.com/in/dean-rutter-359a853b" target="_blank">LinkedIn</a>
                    </div>
                    <div className="contact-group">
                        <Icon name="mail outline" size="big" color="grey" />
                        <a href="mailto:dean@orbonis.co.uk" target="_blank">Email</a>
                    </div>
                </div>
            </div>
        )
    }
}