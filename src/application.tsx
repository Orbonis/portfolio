import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { History } from "./pages/history";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";

interface IProperties {

}

interface IState {
    
}

const ENABLE_URL_ROUTING: boolean = process.env.ENABLE_URL_ROUTING === "true";

export class Application extends React.Component<IProperties, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            
        };
    }

    public render(): ReactNode {
        const Router = ENABLE_URL_ROUTING ? BrowserRouter : MemoryRouter;
        
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        );
    }
}
