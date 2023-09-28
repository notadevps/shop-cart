import styled from 'styled-components';
import { BiSolidTShirt } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav = ({ setPageState }) => {
  return (
    <NavStyle>
      <div className='navContainer'>
        <div className='logo'>
          <span>TeeRex Store</span>
        </div>

        <div className='navigation'>
          <span onClick={(e) => setPageState({ products: true })}> 
            <BiSolidTShirt />Products
          </span >
            <span onClick={(e) => setPageState({ cart: true })}><AiOutlineShoppingCart />Cart</span>
        </div>
      </div>
    </NavStyle>
  ); 
}   


export default Nav; 


const NavStyle = styled.div`
  .navContainer {
    width: 100%; 
    display: flex; 
    color: white; 
    font-weight: 500;
    font-size: 1.4rem; 
    justify-content: space-between;
    align-items: center; 
    padding: 1rem 2rem;
    box-sizing: border-box;
  }

  .navigation {
    display: flex; 
    letter-spacing: 1px;
    gap: 2rem;
    font-size: 1.4rem;
    cursor: pointer; 
  }

  .navigation span {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 0.2rem;
  }


`;