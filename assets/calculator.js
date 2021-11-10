function calc(callback) {
    var n1 = parseFloat(document.getElementById("number1").value);
    var n2 = parseFloat(document.getElementById("number2").value);
    var result = callback(n1, n2);
    document.getElementById("result").value = result;
}

function multiplyNum(n1, n2) {
    return n1 * n2;
}
function divideNum(n1, n2) {
    return n1 / n2;
}
function addNum(n1, n2) {
    return n1 + n2;
}