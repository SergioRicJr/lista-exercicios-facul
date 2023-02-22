var n1 = document.querySelector("#n1")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {

    if (n1.value%2){
        result.textContent = `o número é impar`
    } else {
        result.textContent = `o número é par`
    }
})