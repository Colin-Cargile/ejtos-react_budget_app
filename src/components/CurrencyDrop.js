import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Currency = () => {
    const {currency} = useContext(AppContext)
    const {dispatch} = useContext(AppContext)

    const currencies = (current) => {
        switch(current){

            case "dollar":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: "$"
                });
                break;
            case "pound":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: "£"
                });
                break;
            case "euro":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: "€"
                });
                break;
            case "ruppee":
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: "₹"
                });
                break;
            default:
                return currency;
                
            
        }
    }

    return(
        <div className='alert alert-third'>
            <label for="currencies">Currency ({currency})</label>
            <select name="currencies" id="currencies" onChange={event=> currencies(event.target.value)}>
                <option value="dollar">$ Dollar</option>
                <option value="pound">£ Pound</option>
                <option value="euro">€ Euro</option>
                <option value="ruppee">₹ Ruppee</option>
            </select>
        </div>
    )
}
export default Currency;
