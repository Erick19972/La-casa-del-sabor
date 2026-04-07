import './App.css';
import { useEffect, useState } from "react";

// 🔥 IMPORTS
import hamburguesa from "./assets/Hamburguesa.jpeg";
import club from "./assets/Club Sandwich.jpeg";
import hotdog from "./assets/Hotdog.jpeg";
import queso from "./assets/QuesoCarne.jpeg";
import frappe from "./assets/Frappé.jpeg";
import hero from "./assets/Hamburguesa.jpeg";
import logo from "./assets/Logotipo.png"; // 👈 tu imagen
import { Link } from "react-router-dom";



function App() {
  const [menu, setMenu] = useState([]);

  // 🔥 IMPORTANTE: formato correcto WhatsApp
  const telefono = "7341272782";

  useEffect(() => {
    setMenu([
      {
        id: 1,
        nombre: "Hamburguesas con papas",
        precio: 100,
        imagen: hamburguesa,
        descripcion: "Jugosa hamburguesa con papas crujientes 🍟",
      },
      {
        id: 2,
        nombre: "Queso carne con papas",
        precio: 100,
        imagen: queso,
        descripcion: "El favorito de la casa 🔥",
      },
      {
        id: 3,
        nombre: "Club sandwich con papas",
        precio: 70,
        imagen: club,
        descripcion: "Clásico sandwich lleno de sabor 🥪",
      },
      {
        id: 4,
        nombre: "Hot dog con tocino y papas",
        precio: 75,
        imagen: hotdog,
        descripcion: "Con papas y toppings deliciosos 🌭",
      },
      {
        id: 5,
        nombre: "Frappé galleta oreo",
        precio: 80,
        imagen: frappe,
        descripcion: "Frappé cremoso con galleta Oreo 🍫",
      },
    ]);
  }, []);

  // 🔥 FUNCIÓN WHATSAPP
  const ordenarWhatsApp = (item) => {
    const mensaje = `Hola 👋 quiero ordenar:\n\n🍽️ ${item.nombre}\n💲 $${item.precio}\n\n🚚 Envío a domicilio`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  // 🔥 STATE (ponlo arriba en tu componente App)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="app">





      {/* 🔥 ESPECIALIDADES FULL WIDTH */}
      <section className="especialidades">
        <h2 className="titulo">🔥 Especialidades</h2>

        <div className="grid">
          {menu.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.imagen} alt={item.nombre} />

              <h3>{item.nombre}</h3>

              <p className="descripcion">
                {item.descripcion}
              </p>

              <p className="precio">
                ${item.precio}
              </p>

              <button
                className="btn-ordenar"
                onClick={() => ordenarWhatsApp(item)}
              >
                📲 Ordenar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>


      <section className="menu-elegante">
        <h2 className="titulo-menu">MENÚ</h2>

        <div className="menu-columns">

          {/* 🔥 COLUMNA IZQUIERDA */}
          <div className="menu-col">

            <h3 className="subtitulo">ESPECIALIDADES</h3>

            <div className="menu-item">
              <div className="menu-header">
                <span>Hamburguesas con papas</span>
                <span>$100</span>
              </div>
              <p className="menu-desc">
                Jugosa hamburguesa con papas crujientes 🍟
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Queso carne con papas</span>
                <span>$100</span>
              </div>
              <p className="menu-desc">
                El favorito de la casa con queso derretido 🔥
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Choriqueso con papas</span>
                <span>$80</span>
              </div>
              <p className="menu-desc">
                Delicioso chorizo con queso acompañado de papas
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Club sandwich con papas</span>
                <span>$70</span>
              </div>
              <p className="menu-desc">
                Clásico sandwich lleno de sabor 🥪
              </p>
            </div>

          </div>

          {/* 🔥 COLUMNA DERECHA */}
          <div className="menu-col">

            <h3 className="subtitulo">HOT DOGS</h3>

            <div className="menu-item">
              <div className="menu-header">
                <span>Hot dog con tocino</span>
                <span>$50</span>
              </div>
              <p className="menu-desc">
                Hot dog con tocino crujiente 🌭
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Hot dog con tocino y papas</span>
                <span>$75</span>
              </div>
              <p className="menu-desc">
                Incluye papas y toppings deliciosos 🍟
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Orden de papas</span>
                <span>$50</span>
              </div>
              <p className="menu-desc">
                Papas fritas doradas y crujientes
              </p>
            </div>

            <h3 className="subtitulo">BEBIDAS</h3>

            <div className="menu-item">
              <div className="menu-header">
                <span>Frappé capuchino</span>
                <span>$70</span>
              </div>
              <p className="menu-desc">
                Refrescante frappé con sabor capuchino ☕
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Frappé mokachino</span>
                <span>$70</span>
              </div>
              <p className="menu-desc">
                Delicioso frappé con toque de chocolate 🍫
              </p>
            </div>

            <div className="menu-item">
              <div className="menu-header">
                <span>Frappé galleta oreo</span>
                <span>$80</span>
              </div>
              <p className="menu-desc">
                Cremoso frappé con galleta Oreo
              </p>
            </div>

          </div>

        </div>
      </section>


      <footer className="footer-dark">

        <div className="footer-content">

          {/* 🔥 SOBRE NOSOTROS */}
          <div className="footer-col">
            <h2>🍔 La Casa del Sabor</h2>
            <p>
              En La Casa del Sabor nos dedicamos a ofrecer platillos deliciosos
              preparados con ingredientes frescos y el auténtico sazón casero.
              Cada hamburguesa, hot dog y bebida está hecha con pasión para brindarte
              una experiencia única llena de sabor.
            </p>

            <div className="contacto">
              <p>📞 777 155 4687</p>
              <p>📞 734 127 2782</p>
            </div>

            <div className="direccion">
              <p>📍 Col. Josefa Ortiz de Domínguez</p>
              <p>Calle Ignacio Allende, 62785</p>
            </div>
          </div>

          {/* 🔥 MAPA */}
          <div className="footer-col mapa">
            <iframe
              src="https://www.google.com/maps?q=Ignacio+Allende+62785+Morelos&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* 🔥 COPYRIGHT */}
        <div className="footer-bottom">
          © 2026 La Casa del Sabor — Todos los derechos reservados
        </div>

      </footer>

      {/* 🔥 BOTÓN WHATSAPP CON ICONO REAL */}
      <a
        href={`https://wa.me/${telefono}?text=${encodeURIComponent("Hola 👋 quiero hacer un pedido")}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
        >
          <path d="M16.04 2.003C8.83 2.003 3.003 7.83 3.003 15.04c0 2.66.78 5.14 2.12 7.23L3 30l7.91-2.06c2.03 1.11 4.35 1.7 6.73 1.7 7.21 0 13.04-5.83 13.04-13.04 0-7.21-5.83-13.04-13.04-13.04zm0 23.85c-2.18 0-4.22-.59-5.97-1.62l-.43-.25-4.7 1.23 1.25-4.57-.28-.47c-1.11-1.8-1.69-3.86-1.69-5.96 0-6.36 5.17-11.53 11.53-11.53s11.53 5.17 11.53 11.53-5.17 11.53-11.53 11.53zm6.33-8.57c-.35-.17-2.07-1.02-2.39-1.14-.32-.12-.55-.17-.78.17-.23.35-.89 1.14-1.09 1.37-.2.23-.4.26-.75.09-.35-.17-1.49-.55-2.84-1.75-1.05-.94-1.75-2.1-1.96-2.45-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.78-1.87-1.07-2.56-.28-.68-.56-.59-.78-.6-.2-.01-.43-.01-.66-.01s-.6.09-.91.43c-.32.35-1.2 1.17-1.2 2.85 0 1.68 1.23 3.3 1.4 3.53.17.23 2.41 3.67 5.84 5.14.82.35 1.46.56 1.96.71.82.26 1.56.22 2.15.13.66-.1 2.07-.85 2.36-1.67.29-.82.29-1.53.2-1.67-.09-.14-.32-.23-.66-.4z" />
        </svg>
      </a>
    </div>
  );
}

export default App;