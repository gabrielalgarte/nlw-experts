const perguntas = [
    {
        pergunta: "Quais são os principais objetivos da segurança do trabalho?",
        resposta: ["Aumentar os lucros da empresa", "Proteger a integridade física e mental dos trabalhadores", "Aumentar a produtividade a qualquer custo"],
        correta: 1
    },
    {
        pergunta: "O que é um EPI (Equipamento de Proteção Individual)?",
        resposta: ["Um equipamento de proteção coletiva", "Um documento obrigatório para os trabalhadores", "Um equipamento destinado a proteger a saúde e a integridade física do trabalhador"],
        correta: 2
    },
    {
        pergunta: "O que significa a sigla NR?",
        resposta: ["Normas Reunidas", "Normas Regulamentadoras", "Normas de Resgate"],
        correta: 1
    },
    {
        pergunta: "Qual é a função da CIPA (Comissão Interna de Prevenção de Acidentes)?",
        resposta: ["Fiscalizar o trabalho dos funcionários", "Elaborar planos de demissão voluntária", "Promover a segurança e saúde no trabalho"],
        correta: 2
    },
    {
        pergunta: "O que é um mapa de risco?",
        resposta: ["Um mapa para localização de acidentes", "Um documento que identifica os riscos existentes nos ambientes de trabalho", "Um guia turístico para funcionários"],
        correta: 1
    },
    {
        pergunta: "Qual é a importância de uma análise ergonômica do trabalho?",
        resposta: ["Melhorar o ambiente de trabalho esteticamente", "Prevenir lesões e doenças ocupacionais", "Aumentar a carga de trabalho dos funcionários"],
        correta: 1
    },
    {
        pergunta: "O que é DDS (Diálogo Diário de Segurança)?",
        resposta: ["Uma ferramenta para debates políticos no ambiente de trabalho", "Uma forma de entretenimento para os funcionários", "Uma prática para discutir temas relacionados à segurança do trabalho antes do início das atividades"],
        correta: 2
    },
    {
        pergunta: "Quais são os tipos de riscos ocupacionais?",
        resposta: ["Riscos genéricos e específicos", "Riscos naturais e artificiais", "Riscos físicos, químicos, biológicos, ergonômicos e de acidentes"],
        correta: 2
    },
    {
        pergunta: "O que é um acidente de trabalho?",
        resposta: ["Um evento desastroso planejado pela empresa", "Qualquer lesão corporal sofrida pelo empregado no exercício de suas funções", "Um evento que não gera consequências para o trabalhador"],
        correta: 1
    },
    {
        pergunta: "O que é uma SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho)?",
        resposta: ["Um tipo de treinamento para chefes de departamento", "Um evento organizado anualmente pelas empresas para promover a conscientização e prevenção de acidentes de trabalho", "Um programa de descontos em equipamentos de segurança"],
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