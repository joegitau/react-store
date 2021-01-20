import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Latest products</h1>
          <Homepage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
