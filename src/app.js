import express from 'express';
import cors from 'cors';

import agendamentoRoutes
    from './routes/agendamentoRoutes.js';

const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.use('/api', agendamentoRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API da Barbearia funcionando!'
    });
});

app.listen(PORT, () => {
    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );
});
