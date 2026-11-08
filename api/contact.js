export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        body = {};
      }
    }

    const { name = "", email = "", message = "" } = body || {};
    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim().toLowerCase();
    const trimmedMessage = String(message).trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedName.length < 2 || trimmedMessage.length < 1 || !emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid name, email, and message."
      });
    }

    console.log("Contact submission received:", {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({
      success: true,
      message: "Message received successfully! I will get back to you shortly."
    });
  } catch (error) {
    console.error("Vercel API contact handler error:", error);
    return res.status(500).json({
      success: false,
      message: "An internal server error occurred. Please contact directly via email."
    });
  }
}
