import mysqlPool from "../config/mysqlConnect.js";
import { v4 as uuidv4 } from 'uuid'; 
import { handleError } from "../helpers/error.js";

export const createPalestrante = (req, res) => {
    const { nome, email, telefone, empresa, expertise, trabalhos_recentes, imagem } = req.body;

    if (!nome || !email || !telefone || !expertise || !trabalhos_recentes) {
        return res.status(400).json({ message: "Campos obrigatórios não fornecidos." });
    }

    const id = uuidv4();

    const query = `
        INSERT INTO palestrantes (id, nome, email, telefone, empresa, expertise, trabalhos_recentes, imagem) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    mysqlPool.query(query, [id, nome, email, telefone, empresa, expertise, trabalhos_recentes, imagem], (err, result) => {
        if (err) return handleError(res, err, "Erro ao criar palestrante.");
        res.status(201).json({ message: "Palestrante criado com sucesso.", id });
    });
};

export const getPalestrantes = (req, res) => {
    const query = "SELECT * FROM palestrantes";

    mysqlPool.query(query, (err, results) => {
        if (err) return handleError(res, err, "Erro ao listar palestrantes.");
        res.status(200).json(results);
    });
};
