import styled from 'styled-components';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';


const Filters = ({ setFilters, filters }) => {

  
  return  (
    <FiltersStyle>
      <div className='filterContainer'>

        <div className='colors container'>
          <div className='head'>
            <span>Colors</span> 
          </div>
          <div className='tail'>
          <div>
            <div className='tick' onClick={(e) =>  { 
              if (filters.color && filters.color === 'red') {
                setFilters({...filters, color: ''}); 
              } else {
                setFilters({...filters, color: 'red'})
              }
            }}>    {filters.color === 'red' ? <TiTick /> : null} </div>
            <span>Red</span>            
          </div>
          <div>
            <div className='tick' onClick={(e) => { 
            if (filters.color && filters.color === 'blue') {
              setFilters({...filters, color: ''}); 
            } else {
              setFilters({...filters, color: 'blue' })
            }
            }}> {filters.color === 'blue' ? <TiTick /> : null} </div>
            <span>Blue</span>            
          </div>
          <div>
            <div className='tick' onClick={(e) => { 
            if (filters.color && filters.color === 'green') {
              setFilters({...filters, color: ''}); 
            } else {
              setFilters({...filters, color: 'green' })
            }
            }}>{filters.color === 'green' ? <TiTick /> : null}</div>
            <span>Green</span>            
          </div>
          </div>
        </div>



        <div className='colors container'>
          <div className='head'>
            <span>Gender</span> 
          </div>
          <div className='tail'>
          <div>
            <div className='tick' onClick={(e) => { 
             if (filters.gender && filters.gender === 'men') {
              setFilters({...filters, gender: ''}); 
            } else {
              setFilters({...filters, gender: 'men' })
            }
            }}>{filters.gender === 'men' ? <TiTick /> : null}</div>
            <span>Male</span>            
          </div>
          <div>
            <div className='tick' onClick={(e) => {
              if (filters.gender && filters.gender === 'women') {
                setFilters({...filters, gender: ''}); 
              } else {
                setFilters({...filters, gender: 'women' })
              }
            }}>{filters.gender === 'women' ? <TiTick /> : null}</div>
            <span>Female</span>            
          </div>
          </div>
        </div>



        <div className='colors container'>
          <div className='head'>
            <span>Prize</span> 
          </div>
          <div className='tail' style={{ gap: '0.8rem'}}>
              <span>{filters.prize[0] ? filters.prize[0] : 0 } - {filters.prize[1] ? filters.prize[1]  : 500 } Rs </span>
              <div>
                <RangeSlider defaultValue={[0, 500]} min={0} max={500} step={50} onInput={(e) => setFilters({...filters, prize: e })} />
              </div>
          </div>
        </div>

        <div className='colors container'>
          <div className='head'>
            <span>Type</span> 
          </div>
          <div className='tail'>
          <div>
            <div className='tick' onClick={(e) => { 
              if (filters.type && filters.type === 'polo') {
                setFilters({...filters, type: ''}); 
              } else {
                setFilters({...filters, type: 'polo'})
              }
            }}>{filters.type === 'polo' ? <TiTick /> : null}</div>
            <span>Polo</span>            
          </div>
          <div>
            <div className='tick' onClick={(e) => { 
              if (filters.type && filters.type === 'hoodie') {
                setFilters({...filters, type: ''}); 
              } else {
                setFilters({...filters, type: 'hoodie'})
              }
            }}>{filters.type === 'hoodie' ? <TiTick /> : null}</div>
            <span>Hoodie</span>            
          </div>
          <div>
            <div  className='tick' onClick={(e) => { 
              if (filters.type && filters.type === 'basic') {
                setFilters({...filters, type: ''}); 
              } else {
                setFilters({...filters, type: 'basic'})
              }
            }}>{filters.type === 'basic' ? <TiTick /> : null}</div>
            <span>Basic</span>            
          </div>
          </div>
        </div>


      </div>
    </FiltersStyle>
  )
}

export default Filters;


const FiltersStyle = styled.div`
  .filterContainer {
    width: 100%; 
    position: sticky;
    display: flex; 
    flex-direction: column;
    padding: 2rem 1.8rem;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    gap: 2rem;
    margin-left: 0.8rem;
  }


  .container {
    display: flex; 
    flex-direction: column; 
    gap: 0.8rem;
  }

  .head {
    font-size: 1.2rem; 
    font-weight: 600;
  }

  .tail {
    padding-left: 0.4rem;
    display: flex; 
    gap: 0.3rem;
    font-size: 1.2rem;
    font-weight: 400;
    flex-direction: column; 
  }

  .tail div {
    display: flex; 
    gap: 0.7rem;
    align-items: center;  
  }

  .tail div .tick {
    border: 1px solid black;
    width: 20px; 
    color: lightgreen;
    height: 20px; 
  }


`;