import React, { ReactNode } from "react";

export interface TimelineData {
    name: string;
    description: string;
    details?: string | string[];
    dates: {
        start: string;
        end?: string;
    }
}

interface IProperties {
    data: TimelineData[];
}

interface IState {
    expandState: boolean[];
}

export class Timeline extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            expandState: new Array(this.props.data.length).fill(false)
        };
    }

    public render(): ReactNode {
        return (
            <div className="timeline">
                { this.props.data.map((x, i) => this.renderRow(x, i)) }
            </div>
        );
    }

    private renderRow(data: TimelineData, index: number): ReactNode {
        const expanderClasses = [ "expander" ];
        if (this.state.expandState[index]) {
            expanderClasses.push("open");
        }
        if (data.details === undefined) {
            expanderClasses.push("hidden");
        }

        const detailsStyle: React.CSSProperties = {};
        detailsStyle.display = (this.state.expandState[index]) ? "block" : "none";

        const detailsHTML: string = (
            (typeof(data.details) === "string") ? [ data.details ] : data.details ?? [ "" ]
        ).map((x) => `<p>${x}</p>`).join("");

        return [
            <div className="entry">
                <div className="marker">
                    <div className="dot" />
                </div>
                <div className={ expanderClasses.join(" ") } onClick={() => this.toggleExpand(index)} />
                <div className="contents">
                    <div className="details">
                        <h1>{ data.name }</h1>
                        <p>{ data.description }</p>
                    </div>
                    <div className="dates">
                        <div>
                            <div>from</div>
                            <div>{ data.dates.start }</div>
                        </div>
                        <div>
                            <div>until</div>
                            <div>{ data.dates.end ?? "Present" }</div>
                        </div>
                    </div>
                </div>
            </div>,
            <div className="entry details" style={ detailsStyle }>
                <p dangerouslySetInnerHTML={{ __html: detailsHTML }}></p>
            </div>
        ];
    }

    private toggleExpand(index: number): void {
        const expandState = this.state.expandState;
        expandState[index] = !expandState[index];
        this.setState({ expandState });
    }
}
