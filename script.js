// Respuestas provisionales
const respuestas = {
  menu: "⏳ Próximamente actualizaremos nuestro menú.",
  horarios: "⏳ Horarios en actualización.",
  delivery: "⏳ Información de delivery disponible pronto.",
  direccion: "⏳ Dirección por confirmar.",
  reservas: "⏳ Pronto habilitaremos información de reservas."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const box = document.getElementById("chat-box");

  let userText = input.value.trim();
  if (userText === "") return;

  box.innerHTML += `<p><span class="user">Tú:</span> ${userText}</p>`;

  // Convertimos el texto del usuario a minúsculas para analizarlo
  const msg = userText.toLowerCase();
  let respuesta = "No entendí tu consulta 😕. Intenta escribir: menú, horarios, delivery, dirección o reservas.";

  if (msg.includes("menu")) respuesta = respuestas.menu;
  else if (msg.includes("horario")) respuesta = respuestas.horarios;
  else if (msg.includes("delivery")) respuesta = respuestas.delivery;
  else if (msg.includes("direc")) respuesta = respuestas.direccion;
  else if (msg.includes("reser")) respuesta = respuestas.reservas;

  box.innerHTML += `<p><span class="bot">Bot:</span> ${respuesta}</p>`;

  input.value = "";
  box.scrollTop = box.scrollHeight;
}
