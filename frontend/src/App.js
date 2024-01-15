import './bootstrap.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Header />
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      <Footer />
      </>
  );
}

export default App;
