import "./Nosotros.css";

function Nosotros() {
  return (
    <div className="nosotros">

      {/* 🔥 HERO */}
      <section className="nosotros-hero">
        <h1>Sobre Nosotros</h1>
        <p>Pasión por el sabor, calidad en cada platillo 🍔🔥</p>
      </section>

      {/* 🔥 CONTENIDO */}
      <section className="nosotros-content">

        {/* TEXTO */}
        <div className="nosotros-texto">
          <h2>🍔 La Casa del Sabor</h2>

          <p>
            En <strong>La Casa del Sabor</strong> nos apasiona ofrecer
            experiencias deliciosas a través de nuestros platillos.
            Cada hamburguesa, hot dog y bebida está preparada con
            ingredientes frescos y el auténtico sazón casero.
          </p>

          <p>
            Nuestro objetivo es brindar calidad, sabor y un servicio
            excepcional para que cada cliente disfrute al máximo cada bocado.
          </p>

          <p>
            Ya sea para comer en casa o compartir con amigos,
            somos tu mejor opción en comida rápida 🍟🔥
          </p>
        </div>

        {/* INFO */}
        <div className="nosotros-info">

          <div className="info-card">
            <h3>📍 Ubicación</h3>
            <p>Col. Josefa Ortiz de Domínguez</p>
            <p>Morelos, México</p>
          </div>

          <div className="info-card">
            <h3>📞 Contacto</h3>
            <a href="tel:+5217341272782">
              +52 1 734 127 2782
            </a>
          </div>

          <div className="info-card">
            <h3>🕒 Horario</h3>
            <p>Lunes a Domingo</p>
            <p>6:00 PM - 11:00 PM</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Nosotros;