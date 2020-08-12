import React from "react";

import { HomeScreen } from "./screens/home";

export enum Screens {
    Home = "home",
    Portfolio = "portfolio",
    AboutMe = "about",
    Contact = "contact"
}

export interface IAppState {
    screens: Screens[];
    params: { [key: string]: string };
    refresh: Function;
}

export class Application extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        const params = this.parseSearch();

        this.state = {
            screens: [ params["page"] as Screens ],
            params,
            refresh: () => this.setState(this.state)
        };

        this.updatePage();
    }

    public render(): JSX.Element {
        this.updatePage();

        switch (this.state.screens[this.state.screens.length - 1]) {
            case Screens.Home:
                return <HomeScreen app={this.state} />;
            default:
                this.state.screens[this.state.screens.length - 1] = Screens.Home;
                this.setState(this.state);
                return <div></div>;
        }
    }

    private updatePage(): void {
        window.history.pushState("object or string", "Dean Rutter", `/?page=${this.state.screens[this.state.screens.length - 1]}`);
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