import React, { HTMLProps, ReactNode } from "react";
import { Grid } from "./core/grid";
import { Link, Outlet } from "react-router-dom";

export class Header extends React.Component<HTMLProps<HTMLDivElement>, {}> {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return [
            <Grid key="header-grid" className="header">
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
                                <Link to="/">Home</Link>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <Link to="/history">History</Link>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <Link to="/projects">Projects</Link>
                            </Grid.Content>
                        </Grid.Row>
                        <Grid.Row fitted>
                            <Grid.Content fitted>
                                <Link to="/contact">Contact</Link>
                            </Grid.Content>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>,
            <div className="header-overlap" />,
            <Outlet key="header-outlet" />
        ];
    }
}