function color() {
    var r = parseFloat(document.getElementById("input1").value)
    var g = parseFloat(document.getElementById("input2").value)
    var b = parseFloat(document.getElementById("input3").value)
    document.body.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")"
}

