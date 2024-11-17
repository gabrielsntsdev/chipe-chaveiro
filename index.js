// script.js

// Navegação entre seções
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(this.dataset.target);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Formulário de envio
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

