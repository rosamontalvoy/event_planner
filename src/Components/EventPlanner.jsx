 import React from 'react';
 import './EventPlanner.css'; // Importar archivo CSS para estilos
 import Footer from './Footer';
 const EventPlanner = () => {
 return (
     <div className="event-planner-container">
         <header>
             <h1>Bienvenido a Event Planner</h1>
         </header>
         <section className="description">
             <p>
                 Planifica y organiza tus eventos sin esfuerzo con Event Planner. Desde
                 cumpleaños hasta reuniones corporativas, te tenemos cubierto.
             </p>
             <button className="get-started-button">Comenzar</button>
          </section>
          <section className="events_categories">
             <ul>
                 <h2>Eventos Sociales:</h2>
                 <li>Fiestas de cumpleaños</li>
                 <li>Celebraciones de aniversario</li>
                 <li>Recepciones de boda</li>
                 <li>Baby showers</li>
                 <li>Fiestas de graduación</li>
                 <li>Reuniones familiares</li>
             </ul>
             <ul>
                 <h2>Eventos de Entretenimiento:</h2>
                 <li>Conciertos</li>
                 <li>Festivales de música</li>
                 <li>Proyecciones de películas</li>
                 <li>Espectáculos de comedia</li>
                 <li>Exhibiciones de arte</li>
                 <li>Eventos culturales</li>
             </ul>
             <ul>
                 <h2>Eventos Comunitarios:</h2>
                 <li>Eventos de recaudación de fondos</li>
                 <li>Galas benéficas</li>
                 <li>Campañas de voluntariado</li>
                 <li>Fiestas de barrio</li>
                 <li>Festivales comunitarios</li>
                 <li>Celebraciones culturales</li>
             </ul>
         </section>
         <section className="features">
             <h2>Características</h2>
             <ul>
                 <li>Creación y gestión de eventos fácil</li>
                 <li>Plantillas de eventos personalizables</li>
                 <li>Gestión de listas de invitados</li>
                 <li>Colaboración en tiempo real</li>
                 <li>Recordatorios y notificaciones</li>
             </ul>
         </section>
         <section className="testimonials">
             <h2>Testimonios</h2>
             <div className="testimonial">
                 <p>"Event Planner hizo que organizar mi boda fuera muy fácil. ¡Altamente recomendado!"</p>
                 <p className="author">- Emily Johnson</p>
             </div>
             <div className="testimonial">
                 <p>"Utilizo Event Planner para todos mis eventos corporativos. ¡Me ahorra tanto tiempo y esfuerzo!"</p>
                 <p className="author">- John Smith</p>
             </div>
         </section>
         <section className="contact">
             <h2>Contáctanos</h2>
             <form>
                 <input type="text" placeholder="Nombre" />
                 <input type="email" placeholder="Correo electrónico" />
                 <textarea placeholder="Mensaje"></textarea>
                 <button className="submit-button">Enviar</button>
             </form>
         </section>
         <Footer/>
     </div>
    );
 };

  export default EventPlanner;