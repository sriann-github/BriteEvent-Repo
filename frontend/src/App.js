import './bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import { Container } from 'react-bootstrap';
import React from 'react'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';

function App() {
  return (
    <>
      <Router>
          <Header />
            <main className="flex-wrapper">
             <Container fluid>
              <Routes>
                <Route path='/' exact element= {<HomeScreen />} />
                <Route path='/event/:id' exact element= {<EventScreen />}/>
                <Route path='/login' exact element= {<LoginScreen/>}/>
                <Route path='/register' exact element= {<RegisterScreen/>}/>
                <Route path='/profile' exact element= {<ProfileScreen/>}/>
                <Route path='/order/:id' element= {<OrderDetailsScreen/>}/>
              </Routes> 
             </Container>
            </main>
          <Footer />
        </Router>
    </>
  );
}

export default App;
