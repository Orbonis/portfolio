import React, { ReactNode } from "react";
import { Grid } from "./core/grid";

export interface IProperties {

}

export class Header extends React.Component<IProperties, {}> {
    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return (
            <Grid className="header">
                <Grid.Row>
                    <Grid.Column fitted vertical="middle">
                        <Grid.Content>
                            <img className="logo" src="/media/orb.png" />
                        </Grid.Content>
                    </Grid.Column>
                    <Grid.Column vertical="middle">
                        <Grid.Row fitted>
                            <Grid.Content>
                                <h1>Orbonis</h1>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content>
                                <h2>The portfolio of Dean Rutter</h2>
                            </Grid.Content>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column fitted horizontal="end" vertical="middle">
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <a href="/">Home</a>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <a href="/education.html">Education</a>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <a href="/qualifications.html">Qualifications</a>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <a href="/games.html">Games</a>
                            </Grid.Content>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}