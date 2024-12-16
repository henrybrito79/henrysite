document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const membership = document.querySelector('input[name="membership"]:checked');
    const zip = document.getElementById('zip').value.trim();
    const country = document.getElementById('country').value.trim();

    let errors = [];

    // Validate first name and last name
    if (!firstName) errors.push("First name is required.");
    if (!lastName) errors.push("Last name is required.");

    // Validate at least one contact method
    if (!email && !phone) {
        errors.push("You must provide at least one contact method: Email or Phone.");
    }

    // Validate email
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (email && !emailPattern.test(email)) {
        errors.push("Valid email is required.");
    }

    // Validate phone
    const phonePattern = /^\\d{3} \\d{3} \\d{4}$/;
    if (phone && !phonePattern.test(phone)) {
        errors.push("Phone must be in the format ### ### ####.");
    }

    // Validate membership plan selection
    if (!membership) {
        errors.push("Please select a membership plan.");
    } else if (membership.value === "Standard" || membership.value === "Silver") {
        alert("Thank you for selecting a basic membership plan!");
    } else if (membership.value === "Gold") {
        alert("Congratulations on choosing the premium Gold membership!");
    }

    // Validate postal code for certain countries
    if (country === "US" || country === "Canada") {
        const zipPattern = /^[A-Za-z0-9]{5,6}$/; // Example format
        if (!zipPattern.test(zip)) {
            errors.push("Invalid postal code for " + country);
        }
    }

    // Display errors or success message
    if (errors.length > 0) {
        alert("Please fix the following errors:\\n" + errors.join("\\n"));
    } else {
        alert("Form submitted successfully!\\nThank you for applying to the Dragon Ball Z Gym.");
        this.reset();
    }
});
