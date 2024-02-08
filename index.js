const perguntas = [
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        resposta: [
            "var myVar;",
            "let myVar;",
            "const myVar;"
        ],
        correta: 2
    },
    {
        pergunta: "Qual dos seguintes é um tipo de dados primitivo em JavaScript?",
        resposta: [
            "Array",
            "Object",
            "String"
        ],
        correta: 2
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        resposta: [
            "Compara valores",
            "Compara valores e tipos",
            "Atribui um valor"
        ],
        correta: 1
    },
    {
        pergunta: "Como você converte uma string para um número em JavaScript?",
        resposta: [
            "parseString()",
            "Number()",
            "toInt()"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de 10 + '10' em JavaScript?",
        resposta: [
            "20",
            "1010",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'forEach' faz em um array em JavaScript?",
        resposta: [
            "Itera sobre os elementos do array",
            "Remove o último elemento do array",
            "Adiciona um elemento ao array"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade que não leva em consideração o tipo de dado em JavaScript?",
        resposta: [
            "==",
            "===",
            "!="
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de typeof null em JavaScript?",
        resposta: [
            "Object",
            "Null",
            "Undefined"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
        resposta: [
            "function",
            "def",
            "var"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a saída do código: console.log(typeof typeof 1); em JavaScript?",
        resposta: [
            "number",
            "string",
            "undefined"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(const resposta of item.resposta) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' +
    perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta //true
    
    corretas.delete(item)
    if(estaCorreta) {
     corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }       
    quizItem.querySelector('dl').appendChild(dt)
    }

    
    
  quizItem.querySelector('dl dt').remove()
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}