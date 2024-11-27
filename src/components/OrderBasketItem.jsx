import React from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import styled from 'styled-components';

const OrderBasketItem = (props) => {
  return (
    <OrderBasketStyled onClick={props.open}>
      < BasketIcon />
        <b>{props.amount || 0}</b>
    </OrderBasketStyled>
  )
}

export default OrderBasketItem

const OrderBasketStyled = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 60px;
   
    background-color:  #FFFFFF80;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  
    > b {
        position: absolute;
        right: 7px;
        top: 3px;
        font-size: 20px;
        color: white;
    }
`

const BasketIcon = styled (FaBasketShopping)`
    width: 25px;
    height: 25px;
      color: #FF9900;
`