function validate(event) {
    const output = document.getElementById("output");

    event.preventDefault(); // Prevent the default form submission

    let username = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("ftype").value;

    // Trim the values
    username = username.trim();
    email = email.trim();
    feedback = feedback.trim();

    // Clear any previous output
    output.innerHTML = "";

    // Check if the fields are filled
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (username === "") {
        output.innerHTML = "Please fill in the username.";
    } else if (email === "") {
        output.innerHTML = "Please fill in the email.";
    } else if (!regex.test(email)){
        output.innerHTML = "Please use the email format --@---.com.";
    }else if (feedback === "") {
        output.innerHTML = "Please provide feedback.";
    } else {
        output.innerHTML = "Thank you for your feedback!";
    }
}

function load(event) {
    const form = document.getElementById("details")

    // Attach the event listener to the form submit event
    form.addEventListener("submit", validate);
}

document.addEventListener('DOMContentLoaded', load);