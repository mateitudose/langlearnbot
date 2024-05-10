import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {NextUIProvider} from "@nextui-org/react";
import Home from "./screens/Home.tsx";
import {Route, Switch} from "wouter";
import Reading from "./screens/Reading.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <NextUIProvider>
            <Switch>
                <Route path={"/"} component={Home}/>
                <Route path={"/reading/:level"} component={Reading}/>
            </Switch>
        </NextUIProvider>
    </React.StrictMode>,
);
