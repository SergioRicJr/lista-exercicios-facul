var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {
    var media = (Number(n1.value) + Number(n2.value))/2

    if (media>6){
        result.textContent = 'aprovado'
    } else if (media>=5){
        result.textContent = 'recuperação'
    } else {
        result.textContent = 'reprovado'
    }

})