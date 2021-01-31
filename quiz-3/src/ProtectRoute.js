import React, {useEffect, useContext, useState} from 'react'
import {QuizContext} from '../../../Context'


function ProtectRoute() {
    const {loginValue} = useContext(QuizContext)
    const [login, setLogin] = loginValue
    return (
        <div>
            
        </div>
    )
}

export default ProtectRoute
