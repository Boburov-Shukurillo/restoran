import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayOut from "./layout/MainLayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Korzinka from "./pages/Korzinka";

const App = () => {
  let nimadir = 0;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayOut />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/korzinka" element={<Korzinka nimadir={nimadir} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
