import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';
import _products from '../../utils/products.json';
const Search = ({ search, setSearch, setProducts }) => {
  const inputRef = useRef(null);
  let cat = {
    gender: ['men', 'women'], 
    type: ['polo', 'basic', 'hoodie'], 
    color: ['red', 'green', 'blue', 'black', 'purple', 'blue', 'grey']
  };


  return (
    <SearchStyle>
    <div  className='searchContainer'>
      <div className='searchBox'>
        <input name='search' placeholder='Search for products...'  ref={inputRef} />        
      </div>
      <div className='icon'  onClick={() => {
        if (inputRef.current.value.length <= 0) {
          alert('Invalid Input'); 
        } else {
          let compo = inputRef.current.value.split(' ');
          let obj = {};  
          for (const el of compo) {
            if (cat.color.includes(el.toLowerCase())) {
              obj.color = el;
            }
            if (cat.type.includes(el.toLowerCase())) {
              obj.type = el; 
            }
            if (cat.gender.includes(el.toLowerCase())) {
              obj.gender = el;
            }
          }
          let c = [];
          let firstAttr = Object.keys(obj)[0];
          console.log(firstAttr); 
          for (const pr of _products) {
            if (pr[firstAttr] && pr[firstAttr].toLowerCase() === obj[firstAttr].toLowerCase()) {
              c.push(pr);
            }
          }
          if (Object.keys(obj).length != 1) {
            for (const el in obj) {
              if (el === firstAttr) continue; 
              c = c.filter(pr => pr[el] && pr[el].toLowerCase() === obj[el].toLowerCase()); 
            }
          } 
          console.log(c);
          
          
          setProducts([...c]);
        }
      }} ><AiOutlineSearch /></div>
    </div>
    </SearchStyle>
  )
} 


export default Search; 


const SearchStyle = styled.div`
  input {
    border: none; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.5); 
    width: 100%;
    letter-spacing: 1px;
    font-size: 1.2rem;
    outline: none; 
    padding: 0.2rem;
  }


  .searchBox {
    width: 50%;
  }


  .searchContainer {
    display: flex; 
    align-items: center;
    justify-content: center; 
    box-sizing: border-box;
    gap: 0.5rem; 
  }
  


  .icon {
    background-color: #51adf6;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9); 
    padding: 0.3rem 0.6rem;
    display: flex; 
    align-items: center; 

  }


`;