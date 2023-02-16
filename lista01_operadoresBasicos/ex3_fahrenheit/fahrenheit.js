var tempC = document.getElementById("n1")
var btnCalcular = document.getElementById("btnCalcular")
var resultado = document.getElementById("result")

btnCalcular.addEventListener("click", function(){
    let cValue = Number(tempC.value)
    let grausF = cValue*1.8 + 32
    resultado.textContent = grausF + ' F'
})


