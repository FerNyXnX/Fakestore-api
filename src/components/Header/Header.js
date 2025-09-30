import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  // Estado inicial: lee de localStorage o detecta preferencia del SO
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    // Detecta preferencia del sistema (opcional)
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Aplica el tema al <html> y guarda en localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alterna entre claro/oscuro
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.brand}>
          <Link to="/">FakeStore</Link>
        </h1>

        <nav aria-label="Principal">
          <ul className={styles.nav}>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/categories">Categorías</NavLink></li>
            <li><NavLink to="/cart">Carrito</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className={styles.toggle}
          aria-label="Cambiar tema"
        >
          {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
        </button>
      </div>
    </header>
  );
}