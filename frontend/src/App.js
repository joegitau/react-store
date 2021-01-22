import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={Homepage} exact></Route>
          <Route path="/products/:id" component={ProductDetail}></Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
