import styles from './CartItem.module.css'

const CartItem = ({ name, price, quantity }) => {
    return (
        <div className={styles.cartItemContainer}>
            <h3 style={{ margin: '2rem' }}>{name}</h3>
            <p style={{ margin: '2rem' }}>Precio: ${price}</p>
            <p style={{ margin: '2rem' }}>Cantidad: {quantity}</p>
        </div>
    )
}

export default CartItem
