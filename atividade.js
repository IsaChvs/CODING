//Programa Simples
const nome = "Isabela"
const idade = 19
const cidade = "Recife"
console.log (`Oi, meu nome é ${nome} e tenho ${idade} anos.`)
console.log (`${nome} mora em ${cidade}.`)

//Quatro Operações 
const num1 = 25
const num2 = 71
const soma = (num1 + num2) 
console.log (soma)

const subtrair = (num1 - num2)
console.log (subtrair)

const multiplicar = (num1*num2)
console.log (multiplicar)

const dividir = (num1/num2)
console.log (dividir)

// Cálculo de Área
const base = 14
const altura = 20
const area = (base*altura/2)
console.log (`A área do triângulo é ${area}`)

// Cálculo de Média
const nota1 = 7
const nota2 = 10
const nota3 = 8
const media = ((nota1 + nota2 + nota3)/3).toFixed(2)
console.log(`A média do aluno é ${media}`)

//Cálculo de Porcentagem 
const preço = 70
const desconto = 0.1
const sifrao = "R$"
const preçoFinal = (preço - (preço*desconto))
console.log(`Produto de R$${preço} com desconto de ${desconto*100}%, por R$${preçoFinal}`)

//Imposto de renda

//Conversor de Moedas
const dolar = 1
const real = dolar * 4.8
const euro = dolar * 0.9

console.log (`${dolar} dolar americano equivale à ${real} reais`)
console.log (`${dolar} dolar americano equivale à ${euro} euros`)

//Conversor de Celsius para Fahrenheit
const celsius = 24
const fahrenheit = (celsius * 9/5) + 32
console.log(`A temperatura de ${celsius} graus celsius em fahrenheit é ${fahrenheit}`)

//Calculadora de IMC
const peso = 49
const tamanho = 1.57
const imc = (peso / (altura * altura)).toFixed(2)
console.log(imc)
