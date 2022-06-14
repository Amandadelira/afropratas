import {Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'
import Login from './componentes/pages/Login'
import LayoutDefault from './componentes/pages/LayoutDefault'
//import FormCadastros from './componentes/pages/Cadastro'
import AuthProvider from './provides/authProvider'

function App() {
 return (
   <AuthProvider>
            <Routes>
               <Route path="/" element={<LayoutDefault />} >
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/login" element={<Login />} />
               </Route>
             </Routes>
   </AuthProvider>
 )
}

export default App;