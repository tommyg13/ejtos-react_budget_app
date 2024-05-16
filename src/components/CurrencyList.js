import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = (props) => {
    const { dispatch,currency} = useContext(AppContext);


    const changeCurrency = (e) => {
        let newCurrency = e.target.value
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });

    }
console.log(currency)
    return (
        <div className='alert alert-secondary'> Currency ({currency}) {
            <select name="currencies" id="currencies" onChange={changeCurrency} value={currency}>
              <option value="£">Pound</option>
              <option value="₹">Rupee</option>
              <option value="€">Euro</option>
              <option value="$">Dollar</option>
            </select>	
            }	
          </div>
    );
};

export default CurrencyList;