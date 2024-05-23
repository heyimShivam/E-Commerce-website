import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './App.css';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
