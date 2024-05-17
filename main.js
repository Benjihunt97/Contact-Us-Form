const submit = document.getElementById("submit");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const legal = document.getElementById("legal");

// Function to check and style a field
const checkField = (field) => {
    switch (field.id) {
        case "firstName":
        case "lastName":
        case "email":
        case "message":
            if (field.value.trim() === "") {
                field.style.borderColor = "red";
                return false;
            } else {
                field.style.borderColor = "";
                return true;
            }
        case "legal":
            if (!field.checked) {
                field.nextElementSibling.style.color = "red";
                return false;
            } else {
                field.nextElementSibling.style.color = "";
                return true;
            }
        default:
            return true;
    }
};

// check for input fields
submit.addEventListener("click", () => {
    let valid = true;

    valid &= checkField(firstName);
    valid &= checkField(lastName);
    valid &= checkField(email);
    valid &= checkField(message);
    valid &= checkField(legal);

    // If all fields are valid, proceed
    if (valid) {
        alert(11);
    }
});
