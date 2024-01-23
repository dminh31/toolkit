import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export default function Header() {
  const cart = useSelector((state: RootState) => {
    return state.cartSlice.cart
  })
  return (
    <div>
      <h1>Cart: {cart.length}</h1>
    </div>
  )
}
