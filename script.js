const proyectos = [
    {
        titulo: "Historias de café",
        descripcion: "Plataforma premium de café de origen. Incluye carrito de compras con funcionalidad de pasarela de pagos de Mercado Pago realizada con Spring Boot, gestión de usuarios con LocalStorage y catálogo dinámico.",
        tech: ["Vue.js", "Spring Boot", "Mercado Pago", "Render"],
        link: "https://proyecto-historiasdecafe-frontend-vue-1.onrender.com/catalogo",
        github: "https://github.com/ZullyTamayoM",
        destacado: true,
        icono: "bi-cup-hot" // Icono de taza
    },
    {
        titulo: "Viaje Espacial",
        descripcion: "Explorador interactivo de misiones espaciales. Consume datos astronómicos para visualizar información sobre el cosmos de forma dinámica.",
        tech: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
        link: "https://zullytamayom.github.io/ViajeEspacial/", 
        github: "https://github.com/zullytamayom/ViajeEspacial",
        destacado: false,
        icono: "bi-rocket-takeoff" // Icono de cohete
    },
    {
        titulo: "API REST Spring Boot",
        descripcion: "Sistema de gestión de inventarios con seguridad JWT y persistencia en base de datos relacional PostgreSQL.",
        tech: ["Java", "Spring Boot", "PostreSQL", "JWT"],
        link: "#", // Sin demo
        github: "https://github.com/ZullyTamayoM",
        destacado: false,
        icono: "bi-database-fill-gear" // Icono de base de datos/config
    }
];

function cargarProyectos() {
    const contenedor = document.getElementById('lista-proyectos');
    if (!contenedor) return;
    
    contenedor.innerHTML = ""; // Limpiamos contenedor

    proyectos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        
        const borderStyle = p.destacado ? 'border: 1px solid var(--secondary); transform: scale(1.02);' : '';
        const badgeDestacado = p.destacado ? '<span class="badge bg-primary mb-2">Proyecto Principal</span>' : '';
        
        // Lógica del botón de Demo
        const demoButton = p.link !== "#" 
            ? `<a href="${p.link}" target="_blank" class="btn btn-sm btn-main rounded-pill px-4">Ver Demo Live</a>`
            : `<button class="btn btn-sm btn-outline-secondary rounded-pill px-4" disabled style="cursor: not-allowed; opacity: 0.5;">Próximamente</button>`;

        // Lógica del tag "Live" (solo si tiene link)
        const liveTag = p.link !== "#" 
            ? `<span class="text-success small"><i class="bi bi-broadcast"></i> Live</span>` 
            : `<span class="text-muted small">En desarrollo</span>`;

        card.innerHTML = `
            <div class="glass-card p-4 h-100 d-flex flex-column" style="${borderStyle}">
                ${badgeDestacado}
                <div class="mb-3 d-flex justify-content-between align-items-start">
                    <i class="bi ${p.icono} text-secondary fs-1"></i>
                    ${liveTag}
                </div>
                <h4 class="fw-bold mb-3">${p.titulo}</h4>
                <p class="opacity-75 small flex-grow-1">${p.descripcion}</p>
                <div class="mt-3 mb-4">
                    ${p.tech.map(t => `<span class="skill-tag" style="font-size: 0.65rem; padding: 4px 10px;">${t}</span>`).join('')}
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <a href="${p.github}" target="_blank" class="text-white hover-up" title="Ver Código"><i class="bi bi-github fs-4"></i></a>
                    ${demoButton}
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', cargarProyectos);