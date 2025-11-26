var a = parseFloat(prompt("Enter first number"));
var b = parseFloat(prompt("Enter second number"));
var op = prompt("Enter operator");
var ans;
if (op == "+") {
    ans = a + b;
}
else if (op == "-") {
    ans = a - b;
}
else if (op == "*") {
    ans = a * b;
}
else if (op == "/") {
    ans = a / b;
}
else {
    ans = "wrong operator";
}
console.log("answer: " + ans);
