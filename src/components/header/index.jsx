import { useState, useEffect } from "react";
import "../../style/animacoes.css";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div>
        <header className="flex justify-between bg-black text-slate-200 items-center p-3 fixed z-50 w-full">
          <img
            className=" object-contain"
            src="./src/assets/Logo Verona Negócios.png"
            alt="Verona Imobiliaria Logo"
          />

          <nav className="flex items-center text-sm font-bold uppercase list-none gap-32">
            <Link to="/">Home</Link>
            <Link to="/locacoes">Locações</Link>
            <Link to="/contato">Contato</Link>
            <div>
              <div
                className={`burger ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <img
                  className="mr-12 cursor-pointer"
                  src="./src/assets/Menu SVG.png"
                  alt="Menu SVG"
                  id="menu"
                />
              </div>

              <nav className={`menu-options ${isOpen ? "show" : ""}`}>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/sobre'>Sobre</Link>
              </nav>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
