import React, {useState, createContext} from 'react'

export const QuizContext = createContext();


function Context(props) {

    const [daftarBuku, setDaftarBuku] = useState(null)
    const [login, setLogin] = useState(false)

    return (
        <QuizContext.Provider value={{daftarBukuValue: [daftarBuku, setDaftarBuku], loginValue: [login, setLogin]}}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default Context
