import React from "react";

import { Container, Segment, Dimmer, Loader, Message, Grid, Button, Divider } from "semantic-ui-react";
import { IAppState, Screens } from "src/application";

export interface IScreenProperties {
    app: IAppState;
}

export interface IScreenState {
    loading: boolean;
    message: {
        show: boolean;
        error?: boolean;
        content?: string;
        timer?: number;
    };
}

export class Screen<P extends IScreenProperties, S extends IScreenState> extends React.Component<P, S> {
    public render(...elements: JSX.Element[]): JSX.Element {
        return (
            <Container>
                <Dimmer active={this.state.loading}>
                    <Loader />
                </Dimmer>
                <Grid centered padded>
                    <Grid.Row stretched className={(this.state.message.show) ? "" : "hidden"}>
                        <Message
                            hidden={!this.state.message.show}
                            error={this.state.message?.error}
                            content={this.state.message.content}
                            size="small"
                        />
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Segment>
                            <Button className="lightOnly" icon="lightbulb" basic color="blue" floated="right" onClick={() => {
                                this.props.app.theme = "dark";
                                this.props.app.refresh();
                            }} />
                            <Button className="darkOnly" icon="lightbulb outline" floated="right" onClick={() => {
                                this.props.app.theme = "light";
                                this.props.app.refresh();
                            }} />
                            <div key="logo" className="logo-wrapper noselect">
                                <div className="logo-container">
                                    <span className="logo-1">Dean </span>
                                    <span className="logo-2">Rutter</span>
                                    <span className="logo-sub">Full Stack Software Engineer & DevOps Engineer</span>
                                </div>
                            </div>
                            <div className="page-contents top">
                                <p key="intro">
                                    I am a professional software engineer, with extensive experience within the gambling industry,
                                    utilising my skills to build and maintain games frameworks, as well as creating various tools 
                                    for streamlining development, devops and client collaboration.
                                </p>
                                <p key="more">
                                    For more specific information on my experience, please see the options below.
                                </p>
                            </div>
                            <Button.Group fluid>
                                { this.renderButton("Experience", Screens.Past) }
                                { this.renderButton("Work", Screens.Present) }
                                { this.renderButton("Ambitions", Screens.Future) }
                            </Button.Group>
                            <div className={"page-contents bottom" + ((elements && elements.length > 0) ? "" : " hidden")}>
                                { elements }
                            </div>
                            <div className="game-panel">
                                <Button content="Play Tetris" color="blue" basic={!this.props.app.showTetris} fluid
                                    onClick={() => {
                                        this.props.app.showTetris = !this.props.app.showTetris;
                                        this.props.app.refresh();
                                    }} />
                                <span style={{ display: (this.props.app.showTetris) ? "block" : "none" }}>
                                    <br/>
                                    <h1>Tetris</h1>
                                    <iframe src="/tetris/index.html" />
                                    <a href="https://bitbucket.org/orbonis-games/tetris/">
                                        Bitbucket Repository
                                    </a>
                                </span>
                            </div>
                        </Segment>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }

    public componentWillUnmount(): void {
        if (this.state.message.timer !== undefined) {
            clearTimeout(this.state.message.timer);
        }
    }

    protected setMessage(content: string, error: boolean): void {
        if (this.state.message.timer !== undefined) {
            clearTimeout(this.state.message.timer);
        }

        const timer = window.setTimeout(() => this.setState({
            message: { show: false }
        }), 4000);

        this.setState({
            message: {
                show: true,
                error, content, timer
            }
        });
    }

    private renderButton(label: string, screen: Screens): JSX.Element {
        return (
            <Button
                color="blue"
                basic={this.props.app.screen !== screen}
                content={label}
                onClick={() => {
                    this.props.app.screen = screen;
                    this.props.app.refresh();
                }}
            />
        );
    }
}