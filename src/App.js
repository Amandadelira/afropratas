import {Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'
import Logar from './componentes/pages/Logar'
import Container from './componentes/layout/Container'
import LayoutDefault from './componentes/pages/LayoutDefault'

function App() {
 return (
   <Container customClass="min-height">
            <Routes>
               <Route path="/" element={<LayoutDefault />} >
                  <Route path="/home" element={<Home />} />
                  <Route path="/cadastro" element={<Cadastro />} />
                  <Route path="/logar" element={<Logar />} />
               </Route>
             </Routes>
   </Container>
   
 )
}

export default App;