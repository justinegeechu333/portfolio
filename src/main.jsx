import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.jsx';
import Home from './pages/home/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Works from './Works.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "works",
                element: <Works />
            }
        ]
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
