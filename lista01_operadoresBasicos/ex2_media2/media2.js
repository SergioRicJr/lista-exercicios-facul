var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", mediaPonderada)


function mediaPonderada() {
    var media = (Number(n1.value)*1 + Number(n2.value)*2)/(2+1)
    result.textContent = media.toFixed(2)
}
