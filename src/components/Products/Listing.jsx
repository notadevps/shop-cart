import styled from 'styled-components'; 
import { AiTwotoneStar } from 'react-icons/ai'; 
import { FaRegStarHalfStroke } from 'react-icons/fa6'; 

const Listing = ({ products }) => {
	return (
		<ListingStyle> 
		<div className='productsContainer'>
			{products.length > 0 ? products.map((product, i) => {
				return (
					<div key={product.id} className={`card`}>
						<div className={`cardImg ${i === 3 || i === 6 || i === 10 ? 'blur' : ''}`}>
							<img src={product.imageURL} />
						</div>
						<div className='cardInfo'>
							<div className='heading'>
								{product.name.toUpperCase()}
							</div>
							<div className='top'>
								<span className='price'> {product.price} &#8377;</span>
								<span className='btn' style={ i === 3 || i === 6 || i === 10  ? { backgroundColor: 'rgba(0, 0, 0, 0.3)' }: null}>Add to cart</span>
							</div>
							<div className='fot'>
								<div className='offers'>
									10% off
								</div>
							<div className='footer'>
								<span>4.6k</span>
								<div><AiTwotoneStar id='some' /> <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar />  <FaRegStarHalfStroke /> </div>
							</div>
							</div>
						</div>
					</div>
				)
			}) : <span>Your cart is empty</span>}  
		</div>		
		</ListingStyle>
	)
}

export default Listing; 

const ListingStyle = styled.div`
	.productsContainer {
		display: flex; 
		flex-direction: row; 
		flex-wrap: wrap; 
		gap: 2rem;
		justify-content: center; 
		padding-right: 2rem;
		padding-top: 1rem;
	}

	.card {
		display: flex; 
		flex-direction: column; 
		padding: 1rem; 
		box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		cursor: pointer; 
	}

  .blur::before {
		display: flex; 
		justify-content: center; 
    content: "Out of stock"; 
    width: 100%;
    height: 100%; 
    position: absolute;	
		align-items: center; 
		background-color: rgba(255, 255, 255, 0.5);
  }

	.cardImg {	
		height: 200px;
		width: 300px;
		position: relative;
	}

	img {
		height: 100%; 
		width: 100%; 
	}


	.cardInfo {
		display: flex; 
		flex-direction: column; 
		padding-top: 1rem;
		font-size: 1.2rem; 
		font-weight: 500;
		gap: 0.5rem;
	}


	.cardInfo .top {
		display: flex; 
		justify-content: space-between;
		align-items: center; 
	}

	.footer {
		font-weight: 200; 
		font-style: italic; 
		align-self: end;
		display: flex; 
		gap: 0.5rem; 
		align-items: center; 
		font-size: 0.9rem;
	}

	.footer div {
		display: flex; 
		justify-content: center; 
		align-items: center;
		color: #FFA41C;
		font-size: 1rem;
	}

	.fot {
		display: flex; 
		justify-content: space-between;
		font-size: 0.8rem;
		align-items: center;
		padding-top: 0.6rem;
	}

	.btn {
		padding: 0.5rem 1rem;
		background-color: #51adf6;
		color: white;
	}

	.offers {
		align-items: end; 
		background-color: #FFA41C;
		font-weight: 400; 
		padding: 0.2rem 0.5rem;
		border-radius: 5px;
	}

	.heading {
		font-size: 1.3rem;
		
	}

	.price {
		font-weight: 400; 
		font-size: 1.1rem;
	}
	

`;