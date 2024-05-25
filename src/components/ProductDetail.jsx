
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"
import { CloseMenuIcon } from "../assets/Icons/Icons"

export default function ProductDetail () {
    const { 
        setIsOpenProductDetail,
        isOpenProductDetail,
        productToShow,
      } = useContext(ShoppingCartContext)
    
    const handleCloseButton = () => {
        setIsOpenProductDetail(false)
    }

    return (
            productToShow 
            ? <aside
                className={`${isOpenProductDetail ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-gray-5`}>
                <div className='flex justify-between items-center p-6'>
                    <h2 className='font-medium text-xl'>Detail</h2>
                    <button
                        className='h-6 w-6 text-black'
                        onClick={handleCloseButton} >
                        <CloseMenuIcon/>
                    </button>
                </div>
                <figure className='px-6'>
                    <img
                        className='w-full h-full rounded-lg'
                        src={productToShow.image}
                        alt={productToShow.title} 
                    />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>
                        ${productToShow.price}
                    </span>
                    <span className='font-medium text-md'>
                        ${productToShow.title}
                    </span>
                    <span className='font-light text-sm'>
                        ${productToShow.description}
                    </span>
                </p>
              </aside>
            : <aside></aside>
    )
}