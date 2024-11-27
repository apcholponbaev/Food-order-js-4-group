import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { createPortal } from 'react-dom'
import { Store } from '../../store'
import { FoodContext } from '../../store/FoodContext'

const Modal = (props) => {

  // const  { product } = useContext(Store)
 const { items } = useContext(FoodContext)

   const amountTotalPrice = () => {
    let result = items.reduce((a , b) => {

      return a + (+b.amount * +b.priceFood)
    }, 0)
    return result
   }
   

  return (
    <>
    
    {createPortal(  <ModalGlobalContainer>
      <ModalScroolContainer>
      {items.map((el) => {
        return(
          <>
        <ModalContainer >
        <h1>{el.titleFood}</h1>
        <b>{el.priceFood}</b>
        <div>
        <Button backgroundColor="white" padding='3px 10px' fontSize='25px' color='#FF9900' >+</Button>
        <span>{el.amount }</span>
        <Button backgroundColor="white" padding='3px 12px' fontSize='25px' color='#FF9900' >-</Button>
        </div>
      </ModalContainer >
      
          </>

        )
      })}
      </ModalScroolContainer>
     < BtnAmountContainer>
      <h1> Total.Amount: {amountTotalPrice()}</h1>
      <hr />
        <div>
          <Button  fontSize='20px' padding='9px 30px'>Добавить</Button>
          <Button  fontSize='20px' padding='9px 30px'>Удалить</Button>
        </div>
      </ BtnAmountContainer>
    </ModalGlobalContainer> , document.getElementById("modal"))}
  {createPortal(<Backdrop onClick={props.onClose} ></Backdrop > , document.getElementById("backdrop"))}
    </>
  )
}

export default Modal

const ModalGlobalContainer = styled.div`
    width: 600px;
    height: 416px;
    
    background-color: white;
    border-radius: 30px;
  position: fixed;
    z-index: 4;
    left: 350px ;
    top: 110px;
    display: flex;
    flex-direction: column;
  align-items: center;
  padding: 15px;
  `;

  const ModalScroolContainer = styled.div`
   
    overflow: scroll;
  `

const ModalContainer = styled.div`
        width: 550px;
        height: 60px;
        background-color: #FF9900;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 10px;
        margin-top: 12px;
        color: white;
        padding: 0px 20px 0px 20px;
    >h1 {
      font-size: 30px;
      font-weight: 700;
      line-height: 36px;
    }  
    > b {
      
font-size: 20px;
font-weight: 600;
line-height: 24.38px;
text-align: center;
}
> span {
  
font-size: 25px;
font-weight: 400;
line-height: 30.48px;
text-align: center;

}
> div {
  
width: 120px;
display: flex;
align-items: center;
justify-content: space-between;
}

`
   const BtnAmountContainer = styled.div`
  
    width: 550px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 120px;
    > h1 {
      color: blue;
      margin: 0px;
      font-size: 35px;
    }
    > hr {
      width: 100%;
      border: 1.5px solid #FF9900;
      background-color: #FF9900;
    }
> div {
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
 
}
   `


   

const Backdrop = styled.div`
      position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(80, 60, 60, 0.7);
  z-index: 3;
`