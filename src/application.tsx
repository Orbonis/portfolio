import React, { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Body } from "./components/body";

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
                        <Route path="/education" element={<Body />} />
                        <Route path="/qualifications" element={<Body />} />
                        <Route path="/games" element={<Body />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
