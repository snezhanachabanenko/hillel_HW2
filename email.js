// Regular expression for email validation
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Validation and filtering of the array
var trustedEmails = arr.filter(function(obj) {
    return emailRegex.test(obj.email);
});

console.log(trustedEmails);
