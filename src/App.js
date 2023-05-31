import React from 'react';
import Navbar from './components/navbar';
import CardsSection from './components/cardsSection';
import Footer from './components/footer';
import data from './data/data.json';

function App() {


  return (
    <>
    <Navbar/>
    <CardsSection data={data}/>
    <Footer/>
    </>
  );
}

export default App;
