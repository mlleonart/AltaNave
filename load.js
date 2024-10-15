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

   // Función para cargar los datos del coche
        async function loadCarData(carId) {
            try {
                const selectedCar = initialDeck.find(car => car.id === carId);
                
                if (selectedCar) {
                    // Asignar la imagen de fondo al contenedor bg-photo
                    const bgPhotoContainer = document.querySelector('.bg-photo');
                    bgPhotoContainer.style.backgroundImage = `url(${selectedCar.imagen})`;
                    
                    const container = document.getElementById('container');
                    container.innerHTML = renderCarCard(selectedCar);
                
                    // Actualizar el HTML con los datos del coche
                    document.getElementById('car-title').textContent = `Detalles y Especificaciones para el Modelo: ${selectedCar.chasis} ${selectedCar.año}`;
                    document.getElementById('car-specs').textContent = `Características Técnicas del Vehículo ${selectedCar.propulsion}: ${selectedCar.velocidad} Km/h, ${selectedCar.potencia} HP, ${selectedCar.aceleracion} s`;
                } else {
                    console.error('Coche no encontrado');
                }
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        }



        // Cargar la ficha del coche con ID 1 (Porsche 911 Carrera 4)
     //   loadCarData(1);
