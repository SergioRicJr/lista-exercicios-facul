const n1 = document.querySelector("#n1")
const result = document.querySelector("#result")
const btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", ()=>{
    var numero = Number.parseInt(n1.value)
    var total = numero
    for (let i= numero-1; i > 0; i--){
        total = total * i
    }
    result.textContent =    `Resultado: ${total}`
})
