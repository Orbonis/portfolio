import React, { HTMLProps, ReactNode } from "react";
import { Body } from "src/components/body";
import { Segment } from "src/components/core/segment";
import { Page } from "./core/page";
import skillsData from "../data/skills.json";
import { Grid } from "src/components/core/grid";
import { Divider } from "src/components/core/divider";
import { isMobile } from "src/utils/mobile";

export interface SkillData {
    name: string;
    rating: number;
}

export class Skills extends Page {
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.state = {};
    }

    public render(): ReactNode {
        const skills: SkillData[] = skillsData;
        const node: ReactNode = (isMobile()) ? this.renderMobile(skills) : this.renderDesktop(skills);

        return (
            <Body>
                <Segment>
                    <p>Below is a list of some of the technology I am familiar with and have used in a professional capacity over the years.</p>
                    <p>I am highly motivated and eager to learn new tech as it presents itself. While I may not have used some of these skills in recent jobs I have continued to use them for personal projects and games jams.</p>
                    
                    <Grid className="skills">
                        { node }
                    </Grid>
                </Segment>
            </Body>
        );
    }

    private renderDesktop(skills: SkillData[]): ReactNode {
        return (
            <Grid.Row>
                <Grid.Column>
                    <Grid className="skills-grid" outline>
                        { skills.slice(0, Math.floor(skills.length / 2)).map((x) => this.renderSkill(x)) }
                    </Grid>
                </Grid.Column>
                <Divider hidden />
                <Grid.Column>
                    <Grid className="skills-grid" outline>
                        { skills.slice(Math.floor(skills.length / 2)).map((x) => this.renderSkill(x)) }
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        );
    }

    private renderMobile(skills: SkillData[]): ReactNode {
        return (
            <Grid.Row>
                <Grid.Column>
                    <Grid className="skills-grid" outline>
                        { skills.map((x) => this.renderSkill(x)) }
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        );
    }

    private renderSkill(skill: SkillData): ReactNode {
        const stars: string = new Array(skill.rating + 1).join("&#9733;") + new Array(5 - skill.rating + 1).join("&#9734;");

        return (
            <Grid.Row>
                <Grid.Column className="skill-header">
                    <Grid.Content>
                        { skill.name }
                    </Grid.Content>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Content>
                        <span dangerouslySetInnerHTML={{ __html: stars }}></span>
                    </Grid.Content>
                </Grid.Column>
            </Grid.Row>
        )
    }
}
