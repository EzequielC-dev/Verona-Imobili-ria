import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/home/home';
import Locacoes from './pages/locacoes/index';
import Contato from './pages/contato/contato';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/contato' element={<Contato></Contato>}></Route>
                <Route path='/locacoes' element={<Locacoes></Locacoes>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;