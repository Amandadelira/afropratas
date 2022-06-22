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
import LayoutDefaultAdm from './componentes/pages/LayoutDefaultAdm'
import DeletaProduto from './componentes/pages/DeletaProduto'
function Router() {
 return (
   <AuthProvider>
            <Routes>
               <Route path="/" element={<LayoutDefault />} >
                  <Route index element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/login" element={<Login />} />
               </Route>

                    <Route path='admin' element={<LayoutDefaultAdm />}>
                        <Route index element={<Admin />} />
                        <Route path="edita/:productId" element={<EditaProduto />} />
                        <Route path="cadastra-produto" element={<CadastraProduto />} />
                        <Route path="deleta-produto/:productId" element={<DeletaProduto />}/>
                </Route>

                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes> 
    </AuthProvider>
 )
}

export default Router;