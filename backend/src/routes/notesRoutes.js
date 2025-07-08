import express from "express";
import {
  GetAllnotes,
  Createnotes,
  Updatenotes,
  Deletenotes,
} from "../controllers/notescontrollers.js";

const router = express.Router();
router.get("/", GetAllnotes);
router.post("/", Createnotes);
router.put("/:id", Updatenotes);
router.delete("/:id", Deletenotes);

export default router;

