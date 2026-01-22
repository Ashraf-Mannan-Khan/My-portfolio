import { useState } from "react";
import { Card } from "./Card/card";
import { Header } from "./header/header";
import { Body } from "./Body/body";
import { Tools } from "./tools/tools";
import { Work } from "./Work/work";
import { Contact } from "./contact/contact";
import { About } from "./about/about";

import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  Routes,
} from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Tools />
      <Work />
      <Contact />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Body />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
