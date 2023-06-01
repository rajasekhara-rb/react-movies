import React, { useState } from 'react';
import Navbar from './components/navbar';
import CardsSection from './components/cardsSection';
import Footer from './components/footer';
import data from './data/data.json';

function App() {

  const [searchValue, setSearchValue] = useState('');

  const inputHandler = (event) => {
    setSearchValue(() => event.target.value
    )
  }

  const returnCard = () => {
    return data.filter((card) => 
      card.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || searchValue === ""
   )
  }

  return (
    <>
      <Navbar inputHandler={inputHandler} />
      <CardsSection data={data} returnCard={returnCard} />
      <Footer />
    </>
  );
}

export default App;
