import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/Product";
interface ProductInCart {
    id: number;
    title: string
    price: number;
    image: string;
    quantity: number 
}

interface State{
    cart: ProductInCart[]
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state:State, action: PayloadAction<Product>) => {
            const index = state.cart.findIndex((item) => item.id === action.payload.id )
            if(index > -1){
                state.cart[index].quantity += 1
            }else{
                state.cart.push({...action.payload, quantity: 1})
            }
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer