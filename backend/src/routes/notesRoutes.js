import express from "express";
import {
  GetAllnotes,
  Createnotes,
  Updatenotes,
  Deletenotes,
   getNoteById,
} from "../controllers/notescontrollers.js";

const router = express.Router();
router.get("/", GetAllnotes);
router.get("/:id", getNoteById);
router.post("/", Createnotes);
router.put("/:id", Updatenotes);
router.delete("/:id", Deletenotes);

export default router;

