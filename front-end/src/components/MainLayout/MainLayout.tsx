import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;