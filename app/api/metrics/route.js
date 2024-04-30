import { register } from "prom-client";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: "Error occured" });
    }

    res.setHeader("Content-Type", register.contentType);
    res.end(register.metrics());
}