import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { sendContactEmail, sendConfirmationEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // Send emails
      const emailSent = await sendContactEmail(contactData);
      const confirmationSent = await sendConfirmationEmail(contactData);
      
      // Consider it successful if the main contact email was sent
      // Confirmation email failures are acceptable during Postmark approval period
      if (emailSent) {
        res.json({ 
          success: true, 
          contact,
          emailSent,
          confirmationSent
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send contact email. Please try again or contact us directly."
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
