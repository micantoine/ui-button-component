import type { ReactElement, FC } from 'react';
import { Outlet } from "react-router-dom";
import { HeaderToolbar, MainContent } from '.';


const Layout: FC<{ actions?: ReactElement }> = (props) => {
   return (
    <>
      <HeaderToolbar actions={props.actions} />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
   );
}

export default Layout;