import generateReadingTest from "./generateReadingTest.ts";

Bun.serve({
    async fetch(req) {
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
        return new Response("404!", {status: 404});
    },
    port: 3000,
});
