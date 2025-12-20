import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout.jsx';

// Persons
import PersonsList from '../components/Persons/PersonsList.jsx';
import PersonDetail from '../components/Persons/PersonDetail.jsx';
import PersonCreate from '../components/Persons/PersonCreate.jsx';


import ClassroomsList from '../components/Classrooms/ClassroomsList.jsx';
import ClassroomDetail from '../components/Classrooms/ClassroomDetail.jsx';
import ClassroomCreate from '../components/Classrooms/ClassroomCreate.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

 {
        index: true,
        element: <PersonsList />,
      },

      {
        path: '/persons',
        element: <PersonsList />,
      },
      {
        path: '/persons/:id',
        element: <PersonDetail />,
      },
      {
        path: '/persons/create/:id?',
        element: <PersonCreate />,
      },

      {
        path: '/classrooms',
        element: <ClassroomsList />,
      },
      {
        path: '/classrooms/:id',
        element: <ClassroomDetail />,
      },
      {
        path: '/classrooms/create/:id?',
        element: <ClassroomCreate />,
      },
    ],
  },
]);
