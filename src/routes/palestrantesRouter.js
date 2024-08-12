import { Router } from "express";
import { createPalestrante, getPalestrantes } from "../controllers/palestrantesController.js";
import { validateParticipante } from "../helpers/validateParticipante.js";

export const router = Router();

router.post("/palestrantes", validateParticipante, createPalestrante);
router.get("/palestrantes", getPalestrantes);


