import React from "react";
import { Icon } from "semantic-ui-react";
import { Page } from "src/application";
import { HeaderComponent } from "src/components/header-component";

interface IProperties {
    page: Page;
    onMenuClick: (page: Page) => void;
    onThemeClick: () => void;
}

interface IState {

}

export class PageComponent extends React.Component<IProperties, IState> {

    public render(): JSX.Element {
        return (
            <span>
                <div className="background"></div>
                <HeaderComponent
                    page={this.props.page}
                    focusAlias={location.href.includes("orbonis")}
                    onMenuClick={this.props.onMenuClick}
                />
                <div className="content">
                    { this.props.children }
                </div>
                <div className="theme-button">
                    <Icon className="bulb" name="lightbulb outline" size="large" />
                    <svg height="50" width="50">
                        <polygon points="0,0 50,50 0,50" className="triangle" onClick={() => this.props.onThemeClick()} />
                    </svg>
                </div>
            </span>
        )
    }
}