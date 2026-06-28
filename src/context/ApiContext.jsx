// import axios from "axios";
// import React , { createContext, useEffect, useState } from "react";

// export const apiContext = createContext()

// export const ApiContextProvider = ({children})=>{

//     const fakeApiUrl = 'https://fakestoreapi.com/products'

//   const [ products , setProducts ] = useState([])

//   async function getFakeStoreApi(){
//     let {data} = await axios.get(fakeApiUrl)
//     setProducts(data)
//   }
//   useEffect(()=>{
//     getFakeStoreApi()
    
//   }, [])
  
//   //  -----------------cart

//   const allData = products


//     return(
//         <apiContext.Provider value={{ products , allData }}>
//             {children}
//         </apiContext.Provider>
//     )
// }