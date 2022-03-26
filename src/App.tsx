import { type FC } from 'react';
import {
  Routes,
  Route,
  Outlet,
  Link
} from "react-router-dom";

import Button from './pages/Button';
import Card from './pages/Card';
import Home from './pages/Home';

import { HeaderToolbar } from './components';

import styles from './App.module.css';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="button" element={<Button />} />
          <Route path="card" element={ <Card />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
