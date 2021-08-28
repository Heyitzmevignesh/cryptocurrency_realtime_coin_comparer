import React from 'react';
import Header from './components/header'
import Instructions from './components/coin2coinConverter/instructions';
import Converter from './components/coin2coinConverter/converter';
import Footer from './components/footer';
import './Final.css';
const Create = () => {

    return ( 
        <div className='create-container'>
            <header>
              <Header />
            </header>
            <div>
              <Instructions />
              <Converter />
            </div>
            <footer>
              <Footer />
            </footer>
        </div>
     );
}
 
export default Create;