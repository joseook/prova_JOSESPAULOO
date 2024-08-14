import dotenv from "dotenv";
import express from "express";

import "./src/models/palestranteModel.js";
import "./src/models/eventosModel.js";
import "./src/models/participanteModel.js"

dotenv.config();

import { router as palestrantesRouter } from "./src/routes/palestrantesRouter.js";
import { router as eventosRouter } from "./src/routes/eventosRouter.js";
import { router as participanteRouter } from "./src/routes/participanteRouter.js"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/eventos", palestrantesRouter, participanteRouter, eventosRouter);

app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
