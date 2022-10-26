import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }


    }
    return (
        <div className='ProductsPage'>
            <div className='ProductHead'>
                <h3 className='ProductList'>Product List</h3>
                <input className='ProductSearch' type='text' placeholder='Search Product' onChange={searchHandle} />
            </div>
            <div className='Products'>
                {products.length > 0 ? products.map((item, index) =>
                    <div className='Product' key={item._id}>

                        <h1>{item.name}</h1>
                        <h2>{item.price}</h2>
                        <h2>{item.category}</h2>
                        <h2>{item.company}</h2>
                        <h2>
                            <button className='Delete' onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link className='Update'to={'/update/' + item._id}>Update</Link>

                        </h2>
                    </div>
                ) : <h1 className='ProductList' >No result Found</h1>}
            </div>
        </div>
    )
}

export default ProductList;