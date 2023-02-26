// Import
import styles from "./App.module.css";
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import routes from "../../config/routes";

// Components
import Layout from "../../HOC/Layout/Layout";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ManageContactByMail from "../../Containers/ManageContactByMail/ManageContactByMail";

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
          <Route path={routes.SEND_MAIL} element={<ManageContactByMail/>}/>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
