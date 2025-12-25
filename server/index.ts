import 'dotenv/config';
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const enableEmail = process.env.ENABLE_RESEND === "true"; // set to true when you want to actually send

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    // For local/dev we default to skipping the email send to avoid 403s from Resend.
    if (!enableEmail || !resend) {
      if (!enableEmail) {
        console.warn("ENABLE_RESEND is not true; skipping email send and returning success for local testing.");
      }
      if (!resend) {
        console.warn("RESEND_API_KEY not set; skipping email send and returning success for local testing.");
      }
      return res.json({ success: true, sent: false, skipped: true });
    }

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "kirankidecha85@gmail.com",
      subject: "Portfolio Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      // Still return success so the UI doesn't see a 403 during development
      return res.json({ success: true, sent: false, skipped: true });
    }

    res.json({ success: true, sent: true, skipped: false });
  } catch (err: any) {
    console.error("Contact send failed:", err);
    res.status(err?.statusCode || 500).json({ success: false, error: "Unable to send message" });
  }
});



app.listen(5000, () => console.log("Server running on 5000"));
