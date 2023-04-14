import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header ";
import AppRoutes from "../../routes/AppRoutes";
import "../Layout/Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default Layout;
