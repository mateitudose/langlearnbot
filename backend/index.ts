import generateReadingTest from "./generateReadingTest.ts";
import Bun from 'bun';
import generateWritingTask from "./generateWritingTask.ts";
import generateWritingScore from "./generateWritingScore.ts";

Bun.serve({
    async fetch(req: Request) {
        const url = new URL(req.url);
        if (req.method === "OPTIONS") {
            return new Response('Departed', {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            });
        }
        if (url.pathname === "/generateReadingTest") {
            const level = url.searchParams.get("level");
            if (!level) {
                return new Response("400: Missing level parameter", {status: 400});
            }
            return generateReadingTest(level)
                .then((test) => new Response(JSON.stringify(test), {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET"
                    }
                }))
                .catch((error) => new Response("500: " + error.message, {status: 500}));
        }
        if (url.pathname === "/generateWritingTask") {
            const level = url.searchParams.get("level");
            if (!level) {
                return new Response("400: Missing level parameter", {status: 400});
            }
            return generateWritingTask(level)
                .then((task) => new Response(JSON.stringify(task), {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET"
                    }
                }))
                .catch((error) => new Response("500: " + error.message, {status: 500}));
        }
        if (url.pathname === "/generateWritingScore") {
            const level = url.searchParams.get("level");
            const {essay, task} = await req.json().catch(() => {
                console.log("Error parsing JSON");
                return {}
            });
            if (!level) {
                return new Response("400: Missing level parameter", {status: 400});
            }
            return generateWritingScore({level, essay, task})
                .then((score) => new Response(JSON.stringify(score), {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST, GET, OPTIONS"
                    }
                }))
                .catch((error) => {
                    console.log(error);
                    return new Response("500: " + error.message, {status: 500})
                });
        }
        return new Response("404!", {status: 404});
    },
    port: 3000,
});
