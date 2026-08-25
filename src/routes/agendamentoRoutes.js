import express from 'express';

import {
    salvarAgendamento,
    buscarAgendamentos
} from '../controllers/agendamentoController.js';

const router = express.Router();

router.post(
    '/agendamentos',
    salvarAgendamento
);

router.get(
    '/agendamentos',
    buscarAgendamentos
);

export default router;
