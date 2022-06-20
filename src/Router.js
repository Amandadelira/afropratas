import {Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'
import Login from './componentes/pages/Login'
import LayoutDefault from './componentes/pages/LayoutDefault'
import Admin from './componentes/pages/Admin'
//import FormCadastros from './componentes/pages/Cadastro'
import AuthProvider from './provides/authProvider'
import CadastraProduto from './componentes/layout/CadastraProduto'
import EditaProduto from './componentes/layout/EditaProduto'

function Router() {
 return (
   <AuthProvider>
            <Routes>
               <Route path="/" element={<LayoutDefault />} >
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/login" element={<Login />} />
               </Route>

                    <Route path='/admin' element={<Admin />}>
                        <Route path="edita/:produtoId" element={<EditaProduto />} />
                        <Route path="/cadastra-produto" element={<CadastraProduto />} />
                        {/* <Route path="/deleta-produto" element={<DeletaProduto />}/> */}
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes> 
    </AuthProvider>
 )
}

export default Router;