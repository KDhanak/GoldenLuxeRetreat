import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout/Layout'
import Facilities from '../components/Facilities/Facilities';
import Rooms from '../components/Rooms/Room';
import ContactUs from '../components/ContactUs/ContactUs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/facilities',
                element: <Facilities />
            },            
            {
                path: '/Rooms',
                element: <Rooms />
            },            
            {
                path: '/contact-us',
                element: <ContactUs />
            },
        ]
    }
])

export default router;
