import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Segment } from "src/components/core/segment";
import { Page } from "./core/page";
import { Grid } from "src/components/core/grid";
import { Project, ProjectData } from "src/components/core/project";

import projectJSON from "../data/projects.json";

export class Projects extends Page {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        const projectData: ProjectData[] = projectJSON as any as ProjectData[];
        const projects: ReactNode = projectData.map((x, i) => <Project key={`project-${i}`} project={x} />);

        return (
            <Body>
                <Segment>
                    <p>
                    Unfortunately much of my work is protected as proprietary code for the previous companies I've worked for. 
                    So, I have created a small selection of projects as a snapshot of what I am cabable of and as an example of my coding standards.
                    </p> 
                </Segment>
                { projects }
            </Body>
        );
    }
}
