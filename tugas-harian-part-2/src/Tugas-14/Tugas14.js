import React from 'react'
import Table from './Table'
import Form from './Form'
import TableEdit from './TableEdit'
import TugasContext from './TugasContext'
import './tugas14.css'

function Tugas14() {
    return (
        <div className="tugas14">
            <TugasContext>
                <Table/>
                <TableEdit/>
                <Form/>
            </TugasContext>
        </div>
    )
}

export default Tugas14
