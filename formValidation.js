document.getElementById("contactForm").addEventListener("submit", function (event)
{
    event.preventDefault();

    // Get form fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    let isValid = true;

    // Name validation
    if (name.value.trim() === "")
    {
        isValid = false;
        name.classList.add("is-invalid");
        name.nextElementSibling.textContent = "Please enter your name.";
    }
    else
    {
        name.classList.remove("is-invalid");
    }

    // Email validation
    const emailPattern = /\S+@\S+\.\S+/; // Checks for "@" and a valid domain format
    if (!emailPattern.test(email.value.trim()))
    {
        email.classList.add('is-invalid');
        isValid = false;
    }
    else
    {
        email.classList.remove('is-invalid');
    }

    // Must start with "0" and be exactly 10 digits
    const phonePattern = /^0\d{9}$/; 
    if (!phonePattern.test(phone.value.trim()))
    {
        phone.classList.add('is-invalid');
        isValid = false;
    }
    else
    {
        phone.classList.remove('is-invalid');
    }

    // Message validation
    if (message.value.trim() === "")
    {
        isValid = false;
        message.classList.add("is-invalid");
        message.nextElementSibling.textContent = "Please enter your message.";
    }
    else
    {
        message.classList.remove("is-invalid");
    }

    // If valid, allow form submission
    if (isValid)
    {
        alert("Form submitted successfully!");
        // Replace with form submission logic, e.g., form.submit();
    }
});

// Remove error message when input changes
document.querySelectorAll("#contactForm input, #contactForm textarea").forEach(field =>
{
    field.addEventListener("input", function ()
    {
        if (field.classList.contains("is-invalid"))
        {
            field.classList.remove("is-invalid");
            field.nextElementSibling.textContent = "";
        }
    });
});
