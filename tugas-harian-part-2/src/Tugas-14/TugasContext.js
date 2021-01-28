import React, { useState, createContext } from 'react'

export const TugasContext = createContext();

function TugasProvider(props) {

    const [daftarBuah, setDaftarBuah] = useState(null)
    const [input, setInput] = useState({input: {name: '', price: '', weight: ''}});
    const [indexNumber, setIndexNumber] = useState(null)
 

    return (
        <TugasContext.Provider value={{daftarBuahValue: [daftarBuah, setDaftarBuah], inputValue: [input, setInput], indexNumber:[indexNumber, setIndexNumber]}}>
            {props.children}
        </TugasContext.Provider>
    )
}

export default TugasProvider
