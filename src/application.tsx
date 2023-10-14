import React from "react";
import { Grid } from "./components/grid";
import { Segment } from "./components/segment";

interface IProperties {

}

interface IState {
    
}

export class Application extends React.Component<IProperties, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            
        };
    }

    public render(): JSX.Element {
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Grid.Content horizontal="center" vertical="middle" textAlign="center">
                                Hello, World!
                            </Grid.Content>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Content horizontal="center" vertical="middle" textAlign="center">
                                Hello, World!<br />
                                This is a test new line.
                            </Grid.Content>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}
