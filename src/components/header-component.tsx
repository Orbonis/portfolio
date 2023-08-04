import React from "react";
import { Page } from "src/application";

interface IProperties {
    page: Page;
    focusAlias: boolean;
    onMenuClick: (page: Page) => void;
}

interface IState {

}

export class HeaderComponent extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className="header noselect">
                { this.name() }
                { this.menu() }
            </div>
        );
    }

    protected name(): JSX.Element {
        if (this.props.focusAlias) {
            return (
                <div className="logo">
                    <div className="name">
                        <span className="first">Orbonis</span>
                    </div>
                    <div className="alias">
                        <span className="first">Dean</span><span className="last">Rutter</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="logo">
                    <div className="name">
                        <span className="first">Dean</span><span className="last">Rutter</span>
                    </div>
                    <div className="alias"><span>Orbonis</span></div>
                </div>
            );
        }
    }

    protected menu(): JSX.Element {
        return (
            <div className="menu">
                <a className="menu-item" onClick={() => this.props.onMenuClick(Page.Home)}>Home</a>
                <a className="menu-item" onClick={() => this.props.onMenuClick(Page.Games)}>Games</a>
                <a className="menu-item" onClick={() => this.props.onMenuClick(Page.Experience)}>Experience</a>
                <a className="menu-item" onClick={() => this.props.onMenuClick(Page.Contact)}>Contact</a>
            </div>
        );
    }
}