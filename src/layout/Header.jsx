import React, { useContext } from 'react'
import styled from 'styled-components'
import titleImage from '../assets/image/KYRGYZ-ASHKANASY.png'
import OrderBasketItem from '../components/OrderBasketItem'
import { FoodContext } from '../store/FoodContext'


const Header = (props) => {

  const { items } = useContext(FoodContext)

  const CalculateAmount = () => {
    let resultAmount = items.reduce((a, b) => {
      return a + b.amount
    }, 0)
    return resultAmount
  }

  return (
    <HeaderStyled>
      <img src={titleImage} alt="" />
      <Navigation >
        <a href="">Главная</a>
        <a href="">О нас</a>
        <a href="">Отзывы</a>
        <a href="">Контакты</a>
        <a href="">Заказать</a>
      </Navigation >

      <OrderBasketItem amount={CalculateAmount()} open={props.modal} />

    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
    width: 100%;
    height: 46px;
    /* border: 2px solid red; */
    margin: auto;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;
`
const Navigation = styled.nav`
width: 586px;
height: 22px;

display: flex;
align-items: center;
justify-content: space-between;
> a {
    color: white;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
}

`