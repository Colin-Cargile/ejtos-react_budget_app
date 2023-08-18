import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Budget = () => {
    const {budget} = useContext(AppContext)
    const {currency} = useContext(AppContext)
    const {dispatch} = useContext(AppContext)
    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=>{
        return (total += item.cost);
    },0)

    const allocation = (budg)=>{
        if(budg < totalExpenses) return alert("The budget cannot be less than what has been spent");
        if(budg >= 20000) return alert("The budget cannot exceed 20,000. We dont have that kind of cash");

        dispatch({
            type: 'SET_BUDGET',
            payload: budg
        })
    }

    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                step="10"
                id='budget'
                value={budget}
                onChange={event=> allocation(event.target.value)}>
            </input>
        </div>
    )
}
export default Budget;
