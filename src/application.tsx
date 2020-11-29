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
    theme: "dark" | "light";
    showTetris: boolean;
}

export class Application extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        const params = this.parseSearch();

        const theme: string | null = localStorage.getItem("orbonis_theme");

        this.state = {
            screen: ("page" in params) ? params["page"] as Screens : Screens.Home,
            params,
            theme: (theme) ? theme as "light" | "dark" : "dark",
            refresh: () => this.setState(this.state),
            showTetris: false
        };

        this.updatePage();
    }

    public componentDidUpdate(): void {
        this.updatePage();
    }

    public render(): JSX.Element {
        switch (this.state.screen) {
            default:
            case Screens.Home:
                return <HomeScreen app={this.state} />;
            case Screens.Past:
                return <PastScreen app={this.state} />;
            case Screens.Present:
                return <PresentScreen app={this.state} />;
            case Screens.Future:
                return <FutureScreen app={this.state} />;
        }
    }

    private updatePage(): void {
        if (!this.state.screen || this.state.screen === Screens.Home) {
            window.history.pushState("object or string", "Dean Rutter", `/`);
        } else {
            window.history.pushState("object or string", "Dean Rutter", `/?page=${this.state.screen}`);
        }

        for (const key in Screens) {
            const screen: Screens = (Screens as any)[key] as Screens;
            document.body.classList.toggle(`${screen}`, this.state.screen === screen);
        }

        document.body.classList.toggle("light", this.state.theme === "light");
        document.body.classList.toggle("dark", this.state.theme === "dark");

        localStorage.setItem("orbonis_theme", this.state.theme);
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