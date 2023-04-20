import { useState, useEffect } from 'react';
// import { ProductCollection } from './Products';

export function SetLoading() {
    const [loading, setLoading] = useState([]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => {
            setLoading(data);
        });
    }
    useEffect(() => {
        fetchCards();
    }, [])
    // return (
    //     <>
    //         {
    //             loading.map(() => (
    //                 <div class="card col-12 col-lg-3 col-sm-6 col-md-4 p-4" aria-hidden="true">
    //                     <img src="" class="card-img-top" alt="..." width={'100px'} />
    //                     <div class="card-body">
    //                         <h5 class="card-title placeholder-glow">
    //                             <span class="placeholder col-6"></span>
    //                         </h5>
    //                         <p class="card-text placeholder-glow">
    //                             <span class="placeholder col-7"></span>
    //                             <span class="placeholder col-4"></span>
    //                             <span class="placeholder col-4"></span>
    //                             <span class="placeholder col-6"></span>
    //                             <span class="placeholder col-8"></span>
    //                         </p>
    //                     </div>
    //                 </div>
    //             ))
    //         }
    //     </>
    // )
}