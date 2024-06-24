import React, { ReactNode } from "react";
import { ProjectDataScreenshot } from "./project";
import { isMobile } from "src/utils/mobile";

interface IProperties {
    visible: boolean;
    screenshots?: ProjectDataScreenshot[];

    onClose: () => void;
}

interface IState {
    index: number;
}

export class Modal extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            index: 0
        };
    }

    public render(): ReactNode {
        if (isMobile()) {
            return (
                <div className="modal" style={{ display: ((this.props.visible) ? "flex" : "none") }}>
                    <div className="close-button" onClick={() => this.props.onClose()}>X</div>
                    <div className="caption">Unfortunately images can only be displayed on desktop.</div>
                    <div className="background"></div>
                </div>
            )
        } else if (this.props.screenshots) {
            return (
                <div className="modal" style={{ display: ((this.props.visible) ? "flex" : "none") }}>
                    <div className="close-button" onClick={() => this.props.onClose()}>X</div>
                    <div className="caption">{ this.props.screenshots[this.state.index].caption }</div>
                    <img src={this.props.screenshots[this.state.index].url ?? ""}></img>
                    <div className="left arrow" onClick={() => this.modifyIndex(-1)}>&lt;</div>
                    <div className="right arrow" onClick={() => this.modifyIndex(1)}>&gt;</div>
                    <div className="background"></div>
                </div>
            );
        }
    }

    private modifyIndex(offset: number): void {
        if (this.props.screenshots) {
            let index: number = this.state.index;
            index += offset;
            if (index < 0) {
                index = this.props.screenshots.length + index; 
            } else if (index >= this.props.screenshots.length) {
                index = this.props.screenshots.length - index
            }
            this.setState({ index });
        }
    }
}

