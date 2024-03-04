import React, { useState } from "react";
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
import { foods } from "./data";
import Menu from "./pages/Menu";
import Galareya from "./pages/Galareya";
import Contact from "./pages/Contact";
import PageNotFoun from "./pages/PageNotFoun";

const App = () => {
  const [data, setData] = useState([...foods]);
  const [cart, setCart] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <MainLayOut
            cart={cart}
            data={data}
            setData={setData}
            setCart={setCart}
          />
        }
      >
        <Route
          path="/"
          element={
            <Home cart={cart} setCart={setCart} data={data} setData={setData} />
          }
        />
        <Route
          path="/about"
          element={<About cart={cart} setCart={setCart} />}
        />
        <Route
          path="/korzinka"
          element={<Korzinka cart={cart} setCart={setCart} />}
        />
        <Route
          path="/menu"
          element={
            <Menu cart={cart} data={data} setData={setData} setCart={setCart} />
          }
        />
        <Route path="/galareya" element={<Galareya />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/*" element={<PageNotFoun />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
