import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout/layout.jsx';
import PersonsList from '../components/PersonsList.jsx';
import PersonDetail from '../components/PersonDetail.jsx';
import PersonCreate from '../components/PersonCreate.jsx';

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
            }
        ]
    }
]);