        // Función para renderizar la ficha del coche
        function renderCarCard(car) {
            return `
                <div class="card">
                    <div class="badge" style="background-color: ${car.badgeColor};">${car.tipo}</div>
                    <a title="${car.nombre} ${car.año}" href="${car.imagen}">
                        <picture>
                            <source srcset="${car.imagen}" type="image/webp">
                            <source srcset="${car.imagen}" type="image/avif">
                            <img src="${car.imagen}" alt="${car.nombre} ${car.año} características y ficha técnica" loading="lazy">
                        </picture>
                    </a> 
                    <div class="card-content">
                        <div class="card-title"><span class="editable" contenteditable="true">${car.nombre} ${car.chasis}</span></div>
                        <div class="card-subtitle"><span class="editable" contenteditable="true">${car.año}</span></div>
                        <div class="card-info"><span class="editable" contenteditable="true">${car.chasis} | ${car.propulsion}</span></div>
                        <div class="card-stats">
                            <div class="stat">
                                <div class="stat-title">Velocidad</div>
                                <div class="stat-value"><span class="editable" contenteditable="true">${car.velocidad}</span> km/h</div>
                            </div>
                            <div class="stat">
                                <div class="stat-title">Potencia</div>
                                <div class="stat-value"><span class="editable" contenteditable="true">${car.potencia}</span> HP</div>
                            </div>
                            <div class="stat">
                                <div class="stat-title">0-100 km/h</div>
                                <div class="stat-value"><span class="editable" contenteditable="true">${car.aceleracion}</span>s</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }



        // Cargar la ficha del coche con ID 1 (Porsche 911 Carrera 4)
     //   loadCarData(1);
