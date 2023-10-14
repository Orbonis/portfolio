import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Segment } from "src/components/core/segment";
import { Page } from "./core/page";
import { Grid } from "src/components/core/grid";

export class Contact extends Page {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return (
            <Body>
                <Segment>
                    <Grid outline className="contacts">
                        <Grid.Row>
                            <Grid.Column width="150px" className="grid-header">
                                <Grid.Row>
                                    <Grid.Column>
                                        <Grid.Content>
                                            Email
                                        </Grid.Content>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Grid.Content>
                                            LinkedIn
                                        </Grid.Content>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid.Row stretch>
                                    <Grid.Column>
                                        <Grid.Content>
                                            <a href="mailto:dean@orbonis.co.uk" target="_blank">
                                                dean@orbonis.co.uk
                                            </a>
                                        </Grid.Content>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row stretch>
                                    <Grid.Column>
                                        <Grid.Content>
                                            <a href="https://www.linkedin.com/in/dean-rutter-359a853b/" target="_blank">
                                                https://www.linkedin.com/in/dean-rutter-359a853b/
                                            </a>
                                        </Grid.Content>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Body>
        );
    }
}
