document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Envoi en cours...';

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        msg.style.background = '#e6f4ea';
        msg.style.color = '#1e4620';
        msg.textContent = 'Merci, votre message a bien été envoyé ! Je vous réponds au plus vite.';
        form.reset();
      } else {
        response.json().then(function (data) {
          msg.style.background = '#fdecea';
          msg.style.color = '#611a15';
          msg.textContent = (data && data.errors)
            ? data.errors.map(function (er) { return er.message; }).join(', ')
            : 'Une erreur est survenue. Merci de réessayer ou de me contacter directement par téléphone.';
        });
      }
    }).catch(function () {
      msg.style.background = '#fdecea';
      msg.style.color = '#611a15';
      msg.textContent = 'Une erreur est survenue. Merci de réessayer ou de me contacter directement par téléphone.';
    }).finally(function () {
      msg.style.display = 'block';
      btn.disabled = false;
      btn.textContent = originalText;
    });
  });
});
