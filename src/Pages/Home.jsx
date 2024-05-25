
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../Context"
import Layout from "../Components/Layout"
import Card from "../components/Card"
import ProductDetail from "../Components/ProductDetail"
import CheckOutSideMenu from "../Components/CheckOutSideMenu"
import { BackIcon, DoubleBackIcon, DoubleNextIcon, NextIcon } from "../assets/Icons/Icons"

export default function Home () {

    const { 
        loading, 
        filteredItems,
        setSearch,
    } = useContext(ShoppingCartContext)
    
    const [ currentPage, setCurrentPage ] = useState(0)
    const totalItems = filteredItems?.length
    const range = 8

    const itemsPerPage = filteredItems?.slice(currentPage, currentPage + range)

    const firstPage = () => {
        setCurrentPage(0)
    }

    const previousPage = () => {
        if (currentPage >= range)
        setCurrentPage(currentPage - range)
    }

    const nextPage = () => {
        if(totalItems > currentPage + range)
        setCurrentPage(currentPage + range)
    }

    const lastPage = () => {
        if((totalItems % range) === 0) {
            setCurrentPage(totalItems - range)
        } 
            else {
                setCurrentPage(totalItems - (totalItems % range))
            }
    }
 
    return ( 
        <Layout>
            <div className='flex flex-col items-center gap-2 justify-center relative w-full mb-4'>
                <h1 className='font-bold text-title'>
                    Exclusive products
                </h1>
                <h1 className='text-normal text-center'>The best place to find your favorite products</h1>
            </div>
            <input
                type="text"
                placeholder='Search a product'
                className='rounded-lg border border-black w-80 p-4 mb-8 focus:outline-none'
                onChange={(event) => setSearch(event.target.value)} 
            />
            <div className='grid grid-cols-fits gap-8 px-8 justify-center w-full '>
                {
                    itemsPerPage?.length > 0 && !loading
                        ?   itemsPerPage?.map(item => (
                                <Card 
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        : <h1 className="my-4 text-center">No images found</h1>
                }
            </div>
            <div className="flex gap-6 mt-4 justify-center">
                <button className="border p-2 rounded-lg" onClick={firstPage}>
                    <DoubleBackIcon />
                </button>
                <button className="border p-2 rounded-lg mr-4" onClick={previousPage}>
                    <BackIcon />
                </button>
                <button className="border p-2 rounded-lg ml-4" onClick={nextPage}>
                    <NextIcon />
                </button>
                <button className="border p-2 rounded-lg" onClick={lastPage}>
                    <DoubleNextIcon />
                </button>
            </div>
            <ProductDetail />
            <CheckOutSideMenu />
        </Layout>
    )
}