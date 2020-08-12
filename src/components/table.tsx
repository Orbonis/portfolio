import React from "react";

interface IProperties {
    type: "orientation" | "platform"
    data: { [key: string]: string };
}

export class TableComponent extends React.Component<IProperties, {}> {
    public render(): JSX.Element[] {
        const headers: JSX.Element[] = [];
        const data: JSX.Element[] = [];
        const combined: JSX.Element[] = [];
        for (const key in this.props.data) {
            headers.push(<th key={key}>{ key }</th>);
            data.push(<td key={this.props.data[key]}>{ this.props.data[key] }</td>);
            combined.push(
                <tr key={this.props.data[key]}>
                    <th>{ key }</th>
                    <td>{ this.props.data[key] }</td>
                </tr>
            );
        }

        return [
            <table key="table-desktop" className={(this.props.type === "platform") ? "desktopOnly" : "landscapeOnly"}>
                <thead>
                    <tr>
                        { headers }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        { data }
                    </tr>
                </tbody>
            </table>,
            <table key="table-mobile" className={(this.props.type === "platform") ? "mobileOnly" : "portraitOnly"}>
                <tbody>
                    { combined }
                </tbody>
            </table>
        ];
    }
}