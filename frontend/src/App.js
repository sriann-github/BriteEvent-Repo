import './bootstrap.css';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './screens/HomeScreen';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <div class="flex-wrapper">
      <Header />
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
