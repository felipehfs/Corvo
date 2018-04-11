const data = require('./datas/datas')
const numero = require('./numeros/numeroExtenso')

module.exports = {
    data,
    numero
}

assert(data.longlongFormat(new Date()) === "onze de abril de 2018", "Erro no longlongFormat");