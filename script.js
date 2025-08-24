document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (name === "" || email === "" || message === "") {
    errorMsg.textContent = "⚠️ All fields are required!";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg.textContent = "⚠️ Please enter a valid email!";
    return;
  }

  errorMsg.textContent = "";
  alert("✅ Your message has been sent!");
  document.getElementById("contactForm").reset();
});
