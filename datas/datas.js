const numeros = require('../numeros/numeroExtenso')
// formato curto que retorna o dia, mês e ano com backslash
const brShortFormat = function(data){
    const mes = data.getMonth() < 10? "0" + data.getMonth(): data.getMonth()
    const dia = data.getDate() < 10?  "0" + data.getDate(): data.getDate()
    return `${dia}/${mes}/${data.getFullYear()}`
}
const meses = ["janeiro", "fevereiro", "março",	
                "abril", "maio", "junho", "julho",
                "agosto", "setembro","outubro",	
                "novembro",	"dezembro" ]

// formato padrão com o dia como numeral
const longFormat = (data)=> `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`
// formato de data puramente por extenso
const longlongFormat = (data) => `${numeros.formataPorExtenso(data.getDate())} de ${meses[data.getMonth()]} de ${data.getFullYear()}`

module.exports = {
    brShortFormat,
    longFormat,
    longlongFormat
}