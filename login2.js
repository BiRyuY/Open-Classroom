function togglePassword() {
    const passwordField = document.getElementById('pass');
    const toggleIcon = document.querySelector('.show-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.replace('bx-show', 'bx-hide');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.replace('bx-hide', 'bx-show');
    }
}
