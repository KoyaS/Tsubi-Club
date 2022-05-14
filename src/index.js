import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import GroundWorksScreen from "./Screens/GroundWorksScreen/GroundWorksScreen";
import reportWebVitals from "./reportWebVitals";
import { Route, NavLink, HashRouter, Routes } from "react-router-dom";

// router reference:
// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
    {/* <HomeScreen /> */}
    {/* <GroundWorksScreen /> */}
    {/* <NavLink to="/" style={{zIndex: 10}}>HOME</NavLink>
    <NavLink to="/GroundWorks" style={{zIndex: 10}}>GroundWorks</NavLink> */}
    <Routes>
    <Route exact path="/" element={<HomeScreen />} />
    <Route exact path="/GroundWorks" element={<GroundWorksScreen />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
