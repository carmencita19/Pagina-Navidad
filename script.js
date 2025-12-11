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
    "La Navidad no es solo una época, ¡es un estilo de vida! (El estilo de vida 'comer y dormir').",
    "Que tus regalos sean tan emocionantes como encontrar un cargador libre en la cena familiar.",
    "Este año, mi espíritu navideño dura exactamente hasta que veo la factura de la luz con las luces del árbol.",
    "¡Feliz Navidad! Si no recibes lo que pediste, recuerda: el reembolso es el nuevo milagro.",
    "Que tu árbol de Navidad tenga más luces que tu futuro después de las fiestas.",
    "Si alguien te dice '¡Deberías perder peso!', simplemente dile: 'No, deberías traer más postre'.",
    "Mi plan navideño: fingir que entiendo el menú en la cena y asentir con la cabeza mientras como.",
    "¡Alerta! Si ves a un familiar acercarse con un suéter feo, corre. Es tu regalo.",
    "Este año, el mejor regalo es que nadie pregunte '¿Y por qué aún no tienes pareja?'",
    "Que tus días sean alegres, tus noches calientes (de cacao) y tus facturas... desaparecidas.",
    "Recuerda: si te regalan algo que no te gusta, siempre puedes devolverlo... o regalarlo el próximo año.",
    "La Navidad es la única época en la que es aceptable comer galletas a las 8 a.m. ¡Aprovecha!",
    "Si te sientes estresado, respira hondo... y luego ve a por otro trozo de pastel.",
    "¡Felices fiestas! Que tu WiFi sea fuerte, tu cama suave y tu familia... en modo silencioso.",
    "Este año, mi lista de deseos es corta: dormir más, gastar menos y comer sin culpa (imposible, pero sueño).",
    "Que tu árbol no se caiga, tu pavo no se queme y tu tía no te pregunte por tus planes de vida.",
    "Si ves luces parpadeando en la ventana, no es Papá Noel... es tu vecino probando el nuevo control remoto.",
    "Este año, el verdadero milagro navideño es que el delivery llegue antes de que se enfríe la cena.",
    "¡Feliz Navidad! Que tus regalos sean muchos, tus deudas pocas y tus siestas... largas.",
    "Si alguien te dice '¡Pareces cansado!', simplemente responde: 'Es que he estado buscando el espíritu navideño... y solo encontré ofertas en Amazon'.",
    "Que tu Navidad sea tan perfecta como un filtro de Instagram... pero con más comida real."
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
const mensajeFinal = `¡Hola <span class="nombre-resaltado">${nombre}</span>! ${mensajeAleatorio}`;

    // 4. Mostrar el mensaje en el div de resultado y agregar la clase de animación
    resultadoDiv.innerHTML = `<p class="mensaje-resaltado">${mensajeFinal}</p>`;

    // Opcional: limpiar el campo de entrada
    // document.getElementById('nombreInput').value = '';
}