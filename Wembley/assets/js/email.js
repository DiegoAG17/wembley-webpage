function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        phone : document.getElementById("telefono").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_6fmf46u","template_ue7gx7g",parms)
    .then(function(response) {
        alert("Mensaje enviado con éxito. Gracias");
        window.location.href = "index.html"; 
    }, function(error) {
        alert("Error al enviar: " + JSON.stringify(error));
    });

}