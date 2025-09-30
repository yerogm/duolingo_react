const niveles = [
    {
        nivel: 1,
        nombre: "Básico 1",
        descripcion: "Saludos y frases simples.",
        preguntas: [
            {
                pregunta: "¿Cómo se dice 'hola' en inglés?",
                opciones: ["hello", "bye", "thanks", "please"],
                respuesta: "hello",
            },
            {
                pregunta: "¿Cómo se dice 'gracias' en inglés?",
                opciones: ["hello", "bye", "thanks", "please"],
                respuesta: "thanks",
            },
        ],
        recompensa: "10 XP",
        desbloquea: 2,
    },
    {
        nivel: 2,
        nombre: "Básico 2",
        descripcion: "Presentaciones y despedidas.",
        preguntas: [
            {
                pregunta: "¿Cómo se dice 'adiós' en inglés?",
                opciones: ["hello", "bye", "thanks", "please"],
                respuesta: "bye",
            },
            {
                pregunta: "¿Cómo se dice 'por favor' en inglés?",
                opciones: ["hello", "bye", "thanks", "please"],
                respuesta: "please",
            },
        ],
        recompensa: "15 XP",
        desbloquea: 3,
    },
    {
        nivel: 3,
        nombre: "Frases comunes",
        descripcion: "Frases útiles para el día a día.",
        preguntas: [
            {
                pregunta: "¿Cómo se dice 'buenos días' en inglés?",
                opciones: [
                    "good morning",
                    "good night",
                    "good afternoon",
                    "goodbye",
                ],
                respuesta: "good morning",
            },
            {
                pregunta: "¿Cómo se dice 'buenas noches' en inglés?",
                opciones: [
                    "good morning",
                    "good night",
                    "good afternoon",
                    "goodbye",
                ],
                respuesta: "good night",
            },
        ],
        recompensa: "20 XP",
        desbloquea: 4,
    },
    {
        nivel: 4,
        nombre: "Comida",
        descripcion: "Vocabulario sobre alimentos.",
        preguntas: [
            {
                pregunta: "¿Cómo se dice 'manzana' en inglés?",
                opciones: ["apple", "banana", "orange", "grape"],
                respuesta: "apple",
            },
            {
                pregunta: "¿Cómo se dice 'naranja' en inglés?",
                opciones: ["apple", "banana", "orange", "grape"],
                respuesta: "orange",
            },
        ],
        recompensa: "25 XP",
        desbloquea: 5,
    },
    {
        nivel: 5,
        nombre: "Colores",
        descripcion: "Aprende los colores básicos.",
        preguntas: [
            {
                pregunta: "¿Cómo se dice 'rojo' en inglés?",
                opciones: ["red", "blue", "green", "yellow"],
                respuesta: "red",
            },
            {
                pregunta: "¿Cómo se dice 'azul' en inglés?",
                opciones: ["red", "blue", "green", "yellow"],
                respuesta: "blue",
            },
        ],
        recompensa: "30 XP",
        desbloquea: null,
    },
];

export default niveles;
