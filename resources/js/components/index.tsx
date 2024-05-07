import reactDom from "react-dom/client";
import App from "./App";
import React from "react";


const root = reactDom.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<App/>);
    