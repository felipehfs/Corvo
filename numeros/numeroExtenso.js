'use strict';

const numeros = {
	0: "zero",
	1: "um",
	2: "dois",
	3: "três",
	4: "quatro",
	5: "cinco",
	6: "seis",
	7: "sete",
	8: "oito",
	9: "nove",	
	10: "dez",
	11: "onze",
	12: "doze",
	13: "treze",
	14: "catorze",
	15: "quinze",
	16: "dezesseis",
	17: "dezessete",
	18: "dezoito",
	19: "dezenove",
	20: "vinte",
	100: "cem",
	dezenas: {
		10: "dez",
		20: "vinte",
		30: "trinta",
		40: "quarenta",
		50: "cinquenta",
		60: "sessenta",
		70: "setenta",
		80: "oitenta",
		90: "noventa",
	},
	centenas: {
		100: "cento",
		200: "duzento",
		300: "trezentos",
		400: "quatrocentos",
		500: "quinhetos",
		600: "Seiscento",
		700: "setecentos",
		800: "oitocentos",
		900: "novecentos"
	}, 
	1000: "mil"
}

// menoresQueCem faz a representação de números menores que cem 
// para a reutilização em diversos lugares do algoritmo
function menoresQueCem(d, u){
	if(u === 0){
		return numeros["dezenas"][d]
	} else {
		return numeros["dezenas"][d] + " e " + numeros[u]
	}
}

// formataPorExtenso traz a representação do número de um até mil
function formataPorExtenso(n){
	const valor = n;
	const c = Math.floor(n / 100) * 100;
	n %= 100;
	const d = Math.floor(n / 10) * 10;
	const u = n % 10;

	if(valor < 21 || valor === 100 || valor === 1000){
		return numeros[valor]
	} else if( valor < 100){
		return menoresQueCem(d, u)
	} else if(valor < 1000){
		if( d  === 0){
			return numeros["centenas"][c] + " e " + numeros[u]
		} 
		return numeros["centenas"][c] + " e " + menoresQueCem(d, u)
	}
}
// extensoTag formata todos os números para extenso em uma string
function extensoTag(partes, ...valores){
	const resultado = []
	valores.forEach((valor, indice) =>{
		valor = isNaN(valor)?valor: formataPorExtenso(valor)
		resultado.push(partes[indice], valor)
	})
	resultado.push(partes[partes.length - 1])
	return resultado.join("")
}


module.exports = {
	formataPorExtenso,
	extensoTag
}