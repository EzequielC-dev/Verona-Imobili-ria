import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Home from './pages/home';
import Locacoes from './pages/locacoes/index'
import Contato from './pages/contato/index'
import Sobre from './pages/sobre/index'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/locacoes' element={<Locacoes></Locacoes>}></Route>
                <Route path='/contato' element={<Contato></Contato>}></Route>
                <Route path='/sobre' element={<Sobre></Sobre>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;