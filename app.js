const express = require('express');
const app = express();
app.use(express.json());
const port = 8000
const rotalivro = require("./rotas/livro");


app.use('/livros', rotalivro)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})