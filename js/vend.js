
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Simulação de validação (em um caso real, isso seria feito no servidor)
    if (email === 'drex@gmail.com' && password === 'drex') {
        errorMessage.style.display = 'none';
        alert('Login realizado com sucesso!');
        console.log('Redirecionando para http://localhost/MY-PORTIFOLIO/port/lista-contx.html'); // Adicione esta linha para depuração
        // Aqui você redirecionaria para a página principal
        window.location.href = 'http://localhost/MY-PORTIFOLIO/port/lista-contx.html';
    } else {
        errorMessage.style.display = 'block';
        document.getElementById('password').value = ''; // Limpa o campo de senha
    }
});

// Animação dos labels
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.nextElementSibling.classList.add('active');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.nextElementSibling.classList.remove('active');
        }
    });
});

// ########################################### END LOGIN ##################################



