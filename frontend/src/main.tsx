import ReactDOM from "react-dom/client";
import "./index.css";
import {NextUIProvider} from "@nextui-org/react";
import Home from "./screens/Home.tsx";
import {Route, Switch} from "wouter";
import Reading from "./screens/Reading.tsx";
import {invoke} from "@tauri-apps/api/core";
import Writing from "./screens/Writing.tsx";

invoke('start_backend');

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <NextUIProvider>
        <Switch>
            <Route path={"/"} component={Home}/>
            <Route path={"/reading"} component={Reading}/>
            <Route path={"/reading/:level"} component={Reading}/>
            <Route path={"/writing"} component={Writing}/>
            <Route path={"/writing/:level"} component={Writing}/>
        </Switch>
    </NextUIProvider>
);
