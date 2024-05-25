
import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = (({ children }) => {

    const [ items, setItems ] = useState(null)
    const [ filteredItems, setFilteredItems ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ category, setCategory ] = useState('')
    const [ categoryList, setCategoryList ] = useState([])
    const [ search, setSearch ] = useState('')

    const [ isOpenCheckout, setIsOpenCheckout ] = useState(null)
    const [ cart, setCart ] = useState([])

    // Shopping Cart · Order
    const [ orders, setOrders ] = useState([])

    const [ isOpenProductDetail, setIsOpenProductDetail ] = useState(null)
    const [ productToShow, setProductToShow ] = useState({}) 
    
    // Get all data from API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setItems(data) 
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data => {
                setCategoryList(data)
            })
            .catch((error) => console.log(error))
    }, [])

    // Filter by category
    const filterByCategory = (items, category) => {
        return items?.filter(item => item.category.name.includes(category))
    }

    //Filter by search
    const filterBySearch = (items, search) => {
        return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    //Filter data by category or search
    useEffect(() => {
        setLoading(true)
        if(category === '') setFilteredItems(items)
        if(category) setFilteredItems(filterByCategory(items, category))
        if(search) setFilteredItems(filterBySearch(items, search))
        setLoading(false)
    }, [items, category, search])

    return (
        <ShoppingCartContext.Provider value={{
            filteredItems,
            loading,
            setCategory,
            categoryList,
            setSearch,
            isOpenProductDetail,
            setIsOpenProductDetail,
            productToShow,
            setProductToShow,
            cart, 
            setCart,
            isOpenCheckout,
            setIsOpenCheckout,
            orders,
            setOrders,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
})