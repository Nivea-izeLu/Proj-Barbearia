//rota para lidar com agendamentos
app.post('/salvar-agendamento', async (req,res)=>{

    const { nome, procedimento, dia, hora } = req.body;

    let connection; 
    try { 
        connections = await mysql.createConnection(dbConfig);
        console.log('Conectado ao banco MySql');

        const insertQuery = `
        INSERT INTO agendamentos (nome, procedimento, dia, hora)
        VALUES (?,?,?,?);
        `;

        const [result] = await connection.execute(insertQuery, [nome, procedimento, dia, hora]);

        console.log(`Agendamento salvo com sucesso! ID: ${result.insertId}`);

        const mensagem = `olá ${nome}, 
        aguardamos você para realizar o seu procedimento 
        ${procedimento} no dia 
        ${dia} às ${hora} horas.`;

        res.status(200).send({message: mensagem });

    } catch (err) {
        console.error('Erro ao processar o agendamento ', err);
        res.status(500). send ( {message: 'Erro interno ao salvar o agendamento'});

    }finally { 
        if(connection){
            connection.end();
        }
    }
});

app.get('/listar-agendamentos', async(req, res)=>{

    let connection;

    try {

        connection = await mysql.createConnection(dbConfig);
        console.log('Conectado ao banco MySql');

        const [ rows ] = await connection.execute ('SELECT * FROM agendamentos');
        res.status(200).jspm(rows);

    } catch (err) {

        console.error('Erro ao listar o agendamento ', err);
        res.status(500).send( {message: 'erro interno ao buscar o agendamento'});

    } if (connection){
        connection.end();
    }
});