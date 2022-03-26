import React, { type FC } from 'react';
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { routes, RouteTypes } from './routes';
import Home from './pages/Home';
import { HeaderToolbar } from './components';
import styles from './App.module.css';

const MaterialUI = React.lazy(() => import('./pages/MaterialUI'));
const Button = React.lazy(() => import('./pages/Button'));
const Card = React.lazy(() => import('./pages/Card'));

const Layout: FC = () => {
   return (
    <div>
      <HeaderToolbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
   );
}

const App: FC = () => {
  return (
    <div>
      {<Routes>
        <Route path={routes[RouteTypes.HOME].path} element={<Home />} />
        <Route path={routes[RouteTypes.MATERIAL_UI].path} element={<Layout />}>
          <Route index element={
              <React.Suspense fallback={<>...</>}>
                <MaterialUI />
              </React.Suspense>
            } />
          <Route
            path={routes[RouteTypes.MATERIAL_UI_BUTTON].path}
            element={
              <React.Suspense fallback={<>...</>}>
                <Button />
              </React.Suspense>
            } />
          <Route
            path={routes[RouteTypes.MATERIAL_UI_CARD].path}
            element={
              <React.Suspense fallback={<>...</>}>
                <Card />
              </React.Suspense>
            } />
        </Route>
      </Routes>}
    </div>
  );
}

export default App;
