const assert = require('assert')
const numero = require('../numeros/numeroExtenso')

describe("numeroPorExtenso", ()=> {
    describe("#formataPorExtenso()", function () {
        it("Deve retornar um número com centenas, dezenas e unidades", ()=>{
            assert.equal(numero.formataPorExtenso(121), "cento e vinte e um")
        })
        it("Deve retornar um número com centena e unidade", function(){
            assert.equal(numero.formataPorExtenso(101), "cento e um")
        })
        it("Deve retornar dezena + unidade", function () {
            assert.equal(numero.formataPorExtenso(35), "trinta e cinco")
        })
        it("Números adolescentes", function(){
            assert.equal(numero.formataPorExtenso(16), "dezesseis")
        })
        
        it("zero", () => assert.equal(numero.formataPorExtenso(0), "zero"))
        it("mil", () => assert.equal(numero.formataPorExtenso(1000), "mil"))
        it("cem", () => assert.equal(numero.formataPorExtenso(100), "cem"))

        it("Deve retornar uma unidade", () => {
            assert.equal(numero.formataPorExtenso(9), "nove")
        })
    })

    describe("#extensoTag()", () => {
        it("Deve retorna a frase modificada e completa", () =>{
            const tagged = numero.extensoTag`Eu tenho ${23} anos.`;
            assert.equal(tagged, "Eu tenho vinte e três anos.")
        })
    })
})