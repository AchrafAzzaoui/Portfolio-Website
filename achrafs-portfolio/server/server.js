import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import { fetchAndCacheGitHubData, readCachedGitHubData } from "./githubService.js";

dotenv.config();

const origins = [
  ...new Set([
    "https://achrafazzaoui.vercel.app",
    "http://localhost:5173",
    ...(process.env.CORS_ORIGIN?.split(",").map((s) => s.trim()).filter(Boolean) ??
      []),
  ]),
];

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
});

const app = express();
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: origins }));

const PORT = process.env.PORT || 5000;
const senderEmail = process.env.EMAIL_ACCOUNT;
const senderPassword = process.env.EMAIL_PASSWORD;
const recipientEmail = process.env.EMAIL_RECIPIENT;

app.get("/runDailyFetch", async (req, res) => {
  try {
    await fetchAndCacheGitHubData();
    res.json({ message: "GitHub data fetched and saved successfully!" });
  } catch (error) {
    console.error("Error in /runDailyFetch:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get("/githubProfileStats", async (req, res) => {
  try {
    const cached = readCachedGitHubData();
    if (cached) return res.json(cached);
    res.json(await fetchAndCacheGitHubData());
  } catch (error) {
    console.error("Error in /githubProfileStats:", error.message);
    res.status(500).json({ error: "GitHub stats unavailable" });
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
});

app.post("/sendContactFormSubmission", contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};
  const blank = (v) => typeof v !== "string" || !v.trim();

  if (
    blank(name) ||
    blank(email) ||
    blank(subject) ||
    blank(message) ||
    !/\S+@\S+\.\S+/.test(email)
  ) {
    return res.status(400).json({ message: "Invalid submission" });
  }

  if (!senderEmail || !senderPassword || !recipientEmail) {
    console.error("Email env vars missing");
    return res.status(500).json({ message: "Error sending email" });
  }

  try {
    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      subject: subject.trim(),
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nMessage: ${message.trim()}`,
    });
    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
