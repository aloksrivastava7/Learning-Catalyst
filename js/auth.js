const registerform = document.querySelector('#registerform')

registerform.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user info
    const name = registerform['name'].value;
    const email = registerform['email'].value;
    const role = registerform['validationCustom04'].value;
    const password = registerform['pass'].value;

    console.log(email, password);

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        
    })
})