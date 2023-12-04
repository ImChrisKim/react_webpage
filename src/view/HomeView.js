import React, { useEffect } from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import History from "../components/History";
import Site from "../components/Site";
import Port from "../components/Port";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <History />
        <Site />
        <Port />
        <Skills />
        <Contact />
        <Footer />
      </Main>
    </div>
  );
};

export default HomeView;
