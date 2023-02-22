var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {
    var nv1 = Number.parseInt(n1.value)
    var nv2 = Number.parseInt(n2.value)
    var lista = []
    if (nv1 >nv2){
        for (let i = nv1; i >= nv2; i--){
            lista.push(i)
        }
    } else if (nv2>nv1){
        for (let i = nv1; i <= nv2; i++){
            lista.push(i)
    }}
    result.textContent = lista
})