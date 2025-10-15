import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet-async'
import AdPlaceholder from '../components/AdPlaceholder'
import axios from 'axios'

export default function CurrencyConverter() {
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [amount, setAmount] = useState(1)
  const [result, setResult] = useState(null)

  const convert = async () => {
    try{
      const res = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
      setResult(res.data.result.toFixed(2))
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Currency Converter – QuickToolsPRO</title>
        <meta name="description" content="Convert currencies instantly with free live exchange rates."/>
      </Helmet>
      <div className="card space-y-3">
        <h2 className="text-xl font-bold">Currency Converter</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} className="p-2 border rounded w-full md:w-1/3"/>
          <input type="text" value={from} onChange={e=>setFrom(e.target.value.toUpperCase())} placeholder="From (USD)" className="p-2 border rounded w-full md:w-1/3"/>
          <input type="text" value={to} onChange={e=>setTo(e.target.value.toUpperCase())} placeholder="To (EUR)" className="p-2 border rounded w-full md:w-1/3"/>
        </div>
        <button onClick={convert} className="px-4 py-2 bg-indigo-600 text-white rounded mt-2">Convert</button>
        {result && <p className="mt-2 text-gray-700">{amount} {from} = {result} {to}</p>}
      </div>
      <AdPlaceholder />
    </div>
  )
}
