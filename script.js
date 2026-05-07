

document.getElementById("contactForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = new FormData(this);

    fetch("https://formspree.io/f/mnjnnvzw", {
        method: "POST",
        headers: {
            "Accept": "application/json"
        },
        body: formData
    })

    .then(response => {

        if (response.ok) {

            alert("✅ Message sent successfully!");
            this.reset();

        } else {

            alert("❌ Failed to send message");

        }

    })

    .catch(() => {

        alert("❌ Network error");

    });

});


const icons = document.querySelectorAll('.social-icons a');

icons.forEach(icon => {

    icon.addEventListener('click', () => {

        console.log(icon.title + ' icon clicked!');

    });

});

