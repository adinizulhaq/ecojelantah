const btn = document.getElementById("btnHamburger");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  const shown = menu.classList.toggle("show");
  menu.setAttribute("aria-hidden", !shown);
});

function closeMenu() {
  menu.classList.remove("show");
  menu.setAttribute("aria-hidden", "true");
}

// Handler untuk kontak
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const fb = document.getElementById("contactFeedback");
  fb.style.display = "block";
  fb.textContent =
    "Terima kasih " + (name || "") + "! Pesan Anda telah diterima";
  fb.style.color = "var(--primary-700)";
  // reset form after short delay to show feedback (demo)
  setTimeout(() => {
    e.target.reset();
  }, 600);
}

// Set tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();
