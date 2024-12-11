import React from "react";
import trashCan from '../../../../public/trash-can.png';


const CartItem = ({ item, clicked, onClick, stock }) => {
    return (
        <div className="cart-item">
            <div className="cart-item-header">
                <h3 className="cart-item-name">{item.name}</h3>
                <div className="cart-item-content">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-stock-price-container">
                    <p className="cart-item-price">{item.price} kr</p>
                    <div className="stock-message">
                        <p>{stock} left in stock</p>
                    </div>
                    </div>
                    <img
                        src={trashCan}
                        alt="Remove item"
                        className={`cart-item-trash-can ${clicked === item.productId ? 'clicked' : ''}`}
                        onClick={() => onClick(item.productId)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
