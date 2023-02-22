var n1 = document.querySelector("#n1")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {
    var n1Value = Number.parseInt(n1.value)
    if (n1Value>1){
        var lista = []
    
        for (let i = n1Value; i > 0; i--){
            lista.push(i)
        }
        result.textContent = lista
    } else {
        window.alert('Digite um número maior que 1')
    }
    
})