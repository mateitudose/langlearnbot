import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {NextUIProvider} from "@nextui-org/react";
import Reading from "./screens/Reading.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <NextUIProvider>
            <Reading/>
        </NextUIProvider>
    </React.StrictMode>,
);
