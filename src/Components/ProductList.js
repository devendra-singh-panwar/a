import React from "react";
import Product from './Product';
function ProductList(props){
    return(
        props.productList.map((product,i)=>{
            return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} index={i}/>
        }
            )
    )
}
export default ProductList;