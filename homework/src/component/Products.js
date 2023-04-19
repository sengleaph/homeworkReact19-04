import { useEffect, useState } from "react"


export const ProductCollection = () =>{
    const [products , setProducts] = useState([])
    const [loading, setloading] = useState([])
    const fetchProducts = () => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(resp => resp.json())
        .then(resp => {
            setProducts(resp)
            setloading(false)
            console.log(products)

        }
            )
    }
    useEffect(() => {
        fetchProducts()
     },[])
    // return (
    //     products.length>0 && <>
    //     {
    //         products.map(product=>(
    //             <h1 key={product.id}>{product.title}</h1>
    //         ))
    //     }
    //     </>
    // )
    return loading ? <loading /> : products.map((products => (
        <div class="card-group">
        <div class="card1">
            <img src={products.images} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{products.title}</h5>
            <p class="card-text">{products.creationAt}</p>
            <p class="card-text"><small class="text-body-secondary">{products.price}</small></p>
            </div>
        </div>
        {/* <div class="card">
            <img src={products.images} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{products.title}</h5>
            <p class="card-text">{products.creationAt}</p>
            <p class="card-text"><small class="text-body-secondary">{products.price}</small></p>
            </div>
        </div>
        <div class="card">
            <img src={products.images} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{products.title}</h5>
            <p class="card-text">{products.creationAt}</p>
            <p class="card-text"><small class="text-body-secondary">{products.price}</small></p>
            </div>
        </div>
        <div class="card">
            <img src={products.images} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{products.title}</h5>
            <p class="card-text">{products.creationAt}</p>
            <p class="card-text"><small class="text-body-secondary">{products.price}</small></p>
            </div>
        </div>
        <div class="card">
            <img src={products.images} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{products.title}</h5>
            <p class="card-text">{products.creationAt}</p>
            <p class="card-text"><small class="text-body-secondary">{products.price}</small></p>
            </div>
        </div> */}
        </div>
    )
       
    ))
    // function WaitingData(){
    //     return <h1 style={{color:'red'}}>waiting true love xd....</h1>
    // }
    
    

}
