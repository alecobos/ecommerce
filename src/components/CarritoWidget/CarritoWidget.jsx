import cart from './assets/cart.svg'
import './CarritoWidget.css'

const CarritoWidget = () => {
    return (
        <span>
            <img src={cart} alt='carrito' className='carrito' />
            0
        </span>


    )
}

export default CarritoWidget