import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { Helmet } from "react-helmet";


import "./App.css";

function App() {
  const [currentTab, handleTabChange] = useState("about");
  const renderTab = () => {
    if (currentTab === "about") {
      return <About />;
    }
    if (currentTab === "portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "contact") {
      return <Contact />;
    }
    if (currentTab === "resume") {
      return <Resume />;
    }
    return <About />;
  };
  return (
    <>
      <Helmet>
        <title>Portfolo || {currentTab}</title>
      </Helmet>
      ;
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}
export default App;
