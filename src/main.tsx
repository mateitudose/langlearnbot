import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {NextUIProvider} from "@nextui-org/react";
import Home from "./screens/Home.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <NextUIProvider>
            <Home/>
        </NextUIProvider>
    </React.StrictMode>,
);
