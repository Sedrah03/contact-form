document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMsg = document.getElementById("formSuccess");

  // Check empty fields
  if (name === "" || email === "" || subject === "" || message === "") {
    formMsg.textContent = "⚠️ All fields are required!";
    formMsg.style.color = "#e74c3c";
    return;
  }

  // Check email validity
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMsg.textContent = "⚠️ Please enter a valid email!";
    formMsg.style.color = "#e74c3c";
    return;
  }

  // Success
  formMsg.textContent = "✅ Your message has been sent!";
  formMsg.style.color = "#2ecc71"; // green
  document.getElementById("contactForm").reset();
});
