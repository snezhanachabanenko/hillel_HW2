var myString = "YourStringHere"; // Replace "YourStringHere" with your string

var regex = /^(?!.*[Aa]).{6,}$/;

if (regex.test(myString)) {
    console.log("The string meets the conditions.");
} else {
    console.log("The string does not meet the conditions.");
}
