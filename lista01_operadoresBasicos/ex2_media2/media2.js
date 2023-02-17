var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", mediaPonderada)


function mediaPonderada() {
    nn1 = Number(n1.value)
    nn2 = Number(n2.value)
    if (nn1>=0 && nn1<=10 && nn2>=0 && nn2<=10) {
        var media = (n1.value*1 + n2.value*2)/(2+1)
        result.textContent = media.toFixed(2)
    } else {
        alert("Digite números entre 0 e 10")
    }
}
