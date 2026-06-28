// import React , {Children, createContext, useEffect, useState} from "react";
// import Swal from "sweetalert2";

// export const cartContext = createContext()
// export const CartContextProvider = ( { Children } )=>{

//      const [cartTitles , setCartTitles] = useState([])
    
//       useEffect(()=>{
//         if( localStorage.getItem('cartData')){
//           setCartTitles(JSON.parse(localStorage.getItem('cartData')))
//         }else{
//           setCartTitles([])
//         }
//       } , [])
    
//        function addToCart(title){
//         const selectedProduct = cartTitles.find(el => Object.keys(el)[0] === title)
    
//         if (!selectedProduct){
    
//           Swal.fire({
//       title: `Succeffuly Add Product <br/><span class='text-primary'>${title}</span>`,
//       text: "You clicked the button!",
//       icon: "success" ,
//       showConfirmButton: false ,
//       timer : 1500
    
//     });
//           const proObj = { [title] : 1}
//           setCartTitles([...cartTitles , proObj])
    
//           const findedObjOfFakeApi = products.find(el => el.title === title )
//           if(findedObjOfFakeApi){
//             findedObjOfFakeApi.amount = 1
//           }
    
//         }else{
//           console.log(false);
//           const findedObjOfFakeApi = products.find(el => el.title === title )
//           if(findedObjOfFakeApi){
//             ++selectedProduct[title]
//             findedObjOfFakeApi.amount = selectedProduct[title]
//           }
//           setCartTitles([...cartTitles])
//         }
//        }
    
//        function deleteProduct(title){
    
//         const filterArry = cartTitles.filter(el => Object.keys(el)[0] !== title )
//         setCartTitles (filterArry)
//        }
    
//        function inccreaseProduct(title){
//         const selectedProduct = cartTitles.find(el => Object.keys(el)[0] === title)
//         if (selectedProduct){
//           const updateCart = cartTitles.map((el) =>{
//             if(Object.keys(el)[0] === title){
//               return {[title]: el[title]+ 1}
//             }
//             return el
//           })
//           setCartTitles(updateCart)
//         }
//         else{
//           const newProduct = {[title] : 1}
//           setCartTitles([...cartTitles , newProduct])
//         }
//        }
    
//        function decreaseProduct(title){
//         const selectedProduct = cartTitles.find(el => Object.keys(el)[0] === title)
//         if(selectedProduct){
//           const updateCart = cartTitles.map((el) =>{
//             if(Object.keys(el)[0] === title){
//               const newQty = el[title] - 1
//               if (newQty  < 1) return null
//               return{[title] : newQty}
//             }
//             return el
//           })
//           .filter((el) => el !== null)
//           setCartTitles(updateCart)
//         }
//        }
//        useEffect(()=>{
//         localStorage.setItem('cartData' , JSON.stringify(cartTitles))
//        } , [cartTitles])

//     return 
//     <cartContext.Provider value={{cartTitles , addToCart , deleteProduct}}>
//         {Children}
//     </cartContext.Provider>
// }