import express from "express";
import cors from "cors";
import path from "path";
import transactionsRouter from "./routes/transactions";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Example API route
app.use("/api/transactions", transactionsRouter);


app.get('/api/hello', (req, res) => {
    console.log('GET /api/hello called'); // 👈 add this line for debugging
    res.json({ message: 'Hello from Express!' });
});

// Serve React build in production
if (process.env.NODE_ENV === "production") {
    const clientBuildPath = path.join(__dirname, "../dist");
    app.use(express.static(clientBuildPath));

    app.get("*", (_, res) => {
        res.sendFile(path.join(clientBuildPath, "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
