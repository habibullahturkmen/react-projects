import React from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [photos, setPhotos] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPhotos(data)
            });
    }, []);

    const toggleFavorite = (id) => {
        const updatedArray = [...photos];
        for (const photo of updatedArray) {
            if (photo.id === id) {
                photo.isFavorite = !photo.isFavorite;
            }
        }
        setPhotos(updatedArray);
    };

    const addToCart = (image) => {
        setCartItems(prevItems => [...prevItems, image]);
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context};
