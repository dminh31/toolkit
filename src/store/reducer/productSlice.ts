import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [
        {
            id: 1,
            title: "Cola",
            price: 10,
            image:
                "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
        },
        {
            id: 3,
            title: "Sprite",
            price: 15,
            image: "https://images.ofix.com/product-image/s99509_2.jpg",
        },
        {
            id: 4,
            title: "Ayran",
            price: 31,
            image:
                "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
        },
        {
            id: 5,
            title: "Salgam",
            price: 40,
            image: "http://esenlik.com.tr//images/prod/5704.jpg",
        },
    ]
},
    reducers: {
        
    }
})
export default productSlice.reducer