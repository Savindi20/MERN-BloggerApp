import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "./container/Hero/Hero";
import Articles from "../../components/Articles/Articles";
import CTA from "./container/CTA/CTA";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default Home;