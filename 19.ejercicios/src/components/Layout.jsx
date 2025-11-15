import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to= "/">Home</Link></li>
                        <li><Link to= "/about">About</Link></li>
                        <li><Link to= "/post">Post</Link></li>
                        <li><Link to= "/user">User</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;

/* 

Importante! los links deben estar dentro de un layout
los links reemplazan esta estructura:
<li><a href="/about">About</a></li>
quedando asi:
<li><Link to= "/about">About</Link></li>

una vez que se tiene el Layout en App se llama como elemento "element"
y se ponen los paths como children:
path:"/"
element:<Home/>

y

path: "/about/:id?", 

...

errorElement:<Error/>

*/