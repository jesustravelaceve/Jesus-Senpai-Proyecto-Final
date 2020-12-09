import './index.css';
import Loading from './componentes/Loading';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Suspense, lazy } from 'react';
const Inicio = lazy(() => import('./componentes/Inicio'));
const Menu = lazy(() => import('./componentes/Menu'));
const Orden = lazy(() => import('./componentes/Orden'));



function App() {

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/Ordenar">
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        </Route>

        <Route path="/ConsultarOrden">
          <Suspense fallback={<Loading />}>
            <Orden />
          </Suspense>
        </Route>

        <Route path="/">
          <Suspense fallback={<Loading />}>
            <Inicio />
          </Suspense>
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
