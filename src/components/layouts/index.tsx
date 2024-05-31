import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = (props: any) => {
  return (
    <>
      <Navbar />
      <div className={props.className}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
