document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        // Captura os dados digitados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Validação simples/Simulação de envio bem-sucedido
        if (nome && email) {
            feedback.textContent = `Obrigado, ${nome}! Sua mensagem sobre o futuro sustentável foi enviada com sucesso.`;
            feedback.className = "success"; // Aplica classe verde de sucesso
            
            // Limpa o formulário
            form.reset();

            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                feedback.className = "hidden";
            }, 5000);
        }
    });
});
