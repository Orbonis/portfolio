import React, { HTMLProps, ReactNode } from "react";
import { isRootCompact } from "src/utils/auto-sizing";
import { testImage } from "src/utils/debugging";
import { Segment } from "./segment";
import { Modal } from "./modal";

export interface ProjectData {
    name: string;
    description: string[] | string;
    tech: string[];
    image?: string;
    imageBG?: string;
    links: { [key: string]: string };
    screenshots: ProjectDataScreenshot[];
}

export interface ProjectDataScreenshot {
    url: string;
    caption: string;
}

interface IProperties extends HTMLProps<HTMLDivElement> {
    project: ProjectData;
}

interface IState {
    isCompact: boolean;
    showScreenshots: boolean;
}

export class Project extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            isCompact: isRootCompact(),
            showScreenshots: false
        };
    }

    public render(): ReactNode {
        const projectID: string = this.props.project.name.toLowerCase().split(" ").join("-");
        const descriptionHTML: ReactNode = 
            ((typeof(this.props.project.description) === "string") ? [ this.props.project.description ] : this.props.project.description)
            .map((x, i) => <p key={`${projectID}-description-${i}`}>{x}</p>);

        const techHTML: ReactNode =
            this.props.project.tech.map((x, i) => <div key={`${projectID}-tech-${i}`} className="pill">{x}</div>);

        const links: ReactNode =
            Object.keys(this.props.project.links)
            .map((key, i) => {
                if (/%[a-zA-Z0-9_\-]+%/.test(this.props.project.links[key])) {
                    return (
                        <a
                            key={`${projectID}-link-${i}`}
                            className="link"
                            href="#"
                            onClick={() => this.handleSpecialLink(this.props.project.links[key])}
                        >
                            { key }
                        </a>
                    );
                } else {
                    return (
                        <a
                            key={`${projectID}-link-${i}`}
                            className="link"
                            href={ this.props.project.links[key] }
                            target="_blank"
                        >
                            { key }
                        </a>
                    );
                }
            });

        return (
            <Segment>
                <div className="project">
                    <div className="img-container">
                        <img src={ this.props.project.image ?? testImage } style={{ backgroundImage: this.props.project.imageBG ?? "white" }} />
                    </div>
                    <div className="details">
                        <div className="description">
                            <h1>{ this.props.project.name }</h1>
                            { descriptionHTML }
                        </div>
                        <div className="group links">
                            { links }
                        </div>
                    </div>
                    <div className="group tech">
                        { techHTML }
                    </div>
                </div>
                <Modal
                    visible={this.state.showScreenshots}
                    screenshots={this.props.project.screenshots}
                    onClose={() => this.setState({ showScreenshots: false })}
                />
            </Segment>
        );
    }

    private handleSpecialLink(tag: string): void {
        switch (tag) {
            case "%show_screenshots%":
                this.setState({ showScreenshots: true });
                break;
        }
    }
}
