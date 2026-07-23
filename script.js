document.addEventListener("DOMContentLoaded", function () {

  // 1. Smooth scroll untuk Notifikasi Top Bar "New Arrival Outfit"
  const notificationBtn = document.getElementById('notificationBtn');
  if (notificationBtn) {
    notificationBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('new-arrival');
      if (target) {
        $('html, body').animate({
          scrollTop: $(target).offset().top - 70
        }, 800);
      }
    });
  }

  // 2. Smooth scroll untuk seluruh link menu navigasi (#)
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 800);
    }
  });

  // 3. Handling Tombol "Tambahkan Ke Keranjang"
  $('.btn-cart').on('click', function () {
    var itemNama = $(this).closest('.card-body').find('h6').text();
    alert('✨ Sukses! "' + itemNama + '" telah ditambahkan ke keranjang kamu 💕');
  });

  // 4. Handling Tombol "Tanya" (Membuka WhatsApp CS)
  $('.btn-tanya').on('click', function () {
    var itemNama = $(this).data('nama');
    var waNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Toko
    var message = encodeURIComponent("Halo Allea Outfit, saya mau tanya-tanya tentang produk: " + itemNama);
    window.open("https://wa.me/" + waNumber + "?text=" + message, "_blank");
  });

  // 5. Handling Tombol "Beli"
  $('.btn-beli').on('click', function () {
    var itemNama = $(this).closest('.card-body').find('h6').text();
    var itemHarga = $(this).closest('.card-body').find('.text-pink').text();
    alert('🛒 Kamu memilih untuk membeli: ' + itemNama + ' (' + itemHarga + '). Menuju ke halaman pembayaran!');
  });

  // 6. Form submission handling (Pesan Terkirim)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Terima kasih cantik! 💖 Pertanyaan kamu telah berhasil dikirim.');
      contactForm.reset();
    });
  }

});