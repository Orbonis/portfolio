import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Segment } from "src/components/core/segment";
import { Timeline } from "src/components/core/timeline";
import { Page } from "./core/page";

import historyJSON from "../data/history.json";

export class History extends Page {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        return (
            <Body>
                <Segment>
                    <Timeline data={historyJSON} />
                </Segment>
            </Body>
        );
    }
}
