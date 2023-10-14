import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "src/application";
import { setupOnResize } from "./utils/mobile";

import "src/style/root.scss";
import "src/style/grid.scss";
import "src/style/misc.scss";
import "src/style/theme.scss";

setupOnResize();

const element = document.createElement("div");
element.id = "root";
element.classList.add("root");
document.body.appendChild(element);

ReactDOM.createRoot(element).render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);
