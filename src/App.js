import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './componentes/pages/Home'
import Company from './componentes/pages/Company'
import Contact from './componentes/pages/Contact'
import NewProject from './componentes/pages/NewProject'

import Container from './componentes/layout/Container'
function App() {
 return (
         <Router>
            <div>
               <Link to="/">Home</Link>
               <Link to="/company">Equipe</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/newproject">Novo Projeto</Link>
            </div>
            <Switch>
               <Container>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route exact path="/company">
                     <Company />
                  </Route>
                  <Route exact path="/contact">
                     <Contact />
                  </Route>
                  <Route exact path="/newproject">
                     <NewProject />
                  </Route>
               </Container>
            </Switch>
            <p>Footer</p>
         </Router>
  )
}

export default App;