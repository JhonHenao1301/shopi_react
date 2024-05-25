import { useRoutes, BrowserRouter } from "react-router-dom"

import Home from "./Pages/Home"
import MyAccount from "./Pages/MyAccount"
import MyOrder from "./Pages/MyOrder"
import MyOrders from "./Pages/MyOrders"
import SignOut from "./Pages/SignOut"
import NotFound from "./Pages/NotFound"
import Navbar from "./components/Navbar"


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furniture', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-out', element: <SignOut /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <div className="flex flex-col gap-6">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
