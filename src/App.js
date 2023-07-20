import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Images from './Images';
import Footer from './footer';
import ProductPage from './ProductPage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Searchbar />
     <Images />
     <Footer />
     {/* <ProductPage /> */}
    </div>
  );
}

export default App;
