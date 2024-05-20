import generateReadingTest from "./generateReadingTest.ts";
import Bun from 'bun';
import generateWritingTask from "./generateWritingTask.ts";

Bun.serve({
    async fetch(req : Request) {
        const url = new URL(req.url);
        if (url.pathname === "/generateReadingTest") {
            const level = url.searchParams.get("level");
            if (!level) {
                return new Response("400: Missing level parameter", {status: 400});
            }
            return generateReadingTest(level)
                .then((test) => new Response(JSON.stringify(test), {headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET"}}))
                .catch((error) => new Response("500: " + error.message, {status: 500}));
        }
        if (url.pathname === "/generateWritingTask") {
            const level = url.searchParams.get("level");
            if (!level) {
                return new Response("400: Missing level parameter", {status: 400});
            }
            return generateWritingTask(level)
                .then((task) => new Response(JSON.stringify(task), {headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET"}}))
                .catch((error) => new Response("500: " + error.message, {status: 500}));
        }
        return new Response("404!", {status: 404});
    },
    port: 3000,
});
