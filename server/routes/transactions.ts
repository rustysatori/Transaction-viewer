import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

// Load data.json dynamically
router.get("/", (_, res) => {
    const dataPath = path.join(__dirname, "../data/data.json");
    const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    res.json(jsonData);
});

export default router;
