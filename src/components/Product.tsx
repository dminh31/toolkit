import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/reducer/cartSlice';
import { RootState } from '../store/store';
export interface Product {
    id: number;
    title: string
    price: number;
    image: string
}

export default function Product() {
    const products = useSelector((state: RootState) => {
        return state.productSlice.products
    })
    // const [products, setProducts] = useState<Product[]>([
    //     {
    //         id: 1,
    //         title: "Cola",
    //         price: 10,
    //         image:
    //             "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "Sprite",
    //         price: 15,
    //         image: "https://images.ofix.com/product-image/s99509_2.jpg",
    //     },
    //     {
    //         id: 4,
    //         title: "Ayran",
    //         price: 31,
    //         image:
    //             "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    //     },
    //     {
    //         id: 5,
    //         title: "Salgam",
    //         price: 40,
    //         image: "http://esenlik.com.tr//images/prod/5704.jpg",
    //     },
    // ]);
    const dispatch = useDispatch()
    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item))
    }
    return (
        <div style={{ display: "flex" }}>
            <FaShoppingCart size={30} />
            {products.map((item, index) => {
                return <div key={index}>
                    <img src={item.image} alt="" width={300} height={300} />
                    <p>Sản phẩm: {item.title}</p>
                    <p>Giá: {item.price}</p>
                    <button onClick={() => handleAddToCart(item)}>Thêm vào giỏ hàng</button>
                </div>
            })}
        </div>
    )
}
