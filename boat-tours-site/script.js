document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Preselect tour when clicking "Book" on a card
  document.querySelectorAll('[data-book-tour]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tourName = btn.getAttribute('data-book-tour');
      const tourSelect = document.getElementById('tour');
      if (tourSelect) {
        [...tourSelect.options].forEach((opt) => {
          if (opt.textContent === tourName) opt.selected = true;
        });
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Date min = today
  const todayISO = new Date().toISOString().split('T')[0];
  const dateEls = [document.getElementById('date'), document.getElementById('date2')].filter(Boolean);
  dateEls.forEach((el) => el.setAttribute('min', todayISO));

  // Simple validation helper
  function validate(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      const container = field.closest('.form-row');
      let error = container.querySelector('.error');
      if (!error) {
        error = document.createElement('div');
        error.className = 'error';
        container.appendChild(error);
      }
      if (!field.value) {
        valid = false;
        error.textContent = 'This field is required';
      } else {
        error.textContent = '';
      }
      if (field.type === 'email' && field.value) {
        const ok = /.+@.+\..+/.test(field.value);
        if (!ok) { valid = false; error.textContent = 'Enter a valid email'; }
      }
    });
    return valid;
  }

  // Fake submit handler: replace with your backend or form service
  const bookingForm = document.getElementById('booking-form');
  const bookingStatus = document.getElementById('booking-status');
  bookingForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate(bookingForm)) return;
    bookingStatus.textContent = 'Submitting…';
    await new Promise((r) => setTimeout(r, 800));
    bookingStatus.textContent = 'Success! Check your email for confirmation.';
    bookingForm.reset();
  });

  const requestForm = document.getElementById('request-form');
  const requestStatus = document.getElementById('request-status');
  requestForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate(requestForm)) return;
    requestStatus.textContent = 'Sending request…';
    await new Promise((r) => setTimeout(r, 900));
    requestStatus.textContent = 'Thanks! We will email a quote shortly.';
    requestForm.reset();
  });
});