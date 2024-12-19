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
import { Prem } from './components/glavna/Prem/Prem';
import { Vned } from './components/glavna/Vned/Vned';
import { Kabrio } from './components/glavna/Kabrio/Kabrio';
import { Sport } from './components/glavna/Sport/Sport';
import { Cbr } from './components/glavna/Cbr/Cbr';
import { Vse } from './components/glavna/Vse/Vse';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "Oss",
      element: <Oss />
      },
      {
        path: "Prem",
        element: <Prem />
      },
      {
        path: "Vned",
        element: <Vned />
      },
      {
        path: "Kabrio",
        element: <Kabrio />
      },
      {
        path: "Sport",
        element: <Sport />
      },
      {
        path: "Cbr",
        element: <Cbr />
      },
      {
        path: "Vse",
        element: <Vse />
      }
    ]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);