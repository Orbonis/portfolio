import React from "react";

import { Container, Segment, Dimmer, Loader, Message, Grid, Step } from "semantic-ui-react";
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
                    <Grid.Row stretched>
                        <Message
                            hidden={!this.state.message.show}
                            error={this.state.message?.error}
                            content={this.state.message.content}
                            size="small"
                        />
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Segment>
                            <div key="logo" className="logo-wrapper noselect">
                                <div className="logo-container">
                                    <span className="logo-1">Dean </span>
                                    <span className="logo-2">Rutter</span>
                                    <span className="logo-sub">Full Stack Software Engineer & DevOps Engineer</span>
                                </div>
                            </div>
                            <div className="page-contents">
                                { elements }
                            </div>
                            <Step.Group>
                                { this.renderStep("Past", "Past experiences & work", "arrow alternate circle left outline", Screens.Past) }
                                { this.renderStep("Present", "Present occupation", "arrow alternate circle down outline", Screens.Present) }
                                { this.renderStep("Future", "Future ambitions & goals", "arrow alternate circle right outline", Screens.Future) }
                            </Step.Group>
                            <br/>
                            <Step.Group>
                                { this.renderStep("Home", "Return to the home page", "home", Screens.Home) }
                            </Step.Group>
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

    private renderStep(label: string, description: string, icon: string, screen: Screens): JSX.Element {
        return (
            <Step
                active={this.props.app.screen === screen}
                icon={icon}
                link
                onClick={() => {
                    this.props.app.screen = screen;
                    this.props.app.refresh();
                }}
                title={label}
                description={description}
            />
        );
    }
}