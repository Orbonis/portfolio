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
            headers.push(<th>{ key }</th>);
            data.push(<td>{ this.props.data[key] }</td>);
            combined.push(
                <tr>
                    <th>{ key }</th>
                    <td>{ this.props.data[key] }</td>
                </tr>
            );
        }

        return [
            <table className={(this.props.type === "platform") ? "desktopOnly" : "landscapeOnly"}>
                <tr>
                    { headers }
                </tr>
                <tr>
                    { data }
                </tr>
            </table>,
            <table className={(this.props.type === "platform") ? "mobileOnly" : "portraitOnly"}>
                { combined }
            </table>
        ];
    }
}