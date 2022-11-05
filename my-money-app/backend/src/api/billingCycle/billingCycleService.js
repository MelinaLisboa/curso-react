const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) //1º parametro, para após a atualização retornar o objeto novo. 2º parametro: para que as restrições sejam aplicadas também na atualização do registro, no post já são aplicadas por padrão
BillingCycle.after('post', errorHandler).after('put', errorHandler)


BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum:"$credit"}, debt: {$sum:"$debt"}} // soma creditos e debitos somados acima e os coloca em valor total / null -> para fazer da tabela toda.. poderia ser por ano, por exemplo.
    }, {
        $project: {_id: 0, credit: 1, debt: 1} //para _id não aparecer no resultado final e credit e debt aparecerem no resultado final
    }]).exec((error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})



module.exports = BillingCycle