import React from "react";

import { HomeScreen } from "./screens/home";
import { PastScreen } from "./screens/past";
import { PresentScreen } from "./screens/present";
import { FutureScreen } from "./screens/future";

export enum Screens {
    Home = "home",
    Past = "past",
    Present = "present",
    Future = "future"
}

export interface IAppState {
    screen: Screens;
    params: { [key: string]: string };
    refresh: Function;
}

export class Application extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        const params = this.parseSearch();

        this.state = {
            screen: params["page"] as Screens,
            params,
            refresh: () => this.setState(this.state)
        };

        this.updatePage();
    }

    public componentDidUpdate(): void {
        this.updatePage();
    }

    public render(): JSX.Element {
        switch (this.state.screen) {
            case Screens.Home:
                return <HomeScreen app={this.state} />;
            case Screens.Past:
                return <PastScreen app={this.state} />;
            case Screens.Present:
                return <PresentScreen app={this.state} />;
            case Screens.Future:
                return <FutureScreen app={this.state} />;
            default:
                this.setState({ screen: Screens.Home });
                return <div></div>;
        }
    }

    private updatePage(): void {
        window.history.pushState("object or string", "Dean Rutter", `/?page=${this.state.screen}`);

        const element = document.getElementById("app");

        for (const key in Screens) {
            const screen: Screens = (Screens as any)[key] as Screens;
            element?.classList.toggle(`${screen}`, this.state.screen === screen);
        }
    }

    private parseSearch(): { [key: string]: string } {
        const params: { [key: string]: string } = {};
        const entries = location.search.substring(1).split("&");
        entries.forEach(x => {
            const data = x.split("=");
            params[data.shift() as string] = data.join("=");
        });
        return params;
    }
}