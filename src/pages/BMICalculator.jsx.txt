import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async'
import AdPlaceholder from '../components/AdPlaceholder'

export default function BMICalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)

  const calculateBMI = () => {
    if(weight && height){
      const h = height/100
      setBmi((weight / (h*h)).toFixed(2))
    }
  }

  return (
    <div className="space-y-6">
      <Helmet>
        <title>BMI Calculator – QuickToolsPRO</title>
        <meta name="description" content="Calculate your Body Mass Index (BMI) quickly and easily."/>
      </Helmet>
      <div className="card space-y-3">
        <h2 className="text-xl font-bold">BMI Calculator</h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input type="number" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Weight (kg)" className="p-2 border rounded w-full md:w-1/2"/>
          <input type="number" value={height} onChange={e=>setHeight(e.target.value)} placeholder="Height (cm)" className="p-2 border rounded w-full md:w-1/2"/>
        </div>
        <button onClick={calculateBMI} className="px-4 py-2 bg-indigo-600 text-white rounded mt-2">Calculate</button>
        {bmi && <p className="mt-2 text-gray-700">Your BMI: {bmi}</p>}
      </div>
      <AdPlaceholder />
    </div>
  )
}
