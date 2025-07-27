// Typed.js Typing Effect
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Fiber Engineer", "AI & 3D Animator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector('input[name="name"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
  } else {
    alert("Thank you for your message!");
    // Optionally send form data to server using fetch()
  }
});
