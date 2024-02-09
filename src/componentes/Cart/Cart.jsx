import './Cart.module.css'
import { useContext } from 'react' 
import { CartContext } from '../../context/context' 
import CartItem from '../CartItem/CartItem.jsx'
import { Link } from 'react-router-dom'
import App from '../../App.jsx'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option' >Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} { ...p } /> ) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button' >Limpiar Carrito</button>
            <Link to='/checkout' className='Option' >Checkout</Link>
        </div>
    )
}

export default Cart