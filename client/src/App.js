import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { SummaryApi } from "./common";
import './App.css';
import Context from "./context";


function App() {
  useEffect(() => {
    fetch(SummaryApi.userDetails.url, {
      method: SummaryApi.userDetails.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Context.Provider value="">
        <ToastContainer />
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </React.Fragment>
  );
}

export default App;
