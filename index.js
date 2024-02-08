const perguntasSegurancaTrabalho = [
    {
        pergunta: "O que é um EPI (Equipamento de Proteção Individual)?",
        resposta: [
            "Um procedimento de segurança",
            "Um documento obrigatório",
            "Um equipamento utilizado pelo trabalhador para minimizar os riscos à sua saúde e segurança"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um DDS (Diálogo Diário de Segurança)?",
        resposta: [
            "Um tipo de documento fiscal",
            "Um método de comunicação interna",
            "Uma reunião onde são discutidas questões de segurança antes do início das atividades"
        ],
        correta: 2
    },
    {
        pergunta: "Qual a principal função do SESMT (Serviços Especializados em Engenharia de Segurança e em Medicina do Trabalho)?",
        resposta: [
            "Organizar festas e eventos para os funcionários",
            "Realizar exames médicos anuais",
            "Promover a saúde e segurança no trabalho através de ações preventivas"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um PPRA (Programa de Prevenção de Riscos Ambientais)?",
        resposta: [
            "Um plano para promoção de eventos na empresa",
            "Um documento contábil",
            "Um programa obrigatório que visa à preservação da saúde e integridade dos trabalhadores"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um CIPA (Comissão Interna de Prevenção de Acidentes)?",
        resposta: [
            "Uma comissão para promoção de produtos internos",
            "Uma equipe de limpeza",
            "Uma comissão formada por funcionários que visa prevenir acidentes e doenças decorrentes do trabalho"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um PCMSO (Programa de Controle Médico de Saúde Ocupacional)?",
        resposta: [
            "Um programa de computador para controle de vendas",
            "Um tipo de seguro para funcionários",
            "Um programa obrigatório que visa promover e preservar a saúde dos trabalhadores"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o objetivo da Norma Regulamentadora NR-10?",
        resposta: [
            "Estabelecer regras para o transporte de produtos perigosos",
            "Regularizar a venda de produtos químicos",
            "Estabelecer os requisitos e condições mínimas para garantir a segurança dos trabalhadores que atuam em instalações elétricas"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um APR (Análise Preliminar de Riscos)?",
        resposta: [
            "Um tipo de documento fiscal",
            "Uma análise financeira",
            "Uma análise que identifica e avalia os riscos envolvidos em determinada atividade ou operação"
        ],
        correta: 2
    },
    {
        pergunta: "O que é um EPC (Equipamento de Proteção Coletiva)?",
        resposta: [
            "Um equipamento de uso individual",
            "Um documento contábil",
            "Um equipamento destinado à proteção de um grupo de trabalhadores ou do ambiente de trabalho"
        ],
        correta: 2
    },
    {
        pergunta: "O que significa a sigla SIPAT?",
        resposta: [
            "Semana Interna de Prevenção de Acidentes do Trabalho",
            "Sistema Integrado de Prevenção de Acidentes Técnicos",
            "Sindicato de Prevenção de Acidentes no Trabalho"
        ],
        correta: 0
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