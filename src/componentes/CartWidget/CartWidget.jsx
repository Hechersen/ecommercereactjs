import './CartWidget.module.css';
import cart from './assets/cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/context';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const { totalQuantity } = useContext(CartContext)

    return (
<Link to='/Cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
<img className='CartImg' src={cart} alt='cart-widget' />
{ totalQuantity }
</Link>
        
    )
}

export default CartWidget