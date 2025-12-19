import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: fromError(result.error).toString() 
        });
      }

      const submission = await storage.createContactSubmission(result.data);
      
      return res.status(201).json({ 
        message: "Message received successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ message: "Failed to submit message" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });

  return httpServer;
}
