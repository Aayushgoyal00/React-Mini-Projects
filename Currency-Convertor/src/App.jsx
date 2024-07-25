import { useEffect, useState } from 'react';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './Component/Input_box';

function App() {
  const [amount, setAmount] = useState(1);
  const [value, setValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const conversionRates = useCurrencyInfo(fromCurrency);
  
  const options = conversionRates ? Object.keys(conversionRates) : [];

  const handleConversion = () => {
    if (conversionRates && conversionRates[toCurrency]) {
      const conversionRate = conversionRates[toCurrency];
      const conversionValue = conversionRate * amount;
      setValue(Number(conversionValue));
      console.log(Number(conversionValue));
    }
  };

  const swap=()=>{
    let temp=amount;
    setAmount(value)
    setValue(temp);
    let temp2=fromCurrency;
    setFromCurrency(toCurrency)
    setToCurrency(temp2)
  };

  // useEffect(() => {
  //   handleConversion();
  // }, [amount, fromCurrency, toCurrency, conversionRates]);

  return (
    <div className='flex flex-col space-y-4 justify-center items-center'>
      <h1>Currency Converter</h1>
      <div className='border p-2 rounded border-white flex flex-col items-center justify-center'>
        <InputBox 
          label="From" 
          amount={amount} 
          onAmountChange={setAmount} 
          selectCurrency={fromCurrency} 
          onCurrencyChange={setFromCurrency} 
          currencyOptions={options} 
        />
        <InputBox 
          label="To" 
          amount={value} 
          selectCurrency={toCurrency} 
          onCurrencyChange={setToCurrency} 
          currencyOptions={options} 
          readOnly={true} 
        />
        <button 
          type="submit" 
          className='mt-2' 
          onClick={handleConversion}
        >
          {`Convert ${fromCurrency.toUpperCase()} to ${toCurrency.toUpperCase()}`}
        </button>
        <button 
          type="submit" 
          className='mt-2' 
          onClick={swap}
        >
          {`Swap`}
        </button>

      </div>
    </div>
  );
}

export default App;
