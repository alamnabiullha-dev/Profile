
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); 
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",   
        "YOUR_TEMPLATE_ID",  
        this
    ).then(
        function () {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        },
        function (error) {
            alert("Failed to send message: " + error.text);
        }
    );
});

// footer 
const icons = document.querySelectorAll('.social-icons a');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        console.log(icon.title + ' icon clicked!');
        alert('Opening ' + icon.title + '...');
    });
});



form.addEventListener("submit", function (e) {
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

