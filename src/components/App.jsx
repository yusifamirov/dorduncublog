import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Articles from './Article/Articles';
import Article from './Article/Article1';
import Home from './Home/Home';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Articles />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;