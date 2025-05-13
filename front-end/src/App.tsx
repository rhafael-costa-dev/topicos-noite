import React, { useState } from 'react';
import Footer from './components/footer';
import Header from './components/Header';
import ListaProdutos from './pages/produtos/ListaProdutos';
import CadastrarProdutos from './pages/produtos/CadastrarProdutos';

function App() {

  return (
    <div>
      <Header />
      <br />
      <br />

      {/* <ListaProdutos /> */}
      <CadastrarProdutos />
    
      <Footer />
    </div>
  );
}

export default App;
