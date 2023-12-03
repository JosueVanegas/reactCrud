import axios from 'axios'
import { useEffect } from 'react'
function ProductsPage(){
    useEffect(()=>{
        axios.get("")
        .then(res=> console.log(res))
        .catch(err=> console.log(err))
    },[])
    return(
        <>
         <h1 className="text-white">products page</h1>
        </>
    )
}
export default ProductsPage