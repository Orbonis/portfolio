import React, { ReactNode } from "react";
import { highlightWords } from "src/utils/focus";

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
            <span>
                <div className="timeline">
                    { this.props.data.map((x, i) => this.renderRow(x, i)).reverse() }
                </div>
            </span>
        );
    }

    private renderRow(data: TimelineData, index: number): ReactNode {
        const entryClasses = [ "entry" ];
        if (data.details !== undefined) {
            entryClasses.push("selectable");
        }

        const expanderClasses = [ "expander" ];
        if (this.state.expandState[index]) {
            expanderClasses.push("open");
        }
        if (data.details === undefined) {
            expanderClasses.push("hidden");
        }

        const detailsStyle: React.CSSProperties = {};
        detailsStyle.display = (this.state.expandState[index]) ? "block" : "none";

        const detailsHTML: string = highlightWords((
            (typeof(data.details) === "string") ? [ data.details ] : data.details ?? [ "" ]
        ).map((x) => `<p>${x}</p>`).join(""));

        let entryOnClick: React.MouseEventHandler<HTMLDivElement> | undefined;
        if (data.details !== undefined) {
            entryOnClick = () => this.toggleExpand(index);
        }

        return [
            <div key={`entry-${index}`} className={ entryClasses.join(" ") } onClick={entryOnClick}>
                <div className="marker">
                    <div className="dot" />
                </div>
                <div className={ expanderClasses.join(" ") } />
                <div className="contents">
                    <div className="details">
                        <h1>{ data.name }</h1>
                        <p>{ data.description }</p>
                    </div>
                    <div className="dates">
                        <div>
                            <div>until</div>
                            <div>{ data.dates.end ?? "Present" }</div>
                        </div>
                        <div>
                            <div>from</div>
                            <div>{ data.dates.start }</div>
                        </div>
                    </div>
                </div>
            </div>,
            <div key={`entry-details-${index}`} className="entry details" style={ detailsStyle }>
                <p dangerouslySetInnerHTML={{ __html: detailsHTML }}></p>
            </div>
        ];
    }

    private toggleExpand(index: number): void {
        const newState: boolean = !this.state.expandState[index];
        const expandState = new Array(this.props.data.length).fill(false);
        expandState[index] = newState;
        this.setState({ expandState });
    }
}
