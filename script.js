// Dark mode
const toggle = document.getElementById("darkToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

// Suscripción mensaje
const infoBtn = document.getElementById("btn-info");
const mensaje = document.getElementById("mensaje");

if (infoBtn && mensaje) {
    infoBtn.addEventListener("click", () => {
        mensaje.textContent = "Tu mascota recibirá comidas frescas cada semana. ¡Suscríbete ahora!";
    });
}
