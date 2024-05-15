document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name && email) {
        alert(`Gracias por tu pago, ${name}. Te redirigiremos a WhatsApp para agendar tu cita.`);
        window.location.href = `https://wa.me/1234567890?text=Hola,%20soy%20${name}%20y%20he%20realizado%20una%20reserva%20para%20una%20lectura%20de%20TAROT.`;
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
