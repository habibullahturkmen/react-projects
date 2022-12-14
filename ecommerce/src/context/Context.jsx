import React from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
    const [photos, setPhotos] = React.useState([]);
    const [isFavorited, setIsFavorited] = React.useState(false);

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
    }

    return (
        <Context.Provider value={{allPhotos: photos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    );
}

export { ContextProvider, Context}
