import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Segment } from "src/components/core/segment";
import { Timeline } from "src/components/core/timeline";
import { Page } from "./core/page";

import historyJSON from "../data/history.json";
import { generatePDF } from "src/utils/pdf";

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
                    <div className="generate-pdf">
                        If you prefer a PDF version of my work history, you can click <a href="#" onClick={() => generatePDF()}>here</a> and a PDF will be dynamically generated.
                    </div>
                </Segment>
            </Body>
        );
    }
}
