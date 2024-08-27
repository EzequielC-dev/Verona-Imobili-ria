import { useState } from 'react'
import '../css/animacoes.css'
import { Link } from "react-router-dom";

function Header() {
  const menuClicks = document.querySelector('.menu-click');
  function clickMenu(e) {
    e.target.classList.toggle('ativo');
    function menuClick(e) {
      menuClicks.classList.toggle('ativado');
    }
    menuClick()
  }


  return (
    <>
     <div>
        <header className='flex justify-between bg-black text-slate-200 items-center p-3 fixed z-50 w-full'>
          <img className=' object-contain' src="./src/assets/Logo Verona Negócios.png" alt="Verona Imobiliaria Logo"/>
          
          <nav className='flex items-center text-sm font-bold uppercase list-none gap-32 text-dimGray'>
            <Link to='/'>Home</Link>
            <Link to='/locacoes'>Locações</Link>
            <Link to='/contato'>Contato</Link>
            <img className='mr-12 cursor-pointer' src="./src/assets/Menu SVG.png" alt="Menu SVG" id='menu' onClick={clickMenu}/>
            <div className='menu-click'>
              <Link to='/'>Home</Link>
              <Link to='/locacoes'>Locações</Link>
              <Link to='/contato'>Contato</Link>
              <Link>Sobre</Link>
              <Link>Categorias</Link>
            </div>
          </nav>
        </header>
     </div>
    </>
  )
}

export default Header
