// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("submitBtn").onclick = function (event) {
//         event.preventDefault();
//         alert("Form submitted!");
//     };
// });

let ageofperson = prompt("Enter age of person:");
let normalprice= prompt("Enter normal price:");
let age=parseInt(ageofperson);
let price=parseFloat(normalprice);
let res = (age>=60)? price-0.9 : price;
alert(`The ticket price is ${res.toFixed(2)}`);