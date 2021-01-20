import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1 className="my-2">Latest products</h1>
          <Route path="/" component={Homepage} exact></Route>
          <Route path="/products/:id" component={Products}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
