import validator from "validator";

export const validateParticipante = (req, res, next) => {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "O email fornecido é inválido!" });
    }

    next();
};
