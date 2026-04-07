import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import hero from "../../assets/Hamburguesa.jpeg";
import logo from "../../assets/Logotipo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 🔥 Cierra menú al cambiar de ruta (UX PRO)
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={isHome ? "header" : "header-small"}
      style={isHome ? { backgroundImage: `url(${hero})` } : {}}
    >
      {/* 🔥 OVERLAY SOLO EN HOME */}
      <div className={isHome ? "overlay" : ""}>
        
        <nav className="navbar">
          
          <img src={logo} alt="La Casa del Sabor" className="logo-img" />

          <button
            className={`hamburger ${isHome ? "hamburger-home" : "hamburger-menu"} ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* 🔥 CLASE DINÁMICA SEGÚN PÁGINA */}
          <div
            className={`nav-right ${isHome ? "nav-home" : "nav-menu"} ${
              menuOpen ? "active" : ""
            }`}
          >
            <ul className="menu-nav">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
            </ul>

            <button className="btn-contacto">
              📞 419 133 0389
            </button>
          </div>
        </nav>

        {/* 🔥 HERO SOLO EN HOME */}
        {isHome && (
          <div className="hero-content">
            <h1>Bienvenido a</h1>
            <h1 className="titulo-grande">La Casa del Sabor</h1>
            <p>¡Los mejores platillos preparados con amor! 🍔🔥</p>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;