import React, { ReactNode } from "react";

export interface TimelineData {
    name: string;
    description: string;
    dates: {
        start: string;
        end?: string;
    }
}

interface IProperties {
    data: TimelineData[];
}

export class Timeline extends React.Component<IProperties, {}> {
    constructor(props: IProperties) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return (
            <div className="timeline">
                { this.props.data.map((x) => this.renderRow(x)) }
            </div>
        );
    }

    private renderRow(data: TimelineData): ReactNode {
        return (
            <div className="entry">
                <div className="marker">
                    <div className="dot" />
                </div>
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
            </div>
        )
    }
}
