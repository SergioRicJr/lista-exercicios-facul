const n1 = document.querySelector("#n1")
const result = document.querySelector("#result")
const btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", ()=>{
    var n1Value = Number(n1.value)
    result.textContent = (n1Value * 1.60934).toFixed(2) + ' km'
})
