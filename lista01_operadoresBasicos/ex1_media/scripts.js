var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var result = document.querySelector("#result")
var btn = document.querySelector("#btnCalcular")

btn.addEventListener("click", function() {
    var media = (Number(n1.value) + Number(n2.value))/2
    // var casasDecimais = String(media).split(".")[1].length
    // var nMultDiv = "1"
    // for (i=0;i<casasDecimais;i++){
    //     nMultDiv.concat("0")
    // }
    // nMultDiv = Number(nMultDiv)
    result.textContent = media.toFixed(2)
    // console.log(media)
    // console.log(nMultDiv)
    // console.log(Math.round(media*(nMultDiv/100))/nMultDiv)
    // console.log(Math.round(1.005*100)/100)
})