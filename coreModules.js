const fs = require('fs')


fs.readFile("teste.txt", "utf8", (erro, dados) =>
{
    if(erro){
        console.log(erro)
    }
    else{
        console.log(dados)
    }       
})


const mensagem = "Texto badalada"
const mensagem2 = "\n Tipo assim aqui foi mané"


fs.writeFile('teste2.txt', mensagem, "utf8", (erro) => {
    if(erro){
        console.log("Errou feio, errou rude")
    } 
    else{
        console.log("Arquivo escrito tranquilin")
    }
})


fs.appendFile('teste2.txt', mensagem2, "utf8", (erro) => {
    if(erro){
        console.log("Errou feio, errou rude")
    } 
    else{
        console.log("Ainda chefia")
    }
})

fs.unlink('teste2.txt', (erro) => {
    if(erro){
        console.log("Errou feio, errou rude")
    } 
    else{
        console.log("APAGADO !")
    }
})