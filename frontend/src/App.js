import './bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import { Container } from 'react-bootstrap';
import React from 'react'


function App() {
  return (
    <>
      <div class="flex-wrapper">
      <Router>
        <Header />
          <main>
            <Container>
              <Routes>
                <Route path='/' exact element= {< HomeScreen />} />
                <Route path='/event/:id' exact element= {<EventScreen />}/> 
              </Routes> 
            </Container>
          </main>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
