import React from "react";
import { Button, Segment } from "semantic-ui-react";

interface IProperties {
    src?: string;
    onClose: () => void;
}

interface IState {

}

export class FramePopup extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public componentDidMount(): void {
        const iframe = document.getElementById("frame-iframe") as HTMLIFrameElement;
        if (iframe) {
            iframe.addEventListener("load", () => {
                const header = document.getElementById("frame-title");
                if (header && iframe.contentDocument) {
                    header.innerText = iframe.contentDocument.title;
                } 
            });
        }
    }

    public render(): JSX.Element {
        return (
            <div className="overlay" style={{ display: (this.props.src) ? "block" : "none" }}>
                <Segment>
                    <h1 id="frame-title"></h1>
                    <Button content="X" color="blue" basic onClick={() => this.props.onClose()} />
                    <iframe id="frame-iframe" src={this.props.src}></iframe>
                </Segment>
            </div>
        )
    }
}