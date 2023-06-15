import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Navbar } from '../components/Navbar';
import { Cadastro } from '../pages/cadastro';
import { Login } from '../pages/login'


export const AppRoutes = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/servicos' exact element={<Home />} />
                <Route path='/cadastro' exact element={<Cadastro />} />
            </Routes>
        </Router> 
    );
} 
