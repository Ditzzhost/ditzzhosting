    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
    }
    function sendToWhatsApp() {
      const name = document.getElementById("name").value;
      const product = document.getElementById("product").value;
      const payment = document.getElementById("payment").value;
      const customText = document.getElementById("customText").value;
      const phone = "6283194451891";
      const message = `✨ Assalamualaikum Bang! ✨\n\nSaya ingin membeli:\n📝 *Nama:* ${name}\n📦 *Produk:* ${product}\n💳 *Payment:* ${payment}\n📝 *Deskripsi:* ${customText}\n\nMohon konfirmasinya ya! 🙏😊`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }

document.addEventListener("DOMContentLoaded", function () { const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

});

