function handleFormSubmission(event) {
    event.preventDefault(); //

    const username = document.getElementById('username');
    const password = document.getElementById('password');


    const isValidUsername = validateUsername(username.value);
    const isValidPassword = validatePassword(password.value);

    if (!isValidUsername || !isValidPassword) {
        if (!isValidUsername) {
            username.classList.add('input-error');
            alert('Username must be more than 4 characters.');
        } else {
            username.classList.remove('input-error');
        }
        if (!isValidPassword) {
            password.classList.add('input-error');
            alert('Password must be at least 8 characters long.');
        } else {
            password.classList.remove('input-error');
        }
        return;
    }


    document.getElementById('form').submit();
}