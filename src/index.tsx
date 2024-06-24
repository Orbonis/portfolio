import React from "react";
import ReactDOM from "react-dom/client";
import { Application } from "src/application";
import { setupOnResize } from "./utils/mobile";
import { setupAutoAdjustBodyHeight, setupRootResizeCSS } from "./utils/auto-sizing";

import "src/style/root.scss";
import "src/style/grid.scss";
import "src/style/timeline.scss";
import "src/style/project.scss";
import "src/style/modal.scss";
import "src/style/misc.scss";
import "src/style/theme.scss";

setupOnResize();
setupAutoAdjustBodyHeight();
setupRootResizeCSS();

const element = document.getElementById("root");
if (element) {
    ReactDOM.createRoot(element).render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    );
}
