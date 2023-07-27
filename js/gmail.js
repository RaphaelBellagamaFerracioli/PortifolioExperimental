
  const form = document.querySelector('[data-form]');
  const formButton = document.querySelector('[data-button]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    formButton.disabled = true;
    formButton.innerText = 'Enviando...';

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      form.innerHTML = "<h1 class='success'>Mensagem enviada!</h1>";
    } catch (error) {
      form.innerHTML = "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>";
      console.error('Erro ao enviar o formulário:', error);
    }
  });
