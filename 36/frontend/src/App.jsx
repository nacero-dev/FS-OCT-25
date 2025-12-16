import { RouterProvider } from 'react-router-dom';
import { router } from './routers/routers.jsx';
import UserProvider from './context/UserProvider';
import './App.css';

function App() {
  return (
    <>

        <h1>Dia 26 - User Authentication</h1>
        <RouterProvider router={router} />

    </>
  );
}

export default App;
