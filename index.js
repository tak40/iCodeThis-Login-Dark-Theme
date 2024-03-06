/** @format */

// Handling the fake Google sign-in event for the purpose of this exercise
document.querySelector('.google-login-btn').addEventListener('click', () => {
    console.log('Google sign-in clicked')
})

// Handling form submission for the purpose of this exercise
document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault()
    console.log('Form submitted')
})
