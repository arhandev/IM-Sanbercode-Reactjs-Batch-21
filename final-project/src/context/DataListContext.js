import React, { useState, createContext } from "react";

export const DataListContext = createContext();

export const DataListProvider = (props) => {
    const [filmData, setFilmData] = useState(null)
    const [gameData, setGameData] = useState(null)
    return (
        <DataListContext.Provider value={{film: [filmData, setFilmData], game: [gameData, setGameData]}}>
            {props.children}
        </DataListContext.Provider>
    )
}

