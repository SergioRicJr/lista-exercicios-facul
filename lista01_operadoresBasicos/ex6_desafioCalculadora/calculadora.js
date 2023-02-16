var n1 = document.querySelector(".n1")
var n2 = document.querySelector(".n2")
var btnSum = document.querySelector(".Sum")
var btnSub = document.querySelector(".Sub")
var btnMult = document.querySelector(".Mult")
var btnDiv = document.querySelector(".Div")
var btnResultado = document.querySelector(".result")
var body = document.querySelector("body")
var operador
var resultado
var novoElemento = document.createElement("div")
var textoElemento

btnSum.addEventListener("click", function(){
    let listaOperadores = document.getElementsByClassName("selecionado")
    for (let i of listaOperadores) {
        i.classList.remove("selecionado")
    }
    btnSum.classList.add("selecionado")
    operador = "+"
})

btnSub.addEventListener("click", function(){
    let listaOperadores = document.getElementsByClassName("selecionado")
    for (let i of listaOperadores) {
        i.classList.remove("selecionado")
    }
    btnSub.classList.add("selecionado")
    operador = "-"
})

btnMult.addEventListener("click", function(){
    let listaOperadores = document.getElementsByClassName("selecionado")
    for (let i of listaOperadores) {
        i.classList.remove("selecionado")
    }
    btnMult.classList.add("selecionado")
    operador = "*"
})

btnDiv.addEventListener("click", function(){
    let listaOperadores = document.getElementsByClassName("selecionado")
    for (let i of listaOperadores) {
        i.classList.remove("selecionado")
    }
    btnDiv.classList.add("selecionado")
    operador = "/"
})


btnResultado.addEventListener("click", function(){
    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)
    switch (operador){
        case "+":
            resultado = numero1 + numero2
            textoElemento = document.createTextNode(resultado)
            novoElemento.appendChild(textoElemento)
            novoElemento.classList.add("numero-final")
            body.appendChild(novoElemento)
            body.style.alignItems = "center"
            break
        case "-":
            resultado = numero1 - numero2
            textoElemento = document.createTextNode(resultado)
            novoElemento.appendChild(textoElemento)
            novoElemento.classList.add("numero-final")
            body.appendChild(novoElemento)
            body.style.alignItems = "center"
            break
        case "*":
            resultado = numero1 * numero2
            textoElemento = document.createTextNode(resultado)
            novoElemento.appendChild(textoElemento)
            novoElemento.classList.add("numero-final")
            body.appendChild(novoElemento)
            body.style.alignItems = "center"
            break
        case "/":
            resultado = numero1 / numero2
            textoElemento = document.createTextNode(resultado)
            novoElemento.appendChild(textoElemento)
            novoElemento.classList.add("numero-final")
            body.appendChild(novoElemento)
            body.style.alignItems = "center"
            break
        default:
            alert("Um dos campos não foi preenchido")
    
    }
})

// ADICIONAR CIRCULO ANIMADO COM KEYFRAME,GRADIENT E ANIMACAO CIRCULAR PARA EXIBIR O RESULTADO