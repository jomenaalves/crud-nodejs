const express = require('express');

const server = express(); 
server.use(express.json()); 

// ARRAY DE DADOS SIMULANDO BD 
const courses = ['Curso Noje.js', 'Desenvolvimento de Games', 'Progamação'];

server.get('/', function (req, res) {
    return res.json({sucess: 'Sucess!'});
});

/**
 * ROTA GET PARA RETORNO DO CURSO
 */
server.get('/courses/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json(courses[index]);
});

/**
 * ROTA PARA CRIAR UM NOVO CURSO
 */
server.post('/courses', (req, res) => {
    const { name } = req.body;

    courses.push(name);

    return res.json(courses);
});


/**
 * ROTA PARA ATUALIZAR UM CURSO 
 */

server.put('/courses/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    courses[index] = name;

    return res.json(courses);

});


/**
 * ROTA PARA DELETAR UM CURSO 
 */

server.delete('/courses/:index', (req, res) => {
    const { index } = req.params;

    courses.splice(index, 1);
    return res.json({ message: 'O curso foi deletado!' });
});


server.listen(3000);
