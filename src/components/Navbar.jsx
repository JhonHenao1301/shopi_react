import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon, MenuIcon } from "../assets/Icons/Icons";
import { ShoppingCartContext } from "../Context";

export default function Navbar () {
    const [ open, setOpen ] = useState()
    const { cart, categoryList, setCategory, setIsOpenCheckout } = useContext(ShoppingCartContext)

    // const typesProducts = [
    //     {name:'All', category: ''},
    //     {name:'Electronics', category: 'Electronics'},
    //     {name:'Clothes', category: 'Clothes'},
    //     {name:'Furniture', category: 'Forniture'},
    //     {name:'Shoes', category: 'Shoes'}
    // ]

    const otherActions = [
        {name:'My Orders', link:'/my-orders'},
        {name:'My Account', link:'/my-account'},
        {name:'Sign out', link: '/sign-out'}
    ]

    const handleChange = (e) => {
        setCategory(e.target.value)
    }

    return ( 
        <nav className="bg-gray-5 top-0 flex justify-between items-center p-4">
            <div className="navbar-section">
                <h2 className="font-bold">
                    <Link to="/">
                        <span>Shopi</span>
                    </Link>
                </h2>
                
                <select 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" 
                    onChange={handleChange}
                >
                    {
                        categoryList?.map((name, index) => (
                            <option key={index} value={name}>
                                { name }
                            </option>
                        ))
                    }
                </select>
            </div>
            <div 
                className='text-3xl cursor-pointer bg-red lg:hidden'
            >
                <button onClick={()=>setOpen(!open)}>
                    <MenuIcon name={open ? 'close':'menu'} />
                </button>
            </div>
            <ul className={`navbar-ul ${open ? 'top-16 ': 'top-[-490px]'}`}>
                <li>
                    <span className="text-gray-10">j.henao@gmail.com</span>
                </li>
                {
                    otherActions.map(({name, link}) => (
                        <li key={name}>
                            <Link to={link} className="navbar-link">
                                { name }
                            </Link >
                        </li>
                    ))
                }
                <li className="icon" >
                    <button onClick={() => setIsOpenCheckout(true)}>
                        <CartIcon />
                    </button>
                    <span className="icon-number">{ cart.length }</span>
                </li>
            </ul>
        </nav>
    )
}