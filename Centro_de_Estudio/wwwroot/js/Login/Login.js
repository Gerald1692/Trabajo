 
  
        (function () {
            const toggleBtn = document.querySelector('.toggle-pass');
        const passwordInput = document.querySelector('#password');
            toggleBtn?.addEventListener('click', () => {
                const icon = toggleBtn.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        toggleBtn.setAttribute('aria-label', 'Ocultar contraseña');
                } else {
            passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        toggleBtn.setAttribute('aria-label', 'Mostrar contraseña');
                }
            });

        const form = document.getElementById('loginForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        // validación simple de ejemplo
        if (!form.reportValidity()) {
            form.classList.add('was-validated');
        return;
                }

        // Ejemplo: mostrar SweetAlert (simula login correcto)
        Swal.fire({
            icon: 'success',
        title: '¡Bienvenido!',
        text: 'Has iniciado sesión correctamente.',
        timer: 1500,
        showConfirmButton: false
                }).then(() => {
            // aquí podrías redirigir o enviar el form con AJAX/submit
            // form.submit();
        });
            });
        })();
