import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';

const Search = ({ search, setSearch }) => {
const inputRef = useRef(null);

  return (
    <SearchStyle>
    <div  className='searchContainer'>
      <div className='searchBox'>
        <input name='search' placeholder='Search for products...'  ref={inputRef} />        
      </div>
      <div className='icon'  onClick={() => {
        setSearch(inputRef.current.value)
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
    width: 100%;
  }


  .searchContainer {
    display: flex; 
    align-items: center;
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