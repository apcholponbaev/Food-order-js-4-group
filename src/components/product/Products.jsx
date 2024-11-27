import React, { useContext } from 'react'
import MainGlobal from '../../assets/image/MainGlobal.png'
import Button from '../UI/Button'
import styled from 'styled-components'
import { Store } from '../../store'
import Meals from '../meals/Meals'

const Products = ({item}) => {

const context = useContext(Store)



  return (
    <GlobalProductContainer>
       <ParentContainer>
      {context.product.map((el) => {
        return(
         
           <Meals items={el} key={el.id}/>
        )
      })}
     </ParentContainer>
    </GlobalProductContainer>
  )
}

export default Products
  

  

  



const GlobalProductContainer = styled.div`
 width: 100%;
  height: 1100px;
  background-image: url(${MainGlobal});
  background-repeat: no-repeat;
  font-size: cover;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 390px;
  justify-content: space-around;
 
 `
  const ParentContainer = styled.div`
    width: 70%;
    height: 800px;
   
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
    
  `

