import { useState } from 'react';
import UserContext from '../context/userContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


/* 

✅ Lo que realmente ocurre
1. El único useState está dentro de UserProvider.
const [user, setUser] = useState(null);

2. Ese user y setUser se entregan al contexto en:
<UserContext.Provider value={{ user, setUser }}>

3. UserToggle y UserShow NO crean su propio estado.

Ellos solo leen el estado que vive dentro del Provider.

4. Cuando en UserToggle haces esto:
const { user, setUser } = useContext(UserContext);


Significa:

user → es el valor REAL del estado dentro del Provider.

setUser → es la función REAL que modifica ese estado.

*/