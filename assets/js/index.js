// ! Forms

// ? Inputs

const eyeButton = document.querySelector('#eye-icon');
const eyeIcon = document.querySelector('#eye-icon i');
const eyeIcon2 = document.querySelectorAll('#eye-icon i');
const passInput = document.querySelector('#password');

eyeButton.addEventListener('click', () => {
    const visible = eyeButton.getAttribute('visible');

    if(visible === 'false') {
        eyeButton.setAttribute('visible', true);
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        passInput.setAttribute('type', 'text');
    } else if(visible === 'true') {
        eyeButton.setAttribute('visible', false);
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        passInput.setAttribute('type', 'password');
    }
});

