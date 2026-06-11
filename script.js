document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();

        if (nome) {
            feedback.textContent = `Olá, ${nome}! Suas informações foram recebidas pela nossa equipe de tecnologia sustentável.`;
            feedback.className = "success";
            
            form.reset();

            setTimeout(() => {
                feedback.className = "hidden";
            }, 5000);
        }
    });
});
