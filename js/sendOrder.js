/*const formOrder = document.getElementById('formOrder');
function sendEmail(){
    let temParams={
        name: document.getElementById('name').value,
        orden: document.getElementById('orden').value,
        much: document.getElementById('much').value,
        tel: document.getElementById('tel').value,
        address: document.getElementById('address').value,
        details: document.getElementById('details').value,
        dates: document.getElementById('dates').value,
    };

    const serviceID = 'default_service';
    const templateID = 'template_3b8pu0t';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        document.getElementById('mensaje-enviado').classList.add('active');
      }, (err) => {
        alert(JSON.stringify(err));
      });
}

formOrder.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail()  
});*/


const btn = document.getElementById('button');

document.getElementById('formOrder')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_3b8pu0t';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      document.getElementById('mensaje-enviado').classList.add('active');
        btn.value = 'proceed to order';
        document.getElementById('formOrder').reset();

        setTimeout(() => {
            document.getElementById('mensaje-enviado').classList.remove('active');
        }, 2000);

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});






