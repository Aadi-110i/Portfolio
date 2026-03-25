import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // TODO: Add email sending functionality here
    // For now, just log and return success
    console.log("Contact form submission:", { name, email, message });

    res.json({ success: true, message: "Message received successfully!" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Portfolio data endpoint
app.get("/api/portfolio", (req, res) => {
  res.json({
    data: "Portfolio data here",
  });
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
