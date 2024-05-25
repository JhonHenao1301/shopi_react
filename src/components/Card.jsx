
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { AddToCartIcon, CheckIcon } from "../assets/Icons/Icons";

export default function Card ({ data }) {
    const {
        setIsOpenProductDetail, 
        setProductToShow,
        cart,
        setCart,
        setIsOpenCheckout,
    } = useContext(ShoppingCartContext)
    
    const handleItemSelected = (itemData) => {
      setIsOpenProductDetail(true)
      setProductToShow(itemData)
    }

    const handleAddButton = (event, itemData) => {
      event.stopPropagation()
      setCart([...cart, itemData])
      setIsOpenCheckout(true)
      setIsOpenProductDetail(false)
    }


    const renderCardIcon = (products, id ) => {
      const isInCart = products.filter(product => product.id === id).length > 0
      
      if (isInCart) {
        return (
          <button
            className='icon-plus-cart-disabled'>
            <CheckIcon className='w-6 h-6 bg-white' />
          </button>
        )
      } else {
        return (
          <button
            className='icon-plus-cart'
            onClick={(event) => handleAddButton(event, data)} 
          >
            <AddToCartIcon className='w-6 h-6' />
          </button>
        )
      }
    }

    return ( 
      <div className='bg-white w-56 h-60 rounded-lg' >
        <figure 
          className='relative cursor-pointer flex justify-center bg-white mb-2 w-full h-4/5'
          onClick={() => handleItemSelected(data)}
        >
            <span className='span-category'>
                {data.category}
            </span>
            { renderCardIcon(cart, data.id)}
            {
                <img className='w-fit h-full rounded-lg' src={data.image} alt={data.title} />
            }
        </figure>
        <p className='flex justify-between'>
            <span className='text-tag font-light'>{data.title}</span>
            <span className='text-lg font-semibold'>
                ${data.price}
            </span>
        </p>
      </div>
    )
}