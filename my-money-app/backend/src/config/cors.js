//para aceitar requisições de diferentes origens, no caso deste projeto para permitir que o front-end que roda na porta 8080 possa acessar o back-end que roda na porta 3003.
module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}