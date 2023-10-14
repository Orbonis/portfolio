import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "src/application";
import { setupOnResize } from "./utils/mobile";
import { autoHeightBody } from "./utils/auto-sizing";

import "src/style/root.scss";
import "src/style/grid.scss";
import "src/style/misc.scss";
import "src/style/theme.scss";

setupOnResize();
autoHeightBody();

const element = document.getElementById("root");
if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    );
}
