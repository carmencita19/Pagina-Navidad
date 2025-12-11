// --- Lista de Mensajes Graciosos y Divertidos ---
const mensajes = [
    "¡Felices fiestas! Si Papá Noel no te trae regalo, revisa el recibo. ¡Tú lo compraste!",
    "No te preocupes por engordar en Navidad. ¡La ropa interior de regalo lo arreglará todo!",
    "Espero que en estas fiestas la magia de Internet te acompañe. ¡Y que el WiFi no falle!",
    "Si te ves atrapado en una cena familiar incómoda, recuerda: el turrón siempre es una buena excusa para el silencio.",
    "¡Alerta! Tu misión esta Navidad es no contarle a nadie que aún crees en los renos voladores.",
    "Que tu Navidad sea tan luminosa como el árbol que tu vecino compró por impulso.",
    "¡Cuidado con el muérdago! Dicen que si te besan, es un hechizo que solo se rompe con más comida.",
    "Recuerda que la frase 'Yo solo un poquito' es el mayor mito de la Navidad. ¡A comer!",
    "Este año he sido tan bueno... ¡que le he hecho creer a Papá Noel que aún estoy solter@!",
    "Mi deseo de Navidad es que mi cuenta bancaria se llene tan rápido como mi plato de postre.",
    "La Navidad no es solo una época, ¡es un estilo de vida! (El estilo de vida 'comer y dormir')."
];

function mostrarMensaje() {
    // 1. Obtener el nombre
    let nombre = document.getElementById('nombreInput').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    if (nombre === "") {
        // Si no escribe nada
        resultadoDiv.innerHTML = '<p style="color: #ff9999;">¡Por favor, escribe tu nombre primero para recibir tu regalo!</p>';
        return;
    }

    // 2. Elegir un mensaje aleatorio
    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    const mensajeAleatorio = mensajes[indiceAleatorio];

    // 3. Formatear el mensaje con el nombre
    // Capitaliza la primera letra del nombre
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    
    // El mensaje final que incluye el nombre
    const mensajeFinal = `¡Hola **${nombre}**! ${mensajeAleatorio}`;

    // 4. Mostrar el mensaje en el div de resultado y agregar la clase de animación
    resultadoDiv.innerHTML = `<p class="mensaje-resaltado">${mensajeFinal}</p>`;

    // Opcional: limpiar el campo de entrada
    // document.getElementById('nombreInput').value = '';
}