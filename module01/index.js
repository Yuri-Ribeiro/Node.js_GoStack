const express = require('express');
const server = express();
const port = 3000;

const users = ['Yuri', 'Even', 'Maria', 'Solange', 'Junior']

server.use(express.json());

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

server.get('/users', (_, res) => {
    return res.json(users);
})

server.post('/users', (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
})

server.put('/users/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body; 

    users[index] = name

    return res.json(users);
})

server.delete('/users/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);

    return res.sendStatus(204);
})

server.listen(port, () => console.log(
    `Servidor executando na porta ${port}...`
));
