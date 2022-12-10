import express from "express";
import { getMessages, addMessage } from "../Controllers/MessageController.js";

const router = express.Router();

router.post("/", addMessage);

router.get("/:chatId", getMessages);

export default router;
