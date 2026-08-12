import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors'

const app = express();
const PORT = 3000;

//configuração do mysql
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
}

//config do express
app.use(express.json());
app.use(cors());



app.listen( PORT, ()=> {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
