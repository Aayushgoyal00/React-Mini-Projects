import  { React,useId } from 'react'

function InputBox({
        label,
        amount,
        onAmountChange,
        selectCurrency="usd",
        onCurrencyChange,
        currencyOptions=[],
        readOnly=false,
    }
)
 
{
    const amountId=useId();
  return (
    <form className='flex flex-wrap space-x-2 p-2 justify-around border rounded-xl'>
        <div className='space-x-2'>
        <label htmlFor={amountId}>{label}</label>
        <input type="number" value={amount} readOnly={readOnly}  id={amountId} min={0} 
        onChange={(e)=>onAmountChange&& onAmountChange(Number(e.target.value))
        } />
        </div>
        <div>
        {/* <label htmlFor="from">Currency Type</label> */}
        <select value={selectCurrency}
        onChange={(e)=>{ onCurrencyChange && onCurrencyChange(e.target.value)
        }}>
            {
                currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))
            }
        </select>
        </div>

    </form>
  )
}

export default InputBox