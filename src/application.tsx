import React from "react";
import { PageComponent } from "./components/page-component";
import { ContactPage } from "./screens/contact-page";
import { ExperiencePage } from "./screens/experience-page";
import { GamesPage } from "./screens/games-page";
import { HomePage } from "./screens/home-page";

export enum Page {
    Home = "home",
    Games = "games",
    Experience = "experience",
    Contact = "contact"
};

export interface IAppState {
    params: { [key: string]: string };
    refresh: Function;
    theme: "dark" | "light";
    page: Page;
    previousPage: Page;
}

export class Application extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        const params = this.parseSearch();

        const theme: "light" | "dark" | null = (("theme" in params) ? params.theme : localStorage.getItem("orbonis_theme")) as ("light" | "dark" | null) ?? "light";
        const page: Page | null = localStorage.getItem("orbonis_page") as (Page | null) ?? Page.Home;

        this.state = {
            params,
            theme,
            refresh: () => this.setState(this.state),
            page,
            previousPage: page
        };

        this.updatePage();
    }

    public componentDidUpdate(): void {
        this.updatePage();
    }

    public render(): JSX.Element {
        return (
            <PageComponent page={this.state.page} onMenuClick={(page: Page) => this.setState({ previousPage: this.state.page, page })} onThemeClick={() => this.toggleTheme()}>
                { this.page()  }
            </PageComponent>
        );
    }

    private page(): JSX.Element {
        switch (this.state.page) {
            case Page.Home:
            default:
                return <HomePage theme={this.state.theme} />;
            case Page.Games:
                return <GamesPage />;
            case Page.Experience:
                return <ExperiencePage />;
            case Page.Contact:
                this.openLink("https://www.linkedin.com/in/dean-rutter-359a853b/detail/contact-info/");
                this.setState({ page: this.state.previousPage });
                return <ContactPage />;
        }
    }

    private toggleTheme(): void {
        this.setState({ theme: this.state.theme === "light" ? "dark" : "light" });
        this.updatePage();
    }

    private updatePage(): void {
        document.body.classList.toggle("light", this.state.theme === "light");
        document.body.classList.toggle("dark", this.state.theme === "dark");

        localStorage.setItem("orbonis_theme", this.state.theme);
        localStorage.setItem("orbonis_page", this.state.page);
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

    private openLink(link: string): void {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}