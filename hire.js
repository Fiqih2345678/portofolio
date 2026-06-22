const hireForm = document.getElementById('hireForm');
const hireStatus = document.getElementById('hireStatus');
const phoneNumber = '6285693296691';

hireForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(hireForm);
  const name = formData.get('name')?.toString().trim();
  const company = formData.get('company')?.toString().trim() || 'Tidak disebutkan';
  const message = formData.get('message')?.toString().trim();

  if (!name || !message) {
    hireStatus.textContent = 'Mohon lengkapi nama dan detail proyek.';
    hireStatus.className = 'form-status error';
    return;
  }

  const waText = `Halo Fiqih,\n\nNama: ${name}\nPerusahaan: ${company}\n\n${message}`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`;

  hireStatus.textContent = 'Chat WhatsApp Anda sedang dibuka.';
  hireStatus.className = 'form-status success';
  window.open(waLink, '_blank', 'noopener');
});

  export const emailLink = document.querySelector('.button-email');
  emailLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:fiqihdhukha@gmail.com';
  });