const n1 = document.querySelector("#n1")
const result = document.querySelector("#result")
const btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function(){
    result.textContent = (Number(n1.value) *24.4).toFixed(2)
})  