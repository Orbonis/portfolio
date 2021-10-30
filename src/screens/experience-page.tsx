import React from "react";
import { Icon } from "semantic-ui-react";
import { TableComponent } from "src/components/table";

interface IProperties {

}

interface IState {

}

export class ExperiencePage extends React.Component<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {

        };
    }

    public render(): JSX.Element {
        return (
            <div className="experience">
                <div className="section history">
                    <h1>History &amp; Knowledge</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Institute</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mid Cheshire College</td>
                                <td>BTEC Multimedia</td>
                            </tr>
                            <tr>
                                <td>Staffordshire University</td>
                                <td>BSc Multiplayer Online Games Design</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Role</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Soshi Games</td>
                                <td>Games Developer</td>
                                <td>3 Years</td>
                            </tr>
                            <tr>
                                <td>Intouch Games</td>
                                <td>Lead Developer</td>
                                <td>4 Years</td>
                            </tr>
                            <tr>
                                <td>Epic Industries</td>
                                <td>Senior Developer</td>
                                <td>2 Years</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>Existing Knowledge</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Typescript</td>
                                <td>C#</td>
                            </tr>
                            <tr>
                                <td>Java</td>
                                <td>Swift/ObjC</td>
                            </tr>
                            <tr>
                                <td>HTML/CSS/JS</td>
                                <td>NodeJS</td>
                            </tr>
                            <tr>
                                <td>Unity</td>
                                <td>SQL/Mongo/etc</td>
                            </tr>
                            <tr>
                                <td>Atlassian Suite</td>
                                <td>AWS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section current">
                    <h1>Current Work</h1>
                    I am currently working at a gambling slots developer called Epic Industries where I help to maintain their framework, develop various casino games and build tools that allow for better development flow and smoother devops.<br/>

                    <TableComponent type="orientation" data={{
                        "Company": "Epic Industries",
                        "Role": "Senior Developer"
                    }} />
                    My work involves the use of Typescript, NodeJS, PIXI, AWS, React and many associated libraries.<br/>
                    A typical day consists of continued development on games, including working on improvements and fixes within a core games framework. Code must be written to be modular, so that code can be used across games, clients or globally within the company, depending on the feature.<br/><br/>
                    On top of games development I also create and maintain several tools used by the company to organise builds, help improve deployment and streamline development. To do this I use various third party APIs, such as Git, JIRA, Bitbucket and AWS.
                </div>
                <div className="section ambitions">
                    <h1>Ambitions</h1>
                    My current ambitions are to expand my knowledge of server development and the range of technologies I am familiar with. <br/>
                    In the near future I expect to learn more about the implications of using Typescript as the main programming language for server development, as well as optimisation techniques and best practises. <br/>
                    In addition to furthering my knowledge on server development, I will also be continuing my interest in Continuous Integration, streamlined deployment and how automation can help improve the development flow.
                </div>
            </div>
        )
    }
}