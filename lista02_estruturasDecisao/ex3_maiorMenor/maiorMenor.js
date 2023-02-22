var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {

    if (n1.value>n2.value){
        result.textContent = `o maior número é o N1`
    } else {
        result.textContent = `o maior número é o N2`
    }

})