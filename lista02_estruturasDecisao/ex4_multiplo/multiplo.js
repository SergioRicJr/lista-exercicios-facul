var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {
    var multiplo = n1.value/n2.value
    if (Number.isInteger(multiplo) && multiplo>0){
        result.textContent = `N1 é multiplo de N2`
    } else {
        result.textContent = `N1 não é multiplo de N2`
    }

})