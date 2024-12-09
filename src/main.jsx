import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Os } from './components/Os/Os';
import { Oss } from "./components/Oss/Oss"
import { Root } from './routes/Root/Root';
import { MainPage } from './components/glavna/MainPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
    children: [
      {
        path: "glavna",
        element: <MainPage />
      },
      {
        path: "Oss",
        element: <Oss />
      }
    ]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);