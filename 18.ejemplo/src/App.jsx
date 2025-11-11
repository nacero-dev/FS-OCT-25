import './App.css';
import UserProvider from './provider/UserProvider';
import UserShow from './componentes/UserShow';

function App() {
  return (
    <>
      <UserProvider>
        <UserShow />
      </UserProvider>
    </>
  );
}

export default App;
