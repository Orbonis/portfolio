import React from "react";
import { Icon, Popup } from "semantic-ui-react";
import { Screen, IScreenProperties, IScreenState } from "src/components/screen";
import { TableComponent } from "src/components/table";

interface IProperties extends IScreenProperties {

}

interface IState extends IScreenState {

}

export class PastScreen extends Screen<IProperties, IState> {
    constructor(props: IProperties) {
        super(props);

        this.state = {
            loading: false,
            message: { show: false }
        };
    }

    public render(): JSX.Element {
        return super.render(
            <table key="education">
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
            </table>,
            <table key="experience">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Duration</th>
                        <th className="desktopOnly"><Icon name="info circle"/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Soshi Games</td>
                        <td>Games Developer</td>
                        <td>3 Years</td>
                        <td className="desktopOnly"><Popup trigger={<Icon name="info circle"/>} content="AS3 & Unity Developer, focused on music based games." position="left center" /></td>
                    </tr>
                    <tr>
                        <td>Intouch Games</td>
                        <td>Lead Developer</td>
                        <td>4 Years</td>
                        <td className="desktopOnly"><Popup trigger={<Icon name="info circle"/>} content="Lead games developer, CI & Dev Ops and framework development." position="left center" /></td>
                    </tr>
                    <tr>
                        <td>Epic Industries</td>
                        <td>Senior Developer</td>
                        <td>1 Year</td>
                        <td className="desktopOnly"><Popup trigger={<Icon name="info circle"/>} content="Framework development, client portal & tools and games development." position="left center" /></td>
                    </tr>
                </tbody>
            </table>,
            <table key="knowledge">
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
            </table>,
            <br key="break" />
        );
    }
}