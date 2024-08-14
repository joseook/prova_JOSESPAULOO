import { Router } from "express";
import { createEvento, getEventos, getAgendaEventos, createEnrollmentParticipante } from "../controllers/eventosController.js";
import { validateEvento } from "../helpers/validateEvento.js";

export const router = Router();

router.post("/criar", validateEvento, createEvento);
router.get("/eventos-all", getEventos);
router.get("/agenda", getAgendaEventos)
router.post("/inscrever", createEnrollmentParticipante)

