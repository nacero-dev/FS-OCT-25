/* "##" camino paso a paso front end 2. */

import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Layout/layout.jsx';
import PersonsList from '../components/Persons/PersonsList.jsx';
import PersonDetail from '../components/Persons/PersonDetail.jsx';
import PersonCreate from '../components/Persons/PersonCreate.jsx';
import ClassroomList from "../components/Classroom/ClassroomList.jsx";
import ClassroomDetail from "../components/Classroom/ClassroomDetail.jsx";
import ClassroomCreate from "../components/Classroom/ClassroomCreate.jsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <PersonsList />
            },
            {
                path: '/persons/:id',
                element: <PersonDetail />
            },
            {
                path: '/persons/create/:id?',
                element: <PersonCreate />
            },

            { path: "/classrooms", element: <ClassroomList /> },
            { path: "/classrooms/:id", element: <ClassroomDetail /> },
            { path: "/classrooms/create/:id?", element: <ClassroomCreate /> },

        ]
    }
]);


/*
2.
| Ruta                   | Componente que se muestra | Qué hace                                   |
| ---------------------- | ------------------------- | ------------------------------------------ |
| `/`                    | `<PersonsList />`         | Muestra la lista de personas               |
| `/persons/:id`         | `<PersonDetail />`        | Muestra una persona concreta               |
| `/persons/create/:id?` | `<PersonCreate />`        | Crea o edita una persona según si hay `id` |

El símbolo :id? significa “parámetro opcional” (puede estar o no).
-->layout.jsx
*/