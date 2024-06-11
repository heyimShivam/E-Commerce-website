import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { SummaryApi } from "./common";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import FetchUserDetails from "./context/index.js";

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userDetailsSlice.js";

function App() {
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    await fetch(SummaryApi.userDetails.url, {
      method: SummaryApi.userDetails.method,
      credentials: 'include',
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      if(res.success) {
        dispatch(setUserDetails(res.data));
      }

      console.log("User Details Fetching.", res);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <React.Fragment>
      <FetchUserDetails.Provider value={{fetchUserDetails}}>
        <ToastContainer />
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </FetchUserDetails.Provider>
    </React.Fragment>
  );
}

export default App;
