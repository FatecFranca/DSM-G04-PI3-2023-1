import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Home } from '../pages/home'
import { Navbar } from '../components/Navbar';


export const AppRoutes = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/cadastro' exact element={<Cadastro />} />
                <Route path='/cadastro2' exact element={<Cadastro2 />} />
            </Routes>
        </Router> 
    );
} 