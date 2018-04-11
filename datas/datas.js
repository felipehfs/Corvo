const numeros = require('../numeroExtenso')

const brShortFormat = (data) => `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

const meses = ["janeiro", "fevereiro", "março",	
                "abril", "maio", "junho", "julho",
                "agosto", "setembro","outubro",	
                "novembro",	"dezembro" ]

const longFormat = (data)=> `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`
const longlongFormat = (data) => `${data.formataPorExtenso(data.getDate())} de ${meses[data.getMonth()]} de ${data.getFullYear()}`

module.exports = {
    brShortFormat,
    longFormat,
    longlongFormat
}