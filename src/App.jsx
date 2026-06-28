import React, {useEffect , useState , lazy , Suspense, useContext} from 'react'
// import React, {lazy} from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import Layout from './components/layout/layout'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import axios from 'axios'
import Cart from './components/pages/Cart/Cart'
import Contact from './components/pages/Contact/Contact'
import FakeApi from './components/pages/Home/components/FakeApi/FakeApi'
import Swal from 'sweetalert2'
import { applicationModeContext } from './context/ApplicationMode'
import Register from './components/pages/Home/components/Auth/Register'
import Login from './components/pages/Home/components/Auth/Login'
const Layout = lazy(()=> import('./components/layout/Layout'))

function App() {

  const { mode } = useContext(applicationModeContext)
  // ------------statrt API------

  
  const fakeApiUrl = 'https://fakestoreapi.com/products'

  const [ products , setProducts ] = useState([])

  async function getFakeStoreApi(){
    let {data} = await axios.get(fakeApiUrl)
    setProducts(data)
  }
  useEffect(()=>{
    getFakeStoreApi()
    
  }, [])
  
  //  -----------------cart

  const allData = products

  const [cartTitles , setCartTitles] = useState([])

  useEffect(()=>{
    if( localStorage.getItem('cartData')){
      setCartTitles(JSON.parse(localStorage.getItem('cartData')))
    }else{
      setCartTitles([])
    }
  } , [])

   function addToCart(title){
    const selectedProduct = cartTitles.find(el => Object.keys(el)[0] === title)

    if (!selectedProduct){

      Swal.fire({
  title: `Succeffuly Add Product <br/><span class='text-primary'>${title}</span>`,
  text: "You clicked the button!",
  icon: "success" ,
  showConfirmButton: false ,
  timer : 1500

});
      const proObj = { [title] : 1}
      setCartTitles([...cartTitles , proObj])

      const findedObjOfFakeApi = products.find(el => el.title === title )
      if(findedObjOfFakeApi){
        findedObjOfFakeApi.amount = 1
      }

    }else{
      console.log(false);
      const findedObjOfFakeApi = products.find(el => el.title === title )
      if(findedObjOfFakeApi){
        ++selectedProduct[title]
        findedObjOfFakeApi.amount = selectedProduct[title]
      }
      setCartTitles([...cartTitles])
    }
   }

   function deleteProduct(title){

    const filterArry = cartTitles.filter(el => Object.keys(el)[0] !== title )
    setCartTitles (filterArry)
   }

   function inccreaseProduct(title){
    const selectedProduct = cartTitles.find(el => Object.keys(el)[0] === title)
    if (selectedProduct){
      const updateCart = cartTitles.map((el) =>{
        if(Object.keys(el)[0] === title){
          return {[title]: el[title]+ 1}
        }
        return el
      })
      setCartTitles(updateCart)
    }
    else{
      const newProduct = {[title] : 1}
      setCartTitles([...cartTitles , newProduct])
    }
   }

   function decreaseProduct(title){
    const selectedProduct = cartTitles.find(el => Object.keys(el)[0] === title)
    if(selectedProduct){
      const updateCart = cartTitles.map((el) =>{
        if(Object.keys(el)[0] === title){
          const newQty = el[title] - 1
          if (newQty  < 1) return null
          return{[title] : newQty}
        }
        return el
      })
      .filter((el) => el !== null)
      setCartTitles(updateCart)
    }
   }
   useEffect(()=>{
    localStorage.setItem('cartData' , JSON.stringify(cartTitles))
   } , [cartTitles])

  const router = createBrowserRouter([
    {
      path:'' ,
      element: <Layout cartTitles={cartTitles}/>,
      children:[
        {index: 'true' , element:<Home  addToCart={addToCart} cartTitles={cartTitles} products={products}/>} ,
        {path:'about' ,element:<About />},
        {path:'contact' , element:<Contact />},
        {path:'fakeStoreApi' , element:<FakeApi products={products} cartTitles={cartTitles} addToCart={addToCart}/>} ,
        {path:'fakeStoreApi/products/:id' , element:<FakeApi />} ,
        {path:'cart' , element:<Cart  deleteProduct={deleteProduct} allData={allData} cartTitles={cartTitles} decreaseProduct={decreaseProduct} inccreaseProduct={inccreaseProduct}/>},
        {path:'register' , element:<Register />},
        {path:'login' , element:<Login />},
        
      ]
    }])
  

  return <RouterProvider router={router} />
}

export default App