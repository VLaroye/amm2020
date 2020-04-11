import React, { Fragment } from 'react';

// COMPONENTS
import Snake from './snake/Snake';
import LineUp from './line-up/LineUp';
import Infos from './infos/Infos';
import Footer from './footer/Footer';
import Header from './header/Header';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Snake />
      <LineUp />
      <Infos />
      <Footer />
    </Fragment>
  )
}

export default Home;