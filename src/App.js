import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import Images from './Images';
import Item from './Item';
import Footer from './footer';
import NotFound from './NotFound';

import bag1 from './Assets/bag1.jpg'
import bag2 from './Assets/bag2.jpg'
import bag3 from './Assets/bag3.jpg'
import suit1 from './Assets/suit1.jpg'
import suit2 from './Assets/suit2.jpg'
import shoe1 from './Assets/shoe1.jpg'
import shoe2 from './Assets/shoe2.jpg'
import shoe3 from './Assets/shoe3.jpg'
import shoe4 from './Assets/shoe4.jpg'

function App() {

  // State handlers
  const [searchFilter, setsearchFilter] = useState("")
  // const [filterItems, setFilterItems] = useState("")

  const products = [
    {
      id: 1,
      name: 'bag1',
      price: 'ksh.2000',
      image: bag1,
      category: 'bags'
    },
    {
      id: 2,
      name: 'bag2',
      price: 'ksh.3000',
      image: bag2,
      category: 'bags'

    },
    {
      id: 3,
      name: 'bag3',
      price: 'ksh.1500',
      image: bag3,
      category: 'bags'
    },
    {
      id: 4,
      name: 'suit1',
      price: 'ksh.10000',
      image: suit1,
      category: 'suit'
    },
    {
      id: 5,
      name: 'shoe1',
      price: 'ksh.10000',
      image: shoe1,
      category: 'shoes'

    },
    {
      id: 6,
      name: 'shoe2',
      price: 'ksh.10000',
      image: shoe2,
      category: 'shoes'

    },
    {
      id: 7,
      name: 'shoe3',
      price: 'ksh.10000',
      image: shoe3,
      category: 'shoes'
    },
    {
      id: 8,
      name: 'shoe4',
      price: 'ksh.5000',
      image: shoe4,
      category: 'shoes'
    },
    {
      id: 9,
      name: 'suit2',
      price: 'ksh.10000',
      image: suit2,
      category: 'suit'
    },
  ]

  return (
    <div className="App">
      <Navbar />
      <Searchbar searchFilter={searchFilter} setsearchFilter={setsearchFilter} />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/'>
          <Route index element={<Images products={products} searchFilter={searchFilter} />} />
        </Route>
        <Route path='item/:id' element={<Item products={products} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
