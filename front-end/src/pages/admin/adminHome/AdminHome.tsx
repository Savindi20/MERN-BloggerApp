import React from "react";
// import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "./container/AdminHero/AdminHero";
// import Articles from "../../components/Articles/Articles";
import CTA from "./container/AdminCTA/AdminCTA";
import Articles from "../../../components/Articles/Articles";
import AdminLayout from "../AdminLayout";

const AdminHome = () => {
  return (
    <AdminLayout>
      <Hero />
      <Articles />
      <CTA />
    </AdminLayout>
  );
};

export default AdminHome;