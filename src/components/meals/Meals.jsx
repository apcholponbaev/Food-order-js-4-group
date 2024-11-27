import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import { FoodContext } from '../../store/FoodContext'

const Meals = (props) => {

  const  {id , titleFood , priceFood , amount ,description , imageFood  } = props.items

const { addBasket } = useContext(FoodContext)




const addFoodHandler = () => {
    const newBasket = {
      id,
      titleFood,
      priceFood,
      amount
    }
    addBasket(newBasket)
    }
  





         
  return (
    <>
      <GlobalContainerFood >
         <FoodImage src={imageFood} alt="" />
         <ContainerFood >
           <b>{titleFood}</b>
           <p>{description}</p>
           <ContainerCount>
             <span className='Plus'>+</span>
             <span>|</span>
              <span>{amount}</span>
              <span>|</span>
               <span className='Minus'>-</span>    
           </ContainerCount>
       

           <Button onClick={addFoodHandler} fontSize='14px' padding='5px 16px'>{priceFood}</Button>
         </ContainerFood >
       </GlobalContainerFood >
    </>
  )
}

export default Meals

const FoodImage = styled.img`
  position: absolute;
  width: 163px;
height: 140px;
top: -127px;
left: 20px;



`
const GlobalContainerFood = styled.div`
  width: 231px;
  margin-top: 100px;
  position: relative;
 
`
const ContainerFood = styled.div`
width: 241px;
height: 257px;
/* border: 2px solid darkblue; */
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
color: white;
background-color: #524747 ;
font-family: Montserrat;
font-size: 18px;
font-weight: 400;
line-height: 21.94px;
text-align: center;
border-radius: 20px;
padding: 10px 0px 10px 0px;
> p {
  font-size: 12px;
  font-weight: 400;
}
`
const ContainerCount = styled.div`
 
  display: flex;
  gap: 23px;
 
  .Plus, .Minus {
  font-size: 30px;
font-weight: 400;

}
.Plus:hover {
cursor: pointer;
background-color: #FF9900;
border-radius: 50px;
color: white;
padding: 5px;
}
.Minus:hover {
cursor: pointer;
background-color: #FF9900;
border-radius: 50px;
color: white;
padding: 5px;
}
`