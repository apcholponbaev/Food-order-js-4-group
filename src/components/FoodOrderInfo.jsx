import React from 'react'
import titleImage from '../assets/image/KYRGYZ-ASHKANASY.png'
import styled from 'styled-components'

const FoodOrderInfo = () => {
  return (
    <GlobalContainer>
      
        <TextContainer>
            <p><img src={titleImage} alt="" /> - оазис восточной культуры, где гости испытывают уникаьное путешествие через изумитетельные вкусы, аутентичную эстетику и безупречное гостеприимство.
            </p>
        </TextContainer>
      <p>Самое большое разнообразие <span>Кыргызких блюд</span>  приготовленных лучшими шеф-поварами!</p>
<ButtonContainer>
    <button>Забронировать столик <span>⟶</span> </button>
    <button>Меню <span>⟶</span></button>

    
</ButtonContainer>

    </GlobalContainer>
  )
}



export default FoodOrderInfo

const GlobalContainer = styled.div`
   margin: auto;
    width: 864px;
    height: 225px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        width: 433px;
        height: 30px;
        color: white;
        > span {
            color: #FF9E0C;
        }
    }
`

const TextContainer = styled.div`
  
    display: flex;
    align-items: center;
    > p {
        color: white;
        font-size: 25px;
    }
`
 
   const ButtonContainer = styled.div`
    width: 450px;
    height: 40px;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;

    > button:nth-child(1) {
        width: 330px;
        height: 41px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        background-color: #FF9900;
        border-radius: 60px 0px 0px 60px;
        pad: 9px 25px 10px 30px;
        border: none;
        > span {
            font-size: 25px;
        }
    }
    > button:nth-child(2) {
font-size: 18px;
width: 150px;
height: 40px;
border-radius: 0px 60px 60px 0px;
background: none;
color: white;
padding: 9px 20px 10px 13px;
font-weight: 600;
border: 1px solid #FF9900;
> span {
            font-size: 22px;
        }
    }
   `
   