import React from 'react';
import '../styles.css';
import Header from './Header';
import TotalContent from './TotalContent';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div id="background"></div>
      <Header />
      <TotalContent />
      <Footer />
    </div>
  );
}

export default App;
