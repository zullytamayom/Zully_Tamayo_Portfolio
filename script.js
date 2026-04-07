const proyectos = [
    {
        titulo: "☕ Historias de Café",
        tag: "En Desarrollo",
        desc: "Plataforma digital para conectar productores regionales con mercados globales.",
        tech: "HTML5, CSS3, Bootstrap 5"
    },
    {
        titulo: "🔤 ABC Challenge",
        tag: "En Desarrollo",
        desc: "Aplicación interactiva de flashcards con animaciones 3D y lógica de estados.",
        tech: "JavaScript, CSS Animations"
    },
    {
        titulo: "💡 SocialMeli",
        tag: "Backend Experience",
        desc: "Red social desarrollada en equipo para MELI. Migrando de memoria a MySQL.",
        tech: "Java, Spring Boot, Angular"
    },
    {
        titulo: "📊 Integración HubSpot",
        tag: "Data & Automation",
        desc: "Automatización de flujos de trabajo y carga de datos en PostgreSQL para Looker Studio.",
        tech: "Python, SQL, APIs"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('lista-proyectos');
    if (contenedor) {
        proyectos.forEach(p => {
            const card = `
                <div class="col-md-6 col-lg-3">
                    <div class="glass-card d-flex flex-column h-100">
                        <span class="small text-primary mb-2 d-block fw-bold">${p.tag}</span>
                        <h3 class="h5 mb-3 text-white">${p.titulo}</h3>
                        <p class="small opacity-75 flex-grow-1">${p.desc}</p>
                        <p class="mt-3 text-secondary" style="font-size: 0.8rem;"><strong>Stack:</strong> ${p.tech}</p>
                    </div>
                </div>
            `;
            contenedor.innerHTML += card;
        });
    }
});