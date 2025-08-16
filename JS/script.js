// Jalankan semua fungsi saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // 1. Pesan sambutan pada Home Page (“Hi Name”)
  let userName = localStorage.getItem("userName");

    if (!userName) {
        userName = prompt("Masukkan nama kamu:");
        if (userName && userName.trim() !== "") {
            localStorage.setItem("userName", userName);
        } else {
            userName = "Guest";
        }
    }

    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Hi ${userName}, welcome to website`

  // 2. Tampilkan waktu terkini
  const currentTimeElement = document.getElementById('current-time');
  if (currentTimeElement) {
      const now = new Date();
      const options = {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
      };
      currentTimeElement.textContent = now.toLocaleString('en-US', options);
  }

  // 3. Validasi Form & Tampilkan Hasil
  // 3. Validasi Form & Tampilkan Hasil
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Ambil elemen input
        const namaInput = document.getElementById('nama');
        const tanggalLahirInput = document.getElementById('tanggal-lahir');
        const jenisKelaminInput = document.querySelector('input[name="jenis-kelamin"]:checked');
        const pesanInput = document.getElementById('pesan');

        // Ambil elemen error
        const namaError = document.getElementById('nama-error');
        const tanggalLahirError = document.getElementById('tanggal-lahir-error');
        const jenisKelaminError = document.getElementById('jenis-kelamin-error');
        const pesanError = document.getElementById('pesan-error');

        // Reset pesan error
        namaError.textContent = '';
        tanggalLahirError.textContent = '';
        jenisKelaminError.textContent = '';
        pesanError.textContent = '';

        let isValid = true;

        if (namaInput.value.trim() === '') {
            namaError.textContent = 'Nama tidak boleh kosong.';
            isValid = false;
        }

        if (tanggalLahirInput.value.trim() === '') {
            tanggalLahirError.textContent = 'Tanggal lahir tidak boleh kosong.';
            isValid = false;
        }

        if (!jenisKelaminInput) {
            jenisKelaminError.textContent = 'Pilih salah satu jenis kelamin.';
            isValid = false;
        }

        if (pesanInput.value.trim() === '') {
            pesanError.textContent = 'Pesan tidak boleh kosong.';
            isValid = false;
        }

        if (isValid) {
            // Tampilkan data yang disubmit
            document.getElementById('display-nama').textContent = namaInput.value;
            document.getElementById('display-tanggal-lahir').textContent = tanggalLahirInput.value;
            document.getElementById('display-jenis-kelamin').textContent = jenisKelaminInput.value;
            document.getElementById('display-pesan').textContent = pesanInput.value;

            alert('Form berhasil disubmit!');
        }
    });
}

  // Fungsi tambahan dari kode yang Anda berikan, disatukan
  // Note: Anda perlu menambahkan elemen dengan ID 'year' di HTML agar ini berfungsi.
  const yearEl = document.getElementById('year');
  if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
  }
});