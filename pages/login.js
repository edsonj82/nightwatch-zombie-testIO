module.exports = {
    url: 'http://zombie-api:5000/login',
    elements: {
        form:'.card-login',
        emailInput:'input[name=email]',
        passInput: 'input[name=password]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo:'.alert-info'
    }
}