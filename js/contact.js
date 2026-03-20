
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "jOnwt3bI3QtZ0LEte",
    });
})();

const form = document.getElementById('form_submit');

document.getElementById('form_submit').addEventListener('submit', (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_ave4x37', 'template_xjme74u', form)
    .then((succes) =>{
        console.log(succes)
        // window.location.replace("./merci.html");
        history.replaceState(null, '', "./merci.html");
        window.location.assign("./merci.html");
    }, (error) =>{
        console.log(error)
        history.replaceState(null, '', "./erreur.html");
        window.location.assign("./erreur.html");
    })
});


