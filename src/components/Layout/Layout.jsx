import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header ";
import Hero from "../Hero/Hero";
import MainFilter from "../MainFilter/MainFilter";
import FilterResults from "../FilterResults/FilterResults";

import "../Layout/Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <MainFilter />
      {/* <FilterResults /> */}
      <Footer />
    </div>
  );
}

export default Layout;
