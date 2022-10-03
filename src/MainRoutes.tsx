import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import routesType from './types/routes'

const MainRoutes = () => {

  const routes: routesType = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
  ]

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.link} element={route.element} key={route.id}></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;