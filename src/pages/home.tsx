import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Grid } from "src/components/core/grid";
import { Segment } from "src/components/core/segment";
import { Logo } from "src/components/logo";
import { Page } from "./core/page";

export class Home extends Page {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return (
            <Body>
                <Segment>
                    <Grid>
                        <Grid.Row vertical="middle">
                            <Grid.Column fitted vertical="middle">
                                <img className="profile-pic" src="/media/me.png" />
                            </Grid.Column>
                            <Grid.Column vertical="middle">
                                <Grid.Content fitted>
                                    <h1>About Me</h1>
                                    <p>
                                        Hey there! I'm Dean Rutter. Based in the midwest of England, 
                                        I've dedicated over a decade to software engineering, 
                                        with a focus on both social gaming and igaming. 
                                        Explore my journey and see the projects that highlight my expertise!
                                    </p>
                                </Grid.Content>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column fitted vertical="middle" className="logo-column">
                            <Grid.Content vertical="middle">
                                <Logo />
                            </Grid.Content>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <h1>Dive into My Coding World</h1>
                                <p>
                                    As a seasoned software engineer, I have amassed significant expertise in the gambling industry. 
                                    My competencies lie in the design and maintenance of game frameworks, 
                                    as well as the development of tools that enhance workflow efficiency, 
                                    DevOps integration, and client collaboration.
                                </p>
                                <p>
                                    Feel free to dive into my portfolio. It's a snapshot of my journey in software engineering, 
                                    with a spotlight on my code design prowess. I believe the projects speak to my knack for clean, 
                                    efficient coding, and I'm eager to share that passion with future collaborators.
                                </p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="logo-row" horizontal="center" vertical="middle">
                        <Grid.Column vertical="middle">
                            <Grid.Content horizontal="center" vertical="middle">
                                <Logo />
                            </Grid.Content>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Body>
        );
    }
}
