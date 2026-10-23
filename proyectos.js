/* ══════════════════════════════════════════════════════════════
   Vigolo Web Studio — proyectos.js
   Todo el portfolio y los precios salen de este archivo.

   Para sumar un proyecto, copiá un bloque y cambiá los datos:
   - tipo: "cliente" (web real en producción) o "demo" (modelo por rubro)
   - img: foto local en /img, en minúscula, sin tildes ni espacios (.webp ~800px)
   - descripcion: el problema que se resolvió, en una frase
   - destacado: true para que aparezca grande arriba (solo clientes)
   El orden del array es el orden en pantalla. El primer cliente destacado
   es el que se ve en el celular del hero.
══════════════════════════════════════════════════════════════ */

const PROYECTOS = [
  // ── CLIENTES ─────────────────────────────────────────────
  {
    nombre: "Pichona Panadería",
    rubro: "Panadería",
    tipo: "cliente",
    url: "https://pichonapanaderia.com",
    img: "img/pichona.webp",
    descripcion: "Dejó el link de Canva por una web propia con dominio y un panel para actualizar precios ella misma.",
    destacado: true
  },
  {
    nombre: "Tacos Ruth",
    rubro: "Gastronomía",
    tipo: "cliente",
    url: "https://tacosruth.com",
    img: "img/tacos-ruth.webp",
    descripcion: "Menú online con carrito: el pedido llega armado al WhatsApp con dirección y forma de pago.",
    destacado: true
  },
  {
    nombre: "Fitness Training Zone",
    rubro: "Fitness",
    tipo: "cliente",
    url: "https://fitnesstrainingzone.com",
    img: "img/fitness-training-zone.webp",
    descripcion: "Dejó de vender cursos por mensajes sueltos: los alumnos eligen el plan, se inscriben y cursan online.",
    destacado: true
  },
  {
    nombre: "Industrial CDM",
    rubro: "Industria",
    tipo: "cliente",
    url: "https://vigolomarketing-tech.github.io/industrial-cdm/",
    img: "img/industrial-cdm.webp",
    descripcion: "Un servicio técnico muy específico que ahora se explica solo y llega a empresas que antes no lo encontraban.",
    destacado: true
  },
  {
    nombre: "Elizard Deco",
    rubro: "Herrería",
    tipo: "cliente",
    url: "https://elizarddeco.com",
    img: "img/elizard-deco.webp",
    descripcion: "Pérgolas, cerramientos y portones con fotos reales y reseñas de Google que llevan la consulta a WhatsApp.",
    destacado: false
  },
  {
    nombre: "Electricidad",
    rubro: "Electricidad",
    tipo: "cliente",
    url: "https://vigolomarketing-tech.github.io/vigolo-electricidad/",
    img: "img/electricidad.webp",
    descripcion: "Aparece cuando buscan electricista en zona sur y las consultas le llegan directo por WhatsApp.",
    destacado: false
  },
  {
    nombre: "Herrajes Darío",
    rubro: "Ferretería",
    tipo: "cliente",
    url: "https://herrajesdario.com.ar",
    img: "img/placeholder.webp",
    descripcion: "Catálogo por categoría y marca para que carpinteros y fabricantes consulten precios sin llamar.",
    destacado: false
  },

  // ── DEMOS ────────────────────────────────────────────────
  {
    nombre: "Metales Sur",
    rubro: "Metalúrgica",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/Metales-sur/",
    img: "img/metales-sur.webp",
    descripcion: "Para que los paneles a medida se vean en un catálogo y no haya que explicarlos foto por foto en el chat.",
    destacado: false
  },
  {
    nombre: "Lumina Dental Studio",
    rubro: "Salud",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/clinica-dental-demo/",
    img: "img/clinica-dental.webp",
    descripcion: "Para que el paciente pida turno online sin llamar en horario de consultorio.",
    destacado: false
  },
  {
    nombre: "VitaVet",
    rubro: "Salud",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/demo-veterinaria-/",
    img: "img/veterinaria.webp",
    descripcion: "Para que las urgencias y los turnos no dependan de que alguien atienda el teléfono.",
    destacado: false
  },
  {
    nombre: "Luma Raíces",
    rubro: "Inmobiliaria",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/demo-inmobiliaria-/",
    img: "img/inmobiliaria.webp",
    descripcion: "Para que el interesado filtre propiedades solo y escriba cuando ya sabe qué quiere.",
    destacado: false
  },
  {
    nombre: "Pinturas Báez",
    rubro: "Servicios",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/Pinturas-baez-/",
    img: "img/placeholder.webp",
    descripcion: "Para que los consorcios vean trabajos anteriores y pidan presupuesto sin vueltas.",
    destacado: false
  },
  {
    nombre: "Vigolo Store",
    rubro: "Comercio",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/demo-iphone/",
    img: "img/iphone-landing.webp",
    descripcion: "Para dejar de mandar la lista de precios por chat a cada persona que pregunta.",
    destacado: false
  },
  {
    nombre: "Energía Positiva",
    rubro: "Comercio",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/energiapositiva-fragancias/",
    img: "img/placeholder.webp",
    descripcion: "Para que el cliente arme el pedido de perfumes solo y llegue completo por WhatsApp.",
    destacado: false
  },
  {
    nombre: "PulseFit",
    rubro: "Fitness",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/vigolo-web-demos-/gym/",
    img: "img/gym.webp",
    descripcion: "Para que los planes y horarios estén claros y la gente se anote sin preguntar lo mismo cada vez.",
    destacado: false
  },
  {
    nombre: "Roble & Navaja",
    rubro: "Belleza",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/vigolo-web-demos-/barberia/",
    img: "img/barberia.webp",
    descripcion: "Para que los turnos se reserven solos y la agenda no viva en el WhatsApp del barbero.",
    destacado: false
  },
  {
    nombre: "Lumière",
    rubro: "Belleza",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/vigolo-web-demos-/estetica/",
    img: "img/estetica.webp",
    descripcion: "Para mostrar los tratamientos con precio y que la clienta reserve sin esperar respuesta.",
    destacado: false
  },
  {
    nombre: "Andes Outdoor",
    rubro: "Turismo",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/excrusiones-turismo-aventura/",
    img: "img/excursiones-turismo.webp",
    descripcion: "Para vender excursiones a viajeros de afuera sin depender de las agencias.",
    destacado: false
  },
  {
    nombre: "Cabañas Los Coihues",
    rubro: "Turismo",
    tipo: "demo",
    url: "https://vigolomarketing-tech.github.io/caba-as-hosteria/",
    img: "img/hosteria.webp",
    descripcion: "Para recibir reservas directas y no pagar comisión por cada noche vendida.",
    destacado: false
  }
];

/* Precios: cambiá los montos o lo que incluye cada plan. */
const PRECIOS = {
  planes: [
    {
      nombre: "Web profesional",
      desde: 300000,
      modalidad: "pago único",
      incluye: [
        "Diseño a medida de tu negocio",
        "Pedidos o consultas por WhatsApp",
        "Dominio el primer año",
        "Publicación"
      ],
      destacado: false
    },
    {
      nombre: "Web con panel",
      desde: 400000,
      modalidad: "pago único",
      incluye: [
        "Todo lo de Web profesional",
        "Panel para actualizar precios y productos vos mismo"
      ],
      destacado: true
    }
  ],
  nota: "50% para arrancar, 50% al entregar."
};
