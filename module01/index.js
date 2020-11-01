const express = require('express');
const server = express();
const port = 3000;

const users = ['Yuri', 'Even', 'Solange', 'Junior']

// query params
server.get('/test', (req, res) => {
    const { name } = req.query;

    return res.json({ message: `Olá, ${name}` });
})

// route params
server.get('/users/:index', (req, res) => {
    const { index } = req.params;

    return res.json(users[index]);
})

server.listen(port, () => console.log(
    `Servidor executando na porta ${port}...`
));
