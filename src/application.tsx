import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { History } from "./pages/history";
import { Projects } from "./pages/projects";

interface IProperties {

}

interface IState {
    
}

export class Application extends React.Component<IProperties, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            
        };
    }

    public render(): ReactNode {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
