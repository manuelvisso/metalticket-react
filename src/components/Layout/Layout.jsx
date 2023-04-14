import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header ";
import Hero from "../Hero/Hero";
import MainFilter from "../MainFilter/MainFilter";
import "../Layout/Layout.scss";
import AppRoutes from "../../routes/AppRoutes";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <AppRoutes />
      <Hero />
      <MainFilter />
      <Footer />
    </div>
  );
}

export default Layout;
