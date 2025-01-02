// Inicializar o EmailJS
emailjs.init("2RfumB1iq5JmGsvdj"); // Substitua pelo seu publicKey do EmailJS

// Selecionar o formulário
const form = document.getElementById("form-container");

// Adicionar evento de envio
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar reload da página

  emailjs.sendForm("service_09knoar", "template_zb5y38s", form).then(
    function () {
      alert("E-mail enviado com sucesso!");
      form.reset(); // Limpar o formulário
    },
    function (error) {
      alert("Erro ao enviar o e-mail: " + error.text);
    }
  );
});
