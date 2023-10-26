import { pool } from "../utils/db.js";
import { Router } from "express";

const logRouter = Router();

logRouter.post("/", async (req, res) => {
  const { txt } = req.body.txt;
  const log = "Someone opened website.";
  try {
    await pool.query(
      `
        INSERT INTO log (message)
        VALUES ($1)
        `,
      [log]
    );

    return res.status(201).json({
      message: "Your request was successful, and a new resource was created.",
    });
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({
      error: "An internal server error occurred.",
    });
  }
});

export default logRouter;
