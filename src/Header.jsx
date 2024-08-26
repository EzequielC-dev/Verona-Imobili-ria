import { useState } from 'react'
import './css/animacoes.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <header className='flex justify-between bg-black text-slate-200 items-center p-3'>
          <img className=' object-contain' src="./src/assets/Logo Verona Negócios.png" alt="Verona Imobiliaria Logo" />
          
          <nav className='flex items-center text-xl list-none gap-24'>
            <li><a href="">Locações</a></li>
            <li><a href="">Categoria</a></li>
            <li><a href="">Contato</a></li>
            <img className='mr-12' src="./src/assets/Menu SVG.png" alt="Menu SVG" id='menu'/>
          </nav>
        </header>
     </div>
    </>
  )
}

export default Header
