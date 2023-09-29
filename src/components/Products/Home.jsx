//searchbar -> to the top
//filter bar -> to the left
//products -> listing of all the products 
import styled from 'styled-components';
import Filters from '../filters/filters';
import Search from './Search';
import Nav from '../nav/Nav';
import Listing from './Listing';
import Cart from '../cart/Cart';
import { useEffect, useState } from 'react';
import _products from '../../utils/products.json';
import { _filter }  from '../../utils/filter';

const Home = () => {
  const [filters, setFilters] = useState({ color: '', gender: '', type: '', prize: [] });
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(_products);
  const [pageState, setPageState] = useState({ products: true });
  console.log(JSON.parse(localStorage.getItem('cart')) );
  const [cartProducts, setCartProducts] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart'))  : [] ); 
  const [currentQty, setCurrentQty] = useState(localStorage.getItem('cartQty') ? JSON.parse(localStorage.getItem('cartQty')) : {});

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts)); 
    localStorage.setItem('cartQty', JSON.stringify(currentQty));           
  }, [currentQty, cartProducts]); 

  useEffect(() => {
    _filter(setProducts, _products, filters);
  }, [filters]); 



  return (
    <HomeStyle>
      <div className='nav'>
        <Nav  setPageState={setPageState} />
      </div>
      { pageState.products ? 
      <div className='homeContainer'>
        <div className='left'>
          <Filters 
            setFilters={setFilters} 
            filters={filters} 
          />
        </div>
        <div className='right'>
              <div className='search'>  
                <Search search={search} setSearch={setSearch} setProducts={setProducts} />
              </div>
              <div className='products'> 
                <Listing products={products} setCartProducts={setCartProducts} cartProducts={cartProducts} setCurrentQty={setCurrentQty} currentQty={currentQty} />
              </div>
        </div>
      </div> : <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} currentQty={currentQty} setCurrentQty={setCurrentQty} />}
    </HomeStyle>
  ) 
}

export default Home; 

const HomeStyle = styled.div`
  .nav {
    width: 100%; 
    background-color: #51adf6;
  }

  .homeContainer {
    height: 100vh; 
    width: 100%; 
    display: flex;
    flex-direction: row; 
    gap: 1rem; 
    padding-top: 6rem;
  }
  .left {
    height: 100vh; 
    width: 20%;
    align-self: center; 
    padding: 1rem;
    min-width: 250px; 
  }

  .right {
    display: flex; 
    flex-direction: column;
    height: 100vh;  
    width:  80%; 
    gap: 2rem;
  }
  
  .right .search {
    height: 50px;
    width: 700px; 
    align-self: center;
    flex-grow: 0;  
  }

  .right .products {
    flex-grow: 1; 
  }

`;