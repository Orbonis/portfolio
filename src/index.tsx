import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "src/application";
import { setupOnResize } from "./utils/mobile";
import { setupAutoAdjustBodyHeight } from "./utils/auto-sizing";

import "src/style/root.scss";
import "src/style/grid.scss";
import "src/style/misc.scss";
import "src/style/theme.scss";

setupOnResize();
setupAutoAdjustBodyHeight();

const element = document.getElementById("root");
if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    );
}
