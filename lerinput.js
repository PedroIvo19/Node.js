const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.sdout
})

readline.question("Qual sua idade?", (idade) => {
    idade = parseInt(idade)
    if(idade >= 18){
        console.log("Já pode se alistar")
    }
    else{
        console.log("Não pode se alistar")
    }
})