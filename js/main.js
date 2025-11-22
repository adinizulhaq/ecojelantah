// Mengambil elemen tombol dan menu
const btn = document.getElementById("btnHamburger");
const menu = document.getElementById("mobileMenu");

// Menampilkan menu saat diklik
btn.addEventListener("click", () => {
  menu.classList.add("show");
});

// Menghilangkan menu saat diklik
menu.addEventListener("click", () => {
  menu.classList.remove("show");
});

// Menangani submit form kontak
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const fb = document.getElementById("contactFeedback");
  fb.style.display = "block";
  fb.textContent =
    "Terima kasih " + (name || "") + "! Pesan Anda telah diterima";
  fb.style.color = "var(--primary-700)";
  // Mengosongkan form setelah submit
  setTimeout(() => {
    e.target.reset();
  }, 600);
}

// Mengatur tahun di footer secara dinamis
document.getElementById("year").textContent = new Date().getFullYear();
