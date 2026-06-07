import { Router } from "express";
import mongoose from "mongoose";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", async (request, response) => {
  const name = String(request.body.name || "").trim();
  const email = String(request.body.email || "").trim().toLowerCase();
  const message = String(request.body.message || "").trim();

  if (name.length < 2 || message.length < 10 || !isValidEmail(email)) {
    return response.status(400).json({
      success: false,
      message: "Please provide a valid name, email, and message."
    });
  }

  const payload = { name, email, message };

  if (mongoose.connection.readyState !== 1) {
    console.info("Contact message received in preview mode:", payload);
    return response.status(202).json({
      success: true,
      mode: "preview",
      message: "Message received in preview mode."
    });
  }

  await ContactMessage.create(payload);

  return response.status(201).json({
    success: true,
    message: "Message saved successfully."
  });
});

export default router;

