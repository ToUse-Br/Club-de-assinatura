function showForm(button) {
  // Encontra o card onde o botão foi clicado
  const card = button.closest(".card");

  // Exibe o formulário que está oculto
  const formContainer = card.querySelector(".form-container");
  formContainer.style.display = "block";

  // Desabilita o botão de compra até os campos serem preenchidos
  const finalizeButton = formContainer.querySelector("#finalizeBtn");
  finalizeButton.disabled = true;

  // Adiciona evento para habilitar o botão de finalização da compra quando os campos forem preenchidos
  const form = formContainer.querySelector(".customerForm");
  form.addEventListener("input", function () {
    const name = form.querySelector("#user_name").value;
    const email = form.querySelector("#user_email").value;
    const fone = form.querySelector("#user_fone").value;

    // Habilita o botão de compra se os campos estiverem preenchidos
    if (name && email && fone) {
      finalizeButton.disabled = false;
    } else {
      finalizeButton.disabled = true;
    }
  });
}