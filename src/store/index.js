import { createContext } from "react";
import kuurdak from '../assets/image/kuurdak.png';
import Beshbarmak from '../assets/image/Beshbarmak.png';
import Chuchuk from '../assets/image/image 4.png';
import Buju from '../assets/image/Buju.png';
import Ash from '../assets/image/Ash.png'

const product = [

    {
      imageFood: `${kuurdak}`,
      titleFood: 'Куурдак',
      priceFood: 400,
      description: 'кыргыз элинин эң сыйлуу тамактарынын бири.',
      amount:1,
      id:Math.random().toString()
    },
    {
      imageFood: `${Beshbarmak}`,
      titleFood: 'Бешбармак',
      priceFood: 800,
      description: 'майда тууралган эттен жасалган кыргыздын эң сый тамагы.',
      amount:1,
      id:Math.random().toString()
    } , 
     {
      imageFood: `${Chuchuk}`,
      titleFood: 'Чучук',
      priceFood: 750,
      description: 'жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.',
      amount:1,
      id:Math.random().toString()
    },
    {
      imageFood: `${Buju}`,
      titleFood: 'Быжы',
      priceFood: 630,
      description: 'койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.',
      amount:1,
      id:Math.random().toString()
    },
    {
      imageFood: `${Ash}`,
      titleFood: 'Aш',
      priceFood: 400,
      description: 'койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак..',
      amount:1,
      id:Math.random().toString()
    }
  ]

export const Store = createContext()

const state = {
    product
}
export const ProviderContext = ({children}) => {
return(
<Store.Provider value={state}>{children}</Store.Provider>
)
}