const data = require('../datas/datas')
const assert = require('assert')

describe('data', function(){
    
    describe("#brShortFormat()", () => {
        it("Deve retornar uma string da data em um formato curto", function () {
            let d = new Date()
            d.setDate(11)
            d.setMonth(4)
            d.setFullYear(2018)
            assert.equal(data.brShortFormat(d), "11/04/2018");
        })
    })

    describe("#longFormat()", () =>{
        it("Deve retornar uma string com um formato longo", function(){
            let d = new Date()
            d.setTime(Date.parse("2018 4 11"))
            assert.equal(data.longFormat(d), "11 de abril de 2018")
        })
    })

    describe("#longlongFormat()", () =>{
        it("Deve retornar uma string com um formato longo e data por extenso", function(){
            let d = new Date()
            d.setTime(Date.parse("2018 4 11"))
            assert.equal(data.longlongFormat(d), "onze de abril de 2018")
        })
    })
})