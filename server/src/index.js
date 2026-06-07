import "dotenv/config";
import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDatabase } from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, "../../client/dist");
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173,http://127.0.0.1:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    }
  })
);
app.use(express.json({ limit: "24kb" }));

app.get("/api/health", (_request, response) => {
  response.json({
    success: true,
    service: "muhammad-ahmad-portfolio-api",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/contact", contactRoutes);

app.use(express.static(clientDist));
app.get("*", (_request, response) => {
  response.sendFile(path.join(clientDist, "index.html"), (error) => {
    if (error) {
      response.status(404).json({
        success: false,
        message: "Client build not found. Run npm run build first."
      });
    }
  });
});

await connectDatabase();

app.listen(PORT, () => {
  console.info(`Portfolio API running on http://localhost:${PORT}`);
});

