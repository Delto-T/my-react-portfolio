// Import
import styles from "./App.module.css";
import React, { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import routes from "../../config/routes";

// Components
import Layout from "../../HOC/Layout/Layout";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {

  //Function

  // JSX
  return (
    <div className={styles.App}>
      <Layout>
        <Routes>
          <Route path={routes.HOME} element={<Home/>}/>
          <Route path={routes.PROJECTS} element={<Projects/>}/>
          <Route path={routes.CONTACT} element={<Contact/>}/>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
