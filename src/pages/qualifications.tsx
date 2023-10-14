import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Segment } from "src/components/core/segment";

export class Qualifications extends React.Component<HTMLProps<HTMLDivElement>, {}> {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return (
            <Body>
                <Segment>

                </Segment>
            </Body>
        );
    }
}
