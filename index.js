const express = require('express');
const app = express();
const PORT = 3000;

//Define o EJS como motor de telas
app.set('view engine', 'ejs');

// Rota principal
app.get('/', (req,res) =>{

const dados = {
	titulo: 'Tela em node',
	mensagem: 'Esta é uma tela em node'
};
res.render('index', dados);
});

app.listen(PORT, () => {
	console.log(`Servidor rodando em localhost:${PORT}`);
})
