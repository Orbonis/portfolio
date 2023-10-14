import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Body } from "./components/body";
import { History } from "./pages/history";
import { Qualifications } from "./pages/qualifications";
import { Games } from "./pages/games";

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
                        <Route path="/qualifications" element={<Qualifications />} />
                        <Route path="/games" element={<Games />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
