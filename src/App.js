import {Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'
import Login from './componentes/pages/Login'
import LayoutDefault from './componentes/pages/LayoutDefault'
import Admin from './componentes/pages/Admin'
//import FormCadastros from './componentes/pages/Cadastro'
import AuthProvider from './provides/authProvider'
import CadastraProduto from './componentes/pages/CadastraProduto'
import EditaProduto from './componentes/pages/EditaProduto'
import Router from './Router'
function App() {
 return (
  //  <AuthProvider>
  //           <Routes>
  //              <Route path="/" element={<LayoutDefault />} >
  //                 <Route path="/home" element={<Home />} />
  //                 <Route path="/cadastro" element={<Cadastro />} />
  //                 <Route path="/login" element={<Login />} />
  //                 <Route path="/Admin" element={<Admin />} />
  //                 <Route path="/cadastra-produto" element={<CadastraProduto />} />
  //                 <Route path="/EditaProduto" element={<EditaProduto />} />
  //              </Route>
  //            </Routes>
  //  </AuthProvider>
  <Router />
 )
}

export default App;