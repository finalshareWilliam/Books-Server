const { Router } =  require("express");
const {getLivros} = require("../controladores/livro");

const router = Router();

router.get('/', getLivros) 

router.post('/', (req, res) => {
    res.send("Voce fez uma requisiçao do tipo Post!")
});

router.patch('/', (req, res) => {
    res.send("Voce fez uma requisiçao do tipo Patch!")
});

router.delete('/', (req, res) => {
    res.send("Voce fez uma requisiçao do tipo Delete!")
});

module.exports = router