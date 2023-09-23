import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Rules from "./components/Rules";
import Judging from "./components/judging";
import FAQs from "./components/FAQs";
import Timeline from "./components/Timeline";
import Rewards from "./components/Rewards";
import Sponsors from "./components/Sponsors";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Register from "./components/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <>
              <NavBar />
              <Hero />
              <Introduction />
              <Rules />
              <Judging />
              <FAQs />
              <Timeline />
              <Rewards />
              <Sponsors />
              <Privacy />
              <Footer />
            </>
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
