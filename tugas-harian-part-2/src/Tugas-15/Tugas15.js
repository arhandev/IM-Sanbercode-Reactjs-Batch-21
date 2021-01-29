import React, {useContext} from 'react'
import {ClickContext} from '../App'
import './tugas15.css'

function Tugas15() {
    const clickContext = useContext(ClickContext)

    return (
        <div className="tugas15">
            { clickContext.clickState ?
            <button className="button" onClick={() => clickContext.clickDispatch()}>
                Click Me to change the color to white theme
            </button>:
            <button className="button" onClick={() => clickContext.clickDispatch()}>
                Click Me to change the color to black theme
            </button>
            
            }
        </div>
    )
}

export default Tugas15
