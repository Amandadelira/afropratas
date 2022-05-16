import {Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'
import Login from './componentes/pages/Login'
import LayoutDefault from './componentes/pages/LayoutDefault'

function App() {
 return (

            <Routes>
               <Route path="/" element={<LayoutDefault />} >
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/login" element={<Login />} />
               </Route>
             </Routes>
   
 )
}

export default App;