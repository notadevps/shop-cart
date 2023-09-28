import styled from 'styled-components';


const Cart = ({ cartProducts, setCartProducts }) => {

  


  return (
    <CartStyle>
      <div className='cartContainer' >
        <div className='heading'>
          <span>Shopping Cart</span>
        </div>

        {cartProducts.length > 0 ?
        <>
         <div className='cartBox'> 
          {cartProducts.map((product, i) => {
            return (
              <div className='card'>
                <div className='cardImg'>
                  <img src={product.imageURL} />
                </div>
                <div className='cardInfo'>
                  <div className='productDesc'>
                    <span>{product.name}</span>
                    <span className='price'>{product.price} &#8377;</span>
                  </div>
                  <div className='qty'>
                    <span id='minus'>-</span>
                    <span>1</span>
                    <span id='plus'>+</span>
                  </div>
                  <div className='remove'>
                    <span>Delete</span>
                  </div>
                </div>
              </div>
            )
          })} 


        </div>
        <div className='line'></div>
        <div className='total'>
            <span style={{ fontWeight: '600' }}>Total Amount </span>
            <span style={{ fontWeight: '400' }}>Rs 2200</span>
        </div>
        </>: <span className='empty' >Your cart is empty</span>}
      </div>
    </CartStyle>
  )
}


export default Cart; 


const CartStyle = styled.div`
  
  .heading {
    font-weight: 600; 
    font-size: 2.5rem;
  }

  .cartContainer {
    padding: 1rem; 
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    overflow: none;
    gap: 0rem;
    padding-top: 2rem;
  }

  .empty {
    font-weight: 600; 
    font-size: 1.5rem; 
    padding: 2rem;
  }

  .cartBox {
    display: flex; 
    flex-direction: column;
    gap: 2rem; 
    max-height: 600px;
    overflow-y: auto;
    padding: 1rem;
    padding-top: 3rem;

  }

  .cardImg {	
		height: 70px;
		width: 100px;
		z-index: 2;
		position: relative;
	}

  .cardImg::before {
    content: ""; 
    width: 100%;
    height: 100%; 
    position: absolute;
    // background-color: rgba( 255, 255, 255, 0.8);
  }

	img {
		height: 100%; 
		width: 100%; 
	}

  .card {
    display: flex; 
    gap: 3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 700px;
    padding: 1.5rem;
    border-radius: 15px;
  }

  .cardInfo {
    display: flex; 
    gap: 3rem; 
    align-items: center; 
  }

  .productDesc {
    font-size: 1.3rem;
    display: flex; 
    flex-direction: column;
    font-weight: 500;
    gap: 0.5rem;
    width: 120px;
  }

  .price {
    font-weight: 400;
    font-size: 1.2rem;
  }

  .qty {
    display: flex; 
    gap: 0.7rem; 
    font-weight: 600; 
  }

  #minus, #plus {
    border: 1px solid black;
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
    cursor: pointer; 
  }
  
  .qty span {
    padding: 0.2rem 0.4rem;
  }

  .remove {
    padding: 0.4rem 1rem; 
    border: 1px solid black;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer; 
    
  }

  .total {
    font-size: 1.3rem;
    position: relative; 
    display: flex; 
    gap: 2rem;
  }

  .cartBox {
    position: relative; 
  }

  .line {
    width: 700px;
    margin-top: 2rem;
    height: 1px; 
    background-color: rgba(0,0,0,0.5);
  }
  
  .total {
    padding-top: 1.5rem;
  }

`;