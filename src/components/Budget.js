import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Budget = () => {
    const {budget} = useContext(AppContext)
    return(
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                step="10"
                max="20000"
                id='budget'
                value={budget}
                onChange={(event) => budget(event.target.value)}>
            </input>
        </div>
    )
}
export default Budget;
