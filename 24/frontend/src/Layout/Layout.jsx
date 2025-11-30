/* "##" 3. */

import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Layout;

/*

Outlet es un “espacio dinámico” donde React Router renderiza el componente según la URL.
Así, tu Layout puede incluir menús, encabezados, etc. (aunque en tu caso está vacío).
--> PersonsList.jsx

*/