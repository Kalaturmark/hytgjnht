import React from 'react';
import './App.css';


const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Магазин товарів</h1>
        </header>
    );
};


const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div style={cardStyle}>
            <h2>{product.name}</h2>
            <p>Цена: ${product.price}</p>
            <button style={buttonStyle} onClick={() => onAddToCart(product)}>
                Додати в корзину
            </button>
        </div>
    );
};


const App = () => {
    const products = [
        { id: 1, name: 'Товар 1', price: 29.99 },
        { id: 2, name: 'Товар 2', price: 49.99 },
        { id: 3, name: 'Товар 3', price: 19.99 },
    ];

    const handleAddToCart = (product) => {
        alert(`Вы додали ${product.name} в корзину!`);
    };

    return (
        <div style={appStyle}>
            <Header />
            <div style={productsContainerStyle}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
};

// Стили для компонентов
const appStyle = {
    textAlign: 'center',
    padding: '20px',
};

const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
};

const productsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
};

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    margin: '10px',
    width: '200px',
    textAlign: 'left',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
};

export default App;
