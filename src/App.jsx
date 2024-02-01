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
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
